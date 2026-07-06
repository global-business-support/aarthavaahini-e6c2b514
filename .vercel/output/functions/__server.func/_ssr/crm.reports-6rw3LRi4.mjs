import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as Card } from "./card-RGlIzTYo.mjs";
import { s as supabase } from "./router-Caaku3dA.mjs";
import "../_libs/sonner.mjs";
import { a4 as LoaderCircle, aA as TrendingUp, n as ChartColumn, G as Clock, ah as Package, aG as Users } from "../_libs/lucide-react.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
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
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
function formatINR(v) {
  if (v >= 1e7) return `₹${(v / 1e7).toFixed(2)} Cr`;
  if (v >= 1e5) return `₹${(v / 1e5).toFixed(2)} L`;
  return `₹${Math.round(v).toLocaleString("en-IN")}`;
}
function ReportsPage() {
  const [stats, setStats] = reactExports.useState(null);
  reactExports.useEffect(() => {
    (async () => {
      const [leads, converted, loans, ins, mf] = await Promise.all([supabase.from("leads").select("id, created_at"), supabase.from("leads").select("id", {
        count: "exact",
        head: true
      }).eq("status", "converted"), supabase.from("loan_cases").select("disbursement_amount, created_at"), supabase.from("insurance_cases").select("premium"), supabase.from("mutual_funds").select("sip_amount")]);
      const sum = (rows, key) => (rows ?? []).reduce((a, r) => a + (Number(r[key]) || 0), 0);
      const loanDates = (loans.data ?? []).map((r) => new Date(r.created_at).getTime());
      const leadDates = (leads.data ?? []).map((r) => new Date(r.created_at).getTime());
      const avgTat = loanDates.length && leadDates.length ? Math.max(0, Math.round((loanDates.reduce((a, b) => a + b, 0) / loanDates.length - leadDates.reduce((a, b) => a + b, 0) / leadDates.length) / (1e3 * 60 * 60 * 24))) : 0;
      setStats({
        totalLeads: leads.data?.length ?? 0,
        converted: converted.count ?? 0,
        loanCases: loans.data?.length ?? 0,
        insuranceCases: ins.data?.length ?? 0,
        mfCases: mf.data?.length ?? 0,
        disbursed: sum(loans.data, "disbursement_amount"),
        premium: sum(ins.data, "premium"),
        sipAnnual: sum(mf.data, "sip_amount") * 12,
        avgTatDays: avgTat
      });
    })();
  }, []);
  if (!stats) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-60 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin text-muted-foreground" }) });
  }
  const convPct = stats.totalLeads ? Math.round(stats.converted / stats.totalLeads * 100) : 0;
  const reports = [{
    name: "Lead Conversion",
    desc: `${stats.converted} of ${stats.totalLeads} leads converted (${convPct}%).`,
    value: `${convPct}%`,
    icon: TrendingUp
  }, {
    name: "Revenue",
    desc: "Disbursed loan + premium + annual SIP.",
    value: formatINR(stats.disbursed + stats.premium + stats.sipAnnual),
    icon: ChartColumn
  }, {
    name: "TAT Report",
    desc: "Avg days from lead capture to loan case creation.",
    value: `${stats.avgTatDays} d`,
    icon: Clock
  }, {
    name: "Loan Disbursed",
    desc: `${stats.loanCases} loan cases.`,
    value: formatINR(stats.disbursed),
    icon: Package
  }, {
    name: "Insurance Premium",
    desc: `${stats.insuranceCases} policies.`,
    value: formatINR(stats.premium),
    icon: Package
  }, {
    name: "Mutual Funds (Annual SIP)",
    desc: `${stats.mfCases} SIPs.`,
    value: formatINR(stats.sipAnnual),
    icon: Users
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-slate-900", children: "Reports" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-500", children: "Live numbers from your CRM pipeline." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 md:grid-cols-2 lg:grid-cols-3", children: reports.map((r) => {
      const Icon = r.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md bg-blue-50 p-2 text-blue-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-slate-900", children: r.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-slate-500", children: r.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-xl font-bold text-slate-900", children: r.value })
        ] })
      ] }) }, r.name);
    }) })
  ] });
}
export {
  ReportsPage as component
};
