import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { L as Label } from "./label-JU3yqRBo.mjs";
import { B as Button } from "./button-TjZkfKyC.mjs";
import { s as supabase } from "./router-fcTUeZV3.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { a as ArrowLeft, aG as Users, as as ShieldCheck, aA as TrendingUp, a8 as Mail, a5 as Lock, a4 as LoaderCircle } from "../_libs/lucide-react.mjs";
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
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
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
const aarthvaahiniLogo = "/assets/aarthvaahini-BNis0Sfd.png";
function CrmLoginPage() {
  const nav = useNavigate();
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const check = async () => {
      const {
        data: {
          session
        }
      } = await supabase.auth.getSession();
      if (!session?.user) return;
      const {
        data: roles,
        error
      } = await supabase.from("user_roles").select("role").eq("user_id", session.user.id);
      if (error) return;
      const list = (roles ?? []).map((r) => r.role);
      const staff = list.some((r) => ["admin", "manager", "sales_executive", "operations", "insurance_executive", "mf_executive"].includes(r));
      if (staff) nav({
        to: "/crm"
      });
      else if (list.includes("partner")) nav({
        to: "/partner"
      });
    };
    check();
  }, [nav]);
  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const {
      error,
      data
    } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) {
      setLoading(false);
      return toast.error(error.message);
    }
    const userId = data.user?.id;
    if (!userId) {
      setLoading(false);
      return toast.error("Login failed. Please try again.");
    }
    const {
      data: roles,
      error: roleError
    } = await supabase.from("user_roles").select("role").eq("user_id", userId);
    if (roleError) {
      setLoading(false);
      return toast.error("Access check failed. Please try again.");
    }
    const list = (roles ?? []).map((r) => r.role);
    const staff = list.some((r) => ["admin", "manager", "sales_executive", "operations", "insurance_executive", "mf_executive"].includes(r));
    const partner = list.includes("partner");
    setLoading(false);
    if (staff) {
      toast.success("Welcome back!");
      return nav({
        to: "/crm"
      });
    }
    if (partner) {
      toast.success("Welcome, Partner!");
      return nav({
        to: "/partner"
      });
    }
    await supabase.auth.signOut();
    return toast.error("This account does not have CRM or Partner access.");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex min-h-screen w-full overflow-hidden bg-[#0b1437]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-0 z-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-24 -top-32 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-24 top-1/2 h-[28rem] w-[28rem] rounded-full bg-indigo-500/30 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-20 hidden w-1/2 flex-col justify-between p-12 text-white lg:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/", className: "relative z-50 inline-flex pointer-events-auto items-center gap-2 rounded-lg px-1 py-1 text-sm font-medium text-blue-200/80 transition hover:text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
          "Back to website"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2 shadow-lg shadow-blue-500/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: aarthvaahiniLogo, alt: "Aarthvaahini Logo", className: "h-full w-full object-contain" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold tracking-tight", children: "Aarthvaahini" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-blue-300/80", children: "CRM" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-12 text-4xl font-bold leading-tight", children: [
          "Manage leads, loans &",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text text-transparent", children: "grow faster" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-md text-sm leading-relaxed text-blue-100/70", children: "Sign in to your staff workspace to manage customers, track loan cases, insurance policies and mutual fund SIPs from one elegant dashboard." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-4", children: [{
          Icon: Users,
          label: "Unified lead & customer pipeline"
        }, {
          Icon: ShieldCheck,
          label: "Secure, role-based access"
        }, {
          Icon: TrendingUp,
          label: "Live reports & TAT tracking"
        }].map(({
          Icon,
          label
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-sm text-blue-100/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-blue-300" }) }),
          label
        ] }, label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-blue-200/60", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Aarthvaahini. All rights reserved."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-20 flex w-full items-center justify-center p-6 lg:w-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/", className: "relative z-50 mb-6 inline-flex pointer-events-auto items-center gap-2 rounded-lg px-1 py-1 text-sm font-medium text-blue-200/80 transition hover:text-white lg:hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        "Back"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2 shadow-lg shadow-blue-500/30 lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: aarthvaahiniLogo, alt: "Aarthvaahini Logo", className: "h-full w-full object-contain" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-white", children: "Welcome back" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-blue-100/60", children: "Sign in to your CRM workspace" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: signIn, className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium text-blue-100/80", children: "Email address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-200/50" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", required: true, placeholder: "you@company.com", className: "h-11 border-white/10 bg-white/5 pl-9 text-white placeholder:text-blue-200/40 focus-visible:border-blue-400 focus-visible:ring-blue-400/30", value: email, onChange: (e) => setEmail(e.target.value) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-medium text-blue-100/80", children: "Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-200/50" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "password", required: true, placeholder: "••••••••", className: "h-11 border-white/10 bg-white/5 pl-9 text-white placeholder:text-blue-200/40 focus-visible:border-blue-400 focus-visible:ring-blue-400/30", value: password, onChange: (e) => setPassword(e.target.value) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", disabled: loading, className: "h-11 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-semibold shadow-lg shadow-blue-500/30 hover:from-blue-500 hover:to-indigo-500", children: [
            loading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
            loading ? "Signing in…" : "Sign in to CRM"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 text-center text-xs text-blue-100/50", children: "Need an account? Contact your administrator to be assigned a staff role." })
      ] })
    ] }) })
  ] });
}
export {
  CrmLoginPage as component
};
