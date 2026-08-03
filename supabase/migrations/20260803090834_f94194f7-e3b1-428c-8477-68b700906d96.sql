ALTER TYPE public.app_role ADD VALUE IF NOT EXISTS 'coordinator';

CREATE OR REPLACE FUNCTION public.is_coordinator(_user_id uuid)
RETURNS boolean LANGUAGE sql STABLE SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role::text = 'coordinator')
$$;

CREATE OR REPLACE FUNCTION public.is_staff(_user_id uuid)
RETURNS boolean LANGUAGE sql STABLE SET search_path = public AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id
      AND role::text IN ('admin','manager','sales_executive','operations','insurance_executive','mf_executive','accountant','back_office_executive','coordinator')
  )
$$;

-- Coordinator: full read + stage/notes updates across the pipeline, can add leads, cannot delete
CREATE POLICY "Coordinator reads all leads" ON public.leads FOR SELECT TO authenticated USING (public.is_coordinator(auth.uid()));
CREATE POLICY "Coordinator updates all leads" ON public.leads FOR UPDATE TO authenticated USING (public.is_coordinator(auth.uid())) WITH CHECK (public.is_coordinator(auth.uid()));

CREATE POLICY "Coordinator reads all customers" ON public.customers FOR SELECT TO authenticated USING (public.is_coordinator(auth.uid()));
CREATE POLICY "Coordinator updates all customers" ON public.customers FOR UPDATE TO authenticated USING (public.is_coordinator(auth.uid())) WITH CHECK (public.is_coordinator(auth.uid()));

CREATE POLICY "Coordinator reads all loan_cases" ON public.loan_cases FOR SELECT TO authenticated USING (public.is_coordinator(auth.uid()));
CREATE POLICY "Coordinator updates all loan_cases" ON public.loan_cases FOR UPDATE TO authenticated USING (public.is_coordinator(auth.uid())) WITH CHECK (public.is_coordinator(auth.uid()));

CREATE POLICY "Coordinator reads all insurance_cases" ON public.insurance_cases FOR SELECT TO authenticated USING (public.is_coordinator(auth.uid()));
CREATE POLICY "Coordinator updates all insurance_cases" ON public.insurance_cases FOR UPDATE TO authenticated USING (public.is_coordinator(auth.uid())) WITH CHECK (public.is_coordinator(auth.uid()));

CREATE POLICY "Coordinator reads all mutual_funds" ON public.mutual_funds FOR SELECT TO authenticated USING (public.is_coordinator(auth.uid()));
CREATE POLICY "Coordinator updates all mutual_funds" ON public.mutual_funds FOR UPDATE TO authenticated USING (public.is_coordinator(auth.uid())) WITH CHECK (public.is_coordinator(auth.uid()));