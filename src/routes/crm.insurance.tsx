import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, ShieldCheck, Search, Phone, Mail } from "lucide-react";

export const Route = createFileRoute("/crm/insurance")({
  component: InsurancePage,
});

type Lead = {
  id: string;
  full_name: string;
  phone: string | null;
  email: string | null;
  city: string | null;
  product_name: string | null;
  product_type: string | null;
  amount: number | null;
  status: string;
  lead_source: string | null;
  created_at: string;
};

function InsurancePage() {
  const [rows, setRows] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<string>("all");

  const load = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("leads")
      .select(
        "id, full_name, phone, email, city, product_name, product_type, amount, status, lead_source, created_at",
      )
      .eq("product_type", "insurance")
      .order("created_at", { ascending: false });
    setRows((data ?? []) as Lead[]);
    setLoading(false);
  };

  useEffect(() => {
    load();
    const ch = supabase
      .channel("insurance-leads")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "leads" },
        () => load(),
      )
      .subscribe();
    return () => {
      supabase.removeChannel(ch);
    };
  }, []);

  const filtered = rows.filter((r) => {
    if (status !== "all" && r.status !== status) return false;
    if (!q) return true;
    const s = q.toLowerCase();
    return (
      r.full_name?.toLowerCase().includes(s) ||
      r.phone?.includes(q) ||
      r.email?.toLowerCase().includes(s) ||
      r.product_name?.toLowerCase().includes(s)
    );
  });

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-green-500 p-5 text-white shadow-lg">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
        <div className="relative flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
              <ShieldCheck className="h-3 w-3" /> Insurance
            </div>
            <h1 className="mt-2 text-2xl font-bold md:text-3xl">
              Insurance Leads
            </h1>
            <p className="text-sm text-white/80">
              {rows.length} insurance lead{rows.length === 1 ? "" : "s"} · auto-routed from website
            </p>
          </div>
        </div>
      </div>

      <Card className="p-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative min-w-[220px] flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search name, phone, email, product…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="pl-9"
            />
          </div>
          <select
            className="h-9 rounded-md border border-input bg-white px-3 text-sm"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Quote Shared">Quote Shared</option>
            <option value="Proposal">Proposal</option>
            <option value="Issued">Issued</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </Card>

      <Card className="overflow-hidden">
        {loading ? (
          <div className="flex h-40 items-center justify-center">
            <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-10 text-center text-sm text-slate-500">
            No insurance leads yet. New enquiries from the website will appear
            here automatically.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>City</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Received</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((r) => (
                  <TableRow key={r.id}>
                    <TableCell className="font-medium">{r.full_name}</TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-0.5 text-xs">
                        {r.phone && (
                          <span className="flex items-center gap-1">
                            <Phone className="h-3 w-3 text-slate-400" />
                            {r.phone}
                          </span>
                        )}
                        {r.email && (
                          <span className="flex items-center gap-1 text-slate-500">
                            <Mail className="h-3 w-3 text-slate-400" />
                            {r.email}
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="capitalize">
                      {r.product_name ?? "—"}
                    </TableCell>
                    <TableCell>{r.city ?? "—"}</TableCell>
                    <TableCell className="text-xs text-slate-500">
                      {r.lead_source ?? "—"}
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{r.status}</Badge>
                    </TableCell>
                    <TableCell className="text-xs text-slate-500">
                      {new Date(r.created_at).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </Card>

      <div className="text-right">
        <Link to="/crm/leads">
          <Button variant="outline" size="sm">
            View all leads →
          </Button>
        </Link>
      </div>
    </div>
  );
}
