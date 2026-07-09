import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { H as Header, F as Footer } from "./Footer-X7G0v4le.mjs";
import { C as Card } from "./card-RGlIzTYo.mjs";
import { B as Button } from "./button-TjZkfKyC.mjs";
import { s as supabase } from "./router-fcTUeZV3.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { ae as MessageSquareText, aj as Phone, a8 as Mail, a9 as MapPin, y as CircleCheck, a4 as LoaderCircle } from "../_libs/lucide-react.mjs";
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
import "./input-C0QjszdI.mjs";
import "./label-JU3yqRBo.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/class-variance-authority.mjs";
import "./textarea-DtF-dDz-.mjs";
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
const SERVICE_OPTIONS = ["Home Loan", "Personal Loan", "Business Loan", "Working Capital Loan", "Machinery & Equipment Loan", "Loan Against Property", "Insurance", "Corporate Insurance", "Keyman Insurance", "Mutual Funds", "PMS", "SIF", "AIF", "Private Equity", "Alternative Assets", "High Rental Yield", "Other"];
function ContactPage() {
  const [loading, setLoading] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    phone: "",
    email: "",
    service: "Personal Loan",
    amount: "",
    message: ""
  });
  const inputClass = "h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100";
  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      toast.error("Name is required");
      return;
    }
    if (!form.phone.trim()) {
      toast.error("Phone number is required");
      return;
    }
    setLoading(true);
    const {
      error
    } = await supabase.from("leads").insert({
      lead_name: form.name.trim(),
      full_name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim() || null,
      product_type: "contact",
      product_name: form.service,
      loan_type: form.service,
      amount: form.amount ? Number(form.amount) : null,
      loan_amount: form.amount ? Number(form.amount) : null,
      message: form.message.trim() || null,
      lead_source: "Website Contact Page",
      status: "New"
    });
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Enquiry submitted successfully!");
    setForm({
      name: "",
      phone: "",
      email: "",
      service: "Personal Loan",
      amount: "",
      message: ""
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-b from-white via-sky-50/40 to-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container mx-auto px-4 py-20 sm:px-6 sm:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold uppercase tracking-[0.25em] text-blue-600", children: "Contact Aarthvaahini" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 font-display text-4xl font-bold text-slate-950 sm:text-5xl md:text-6xl", children: [
          "Let’s Discuss Your",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: " Financial Goals" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600", children: "Share your requirement and our advisory team will connect with you for loans, insurance, wealth solutions, private equity or alternative assets." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.2fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "relative overflow-hidden rounded-[32px] border border-blue-100 bg-gradient-to-br from-[#17357e] via-blue-700 to-sky-500 p-7 text-white shadow-2xl shadow-blue-500/20 sm:p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/15 blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquareText, { className: "h-7 w-7" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 text-3xl font-bold", children: "Free Consultation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-7 text-white/85", children: "Get structured guidance from our financial consultants. We help you explore suitable options based on your profile, requirement and financial goals." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { icon: Phone, title: "Call Support", text: "Our team will contact you after form submission." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { icon: Mail, title: "Email Assistance", text: "Get support for loans, insurance and investments." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(InfoRow, { icon: MapPin, title: "Multiple Offices", text: "Advisor support through our business locations." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-2xl bg-white/12 p-4 backdrop-blur", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Why contact us?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2 text-sm text-white/85", children: ["Corporate financial consultants", "Tailored solutions to meet your goals", "Loan options from 50+ financiers", "Insurance, wealth and alternative asset advisory"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
              ] }, item)) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-[32px] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200/70 sm:p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-slate-950", children: "Submit Your Enquiry" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-6 text-slate-500", children: "Fill the form and our expert will contact you shortly." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-sm font-semibold text-[#17357e]", children: "Full Name *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Enter your full name", value: form.name, onChange: (e) => setForm((prev) => ({
                ...prev,
                name: e.target.value
              })), required: true, className: inputClass })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-sm font-semibold text-[#17357e]", children: "Phone *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", placeholder: "+91 98XXXXXXXX", value: form.phone, onChange: (e) => setForm((prev) => ({
                ...prev,
                phone: e.target.value
              })), required: true, className: inputClass })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-sm font-semibold text-[#17357e]", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", placeholder: "Enter your email", value: form.email, onChange: (e) => setForm((prev) => ({
                ...prev,
                email: e.target.value
              })), className: inputClass })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-sm font-semibold text-[#17357e]", children: "Service Interested" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: form.service, onChange: (e) => setForm((prev) => ({
                ...prev,
                service: e.target.value
              })), className: `${inputClass} cursor-pointer`, children: SERVICE_OPTIONS.map((service) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: service, children: service }, service)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-sm font-semibold text-[#17357e]", children: "Amount / Requirement Value" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", placeholder: "Enter amount", value: form.amount, onChange: (e) => setForm((prev) => ({
                ...prev,
                amount: e.target.value
              })), className: inputClass })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-2 block text-sm font-semibold text-[#17357e]", children: "Message" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 4, placeholder: "Write your requirement...", value: form.message, onChange: (e) => setForm((prev) => ({
                ...prev,
                message: e.target.value
              })), className: "w-full resize-none rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", disabled: loading, className: "h-12 w-full rounded-xl bg-gradient-to-r from-[#17357e] via-blue-600 to-cyan-500 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.01] hover:opacity-95", children: [
              loading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
              "Submit Enquiry"
            ] }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function InfoRow({
  icon: Icon,
  title,
  text
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-white/75", children: text })
    ] })
  ] });
}
export {
  ContactPage as component
};
