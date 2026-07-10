import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { s as supabase, C as Card, I as Input, c as cn } from "./router-Yefiub0V.mjs";
import { B as Button } from "./button-l9t-pzF9.mjs";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-BI9VIL5q.mjs";
import { T as Textarea } from "./textarea-CeK7sWgP.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { C as CustomerProfileDialog } from "./CustomerProfileDialog-DJG9WSZq.mjs";
import { aj as UserRound, G as Search, L as LoaderCircle } from "../_libs/lucide-react.mjs";
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
import "./dialog-CoSbALlQ.mjs";
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
import "./badge-DOEol5N2.mjs";
import "./tabs-CPC2IVpg.mjs";
import "../_libs/radix-ui__react-tabs.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-use-is-hydrated+[...].mjs";
const CUSTOMER_STAGES = ["Pre-Login Follow-Up", "Logged In", "Sanctioned", "Disburement", "Closed", "Rejected"];
const STAGE_COLOR = {
  "Pre-Login Follow-Up": "border-sky-300 bg-sky-50 text-sky-700",
  "Logged In": "border-indigo-300 bg-indigo-50 text-indigo-700",
  Sanctioned: "border-violet-300 bg-violet-50 text-violet-700",
  Disburement: "border-emerald-300 bg-emerald-50 text-emerald-700",
  Closed: "border-slate-300 bg-slate-100 text-slate-700",
  Rejected: "border-rose-300 bg-rose-50 text-rose-700"
};
const DEFAULT_BANK_OPTIONS = ["Aditya Birla Finance", "Axis Bank", "Bajaj Finserv", "Bank of Baroda", "Canara Bank", "DCB Bank", "Federal Bank", "HDFC Bank", "ICICI Bank", "IDBI Bank", "IDFC First Bank", "IndusInd Bank", "Karnataka Bank", "Kotak Mahindra Bank", "L&T Finance", "Mahindra Finance", "Piramal Finance", "Punjab National Bank", "RBL Bank", "South Indian Bank", "State Bank of India", "Tata Capital", "Union Bank of India", "Yes Bank"];
const SORT_OPTIONS = [{
  value: "newest",
  label: "Newest First"
}, {
  value: "oldest",
  label: "Oldest First"
}, {
  value: "az",
  label: "Name A-Z"
}, {
  value: "za",
  label: "Name Z-A"
}, {
  value: "amount_high",
  label: "Loan Amount High-Low"
}, {
  value: "amount_low",
  label: "Loan Amount Low-High"
}];
function normaliseStage(stage) {
  if (!stage) return "Pre-Login Follow-Up";
  if (CUSTOMER_STAGES.includes(stage)) return stage;
  return "Pre-Login Follow-Up";
}
function cibilBadge(score) {
  if (score == null) return "bg-slate-100 text-slate-500 border-slate-200";
  if (score >= 750) return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (score >= 650) return "bg-amber-50 text-amber-700 border-amber-200";
  return "bg-rose-50 text-rose-700 border-rose-200";
}
function getStoredBanks() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem("crm_custom_bank_names");
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter(Boolean) : [];
  } catch {
    return [];
  }
}
function saveStoredBanks(banks) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem("crm_custom_bank_names", JSON.stringify(banks));
}
function CustomersPage() {
  const [rows, setRows] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [active, setActive] = reactExports.useState(null);
  const [q, setQ] = reactExports.useState("");
  const [stageFilter, setStageFilter] = reactExports.useState("all");
  const [bankFilter, setBankFilter] = reactExports.useState("all");
  const [sortBy, setSortBy] = reactExports.useState("az");
  const [customBanks, setCustomBanks] = reactExports.useState([]);
  const rowSelectClass = "h-9 w-[190px] rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100";
  const filterSelectClass = "h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100";
  const bankOptions = reactExports.useMemo(() => {
    return Array.from(/* @__PURE__ */ new Set([...DEFAULT_BANK_OPTIONS, ...customBanks])).sort((a, b) => a.localeCompare(b));
  }, [customBanks]);
  const load = async () => {
    setLoading(true);
    const {
      data,
      error
    } = await supabase.from("customers").select("*").order("created_at", {
      ascending: false
    }).limit(500);
    if (error) {
      toast.error(error.message);
      setLoading(false);
      return;
    }
    setRows(data ?? []);
    setLoading(false);
  };
  reactExports.useEffect(() => {
    setCustomBanks(getStoredBanks());
    (async () => {
      await load();
      if (typeof window !== "undefined") {
        const url = new URL(window.location.href);
        const initial = url.searchParams.get("q") ?? "";
        if (initial) setQ(initial);
      }
    })();
    const channel = supabase.channel("crm-customers-sync").on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "customers"
    }, () => load()).on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "leads"
    }, () => load()).on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "loan_cases"
    }, () => load()).subscribe();
    return () => {
      channel.unsubscribe();
    };
  }, []);
  const addNewBank = async () => {
    const bankName = window.prompt("Enter new bank / NBFC name");
    if (!bankName?.trim()) return;
    const cleanName = bankName.trim();
    const exists = bankOptions.some((bank) => bank.toLowerCase() === cleanName.toLowerCase());
    if (exists) {
      toast.error("Bank already exists");
      return;
    }
    const nextBanks = [...customBanks, cleanName].sort((a, b) => a.localeCompare(b));
    setCustomBanks(nextBanks);
    saveStoredBanks(nextBanks);
    toast.success(`Bank added: ${cleanName}`);
  };
  const filtered = reactExports.useMemo(() => {
    const term = q.trim().toLowerCase();
    let data = rows.filter((row) => {
      const matchesSearch = !term || (row.customer_name ?? "").toLowerCase().includes(term) || (row.mobile ?? "").toLowerCase().includes(term) || (row.email ?? "").toLowerCase().includes(term) || (row.pan ?? "").toLowerCase().includes(term) || (row.loan_type ?? "").toLowerCase().includes(term) || (row.bank_name ?? "").toLowerCase().includes(term);
      const matchesStage = stageFilter === "all" || normaliseStage(row.stage) === stageFilter;
      const matchesBank = bankFilter === "all" || bankFilter === "none" && !row.bank_name || row.bank_name === bankFilter;
      return matchesSearch && matchesStage && matchesBank;
    });
    data = [...data].sort((a, b) => {
      if (sortBy === "az") {
        return (a.customer_name ?? "").localeCompare(b.customer_name ?? "");
      }
      if (sortBy === "za") {
        return (b.customer_name ?? "").localeCompare(a.customer_name ?? "");
      }
      if (sortBy === "oldest") {
        return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      }
      if (sortBy === "amount_high") {
        return (Number(b.loan_amount) || 0) - (Number(a.loan_amount) || 0);
      }
      if (sortBy === "amount_low") {
        return (Number(a.loan_amount) || 0) - (Number(b.loan_amount) || 0);
      }
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });
    return data;
  }, [q, rows, stageFilter, bankFilter, sortBy]);
  const updateBank = async (row, value) => {
    if (value === "__add_new__") {
      await addNewBank();
      return;
    }
    const bankName = value === "none" ? null : value;
    const {
      error
    } = await supabase.from("customers").update({
      bank_name: bankName
    }).eq("id", row.id);
    if (error) {
      toast.error(error.message);
      return;
    }
    setRows((prev) => prev.map((item) => item.id === row.id ? {
      ...item,
      bank_name: bankName
    } : item));
    toast.success(bankName ? `Bank → ${bankName}` : "Bank cleared");
  };
  const updateStage = async (row, stage) => {
    const {
      error
    } = await supabase.from("customers").update({
      stage
    }).eq("id", row.id);
    if (error) {
      toast.error(error.message);
      return;
    }
    setRows((prev) => prev.map((item) => item.id === row.id ? {
      ...item,
      stage
    } : item));
    toast.success(`Stage → ${stage}`);
    if (stage === "Closed") {
      const {
        data: existing
      } = await supabase.from("loan_cases").select("id").eq("customer_id", row.id).maybeSingle();
      if (!existing) {
        const {
          error: loanError
        } = await supabase.from("loan_cases").insert({
          customer_id: row.id,
          loan_type: row.loan_type ?? row.loan_sub_type ?? "Loan",
          loan_amount: row.loan_amount,
          requested_amount: row.loan_amount,
          stage: "Completed"
        });
        if (loanError) toast.error(loanError.message);
        else toast.success("Closed → Loan case created");
      }
    }
  };
  const clearFilters = () => {
    setQ("");
    setStageFilter("all");
    setBankFilter("all");
    setSortBy("az");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-xl bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 px-4 py-3 text-white shadow-md shadow-sky-500/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/15 blur-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UserRound, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Customers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-white/80", children: [
            rows.length,
            " customers · Approved leads from Leads · close to push into Loans"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "space-y-3 p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: q, onChange: (event) => setQ(event.target.value), placeholder: "Search by name, mobile, email, PAN, loan type, bank...", className: "pl-9" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 md:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: stageFilter, onChange: (event) => setStageFilter(event.target.value), className: filterSelectClass, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All Stages" }),
          CUSTOMER_STAGES.map((stage) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: stage, children: stage }, stage))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: bankFilter, onChange: (event) => setBankFilter(event.target.value), className: filterSelectClass, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All Banks" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "none", children: "No Bank Selected" }),
          bankOptions.map((bank) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: bank, children: bank }, bank))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: sortBy, onChange: (event) => setSortBy(event.target.value), className: filterSelectClass, children: SORT_OPTIONS.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: option.value, children: [
          "Sort: ",
          option.label
        ] }, option.value)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: addNewBank, className: "flex-1 border-sky-200 text-sky-700 hover:bg-sky-50", children: "+ Add Bank" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", onClick: clearFilters, className: "border-slate-200", children: "Clear" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-500", children: [
        "Showing ",
        filtered.length,
        " of ",
        rows.length,
        " customers"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "overflow-hidden", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-40 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin text-muted-foreground" }) }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-10 text-center text-sm text-slate-500", children: rows.length === 0 ? "No customers yet — approve a lead first." : "No customers match your filters." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Mobile" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Loan Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Loan Amount" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "CIBIL" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Bank" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Stage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "min-w-[220px]", children: "Note" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: filtered.map((row) => {
        const stage = normaliseStage(row.stage);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "align-top hover:bg-sky-50/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "text-sky-700 hover:underline", onClick: () => setActive(row), children: row.customer_name }),
            row.email && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500", children: row.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: row.mobile ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-slate-800", children: row.loan_type ?? "—" }),
            row.loan_sub_type && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500", children: row.loan_sub_type })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: row.loan_amount ? `₹${Number(row.loan_amount).toLocaleString("en-IN")}` : "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold", cibilBadge(row.cibil_score)), children: row.cibil_score ?? "N/A" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: row.bank_name ?? "none", onChange: (event) => updateBank(row, event.target.value), className: rowSelectClass, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "none", children: "— None —" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "__add_new__", children: "+ Add New Bank" }),
            bankOptions.map((bank) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: bank, children: bank }, bank))
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: stage, onChange: (event) => updateStage(row, event.target.value), className: cn(rowSelectClass, "font-semibold", STAGE_COLOR[stage]), children: CUSTOMER_STAGES.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: item, children: item }, item)) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(NoteCell, { row, onSaved: (text) => setRows((prev) => prev.map((item) => item.id === row.id ? {
            ...item,
            note: text
          } : item)) }) })
        ] }, row.id);
      }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CustomerProfileDialog, { open: !!active, onOpenChange: (value) => !value && setActive(null), customerId: active?.id ?? null })
  ] });
}
function NoteCell({
  row,
  onSaved
}) {
  const [editing, setEditing] = reactExports.useState(false);
  const [text, setText] = reactExports.useState(row.note ?? "");
  const [saving, setSaving] = reactExports.useState(false);
  const save = async () => {
    setSaving(true);
    const trimmed = text.trim();
    const {
      error
    } = await supabase.from("customers").update({
      note: trimmed || null
    }).eq("id", row.id);
    setSaving(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    onSaved(trimmed);
    setEditing(false);
    toast.success("Note saved");
  };
  if (editing) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: text, onChange: (event) => setText(event.target.value), rows: 3, placeholder: "Quick note about this customer...", className: "border-amber-300 text-sm focus-visible:ring-amber-400", autoFocus: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "h-7 px-2 text-xs", onClick: () => {
          setText(row.note ?? "");
          setEditing(false);
        }, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", disabled: saving, onClick: save, className: "h-7 bg-amber-500 px-2 text-xs text-white hover:bg-amber-600", children: [
          saving && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-1 h-3 w-3 animate-spin" }),
          "Save"
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setEditing(true), className: cn("group block w-full rounded-md border px-2 py-1.5 text-left text-xs transition", row.note ? "border-amber-200 bg-amber-50/60 text-slate-800 hover:bg-amber-50" : "border-dashed border-slate-300 bg-white text-slate-400 hover:border-amber-300 hover:text-amber-700"), title: "Click to edit note", children: row.note ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-2 whitespace-pre-wrap", children: row.note }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+ Add note" }) });
}
export {
  CustomersPage as component
};
