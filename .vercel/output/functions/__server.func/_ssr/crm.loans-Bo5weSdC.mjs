import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { s as supabase, C as Card, I as Input } from "./router-Yefiub0V.mjs";
import { B as Badge } from "./badge-DOEol5N2.mjs";
import { B as Button } from "./button-l9t-pzF9.mjs";
import { L as Label } from "./label-Cv4sKckL.mjs";
import { T as Textarea } from "./textarea-CeK7sWgP.mjs";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-BI9VIL5q.mjs";
import { D as Dialog, b as DialogContent, c as DialogHeader, d as DialogTitle } from "./dialog-CoSbALlQ.mjs";
import { C as CustomerProfileDialog } from "./CustomerProfileDialog-DJG9WSZq.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { r as Banknote, L as LoaderCircle, am as FileCheckCorner, aF as Pencil } from "../_libs/lucide-react.mjs";
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
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-switch.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
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
import "./tabs-CPC2IVpg.mjs";
import "../_libs/radix-ui__react-tabs.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-use-is-hydrated+[...].mjs";
const LOAN_STAGES = ["New", "Login", "Closed", "Approved", "Rejected", "Disbursement"];
const DOC_LIST = ["PAN Card", "Aadhaar Card", "Income Proof / Salary Slips", "Bank Statement (6 months)", "Photograph", "Address Proof", "ITR / Form 16", "Business Proof", "Property Documents"];
const LOAN_TYPES = ["Home Loan", "Personal Loan", "Business Loan", "Car / Vehicle Loan", "Education Loan", "Loan Against Property", "Gold Loan", "Working Capital Loan", "Machinery & Equipment Loan", "Credit Card"];
function LoansPage() {
  const [rows, setRows] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [editing, setEditing] = reactExports.useState(null);
  const [profileId, setProfileId] = reactExports.useState(null);
  const load = async () => {
    setLoading(true);
    const {
      data,
      error
    } = await supabase.from("loan_cases").select("*, customer:customers(customer_name, mobile)").order("created_at", {
      ascending: false
    });
    if (error) {
      toast.error(error.message);
      setRows([]);
      setLoading(false);
      return;
    }
    const activeLoanCases = (data ?? []).filter((row) => row.stage !== "Rejected");
    setRows(activeLoanCases);
    setLoading(false);
  };
  reactExports.useEffect(() => {
    load();
    const channel = supabase.channel("crm-loans-sync").on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "loan_cases"
    }, () => load()).on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "customers"
    }, () => load()).on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "leads"
    }, () => load()).subscribe();
    return () => {
      channel.unsubscribe();
    };
  }, []);
  const stats = reactExports.useMemo(() => {
    const total = rows.length;
    const sanctioned = rows.reduce((amount, row) => {
      return amount + (Number(row.sanction_amount) || 0);
    }, 0);
    const disbursed = rows.reduce((amount, row) => {
      return amount + (Number(row.disbursement_amount) || 0);
    }, 0);
    return {
      total,
      sanctioned,
      disbursed
    };
  }, [rows]);
  const handleSaved = () => {
    setEditing(null);
    window.setTimeout(() => {
      load();
    }, 120);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-4 py-4 text-white shadow-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/15 blur-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-wrap items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-bold", children: "Loan Cases" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-white/80", children: [
              "Workflow: ",
              LOAN_STAGES.join(" → ")
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70", children: "Cases" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold", children: stats.total })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70", children: "Sanctioned" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lg font-bold", children: [
              "₹",
              (stats.sanctioned / 1e5).toFixed(1),
              "L"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70", children: "Disbursed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lg font-bold", children: [
              "₹",
              (stats.disbursed / 1e5).toFixed(1),
              "L"
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "overflow-hidden", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-40 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin text-muted-foreground" }) }) : rows.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-10 text-center text-sm text-slate-500", children: "No active loan cases yet. Rejected cases are moved to Rejected Leads." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Customer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Mobile" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Loan Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Requested" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Sanctioned" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Disbursed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Tenure" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "ROI" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Lender" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Stage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Docs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, {})
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: rows.map((row) => {
        const docCount = row.documents_checklist ? Object.values(row.documents_checklist).filter(Boolean).length : 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "hover:bg-emerald-50/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: row.customer_id ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setProfileId(row.customer_id), className: "text-sky-700 hover:underline", children: row.customer?.customer_name ?? "—" }) : row.customer?.customer_name ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: row.customer?.mobile ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: row.loan_type }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: row.requested_amount ? `₹${Number(row.requested_amount).toLocaleString("en-IN")}` : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: row.sanction_amount ? `₹${Number(row.sanction_amount).toLocaleString("en-IN")}` : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: row.disbursement_amount ? `₹${Number(row.disbursement_amount).toLocaleString("en-IN")}` : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: row.tenure_months ? `${row.tenure_months}m` : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: row.interest_rate ? `${row.interest_rate}%` : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: row.lender_name ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: row.stage }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileCheckCorner, { className: "h-3 w-3" }),
            docCount,
            "/",
            DOC_LIST.length
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => setEditing(row), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3.5 w-3.5" }) }) })
        ] }, row.id);
      }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LoanEditDialog, { row: editing, onClose: () => setEditing(null), onSaved: handleSaved }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CustomerProfileDialog, { open: !!profileId, onOpenChange: (value) => !value && setProfileId(null), customerId: profileId })
  ] });
}
function LoanEditDialog({
  row,
  onClose,
  onSaved
}) {
  const [form, setForm] = reactExports.useState({
    loan_type: "",
    lender_name: "",
    stage: "New",
    requested_amount: "",
    sanction_amount: "",
    disbursement_amount: "",
    tenure_months: "",
    interest_rate: "",
    notes: "",
    docs: {}
  });
  const [saving, setSaving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!row) return;
    setForm({
      loan_type: row.loan_type ?? "",
      lender_name: row.lender_name ?? "",
      stage: LOAN_STAGES.includes(row.stage) ? row.stage : "New",
      requested_amount: row.requested_amount?.toString() ?? "",
      sanction_amount: row.sanction_amount?.toString() ?? "",
      disbursement_amount: row.disbursement_amount?.toString() ?? "",
      tenure_months: row.tenure_months?.toString() ?? "",
      interest_rate: row.interest_rate?.toString() ?? "",
      notes: row.notes ?? "",
      docs: row.documents_checklist ?? {}
    });
  }, [row]);
  if (!row) return null;
  const submit = async (event) => {
    event.preventDefault();
    setSaving(true);
    const nextStage = form.stage;
    const {
      error: loanError
    } = await supabase.from("loan_cases").update({
      loan_type: form.loan_type,
      lender_name: form.lender_name || null,
      stage: nextStage,
      requested_amount: form.requested_amount ? Number(form.requested_amount) : null,
      sanction_amount: form.sanction_amount ? Number(form.sanction_amount) : null,
      disbursement_amount: form.disbursement_amount ? Number(form.disbursement_amount) : null,
      loan_amount: form.sanction_amount ? Number(form.sanction_amount) : form.requested_amount ? Number(form.requested_amount) : null,
      tenure_months: form.tenure_months ? Number(form.tenure_months) : null,
      interest_rate: form.interest_rate ? Number(form.interest_rate) : null,
      notes: form.notes || null,
      documents_checklist: form.docs
    }).eq("id", row.id);
    if (loanError) {
      setSaving(false);
      toast.error(loanError.message);
      return;
    }
    if (nextStage === "Rejected" && row.lead_id) {
      const {
        error: leadError
      } = await supabase.from("leads").update({
        status: "Rejected"
      }).eq("id", row.lead_id);
      if (leadError) {
        setSaving(false);
        toast.error(leadError.message);
        return;
      }
    }
    setSaving(false);
    if (nextStage === "Rejected") {
      toast.success("Loan case rejected and moved to Rejected Leads");
    } else {
      toast.success("Loan case updated");
    }
    onSaved();
  };
  const inputCls = "h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!row, onOpenChange: (value) => !value && !saving && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-h-[90vh] max-w-2xl overflow-y-auto bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
      "Edit Loan Case — ",
      row.customer?.customer_name ?? "Customer"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-3 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Loan Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: `${inputCls} mt-1`, value: form.loan_type, onChange: (event) => setForm({
            ...form,
            loan_type: event.target.value
          }), children: LOAN_TYPES.map((type) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: type, children: type }, type)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Stage" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: `${inputCls} mt-1`, value: form.stage, onChange: (event) => setForm({
            ...form,
            stage: event.target.value
          }), children: LOAN_STAGES.map((stage) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: stage, children: stage }, stage)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Lender / Bank" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "mt-1", value: form.lender_name, onChange: (event) => setForm({
            ...form,
            lender_name: event.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Requested Amount (₹)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", className: "mt-1", value: form.requested_amount, onChange: (event) => setForm({
            ...form,
            requested_amount: event.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Sanctioned Amount (₹)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", className: "mt-1", value: form.sanction_amount, onChange: (event) => setForm({
            ...form,
            sanction_amount: event.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Disbursed Amount (₹)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", className: "mt-1", value: form.disbursement_amount, onChange: (event) => setForm({
            ...form,
            disbursement_amount: event.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Tenure (months)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", className: "mt-1", value: form.tenure_months, onChange: (event) => setForm({
            ...form,
            tenure_months: event.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Interest Rate (%)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", step: "0.01", className: "mt-1", value: form.interest_rate, onChange: (event) => setForm({
            ...form,
            interest_rate: event.target.value
          }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Notes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 2, className: "mt-1", value: form.notes, onChange: (event) => setForm({
          ...form,
          notes: event.target.value
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "mb-2 block", children: "Documents Received" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3 md:grid-cols-2", children: DOC_LIST.map((documentName) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "h-4 w-4 accent-emerald-600", checked: !!form.docs[documentName], onChange: (event) => setForm({
            ...form,
            docs: {
              ...form.docs,
              [documentName]: event.target.checked
            }
          }) }),
          documentName
        ] }, documentName)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", disabled: saving, onClick: onClose, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", disabled: saving, className: "bg-emerald-600 text-white hover:bg-emerald-700", children: [
          saving && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
          "Save Changes"
        ] })
      ] })
    ] })
  ] }) });
}
export {
  LoansPage as component
};
