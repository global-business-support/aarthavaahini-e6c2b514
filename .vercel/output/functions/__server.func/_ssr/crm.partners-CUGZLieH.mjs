import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as Card } from "./card-RGlIzTYo.mjs";
import { B as Badge } from "./badge-DyfXZgLs.mjs";
import { B as Button } from "./button-TjZkfKyC.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { T as Table, d as TableHeader, e as TableRow, c as TableHead, a as TableBody, b as TableCell } from "./table-DhIrzwGX.mjs";
import { D as Dialog, a as DialogContent, d as DialogHeader, e as DialogTitle } from "./dialog-RBdmK4nU.mjs";
import { s as supabase } from "./router-DSDPkTTS.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { V as Handshake, ap as Search, a4 as LoaderCircle, aj as Phone, a8 as Mail, a9 as MapPin, K as Eye, y as CircleCheck, E as CircleX } from "../_libs/lucide-react.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
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
function PartnersPage() {
  const [rows, setRows] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [q, setQ] = reactExports.useState("");
  const [status, setStatus] = reactExports.useState("all");
  const [view, setView] = reactExports.useState(null);
  const load = async () => {
    setLoading(true);
    const {
      data
    } = await supabase.from("leads").select("id, full_name, phone, email, city, product_name, status, lead_source, message, created_at").eq("product_type", "partner").order("created_at", {
      ascending: false
    });
    setRows(data ?? []);
    setLoading(false);
  };
  reactExports.useEffect(() => {
    load();
    const ch = supabase.channel("partner-leads").on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "leads"
    }, () => load()).subscribe();
    return () => {
      supabase.removeChannel(ch);
    };
  }, []);
  const updateStatus = async (id, newStatus) => {
    const {
      error
    } = await supabase.from("leads").update({
      status: newStatus
    }).eq("id", id);
    if (error) return toast.error(error.message);
    toast.success(`Marked as ${newStatus}`);
    load();
  };
  const filtered = rows.filter((r) => {
    if (status !== "all" && r.status !== status) return false;
    if (!q) return true;
    const s = q.toLowerCase();
    return r.full_name?.toLowerCase().includes(s) || r.phone?.includes(q) || r.email?.toLowerCase().includes(s) || r.product_name?.toLowerCase().includes(s);
  });
  const counts = {
    total: rows.length,
    pending: rows.filter((r) => r.status === "New").length,
    approved: rows.filter((r) => r.status === "Approved").length
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500 p-5 text-white shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-wrap items-end justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Handshake, { className: "h-3 w-3" }),
            " Channel Partners"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 text-2xl font-bold md:text-3xl", children: "Partner Applications" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-white/80", children: [
            counts.total,
            " total · ",
            counts.pending,
            " pending review · ",
            counts.approved,
            " approved"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/partner-signup", target: "_blank", rel: "noreferrer", className: "rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-sky-700 shadow-md hover:bg-white", children: "View public signup →" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-w-[220px] flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Search name, phone, email, category…", value: q, onChange: (e) => setQ(e.target.value), className: "pl-9" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "h-9 rounded-md border border-input bg-white px-3 text-sm", value: status, onChange: (e) => setStatus(e.target.value), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "New", children: "New / Pending" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Contacted", children: "Contacted" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Approved", children: "Approved" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Rejected", children: "Rejected" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "overflow-hidden", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-40 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin text-muted-foreground" }) }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10 text-center text-sm text-slate-500", children: [
      "No partner applications yet. Applications from",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/partner-signup", className: "font-medium text-sky-600 underline", children: "/partner-signup" }),
      " ",
      "will appear here."
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Partner" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Category" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "City" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Applied" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: filtered.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: r.full_name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5 text-xs", children: [
          r.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3 text-slate-400" }),
            r.phone
          ] }),
          r.email && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-slate-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3 w-3 text-slate-400" }),
            r.email
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: r.product_name ?? "—" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: r.city ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3 text-slate-400" }),
          r.city
        ] }) : "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: r.status === "Approved" ? "bg-emerald-100 text-emerald-700" : r.status === "Rejected" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700", children: r.status }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-slate-500", children: new Date(r.created_at).toLocaleDateString() }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", onClick: () => setView(r), title: "View details", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "text-emerald-600 hover:bg-emerald-50", onClick: () => updateStatus(r.id, "Approved"), title: "Approve", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "text-red-600 hover:bg-red-50", onClick: () => updateStatus(r.id, "Rejected"), title: "Reject", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-4 w-4" }) })
        ] }) })
      ] }, r.id)) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!view, onOpenChange: (o) => !o && setView(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg bg-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: view?.full_name }) }),
      view && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Phone", value: view.phone }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Email", value: view.email }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "City", value: view.city }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Category", value: view.product_name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Source", value: view.lead_source }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Status", value: view.status }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase text-slate-500", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "mt-1 whitespace-pre-wrap rounded-lg bg-slate-50 p-3 text-xs text-slate-700", children: view.message ?? "—" })
        ] })
      ] })
    ] }) })
  ] });
}
function Row({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b border-slate-100 pb-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase text-slate-500", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-800", children: value ?? "—" })
  ] });
}
export {
  PartnersPage as component
};
