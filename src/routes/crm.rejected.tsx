import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, XCircle, RotateCcw } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/crm/rejected")({ component: RejectedPage });

type Lead = {
  id: string;
  full_name: string;
  phone: string;
  product_type: string;
  loan_type: string | null;
  loan_amount: number | null;
  rejection_reason: string | null;
  created_at: string;
};

function RejectedPage() {
  const [rows, setRows] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("leads")
      .select("id, full_name, phone, product_type, loan_type, loan_amount, rejection_reason, created_at")
      .eq("status", "Rejected")
      .order("created_at", { ascending: false });
    setRows((data ?? []) as Lead[]);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const reopen = async (id: string) => {
    const { error } = await supabase
      .from("leads")
      .update({ status: "New", rejection_reason: null })
      .eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Lead re-opened → New");
    load();
  };

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 px-4 py-4 text-white shadow-md shadow-rose-500/20">
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/15 blur-2xl" />
        <div className="relative flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
            <XCircle className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold">Rejected Leads</h1>
            <p className="text-xs text-white/80">All rejected leads with reason. Re-open if eligibility changes.</p>
          </div>
        </div>
      </div>

      <Card className="overflow-hidden">
        {loading ? (
          <div className="flex h-40 items-center justify-center"><Loader2 className="h-5 w-5 animate-spin text-muted-foreground" /></div>
        ) : rows.length === 0 ? (
          <div className="p-10 text-center text-sm text-slate-500">No rejected leads.</div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Rejection Reason</TableHead>
                <TableHead>Rejected On</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((r) => (
                <TableRow key={r.id} className="hover:bg-rose-50/40">
                  <TableCell className="font-medium">{r.full_name}</TableCell>
                  <TableCell>{r.phone}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="capitalize">
                      {r.loan_type ?? r.product_type?.replace(/_/g, " ")}
                    </Badge>
                  </TableCell>
                  <TableCell>{r.loan_amount ? `₹${Number(r.loan_amount).toLocaleString("en-IN")}` : "—"}</TableCell>
                  <TableCell className="max-w-xs text-sm text-rose-700">{r.rejection_reason ?? "—"}</TableCell>
                  <TableCell className="text-sm">{new Date(r.created_at).toLocaleDateString("en-IN")}</TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline" onClick={() => reopen(r.id)}>
                      <RotateCcw className="mr-1 h-3.5 w-3.5" /> Re-open
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
