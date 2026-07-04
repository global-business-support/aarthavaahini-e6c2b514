import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { H as Header, F as Footer } from "./Footer-JyouNfQy.mjs";
import { C as Card } from "./card-RGlIzTYo.mjs";
import { B as Button } from "./button-TjZkfKyC.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { L as Label } from "./label-JU3yqRBo.mjs";
import { s as supabase } from "./router-BNZhdFpk.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { S as Gauge, a4 as LoaderCircle, y as CircleCheck } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "./dialog-RBdmK4nU.mjs";
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
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
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
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "./textarea-DtF-dDz-.mjs";
import "./logo-DoXs6W9W.mjs";
import "../_libs/radix-ui__react-accordion.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/radix-ui__react-label.mjs";
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
const PAN_REGEX = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
function scoreFromPan(pan) {
  let h = 0;
  for (let i = 0; i < pan.length; i++) h = h * 31 + pan.charCodeAt(i) >>> 0;
  return 640 + h % 181;
}
function CibilPage() {
  const [loading, setLoading] = reactExports.useState(false);
  const [score, setScore] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState({
    full_name: "",
    pan: "",
    phone: ""
  });
  const check = async (e) => {
    e.preventDefault();
    const name = form.full_name.trim();
    const pan = form.pan.trim().toUpperCase();
    const phone = form.phone.trim();
    if (name.length < 2) return toast.error("Please enter your full name");
    if (!PAN_REGEX.test(pan)) return toast.error("Enter a valid PAN (e.g. ABCDE1234F)");
    if (phone.length < 10) return toast.error("Enter a valid 10-digit mobile");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    const s = scoreFromPan(pan);
    setScore(s);
    await supabase.from("leads").insert({
      full_name: name,
      lead_name: name,
      phone,
      pan,
      cibil_score: s,
      product_type: "cibil",
      product_name: "CIBIL Score Check",
      lead_source: "Website",
      status: "New",
      message: `CIBIL request — PAN ${pan} — Score ${s}`
    });
    setLoading(false);
  };
  const band = score == null ? "" : score >= 780 ? "Excellent" : score >= 720 ? "Very Good" : score >= 680 ? "Good" : "Fair";
  const bandColor = score == null ? "" : score >= 720 ? "text-success" : score >= 680 ? "text-amber-600" : "text-orange-600";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "container mx-auto px-6 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-start gap-10 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-8 shadow-elegant", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Gauge, { className: "h-3.5 w-3.5" }),
          " 100% Free • No score impact"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 font-display text-4xl font-bold", children: [
          "Check your ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "CIBIL Score" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground" }),
        "Check your credit score in just 30 seconds.",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: check, className: "mt-6 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Full Name (as per PAN)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "mt-1.5 h-11", required: true, value: form.full_name, onChange: (e) => setForm({
              ...form,
              full_name: e.target.value
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "PAN" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "mt-1.5 h-11", placeholder: "ABCDE1234F", value: form.pan, onChange: (e) => setForm({
                ...form,
                pan: e.target.value.toUpperCase()
              }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Mobile" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "mt-1.5 h-11", required: true, value: form.phone, onChange: (e) => setForm({
                ...form,
                phone: e.target.value
              }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", disabled: loading, size: "lg", className: "w-full bg-gradient-primary text-primary-foreground shadow-glow", children: [
            loading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
            "Get My Score — Free"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "* Demo mode — Contact the administrator to enable real-time CIBIL API integration." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 grid gap-2 text-sm sm:grid-cols-2", children: ["Soft pull — no impact", "Bank-level encryption", "Personalised loan offers", "Score improvement tips"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-primary-glow" }),
          " ",
          t
        ] }, t)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "flex items-center justify-center p-10 shadow-elegant", children: score == null ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Gauge, { className: "mx-auto h-20 w-20 opacity-40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm", children: "Fill out the form and get your score." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Your Score" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-7xl font-bold text-gradient", children: score }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-2 text-lg font-bold ${bandColor}`, children: band }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Range: 300 – 900" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  CibilPage as component
};
