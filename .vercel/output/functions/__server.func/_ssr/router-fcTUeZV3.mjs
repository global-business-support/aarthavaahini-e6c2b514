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
const logoUrl = "/assets/logo-BMtyXnJ0.png";
function SplashScreen() {
  const [mounted, setMounted] = reactExports.useState(false);
  const [hide, setHide] = reactExports.useState(false);
  const [remove, setRemove] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem("av_splash_seen") === "1") {
        setRemove(true);
        return;
      }
      sessionStorage.setItem("av_splash_seen", "1");
    } catch {
    }
    setMounted(true);
    const t1 = setTimeout(() => setHide(true), 2800);
    const t2 = setTimeout(() => setRemove(true), 3600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);
  if (remove) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `splash-root ${mounted ? "splash-in" : ""} ${hide ? "splash-out" : ""}`,
      "aria-hidden": hide,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "splash-bg" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "splash-orb splash-orb-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "splash-orb splash-orb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "splash-orb splash-orb-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "splash-grid" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "splash-stage", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "splash-logo-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "splash-logo-ring" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "splash-logo", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoUrl, alt: "Aarthvaahini" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "splash-welcome", children: "Welcome to" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "splash-brand", children: "Aarthvaahini" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "splash-tag", children: "Srijan se Samriddhi tak" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "splash-progress", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "splash-progress-bar" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        .splash-root {
          position: fixed;
          inset: 0;
          z-index: 999999;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: radial-gradient(ellipse at 50% 30%, #1e1b4b 0%, #0b0f2a 55%, #05060f 100%);
          opacity: 1;
          transition: opacity 700ms ease, transform 700ms ease;
        }
        .splash-out {
          opacity: 0;
          transform: scale(1.06);
          pointer-events: none;
        }
        .splash-bg {
          position: absolute; inset: -20%;
          background:
            radial-gradient(circle at 20% 30%, rgba(125,211,252,0.35), transparent 40%),
            radial-gradient(circle at 80% 20%, rgba(167,139,250,0.35), transparent 42%),
            radial-gradient(circle at 60% 80%, rgba(240,171,252,0.28), transparent 45%);
          filter: blur(20px);
          animation: splashDrift 8s ease-in-out infinite alternate;
        }
        .splash-orb {
          position: absolute;
          border-radius: 9999px;
          filter: blur(60px);
          opacity: 0.7;
          animation: splashFloat 6s ease-in-out infinite;
        }
        .splash-orb-1 { width: 320px; height: 320px; background: #38bdf8; top: -60px; left: -60px; }
        .splash-orb-2 { width: 380px; height: 380px; background: #a78bfa; bottom: -100px; right: -80px; animation-delay: 1.5s; }
        .splash-orb-3 { width: 260px; height: 260px; background: #f472b6; top: 40%; left: 55%; animation-delay: 3s; }
        .splash-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse at center, black 40%, transparent 75%);
          transform: perspective(800px) rotateX(60deg) translateY(20%);
          transform-origin: center;
          opacity: 0.6;
        }
        .splash-stage {
          position: relative;
          text-align: center;
          padding: 24px;
          max-width: 92vw;
          animation: splashRise 900ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }
        .splash-logo-wrap {
          position: relative;
          width: 140px;
          height: 140px;
          margin: 0 auto 26px;
          animation: splashLogoIn 1100ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }
        .splash-logo-ring {
          position: absolute; inset: -14px;
          border-radius: 9999px;
          background: conic-gradient(from 0deg, #7dd3fc, #818cf8, #f0abfc, #7dd3fc);
          filter: blur(14px);
          opacity: 0.9;
          animation: splashRing 3.5s linear infinite;
        }
        .splash-logo {
          position: relative;
          width: 100%; height: 100%;
          border-radius: 32px;
          background: linear-gradient(145deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06));
          border: 1px solid rgba(255,255,255,0.22);
          box-shadow:
            0 20px 60px -10px rgba(129,140,248,0.55),
            inset 0 0 40px rgba(255,255,255,0.08);
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
          -webkit-backdrop-filter: blur(12px);
          backdrop-filter: blur(12px);
        }
        .splash-logo img {
          width: 78%;
          height: 78%;
          object-fit: contain;
          filter: drop-shadow(0 6px 14px rgba(125,211,252,0.55));
        }

        .splash-welcome {
          margin: 0 0 6px;
          font-family: "Sora", -apple-system, sans-serif;
          font-size: clamp(0.95rem, 2vw, 1.25rem);
          font-weight: 500;
          color: rgba(226, 232, 240, 0.92);
          letter-spacing: 0.02em;
          text-shadow: 0 4px 20px rgba(129,140,248,0.5);
          animation: splashFadeUp 700ms ease 300ms both;
        }
        .splash-brand {
          margin: 0;
          font-family: "Sora", -apple-system, sans-serif;
          font-weight: 800;
          font-size: clamp(2.2rem, 8vw, 4.8rem);
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: #fff;
          background: linear-gradient(120deg, #e0f2fe 0%, #a5b4fc 40%, #f0abfc 75%, #e0f2fe 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 6px 30px rgba(129,140,248,0.35);
          animation: splashFadeUp 800ms ease 500ms both, splashShine 3.5s linear 1.2s infinite;
        }
        .splash-tag {
          margin: 14px 0 0;
          font-family: "Inter", sans-serif;
          font-size: clamp(0.8rem, 1.5vw, 1rem);
          color: rgba(226, 232, 240, 0.75);
          letter-spacing: 0.24em;
          text-transform: uppercase;
          animation: splashFadeUp 800ms ease 900ms both;
        }
        .splash-progress {
          width: min(220px, 60vw);
          height: 2px;
          margin: 28px auto 0;
          background: rgba(255,255,255,0.14);
          border-radius: 4px;
          overflow: hidden;
          animation: splashFadeUp 600ms ease 1100ms both;
        }
        .splash-progress-bar {
          height: 100%;
          width: 0;
          background: linear-gradient(90deg, #7dd3fc, #a78bfa, #f0abfc);
          animation: splashBar 1400ms ease-out 1200ms forwards;
          box-shadow: 0 0 12px rgba(167,139,250,0.8);
        }

        @keyframes splashRise {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes splashLogoIn {
          0% { transform: rotateY(-180deg) scale(0.5); opacity: 0; }
          60% { transform: rotateY(15deg) scale(1.06); opacity: 1; }
          100% { transform: rotateY(0deg) scale(1); opacity: 1; }
        }
        @keyframes splashRing { to { transform: rotate(360deg); } }
        @keyframes splashShine {
          0% { background-position: 0% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes splashFloat {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(30px,-20px) scale(1.08); }
        }
        @keyframes splashDrift {
          to { transform: translate(4%, -3%); }
        }
        @keyframes splashFadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes splashBar {
          to { width: 100%; }
        }
      ` })
      ]
    }
  );
}
const appCss = "/assets/styles-CtUb1bCI.css";
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(SplashScreen, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-center" })
  ] }) });
}
const $$splitComponentImporter$F = () => import("./partner-signup-DPnmH5mc.mjs");
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
const $$splitComponentImporter$E = () => import("./partner-wQ9ylI_J.mjs");
const Route$E = createFileRoute("/partner")({
  component: lazyRouteComponent($$splitComponentImporter$E, "component")
});
const $$splitComponentImporter$D = () => import("./mutual-funds-CYklefdr.mjs");
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
const $$splitComponentImporter$C = () => import("./login-CV0qoXuB.mjs");
const Route$C = createFileRoute("/login")({
  head: () => ({
    meta: [{
      title: "Login / Register — Aarthvaahini"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$C, "component")
});
const $$splitComponentImporter$B = () => import("./loans-UwBVBL7u.mjs");
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
const $$splitComponentImporter$A = () => import("./insurance-CAuZcnRq.mjs");
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
const $$splitComponentImporter$z = () => import("./directors-tHHNmfqj.mjs");
const Route$z = createFileRoute("/directors")({
  component: lazyRouteComponent($$splitComponentImporter$z, "component")
});
const $$splitComponentImporter$y = () => import("./dashboard-DwwxRN4A.mjs");
const Route$y = createFileRoute("/dashboard")({
  component: lazyRouteComponent($$splitComponentImporter$y, "component")
});
const $$splitComponentImporter$x = () => import("./crm-BERsxvlS.mjs");
const Route$x = createFileRoute("/crm")({
  head: () => ({
    meta: [{
      title: "CRM — Aarthvaahini"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$x, "component")
});
const $$splitComponentImporter$w = () => import("./contact-C36bXGdL.mjs");
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
const $$splitComponentImporter$v = () => import("./cibil-CN5yaCKQ.mjs");
const Route$v = createFileRoute("/cibil")({
  head: () => ({
    meta: [{
      title: "Free CIBIL Score Check — Aarthvaahini"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$v, "component")
});
const $$splitComponentImporter$u = () => import("./blogs-Cf43PUZp.mjs");
const Route$u = createFileRoute("/blogs")({
  component: lazyRouteComponent($$splitComponentImporter$u, "component")
});
const $$splitComponentImporter$t = () => import("./admin-BNV3B-07.mjs");
const Route$t = createFileRoute("/admin")({
  head: () => ({
    meta: [{
      title: "Admin Panel — Aarthvaahini"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$t, "component")
});
const $$splitComponentImporter$s = () => import("./about-BT8r2_F5.mjs");
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
const $$splitComponentImporter$r = () => import("./index-D6bsX4p6.mjs");
const Route$r = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$r, "component")
});
const $$splitComponentImporter$q = () => import("./partner.index-D3Sgk0j_.mjs");
const Route$q = createFileRoute("/partner/")({
  component: lazyRouteComponent($$splitComponentImporter$q, "component")
});
const $$splitComponentImporter$p = () => import("./crm.index-B3I2Lh2v.mjs");
const Route$p = createFileRoute("/crm/")({
  component: lazyRouteComponent($$splitComponentImporter$p, "component")
});
const $$splitComponentImporter$o = () => import("./partner.profile-CnZw9nrE.mjs");
const Route$o = createFileRoute("/partner/profile")({
  component: lazyRouteComponent($$splitComponentImporter$o, "component")
});
const $$splitComponentImporter$n = () => import("./partner.leads-B2v1fmR0.mjs");
const Route$n = createFileRoute("/partner/leads")({
  component: lazyRouteComponent($$splitComponentImporter$n, "component")
});
const $$splitComponentImporter$m = () => import("./crm.whatsapp-MtZToiwm.mjs");
const Route$m = createFileRoute("/crm/whatsapp")({
  head: () => ({
    meta: [{
      title: "WhatsApp — CRM"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$m, "component")
});
const $$splitComponentImporter$l = () => import("./crm.tasks-B1fKscDQ.mjs");
const Route$l = createFileRoute("/crm/tasks")({
  component: lazyRouteComponent($$splitComponentImporter$l, "component")
});
const $$splitComponentImporter$k = () => import("./crm.settings-CT0QOZZF.mjs");
const Route$k = createFileRoute("/crm/settings")({
  component: lazyRouteComponent($$splitComponentImporter$k, "component")
});
const $$splitComponentImporter$j = () => import("./crm.schedule-DqhJrA4u.mjs");
const Route$j = createFileRoute("/crm/schedule")({
  head: () => ({
    meta: [{
      title: "Schedule — CRM"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const $$splitComponentImporter$i = () => import("./crm.reports-DrWkehqI.mjs");
const Route$i = createFileRoute("/crm/reports")({
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const $$splitComponentImporter$h = () => import("./crm.rejected-BRP3ILWs.mjs");
const Route$h = createFileRoute("/crm/rejected")({
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./crm.partners-BQRmh7d_.mjs");
const Route$g = createFileRoute("/crm/partners")({
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./crm.mutual-funds-Btqg8iKr.mjs");
const Route$f = createFileRoute("/crm/mutual-funds")({
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./crm.login-x5N2bgHp.mjs");
const Route$e = createFileRoute("/crm/login")({
  validateSearch: (s) => ({
    unauthorized: s.unauthorized === "1" ? "1" : void 0
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./crm.loans-CgTwxg5j.mjs");
const Route$d = createFileRoute("/crm/loans")({
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./crm.leads-Drx0GIBK.mjs");
const Route$c = createFileRoute("/crm/leads")({
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./crm.insurance-BtBTUlMS.mjs");
const Route$b = createFileRoute("/crm/insurance")({
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./crm.employees-D4Tv1yVk.mjs");
const Route$a = createFileRoute("/crm/employees")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./crm.documents-kCiXN90o.mjs");
const Route$9 = createFileRoute("/crm/documents")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./crm.customers-CDjizU2m.mjs");
const Route$8 = createFileRoute("/crm/customers")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./crm.cms-DZUEyMNC.mjs");
const Route$7 = createFileRoute("/crm/cms")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./crm.banks-vA1MlKbN.mjs");
const Route$6 = createFileRoute("/crm/banks")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./crm.activity-BgxGpiyb.mjs");
const Route$5 = createFileRoute("/crm/activity")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./sip-guide-C5mNQnBH.mjs");
const Route$4 = createFileRoute("/blogs/sip-guide")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./home-loan-guide-gVWSOuRc.mjs");
const Route$3 = createFileRoute("/blogs/home-loan-guide")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./cibil-score-DUiyeW1B.mjs");
const Route$2 = createFileRoute("/blogs/cibil-score")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./admin.whatsapp-C2nEcNay.mjs");
const Route$1 = createFileRoute("/admin/whatsapp")({
  head: () => ({
    meta: [{
      title: "WhatsApp Sender — Admin"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./admin.employees-BPOtgb2E.mjs");
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
  logoUrl as l,
  router as r,
  supabase as s,
  useAuth as u
};
