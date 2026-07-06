import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as Card } from "./card-RGlIzTYo.mjs";
import { B as Button } from "./button-TjZkfKyC.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { L as Label } from "./label-JU3yqRBo.mjs";
import { D as Dialog, f as DialogTrigger, a as DialogContent, d as DialogHeader, e as DialogTitle } from "./dialog-RBdmK4nU.mjs";
import { S as Select, c as SelectTrigger, d as SelectValue, a as SelectContent, b as SelectItem } from "./select-DPaGlibP.mjs";
import { T as Table, d as TableHeader, e as TableRow, c as TableHead, a as TableBody, b as TableCell } from "./table-DhIrzwGX.mjs";
import { u as useAuth, s as supabase } from "./router-Caaku3dA.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { T as Textarea } from "./textarea-DtF-dDz-.mjs";
import { c as cn } from "./utils-H80jjgLf.mjs";
import { C as CustomerProfileDialog } from "./CustomerProfileDialog-DBFvn8uq.mjs";
import { I as INDIA_STATES, c as citiesForState } from "./india-cities-D5SYeB3D.mjs";
import { au as Sparkles, ak as Plus, ap as Search, a4 as LoaderCircle, y as CircleCheck, E as CircleX, ax as StickyNote, ac as MessageCircle } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
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
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
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
import "../_libs/isbot.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/tailwind-merge.mjs";
import "./badge-DyfXZgLs.mjs";
import "./tabs-Cs3JMi5l.mjs";
import "../_libs/radix-ui__react-tabs.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
const LEAD_STAGES = ["New", "Qualified", "Approved", "Rejected", "Disbursed", "Closed"];
const STAGE_STYLES = {
  New: {
    trigger: "border-sky-300 bg-sky-50 text-sky-700",
    dot: "bg-sky-500",
    option: "text-sky-700"
  },
  Qualified: {
    trigger: "border-violet-300 bg-violet-50 text-violet-700",
    dot: "bg-violet-500",
    option: "text-violet-700"
  },
  Approved: {
    trigger: "border-emerald-300 bg-emerald-50 text-emerald-700",
    dot: "bg-emerald-500",
    option: "text-emerald-700"
  },
  Rejected: {
    trigger: "border-rose-300 bg-rose-50 text-rose-700",
    dot: "bg-rose-500",
    option: "text-rose-700"
  },
  Disbursed: {
    trigger: "border-amber-300 bg-amber-50 text-amber-700",
    dot: "bg-amber-500",
    option: "text-amber-700"
  },
  Closed: {
    trigger: "border-slate-300 bg-slate-100 text-slate-700",
    dot: "bg-slate-500",
    option: "text-slate-700"
  }
};
const PRODUCT_TYPES = ["loan", "insurance", "mutual_fund"];
const LEAD_SOURCES = ["Website", "Referral", "Walk-in", "Campaign", "Cold Call", "Partner", "WhatsApp", "Social Media"];
const LOAN_TYPES = ["Home Loan", "Personal Loan", "Business Loan", "Working Capital Loan", "Machinery & Equipment Loan", "Car / Vehicle Loan", "Education Loan", "Loan Against Property", "Gold Loan", "Project Loan", "Credit Card"];
const SUB_LOAN_TYPES = {
  "Home Loan": ["Home Purchase", "Home Construction", "Plot Purchase", "Home Improvement", "Balance Transfer", "Top-up Loan"],
  "Personal Loan": ["Salaried", "Self-Employed", "Wedding", "Travel", "Medical Emergency", "Debt Consolidation"],
  "Business Loan": ["Working Capital", "Term Loan", "Machinery Loan", "MSME", "Overdraft", "Invoice Discounting"],
  "Working Capital Loan": ["Cash Credit", "Overdraft", "Invoice Financing", "Inventory Funding", "Vendor Payment Funding"],
  "Machinery & Equipment Loan": ["New Machinery Loan", "Used Machinery Loan", "Equipment Finance", "Industrial Tools Finance", "Manufacturing Equipment Loan"],
  "Car / Vehicle Loan": ["New Car", "Used Car", "Two Wheeler", "Commercial Vehicle"],
  "Education Loan": ["Study in India", "Study Abroad", "Skill Development"],
  "Loan Against Property": ["Residential Property", "Commercial Property", "Industrial Property"],
  "Gold Loan": ["Personal Gold Loan", "Agriculture Gold Loan"],
  "Project Loan": ["Infrastructure", "Real Estate", "Renewable Energy"],
  "Credit Card": ["Regular", "Premium", "Business", "Travel Card"]
};
const BANK_OPTIONS = ["HDFC Bank", "ICICI Bank", "State Bank of India", "Axis Bank", "Kotak Mahindra Bank", "IDFC First Bank", "Yes Bank", "IndusInd Bank", "Punjab National Bank", "Bank of Baroda", "Canara Bank", "Union Bank of India", "Federal Bank", "RBL Bank", "Bajaj Finserv", "Tata Capital", "Aditya Birla Finance", "L&T Finance", "Mahindra Finance", "IDBI Bank", "Piramal Finance", "DCB Bank", "Karnataka Bank", "South Indian Bank"];
function normaliseStage(s) {
  if (LEAD_STAGES.includes(s)) return s;
  if (s === "Contacted") return "New";
  if (s === "Docs Pending" || s === "Login Ready") return "Qualified";
  if (s === "Sanction Pending") return "Approved";
  if (s === "Converted") return "Disbursed";
  if (s === "Rejected") return "Rejected";
  return "New";
}
function cibilBadge(score) {
  if (score == null) return "bg-slate-100 text-slate-500 border-slate-200";
  if (score >= 750) return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (score >= 650) return "bg-amber-50 text-amber-700 border-amber-200";
  return "bg-rose-50 text-rose-700 border-rose-200";
}
function LeadsPage() {
  const {
    user,
    isAdmin
  } = useAuth();
  const [leads, setLeads] = reactExports.useState([]);
  const [staff, setStaff] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [filter, setFilter] = reactExports.useState("");
  const [stageFilter, setStageFilter] = reactExports.useState("all");
  const [assigneeFilter, setAssigneeFilter] = reactExports.useState("all");
  const [bankFilter, setBankFilter] = reactExports.useState("all");
  const [sortBy, setSortBy] = reactExports.useState("recent");
  const [open, setOpen] = reactExports.useState(false);
  const [noteLead, setNoteLead] = reactExports.useState(null);
  const [approveLead, setApproveLead] = reactExports.useState(null);
  const [rejectLead, setRejectLead] = reactExports.useState(null);
  const [profileLead, setProfileLead] = reactExports.useState(null);
  const rowSelectClass = "h-10 w-[190px] rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100";
  const load = async () => {
    setLoading(true);
    const [{
      data,
      error
    }, roles] = await Promise.all([supabase.from("leads").select("id, lead_name, full_name, phone, email, pan, city, state, product_type, lead_source, status, assigned_to, created_at, cibil_score, loan_type, loan_sub_type, loan_amount, bank_name").order("created_at", {
      ascending: false
    }).limit(500), supabase.from("user_roles").select("user_id, role")]);
    if (error) toast.error(error.message);
    setLeads(data ?? []);
    const ids = (roles.data ?? []).map((r) => r.user_id);
    if (ids.length) {
      const {
        data: profs
      } = await supabase.from("profiles").select("id, full_name, email").in("id", ids);
      const byId = new Map((profs ?? []).map((p) => [p.id, p]));
      setStaff((roles.data ?? []).map((r) => ({
        id: r.user_id,
        full_name: byId.get(r.user_id)?.full_name ?? null,
        email: byId.get(r.user_id)?.email ?? null,
        role: r.role
      })));
    } else {
      setStaff([]);
    }
    setLoading(false);
  };
  reactExports.useEffect(() => {
    load();
    const channel = supabase.channel("crm-leads-sync").on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "leads"
    }, () => load()).on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "customers"
    }, () => load()).subscribe();
    return () => {
      channel.unsubscribe();
    };
  }, []);
  const filtered = leads.filter((l) => {
    const term = filter.toLowerCase();
    const stage = normaliseStage(l.status);
    const matchesText = !term || (l.lead_name ?? l.full_name ?? "").toLowerCase().includes(term) || l.phone.includes(term) || (l.email ?? "").toLowerCase().includes(term) || (l.pan ?? "").toLowerCase().includes(term);
    const matchesStage = stageFilter === "all" || stage === stageFilter;
    const matchesAssignee = assigneeFilter === "all" || (assigneeFilter === "unassigned" ? !l.assigned_to : l.assigned_to === assigneeFilter);
    const matchesBank = bankFilter === "all" || (bankFilter === "none" ? !l.bank_name : l.bank_name === bankFilter);
    const partnerVisible = !isAdmin || (l.lead_source ?? "").toLowerCase() !== "partner" || !!user && l.assigned_to === user.id;
    return matchesText && matchesStage && matchesAssignee && matchesBank && partnerVisible;
  }).sort((a, b) => {
    const nameA = (a.lead_name ?? a.full_name ?? "").toLowerCase();
    const nameB = (b.lead_name ?? b.full_name ?? "").toLowerCase();
    if (sortBy === "name_asc") return nameA.localeCompare(nameB);
    if (sortBy === "name_desc") return nameB.localeCompare(nameA);
    if (sortBy === "amount_desc") return (Number(b.loan_amount) || 0) - (Number(a.loan_amount) || 0);
    if (sortBy === "amount_asc") return (Number(a.loan_amount) || 0) - (Number(b.loan_amount) || 0);
    if (sortBy === "cibil_desc") return (b.cibil_score ?? 0) - (a.cibil_score ?? 0);
    if (sortBy === "oldest") return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });
  const stageCounts = LEAD_STAGES.reduce((acc, s) => {
    acc[s] = leads.filter((l) => normaliseStage(l.status) === s).length;
    return acc;
  }, {
    New: 0,
    Qualified: 0,
    Approved: 0,
    Rejected: 0,
    Disbursed: 0,
    Closed: 0
  });
  const staffLabel = (id) => {
    if (!id) return "Unassigned";
    const s = staff.find((x) => x.id === id);
    return s?.full_name || s?.email || "Staff";
  };
  const updateBank = async (lead, value) => {
    const bankName = value === "none" ? null : value;
    const {
      error
    } = await supabase.from("leads").update({
      bank_name: bankName
    }).eq("id", lead.id);
    if (error) {
      toast.error(error.message);
      return;
    }
    setLeads((prev) => prev.map((l) => l.id === lead.id ? {
      ...l,
      bank_name: bankName
    } : l));
    toast.success(bankName ? `Bank → ${bankName}` : "Bank cleared");
  };
  const updateAssignee = async (lead, value) => {
    const newId = value === "unassigned" ? null : value;
    const {
      error
    } = await supabase.from("leads").update({
      assigned_to: newId
    }).eq("id", lead.id);
    if (error) return toast.error(error.message);
    setLeads((prev) => prev.map((l) => l.id === lead.id ? {
      ...l,
      assigned_to: newId
    } : l));
    toast.success(`Assigned → ${staffLabel(newId)}`);
  };
  const approve = (lead) => setApproveLead(lead);
  const reject = (lead) => setRejectLead(lead);
  const confirmApprove = async (lead, payload) => {
    const {
      error: leadErr
    } = await supabase.from("leads").update({
      status: "Approved"
    }).eq("id", lead.id);
    if (leadErr) return toast.error(leadErr.message);
    let customerId = null;
    const {
      data: existing
    } = await supabase.from("customers").select("id").eq("lead_id", lead.id).maybeSingle();
    if (existing) {
      customerId = existing.id;
    } else {
      const {
        data: ins,
        error: cErr
      } = await supabase.from("customers").insert({
        customer_name: lead.lead_name ?? lead.full_name ?? "Unnamed",
        mobile: lead.phone,
        email: lead.email,
        pan: lead.pan,
        address: [lead.city, lead.state].filter(Boolean).join(", ") || null,
        lead_id: lead.id,
        loan_type: payload.loan_type,
        loan_amount: payload.sanction_amount ?? payload.requested_amount,
        cibil_score: lead.cibil_score,
        bank_name: payload.bank_name,
        stage: "Approved",
        note: payload.notes || null
      }).select("id").single();
      if (cErr) return toast.error(cErr.message);
      customerId = ins.id;
    }
    if (customerId) {
      await supabase.from("leads").update({
        converted_customer_id: customerId
      }).eq("id", lead.id);
    }
    const {
      error: lcErr
    } = await supabase.from("loan_cases").insert({
      customer_id: customerId,
      lead_id: lead.id,
      loan_type: payload.loan_type,
      loan_amount: payload.sanction_amount ?? payload.requested_amount,
      requested_amount: payload.requested_amount,
      sanction_amount: payload.sanction_amount,
      tenure_months: payload.tenure_months,
      interest_rate: payload.interest_rate,
      lender_name: payload.bank_name || null,
      stage: payload.sanction_amount ? "Sanction" : "Under Process",
      notes: payload.notes || null,
      documents_checklist: payload.docs
    });
    if (lcErr) return toast.error(lcErr.message);
    setLeads((prev) => prev.map((l) => l.id === lead.id ? {
      ...l,
      status: "Approved"
    } : l));
    toast.success("Approved → Customer & Loan Case created");
    setApproveLead(null);
  };
  const confirmReject = async (lead, reason) => {
    const {
      error
    } = await supabase.from("leads").update({
      status: "Rejected",
      rejection_reason: reason
    }).eq("id", lead.id);
    if (error) return toast.error(error.message);
    setLeads((prev) => prev.map((l) => l.id === lead.id ? {
      ...l,
      status: "Rejected"
    } : l));
    toast.success("Lead rejected");
    setRejectLead(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-xl bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 px-4 py-3 text-white shadow-md shadow-sky-500/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/15 blur-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-wrap items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold leading-tight", children: "Leads Pipeline" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-white/80", children: [
              leads.length,
              " total · ",
              filtered.length,
              " shown · WhatsApp ready"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: setOpen, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "bg-white text-sky-700 shadow-md hover:bg-sky-50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-2 h-4 w-4" }),
            " New Lead"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-h-[90vh] max-w-2xl overflow-y-auto bg-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Add New Lead" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NewLeadForm, { onSaved: () => {
              setOpen(false);
              load();
            } })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2 sm:grid-cols-6", children: LEAD_STAGES.map((s) => {
      const st = STAGE_STYLES[s];
      const active = stageFilter === s;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setStageFilter(active ? "all" : s), className: cn("flex items-center justify-between rounded-xl border bg-white px-3 py-2 text-left text-xs shadow-sm transition-all hover:-translate-y-0.5 hover:shadow", active ? "ring-2 ring-offset-1 " + st.trigger : "border-slate-200"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("h-2.5 w-2.5 rounded-full", st.dot) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-slate-700", children: s })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("rounded-full px-1.5 py-0.5 text-[10px] font-semibold", st.trigger), children: stageCounts[s] })
      ] }, s);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-w-[220px] flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Search name, phone, email, PAN…", value: filter, onChange: (e) => setFilter(e.target.value), className: "pl-9" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: stageFilter, onValueChange: setStageFilter, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-[170px] bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Stage" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { className: "bg-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All stages" }),
          LEAD_STAGES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: assigneeFilter, onValueChange: setAssigneeFilter, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-[200px] bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Assignee" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { className: "bg-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All assignees" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "unassigned", children: "Unassigned" }),
          staff.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: s.id, children: [
            s.full_name || s.email || "Staff",
            " · ",
            s.role
          ] }, s.id))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: bankFilter, onValueChange: setBankFilter, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-[190px] bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Bank" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { className: "bg-white max-h-72", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All banks" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "none", children: "— Not set —" }),
          [...BANK_OPTIONS].sort((a, b) => a.localeCompare(b)).map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: b, children: b }, b))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: sortBy, onValueChange: setSortBy, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-[180px] bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Sort" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { className: "bg-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "recent", children: "Newest first" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "oldest", children: "Oldest first" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "name_asc", children: "Name A → Z" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "name_desc", children: "Name Z → A" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "amount_desc", children: "Loan amount high → low" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "amount_asc", children: "Loan amount low → high" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "cibil_desc", children: "CIBIL high → low" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "overflow-hidden", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-48 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin text-muted-foreground" }) }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-10 text-center text-sm text-slate-500", children: "No leads match your filters." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Mobile" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Loan Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Loan Amount" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "CIBIL" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Stage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Bank" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Assigned" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "Action" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: filtered.map((l) => {
        const stage = normaliseStage(l.status);
        const st = STAGE_STYLES[stage];
        const canDecide = stage !== "Approved" && stage !== "Rejected" && stage !== "Disbursed" && stage !== "Closed";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setProfileLead(l.id), className: "text-sky-700 hover:underline", children: l.lead_name ?? l.full_name ?? "—" }),
            l.email && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500", children: l.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm", children: l.phone }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-slate-800", children: l.loan_type ?? (l.product_type ?? "").replace(/_/g, " ") }),
            l.loan_sub_type && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500", children: l.loan_sub_type })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm", children: l.loan_amount ? `₹${Number(l.loan_amount).toLocaleString("en-IN")}` : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold", cibilBadge(l.cibil_score)), children: l.cibil_score ?? "N/A" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold", st.trigger), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("h-1.5 w-1.5 rounded-full", st.dot) }),
            stage
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: l.bank_name ?? "none", onChange: (e) => updateBank(l, e.target.value), className: rowSelectClass, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "none", children: "— None —" }),
            BANK_OPTIONS.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: b, children: b }, b))
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: l.assigned_to ?? "unassigned", onChange: (e) => updateAssignee(l, e.target.value), className: rowSelectClass, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "unassigned", children: "Unassigned" }),
            staff.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s.id, children: s.full_name || s.email || "Staff" }, s.id))
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5", children: [
            canDecide && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "h-8 bg-emerald-600 text-white hover:bg-emerald-700", onClick: () => approve(l), title: "Approve lead → push to Customers", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mr-1 h-3.5 w-3.5" }),
                "Approve"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "h-8 border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100", onClick: () => reject(l), title: "Reject lead", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "mr-1 h-3.5 w-3.5" }),
                "Reject"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-8 border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100", title: "Notes", onClick: () => setNoteLead(l), children: /* @__PURE__ */ jsxRuntimeExports.jsx(StickyNote, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `https://wa.me/${(l.phone || "").replace(/\D/g, "")}?text=${encodeURIComponent(`Hi ${l.lead_name ?? l.full_name ?? "there"}, this is from Aarthvaahini. Following up on your ${(l.loan_type ?? l.product_type ?? "").replace(/_/g, " ")} enquiry.`)}`, target: "_blank", rel: "noreferrer", title: "WhatsApp", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-8 border-green-200 bg-green-50 text-green-700 hover:bg-green-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3.5 w-3.5" }) }) })
          ] }) })
        ] }, l.id);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CustomerProfileDialog, { open: !!profileLead, onOpenChange: (v) => !v && setProfileLead(null), leadId: profileLead }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!noteLead, onOpenChange: (v) => !v && setNoteLead(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg bg-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
        "Notes — ",
        noteLead?.lead_name ?? noteLead?.full_name
      ] }) }),
      noteLead && /* @__PURE__ */ jsxRuntimeExports.jsx(LeadNotes, { lead: noteLead })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ApproveLeadDialog, { lead: approveLead, onClose: () => setApproveLead(null), onConfirm: confirmApprove }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RejectLeadDialog, { lead: rejectLead, onClose: () => setRejectLead(null), onConfirm: confirmReject })
  ] });
}
function NewLeadForm({
  onSaved
}) {
  const initialLead = {
    lead_name: "",
    phone: "",
    email: "",
    pan: "",
    aadhaar: "",
    city: "",
    state: "",
    product_type: "loan",
    lead_source: "Website",
    loan_type: "",
    loan_sub_type: "",
    loan_amount: "",
    cibil_score: "",
    bank_name: ""
  };
  const [f, setF] = reactExports.useState(initialLead);
  const [saving, setSaving] = reactExports.useState(false);
  const subOptions = SUB_LOAN_TYPES[f.loan_type] ?? [];
  const inputClass = "h-11 w-full rounded-xl border bg-white px-4 text-sm outline-none transition focus:ring-2 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400";
  const submit = async (e) => {
    e.preventDefault();
    if (!f.lead_name.trim()) {
      toast.error("Lead name is required");
      return;
    }
    if (!f.phone.trim()) {
      toast.error("Mobile number is required");
      return;
    }
    setSaving(true);
    const {
      error
    } = await supabase.from("leads").insert({
      lead_name: f.lead_name.trim(),
      full_name: f.lead_name.trim(),
      phone: f.phone.trim(),
      email: f.email.trim() || null,
      pan: f.pan.trim() || null,
      aadhaar: f.aadhaar.trim() || null,
      city: f.city.trim() || null,
      state: f.state.trim() || null,
      product_type: f.product_type,
      lead_source: f.lead_source,
      status: "New",
      loan_type: f.loan_type || null,
      loan_sub_type: f.loan_sub_type || null,
      loan_amount: f.loan_amount ? Number(f.loan_amount) : null,
      amount: f.loan_amount ? Number(f.loan_amount) : null,
      cibil_score: f.cibil_score ? Number(f.cibil_score) : null,
      product_name: f.loan_sub_type || f.loan_type || null,
      bank_name: f.bank_name || null
    });
    setSaving(false);
    if (error) return toast.error(error.message);
    toast.success("Lead created");
    setF(initialLead);
    onSaved();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "grid grid-cols-1 gap-3 sm:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Lead Name *", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, className: "border-sky-200 focus-visible:ring-sky-400", value: f.lead_name, onChange: (e) => setF((prev) => ({
      ...prev,
      lead_name: e.target.value
    })) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Mobile *", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, className: "border-rose-200 focus-visible:ring-rose-400", value: f.phone, onChange: (e) => setF((prev) => ({
      ...prev,
      phone: e.target.value
    })) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", className: "border-cyan-200 focus-visible:ring-cyan-400", value: f.email, onChange: (e) => setF((prev) => ({
      ...prev,
      email: e.target.value
    })) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "PAN", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "border-amber-200 focus-visible:ring-amber-400", value: f.pan, onChange: (e) => setF((prev) => ({
      ...prev,
      pan: e.target.value.toUpperCase()
    })) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Aadhaar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "border-emerald-200 focus-visible:ring-emerald-400", value: f.aadhaar, onChange: (e) => setF((prev) => ({
      ...prev,
      aadhaar: e.target.value
    })) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "State", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "h-9 w-full rounded-md border border-indigo-200 bg-white px-3 text-sm", value: f.state, onChange: (e) => setF((prev) => ({
      ...prev,
      state: e.target.value,
      city: ""
    })), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select state" }),
      INDIA_STATES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s }, s))
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "City", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "h-9 w-full rounded-md border border-blue-200 bg-white px-3 text-sm disabled:opacity-60", value: f.city, onChange: (e) => setF((prev) => ({
      ...prev,
      city: e.target.value
    })), disabled: !f.state, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: f.state ? "Select city" : "Select state first" }),
      citiesForState(f.state).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, children: c }, c))
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Product Interest", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: f.product_type, onChange: (e) => setF((prev) => ({
      ...prev,
      product_type: e.target.value,
      loan_type: "",
      loan_sub_type: ""
    })), className: `${inputClass} border-violet-200 focus:border-violet-400 focus:ring-violet-100`, children: PRODUCT_TYPES.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p, children: p.replace(/_/g, " ") }, p)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Lead Source", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: f.lead_source, onChange: (e) => setF((prev) => ({
      ...prev,
      lead_source: e.target.value
    })), className: `${inputClass} border-pink-200 focus:border-pink-400 focus:ring-pink-100`, children: LEAD_SOURCES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s }, s)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Loan Type", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: f.loan_type, onChange: (e) => setF((prev) => ({
      ...prev,
      loan_type: e.target.value,
      loan_sub_type: ""
    })), className: `${inputClass} border-blue-200 focus:border-blue-400 focus:ring-blue-100`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Choose loan type" }),
      LOAN_TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: t, children: t }, t))
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Sub Loan Type", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: f.loan_sub_type, onChange: (e) => setF((prev) => ({
      ...prev,
      loan_sub_type: e.target.value
    })), disabled: !subOptions.length, className: `${inputClass} border-blue-200 focus:border-blue-400 focus:ring-blue-100`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: subOptions.length ? "Choose sub type" : "Pick loan type first" }),
      subOptions.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: t, children: t }, t))
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Loan Amount (₹)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", className: "border-emerald-200 focus-visible:ring-emerald-400", placeholder: "500000", value: f.loan_amount, onChange: (e) => setF((prev) => ({
      ...prev,
      loan_amount: e.target.value
    })) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "CIBIL Score", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", min: 300, max: 900, className: "border-amber-200 focus-visible:ring-amber-400", placeholder: "750", value: f.cibil_score, onChange: (e) => setF((prev) => ({
      ...prev,
      cibil_score: e.target.value
    })) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Bank (if approved)", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: f.bank_name, onChange: (e) => setF((prev) => ({
      ...prev,
      bank_name: e.target.value
    })), className: `${inputClass} border-rose-200 focus:border-rose-400 focus:ring-rose-100`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Choose bank (optional)" }),
      BANK_OPTIONS.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: b, children: b }, b))
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-1 mt-2 flex justify-end sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", disabled: saving, className: "bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 text-white shadow-md hover:opacity-90", children: [
      saving && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
      "Create Lead"
    ] }) })
  ] });
}
function LeadNotes({
  lead
}) {
  const [notes, setNotes] = reactExports.useState([]);
  const [text, setText] = reactExports.useState("");
  const [saving, setSaving] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(true);
  const load = async () => {
    const {
      data
    } = await supabase.from("activities").select("id, notes, created_at").eq("lead_id", lead.id).eq("activity_type", "note").order("created_at", {
      ascending: false
    }).limit(50);
    setNotes(data ?? []);
    setLoading(false);
  };
  reactExports.useEffect(() => {
    load();
  }, [lead.id]);
  const add = async () => {
    if (!text.trim()) return;
    setSaving(true);
    const {
      error
    } = await supabase.from("activities").insert({
      lead_id: lead.id,
      activity_type: "note",
      notes: text.trim()
    });
    setSaving(false);
    if (error) return toast.error(error.message);
    setText("");
    toast.success("Note added");
    load();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 3, placeholder: "Add a follow-up note (call summary, next action, document pending…)", value: text, onChange: (e) => setText(e.target.value), className: "border-amber-200 focus-visible:ring-amber-400" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: add, disabled: saving || !text.trim(), className: "bg-gradient-to-r from-amber-500 to-orange-500 text-white", children: [
      saving && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-3.5 w-3.5 animate-spin" }),
      "Save Note"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-64 space-y-2 overflow-auto pr-1", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mx-auto h-4 w-4 animate-spin text-slate-400" }) }) : notes.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "py-2 text-center text-xs text-slate-400", children: "No notes yet for this lead." }) : notes.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-amber-100 bg-amber-50/60 p-3 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "whitespace-pre-wrap text-slate-800", children: n.notes }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[10px] uppercase tracking-wide text-slate-500", children: new Date(n.created_at).toLocaleString("en-IN") })
    ] }, n.id)) })
  ] });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children })
  ] });
}
const DOC_LIST = ["PAN Card", "Aadhaar Card", "Income Proof / Salary Slips", "Bank Statement (6 months)", "Photograph", "Address Proof", "ITR / Form 16", "Business Proof", "Property Documents"];
function ApproveLeadDialog({
  lead,
  onClose,
  onConfirm
}) {
  const [saving, setSaving] = reactExports.useState(false);
  const [f, setF] = reactExports.useState({
    loan_type: "",
    requested_amount: "",
    sanction_amount: "",
    tenure_months: "",
    interest_rate: "",
    bank_name: "",
    notes: "",
    docs: {}
  });
  reactExports.useEffect(() => {
    if (lead) {
      setF({
        loan_type: lead.loan_type ?? "Home Loan",
        requested_amount: lead.loan_amount ? String(lead.loan_amount) : "",
        sanction_amount: "",
        tenure_months: "240",
        interest_rate: "8.5",
        bank_name: lead.bank_name ?? "",
        notes: "",
        docs: {}
      });
    }
  }, [lead]);
  if (!lead) return null;
  const submit = async (e) => {
    e.preventDefault();
    setSaving(true);
    await onConfirm(lead, {
      loan_type: f.loan_type,
      requested_amount: f.requested_amount ? Number(f.requested_amount) : null,
      sanction_amount: f.sanction_amount ? Number(f.sanction_amount) : null,
      tenure_months: f.tenure_months ? Number(f.tenure_months) : null,
      interest_rate: f.interest_rate ? Number(f.interest_rate) : null,
      bank_name: f.bank_name,
      notes: f.notes,
      docs: f.docs
    });
    setSaving(false);
  };
  const inputCls = "h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!lead, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl max-h-[90vh] overflow-y-auto bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "text-emerald-700", children: [
      "Approve Lead — ",
      lead.lead_name ?? lead.full_name
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-emerald-50 p-3 text-xs text-emerald-800", children: "Customer + Loan Case auto-create honge approve karte hi." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Loan Type *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { required: true, className: `${inputCls} mt-1`, value: f.loan_type, onChange: (e) => setF({
            ...f,
            loan_type: e.target.value
          }), children: LOAN_TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: t }, t)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Bank / Lender" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: `${inputCls} mt-1`, value: f.bank_name, onChange: (e) => setF({
            ...f,
            bank_name: e.target.value
          }), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "— Select —" }),
            BANK_OPTIONS.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: b }, b))
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Requested Amount (₹)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", className: "mt-1", value: f.requested_amount, onChange: (e) => setF({
            ...f,
            requested_amount: e.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Sanctioned Amount (₹)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", className: "mt-1", value: f.sanction_amount, onChange: (e) => setF({
            ...f,
            sanction_amount: e.target.value
          }), placeholder: "If sanctioned" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Tenure (months)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", className: "mt-1", value: f.tenure_months, onChange: (e) => setF({
            ...f,
            tenure_months: e.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Interest Rate (%)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", step: "0.01", className: "mt-1", value: f.interest_rate, onChange: (e) => setF({
            ...f,
            interest_rate: e.target.value
          }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Notes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 2, className: "mt-1", value: f.notes, onChange: (e) => setF({
          ...f,
          notes: e.target.value
        }), placeholder: "Any remarks for this approval…" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "mb-2 block", children: "Documents Received Checklist" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3", children: DOC_LIST.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "h-4 w-4 accent-emerald-600", checked: !!f.docs[d], onChange: (e) => setF({
            ...f,
            docs: {
              ...f.docs,
              [d]: e.target.checked
            }
          }) }),
          d
        ] }, d)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: onClose, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", disabled: saving, className: "bg-emerald-600 text-white hover:bg-emerald-700", children: [
          saving && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
          "Approve & Create Customer"
        ] })
      ] })
    ] })
  ] }) });
}
function RejectLeadDialog({
  lead,
  onClose,
  onConfirm
}) {
  const [reason, setReason] = reactExports.useState("");
  const [saving, setSaving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (lead) setReason("");
  }, [lead]);
  if (!lead) return null;
  const submit = async (e) => {
    e.preventDefault();
    if (!reason.trim()) return toast.error("Reason required");
    setSaving(true);
    await onConfirm(lead, reason.trim());
    setSaving(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!lead, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-md bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "text-rose-700", children: [
      "Reject Lead — ",
      lead.lead_name ?? lead.full_name
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Rejection Reason *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { required: true, rows: 4, className: "mt-1", value: reason, onChange: (e) => setReason(e.target.value), placeholder: "E.g. Low CIBIL score, insufficient income, document mismatch…" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: onClose, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", disabled: saving, className: "bg-rose-600 text-white hover:bg-rose-700", children: [
          saving && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
          "Reject Lead"
        ] })
      ] })
    ] })
  ] }) });
}
export {
  LeadsPage as component
};
