import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { H as Header, m as mutualFunds, F as Footer } from "./Footer-CPf1dOai.mjs";
import { A as AnimatedBackground, P as ProductHeroSlider, a as ProductPage } from "./AnimatedBackground-B6Gdm_Pt.mjs";
import "../_libs/sonner.mjs";
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
import "../_libs/lucide-react.mjs";
import "./button-TjZkfKyC.mjs";
import "../_libs/class-variance-authority.mjs";
import "./input-C0QjszdI.mjs";
import "./label-JU3yqRBo.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "./textarea-DtF-dDz-.mjs";
import "./router-DSDPkTTS.mjs";
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
import "./logo-DoXs6W9W.mjs";
import "../_libs/radix-ui__react-accordion.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "./card-RGlIzTYo.mjs";
import "./badge-DyfXZgLs.mjs";
function formatINR(n) {
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(
    Math.round(Math.max(0, n))
  );
}
function MfCalculator() {
  const [mode, setMode] = reactExports.useState("sip");
  const [years, setYears] = reactExports.useState(10);
  const [rate, setRate] = reactExports.useState(12);
  const [sip, setSip] = reactExports.useState(1e4);
  const [lump, setLump] = reactExports.useState(5e5);
  const [goal, setGoal] = reactExports.useState(5e6);
  const result = reactExports.useMemo(() => {
    const r = rate / 12 / 100;
    const n = years * 12;
    if (mode === "sip") {
      const fv = sip * ((Math.pow(1 + r, n) - 1) / r * (1 + r));
      const invested2 = sip * n;
      return {
        fv,
        invested: invested2,
        gains: fv - invested2
      };
    }
    if (mode === "lumpsum") {
      const fv = lump * Math.pow(1 + rate / 100, years);
      return {
        fv,
        invested: lump,
        gains: fv - lump
      };
    }
    const required = goal * r / (Math.pow(1 + r, n) - 1) / (1 + r);
    const invested = required * n;
    return {
      fv: goal,
      invested,
      gains: goal - invested,
      required
    };
  }, [mode, sip, lump, goal, years, rate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "mf-calculator", className: "bg-white py-16 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center text-3xl font-bold text-[#07142f] sm:text-4xl md:text-5xl", children: "Mutual Fund Calculator" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-center text-sm text-gray-500 sm:text-base", children: "Plan SIP, lumpsum or a financial goal — all in one place." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-10 max-w-6xl rounded-3xl bg-[#f7f9ff] p-5 shadow-xl sm:p-8 lg:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-8 flex w-fit max-w-full gap-1 overflow-x-auto rounded-full bg-white p-1 shadow-sm", children: ["sip", "lumpsum", "goal"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setMode(m),
          className: `whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold capitalize transition sm:px-5 sm:py-2 sm:text-sm ${mode === m ? "bg-gradient-to-r from-[#17357e] to-blue-600 text-white" : "text-gray-600 hover:bg-gray-50"}`,
          children: m === "sip" ? "SIP" : m === "lumpsum" ? "Lumpsum" : "Goal Planner"
        },
        m
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 lg:grid-cols-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-7 lg:col-span-3", children: [
          mode === "sip" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Slider,
            {
              label: "Monthly SIP",
              value: `₹ ${formatINR(sip)}`,
              v: sip,
              min: 500,
              max: 2e5,
              step: 500,
              onChange: setSip,
              prefix: "₹"
            }
          ),
          mode === "lumpsum" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Slider,
            {
              label: "One-time Investment",
              value: `₹ ${formatINR(lump)}`,
              v: lump,
              min: 1e3,
              max: 1e7,
              step: 1e3,
              onChange: setLump,
              prefix: "₹"
            }
          ),
          mode === "goal" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Slider,
            {
              label: "Goal Amount",
              value: `₹ ${formatINR(goal)}`,
              v: goal,
              min: 1e5,
              max: 5e7,
              step: 5e4,
              onChange: setGoal,
              prefix: "₹"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Slider,
            {
              label: "Investment Period",
              value: `${years} Years`,
              v: years,
              min: 1,
              max: 40,
              step: 1,
              onChange: setYears,
              suffix: "Yr"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Slider,
            {
              label: "Expected Return (p.a.)",
              value: `${rate}%`,
              v: rate,
              min: 4,
              max: 25,
              step: 0.5,
              onChange: setRate,
              suffix: "%"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 lg:col-span-2", children: [
          mode === "goal" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-gradient-to-r from-[#17357e] to-blue-600 p-5 text-center text-white sm:p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-white/80 sm:text-sm", children: "Required Monthly SIP" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mt-2 text-3xl font-bold sm:text-4xl", children: [
              "₹ ",
              formatINR(result.required)
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-gradient-to-r from-[#17357e] to-blue-600 p-5 text-center text-white sm:p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-white/80 sm:text-sm", children: "Future Value" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mt-2 text-3xl font-bold sm:text-4xl", children: [
              "₹ ",
              formatINR(result.fv)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Stat,
            {
              label: "Total Invested",
              value: `₹ ${formatINR(result.invested)}`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Stat,
            {
              label: "Estimated Gains",
              value: `₹ ${formatINR(result.gains)}`
            }
          )
        ] })
      ] })
    ] })
  ] }) });
}
function Slider({
  label,
  value,
  v,
  min,
  max,
  step,
  onChange,
  prefix,
  suffix
}) {
  const handleChange = (num) => {
    if (Number.isNaN(num)) return;
    if (num < min) {
      onChange(min);
      return;
    }
    if (num > max) {
      onChange(max);
      return;
    }
    onChange(num);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-semibold text-slate-900 sm:text-lg", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-10 w-full items-center rounded-lg border border-blue-200 bg-white px-3 shadow-sm sm:w-[155px]", children: [
        prefix && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-2 text-sm font-semibold text-slate-500", children: prefix }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            value: v,
            min,
            max,
            step,
            onChange: (e) => handleChange(Number(e.target.value)),
            className: "w-full bg-transparent text-right text-base font-bold text-blue-600 outline-none"
          }
        ),
        suffix && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-sm font-semibold text-blue-600", children: suffix })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "range",
        min,
        max,
        step,
        value: v,
        onChange: (e) => handleChange(Number(e.target.value)),
        className: "w-full accent-blue-600"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex justify-between text-xs font-medium text-slate-400", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: prefix === "₹" ? `₹ ${formatINR(min)}` : `${min}${suffix ?? ""}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-600", children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: prefix === "₹" ? `₹ ${formatINR(max)}` : `${max}${suffix ?? ""}` })
    ] })
  ] });
}
function Stat({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-600", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-right font-semibold text-[#07142f]", children: value })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background relative", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedBackground, { variant: "mutual-funds" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative isolate overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProductHeroSlider, { variant: "watermark", slides: [{
      title: "",
      subtitle: "",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80"
    }, {
      title: "",
      subtitle: "",
      image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=1600&q=80"
    }, {
      title: "",
      subtitle: "",
      image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1600&q=80"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProductPage, { title: "Mutual Funds", subtitle: "Start investing with SIP from just ₹500 — the smartest path to long-term wealth creation.", items: mutualFunds, productType: "mutual_fund", accentClass: "text-[#183c93]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MfCalculator, {})
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
] });
export {
  SplitComponent as component
};
