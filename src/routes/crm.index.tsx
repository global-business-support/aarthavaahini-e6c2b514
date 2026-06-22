import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import {
  Users,
  Clock,
  Banknote,
  ShieldCheck,
  TrendingUp,
  IndianRupee,
  CheckSquare,
  AlertTriangle,
  ArrowUpRight,
  Activity,
  UserCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CustomerProfileDialog } from "@/components/crm/CustomerProfileDialog";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip as RTooltip,
  CartesianGrid,
  BarChart,
  Bar,
  Legend,
  PieChart,
  Pie,
  Cell,
  ComposedChart,
  Line,
} from "recharts";

export const Route = createFileRoute("/crm/")({ component: DashboardPage });

type Stats = {
  totalLeads: number;
  totalCustomers: number;
  followupsDue: number;
  loanPipeline: number;
  insurancePipeline: number;
  mfPipeline: number;
  revenue: number;
  pendingTasks: number;
  slaAlerts: number;
};

const STAGE_COLORS = ["#0ea5e9", "#8b5cf6", "#6366f1", "#f59e0b", "#10b981", "#64748b"];

function DashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [recentLeads, setRecentLeads] = useState<
    { id: string; full_name: string; product_type: string; status: string; created_at: string }[]
  >([]);
  const [leadTrend, setLeadTrend] = useState<{ day: string; leads: number }[]>([]);
  const [customerStages, setCustomerStages] = useState<{ name: string; value: number }[]>([]);
  const [loanByStage, setLoanByStage] = useState<
    { stage: string; requested: number; sanctioned: number; disbursed: number }[]
  >([]);

  const loadDashboard = useCallback(async () => {
    const now = new Date().toISOString();
    const since = new Date(Date.now() - 29 * 24 * 60 * 60 * 1000).toISOString();
    const [leads, customers, followups, loans, insurance, funds, tasks, sla, recent, last30, disb, custStage, loanRows] =
      await Promise.all([
        supabase.from("leads").select("id", { count: "exact", head: true }),
        supabase.from("customers").select("id", { count: "exact", head: true }),
        supabase.from("tasks").select("id", { count: "exact", head: true }).lte("due_date", now).neq("status", "done"),
        supabase.from("loan_cases").select("loan_amount, stage").not("stage", "in", '("Completed","Closed")'),
        supabase.from("insurance_cases").select("premium, policy_status").not("policy_status", "in", '("Issued","Closed")'),
        supabase.from("mutual_funds").select("sip_amount, status").not("status", "in", '("Portfolio Review","Closed")'),
        supabase.from("tasks").select("id", { count: "exact", head: true }).neq("status", "done"),
        supabase.from("tasks").select("id", { count: "exact", head: true }).lt("due_date", now).neq("status", "done"),
        supabase.from("leads").select("id, full_name, product_type, status, created_at").order("created_at", { ascending: false }).limit(6),
        supabase.from("leads").select("created_at").gte("created_at", since),
        supabase.from("loan_cases").select("disbursement_amount"),
        supabase.from("customers").select("stage"),
        supabase.from("loan_cases").select("stage, requested_amount, sanction_amount, disbursement_amount"),
      ]);

    const sum = <T extends Record<string, unknown>>(rows: T[] | null, key: string) =>
      (rows ?? []).reduce((acc, r) => acc + (Number(r[key]) || 0), 0);

    setStats({
      totalLeads: leads.count ?? 0,
      totalCustomers: customers.count ?? 0,
      followupsDue: followups.count ?? 0,
      loanPipeline: sum(loans.data, "loan_amount"),
      insurancePipeline: sum(insurance.data, "premium"),
      mfPipeline: sum(funds.data, "sip_amount") * 12,
      revenue: sum(disb.data, "disbursement_amount"),
      pendingTasks: tasks.count ?? 0,
      slaAlerts: sla.count ?? 0,
    });
    setRecentLeads(recent.data ?? []);

    // 30-day lead trend
    const buckets: Record<string, number> = {};
    for (let i = 29; i >= 0; i--) {
      const d = new Date(Date.now() - i * 24 * 60 * 60 * 1000);
      buckets[d.toISOString().slice(0, 10)] = 0;
    }
    (last30.data ?? []).forEach((r: { created_at: string }) => {
      const key = r.created_at.slice(0, 10);
      if (buckets[key] !== undefined) buckets[key] += 1;
    });
    setLeadTrend(
      Object.entries(buckets).map(([k, v]) => ({
        day: new Date(k).toLocaleDateString("en-IN", { day: "numeric", month: "short" }),
        leads: v,
      })),
    );

    // Customer stage donut
    const stageMap: Record<string, number> = {};
    (custStage.data ?? []).forEach((c: { stage: string | null }) => {
      const s = c.stage || "New";
      stageMap[s] = (stageMap[s] || 0) + 1;
    });
    setCustomerStages(Object.entries(stageMap).map(([name, value]) => ({ name, value })));

    // Loan by stage composed bar
    const loanMap: Record<string, { requested: number; sanctioned: number; disbursed: number }> = {};
    (loanRows.data ?? []).forEach(
      (r: { stage: string | null; requested_amount: number | null; sanction_amount: number | null; disbursement_amount: number | null }) => {
        const s = r.stage || "Lead";
        if (!loanMap[s]) loanMap[s] = { requested: 0, sanctioned: 0, disbursed: 0 };
        loanMap[s].requested += Number(r.requested_amount) || 0;
        loanMap[s].sanctioned += Number(r.sanction_amount) || 0;
        loanMap[s].disbursed += Number(r.disbursement_amount) || 0;
      },
    );
    setLoanByStage(
      Object.entries(loanMap).map(([stage, v]) => ({
        stage,
        requested: Math.round(v.requested / 1e5),
        sanctioned: Math.round(v.sanctioned / 1e5),
        disbursed: Math.round(v.disbursed / 1e5),
      })),
    );
  }, []);

  useEffect(() => {
    loadDashboard();

    const channel = supabase
      .channel("crm-dashboard")
      .on("postgres_changes", { event: "*", schema: "public", table: "leads" }, () => loadDashboard())
      .on("postgres_changes", { event: "*", schema: "public", table: "customers" }, () => loadDashboard())
      .on("postgres_changes", { event: "*", schema: "public", table: "tasks" }, () => loadDashboard())
      .on("postgres_changes", { event: "*", schema: "public", table: "loan_cases" }, () => loadDashboard())
      .on("postgres_changes", { event: "*", schema: "public", table: "insurance_cases" }, () => loadDashboard())
      .on("postgres_changes", { event: "*", schema: "public", table: "mutual_funds" }, () => loadDashboard())
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [loadDashboard]);

  const cards = [
    { label: "Total Leads", value: stats?.totalLeads, icon: Users, tone: "sky", trend: "All time" },
    { label: "Customers", value: stats?.totalCustomers, icon: UserCircle2, tone: "violet", trend: "Active" },
    { label: "Followups Due", value: stats?.followupsDue, icon: Clock, tone: "amber", trend: "Today" },
    { label: "Loan Pipeline", value: stats && formatINR(stats.loanPipeline), icon: Banknote, tone: "emerald", trend: "Open" },
    { label: "Insurance", value: stats && formatINR(stats.insurancePipeline), icon: ShieldCheck, tone: "indigo", trend: "Open" },
    { label: "MF Annual SIP", value: stats && formatINR(stats.mfPipeline), icon: TrendingUp, tone: "cyan", trend: "Y/Y" },
    { label: "Disbursed", value: stats && formatINR(stats.revenue), icon: IndianRupee, tone: "blue", trend: "Revenue" },
    { label: "SLA Alerts", value: stats?.slaAlerts, icon: AlertTriangle, tone: "rose", trend: "Action" },
  ] as const;

  return (
    <div className="space-y-5">
      {/* Welcome strip */}
      <div className="relative flex flex-wrap items-center justify-between gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-500 px-5 py-4 text-white shadow-lg shadow-sky-500/25">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute -left-10 -bottom-10 h-24 w-24 rounded-full bg-cyan-300/30 blur-2xl" />
        <div className="relative flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm ring-1 ring-white/30">
            <Activity className="h-5 w-5" />
          </div>
          <div>
            <div className="text-base font-semibold leading-tight">Welcome back 👋</div>
            <div className="text-xs text-white/85">Realtime overview — leads, customers, loans synced live</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 animate-pulse rounded-full bg-emerald-300 shadow-[0_0_8px] shadow-emerald-300" />
          <Badge className="border-white/30 bg-white/20 text-white">
            {new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "short" })}
          </Badge>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <Card
              key={c.label}
              className="group relative overflow-hidden border-sky-100 bg-white/85 p-4 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className={cn("absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-50 blur-2xl", toneBlur(c.tone))} />
              <div className="relative flex items-start justify-between">
                <div className={cn("rounded-xl p-2 shadow-sm", toneBg(c.tone))}>
                  <Icon className={cn("h-4 w-4", toneFg(c.tone))} />
                </div>
                <Badge variant="secondary" className="text-[10px] font-medium bg-sky-50 text-sky-700">{c.trend}</Badge>
              </div>
              <div className="relative mt-3">
                <div className="text-[11px] font-medium uppercase tracking-wide text-slate-500">{c.label}</div>
                <div className="mt-0.5 text-xl font-bold tracking-tight text-slate-900">{c.value ?? "—"}</div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* 3 charts: Leads (Area) · Customers (Donut) · Loans (Composed Bar) */}
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Leads — Area trend */}
        <Card className="p-5 lg:col-span-1">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">Leads · 30 days</h2>
              <p className="text-xs text-slate-500">Daily new leads captured.</p>
            </div>
            <Badge variant="outline" className="border-sky-200 bg-sky-50 text-sky-700">Trend</Badge>
          </div>
          <div className="mt-4 h-60 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={leadTrend} margin={{ top: 5, right: 8, left: -22, bottom: 0 }}>
                <defs>
                  <linearGradient id="leadFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0ea5e9" stopOpacity={0.55} />
                    <stop offset="100%" stopColor="#0ea5e9" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="day" tick={{ fontSize: 10, fill: "#64748b" }} tickLine={false} axisLine={false} interval={4} />
                <YAxis tick={{ fontSize: 10, fill: "#64748b" }} tickLine={false} axisLine={false} allowDecimals={false} />
                <RTooltip contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12 }} />
                <Area type="monotone" dataKey="leads" stroke="#0284c7" strokeWidth={2.5} fill="url(#leadFill)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Customers — Donut */}
        <Card className="p-5 lg:col-span-1">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">Customers · By Stage</h2>
              <p className="text-xs text-slate-500">Distribution across pipeline.</p>
            </div>
            <Badge variant="outline" className="border-violet-200 bg-violet-50 text-violet-700">Live</Badge>
          </div>
          <div className="mt-4 h-60 w-full">
            {customerStages.length === 0 ? (
              <div className="flex h-full items-center justify-center text-xs text-slate-400">No customers yet</div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <RTooltip contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12 }} />
                  <Pie
                    data={customerStages}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={85}
                    paddingAngle={3}
                    dataKey="value"
                    nameKey="name"
                  >
                    {customerStages.map((_, i) => (
                      <Cell key={i} fill={STAGE_COLORS[i % STAGE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend wrapperStyle={{ fontSize: 10 }} iconSize={8} />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>
        </Card>

        {/* Loans — Composed bar+line */}
        <Card className="p-5 lg:col-span-1">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">Loans · ₹ Lakh by Stage</h2>
              <p className="text-xs text-slate-500">Requested · Sanctioned · Disbursed.</p>
            </div>
            <Badge variant="outline" className="border-emerald-200 bg-emerald-50 text-emerald-700">₹L</Badge>
          </div>
          <div className="mt-4 h-60 w-full">
            {loanByStage.length === 0 ? (
              <div className="flex h-full items-center justify-center text-xs text-slate-400">No loan cases</div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={loanByStage} margin={{ top: 5, right: 8, left: -22, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                  <XAxis dataKey="stage" tick={{ fontSize: 10, fill: "#64748b" }} tickLine={false} axisLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: "#64748b" }} tickLine={false} axisLine={false} />
                  <RTooltip contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12 }} />
                  <Legend wrapperStyle={{ fontSize: 10 }} iconSize={8} />
                  <Bar dataKey="requested" name="Requested" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="sanctioned" name="Sanctioned" fill="#10b981" radius={[4, 4, 0, 0]} />
                  <Line type="monotone" dataKey="disbursed" name="Disbursed" stroke="#0284c7" strokeWidth={2.5} dot={{ r: 3 }} />
                </ComposedChart>
              </ResponsiveContainer>
            )}
          </div>
        </Card>
      </div>

      {/* Recent leads */}
      <Card className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">Recent Leads</h2>
            <p className="text-xs text-slate-500">Latest leads captured from website and team.</p>
          </div>
          <a href="/crm/leads" className="inline-flex items-center gap-1 text-xs font-medium text-sky-600 hover:text-sky-700">
            View all <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
        <div className="mt-3 divide-y divide-sky-50">
          {recentLeads.length === 0 && <div className="py-6 text-center text-xs text-slate-400">No leads yet.</div>}
          {recentLeads.map((l) => (
            <div key={l.id} className="flex items-center justify-between py-3">
              <a
                href={`/crm/customers?q=${encodeURIComponent(l.full_name ?? "")}`}
                className="flex items-center gap-3 group"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-[11px] font-semibold text-white">
                  {(l.full_name ?? "?").slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="text-sm font-medium text-sky-700 group-hover:underline">{l.full_name}</div>
                  <div className="text-xs capitalize text-slate-500">{l.product_type?.replace(/_/g, " ")}</div>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <Badge variant="outline" className="capitalize">{l.status}</Badge>
                <div className="hidden text-xs text-slate-400 sm:block">{new Date(l.created_at).toLocaleDateString("en-IN")}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function formatINR(v: number) {
  if (v >= 1e7) return `₹${(v / 1e7).toFixed(2)} Cr`;
  if (v >= 1e5) return `₹${(v / 1e5).toFixed(2)} L`;
  return `₹${Math.round(v).toLocaleString("en-IN")}`;
}
function toneBg(t: string) {
  return ({
    sky: "bg-sky-100", blue: "bg-blue-100", amber: "bg-amber-100", emerald: "bg-emerald-100",
    violet: "bg-violet-100", cyan: "bg-cyan-100", slate: "bg-slate-200", rose: "bg-rose-100", indigo: "bg-indigo-100",
  } as Record<string, string>)[t];
}
function toneFg(t: string) {
  return ({
    sky: "text-sky-600", blue: "text-blue-600", amber: "text-amber-600", emerald: "text-emerald-600",
    violet: "text-violet-600", cyan: "text-cyan-600", slate: "text-slate-600", rose: "text-rose-600", indigo: "text-indigo-600",
  } as Record<string, string>)[t];
}
function toneBlur(t: string) {
  return ({
    sky: "bg-sky-300/40", blue: "bg-blue-300/40", amber: "bg-amber-300/40", emerald: "bg-emerald-300/40",
    violet: "bg-violet-300/40", cyan: "bg-cyan-300/40", slate: "bg-slate-300/40", rose: "bg-rose-300/40", indigo: "bg-indigo-300/40",
  } as Record<string, string>)[t];
}
