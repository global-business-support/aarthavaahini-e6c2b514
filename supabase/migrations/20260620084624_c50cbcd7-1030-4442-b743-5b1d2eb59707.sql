
-- 1. Add columns to existing tables
ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS rejection_reason TEXT,
  ADD COLUMN IF NOT EXISTS converted_customer_id UUID REFERENCES public.customers(id) ON DELETE SET NULL;

ALTER TABLE public.loan_cases
  ADD COLUMN IF NOT EXISTS requested_amount NUMERIC,
  ADD COLUMN IF NOT EXISTS tenure_months INTEGER,
  ADD COLUMN IF NOT EXISTS interest_rate NUMERIC,
  ADD COLUMN IF NOT EXISTS notes TEXT,
  ADD COLUMN IF NOT EXISTS documents_checklist JSONB DEFAULT '{}'::jsonb,
  ADD COLUMN IF NOT EXISTS lead_id UUID REFERENCES public.leads(id) ON DELETE SET NULL;

ALTER TABLE public.tasks
  ADD COLUMN IF NOT EXISTS assigned_employee_id UUID,
  ADD COLUMN IF NOT EXISTS assigned_partner_id UUID REFERENCES public.partners(id) ON DELETE SET NULL;

-- 2. employees table
CREATE TABLE IF NOT EXISTS public.employees (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  role TEXT,
  department TEXT,
  status TEXT NOT NULL DEFAULT 'active',
  notes TEXT,
  created_by UUID,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.employees TO authenticated;
GRANT ALL ON public.employees TO service_role;

ALTER TABLE public.employees ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Staff can manage employees"
  ON public.employees FOR ALL TO authenticated
  USING (public.is_staff(auth.uid()))
  WITH CHECK (public.is_staff(auth.uid()));

CREATE TRIGGER trg_employees_updated BEFORE UPDATE ON public.employees
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 3. notifications table
CREATE TABLE IF NOT EXISTS public.notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID,
  audience TEXT NOT NULL DEFAULT 'staff',
  title TEXT NOT NULL,
  message TEXT,
  type TEXT NOT NULL DEFAULT 'info',
  link TEXT,
  is_read BOOLEAN NOT NULL DEFAULT false,
  metadata JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.notifications TO authenticated;
GRANT ALL ON public.notifications TO service_role;

ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Read notifications addressed to me or staff broadcast"
  ON public.notifications FOR SELECT TO authenticated
  USING (
    user_id = auth.uid()
    OR (audience = 'staff' AND public.is_staff(auth.uid()))
  );

CREATE POLICY "Staff can insert notifications"
  ON public.notifications FOR INSERT TO authenticated
  WITH CHECK (public.is_staff(auth.uid()));

CREATE POLICY "Mark notifications as read"
  ON public.notifications FOR UPDATE TO authenticated
  USING (
    user_id = auth.uid()
    OR (audience = 'staff' AND public.is_staff(auth.uid()))
  );

ALTER PUBLICATION supabase_realtime ADD TABLE public.notifications;
ALTER TABLE public.notifications REPLICA IDENTITY FULL;

-- 4. Trigger: notify staff on new lead
CREATE OR REPLACE FUNCTION public.notify_new_lead()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.notifications (audience, title, message, type, link, metadata)
  VALUES (
    'staff',
    'New lead: ' || NEW.full_name,
    COALESCE(NEW.product_type, 'inquiry') || ' · ' || COALESCE(NEW.phone, ''),
    'lead',
    '/crm/leads',
    jsonb_build_object('lead_id', NEW.id, 'product_type', NEW.product_type)
  );
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_notify_new_lead ON public.leads;
CREATE TRIGGER trg_notify_new_lead AFTER INSERT ON public.leads
  FOR EACH ROW EXECUTE FUNCTION public.notify_new_lead();

-- 5. Trigger: notify on lead status change (approved/rejected)
CREATE OR REPLACE FUNCTION public.notify_lead_status()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NEW.status IS DISTINCT FROM OLD.status AND NEW.status IN ('Approved','Rejected','Disbursed') THEN
    INSERT INTO public.notifications (audience, title, message, type, link, metadata)
    VALUES (
      'staff',
      'Lead ' || NEW.status || ': ' || NEW.full_name,
      COALESCE(NEW.product_type, '') || CASE WHEN NEW.status = 'Rejected' AND NEW.rejection_reason IS NOT NULL THEN ' · ' || NEW.rejection_reason ELSE '' END,
      lower(NEW.status),
      '/crm/leads',
      jsonb_build_object('lead_id', NEW.id, 'status', NEW.status)
    );
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_notify_lead_status ON public.leads;
CREATE TRIGGER trg_notify_lead_status AFTER UPDATE ON public.leads
  FOR EACH ROW EXECUTE FUNCTION public.notify_lead_status();
