import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { s as supabase } from "./router-Caaku3dA.mjs";
import { C as Card } from "./card-RGlIzTYo.mjs";
import { B as Button } from "./button-TjZkfKyC.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { L as Label } from "./label-JU3yqRBo.mjs";
import { S as Switch } from "./switch-CQ4rbtn8.mjs";
import { T as Textarea } from "./textarea-DtF-dDz-.mjs";
import { D as Dialog, a as DialogContent, d as DialogHeader, e as DialogTitle, c as DialogFooter } from "./dialog-RBdmK4nU.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { j as Building2, I as Download, ak as Plus, ap as Search, ai as Pencil, az as Trash2 } from "../_libs/lucide-react.mjs";
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
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-switch.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
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
const WEBSITE_BANKS = [{
  name: "Bank of Baroda",
  domain: "bankofbaroda.in",
  category: "PSU Bank"
}, {
  name: "State Bank of India",
  domain: "onlinesbi.sbi",
  category: "PSU Bank"
}, {
  name: "Bank of India",
  domain: "bankofindia.co.in",
  category: "PSU Bank"
}, {
  name: "Punjab National Bank",
  domain: "pnbindia.in",
  category: "PSU Bank"
}, {
  name: "Central Bank of India",
  domain: "centralbankofindia.co.in",
  category: "PSU Bank"
}, {
  name: "HDFC Bank",
  domain: "hdfcbank.com",
  category: "Private Bank"
}, {
  name: "ICICI Bank",
  domain: "icicibank.com",
  category: "Private Bank"
}, {
  name: "Axis Bank",
  domain: "axisbank.com",
  category: "Private Bank"
}, {
  name: "Kotak Mahindra Bank",
  domain: "kotak.com",
  category: "Private Bank"
}, {
  name: "IndusInd Bank",
  domain: "indusind.com",
  category: "Private Bank"
}, {
  name: "RBL Bank",
  domain: "rblbank.com",
  category: "Private Bank"
}, {
  name: "Yes Bank",
  domain: "yesbank.in",
  category: "Private Bank"
}, {
  name: "Bandhan Bank",
  domain: "bandhanbank.com",
  category: "Private Bank"
}, {
  name: "IDFC First Bank",
  domain: "idfcfirstbank.com",
  category: "Private Bank"
}, {
  name: "Saraswat Bank",
  domain: "saraswatbank.com",
  category: "Co-op Bank"
}, {
  name: "Aditya Birla Capital",
  domain: "adityabirlacapital.com",
  category: "NBFC"
}, {
  name: "PNB Housing Finance",
  domain: "pnbhousing.com",
  category: "HFC"
}, {
  name: "Tata Capital",
  domain: "tatacapital.com",
  category: "NBFC"
}, {
  name: "Sundaram Housing Finance",
  domain: "sundaramhome.in",
  category: "HFC"
}, {
  name: "SMFG India Credit",
  domain: "smfgindiacredit.com",
  category: "NBFC"
}, {
  name: "Bajaj Finserv",
  domain: "bajajfinserv.in",
  category: "NBFC"
}, {
  name: "Jio Finance",
  domain: "jiofinance.com",
  category: "NBFC"
}, {
  name: "L&T Finance",
  domain: "ltfs.com",
  category: "NBFC"
}, {
  name: "Cholamandalam Finance",
  domain: "cholamandalam.com",
  category: "NBFC"
}, {
  name: "Mahindra Finance",
  domain: "mahindrafinance.com",
  category: "NBFC"
}];
const EMPTY = {
  name: "",
  domain: "",
  logo_url: "",
  category: "Bank",
  is_active: true,
  position: 0,
  notes: ""
};
function BanksPage() {
  const [rows, setRows] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [q, setQ] = reactExports.useState("");
  const [open, setOpen] = reactExports.useState(false);
  const [editing, setEditing] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState(EMPTY);
  const importWebsiteBanks = async () => {
    if (!confirm(`Import ${WEBSITE_BANKS.length} banks from the website list? Existing banks with the same name will be skipped.`)) return;
    const existing = new Set(rows.map((r) => r.name.trim().toLowerCase()));
    const toInsert = WEBSITE_BANKS.filter((b) => !existing.has(b.name.toLowerCase())).map((b, i) => ({
      name: b.name,
      domain: b.domain,
      logo_url: b.logo ?? `https://logo.clearbit.com/${b.domain}`,
      category: b.category,
      is_active: true,
      position: rows.length + i,
      notes: null
    }));
    if (toInsert.length === 0) {
      toast.info("All website banks are already imported");
      return;
    }
    const {
      error
    } = await supabase.from("banks").insert(toInsert);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success(`Imported ${toInsert.length} banks`);
    load();
  };
  const load = async () => {
    setLoading(true);
    const {
      data,
      error
    } = await supabase.from("banks").select("*").order("position", {
      ascending: true
    }).order("name", {
      ascending: true
    });
    if (error) toast.error(error.message);
    setRows(data ?? []);
    setLoading(false);
  };
  reactExports.useEffect(() => {
    load();
  }, []);
  const openNew = () => {
    setEditing(null);
    setForm(EMPTY);
    setOpen(true);
  };
  const openEdit = (b) => {
    setEditing(b);
    setForm({
      name: b.name,
      domain: b.domain ?? "",
      logo_url: b.logo_url ?? "",
      category: b.category ?? "Bank",
      is_active: b.is_active,
      position: b.position,
      notes: b.notes ?? ""
    });
    setOpen(true);
  };
  const save = async () => {
    if (!form.name.trim()) {
      toast.error("Bank name is required");
      return;
    }
    const payload = {
      ...form,
      name: form.name.trim()
    };
    const {
      error
    } = editing ? await supabase.from("banks").update(payload).eq("id", editing.id) : await supabase.from("banks").insert(payload);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success(editing ? "Bank updated" : "Bank added");
    setOpen(false);
    load();
  };
  const remove = async (b) => {
    if (!confirm(`Delete ${b.name}?`)) return;
    const {
      error
    } = await supabase.from("banks").delete().eq("id", b.id);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Deleted");
    load();
  };
  const toggleActive = async (b) => {
    const {
      error
    } = await supabase.from("banks").update({
      is_active: !b.is_active
    }).eq("id", b.id);
    if (error) toast.error(error.message);
    else load();
  };
  const filtered = rows.filter((r) => [r.name, r.domain, r.category].filter(Boolean).join(" ").toLowerCase().includes(q.toLowerCase()));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "flex items-center gap-2 text-2xl font-bold text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-6 w-6 text-sky-600" }),
          " Partner Banks"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Manage banks & NBFCs shown across CRM lead forms and the public website." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: importWebsiteBanks, variant: "outline", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-1.5 h-4 w-4" }),
          " Import Website List"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: openNew, className: "bg-sky-600 hover:bg-sky-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1.5 h-4 w-4" }),
          " Add Bank"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-4 max-w-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search banks…", className: "pl-9" })
      ] }),
      loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-12 text-center text-sm text-muted-foreground", children: "Loading…" }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-12 text-center text-sm text-muted-foreground", children: [
        "No banks yet. Click ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Add Bank" }),
        " to create one."
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: filtered.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group rounded-xl border bg-white p-4 shadow-sm transition hover:shadow-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-50 ring-1 ring-slate-200", children: b.logo_url ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: b.logo_url, alt: b.name, className: "h-10 w-10 object-contain", onError: (e) => {
            e.currentTarget.style.display = "none";
          } }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-5 w-5 text-slate-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-sm font-semibold text-slate-900", children: b.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-xs text-slate-500", children: b.domain || "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 inline-block rounded-full bg-sky-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-sky-700", children: b.category || "Bank" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between border-t pt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: b.is_active, onCheckedChange: () => toggleActive(b) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: b.is_active ? "text-emerald-600" : "text-slate-400", children: b.is_active ? "Active" : "Hidden" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", onClick: () => openEdit(b), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", onClick: () => remove(b), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4 text-red-500" }) })
          ] })
        ] })
      ] }, b.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: setOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: editing ? "Edit Bank" : "Add Bank" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Bank Name *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.name, onChange: (e) => setForm({
            ...form,
            name: e.target.value
          }), placeholder: "e.g. HDFC Bank" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Domain" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.domain ?? "", onChange: (e) => setForm({
              ...form,
              domain: e.target.value
            }), placeholder: "hdfcbank.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Category" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.category ?? "", onChange: (e) => setForm({
              ...form,
              category: e.target.value
            }), placeholder: "Bank / NBFC / HFC" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Logo URL" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: form.logo_url ?? "", onChange: (e) => setForm({
            ...form,
            logo_url: e.target.value
          }), placeholder: "https://… (leave blank to auto-fetch from domain)" }),
          form.logo_url ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: form.logo_url, alt: "preview", className: "mt-2 h-12 w-12 rounded border object-contain" }) : null
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Display Order" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: form.position, onChange: (e) => setForm({
              ...form,
              position: Number(e.target.value) || 0
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: form.is_active, onCheckedChange: (v) => setForm({
              ...form,
              is_active: v
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Active" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Notes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 2, value: form.notes ?? "", onChange: (e) => setForm({
            ...form,
            notes: e.target.value
          }), placeholder: "Internal notes (commission, contact person, etc.)" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setOpen(false), children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: save, className: "bg-sky-600 hover:bg-sky-700", children: editing ? "Save Changes" : "Add Bank" })
      ] })
    ] }) })
  ] });
}
export {
  BanksPage as component
};
