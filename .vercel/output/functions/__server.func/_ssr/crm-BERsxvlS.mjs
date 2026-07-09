import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useNavigate, e as useRouterState, O as Outlet, L as Link } from "../_libs/tanstack__react-router.mjs";
import { l as logoUrl, s as supabase } from "./router-fcTUeZV3.mjs";
import { B as Button } from "./button-TjZkfKyC.mjs";
import { c as Root2, T as Trigger$1, P as Portal2, a as Content2$1, I as Item2, e as SubTrigger2, d as SubContent2, C as CheckboxItem2, b as ItemIndicator2, R as RadioItem2, L as Label2, S as Separator2 } from "../_libs/radix-ui__react-dropdown-menu.mjs";
import { c as cn } from "./utils-H80jjgLf.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { u as useCrmAuth } from "./useCrmAuth-W8ZmHt6f.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { B as Badge } from "./badge-DyfXZgLs.mjs";
import { a as Provider, R as Root3, T as Trigger, P as Portal, C as Content2 } from "../_libs/radix-ui__react-tooltip.mjs";
import { a4 as LoaderCircle, a2 as LayoutDashboard, aG as Users, D as CircleUserRound, E as CircleX, aE as UserPlus, V as Handshake, e as Banknote, as as ShieldCheck, aA as TrendingUp, Q as FolderOpen, av as SquareCheckBig, k as CalendarClock, A as Activity, P as FileText, ac as MessageCircle, Z as Image, ar as Settings, aJ as X, w as ChevronsRight, v as ChevronsLeft, ab as Menu, ap as Search, r as ChevronDown, a7 as LogOut, f as Bell, q as CheckCheck, t as ChevronRight, p as Check, x as Circle } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-menu.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
const DropdownMenu = Root2;
const DropdownMenuTrigger = Trigger$1;
const DropdownMenuSubTrigger = reactExports.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SubTrigger2,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-auto" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
const DropdownMenuSubContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SubContent2,
  {
    ref,
    className: cn(
      "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = SubContent2.displayName;
const DropdownMenuContent = reactExports.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2$1,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-32 overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = Content2$1.displayName;
const DropdownMenuItem = reactExports.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Item2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = Item2.displayName;
const DropdownMenuCheckboxItem = reactExports.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  CheckboxItem2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
const DropdownMenuRadioItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  RadioItem2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
const DropdownMenuLabel = reactExports.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Label2,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
  }
));
DropdownMenuLabel.displayName = Label2.displayName;
const DropdownMenuSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Separator2,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = Separator2.displayName;
function NotificationBell() {
  const [items, setItems] = reactExports.useState([]);
  const [loaded, setLoaded] = reactExports.useState(false);
  const load = async () => {
    const { data } = await supabase.from("notifications").select("id,title,message,type,link,is_read,created_at").order("created_at", { ascending: false }).limit(20);
    setItems(data ?? []);
    setLoaded(true);
  };
  reactExports.useEffect(() => {
    load();
    const channel = supabase.channel("crm-notif-bell").on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "notifications" },
      (payload) => {
        const n = payload.new;
        setItems((prev) => [n, ...prev].slice(0, 20));
        toast(n.title, { description: n.message ?? void 0 });
      }
    ).subscribe();
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
  const markRead = async (id) => {
    await supabase.from("notifications").update({ is_read: true }).eq("id", id);
    setItems((prev) => prev.map((i) => i.id === id ? { ...i, is_read: true } : i));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "icon", className: "relative h-9 w-9 text-sky-700 hover:bg-sky-50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-4 w-4" }),
      unread > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white ring-2 ring-white", children: unread > 9 ? "9+" : unread })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DropdownMenuContent,
      {
        align: "end",
        sideOffset: 10,
        className: "z-[9999] w-80 overflow-hidden rounded-2xl border border-sky-100 bg-white p-0 shadow-2xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-sky-100 px-4 py-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-slate-900", children: "Notifications" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-slate-500", children: [
                unread,
                " unread"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: markAllRead,
                className: "inline-flex items-center gap-1 text-[11px] font-medium text-sky-600 hover:text-sky-700",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCheck, { className: "h-3 w-3" }),
                  " Mark all read"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-96 overflow-y-auto", children: !loaded ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 text-center text-xs text-slate-400", children: "Loading…" }) : items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 text-center text-xs text-slate-400", children: "No notifications yet." }) : items.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: n.link ?? "#",
              onClick: () => markRead(n.id),
              className: cn(
                "flex items-start gap-3 border-b border-sky-50 px-4 py-3 transition hover:bg-sky-50/60",
                !n.is_read && "bg-sky-50/40"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: cn(
                      "mt-1 h-2 w-2 shrink-0 rounded-full",
                      n.type === "rejected" ? "bg-rose-500" : n.type === "approved" ? "bg-emerald-500" : n.type === "disbursed" ? "bg-amber-500" : "bg-sky-500"
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-slate-900", children: n.title }),
                  n.message && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 line-clamp-2 text-[11px] text-slate-500", children: n.message }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[10px] text-slate-400", children: new Date(n.created_at).toLocaleString("en-IN", {
                    day: "numeric",
                    month: "short",
                    hour: "numeric",
                    minute: "2-digit"
                  }) })
                ] })
              ]
            },
            n.id
          )) })
        ]
      }
    )
  ] });
}
const TooltipProvider = Provider;
const Tooltip = Root3;
const TooltipTrigger = Trigger;
const TooltipContent = reactExports.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin)",
      className
    ),
    ...props
  }
) }));
TooltipContent.displayName = Content2.displayName;
const NAV = [
  { to: "/crm", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/crm/leads", label: "Leads", icon: Users },
  { to: "/crm/customers", label: "Customers", icon: CircleUserRound },
  { to: "/crm/rejected", label: "Rejected Leads", icon: CircleX },
  { to: "/crm/employees", label: "Employees", icon: UserPlus },
  { to: "/crm/partners", label: "Partners", icon: Handshake },
  { to: "/crm/banks", label: "Banks", icon: Banknote },
  { to: "/crm/loans", label: "Loans", icon: Banknote },
  { to: "/crm/insurance", label: "Insurance", icon: ShieldCheck },
  { to: "/crm/mutual-funds", label: "Mutual Funds", icon: TrendingUp },
  { to: "/crm/documents", label: "Documents", icon: FolderOpen },
  { to: "/crm/tasks", label: "Tasks", icon: SquareCheckBig },
  { to: "/crm/schedule", label: "Schedule", icon: CalendarClock },
  { to: "/crm/activity", label: "Activity", icon: Activity },
  { to: "/crm/reports", label: "Reports & MIS", icon: FileText },
  { to: "/crm/whatsapp", label: "WhatsApp", icon: MessageCircle },
  { to: "/crm/cms", label: "Site Content", icon: Image },
  { to: "/crm/settings", label: "Settings", icon: Settings }
];
function CrmLayout() {
  const { user, isStaff, isPartner, primaryRole, loading } = useCrmAuth();
  const nav = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  const [collapsed, setCollapsed] = reactExports.useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("crm-sidebar-collapsed") === "1";
  });
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("crm-sidebar-collapsed", collapsed ? "1" : "0");
    }
  }, [collapsed]);
  const isLoginRoute = pathname === "/crm/login";
  reactExports.useEffect(() => {
    if (loading || isLoginRoute) return;
    if (!user) nav({ to: "/crm/login" });
    else if (!isStaff && isPartner) nav({ to: "/partner" });
    else if (!isStaff) nav({ to: "/crm/login", search: { unauthorized: "1" } });
  }, [loading, user, isStaff, isPartner, nav, isLoginRoute]);
  reactExports.useEffect(() => setMobileOpen(false), [pathname]);
  if (isLoginRoute) return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
  if (loading || !user || !isStaff) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-sky-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin text-sky-400" }) });
  }
  const signOut = async () => {
    await supabase.auth.signOut();
    nav({ to: "/crm/login" });
  };
  const activeLabel = NAV.find((n) => n.exact ? pathname === n.to : pathname === n.to || pathname.startsWith(n.to + "/"))?.label ?? "CRM";
  const initials = (user.email ?? "U").split("@")[0].slice(0, 2).toUpperCase();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipProvider, { delayDuration: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen w-full bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "aside",
      {
        className: cn(
          "fixed inset-y-0 left-0 z-40 shrink-0 flex-col border-r border-sky-200 bg-gradient-to-b from-sky-50 via-sky-100 to-cyan-50 text-sky-900 shadow-lg shadow-sky-200/40 transition-all md:relative md:flex md:translate-x-0",
          collapsed ? "w-16" : "w-64",
          mobileOpen ? "flex translate-x-0 w-64" : "hidden -translate-x-full md:flex"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("flex items-center border-b border-sky-200/60 px-3 py-4", collapsed ? "justify-center" : "justify-between px-5"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/crm", className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-sky-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoUrl, alt: "Aarthvaahini", className: "h-8 w-8 object-contain" }) }),
              !collapsed && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold tracking-tight text-sky-900", children: "Aarthvaahini" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-sky-600", children: " CRM" })
              ] })
            ] }),
            !collapsed && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "rounded-md p-1 text-sky-600 hover:bg-sky-100 md:hidden",
                onClick: () => setMobileOpen(false),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setCollapsed((v) => !v),
              className: "absolute -right-3 top-20 hidden h-6 w-6 items-center justify-center rounded-full border border-sky-200 bg-white text-sky-600 shadow-md hover:bg-sky-50 md:flex",
              title: collapsed ? "Expand" : "Collapse",
              children: collapsed ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronsRight, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronsLeft, { className: "h-3.5 w-3.5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: cn("flex-1 space-y-0.5 overflow-y-auto py-4", collapsed ? "px-2" : "px-3"), children: [
            !collapsed && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-2 pb-2 text-[10px] font-semibold uppercase tracking-wider text-sky-500", children: "Main Menu" }),
            NAV.map((item) => {
              const Icon = item.icon;
              const active = item.exact ? pathname === item.to : pathname === item.to || pathname.startsWith(item.to + "/");
              const link = /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: item.to,
                  className: cn(
                    "group relative flex items-center gap-3 rounded-lg text-sm font-medium transition-all",
                    collapsed ? "justify-center p-2.5" : "px-3 py-2.5",
                    active ? "bg-white text-sky-700 shadow-sm ring-1 ring-sky-200" : "text-sky-800/80 hover:bg-white/70 hover:text-sky-900"
                  ),
                  children: [
                    active && !collapsed && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-sky-500" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: cn("h-4 w-4", active ? "text-sky-600" : "text-sky-500/80 group-hover:text-sky-700") }),
                    !collapsed && item.label
                  ]
                },
                item.to
              );
              return collapsed ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: link }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { side: "right", children: item.label })
              ] }, item.to) : link;
            })
          ] })
        ]
      }
    ),
    mobileOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-30 bg-sky-900/30 backdrop-blur-sm md:hidden",
        onClick: () => setMobileOpen(false)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-1 flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-20 flex h-14 items-center gap-3 border-b border-sky-100 bg-white/80 px-4 backdrop-blur-md md:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "rounded-md p-2 text-sky-700 hover:bg-sky-50 md:hidden",
            onClick: () => setMobileOpen(true),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-sky-500", children: "CRM" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-slate-900", children: activeLabel })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative ml-auto hidden w-72 md:block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-sky-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "Search leads, customers…",
              className: "h-9 border-sky-200 bg-sky-50/50 pl-9 text-sm focus-visible:bg-white"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(NotificationBell, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hidden text-xs text-sky-600 hover:text-sky-800 md:inline", children: "← Website" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-2 rounded-lg border border-sky-200 bg-white px-2 py-1.5 text-left transition hover:bg-sky-50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-[11px] font-semibold text-white shadow-sm", children: initials }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden text-xs leading-tight sm:block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-slate-900", children: user.email?.split("@")[0] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "capitalize text-slate-500", children: primaryRole?.replace(/_/g, " ") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3.5 w-3.5 text-slate-400" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            DropdownMenuContent,
            {
              align: "end",
              sideOffset: 10,
              className: "z-[9999] w-80 overflow-hidden rounded-2xl border border-sky-100 bg-white p-0 shadow-2xl",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-sky-500 to-cyan-500 p-4 text-white", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium text-white/80", children: "Signed in as" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 break-all text-sm font-semibold text-white", children: user.email }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "border-0 bg-white/20 px-3 py-1 capitalize text-white hover:bg-white/20", children: primaryRole?.replace(/_/g, " ") }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white", children: "Friday, 19 Jun" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { className: "cursor-pointer rounded-xl px-3 py-3 text-slate-700 focus:bg-sky-50", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "mr-3 h-4 w-4 text-slate-600" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Preferences" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    DropdownMenuItem,
                    {
                      onClick: signOut,
                      className: "cursor-pointer rounded-xl px-3 py-3 text-red-600 focus:bg-red-50 focus:text-red-700",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "mr-3 h-4 w-4" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Sign out" })
                      ]
                    }
                  )
                ] })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 overflow-auto bg-gradient-to-br from-sky-50/60 via-white to-blue-50/40 p-4 md:p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) })
    ] })
  ] }) });
}
const SplitComponent = CrmLayout;
export {
  SplitComponent as component
};
