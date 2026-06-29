
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  Loader2,
  Plus,
  Search,
  MessageCircle,
  Sparkles,
  StickyNote,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import { CustomerProfileDialog } from "@/components/crm/CustomerProfileDialog";


export const Route = createFileRoute("/crm/leads")({
  component: LeadsPage,
});

const LEAD_STAGES = [
  "New",
  "Qualified",
  "Approved",
  "Rejected",
  "Disbursed",
  "Closed",
] as const;

type Stage = (typeof LEAD_STAGES)[number];

const STAGE_STYLES: Record<
  Stage,
  { trigger: string; dot: string; option: string }
> = {
  New: {
    trigger: "border-sky-300 bg-sky-50 text-sky-700",
    dot: "bg-sky-500",
    option: "text-sky-700",
  },
  Qualified: {
    trigger: "border-violet-300 bg-violet-50 text-violet-700",
    dot: "bg-violet-500",
    option: "text-violet-700",
  },
  Approved: {
    trigger: "border-emerald-300 bg-emerald-50 text-emerald-700",
    dot: "bg-emerald-500",
    option: "text-emerald-700",
  },
  Rejected: {
    trigger: "border-rose-300 bg-rose-50 text-rose-700",
    dot: "bg-rose-500",
    option: "text-rose-700",
  },
  Disbursed: {
    trigger: "border-amber-300 bg-amber-50 text-amber-700",
    dot: "bg-amber-500",
    option: "text-amber-700",
  },
  Closed: {
    trigger: "border-slate-300 bg-slate-100 text-slate-700",
    dot: "bg-slate-500",
    option: "text-slate-700",
  },
};

const PRODUCT_TYPES = ["loan", "insurance", "mutual_fund"] as const;

const LEAD_SOURCES = [
  "Website",
  "Referral",
  "Walk-in",
  "Campaign",
  "Cold Call",
  "Partner",
  "WhatsApp",
  "Social Media",
] as const;

const LOAN_TYPES = [
  "Home Loan",
  "Personal Loan",
  "Business Loan",
  "Working Capital Loan",
  "Machinery & Equipment Loan",
  "Car / Vehicle Loan",
  "Education Loan",
  "Loan Against Property",
  "Gold Loan",
  "Project Loan",
  "Credit Card",
] as const;

const SUB_LOAN_TYPES: Record<string, string[]> = {
  "Home Loan": [
    "Home Purchase",
    "Home Construction",
    "Plot Purchase",
    "Home Improvement",
    "Balance Transfer",
    "Top-up Loan",
  ],
  "Personal Loan": [
    "Salaried",
    "Self-Employed",
    "Wedding",
    "Travel",
    "Medical Emergency",
    "Debt Consolidation",
  ],
  "Business Loan": [
    "Working Capital",
    "Term Loan",
    "Machinery Loan",
    "MSME",
    "Overdraft",
    "Invoice Discounting",
  ],
  "Working Capital Loan": [
    "Cash Credit",
    "Overdraft",
    "Invoice Financing",
    "Inventory Funding",
    "Vendor Payment Funding",
  ],
  "Machinery & Equipment Loan": [
    "New Machinery Loan",
    "Used Machinery Loan",
    "Equipment Finance",
    "Industrial Tools Finance",
    "Manufacturing Equipment Loan",
  ],
  "Car / Vehicle Loan": [
    "New Car",
    "Used Car",
    "Two Wheeler",
    "Commercial Vehicle",
  ],
  "Education Loan": ["Study in India", "Study Abroad", "Skill Development"],
  "Loan Against Property": [
    "Residential Property",
    "Commercial Property",
    "Industrial Property",
  ],
  "Gold Loan": ["Personal Gold Loan", "Agriculture Gold Loan"],
  "Project Loan": ["Infrastructure", "Real Estate", "Renewable Energy"],
  "Credit Card": ["Regular", "Premium", "Business", "Travel Card"],
};

const BANK_OPTIONS = [
  "HDFC Bank",
  "ICICI Bank",
  "State Bank of India",
  "Axis Bank",
  "Kotak Mahindra Bank",
  "IDFC First Bank",
  "Yes Bank",
  "IndusInd Bank",
  "Punjab National Bank",
  "Bank of Baroda",
  "Canara Bank",
  "Union Bank of India",
  "Federal Bank",
  "RBL Bank",
  "Bajaj Finserv",
  "Tata Capital",
  "Aditya Birla Finance",
  "L&T Finance",
  "Mahindra Finance",
  "IDBI Bank",
  "Piramal Finance",
  "DCB Bank",
  "Karnataka Bank",
  "South Indian Bank",
];

type Lead = {
  id: string;
  lead_name: string | null;
  full_name: string | null;
  phone: string;
  email: string | null;
  pan: string | null;
  city: string | null;
  state: string | null;
  product_type: string;
  lead_source: string | null;
  status: string;
  assigned_to: string | null;
  created_at: string;
  cibil_score: number | null;
  loan_type: string | null;
  loan_sub_type: string | null;
  loan_amount: number | null;
  bank_name: string | null;
};

type Staff = {
  id: string;
  full_name: string | null;
  email: string | null;
  role: string;
};

function normaliseStage(s: string): Stage {
  if ((LEAD_STAGES as readonly string[]).includes(s)) return s as Stage;
  if (s === "Contacted") return "New";
  if (s === "Docs Pending" || s === "Login Ready") return "Qualified";
  if (s === "Sanction Pending") return "Approved";
  if (s === "Converted") return "Disbursed";
  if (s === "Rejected") return "Rejected";
  return "New";
}

function cibilBadge(score: number | null) {
  if (score == null) return "bg-slate-100 text-slate-500 border-slate-200";
  if (score >= 750) return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (score >= 650) return "bg-amber-50 text-amber-700 border-amber-200";
  return "bg-rose-50 text-rose-700 border-rose-200";
}

function LeadsPage() {
  const { user, isAdmin } = useAuth();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [staff, setStaff] = useState<Staff[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [stageFilter, setStageFilter] = useState<string>("all");
  const [assigneeFilter, setAssigneeFilter] = useState<string>("all");
  const [bankFilter, setBankFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("recent");
  const [open, setOpen] = useState(false);
  const [noteLead, setNoteLead] = useState<Lead | null>(null);
  const [approveLead, setApproveLead] = useState<Lead | null>(null);
  const [rejectLead, setRejectLead] = useState<Lead | null>(null);
  const [profileLead, setProfileLead] = useState<string | null>(null);



  const rowSelectClass =
    "h-10 w-[190px] rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100";

  const load = async () => {
    setLoading(true);

    const [{ data, error }, roles] = await Promise.all([
      supabase
        .from("leads")
        .select(
          "id, lead_name, full_name, phone, email, pan, city, state, product_type, lead_source, status, assigned_to, created_at, cibil_score, loan_type, loan_sub_type, loan_amount, bank_name",
        )
        .order("created_at", { ascending: false })
        .limit(500),
      supabase.from("user_roles").select("user_id, role"),
    ]);

    if (error) toast.error(error.message);

    setLeads((data ?? []) as Lead[]);

    const ids = (roles.data ?? []).map((r: { user_id: string }) => r.user_id);

    if (ids.length) {
      const { data: profs } = await supabase
        .from("profiles")
        .select("id, full_name, email")
        .in("id", ids);

      const byId = new Map((profs ?? []).map((p) => [p.id, p]));

      setStaff(
        (roles.data ?? []).map((r: { user_id: string; role: string }) => ({
          id: r.user_id,
          full_name: byId.get(r.user_id)?.full_name ?? null,
          email: byId.get(r.user_id)?.email ?? null,
          role: r.role,
        })),
      );
    } else {
      setStaff([]);
    }

    setLoading(false);
  };

  useEffect(() => {
    load();
    const channel = supabase
      .channel("crm-leads-sync")
      .on("postgres_changes", { event: "*", schema: "public", table: "leads" }, () => load())
      .on("postgres_changes", { event: "*", schema: "public", table: "customers" }, () => load())
      .subscribe();
    return () => { channel.unsubscribe(); };
  }, []);

  const filtered = leads
    .filter((l) => {
      const term = filter.toLowerCase();
      const stage = normaliseStage(l.status);

      const matchesText =
        !term ||
        (l.lead_name ?? l.full_name ?? "").toLowerCase().includes(term) ||
        l.phone.includes(term) ||
        (l.email ?? "").toLowerCase().includes(term) ||
        (l.pan ?? "").toLowerCase().includes(term);

      const matchesStage = stageFilter === "all" || stage === stageFilter;

      const matchesAssignee =
        assigneeFilter === "all" ||
        (assigneeFilter === "unassigned"
          ? !l.assigned_to
          : l.assigned_to === assigneeFilter);

      const matchesBank =
        bankFilter === "all" ||
        (bankFilter === "none" ? !l.bank_name : l.bank_name === bankFilter);

      const partnerVisible =
        !isAdmin ||
        (l.lead_source ?? "").toLowerCase() !== "partner" ||
        (!!user && l.assigned_to === user.id);

      return (
        matchesText && matchesStage && matchesAssignee && matchesBank && partnerVisible
      );
    })
    .sort((a, b) => {
      const nameA = (a.lead_name ?? a.full_name ?? "").toLowerCase();
      const nameB = (b.lead_name ?? b.full_name ?? "").toLowerCase();
      if (sortBy === "name_asc") return nameA.localeCompare(nameB);
      if (sortBy === "name_desc") return nameB.localeCompare(nameA);
      if (sortBy === "amount_desc")
        return (Number(b.loan_amount) || 0) - (Number(a.loan_amount) || 0);
      if (sortBy === "amount_asc")
        return (Number(a.loan_amount) || 0) - (Number(b.loan_amount) || 0);
      if (sortBy === "cibil_desc")
        return (b.cibil_score ?? 0) - (a.cibil_score ?? 0);
      if (sortBy === "oldest")
        return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });


  const stageCounts = LEAD_STAGES.reduce<Record<Stage, number>>(
    (acc, s) => {
      acc[s] = leads.filter((l) => normaliseStage(l.status) === s).length;
      return acc;
    },
    {
      New: 0,
      Qualified: 0,
      Approved: 0,
      Rejected: 0,
      Disbursed: 0,
      Closed: 0,
    },
  );

  const staffLabel = (id: string | null) => {
    if (!id) return "Unassigned";
    const s = staff.find((x) => x.id === id);
    return s?.full_name || s?.email || "Staff";
  };

  const updateBank = async (lead: Lead, value: string) => {
    const bankName = value === "none" ? null : value;

    const { error } = await supabase
      .from("leads")
      .update({ bank_name: bankName })
      .eq("id", lead.id);

    if (error) {
      toast.error(error.message);
      return;
    }

    setLeads((prev) =>
      prev.map((l) =>
        l.id === lead.id ? { ...l, bank_name: bankName } : l,
      ),
    );

    toast.success(bankName ? `Bank → ${bankName}` : "Bank cleared");
  };

  const updateAssignee = async (lead: Lead, value: string) => {
    const newId = value === "unassigned" ? null : value;

    const { error } = await supabase
      .from("leads")
      .update({ assigned_to: newId })
      .eq("id", lead.id);

    if (error) return toast.error(error.message);

    setLeads((prev) =>
      prev.map((l) => (l.id === lead.id ? { ...l, assigned_to: newId } : l)),
    );

    toast.success(`Assigned → ${staffLabel(newId)}`);
  };

  const updateStage = async (lead: Lead, status: Stage) => {
    const { error } = await supabase
      .from("leads")
      .update({ status })
      .eq("id", lead.id);

    if (error) return toast.error(error.message);

    setLeads((prev) =>
      prev.map((l) => (l.id === lead.id ? { ...l, status } : l)),
    );

    toast.success(`Stage → ${status}`);

    if (status === "Approved") {
      const { data: existing } = await supabase
        .from("customers")
        .select("id")
        .eq("lead_id", lead.id)
        .maybeSingle();

      if (!existing) {
        await supabase.from("customers").insert({
          customer_name: lead.lead_name ?? lead.full_name ?? "Unnamed",
          mobile: lead.phone,
          email: lead.email,
          pan: lead.pan,
          address: [lead.city, lead.state].filter(Boolean).join(", ") || null,
          lead_id: lead.id,
          loan_type: lead.loan_type,
          loan_sub_type: lead.loan_sub_type,
          loan_amount: lead.loan_amount,
          cibil_score: lead.cibil_score,
          bank_name: lead.bank_name,
          stage: "Docs Pending",
        });

        toast.success("Approved → Customer created");
      }
    }
  };

  const approve = (lead: Lead) => setApproveLead(lead);
  const reject = (lead: Lead) => setRejectLead(lead);

  const confirmApprove = async (
    lead: Lead,
    payload: {
      loan_type: string;
      requested_amount: number | null;
      sanction_amount: number | null;
      tenure_months: number | null;
      interest_rate: number | null;
      bank_name: string;
      notes: string;
      docs: Record<string, boolean>;
    },
  ) => {
    // 1. Update lead status
    const { error: leadErr } = await supabase
      .from("leads")
      .update({ status: "Approved" })
      .eq("id", lead.id);
    if (leadErr) return toast.error(leadErr.message);

    // 2. Create or fetch customer
    let customerId: string | null = null;
    const { data: existing } = await supabase
      .from("customers").select("id").eq("lead_id", lead.id).maybeSingle();
    if (existing) {
      customerId = existing.id;
    } else {
      const { data: ins, error: cErr } = await supabase
        .from("customers")
        .insert({
          customer_name: lead.lead_name ?? lead.full_name ?? "Unnamed",
          mobile: lead.phone,
          email: lead.email,
          pan: lead.pan,
          address: [lead.city, lead.state].filter(Boolean).join(", ") || null,
          lead_id: lead.id,
          loan_type: payload.loan_type,
          loan_amount: payload.sanction_amount ?? payload.requested_amount,
          cibil_score: lead.cibil_score,
          bank_name: payload.bank_name,
          stage: "Approved",
          note: payload.notes || null,
        })
        .select("id")
        .single();
      if (cErr) return toast.error(cErr.message);
      customerId = ins.id;
    }

    // 3. Link to lead
    if (customerId) {
      await supabase.from("leads")
        .update({ converted_customer_id: customerId })
        .eq("id", lead.id);
    }

    // 4. Create loan_case
    const { error: lcErr } = await supabase.from("loan_cases").insert({
      customer_id: customerId,
      lead_id: lead.id,
      loan_type: payload.loan_type,
      loan_amount: payload.sanction_amount ?? payload.requested_amount,
      requested_amount: payload.requested_amount,
      sanction_amount: payload.sanction_amount,
      tenure_months: payload.tenure_months,
      interest_rate: payload.interest_rate,
      lender_name: payload.bank_name || null,
      stage: payload.sanction_amount ? "Sanction" : "Under Process",
      notes: payload.notes || null,
      documents_checklist: payload.docs,
    });
    if (lcErr) return toast.error(lcErr.message);

    setLeads((prev) => prev.map((l) => (l.id === lead.id ? { ...l, status: "Approved" } : l)));
    toast.success("Approved → Customer & Loan Case created");
    setApproveLead(null);
  };

  const confirmReject = async (lead: Lead, reason: string) => {
    const { error } = await supabase
      .from("leads")
      .update({ status: "Rejected", rejection_reason: reason })
      .eq("id", lead.id);
    if (error) return toast.error(error.message);
    setLeads((prev) => prev.map((l) => (l.id === lead.id ? { ...l, status: "Rejected" } : l)));
    toast.success("Lead rejected");
    setRejectLead(null);
  };

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 px-4 py-3 text-white shadow-md shadow-sky-500/20">
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/15 blur-2xl" />

        <div className="relative flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20">
              <Sparkles className="h-4 w-4" />
            </div>

            <div>
              <div className="text-sm font-semibold leading-tight">
                Leads Pipeline
              </div>
              <div className="text-[11px] text-white/80">
                {leads.length} total · {filtered.length} shown · WhatsApp ready
              </div>
            </div>
          </div>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="bg-white text-sky-700 shadow-md hover:bg-sky-50">
                <Plus className="mr-2 h-4 w-4" /> New Lead
              </Button>
            </DialogTrigger>

            <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto bg-white">
              <DialogHeader>
                <DialogTitle>Add New Lead</DialogTitle>
              </DialogHeader>

              <NewLeadForm
                onSaved={() => {
                  setOpen(false);
                  load();
                }}
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-6">
        {LEAD_STAGES.map((s) => {
          const st = STAGE_STYLES[s];
          const active = stageFilter === s;

          return (
            <button
              key={s}
              onClick={() => setStageFilter(active ? "all" : s)}
              className={cn(
                "flex items-center justify-between rounded-xl border bg-white px-3 py-2 text-left text-xs shadow-sm transition-all hover:-translate-y-0.5 hover:shadow",
                active ? "ring-2 ring-offset-1 " + st.trigger : "border-slate-200",
              )}
            >
              <div className="flex items-center gap-2">
                <span className={cn("h-2.5 w-2.5 rounded-full", st.dot)} />
                <span className="font-medium text-slate-700">{s}</span>
              </div>

              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[10px] font-semibold",
                  st.trigger,
                )}
              >
                {stageCounts[s]}
              </span>
            </button>
          );
        })}
      </div>

      <Card className="p-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative min-w-[220px] flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <Input
              placeholder="Search name, phone, email, PAN…"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="pl-9"
            />
          </div>

          <Select value={stageFilter} onValueChange={setStageFilter}>
            <SelectTrigger className="w-[170px] bg-white">
              <SelectValue placeholder="Stage" />
            </SelectTrigger>

            <SelectContent className="bg-white">
              <SelectItem value="all">All stages</SelectItem>
              {LEAD_STAGES.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={assigneeFilter} onValueChange={setAssigneeFilter}>
            <SelectTrigger className="w-[200px] bg-white">
              <SelectValue placeholder="Assignee" />
            </SelectTrigger>

            <SelectContent className="bg-white">
              <SelectItem value="all">All assignees</SelectItem>
              <SelectItem value="unassigned">Unassigned</SelectItem>
              {staff.map((s) => (
                <SelectItem key={s.id} value={s.id}>
                  {s.full_name || s.email || "Staff"} · {s.role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={bankFilter} onValueChange={setBankFilter}>
            <SelectTrigger className="w-[190px] bg-white">
              <SelectValue placeholder="Bank" />
            </SelectTrigger>
            <SelectContent className="bg-white max-h-72">
              <SelectItem value="all">All banks</SelectItem>
              <SelectItem value="none">— Not set —</SelectItem>
              {[...BANK_OPTIONS].sort((a, b) => a.localeCompare(b)).map((b) => (
                <SelectItem key={b} value={b}>{b}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="recent">Newest first</SelectItem>
              <SelectItem value="oldest">Oldest first</SelectItem>
              <SelectItem value="name_asc">Name A → Z</SelectItem>
              <SelectItem value="name_desc">Name Z → A</SelectItem>
              <SelectItem value="amount_desc">Loan amount high → low</SelectItem>
              <SelectItem value="amount_asc">Loan amount low → high</SelectItem>
              <SelectItem value="cibil_desc">CIBIL high → low</SelectItem>
            </SelectContent>
          </Select>
        </div>

      </Card>

      <Card className="overflow-hidden">
        {loading ? (
          <div className="flex h-48 items-center justify-center">
            <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-10 text-center text-sm text-slate-500">
            No leads match your filters.
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Mobile</TableHead>
                <TableHead>Loan Type</TableHead>
                <TableHead>Loan Amount</TableHead>
                <TableHead>CIBIL</TableHead>
                <TableHead>Stage</TableHead>
                <TableHead>Bank</TableHead>
                <TableHead>Assigned</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {filtered.map((l) => {
                const stage = normaliseStage(l.status);
                const st = STAGE_STYLES[stage];

                const canDecide =
                  stage !== "Approved" &&
                  stage !== "Rejected" &&
                  stage !== "Disbursed" &&
                  stage !== "Closed";

                return (
                  <TableRow key={l.id}>
                    <TableCell className="font-medium">
                      <button
                        onClick={() => setProfileLead(l.id)}
                        className="text-sky-700 hover:underline"
                      >
                        {l.lead_name ?? l.full_name ?? "—"}
                      </button>
                      {l.email && (
                        <div className="text-xs text-slate-500">{l.email}</div>
                      )}
                    </TableCell>


                    <TableCell className="text-sm">{l.phone}</TableCell>

                    <TableCell>
                      <div className="text-sm font-medium text-slate-800">
                        {l.loan_type ?? (l.product_type ?? "").replace(/_/g, " ")}
                      </div>
                      {l.loan_sub_type && (
                        <div className="text-xs text-slate-500">
                          {l.loan_sub_type}
                        </div>
                      )}
                    </TableCell>

                    <TableCell className="text-sm">
                      {l.loan_amount
                        ? `₹${Number(l.loan_amount).toLocaleString("en-IN")}`
                        : "—"}
                    </TableCell>

                    <TableCell>
                      <span
                        className={cn(
                          "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold",
                          cibilBadge(l.cibil_score),
                        )}
                      >
                        {l.cibil_score ?? "N/A"}
                      </span>
                    </TableCell>

                    <TableCell>
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold",
                          st.trigger,
                        )}
                      >
                        <span className={cn("h-1.5 w-1.5 rounded-full", st.dot)} />
                        {stage}
                      </span>
                    </TableCell>

                    <TableCell>
                      <select
                        value={l.bank_name ?? "none"}
                        onChange={(e) => updateBank(l, e.target.value)}
                        className={rowSelectClass}
                      >
                        <option value="none">— None —</option>
                        {BANK_OPTIONS.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </TableCell>

                    <TableCell>
                      <select
                        value={l.assigned_to ?? "unassigned"}
                        onChange={(e) => updateAssignee(l, e.target.value)}
                        className={rowSelectClass}
                      >
                        <option value="unassigned">Unassigned</option>
                        {staff.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.full_name || s.email || "Staff"}
                          </option>
                        ))}
                      </select>
                    </TableCell>

                    <TableCell className="text-right">
                      <div className="inline-flex items-center gap-1.5">
                        {canDecide && (
                          <>
                            <Button
                              size="sm"
                              className="h-8 bg-emerald-600 text-white hover:bg-emerald-700"
                              onClick={() => approve(l)}
                              title="Approve lead → push to Customers"
                            >
                              <CheckCircle2 className="mr-1 h-3.5 w-3.5" />
                              Approve
                            </Button>

                            <Button
                              size="sm"
                              variant="outline"
                              className="h-8 border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100"
                              onClick={() => reject(l)}
                              title="Reject lead"
                            >
                              <XCircle className="mr-1 h-3.5 w-3.5" />
                              Reject
                            </Button>
                          </>
                        )}

                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100"
                          title="Notes"
                          onClick={() => setNoteLead(l)}
                        >
                          <StickyNote className="h-3.5 w-3.5" />
                        </Button>

                        <a
                          href={`https://wa.me/${(l.phone || "").replace(
                            /\D/g,
                            "",
                          )}?text=${encodeURIComponent(
                            `Hi ${
                              l.lead_name ?? l.full_name ?? "there"
                            }, this is from Aarthvaahini. Following up on your ${(
                              l.loan_type ??
                              l.product_type ??
                              ""
                            ).replace(/_/g, " ")} enquiry.`,
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          title="WhatsApp"
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 border-green-200 bg-green-50 text-green-700 hover:bg-green-100"
                          >
                            <MessageCircle className="h-3.5 w-3.5" />
                          </Button>
                        </a>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </Card>

      <CustomerProfileDialog
        open={!!profileLead}
        onOpenChange={(v) => !v && setProfileLead(null)}
        leadId={profileLead}
      />

      <Dialog open={!!noteLead} onOpenChange={(v) => !v && setNoteLead(null)}>

        <DialogContent className="max-w-lg bg-white">
          <DialogHeader>
            <DialogTitle>
              Notes — {noteLead?.lead_name ?? noteLead?.full_name}
            </DialogTitle>
          </DialogHeader>

          {noteLead && <LeadNotes lead={noteLead} />}
        </DialogContent>
      </Dialog>

      <ApproveLeadDialog
        lead={approveLead}
        onClose={() => setApproveLead(null)}
        onConfirm={confirmApprove}
      />
      <RejectLeadDialog
        lead={rejectLead}
        onClose={() => setRejectLead(null)}
        onConfirm={confirmReject}
      />
    </div>
  );
}

function NewLeadForm({ onSaved }: { onSaved: () => void }) {
  const initialLead = {
    lead_name: "",
    phone: "",
    email: "",
    pan: "",
    aadhaar: "",
    city: "",
    state: "",
    product_type: "loan",
    lead_source: "Website",
    loan_type: "",
    loan_sub_type: "",
    loan_amount: "",
    cibil_score: "",
    bank_name: "",
  };

  const [f, setF] = useState(initialLead);
  const [saving, setSaving] = useState(false);

  const subOptions = SUB_LOAN_TYPES[f.loan_type] ?? [];

  const inputClass =
    "h-11 w-full rounded-xl border bg-white px-4 text-sm outline-none transition focus:ring-2 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400";

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!f.lead_name.trim()) {
      toast.error("Lead name is required");
      return;
    }

    if (!f.phone.trim()) {
      toast.error("Mobile number is required");
      return;
    }

    setSaving(true);

    const { error } = await supabase.from("leads").insert({
      lead_name: f.lead_name.trim(),
      full_name: f.lead_name.trim(),
      phone: f.phone.trim(),
      email: f.email.trim() || null,
      pan: f.pan.trim() || null,
      aadhaar: f.aadhaar.trim() || null,
      city: f.city.trim() || null,
      state: f.state.trim() || null,
      product_type: f.product_type,
      lead_source: f.lead_source,
      status: "New",
      loan_type: f.loan_type || null,
      loan_sub_type: f.loan_sub_type || null,
      loan_amount: f.loan_amount ? Number(f.loan_amount) : null,
      amount: f.loan_amount ? Number(f.loan_amount) : null,
      cibil_score: f.cibil_score ? Number(f.cibil_score) : null,
      product_name: f.loan_sub_type || f.loan_type || null,
      bank_name: f.bank_name || null,
    });

    setSaving(false);

    if (error) return toast.error(error.message);

    toast.success("Lead created");
    setF(initialLead);
    onSaved();
  };

  return (
    <form onSubmit={submit} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <Field label="Lead Name *">
        <Input
          required
          className="border-sky-200 focus-visible:ring-sky-400"
          value={f.lead_name}
          onChange={(e) =>
            setF((prev) => ({ ...prev, lead_name: e.target.value }))
          }
        />
      </Field>

      <Field label="Mobile *">
        <Input
          required
          className="border-rose-200 focus-visible:ring-rose-400"
          value={f.phone}
          onChange={(e) => setF((prev) => ({ ...prev, phone: e.target.value }))}
        />
      </Field>

      <Field label="Email">
        <Input
          type="email"
          className="border-cyan-200 focus-visible:ring-cyan-400"
          value={f.email}
          onChange={(e) => setF((prev) => ({ ...prev, email: e.target.value }))}
        />
      </Field>

      <Field label="PAN">
        <Input
          className="border-amber-200 focus-visible:ring-amber-400"
          value={f.pan}
          onChange={(e) =>
            setF((prev) => ({ ...prev, pan: e.target.value.toUpperCase() }))
          }
        />
      </Field>

      <Field label="Aadhaar">
        <Input
          className="border-emerald-200 focus-visible:ring-emerald-400"
          value={f.aadhaar}
          onChange={(e) =>
            setF((prev) => ({ ...prev, aadhaar: e.target.value }))
          }
        />
      </Field>

      <Field label="City">
        <Input
          className="border-blue-200 focus-visible:ring-blue-400"
          value={f.city}
          onChange={(e) => setF((prev) => ({ ...prev, city: e.target.value }))}
        />
      </Field>

      <Field label="State">
        <Input
          className="border-indigo-200 focus-visible:ring-indigo-400"
          value={f.state}
          onChange={(e) => setF((prev) => ({ ...prev, state: e.target.value }))}
        />
      </Field>

      <Field label="Product Interest">
        <select
          value={f.product_type}
          onChange={(e) =>
            setF((prev) => ({
              ...prev,
              product_type: e.target.value,
              loan_type: "",
              loan_sub_type: "",
            }))
          }
          className={`${inputClass} border-violet-200 focus:border-violet-400 focus:ring-violet-100`}
        >
          {PRODUCT_TYPES.map((p) => (
            <option key={p} value={p}>
              {p.replace(/_/g, " ")}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Lead Source">
        <select
          value={f.lead_source}
          onChange={(e) =>
            setF((prev) => ({ ...prev, lead_source: e.target.value }))
          }
          className={`${inputClass} border-pink-200 focus:border-pink-400 focus:ring-pink-100`}
        >
          {LEAD_SOURCES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Loan Type">
        <select
          value={f.loan_type}
          onChange={(e) =>
            setF((prev) => ({
              ...prev,
              loan_type: e.target.value,
              loan_sub_type: "",
            }))
          }
          className={`${inputClass} border-blue-200 focus:border-blue-400 focus:ring-blue-100`}
        >
          <option value="">Choose loan type</option>
          {LOAN_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Sub Loan Type">
        <select
          value={f.loan_sub_type}
          onChange={(e) =>
            setF((prev) => ({ ...prev, loan_sub_type: e.target.value }))
          }
          disabled={!subOptions.length}
          className={`${inputClass} border-blue-200 focus:border-blue-400 focus:ring-blue-100`}
        >
          <option value="">
            {subOptions.length ? "Choose sub type" : "Pick loan type first"}
          </option>

          {subOptions.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Loan Amount (₹)">
        <Input
          type="number"
          className="border-emerald-200 focus-visible:ring-emerald-400"
          placeholder="500000"
          value={f.loan_amount}
          onChange={(e) =>
            setF((prev) => ({ ...prev, loan_amount: e.target.value }))
          }
        />
      </Field>

      <Field label="CIBIL Score">
        <Input
          type="number"
          min={300}
          max={900}
          className="border-amber-200 focus-visible:ring-amber-400"
          placeholder="750"
          value={f.cibil_score}
          onChange={(e) =>
            setF((prev) => ({ ...prev, cibil_score: e.target.value }))
          }
        />
      </Field>

      <Field label="Bank (if approved)">
        <select
          value={f.bank_name}
          onChange={(e) =>
            setF((prev) => ({ ...prev, bank_name: e.target.value }))
          }
          className={`${inputClass} border-rose-200 focus:border-rose-400 focus:ring-rose-100`}
        >
          <option value="">Choose bank (optional)</option>
          {BANK_OPTIONS.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </Field>

      <div className="col-span-1 mt-2 flex justify-end sm:col-span-2">
        <Button
          type="submit"
          disabled={saving}
          className="bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 text-white shadow-md hover:opacity-90"
        >
          {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Create Lead
        </Button>
      </div>
    </form>
  );
}

function LeadNotes({ lead }: { lead: Lead }) {
  const [notes, setNotes] = useState<
    { id: string; notes: string | null; created_at: string }[]
  >([]);
  const [text, setText] = useState("");
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    const { data } = await supabase
      .from("activities")
      .select("id, notes, created_at")
      .eq("lead_id", lead.id)
      .eq("activity_type", "note")
      .order("created_at", { ascending: false })
      .limit(50);

    setNotes(data ?? []);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, [lead.id]);

  const add = async () => {
    if (!text.trim()) return;

    setSaving(true);

    const { error } = await supabase.from("activities").insert({
      lead_id: lead.id,
      activity_type: "note",
      notes: text.trim(),
    });

    setSaving(false);

    if (error) return toast.error(error.message);

    setText("");
    toast.success("Note added");
    load();
  };

  return (
    <div className="space-y-3">
      <Textarea
        rows={3}
        placeholder="Add a follow-up note (call summary, next action, document pending…)"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border-amber-200 focus-visible:ring-amber-400"
      />

      <div className="flex justify-end">
        <Button
          onClick={add}
          disabled={saving || !text.trim()}
          className="bg-gradient-to-r from-amber-500 to-orange-500 text-white"
        >
          {saving && <Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" />}
          Save Note
        </Button>
      </div>

      <div className="max-h-64 space-y-2 overflow-auto pr-1">
        {loading ? (
          <div className="py-3 text-center">
            <Loader2 className="mx-auto h-4 w-4 animate-spin text-slate-400" />
          </div>
        ) : notes.length === 0 ? (
          <p className="py-2 text-center text-xs text-slate-400">
            No notes yet for this lead.
          </p>
        ) : (
          notes.map((n) => (
            <div
              key={n.id}
              className="rounded-lg border border-amber-100 bg-amber-50/60 p-3 text-sm"
            >
              <div className="whitespace-pre-wrap text-slate-800">
                {n.notes}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-wide text-slate-500">
                {new Date(n.created_at).toLocaleString("en-IN")}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label className="text-xs">{label}</Label>
      <div className="mt-1">{children}</div>
    </div>
  );
}
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

function ApproveLeadDialog({
  lead,
  onClose,
  onConfirm,
}: {
  lead: Lead | null;
  onClose: () => void;
  onConfirm: (lead: Lead, p: {
    loan_type: string;
    requested_amount: number | null;
    sanction_amount: number | null;
    tenure_months: number | null;
    interest_rate: number | null;
    bank_name: string;
    notes: string;
    docs: Record<string, boolean>;
  }) => Promise<unknown>;
}) {
  const [saving, setSaving] = useState(false);
  const [f, setF] = useState({
    loan_type: "",
    requested_amount: "",
    sanction_amount: "",
    tenure_months: "",
    interest_rate: "",
    bank_name: "",
    notes: "",
    docs: {} as Record<string, boolean>,
  });

  useEffect(() => {
    if (lead) {
      setF({
        loan_type: lead.loan_type ?? "Home Loan",
        requested_amount: lead.loan_amount ? String(lead.loan_amount) : "",
        sanction_amount: "",
        tenure_months: "240",
        interest_rate: "8.5",
        bank_name: lead.bank_name ?? "",
        notes: "",
        docs: {},
      });
    }
  }, [lead]);

  if (!lead) return null;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    await onConfirm(lead, {
      loan_type: f.loan_type,
      requested_amount: f.requested_amount ? Number(f.requested_amount) : null,
      sanction_amount: f.sanction_amount ? Number(f.sanction_amount) : null,
      tenure_months: f.tenure_months ? Number(f.tenure_months) : null,
      interest_rate: f.interest_rate ? Number(f.interest_rate) : null,
      bank_name: f.bank_name,
      notes: f.notes,
      docs: f.docs,
    });
    setSaving(false);
  };

  const inputCls = "h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100";

  return (
    <Dialog open={!!lead} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-emerald-700">
            Approve Lead — {lead.lead_name ?? lead.full_name}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={submit} className="space-y-4">
          <div className="rounded-lg bg-emerald-50 p-3 text-xs text-emerald-800">
            Customer + Loan Case auto-create honge approve karte hi.
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label>Loan Type *</Label>
              <select required className={`${inputCls} mt-1`} value={f.loan_type}
                onChange={(e) => setF({ ...f, loan_type: e.target.value })}>
                {LOAN_TYPES.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <Label>Bank / Lender</Label>
              <select className={`${inputCls} mt-1`} value={f.bank_name}
                onChange={(e) => setF({ ...f, bank_name: e.target.value })}>
                <option value="">— Select —</option>
                {BANK_OPTIONS.map((b) => <option key={b}>{b}</option>)}
              </select>
            </div>
            <div>
              <Label>Requested Amount (₹)</Label>
              <Input type="number" className="mt-1" value={f.requested_amount}
                onChange={(e) => setF({ ...f, requested_amount: e.target.value })} />
            </div>
            <div>
              <Label>Sanctioned Amount (₹)</Label>
              <Input type="number" className="mt-1" value={f.sanction_amount}
                onChange={(e) => setF({ ...f, sanction_amount: e.target.value })}
                placeholder="If sanctioned" />
            </div>
            <div>
              <Label>Tenure (months)</Label>
              <Input type="number" className="mt-1" value={f.tenure_months}
                onChange={(e) => setF({ ...f, tenure_months: e.target.value })} />
            </div>
            <div>
              <Label>Interest Rate (%)</Label>
              <Input type="number" step="0.01" className="mt-1" value={f.interest_rate}
                onChange={(e) => setF({ ...f, interest_rate: e.target.value })} />
            </div>
          </div>
          <div>
            <Label>Notes</Label>
            <Textarea rows={2} className="mt-1" value={f.notes}
              onChange={(e) => setF({ ...f, notes: e.target.value })}
              placeholder="Any remarks for this approval…" />
          </div>
          <div>
            <Label className="mb-2 block">Documents Received Checklist</Label>
            <div className="grid grid-cols-2 gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3">
              {DOC_LIST.map((d) => (
                <label key={d} className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="h-4 w-4 accent-emerald-600"
                    checked={!!f.docs[d]}
                    onChange={(e) => setF({ ...f, docs: { ...f.docs, [d]: e.target.checked } })} />
                  {d}
                </label>
              ))}
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit" disabled={saving} className="bg-emerald-600 text-white hover:bg-emerald-700">
              {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Approve & Create Customer
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function RejectLeadDialog({
  lead,
  onClose,
  onConfirm,
}: {
  lead: Lead | null;
  onClose: () => void;
  onConfirm: (lead: Lead, reason: string) => Promise<unknown>;
}) {
  const [reason, setReason] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => { if (lead) setReason(""); }, [lead]);

  if (!lead) return null;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reason.trim()) return toast.error("Reason required");
    setSaving(true);
    await onConfirm(lead, reason.trim());
    setSaving(false);
  };

  return (
    <Dialog open={!!lead} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="text-rose-700">
            Reject Lead — {lead.lead_name ?? lead.full_name}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <Label>Rejection Reason *</Label>
            <Textarea required rows={4} className="mt-1" value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="E.g. Low CIBIL score, insufficient income, document mismatch…" />
          </div>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit" disabled={saving} className="bg-rose-600 text-white hover:bg-rose-700">
              {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Reject Lead
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
