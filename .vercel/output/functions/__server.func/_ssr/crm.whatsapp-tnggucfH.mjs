import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as Card } from "./card-RGlIzTYo.mjs";
import { B as Button } from "./button-TjZkfKyC.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { L as Label } from "./label-JU3yqRBo.mjs";
import { T as Textarea } from "./textarea-DtF-dDz-.mjs";
import { B as Badge } from "./badge-DyfXZgLs.mjs";
import { s as supabase } from "./router-DSDPkTTS.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { u as useServerFn } from "./createSsrRpc-CjdcSI9z.mjs";
import { t as twilioConfig, s as sendWhatsApp } from "./twilio.functions-FfPMKGP1.mjs";
import { u as utils, w as writeFileSync, r as readSync } from "../_libs/xlsx.mjs";
import "../_libs/seroval.mjs";
import { y as CircleCheck, E as CircleX, ac as MessageCircle, aK as Zap, a4 as LoaderCircle, aq as Send, O as FileSpreadsheet, aC as Upload, I as Download, aG as Users, az as Trash2, z as CirclePlay, au as Sparkles } from "../_libs/lucide-react.mjs";
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
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "./server-DnlOAVGX.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "./auth-middleware-BO13YjeL.mjs";
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
function CrmWhatsAppPage() {
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
    supabase.from("leads").select("id, full_name, lead_name, phone, email, product_type, status").order("created_at", {
      ascending: false
    }).limit(500).then(({
      data
    }) => setLeads(data ?? []));
    cfgFn().then(setCfg).catch(() => setCfg({
      hasLovableKey: false,
      hasTwilioKey: false,
      hasFromNumber: false,
      fromNumber: null,
      gatewayVerified: false,
      gatewayMessage: "Twilio token check failed"
    }));
  }, [cfgFn]);
  const finalMsg = message.replace(/\{\{name\}\}/gi, name || "Customer");
  const cleanPhone = phone.replace(/\D/g, "");
  const waLink = cleanPhone && finalMsg ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(finalMsg)}` : null;
  const normalisePhone = (to) => {
    const trimmed = to.trim();
    if (trimmed.startsWith("+")) return trimmed.replace(/\s/g, "");
    const digits = trimmed.replace(/\D/g, "");
    if (digits.length === 10) return `+91${digits}`;
    return `+${digits}`;
  };
  const sendOne = async (to, body) => {
    return sendFn({
      data: {
        to: normalisePhone(to),
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
      toast.success(`Sent · ${res.sid?.slice(0, 10) ?? ""}…`);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Send failed");
    } finally {
      setSending(false);
    }
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
        toast.error("No valid rows. Expected: phone, name, message (optional).");
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
      toast.error("Switch to Twilio API to send bulk");
      return;
    }
    if (!message.trim() && bulk.every((b) => !b.message?.trim())) {
      toast.error("Add a template or message column in the sheet");
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-slate-900 md:text-3xl", children: "WhatsApp Sender" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-500", children: "Send single or bulk WhatsApp messages via Twilio." })
    ] }),
    cfg && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mb-4 rounded-xl border p-3 text-xs ${cfg.gatewayVerified && cfg.hasFromNumber ? "border-emerald-200 bg-emerald-50 text-emerald-900" : "border-amber-200 bg-amber-50 text-amber-900"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
      cfg.gatewayVerified && cfg.hasFromNumber ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "mt-0.5 h-4 w-4 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: cfg.gatewayVerified && cfg.hasFromNumber ? "Twilio connected:" : "Twilio setup check:" }),
        " ",
        cfg.gatewayMessage ?? "Checking token",
        cfg.fromNumber && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1", children: [
          "Sender: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: cfg.fromNumber }),
          "."
        ] }),
        !cfg.gatewayVerified && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1", children: "If token error still appears, reconnect Twilio once in Connectors." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "⚠️ Twilio WhatsApp Sandbox:" }),
      " For sandbox sending, the customer must send",
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "mx-1 rounded bg-white px-1.5 py-0.5", children: "join <your-sandbox-code>" }),
      "to ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "+14155238886" }),
      " once. Indian 10-digit numbers auto-convert to ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "+91" }),
      "."
    ] }),
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
  ] });
}
export {
  CrmWhatsAppPage as component
};
