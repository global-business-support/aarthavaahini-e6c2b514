import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { C as Card } from "./card-RGlIzTYo.mjs";
import { B as Badge } from "./badge-DyfXZgLs.mjs";
import { s as supabase } from "./router-fcTUeZV3.mjs";
import { c as cn } from "./utils-H80jjgLf.mjs";
import { C as CustomerProfileDialog } from "./CustomerProfileDialog-BPVRJflD.mjs";
import "../_libs/sonner.mjs";
import { aG as Users, D as CircleUserRound, G as Clock, e as Banknote, as as ShieldCheck, aA as TrendingUp, _ as IndianRupee, aB as TriangleAlert, A as Activity, c as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { R as ResponsiveContainer, a as AreaChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, A as Area, e as PieChart, P as Pie, b as Cell, L as Legend, c as ComposedChart, B as Bar, d as Line } from "../_libs/recharts.mjs";
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
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
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
import "../_libs/tailwind-merge.mjs";
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
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "./button-TjZkfKyC.mjs";
import "./textarea-DtF-dDz-.mjs";
import "./tabs-Cs3JMi5l.mjs";
import "../_libs/radix-ui__react-tabs.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/lodash.mjs";
import "../_libs/react-smooth.mjs";
import "../_libs/prop-types.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/react-is.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/recharts-scale.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
const STAGE_COLORS = ["#0ea5e9", "#8b5cf6", "#6366f1", "#f59e0b", "#10b981", "#64748b"];
function DashboardPage() {
  const [stats, setStats] = reactExports.useState(null);
  const [recentLeads, setRecentLeads] = reactExports.useState([]);
  const [leadTrend, setLeadTrend] = reactExports.useState([]);
  const [customerStages, setCustomerStages] = reactExports.useState([]);
  const [loanByStage, setLoanByStage] = reactExports.useState([]);
  const [profileLead, setProfileLead] = reactExports.useState(null);
  const [overrides, setOverrides] = reactExports.useState({});
  const loadDashboard = reactExports.useCallback(async () => {
    const now = (/* @__PURE__ */ new Date()).toISOString();
    const since = new Date(Date.now() - 29 * 24 * 60 * 60 * 1e3).toISOString();
    const [leads, customers, followups, loans, insurance, funds, tasks, sla, recent, last30, disb, custStage, loanRows] = await Promise.all([
      supabase.from("leads").select("id", {
        count: "exact",
        head: true
      }),
      supabase.from("customers").select("id", {
        count: "exact",
        head: true
      }),
      supabase.from("tasks").select("id", {
        count: "exact",
        head: true
      }).lte("due_date", now).neq("status", "done"),
      // Loan Pipeline:
      // Case logged/open rahega jab tak Closed, Dropped, ya Rejected nahi hota.
      supabase.from("loan_cases").select("loan_amount, requested_amount, stage").not("stage", "in", '("Closed","Dropped","Rejected")'),
      supabase.from("insurance_cases").select("premium, policy_status").not("policy_status", "in", '("Issued","Closed","Dropped","Rejected")'),
      supabase.from("mutual_funds").select("sip_amount, status").not("status", "in", '("Portfolio Review","Closed","Dropped","Rejected")'),
      supabase.from("tasks").select("id", {
        count: "exact",
        head: true
      }).neq("status", "done"),
      supabase.from("tasks").select("id", {
        count: "exact",
        head: true
      }).lt("due_date", now).neq("status", "done"),
      supabase.from("leads").select("id, full_name, product_type, status, created_at").order("created_at", {
        ascending: false
      }).limit(6),
      supabase.from("leads").select("created_at").gte("created_at", since),
      supabase.from("loan_cases").select("disbursement_amount"),
      supabase.from("customers").select("stage"),
      supabase.from("loan_cases").select("stage, requested_amount, sanction_amount, disbursement_amount").not("stage", "in", '("Closed","Dropped","Rejected")')
    ]);
    const sum = (rows, key) => {
      return (rows ?? []).reduce((acc, row) => {
        return acc + (Number(row[key]) || 0);
      }, 0);
    };
    const loanPipelineAmount = (loans.data ?? []).reduce((acc, row) => {
      return acc + (Number(row.loan_amount) || Number(row.requested_amount) || 0);
    }, 0);
    setStats({
      totalLeads: leads.count ?? 0,
      totalCustomers: customers.count ?? 0,
      followupsDue: followups.count ?? 0,
      loanPipeline: loanPipelineAmount,
      insurancePipeline: sum(insurance.data, "premium"),
      mfPipeline: sum(funds.data, "sip_amount") * 12,
      revenue: sum(disb.data, "disbursement_amount"),
      pendingTasks: tasks.count ?? 0,
      slaAlerts: sla.count ?? 0
    });
    setRecentLeads(recent.data ?? []);
    const buckets = {};
    for (let i = 29; i >= 0; i--) {
      const date = new Date(Date.now() - i * 24 * 60 * 60 * 1e3);
      buckets[date.toISOString().slice(0, 10)] = 0;
    }
    (last30.data ?? []).forEach((row) => {
      const key = row.created_at.slice(0, 10);
      if (buckets[key] !== void 0) {
        buckets[key] += 1;
      }
    });
    setLeadTrend(Object.entries(buckets).map(([key, value]) => ({
      day: new Date(key).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short"
      }),
      leads: value
    })));
    const stageMap = {};
    (custStage.data ?? []).forEach((customer) => {
      const stage = customer.stage || "New";
      stageMap[stage] = (stageMap[stage] || 0) + 1;
    });
    setCustomerStages(Object.entries(stageMap).map(([name, value]) => ({
      name,
      value
    })));
    const loanMap = {};
    (loanRows.data ?? []).forEach((row) => {
      const stage = row.stage || "Lead";
      if (!loanMap[stage]) {
        loanMap[stage] = {
          requested: 0,
          sanctioned: 0,
          disbursed: 0
        };
      }
      loanMap[stage].requested += Number(row.requested_amount) || 0;
      loanMap[stage].sanctioned += Number(row.sanction_amount) || 0;
      loanMap[stage].disbursed += Number(row.disbursement_amount) || 0;
    });
    setLoanByStage(Object.entries(loanMap).map(([stage, value]) => ({
      stage,
      requested: Math.round(value.requested / 1e5),
      sanctioned: Math.round(value.sanctioned / 1e5),
      disbursed: Math.round(value.disbursed / 1e5)
    })));
  }, []);
  reactExports.useEffect(() => {
    loadDashboard();
    supabase.from("dashboard_cards").select("key,label,value_override,trend").then(({
      data
    }) => {
      if (!data) return;
      const map = {};
      data.forEach((item) => {
        map[item.key] = {
          label: item.label,
          value: item.value_override,
          trend: item.trend
        };
      });
      setOverrides(map);
    });
    const channel = supabase.channel("crm-dashboard").on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "leads"
    }, () => loadDashboard()).on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "customers"
    }, () => loadDashboard()).on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "tasks"
    }, () => loadDashboard()).on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "loan_cases"
    }, () => loadDashboard()).on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "insurance_cases"
    }, () => loadDashboard()).on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "mutual_funds"
    }, () => loadDashboard()).subscribe();
    return () => {
      channel.unsubscribe();
    };
  }, [loadDashboard]);
  const baseCards = [{
    key: "totalLeads",
    label: "Total Leads",
    value: stats?.totalLeads,
    icon: Users,
    tone: "sky",
    trend: "All time",
    to: "/crm/leads"
  }, {
    key: "totalCustomers",
    label: "Customers",
    value: stats?.totalCustomers,
    icon: CircleUserRound,
    tone: "violet",
    trend: "Active",
    to: "/crm/customers"
  }, {
    key: "followupsDue",
    label: "Followups Due",
    value: stats?.followupsDue,
    icon: Clock,
    tone: "amber",
    trend: "Today",
    to: "/crm/tasks"
  }, {
    key: "loanPipeline",
    label: "Loan Pipeline",
    value: stats && formatINR(stats.loanPipeline),
    icon: Banknote,
    tone: "emerald",
    trend: "Open",
    to: "/crm/loans"
  }, {
    key: "insurancePipeline",
    label: "Insurance",
    value: stats && formatINR(stats.insurancePipeline),
    icon: ShieldCheck,
    tone: "indigo",
    trend: "Open",
    to: "/crm/insurance"
  }, {
    key: "mfPipeline",
    label: "MF Annual SIP",
    value: stats && formatINR(stats.mfPipeline),
    icon: TrendingUp,
    tone: "cyan",
    trend: "Y/Y",
    to: "/crm/mutual-funds"
  }, {
    key: "revenue",
    label: "Disbursed",
    value: stats && formatINR(stats.revenue),
    icon: IndianRupee,
    tone: "blue",
    trend: "Revenue",
    to: "/crm/loans"
  }, {
    key: "slaAlerts",
    label: "SLA Alerts",
    value: stats?.slaAlerts,
    icon: TriangleAlert,
    tone: "rose",
    trend: "Action",
    to: "/crm/tasks"
  }];
  const cards = baseCards.map((card) => {
    const override = overrides[card.key];
    return {
      ...card,
      label: override?.label ?? card.label,
      value: override?.value != null && override.value !== "" ? override.value : card.value,
      trend: override?.trend ?? card.trend
    };
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-wrap items-center justify-between gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-500 px-5 py-4 text-white shadow-lg shadow-sky-500/25", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/15 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-10 -bottom-10 h-24 w-24 rounded-full bg-cyan-300/30 blur-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm ring-1 ring-white/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-semibold leading-tight", children: "Welcome back 👋" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-white/85", children: "Realtime overview — leads, customers, loans synced live" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-2 w-2 animate-pulse rounded-full bg-emerald-300 shadow-[0_0_8px] shadow-emerald-300" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "border-white/30 bg-white/20 text-white", children: (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", {
          weekday: "long",
          day: "numeric",
          month: "short"
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 lg:grid-cols-4", children: cards.map((card) => {
      const Icon = card.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: card.to, className: "group block focus:outline-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "relative overflow-hidden border-sky-100 bg-white/85 p-4 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-2 hover:ring-sky-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-50 blur-2xl", toneBlur(card.tone)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-start justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("rounded-xl p-2 shadow-sm", toneBg(card.tone)), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: cn("h-4 w-4", toneFg(card.tone)) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "bg-sky-50 text-[10px] font-medium text-sky-700", children: card.trend })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-medium uppercase tracking-wide text-slate-500", children: card.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-xl font-bold tracking-tight text-slate-900", children: card.value ?? "—" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "absolute bottom-3 right-3 h-3.5 w-3.5 text-slate-300 transition group-hover:text-sky-500" })
      ] }) }, card.label);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/crm/leads", className: "block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 transition hover:-translate-y-0.5 hover:shadow-md hover:ring-2 hover:ring-sky-200 lg:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-slate-900", children: "Leads · 30 days" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "Daily new leads captured." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "border-sky-200 bg-sky-50 text-sky-700", children: "Trend" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-60 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: leadTrend, margin: {
          top: 5,
          right: 8,
          left: -22,
          bottom: 0
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "leadFill", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#0ea5e9", stopOpacity: 0.55 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#0ea5e9", stopOpacity: 0 })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#e2e8f0", vertical: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "day", tick: {
            fontSize: 10,
            fill: "#64748b"
          }, tickLine: false, axisLine: false, interval: 4 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tick: {
            fontSize: 10,
            fill: "#64748b"
          }, tickLine: false, axisLine: false, allowDecimals: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            borderRadius: 8,
            border: "1px solid #e2e8f0",
            fontSize: 12
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "leads", stroke: "#0284c7", strokeWidth: 2.5, fill: "url(#leadFill)" })
        ] }) }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/crm/customers", className: "block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 transition hover:-translate-y-0.5 hover:shadow-md hover:ring-2 hover:ring-violet-200 lg:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-slate-900", children: "Customers · By Stage" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "Distribution across pipeline." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "border-violet-200 bg-violet-50 text-violet-700", children: "Live" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-60 w-full", children: customerStages.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full items-center justify-center text-xs text-slate-400", children: "No customers yet" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            borderRadius: 8,
            border: "1px solid #e2e8f0",
            fontSize: 12
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pie, { data: customerStages, cx: "50%", cy: "50%", innerRadius: 50, outerRadius: 85, paddingAngle: 3, dataKey: "value", nameKey: "name", children: customerStages.map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: STAGE_COLORS[index % STAGE_COLORS.length] }, index)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { wrapperStyle: {
            fontSize: 10
          }, iconSize: 8 })
        ] }) }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/crm/loans", className: "block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 transition hover:-translate-y-0.5 hover:shadow-md hover:ring-2 hover:ring-emerald-200 lg:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-slate-900", children: "Loans · ₹ Lakh by Stage" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "Requested · Sanctioned · Disbursed." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "border-emerald-200 bg-emerald-50 text-emerald-700", children: "₹L" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-60 w-full", children: loanByStage.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full items-center justify-center text-xs text-slate-400", children: "No loan cases" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ComposedChart, { data: loanByStage, margin: {
          top: 5,
          right: 8,
          left: -22,
          bottom: 0
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#e2e8f0", vertical: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "stage", tick: {
            fontSize: 10,
            fill: "#64748b"
          }, tickLine: false, axisLine: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tick: {
            fontSize: 10,
            fill: "#64748b"
          }, tickLine: false, axisLine: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            borderRadius: 8,
            border: "1px solid #e2e8f0",
            fontSize: 12
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { wrapperStyle: {
            fontSize: 10
          }, iconSize: 8 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "requested", name: "Requested", fill: "#cbd5e1", radius: [4, 4, 0, 0] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "sanctioned", name: "Sanctioned", fill: "#10b981", radius: [4, 4, 0, 0] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { type: "monotone", dataKey: "disbursed", name: "Disbursed", stroke: "#0284c7", strokeWidth: 2.5, dot: {
            r: 3
          } })
        ] }) }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-slate-900", children: "Recent Leads" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "Click a name to open the unified profile." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/crm/leads", className: "inline-flex items-center gap-1 text-xs font-medium text-sky-600 hover:text-sky-700", children: [
          "View all ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 divide-y divide-sky-50", children: [
        recentLeads.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-6 text-center text-xs text-slate-400", children: "No leads yet." }),
        recentLeads.map((lead) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setProfileLead(lead.id), className: "group flex items-center gap-3 text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-[11px] font-semibold text-white", children: (lead.full_name ?? "?").slice(0, 2).toUpperCase() }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-sky-700 group-hover:underline", children: lead.full_name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs capitalize text-slate-500", children: lead.product_type?.replace(/_/g, " ") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "capitalize", children: lead.status }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden text-xs text-slate-400 sm:block", children: new Date(lead.created_at).toLocaleDateString("en-IN") })
          ] })
        ] }, lead.id))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CustomerProfileDialog, { open: !!profileLead, onOpenChange: (value) => !value && setProfileLead(null), leadId: profileLead })
  ] });
}
function formatINR(value) {
  if (value >= 1e7) return `₹${(value / 1e7).toFixed(2)} Cr`;
  if (value >= 1e5) return `₹${(value / 1e5).toFixed(2)} L`;
  return `₹${Math.round(value).toLocaleString("en-IN")}`;
}
function toneBg(tone) {
  return {
    sky: "bg-sky-100",
    blue: "bg-blue-100",
    amber: "bg-amber-100",
    emerald: "bg-emerald-100",
    violet: "bg-violet-100",
    cyan: "bg-cyan-100",
    slate: "bg-slate-200",
    rose: "bg-rose-100",
    indigo: "bg-indigo-100"
  }[tone];
}
function toneFg(tone) {
  return {
    sky: "text-sky-600",
    blue: "text-blue-600",
    amber: "text-amber-600",
    emerald: "text-emerald-600",
    violet: "text-violet-600",
    cyan: "text-cyan-600",
    slate: "text-slate-600",
    rose: "text-rose-600",
    indigo: "text-indigo-600"
  }[tone];
}
function toneBlur(tone) {
  return {
    sky: "bg-sky-300/40",
    blue: "bg-blue-300/40",
    amber: "bg-amber-300/40",
    emerald: "bg-emerald-300/40",
    violet: "bg-violet-300/40",
    cyan: "bg-cyan-300/40",
    slate: "bg-slate-300/40",
    rose: "bg-rose-300/40",
    indigo: "bg-indigo-300/40"
  }[tone];
}
export {
  DashboardPage as component
};
