// import { Link, Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
// import logoUrl from "@/assets/logo.png";
// import { useEffect, useState } from "react";
// import {
//   LayoutDashboard,
//   Users,
//   UserCircle2,
//   Banknote,
//   ShieldCheck,
//   TrendingUp,
//   CheckSquare,
//   FileText,
//   CalendarClock,
//   Handshake,
//   LogOut,
//   Loader2,
//   Search,
//   Bell,
//   Settings,
//   ChevronDown,
//   ChevronsLeft,
//   ChevronsRight,
//   Menu,
//   X,
//   FolderOpen,
//   Activity,
//   MessageCircle,
//   UserPlus,
//   XCircle,
//   Image as ImageIcon,

// } from "lucide-react";
// import { NotificationBell } from "@/components/crm/NotificationBell";
// import { useCrmAuth } from "@/hooks/useCrmAuth";
// import { supabase } from "@/integrations/supabase/client";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Badge } from "@/components/ui/badge";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";

// type NavItem = {
//   to: string;
//   label: string;
//   icon: typeof LayoutDashboard;
//   exact?: boolean;
// };

// const NAV: NavItem[] = [
//   { to: "/crm", label: "Dashboard", icon: LayoutDashboard, exact: true },
//   { to: "/crm/leads", label: "Leads", icon: Users },
//   { to: "/crm/customers", label: "Customers", icon: UserCircle2 },
//   { to: "/crm/rejected", label: "Rejected Leads", icon: XCircle },
//   { to: "/crm/employees", label: "Employees", icon: UserPlus },
//   { to: "/crm/partners", label: "Partners", icon: Handshake },
//   { to: "/crm/banks", label: "Banks", icon: Banknote },
//   { to: "/crm/loans", label: "Loans", icon: Banknote },
//   { to: "/crm/insurance", label: "Insurance", icon: ShieldCheck },
//   { to: "/crm/mutual-funds", label: "Mutual Funds", icon: TrendingUp },
//   { to: "/crm/documents", label: "Documents", icon: FolderOpen },
//   { to: "/crm/tasks", label: "Tasks", icon: CheckSquare },
//   { to: "/crm/schedule", label: "Schedule", icon: CalendarClock },
//   { to: "/crm/activity", label: "Activity", icon: Activity },
//   { to: "/crm/reports", label: "Reports & MIS", icon: FileText },
//   { to: "/crm/whatsapp", label: "WhatsApp", icon: MessageCircle },
//   { to: "/crm/cms", label: "Site Content", icon: ImageIcon },
//   { to: "/crm/settings", label: "Settings", icon: Settings },
// ];


// export function CrmLayout() {
//   const { user, isStaff, isPartner, primaryRole, loading } = useCrmAuth();
//   const nav = useNavigate();
//   const pathname = useRouterState({ select: (s) => s.location.pathname });
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [collapsed, setCollapsed] = useState<boolean>(() => {
//     if (typeof window === "undefined") return false;
//     return window.localStorage.getItem("crm-sidebar-collapsed") === "1";
//   });

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       window.localStorage.setItem("crm-sidebar-collapsed", collapsed ? "1" : "0");
//     }
//   }, [collapsed]);

//   const isLoginRoute = pathname === "/crm/login";

//   useEffect(() => {
//     if (loading || isLoginRoute) return;
//     if (!user) nav({ to: "/crm/login" });
//     else if (!isStaff && isPartner) nav({ to: "/partner" });
//     else if (!isStaff) nav({ to: "/crm/login", search: { unauthorized: "1" } as never });
//   }, [loading, user, isStaff, isPartner, nav, isLoginRoute]);

//   useEffect(() => setMobileOpen(false), [pathname]);

//   if (isLoginRoute) return <Outlet />;

//   if (loading || !user || !isStaff) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-sky-50">
//         <Loader2 className="h-6 w-6 animate-spin text-sky-400" />
//       </div>
//     );
//   }

//   const signOut = async () => {
//     await supabase.auth.signOut();
//     nav({ to: "/crm/login" });
//   };

//   const activeLabel =
//     NAV.find((n) => (n.exact ? pathname === n.to : pathname === n.to || pathname.startsWith(n.to + "/")))?.label ?? "CRM";

//   const initials = (user.email ?? "U").split("@")[0].slice(0, 2).toUpperCase();

//   return (
//     <TooltipProvider delayDuration={100}>
//       <div className="flex min-h-screen w-full bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50">
//         {/* Sidebar */}
//         <aside
//           className={cn(
//             "fixed inset-y-0 left-0 z-40 shrink-0 flex-col border-r border-sky-200 bg-gradient-to-b from-sky-50 via-sky-100 to-cyan-50 text-sky-900 shadow-lg shadow-sky-200/40 transition-all md:relative md:flex md:translate-x-0",
//             collapsed ? "w-16" : "w-64",
//             mobileOpen ? "flex translate-x-0 w-64" : "hidden -translate-x-full md:flex",
//           )}
//         >
//           <div className={cn("flex items-center border-b border-sky-200/60 px-3 py-4", collapsed ? "justify-center" : "justify-between px-5")}>
//             <Link to="/crm" className="flex items-center gap-2.5">
//               <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-sky-200">
//                 <img src={logoUrl} alt="Aarthvaahini" className="h-8 w-8 object-contain" />
//               </div>
//               {!collapsed && (
//                 <div>
//                   <div className="text-sm font-semibold tracking-tight text-sky-900">Aarthvaahini</div>
//                   <div className="text-[10px] uppercase tracking-wider text-sky-600"> CRM</div>
//                 </div>
//               )}
//             </Link>
//             {!collapsed && (
//               <button
//                 className="rounded-md p-1 text-sky-600 hover:bg-sky-100 md:hidden"
//                 onClick={() => setMobileOpen(false)}
//               >
//                 <X className="h-4 w-4" />
//               </button>
//             )}
//           </div>

//           {/* Collapse toggle (desktop) */}
//           <button
//             onClick={() => setCollapsed((v) => !v)}
//             className="absolute -right-3 top-20 hidden h-6 w-6 items-center justify-center rounded-full border border-sky-200 bg-white text-sky-600 shadow-md hover:bg-sky-50 md:flex"
//             title={collapsed ? "Expand" : "Collapse"}
//           >
//             {collapsed ? <ChevronsRight className="h-3.5 w-3.5" /> : <ChevronsLeft className="h-3.5 w-3.5" />}
//           </button>

//           <nav className={cn("flex-1 space-y-0.5 overflow-y-auto py-4", collapsed ? "px-2" : "px-3")}>
//             {!collapsed && (
//               <div className="px-2 pb-2 text-[10px] font-semibold uppercase tracking-wider text-sky-500">
//                 Main Menu
//               </div>
//             )}
//             {NAV.map((item) => {
//               const Icon = item.icon;
//               const active = item.exact
//                 ? pathname === item.to
//                 : pathname === item.to || pathname.startsWith(item.to + "/");
//               const link = (
//                 <Link
//                   key={item.to}
//                   to={item.to as never}
//                   className={cn(
//                     "group relative flex items-center gap-3 rounded-lg text-sm font-medium transition-all",
//                     collapsed ? "justify-center p-2.5" : "px-3 py-2.5",
//                     active
//                       ? "bg-white text-sky-700 shadow-sm ring-1 ring-sky-200"
//                       : "text-sky-800/80 hover:bg-white/70 hover:text-sky-900",
//                   )}
//                 >
//                   {active && !collapsed && (
//                     <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-sky-500" />
//                   )}
//                   <Icon className={cn("h-4 w-4", active ? "text-sky-600" : "text-sky-500/80 group-hover:text-sky-700")} />
//                   {!collapsed && item.label}
//                 </Link>
//               );
//               return collapsed ? (
//                 <Tooltip key={item.to}>
//                   <TooltipTrigger asChild>{link}</TooltipTrigger>
//                   <TooltipContent side="right">{item.label}</TooltipContent>
//                 </Tooltip>
//               ) : (
//                 link
//               );
//             })}
//           </nav>
//         </aside>

//         {mobileOpen && (
//           <div
//             className="fixed inset-0 z-30 bg-sky-900/30 backdrop-blur-sm md:hidden"
//             onClick={() => setMobileOpen(false)}
//           />
//         )}

//         <div className="flex min-w-0 flex-1 flex-col">
//           <header className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b border-sky-100 bg-white/80 px-4 backdrop-blur-md md:px-6">
//             <button
//               className="rounded-md p-2 text-sky-700 hover:bg-sky-50 md:hidden"
//               onClick={() => setMobileOpen(true)}
//             >
//               <Menu className="h-5 w-5" />
//             </button>
//             <div className="flex flex-col">
//               <div className="text-[10px] text-sky-500">CRM</div>
//               <div className="text-sm font-semibold text-slate-900">{activeLabel}</div>
//             </div>
//             <div className="relative ml-auto hidden w-72 md:block">
//               <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-sky-400" />
//               <Input
//                 placeholder="Search leads, customers…"
//                 className="h-9 border-sky-200 bg-sky-50/50 pl-9 text-sm focus-visible:bg-white"
//               />
//             </div>
//             <NotificationBell />
//             <Link to="/" className="hidden text-xs text-sky-600 hover:text-sky-800 md:inline">
//               ← Website
//             </Link>
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <button className="flex items-center gap-2 rounded-lg border border-sky-200 bg-white px-2 py-1.5 text-left transition hover:bg-sky-50">
//                   <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-[11px] font-semibold text-white shadow-sm">
//                     {initials}
//                   </div>
//                   <div className="hidden text-xs leading-tight sm:block">
//                     <div className="font-semibold text-slate-900">{user.email?.split("@")[0]}</div>
//                     <div className="capitalize text-slate-500">{primaryRole?.replace(/_/g, " ")}</div>
//                   </div>
//                   <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
//                 </button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent
//   align="end"
//   sideOffset={10}
//   className="z-[9999] w-80 overflow-hidden rounded-2xl border border-sky-100 bg-white p-0 shadow-2xl"
// >
//   {/* USER INFO */}
//   <div className="bg-gradient-to-r from-sky-500 to-cyan-500 p-4 text-white">
//     <div className="text-xs font-medium text-white/80">Signed in as</div>

//     <div className="mt-1 break-all text-sm font-semibold text-white">
//       {user.email}
//     </div>

//     <div className="mt-3 flex items-center justify-between gap-3">
//       <Badge className="border-0 bg-white/20 px-3 py-1 capitalize text-white hover:bg-white/20">
//         {primaryRole?.replace(/_/g, " ")}
//       </Badge>

//       <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">
//         Friday, 19 Jun
//       </span>
//     </div>
//   </div>

//   {/* MENU ITEMS */}
//   <div className="p-2">
//     <DropdownMenuItem className="cursor-pointer rounded-xl px-3 py-3 text-slate-700 focus:bg-sky-50">
//       <Settings className="mr-3 h-4 w-4 text-slate-600" />
//       <span className="font-medium">Preferences</span>
//     </DropdownMenuItem>

//     <DropdownMenuItem
//       onClick={signOut}
//       className="cursor-pointer rounded-xl px-3 py-3 text-red-600 focus:bg-red-50 focus:text-red-700"
//     >
//       <LogOut className="mr-3 h-4 w-4" />
//       <span className="font-medium">Sign out</span>
//     </DropdownMenuItem>
//   </div>
// </DropdownMenuContent>
//             </DropdownMenu>
//           </header>

//           <main className="flex-1 overflow-auto bg-gradient-to-br from-sky-50/60 via-white to-blue-50/40 p-4 md:p-6">
//             <Outlet />
//           </main>
//         </div>
//       </div>
//     </TooltipProvider>
//   );
// }
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type FormEvent } from "react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
} from "@/components/ui/dialog";

import { supabase } from "@/integrations/supabase/client";
import { CustomerProfileDialog } from "@/components/crm/CustomerProfileDialog";

import { Loader2, Banknote, Pencil, FileCheck2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/crm/loans")({
  component: LoansPage,
});

/* ----------------------------- CONSTANTS ----------------------------- */

const LOAN_STAGES = [
  "Lead",
  "Login",
  "Completed",
  "Sanction",
  "Under Process",
];

const DOC_LIST = [
  "PAN Card",
  "Aadhaar Card",
  "Income Proof / Salary Slips",
  "Bank Statement (6 months)",
  "Photograph",
  "Address Proof",
  "ITR / Form 16",
  "Business Proof",
  "Property Documents",
];

const LOAN_TYPES = [
  "Home Loan",
  "Personal Loan",
  "Business Loan",
  "Car / Vehicle Loan",
  "Education Loan",
  "Loan Against Property",
  "Gold Loan",
  "Working Capital Loan",
  "Machinery & Equipment Loan",
  "Credit Card",
];

/* ------------------------------- TYPES ------------------------------- */

type Row = {
  id: string;
  loan_type: string;
  loan_amount: number | null;
  lender_name: string | null;
  stage: string;
  sanction_amount: number | null;
  disbursement_amount: number | null;
  requested_amount: number | null;
  tenure_months: number | null;
  interest_rate: number | null;
  notes: string | null;
  documents_checklist: Record<string, boolean> | null;
  created_at: string;
  customer_id: string | null;
  lead_id: string | null;
  customer?: {
    customer_name: string | null;
    mobile: string | null;
  } | null;
};

/* ----------------------------- MAIN PAGE ----------------------------- */

function LoansPage() {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Row | null>(null);
  const [profileId, setProfileId] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("loan_cases")
      .select("*, customer:customers(customer_name, mobile)")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error(error.message);
      setRows([]);
      setLoading(false);
      return;
    }

    const activeLoanCases = ((data ?? []) as unknown as Row[]).filter(
      (row) => row.stage !== "Rejected",
    );

    setRows(activeLoanCases);
    setLoading(false);
  };

  useEffect(() => {
    load();

    const channel = supabase
      .channel("crm-loans-sync")
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
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "leads" },
        () => load(),
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, []);

  const stats = useMemo(() => {
    const total = rows.length;

    const sanctioned = rows.reduce(
      (amount, row) => amount + (Number(row.sanction_amount) || 0),
      0,
    );

    const disbursed = rows.reduce(
      (amount, row) => amount + (Number(row.disbursement_amount) || 0),
      0,
    );

    return {
      total,
      sanctioned,
      disbursed,
    };
  }, [rows]);

  const handleSaved = () => {
    setEditing(null);

    window.setTimeout(() => {
      load();
    }, 120);
  };

  return (
    <div className="space-y-4">
      {/* HEADER CARD */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-4 py-4 text-white shadow-md">
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/15 blur-2xl" />

        <div className="relative flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
              <Banknote className="h-5 w-5" />
            </div>

            <div>
              <h1 className="text-lg font-bold">Loan Cases</h1>

              <p className="text-xs text-white/80">
                Workflow: {LOAN_STAGES.join(" → ")}
              </p>
            </div>
          </div>

          <div className="flex gap-4 text-xs">
            <div>
              <div className="text-white/70">Cases</div>
              <div className="text-lg font-bold">{stats.total}</div>
            </div>

            <div>
              <div className="text-white/70">Sanctioned</div>
              <div className="text-lg font-bold">
                ₹{(stats.sanctioned / 1e5).toFixed(1)}L
              </div>
            </div>

            <div>
              <div className="text-white/70">Disbursed</div>
              <div className="text-lg font-bold">
                ₹{(stats.disbursed / 1e5).toFixed(1)}L
              </div>
            </div>
          </div>
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
            No active loan cases yet. Rejected cases are moved to Rejected
            Leads.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Mobile</TableHead>
                  <TableHead>Loan Type</TableHead>
                  <TableHead>Requested</TableHead>
                  <TableHead>Sanctioned</TableHead>
                  <TableHead>Disbursed</TableHead>
                  <TableHead>Tenure</TableHead>
                  <TableHead>ROI</TableHead>
                  <TableHead>Lender</TableHead>
                  <TableHead>Stage</TableHead>
                  <TableHead>Docs</TableHead>
                  <TableHead />
                </TableRow>
              </TableHeader>

              <TableBody>
                {rows.map((row) => {
                  const docCount = row.documents_checklist
                    ? Object.values(row.documents_checklist).filter(Boolean)
                        .length
                    : 0;

                  return (
                    <TableRow
                      key={row.id}
                      className="hover:bg-emerald-50/40"
                    >
                      <TableCell className="font-medium">
                        {row.customer_id ? (
                          <button
                            type="button"
                            onClick={() => setProfileId(row.customer_id)}
                            className="text-sky-700 hover:underline"
                          >
                            {row.customer?.customer_name ?? "—"}
                          </button>
                        ) : (
                          row.customer?.customer_name ?? "—"
                        )}
                      </TableCell>

                      <TableCell>{row.customer?.mobile ?? "—"}</TableCell>

                      <TableCell>{row.loan_type}</TableCell>

                      <TableCell>
                        {row.requested_amount
                          ? `₹${Number(row.requested_amount).toLocaleString(
                              "en-IN",
                            )}`
                          : "—"}
                      </TableCell>

                      <TableCell>
                        {row.sanction_amount
                          ? `₹${Number(row.sanction_amount).toLocaleString(
                              "en-IN",
                            )}`
                          : "—"}
                      </TableCell>

                      <TableCell>
                        {row.disbursement_amount
                          ? `₹${Number(
                              row.disbursement_amount,
                            ).toLocaleString("en-IN")}`
                          : "—"}
                      </TableCell>

                      <TableCell>
                        {row.tenure_months ? `${row.tenure_months}m` : "—"}
                      </TableCell>

                      <TableCell>
                        {row.interest_rate ? `${row.interest_rate}%` : "—"}
                      </TableCell>

                      <TableCell>{row.lender_name ?? "—"}</TableCell>

                      <TableCell>
                        <Badge variant="secondary">{row.stage}</Badge>
                      </TableCell>

                      <TableCell>
                        <Badge variant="outline" className="gap-1">
                          <FileCheck2 className="h-3 w-3" />
                          {docCount}/{DOC_LIST.length}
                        </Badge>
                      </TableCell>

                      <TableCell>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setEditing(row)}
                        >
                          <Pencil className="h-3.5 w-3.5" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        )}
      </Card>

      {/* EDIT DIALOG */}
      <LoanEditDialog
        row={editing}
        onClose={() => setEditing(null)}
        onSaved={handleSaved}
      />

      {/* CUSTOMER PROFILE */}
      <CustomerProfileDialog
        open={!!profileId}
        onOpenChange={(value) => !value && setProfileId(null)}
        customerId={profileId}
      />
    </div>
  );
}

/* ---------------------------- EDIT DIALOG ---------------------------- */

function LoanEditDialog({
  row,
  onClose,
  onSaved,
}: {
  row: Row | null;
  onClose: () => void;
  onSaved: () => void;
}) {
  const [form, setForm] = useState({
    loan_type: "",
    lender_name: "",
    stage: "Under Process",
    requested_amount: "",
    sanction_amount: "",
    disbursement_amount: "",
    tenure_months: "",
    interest_rate: "",
    notes: "",
    docs: {} as Record<string, boolean>,
  });

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!row) return;

    setForm({
      loan_type: row.loan_type ?? "",
      lender_name: row.lender_name ?? "",
      stage: LOAN_STAGES.includes(row.stage) ? row.stage : "Under Process",
      requested_amount: row.requested_amount?.toString() ?? "",
      sanction_amount: row.sanction_amount?.toString() ?? "",
      disbursement_amount: row.disbursement_amount?.toString() ?? "",
      tenure_months: row.tenure_months?.toString() ?? "",
      interest_rate: row.interest_rate?.toString() ?? "",
      notes: row.notes ?? "",
      docs: row.documents_checklist ?? {},
    });
  }, [row]);

  if (!row) return null;

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setSaving(true);

    const nextStage = form.stage;

    const { error: loanError } = await supabase
      .from("loan_cases")
      .update({
        loan_type: form.loan_type,
        lender_name: form.lender_name || null,
        stage: nextStage,
        requested_amount: form.requested_amount
          ? Number(form.requested_amount)
          : null,
        sanction_amount: form.sanction_amount
          ? Number(form.sanction_amount)
          : null,
        disbursement_amount: form.disbursement_amount
          ? Number(form.disbursement_amount)
          : null,
        loan_amount: form.sanction_amount
          ? Number(form.sanction_amount)
          : form.requested_amount
            ? Number(form.requested_amount)
            : null,
        tenure_months: form.tenure_months ? Number(form.tenure_months) : null,
        interest_rate: form.interest_rate ? Number(form.interest_rate) : null,
        notes: form.notes || null,
        documents_checklist: form.docs,
      })
      .eq("id", row.id);

    if (loanError) {
      setSaving(false);
      toast.error(loanError.message);
      return;
    }

    setSaving(false);
    toast.success("Loan case updated");
    onSaved();
  };

  const inputCls =
    "h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100";

  return (
    <Dialog open={!!row} onOpenChange={(value) => !value && !saving && onClose()}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle>
            Edit Loan Case — {row.customer?.customer_name ?? "Customer"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={submit} className="space-y-4">
          {/* BASIC DETAILS */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label>Loan Type</Label>

              <select
                className={`${inputCls} mt-1`}
                value={form.loan_type}
                onChange={(event) =>
                  setForm({ ...form, loan_type: event.target.value })
                }
              >
                {LOAN_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <Label>Stage</Label>

              <select
                className={`${inputCls} mt-1`}
                value={form.stage}
                onChange={(event) =>
                  setForm({ ...form, stage: event.target.value })
                }
              >
                {LOAN_STAGES.map((stage) => (
                  <option key={stage} value={stage}>
                    {stage}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-span-2">
              <Label>Lender / Bank</Label>

              <Input
                className="mt-1"
                value={form.lender_name}
                onChange={(event) =>
                  setForm({ ...form, lender_name: event.target.value })
                }
              />
            </div>

            <div>
              <Label>Requested Amount (₹)</Label>

              <Input
                type="number"
                className="mt-1"
                value={form.requested_amount}
                onChange={(event) =>
                  setForm({
                    ...form,
                    requested_amount: event.target.value,
                  })
                }
              />
            </div>

            <div>
              <Label>Sanctioned Amount (₹)</Label>

              <Input
                type="number"
                className="mt-1"
                value={form.sanction_amount}
                onChange={(event) =>
                  setForm({
                    ...form,
                    sanction_amount: event.target.value,
                  })
                }
              />
            </div>

            <div>
              <Label>Disbursed Amount (₹)</Label>

              <Input
                type="number"
                className="mt-1"
                value={form.disbursement_amount}
                onChange={(event) =>
                  setForm({
                    ...form,
                    disbursement_amount: event.target.value,
                  })
                }
              />
            </div>

            <div>
              <Label>Tenure (months)</Label>

              <Input
                type="number"
                className="mt-1"
                value={form.tenure_months}
                onChange={(event) =>
                  setForm({
                    ...form,
                    tenure_months: event.target.value,
                  })
                }
              />
            </div>

            <div>
              <Label>Interest Rate (%)</Label>

              <Input
                type="number"
                step="0.01"
                className="mt-1"
                value={form.interest_rate}
                onChange={(event) =>
                  setForm({
                    ...form,
                    interest_rate: event.target.value,
                  })
                }
              />
            </div>
          </div>

          {/* NOTES */}
          <div>
            <Label>Notes</Label>

            <Textarea
              rows={2}
              className="mt-1"
              value={form.notes}
              onChange={(event) =>
                setForm({ ...form, notes: event.target.value })
              }
            />
          </div>

          {/* DOCUMENTS */}
          <div>
            <Label className="mb-2 block">Documents Received</Label>

            <div className="grid grid-cols-2 gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3">
              {DOC_LIST.map((documentName) => (
                <label
                  key={documentName}
                  className="flex items-center gap-2 text-sm"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-emerald-600"
                    checked={!!form.docs[documentName]}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        docs: {
                          ...form.docs,
                          [documentName]: event.target.checked,
                        },
                      })
                    }
                  />

                  {documentName}
                </label>
              ))}
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              disabled={saving}
              onClick={onClose}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={saving}
              className="bg-emerald-600 text-white hover:bg-emerald-700"
            >
              {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save Changes
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}