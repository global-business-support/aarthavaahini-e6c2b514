import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/crm/tasks")({ component: TasksPage });

type Row = { id: string; title: string; description: string | null; task_type: string | null; status: string; priority: string; due_date: string | null };

function TasksPage() {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskType, setTaskType] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState("");
  const [saving, setSaving] = useState(false);

  const loadTasks = async () => {
    const { data } = await supabase.from("tasks").select("*").order("due_date", { ascending: true });
    setRows((data ?? []) as Row[]);
    setLoading(false);
  };

  useEffect(() => {
    loadTasks();
    const channel = supabase
      .channel("crm-tasks")
      .on("postgres_changes", { event: "*", schema: "public", table: "tasks" }, () => loadTasks())
      .subscribe();
    return () => {
      channel.unsubscribe();
    };
  }, []);

  const addTask = async () => {
    if (!taskTitle.trim()) {
      toast.error("Please enter a task title.");
      return;
    }

    setSaving(true);
    const { error } = await supabase.from("tasks").insert({
      title: taskTitle.trim(),
      task_type: taskType || null,
      priority,
      status: "pending",
      due_date: dueDate ? new Date(dueDate).toISOString() : null,
      description: description.trim() || null,
      related_customer_id: null,
    });
    setSaving(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    setTaskTitle("");
    setTaskType("");
    setPriority("medium");
    setDueDate("");
    setDescription("");
    setShowForm(false);
    toast.success("Task added");
    loadTasks();
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Tasks</h1>
          <p className="text-sm text-slate-500">Followups, calls, meetings, document collection, renewals.</p>
        </div>
        <Button onClick={() => setShowForm((value) => !value)} className="whitespace-nowrap">
          {showForm ? "Close form" : "Add task"}
        </Button>
      </div>
      {showForm ? (
        <Card className="border-slate-200 bg-white p-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Title</label>
              <Input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Write a short task title"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Task type</label>
              <Input
                value={taskType}
                onChange={(e) => setTaskType(e.target.value)}
                placeholder="Follow-up, call, document, meeting"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Priority</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Due date</label>
              <Input
                type="datetime-local"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-2 block text-sm font-semibold text-slate-700">Description</label>
            <Textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Notes for the task, follow-up points, or customer context"
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2 justify-end">
            <Button variant="outline" onClick={() => setShowForm(false)}>
              Cancel
            </Button>
            <Button onClick={addTask} disabled={saving || !taskTitle.trim()}>
              {saving ? "Saving..." : "Create task"}
            </Button>
          </div>
        </Card>
      ) : null}
      <Card className="overflow-hidden">
        {loading ? (
          <div className="flex h-40 items-center justify-center"><Loader2 className="h-5 w-5 animate-spin text-muted-foreground" /></div>
        ) : rows.length === 0 ? (
          <div className="p-10 text-center text-sm text-slate-500">No tasks yet.</div>
        ) : (
          <Table>
            <TableHeader><TableRow><TableHead>Title</TableHead><TableHead>Type</TableHead><TableHead>Priority</TableHead><TableHead>Status</TableHead><TableHead>Due</TableHead></TableRow></TableHeader>
            <TableBody>
              {rows.map((r) => (
                <TableRow key={r.id}>
                  <TableCell className="font-medium">{r.title}</TableCell>
                  <TableCell>{r.task_type ?? "—"}</TableCell>
                  <TableCell>
                    <Badge className={cn(
                      r.priority === "high" && "bg-rose-100 text-rose-700 hover:bg-rose-100",
                      r.priority === "medium" && "bg-amber-100 text-amber-700 hover:bg-amber-100",
                      r.priority === "low" && "bg-slate-100 text-slate-700 hover:bg-slate-100",
                    )}>{r.priority}</Badge>
                  </TableCell>
                  <TableCell><Badge variant="secondary">{r.status}</Badge></TableCell>
                  <TableCell className="text-sm">{r.due_date ? new Date(r.due_date).toLocaleString() : "—"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Card>
    </div>
  );
}
