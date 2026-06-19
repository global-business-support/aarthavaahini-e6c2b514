import { createFileRoute } from '@tanstack/react-router'
// import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const Route = createFileRoute("/crm/tasks")({
  component: TasksPage,
});

type Row = {
  id: string;
  title: string;
  description: string | null;
  task_type: string | null;
  status: string;
  priority: string;
  due_date: string | null;
};

const TASK_TYPES = [
  "Follow Up",
  "Call",
  "Meeting",
  "Document Collection",
  "Renewal",
  "Reminder",
  "Other",
];

const PRIORITIES = ["low", "medium", "high"];
const STATUSES = ["pending", "in_progress", "completed", "cancelled"];

function TasksPage() {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const load = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .order("due_date", { ascending: true });

    if (error) {
      toast.error(error.message);
      setLoading(false);
      return;
    }

    setRows((data ?? []) as Row[]);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="space-y-4">
      {/* HEADER */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Tasks</h1>
          <p className="text-sm text-slate-500">
            Followups, calls, meetings, document collection, renewals.
          </p>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-sky-600 to-blue-600 text-white">
              <Plus className="mr-2 h-4 w-4" />
              New Task
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-xl bg-white">
            <DialogHeader>
              <DialogTitle>Create New Task</DialogTitle>
            </DialogHeader>

            <NewTaskForm
              onSaved={() => {
                load(); // popup open rahega, table reload hoga
              }}
            />
          </DialogContent>
        </Dialog>
      </div>

      {/* TABLE */}
      <Card className="overflow-hidden">
        {loading ? (
          <div className="flex h-40 items-center justify-center">
            <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
          </div>
        ) : rows.length === 0 ? (
          <div className="p-10 text-center text-sm text-slate-500">
            No tasks yet. Click New Task to create your first task.
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Due</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {rows.map((r) => (
                <TableRow key={r.id}>
                  <TableCell className="font-medium">
                    {r.title}
                    {r.description && (
                      <div className="mt-1 text-xs text-slate-500">
                        {r.description}
                      </div>
                    )}
                  </TableCell>

                  <TableCell>{r.task_type ?? "—"}</TableCell>

                  <TableCell>
                    <Badge
                      className={cn(
                        r.priority === "high" &&
                          "bg-rose-100 text-rose-700 hover:bg-rose-100",
                        r.priority === "medium" &&
                          "bg-amber-100 text-amber-700 hover:bg-amber-100",
                        r.priority === "low" &&
                          "bg-slate-100 text-slate-700 hover:bg-slate-100",
                      )}
                    >
                      {r.priority}
                    </Badge>
                  </TableCell>

                  <TableCell>
                    <Badge variant="secondary">
                      {r.status?.replace(/_/g, " ")}
                    </Badge>
                  </TableCell>

                  <TableCell className="text-sm">
                    {r.due_date ? new Date(r.due_date).toLocaleString() : "—"}
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

function NewTaskForm({ onSaved }: { onSaved: () => void }) {
  const initialTask = {
    title: "",
    description: "",
    task_type: "Follow Up",
    priority: "medium",
    status: "pending",
    due_date: "",
  };

  const [f, setF] = useState(initialTask);
  const [saving, setSaving] = useState(false);

  const inputClass =
    "h-11 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100";

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!f.title.trim()) {
      toast.error("Task title is required");
      return;
    }

    setSaving(true);

    const { error } = await supabase.from("tasks").insert({
      title: f.title.trim(),
      description: f.description.trim() || null,
      task_type: f.task_type || null,
      priority: f.priority,
      status: f.status,
      due_date: f.due_date || null,
    });

    setSaving(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Task created");

    setF(initialTask); // form clear hoga
    onSaved(); // table reload hoga
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <Label>Title *</Label>
        <Input
          required
          value={f.title}
          onChange={(e) =>
            setF((prev) => ({ ...prev, title: e.target.value }))
          }
          className="mt-1 border-sky-200 focus-visible:ring-sky-400"
          placeholder="Call customer for follow-up"
        />
      </div>

      <div>
        <Label>Description</Label>
        <Textarea
          rows={3}
          value={f.description}
          onChange={(e) =>
            setF((prev) => ({ ...prev, description: e.target.value }))
          }
          className="mt-1 border-sky-200 focus-visible:ring-sky-400"
          placeholder="Add task details..."
        />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <Label>Task Type</Label>
          <select
            value={f.task_type}
            onChange={(e) =>
              setF((prev) => ({ ...prev, task_type: e.target.value }))
            }
            className={inputClass}
          >
            {TASK_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label>Priority</Label>
          <select
            value={f.priority}
            onChange={(e) =>
              setF((prev) => ({ ...prev, priority: e.target.value }))
            }
            className={inputClass}
          >
            {PRIORITIES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label>Status</Label>
          <select
            value={f.status}
            onChange={(e) =>
              setF((prev) => ({ ...prev, status: e.target.value }))
            }
            className={inputClass}
          >
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {s.replace(/_/g, " ")}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label>Due Date</Label>
          <Input
            type="datetime-local"
            value={f.due_date}
            onChange={(e) =>
              setF((prev) => ({ ...prev, due_date: e.target.value }))
            }
            className="mt-1 border-sky-200 focus-visible:ring-sky-400"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xs text-slate-500">
          After save, form will clear so you can add another task.
        </p>

        <Button
          type="submit"
          disabled={saving}
          className="bg-gradient-to-r from-sky-600 to-blue-600 text-white"
        >
          {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Create Task
        </Button>
      </div>
    </form>
  );
}