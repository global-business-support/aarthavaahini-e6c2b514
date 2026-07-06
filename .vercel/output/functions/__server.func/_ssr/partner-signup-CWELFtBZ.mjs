import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { H as Header, F as Footer } from "./Footer-DFuQ0Nk0.mjs";
import { B as Button } from "./button-TjZkfKyC.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { L as Label } from "./label-JU3yqRBo.mjs";
import { T as Textarea } from "./textarea-DtF-dDz-.mjs";
import { s as supabase } from "./router-TlO5aQkT.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { I as INDIA_STATES, c as citiesForState } from "./india-cities-D5SYeB3D.mjs";
import { V as Handshake, y as CircleCheck, a4 as LoaderCircle } from "../_libs/lucide-react.mjs";
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
const CATEGORIES = ["DSA / Connector", "Bank Partner", "NBFC", "Insurance Agent", "Mutual Fund Distributor", "Referral Partner", "Other"];
function PartnerSignupPage() {
  const [f, setF] = reactExports.useState({
    name: "",
    organisation: "",
    category: CATEGORIES[0],
    phone: "",
    email: "",
    city: "",
    state: "",
    experience: "",
    message: ""
  });
  const [busy, setBusy] = reactExports.useState(false);
  const [done, setDone] = reactExports.useState(false);
  const submit = async (e) => {
    e.preventDefault();
    if (!f.name.trim() || !f.phone.trim()) {
      toast.error("Name and phone are required");
      return;
    }
    setBusy(true);
    const {
      error
    } = await supabase.from("leads").insert({
      full_name: f.name.trim(),
      lead_name: f.name.trim(),
      phone: f.phone.trim(),
      email: f.email.trim() || null,
      city: f.city.trim() || null,
      state: f.state.trim() || null,
      product_type: "partner",
      product_name: f.category,
      lead_source: "Partner Signup",
      status: "New",
      message: `Partner Application
Organisation: ${f.organisation || "—"}
Category: ${f.category}
Experience: ${f.experience || "—"}
Notes: ${f.message || "—"}`
    });
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Application submitted! Our team will contact you.");
    setDone(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "container mx-auto px-4 pb-16 pt-24 sm:px-6 sm:pt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-[#17357e]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#17357e]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Handshake, { className: "h-3.5 w-3.5" }),
          " Channel Partner Program"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-3xl font-bold text-[#07142f] sm:text-4xl md:text-5xl", children: "Become an Aarthvaahini Partner" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base", children: "Grow your income by referring loans, insurance and mutual fund customers. Get dedicated CRM access, real-time payout tracking and end-to-end operations support." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid gap-6 lg:grid-cols-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 lg:col-span-2", children: ["Attractive commission on every disbursement", "Dedicated Partner Portal with lead tracking", "Access to 25+ banks & NBFCs", "Marketing collateral & training support", "Fast payouts and transparent reporting"].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 rounded-2xl border border-sky-100 bg-white p-4 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-emerald-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-slate-700", children: b })
        ] }, b)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3", children: done ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-emerald-200 bg-white p-10 text-center shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mx-auto h-14 w-14 text-emerald-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-2xl font-bold text-slate-900", children: "Thank you!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-slate-600", children: "Your partner application has been received. Our team will contact you within 24 hours to activate your account." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "mt-6 rounded-full bg-gradient-to-r from-[#17357e] to-blue-600", onClick: () => setDone(false), children: "Submit another" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-4 rounded-3xl border border-blue-100 bg-white p-6 shadow-lg sm:p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full Name *", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, value: f.name, onChange: (e) => setF({
              ...f,
              name: e.target.value
            }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Organisation", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: f.organisation, onChange: (e) => setF({
              ...f,
              organisation: e.target.value
            }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone *", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, type: "tel", value: f.phone, onChange: (e) => setF({
              ...f,
              phone: e.target.value
            }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", value: f.email, onChange: (e) => setF({
              ...f,
              email: e.target.value
            }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "State", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "h-9 w-full rounded-md border border-input bg-white px-3 text-sm", value: f.state ?? "", onChange: (e) => setF({
              ...f,
              state: e.target.value,
              city: ""
            }), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select state" }),
              INDIA_STATES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s }, s))
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "City", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "h-9 w-full rounded-md border border-input bg-white px-3 text-sm disabled:opacity-60", value: f.city, onChange: (e) => setF({
              ...f,
              city: e.target.value
            }), disabled: !f.state, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: f.state ? "Select city" : "Select state first" }),
              citiesForState(f.state ?? "").map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, children: c }, c))
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Partner Category", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: "h-9 w-full rounded-md border border-input bg-white px-3 text-sm", value: f.category, onChange: (e) => setF({
              ...f,
              category: e.target.value
            }), children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, children: c }, c)) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Years of Experience", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: f.experience, onChange: (e) => setF({
              ...f,
              experience: e.target.value
            }), placeholder: "e.g. 3 years in home loans" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Message", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 3, value: f.message, onChange: (e) => setF({
              ...f,
              message: e.target.value
            }), placeholder: "Tell us about your existing customer base and products you'd like to offer." }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", disabled: busy, className: "w-full rounded-full bg-gradient-to-r from-[#17357e] to-blue-600 py-6 text-base font-semibold text-white", children: [
            busy && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
            "Submit Partner Application"
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold uppercase tracking-wide text-slate-600", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5", children })
  ] });
}
export {
  PartnerSignupPage as component
};
