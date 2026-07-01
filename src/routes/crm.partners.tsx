import { createFileRoute } from "@tanstack/react-router";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import {
  Loader2,
  Handshake,
  Search,
  Phone,
  Mail,
  MapPin,
  Eye,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/crm/partners")({
  component: PartnersPage,
});

type PartnerLead = {
  id: string;
  full_name: string;
  phone: string | null;
  email: string | null;
  city: string | null;
  product_name: string | null;
  status: string;
  lead_source: string | null;
  message: string | null;
  created_at: string;
};

function PartnersPage() {
  const [rows, setRows] = useState<PartnerLead[]>([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("all");
  const [view, setView] = useState<PartnerLead | null>(null);

  const load = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("leads")
      .select(
        "id, full_name, phone, email, city, product_name, status, lead_source, message, created_at",
      )
      .eq("product_type", "partner")
      .order("created_at", { ascending: false });
    setRows((data ?? []) as PartnerLead[]);
    setLoading(false);
  };

  useEffect(() => {
    load();
    const ch = supabase
      .channel("partner-leads")
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

  const updateStatus = async (id: string, newStatus: string) => {
    const { error } = await supabase
      .from("leads")
      .update({ status: newStatus })
      .eq("id", id);
    if (error) return toast.error(error.message);
    toast.success(`Marked as ${newStatus}`);
    load();
  };

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

  const counts = {
    total: rows.length,
    pending: rows.filter((r) => r.status === "New").length,
    approved: rows.filter((r) => r.status === "Approved").length,
  };

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500 p-5 text-white shadow-lg">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
        <div className="relative flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
              <Handshake className="h-3 w-3" /> Channel Partners
            </div>
            <h1 className="mt-2 text-2xl font-bold md:text-3xl">Partner Applications</h1>
            <p className="text-sm text-white/80">
              {counts.total} total · {counts.pending} pending review · {counts.approved} approved
            </p>
          </div>
          <a
            href="/partner-signup"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-sky-700 shadow-md hover:bg-white"
          >
            View public signup →
          </a>
        </div>
      </div>

      <Card className="p-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative min-w-[220px] flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search name, phone, email, category…"
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
            <option value="New">New / Pending</option>
            <option value="Contacted">Contacted</option>
            <option value="Approved">Approved</option>
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
            No partner applications yet. Applications from{" "}
            <a
              href="/partner-signup"
              className="font-medium text-sky-600 underline"
            >
              /partner-signup
            </a>{" "}
            will appear here.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Partner</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>City</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Applied</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
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
                    <TableCell>
                      <Badge variant="secondary">{r.product_name ?? "—"}</Badge>
                    </TableCell>
                    <TableCell>
                      {r.city ? (
                        <span className="flex items-center gap-1 text-xs">
                          <MapPin className="h-3 w-3 text-slate-400" />
                          {r.city}
                        </span>
                      ) : (
                        "—"
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={
                          r.status === "Approved"
                            ? "bg-emerald-100 text-emerald-700"
                            : r.status === "Rejected"
                              ? "bg-red-100 text-red-700"
                              : "bg-amber-100 text-amber-700"
                        }
                      >
                        {r.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-xs text-slate-500">
                      {new Date(r.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-end gap-1">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setView(r)}
                          title="View details"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-emerald-600 hover:bg-emerald-50"
                          onClick={() => updateStatus(r.id, "Approved")}
                          title="Approve"
                        >
                          <CheckCircle2 className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-red-600 hover:bg-red-50"
                          onClick={() => updateStatus(r.id, "Rejected")}
                          title="Reject"
                        >
                          <XCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </Card>

      <Dialog open={!!view} onOpenChange={(o) => !o && setView(null)}>
        <DialogContent className="max-w-lg bg-white">
          <DialogHeader>
            <DialogTitle>{view?.full_name}</DialogTitle>
          </DialogHeader>
          {view && (
            <div className="space-y-3 text-sm">
              <Row label="Phone" value={view.phone} />
              <Row label="Email" value={view.email} />
              <Row label="City" value={view.city} />
              <Row label="Category" value={view.product_name} />
              <Row label="Source" value={view.lead_source} />
              <Row label="Status" value={view.status} />
              <div>
                <div className="text-xs font-semibold uppercase text-slate-500">
                  Message
                </div>
                <pre className="mt-1 whitespace-pre-wrap rounded-lg bg-slate-50 p-3 text-xs text-slate-700">
                  {view.message ?? "—"}
                </pre>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string | null }) {
  return (
    <div className="flex justify-between border-b border-slate-100 pb-1.5">
      <span className="text-xs font-semibold uppercase text-slate-500">
        {label}
      </span>
      <span className="text-slate-800">{value ?? "—"}</span>
    </div>
  );
}
