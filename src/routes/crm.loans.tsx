import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Banknote, Pencil, FileCheck2 } from "lucide-react";
import { toast } from "sonner";
import { CustomerProfileDialog } from "@/components/crm/CustomerProfileDialog";


export const Route = createFileRoute("/crm/loans")({ component: LoansPage });

const STAGES = ["Lead", "Documents", "Login", "Under Process", "Sanction", "Disbursement", "Completed", "Rejected"];

const DOC_LIST = [
  "PAN Card", "Aadhaar Card", "Income Proof / Salary Slips",
  "Bank Statement (6 months)", "Photograph", "Address Proof",
  "ITR / Form 16", "Business Proof", "Property Documents",
];

const LOAN_TYPES = [
  "Home Loan", "Personal Loan", "Business Loan", "Car / Vehicle Loan",
  "Education Loan", "Loan Against Property", "Gold Loan", "Working Capital Loan",
  "Machinery & Equipment Loan", "Credit Card",
];

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
  customer?: { customer_name: string | null; mobile: string | null } | null;
};

function LoansPage() {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Row | null>(null);
  const [profileId, setProfileId] = useState<string | null>(null);


  const load = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("loan_cases")
      .select("*, customer:customers(customer_name, mobile)")
      .order("created_at", { ascending: false });
    setRows((data ?? []) as unknown as Row[]);
    setLoading(false);
  };

  useEffect(() => {
    load();
    const channel = supabase
      .channel("crm-loans-sync")
      .on("postgres_changes", { event: "*", schema: "public", table: "loan_cases" }, () => load())
      .on("postgres_changes", { event: "*", schema: "public", table: "customers" }, () => load())
      .subscribe();
    return () => { channel.unsubscribe(); };
  }, []);

  const stats = useMemo(() => {
    const total = rows.length;
    const sanctioned = rows.reduce((a, r) => a + (Number(r.sanction_amount) || 0), 0);
    const disbursed = rows.reduce((a, r) => a + (Number(r.disbursement_amount) || 0), 0);
    return { total, sanctioned, disbursed };
  }, [rows]);

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-4 py-4 text-white shadow-md">
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/15 blur-2xl" />
        <div className="relative flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
              <Banknote className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Loan Cases</h1>
              <p className="text-xs text-white/80">Workflow: {STAGES.join(" → ")}</p>
            </div>
          </div>
          <div className="flex gap-4 text-xs">
            <div><div className="text-white/70">Cases</div><div className="text-lg font-bold">{stats.total}</div></div>
            <div><div className="text-white/70">Sanctioned</div><div className="text-lg font-bold">₹{(stats.sanctioned/1e5).toFixed(1)}L</div></div>
            <div><div className="text-white/70">Disbursed</div><div className="text-lg font-bold">₹{(stats.disbursed/1e5).toFixed(1)}L</div></div>
          </div>
        </div>
      </div>

      <Card className="overflow-hidden">
        {loading ? (
          <div className="flex h-40 items-center justify-center"><Loader2 className="h-5 w-5 animate-spin text-muted-foreground" /></div>
        ) : rows.length === 0 ? (
          <div className="p-10 text-center text-sm text-slate-500">No loan cases yet. Approve a lead to push it here.</div>
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
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((r) => {
                  const docCount = r.documents_checklist
                    ? Object.values(r.documents_checklist).filter(Boolean).length : 0;
                  return (
                    <TableRow key={r.id} className="hover:bg-emerald-50/40">
                      <TableCell className="font-medium">
                        {r.customer_id ? (
                          <button onClick={() => setProfileId(r.customer_id)} className="text-sky-700 hover:underline">
                            {r.customer?.customer_name ?? "—"}
                          </button>
                        ) : (r.customer?.customer_name ?? "—")}
                      </TableCell>

                      <TableCell>{r.customer?.mobile ?? "—"}</TableCell>
                      <TableCell>{r.loan_type}</TableCell>
                      <TableCell>{r.requested_amount ? `₹${Number(r.requested_amount).toLocaleString("en-IN")}` : "—"}</TableCell>
                      <TableCell>{r.sanction_amount ? `₹${Number(r.sanction_amount).toLocaleString("en-IN")}` : "—"}</TableCell>
                      <TableCell>{r.disbursement_amount ? `₹${Number(r.disbursement_amount).toLocaleString("en-IN")}` : "—"}</TableCell>
                      <TableCell>{r.tenure_months ? `${r.tenure_months}m` : "—"}</TableCell>
                      <TableCell>{r.interest_rate ? `${r.interest_rate}%` : "—"}</TableCell>
                      <TableCell>{r.lender_name ?? "—"}</TableCell>
                      <TableCell><Badge variant="secondary">{r.stage}</Badge></TableCell>
                      <TableCell>
                        <Badge variant="outline" className="gap-1">
                          <FileCheck2 className="h-3 w-3" />
                          {docCount}/{DOC_LIST.length}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="ghost" onClick={() => setEditing(r)}>
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

      <LoanEditDialog
        row={editing}
        onClose={() => setEditing(null)}
        onSaved={() => { setEditing(null); load(); }}
      />

      <CustomerProfileDialog
        open={!!profileId}
        onOpenChange={(v) => !v && setProfileId(null)}
        customerId={profileId}
      />
    </div>
  );
}


function LoanEditDialog({
  row, onClose, onSaved,
}: { row: Row | null; onClose: () => void; onSaved: () => void }) {
  const [f, setF] = useState({
    loan_type: "", lender_name: "", stage: "Under Process",
    requested_amount: "", sanction_amount: "", disbursement_amount: "",
    tenure_months: "", interest_rate: "", notes: "",
    docs: {} as Record<string, boolean>,
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (row) {
      setF({
        loan_type: row.loan_type ?? "",
        lender_name: row.lender_name ?? "",
        stage: row.stage ?? "Under Process",
        requested_amount: row.requested_amount?.toString() ?? "",
        sanction_amount: row.sanction_amount?.toString() ?? "",
        disbursement_amount: row.disbursement_amount?.toString() ?? "",
        tenure_months: row.tenure_months?.toString() ?? "",
        interest_rate: row.interest_rate?.toString() ?? "",
        notes: row.notes ?? "",
        docs: row.documents_checklist ?? {},
      });
    }
  }, [row]);

  if (!row) return null;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const { error } = await supabase.from("loan_cases").update({
      loan_type: f.loan_type,
      lender_name: f.lender_name || null,
      stage: f.stage,
      requested_amount: f.requested_amount ? Number(f.requested_amount) : null,
      sanction_amount: f.sanction_amount ? Number(f.sanction_amount) : null,
      disbursement_amount: f.disbursement_amount ? Number(f.disbursement_amount) : null,
      loan_amount: f.sanction_amount ? Number(f.sanction_amount) : (f.requested_amount ? Number(f.requested_amount) : null),
      tenure_months: f.tenure_months ? Number(f.tenure_months) : null,
      interest_rate: f.interest_rate ? Number(f.interest_rate) : null,
      notes: f.notes || null,
      documents_checklist: f.docs,
    }).eq("id", row.id);
    setSaving(false);
    if (error) return toast.error(error.message);
    toast.success("Loan case updated");
    onSaved();
  };

  const inputCls = "h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100";

  return (
    <Dialog open={!!row} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle>Edit Loan Case — {row.customer?.customer_name ?? "Customer"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={submit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label>Loan Type</Label>
              <select className={`${inputCls} mt-1`} value={f.loan_type}
                onChange={(e) => setF({ ...f, loan_type: e.target.value })}>
                {LOAN_TYPES.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <Label>Stage</Label>
              <select className={`${inputCls} mt-1`} value={f.stage}
                onChange={(e) => setF({ ...f, stage: e.target.value })}>
                {STAGES.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="col-span-2">
              <Label>Lender / Bank</Label>
              <Input className="mt-1" value={f.lender_name} onChange={(e) => setF({ ...f, lender_name: e.target.value })} />
            </div>
            <div>
              <Label>Requested Amount (₹)</Label>
              <Input type="number" className="mt-1" value={f.requested_amount}
                onChange={(e) => setF({ ...f, requested_amount: e.target.value })} />
            </div>
            <div>
              <Label>Sanctioned Amount (₹)</Label>
              <Input type="number" className="mt-1" value={f.sanction_amount}
                onChange={(e) => setF({ ...f, sanction_amount: e.target.value })} />
            </div>
            <div>
              <Label>Disbursed Amount (₹)</Label>
              <Input type="number" className="mt-1" value={f.disbursement_amount}
                onChange={(e) => setF({ ...f, disbursement_amount: e.target.value })} />
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
              onChange={(e) => setF({ ...f, notes: e.target.value })} />
          </div>
          <div>
            <Label className="mb-2 block">Documents Received</Label>
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
              Save Changes
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
