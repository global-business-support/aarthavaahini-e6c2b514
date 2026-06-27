
-- =========================
-- Hero slides
-- =========================
CREATE TABLE public.hero_slides (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  position int NOT NULL DEFAULT 0,
  image_url text NOT NULL,
  title text,
  subtitle text,
  show_text boolean NOT NULL DEFAULT true,
  cta_label text,
  cta_link text,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.hero_slides TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.hero_slides TO authenticated;
GRANT ALL ON public.hero_slides TO service_role;
ALTER TABLE public.hero_slides ENABLE ROW LEVEL SECURITY;
CREATE POLICY "hero_slides public read active" ON public.hero_slides FOR SELECT USING (is_active = true);
CREATE POLICY "hero_slides admin all read" ON public.hero_slides FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'));
CREATE POLICY "hero_slides admin insert" ON public.hero_slides FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE POLICY "hero_slides admin update" ON public.hero_slides FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE POLICY "hero_slides admin delete" ON public.hero_slides FOR DELETE TO authenticated USING (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER hero_slides_updated_at BEFORE UPDATE ON public.hero_slides FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- =========================
-- Product cards
-- =========================
CREATE TABLE public.product_cards (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  position int NOT NULL DEFAULT 0,
  title text NOT NULL,
  subtitle text,
  image_url text,
  bg_color text DEFAULT '#eaf4ff',
  button1_label text,
  button1_link text,
  button2_label text,
  button2_link text,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.product_cards TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.product_cards TO authenticated;
GRANT ALL ON public.product_cards TO service_role;
ALTER TABLE public.product_cards ENABLE ROW LEVEL SECURITY;
CREATE POLICY "product_cards public read active" ON public.product_cards FOR SELECT USING (is_active = true);
CREATE POLICY "product_cards admin all read" ON public.product_cards FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'));
CREATE POLICY "product_cards admin insert" ON public.product_cards FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE POLICY "product_cards admin update" ON public.product_cards FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE POLICY "product_cards admin delete" ON public.product_cards FOR DELETE TO authenticated USING (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER product_cards_updated_at BEFORE UPDATE ON public.product_cards FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- =========================
-- Testimonials
-- =========================
CREATE TABLE public.testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  position int NOT NULL DEFAULT 0,
  name text NOT NULL,
  role text,
  text text NOT NULL,
  rating int NOT NULL DEFAULT 5,
  image_url text,
  is_verified boolean NOT NULL DEFAULT true,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.testimonials TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.testimonials TO authenticated;
GRANT ALL ON public.testimonials TO service_role;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
CREATE POLICY "testimonials public read active" ON public.testimonials FOR SELECT USING (is_active = true);
CREATE POLICY "testimonials admin all read" ON public.testimonials FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'));
CREATE POLICY "testimonials admin insert" ON public.testimonials FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE POLICY "testimonials admin update" ON public.testimonials FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE POLICY "testimonials admin delete" ON public.testimonials FOR DELETE TO authenticated USING (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER testimonials_updated_at BEFORE UPDATE ON public.testimonials FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- =========================
-- Dashboard cards (overrides only)
-- =========================
CREATE TABLE public.dashboard_cards (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text NOT NULL UNIQUE,
  label text NOT NULL,
  value_override text,
  trend text,
  icon text,
  position int NOT NULL DEFAULT 0,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.dashboard_cards TO authenticated;
GRANT INSERT, UPDATE, DELETE ON public.dashboard_cards TO authenticated;
GRANT ALL ON public.dashboard_cards TO service_role;
ALTER TABLE public.dashboard_cards ENABLE ROW LEVEL SECURITY;
CREATE POLICY "dashboard_cards staff read" ON public.dashboard_cards FOR SELECT TO authenticated USING (public.is_staff(auth.uid()));
CREATE POLICY "dashboard_cards admin insert" ON public.dashboard_cards FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE POLICY "dashboard_cards admin update" ON public.dashboard_cards FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE POLICY "dashboard_cards admin delete" ON public.dashboard_cards FOR DELETE TO authenticated USING (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER dashboard_cards_updated_at BEFORE UPDATE ON public.dashboard_cards FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- =========================
-- Seed data
-- =========================
INSERT INTO public.hero_slides (position, image_url, title, subtitle, show_text, cta_label, cta_link, is_active) VALUES
  (0, 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1920&q=80', NULL, NULL, false, 'Free Consultation', '/contact', true),
  (1, 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80', 'Protecting What Matters Most', 'Comprehensive Life, Health, Motor and Home insurance plans from India''s most trusted insurers — safeguarding your family, home and assets against life''s uncertainties.', true, 'Free Consultation', '/contact', true),
  (2, 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1920&q=80', 'Grow Your Wealth With Smart Investments', 'Build long-term wealth with curated Mutual Funds, SIPs and tax-saving investment plans — expert-led advisory designed to help your money grow steadily.', true, 'Free Consultation', '/contact', true);

INSERT INTO public.product_cards (position, title, subtitle, image_url, bg_color, button1_label, button1_link, button2_label, button2_link) VALUES
  (0, 'Personal Loan', 'A loan for everything from dreams to emergencies', 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80', '#70b8f7', 'Apply online', '/contact', 'Learn more', '/loans'),
  (1, 'Business Loan', 'Funding solutions for business growth and expansion', 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80', '#eaf4ff', 'Apply Now', '/contact', 'Learn more', '/loans'),
  (2, 'Home Loan', 'Affordable home loan options for your dream home', 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80', '#fff2cc', 'Apply Now', '/contact', 'Know more', '/loans'),
  (3, 'Insurance', 'Secure your family, health, vehicle and assets', 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80', '#ffe4f1', 'Get quote', '/contact', 'Explore', '/insurance'),
  (4, 'Mutual Funds', 'Grow wealth with SIPs and curated investment plans', 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&w=1200&q=80', '#dcfce7', 'Invest Now', '/contact', 'Learn more', '/mutual-funds'),
  (5, 'Fixed Deposit', 'A growth plan with peace of mind', 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&q=80', '#f8aeb4', 'Quick apply', '/contact', 'Learn more', '/mutual-funds');

INSERT INTO public.testimonials (position, name, role, text, rating, image_url) VALUES
  (0,'Rahul Sharma','Business Owner, Mumbai','Aarthvaahini got my business loan approved in just 3 days. The process was smooth and the team guided me at every step.',5,'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80'),
  (1,'Priya Verma','Software Engineer, Pune','Their SIP planning and mutual fund advice was excellent. My portfolio is now well diversified and easy to track.',5,'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80'),
  (2,'Amit Patel','Doctor, Ahmedabad','I was confused about choosing health insurance, but the team suggested the best plan. The process was clear and hassle-free.',5,'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80'),
  (3,'Neha Singh','Teacher, Lucknow','I got a better home loan option through Aarthvaahini. From documentation to approval, everything was fast and transparent.',5,'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80'),
  (4,'Vikram Joshi','Entrepreneur, Bengaluru','Their guidance helped me understand my CIBIL score and improve my loan eligibility. Very professional service.',5,'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'),
  (5,'Sneha Kapoor','HR Manager, Delhi','I applied for a personal loan and got proper support from enquiry to disbursal. No confusion and no hidden surprises.',5,'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80');

INSERT INTO public.dashboard_cards (key, label, trend, icon, position) VALUES
  ('totalLeads','Total Leads','All time','Users',0),
  ('totalCustomers','Customers','Active','UserCircle2',1),
  ('followupsDue','Followups Due','Today','Clock',2),
  ('loanPipeline','Loan Pipeline','Open','Banknote',3),
  ('insurancePipeline','Insurance','Open','ShieldCheck',4),
  ('mfPipeline','MF Annual SIP','Y/Y','TrendingUp',5),
  ('revenue','Disbursed','Revenue','IndianRupee',6),
  ('slaAlerts','SLA Alerts','Action','AlertTriangle',7);
