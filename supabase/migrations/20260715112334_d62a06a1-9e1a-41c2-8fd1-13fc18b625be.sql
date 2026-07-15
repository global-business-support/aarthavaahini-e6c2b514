
CREATE OR REPLACE FUNCTION public.is_super_admin(_user_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT _user_id = '19f0827a-85b9-43c4-9958-71024e580cd9'::uuid
$$;

ALTER TABLE public.leads            ADD COLUMN IF NOT EXISTS created_by uuid;
ALTER TABLE public.customers        ADD COLUMN IF NOT EXISTS created_by uuid;
ALTER TABLE public.loan_cases       ADD COLUMN IF NOT EXISTS created_by uuid;
ALTER TABLE public.insurance_cases  ADD COLUMN IF NOT EXISTS created_by uuid;
ALTER TABLE public.mutual_funds     ADD COLUMN IF NOT EXISTS created_by uuid;
ALTER TABLE public.documents        ADD COLUMN IF NOT EXISTS created_by uuid;
ALTER TABLE public.tasks            ADD COLUMN IF NOT EXISTS created_by uuid;

ALTER TABLE public.customers        ALTER COLUMN created_by SET DEFAULT auth.uid();
ALTER TABLE public.loan_cases       ALTER COLUMN created_by SET DEFAULT auth.uid();
ALTER TABLE public.insurance_cases  ALTER COLUMN created_by SET DEFAULT auth.uid();
ALTER TABLE public.mutual_funds     ALTER COLUMN created_by SET DEFAULT auth.uid();
ALTER TABLE public.documents        ALTER COLUMN created_by SET DEFAULT auth.uid();
ALTER TABLE public.tasks            ALTER COLUMN created_by SET DEFAULT auth.uid();
ALTER TABLE public.activities       ALTER COLUMN created_by SET DEFAULT auth.uid();
ALTER TABLE public.employees        ALTER COLUMN created_by SET DEFAULT auth.uid();

UPDATE public.leads            SET created_by = '19f0827a-85b9-43c4-9958-71024e580cd9' WHERE created_by IS NULL;
UPDATE public.customers        SET created_by = '19f0827a-85b9-43c4-9958-71024e580cd9' WHERE created_by IS NULL;
UPDATE public.loan_cases       SET created_by = '19f0827a-85b9-43c4-9958-71024e580cd9' WHERE created_by IS NULL;
UPDATE public.insurance_cases  SET created_by = '19f0827a-85b9-43c4-9958-71024e580cd9' WHERE created_by IS NULL;
UPDATE public.mutual_funds     SET created_by = '19f0827a-85b9-43c4-9958-71024e580cd9' WHERE created_by IS NULL;
UPDATE public.documents        SET created_by = '19f0827a-85b9-43c4-9958-71024e580cd9' WHERE created_by IS NULL;
UPDATE public.employees        SET created_by = '19f0827a-85b9-43c4-9958-71024e580cd9' WHERE created_by IS NULL;
UPDATE public.tasks            SET created_by = '19f0827a-85b9-43c4-9958-71024e580cd9' WHERE created_by IS NULL;
UPDATE public.activities       SET created_by = '19f0827a-85b9-43c4-9958-71024e580cd9' WHERE created_by IS NULL;

DROP POLICY IF EXISTS "Staff manage customers"       ON public.customers;
DROP POLICY IF EXISTS "Staff manage loan_cases"      ON public.loan_cases;
DROP POLICY IF EXISTS "Staff manage insurance_cases" ON public.insurance_cases;
DROP POLICY IF EXISTS "Staff manage mutual_funds"    ON public.mutual_funds;
DROP POLICY IF EXISTS "Staff manage documents"       ON public.documents;
DROP POLICY IF EXISTS "Staff manage tasks"           ON public.tasks;
DROP POLICY IF EXISTS "Staff manage activities"      ON public.activities;
DROP POLICY IF EXISTS "Staff can manage employees"   ON public.employees;
DROP POLICY IF EXISTS "Staff read all leads"         ON public.leads;
DROP POLICY IF EXISTS "Staff update leads"           ON public.leads;
DROP POLICY IF EXISTS "Staff insert leads"           ON public.leads;
DROP POLICY IF EXISTS "Admin reads all leads"        ON public.leads;
DROP POLICY IF EXISTS "Admin updates leads"          ON public.leads;

CREATE POLICY "Own or super admin customers" ON public.customers
  FOR ALL TO authenticated
  USING (is_staff(auth.uid()) AND (created_by = auth.uid() OR public.is_super_admin(auth.uid())))
  WITH CHECK (is_staff(auth.uid()) AND (created_by = auth.uid() OR public.is_super_admin(auth.uid())));

CREATE POLICY "Own or super admin loan_cases" ON public.loan_cases
  FOR ALL TO authenticated
  USING (is_staff(auth.uid()) AND (created_by = auth.uid() OR public.is_super_admin(auth.uid())))
  WITH CHECK (is_staff(auth.uid()) AND (created_by = auth.uid() OR public.is_super_admin(auth.uid())));

CREATE POLICY "Own or super admin insurance_cases" ON public.insurance_cases
  FOR ALL TO authenticated
  USING (is_staff(auth.uid()) AND (created_by = auth.uid() OR public.is_super_admin(auth.uid())))
  WITH CHECK (is_staff(auth.uid()) AND (created_by = auth.uid() OR public.is_super_admin(auth.uid())));

CREATE POLICY "Own or super admin mutual_funds" ON public.mutual_funds
  FOR ALL TO authenticated
  USING (is_staff(auth.uid()) AND (created_by = auth.uid() OR public.is_super_admin(auth.uid())))
  WITH CHECK (is_staff(auth.uid()) AND (created_by = auth.uid() OR public.is_super_admin(auth.uid())));

CREATE POLICY "Own or super admin documents" ON public.documents
  FOR ALL TO authenticated
  USING (is_staff(auth.uid()) AND (created_by = auth.uid() OR public.is_super_admin(auth.uid())))
  WITH CHECK (is_staff(auth.uid()) AND (created_by = auth.uid() OR public.is_super_admin(auth.uid())));

CREATE POLICY "Own or super admin tasks" ON public.tasks
  FOR ALL TO authenticated
  USING (is_staff(auth.uid()) AND (created_by = auth.uid() OR public.is_super_admin(auth.uid())))
  WITH CHECK (is_staff(auth.uid()) AND (created_by = auth.uid() OR public.is_super_admin(auth.uid())));

CREATE POLICY "Own or super admin activities" ON public.activities
  FOR ALL TO authenticated
  USING (is_staff(auth.uid()) AND (created_by = auth.uid() OR public.is_super_admin(auth.uid())))
  WITH CHECK (is_staff(auth.uid()) AND (created_by = auth.uid() OR public.is_super_admin(auth.uid())));

CREATE POLICY "Own or super admin employees" ON public.employees
  FOR ALL TO authenticated
  USING (
    is_staff(auth.uid())
    AND (created_by = auth.uid() OR public.is_super_admin(auth.uid()))
    AND COALESCE(LOWER(email), '') <> 'jeet0731@gmail.com'
  )
  WITH CHECK (
    is_staff(auth.uid())
    AND (created_by = auth.uid() OR public.is_super_admin(auth.uid()))
    AND COALESCE(LOWER(email), '') <> 'jeet0731@gmail.com'
  );

CREATE POLICY "Staff read leads scoped" ON public.leads
  FOR SELECT TO authenticated
  USING (
    is_staff(auth.uid())
    AND (created_by IS NULL OR created_by = auth.uid() OR public.is_super_admin(auth.uid()))
  );

CREATE POLICY "Staff insert leads scoped" ON public.leads
  FOR INSERT TO authenticated
  WITH CHECK (is_staff(auth.uid()));

CREATE POLICY "Staff update leads scoped" ON public.leads
  FOR UPDATE TO authenticated
  USING (
    is_staff(auth.uid())
    AND (created_by IS NULL OR created_by = auth.uid() OR public.is_super_admin(auth.uid()))
  )
  WITH CHECK (
    is_staff(auth.uid())
    AND (created_by IS NULL OR created_by = auth.uid() OR public.is_super_admin(auth.uid()))
  );

CREATE POLICY "Staff delete leads scoped" ON public.leads
  FOR DELETE TO authenticated
  USING (
    is_staff(auth.uid())
    AND (created_by = auth.uid() OR public.is_super_admin(auth.uid()))
  );
