// import { createFileRoute } from "@tanstack/react-router";
// import { useEffect, useState } from "react";
// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { supabase } from "@/integrations/supabase/client";
// import { Loader2, Plus, CheckSquare } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { toast } from "sonner";

// export const Route = createFileRoute("/crm/tasks")({
//   component: TasksPage,
// });

// type Row = {
//   id: string;
//   title: string;
//   description: string | null;
//   task_type: string | null;
//   status: string;
//   priority: string;
//   due_date: string | null;
// };

// const TASK_TYPES = [
//   "Follow Up",
//   "Call",
//   "Meeting",
//   "Document Collection",
//   "Renewal",
//   "Reminder",
//   "Other",
// ];

// const PRIORITIES = ["low", "medium", "high"];

// const STATUSES = [
//   "pending",
//   "pre_login",
//   "follow_up",
//   "login",
//   "sanctioned",
//   "disbursement",
//   "in_progress",
//   "completed",
//   "closed",
//   "rejected",
//   "cancelled",
// ];


// function TasksPage() {
//   const [rows, setRows] = useState<Row[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [open, setOpen] = useState(false);

//   const load = async () => {
//     setLoading(true);

//     const { data, error } = await supabase
//       .from("tasks")
//       .select("*")
//       .order("due_date", { ascending: true });

//     if (error) {
//       toast.error(error.message);
//       setLoading(false);
//       return;
//     }

//     setRows((data ?? []) as Row[]);
//     setLoading(false);
//   };

//   useEffect(() => {
//     load();
//   }, []);

//   const updatePriority = async (task: Row, priority: string) => {
//     const { error } = await supabase
//       .from("tasks")
//       .update({ priority })
//       .eq("id", task.id);

//     if (error) {
//       toast.error(error.message);
//       return;
//     }

//     setRows((prev) =>
//       prev.map((r) => (r.id === task.id ? { ...r, priority } : r)),
//     );

//     toast.success(`Priority updated → ${priority}`);
//   };

//   const updateStatus = async (task: Row, status: string) => {
//     const { error } = await supabase
//       .from("tasks")
//       .update({ status })
//       .eq("id", task.id);

//     if (error) {
//       toast.error(error.message);
//       return;
//     }

//     setRows((prev) =>
//       prev.map((r) => (r.id === task.id ? { ...r, status } : r)),
//     );

//     toast.success(`Status updated → ${status.replace(/_/g, " ")}`);
//   };

//   return (
//     <div className="space-y-4">
//       {/* HEADER */}
//       <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 px-4 py-4 text-white shadow-md shadow-sky-500/20">
//         <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/15 blur-2xl" />

//         <div className="relative flex flex-wrap items-center justify-between gap-3">
//           <div className="flex items-center gap-3">
//             <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
//               <CheckSquare className="h-5 w-5" />
//             </div>

//             <div>
//               <h1 className="text-lg font-bold">Tasks</h1>
//               <p className="text-xs text-white/80">
//                 Followups, calls, meetings, document collection and renewals.
//               </p>
//             </div>
//           </div>

//           <Dialog open={open} onOpenChange={setOpen}>
//             <DialogTrigger asChild>
//               <Button className="bg-white text-sky-700 shadow-md hover:bg-sky-50">
//                 <Plus className="mr-2 h-4 w-4" />
//                 New Task
//               </Button>
//             </DialogTrigger>

//             <DialogContent className="max-w-xl bg-white">
//               <DialogHeader>
//                 <DialogTitle>Create New Task</DialogTitle>
//               </DialogHeader>

//               <NewTaskForm
//                 onSaved={() => {
//                   load();
//                 }}
//               />
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>

//       {/* TABLE */}
//       <Card className="overflow-hidden">
//         {loading ? (
//           <div className="flex h-40 items-center justify-center">
//             <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
//           </div>
//         ) : rows.length === 0 ? (
//           <div className="p-10 text-center text-sm text-slate-500">
//             No tasks yet. Click New Task to create your first task.
//           </div>
//         ) : (
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Title</TableHead>
//                 <TableHead>Type</TableHead>
//                 <TableHead>Priority</TableHead>
//                 <TableHead>Status</TableHead>
//                 <TableHead>Due</TableHead>
//               </TableRow>
//             </TableHeader>

//             <TableBody>
//               {rows.map((r) => (
//                 <TableRow key={r.id} className="hover:bg-sky-50/60">
//                   <TableCell className="font-medium">
//                     {r.title}

//                     {r.description && (
//                       <div className="mt-1 line-clamp-1 text-xs text-slate-500">
//                         {r.description}
//                       </div>
//                     )}
//                   </TableCell>

//                   <TableCell>{r.task_type ?? "—"}</TableCell>

//                   <TableCell>
//                     <select
//                       value={r.priority}
//                       onChange={(e) => updatePriority(r, e.target.value)}
//                       className={cn(
//                         "h-9 w-[120px] rounded-lg border bg-white px-3 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100",
//                         r.priority === "high" &&
//                           "border-rose-300 text-rose-700",
//                         r.priority === "medium" &&
//                           "border-amber-300 text-amber-700",
//                         r.priority === "low" &&
//                           "border-slate-300 text-slate-700",
//                       )}
//                     >
//                       {PRIORITIES.map((p) => (
//                         <option key={p} value={p}>
//                           {p}
//                         </option>
//                       ))}
//                     </select>
//                   </TableCell>

//                   <TableCell>
//                     <select
//                       value={r.status}
//                       onChange={(e) => updateStatus(r, e.target.value)}
//                       className="h-9 w-[145px] rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
//                     >
//                       {STATUSES.map((s) => (
//                         <option key={s} value={s}>
//                           {s.replace(/_/g, " ")}
//                         </option>
//                       ))}
//                     </select>
//                   </TableCell>

//                   <TableCell className="text-sm">
//                     {r.due_date ? new Date(r.due_date).toLocaleString() : "—"}
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         )}
//       </Card>
//     </div>
//   );
// }

// type AssigneeOpt = { id: string; name: string; kind: "employee" | "partner" };
// type CustomerOpt = { id: string; name: string; mobile: string | null };

// function NewTaskForm({ onSaved }: { onSaved: () => void }) {
//   const initialTask = {
//     title: "",
//     description: "",
//     task_type: "Follow Up",
//     priority: "medium",
//     status: "pending",
//     due_date: "",
//     assignee: "" as string, // "kind:id"
//     customer_id: "" as string,
//   };

//   const [f, setF] = useState(initialTask);
//   const [saving, setSaving] = useState(false);
//   const [assignees, setAssignees] = useState<AssigneeOpt[]>([]);
//   const [customers, setCustomers] = useState<CustomerOpt[]>([]);

//   useEffect(() => {
//     (async () => {
//       const [emps, parts, custs] = await Promise.all([
//         supabase.from("employees").select("id,name").eq("status", "active").order("name"),
//         supabase.from("partners").select("id,name").eq("status", "active").order("name"),
//         supabase.from("customers").select("id,customer_name,mobile").order("customer_name"),
//       ]);
//       const opts: AssigneeOpt[] = [
//         ...(emps.data ?? []).map((e) => ({ id: e.id, name: e.name, kind: "employee" as const })),
//         ...(parts.data ?? []).map((p) => ({ id: p.id, name: p.name, kind: "partner" as const })),
//       ];
//       setAssignees(opts);
//       setCustomers(
//         (custs.data ?? []).map((c) => ({
//           id: c.id,
//           name: c.customer_name,
//           mobile: c.mobile,
//         })),
//       );
//     })();
//   }, []);

//   const inputClass =
//     "h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100";

//   const submit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!f.title.trim()) { toast.error("Task title is required"); return; }
//     setSaving(true);

//     let assigned_employee_id: string | null = null;
//     let assigned_partner_id: string | null = null;
//     if (f.assignee) {
//       const [kind, id] = f.assignee.split(":");
//       if (kind === "employee") assigned_employee_id = id;
//       else if (kind === "partner") assigned_partner_id = id;
//     }

//     const { error } = await supabase.from("tasks").insert({
//       title: f.title.trim(),
//       description: f.description.trim() || null,
//       task_type: f.task_type || null,
//       priority: f.priority,
//       status: f.status,
//       due_date: f.due_date || null,
//       assigned_employee_id,
//       assigned_partner_id,
//       related_customer_id: f.customer_id || null,
//     });

//     setSaving(false);
//     if (error) { toast.error(error.message); return; }
//     toast.success("Task created");
//     setF(initialTask);
//     onSaved();
//   };


//   return (
//     <form onSubmit={submit} className="space-y-4">
//       <div>
//         <Label>Title *</Label>
//         <Input
//           required
//           value={f.title}
//           onChange={(e) =>
//             setF((prev) => ({ ...prev, title: e.target.value }))
//           }
//           className="mt-1 border-sky-200 focus-visible:ring-sky-400"
//           placeholder="Call customer for follow-up"
//         />
//       </div>

//       <div>
//         <Label>Description</Label>
//         <Textarea
//           rows={3}
//           value={f.description}
//           onChange={(e) =>
//             setF((prev) => ({ ...prev, description: e.target.value }))
//           }
//           className="mt-1 border-sky-200 focus-visible:ring-sky-400"
//           placeholder="Add task details..."
//         />
//       </div>

//       <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
//         <div>
//           <Label>Task Type</Label>
//           <select
//             value={f.task_type}
//             onChange={(e) =>
//               setF((prev) => ({ ...prev, task_type: e.target.value }))
//             }
//             className={inputClass}
//           >
//             {TASK_TYPES.map((t) => (
//               <option key={t} value={t}>
//                 {t}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <Label>Priority</Label>
//           <select
//             value={f.priority}
//             onChange={(e) =>
//               setF((prev) => ({ ...prev, priority: e.target.value }))
//             }
//             className={inputClass}
//           >
//             {PRIORITIES.map((p) => (
//               <option key={p} value={p}>
//                 {p}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <Label>Status</Label>
//           <select
//             value={f.status}
//             onChange={(e) =>
//               setF((prev) => ({ ...prev, status: e.target.value }))
//             }
//             className={inputClass}
//           >
//             {STATUSES.map((s) => (
//               <option key={s} value={s}>
//                 {s.replace(/_/g, " ")}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <Label>Due Date</Label>
//           <Input
//             type="datetime-local"
//             value={f.due_date}
//             onChange={(e) => setF((prev) => ({ ...prev, due_date: e.target.value }))}
//             className="mt-1 border-sky-200 focus-visible:ring-sky-400"
//           />
//         </div>

//         <div className="sm:col-span-2">
//           <Label>Assign To (Employee / Partner)</Label>
//           <select
//             value={f.assignee}
//             onChange={(e) => setF((prev) => ({ ...prev, assignee: e.target.value }))}
//             className={inputClass}
//           >
//             <option value="">— Unassigned —</option>
//             {assignees.filter(a => a.kind === "employee").length > 0 && (
//               <optgroup label="Employees">
//                 {assignees.filter(a => a.kind === "employee").map((a) => (
//                   <option key={`e-${a.id}`} value={`employee:${a.id}`}>{a.name}</option>
//                 ))}
//               </optgroup>
//             )}
//             {assignees.filter(a => a.kind === "partner").length > 0 && (
//               <optgroup label="Partners">
//                 {assignees.filter(a => a.kind === "partner").map((a) => (
//                   <option key={`p-${a.id}`} value={`partner:${a.id}`}>{a.name}</option>
//                 ))}
//               </optgroup>
//             )}
//           </select>
//         </div>

//         <div className="sm:col-span-2">
//           <Label>Link to Customer</Label>
//           <select
//             value={f.customer_id}
//             onChange={(e) => setF((prev) => ({ ...prev, customer_id: e.target.value }))}
//             className={inputClass}
//           >
//             <option value="">— None —</option>
//             {customers.map((c) => (
//               <option key={c.id} value={c.id}>
//                 {c.name}{c.mobile ? ` · ${c.mobile}` : ""}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>


//       <div className="flex items-center justify-between gap-3">
//         <p className="text-xs text-slate-500">Save ke baad form clear hoga, popup open rahega.</p>
//         <Button
//           type="submit"
//           disabled={saving}
//           className="bg-gradient-to-r from-sky-600 to-blue-600 text-white"
//         >
//           {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
//           Create Task
//         </Button>
//       </div>
//     </form>
//   );
// }
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Plus, CheckSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const Route = createFileRoute("/crm/tasks")({
  component: TasksPage,
});

type Row = {
  id: string;
  title: string;
  description: string | null;
  task_type: string | null;
  status: string;
  priority: string;
  due_date: string | null;
  related_customer_id?: string | null;
  related_loan_case_id?: string | null;
  customer?: {
    customer_name: string | null;
    mobile: string | null;
  } | null;
  loan_case?: {
    loan_type: string | null;
    stage: string | null;
    requested_amount: number | null;
  } | null;
};

type AssigneeOpt = {
  id: string;
  name: string;
  kind: "employee" | "partner";
};

type CustomerOpt = {
  id: string;
  name: string;
  mobile: string | null;
};

type LoanCaseOpt = {
  id: string;
  loan_type: string | null;
  stage: string | null;
  requested_amount: number | null;
  customer_name: string | null;
  mobile: string | null;
};

const TASK_TYPES = [
  "Follow Up",
  "Call",
  "Meeting",
  "Document Collection",
  "Renewal",
  "Reminder",
  "Other",
];

const PRIORITIES = ["low", "medium", "high"];

const STATUSES = [
  "pending",
  "pre_login",
  "follow_up",
  "login",
  "sanctioned",
  "disbursement",
  "in_progress",
  "completed",
  "closed",
  "rejected",
  "cancelled",
];

function TasksPage() {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const load = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("tasks")
      .select(
        `
        *,
        customer:customers!tasks_related_customer_id_fkey(customer_name, mobile),
        loan_case:loan_cases!tasks_related_loan_case_id_fkey(loan_type, stage, requested_amount)
      `,
      )
      .order("due_date", { ascending: true });

    if (error) {
      const fallback = await supabase
        .from("tasks")
        .select("*")
        .order("due_date", { ascending: true });

      if (fallback.error) {
        toast.error(fallback.error.message);
        setLoading(false);
        return;
      }

      setRows((fallback.data ?? []) as Row[]);
      setLoading(false);
      return;
    }

    setRows((data ?? []) as unknown as Row[]);
    setLoading(false);
  };

  useEffect(() => {
    load();

    const channel = supabase
      .channel("crm-tasks-sync")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "tasks" },
        () => load(),
      )
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "loan_cases" },
        () => load(),
      )
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "customers" },
        () => load(),
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, []);

  const updatePriority = async (task: Row, priority: string) => {
    const { error } = await supabase
      .from("tasks")
      .update({ priority })
      .eq("id", task.id);

    if (error) {
      toast.error(error.message);
      return;
    }

    setRows((prev) =>
      prev.map((row) => (row.id === task.id ? { ...row, priority } : row)),
    );

    toast.success(`Priority updated → ${priority}`);
  };

  const updateStatus = async (task: Row, status: string) => {
    const { error } = await supabase
      .from("tasks")
      .update({ status })
      .eq("id", task.id);

    if (error) {
      toast.error(error.message);
      return;
    }

    setRows((prev) =>
      prev.map((row) => (row.id === task.id ? { ...row, status } : row)),
    );

    toast.success(`Status updated → ${status.replace(/_/g, " ")}`);
  };

  return (
    <div className="space-y-4">
      {/* HEADER */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 px-4 py-4 text-white shadow-md shadow-sky-500/20">
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/15 blur-2xl" />

        <div className="relative flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
              <CheckSquare className="h-5 w-5" />
            </div>

            <div>
              <h1 className="text-lg font-bold">Tasks</h1>
              <p className="text-xs text-white/80">
                Followups, calls, meetings, document collection and renewals.
              </p>
            </div>
          </div>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="bg-white text-sky-700 shadow-md hover:bg-sky-50">
                <Plus className="mr-2 h-4 w-4" />
                New Task
              </Button>
            </DialogTrigger>

            <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto bg-white">
              <DialogHeader>
                <DialogTitle>Create New Task</DialogTitle>
              </DialogHeader>

              <NewTaskForm onSaved={load} />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* TABLE */}
      <Card className="overflow-hidden">
        {loading ? (
          <div className="flex h-40 items-center justify-center">
            <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
          </div>
        ) : rows.length === 0 ? (
          <div className="p-10 text-center text-sm text-slate-500">
            No tasks yet. Click New Task to create your first task.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Loan Case</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Due</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id} className="hover:bg-sky-50/60">
                    <TableCell className="font-medium">
                      {row.title}

                      {row.description && (
                        <div className="mt-1 line-clamp-1 text-xs text-slate-500">
                          {row.description}
                        </div>
                      )}
                    </TableCell>

                    <TableCell className="text-sm">
                      {row.customer?.customer_name ? (
                        <div>
                          <div className="font-medium text-sky-700">
                            {row.customer.customer_name}
                          </div>
                          <div className="text-xs text-slate-500">
                            {row.customer.mobile ?? "—"}
                          </div>
                        </div>
                      ) : (
                        "—"
                      )}
                    </TableCell>

                    <TableCell className="text-sm">
                      {row.loan_case ? (
                        <div>
                          <div className="font-medium text-emerald-700">
                            {row.loan_case.loan_type ?? "Loan Case"}
                          </div>
                          <div className="text-xs text-slate-500">
                            {row.loan_case.stage ?? "—"}
                            {row.loan_case.requested_amount
                              ? ` · ₹${Number(
                                  row.loan_case.requested_amount,
                                ).toLocaleString("en-IN")}`
                              : ""}
                          </div>
                        </div>
                      ) : (
                        "—"
                      )}
                    </TableCell>

                    <TableCell>{row.task_type ?? "—"}</TableCell>

                    <TableCell>
                      <select
                        value={row.priority}
                        onChange={(event) =>
                          updatePriority(row, event.target.value)
                        }
                        className={cn(
                          "h-9 w-[120px] rounded-lg border bg-white px-3 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100",
                          row.priority === "high" &&
                            "border-rose-300 text-rose-700",
                          row.priority === "medium" &&
                            "border-amber-300 text-amber-700",
                          row.priority === "low" &&
                            "border-slate-300 text-slate-700",
                        )}
                      >
                        {PRIORITIES.map((priority) => (
                          <option key={priority} value={priority}>
                            {priority}
                          </option>
                        ))}
                      </select>
                    </TableCell>

                    <TableCell>
                      <select
                        value={row.status}
                        onChange={(event) =>
                          updateStatus(row, event.target.value)
                        }
                        className="h-9 w-[145px] rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                      >
                        {STATUSES.map((status) => (
                          <option key={status} value={status}>
                            {status.replace(/_/g, " ")}
                          </option>
                        ))}
                      </select>
                    </TableCell>

                    <TableCell className="text-sm">
                      {row.due_date
                        ? new Date(row.due_date).toLocaleString()
                        : "—"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </Card>
    </div>
  );
}

function NewTaskForm({ onSaved }: { onSaved: () => void }) {
  const initialTask = {
    title: "",
    description: "",
    task_type: "Follow Up",
    priority: "medium",
    status: "pending",
    due_date: "",
    assignee: "",
    customer_id: "",
    loan_case_id: "",
  };

  const [form, setForm] = useState(initialTask);
  const [saving, setSaving] = useState(false);
  const [assignees, setAssignees] = useState<AssigneeOpt[]>([]);
  const [customers, setCustomers] = useState<CustomerOpt[]>([]);
  const [loanCases, setLoanCases] = useState<LoanCaseOpt[]>([]);

  useEffect(() => {
    const loadOptions = async () => {
      const [emps, parts, custs, loans] = await Promise.all([
        supabase
          .from("employees")
          .select("id,name")
          .eq("status", "active")
          .order("name"),

        supabase
          .from("partners")
          .select("id,name")
          .eq("status", "active")
          .order("name"),

        supabase
          .from("customers")
          .select("id,customer_name,mobile")
          .order("customer_name"),

        supabase
          .from("loan_cases")
          .select(
            "id, loan_type, stage, requested_amount, customer:customers(customer_name, mobile)",
          )
          .not("stage", "in", '("Closed","Dropped","Rejected")')
          .order("created_at", { ascending: false }),
      ]);

      const opts: AssigneeOpt[] = [
        ...(emps.data ?? []).map((employee) => ({
          id: employee.id,
          name: employee.name,
          kind: "employee" as const,
        })),
        ...(parts.data ?? []).map((partner) => ({
          id: partner.id,
          name: partner.name,
          kind: "partner" as const,
        })),
      ];

      setAssignees(opts);

      setCustomers(
        (custs.data ?? []).map((customer) => ({
          id: customer.id,
          name: customer.customer_name,
          mobile: customer.mobile,
        })),
      );

      setLoanCases(
        ((loans.data ?? []) as any[]).map((loan) => ({
          id: loan.id,
          loan_type: loan.loan_type,
          stage: loan.stage,
          requested_amount: loan.requested_amount,
          customer_name: loan.customer?.customer_name ?? null,
          mobile: loan.customer?.mobile ?? null,
        })),
      );
    };

    loadOptions();
  }, []);

  const inputClass =
    "h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100";

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!form.title.trim()) {
      toast.error("Task title is required");
      return;
    }

    setSaving(true);

    let assigned_employee_id: string | null = null;
    let assigned_partner_id: string | null = null;

    if (form.assignee) {
      const [kind, id] = form.assignee.split(":");

      if (kind === "employee") assigned_employee_id = id;
      if (kind === "partner") assigned_partner_id = id;
    }

    const { error } = await supabase.from("tasks").insert({
      title: form.title.trim(),
      description: form.description.trim() || null,
      task_type: form.task_type || null,
      priority: form.priority,
      status: form.status,
      due_date: form.due_date || null,
      assigned_employee_id,
      assigned_partner_id,
      related_customer_id: form.customer_id || null,
      related_loan_case_id: form.loan_case_id || null,
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

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <Label>Title *</Label>
        <Input
          required
          value={form.title}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, title: event.target.value }))
          }
          className="mt-1 border-sky-200 focus-visible:ring-sky-400"
          placeholder="Call customer for follow-up"
        />
      </div>

      <div>
        <Label>Description</Label>
        <Textarea
          rows={3}
          value={form.description}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, description: event.target.value }))
          }
          className="mt-1 border-sky-200 focus-visible:ring-sky-400"
          placeholder="Add task details..."
        />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <Label>Task Type</Label>
          <select
            value={form.task_type}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, task_type: event.target.value }))
            }
            className={inputClass}
          >
            {TASK_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label>Priority</Label>
          <select
            value={form.priority}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, priority: event.target.value }))
            }
            className={inputClass}
          >
            {PRIORITIES.map((priority) => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label>Status</Label>
          <select
            value={form.status}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, status: event.target.value }))
            }
            className={inputClass}
          >
            {STATUSES.map((status) => (
              <option key={status} value={status}>
                {status.replace(/_/g, " ")}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label>Due Date</Label>
          <Input
            type="datetime-local"
            value={form.due_date}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, due_date: event.target.value }))
            }
            className="mt-1 border-sky-200 focus-visible:ring-sky-400"
          />
        </div>

        <div className="sm:col-span-2">
          <Label>Assign To (Employee / Partner)</Label>
          <select
            value={form.assignee}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, assignee: event.target.value }))
            }
            className={inputClass}
          >
            <option value="">— Unassigned —</option>

            {assignees.filter((item) => item.kind === "employee").length >
              0 && (
              <optgroup label="Employees">
                {assignees
                  .filter((item) => item.kind === "employee")
                  .map((item) => (
                    <option key={`employee-${item.id}`} value={`employee:${item.id}`}>
                      {item.name}
                    </option>
                  ))}
              </optgroup>
            )}

            {assignees.filter((item) => item.kind === "partner").length > 0 && (
              <optgroup label="Partners">
                {assignees
                  .filter((item) => item.kind === "partner")
                  .map((item) => (
                    <option key={`partner-${item.id}`} value={`partner:${item.id}`}>
                      {item.name}
                    </option>
                  ))}
              </optgroup>
            )}
          </select>
        </div>

        <div className="sm:col-span-2">
          <Label>Link to Customer</Label>
          <select
            value={form.customer_id}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, customer_id: event.target.value }))
            }
            className={inputClass}
          >
            <option value="">— None —</option>

            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
                {customer.mobile ? ` · ${customer.mobile}` : ""}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <Label>Link to Loan Case</Label>
          <select
            value={form.loan_case_id}
            onChange={(event) =>
              setForm((prev) => ({
                ...prev,
                loan_case_id: event.target.value,
              }))
            }
            className={inputClass}
          >
            <option value="">— None —</option>

            {loanCases.map((loan) => (
              <option key={loan.id} value={loan.id}>
                {loan.customer_name ?? "Customer"} · {loan.loan_type ?? "Loan"} ·{" "}
                {loan.stage ?? "Stage"}
                {loan.requested_amount
                  ? ` · ₹${Number(loan.requested_amount).toLocaleString("en-IN")}`
                  : ""}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3">
        <p className="text-xs text-slate-500">
        
        </p>

        <Button
          type="submit"
          disabled={saving}
          className="bg-gradient-to-r from-sky-600 to-blue-600 text-white"
        >
          {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Create Task
        </Button>
      </div>
    </form>
  );
}