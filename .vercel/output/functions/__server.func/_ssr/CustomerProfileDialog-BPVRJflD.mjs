import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { D as Dialog, a as DialogContent, d as DialogHeader, e as DialogTitle } from "./dialog-RBdmK4nU.mjs";
import { B as Badge } from "./badge-DyfXZgLs.mjs";
import { B as Button } from "./button-TjZkfKyC.mjs";
import { T as Textarea } from "./textarea-DtF-dDz-.mjs";
import { T as Tabs, b as TabsList, c as TabsTrigger, a as TabsContent } from "./tabs-Cs3JMi5l.mjs";
import { s as supabase } from "./router-fcTUeZV3.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { c as cn } from "./utils-H80jjgLf.mjs";
import { aj as Phone, a8 as Mail, a4 as LoaderCircle, aF as UserRound, a9 as MapPin, h as Briefcase, _ as IndianRupee, j as Building2, M as FileCheckCorner, as as ShieldCheck, B as BadgeCheck, aI as WalletCards, N as FilePen, A as Activity, aE as UserPlus, ax as StickyNote, l as CalendarDays } from "../_libs/lucide-react.mjs";
const ICONS = {
  note: StickyNote,
  created: UserPlus,
  updated: FilePen,
  lead_converted: Activity,
  loan_created: WalletCards,
  loan_stage: FilePen,
  sanctioned: BadgeCheck,
  disbursed: WalletCards,
  approved: BadgeCheck,
  rejected: ShieldCheck
};
const DOC_LIST = [
  "PAN Card",
  "Aadhaar Card",
  "Income Proof / Salary Slips",
  "Bank Statement (6 months)",
  "Photograph",
  "Address Proof",
  "ITR / Form 16",
  "Business Proof",
  "Property Documents"
];
const inr = (v) => v == null ? "—" : `₹${Number(v).toLocaleString("en-IN")}`;
function CustomerProfileDialog({
  customerId,
  leadId,
  open,
  onOpenChange
}) {
  const [loading, setLoading] = reactExports.useState(false);
  const [customer, setCustomer] = reactExports.useState(null);
  const [loans, setLoans] = reactExports.useState([]);
  const [activities, setActivities] = reactExports.useState([]);
  const [noteText, setNoteText] = reactExports.useState("");
  const [saving, setSaving] = reactExports.useState(false);
  const load = reactExports.useCallback(async () => {
    if (!open) return;
    setLoading(true);
    let cust = null;
    if (customerId) {
      const { data } = await supabase.from("customers").select("*").eq("id", customerId).maybeSingle();
      cust = data ?? null;
    } else if (leadId) {
      const { data } = await supabase.from("customers").select("*").eq("lead_id", leadId).maybeSingle();
      cust = data ?? null;
    }
    setCustomer(cust);
    if (cust?.id) {
      const [{ data: lc }, { data: act }] = await Promise.all([
        supabase.from("loan_cases").select("*").eq("customer_id", cust.id).order("created_at", { ascending: false }),
        supabase.from("activities").select("id, activity_type, notes, created_at").or(`customer_id.eq.${cust.id}${cust.lead_id ? `,lead_id.eq.${cust.lead_id}` : ""}`).order("created_at", { ascending: false }).limit(50)
      ]);
      setLoans(lc ?? []);
      setActivities(act ?? []);
    } else if (leadId) {
      const { data: act } = await supabase.from("activities").select("id, activity_type, notes, created_at").eq("lead_id", leadId).order("created_at", { ascending: false }).limit(50);
      setActivities(act ?? []);
      setLoans([]);
    }
    setLoading(false);
  }, [customerId, leadId, open]);
  reactExports.useEffect(() => {
    load();
  }, [load]);
  reactExports.useEffect(() => {
    if (!open) return;
    const ch = supabase.channel(`profile-${customerId ?? leadId ?? "x"}`).on("postgres_changes", { event: "*", schema: "public", table: "activities" }, () => load()).on("postgres_changes", { event: "*", schema: "public", table: "loan_cases" }, () => load()).on("postgres_changes", { event: "*", schema: "public", table: "customers" }, () => load()).subscribe();
    return () => {
      ch.unsubscribe();
    };
  }, [open, customerId, leadId, load]);
  const addNote = async () => {
    if (!noteText.trim() || !customer) return;
    setSaving(true);
    const { error } = await supabase.from("activities").insert({
      customer_id: customer.id,
      lead_id: customer.lead_id,
      activity_type: "note",
      notes: noteText.trim()
    });
    setSaving(false);
    if (error) return toast.error(error.message);
    setNoteText("");
    toast.success("Note added");
    load();
  };
  const latestLoan = loans[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-3xl max-h-[92vh] overflow-hidden bg-white p-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { className: "bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-500 px-6 py-4 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-base font-bold", children: (customer?.customer_name ?? "?").slice(0, 2).toUpperCase() }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-lg font-semibold text-white", children: customer?.customer_name ?? (leadId ? "Lead Profile" : "Customer") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-0.5 flex flex-wrap gap-2 text-[11px] text-white/85", children: [
          customer?.mobile && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3" }),
            customer.mobile
          ] }),
          customer?.email && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3 w-3" }),
            customer.email
          ] }),
          customer?.stage && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "border-white/30 bg-white/20 text-white", children: customer.stage })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-[72vh] overflow-y-auto p-6", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-40 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin text-sky-500" }) }) : !customer && !leadId ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-10 text-center text-sm text-slate-500", children: "No customer record found." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "overview", className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "bg-sky-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "overview", children: "Overview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "loan", children: "Loan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "docs", children: "Documents" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "activity", children: "Activity" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "overview", className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Contact", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { icon: UserRound, label: "Full Name", value: customer?.customer_name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { icon: Phone, label: "Mobile", value: customer?.mobile }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { icon: Mail, label: "Email", value: customer?.email }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { label: "PAN", value: customer?.pan }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { label: "Aadhaar", value: customer?.aadhaar }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { icon: MapPin, label: "Address", value: customer?.address })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Profile", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { icon: Briefcase, label: "Occupation", value: customer?.occupation }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { icon: IndianRupee, label: "Monthly Income", value: inr(customer?.income) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { label: "CIBIL Score", value: customer?.cibil_score ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { icon: Building2, label: "Preferred Bank", value: customer?.bank_name })
        ] }) }),
        customer?.note && /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Notes", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "rounded-lg bg-amber-50 p-3 text-sm text-amber-900", children: customer.note }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "loan", className: "space-y-3", children: [
        !latestLoan ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-dashed border-slate-200 p-6 text-center text-sm text-slate-500", children: "No loan case yet. Approve a lead to create one." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: `${latestLoan.loan_type ?? "Loan"} · ${latestLoan.stage ?? "—"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { label: "Loan Type", value: latestLoan.loan_type }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { icon: Building2, label: "Lender / Bank", value: latestLoan.lender_name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { icon: IndianRupee, label: "Requested", value: inr(latestLoan.requested_amount) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { icon: IndianRupee, label: "Sanctioned", value: inr(latestLoan.sanction_amount) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { icon: IndianRupee, label: "Disbursed", value: inr(latestLoan.disbursement_amount) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { label: "Tenure", value: latestLoan.tenure_months ? `${latestLoan.tenure_months} months` : "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { label: "Interest Rate", value: latestLoan.interest_rate ? `${latestLoan.interest_rate}%` : "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Detail, { label: "Stage", value: latestLoan.stage })
          ] }),
          latestLoan.notes && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 rounded-lg bg-slate-50 p-3 text-sm text-slate-700", children: latestLoan.notes })
        ] }),
        loans.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-500", children: [
          "+ ",
          loans.length - 1,
          " earlier case(s)"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "docs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Documents Checklist", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-2 sm:grid-cols-2", children: DOC_LIST.map((d) => {
        const ok = latestLoan?.documents_checklist?.[d];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn(
          "flex items-center gap-2 rounded-lg border px-3 py-2 text-sm",
          ok ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-slate-200 bg-slate-50 text-slate-500"
        ), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileCheckCorner, { className: cn("h-4 w-4", ok ? "text-emerald-600" : "text-slate-400") }),
          d
        ] }, d);
      }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "activity", className: "space-y-3", children: [
        customer && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              rows: 2,
              placeholder: "Add a note…",
              value: noteText,
              onChange: (e) => setNoteText(e.target.value),
              className: "flex-1"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: addNote, disabled: saving || !noteText.trim(), className: "self-end", children: [
            saving && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-1 h-3 w-3 animate-spin" }),
            "Save"
          ] })
        ] }),
        activities.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-6 text-center text-xs text-slate-400", children: "No activity yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "relative ml-3 space-y-3 border-l border-sky-100 pl-4", children: activities.map((a) => {
          const Icon = ICONS[a.activity_type] ?? Activity;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[1.4rem] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-sky-100 text-sky-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-2.5 w-2.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-slate-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "capitalize text-[10px]", children: a.activity_type.replaceAll("_", " ") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-3 w-3" }),
                new Date(a.created_at).toLocaleString("en-IN")
              ] })
            ] }),
            a.notes && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 whitespace-pre-wrap text-sm text-slate-800", children: a.notes })
          ] }, a.id);
        }) })
      ] })
    ] }) })
  ] }) });
}
function Section({ title, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-sky-100 bg-white p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 text-xs font-semibold uppercase tracking-wider text-sky-700", children: title }),
    children
  ] });
}
function Grid({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2", children });
}
function Detail({
  icon: Icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
    Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "mt-0.5 h-3.5 w-3.5 text-sky-500" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-medium uppercase tracking-wide text-slate-500", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-slate-900 break-words", children: value || "—" })
    ] })
  ] });
}
export {
  CustomerProfileDialog as C
};
