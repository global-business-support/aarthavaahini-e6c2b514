
CREATE POLICY "Staff can read cms-media" ON storage.objects FOR SELECT TO authenticated USING (bucket_id = 'cms-media');
CREATE POLICY "Staff can insert cms-media" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'cms-media' AND public.is_staff(auth.uid()));
CREATE POLICY "Staff can update cms-media" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'cms-media' AND public.is_staff(auth.uid()));
CREATE POLICY "Staff can delete cms-media" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'cms-media' AND public.is_staff(auth.uid()));
