
ALTER TABLE public.tasks
  ADD COLUMN IF NOT EXISTS related_loan_case_id uuid
  REFERENCES public.loan_cases(id) ON DELETE SET NULL;

CREATE INDEX IF NOT EXISTS tasks_related_loan_case_id_idx
  ON public.tasks(related_loan_case_id);

-- Enable Realtime on the CMS tables (safe if already added)
DO $$ BEGIN
  BEGIN ALTER PUBLICATION supabase_realtime ADD TABLE public.hero_slides; EXCEPTION WHEN duplicate_object THEN NULL; END;
  BEGIN ALTER PUBLICATION supabase_realtime ADD TABLE public.product_cards; EXCEPTION WHEN duplicate_object THEN NULL; END;
  BEGIN ALTER PUBLICATION supabase_realtime ADD TABLE public.testimonials; EXCEPTION WHEN duplicate_object THEN NULL; END;
  BEGIN ALTER PUBLICATION supabase_realtime ADD TABLE public.dashboard_cards; EXCEPTION WHEN duplicate_object THEN NULL; END;
END $$;
