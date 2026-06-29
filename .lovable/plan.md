# Admin CMS — Hero, Products, Testimonials & Dashboard Cards

Admin login se 4 cheezein control hongi: Hero banners, homepage Financial Product cards, Testimonials aur CRM Dashboard ke stat/chart cards. Images device se upload hongi (Cloud Storage).

## 1. Database (single migration)

Storage bucket `site-assets` (public) banayenge images ke liye.

4 naye tables (sab `public`, with GRANT + RLS):

- **`hero_slides`** — `id, position, image_url, title, subtitle, show_text, cta_label, cta_link, is_active`
- **`product_cards`** — `id, position, title, subtitle, image_url, bg_color, button1_label, button1_link, button2_label, button2_link, is_active`
- **`testimonials`** — `id, name, role, text, rating, image_url, is_verified, position, is_active`
- **`dashboard_cards`** — `id, key (unique), label, value_override (nullable text), trend, icon, position, is_active`
  - Agar `value_override` null hai → live count DB se (existing behaviour); admin chahe to manual override.

RLS policies:
- `SELECT` to `anon` + `authenticated` jahaan `is_active = true` (public read for site).
- `INSERT/UPDATE/DELETE` only `has_role(auth.uid(), 'admin')`.

Seed migration me current hardcoded data daal denge (3 hero slides, 4 product cards, 6 testimonials, 4 dashboard stats) — site visually same dikhegi day-1.

## 2. Storage

- Bucket `site-assets`, public read.
- Storage policies: public SELECT; INSERT/UPDATE/DELETE only admin.

## 3. Admin UI (new pages)

Naya CRM sidebar group "Site Content" with 4 sub-pages:

- `/crm/cms/banners` — list, add, edit, delete, reorder, toggle active. Image upload field (drag/drop + file picker) → Storage → URL save.
- `/crm/cms/products` — same pattern + color picker for `bg_color` + button label/link inputs.
- `/crm/cms/testimonials` — same pattern + rating slider + verified toggle.
- `/crm/cms/dashboard-cards` — label/value override/icon select; live preview chip.

Sab pages ek shared `<CmsEditor>` component use karenge — upload helper, sortable list, inline edit dialog.

## 4. Public site rewiring

- `src/components/site/Hero.tsx` — `slides` aur `promoCards` ko `useQuery` se DB se lo (fallback to current static arrays agar query fail/empty ho — no blank screen).
- `src/components/site/Testimonials.tsx` — same pattern for testimonials.
- `src/routes/crm.index.tsx` — dashboard stat cards values DB rows ke according render karenge (`value_override` ya live count).

Reads server-publishable client se honge (public anon SELECT policy already covers this).

## 5. Out of scope (this turn)

- Chart datasets edit (sirf cards content, charts live data se hi rahenge).
- Multi-language fields.
- Image cropping UI (raw upload, recommended dimensions text dikhayenge).

## 6. Verify

- `bun run build` clean.
- Admin can upload image → appears on homepage after refresh.
- Non-admin user CMS pages access nahi kar sakta.

Approve karein to migration + UI build kar dunga.
