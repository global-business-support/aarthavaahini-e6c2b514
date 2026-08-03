import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useCrmAuth } from "@/hooks/useCrmAuth";
import { toast } from "sonner";
import { CheckCircle2, Clock, Loader2 } from "lucide-react";

type Task = {
  id: string;
  title: string;
  description: string | null;
  due_date: string | null;
  status: "pending" | "completed";
};

export function SalesExecutiveTasks() {
  const { user } = useCrmAuth();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchMyTasks = async () => {
    if (!user) return;
    setLoading(true);
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .eq("assigned_to", user.id) // Sirf Executive ke apne tasks
      .order("due_date", { ascending: true });

    if (!error && data) {
      setTasks(data as Task[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMyTasks();
  }, [user]);

  const markComplete = async (taskId: string) => {
    setUpdatingId(taskId);
    const { error } = await supabase
      .from("tasks")
      .update({ status: "completed" })
      .eq("id", taskId);

    setUpdatingId(null);

    if (error) {
      toast.error("Failed to update task: " + error.message);
    } else {
      toast.success("Task marked as completed!");
      setTasks((prev) =>
        prev.map((t) => (t.id === taskId ? { ...t, status: "completed" } : t))
      );
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-semibold flex items-center gap-2">
          <Clock className="h-4 w-4 text-sky-600" /> My Assigned Tasks
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex h-24 items-center justify-center">
            <Loader2 className="h-5 w-5 animate-spin text-slate-400" />
          </div>
        ) : tasks.length === 0 ? (
          <p className="py-6 text-center text-xs text-slate-400">No tasks assigned to you.</p>
        ) : (
          <div className="space-y-3">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between rounded-lg border p-3 text-xs bg-slate-50 hover:bg-white transition-all"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-800">{task.title}</span>
                    <Badge
                      variant={task.status === "completed" ? "default" : "outline"}
                      className={task.status === "completed" ? "bg-emerald-600" : "text-amber-600 border-amber-300"}
                    >
                      {task.status}
                    </Badge>
                  </div>
                  {task.description && (
                    <p className="text-slate-500">{task.description}</p>
                  )}
                  {task.due_date && (
                    <p className="text-[10px] text-slate-400">
                      Due: {new Date(task.due_date).toLocaleDateString()}
                    </p>
                  )}
                </div>

                {task.status !== "completed" && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 gap-1 border-emerald-600 text-emerald-700 hover:bg-emerald-50"
                    disabled={updatingId === task.id}
                    onClick={() => markComplete(task.id)}
                  >
                    {updatingId === task.id ? (
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    ) : (
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    )}
                    Mark Complete
                  </Button>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}