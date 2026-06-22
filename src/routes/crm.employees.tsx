import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Plus, UserPlus, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/crm/employees")({ component: EmployeesPage });

type Employee = {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  role: string | null;
  department: string | null;
  status: string;
  notes: string | null;
  created_at: string;
};

const ROLES = ["Sales Executive", "Operations", "Manager", "Tele-caller", "Field Agent", "Insurance Executive", "MF Executive", "Admin"];
const DEPTS = ["Sales", "Operations", "Insurance", "Mutual Funds", "Loans", "Admin"];

function EmployeesPage() {
  const [rows, setRows] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Employee | null>(null);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("employees").select("*").order("created_at", { ascending: false });
    if (error) toast.error(error.message);
    setRows((data ?? []) as Employee[]);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const del = async (id: string) => {
    if (!confirm("Delete this employee?")) return;
    const { error } = await supabase.from("employees").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Deleted");
    load();
  };

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 px-4 py-4 text-white shadow-md shadow-sky-500/20">
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/15 blur-2xl" />
        <div className="relative flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
              <UserPlus className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Employees</h1>
              <p className="text-xs text-white/80">Manage team members — assign them to tasks and leads.</p>
            </div>
          </div>
          <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) setEditing(null); }}>
            <DialogTrigger asChild>
              <Button className="bg-white text-sky-700 shadow-md hover:bg-sky-50">
                <Plus className="mr-2 h-4 w-4" /> Add Employee
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-xl bg-white">
              <DialogHeader>
                <DialogTitle>{editing ? "Edit Employee" : "Add Employee"}</DialogTitle>
              </DialogHeader>
              <EmployeeForm
                editing={editing}
                onSaved={() => { setOpen(false); setEditing(null); load(); }}
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card className="overflow-hidden">
        {loading ? (
          <div className="flex h-40 items-center justify-center"><Loader2 className="h-5 w-5 animate-spin text-muted-foreground" /></div>
        ) : rows.length === 0 ? (
          <div className="p-10 text-center text-sm text-slate-500">No employees yet. Add your first team member.</div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((r) => (
                <TableRow key={r.id} className="hover:bg-sky-50/60">
                  <TableCell className="font-medium">{r.name}</TableCell>
                  <TableCell>{r.role ?? "—"}</TableCell>
                  <TableCell>{r.department ?? "—"}</TableCell>
                  <TableCell>{r.phone ?? "—"}</TableCell>
                  <TableCell>{r.email ?? "—"}</TableCell>
                  <TableCell>
                    <Badge className={r.status === "active" ? "bg-emerald-100 text-emerald-700" : "bg-slate-200 text-slate-700"}>
                      {r.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="flex gap-1">
                    <Button size="icon" variant="ghost" onClick={() => { setEditing(r); setOpen(true); }}>
                      <Pencil className="h-3.5 w-3.5" />
                    </Button>
                    <Button size="icon" variant="ghost" className="text-rose-600" onClick={() => del(r.id)}>
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Card>
    </div>
  );
}

function EmployeeForm({ editing, onSaved }: { editing: Employee | null; onSaved: () => void }) {
  const [f, setF] = useState({
    name: editing?.name ?? "",
    email: editing?.email ?? "",
    phone: editing?.phone ?? "",
    role: editing?.role ?? ROLES[0],
    department: editing?.department ?? DEPTS[0],
    status: editing?.status ?? "active",
    notes: editing?.notes ?? "",
  });
  const [saving, setSaving] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!f.name.trim()) return toast.error("Name required");
    setSaving(true);
    const payload = { ...f, name: f.name.trim() };
    const { error } = editing
      ? await supabase.from("employees").update(payload).eq("id", editing.id)
      : await supabase.from("employees").insert(payload);
    setSaving(false);
    if (error) return toast.error(error.message);
    toast.success(editing ? "Updated" : "Employee added");
    onSaved();
  };

  const inputCls = "h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100";

  return (
    <form onSubmit={submit} className="space-y-3">
      <div>
        <Label>Name *</Label>
        <Input className="mt-1" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} required />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div><Label>Phone</Label><Input className="mt-1" value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} /></div>
        <div><Label>Email</Label><Input className="mt-1" type="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} /></div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label>Role</Label>
          <select className={`${inputCls} mt-1`} value={f.role} onChange={(e) => setF({ ...f, role: e.target.value })}>
            {ROLES.map((r) => <option key={r}>{r}</option>)}
          </select>
        </div>
        <div>
          <Label>Department</Label>
          <select className={`${inputCls} mt-1`} value={f.department} onChange={(e) => setF({ ...f, department: e.target.value })}>
            {DEPTS.map((d) => <option key={d}>{d}</option>)}
          </select>
        </div>
      </div>
      <div>
        <Label>Status</Label>
        <select className={`${inputCls} mt-1`} value={f.status} onChange={(e) => setF({ ...f, status: e.target.value })}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <div>
        <Label>Notes</Label>
        <Textarea className="mt-1" rows={2} value={f.notes} onChange={(e) => setF({ ...f, notes: e.target.value })} />
      </div>
      <div className="flex justify-end">
        <Button type="submit" disabled={saving} className="bg-gradient-to-r from-sky-600 to-blue-600 text-white">
          {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {editing ? "Save Changes" : "Add Employee"}
        </Button>
      </div>
    </form>
  );
}
