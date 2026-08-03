
-- -- Roles enum + table
-- CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- CREATE TABLE public.profiles (
--   id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
--   full_name TEXT,
--   phone TEXT,
--   email TEXT,
--   created_at TIMESTAMPTZ NOT NULL DEFAULT now()
-- );
-- ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- CREATE TABLE public.user_roles (
--   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
--   user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
--   role public.app_role NOT NULL,
--   UNIQUE(user_id, role)
-- );
-- ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
-- RETURNS BOOLEAN
-- LANGUAGE SQL STABLE SECURITY DEFINER SET search_path = public
-- AS $$
--   SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
-- $$;

-- -- Leads table (customer submissions from all forms)
-- CREATE TABLE public.leads (
--   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
--   full_name TEXT NOT NULL,
--   email TEXT,
--   phone TEXT NOT NULL,
--   product_type TEXT NOT NULL,  -- loan | insurance | mutual_fund | banking | contact | cibil
--   product_name TEXT,
--   amount NUMERIC,
--   message TEXT,
--   status TEXT NOT NULL DEFAULT 'new',
--   created_at TIMESTAMPTZ NOT NULL DEFAULT now()
-- );
-- ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- -- Auto-create profile + auto-assign role on signup
-- CREATE OR REPLACE FUNCTION public.handle_new_user()
-- RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
-- AS $$
-- BEGIN
--   INSERT INTO public.profiles (id, email, full_name, phone)
--   VALUES (
--     NEW.id,
--     NEW.email,
--     COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
--     COALESCE(NEW.raw_user_meta_data->>'phone', '')
--   );

--   IF LOWER(NEW.email) = 'jeet0731@gmail.com' THEN
--     INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'admin');
--   ELSE
--     INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'user');
--   END IF;

--   RETURN NEW;
-- END;
-- $$;

-- CREATE TRIGGER on_auth_user_created
-- AFTER INSERT ON auth.users
-- FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- -- RLS: profiles
-- CREATE POLICY "Own profile select" ON public.profiles FOR SELECT USING (auth.uid() = id);
-- CREATE POLICY "Own profile update" ON public.profiles FOR UPDATE USING (auth.uid() = id);
-- CREATE POLICY "Admin reads all profiles" ON public.profiles FOR SELECT USING (public.has_role(auth.uid(), 'admin'));

-- -- RLS: user_roles
-- CREATE POLICY "Own roles select" ON public.user_roles FOR SELECT USING (auth.uid() = user_id);
-- CREATE POLICY "Admin reads all roles" ON public.user_roles FOR SELECT USING (public.has_role(auth.uid(), 'admin'));

-- -- RLS: leads — anyone can insert (public lead capture), only admin can read/update
-- CREATE POLICY "Anyone can submit a lead" ON public.leads FOR INSERT TO anon, authenticated WITH CHECK (true);
-- CREATE POLICY "Admin reads all leads" ON public.leads FOR SELECT USING (public.has_role(auth.uid(), 'admin'));
-- CREATE POLICY "Admin updates leads" ON public.leads FOR UPDATE USING (public.has_role(auth.uid(), 'admin'));
-- ============================================================================
-- CRM Workflow Migration
-- Brings the DB in line with leads.tsx and implements the workflow from the
-- handwritten notes: Generate Lead (Loan/MF/Insurance) -> Approve/Reject ->
-- Customers + product-specific case tables, staff hierarchy, partner leads.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1. Extend app_role for basic hierarchy (note #4)
--    admin   -> sees everything
--    manager -> sees everything assigned to their team (kept simple here:
--               treated like admin for read, cannot manage roles)
--    user    -> sees only what is assigned_to them, or leads they submitted
--               as a partner
-- ----------------------------------------------------------------------------
ALTER TYPE public.app_role ADD VALUE IF NOT EXISTS 'manager';

-- ----------------------------------------------------------------------------
-- 2. Extend leads table with all columns leads.tsx already expects
-- ----------------------------------------------------------------------------
ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS lead_name TEXT,
  ADD COLUMN IF NOT EXISTS pan TEXT,
  ADD COLUMN IF NOT EXISTS aadhaar TEXT,
  ADD COLUMN IF NOT EXISTS city TEXT,
  ADD COLUMN IF NOT EXISTS state TEXT,
  ADD COLUMN IF NOT EXISTS lead_source TEXT,
  -- FIX (note #1/#2): store which partner referred the lead
  ADD COLUMN IF NOT EXISTS partner_name TEXT,
  ADD COLUMN IF NOT EXISTS assigned_to UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS cibil_score INTEGER,
  ADD COLUMN IF NOT EXISTS loan_type TEXT,
  ADD COLUMN IF NOT EXISTS loan_sub_type TEXT,
  ADD COLUMN IF NOT EXISTS loan_amount NUMERIC,
  ADD COLUMN IF NOT EXISTS bank_name TEXT,
  ADD COLUMN IF NOT EXISTS rejection_reason TEXT,
  ADD COLUMN IF NOT EXISTS converted_customer_id UUID;

-- Backfill lead_name from full_name so old rows keep showing a name
UPDATE public.leads SET lead_name = full_name WHERE lead_name IS NULL;

-- ----------------------------------------------------------------------------
-- 3. Customers table (created when a lead is Approved)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.customers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES public.leads(id) ON DELETE SET NULL,
  customer_name TEXT NOT NULL,
  mobile TEXT NOT NULL,
  email TEXT,
  pan TEXT,
  address TEXT,
  loan_type TEXT,
  loan_sub_type TEXT,
  loan_amount NUMERIC,
  cibil_score INTEGER,
  bank_name TEXT,
  stage TEXT NOT NULL DEFAULT 'Docs Pending',
  note TEXT,
  assigned_to UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.leads
  ADD CONSTRAINT leads_converted_customer_id_fkey
  FOREIGN KEY (converted_customer_id) REFERENCES public.customers(id) ON DELETE SET NULL;

ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;

-- ----------------------------------------------------------------------------
-- 4. Loan cases (already referenced in leads.tsx)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.loan_cases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES public.customers(id) ON DELETE CASCADE,
  lead_id UUID REFERENCES public.leads(id) ON DELETE SET NULL,
  loan_type TEXT,
  loan_amount NUMERIC,
  requested_amount NUMERIC,
  sanction_amount NUMERIC,
  tenure_months INTEGER,
  interest_rate NUMERIC,
  lender_name TEXT,
  stage TEXT NOT NULL DEFAULT 'Under Process', -- Under Process, Sanction, Disbursed, Closed
  notes TEXT,
  documents_checklist JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.loan_cases ENABLE ROW LEVEL SECURITY;

-- ----------------------------------------------------------------------------
-- 5. Mutual Fund cases (note #8: MF-type leads should also show in MF tab)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.mf_cases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES public.customers(id) ON DELETE CASCADE,
  lead_id UUID REFERENCES public.leads(id) ON DELETE SET NULL,
  fund_name TEXT,
  investment_type TEXT, -- SIP / Lumpsum
  amount NUMERIC,
  frequency TEXT, -- Monthly / Quarterly / One-time
  stage TEXT NOT NULL DEFAULT 'Under Process',
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.mf_cases ENABLE ROW LEVEL SECURITY;

-- ----------------------------------------------------------------------------
-- 6. Insurance cases (note #8: Insurance-type leads should show in Insurance tab)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.insurance_cases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES public.customers(id) ON DELETE CASCADE,
  lead_id UUID REFERENCES public.leads(id) ON DELETE SET NULL,
  policy_type TEXT, -- Life / Health / Motor / etc
  insurer_name TEXT,
  sum_assured NUMERIC,
  premium_amount NUMERIC,
  premium_frequency TEXT,
  stage TEXT NOT NULL DEFAULT 'Under Process',
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.insurance_cases ENABLE ROW LEVEL SECURITY;

-- ----------------------------------------------------------------------------
-- 7. Activities / notes table (already referenced in leads.tsx)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.activities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES public.leads(id) ON DELETE CASCADE,
  customer_id UUID REFERENCES public.customers(id) ON DELETE CASCADE,
  activity_type TEXT NOT NULL, -- note, call, whatsapp, status_change...
  notes TEXT,
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.activities ENABLE ROW LEVEL SECURITY;

-- ----------------------------------------------------------------------------
-- 8. RLS: hierarchy / permissions (note #4)
--    - admin & manager: full read/write on leads, customers, cases, activities
--    - user (staff): read/write only rows assigned_to them
--    - partner-sourced leads: only visible to admin/manager or the staff
--      the lead is assigned_to (mirrors the partnerVisible logic already in
--      leads.tsx, enforced here at the DB level too)
-- ----------------------------------------------------------------------------

-- Replace the old blanket "Admin reads all leads" policies with role-aware ones
DROP POLICY IF EXISTS "Admin reads all leads" ON public.leads;
DROP POLICY IF EXISTS "Admin updates leads" ON public.leads;

CREATE POLICY "Admin/manager read all leads" ON public.leads
  FOR SELECT USING (
    public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'manager')
  );

CREATE POLICY "Staff read assigned leads" ON public.leads
  FOR SELECT USING (assigned_to = auth.uid());

CREATE POLICY "Admin/manager update leads" ON public.leads
  FOR UPDATE USING (
    public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'manager')
  );

CREATE POLICY "Staff update assigned leads" ON public.leads
  FOR UPDATE USING (assigned_to = auth.uid());

-- customers
CREATE POLICY "Admin/manager full access customers" ON public.customers
  FOR ALL USING (
    public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'manager')
  );

CREATE POLICY "Staff access assigned customers" ON public.customers
  FOR ALL USING (assigned_to = auth.uid());

-- loan_cases / mf_cases / insurance_cases: visible if you can see the parent customer
CREATE POLICY "Admin/manager full access loan_cases" ON public.loan_cases
  FOR ALL USING (
    public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'manager')
  );

CREATE POLICY "Staff access own loan_cases" ON public.loan_cases
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.customers c
      WHERE c.id = loan_cases.customer_id AND c.assigned_to = auth.uid()
    )
  );

CREATE POLICY "Admin/manager full access mf_cases" ON public.mf_cases
  FOR ALL USING (
    public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'manager')
  );

CREATE POLICY "Staff access own mf_cases" ON public.mf_cases
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.customers c
      WHERE c.id = mf_cases.customer_id AND c.assigned_to = auth.uid()
    )
  );

CREATE POLICY "Admin/manager full access insurance_cases" ON public.insurance_cases
  FOR ALL USING (
    public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'manager')
  );

CREATE POLICY "Staff access own insurance_cases" ON public.insurance_cases
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.customers c
      WHERE c.id = insurance_cases.customer_id AND c.assigned_to = auth.uid()
    )
  );

-- activities
CREATE POLICY "Admin/manager full access activities" ON public.activities
  FOR ALL USING (
    public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'manager')
  );

CREATE POLICY "Staff access own lead/customer activities" ON public.activities
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.leads l
      WHERE l.id = activities.lead_id AND l.assigned_to = auth.uid()
    )
    OR EXISTS (
      SELECT 1 FROM public.customers c
      WHERE c.id = activities.customer_id AND c.assigned_to = auth.uid()
    )
  );

-- ----------------------------------------------------------------------------
-- 9. Realtime (so the auto-sync in leads.tsx also reflects loan/mf/insurance
--    case changes across tabs — note #9)
-- ----------------------------------------------------------------------------
ALTER PUBLICATION supabase_realtime ADD TABLE public.customers;
ALTER PUBLICATION supabase_realtime ADD TABLE public.loan_cases;
ALTER PUBLICATION supabase_realtime ADD TABLE public.mf_cases;
ALTER PUBLICATION supabase_realtime ADD TABLE public.insurance_cases;