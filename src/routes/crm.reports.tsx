import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Users, Clock, Package, Loader2, Download } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/crm/reports")({ component: ReportsPage });

type Stats = {
  totalLeads: number;
  converted: number;
  loanCases: number;
  insuranceCases: number;
  mfCases: number;
  disbursed: number;
  premium: number;
  sipAnnual: number;
  avgTatDays: number;
};

function formatINR(v: number) {
  if (v >= 1e7) return `₹${(v / 1e7).toFixed(2)} Cr`;
  if (v >= 1e5) return `₹${(v / 1e5).toFixed(2)} L`;
  return `₹${Math.round(v).toLocaleString("en-IN")}`;
}

function ReportsPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    (async () => {
      const [leads, converted, loans, ins, mf] = await Promise.all([
        supabase.from("leads").select("id, created_at"),
        supabase.from("leads").select("id", { count: "exact", head: true }).eq("status", "converted"),
        supabase.from("loan_cases").select("disbursement_amount, created_at"),
        supabase.from("insurance_cases").select("premium"),
        supabase.from("mutual_funds").select("sip_amount"),
      ]);

      const sum = (rows: any[] | null, key: string) =>
        (rows ?? []).reduce((a, r) => a + (Number(r[key]) || 0), 0);

      const loanDates = (loans.data ?? []).map((r: any) => new Date(r.created_at).getTime());
      const leadDates = (leads.data ?? []).map((r: any) => new Date(r.created_at).getTime());
      const avgTat =
        loanDates.length && leadDates.length
          ? Math.max(
              0,
              Math.round(
                (loanDates.reduce((a, b) => a + b, 0) / loanDates.length -
                  leadDates.reduce((a, b) => a + b, 0) / leadDates.length) /
                  (1000 * 60 * 60 * 24),
              ),
            )
          : 0;

      setStats({
        totalLeads: leads.data?.length ?? 0,
        converted: converted.count ?? 0,
        loanCases: loans.data?.length ?? 0,
        insuranceCases: ins.data?.length ?? 0,
        mfCases: mf.data?.length ?? 0,
        disbursed: sum(loans.data, "disbursement_amount"),
        premium: sum(ins.data, "premium"),
        sipAnnual: sum(mf.data, "sip_amount") * 12,
        avgTatDays: avgTat,
      });
    })();
  }, []);

  const buildReports = (s: Stats) => {
    const convPct = s.totalLeads ? Math.round((s.converted / s.totalLeads) * 100) : 0;
    return [
      { name: "Lead Conversion", desc: `${s.converted} of ${s.totalLeads} leads converted (${convPct}%).`, value: `${convPct}%`, icon: TrendingUp },
      { name: "Revenue", desc: "Disbursed loan + premium + annual SIP.", value: formatINR(s.disbursed + s.premium + s.sipAnnual), icon: BarChart3 },
      { name: "TAT Report", desc: "Avg days from lead capture to loan case creation.", value: `${s.avgTatDays} d`, icon: Clock },
      { name: "Loan Disbursed", desc: `${s.loanCases} loan cases.`, value: formatINR(s.disbursed), icon: Package },
      { name: "Insurance Premium", desc: `${s.insuranceCases} policies.`, value: formatINR(s.premium), icon: Package },
      { name: "Mutual Funds (Annual SIP)", desc: `${s.mfCases} SIPs.`, value: formatINR(s.sipAnnual), icon: Users },
    ];
  };

  const downloadPdf = async () => {
    if (!stats) return;
    setDownloading(true);
    try {
      const [{ default: jsPDF }, autoTable] = await Promise.all([
        import("jspdf"),
        import("jspdf-autotable").then((m) => m.default),
      ]);
      const doc = new jsPDF();
      const now = new Date().toLocaleString("en-IN");
      doc.setFontSize(18);
      doc.setTextColor(23, 53, 126);
      doc.text("Aarthvaahini — CRM Reports & MIS", 14, 18);
      doc.setFontSize(10);
      doc.setTextColor(100);
      doc.text(`Generated: ${now}`, 14, 25);

      const rows = buildReports(stats).map((r) => [r.name, r.value, r.desc]);
      autoTable(doc, {
        startY: 32,
        head: [["Report", "Value", "Details"]],
        body: rows,
        theme: "grid",
        headStyles: { fillColor: [23, 53, 126], textColor: 255, fontStyle: "bold" },
        styles: { fontSize: 10, cellPadding: 3 },
        columnStyles: { 0: { fontStyle: "bold", cellWidth: 55 }, 1: { cellWidth: 40 } },
      });

      doc.save(`aarthvaahini-reports-${new Date().toISOString().slice(0, 10)}.pdf`);
      toast.success("PDF downloaded");
    } catch (e: any) {
      toast.error(e.message ?? "PDF failed");
    }
    setDownloading(false);
  };

  if (!stats) {
    return (
      <div className="flex h-60 items-center justify-center">
        <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
      </div>
    );
  }

  const reports = buildReports(stats);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Reports & MIS</h1>
          <p className="text-sm text-slate-500">Live numbers from your CRM pipeline.</p>
        </div>
        <Button
          onClick={downloadPdf}
          disabled={downloading}
          className="bg-gradient-to-r from-sky-600 to-blue-600 text-white hover:opacity-90"
        >
          {downloading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Download className="mr-2 h-4 w-4" />}
          Download PDF
        </Button>
      </div>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {reports.map((r) => {
          const Icon = r.icon;
          return (
            <Card key={r.name} className="p-5">
              <div className="flex items-start gap-3">
                <div className="rounded-md bg-blue-50 p-2 text-blue-600">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-slate-900">{r.name}</div>
                  <div className="mt-1 text-xs text-slate-500">{r.desc}</div>
                  <div className="mt-3 text-xl font-bold text-slate-900">{r.value}</div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
