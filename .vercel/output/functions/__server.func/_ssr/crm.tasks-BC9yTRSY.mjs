import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as Card } from "./card-RGlIzTYo.mjs";
import { B as Button } from "./button-TjZkfKyC.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { L as Label } from "./label-JU3yqRBo.mjs";
import { T as Textarea } from "./textarea-DtF-dDz-.mjs";
import { D as Dialog, f as DialogTrigger, a as DialogContent, d as DialogHeader, e as DialogTitle } from "./dialog-RBdmK4nU.mjs";
import { T as Table, d as TableHeader, e as TableRow, c as TableHead, a as TableBody, b as TableCell } from "./table-DhIrzwGX.mjs";
import { s as supabase } from "./router-BNZhdFpk.mjs";
import { c as cn } from "./utils-H80jjgLf.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { av as SquareCheckBig, ak as Plus, a4 as LoaderCircle } from "../_libs/lucide-react.mjs";
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
const TASK_TYPES = ["Follow Up", "Call", "Meeting", "Document Collection", "Renewal", "Reminder", "Other"];
const PRIORITIES = ["low", "medium", "high"];
const STATUSES = ["pending", "pre_login", "follow_up", "login", "sanctioned", "disbursement", "in_progress", "completed", "closed", "rejected", "cancelled"];
function TasksPage() {
  const [rows, setRows] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [open, setOpen] = reactExports.useState(false);
  const load = async () => {
    setLoading(true);
    const {
      data,
      error
    } = await supabase.from("tasks").select(`
        *,
        customer:customers!tasks_related_customer_id_fkey(customer_name, mobile),
        loan_case:loan_cases!tasks_related_loan_case_id_fkey(loan_type, stage, requested_amount)
      `).order("due_date", {
      ascending: true
    });
    if (error) {
      const fallback = await supabase.from("tasks").select("*").order("due_date", {
        ascending: true
      });
      if (fallback.error) {
        toast.error(fallback.error.message);
        setLoading(false);
        return;
      }
      setRows(fallback.data ?? []);
      setLoading(false);
      return;
    }
    setRows(data ?? []);
    setLoading(false);
  };
  reactExports.useEffect(() => {
    load();
    const channel = supabase.channel("crm-tasks-sync").on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "tasks"
    }, () => load()).on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "loan_cases"
    }, () => load()).on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "customers"
    }, () => load()).subscribe();
    return () => {
      channel.unsubscribe();
    };
  }, []);
  const updatePriority = async (task, priority) => {
    const {
      error
    } = await supabase.from("tasks").update({
      priority
    }).eq("id", task.id);
    if (error) {
      toast.error(error.message);
      return;
    }
    setRows((prev) => prev.map((row) => row.id === task.id ? {
      ...row,
      priority
    } : row));
    toast.success(`Priority updated → ${priority}`);
  };
  const updateStatus = async (task, status) => {
    const {
      error
    } = await supabase.from("tasks").update({
      status
    }).eq("id", task.id);
    if (error) {
      toast.error(error.message);
      return;
    }
    setRows((prev) => prev.map((row) => row.id === task.id ? {
      ...row,
      status
    } : row));
    toast.success(`Status updated → ${status.replace(/_/g, " ")}`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-xl bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 px-4 py-4 text-white shadow-md shadow-sky-500/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/15 blur-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-wrap items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquareCheckBig, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-bold", children: "Tasks" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/80", children: "Followups, calls, meetings, document collection and renewals." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: setOpen, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "bg-white text-sky-700 shadow-md hover:bg-sky-50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-2 h-4 w-4" }),
            "New Task"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-h-[90vh] max-w-2xl overflow-y-auto bg-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Create New Task" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NewTaskForm, { onSaved: load })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "overflow-hidden", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-40 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin text-muted-foreground" }) }) : rows.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-10 text-center text-sm text-slate-500", children: "No tasks yet. Click New Task to create your first task." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Title" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Customer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Loan Case" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Priority" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Due" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: rows.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "hover:bg-sky-50/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "font-medium", children: [
          row.title,
          row.description && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 line-clamp-1 text-xs text-slate-500", children: row.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm", children: row.customer?.customer_name ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-sky-700", children: row.customer.customer_name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500", children: row.customer.mobile ?? "—" })
        ] }) : "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm", children: row.loan_case ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-emerald-700", children: row.loan_case.loan_type ?? "Loan Case" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-500", children: [
            row.loan_case.stage ?? "—",
            row.loan_case.requested_amount ? ` · ₹${Number(row.loan_case.requested_amount).toLocaleString("en-IN")}` : ""
          ] })
        ] }) : "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: row.task_type ?? "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: row.priority, onChange: (event) => updatePriority(row, event.target.value), className: cn("h-9 w-[120px] rounded-lg border bg-white px-3 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100", row.priority === "high" && "border-rose-300 text-rose-700", row.priority === "medium" && "border-amber-300 text-amber-700", row.priority === "low" && "border-slate-300 text-slate-700"), children: PRIORITIES.map((priority) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: priority, children: priority }, priority)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: row.status, onChange: (event) => updateStatus(row, event.target.value), className: "h-9 w-[145px] rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100", children: STATUSES.map((status) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: status, children: status.replace(/_/g, " ") }, status)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm", children: row.due_date ? new Date(row.due_date).toLocaleString() : "—" })
      ] }, row.id)) })
    ] }) }) })
  ] });
}
function NewTaskForm({
  onSaved
}) {
  const initialTask = {
    title: "",
    description: "",
    task_type: "Follow Up",
    priority: "medium",
    status: "pending",
    due_date: "",
    assignee: "",
    customer_id: "",
    loan_case_id: ""
  };
  const [form, setForm] = reactExports.useState(initialTask);
  const [saving, setSaving] = reactExports.useState(false);
  const [assignees, setAssignees] = reactExports.useState([]);
  const [customers, setCustomers] = reactExports.useState([]);
  const [loanCases, setLoanCases] = reactExports.useState([]);
  reactExports.useEffect(() => {
    const loadOptions = async () => {
      const [emps, parts, custs, loans] = await Promise.all([supabase.from("employees").select("id,name").eq("status", "active").order("name"), supabase.from("partners").select("id,name").eq("status", "active").order("name"), supabase.from("customers").select("id,customer_name,mobile").order("customer_name"), supabase.from("loan_cases").select("id, loan_type, stage, requested_amount, customer:customers(customer_name, mobile)").not("stage", "in", '("Closed","Dropped","Rejected")').order("created_at", {
        ascending: false
      })]);
      const opts = [...(emps.data ?? []).map((employee) => ({
        id: employee.id,
        name: employee.name,
        kind: "employee"
      })), ...(parts.data ?? []).map((partner) => ({
        id: partner.id,
        name: partner.name,
        kind: "partner"
      }))];
      setAssignees(opts);
      setCustomers((custs.data ?? []).map((customer) => ({
        id: customer.id,
        name: customer.customer_name,
        mobile: customer.mobile
      })));
      setLoanCases((loans.data ?? []).map((loan) => ({
        id: loan.id,
        loan_type: loan.loan_type,
        stage: loan.stage,
        requested_amount: loan.requested_amount,
        customer_name: loan.customer?.customer_name ?? null,
        mobile: loan.customer?.mobile ?? null
      })));
    };
    loadOptions();
  }, []);
  const inputClass = "h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100";
  const submit = async (event) => {
    event.preventDefault();
    if (!form.title.trim()) {
      toast.error("Task title is required");
      return;
    }
    setSaving(true);
    let assigned_employee_id = null;
    let assigned_partner_id = null;
    if (form.assignee) {
      const [kind, id] = form.assignee.split(":");
      if (kind === "employee") assigned_employee_id = id;
      if (kind === "partner") assigned_partner_id = id;
    }
    const {
      error
    } = await supabase.from("tasks").insert({
      title: form.title.trim(),
      description: form.description.trim() || null,
      task_type: form.task_type || null,
      priority: form.priority,
      status: form.status,
      due_date: form.due_date || null,
      assigned_employee_id,
      assigned_partner_id,
      related_customer_id: form.customer_id || null,
      related_loan_case_id: form.loan_case_id || null
    });
    setSaving(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Task created");
    setForm(initialTask);
    onSaved();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Title *" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, value: form.title, onChange: (event) => setForm((prev) => ({
        ...prev,
        title: event.target.value
      })), className: "mt-1 border-sky-200 focus-visible:ring-sky-400", placeholder: "Call customer for follow-up" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Description" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 3, value: form.description, onChange: (event) => setForm((prev) => ({
        ...prev,
        description: event.target.value
      })), className: "mt-1 border-sky-200 focus-visible:ring-sky-400", placeholder: "Add task details..." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Task Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: form.task_type, onChange: (event) => setForm((prev) => ({
          ...prev,
          task_type: event.target.value
        })), className: inputClass, children: TASK_TYPES.map((type) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: type, children: type }, type)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Priority" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: form.priority, onChange: (event) => setForm((prev) => ({
          ...prev,
          priority: event.target.value
        })), className: inputClass, children: PRIORITIES.map((priority) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: priority, children: priority }, priority)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: form.status, onChange: (event) => setForm((prev) => ({
          ...prev,
          status: event.target.value
        })), className: inputClass, children: STATUSES.map((status) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: status, children: status.replace(/_/g, " ") }, status)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Due Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "datetime-local", value: form.due_date, onChange: (event) => setForm((prev) => ({
          ...prev,
          due_date: event.target.value
        })), className: "mt-1 border-sky-200 focus-visible:ring-sky-400" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Assign To (Employee / Partner)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: form.assignee, onChange: (event) => setForm((prev) => ({
          ...prev,
          assignee: event.target.value
        })), className: inputClass, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "— Unassigned —" }),
          assignees.filter((item) => item.kind === "employee").length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("optgroup", { label: "Employees", children: assignees.filter((item) => item.kind === "employee").map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: `employee:${item.id}`, children: item.name }, `employee-${item.id}`)) }),
          assignees.filter((item) => item.kind === "partner").length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("optgroup", { label: "Partners", children: assignees.filter((item) => item.kind === "partner").map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: `partner:${item.id}`, children: item.name }, `partner-${item.id}`)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Link to Customer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: form.customer_id, onChange: (event) => setForm((prev) => ({
          ...prev,
          customer_id: event.target.value
        })), className: inputClass, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "— None —" }),
          customers.map((customer) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: customer.id, children: [
            customer.name,
            customer.mobile ? ` · ${customer.mobile}` : ""
          ] }, customer.id))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Link to Loan Case" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: form.loan_case_id, onChange: (event) => setForm((prev) => ({
          ...prev,
          loan_case_id: event.target.value
        })), className: inputClass, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "— None —" }),
          loanCases.map((loan) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: loan.id, children: [
            loan.customer_name ?? "Customer",
            " · ",
            loan.loan_type ?? "Loan",
            " ·",
            " ",
            loan.stage ?? "Stage",
            loan.requested_amount ? ` · ₹${Number(loan.requested_amount).toLocaleString("en-IN")}` : ""
          ] }, loan.id))
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", disabled: saving, className: "bg-gradient-to-r from-sky-600 to-blue-600 text-white", children: [
        saving && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
        "Create Task"
      ] })
    ] })
  ] });
}
export {
  TasksPage as component
};
