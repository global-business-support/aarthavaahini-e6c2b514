import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { H as Header, F as Footer } from "./Footer-D06-vRpl.mjs";
import { C as Card, I as Input, s as supabase } from "./router-Yefiub0V.mjs";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-CPC2IVpg.mjs";
import { L as Label } from "./label-Cv4sKckL.mjs";
import { B as Button } from "./button-l9t-pzF9.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { L as LoaderCircle } from "../_libs/lucide-react.mjs";
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
import "./dialog-CoSbALlQ.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "./textarea-CeK7sWgP.mjs";
import "../_libs/radix-ui__react-accordion.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-switch.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-tabs.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/@radix-ui/react-use-is-hydrated+[...].mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/class-variance-authority.mjs";
function LoginPage() {
  const nav = useNavigate();
  const [loading, setLoading] = reactExports.useState(false);
  const [li, setLi] = reactExports.useState({
    email: "",
    password: ""
  });
  const [su, setSu] = reactExports.useState({
    name: "",
    phone: "",
    email: "",
    password: ""
  });
  const goAfterLogin = async (userId) => {
    const {
      data
    } = await supabase.from("user_roles").select("role").eq("user_id", userId);
    const roles = (data ?? []).map((r) => r.role);
    if (roles.includes("admin")) nav({
      to: "/admin"
    });
    else if (roles.some((r) => ["manager", "sales_executive", "operations", "insurance_executive", "mf_executive"].includes(r))) nav({
      to: "/crm"
    });
    else nav({
      to: "/dashboard"
    });
  };
  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const {
      data,
      error
    } = await supabase.auth.signInWithPassword({
      email: li.email,
      password: li.password
    });
    setLoading(false);
    if (error) return toast.error(error.message);
    toast.success("Welcome back!");
    if (data.user) await goAfterLogin(data.user.id);
  };
  const signUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    const {
      data,
      error
    } = await supabase.auth.signUp({
      email: su.email,
      password: su.password,
      options: {
        emailRedirectTo: `${window.location.origin}/`,
        data: {
          full_name: su.name,
          phone: su.phone
        }
      }
    });
    setLoading(false);
    if (error) return toast.error(error.message);
    toast.success("Account created!");
    if (data.user) await goAfterLogin(data.user.id);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "container mx-auto flex flex-1 items-center justify-center px-6 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "w-full max-w-md p-7 shadow-elegant", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "bg-gradient-to-r from-[#17357e] to-blue-600 bg-clip-text text-center font-display text-3xl font-bold text-transparent", children: "Aarthvaahini Portal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-center text-sm text-muted-foreground", children: "Login or create a new account." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "login", className: "mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "login", children: "Login" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "register", children: "Register" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "login", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: signIn, className: "mt-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", required: true, className: "mt-1.5 h-11", value: li.email, onChange: (e) => setLi({
              ...li,
              email: e.target.value
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "password", required: true, className: "mt-1.5 h-11", value: li.password, onChange: (e) => setLi({
              ...li,
              password: e.target.value
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", disabled: loading, className: "w-full bg-gradient-to-r from-[#17357e] to-blue-600 text-white", children: [
            loading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
            "Login"
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "register", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: signUp, className: "mt-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Full Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, className: "mt-1.5 h-11", value: su.name, onChange: (e) => setSu({
              ...su,
              name: e.target.value
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Mobile" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, className: "mt-1.5 h-11", value: su.phone, onChange: (e) => setSu({
              ...su,
              phone: e.target.value
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", required: true, className: "mt-1.5 h-11", value: su.email, onChange: (e) => setSu({
              ...su,
              email: e.target.value
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "password", required: true, minLength: 6, className: "mt-1.5 h-11", value: su.password, onChange: (e) => setSu({
              ...su,
              password: e.target.value
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", disabled: loading, className: "w-full bg-gradient-to-r from-[#17357e] to-blue-600 text-white", children: [
            loading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
            "Create Account"
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  LoginPage as component
};
