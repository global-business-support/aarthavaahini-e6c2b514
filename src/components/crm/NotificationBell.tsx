import { useEffect, useState } from "react";
import { Bell, CheckCheck } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type Notification = {
  id: string;
  title: string;
  message: string | null;
  type: string;
  link: string | null;
  is_read: boolean;
  created_at: string;
};

export function NotificationBell() {
  const [items, setItems] = useState<Notification[]>([]);
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const { data } = await supabase
      .from("notifications")
      .select("id,title,message,type,link,is_read,created_at")
      .order("created_at", { ascending: false })
      .limit(20);
    setItems((data ?? []) as Notification[]);
    setLoaded(true);
  };

  useEffect(() => {
    load();
    const channel = supabase
      .channel("crm-notif-bell")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "notifications" },
        (payload) => {
          const n = payload.new as Notification;
          setItems((prev) => [n, ...prev].slice(0, 20));
          toast(n.title, { description: n.message ?? undefined });
        },
      )
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const unread = items.filter((i) => !i.is_read).length;

  const markAllRead = async () => {
    const unreadIds = items.filter((i) => !i.is_read).map((i) => i.id);
    if (!unreadIds.length) return;
    await supabase.from("notifications").update({ is_read: true }).in("id", unreadIds);
    setItems((prev) => prev.map((i) => ({ ...i, is_read: true })));
  };

  const markRead = async (id: string) => {
    await supabase.from("notifications").update({ is_read: true }).eq("id", id);
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, is_read: true } : i)));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative h-9 w-9 text-sky-700 hover:bg-sky-50">
          <Bell className="h-4 w-4" />
          {unread > 0 && (
            <span className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white ring-2 ring-white">
              {unread > 9 ? "9+" : unread}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={10}
        className="z-[9999] w-80 overflow-hidden rounded-2xl border border-sky-100 bg-white p-0 shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-sky-100 px-4 py-2.5">
          <div>
            <div className="text-sm font-semibold text-slate-900">Notifications</div>
            <div className="text-[10px] text-slate-500">{unread} unread</div>
          </div>
          <button
            onClick={markAllRead}
            className="inline-flex items-center gap-1 text-[11px] font-medium text-sky-600 hover:text-sky-700"
          >
            <CheckCheck className="h-3 w-3" /> Mark all read
          </button>
        </div>
        <div className="max-h-96 overflow-y-auto">
          {!loaded ? (
            <div className="p-6 text-center text-xs text-slate-400">Loading…</div>
          ) : items.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-400">No notifications yet.</div>
          ) : (
            items.map((n) => (
              <a
                key={n.id}
                href={n.link ?? "#"}
                onClick={() => markRead(n.id)}
                className={cn(
                  "flex items-start gap-3 border-b border-sky-50 px-4 py-3 transition hover:bg-sky-50/60",
                  !n.is_read && "bg-sky-50/40",
                )}
              >
                <div
                  className={cn(
                    "mt-1 h-2 w-2 shrink-0 rounded-full",
                    n.type === "rejected" ? "bg-rose-500" :
                    n.type === "approved" ? "bg-emerald-500" :
                    n.type === "disbursed" ? "bg-amber-500" : "bg-sky-500",
                  )}
                />
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold text-slate-900">{n.title}</div>
                  {n.message && (
                    <div className="mt-0.5 line-clamp-2 text-[11px] text-slate-500">{n.message}</div>
                  )}
                  <div className="mt-1 text-[10px] text-slate-400">
                    {new Date(n.created_at).toLocaleString("en-IN", {
                      day: "numeric", month: "short", hour: "numeric", minute: "2-digit",
                    })}
                  </div>
                </div>
              </a>
            ))
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
