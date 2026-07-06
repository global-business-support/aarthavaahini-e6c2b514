import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as Card } from "./card-RGlIzTYo.mjs";
import { B as Button } from "./button-TjZkfKyC.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { L as Label } from "./label-JU3yqRBo.mjs";
import { T as Textarea } from "./textarea-DtF-dDz-.mjs";
import { B as Badge } from "./badge-DyfXZgLs.mjs";
import { D as Dialog, f as DialogTrigger, a as DialogContent, d as DialogHeader, e as DialogTitle, c as DialogFooter } from "./dialog-RBdmK4nU.mjs";
import { S as Select, c as SelectTrigger, d as SelectValue, a as SelectContent, b as SelectItem } from "./select-DPaGlibP.mjs";
import { s as supabase } from "./router-TlO5aQkT.mjs";
import { u as useCrmAuth } from "./useCrmAuth-CN8DXMRr.mjs";
import { l as listEmployees } from "./employees.functions-1UTcffs9.mjs";
import { u as useServerFn } from "./createSsrRpc-CSFeVd0V.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "../_libs/seroval.mjs";
import { au as Sparkles, ak as Plus, a4 as LoaderCircle, k as CalendarClock, G as Clock, a9 as MapPin, y as CircleCheck, z as CirclePlay, E as CircleX, az as Trash2 } from "../_libs/lucide-react.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "../_libs/supabase__functions-js.mjs";
import "./server-D4AorVcY.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "./auth-middleware-C_RfxG22.mjs";
import "../_libs/zod.mjs";
const STATUS_TONES = {
  scheduled: "bg-sky-100 text-sky-700 border-sky-200",
  in_progress: "bg-amber-100 text-amber-700 border-amber-200",
  completed: "bg-emerald-100 text-emerald-700 border-emerald-200",
  cancelled: "bg-rose-100 text-rose-700 border-rose-200"
};
const PRIORITY_TONES = {
  low: "bg-slate-100 text-slate-600",
  normal: "bg-violet-100 text-violet-700",
  high: "bg-rose-100 text-rose-700"
};
function SchedulePage() {
  const {
    user,
    isAdmin
  } = useCrmAuth();
  const list = useServerFn(listEmployees);
  const [items, setItems] = reactExports.useState([]);
  const [emps, setEmps] = reactExports.useState([]);
  const [busy, setBusy] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    employee_id: "",
    title: "",
    description: "",
    scheduled_for: new Date(Date.now() + 60 * 60 * 1e3).toISOString().slice(0, 16),
    duration_minutes: 60,
    location: "",
    priority: "normal"
  });
  const load = async () => {
    setBusy(true);
    const {
      data,
      error
    } = await supabase.from("employee_schedules").select("*").order("scheduled_for", {
      ascending: true
    });
    if (error) toast.error(error.message);
    setItems(data ?? []);
    setBusy(false);
  };
  const loadEmps = async () => {
    if (!isAdmin) return;
    try {
      const r = await list();
      setEmps(r.employees ?? []);
    } catch (e) {
      toast.error(e.message);
    }
  };
  reactExports.useEffect(() => {
    if (user) {
      load();
      loadEmps();
    }
  }, [user, isAdmin]);
  const empById = reactExports.useMemo(() => {
    const m = /* @__PURE__ */ new Map();
    for (const e of emps) m.set(e.id, e);
    return m;
  }, [emps]);
  const submit = async () => {
    if (!form.title || !form.employee_id || !form.scheduled_for) {
      toast.error("Title, employee and date required");
      return;
    }
    setBusy(true);
    const {
      error
    } = await supabase.from("employee_schedules").insert({
      employee_id: form.employee_id,
      title: form.title,
      description: form.description || null,
      scheduled_for: new Date(form.scheduled_for).toISOString(),
      duration_minutes: Number(form.duration_minutes) || 60,
      location: form.location || null,
      priority: form.priority,
      created_by: user?.id ?? null
    });
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Schedule created");
    setOpen(false);
    setForm({
      ...form,
      title: "",
      description: "",
      location: ""
    });
    load();
  };
  const setStatus = async (id, status) => {
    const {
      error
    } = await supabase.from("employee_schedules").update({
      status
    }).eq("id", id);
    if (error) return toast.error(error.message);
    setItems((p) => p.map((s) => s.id === id ? {
      ...s,
      status
    } : s));
  };
  const remove = async (id) => {
    if (!confirm("Delete this schedule?")) return;
    const {
      error
    } = await supabase.from("employee_schedules").delete().eq("id", id);
    if (error) return toast.error(error.message);
    setItems((p) => p.filter((s) => s.id !== id));
  };
  const grouped = reactExports.useMemo(() => {
    const g = /* @__PURE__ */ new Map();
    for (const it of items) {
      const k = new Date(it.scheduled_for).toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
      });
      g.set(k, [...g.get(k) ?? [], it]);
    }
    return Array.from(g.entries());
  }, [items]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-500 via-indigo-500 to-violet-500 p-5 text-white shadow-lg shadow-indigo-500/20 md:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-12 right-24 h-36 w-36 rounded-full bg-cyan-300/30 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-wrap items-end justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
            " Team Schedule"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-2xl font-bold md:text-3xl", children: isAdmin ? "Employee Work Schedule" : "My Schedule" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-white/80", children: [
            items.length,
            " scheduled · ",
            items.filter((s) => s.status === "completed").length,
            " completed"
          ] })
        ] }),
        isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: setOpen, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "bg-white text-indigo-700 shadow-md hover:bg-sky-50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-2 h-4 w-4" }),
            " Assign Schedule"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg bg-gradient-to-br from-white via-sky-50/60 to-violet-50/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "bg-gradient-to-r from-sky-600 to-violet-600 bg-clip-text text-transparent", children: "Schedule Work for Employee" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Employee" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: form.employee_id, onValueChange: (v) => setForm({
                  ...form,
                  employee_id: v
                }), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "border-indigo-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Pick employee" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: emps.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: e.id, children: [
                    e.full_name || e.email,
                    " ",
                    e.email && e.full_name ? `· ${e.email}` : ""
                  ] }, e.id)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Title" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "border-violet-200", value: form.title, onChange: (e) => setForm({
                  ...form,
                  title: e.target.value
                }), placeholder: "Client visit — ABC Industries" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Description" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { className: "border-fuchsia-200", rows: 3, value: form.description, onChange: (e) => setForm({
                  ...form,
                  description: e.target.value
                }), placeholder: "Notes / agenda" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Date & Time" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "datetime-local", className: "border-sky-200", value: form.scheduled_for, onChange: (e) => setForm({
                    ...form,
                    scheduled_for: e.target.value
                  }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Duration (min)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", min: 15, step: 15, className: "border-amber-200", value: form.duration_minutes, onChange: (e) => setForm({
                    ...form,
                    duration_minutes: Number(e.target.value)
                  }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Location" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "border-emerald-200", value: form.location, onChange: (e) => setForm({
                    ...form,
                    location: e.target.value
                  }), placeholder: "Branch / address" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Priority" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: form.priority, onValueChange: (v) => setForm({
                    ...form,
                    priority: v
                  }), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "border-rose-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "low", children: "Low" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "normal", children: "Normal" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "high", children: "High" })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setOpen(false), children: "Cancel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: submit, disabled: busy, className: "bg-gradient-to-r from-sky-600 to-violet-600 text-white hover:opacity-90", children: [
                busy && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
                " Create"
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    busy && items.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "flex h-40 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin text-slate-400" }) }),
    !busy && items.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-dashed bg-white/70 p-10 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarClock, { className: "mx-auto h-10 w-10 text-violet-300" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-sm font-semibold text-slate-700", children: "No schedules yet" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-500", children: isAdmin ? "Assign tasks to your employees to get started." : "You have no work scheduled. Check back later." })
    ] }),
    grouped.map(([day, list2]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-6 rounded-full bg-gradient-to-r from-violet-500 to-rose-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold text-slate-800", children: day }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px]", children: list2.length })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2.5 md:grid-cols-2", children: list2.map((s) => {
        const emp = empById.get(s.employee_id);
        const time = new Date(s.scheduled_for).toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit"
        });
        const isMine = s.employee_id === user?.id;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "relative overflow-hidden border-slate-200/70 p-4 transition hover:shadow-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute left-0 top-0 h-full w-1.5 ${s.priority === "high" ? "bg-gradient-to-b from-rose-500 to-pink-500" : s.priority === "low" ? "bg-gradient-to-b from-slate-300 to-slate-400" : "bg-gradient-to-b from-violet-500 to-fuchsia-500"}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 pl-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-slate-900", children: s.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: `border ${STATUS_TONES[s.status]} text-[10px] capitalize`, variant: "outline", children: s.status.replace("_", " ") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: `${PRIORITY_TONES[s.priority]} text-[10px] capitalize`, variant: "outline", children: s.priority })
              ] }),
              s.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-slate-600", children: s.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
                  " ",
                  time,
                  " · ",
                  s.duration_minutes,
                  " min"
                ] }),
                s.location && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
                  " ",
                  s.location
                ] }),
                isAdmin && emp && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1 rounded-full bg-violet-50 px-1.5 py-0.5 font-medium text-violet-700", children: emp.full_name || emp.email })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
              (isAdmin || isMine) && s.status !== "completed" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-7 px-2 text-emerald-600 hover:bg-emerald-50", onClick: () => setStatus(s.id, "completed"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5" }) }),
              (isAdmin || isMine) && s.status === "scheduled" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-7 px-2 text-amber-600 hover:bg-amber-50", onClick: () => setStatus(s.id, "in_progress"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "h-3.5 w-3.5" }) }),
              (isAdmin || isMine) && s.status !== "cancelled" && s.status !== "completed" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-7 px-2 text-rose-600 hover:bg-rose-50", onClick: () => setStatus(s.id, "cancelled"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-3.5 w-3.5" }) }),
              isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-7 px-2 text-slate-500 hover:bg-slate-100", onClick: () => remove(s.id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) })
            ] })
          ] })
        ] }, s.id);
      }) })
    ] }, day))
  ] });
}
export {
  SchedulePage as component
};
