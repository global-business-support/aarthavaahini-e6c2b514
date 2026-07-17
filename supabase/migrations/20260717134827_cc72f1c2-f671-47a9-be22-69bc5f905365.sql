
-- Tighten leads RLS: staff sees only own-created or assigned-to-them; super admin sees all
DROP POLICY IF EXISTS "Staff read leads scoped" ON public.leads;
DROP POLICY IF EXISTS "Staff update leads scoped" ON public.leads;
DROP POLICY IF EXISTS "Staff delete leads scoped" ON public.leads;

CREATE POLICY "Staff read leads scoped"
ON public.leads FOR SELECT
USING (
  is_staff(auth.uid()) AND (
    is_super_admin(auth.uid())
    OR created_by = auth.uid()
    OR assigned_to = auth.uid()
  )
);

CREATE POLICY "Staff update leads scoped"
ON public.leads FOR UPDATE
USING (
  is_staff(auth.uid()) AND (
    is_super_admin(auth.uid())
    OR created_by = auth.uid()
    OR assigned_to = auth.uid()
  )
)
WITH CHECK (
  is_staff(auth.uid()) AND (
    is_super_admin(auth.uid())
    OR created_by = auth.uid()
    OR assigned_to = auth.uid()
  )
);

CREATE POLICY "Staff delete leads scoped"
ON public.leads FOR DELETE
USING (
  is_staff(auth.uid()) AND (
    is_super_admin(auth.uid())
    OR created_by = auth.uid()
  )
);

-- Ensure created_by is auto-populated on insert so new rows are owned
CREATE OR REPLACE FUNCTION public.set_created_by()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NEW.created_by IS NULL THEN
    NEW.created_by := auth.uid();
  END IF;
  RETURN NEW;
END;
$$;

DO $$
DECLARE t text;
BEGIN
  FOREACH t IN ARRAY ARRAY['leads','customers','loan_cases','insurance_cases','mutual_funds','tasks','activities','documents']
  LOOP
    EXECUTE format('DROP TRIGGER IF EXISTS set_created_by_trg ON public.%I', t);
    EXECUTE format('CREATE TRIGGER set_created_by_trg BEFORE INSERT ON public.%I FOR EACH ROW EXECUTE FUNCTION public.set_created_by()', t);
  END LOOP;
END $$;
