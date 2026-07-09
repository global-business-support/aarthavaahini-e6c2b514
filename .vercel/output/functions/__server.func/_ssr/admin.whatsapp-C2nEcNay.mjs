import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header, F as Footer } from "./Footer-X7G0v4le.mjs";
import { C as Card } from "./card-RGlIzTYo.mjs";
import { B as Button } from "./button-TjZkfKyC.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { L as Label } from "./label-JU3yqRBo.mjs";
import { T as Textarea } from "./textarea-DtF-dDz-.mjs";
import { B as Badge } from "./badge-DyfXZgLs.mjs";
import { u as useAuth, s as supabase } from "./router-fcTUeZV3.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { u as useServerFn } from "./createSsrRpc-DKNn47FT.mjs";
import { t as twilioConfig, s as sendWhatsApp } from "./twilio.functions-BSVXsHgI.mjs";
import { u as utils, w as writeFileSync, r as readSync } from "../_libs/xlsx.mjs";
import "../_libs/seroval.mjs";
import { a4 as LoaderCircle, a as ArrowLeft, I as Download, y as CircleCheck, E as CircleX, ac as MessageCircle, aK as Zap, aq as Send, O as FileSpreadsheet, aC as Upload, aG as Users, az as Trash2, z as CirclePlay, au as Sparkles } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./dialog-RBdmK4nU.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
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
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-accordion.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "../_libs/supabase__functions-js.mjs";
import "./server-BLp2Sgq9.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "./auth-middleware-B2q5Qfnj.mjs";
const TEMPLATES = [{
  label: "Loan Follow-up",
  text: "Hi {{name}}, this is from Aarthvaahini. Following up on your loan enquiry. Is this a good time to discuss?"
}, {
  label: "Insurance Reminder",
  text: "Hi {{name}}, your insurance plan with Aarthvaahini awaits review. Shall we schedule a quick call today?"
}, {
  label: "SIP Update",
  text: "Hi {{name}}, your SIP plan review is ready. Reply YES and our advisor will share the details."
}, {
  label: "CIBIL Report",
  text: "Hi {{name}}, your CIBIL check from Aarthvaahini is ready. Click to know how to improve your score."
}, {
  label: "Thank You",
  text: "Hi {{name}}, thank you for choosing Aarthvaahini. Reach us anytime for finance, loans, or insurance needs."
}];
function WhatsAppPage() {
  const {
    user,
    isAdmin,
    loading
  } = useAuth();
  const [phone, setPhone] = reactExports.useState("");
  const [name, setName] = reactExports.useState("Customer");
  const [message, setMessage] = reactExports.useState("");
  const [leads, setLeads] = reactExports.useState([]);
  const [useTwilio, setUseTwilio] = reactExports.useState(true);
  const [sending, setSending] = reactExports.useState(false);
  const [bulk, setBulk] = reactExports.useState([]);
  const [bulkRunning, setBulkRunning] = reactExports.useState(false);
  const fileRef = reactExports.useRef(null);
  const sendFn = useServerFn(sendWhatsApp);
  const cfgFn = useServerFn(twilioConfig);
  const [cfg, setCfg] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!isAdmin) return;
    supabase.from("leads").select("*").order("created_at", {
      ascending: false
    }).limit(500).then(({
      data
    }) => setLeads(data ?? []));
    cfgFn().then(setCfg).catch(() => setCfg({
      hasLovableKey: false,
      hasTwilioKey: false,
      hasFromNumber: false,
      fromNumber: null
    }));
  }, [isAdmin, cfgFn]);
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-6 w-6 animate-spin" }) });
  if (!user || !isAdmin) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 py-32 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold", children: "Access Denied" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] });
  }
  const finalMsg = message.replace(/\{\{name\}\}/gi, name || "Customer");
  const cleanPhone = phone.replace(/\D/g, "");
  const waLink = cleanPhone && finalMsg ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(finalMsg)}` : null;
  const sendOne = async (to, body) => {
    const trimmed = to.trim();
    const digits = trimmed.replace(/\D/g, "");
    const normalised = trimmed.startsWith("+") ? trimmed.replace(/\s/g, "") : digits.length === 10 ? `+91${digits}` : `+${digits}`;
    return sendFn({
      data: {
        to: normalised,
        body
      }
    });
  };
  const send = async () => {
    if (!cleanPhone || !finalMsg) {
      toast.error("Enter phone and message");
      return;
    }
    if (!useTwilio) {
      if (waLink) {
        window.open(waLink, "_blank");
        toast.success("Opening WhatsApp…");
      }
      return;
    }
    setSending(true);
    try {
      const res = await sendOne(phone, finalMsg);
      toast.success(`Sent via Twilio · ${res.sid?.slice(0, 10) ?? ""}…`);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Send failed");
    } finally {
      setSending(false);
    }
  };
  const downloadLeadsExcel = () => {
    if (leads.length === 0) {
      toast.error("No leads to export");
      return;
    }
    const rows = leads.map((l) => ({
      "Created At": new Date(l.created_at).toLocaleString("en-IN"),
      "Name": l.lead_name ?? l.full_name ?? "",
      "Phone": l.phone,
      "Email": l.email ?? "",
      "Product Type": l.product_type,
      "Product Name": l.product_name ?? "",
      "Amount": l.amount ?? "",
      "City": l.city ?? "",
      "Source": l.lead_source ?? "",
      "Status": l.status
    }));
    const ws = utils.json_to_sheet(rows);
    ws["!cols"] = [{
      wch: 20
    }, {
      wch: 22
    }, {
      wch: 16
    }, {
      wch: 26
    }, {
      wch: 14
    }, {
      wch: 18
    }, {
      wch: 12
    }, {
      wch: 14
    }, {
      wch: 14
    }, {
      wch: 12
    }];
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Leads");
    writeFileSync(wb, `aarthvaahini-leads-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.xlsx`);
    toast.success(`Exported ${leads.length} leads`);
  };
  const downloadSampleTemplate = () => {
    const sample = [{
      phone: "+919876543210",
      name: "Ravi Sharma",
      message: ""
    }, {
      phone: "+919812345678",
      name: "Anita Verma",
      message: "Custom message here (optional)"
    }];
    const ws = utils.json_to_sheet(sample);
    ws["!cols"] = [{
      wch: 18
    }, {
      wch: 22
    }, {
      wch: 50
    }];
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Recipients");
    writeFileSync(wb, "whatsapp-bulk-template.xlsx");
  };
  const onPickFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const buf = await file.arrayBuffer();
      const wb = readSync(buf, {
        type: "array"
      });
      const sheet = wb.Sheets[wb.SheetNames[0]];
      const rows = utils.sheet_to_json(sheet, {
        defval: ""
      });
      const parsed = rows.map((r) => {
        const phoneRaw = String(r.phone ?? r.Phone ?? r.mobile ?? r.Mobile ?? "").trim();
        const nm = String(r.name ?? r.Name ?? r.full_name ?? "").trim() || "Customer";
        const msg = String(r.message ?? r.Message ?? "").trim();
        return {
          phone: phoneRaw,
          name: nm,
          message: msg,
          status: "pending"
        };
      }).filter((r) => r.phone);
      if (parsed.length === 0) {
        toast.error("No valid rows. Expected columns: phone, name, message (optional).");
        return;
      }
      setBulk(parsed);
      toast.success(`Loaded ${parsed.length} recipients`);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to parse file");
    } finally {
      if (fileRef.current) fileRef.current.value = "";
    }
  };
  const importFromLeads = () => {
    if (leads.length === 0) {
      toast.error("No leads");
      return;
    }
    const parsed = leads.slice(0, 100).map((l) => ({
      phone: l.phone,
      name: l.lead_name ?? l.full_name ?? "Customer",
      message: "",
      status: "pending"
    }));
    setBulk(parsed);
    toast.success(`Loaded ${parsed.length} recipients from recent leads`);
  };
  const runBulk = async () => {
    if (bulk.length === 0) return;
    if (!useTwilio) {
      toast.error("Switch to Twilio API to send bulk messages");
      return;
    }
    if (!message.trim() && bulk.every((b) => !b.message?.trim())) {
      toast.error("Add a template message or message column in the sheet");
      return;
    }
    setBulkRunning(true);
    for (let i = 0; i < bulk.length; i++) {
      const row = bulk[i];
      setBulk((prev) => prev.map((r, idx) => idx === i ? {
        ...r,
        status: "sending"
      } : r));
      const body = (row.message && row.message.trim() ? row.message : message).replace(/\{\{name\}\}/gi, row.name || "Customer");
      try {
        const res = await sendOne(row.phone, body);
        setBulk((prev) => prev.map((r, idx) => idx === i ? {
          ...r,
          status: "sent",
          sid: res.sid
        } : r));
      } catch (e) {
        setBulk((prev) => prev.map((r, idx) => idx === i ? {
          ...r,
          status: "failed",
          error: e instanceof Error ? e.message : "Failed"
        } : r));
      }
      await new Promise((r) => setTimeout(r, 250));
    }
    setBulkRunning(false);
    toast.success("Bulk send complete");
  };
  const sentCount = bulk.filter((b) => b.status === "sent").length;
  const failCount = bulk.filter((b) => b.status === "failed").length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-slate-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "container mx-auto px-4 py-8 md:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex flex-wrap items-end justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admin", className: "inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-900", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3 w-3" }),
            " Back to Admin"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-1 font-display text-2xl font-bold text-slate-900 md:text-3xl", children: "WhatsApp Sender" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-500", children: "Send single or bulk WhatsApp messages directly via Twilio." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: downloadLeadsExcel, variant: "outline", className: "border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-2 h-4 w-4" }),
          " Download Leads (Excel)"
        ] })
      ] }),
      cfg && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: `mb-4 border p-4 ${cfg.gatewayVerified && cfg.hasFromNumber ? "border-emerald-200 bg-emerald-50" : "border-amber-300 bg-amber-50"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `rounded-lg p-2 ${cfg.gatewayVerified && cfg.hasFromNumber ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`, children: cfg.gatewayVerified && cfg.hasFromNumber ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-slate-900", children: cfg.gatewayVerified && cfg.hasFromNumber ? "WhatsApp Sender is ready" : "Setup required to send WhatsApp messages" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[12px] text-slate-700", children: cfg.gatewayMessage ?? "Checking Twilio token" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-1 grid gap-0.5 text-[12px] text-slate-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
              cfg.hasTwilioKey ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5 text-emerald-600" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-3.5 w-3.5 text-rose-600" }),
              "Twilio connector linked"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
              cfg.hasFromNumber ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5 text-emerald-600" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-3.5 w-3.5 text-rose-600" }),
              "WhatsApp sender number ",
              cfg.fromNumber ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-slate-500", children: [
                "(",
                cfg.fromNumber,
                ")"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-amber-700", children: [
                "(secret ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "rounded bg-white px-1", children: "TWILIO_WHATSAPP_FROM" }),
                " not set)"
              ] })
            ] })
          ] }),
          !cfg.hasFromNumber && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-[12px] text-amber-800", children: [
            "Add your Twilio WhatsApp number (e.g. ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "rounded bg-white px-1", children: "+14155238886" }),
            " for sandbox, or your approved business number) as a project secret named ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "TWILIO_WHATSAPP_FROM" }),
            ". For the sandbox, recipients must first send ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: '"join <your-sandbox-word>"' }),
            " to that number."
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "lg:col-span-2 bg-white p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "flex items-center gap-2 text-sm font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4 text-green-600" }),
              " Compose Message"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-1 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setUseTwilio(true), className: `flex items-center gap-1 rounded-md px-2.5 py-1 font-medium transition ${useTwilio ? "bg-white text-emerald-700 shadow-sm" : "text-slate-500"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3 w-3" }),
                " Twilio API"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setUseTwilio(false), className: `rounded-md px-2.5 py-1 font-medium transition ${!useTwilio ? "bg-white text-slate-800 shadow-sm" : "text-slate-500"}`, children: "wa.me link" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Customer Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: name, onChange: (e) => setName(e.target.value) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Phone (with country code)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: phone, onChange: (e) => setPhone(e.target.value), placeholder: "+919876543210" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
                "Message ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-slate-400", children: [
                  "(use ",
                  `{{name}}`,
                  " for personalization)"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: message, onChange: (e) => setMessage(e.target.value), rows: 6, placeholder: "Type your message…" })
            ] }),
            finalMsg && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-green-200 bg-green-50 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold uppercase text-green-700", children: "Preview" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 whitespace-pre-wrap text-sm text-slate-800", children: finalMsg })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: send, disabled: sending, className: "w-fit bg-green-600 text-white hover:bg-green-700", children: [
              sending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "mr-2 h-4 w-4" }),
              useTwilio ? "Send via Twilio" : "Open in WhatsApp"
            ] }),
            useTwilio && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "rounded-md border border-amber-200 bg-amber-50 p-2 text-[11px] text-amber-800", children: [
              "Twilio sandbox uses ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "whatsapp:+14155238886" }),
              " by default. Set ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "TWILIO_WHATSAPP_FROM" }),
              " in project secrets to your verified sender. Recipients must opt-in to the sandbox first."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-xl border border-sky-200 bg-sky-50/50 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "flex items-center gap-2 text-sm font-semibold text-sky-900", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { className: "h-4 w-4 text-sky-600" }),
                " Bulk Send (Excel)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "border-sky-300 bg-white text-sky-700 hover:bg-sky-100", onClick: () => fileRef.current?.click(), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "mr-1 h-3.5 w-3.5" }),
                  " Upload .xlsx"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "border-slate-300 bg-white text-slate-700", onClick: downloadSampleTemplate, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-1 h-3.5 w-3.5" }),
                  " Sample"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "border-emerald-300 bg-white text-emerald-700 hover:bg-emerald-50", onClick: importFromLeads, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "mr-1 h-3.5 w-3.5" }),
                  " Import Leads"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: fileRef, type: "file", accept: ".xlsx,.xls,.csv", hidden: true, onChange: onPickFile })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-[11px] text-slate-500", children: [
              "Sheet columns: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "phone" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "name" }),
              ", optional ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "message" }),
              ". If ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "message" }),
              " is empty, the composer template above is used."
            ] }),
            bulk.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-slate-600", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: bulk.length }),
                  " recipients · ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-emerald-600", children: [
                    sentCount,
                    " sent"
                  ] }),
                  " · ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-rose-600", children: [
                    failCount,
                    " failed"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", className: "border-slate-300 bg-white text-slate-600", onClick: () => setBulk([]), disabled: bulkRunning, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "mr-1 h-3.5 w-3.5" }),
                    " Clear"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: runBulk, disabled: bulkRunning || !useTwilio, className: "bg-sky-600 text-white hover:bg-sky-700", children: [
                    bulkRunning ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-1 h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "mr-1 h-3.5 w-3.5" }),
                    "Send to all"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-72 overflow-auto rounded-lg border border-slate-200 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-slate-50 text-left text-[10px] uppercase text-slate-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Phone" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Name" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2", children: "Status" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: bulk.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-slate-100", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5 font-mono text-slate-700", children: b.phone }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5 text-slate-700", children: b.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-1.5", children: [
                    b.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: "Pending" }),
                    b.status === "sending" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-sky-600", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-3 w-3 animate-spin" }),
                      " Sending"
                    ] }),
                    b.status === "sent" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-emerald-600", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3 w-3" }),
                      " Sent"
                    ] }),
                    b.status === "failed" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-rose-600", title: b.error, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-3 w-3" }),
                      " Failed"
                    ] })
                  ] })
                ] }, i)) })
              ] }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-white p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mb-3 flex items-center gap-2 text-sm font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-amber-500" }),
              " Quick Templates"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: TEMPLATES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setMessage(t.text), className: "w-full rounded-lg border border-slate-200 bg-white p-2.5 text-left text-xs transition hover:border-green-300 hover:bg-green-50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-slate-800", children: t.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 line-clamp-2 text-slate-500", children: t.text })
            ] }, t.label)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-white p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mb-3 flex items-center gap-2 text-sm font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4 text-sky-600" }),
              " Recent Leads"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-h-72 space-y-1.5 overflow-y-auto", children: [
              leads.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-400", children: "No leads yet." }),
              leads.slice(0, 20).map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
                setPhone(l.phone);
                setName(l.full_name ?? l.lead_name ?? "Customer");
              }, className: "flex w-full items-center justify-between rounded-lg border border-slate-100 p-2 text-left text-xs hover:border-sky-300 hover:bg-sky-50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-slate-800", children: l.full_name ?? l.lead_name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-slate-500", children: l.phone })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px]", children: "Use" })
              ] }, l.id))
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  WhatsAppPage as component
};
