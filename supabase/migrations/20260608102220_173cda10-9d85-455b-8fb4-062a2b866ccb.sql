
CREATE TABLE public.employee_schedules (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  employee_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  scheduled_for TIMESTAMPTZ NOT NULL,
  duration_minutes INT NOT NULL DEFAULT 60,
  location TEXT,
  priority TEXT NOT NULL DEFAULT 'normal',
  status TEXT NOT NULL DEFAULT 'scheduled',
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.employee_schedules TO authenticated;
GRANT ALL ON public.employee_schedules TO service_role;

ALTER TABLE public.employee_schedules ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Staff can view schedules"
  ON public.employee_schedules FOR SELECT
  TO authenticated
  USING (public.is_staff(auth.uid()) AND (public.has_role(auth.uid(), 'admin') OR employee_id = auth.uid()));

CREATE POLICY "Admins can insert schedules"
  ON public.employee_schedules FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins or assignee can update"
  ON public.employee_schedules FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin') OR employee_id = auth.uid())
  WITH CHECK (public.has_role(auth.uid(), 'admin') OR employee_id = auth.uid());

CREATE POLICY "Admins can delete schedules"
  ON public.employee_schedules FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_employee_schedules_updated_at
  BEFORE UPDATE ON public.employee_schedules
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
