import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { s as supabase } from "./router-DSDPkTTS.mjs";
import { C as Card } from "./card-RGlIzTYo.mjs";
import { B as Button } from "./button-TjZkfKyC.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { T as Textarea } from "./textarea-DtF-dDz-.mjs";
import { L as Label } from "./label-JU3yqRBo.mjs";
import { S as Switch } from "./switch-CQ4rbtn8.mjs";
import { T as Tabs, b as TabsList, c as TabsTrigger, a as TabsContent } from "./tabs-Cs3JMi5l.mjs";
import { D as Dialog, a as DialogContent, d as DialogHeader, e as DialogTitle, c as DialogFooter } from "./dialog-RBdmK4nU.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { ak as Plus, ai as Pencil, az as Trash2 } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-switch.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-tabs.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
function CmsPage() {
  const [tab, setTab] = reactExports.useState("banners");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-foreground", children: "Site Content (CMS)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Manage hero banners, homepage product cards, testimonials and CRM dashboard card labels. Changes show up immediately on the public site." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: tab, onValueChange: (v) => setTab(v), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "flex flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "banners", children: "Hero Banners" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "products", children: "Product Cards" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "testimonials", children: "Testimonials" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "dashboard", children: "Dashboard Cards" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "banners", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BannersEditor, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "products", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCardsEditor, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "testimonials", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialsEditor, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "dashboard", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardEditor, {}) })
    ] })
  ] });
}
function ImageField({
  value,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Image URL" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "https://… (paste an image URL, recommended ≥ 1200px wide)", value, onChange: (e) => onChange(e.target.value) }),
    value && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: value, alt: "preview", className: "h-32 w-full rounded-lg border object-cover", onError: (e) => e.target.style.opacity = "0.3" })
  ] });
}
function BannersEditor() {
  const [rows, setRows] = reactExports.useState([]);
  const [editing, setEditing] = reactExports.useState(null);
  const [open, setOpen] = reactExports.useState(false);
  const load = reactExports.useCallback(async () => {
    const {
      data
    } = await supabase.from("hero_slides").select("*").order("position", {
      ascending: true
    });
    setRows(data ?? []);
  }, []);
  reactExports.useEffect(() => {
    load();
  }, [load]);
  const save = async (row) => {
    const {
      id,
      ...rest
    } = row;
    const op = id ? supabase.from("hero_slides").update(rest).eq("id", id) : supabase.from("hero_slides").insert(rest);
    const {
      error
    } = await op;
    if (error) toast.error(error.message);
    else {
      toast.success("Saved");
      setOpen(false);
      load();
    }
  };
  const remove = async (id) => {
    if (!confirm("Delete this slide?")) return;
    const {
      error
    } = await supabase.from("hero_slides").delete().eq("id", id);
    if (error) toast.error(error.message);
    else load();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-4 p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-semibold", children: [
        "Hero Banners (",
        rows.length,
        ")"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => {
        setEditing({
          id: "",
          position: rows.length,
          image_url: "",
          title: "",
          subtitle: "",
          show_text: true,
          cta_label: "Free Consultation",
          cta_link: "/contact",
          is_active: true
        });
        setOpen(true);
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1 h-4 w-4" }),
        " Add Banner"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3", children: rows.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4 rounded-lg border p-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: r.image_url, alt: "", className: "h-16 w-28 shrink-0 rounded object-cover", onError: (e) => e.target.style.opacity = "0.3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate font-medium", children: r.title || "(image only)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-xs text-muted-foreground", children: r.subtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", children: [
          "Pos ",
          r.position,
          " · ",
          r.is_active ? "Active" : "Hidden"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => {
          setEditing(r);
          setOpen(true);
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => remove(r.id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
      ] })
    ] }, r.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: setOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: editing?.id ? "Edit Banner" : "Add Banner" }) }),
      editing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ImageField, { value: editing.image_url, onChange: (v) => setEditing({
          ...editing,
          image_url: v
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: editing.title ?? "", onChange: (e) => setEditing({
            ...editing,
            title: e.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Subtitle" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: editing.subtitle ?? "", onChange: (e) => setEditing({
            ...editing,
            subtitle: e.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "CTA label" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: editing.cta_label ?? "", onChange: (e) => setEditing({
              ...editing,
              cta_label: e.target.value
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "CTA link" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: editing.cta_link ?? "", onChange: (e) => setEditing({
              ...editing,
              cta_link: e.target.value
            }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Position" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: editing.position, onChange: (e) => setEditing({
              ...editing,
              position: Number(e.target.value)
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: editing.show_text, onCheckedChange: (v) => setEditing({
                ...editing,
                show_text: v
              }) }),
              "Show text"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: editing.is_active, onCheckedChange: (v) => setEditing({
                ...editing,
                is_active: v
              }) }),
              "Active"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setOpen(false), children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => editing && save(editing), children: "Save" })
      ] })
    ] }) })
  ] });
}
function ProductCardsEditor() {
  const [rows, setRows] = reactExports.useState([]);
  const [editing, setEditing] = reactExports.useState(null);
  const [open, setOpen] = reactExports.useState(false);
  const load = reactExports.useCallback(async () => {
    const {
      data
    } = await supabase.from("product_cards").select("*").order("position", {
      ascending: true
    });
    setRows(data ?? []);
  }, []);
  reactExports.useEffect(() => {
    load();
  }, [load]);
  const save = async (row) => {
    const {
      id,
      ...rest
    } = row;
    const op = id ? supabase.from("product_cards").update(rest).eq("id", id) : supabase.from("product_cards").insert(rest);
    const {
      error
    } = await op;
    if (error) toast.error(error.message);
    else {
      toast.success("Saved");
      setOpen(false);
      load();
    }
  };
  const remove = async (id) => {
    if (!confirm("Delete this card?")) return;
    const {
      error
    } = await supabase.from("product_cards").delete().eq("id", id);
    if (error) toast.error(error.message);
    else load();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-4 p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-semibold", children: [
        "Product Cards (",
        rows.length,
        ")"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => {
        setEditing({
          id: "",
          position: rows.length,
          title: "",
          subtitle: "",
          image_url: "",
          bg_color: "#eaf4ff",
          button1_label: "Apply Now",
          button1_link: "/contact",
          button2_label: "Learn more",
          button2_link: "/loans",
          is_active: true
        });
        setOpen(true);
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1 h-4 w-4" }),
        " Add Card"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2", children: rows.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 overflow-hidden rounded-lg border p-3", style: {
      backgroundColor: r.bg_color ?? "#fff"
    }, children: [
      r.image_url && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: r.image_url, alt: "", className: "h-20 w-24 shrink-0 rounded object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate font-semibold", children: r.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-xs", children: r.subtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs opacity-70", children: [
          "Pos ",
          r.position,
          " · ",
          r.is_active ? "Active" : "Hidden"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => {
            setEditing(r);
            setOpen(true);
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3 w-3" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => remove(r.id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3 w-3" }) })
        ] })
      ] })
    ] }, r.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: setOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: editing?.id ? "Edit Card" : "Add Card" }) }),
      editing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ImageField, { value: editing.image_url ?? "", onChange: (v) => setEditing({
          ...editing,
          image_url: v
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: editing.title, onChange: (e) => setEditing({
            ...editing,
            title: e.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Subtitle" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: editing.subtitle ?? "", onChange: (e) => setEditing({
            ...editing,
            subtitle: e.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Background Color" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "color", value: editing.bg_color ?? "#eaf4ff", onChange: (e) => setEditing({
              ...editing,
              bg_color: e.target.value
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Position" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: editing.position, onChange: (e) => setEditing({
              ...editing,
              position: Number(e.target.value)
            }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Button 1 label" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: editing.button1_label ?? "", onChange: (e) => setEditing({
              ...editing,
              button1_label: e.target.value
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Button 1 link" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: editing.button1_link ?? "", onChange: (e) => setEditing({
              ...editing,
              button1_link: e.target.value
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Button 2 label" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: editing.button2_label ?? "", onChange: (e) => setEditing({
              ...editing,
              button2_label: e.target.value
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Button 2 link" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: editing.button2_link ?? "", onChange: (e) => setEditing({
              ...editing,
              button2_link: e.target.value
            }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: editing.is_active, onCheckedChange: (v) => setEditing({
            ...editing,
            is_active: v
          }) }),
          "Active"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setOpen(false), children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => editing && save(editing), children: "Save" })
      ] })
    ] }) })
  ] });
}
function TestimonialsEditor() {
  const [rows, setRows] = reactExports.useState([]);
  const [editing, setEditing] = reactExports.useState(null);
  const [open, setOpen] = reactExports.useState(false);
  const load = reactExports.useCallback(async () => {
    const {
      data
    } = await supabase.from("testimonials").select("*").order("position", {
      ascending: true
    });
    setRows(data ?? []);
  }, []);
  reactExports.useEffect(() => {
    load();
  }, [load]);
  const save = async (r) => {
    const {
      id,
      ...rest
    } = r;
    const op = id ? supabase.from("testimonials").update(rest).eq("id", id) : supabase.from("testimonials").insert(rest);
    const {
      error
    } = await op;
    if (error) toast.error(error.message);
    else {
      toast.success("Saved");
      setOpen(false);
      load();
    }
  };
  const remove = async (id) => {
    if (!confirm("Delete this testimonial?")) return;
    const {
      error
    } = await supabase.from("testimonials").delete().eq("id", id);
    if (error) toast.error(error.message);
    else load();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-4 p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-semibold", children: [
        "Testimonials (",
        rows.length,
        ")"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => {
        setEditing({
          id: "",
          position: rows.length,
          name: "",
          role: "",
          text: "",
          rating: 5,
          image_url: "",
          is_verified: true,
          is_active: true
        });
        setOpen(true);
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1 h-4 w-4" }),
        " Add Testimonial"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2", children: rows.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 rounded-lg border p-3", children: [
      r.image_url && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: r.image_url, alt: "", className: "h-14 w-14 shrink-0 rounded-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate font-semibold", children: r.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-xs text-muted-foreground", children: r.role }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "line-clamp-2 text-xs", children: r.text }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "★ ",
            r.rating
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "· Pos ",
            r.position
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "· ",
            r.is_active ? "Active" : "Hidden"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => {
            setEditing(r);
            setOpen(true);
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3 w-3" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", onClick: () => remove(r.id), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3 w-3" }) })
        ] })
      ] })
    ] }, r.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: setOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: editing?.id ? "Edit Testimonial" : "Add Testimonial" }) }),
      editing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ImageField, { value: editing.image_url ?? "", onChange: (v) => setEditing({
          ...editing,
          image_url: v
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: editing.name, onChange: (e) => setEditing({
              ...editing,
              name: e.target.value
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Role / Location" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: editing.role ?? "", onChange: (e) => setEditing({
              ...editing,
              role: e.target.value
            }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Testimonial text" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 4, value: editing.text, onChange: (e) => setEditing({
            ...editing,
            text: e.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Rating (1-5)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", min: 1, max: 5, value: editing.rating, onChange: (e) => setEditing({
              ...editing,
              rating: Number(e.target.value)
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Position" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: editing.position, onChange: (e) => setEditing({
              ...editing,
              position: Number(e.target.value)
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 pt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: editing.is_verified, onCheckedChange: (v) => setEditing({
                ...editing,
                is_verified: v
              }) }),
              "Verified"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: editing.is_active, onCheckedChange: (v) => setEditing({
                ...editing,
                is_active: v
              }) }),
              "Active"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setOpen(false), children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => editing && save(editing), children: "Save" })
      ] })
    ] }) })
  ] });
}
function DashboardEditor() {
  const [rows, setRows] = reactExports.useState([]);
  const load = reactExports.useCallback(async () => {
    const {
      data
    } = await supabase.from("dashboard_cards").select("*").order("position", {
      ascending: true
    });
    setRows(data ?? []);
  }, []);
  reactExports.useEffect(() => {
    load();
  }, [load]);
  const update = async (id, patch) => {
    const {
      error
    } = await supabase.from("dashboard_cards").update(patch).eq("id", id);
    if (error) toast.error(error.message);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-4 p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 text-lg font-semibold", children: "CRM Dashboard Cards" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-sm text-muted-foreground", children: "Edit the label or override the value shown on each dashboard tile. Leave value blank to use the live count from the database." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: rows.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 items-center gap-3 rounded-lg border p-3 md:grid-cols-[120px_1fr_1fr_1fr_auto]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-xs text-muted-foreground", children: r.key }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { defaultValue: r.label, onBlur: (e) => update(r.id, {
        label: e.target.value
      }), placeholder: "Label" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { defaultValue: r.value_override ?? "", onBlur: (e) => update(r.id, {
        value_override: e.target.value || null
      }), placeholder: "Value override (blank = live)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { defaultValue: r.trend ?? "", onBlur: (e) => update(r.id, {
        trend: e.target.value || null
      }), placeholder: "Trend" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { defaultChecked: r.is_active, onCheckedChange: (v) => update(r.id, {
          is_active: v
        }) }),
        "Active"
      ] })
    ] }, r.id)) })
  ] });
}
export {
  CmsPage as component
};
