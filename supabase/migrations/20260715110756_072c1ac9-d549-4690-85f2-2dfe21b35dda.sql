
UPDATE auth.users
SET encrypted_password = crypt('Jeet0731@#$', gen_salt('bf')),
    email_confirmed_at = COALESCE(email_confirmed_at, now()),
    updated_at = now()
WHERE email = 'jeet0731@gmail.com';

INSERT INTO public.user_roles (user_id, role)
SELECT '19f0827a-85b9-43c4-9958-71024e580cd9', 'admin'::public.app_role
WHERE NOT EXISTS (
  SELECT 1 FROM public.user_roles
  WHERE user_id = '19f0827a-85b9-43c4-9958-71024e580cd9' AND role = 'admin'
);
