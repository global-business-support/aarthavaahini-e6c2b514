import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as Card } from "./card-RGlIzTYo.mjs";
import { B as Button } from "./button-TjZkfKyC.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { L as Label } from "./label-JU3yqRBo.mjs";
import { S as Select, c as SelectTrigger, d as SelectValue, a as SelectContent, b as SelectItem } from "./select-DPaGlibP.mjs";
import { T as Table, d as TableHeader, e as TableRow, c as TableHead, a as TableBody, b as TableCell } from "./table-DhIrzwGX.mjs";
import { s as supabase } from "./router-BNZhdFpk.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { P as FileText, a4 as LoaderCircle, aC as Upload, I as Download, az as Trash2 } from "../_libs/lucide-react.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
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
const DOC_TYPES = ["PAN", "Aadhaar", "Bank Statement", "Salary Slip", "ITR", "Photo", "Property Papers", "Other"];
function DocumentsPage() {
  const [customers, setCustomers] = reactExports.useState([]);
  const [customerId, setCustomerId] = reactExports.useState("");
  const [docType, setDocType] = reactExports.useState("PAN");
  const [docs, setDocs] = reactExports.useState([]);
  const [uploading, setUploading] = reactExports.useState(false);
  const [file, setFile] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    (async () => {
      const {
        data
      } = await supabase.from("customers").select("id, customer_name, mobile").order("created_at", {
        ascending: false
      }).limit(500);
      setCustomers(data ?? []);
    })();
  }, []);
  const loadDocs = async (cid) => {
    if (!cid) return setDocs([]);
    setLoading(true);
    const {
      data
    } = await supabase.from("documents").select("id, document_type, file_url, uploaded_at, customer_id").eq("customer_id", cid).order("uploaded_at", {
      ascending: false
    });
    setDocs(data ?? []);
    setLoading(false);
  };
  reactExports.useEffect(() => {
    loadDocs(customerId);
  }, [customerId]);
  const upload = async () => {
    if (!customerId) return toast.error("Select a customer first");
    if (!file) return toast.error("Choose a file to upload");
    setUploading(true);
    const path = `${customerId}/${Date.now()}-${file.name.replace(/\s+/g, "_")}`;
    const {
      error: upErr
    } = await supabase.storage.from("customer-documents").upload(path, file);
    if (upErr) {
      setUploading(false);
      return toast.error(upErr.message);
    }
    const {
      error: insErr
    } = await supabase.from("documents").insert({
      customer_id: customerId,
      document_type: docType,
      file_url: path
    });
    setUploading(false);
    if (insErr) return toast.error(insErr.message);
    toast.success("Document uploaded");
    setFile(null);
    loadDocs(customerId);
  };
  const open = async (path) => {
    const {
      data,
      error
    } = await supabase.storage.from("customer-documents").createSignedUrl(path, 60 * 10);
    if (error || !data) return toast.error(error?.message ?? "Cannot open");
    window.open(data.signedUrl, "_blank");
  };
  const remove = async (d) => {
    if (!confirm("Delete this document?")) return;
    await supabase.storage.from("customer-documents").remove([d.file_url]);
    const {
      error
    } = await supabase.from("documents").delete().eq("id", d.id);
    if (error) return toast.error(error.message);
    toast.success("Deleted");
    loadDocs(customerId);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 px-4 py-3 text-white shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-5 w-5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Customer Documents" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-white/80", children: "Upload & manage KYC and supporting documents" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 md:grid-cols-[2fr_1fr_2fr_auto]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Customer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: customerId, onValueChange: setCustomerId, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select customer" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { className: "bg-white max-h-72", children: customers.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: c.id, children: [
            c.customer_name,
            " ",
            c.mobile ? `· ${c.mobile}` : ""
          ] }, c.id)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Document Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: docType, onValueChange: setDocType, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { className: "bg-white", children: DOC_TYPES.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: d, children: d }, d)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "File" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "file", onChange: (e) => setFile(e.target.files?.[0] ?? null), className: "bg-white" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: upload, disabled: uploading || !customerId || !file, className: "bg-gradient-to-r from-sky-600 to-blue-600 text-white", children: [
        uploading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "mr-2 h-4 w-4" }),
        "Upload"
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "overflow-hidden", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-40 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin text-muted-foreground" }) }) : !customerId ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-10 text-center text-sm text-slate-500", children: "Select a customer to view documents." }) : docs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-10 text-center text-sm text-slate-500", children: "No documents uploaded yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "File" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Uploaded" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: docs.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: d.document_type }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-slate-600", children: d.file_url.split("/").pop() }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-slate-500", children: new Date(d.uploaded_at).toLocaleString("en-IN") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => open(d.file_url), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3.5 w-3.5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "border-red-200 text-red-600 hover:bg-red-50", onClick: () => remove(d), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) })
        ] }) })
      ] }, d.id)) })
    ] }) })
  ] });
}
export {
  DocumentsPage as component
};
