import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header, F as Footer } from "./Footer-X7G0v4le.mjs";
import { C as Card } from "./card-RGlIzTYo.mjs";
import { B as Badge } from "./badge-DyfXZgLs.mjs";
import { B as Button } from "./button-TjZkfKyC.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { u as useAuth, s as supabase } from "./router-fcTUeZV3.mjs";
import { u as utils, w as writeFileSync } from "../_libs/xlsx.mjs";
import "../_libs/sonner.mjs";
import { a4 as LoaderCircle, aG as Users, D as CircleUserRound, e as Banknote, as as ShieldCheck, aA as TrendingUp, av as SquareCheckBig, _ as IndianRupee, j as Building2, am as RefreshCw, c as ArrowUpRight, aj as Phone, I as Download, ap as Search } from "../_libs/lucide-react.mjs";
import { R as ResponsiveContainer, a as AreaChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, A as Area, e as PieChart, P as Pie, b as Cell, L as Legend } from "../_libs/recharts.mjs";
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
function AdminPage() {
  const {
    user,
    isAdmin,
    loading
  } = useAuth();
  const [leads, setLeads] = reactExports.useState([]);
  const [stats, setStats] = reactExports.useState(null);
  const [busy, setBusy] = reactExports.useState(false);
  const [q, setQ] = reactExports.useState("");
  const [trend, setTrend] = reactExports.useState([]);
  const load = async () => {
    setBusy(true);
    const since = new Date(Date.now() - 13 * 24 * 60 * 60 * 1e3).toISOString();
    const [leadsRes, customers, loans, insurance, mf, tasks, disb, last14] = await Promise.all([supabase.from("leads").select("*").order("created_at", {
      ascending: false
    }).limit(100), supabase.from("customers").select("id", {
      count: "exact",
      head: true
    }), supabase.from("loan_cases").select("id", {
      count: "exact",
      head: true
    }), supabase.from("insurance_cases").select("id", {
      count: "exact",
      head: true
    }), supabase.from("mutual_funds").select("id", {
      count: "exact",
      head: true
    }), supabase.from("tasks").select("id", {
      count: "exact",
      head: true
    }).neq("status", "done"), supabase.from("loan_cases").select("disbursement_amount"), supabase.from("leads").select("created_at, product_type").gte("created_at", since)]);
    setLeads(leadsRes.data ?? []);
    setStats({
      totalLeads: leadsRes.data?.length ?? 0,
      customers: customers.count ?? 0,
      loans: loans.count ?? 0,
      insurance: insurance.count ?? 0,
      mf: mf.count ?? 0,
      pendingTasks: tasks.count ?? 0,
      revenue: (disb.data ?? []).reduce((a, r) => a + (Number(r.disbursement_amount) || 0), 0)
    });
    const buckets = {};
    for (let i = 13; i >= 0; i--) {
      const d = new Date(Date.now() - i * 24 * 60 * 60 * 1e3);
      buckets[d.toISOString().slice(0, 10)] = 0;
    }
    (last14.data ?? []).forEach((r) => {
      const k = r.created_at.slice(0, 10);
      if (buckets[k] !== void 0) buckets[k] += 1;
    });
    setTrend(Object.entries(buckets).map(([k, v]) => ({
      day: new Date(k).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short"
      }),
      leads: v
    })));
    setBusy(false);
  };
  reactExports.useEffect(() => {
    if (isAdmin) load();
  }, [isAdmin]);
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-8 w-8 animate-spin text-[#17357e]" }) })
    ] });
  }
  if (!user) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 py-32 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold", children: "Login required" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Sign in to access the admin panel." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: "Go to Login" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] });
  }
  if (!isAdmin) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 py-32 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold", children: "Access Denied" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "This page is accessible to admins only." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] });
  }
  const visibleLeads = leads.filter((l) => {
    if ((l.lead_source ?? "").toLowerCase() === "partner") {
      return !!user && l.assigned_to === user.id;
    }
    return true;
  });
  const filtered = visibleLeads.filter((l) => {
    if (!q) return true;
    const s = q.toLowerCase();
    return l.full_name?.toLowerCase().includes(s) || l.phone?.toLowerCase().includes(s) || l.email?.toLowerCase().includes(s) || l.product_type?.toLowerCase().includes(s);
  });
  const statCards = [{
    label: "Total Leads",
    value: stats?.totalLeads ?? 0,
    icon: Users,
    tone: "blue"
  }, {
    label: "Customers",
    value: stats?.customers ?? 0,
    icon: CircleUserRound,
    tone: "emerald"
  }, {
    label: "Loan Cases",
    value: stats?.loans ?? 0,
    icon: Banknote,
    tone: "amber"
  }, {
    label: "Insurance",
    value: stats?.insurance ?? 0,
    icon: ShieldCheck,
    tone: "violet"
  }, {
    label: "Mutual Funds",
    value: stats?.mf ?? 0,
    icon: TrendingUp,
    tone: "cyan"
  }, {
    label: "Pending Tasks",
    value: stats?.pendingTasks ?? 0,
    icon: SquareCheckBig,
    tone: "rose"
  }, {
    label: "Revenue",
    value: stats ? formatINR(stats.revenue) : "—",
    icon: IndianRupee,
    tone: "emerald"
  }, {
    label: "Branches",
    value: "—",
    icon: Building2,
    tone: "slate"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-slate-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container mx-auto px-4 py-8 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0b1437] via-[#15224f] to-[#1e3a8a] p-6 text-white shadow-xl md:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-12 -top-12 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-16 right-20 h-44 w-44 rounded-full bg-indigo-400/20 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-wrap items-end justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "border-white/20 bg-white/10 text-white", children: "Admin Workspace" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-2xl font-bold md:text-3xl", children: "Welcome back, Admin" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 max-w-xl text-sm text-blue-100/80", children: "Live snapshot of leads, pipeline, and team activity. Jump into the full CRM for deep workflows." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: load, disabled: busy, variant: "secondary", className: "bg-white/10 text-white hover:bg-white/20", children: [
              busy ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "mr-2 h-4 w-4" }),
              "Refresh"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "bg-white text-[#15224f] hover:bg-blue-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/crm", children: [
              "Open CRM ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "ml-1 h-4 w-4" })
            ] }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4", children: statCards.map((c) => {
        const Icon = c.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "relative overflow-hidden border-slate-200/70 p-4 transition hover:-translate-y-0.5 hover:shadow-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-40 blur-2xl ${toneBlur(c.tone)}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex items-start justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-xl p-2.5 ${toneBg(c.tone)}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-5 w-5 ${toneFg(c.tone)}` }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-medium uppercase tracking-wide text-slate-500", children: c.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-2xl font-bold text-slate-900", children: c.value })
          ] })
        ] }, c.label);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4", children: [{
        to: "/admin/employees",
        label: "Manage Employees",
        desc: "Add, reset, remove staff",
        icon: CircleUserRound,
        tone: "blue"
      }, {
        to: "/admin/whatsapp",
        label: "WhatsApp Sender",
        desc: "Single & bulk Twilio sends",
        icon: Phone,
        tone: "emerald"
      }, {
        to: "/crm/leads",
        label: "All Leads",
        desc: "Open full CRM pipeline",
        icon: Users,
        tone: "violet"
      }, {
        to: "/crm/reports",
        label: "Reports & MIS",
        desc: "Export & analytics",
        icon: Download,
        tone: "amber"
      }].map((l) => {
        const Icon = l.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: l.to, className: "group relative flex items-center justify-between overflow-hidden rounded-xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute -right-6 -top-6 h-16 w-16 rounded-full opacity-30 blur-2xl ${toneBlur(l.tone)}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-lg p-2 ${toneBg(l.tone)} ${toneFg(l.tone)} group-hover:scale-110 transition`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-slate-800", children: l.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-500", children: l.desc })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "relative h-4 w-4 text-slate-400 group-hover:text-blue-600" })
        ] }, l.to);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "lg:col-span-2 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-slate-900", children: "Leads — Last 14 days" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "Daily new leads captured." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "border-blue-200 bg-blue-50 text-blue-700", children: "Trend" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-64 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: trend, margin: {
            top: 5,
            right: 10,
            left: -20,
            bottom: 0
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "adminLeadFill", x1: "0", y1: "0", x2: "0", y2: "1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#3b82f6", stopOpacity: 0.5 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#3b82f6", stopOpacity: 0 })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#e2e8f0", vertical: false }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "day", tick: {
              fontSize: 11,
              fill: "#64748b"
            }, tickLine: false, axisLine: false }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { tick: {
              fontSize: 11,
              fill: "#64748b"
            }, tickLine: false, axisLine: false, allowDecimals: false }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
              borderRadius: 8,
              border: "1px solid #e2e8f0",
              fontSize: 12
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "leads", stroke: "#2563eb", strokeWidth: 2, fill: "url(#adminLeadFill)" })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-slate-900", children: "Product Mix" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "Active cases across products." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-64 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pie, { data: [{
              name: "Loans",
              value: stats?.loans ?? 0
            }, {
              name: "Insurance",
              value: stats?.insurance ?? 0
            }, {
              name: "Mutual Funds",
              value: stats?.mf ?? 0
            }], cx: "50%", cy: "50%", outerRadius: 70, innerRadius: 40, paddingAngle: 3, dataKey: "value", children: ["#3b82f6", "#8b5cf6", "#10b981"].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: c }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
              borderRadius: 8,
              border: "1px solid #e2e8f0",
              fontSize: 12
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { wrapperStyle: {
              fontSize: 11
            } })
          ] }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-6 overflow-hidden border-slate-200/70 p-0 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-slate-900", children: "Latest Leads" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "Recent submissions across the website and team entry." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full sm:w-64", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search name, phone, product…", className: "h-9 border-slate-200 bg-slate-50 pl-9 text-sm" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => downloadLeadsXlsx(filtered), variant: "outline", className: "h-9 border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-2 h-4 w-4" }),
              " Excel"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden overflow-x-auto md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-slate-50 text-left text-[11px] uppercase tracking-wider text-slate-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3", children: "Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3", children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3", children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3", children: "Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3", children: "Product" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3", children: "Amount" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3", children: "Status" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
            filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 8, className: "p-10 text-center text-sm text-slate-400", children: busy ? "Loading…" : "No leads found." }) }),
            filtered.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-slate-100 align-top hover:bg-slate-50/60", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 whitespace-nowrap text-xs text-slate-500", children: new Date(l.created_at).toLocaleString("en-IN", {
                dateStyle: "medium",
                timeStyle: "short"
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-slate-900", children: l.full_name }),
                l.city && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500", children: l.city })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${l.phone}`, className: "inline-flex items-center gap-1 text-slate-700 hover:text-blue-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3" }),
                " ",
                l.phone
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-slate-600", children: l.email || "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "capitalize", children: l.product_type?.replace(/_/g, " ") }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-slate-700", children: l.product_name || "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium text-slate-800", children: l.amount ? `₹${Number(l.amount).toLocaleString("en-IN")}` : "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "capitalize", children: l.status }) })
            ] }, l.id))
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "divide-y divide-slate-100 md:hidden", children: [
          filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-10 text-center text-sm text-slate-400", children: busy ? "Loading…" : "No leads found." }),
          filtered.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate font-semibold text-slate-900", children: l.full_name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-500", children: new Date(l.created_at).toLocaleString("en-IN", {
                  dateStyle: "medium",
                  timeStyle: "short"
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "shrink-0 capitalize", children: l.status })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex flex-wrap items-center gap-2 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "capitalize", children: l.product_type?.replace(/_/g, " ") }),
              l.amount && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-slate-700", children: [
                "₹",
                Number(l.amount).toLocaleString("en-IN")
              ] }),
              l.city && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-slate-500", children: [
                "• ",
                l.city
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${l.phone}`, className: "inline-flex flex-1 items-center justify-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3" }),
                " ",
                l.phone
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `https://wa.me/${l.phone.replace(/\D/g, "")}`, target: "_blank", rel: "noreferrer", className: "inline-flex items-center justify-center rounded-md border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 hover:bg-emerald-100", children: "WhatsApp" })
            ] })
          ] }, l.id))
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function formatINR(v) {
  if (v >= 1e7) return `₹${(v / 1e7).toFixed(2)} Cr`;
  if (v >= 1e5) return `₹${(v / 1e5).toFixed(2)} L`;
  return `₹${Math.round(v).toLocaleString("en-IN")}`;
}
function toneBg(t) {
  return {
    blue: "bg-blue-100",
    amber: "bg-amber-100",
    emerald: "bg-emerald-100",
    violet: "bg-violet-100",
    cyan: "bg-cyan-100",
    slate: "bg-slate-200",
    rose: "bg-rose-100"
  }[t];
}
function toneFg(t) {
  return {
    blue: "text-blue-600",
    amber: "text-amber-600",
    emerald: "text-emerald-600",
    violet: "text-violet-600",
    cyan: "text-cyan-600",
    slate: "text-slate-600",
    rose: "text-rose-600"
  }[t];
}
function toneBlur(t) {
  return {
    blue: "bg-blue-300/40",
    amber: "bg-amber-300/40",
    emerald: "bg-emerald-300/40",
    violet: "bg-violet-300/40",
    cyan: "bg-cyan-300/40",
    slate: "bg-slate-300/40",
    rose: "bg-rose-300/40"
  }[t];
}
function downloadLeadsXlsx(leads) {
  if (!leads || leads.length === 0) return;
  const rows = leads.map((l) => ({
    "Created At": new Date(l.created_at).toLocaleString("en-IN"),
    "Name": l.full_name,
    "Phone": l.phone,
    "Email": l.email ?? "",
    "Product Type": l.product_type,
    "Product Name": l.product_name ?? "",
    "Amount": l.amount ?? "",
    "City": l.city ?? "",
    "Source": l.lead_source ?? "",
    "Status": l.status,
    "Message": l.message ?? ""
  }));
  const ws = utils.json_to_sheet(rows);
  ws["!cols"] = [{
    wch: 20
  }, {
    wch: 22
  }, {
    wch: 16
  }, {
    wch: 26
  }, {
    wch: 14
  }, {
    wch: 18
  }, {
    wch: 12
  }, {
    wch: 14
  }, {
    wch: 14
  }, {
    wch: 12
  }, {
    wch: 40
  }];
  const wb = utils.book_new();
  utils.book_append_sheet(wb, ws, "Leads");
  writeFileSync(wb, `aarthvaahini-leads-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.xlsx`);
}
export {
  AdminPage as component
};
