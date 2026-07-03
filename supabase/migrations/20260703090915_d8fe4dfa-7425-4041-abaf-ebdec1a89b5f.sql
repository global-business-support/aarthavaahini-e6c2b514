
-- Restrict staff-only policies to authenticated role so anon lead inserts don't trigger is_staff()
DROP POLICY IF EXISTS "Staff insert leads" ON public.leads;
DROP POLICY IF EXISTS "Staff read all leads" ON public.leads;
DROP POLICY IF EXISTS "Staff update leads" ON public.leads;

CREATE POLICY "Staff insert leads" ON public.leads FOR INSERT TO authenticated WITH CHECK (public.is_staff(auth.uid()));
CREATE POLICY "Staff read all leads"  ON public.leads FOR SELECT TO authenticated USING (public.is_staff(auth.uid()));
CREATE POLICY "Staff update leads"    ON public.leads FOR UPDATE TO authenticated USING (public.is_staff(auth.uid()));

-- Ensure anon can execute helper functions if they ever appear in expressions
GRANT EXECUTE ON FUNCTION public.is_staff(uuid) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO anon, authenticated;
