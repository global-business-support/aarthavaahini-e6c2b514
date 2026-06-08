import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter,
} from "@/components/ui/dialog";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useCrmAuth } from "@/hooks/useCrmAuth";
import { listEmployees } from "@/lib/employees.functions";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import {
  CalendarClock, Plus, Loader2, Trash2, MapPin, Clock, Sparkles, CheckCircle2, PlayCircle, XCircle,
} from "lucide-react";

export const Route = createFileRoute("/crm/schedule")({
  head: () => ({ meta: [{ title: "Schedule — CRM" }] }),
  component: SchedulePage,
});

type Schedule = {
  id: string;
  employee_id: string;
  title: string;
  description: string | null;
  scheduled_for: string;
  duration_minutes: number;
  location: string | null;
  priority: string;
  status: string;
  created_at: string;
};
type Emp = { id: string; email: string | null; full_name: string | null };

const STATUS_TONES: Record<string, string> = {
  scheduled: "bg-sky-100 text-sky-700 border-sky-200",
  in_progress: "bg-amber-100 text-amber-700 border-amber-200",
  completed: "bg-emerald-100 text-emerald-700 border-emerald-200",
  cancelled: "bg-rose-100 text-rose-700 border-rose-200",
};
const PRIORITY_TONES: Record<string, string> = {
  low: "bg-slate-100 text-slate-600",
  normal: "bg-violet-100 text-violet-700",
  high: "bg-rose-100 text-rose-700",
};

function SchedulePage() {
  const { user, isAdmin } = useCrmAuth();
  const list = useServerFn(listEmployees);
  const [items, setItems] = useState<Schedule[]>([]);
  const [emps, setEmps] = useState<Emp[]>([]);
  const [busy, setBusy] = useState(false);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    employee_id: "",
    title: "",
    description: "",
    scheduled_for: new Date(Date.now() + 60 * 60 * 1000).toISOString().slice(0, 16),
    duration_minutes: 60,
    location: "",
    priority: "normal",
  });

  const load = async () => {
    setBusy(true);
    const { data, error } = await supabase
      .from("employee_schedules")
      .select("*")
      .order("scheduled_for", { ascending: true });
    if (error) toast.error(error.message);
    setItems((data ?? []) as Schedule[]);
    setBusy(false);
  };

  const loadEmps = async () => {
    if (!isAdmin) return;
    try {
      const r = await list();
      setEmps((r.employees ?? []) as Emp[]);
    } catch (e: any) { toast.error(e.message); }
  };

  useEffect(() => { if (user) { load(); loadEmps(); } }, [user, isAdmin]);

  const empById = useMemo(() => {
    const m = new Map<string, Emp>();
    for (const e of emps) m.set(e.id, e);
    return m;
  }, [emps]);

  const submit = async () => {
    if (!form.title || !form.employee_id || !form.scheduled_for) {
      toast.error("Title, employee and date required"); return;
    }
    setBusy(true);
    const { error } = await supabase.from("employee_schedules").insert({
      employee_id: form.employee_id,
      title: form.title,
      description: form.description || null,
      scheduled_for: new Date(form.scheduled_for).toISOString(),
      duration_minutes: Number(form.duration_minutes) || 60,
      location: form.location || null,
      priority: form.priority,
      created_by: user?.id ?? null,
    });
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Schedule created");
    setOpen(false);
    setForm({ ...form, title: "", description: "", location: "" });
    load();
  };

  const setStatus = async (id: string, status: string) => {
    const { error } = await supabase.from("employee_schedules").update({ status }).eq("id", id);
    if (error) return toast.error(error.message);
    setItems((p) => p.map((s) => (s.id === id ? { ...s, status } : s)));
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this schedule?")) return;
    const { error } = await supabase.from("employee_schedules").delete().eq("id", id);
    if (error) return toast.error(error.message);
    setItems((p) => p.filter((s) => s.id !== id));
  };

  // Group by date
  const grouped = useMemo(() => {
    const g = new Map<string, Schedule[]>();
    for (const it of items) {
      const k = new Date(it.scheduled_for).toLocaleDateString("en-IN", {
        weekday: "long", day: "numeric", month: "long", year: "numeric",
      });
      g.set(k, [...(g.get(k) ?? []), it]);
    }
    return Array.from(g.entries());
  }, [items]);

  return (
    <div className="space-y-4">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-500 via-indigo-500 to-violet-500 p-5 text-white shadow-lg shadow-indigo-500/20 md:p-6">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-12 right-24 h-36 w-36 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="relative flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
              <Sparkles className="h-3 w-3" /> Team Schedule
            </div>
            <h1 className="mt-2 font-display text-2xl font-bold md:text-3xl">
              {isAdmin ? "Employee Work Schedule" : "My Schedule"}
            </h1>
            <p className="text-sm text-white/80">
              {items.length} scheduled · {items.filter((s) => s.status === "completed").length} completed
            </p>
          </div>
          {isAdmin && (
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className="bg-white text-indigo-700 shadow-md hover:bg-sky-50">
                  <Plus className="mr-2 h-4 w-4" /> Assign Schedule
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg bg-gradient-to-br from-white via-sky-50/60 to-violet-50/60">
                <DialogHeader>
                  <DialogTitle className="bg-gradient-to-r from-sky-600 to-violet-600 bg-clip-text text-transparent">
                    Schedule Work for Employee
                  </DialogTitle>
                </DialogHeader>
                <div className="grid gap-3">
                  <div>
                    <Label>Employee</Label>
                    <Select value={form.employee_id} onValueChange={(v) => setForm({ ...form, employee_id: v })}>
                      <SelectTrigger className="border-indigo-200"><SelectValue placeholder="Pick employee" /></SelectTrigger>
                      <SelectContent>
                        {emps.map((e) => (
                          <SelectItem key={e.id} value={e.id}>
                            {e.full_name || e.email} {e.email && e.full_name ? `· ${e.email}` : ""}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Title</Label>
                    <Input className="border-violet-200" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Client visit — ABC Industries" />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Textarea className="border-fuchsia-200" rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Notes / agenda" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label>Date & Time</Label>
                      <Input type="datetime-local" className="border-sky-200" value={form.scheduled_for} onChange={(e) => setForm({ ...form, scheduled_for: e.target.value })} />
                    </div>
                    <div>
                      <Label>Duration (min)</Label>
                      <Input type="number" min={15} step={15} className="border-amber-200" value={form.duration_minutes} onChange={(e) => setForm({ ...form, duration_minutes: Number(e.target.value) })} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label>Location</Label>
                      <Input className="border-emerald-200" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="Branch / address" />
                    </div>
                    <div>
                      <Label>Priority</Label>
                      <Select value={form.priority} onValueChange={(v) => setForm({ ...form, priority: v })}>
                        <SelectTrigger className="border-rose-200"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="normal">Normal</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                  <Button onClick={submit} disabled={busy} className="bg-gradient-to-r from-sky-600 to-violet-600 text-white hover:opacity-90">
                    {busy && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Create
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>

      {busy && items.length === 0 && (
        <Card className="flex h-40 items-center justify-center"><Loader2 className="h-5 w-5 animate-spin text-slate-400" /></Card>
      )}
      {!busy && items.length === 0 && (
        <Card className="border-dashed bg-white/70 p-10 text-center">
          <CalendarClock className="mx-auto h-10 w-10 text-violet-300" />
          <div className="mt-3 text-sm font-semibold text-slate-700">No schedules yet</div>
          <p className="text-xs text-slate-500">{isAdmin ? "Assign tasks to your employees to get started." : "You have no work scheduled. Check back later."}</p>
        </Card>
      )}

      {grouped.map(([day, list]) => (
        <div key={day} className="space-y-2">
          <div className="flex items-center gap-2 px-1">
            <div className="h-1 w-6 rounded-full bg-gradient-to-r from-violet-500 to-rose-500" />
            <h2 className="text-sm font-bold text-slate-800">{day}</h2>
            <Badge variant="secondary" className="text-[10px]">{list.length}</Badge>
          </div>
          <div className="grid gap-2.5 md:grid-cols-2">
            {list.map((s) => {
              const emp = empById.get(s.employee_id);
              const time = new Date(s.scheduled_for).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
              const isMine = s.employee_id === user?.id;
              return (
                <Card key={s.id} className="relative overflow-hidden border-slate-200/70 p-4 transition hover:shadow-md">
                  <div className={`absolute left-0 top-0 h-full w-1.5 ${s.priority === "high" ? "bg-gradient-to-b from-rose-500 to-pink-500" : s.priority === "low" ? "bg-gradient-to-b from-slate-300 to-slate-400" : "bg-gradient-to-b from-violet-500 to-fuchsia-500"}`} />
                  <div className="flex items-start justify-between gap-3 pl-2">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <h3 className="text-sm font-semibold text-slate-900">{s.title}</h3>
                        <Badge className={`border ${STATUS_TONES[s.status]} text-[10px] capitalize`} variant="outline">{s.status.replace("_", " ")}</Badge>
                        <Badge className={`${PRIORITY_TONES[s.priority]} text-[10px] capitalize`} variant="outline">{s.priority}</Badge>
                      </div>
                      {s.description && <p className="mt-1 text-xs text-slate-600">{s.description}</p>}
                      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-500">
                        <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {time} · {s.duration_minutes} min</span>
                        {s.location && <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {s.location}</span>}
                        {isAdmin && emp && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-1.5 py-0.5 font-medium text-violet-700">
                            {emp.full_name || emp.email}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      {(isAdmin || isMine) && s.status !== "completed" && (
                        <Button size="sm" variant="ghost" className="h-7 px-2 text-emerald-600 hover:bg-emerald-50" onClick={() => setStatus(s.id, "completed")}>
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        </Button>
                      )}
                      {(isAdmin || isMine) && s.status === "scheduled" && (
                        <Button size="sm" variant="ghost" className="h-7 px-2 text-amber-600 hover:bg-amber-50" onClick={() => setStatus(s.id, "in_progress")}>
                          <PlayCircle className="h-3.5 w-3.5" />
                        </Button>
                      )}
                      {(isAdmin || isMine) && s.status !== "cancelled" && s.status !== "completed" && (
                        <Button size="sm" variant="ghost" className="h-7 px-2 text-rose-600 hover:bg-rose-50" onClick={() => setStatus(s.id, "cancelled")}>
                          <XCircle className="h-3.5 w-3.5" />
                        </Button>
                      )}
                      {isAdmin && (
                        <Button size="sm" variant="ghost" className="h-7 px-2 text-slate-500 hover:bg-slate-100" onClick={() => remove(s.id)}>
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
