import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as Card } from "./card-RGlIzTYo.mjs";
import { B as Badge } from "./badge-DyfXZgLs.mjs";
import { s as supabase } from "./router-DSDPkTTS.mjs";
import "../_libs/sonner.mjs";
import { A as Activity, ap as Search, R as Funnel, a4 as LoaderCircle, N as FilePen, aI as WalletCards, B as BadgeCheck, aE as UserPlus, ax as StickyNote, l as CalendarDays, aD as User, aj as Phone, a8 as Mail, aJ as X, F as ClipboardList, ah as Package, as as ShieldCheck, _ as IndianRupee, P as FileText, W as Hash } from "../_libs/lucide-react.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/class-variance-authority.mjs";
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
const ICONS = {
  note: StickyNote,
  created: UserPlus,
  updated: FilePen,
  lead_converted: Activity,
  converted: Activity,
  sanction: BadgeCheck,
  sanctioned: BadgeCheck,
  disbursement: WalletCards,
  disbursed: WalletCards,
  stage_updated: FilePen,
  bank_updated: FilePen
};
const getFirstValue = (obj, keys) => {
  for (const key of keys) {
    if (obj?.[key] !== void 0 && obj?.[key] !== null && obj?.[key] !== "") {
      return obj[key];
    }
  }
  return null;
};
const formatMoney = (value) => {
  if (value === null || value === void 0 || value === "") return "N/A";
  const num = Number(value);
  if (Number.isNaN(num)) return String(value);
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(num);
};
const formatDate = (value) => {
  if (!value) return "N/A";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-IN");
};
const mapPersonDetails = (row) => {
  return {
    id: row.id,
    name: getFirstValue(row, ["full_name", "name", "customer_name", "lead_name", "applicant_name"]),
    phone: getFirstValue(row, ["phone", "mobile", "mobile_number", "phone_number", "contact_number"]),
    email: getFirstValue(row, ["email", "email_address"]),
    product_type: getFirstValue(row, ["product_type", "product", "loan_type", "service_type"]),
    status: getFirstValue(row, ["status", "lead_status", "current_status"]),
    lead_stage: getFirstValue(row, ["lead_stage", "stage", "pipeline_stage", "current_stage"]),
    loan_amount: getFirstValue(row, ["loan_amount", "amount", "required_amount", "requested_amount"]),
    sanction_amount: getFirstValue(row, ["sanction_amount", "sanctioned_amount", "approved_amount", "approval_amount"]),
    disbursement_amount: getFirstValue(row, ["disbursement_amount", "disbursed_amount", "disbursal_amount", "final_disbursement_amount"]),
    disbursement_date: getFirstValue(row, ["disbursement_date", "disbursed_date", "disbursal_date"]),
    bank_name: getFirstValue(row, ["bank_name", "bank", "selected_bank"]),
    cibil_score: getFirstValue(row, ["cibil_score", "cibil"]),
    city: getFirstValue(row, ["city", "location"]),
    source: getFirstValue(row, ["source", "lead_source"]),
    raw: row
  };
};
const getStageClass = (stage) => {
  const value = stage?.toLowerCase() || "";
  if (value.includes("new")) return "border-sky-200 bg-sky-50 text-sky-700";
  if (value.includes("docs")) return "border-purple-200 bg-purple-50 text-purple-700";
  if (value.includes("sanction")) return "border-orange-200 bg-orange-50 text-orange-700";
  if (value.includes("disbursement")) return "border-emerald-200 bg-emerald-50 text-emerald-700";
  if (value.includes("closed")) return "border-slate-200 bg-slate-100 text-slate-700";
  if (value.includes("reject")) return "border-red-200 bg-red-50 text-red-700";
  return "border-slate-200 bg-white text-slate-700";
};
function ActivityPage() {
  const [items, setItems] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [selectedActivity, setSelectedActivity] = reactExports.useState(null);
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [filterType, setFilterType] = reactExports.useState("all");
  reactExports.useEffect(() => {
    fetchActivities();
  }, []);
  const fetchActivities = async () => {
    setLoading(true);
    const {
      data: activities,
      error
    } = await supabase.from("activities").select("id, activity_type, notes, created_at, lead_id, customer_id").order("created_at", {
      ascending: false
    }).limit(200);
    if (error) {
      console.error("Activity fetch error:", error);
      setItems([]);
      setLoading(false);
      return;
    }
    const activityList = activities ?? [];
    const leadIds = [...new Set(activityList.map((item) => item.lead_id).filter(Boolean))];
    const customerIds = [...new Set(activityList.map((item) => item.customer_id).filter(Boolean))];
    const [{
      data: leads
    }, {
      data: customers
    }] = await Promise.all([leadIds.length ? supabase.from("leads").select("*").in("id", leadIds) : Promise.resolve({
      data: []
    }), customerIds.length ? supabase.from("customers").select("*").in("id", customerIds) : Promise.resolve({
      data: []
    })]);
    const leadMap = /* @__PURE__ */ new Map();
    const customerMap = /* @__PURE__ */ new Map();
    (leads ?? []).forEach((lead) => {
      leadMap.set(lead.id, mapPersonDetails(lead));
    });
    (customers ?? []).forEach((customer) => {
      customerMap.set(customer.id, mapPersonDetails(customer));
    });
    const finalItems = activityList.map((item) => {
      if (item.customer_id && customerMap.has(item.customer_id)) {
        return {
          ...item,
          person: customerMap.get(item.customer_id),
          personType: "Customer"
        };
      }
      if (item.lead_id && leadMap.has(item.lead_id)) {
        return {
          ...item,
          person: leadMap.get(item.lead_id),
          personType: "Lead"
        };
      }
      return {
        ...item,
        person: null,
        personType: null
      };
    });
    setItems(finalItems);
    setLoading(false);
  };
  const totalActivities = items.length;
  const todayActivities = reactExports.useMemo(() => {
    const today = (/* @__PURE__ */ new Date()).toDateString();
    return items.filter((item) => new Date(item.created_at).toDateString() === today).length;
  }, [items]);
  const filteredItems = reactExports.useMemo(() => {
    return items.filter((item) => {
      const person = item.person;
      const text = `
        ${item.activity_type}
        ${item.notes || ""}
        ${person?.name || ""}
        ${person?.phone || ""}
        ${person?.email || ""}
        ${person?.product_type || ""}
        ${person?.status || ""}
        ${person?.lead_stage || ""}
        ${person?.bank_name || ""}
      `.toLowerCase();
      const matchesSearch = text.includes(searchTerm.toLowerCase());
      const matchesFilter = filterType === "all" || item.personType?.toLowerCase() === filterType || item.activity_type.toLowerCase().includes(filterType) || person?.lead_stage?.toLowerCase().includes(filterType) || person?.status?.toLowerCase().includes(filterType);
      return matchesSearch && matchesFilter;
    });
  }, [items, searchTerm, filterType]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 px-5 py-4 text-white shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-xl bg-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-semibold", children: "Activity Feed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-white/80", children: "Recent notes, lead updates, sanction and disbursement details" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white/15 px-3 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: totalActivities }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/75", children: "Total Activities" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white/15 px-3 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: todayActivities }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/75", children: "Today" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white/15 px-3 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: filteredItems.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/75", children: "Showing" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border border-sky-100 bg-white p-4 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 md:grid-cols-[1fr_220px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-3 h-4 w-4 text-slate-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), placeholder: "Search by name, mobile, email, bank, stage, note...", className: "h-10 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "absolute left-3 top-3 h-4 w-4 text-slate-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: filterType, onChange: (e) => setFilterType(e.target.value), className: "h-10 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All Activities" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "lead", children: "Leads" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "customer", children: "Customers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "note", children: "Notes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "sanction", children: "Sanction" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "disbursement", children: "Disbursement" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "closed", children: "Closed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "new", children: "New" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "docs", children: "Docs Pending" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "overflow-hidden border border-sky-100 bg-white shadow-sm", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-44 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin text-slate-500" }) }) : filteredItems.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-10 text-center text-sm text-slate-500", children: "No recent activity found." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-slate-100", children: filteredItems.map((item) => {
      const Icon = ICONS[item.activity_type] ?? Activity;
      const person = item.person;
      const stage = person?.lead_stage || person?.status;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { onClick: () => setSelectedActivity(item), className: "group flex cursor-pointer gap-4 px-5 py-4 transition hover:bg-sky-50/70", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "capitalize bg-sky-100 text-sky-700 hover:bg-sky-100", children: item.activity_type.replaceAll("_", " ") }),
            item.personType && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-blue-600 text-white hover:bg-blue-600", children: item.personType }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-xs text-slate-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-3.5 w-3.5" }),
              new Date(item.created_at).toLocaleString("en-IN")
            ] })
          ] }),
          person ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 rounded-xl border border-slate-100 bg-slate-50 p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 md:flex-row md:items-start md:justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold text-slate-900", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4 text-sky-600" }),
                person.name || "Name not available"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 grid gap-2 text-xs text-slate-600 md:grid-cols-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5 text-sky-600" }),
                  person.phone || "Phone not available"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5 text-sky-600" }),
                  person.email || "Email not available"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid gap-2 text-xs text-slate-700 md:grid-cols-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-white px-3 py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-slate-400", children: "Loan Amount" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: formatMoney(person.loan_amount) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-white px-3 py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-slate-400", children: "Sanction" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: formatMoney(person.sanction_amount) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-white px-3 py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-slate-400", children: "Disbursement" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: formatMoney(person.disbursement_amount) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-white px-3 py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-slate-400", children: "Bank" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: person.bank_name || "N/A" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
              person.product_type && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "bg-white", children: person.product_type }),
              stage && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: getStageClass(stage), children: stage })
            ] })
          ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm text-slate-500", children: "Lead/customer details not available" }),
          item.notes && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 whitespace-pre-wrap text-sm leading-relaxed text-slate-700", children: item.notes }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
            e.stopPropagation();
            setSelectedActivity(item);
          }, className: "mt-3 rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-sky-700", children: "View Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[11px] text-slate-400", children: item.lead_id ? `Lead ID: ${item.lead_id.slice(0, 8)}…` : item.customer_id ? `Customer ID: ${item.customer_id.slice(0, 8)}…` : "" })
        ] })
      ] }, item.id);
    }) }) }),
    selectedActivity && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex justify-end bg-black/30 backdrop-blur-sm", onClick: () => setSelectedActivity(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full w-full max-w-lg animate-in slide-in-from-right bg-white shadow-2xl", onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b px-5 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-slate-900", children: "Activity Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "Full lead/customer, sanction and disbursement information" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedActivity(null), className: "flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-[calc(100vh-73px)] space-y-5 overflow-y-auto p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 p-4 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-xl bg-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-1 bg-white/20 capitalize text-white hover:bg-white/20", children: selectedActivity.activity_type.replaceAll("_", " ") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/80", children: new Date(selectedActivity.created_at).toLocaleString("en-IN") })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-slate-100 bg-slate-50 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mb-3 text-sm font-semibold text-slate-900", children: [
            selectedActivity.personType || "Lead",
            " Information"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-slate-900", children: selectedActivity.person?.name || "Name not available" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 md:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "Phone Number" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-slate-900", children: selectedActivity.person?.phone || "Phone not available" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: "Email" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-slate-900", children: selectedActivity.person?.email || "Email not available" })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-slate-100 bg-white p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center gap-2 text-xs text-slate-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "h-3.5 w-3.5 text-sky-600" }),
              "Product"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold capitalize text-slate-900", children: selectedActivity.person?.product_type || "N/A" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-slate-100 bg-white p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center gap-2 text-xs text-slate-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3.5 w-3.5 text-sky-600" }),
              "Status / Stage"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold capitalize text-slate-900", children: selectedActivity.person?.lead_stage || selectedActivity.person?.status || "N/A" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-slate-100 bg-white p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-xs text-slate-500", children: "Bank" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-slate-900", children: selectedActivity.person?.bank_name || "N/A" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-slate-100 bg-white p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-xs text-slate-500", children: "CIBIL" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-slate-900", children: selectedActivity.person?.cibil_score || "N/A" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-slate-100 bg-white p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 text-sm font-semibold text-slate-900", children: "Loan, Sanction & Disbursement" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-xl bg-slate-50 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-slate-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "h-4 w-4 text-sky-600" }),
                "Loan Amount"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-slate-900", children: formatMoney(selectedActivity.person?.loan_amount) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-xl bg-green-50 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-green-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-4 w-4" }),
                "Sanction Amount"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-green-800", children: formatMoney(selectedActivity.person?.sanction_amount) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-xl bg-blue-50 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-blue-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(WalletCards, { className: "h-4 w-4" }),
                "Disbursement Amount"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-blue-800", children: formatMoney(selectedActivity.person?.disbursement_amount) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-xl bg-slate-50 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-slate-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-4 w-4 text-sky-600" }),
                "Disbursement Date"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-slate-900", children: formatDate(selectedActivity.person?.disbursement_date) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-slate-100 bg-white p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mb-2 flex items-center gap-2 text-sm font-semibold text-slate-900", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4 text-sky-600" }),
            "Activity Note"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-pre-wrap text-sm leading-relaxed text-slate-700", children: selectedActivity.notes || "No note available" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-slate-100 bg-white p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center gap-2 text-sm font-semibold text-slate-900", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Hash, { className: "h-4 w-4 text-sky-600" }),
            "Reference"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-xs text-slate-500", children: [
            selectedActivity.lead_id && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-slate-700", children: "Lead ID:" }),
              " ",
              selectedActivity.lead_id
            ] }),
            selectedActivity.customer_id && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-slate-700", children: "Customer ID:" }),
              " ",
              selectedActivity.customer_id
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-slate-700", children: "Activity ID:" }),
              " ",
              selectedActivity.id
            ] })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  ActivityPage as component
};
