import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as Card } from "./card-RGlIzTYo.mjs";
import { B as Badge } from "./badge-DyfXZgLs.mjs";
import { B as Button } from "./button-TjZkfKyC.mjs";
import { T as Table, d as TableHeader, e as TableRow, c as TableHead, a as TableBody, b as TableCell } from "./table-DhIrzwGX.mjs";
import { s as supabase } from "./router-DSDPkTTS.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { E as CircleX, a4 as LoaderCircle, an as RotateCcw } from "../_libs/lucide-react.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
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
function RejectedPage() {
  const [rows, setRows] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const load = async () => {
    setLoading(true);
    const {
      data
    } = await supabase.from("leads").select("id, full_name, phone, product_type, loan_type, loan_amount, rejection_reason, created_at").eq("status", "Rejected").order("created_at", {
      ascending: false
    });
    setRows(data ?? []);
    setLoading(false);
  };
  reactExports.useEffect(() => {
    load();
  }, []);
  const reopen = async (id) => {
    const {
      error
    } = await supabase.from("leads").update({
      status: "New",
      rejection_reason: null
    }).eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Lead re-opened → New");
    load();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-xl bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 px-4 py-4 text-white shadow-md shadow-rose-500/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/15 blur-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-bold", children: "Rejected Leads" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/80", children: "All rejected leads with reason. Re-open if eligibility changes." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "overflow-hidden", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-40 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin text-muted-foreground" }) }) : rows.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-10 text-center text-sm text-slate-500", children: "No rejected leads." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Product" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Amount" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Rejection Reason" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Rejected On" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, {})
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: rows.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "hover:bg-rose-50/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: r.full_name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: r.phone }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "capitalize", children: r.loan_type ?? r.product_type?.replace(/_/g, " ") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: r.loan_amount ? `₹${Number(r.loan_amount).toLocaleString("en-IN")}` : "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "max-w-xs text-sm text-rose-700", children: r.rejection_reason ?? "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm", children: new Date(r.created_at).toLocaleDateString("en-IN") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", onClick: () => reopen(r.id), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "mr-1 h-3.5 w-3.5" }),
          " Re-open"
        ] }) })
      ] }, r.id)) })
    ] }) })
  ] });
}
export {
  RejectedPage as component
};
