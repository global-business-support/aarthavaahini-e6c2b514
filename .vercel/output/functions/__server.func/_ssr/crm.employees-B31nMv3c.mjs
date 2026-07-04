import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as Card } from "./card-RGlIzTYo.mjs";
import { B as Button } from "./button-TjZkfKyC.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { L as Label } from "./label-JU3yqRBo.mjs";
import { B as Badge } from "./badge-DyfXZgLs.mjs";
import { T as Textarea } from "./textarea-DtF-dDz-.mjs";
import { D as Dialog, f as DialogTrigger, a as DialogContent, d as DialogHeader, e as DialogTitle } from "./dialog-RBdmK4nU.mjs";
import { T as Table, d as TableHeader, e as TableRow, c as TableHead, a as TableBody, b as TableCell } from "./table-DhIrzwGX.mjs";
import { s as supabase } from "./router-DSDPkTTS.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { aE as UserPlus, ak as Plus, a4 as LoaderCircle, ai as Pencil, az as Trash2 } from "../_libs/lucide-react.mjs";
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
const ROLES = ["Sales Executive", "Operations", "Manager", "Tele-caller", "Field Agent", "Insurance Executive", "MF Executive", "Admin"];
const DEPTS = ["Sales", "Operations", "Insurance", "Mutual Funds", "Loans", "Admin"];
function EmployeesPage() {
  const [rows, setRows] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [open, setOpen] = reactExports.useState(false);
  const [editing, setEditing] = reactExports.useState(null);
  const load = async () => {
    setLoading(true);
    const {
      data,
      error
    } = await supabase.from("employees").select("*").order("created_at", {
      ascending: false
    });
    if (error) toast.error(error.message);
    setRows(data ?? []);
    setLoading(false);
  };
  reactExports.useEffect(() => {
    load();
  }, []);
  const del = async (id) => {
    if (!confirm("Delete this employee?")) return;
    const {
      error
    } = await supabase.from("employees").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Deleted");
    load();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-xl bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 px-4 py-4 text-white shadow-md shadow-sky-500/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/15 blur-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-wrap items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-bold", children: "Employees" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/80", children: "Manage team members — assign them to tasks and leads." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: (v) => {
          setOpen(v);
          if (!v) setEditing(null);
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "bg-white text-sky-700 shadow-md hover:bg-sky-50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-2 h-4 w-4" }),
            " Add Employee"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-xl bg-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: editing ? "Edit Employee" : "Add Employee" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeForm, { editing, onSaved: () => {
              setOpen(false);
              setEditing(null);
              load();
            } })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "overflow-hidden", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-40 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin text-muted-foreground" }) }) : rows.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-10 text-center text-sm text-slate-500", children: "No employees yet. Add your first team member." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Role" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Department" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, {})
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: rows.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "hover:bg-sky-50/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: r.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: r.role ?? "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: r.department ?? "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: r.phone ?? "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: r.email ?? "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: r.status === "active" ? "bg-emerald-100 text-emerald-700" : "bg-slate-200 text-slate-700", children: r.status }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "flex gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", onClick: () => {
            setEditing(r);
            setOpen(true);
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3.5 w-3.5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", className: "text-rose-600", onClick: () => del(r.id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) })
        ] })
      ] }, r.id)) })
    ] }) })
  ] });
}
function EmployeeForm({
  editing,
  onSaved
}) {
  const [f, setF] = reactExports.useState({
    name: editing?.name ?? "",
    email: editing?.email ?? "",
    phone: editing?.phone ?? "",
    role: editing?.role ?? ROLES[0],
    department: editing?.department ?? DEPTS[0],
    status: editing?.status ?? "active",
    notes: editing?.notes ?? ""
  });
  const [saving, setSaving] = reactExports.useState(false);
  const submit = async (e) => {
    e.preventDefault();
    if (!f.name.trim()) return toast.error("Name required");
    setSaving(true);
    const payload = {
      ...f,
      name: f.name.trim()
    };
    const {
      error
    } = editing ? await supabase.from("employees").update(payload).eq("id", editing.id) : await supabase.from("employees").insert(payload);
    setSaving(false);
    if (error) return toast.error(error.message);
    toast.success(editing ? "Updated" : "Employee added");
    onSaved();
  };
  const inputCls = "h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Name *" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "mt-1", value: f.name, onChange: (e) => setF({
        ...f,
        name: e.target.value
      }), required: true })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "mt-1", value: f.phone, onChange: (e) => setF({
          ...f,
          phone: e.target.value
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "mt-1", type: "email", value: f.email, onChange: (e) => setF({
          ...f,
          email: e.target.value
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Role" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: `${inputCls} mt-1`, value: f.role, onChange: (e) => setF({
          ...f,
          role: e.target.value
        }), children: ROLES.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: r }, r)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Department" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: `${inputCls} mt-1`, value: f.department, onChange: (e) => setF({
          ...f,
          department: e.target.value
        }), children: DEPTS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: d }, d)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Status" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: `${inputCls} mt-1`, value: f.status, onChange: (e) => setF({
        ...f,
        status: e.target.value
      }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "active", children: "Active" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "inactive", children: "Inactive" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Notes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { className: "mt-1", rows: 2, value: f.notes, onChange: (e) => setF({
        ...f,
        notes: e.target.value
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", disabled: saving, className: "bg-gradient-to-r from-sky-600 to-blue-600 text-white", children: [
      saving && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
      editing ? "Save Changes" : "Add Employee"
    ] }) })
  ] });
}
export {
  EmployeesPage as component
};
