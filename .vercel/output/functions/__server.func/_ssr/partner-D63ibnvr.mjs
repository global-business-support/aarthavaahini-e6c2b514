import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, e as useRouterState, L as Link, O as Outlet } from "../_libs/tanstack__react-router.mjs";
import { c as cn, s as supabase } from "./router-Yefiub0V.mjs";
import { B as Button } from "./button-l9t-pzF9.mjs";
import "../_libs/sonner.mjs";
import { L as LoaderCircle, H as Handshake, l as LayoutDashboard, U as Users, m as CircleUserRound, b as LogOut } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-switch.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/class-variance-authority.mjs";
function usePartnerAuth() {
  const [user, setUser] = reactExports.useState(null);
  const [isPartner, setIsPartner] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    let mounted = true;
    const load = async (u) => {
      if (!u) {
        if (mounted) {
          setIsPartner(false);
          setLoading(false);
        }
        return;
      }
      const { data } = await supabase.from("user_roles").select("role").eq("user_id", u.id);
      if (!mounted) return;
      setIsPartner((data ?? []).some((r) => r.role === "partner"));
      setLoading(false);
    };
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
      setTimeout(() => load(session?.user ?? null), 0);
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      load(session?.user ?? null);
    });
    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);
  return { user, isPartner, loading };
}
const NAV = [
  { to: "/partner", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/partner/leads", label: "My Leads", icon: Users },
  { to: "/partner/profile", label: "Profile", icon: CircleUserRound }
];
function PartnerLayout() {
  const { user, isPartner, loading } = usePartnerAuth();
  const nav = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  reactExports.useEffect(() => {
    if (loading) return;
    if (!user) nav({ to: "/crm/login" });
    else if (!isPartner) nav({ to: "/crm/login", search: { unauthorized: "1" } });
  }, [loading, user, isPartner, nav]);
  if (loading || !user || !isPartner) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-sky-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-sky-400" }) });
  }
  const signOut = async () => {
    await supabase.auth.signOut();
    nav({ to: "/crm/login" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen w-full bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "hidden w-64 shrink-0 flex-col border-r border-emerald-200 bg-gradient-to-b from-emerald-50 to-teal-50 md:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-emerald-200/60 px-5 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Handshake, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-emerald-900", children: "Partner Portal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-emerald-600", children: "Aarthvaahini" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex-1 space-y-1 px-3 py-4", children: NAV.map((item) => {
        const Icon = item.icon;
        const active = item.exact ? pathname === item.to : pathname.startsWith(item.to);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: item.to,
            className: cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition",
              active ? "bg-white text-emerald-700 shadow-sm ring-1 ring-emerald-200" : "text-emerald-800/80 hover:bg-white/70"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }),
              " ",
              item.label
            ]
          },
          item.to
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-emerald-200/60 p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", className: "w-full justify-start text-red-600 hover:bg-red-50 hover:text-red-700", onClick: signOut, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "mr-2 h-4 w-4" }),
        " Sign out"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-1 flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-20 flex h-14 items-center gap-3 border-b border-emerald-100 bg-white/80 px-4 backdrop-blur md:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-emerald-500", children: "PARTNER" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-slate-900", children: user.email })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", className: "ml-auto md:hidden", onClick: signOut, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 overflow-auto p-4 md:p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) })
    ] })
  ] });
}
const SplitComponent = PartnerLayout;
export {
  SplitComponent as component
};
