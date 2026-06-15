import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { getMyPartner, listMyPartnerLeads } from "@/lib/partners.functions";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Users, IndianRupee, TrendingUp, Handshake } from "lucide-react";

export const Route = createFileRoute("/partner/")({ component: PartnerDashboard });

function PartnerDashboard() {
  const fetchP = useServerFn(getMyPartner);
  const fetchL = useServerFn(listMyPartnerLeads);
  const [partner, setPartner] = useState<any>(null);
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([fetchP(), fetchL()])
      .then(([p, l]) => { setPartner(p.partner); setLeads(l.leads); })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="flex h-64 items-center justify-center"><Loader2 className="h-6 w-6 animate-spin text-emerald-500" /></div>;

  const totalAmount = leads.reduce((a, l) => a + (Number(l.amount) || 0), 0);
  const commission = (totalAmount * (Number(partner?.commission_pct) || 0)) / 100;
  const closed = leads.filter((l) => l.status === "closed" || l.status === "approved").length;

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 p-6 text-white shadow-lg">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
        <div className="relative">
          <div className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
            <Handshake className="h-3 w-3" /> Welcome
          </div>
          <h1 className="mt-2 text-2xl font-bold md:text-3xl">Hello, {partner?.name}</h1>
          <p className="text-sm text-white/80">{partner?.organisation || partner?.category} · {partner?.city || "—"}</p>
          <div className="mt-2"><Badge className="bg-white/20 text-white">{partner?.status}</Badge></div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat icon={<Users className="h-5 w-5" />} label="Total Leads" value={leads.length} />
        <Stat icon={<TrendingUp className="h-5 w-5" />} label="Closed" value={closed} />
        <Stat icon={<IndianRupee className="h-5 w-5" />} label="Total Disbursed" value={`₹${totalAmount.toLocaleString("en-IN")}`} />
        <Stat icon={<IndianRupee className="h-5 w-5" />} label={`Commission @ ${partner?.commission_pct || 0}%`} value={`₹${commission.toLocaleString("en-IN")}`} />
      </div>

      <Card className="p-4">
        <div className="mb-3 text-sm font-semibold text-slate-700">Recent Leads</div>
        {leads.length === 0 ? (
          <div className="py-8 text-center text-sm text-slate-500">No leads yet. Add your first lead from "My Leads".</div>
        ) : (
          <div className="space-y-2">
            {leads.slice(0, 5).map((l) => (
              <div key={l.id} className="flex items-center justify-between rounded-lg border border-slate-100 p-3">
                <div>
                  <div className="text-sm font-medium">{l.full_name}</div>
                  <div className="text-xs text-slate-500">{l.product_type} · {l.phone}</div>
                </div>
                <Badge variant="secondary">{l.status}</Badge>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <Card className="flex items-center gap-3 p-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">{icon}</div>
      <div className="min-w-0">
        <div className="text-xs text-slate-500">{label}</div>
        <div className="truncate text-lg font-bold text-slate-900">{value}</div>
      </div>
    </Card>
  );
}
