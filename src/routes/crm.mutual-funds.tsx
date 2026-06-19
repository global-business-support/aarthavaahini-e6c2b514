import { createFileRoute } from '@tanstack/react-router'
// import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import {
  Loader2,
  Plus,
  X,
  User,
  Phone,
  Mail,
  TrendingUp,
  MessageSquare,
} from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/crm/mutual-funds")({
  component: MFPage,
});

const STAGES = [
  "Lead",
  "Risk Profiling",
  "KYC",
  "SIP Proposal",
  "SIP Active",
  "Portfolio Review",
];

type Row = {
  id: string;
  fund_name: string;
  sip_amount: number | null;
  investment_type: string | null;
  status: string;
};

function MFPage() {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);

  const [openConsultation, setOpenConsultation] = useState(false);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    email: "",
    notes: "",
  });

  useEffect(() => {
    fetchMutualFunds();
  }, []);

  const fetchMutualFunds = async () => {
    setLoading(true);

    const { data } = await supabase
      .from("mutual_funds")
      .select("*")
      .order("created_at", { ascending: false });

    setRows((data ?? []) as Row[]);
    setLoading(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitConsultation = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.full_name.trim() || !form.phone.trim()) {
      return toast.error("Name and phone number are required.");
    }

    setSaving(true);

    const { data: lead, error } = await supabase
      .from("leads")
      .insert({
        full_name: form.full_name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim() || null,
        product_type: "mutual_fund",
        status: "New",
      })
      .select("id")
      .single();

    if (error) {
      setSaving(false);
      console.error("Free consultation lead error:", error);
      return toast.error("Failed to create consultation lead.");
    }

    if (lead?.id) {
      await supabase.from("activities").insert({
        activity_type: "note",
        notes:
          form.notes?.trim() ||
          "Free consultation request created from Mutual Funds page.",
        lead_id: lead.id,
        customer_id: null,
      });
    }

    toast.success("Free consultation lead created successfully.");

    setForm({
      full_name: "",
      phone: "",
      email: "",
      notes: "",
    });

    setSaving(false);
    setOpenConsultation(false);
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Mutual Funds</h1>
          <p className="text-sm text-slate-500">
            Workflow: {STAGES.join(" → ")}
          </p>
        </div>

        <Button
          onClick={() => setOpenConsultation(true)}
          className="bg-sky-600 text-white hover:bg-sky-700"
        >
          <Plus className="mr-2 h-4 w-4" />
          Free Consultation
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-sky-100 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500">Total MF Cases</p>
              <p className="text-xl font-bold text-slate-900">{rows.length}</p>
            </div>
          </div>
        </Card>

        <Card className="border-sky-100 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700">
              <User className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500">Consultation</p>
              <p className="text-xl font-bold text-slate-900">Available</p>
            </div>
          </div>
        </Card>

        <Card className="border-sky-100 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500">Lead Source</p>
              <p className="text-xl font-bold text-slate-900">CRM</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="overflow-hidden">
        {loading ? (
          <div className="flex h-40 items-center justify-center">
            <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
          </div>
        ) : rows.length === 0 ? (
          <div className="p-10 text-center">
            <p className="text-sm text-slate-500">No mutual fund cases yet.</p>
            <Button
              onClick={() => setOpenConsultation(true)}
              variant="outline"
              className="mt-4"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Free Consultation
            </Button>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fund</TableHead>
                <TableHead>SIP Amount</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {rows.map((r) => (
                <TableRow key={r.id}>
                  <TableCell className="font-medium">{r.fund_name}</TableCell>
                  <TableCell>
                    {r.sip_amount
                      ? `₹${Number(r.sip_amount).toLocaleString("en-IN")}`
                      : "—"}
                  </TableCell>
                  <TableCell>{r.investment_type ?? "—"}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{r.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Card>

      {openConsultation && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-black/30 backdrop-blur-sm"
          onClick={() => setOpenConsultation(false)}
        >
          <div
            className="h-full w-full max-w-md bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b px-5 py-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Free Consultation
                </h2>
                <p className="text-xs text-slate-500">
                  Create a mutual fund consultation lead
                </p>
              </div>

              <button
                onClick={() => setOpenConsultation(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={submitConsultation} className="space-y-5 p-5">
              <div className="rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 p-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                    <TrendingUp className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Mutual Fund Consultation
                    </p>
                    <p className="text-xs text-white/80">
                      Lead will be saved in CRM Leads
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <Label className="text-xs font-medium text-slate-600">
                  Full Name *
                </Label>
                <div className="relative mt-1.5">
                  <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input
                    name="full_name"
                    value={form.full_name}
                    onChange={handleChange}
                    placeholder="Enter customer name"
                    className="pl-9"
                    required
                  />
                </div>
              </div>

              <div>
                <Label className="text-xs font-medium text-slate-600">
                  Phone Number *
                </Label>
                <div className="relative mt-1.5">
                  <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="pl-9"
                    required
                  />
                </div>
              </div>

              <div>
                <Label className="text-xs font-medium text-slate-600">
                  Email
                </Label>
                <div className="relative mt-1.5">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    className="pl-9"
                  />
                </div>
              </div>

              <div>
                <Label className="text-xs font-medium text-slate-600">
                  Notes
                </Label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Investment goal, SIP interest, risk profile etc."
                  className="mt-1.5 min-h-24 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => setOpenConsultation(false)}
                  disabled={saving}
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  className="w-full bg-sky-600 text-white hover:bg-sky-700"
                  disabled={saving}
                >
                  {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {saving ? "Saving..." : "Save Lead"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}