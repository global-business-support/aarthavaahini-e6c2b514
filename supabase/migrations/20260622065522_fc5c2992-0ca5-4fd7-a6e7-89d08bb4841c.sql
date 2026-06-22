
CREATE OR REPLACE FUNCTION public.log_loan_activity()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_lead_id uuid;
  v_msg text;
  v_type text;
BEGIN
  SELECT lead_id INTO v_lead_id FROM public.customers WHERE id = NEW.customer_id;

  IF TG_OP = 'INSERT' THEN
    v_type := 'loan_created';
    v_msg := 'Loan case created: ' || COALESCE(NEW.loan_type,'Loan')
             || CASE WHEN NEW.requested_amount IS NOT NULL THEN ' · Requested ₹' || NEW.requested_amount::text ELSE '' END;
    INSERT INTO public.activities (customer_id, lead_id, activity_type, notes)
    VALUES (NEW.customer_id, v_lead_id, v_type, v_msg);
    RETURN NEW;
  END IF;

  IF NEW.stage IS DISTINCT FROM OLD.stage THEN
    INSERT INTO public.activities (customer_id, lead_id, activity_type, notes)
    VALUES (NEW.customer_id, v_lead_id, 'loan_stage', 'Stage: ' || COALESCE(OLD.stage,'—') || ' → ' || COALESCE(NEW.stage,'—'));
  END IF;

  IF NEW.sanction_amount IS DISTINCT FROM OLD.sanction_amount AND NEW.sanction_amount IS NOT NULL THEN
    INSERT INTO public.activities (customer_id, lead_id, activity_type, notes)
    VALUES (NEW.customer_id, v_lead_id, 'sanctioned', 'Sanctioned ₹' || NEW.sanction_amount::text
            || COALESCE(' by ' || NEW.lender_name, ''));
  END IF;

  IF NEW.disbursement_amount IS DISTINCT FROM OLD.disbursement_amount AND NEW.disbursement_amount IS NOT NULL THEN
    INSERT INTO public.activities (customer_id, lead_id, activity_type, notes)
    VALUES (NEW.customer_id, v_lead_id, 'disbursed', 'Disbursed ₹' || NEW.disbursement_amount::text
            || COALESCE(' by ' || NEW.lender_name, ''));
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_log_loan_activity_ins ON public.loan_cases;
CREATE TRIGGER trg_log_loan_activity_ins
AFTER INSERT ON public.loan_cases
FOR EACH ROW EXECUTE FUNCTION public.log_loan_activity();

DROP TRIGGER IF EXISTS trg_log_loan_activity_upd ON public.loan_cases;
CREATE TRIGGER trg_log_loan_activity_upd
AFTER UPDATE ON public.loan_cases
FOR EACH ROW EXECUTE FUNCTION public.log_loan_activity();

ALTER PUBLICATION supabase_realtime ADD TABLE public.activities;
