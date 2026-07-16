import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCrmAuth } from "@/hooks/useCrmAuth";
import {
  listEmployees,
  createEmployee,
  deleteEmployee,
  resetEmployeePassword,
} from "@/lib/employees.functions";
import { toast } from "sonner";
import {
  Loader2, UserPlus, Trash2, KeyRound, Copy, Check, Users,
  Mail, Phone, MessageCircle, ShieldCheck,
} from "lucide-react";

export const Route = createFileRoute("/crm/employees")({
  head: () => ({ meta: [{ title: "Employees — CRM" }] }),
  component: EmployeesPage,
});

type Emp = {
  id: string;
  email: string | null;
  full_name: string | null;
  phone: string | null;
  roles: string[];
};

const ROLE_OPTIONS = [
  { value: "manager", label: "Manager", desc: "View + edit, no delete, no admin pages" },
  { value: "accountant", label: "Accountant", desc: "Finance & reports access" },
  { value: "sales_executive", label: "Sales Executive", desc: "Leads & customers" },
  { value: "back_office_executive", label: "Back Office Executive", desc: "Documents & operations" },
];

const ROLE_TONES: Record<string, string> = {
  admin: "bg-rose-100 text-rose-700 border-rose-200",
  manager: "bg-violet-100 text-violet-700 border-violet-200",
  accountant: "bg-teal-100 text-teal-700 border-teal-200",
  sales_executive: "bg-sky-100 text-sky-700 border-sky-200",
  back_office_executive: "bg-amber-100 text-amber-700 border-amber-200",
  operations: "bg-amber-100 text-amber-700 border-amber-200",
  insurance_executive: "bg-emerald-100 text-emerald-700 border-emerald-200",
  mf_executive: "bg-indigo-100 text-indigo-700 border-indigo-200",
};

function EmployeesPage() {
  const { isAdmin, loading } = useCrmAuth();
  const list = useServerFn(listEmployees);
  const create = useServerFn(createEmployee);
  const del = useServerFn(deleteEmployee);
  const reset = useServerFn(resetEmployeePassword);

  const [emps, setEmps] = useState<Emp[]>([]);
  const [busy, setBusy] = useState(false);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    email: "",
    full_name: "",
    phone: "",
    role: "sales_executive",
  });
  const [creds, setCreds] = useState<{
    email: string;
    password: string;
    phone: string;
    name: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  const load = async () => {
    setBusy(true);
    try {
      const r = await list();
      setEmps(r.employees as Emp[]);
    } catch (e: any) {
      toast.error(e.message);
    }
    setBusy(false);
  };

  useEffect(() => {
    if (isAdmin) load();
  }, [isAdmin]);

  if (loading) {
    return (
      <div className="flex h-60 items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-sky-500" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <Card className="p-10 text-center">
        <ShieldCheck className="mx-auto h-10 w-10 text-rose-400" />
        <h1 className="mt-3 text-lg font-bold text-slate-900">Admins Only</h1>
        <p className="mt-1 text-sm text-slate-500">
          Only admins can manage team members and assign CRM roles.
        </p>
      </Card>
    );
  }

  const submit = async () => {
    if (!form.email || !form.full_name || !form.phone) {
      toast.error("Fill all fields");
      return;
    }
    setBusy(true);
    try {
      const r = await create({ data: form as any });
      setCreds({
        email: r.employee.email,
        password: r.password,
        phone: r.employee.phone ?? "",
        name: r.employee.full_name ?? "",
      });
      setOpen(false);
      setForm({ email: "", full_name: "", phone: "", role: "sales_executive" });
      await load();
      toast.success("Employee created — login is ready");
    } catch (e: any) {
      toast.error(e.message);
    }
    setBusy(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this employee permanently? This will revoke their CRM access.")) return;
    try {
      await del({ data: { user_id: id } });
      toast.success("Deleted");
      await load();
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  const handleReset = async (e: Emp) => {
    try {
      const r = await reset({ data: { user_id: e.id } });
      setCreds({
        email: e.email ?? "",
        password: r.password,
        phone: e.phone ?? "",
        name: e.full_name ?? "",
      });
      toast.success("Password reset");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const credsText = creds
    ? `Aarthvaahini CRM Login\nName: ${creds.name}\nLogin URL: ${typeof window !== "undefined" ? window.location.origin : ""}/crm/login\nEmail: ${creds.email}\nPassword: ${creds.password}\n\nPlease change your password after first login.`
    : "";

  const waLink = creds && creds.phone
    ? `https://wa.me/${creds.phone.replace(/\D/g, "")}?text=${encodeURIComponent(credsText)}`
    : null;

  return (
    <div className="space-y-4">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 px-5 py-5 text-white shadow-lg shadow-sky-500/20">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/20 blur-3xl" />
        <div className="relative flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
              <UserPlus className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Team Members</h1>
              <p className="text-xs text-white/85">
                Add employees, assign a role, and they get their own CRM login instantly.
              </p>
            </div>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="bg-white text-sky-700 shadow-md hover:bg-sky-50">
                <UserPlus className="mr-2 h-4 w-4" /> Add Employee
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md bg-white">
              <DialogHeader>
                <DialogTitle>Add New Employee</DialogTitle>
                <DialogDescription>
                  A CRM login will be created automatically with an auto-generated password.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-3">
                <div>
                  <Label>Full Name</Label>
                  <Input
                    value={form.full_name}
                    onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                    placeholder="Ravi Kumar"
                  />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="ravi@company.com"
                  />
                </div>
                <div>
                  <Label>Phone (with country code)</Label>
                  <Input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+919876543210"
                  />
                </div>
                <div>
                  <Label>Role</Label>
                  <Select value={form.role} onValueChange={(v) => setForm({ ...form, role: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent className="max-h-[280px] overflow-y-auto">
                      {ROLE_OPTIONS.map((r) => (
                        <SelectItem key={r.value} value={r.value} className="py-2">
                          <div className="flex flex-col leading-tight">
                            <span className="font-medium">{r.label}</span>
                            <span className="mt-0.5 text-[11px] text-slate-500">{r.desc}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                <Button
                  onClick={submit}
                  disabled={busy}
                  className="bg-gradient-to-r from-sky-600 to-blue-600 text-white hover:opacity-90"
                >
                  {busy && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Create Login
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card className="overflow-hidden border-slate-200/70 p-0">
        <div className="flex items-center gap-2 border-b border-slate-100 bg-sky-50/60 p-4">
          <Users className="h-4 w-4 text-sky-600" />
          <h2 className="text-sm font-semibold text-slate-800">
            Staff with CRM Access ({emps.length})
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-left text-[11px] uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {busy && emps.length === 0 && (
                <tr><td colSpan={5} className="p-10 text-center">
                  <Loader2 className="mx-auto h-5 w-5 animate-spin text-slate-400" />
                </td></tr>
              )}
              {!busy && emps.length === 0 && (
                <tr><td colSpan={5} className="p-10 text-center text-slate-400">
                  No employees yet. Click "Add Employee" to create the first login.
                </td></tr>
              )}
              {emps.map((e) => (
                <tr key={e.id} className="border-t border-slate-100 hover:bg-sky-50/40">
                  <td className="px-4 py-3 font-medium text-slate-900">{e.full_name || "—"}</td>
                  <td className="px-4 py-3 text-slate-700">
                    <Mail className="mr-1 inline h-3 w-3 text-slate-400" />{e.email}
                  </td>
                  <td className="px-4 py-3 text-slate-700">
                    <Phone className="mr-1 inline h-3 w-3 text-slate-400" />{e.phone || "—"}
                  </td>
                  <td className="px-4 py-3">
                    {e.roles.map((r) => (
                      <Badge
                        key={r}
                        variant="outline"
                        className={`mr-1 border capitalize ${ROLE_TONES[r] ?? "bg-slate-100 text-slate-700 border-slate-200"}`}
                      >
                        {r.replace(/_/g, " ")}
                      </Badge>
                    ))}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Button
                      size="sm"
                      variant="outline"
                      className="mr-2 border-sky-200 text-sky-700 hover:bg-sky-50"
                      onClick={() => handleReset(e)}
                    >
                      <KeyRound className="mr-1 h-3 w-3" />Reset
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-rose-200 text-rose-600 hover:bg-rose-50"
                      onClick={() => handleDelete(e.id)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Credentials Modal */}
      <Dialog open={!!creds} onOpenChange={(o) => !o && setCreds(null)}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Login Credentials</DialogTitle>
            <DialogDescription>
              Save and share these now — the password will not be shown again.
            </DialogDescription>
          </DialogHeader>
          {creds && (
            <div className="space-y-3">
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800">
                Share these securely. Ask the employee to change their password after first login.
              </div>
              <pre className="overflow-x-auto rounded-lg border bg-slate-50 p-3 text-xs">{credsText}</pre>
              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(credsText);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1500);
                  }}
                  className="bg-gradient-to-r from-sky-600 to-blue-600 text-white hover:opacity-90"
                >
                  {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                  {copied ? "Copied" : "Copy"}
                </Button>
                {waLink && (
                  <a href={waLink} target="_blank" rel="noreferrer">
                    <Button className="bg-green-600 text-white hover:bg-green-700">
                      <MessageCircle className="mr-2 h-4 w-4" /> Send via WhatsApp
                    </Button>
                  </a>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
