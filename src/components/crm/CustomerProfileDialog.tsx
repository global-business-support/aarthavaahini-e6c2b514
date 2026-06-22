import { useEffect, useState, useCallback } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  Loader2, Phone, Mail, MapPin, Briefcase, IndianRupee, User2, Building2,
  StickyNote, FileCheck2, Activity as ActivityIcon, CalendarDays, BadgeCheck,
  WalletCards, UserPlus, FileEdit, ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Customer = {
  id: string;
  customer_name: string | null;
  mobile: string | null;
  email: string | null;
  pan: string | null;
  aadhaar: string | null;
  address: string | null;
  occupation: string | null;
  income: number | null;
  loan_type: string | null;
  loan_sub_type: string | null;
  loan_amount: number | null;
  cibil_score: number | null;
  bank_name: string | null;
  stage: string | null;
  note: string | null;
  lead_id: string | null;
  created_at: string;
};

type LoanCase = {
  id: string;
  loan_type: string | null;
  lender_name: string | null;
  stage: string | null;
  requested_amount: number | null;
  sanction_amount: number | null;
  disbursement_amount: number | null;
  tenure_months: number | null;
  interest_rate: number | null;
  notes: string | null;
  documents_checklist: Record<string, boolean> | null;
};

type ActivityRow = {
  id: string;
  activity_type: string;
  notes: string | null;
  created_at: string;
};

const ICONS: Record<string, typeof ActivityIcon> = {
  note: StickyNote,
  created: UserPlus,
  updated: FileEdit,
  lead_converted: ActivityIcon,
  loan_created: WalletCards,
  loan_stage: FileEdit,
  sanctioned: BadgeCheck,
  disbursed: WalletCards,
  approved: BadgeCheck,
  rejected: ShieldCheck,
};

const DOC_LIST = [
  "PAN Card", "Aadhaar Card", "Income Proof / Salary Slips",
  "Bank Statement (6 months)", "Photograph", "Address Proof",
  "ITR / Form 16", "Business Proof", "Property Documents",
];

const inr = (v?: number | null) =>
  v == null ? "—" : `₹${Number(v).toLocaleString("en-IN")}`;

export function CustomerProfileDialog({
  customerId,
  leadId,
  open,
  onOpenChange,
}: {
  customerId?: string | null;
  leadId?: string | null;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [loading, setLoading] = useState(false);
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [loans, setLoans] = useState<LoanCase[]>([]);
  const [activities, setActivities] = useState<ActivityRow[]>([]);
  const [noteText, setNoteText] = useState("");
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    if (!open) return;
    setLoading(true);

    let cust: Customer | null = null;
    if (customerId) {
      const { data } = await supabase.from("customers").select("*").eq("id", customerId).maybeSingle();
      cust = (data as Customer) ?? null;
    } else if (leadId) {
      const { data } = await supabase.from("customers").select("*").eq("lead_id", leadId).maybeSingle();
      cust = (data as Customer) ?? null;
    }
    setCustomer(cust);

    if (cust?.id) {
      const [{ data: lc }, { data: act }] = await Promise.all([
        supabase.from("loan_cases").select("*").eq("customer_id", cust.id).order("created_at", { ascending: false }),
        supabase.from("activities").select("id, activity_type, notes, created_at")
          .or(`customer_id.eq.${cust.id}${cust.lead_id ? `,lead_id.eq.${cust.lead_id}` : ""}`)
          .order("created_at", { ascending: false }).limit(50),
      ]);
      setLoans((lc ?? []) as LoanCase[]);
      setActivities((act ?? []) as ActivityRow[]);
    } else if (leadId) {
      const { data: act } = await supabase.from("activities").select("id, activity_type, notes, created_at")
        .eq("lead_id", leadId).order("created_at", { ascending: false }).limit(50);
      setActivities((act ?? []) as ActivityRow[]);
      setLoans([]);
    }

    setLoading(false);
  }, [customerId, leadId, open]);

  useEffect(() => { load(); }, [load]);

  useEffect(() => {
    if (!open) return;
    const ch = supabase.channel(`profile-${customerId ?? leadId ?? "x"}`)
      .on("postgres_changes", { event: "*", schema: "public", table: "activities" }, () => load())
      .on("postgres_changes", { event: "*", schema: "public", table: "loan_cases" }, () => load())
      .on("postgres_changes", { event: "*", schema: "public", table: "customers" }, () => load())
      .subscribe();
    return () => { ch.unsubscribe(); };
  }, [open, customerId, leadId, load]);

  const addNote = async () => {
    if (!noteText.trim() || !customer) return;
    setSaving(true);
    const { error } = await supabase.from("activities").insert({
      customer_id: customer.id,
      lead_id: customer.lead_id,
      activity_type: "note",
      notes: noteText.trim(),
    });
    setSaving(false);
    if (error) return toast.error(error.message);
    setNoteText("");
    toast.success("Note added");
    load();
  };

  const latestLoan = loans[0];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[92vh] overflow-hidden bg-white p-0">
        <DialogHeader className="bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-500 px-6 py-4 text-white">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-base font-bold">
                {(customer?.customer_name ?? "?").slice(0, 2).toUpperCase()}
              </div>
              <div>
                <DialogTitle className="text-lg font-semibold text-white">
                  {customer?.customer_name ?? (leadId ? "Lead Profile" : "Customer")}
                </DialogTitle>
                <div className="mt-0.5 flex flex-wrap gap-2 text-[11px] text-white/85">
                  {customer?.mobile && <span className="inline-flex items-center gap-1"><Phone className="h-3 w-3"/>{customer.mobile}</span>}
                  {customer?.email && <span className="inline-flex items-center gap-1"><Mail className="h-3 w-3"/>{customer.email}</span>}
                  {customer?.stage && <Badge className="border-white/30 bg-white/20 text-white">{customer.stage}</Badge>}
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="max-h-[72vh] overflow-y-auto p-6">
          {loading ? (
            <div className="flex h-40 items-center justify-center"><Loader2 className="h-5 w-5 animate-spin text-sky-500"/></div>
          ) : !customer && !leadId ? (
            <div className="py-10 text-center text-sm text-slate-500">No customer record found.</div>
          ) : (
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList className="bg-sky-50">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="loan">Loan</TabsTrigger>
                <TabsTrigger value="docs">Documents</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <Section title="Contact">
                  <Grid>
                    <Detail icon={User2} label="Full Name" value={customer?.customer_name} />
                    <Detail icon={Phone} label="Mobile" value={customer?.mobile} />
                    <Detail icon={Mail} label="Email" value={customer?.email} />
                    <Detail label="PAN" value={customer?.pan} />
                    <Detail label="Aadhaar" value={customer?.aadhaar} />
                    <Detail icon={MapPin} label="Address" value={customer?.address} />
                  </Grid>
                </Section>
                <Section title="Profile">
                  <Grid>
                    <Detail icon={Briefcase} label="Occupation" value={customer?.occupation} />
                    <Detail icon={IndianRupee} label="Monthly Income" value={inr(customer?.income)} />
                    <Detail label="CIBIL Score" value={customer?.cibil_score ?? "—"} />
                    <Detail icon={Building2} label="Preferred Bank" value={customer?.bank_name} />
                  </Grid>
                </Section>
                {customer?.note && (
                  <Section title="Notes">
                    <p className="rounded-lg bg-amber-50 p-3 text-sm text-amber-900">{customer.note}</p>
                  </Section>
                )}
              </TabsContent>

              <TabsContent value="loan" className="space-y-3">
                {!latestLoan ? (
                  <div className="rounded-lg border border-dashed border-slate-200 p-6 text-center text-sm text-slate-500">
                    No loan case yet. Approve a lead to create one.
                  </div>
                ) : (
                  <Section title={`${latestLoan.loan_type ?? "Loan"} · ${latestLoan.stage ?? "—"}`}>
                    <Grid>
                      <Detail label="Loan Type" value={latestLoan.loan_type} />
                      <Detail icon={Building2} label="Lender / Bank" value={latestLoan.lender_name} />
                      <Detail icon={IndianRupee} label="Requested" value={inr(latestLoan.requested_amount)} />
                      <Detail icon={IndianRupee} label="Sanctioned" value={inr(latestLoan.sanction_amount)} />
                      <Detail icon={IndianRupee} label="Disbursed" value={inr(latestLoan.disbursement_amount)} />
                      <Detail label="Tenure" value={latestLoan.tenure_months ? `${latestLoan.tenure_months} months` : "—"} />
                      <Detail label="Interest Rate" value={latestLoan.interest_rate ? `${latestLoan.interest_rate}%` : "—"} />
                      <Detail label="Stage" value={latestLoan.stage} />
                    </Grid>
                    {latestLoan.notes && (
                      <p className="mt-3 rounded-lg bg-slate-50 p-3 text-sm text-slate-700">{latestLoan.notes}</p>
                    )}
                  </Section>
                )}
                {loans.length > 1 && (
                  <div className="text-xs text-slate-500">+ {loans.length - 1} earlier case(s)</div>
                )}
              </TabsContent>

              <TabsContent value="docs">
                <Section title="Documents Checklist">
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {DOC_LIST.map((d) => {
                      const ok = latestLoan?.documents_checklist?.[d];
                      return (
                        <div key={d} className={cn(
                          "flex items-center gap-2 rounded-lg border px-3 py-2 text-sm",
                          ok ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                             : "border-slate-200 bg-slate-50 text-slate-500"
                        )}>
                          <FileCheck2 className={cn("h-4 w-4", ok ? "text-emerald-600" : "text-slate-400")}/>
                          {d}
                        </div>
                      );
                    })}
                  </div>
                </Section>
              </TabsContent>

              <TabsContent value="activity" className="space-y-3">
                {customer && (
                  <div className="flex gap-2">
                    <Textarea rows={2} placeholder="Add a note…" value={noteText}
                      onChange={(e) => setNoteText(e.target.value)} className="flex-1"/>
                    <Button onClick={addNote} disabled={saving || !noteText.trim()} className="self-end">
                      {saving && <Loader2 className="mr-1 h-3 w-3 animate-spin"/>}Save
                    </Button>
                  </div>
                )}
                {activities.length === 0 ? (
                  <div className="py-6 text-center text-xs text-slate-400">No activity yet.</div>
                ) : (
                  <ol className="relative ml-3 space-y-3 border-l border-sky-100 pl-4">
                    {activities.map((a) => {
                      const Icon = ICONS[a.activity_type] ?? ActivityIcon;
                      return (
                        <li key={a.id} className="relative">
                          <span className="absolute -left-[1.4rem] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                            <Icon className="h-2.5 w-2.5"/>
                          </span>
                          <div className="flex items-center gap-2 text-xs text-slate-500">
                            <Badge variant="outline" className="capitalize text-[10px]">
                              {a.activity_type.replaceAll("_"," ")}
                            </Badge>
                            <span className="inline-flex items-center gap-1"><CalendarDays className="h-3 w-3"/>
                              {new Date(a.created_at).toLocaleString("en-IN")}
                            </span>
                          </div>
                          {a.notes && <p className="mt-1 whitespace-pre-wrap text-sm text-slate-800">{a.notes}</p>}
                        </li>
                      );
                    })}
                  </ol>
                )}
              </TabsContent>
            </Tabs>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-sky-100 bg-white p-4">
      <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-sky-700">{title}</div>
      {children}
    </div>
  );
}
function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">{children}</div>;
}
function Detail({
  icon: Icon, label, value,
}: { icon?: typeof User2; label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2">
      {Icon && <Icon className="mt-0.5 h-3.5 w-3.5 text-sky-500"/>}
      <div className="min-w-0">
        <div className="text-[10px] font-medium uppercase tracking-wide text-slate-500">{label}</div>
        <div className="text-sm font-medium text-slate-900 break-words">{value || "—"}</div>
      </div>
    </div>
  );
}
