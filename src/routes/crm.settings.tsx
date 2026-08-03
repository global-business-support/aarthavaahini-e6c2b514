import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { useCrmAuth } from "@/hooks/useCrmAuth";
import {
  createEmployee,
  listEmployees,
  deleteEmployee,
  resetEmployeePassword,
} from "@/lib/employees.functions";
import { toast } from "sonner";
import {
  Settings as SettingsIcon,
  Loader2,
  Save,
  LogOut,
  ShieldPlus,
  Copy,
  Check,
  MessageCircle,
  Trash2,
  KeyRound,
  ShieldCheck,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/crm/settings")({
  component: SettingsPage,
});

type Role = "admin" | "coordinator" | "sales_executive";

type PermissionsMap = Record<string, boolean>;

type SystemUserPermission = {
  id: string;
  email: string | null;
  full_name: string | null;
  role: Role;
  permissions: PermissionsMap;
};

const AVAILABLE_TABS = [
  { id: "leads", label: "Leads" },
  { id: "customers", label: "Customers" },
  { id: "loans", label: "Loans" },
  { id: "insurance", label: "Insurance" },
  { id: "mutual_funds", label: "Mutual Funds" },
  { id: "tasks", label: "Tasks" },
  { id: "reports", label: "Reports" },
];

const DEFAULT_ROLE_PERMISSIONS: Record<Role, PermissionsMap> = {
  admin: {
    leads: true,
    customers: true,
    loans: true,
    insurance: true,
    mutual_funds: true,
    tasks: true,
    reports: true,
  },
  coordinator: {
    leads: true,
    customers: true,
    loans: true,
    insurance: true,
    mutual_funds: true,
    tasks: true,
    reports: false,
  },
  sales_executive: {
    leads: true,
    customers: false,
    loans: false,
    insurance: false,
    mutual_funds: false,
    tasks: true,
    reports: false,
  },
};

function SettingsPage() {
  const { user, primaryRole, isAdmin } = useCrmAuth();
  const isSuperAdmin =
    (user?.email ?? "").toLowerCase() === "jeet0731@gmail.com";
  const nav = useNavigate();
  const create = useServerFn(createEmployee);
  const list = useServerFn(listEmployees);
  const remove = useServerFn(deleteEmployee);
  const resetPwd = useServerFn(resetEmployeePassword);

  const [profile, setProfile] = useState({ full_name: "", phone: "" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Add-admin dialog state
  const [adminOpen, setAdminOpen] = useState(false);
  const [adminBusy, setAdminBusy] = useState(false);
  const [adminForm, setAdminForm] = useState({
    email: "",
    full_name: "",
    phone: "",
    password: "",
  });
  const [showPwd, setShowPwd] = useState(false);
  const [creds, setCreds] = useState<{
    email: string;
    password: string;
    phone: string;
    name: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  // Admin list state
  type AdminRow = {
    id: string;
    email: string | null;
    full_name: string | null;
    phone: string | null;
    roles: string[];
  };
  const [admins, setAdmins] = useState<AdminRow[]>([]);
  const [adminsLoading, setAdminsLoading] = useState(false);

  // Permissions table state
  const [permUsers, setPermUsers] = useState<SystemUserPermission[]>([]);
  const [permLoading, setPermLoading] = useState(false);
  const [savingPermId, setSavingPermId] = useState<string | null>(null);

  const loadAdmins = async () => {
    if (!isSuperAdmin) return;
    setAdminsLoading(true);
    try {
      const r = await list();
      setAdmins(
        (r.employees as AdminRow[]).filter((e) => e.roles.includes("admin"))
      );
    } catch (e: any) {
      toast.error(e.message ?? "Failed to load admins");
    }
    setAdminsLoading(false);
  };

  const loadPermissions = async () => {
    if (!isAdmin && !isSuperAdmin) return;
    setPermLoading(true);
    try {
      const { data, error } = await supabase.from("profiles").select("*");
      if (!error && data) {
        const formatted: SystemUserPermission[] = data.map((u: any) => {
          const userRole: Role = (u.role as Role) || "sales_executive";
          return {
            id: u.id,
            email: u.email || "—",
            full_name: u.full_name || u.name || "Employee",
            role: userRole,
            permissions: u.permissions || { ...DEFAULT_ROLE_PERMISSIONS[userRole] },
          };
        });
        setPermUsers(formatted);
      }
    } catch (e: any) {
      toast.error(e.message ?? "Failed to load permissions");
    }
    setPermLoading(false);
  };

  useEffect(() => {
    loadAdmins();
    loadPermissions();
  }, [isSuperAdmin, isAdmin]);

  useEffect(() => {
    if (!user) return;
    (async () => {
      const { data } = await supabase
        .from("profiles")
        .select("full_name, phone")
        .eq("id", user.id)
        .maybeSingle();
      if (data)
        setProfile({
          full_name: data.full_name ?? "",
          phone: data.phone ?? "",
        });
      setLoading(false);
    })();
  }, [user]);

  const save = async () => {
    if (!user) return;
    setSaving(true);
    const { error } = await supabase
      .from("profiles")
      .update({ full_name: profile.full_name, phone: profile.phone })
      .eq("id", user.id);
    setSaving(false);
    if (error) return toast.error(error.message);
    toast.success("Profile updated");
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    nav({ to: "/crm/login" });
  };

  const addAdmin = async () => {
    if (!adminForm.email || !adminForm.full_name || !adminForm.phone) {
      toast.error("Fill all fields");
      return;
    }
    setAdminBusy(true);
    try {
      const payload: any = { ...adminForm, role: "admin" };
      if (!payload.password || payload.password.length < 8)
        delete payload.password;
      const r = await create({ data: payload });
      setCreds({
        email: r.employee.email,
        password: r.password,
        phone: r.employee.phone ?? "",
        name: r.employee.full_name ?? "",
      });
      setAdminOpen(false);
      setAdminForm({ email: "", full_name: "", phone: "", password: "" });
      toast.success("Admin created — login is ready");
      loadAdmins();
      loadPermissions();
    } catch (e: any) {
      toast.error(e.message);
    }
    setAdminBusy(false);
  };

  // Handle role change for permission matrix
  const handleRoleChange = (userId: string, newRole: Role) => {
    setPermUsers((prev) =>
      prev.map((u) => {
        if (u.id === userId) {
          return {
            ...u,
            role: newRole,
            permissions: { ...DEFAULT_ROLE_PERMISSIONS[newRole] },
          };
        }
        return u;
      })
    );
  };

  // Toggle tab checkbox
  const handleCheckboxToggle = (
    userId: string,
    tabId: string,
    checked: boolean
  ) => {
    setPermUsers((prev) =>
      prev.map((u) => {
        if (u.id === userId) {
          return {
            ...u,
            permissions: {
              ...u.permissions,
              [tabId]: checked,
            },
          };
        }
        return u;
      })
    );
  };

  // Save employee permissions
  const saveUserPermissions = async (u: SystemUserPermission) => {
    setSavingPermId(u.id);
    const { error } = await supabase
      .from("profiles")
      .update({
        role: u.role,
        permissions: u.permissions,
      })
      .eq("id", u.id);

    setSavingPermId(null);
    if (error) {
      toast.error("Failed to save permissions: " + error.message);
    } else {
      toast.success(`Permissions updated for ${u.full_name}`);
    }
  };

  const credsText = creds
    ? `Aarthvaahini CRM Admin Login\nName: ${creds.name}\nLogin URL: ${
        typeof window !== "undefined" ? window.location.origin : ""
      }/crm/login\nEmail: ${creds.email}\nPassword: ${
        creds.password
      }\n\nPlease change your password after first login.`
    : "";
  const waLink =
    creds && creds.phone
      ? `https://wa.me/${creds.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
          credsText
        )}`
      : null;

  return (
    <div className="space-y-4">
      {/* Top Banner */}
      <div className="rounded-xl bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 px-4 py-3 text-white shadow-md">
        <div className="flex items-center gap-3">
          <SettingsIcon className="h-5 w-5" />
          <div>
            <div className="text-sm font-semibold">Settings</div>
            <div className="text-[11px] text-white/80">
              Manage your profile, permissions, and account
            </div>
          </div>
        </div>
      </div>

      {/* Account Info Card */}
      <Card className="p-5">
        <h2 className="text-sm font-semibold text-slate-900">Account</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div>
            <Label className="text-xs">Email</Label>
            <Input value={user?.email ?? ""} disabled className="bg-slate-50" />
          </div>
          <div>
            <Label className="text-xs">Role</Label>
<<<<<<< HEAD
            <div className="mt-1.5">
              <Badge variant="secondary" className="capitalize">
                {primaryRole?.replace(/_/g, " ") ?? "user"}
              </Badge>
            </div>
=======
            <div className="mt-1.5"><Badge variant="secondary" className="capitalize">{isAdmin ? "Admin" : (primaryRole?.replace(/_/g, " ") ?? (isSuperAdmin ? "Admin" : "Staff"))}</Badge></div>
>>>>>>> ef512b67628c9f23bd4dce4bc5838e826a816535
          </div>
        </div>
      </Card>

      {/* Super Admin Section - Add Admin */}
      {isSuperAdmin && (
        <Card className="p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">Admins</h2>
              <p className="mt-1 text-xs text-slate-500">
                Create a new admin login. The password shows only once — save or
                share it right away.
              </p>
            </div>
            <Dialog open={adminOpen} onOpenChange={setAdminOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:opacity-90">
                  <ShieldPlus className="mr-2 h-4 w-4" /> Add Admin
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md bg-white">
                <DialogHeader>
                  <DialogTitle>Add New Admin</DialogTitle>
                  <DialogDescription>
                    An admin CRM login will be created. A strong password is
                    auto-generated and shown once.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-3">
                  <div>
                    <Label>Full Name</Label>
                    <Input
                      value={adminForm.full_name}
                      onChange={(e) =>
                        setAdminForm({ ...adminForm, full_name: e.target.value })
                      }
                      placeholder="e.g. Priya Sharma"
                    />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      value={adminForm.email}
                      onChange={(e) =>
                        setAdminForm({ ...adminForm, email: e.target.value })
                      }
                      placeholder="priya@company.com"
                    />
                  </div>
                  <div>
                    <Label>Phone (with country code)</Label>
                    <Input
                      value={adminForm.phone}
                      onChange={(e) =>
                        setAdminForm({ ...adminForm, phone: e.target.value })
                      }
                      placeholder="+919876543210"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <Label>Password (optional)</Label>
                      <button
                        type="button"
                        className="text-[11px] font-medium text-sky-600 hover:underline"
                        onClick={() => setShowPwd((s) => !s)}
                      >
                        {showPwd ? "Hide" : "Show"}
                      </button>
                    </div>
                    <Input
                      type={showPwd ? "text" : "password"}
                      value={adminForm.password}
                      onChange={(e) =>
                        setAdminForm({ ...adminForm, password: e.target.value })
                      }
                      placeholder="Leave blank to auto-generate (min 8 chars)"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setAdminOpen(false)}>
                    Cancel
                  </Button>
                  <Button
                    onClick={addAdmin}
                    disabled={adminBusy}
                    className="bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:opacity-90"
                  >
                    {adminBusy && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Create Admin
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </Card>
      )}

      {/* Admin Users Table */}
      {isSuperAdmin && (
        <Card className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-rose-600" /> Admin Users
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                All admin accounts on this CRM.
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={loadAdmins}
              disabled={adminsLoading}
            >
              {adminsLoading ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                "Refresh"
              )}
            </Button>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-xs uppercase tracking-wide text-slate-500">
                  <th className="pb-2">Name</th>
                  <th className="pb-2">Email</th>
                  <th className="pb-2">Phone</th>
                  <th className="pb-2 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {admins.length === 0 && !adminsLoading && (
                  <tr>
                    <td colSpan={4} className="py-6 text-center text-xs text-slate-400">
                      No admins yet.
                    </td>
                  </tr>
                )}
                {admins.map((a) => {
                  const isSuper =
                    (a.email ?? "").toLowerCase() === "jeet0731@gmail.com";
                  return (
                    <tr key={a.id} className="border-b last:border-0">
                      <td className="py-2.5 font-medium text-slate-900">
                        {a.full_name || "—"}
                        {isSuper && (
                          <Badge
                            className="ml-2 bg-amber-100 text-amber-700 border-amber-200"
                            variant="outline"
                          >
                            Super Admin
                          </Badge>
                        )}
                      </td>
                      <td className="py-2.5 text-slate-600">{a.email || "—"}</td>
                      <td className="py-2.5 text-slate-600">{a.phone || "—"}</td>
                      <td className="py-2.5 text-right">
                        {!isSuper && (
                          <div className="flex justify-end gap-1">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={async () => {
                                try {
                                  const r = await resetPwd({
                                    data: { user_id: a.id },
                                  });
                                  setCreds({
                                    email: a.email ?? "",
                                    password: r.password,
                                    phone: a.phone ?? "",
                                    name: a.full_name ?? "",
                                  });
                                } catch (e: any) {
                                  toast.error(e.message);
                                }
                              }}
                            >
                              <KeyRound className="h-3.5 w-3.5" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-rose-200 text-rose-600 hover:bg-rose-50"
                              onClick={async () => {
                                if (!confirm(`Delete admin ${a.email}?`)) return;
                                try {
                                  await remove({ data: { user_id: a.id } });
                                  toast.success("Admin removed");
                                  loadAdmins();
                                  loadPermissions();
                                } catch (e: any) {
                                  toast.error(e.message);
                                }
                              }}
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </Button>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* Permissions Matrix with Checkboxes (FIX FOR PAPER REQUIREMENT) */}
      {(isAdmin || isSuperAdmin) && (
        <Card className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                <Users className="h-4 w-4 text-indigo-600" /> Employee Tab Permissions Matrix
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                Select role and check/uncheck checkboxes to assign tab access permissions to employees.
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={loadPermissions}
              disabled={permLoading}
            >
              {permLoading ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                "Refresh"
              )}
            </Button>
          </div>

          <div className="mt-4 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>Role</TableHead>
                  {AVAILABLE_TABS.map((t) => (
                    <TableHead key={t.id} className="text-center text-xs">
                      {t.label}
                    </TableHead>
                  ))}
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {permUsers.length === 0 && !permLoading && (
                  <TableRow>
                    <TableCell
                      colSpan={AVAILABLE_TABS.length + 3}
                      className="text-center text-xs text-slate-400 py-6"
                    >
                      No employees found.
                    </TableCell>
                  </TableRow>
                )}
                {permUsers.map((u) => (
                  <TableRow key={u.id}>
                    <TableCell>
                      <div className="font-semibold text-slate-900 text-xs">
                        {u.full_name}
                      </div>
                      <div className="text-[11px] text-slate-500">{u.email}</div>
                    </TableCell>
                    <TableCell>
                      <select
                        className="h-8 rounded border border-input bg-white px-2 text-xs font-medium"
                        value={u.role}
                        onChange={(e) =>
                          handleRoleChange(u.id, e.target.value as Role)
                        }
                      >
                        <option value="admin">Admin</option>
                        <option value="coordinator">Co-ordinator</option>
                        <option value="sales_executive">Sales Executive</option>
                      </select>
                    </TableCell>

                    {/* Checkboxes for each Tab Access */}
                    {AVAILABLE_TABS.map((tab) => (
                      <TableCell key={tab.id} className="text-center">
                        <Checkbox
                          checked={!!u.permissions?.[tab.id]}
                          disabled={u.role === "admin"} // Admin has all tabs active by default
                          onCheckedChange={(checked) =>
                            handleCheckboxToggle(u.id, tab.id, !!checked)
                          }
                        />
                      </TableCell>
                    ))}

                    <TableCell className="text-right">
                      <Button
                        size="sm"
                        className="h-8 gap-1 bg-indigo-600 text-white hover:bg-indigo-700"
                        disabled={savingPermId === u.id}
                        onClick={() => saveUserPermissions(u)}
                      >
                        {savingPermId === u.id ? (
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        ) : (
                          <Save className="h-3.5 w-3.5" />
                        )}
                        Save
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      )}

      {/* User Profile Settings Card */}
      <Card className="p-5">
        <h2 className="text-sm font-semibold text-slate-900">Profile</h2>
        {loading ? (
          <div className="flex h-24 items-center justify-center">
            <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div>
              <Label className="text-xs">Full Name</Label>
              <Input
                value={profile.full_name}
                onChange={(e) =>
                  setProfile({ ...profile, full_name: e.target.value })
                }
                className="bg-white"
              />
            </div>
            <div>
              <Label className="text-xs">Phone</Label>
              <Input
                value={profile.phone}
                onChange={(e) =>
                  setProfile({ ...profile, phone: e.target.value })
                }
                className="bg-white"
              />
            </div>
            <div className="sm:col-span-2 flex justify-end gap-2">
              <Button
                onClick={save}
                disabled={saving}
                className="bg-gradient-to-r from-sky-600 to-blue-600 text-white"
              >
                {saving ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Save className="mr-2 h-4 w-4" />
                )}
                Save
              </Button>
            </div>
          </div>
        )}
      </Card>

      {/* Logout Session Card */}
      <Card className="p-5">
        <h2 className="text-sm font-semibold text-slate-900">Session</h2>
        <p className="mt-1 text-xs text-slate-500">
          Sign out of the CRM on this device.
        </p>
        <Button
          onClick={signOut}
          variant="outline"
          className="mt-3 border-red-200 text-red-600 hover:bg-red-50"
        >
          <LogOut className="mr-2 h-4 w-4" /> Sign out
        </Button>
      </Card>

      {/* Credentials Modal */}
      <Dialog open={!!creds} onOpenChange={(o) => !o && setCreds(null)}>
        <DialogContent className="max-w-md bg-white sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Admin Login Credentials</DialogTitle>
            <DialogDescription>
              Save and share these now — the password will not be shown again.
            </DialogDescription>
          </DialogHeader>
          {creds && (
            <div className="space-y-3">
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800">
                Share securely. Ask the admin to change their password after first
                login.
              </div>
              <pre className="max-w-full whitespace-pre-wrap break-words rounded-lg border bg-slate-50 p-3 text-xs font-mono text-slate-700">
                {credsText}
              </pre>
              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(credsText);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1500);
                  }}
                  className="bg-gradient-to-r from-sky-600 to-blue-600 text-white hover:opacity-90"
                >
                  {copied ? (
                    <Check className="mr-2 h-4 w-4" />
                  ) : (
                    <Copy className="mr-2 h-4 w-4" />
                  )}
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