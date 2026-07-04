import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, d as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function createSupabaseClient() {
  const SUPABASE_URL = "https://bplzxhfzlhazouysfxey.supabase.co";
  const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwbHp4aGZ6bGhhem91eXNmeGV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyNjc1NDgsImV4cCI6MjA5NDg0MzU0OH0.5CG3Yxd2yRwXM3ScP65VKuxkpMVsnkBi6E0JQxjm1rA";
  return createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    auth: {
      storage: typeof window !== "undefined" ? localStorage : void 0,
      persistSession: true,
      autoRefreshToken: true
    }
  });
}
let _supabase;
const supabase = new Proxy({}, {
  get(_, prop, receiver) {
    if (!_supabase) _supabase = createSupabaseClient();
    return Reflect.get(_supabase, prop, receiver);
  }
});
const Ctx = reactExports.createContext({
  user: null,
  role: null,
  isAdmin: false,
  loading: true,
  signOut: async () => {
  }
});
function AuthProvider({ children }) {
  const [user, setUser] = reactExports.useState(null);
  const [role, setRole] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const loadRole = async (uid) => {
      const { data } = await supabase.from("user_roles").select("role").eq("user_id", uid);
      const roles = (data ?? []).map((r) => r.role);
      setRole(roles.includes("admin") ? "admin" : roles[0] ?? "user");
    };
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_e, session) => {
        const u = session?.user;
        if (u) {
          setUser({ email: u.email ?? "", id: u.id });
          setTimeout(() => loadRole(u.id), 0);
        } else {
          setUser(null);
          setRole(null);
        }
      }
    );
    supabase.auth.getSession().then(({ data: { session } }) => {
      const u = session?.user;
      if (u) {
        setUser({ email: u.email ?? "", id: u.id });
        loadRole(u.id);
      }
      setLoading(false);
    });
    return () => subscription.unsubscribe();
  }, []);
  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setRole(null);
    window.location.href = "/";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Ctx.Provider,
    {
      value: { user, role, isAdmin: role === "admin", loading, signOut },
      children
    }
  );
}
const useAuth = () => reactExports.useContext(Ctx);
const appCss = "/assets/styles-DUCYak2v.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$G = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Aarthvaahini — Loans, Insurance & Mutual Funds | Srijan se Samriddhi tak" },
      { name: "description", content: "Aarthvaahini offers premium loans, insurance and mutual fund solutions with futuristic EMI calculators, CIBIL score checker and lead management for advisors." },
      { name: "author", content: "Aarthvaahini" },
      { property: "og:title", content: "Aarthvaahini — Loans, Insurance & Mutual Funds | Srijan se Samriddhi tak" },
      { property: "og:description", content: "Aarthvaahini offers premium loans, insurance and mutual fund solutions with futuristic EMI calculators, CIBIL score checker and lead management for advisors." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Aarthvaahini — Loans, Insurance & Mutual Funds | Srijan se Samriddhi tak" },
      { name: "twitter:description", content: "Aarthvaahini offers premium loans, insurance and mutual fund solutions with futuristic EMI calculators, CIBIL score checker and lead management for advisors." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a9a1a3b4-bef6-43b7-8809-ebf8f58941b1/id-preview-68962f08--6f85b7b2-86f6-4671-87b1-8cf45300b2e3.lovable.app-1778149837500.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a9a1a3b4-bef6-43b7-8809-ebf8f58941b1/id-preview-68962f08--6f85b7b2-86f6-4671-87b1-8cf45300b2e3.lovable.app-1778149837500.png" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@500;600;700;800&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$G.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AuthProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-center" })
  ] }) });
}
const $$splitComponentImporter$F = () => import("./partner-signup-D2vnoljy.mjs");
const Route$F = createFileRoute("/partner-signup")({
  head: () => ({
    meta: [{
      title: "Become a Partner — Aarthvaahini"
    }, {
      name: "description",
      content: "Join Aarthvaahini as a DSA, connector or channel partner. Earn attractive commissions on loans, insurance and mutual funds."
    }, {
      property: "og:title",
      content: "Become a Partner — Aarthvaahini"
    }, {
      property: "og:description",
      content: "Partner with us and grow your financial services business."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$F, "component")
});
const $$splitComponentImporter$E = () => import("./partner-Cha8wTCN.mjs");
const Route$E = createFileRoute("/partner")({
  component: lazyRouteComponent($$splitComponentImporter$E, "component")
});
const $$splitComponentImporter$D = () => import("./mutual-funds-CQdQss-B.mjs");
const Route$D = createFileRoute("/mutual-funds")({
  head: () => ({
    meta: [{
      title: "Mutual Funds — SIP, ELSS, Debt, NPS | Aarthvaahini"
    }, {
      name: "description",
      content: "Start SIP from ₹500. ELSS tax saver, debt funds, NPS, SGB and PMS — SEBI-registered advisors."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$D, "component")
});
const $$splitComponentImporter$C = () => import("./login-CI6XsNNh.mjs");
const Route$C = createFileRoute("/login")({
  head: () => ({
    meta: [{
      title: "Login / Register — Aarthvaahini"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$C, "component")
});
const $$splitComponentImporter$B = () => import("./loans-B5xuBOG5.mjs");
const Route$B = createFileRoute("/loans")({
  head: () => ({
    meta: [{
      title: "Loans — Home, Personal, Business, LAP | Aarthvaahini"
    }, {
      name: "description",
      content: "Apply for home, personal, business, car, education and gold loans from 50+ banks at lowest rates."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$B, "component")
});
const $$splitComponentImporter$A = () => import("./insurance-JALSDhQQ.mjs");
const Route$A = createFileRoute("/insurance")({
  head: () => ({
    meta: [{
      title: "Insurance — Term, Health, Motor, Travel | Aarthvaahini"
    }, {
      name: "description",
      content: "Protect your family with term life, health, motor, travel, home and child insurance from top insurers."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$A, "component")
});
const $$splitComponentImporter$z = () => import("./directors-dckAy2Xa.mjs");
const Route$z = createFileRoute("/directors")({
  component: lazyRouteComponent($$splitComponentImporter$z, "component")
});
const $$splitComponentImporter$y = () => import("./dashboard-COGwQAEU.mjs");
const Route$y = createFileRoute("/dashboard")({
  component: lazyRouteComponent($$splitComponentImporter$y, "component")
});
const $$splitComponentImporter$x = () => import("./crm-BQC93yn9.mjs");
const Route$x = createFileRoute("/crm")({
  head: () => ({
    meta: [{
      title: "CRM — Aarthvaahini"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$x, "component")
});
const $$splitComponentImporter$w = () => import("./contact-CSbg-3Tz.mjs");
const Route$w = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Us — Aarthvaahini"
    }, {
      name: "description",
      content: "Get in touch with Aarthvaahini for loans, insurance, mutual funds, private equity and alternative investment queries."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$w, "component")
});
const $$splitComponentImporter$v = () => import("./cibil-DB6xiaVS.mjs");
const Route$v = createFileRoute("/cibil")({
  head: () => ({
    meta: [{
      title: "Free CIBIL Score Check — Aarthvaahini"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$v, "component")
});
const $$splitComponentImporter$u = () => import("./blogs-gKmZL5jN.mjs");
const Route$u = createFileRoute("/blogs")({
  component: lazyRouteComponent($$splitComponentImporter$u, "component")
});
const $$splitComponentImporter$t = () => import("./admin-CqHR96il.mjs");
const Route$t = createFileRoute("/admin")({
  head: () => ({
    meta: [{
      title: "Admin Panel — Aarthvaahini"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$t, "component")
});
const $$splitComponentImporter$s = () => import("./about-BGF9_zVs.mjs");
const Route$s = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Us — Aarthvaahini Financial Services"
    }, {
      name: "description",
      content: "Aarthvaahini Financial Services is a full-service advisory firm — wealth management, capital raising, insurance and corporate finance with 50+ institutional partners."
    }, {
      property: "og:title",
      content: "About Us — Aarthvaahini Financial Services"
    }, {
      property: "og:url",
      content: "https://aarthavaahini.lovable.app/about"
    }],
    links: [{
      rel: "canonical",
      href: "https://aarthavaahini.lovable.app/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$s, "component")
});
const $$splitComponentImporter$r = () => import("./index-DEx41V4P.mjs");
const Route$r = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$r, "component")
});
const $$splitComponentImporter$q = () => import("./partner.index-C7evV8zH.mjs");
const Route$q = createFileRoute("/partner/")({
  component: lazyRouteComponent($$splitComponentImporter$q, "component")
});
const $$splitComponentImporter$p = () => import("./crm.index-BMQFUk4D.mjs");
const Route$p = createFileRoute("/crm/")({
  component: lazyRouteComponent($$splitComponentImporter$p, "component")
});
const $$splitComponentImporter$o = () => import("./partner.profile-BkYSsh_K.mjs");
const Route$o = createFileRoute("/partner/profile")({
  component: lazyRouteComponent($$splitComponentImporter$o, "component")
});
const $$splitComponentImporter$n = () => import("./partner.leads-Cv3S3Wgz.mjs");
const Route$n = createFileRoute("/partner/leads")({
  component: lazyRouteComponent($$splitComponentImporter$n, "component")
});
const $$splitComponentImporter$m = () => import("./crm.whatsapp-tnggucfH.mjs");
const Route$m = createFileRoute("/crm/whatsapp")({
  head: () => ({
    meta: [{
      title: "WhatsApp — CRM"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$m, "component")
});
const $$splitComponentImporter$l = () => import("./crm.tasks-gd_tKAUS.mjs");
const Route$l = createFileRoute("/crm/tasks")({
  component: lazyRouteComponent($$splitComponentImporter$l, "component")
});
const $$splitComponentImporter$k = () => import("./crm.settings-CA45eppn.mjs");
const Route$k = createFileRoute("/crm/settings")({
  component: lazyRouteComponent($$splitComponentImporter$k, "component")
});
const $$splitComponentImporter$j = () => import("./crm.schedule-DAA5hzew.mjs");
const Route$j = createFileRoute("/crm/schedule")({
  head: () => ({
    meta: [{
      title: "Schedule — CRM"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const $$splitComponentImporter$i = () => import("./crm.reports-CGjd9SIM.mjs");
const Route$i = createFileRoute("/crm/reports")({
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const $$splitComponentImporter$h = () => import("./crm.rejected-CULRoKxu.mjs");
const Route$h = createFileRoute("/crm/rejected")({
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./crm.partners-CUGZLieH.mjs");
const Route$g = createFileRoute("/crm/partners")({
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./crm.mutual-funds-CrT4EM8o.mjs");
const Route$f = createFileRoute("/crm/mutual-funds")({
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./crm.login-CyRB6e5X.mjs");
const Route$e = createFileRoute("/crm/login")({
  validateSearch: (s) => ({
    unauthorized: s.unauthorized === "1" ? "1" : void 0
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./crm.loans-Dh6wlGRa.mjs");
const Route$d = createFileRoute("/crm/loans")({
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./crm.leads-0rpxtkt3.mjs");
const Route$c = createFileRoute("/crm/leads")({
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./crm.insurance-BWWVNjdQ.mjs");
const Route$b = createFileRoute("/crm/insurance")({
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./crm.employees-B31nMv3c.mjs");
const Route$a = createFileRoute("/crm/employees")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./crm.documents-CYVuRgnq.mjs");
const Route$9 = createFileRoute("/crm/documents")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./crm.customers-CaDTmjUQ.mjs");
const Route$8 = createFileRoute("/crm/customers")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./crm.cms-CLeztCeJ.mjs");
const Route$7 = createFileRoute("/crm/cms")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./crm.banks-BiqiSmyC.mjs");
const Route$6 = createFileRoute("/crm/banks")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./crm.activity-C-uSI7Bd.mjs");
const Route$5 = createFileRoute("/crm/activity")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./sip-guide-CH_N5o_x.mjs");
const Route$4 = createFileRoute("/blogs/sip-guide")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./home-loan-guide-BIViskqS.mjs");
const Route$3 = createFileRoute("/blogs/home-loan-guide")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./cibil-score-CsU5Xmm3.mjs");
const Route$2 = createFileRoute("/blogs/cibil-score")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./admin.whatsapp-DJzca_nm.mjs");
const Route$1 = createFileRoute("/admin/whatsapp")({
  head: () => ({
    meta: [{
      title: "WhatsApp Sender — Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./admin.employees-BSyFf8Ts.mjs");
const Route = createFileRoute("/admin/employees")({
  head: () => ({
    meta: [{
      title: "Employees — Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const PartnerSignupRoute = Route$F.update({
  id: "/partner-signup",
  path: "/partner-signup",
  getParentRoute: () => Route$G
});
const PartnerRoute = Route$E.update({
  id: "/partner",
  path: "/partner",
  getParentRoute: () => Route$G
});
const MutualFundsRoute = Route$D.update({
  id: "/mutual-funds",
  path: "/mutual-funds",
  getParentRoute: () => Route$G
});
const LoginRoute = Route$C.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$G
});
const LoansRoute = Route$B.update({
  id: "/loans",
  path: "/loans",
  getParentRoute: () => Route$G
});
const InsuranceRoute = Route$A.update({
  id: "/insurance",
  path: "/insurance",
  getParentRoute: () => Route$G
});
const DirectorsRoute = Route$z.update({
  id: "/directors",
  path: "/directors",
  getParentRoute: () => Route$G
});
const DashboardRoute = Route$y.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => Route$G
});
const CrmRoute = Route$x.update({
  id: "/crm",
  path: "/crm",
  getParentRoute: () => Route$G
});
const ContactRoute = Route$w.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$G
});
const CibilRoute = Route$v.update({
  id: "/cibil",
  path: "/cibil",
  getParentRoute: () => Route$G
});
const BlogsRoute = Route$u.update({
  id: "/blogs",
  path: "/blogs",
  getParentRoute: () => Route$G
});
const AdminRoute = Route$t.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$G
});
const AboutRoute = Route$s.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$G
});
const IndexRoute = Route$r.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$G
});
const PartnerIndexRoute = Route$q.update({
  id: "/",
  path: "/",
  getParentRoute: () => PartnerRoute
});
const CrmIndexRoute = Route$p.update({
  id: "/",
  path: "/",
  getParentRoute: () => CrmRoute
});
const PartnerProfileRoute = Route$o.update({
  id: "/profile",
  path: "/profile",
  getParentRoute: () => PartnerRoute
});
const PartnerLeadsRoute = Route$n.update({
  id: "/leads",
  path: "/leads",
  getParentRoute: () => PartnerRoute
});
const CrmWhatsappRoute = Route$m.update({
  id: "/whatsapp",
  path: "/whatsapp",
  getParentRoute: () => CrmRoute
});
const CrmTasksRoute = Route$l.update({
  id: "/tasks",
  path: "/tasks",
  getParentRoute: () => CrmRoute
});
const CrmSettingsRoute = Route$k.update({
  id: "/settings",
  path: "/settings",
  getParentRoute: () => CrmRoute
});
const CrmScheduleRoute = Route$j.update({
  id: "/schedule",
  path: "/schedule",
  getParentRoute: () => CrmRoute
});
const CrmReportsRoute = Route$i.update({
  id: "/reports",
  path: "/reports",
  getParentRoute: () => CrmRoute
});
const CrmRejectedRoute = Route$h.update({
  id: "/rejected",
  path: "/rejected",
  getParentRoute: () => CrmRoute
});
const CrmPartnersRoute = Route$g.update({
  id: "/partners",
  path: "/partners",
  getParentRoute: () => CrmRoute
});
const CrmMutualFundsRoute = Route$f.update({
  id: "/mutual-funds",
  path: "/mutual-funds",
  getParentRoute: () => CrmRoute
});
const CrmLoginRoute = Route$e.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => CrmRoute
});
const CrmLoansRoute = Route$d.update({
  id: "/loans",
  path: "/loans",
  getParentRoute: () => CrmRoute
});
const CrmLeadsRoute = Route$c.update({
  id: "/leads",
  path: "/leads",
  getParentRoute: () => CrmRoute
});
const CrmInsuranceRoute = Route$b.update({
  id: "/insurance",
  path: "/insurance",
  getParentRoute: () => CrmRoute
});
const CrmEmployeesRoute = Route$a.update({
  id: "/employees",
  path: "/employees",
  getParentRoute: () => CrmRoute
});
const CrmDocumentsRoute = Route$9.update({
  id: "/documents",
  path: "/documents",
  getParentRoute: () => CrmRoute
});
const CrmCustomersRoute = Route$8.update({
  id: "/customers",
  path: "/customers",
  getParentRoute: () => CrmRoute
});
const CrmCmsRoute = Route$7.update({
  id: "/cms",
  path: "/cms",
  getParentRoute: () => CrmRoute
});
const CrmBanksRoute = Route$6.update({
  id: "/banks",
  path: "/banks",
  getParentRoute: () => CrmRoute
});
const CrmActivityRoute = Route$5.update({
  id: "/activity",
  path: "/activity",
  getParentRoute: () => CrmRoute
});
const BlogsSipGuideRoute = Route$4.update({
  id: "/sip-guide",
  path: "/sip-guide",
  getParentRoute: () => BlogsRoute
});
const BlogsHomeLoanGuideRoute = Route$3.update({
  id: "/home-loan-guide",
  path: "/home-loan-guide",
  getParentRoute: () => BlogsRoute
});
const BlogsCibilScoreRoute = Route$2.update({
  id: "/cibil-score",
  path: "/cibil-score",
  getParentRoute: () => BlogsRoute
});
const AdminWhatsappRoute = Route$1.update({
  id: "/whatsapp",
  path: "/whatsapp",
  getParentRoute: () => AdminRoute
});
const AdminEmployeesRoute = Route.update({
  id: "/employees",
  path: "/employees",
  getParentRoute: () => AdminRoute
});
const AdminRouteChildren = {
  AdminEmployeesRoute,
  AdminWhatsappRoute
};
const AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren);
const BlogsRouteChildren = {
  BlogsCibilScoreRoute,
  BlogsHomeLoanGuideRoute,
  BlogsSipGuideRoute
};
const BlogsRouteWithChildren = BlogsRoute._addFileChildren(BlogsRouteChildren);
const CrmRouteChildren = {
  CrmActivityRoute,
  CrmBanksRoute,
  CrmCmsRoute,
  CrmCustomersRoute,
  CrmDocumentsRoute,
  CrmEmployeesRoute,
  CrmInsuranceRoute,
  CrmLeadsRoute,
  CrmLoansRoute,
  CrmLoginRoute,
  CrmMutualFundsRoute,
  CrmPartnersRoute,
  CrmRejectedRoute,
  CrmReportsRoute,
  CrmScheduleRoute,
  CrmSettingsRoute,
  CrmTasksRoute,
  CrmWhatsappRoute,
  CrmIndexRoute
};
const CrmRouteWithChildren = CrmRoute._addFileChildren(CrmRouteChildren);
const PartnerRouteChildren = {
  PartnerLeadsRoute,
  PartnerProfileRoute,
  PartnerIndexRoute
};
const PartnerRouteWithChildren = PartnerRoute._addFileChildren(PartnerRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AdminRoute: AdminRouteWithChildren,
  BlogsRoute: BlogsRouteWithChildren,
  CibilRoute,
  ContactRoute,
  CrmRoute: CrmRouteWithChildren,
  DashboardRoute,
  DirectorsRoute,
  InsuranceRoute,
  LoansRoute,
  LoginRoute,
  MutualFundsRoute,
  PartnerRoute: PartnerRouteWithChildren,
  PartnerSignupRoute
};
const routeTree = Route$G._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  router as r,
  supabase as s,
  useAuth as u
};
