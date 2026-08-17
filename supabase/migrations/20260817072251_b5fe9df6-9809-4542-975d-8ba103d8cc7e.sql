ALTER TABLE public.tasks
  ADD CONSTRAINT tasks_related_customer_id_fkey
  FOREIGN KEY (related_customer_id) REFERENCES public.customers(id) ON DELETE SET NULL;

ALTER TABLE public.tasks
  ADD CONSTRAINT tasks_related_lead_id_fkey
  FOREIGN KEY (related_lead_id) REFERENCES public.leads(id) ON DELETE SET NULL;

UPDATE public.banks
SET logo_url = 'https://icons.duckduckgo.com/ip3/' || domain || '.ico'
WHERE logo_url LIKE '%logo.clearbit.com%'
  AND domain IS NOT NULL AND domain <> '';

UPDATE public.banks
SET logo_url = NULL
WHERE logo_url LIKE '%logo.clearbit.com%';