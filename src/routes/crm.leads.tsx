// import { createFileRoute } from "@tanstack/react-router";
// import { useEffect, useState } from "react";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { supabase } from "@/integrations/supabase/client";
// import { toast } from "sonner";
// import {
//   Loader2,
//   Plus,
//   Search,
//   MessageCircle,
//   Sparkles,
//   StickyNote,
//   CheckCircle2,
//   XCircle,
// } from "lucide-react";
// import { Textarea } from "@/components/ui/textarea";
// import { useAuth } from "@/hooks/useAuth";
// import { cn } from "@/lib/utils";
// import { CustomerProfileDialog } from "@/components/crm/CustomerProfileDialog";
// import { INDIA_STATES, citiesForState } from "@/data/india-cities";

// export const Route = createFileRoute("/crm/leads")({
//   component: LeadsPage,
// });

// const LEAD_STAGES = [
//   "New",
//   "Qualified",
//   "Approved",
//   "Rejected",
//   "Disbursed",
//   "Closed",
// ] as const;

// type Stage = (typeof LEAD_STAGES)[number];

// const STAGE_STYLES: Record<
//   Stage,
//   { trigger: string; dot: string; option: string }
// > = {
//   New: {
//     trigger: "border-sky-300 bg-sky-50 text-sky-700",
//     dot: "bg-sky-500",
//     option: "text-sky-700",
//   },
//   Qualified: {
//     trigger: "border-violet-300 bg-violet-50 text-violet-700",
//     dot: "bg-violet-500",
//     option: "text-violet-700",
//   },
//   Approved: {
//     trigger: "border-emerald-300 bg-emerald-50 text-emerald-700",
//     dot: "bg-emerald-500",
//     option: "text-emerald-700",
//   },
//   Rejected: {
//     trigger: "border-rose-300 bg-rose-50 text-rose-700",
//     dot: "bg-rose-500",
//     option: "text-rose-700",
//   },
//   Disbursed: {
//     trigger: "border-amber-300 bg-amber-50 text-amber-700",
//     dot: "bg-amber-500",
//     option: "text-amber-700",
//   },
//   Closed: {
//     trigger: "border-slate-300 bg-slate-100 text-slate-700",
//     dot: "bg-slate-500",
//     option: "text-slate-700",
//   },
// };

// const PRODUCT_TYPES = ["loan", "insurance", "mutual_fund"] as const;

// const LEAD_SOURCES = [
//   "Website",
//   "Referral",
//   "Walk-in",
//   "Campaign",
//   "Cold Call",
//   "Partner",
//   "WhatsApp",
//   "Social Media",
// ] as const;

// const LOAN_TYPES = [
//   "Home Loan",
//   "Personal Loan",
//   "Business Loan",
//   "Working Capital Loan",
//   "Machinery & Equipment Loan",
//   "Car / Vehicle Loan",
//   "Education Loan",
//   "Loan Against Property",
//   "Gold Loan",
//   "Project Loan",
//   "Credit Card",
// ] as const;

// const SUB_LOAN_TYPES: Record<string, string[]> = {
//   "Home Loan": [
//     "Home Purchase",
//     "Home Construction",
//     "Plot Purchase",
//     "Home Improvement",
//     "Balance Transfer",
//     "Top-up Loan",
//   ],
//   "Personal Loan": [
//     "Salaried",
//     "Self-Employed",
//     "Wedding",
//     "Travel",
//     "Medical Emergency",
//     "Debt Consolidation",
//   ],
//   "Business Loan": [
//     "Working Capital",
//     "Term Loan",
//     "Machinery Loan",
//     "MSME",
//     "Overdraft",
//     "Invoice Discounting",
//   ],
//   "Working Capital Loan": [
//     "Cash Credit",
//     "Overdraft",
//     "Invoice Financing",
//     "Inventory Funding",
//     "Vendor Payment Funding",
//   ],
//   "Machinery & Equipment Loan": [
//     "New Machinery Loan",
//     "Used Machinery Loan",
//     "Equipment Finance",
//     "Industrial Tools Finance",
//     "Manufacturing Equipment Loan",
//   ],
//   "Car / Vehicle Loan": [
//     "New Car",
//     "Used Car",
//     "Two Wheeler",
//     "Commercial Vehicle",
//   ],
//   "Education Loan": ["Study in India", "Study Abroad", "Skill Development"],
//   "Loan Against Property": [
//     "Residential Property",
//     "Commercial Property",
//     "Industrial Property",
//   ],
//   "Gold Loan": ["Personal Gold Loan", "Agriculture Gold Loan"],
//   "Project Loan": ["Infrastructure", "Real Estate", "Renewable Energy"],
//   "Credit Card": ["Regular", "Premium", "Business", "Travel Card"],
// };

// const BANK_OPTIONS = [
//   "HDFC Bank",
//   "ICICI Bank",
//   "State Bank of India",
//   "Axis Bank",
//   "Kotak Mahindra Bank",
//   "IDFC First Bank",
//   "Yes Bank",
//   "IndusInd Bank",
//   "Punjab National Bank",
//   "Bank of Baroda",
//   "Canara Bank",
//   "Union Bank of India",
//   "Federal Bank",
//   "RBL Bank",
//   "Bajaj Finserv",
//   "Tata Capital",
//   "Aditya Birla Finance",
//   "L&T Finance",
//   "Mahindra Finance",
//   "IDBI Bank",
//   "Piramal Finance",
//   "DCB Bank",
//   "Karnataka Bank",
//   "South Indian Bank",
// ];

// type Lead = {
//   id: string;
//   lead_name: string | null;
//   full_name: string | null;
//   phone: string;
//   email: string | null;
//   pan: string | null;
//   city: string | null;
//   state: string | null;
//   product_type: string;
//   lead_source: string | null;
//   status: string;
//   assigned_to: string | null;
//   created_at: string;
//   cibil_score: number | null;
//   loan_type: string | null;
//   loan_sub_type: string | null;
//   loan_amount: number | null;
//   bank_name: string | null;
// };

// type Staff = {
//   id: string;
//   full_name: string | null;
//   email: string | null;
//   role: string;
// };

// function cleanAmountValue(value: unknown) {
//   if (value === null || value === undefined) return "";

//   const raw = String(value).trim();

//   if (!raw) return "";

//   if (raw.toLowerCase().includes("e")) return "";

//   const cleaned = raw.replace(/[₹,\s]/g, "").replace(/[^\d.]/g, "");
//   const num = Number(cleaned);

//   if (!Number.isFinite(num) || num <= 0) return "";

//   return Math.round(num).toString();
// }

// function amountToNumber(value: unknown) {
//   const cleaned = cleanAmountValue(value);
//   return cleaned ? Number(cleaned) : null;
// }

// function formatAmount(value: unknown) {
//   const cleaned = cleanAmountValue(value);
//   if (!cleaned) return "—";
//   return `₹${Number(cleaned).toLocaleString("en-IN")}`;
// }

// function normaliseStage(s: string): Stage {
//   if ((LEAD_STAGES as readonly string[]).includes(s)) return s as Stage;
//   if (s === "Contacted") return "New";
//   if (s === "Docs Pending" || s === "Login Ready") return "Qualified";
//   if (s === "Sanction Pending") return "Approved";
//   if (s === "Converted") return "Disbursed";
//   if (s === "Rejected") return "Rejected";
//   return "New";
// }

// function cibilBadge(score: number | null) {
//   if (score == null) return "bg-slate-100 text-slate-500 border-slate-200";
//   if (score >= 750) return "bg-emerald-50 text-emerald-700 border-emerald-200";
//   if (score >= 650) return "bg-amber-50 text-amber-700 border-amber-200";
//   return "bg-rose-50 text-rose-700 border-rose-200";
// }

// function LeadsPage() {
//   const { user, isAdmin } = useAuth();
//   const [leads, setLeads] = useState<Lead[]>([]);
//   const [staff, setStaff] = useState<Staff[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [filter, setFilter] = useState("");
//   const [stageFilter, setStageFilter] = useState<string>("all");
//   const [assigneeFilter, setAssigneeFilter] = useState<string>("all");
//   const [bankFilter, setBankFilter] = useState<string>("all");
//   const [sortBy, setSortBy] = useState<string>("recent");
//   const [open, setOpen] = useState(false);
//   const [noteLead, setNoteLead] = useState<Lead | null>(null);
//   const [approveLead, setApproveLead] = useState<Lead | null>(null);
//   const [rejectLead, setRejectLead] = useState<Lead | null>(null);
//   const [profileLead, setProfileLead] = useState<string | null>(null);

//   const rowSelectClass =
//     "h-10 w-[190px] rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100";

//   const load = async () => {
//     setLoading(true);

//     const [{ data, error }, roles] = await Promise.all([
//       supabase
//         .from("leads")
//         .select(
//           "id, lead_name, full_name, phone, email, pan, city, state, product_type, lead_source, status, assigned_to, created_at, cibil_score, loan_type, loan_sub_type, loan_amount, bank_name",
//         )
//         .order("created_at", { ascending: false })
//         .limit(500),
//       supabase.from("user_roles").select("user_id, role"),
//     ]);

//     if (error) toast.error(error.message);

//     setLeads((data ?? []) as Lead[]);

//     const ids = (roles.data ?? []).map((r: { user_id: string }) => r.user_id);

//     if (ids.length) {
//       const { data: profs } = await supabase
//         .from("profiles")
//         .select("id, full_name, email")
//         .in("id", ids);

//       const byId = new Map((profs ?? []).map((p) => [p.id, p]));

//       setStaff(
//         (roles.data ?? []).map((r: { user_id: string; role: string }) => ({
//           id: r.user_id,
//           full_name: byId.get(r.user_id)?.full_name ?? null,
//           email: byId.get(r.user_id)?.email ?? null,
//           role: r.role,
//         })),
//       );
//     } else {
//       setStaff([]);
//     }

//     setLoading(false);
//   };

//   useEffect(() => {
//     load();

//     const channel = supabase
//       .channel("crm-leads-sync")
//       .on(
//         "postgres_changes",
//         { event: "*", schema: "public", table: "leads" },
//         () => load(),
//       )
//       .on(
//         "postgres_changes",
//         { event: "*", schema: "public", table: "customers" },
//         () => load(),
//       )
//       .subscribe();

//     return () => {
//       channel.unsubscribe();
//     };
//   }, []);

//   const filtered = leads
//     .filter((l) => {
//       const term = filter.toLowerCase();
//       const stage = normaliseStage(l.status);

//       const matchesText =
//         !term ||
//         (l.lead_name ?? l.full_name ?? "").toLowerCase().includes(term) ||
//         l.phone.includes(term);

//       const matchesStage = stageFilter === "all" || stage === stageFilter;

//       const matchesAssignee =
//         assigneeFilter === "all" ||
//         (assigneeFilter === "unassigned"
//           ? !l.assigned_to
//           : l.assigned_to === assigneeFilter);

//       const matchesBank =
//         bankFilter === "all" ||
//         (bankFilter === "none" ? !l.bank_name : l.bank_name === bankFilter);

//       const partnerVisible =
//         !isAdmin ||
//         (l.lead_source ?? "").toLowerCase() !== "partner" ||
//         (!!user && l.assigned_to === user.id);

//       return (
//         matchesText &&
//         matchesStage &&
//         matchesAssignee &&
//         matchesBank &&
//         partnerVisible
//       );
//     })
//     .sort((a, b) => {
//       const nameA = (a.lead_name ?? a.full_name ?? "").toLowerCase();
//       const nameB = (b.lead_name ?? b.full_name ?? "").toLowerCase();

//       if (sortBy === "name_asc") return nameA.localeCompare(nameB);
//       if (sortBy === "name_desc") return nameB.localeCompare(nameA);
//       if (sortBy === "amount_desc")
//         return (Number(b.loan_amount) || 0) - (Number(a.loan_amount) || 0);
//       if (sortBy === "amount_asc")
//         return (Number(a.loan_amount) || 0) - (Number(b.loan_amount) || 0);
//       if (sortBy === "cibil_desc")
//         return (b.cibil_score ?? 0) - (a.cibil_score ?? 0);
//       if (sortBy === "oldest")
//         return (
//           new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
//         );

//       return (
//         new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
//       );
//     });

//   const stageCounts = LEAD_STAGES.reduce<Record<Stage, number>>(
//     (acc, s) => {
//       acc[s] = leads.filter((l) => normaliseStage(l.status) === s).length;
//       return acc;
//     },
//     {
//       New: 0,
//       Qualified: 0,
//       Approved: 0,
//       Rejected: 0,
//       Disbursed: 0,
//       Closed: 0,
//     },
//   );

//   const staffLabel = (id: string | null) => {
//     if (!id) return "Unassigned";
//     const s = staff.find((x) => x.id === id);
//     return s?.full_name || s?.email || "Staff";
//   };

//   const updateBank = async (lead: Lead, value: string) => {
//     const bankName = value === "none" ? null : value;

//     const { error } = await supabase
//       .from("leads")
//       .update({ bank_name: bankName })
//       .eq("id", lead.id);

//     if (error) {
//       toast.error(error.message);
//       return;
//     }

//     setLeads((prev) =>
//       prev.map((l) => (l.id === lead.id ? { ...l, bank_name: bankName } : l)),
//     );

//     toast.success(bankName ? `Bank → ${bankName}` : "Bank cleared");
//   };

//   const updateAssignee = async (lead: Lead, value: string) => {
//     const newId = value === "unassigned" ? null : value;

//     const { error } = await supabase
//       .from("leads")
//       .update({ assigned_to: newId })
//       .eq("id", lead.id);

//     if (error) return toast.error(error.message);

//     setLeads((prev) =>
//       prev.map((l) => (l.id === lead.id ? { ...l, assigned_to: newId } : l)),
//     );

//     toast.success(`Assigned → ${staffLabel(newId)}`);
//   };

//   const updateStage = async (lead: Lead, status: Stage) => {
//     const { error } = await supabase
//       .from("leads")
//       .update({ status })
//       .eq("id", lead.id);

//     if (error) return toast.error(error.message);

//     setLeads((prev) =>
//       prev.map((l) => (l.id === lead.id ? { ...l, status } : l)),
//     );

//     toast.success(`Stage → ${status}`);

//     if (status === "Approved") {
//       const { data: existing } = await supabase
//         .from("customers")
//         .select("id")
//         .eq("lead_id", lead.id)
//         .maybeSingle();

//       if (!existing) {
//         await supabase.from("customers").insert({
//           customer_name: lead.lead_name ?? lead.full_name ?? "Unnamed",
//           mobile: lead.phone,
//           email: lead.email,
//           pan: lead.pan,
//           address: [lead.city, lead.state].filter(Boolean).join(", ") || null,
//           lead_id: lead.id,
//           loan_type: lead.loan_type,
//           loan_sub_type: lead.loan_sub_type,
//           loan_amount: amountToNumber(lead.loan_amount),
//           cibil_score: lead.cibil_score,
//           bank_name: lead.bank_name,
//           stage: "Docs Pending",
//         });

//         toast.success("Approved → Customer created");
//       }
//     }
//   };

//   const approve = (lead: Lead) => setApproveLead(lead);
//   const reject = (lead: Lead) => setRejectLead(lead);

//   const confirmApprove = async (
//     lead: Lead,
//     payload: {
//       loan_type: string;
//       requested_amount: number | null;
//       sanction_amount: number | null;
//       tenure_months: number | null;
//       interest_rate: number | null;
//       bank_name: string;
//       notes: string;
//       docs: Record<string, boolean>;
//     },
//   ) => {
//     const finalAmount = payload.sanction_amount ?? payload.requested_amount;

//     const { error: leadErr } = await supabase
//       .from("leads")
//       .update({
//         status: "Approved",
//         loan_amount: payload.requested_amount,
//         bank_name: payload.bank_name || null,
//         loan_type: payload.loan_type,
//       })
//       .eq("id", lead.id);

//     if (leadErr) return toast.error(leadErr.message);

//     let customerId: string | null = null;

//     const { data: existing } = await supabase
//       .from("customers")
//       .select("id")
//       .eq("lead_id", lead.id)
//       .maybeSingle();

//     if (existing) {
//       customerId = existing.id;
//     } else {
//       const { data: ins, error: cErr } = await supabase
//         .from("customers")
//         .insert({
//           customer_name: lead.lead_name ?? lead.full_name ?? "Unnamed",
//           mobile: lead.phone,
//           email: lead.email,
//           pan: lead.pan,
//           address: [lead.city, lead.state].filter(Boolean).join(", ") || null,
//           lead_id: lead.id,
//           loan_type: payload.loan_type,
//           loan_amount: finalAmount,
//           cibil_score: lead.cibil_score,
//           bank_name: payload.bank_name || null,
//           stage: "Approved",
//           note: payload.notes || null,
//         })
//         .select("id")
//         .single();

//       if (cErr) return toast.error(cErr.message);
//       customerId = ins.id;
//     }

//     if (customerId) {
//       await supabase
//         .from("leads")
//         .update({ converted_customer_id: customerId })
//         .eq("id", lead.id);
//     }

//     const { error: lcErr } = await supabase.from("loan_cases").insert({
//       customer_id: customerId,
//       lead_id: lead.id,
//       loan_type: payload.loan_type,
//       loan_amount: finalAmount,
//       requested_amount: payload.requested_amount,
//       sanction_amount: payload.sanction_amount,
//       tenure_months: payload.tenure_months,
//       interest_rate: payload.interest_rate,
//       lender_name: payload.bank_name || null,
//       stage: payload.sanction_amount ? "Sanction" : "Under Process",
//       notes: payload.notes || null,
//       documents_checklist: payload.docs,
//     });

//     if (lcErr) return toast.error(lcErr.message);

//     setLeads((prev) =>
//       prev.map((l) =>
//         l.id === lead.id
//           ? {
//               ...l,
//               status: "Approved",
//               loan_amount: payload.requested_amount,
//               bank_name: payload.bank_name || null,
//               loan_type: payload.loan_type,
//             }
//           : l,
//       ),
//     );

//     toast.success("Approved → Customer & Loan Case created");
//     setApproveLead(null);
//   };

//   const confirmReject = async (lead: Lead, reason: string) => {
//     const { error } = await supabase
//       .from("leads")
//       .update({ status: "Rejected", rejection_reason: reason })
//       .eq("id", lead.id);

//     if (error) return toast.error(error.message);

//     setLeads((prev) =>
//       prev.map((l) => (l.id === lead.id ? { ...l, status: "Rejected" } : l)),
//     );

//     toast.success("Lead rejected");
//     setRejectLead(null);
//   };

//   return (
//     <div className="space-y-4">
//       <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 px-4 py-3 text-white shadow-md shadow-sky-500/20">
//         <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/15 blur-2xl" />

//         <div className="relative flex flex-wrap items-center justify-between gap-3">
//           <div className="flex items-center gap-3">
//             <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20">
//               <Sparkles className="h-4 w-4" />
//             </div>

//             <div>
//               <div className="text-sm font-semibold leading-tight">
//                 Leads Pipeline
//               </div>

//               <div className="text-[11px] text-white/80">
//                 {leads.length} total · {filtered.length} shown · WhatsApp ready
//               </div>
//             </div>
//           </div>

//           <Dialog open={open} onOpenChange={setOpen}>
//             <DialogTrigger asChild>
//               <Button className="bg-white text-sky-700 shadow-md hover:bg-sky-50">
//                 <Plus className="mr-2 h-4 w-4" /> New Lead
//               </Button>
//             </DialogTrigger>

//             <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto bg-white">
//               <DialogHeader>
//                 <DialogTitle>Add New Lead</DialogTitle>
//               </DialogHeader>

//               <NewLeadForm
//                 onSaved={() => {
//                   setOpen(false);
//                   load();
//                 }}
//               />
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>

//       <div className="grid grid-cols-2 gap-2 sm:grid-cols-6">
//         {LEAD_STAGES.map((s) => {
//           const st = STAGE_STYLES[s];
//           const active = stageFilter === s;

//           return (
//             <button
//               key={s}
//               onClick={() => setStageFilter(active ? "all" : s)}
//               className={cn(
//                 "flex items-center justify-between rounded-xl border bg-white px-3 py-2 text-left text-xs shadow-sm transition-all hover:-translate-y-0.5 hover:shadow",
//                 active
//                   ? "ring-2 ring-offset-1 " + st.trigger
//                   : "border-slate-200",
//               )}
//             >
//               <div className="flex items-center gap-2">
//                 <span className={cn("h-2.5 w-2.5 rounded-full", st.dot)} />
//                 <span className="font-medium text-slate-700">{s}</span>
//               </div>

//               <span
//                 className={cn(
//                   "rounded-full px-1.5 py-0.5 text-[10px] font-semibold",
//                   st.trigger,
//                 )}
//               >
//                 {stageCounts[s]}
//               </span>
//             </button>
//           );
//         })}
//       </div>

//       <Card className="p-4">
//         <div className="flex flex-wrap items-center gap-3">
//           <div className="relative min-w-[220px] flex-1">
//             <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

//             <Input
//               placeholder="Search name, phone…"
//               value={filter}
//               onChange={(e) => setFilter(e.target.value)}
//               className="pl-9"
//             />
//           </div>

//           <Select value={stageFilter} onValueChange={setStageFilter}>
//             <SelectTrigger className="w-[170px] bg-white">
//               <SelectValue placeholder="Stage" />
//             </SelectTrigger>

//             <SelectContent className="bg-white">
//               <SelectItem value="all">All stages</SelectItem>
//               {LEAD_STAGES.map((s) => (
//                 <SelectItem key={s} value={s}>
//                   {s}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>

//           <Select value={assigneeFilter} onValueChange={setAssigneeFilter}>
//             <SelectTrigger className="w-[200px] bg-white">
//               <SelectValue placeholder="Assignee" />
//             </SelectTrigger>

//             <SelectContent className="bg-white">
//               <SelectItem value="all">All assignees</SelectItem>
//               <SelectItem value="unassigned">Unassigned</SelectItem>
//               {staff.map((s) => (
//                 <SelectItem key={s.id} value={s.id}>
//                   {s.full_name || s.email || "Staff"} · {s.role}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>

//           <Select value={bankFilter} onValueChange={setBankFilter}>
//             <SelectTrigger className="w-[190px] bg-white">
//               <SelectValue placeholder="Bank" />
//             </SelectTrigger>

//             <SelectContent className="max-h-72 bg-white">
//               <SelectItem value="all">All banks</SelectItem>
//               <SelectItem value="none">— Not set —</SelectItem>
//               {[...BANK_OPTIONS]
//                 .sort((a, b) => a.localeCompare(b))
//                 .map((b) => (
//                   <SelectItem key={b} value={b}>
//                     {b}
//                   </SelectItem>
//                 ))}
//             </SelectContent>
//           </Select>

//           <Select value={sortBy} onValueChange={setSortBy}>
//             <SelectTrigger className="w-[180px] bg-white">
//               <SelectValue placeholder="Sort" />
//             </SelectTrigger>

//             <SelectContent className="bg-white">
//               <SelectItem value="recent">Newest first</SelectItem>
//               <SelectItem value="oldest">Oldest first</SelectItem>
//               <SelectItem value="name_asc">Name A → Z</SelectItem>
//               <SelectItem value="name_desc">Name Z → A</SelectItem>
//               <SelectItem value="amount_desc">
//                 Loan amount high → low
//               </SelectItem>
//               <SelectItem value="amount_asc">
//                 Loan amount low → high
//               </SelectItem>
//               <SelectItem value="cibil_desc">CIBIL high → low</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       </Card>

//       <Card className="overflow-hidden">
//         {loading ? (
//           <div className="flex h-48 items-center justify-center">
//             <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
//           </div>
//         ) : filtered.length === 0 ? (
//           <div className="p-10 text-center text-sm text-slate-500">
//             No leads match your filters.
//           </div>
//         ) : (
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Name</TableHead>
//                 <TableHead>Mobile</TableHead>
//                 <TableHead>Loan Type</TableHead>
//                 <TableHead>Loan Amount</TableHead>
//                 <TableHead>CIBIL</TableHead>
//                 <TableHead>Stage</TableHead>
//                 <TableHead>Bank</TableHead>
//                 <TableHead>Assigned</TableHead>
//                 <TableHead className="text-right">Action</TableHead>
//               </TableRow>
//             </TableHeader>

//             <TableBody>
//               {filtered.map((l) => {
//                 const stage = normaliseStage(l.status);
//                 const st = STAGE_STYLES[stage];

//                 const canDecide =
//                   stage !== "Approved" &&
//                   stage !== "Rejected" &&
//                   stage !== "Disbursed" &&
//                   stage !== "Closed";

//                 return (
//                   <TableRow key={l.id}>
//                     <TableCell className="font-medium">
//                       <button
//                         onClick={() => setProfileLead(l.id)}
//                         className="text-sky-700 hover:underline"
//                       >
//                         {l.lead_name ?? l.full_name ?? "—"}
//                       </button>

//                       {l.email && (
//                         <div className="text-xs text-slate-500">{l.email}</div>
//                       )}
//                     </TableCell>

//                     <TableCell className="text-sm">{l.phone}</TableCell>

//                     <TableCell>
//                       <div className="text-sm font-medium text-slate-800">
//                         {l.loan_type ??
//                           (l.product_type ?? "").replace(/_/g, " ")}
//                       </div>

//                       {l.loan_sub_type && (
//                         <div className="text-xs text-slate-500">
//                           {l.loan_sub_type}
//                         </div>
//                       )}
//                     </TableCell>

//                     <TableCell className="text-sm">
//                       {formatAmount(l.loan_amount)}
//                     </TableCell>

//                     <TableCell>
//                       <span
//                         className={cn(
//                           "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold",
//                           cibilBadge(l.cibil_score),
//                         )}
//                       >
//                         {l.cibil_score ?? "N/A"}
//                       </span>
//                     </TableCell>

//                     <TableCell>
//                       <span
//                         className={cn(
//                           "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold",
//                           st.trigger,
//                         )}
//                       >
//                         <span
//                           className={cn("h-1.5 w-1.5 rounded-full", st.dot)}
//                         />
//                         {stage}
//                       </span>
//                     </TableCell>

//                     <TableCell>
//                       <select
//                         value={l.bank_name ?? "none"}
//                         onChange={(e) => updateBank(l, e.target.value)}
//                         className={rowSelectClass}
//                       >
//                         <option value="none">— None —</option>
//                         {BANK_OPTIONS.map((b) => (
//                           <option key={b} value={b}>
//                             {b}
//                           </option>
//                         ))}
//                       </select>
//                     </TableCell>

//                     <TableCell>
//                       <select
//                         value={l.assigned_to ?? "unassigned"}
//                         onChange={(e) => updateAssignee(l, e.target.value)}
//                         className={rowSelectClass}
//                       >
//                         <option value="unassigned">Unassigned</option>
//                         {staff.map((s) => (
//                           <option key={s.id} value={s.id}>
//                             {s.full_name || s.email || "Staff"}
//                           </option>
//                         ))}
//                       </select>
//                     </TableCell>

//                     <TableCell className="text-right">
//                       <div className="inline-flex items-center gap-1.5">
//                         {canDecide && (
//                           <>
//                             <Button
//                               size="sm"
//                               className="h-8 bg-emerald-600 text-white hover:bg-emerald-700"
//                               onClick={() => approve(l)}
//                               title="Approve lead → push to Customers"
//                             >
//                               <CheckCircle2 className="mr-1 h-3.5 w-3.5" />
//                               Approve
//                             </Button>

//                             <Button
//                               size="sm"
//                               variant="outline"
//                               className="h-8 border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100"
//                               onClick={() => reject(l)}
//                               title="Reject lead"
//                             >
//                               <XCircle className="mr-1 h-3.5 w-3.5" />
//                               Reject
//                             </Button>
//                           </>
//                         )}

//                         <Button
//                           size="sm"
//                           variant="outline"
//                           className="h-8 border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100"
//                           title="Notes"
//                           onClick={() => setNoteLead(l)}
//                         >
//                           <StickyNote className="h-3.5 w-3.5" />
//                         </Button>

//                         <a
//                           href={`https://wa.me/${(l.phone || "").replace(
//                             /\D/g,
//                             "",
//                           )}?text=${encodeURIComponent(
//                             `Hi ${
//                               l.lead_name ?? l.full_name ?? "there"
//                             }, this is from Aarthvaahini. Following up on your ${(
//                               l.loan_type ??
//                               l.product_type ??
//                               ""
//                             ).replace(/_/g, " ")} enquiry.`,
//                           )}`}
//                           target="_blank"
//                           rel="noreferrer"
//                           title="WhatsApp"
//                         >
//                           <Button
//                             size="sm"
//                             variant="outline"
//                             className="h-8 border-green-200 bg-green-50 text-green-700 hover:bg-green-100"
//                           >
//                             <MessageCircle className="h-3.5 w-3.5" />
//                           </Button>
//                         </a>
//                       </div>
//                     </TableCell>
//                   </TableRow>
//                 );
//               })}
//             </TableBody>
//           </Table>
//         )}
//       </Card>

//       <CustomerProfileDialog
//         open={!!profileLead}
//         onOpenChange={(v) => !v && setProfileLead(null)}
//         leadId={profileLead}
//       />

//       <Dialog open={!!noteLead} onOpenChange={(v) => !v && setNoteLead(null)}>
//         <DialogContent className="max-w-lg bg-white">
//           <DialogHeader>
//             <DialogTitle>
//               Notes — {noteLead?.lead_name ?? noteLead?.full_name}
//             </DialogTitle>
//           </DialogHeader>

//           {noteLead && <LeadNotes lead={noteLead} />}
//         </DialogContent>
//       </Dialog>

//       <ApproveLeadDialog
//         lead={approveLead}
//         onClose={() => setApproveLead(null)}
//         onConfirm={confirmApprove}
//       />

//       <RejectLeadDialog
//         lead={rejectLead}
//         onClose={() => setRejectLead(null)}
//         onConfirm={confirmReject}
//       />
//     </div>
//   );
// }

// function NewLeadForm({ onSaved }: { onSaved: () => void }) {
//   const initialLead = {
//     lead_name: "",
//     phone: "",
//     email: "",
//     pan: "",
//     aadhaar: "",
//     city: "",
//     state: "",
//     product_type: "loan",
//     lead_source: "Website",
//     loan_type: "",
//     loan_sub_type: "",
//     loan_amount: "",
//     cibil_score: "",
//     bank_name: "",
//   };

//   const [f, setF] = useState(initialLead);
//   const [saving, setSaving] = useState(false);

//   const subOptions = SUB_LOAN_TYPES[f.loan_type] ?? [];

//   const inputClass =
//     "h-11 w-full rounded-xl border bg-white px-4 text-sm outline-none transition focus:ring-2 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400";

//   const submit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!f.lead_name.trim()) {
//       toast.error("Lead name is required");
//       return;
//     }

//     if (!f.phone.trim()) {
//       toast.error("Mobile number is required");
//       return;
//     }

//     const loanAmount = amountToNumber(f.loan_amount);

//     setSaving(true);

//     const { error } = await supabase.from("leads").insert({
//       lead_name: f.lead_name.trim(),
//       full_name: f.lead_name.trim(),
//       phone: f.phone.trim(),
//       email: f.email.trim() || null,
//       pan: f.pan.trim() || null,
//       aadhaar: f.aadhaar.trim() || null,
//       city: f.city.trim() || null,
//       state: f.state.trim() || null,
//       product_type: f.product_type,
//       lead_source: f.lead_source,
//       status: "New",
//       loan_type: f.loan_type || null,
//       loan_sub_type: f.loan_sub_type || null,
//       loan_amount: loanAmount,
//       amount: loanAmount,
//       cibil_score: f.cibil_score ? Number(f.cibil_score) : null,
//       product_name: f.loan_sub_type || f.loan_type || null,
//       bank_name: f.bank_name || null,
//     });

//     setSaving(false);

//     if (error) return toast.error(error.message);

//     toast.success("Lead created");
//     setF(initialLead);
//     onSaved();
//   };

//   return (
//     <form onSubmit={submit} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
//       <Field label="Lead Name *">
//         <Input
//           required
//           className="border-sky-200 focus-visible:ring-sky-400"
//           value={f.lead_name}
//           onChange={(e) =>
//             setF((prev) => ({ ...prev, lead_name: e.target.value }))
//           }
//         />
//       </Field>

//       <Field label="Mobile *">
//         <Input
//           required
//           className="border-rose-200 focus-visible:ring-rose-400"
//           value={f.phone}
//           onChange={(e) => setF((prev) => ({ ...prev, phone: e.target.value }))}
//         />
//       </Field>

//       <Field label="Email">
//         <Input
//           type="email"
//           className="border-cyan-200 focus-visible:ring-cyan-400"
//           value={f.email}
//           onChange={(e) => setF((prev) => ({ ...prev, email: e.target.value }))}
//         />
//       </Field>

//       <Field label="PAN">
//         <Input
//           className="border-amber-200 focus-visible:ring-amber-400"
//           value={f.pan}
//           onChange={(e) =>
//             setF((prev) => ({ ...prev, pan: e.target.value.toUpperCase() }))
//           }
//         />
//       </Field>

//       <Field label="Aadhaar">
//         <Input
//           className="border-emerald-200 focus-visible:ring-emerald-400"
//           value={f.aadhaar}
//           onChange={(e) =>
//             setF((prev) => ({ ...prev, aadhaar: e.target.value }))
//           }
//         />
//       </Field>

//       <Field label="State">
//         <select
//           className="h-9 w-full rounded-md border border-indigo-200 bg-white px-3 text-sm"
//           value={f.state}
//           onChange={(e) =>
//             setF((prev) => ({ ...prev, state: e.target.value, city: "" }))
//           }
//         >
//           <option value="">Select state</option>
//           {INDIA_STATES.map((s) => (
//             <option key={s} value={s}>
//               {s}
//             </option>
//           ))}
//         </select>
//       </Field>

//       <Field label="City">
//         <select
//           className="h-9 w-full rounded-md border border-blue-200 bg-white px-3 text-sm disabled:opacity-60"
//           value={f.city}
//           onChange={(e) => setF((prev) => ({ ...prev, city: e.target.value }))}
//           disabled={!f.state}
//         >
//           <option value="">
//             {f.state ? "Select city" : "Select state first"}
//           </option>
//           {citiesForState(f.state).map((c) => (
//             <option key={c} value={c}>
//               {c}
//             </option>
//           ))}
//         </select>
//       </Field>

//       <Field label="Product Interest">
//         <select
//           value={f.product_type}
//           onChange={(e) =>
//             setF((prev) => ({
//               ...prev,
//               product_type: e.target.value,
//               loan_type: "",
//               loan_sub_type: "",
//             }))
//           }
//           className={`${inputClass} border-violet-200 focus:border-violet-400 focus:ring-violet-100`}
//         >
//           {PRODUCT_TYPES.map((p) => (
//             <option key={p} value={p}>
//               {p.replace(/_/g, " ")}
//             </option>
//           ))}
//         </select>
//       </Field>

//       <Field label="Lead Source">
//         <select
//           value={f.lead_source}
//           onChange={(e) =>
//             setF((prev) => ({ ...prev, lead_source: e.target.value }))
//           }
//           className={`${inputClass} border-pink-200 focus:border-pink-400 focus:ring-pink-100`}
//         >
//           {LEAD_SOURCES.map((s) => (
//             <option key={s} value={s}>
//               {s}
//             </option>
//           ))}
//         </select>
//       </Field>

//       <Field label="Loan Type">
//         <select
//           value={f.loan_type}
//           onChange={(e) =>
//             setF((prev) => ({
//               ...prev,
//               loan_type: e.target.value,
//               loan_sub_type: "",
//             }))
//           }
//           className={`${inputClass} border-blue-200 focus:border-blue-400 focus:ring-blue-100`}
//         >
//           <option value="">Choose loan type</option>
//           {LOAN_TYPES.map((t) => (
//             <option key={t} value={t}>
//               {t}
//             </option>
//           ))}
//         </select>
//       </Field>

//       <Field label="Sub Loan Type">
//         <select
//           value={f.loan_sub_type}
//           onChange={(e) =>
//             setF((prev) => ({ ...prev, loan_sub_type: e.target.value }))
//           }
//           disabled={!subOptions.length}
//           className={`${inputClass} border-blue-200 focus:border-blue-400 focus:ring-blue-100`}
//         >
//           <option value="">
//             {subOptions.length ? "Choose sub type" : "Pick loan type first"}
//           </option>

//           {subOptions.map((t) => (
//             <option key={t} value={t}>
//               {t}
//             </option>
//           ))}
//         </select>
//       </Field>

//       <Field label="Loan Amount (₹)">
//         <Input
//           type="text"
//           inputMode="numeric"
//           className="border-emerald-200 focus-visible:ring-emerald-400"
//           placeholder="500000"
//           value={f.loan_amount}
//           onChange={(e) =>
//             setF((prev) => ({
//               ...prev,
//               loan_amount: cleanAmountValue(e.target.value),
//             }))
//           }
//         />
//       </Field>

//       <Field label="CIBIL Score">
//         <Input
//           type="number"
//           min={300}
//           max={900}
//           className="border-amber-200 focus-visible:ring-amber-400"
//           placeholder="750"
//           value={f.cibil_score}
//           onChange={(e) =>
//             setF((prev) => ({ ...prev, cibil_score: e.target.value }))
//           }
//         />
//       </Field>

//       <Field label="Bank (if approved)">
//         <select
//           value={f.bank_name}
//           onChange={(e) =>
//             setF((prev) => ({ ...prev, bank_name: e.target.value }))
//           }
//           className={`${inputClass} border-rose-200 focus:border-rose-400 focus:ring-rose-100`}
//         >
//           <option value="">Choose bank (optional)</option>
//           {BANK_OPTIONS.map((b) => (
//             <option key={b} value={b}>
//               {b}
//             </option>
//           ))}
//         </select>
//       </Field>

//       <div className="col-span-1 mt-2 flex justify-end sm:col-span-2">
//         <Button
//           type="submit"
//           disabled={saving}
//           className="bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 text-white shadow-md hover:opacity-90"
//         >
//           {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
//           Create Lead
//         </Button>
//       </div>
//     </form>
//   );
// }

// function LeadNotes({ lead }: { lead: Lead }) {
//   const [notes, setNotes] = useState<
//     { id: string; notes: string | null; created_at: string }[]
//   >([]);
//   const [text, setText] = useState("");
//   const [saving, setSaving] = useState(false);
//   const [loading, setLoading] = useState(true);

//   const load = async () => {
//     const { data } = await supabase
//       .from("activities")
//       .select("id, notes, created_at")
//       .eq("lead_id", lead.id)
//       .eq("activity_type", "note")
//       .order("created_at", { ascending: false })
//       .limit(50);

//     setNotes(data ?? []);
//     setLoading(false);
//   };

//   useEffect(() => {
//     load();
//   }, [lead.id]);

//   const add = async () => {
//     if (!text.trim()) return;

//     setSaving(true);

//     const { error } = await supabase.from("activities").insert({
//       lead_id: lead.id,
//       activity_type: "note",
//       notes: text.trim(),
//     });

//     setSaving(false);

//     if (error) return toast.error(error.message);

//     setText("");
//     toast.success("Note added");
//     load();
//   };

//   return (
//     <div className="space-y-3">
//       <Textarea
//         rows={3}
//         placeholder="Add a follow-up note (call summary, next action, document pending…)"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         className="border-amber-200 focus-visible:ring-amber-400"
//       />

//       <div className="flex justify-end">
//         <Button
//           onClick={add}
//           disabled={saving || !text.trim()}
//           className="bg-gradient-to-r from-amber-500 to-orange-500 text-white"
//         >
//           {saving && <Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" />}
//           Save Note
//         </Button>
//       </div>

//       <div className="max-h-64 space-y-2 overflow-auto pr-1">
//         {loading ? (
//           <div className="py-3 text-center">
//             <Loader2 className="mx-auto h-4 w-4 animate-spin text-slate-400" />
//           </div>
//         ) : notes.length === 0 ? (
//           <p className="py-2 text-center text-xs text-slate-400">
//             No notes yet for this lead.
//           </p>
//         ) : (
//           notes.map((n) => (
//             <div
//               key={n.id}
//               className="rounded-lg border border-amber-100 bg-amber-50/60 p-3 text-sm"
//             >
//               <div className="whitespace-pre-wrap text-slate-800">
//                 {n.notes}
//               </div>

//               <div className="mt-1 text-[10px] uppercase tracking-wide text-slate-500">
//                 {new Date(n.created_at).toLocaleString("en-IN")}
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// function Field({
//   label,
//   children,
// }: {
//   label: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div>
//       <Label className="text-xs">{label}</Label>
//       <div className="mt-1">{children}</div>
//     </div>
//   );
// }

// const DOC_LIST = [
//   "PAN Card",
//   "Aadhaar Card",
//   "Income Proof / Salary Slips",
//   "Bank Statement (6 months)",
//   "Photograph",
//   "Address Proof",
//   "ITR / Form 16",
//   "Business Proof",
//   "Property Documents",
// ];

// function ApproveLeadDialog({
//   lead,
//   onClose,
//   onConfirm,
// }: {
//   lead: Lead | null;
//   onClose: () => void;
//   onConfirm: (
//     lead: Lead,
//     p: {
//       loan_type: string;
//       requested_amount: number | null;
//       sanction_amount: number | null;
//       tenure_months: number | null;
//       interest_rate: number | null;
//       bank_name: string;
//       notes: string;
//       docs: Record<string, boolean>;
//     },
//   ) => Promise<unknown>;
// }) {
//   const [saving, setSaving] = useState(false);
//   const [f, setF] = useState({
//     loan_type: "",
//     requested_amount: "",
//     sanction_amount: "",
//     tenure_months: "",
//     interest_rate: "",
//     bank_name: "",
//     notes: "",
//     docs: {} as Record<string, boolean>,
//   });

//   useEffect(() => {
//     if (lead) {
//       setF({
//         loan_type: lead.loan_type ?? "Home Loan",
//         requested_amount: cleanAmountValue(lead.loan_amount),
//         sanction_amount: "",
//         tenure_months: "240",
//         interest_rate: "8.5",
//         bank_name: lead.bank_name ?? "",
//         notes: "",
//         docs: {},
//       });
//     }
//   }, [lead]);

//   if (!lead) return null;

//   const submit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     setSaving(true);

//     await onConfirm(lead, {
//       loan_type: f.loan_type,
//       requested_amount: amountToNumber(f.requested_amount),
//       sanction_amount: amountToNumber(f.sanction_amount),
//       tenure_months: f.tenure_months ? Number(f.tenure_months) : null,
//       interest_rate: f.interest_rate ? Number(f.interest_rate) : null,
//       bank_name: f.bank_name,
//       notes: f.notes,
//       docs: f.docs,
//     });

//     setSaving(false);
//   };

//   const inputCls =
//     "h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100";

//   return (
//     <Dialog open={!!lead} onOpenChange={(v) => !v && onClose()}>
//       <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto bg-white">
//         <DialogHeader>
//           <DialogTitle className="text-emerald-700">
//             Approve Lead — {lead.lead_name ?? lead.full_name}
//           </DialogTitle>
//         </DialogHeader>

//         <form onSubmit={submit} className="space-y-4">
//           <div className="rounded-lg bg-emerald-50 p-3 text-xs text-emerald-800">
//             Customer + Loan Case auto-create honge approve karte hi.
//           </div>

//           <div className="grid grid-cols-2 gap-3">
//             <div>
//               <Label>Loan Type *</Label>

//               <select
//                 required
//                 className={`${inputCls} mt-1`}
//                 value={f.loan_type}
//                 onChange={(e) => setF({ ...f, loan_type: e.target.value })}
//               >
//                 {LOAN_TYPES.map((t) => (
//                   <option key={t}>{t}</option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <Label>Bank / Lender</Label>

//               <select
//                 className={`${inputCls} mt-1`}
//                 value={f.bank_name}
//                 onChange={(e) => setF({ ...f, bank_name: e.target.value })}
//               >
//                 <option value="">— Select —</option>
//                 {BANK_OPTIONS.map((b) => (
//                   <option key={b}>{b}</option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <Label>Requested Amount (₹)</Label>

//               <Input
//                 type="text"
//                 inputMode="numeric"
//                 className="mt-1"
//                 value={f.requested_amount}
//                 onChange={(e) =>
//                   setF({
//                     ...f,
//                     requested_amount: cleanAmountValue(e.target.value),
//                   })
//                 }
//                 placeholder="Requested amount"
//               />
//             </div>

//             <div>
//               <Label>Sanctioned Amount (₹)</Label>

//               <Input
//                 type="text"
//                 inputMode="numeric"
//                 className="mt-1"
//                 value={f.sanction_amount}
//                 onChange={(e) =>
//                   setF({
//                     ...f,
//                     sanction_amount: cleanAmountValue(e.target.value),
//                   })
//                 }
//                 placeholder="If sanctioned"
//               />
//             </div>

//             <div>
//               <Label>Tenure (months)</Label>

//               <Input
//                 type="number"
//                 className="mt-1"
//                 value={f.tenure_months}
//                 onChange={(e) =>
//                   setF({ ...f, tenure_months: e.target.value })
//                 }
//               />
//             </div>

//             <div>
//               <Label>Interest Rate (%)</Label>

//               <Input
//                 type="number"
//                 step="0.01"
//                 className="mt-1"
//                 value={f.interest_rate}
//                 onChange={(e) =>
//                   setF({ ...f, interest_rate: e.target.value })
//                 }
//               />
//             </div>
//           </div>

//           <div>
//             <Label>Notes</Label>

//             <Textarea
//               rows={2}
//               className="mt-1"
//               value={f.notes}
//               onChange={(e) => setF({ ...f, notes: e.target.value })}
//               placeholder="Any remarks for this approval…"
//             />
//           </div>

//           <div>
//             <Label className="mb-2 block">Documents Received Checklist</Label>

//             <div className="grid grid-cols-2 gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3">
//               {DOC_LIST.map((d) => (
//                 <label key={d} className="flex items-center gap-2 text-sm">
//                   <input
//                     type="checkbox"
//                     className="h-4 w-4 accent-emerald-600"
//                     checked={!!f.docs[d]}
//                     onChange={(e) =>
//                       setF({
//                         ...f,
//                         docs: { ...f.docs, [d]: e.target.checked },
//                       })
//                     }
//                   />
//                   {d}
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div className="flex justify-end gap-2">
//             <Button type="button" variant="outline" onClick={onClose}>
//               Cancel
//             </Button>

//             <Button
//               type="submit"
//               disabled={saving}
//               className="bg-emerald-600 text-white hover:bg-emerald-700"
//             >
//               {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
//               Approve & Create Customer
//             </Button>
//           </div>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }

// function RejectLeadDialog({
//   lead,
//   onClose,
//   onConfirm,
// }: {
//   lead: Lead | null;
//   onClose: () => void;
//   onConfirm: (lead: Lead, reason: string) => Promise<unknown>;
// }) {
//   const [reason, setReason] = useState("");
//   const [saving, setSaving] = useState(false);

//   useEffect(() => {
//     if (lead) setReason("");
//   }, [lead]);

//   if (!lead) return null;

//   const submit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!reason.trim()) return toast.error("Reason required");

//     setSaving(true);
//     await onConfirm(lead, reason.trim());
//     setSaving(false);
//   };

//   return (
//     <Dialog open={!!lead} onOpenChange={(v) => !v && onClose()}>
//       <DialogContent className="max-w-md bg-white">
//         <DialogHeader>
//           <DialogTitle className="text-rose-700">
//             Reject Lead — {lead.lead_name ?? lead.full_name}
//           </DialogTitle>
//         </DialogHeader>

//         <form onSubmit={submit} className="space-y-4">
//           <div>
//             <Label>Rejected Reason *</Label>

//             <Textarea
//               required
//               rows={4}
//               className="mt-1"
//               value={reason}
//               onChange={(e) => setReason(e.target.value)}
//               placeholder="E.g. Low CIBIL score, insufficient income, document mismatch…"
//             />
//           </div>

//           <div className="flex justify-end gap-2">
//             <Button type="button" variant="outline" onClick={onClose}>
//               Cancel
//             </Button>

//             <Button
//               type="submit"
//               disabled={saving}
//               className="bg-rose-600 text-white hover:bg-rose-700"
//             >
//               {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
//               Reject Lead
//             </Button>
//           </div>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }
// import { useEffect, useState } from "react";
// import { createFileRoute } from "@tanstack/react-router";
// import { toast } from "sonner";
// import {
//   Search,
//   Plus,
//   Loader2,
//   CheckCircle2,
//   XCircle,
//   MessageCircle,
//   StickyNote,
//   Sparkles,
// } from "lucide-react";

// import { useAuth } from "@/hooks/useAuth";
// import { supabase } from "@/integrations/supabase/client";
// import { cn } from "@/lib/utils";
// import { INDIA_STATES, citiesForState } from "@/data/india-cities";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Card } from "@/components/ui/card";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { CustomerProfileDialog } from "@/components/crm/CustomerProfileDialog";

// export const Route = createFileRoute("/crm/leads")({
//   component: LeadsPage,
// });

// const LEAD_STAGES = [
//   "New",
//   "Qualified",
//   "Approved",
//   "Rejected",
//   "Disbursed",
//   "Closed",
// ] as const;

// type Stage = (typeof LEAD_STAGES)[number];

// const STAGE_STYLES: Record<
//   Stage,
//   { trigger: string; dot: string; option: string }
// > = {
//   New: {
//     trigger: "border-sky-300 bg-sky-50 text-sky-700",
//     dot: "bg-sky-500",
//     option: "text-sky-700",
//   },
//   Qualified: {
//     trigger: "border-violet-300 bg-violet-50 text-violet-700",
//     dot: "bg-violet-500",
//     option: "text-violet-700",
//   },
//   Approved: {
//     trigger: "border-emerald-300 bg-emerald-50 text-emerald-700",
//     dot: "bg-emerald-500",
//     option: "text-emerald-700",
//   },
//   Rejected: {
//     trigger: "border-rose-300 bg-rose-50 text-rose-700",
//     dot: "bg-rose-500",
//     option: "text-rose-700",
//   },
//   Disbursed: {
//     trigger: "border-amber-300 bg-amber-50 text-amber-700",
//     dot: "bg-amber-500",
//     option: "text-amber-700",
//   },
//   Closed: {
//     trigger: "border-slate-300 bg-slate-100 text-slate-700",
//     dot: "bg-slate-500",
//     option: "text-slate-700",
//   },
// };

// const BANK_OPTIONS = [
//   "HDFC Bank",
//   "ICICI Bank",
//   "State Bank of India",
//   "Axis Bank",
//   "Kotak Mahindra Bank",
//   "IDFC First Bank",
//   "Yes Bank",
//   "IndusInd Bank",
//   "Punjab National Bank",
//   "Bank of Baroda",
//   "Canara Bank",
//   "Union Bank of India",
//   "Federal Bank",
//   "RBL Bank",
//   "Bajaj Finserv",
//   "Tata Capital",
//   "Aditya Birla Finance",
//   "L&T Finance",
//   "Mahindra Finance",
//   "IDBI Bank",
//   "Piramal Finance",
//   "DCB Bank",
//   "Karnataka Bank",
//   "South Indian Bank",
// ];

// type Lead = {
//   id: string;
//   lead_name: string | null;
//   full_name: string | null;
//   phone: string;
//   email: string | null;
//   pan: string | null;
//   city: string | null;
//   state: string | null;
//   product_type: string;
//   lead_source: string | null;
//   status: string;
//   assigned_to: string | null;
//   created_at: string;
//   cibil_score: number | null;
//   loan_type: string | null;
//   loan_sub_type: string | null;
//   loan_amount: number | null;
//   bank_name: string | null;
// };

// type Staff = {
//   id: string;
//   full_name: string | null;
//   email: string | null;
//   role: string;
// };

// function cleanAmountValue(value: unknown) {
//   if (value === null || value === undefined) return "";
//   const raw = String(value).trim();
//   if (!raw || raw.toLowerCase().includes("e")) return "";
//   const cleaned = raw.replace(/[₹,\s]/g, "").replace(/[^\d.]/g, "");
//   const num = Number(cleaned);
//   if (!Number.isFinite(num) || num <= 0) return "";
//   return Math.round(num).toString();
// }

// function formatAmount(value: unknown) {
//   const cleaned = cleanAmountValue(value);
//   if (!cleaned) return "—";
//   return `₹${Number(cleaned).toLocaleString("en-IN")}`;
// }

// function normaliseStage(s: string): Stage {
//   if ((LEAD_STAGES as readonly string[]).includes(s)) return s as Stage;
//   if (s === "Contacted") return "New";
//   if (s === "Docs Pending" || s === "Login Ready") return "Qualified";
//   if (s === "Sanction Pending") return "Approved";
//   if (s === "Converted") return "Disbursed";
//   if (s === "Rejected") return "Rejected";
//   return "New";
// }

// function cibilBadge(score: number | null) {
//   if (score == null) return "bg-slate-100 text-slate-500 border-slate-200";
//   if (score >= 750) return "bg-emerald-50 text-emerald-700 border-emerald-200";
//   if (score >= 650) return "bg-amber-50 text-amber-700 border-amber-200";
//   return "bg-rose-50 text-rose-700 border-rose-200";
// }

// export default function LeadsPage() {
//   const { user, isAdmin } = useAuth();
//   const [leads, setLeads] = useState<Lead[]>([]);
//   const [staff, setStaff] = useState<Staff[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [filter, setFilter] = useState("");
//   const [stageFilter, setStageFilter] = useState<string>("all");
//   const [assigneeFilter, setAssigneeFilter] = useState<string>("all");
//   const [bankFilter, setBankFilter] = useState<string>("all");
//   const [sortBy, setSortBy] = useState<string>("recent");
//   const [open, setOpen] = useState(false);
//   const [noteLead, setNoteLead] = useState<Lead | null>(null);
//   const [approveLead, setApproveLead] = useState<Lead | null>(null);
//   const [rejectLead, setRejectLead] = useState<Lead | null>(null);
//   const [profileLead, setProfileLead] = useState<string | null>(null);

//   const rowSelectClass =
//     "h-10 w-[190px] rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100";

//   const load = async () => {
//     setLoading(true);

//     const [{ data, error }, roles] = await Promise.all([
//       supabase
//         .from("leads")
//         .select(
//           "id, lead_name, full_name, phone, email, pan, city, state, product_type, lead_source, status, assigned_to, created_at, cibil_score, loan_type, loan_sub_type, loan_amount, bank_name"
//         )
//         .order("created_at", { ascending: false })
//         .limit(500),
//       supabase.from("user_roles").select("user_id, role"),
//     ]);

//     if (error) toast.error(error.message);

//     setLeads((data ?? []) as Lead[]);

//     const ids = (roles.data ?? []).map((r: { user_id: string }) => r.user_id);

//     if (ids.length) {
//       const { data: profs } = await supabase
//         .from("profiles")
//         .select("id, full_name, email")
//         .in("id", ids);

//       const byId = new Map((profs ?? []).map((p) => [p.id, p]));

//       setStaff(
//         (roles.data ?? []).map((r: { user_id: string; role: string }) => ({
//           id: r.user_id,
//           full_name: byId.get(r.user_id)?.full_name ?? null,
//           email: byId.get(r.user_id)?.email ?? null,
//           role: r.role,
//         }))
//       );
//     } else {
//       setStaff([]);
//     }

//     setLoading(false);
//   };

//   useEffect(() => {
//     load();

//     const channel = supabase
//       .channel("crm-leads-sync")
//       .on(
//         "postgres_changes",
//         { event: "*", schema: "public", table: "leads" },
//         () => load()
//       )
//       .on(
//         "postgres_changes",
//         { event: "*", schema: "public", table: "customers" },
//         () => load()
//       )
//       .subscribe();

//     return () => {
//       channel.unsubscribe();
//     };
//   }, []);

//   const filtered = leads
//     .filter((l) => {
//       const term = filter.toLowerCase();
//       const stage = normaliseStage(l.status);

//       const matchesText =
//         !term ||
//         (l.lead_name ?? l.full_name ?? "").toLowerCase().includes(term) ||
//         l.phone.includes(term);

//       const matchesStage = stageFilter === "all" || stage === stageFilter;

//       const matchesAssignee =
//         assigneeFilter === "all" ||
//         (assigneeFilter === "unassigned"
//           ? !l.assigned_to
//           : l.assigned_to === assigneeFilter);

//       const matchesBank =
//         bankFilter === "all" ||
//         (bankFilter === "none" ? !l.bank_name : l.bank_name === bankFilter);

//       const partnerVisible =
//         !isAdmin ||
//         (l.lead_source ?? "").toLowerCase() !== "partner" ||
//         (!!user && l.assigned_to === user.id);

//       return (
//         matchesText &&
//         matchesStage &&
//         matchesAssignee &&
//         matchesBank &&
//         partnerVisible
//       );
//     })
//     .sort((a, b) => {
//       const nameA = (a.lead_name ?? a.full_name ?? "").toLowerCase();
//       const nameB = (b.lead_name ?? b.full_name ?? "").toLowerCase();

//       if (sortBy === "name_asc") return nameA.localeCompare(nameB);
//       if (sortBy === "name_desc") return nameB.localeCompare(nameA);
//       if (sortBy === "amount_desc")
//         return (Number(b.loan_amount) || 0) - (Number(a.loan_amount) || 0);
//       if (sortBy === "amount_asc")
//         return (Number(a.loan_amount) || 0) - (Number(b.loan_amount) || 0);
//       if (sortBy === "cibil_desc")
//         return (b.cibil_score ?? 0) - (a.cibil_score ?? 0);
//       if (sortBy === "oldest")
//         return (
//           new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
//         );

//       return (
//         new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
//       );
//     });

//   const stageCounts = LEAD_STAGES.reduce<Record<Stage, number>>(
//     (acc, s) => {
//       acc[s] = leads.filter((l) => normaliseStage(l.status) === s).length;
//       return acc;
//     },
//     { New: 0, Qualified: 0, Approved: 0, Rejected: 0, Disbursed: 0, Closed: 0 }
//   );

//   const staffLabel = (id: string | null) => {
//     if (!id) return "Unassigned";
//     const s = staff.find((x) => x.id === id);
//     return s?.full_name || s?.email || "Staff";
//   };

//   const updateBank = async (lead: Lead, value: string) => {
//     const bankName = value === "none" ? null : value;
//     const { error } = await supabase
//       .from("leads")
//       .update({ bank_name: bankName })
//       .eq("id", lead.id);

//     if (error) {
//       toast.error(error.message);
//       return;
//     }

//     setLeads((prev) =>
//       prev.map((l) => (l.id === lead.id ? { ...l, bank_name: bankName } : l))
//     );
//     toast.success(bankName ? `Bank → ${bankName}` : "Bank cleared");
//   };

//   const updateAssignee = async (lead: Lead, value: string) => {
//     const newId = value === "unassigned" ? null : value;
//     const { error } = await supabase
//       .from("leads")
//       .update({ assigned_to: newId })
//       .eq("id", lead.id);

//     if (error) return toast.error(error.message);

//     setLeads((prev) =>
//       prev.map((l) => (l.id === lead.id ? { ...l, assigned_to: newId } : l))
//     );
//     toast.success(`Assigned → ${staffLabel(newId)}`);
//   };

//   const confirmApprove = async (
//     lead: Lead,
//     payload: {
//       loan_type: string;
//       requested_amount: number | null;
//       sanction_amount: number | null;
//       tenure_months: number | null;
//       interest_rate: number | null;
//       bank_name: string;
//       notes: string;
//       docs: Record<string, boolean>;
//     }
//   ) => {
//     const finalAmount = payload.sanction_amount ?? payload.requested_amount;

//     const { error: leadErr } = await supabase
//       .from("leads")
//       .update({
//         status: "Approved",
//         loan_amount: payload.requested_amount,
//         bank_name: payload.bank_name || null,
//         loan_type: payload.loan_type,
//       })
//       .eq("id", lead.id);

//     if (leadErr) return toast.error(leadErr.message);

//     let customerId: string | null = null;
//     const { data: existing } = await supabase
//       .from("customers")
//       .select("id")
//       .eq("lead_id", lead.id)
//       .maybeSingle();

//     if (existing) {
//       customerId = existing.id;
//     } else {
//       const { data: ins, error: cErr } = await supabase
//         .from("customers")
//         .insert({
//           customer_name: lead.lead_name ?? lead.full_name ?? "Unnamed",
//           mobile: lead.phone,
//           email: lead.email,
//           pan: lead.pan,
//           address: [lead.city, lead.state].filter(Boolean).join(", ") || null,
//           lead_id: lead.id,
//           loan_type: payload.loan_type,
//           loan_amount: finalAmount,
//           cibil_score: lead.cibil_score,
//           bank_name: payload.bank_name || null,
//           stage: "Approved",
//           note: payload.notes || null,
//         })
//         .select("id")
//         .single();

//       if (cErr) return toast.error(cErr.message);
//       customerId = ins.id;
//     }

//     if (customerId) {
//       await supabase
//         .from("leads")
//         .update({ converted_customer_id: customerId })
//         .eq("id", lead.id);
//     }

//     const { error: lcErr } = await supabase.from("loan_cases").insert({
//       customer_id: customerId,
//       lead_id: lead.id,
//       loan_type: payload.loan_type,
//       loan_amount: finalAmount,
//       requested_amount: payload.requested_amount,
//       sanction_amount: payload.sanction_amount,
//       tenure_months: payload.tenure_months,
//       interest_rate: payload.interest_rate,
//       lender_name: payload.bank_name || null,
//       stage: payload.sanction_amount ? "Sanction" : "Under Process",
//       notes: payload.notes || null,
//       documents_checklist: payload.docs,
//     });

//     if (lcErr) return toast.error(lcErr.message);

//     setLeads((prev) =>
//       prev.map((l) =>
//         l.id === lead.id
//           ? {
//               ...l,
//               status: "Approved",
//               loan_amount: payload.requested_amount,
//               bank_name: payload.bank_name || null,
//               loan_type: payload.loan_type,
//             }
//           : l
//       )
//     );

//     toast.success("Approved → Customer & Loan Case created");
//     setApproveLead(null);
//   };

//   const confirmReject = async (lead: Lead, reason: string) => {
//     const { error } = await supabase
//       .from("leads")
//       .update({ status: "Rejected", rejection_reason: reason })
//       .eq("id", lead.id);

//     if (error) return toast.error(error.message);

//     setLeads((prev) =>
//       prev.map((l) => (l.id === lead.id ? { ...l, status: "Rejected" } : l))
//     );

//     toast.success("Lead rejected");
//     setRejectLead(null);
//   };

//   return (
//     <div className="space-y-4">
//       {/* Header Banner */}
//       <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 px-4 py-3 text-white shadow-md shadow-sky-500/20">
//         <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/15 blur-2xl" />
//         <div className="relative flex flex-wrap items-center justify-between gap-3">
//           <div className="flex items-center gap-3">
//             <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20">
//               <Sparkles className="h-4 w-4" />
//             </div>
//             <div>
//               <div className="text-sm font-semibold leading-tight">
//                 Leads Pipeline
//               </div>
//               <div className="text-[11px] text-white/80">
//                 {leads.length} total · {filtered.length} shown · WhatsApp ready
//               </div>
//             </div>
//           </div>

//           <Dialog open={open} onOpenChange={setOpen}>
//             <DialogTrigger asChild>
//               <Button className="bg-white text-sky-700 shadow-md hover:bg-sky-50">
//                 <Plus className="mr-2 h-4 w-4" /> New Lead
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto bg-white">
//               <DialogHeader>
//                 <DialogTitle>Add New Lead</DialogTitle>
//               </DialogHeader>
//               <NewLeadForm
//                 onSaved={() => {
//                   setOpen(false);
//                   load();
//                 }}
//               />
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>

//       {/* Stage Tracker Cards */}
//       <div className="grid grid-cols-2 gap-2 sm:grid-cols-6">
//         {LEAD_STAGES.map((s) => {
//           const st = STAGE_STYLES[s];
//           const active = stageFilter === s;
//           return (
//             <button
//               key={s}
//               onClick={() => setStageFilter(active ? "all" : s)}
//               className={cn(
//                 "flex items-center justify-between rounded-xl border bg-white px-3 py-2 text-left text-xs shadow-sm transition-all hover:-translate-y-0.5 hover:shadow",
//                 active
//                   ? "ring-2 ring-offset-1 " + st.trigger
//                   : "border-slate-200"
//               )}
//             >
//               <div className="flex items-center gap-2">
//                 <span className={cn("h-2.5 w-2.5 rounded-full", st.dot)} />
//                 <span className="font-medium text-slate-700">{s}</span>
//               </div>
//               <span
//                 className={cn(
//                   "rounded-full px-1.5 py-0.5 text-[10px] font-semibold",
//                   st.trigger
//                 )}
//               >
//                 {stageCounts[s]}
//               </span>
//             </button>
//           );
//         })}
//       </div>

//       {/* Filter Controls */}
//       <Card className="p-4">
//         <div className="flex flex-wrap items-center gap-3">
//           <div className="relative min-w-[220px] flex-1">
//             <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
//             <Input
//               placeholder="Search name, phone…"
//               value={filter}
//               onChange={(e) => setFilter(e.target.value)}
//               className="pl-9"
//             />
//           </div>

//           <Select value={stageFilter} onValueChange={setStageFilter}>
//             <SelectTrigger className="w-[170px] bg-white">
//               <SelectValue placeholder="Stage" />
//             </SelectTrigger>
//             <SelectContent className="bg-white">
//               <SelectItem value="all">All stages</SelectItem>
//               {LEAD_STAGES.map((s) => (
//                 <SelectItem key={s} value={s}>
//                   {s}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>

//           <Select value={assigneeFilter} onValueChange={setAssigneeFilter}>
//             <SelectTrigger className="w-[200px] bg-white">
//               <SelectValue placeholder="Assignee" />
//             </SelectTrigger>
//             <SelectContent className="bg-white">
//               <SelectItem value="all">All assignees</SelectItem>
//               <SelectItem value="unassigned">Unassigned</SelectItem>
//               {staff.map((s) => (
//                 <SelectItem key={s.id} value={s.id}>
//                   {s.full_name || s.email || "Staff"} · {s.role}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>

//           <Select value={bankFilter} onValueChange={setBankFilter}>
//             <SelectTrigger className="w-[190px] bg-white">
//               <SelectValue placeholder="Bank" />
//             </SelectTrigger>
//             <SelectContent className="max-h-72 bg-white">
//               <SelectItem value="all">All banks</SelectItem>
//               <SelectItem value="none">— Not set —</SelectItem>
//               {[...BANK_OPTIONS].sort().map((b) => (
//                 <SelectItem key={b} value={b}>
//                   {b}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>

//           <Select value={sortBy} onValueChange={setSortBy}>
//             <SelectTrigger className="w-[180px] bg-white">
//               <SelectValue placeholder="Sort" />
//             </SelectTrigger>
//             <SelectContent className="bg-white">
//               <SelectItem value="recent">Newest first</SelectItem>
//               <SelectItem value="oldest">Oldest first</SelectItem>
//               <SelectItem value="name_asc">Name A → Z</SelectItem>
//               <SelectItem value="name_desc">Name Z → A</SelectItem>
//               <SelectItem value="amount_desc">
//                 Loan amount high → low
//               </SelectItem>
//               <SelectItem value="amount_asc">
//                 Loan amount low → high
//               </SelectItem>
//               <SelectItem value="cibil_desc">CIBIL high → low</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       </Card>

//       {/* Main Table */}
//       <Card className="overflow-hidden">
//         {loading ? (
//           <div className="flex h-48 items-center justify-center">
//             <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
//           </div>
//         ) : filtered.length === 0 ? (
//           <div className="p-10 text-center text-sm text-slate-500">
//             No leads match your filters.
//           </div>
//         ) : (
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Name</TableHead>
//                 <TableHead>Mobile</TableHead>
//                 <TableHead>Loan Type</TableHead>
//                 <TableHead>Loan Amount</TableHead>
//                 <TableHead>CIBIL</TableHead>
//                 <TableHead>Stage</TableHead>
//                 <TableHead>Bank</TableHead>
//                 <TableHead>Assigned</TableHead>
//                 <TableHead className="text-right">Action</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {filtered.map((l) => {
//                 const stage = normaliseStage(l.status);
//                 const st = STAGE_STYLES[stage];
//                 const canDecide = ![
//                   "Approved",
//                   "Rejected",
//                   "Disbursed",
//                   "Closed",
//                 ].includes(stage);

//                 return (
//                   <TableRow key={l.id}>
//                     <TableCell className="font-medium">
//                       <button
//                         onClick={() => setProfileLead(l.id)}
//                         className="text-sky-700 hover:underline"
//                       >
//                         {l.lead_name ?? l.full_name ?? "—"}
//                       </button>
//                       {l.email && (
//                         <div className="text-xs text-slate-500">{l.email}</div>
//                       )}
//                     </TableCell>

//                     <TableCell className="text-sm">{l.phone}</TableCell>

//                     <TableCell>
//                       <div className="text-sm font-medium text-slate-800">
//                         {l.loan_type ??
//                           (l.product_type ?? "").replace(/_/g, " ")}
//                       </div>
//                       {l.loan_sub_type && (
//                         <div className="text-xs text-slate-500">
//                           {l.loan_sub_type}
//                         </div>
//                       )}
//                     </TableCell>

//                     <TableCell className="text-sm">
//                       {formatAmount(l.loan_amount)}
//                     </TableCell>

//                     <TableCell>
//                       <span
//                         className={cn(
//                           "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold",
//                           cibilBadge(l.cibil_score)
//                         )}
//                       >
//                         {l.cibil_score ?? "N/A"}
//                       </span>
//                     </TableCell>

//                     <TableCell>
//                       <span
//                         className={cn(
//                           "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold",
//                           st.trigger
//                         )}
//                       >
//                         <span
//                           className={cn("h-1.5 w-1.5 rounded-full", st.dot)}
//                         />
//                         {stage}
//                       </span>
//                     </TableCell>

//                     <TableCell>
//                       <select
//                         value={l.bank_name ?? "none"}
//                         onChange={(e) => updateBank(l, e.target.value)}
//                         className={rowSelectClass}
//                       >
//                         <option value="none">— None —</option>
//                         {BANK_OPTIONS.map((b) => (
//                           <option key={b} value={b}>
//                             {b}
//                           </option>
//                         ))}
//                       </select>
//                     </TableCell>

//                     <TableCell>
//                       <select
//                         value={l.assigned_to ?? "unassigned"}
//                         onChange={(e) => updateAssignee(l, e.target.value)}
//                         className={rowSelectClass}
//                       >
//                         <option value="unassigned">Unassigned</option>
//                         {staff.map((s) => (
//                           <option key={s.id} value={s.id}>
//                             {s.full_name || s.email || "Staff"}
//                           </option>
//                         ))}
//                       </select>
//                     </TableCell>

//                     <TableCell className="text-right">
//                       <div className="inline-flex items-center gap-1.5">
//                         {canDecide && (
//                           <>
//                             <Button
//                               size="sm"
//                               className="h-8 bg-emerald-600 text-white hover:bg-emerald-700"
//                               onClick={() => setApproveLead(l)}
//                               title="Approve lead → push to Customers"
//                             >
//                               <CheckCircle2 className="mr-1 h-3.5 w-3.5" />{" "}
//                               Approve
//                             </Button>

//                             <Button
//                               size="sm"
//                               variant="outline"
//                               className="h-8 border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100"
//                               onClick={() => setRejectLead(l)}
//                               title="Reject lead"
//                             >
//                               <XCircle className="mr-1 h-3.5 w-3.5" /> Reject
//                             </Button>
//                           </>
//                         )}

//                         <Button
//                           size="sm"
//                           variant="outline"
//                           className="h-8 border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100"
//                           onClick={() => setNoteLead(l)}
//                           title="Notes"
//                         >
//                           <StickyNote className="h-3.5 w-3.5" />
//                         </Button>

//                         <a
//                           href={`https://wa.me/${(l.phone || "").replace(
//                             /\D/g,
//                             ""
//                           )}?text=${encodeURIComponent(
//                             `Hi ${
//                               l.lead_name ?? l.full_name ?? "there"
//                             }, this is from Aarthvaahini. Following up on your ${(
//                               l.loan_type ??
//                               l.product_type ??
//                               ""
//                             ).replace(/_/g, " ")} enquiry.`
//                           )}`}
//                           target="_blank"
//                           rel="noreferrer"
//                           title="WhatsApp"
//                         >
//                           <Button
//                             size="sm"
//                             variant="outline"
//                             className="h-8 border-green-200 bg-green-50 text-green-700 hover:bg-green-100"
//                           >
//                             <MessageCircle className="h-3.5 w-3.5" />
//                           </Button>
//                         </a>
//                       </div>
//                     </TableCell>
//                   </TableRow>
//                 );
//               })}
//             </TableBody>
//           </Table>
//         )}
//       </Card>

//       {/* Profile Modal */}
//       <CustomerProfileDialog
//         open={!!profileLead}
//         onOpenChange={(v) => !v && setProfileLead(null)}
//         leadId={profileLead}
//       />

//       {/* Notes Modal */}
//       <Dialog open={!!noteLead} onOpenChange={(v) => !v && setNoteLead(null)}>
//         <DialogContent className="max-w-lg bg-white">
//           <DialogHeader>
//             <DialogTitle>
//               Notes — {noteLead?.lead_name ?? noteLead?.full_name}
//             </DialogTitle>
//           </DialogHeader>
//           {noteLead && <LeadNotes lead={noteLead} />}
//         </DialogContent>
//       </Dialog>

//       {/* Approve Modal */}
//       <ApproveLeadDialog
//         lead={approveLead}
//         onClose={() => setApproveLead(null)}
//         onConfirm={confirmApprove}
//       />

//       {/* Reject Modal */}
//       <RejectLeadDialog
//         lead={rejectLead}
//         onClose={() => setRejectLead(null)}
//         onConfirm={confirmReject}
//       />
//     </div>
//   );
// }

// /* ============================================================================
//  * HELPER DIALOG COMPONENTS
//  * ============================================================================ */

// function NewLeadForm({ onSaved }: { onSaved: () => void }) {
//   const [loading, setLoading] = useState(false);
//   const [state, setState] = useState("");
//   const [city, setCity] = useState("");
//   const [formData, setFormData] = useState({
//     full_name: "",
//     phone: "",
//     email: "",
//     pan: "",
//     loan_type: "Personal Loan",
//     loan_amount: "",
//     cibil_score: "",
//     bank_name: "",
//   });

//   const availableCities = state ? citiesForState(state) : [];

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formData.full_name || !formData.phone) {
//       toast.error("Name and Phone number are required");
//       return;
//     }

//     setLoading(true);

//     const { error } = await supabase.from("leads").insert({
//       lead_name: formData.full_name,
//       full_name: formData.full_name,
//       phone: formData.phone,
//       email: formData.email || null,
//       pan: formData.pan || null,
//       state: state || null,
//       city: city || null,
//       loan_type: formData.loan_type,
//       product_type: formData.loan_type.toLowerCase().replace(/\s+/g, "_"),
//       loan_amount: formData.loan_amount ? Number(formData.loan_amount) : null,
//       cibil_score: formData.cibil_score ? Number(formData.cibil_score) : null,
//       bank_name: formData.bank_name || null,
//       status: "New",
//       lead_source: "Manual",
//     });

//     setLoading(false);

//     if (error) {
//       toast.error(error.message);
//       return;
//     }

//     toast.success("Lead created successfully");
//     onSaved();
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 pt-2">
//       <div className="grid grid-cols-2 gap-3">
//         <div className="space-y-1.5">
//           <Label>Full Name *</Label>
//           <Input
//             required
//             placeholder="John Doe"
//             value={formData.full_name}
//             onChange={(e) =>
//               setFormData({ ...formData, full_name: e.target.value })
//             }
//           />
//         </div>
//         <div className="space-y-1.5">
//           <Label>Mobile Number *</Label>
//           <Input
//             required
//             placeholder="9876543210"
//             value={formData.phone}
//             onChange={(e) =>
//               setFormData({ ...formData, phone: e.target.value })
//             }
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-2 gap-3">
//         <div className="space-y-1.5">
//           <Label>Email</Label>
//           <Input
//             type="email"
//             placeholder="john@example.com"
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//           />
//         </div>
//         <div className="space-y-1.5">
//           <Label>PAN Card</Label>
//           <Input
//             placeholder="ABCDE1234F"
//             value={formData.pan}
//             onChange={(e) =>
//               setFormData({ ...formData, pan: e.target.value.toUpperCase() })
//             }
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-2 gap-3">
//         <div className="space-y-1.5">
//           <Label>State</Label>
//           <Select
//             value={state}
//             onValueChange={(val) => {
//               setState(val);
//               setCity("");
//             }}
//           >
//             <SelectTrigger className="bg-white">
//               <SelectValue placeholder="Select State" />
//             </SelectTrigger>
//             <SelectContent className="max-h-60 bg-white">
//               {INDIA_STATES.map((s) => (
//                 <SelectItem key={s} value={s}>
//                   {s}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>

//         <div className="space-y-1.5">
//           <Label>City</Label>
//           <Select value={city} onValueChange={setCity} disabled={!state}>
//             <SelectTrigger className="bg-white">
//               <SelectValue placeholder="Select City" />
//             </SelectTrigger>
//             <SelectContent className="max-h-60 bg-white">
//               {availableCities.map((c) => (
//                 <SelectItem key={c} value={c}>
//                   {c}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>
//       </div>

//       <div className="grid grid-cols-3 gap-3">
//         <div className="space-y-1.5">
//           <Label>Loan Type</Label>
//           <Select
//             value={formData.loan_type}
//             onValueChange={(val) =>
//               setFormData({ ...formData, loan_type: val })
//             }
//           >
//             <SelectTrigger className="bg-white">
//               <SelectValue />
//             </SelectTrigger>
//             <SelectContent className="bg-white">
//               <SelectItem value="Personal Loan">Personal Loan</SelectItem>
//               <SelectItem value="Business Loan">Business Loan</SelectItem>
//               <SelectItem value="Home Loan">Home Loan</SelectItem>
//               <SelectItem value="LAP">Loan Against Property</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         <div className="space-y-1.5">
//           <Label>Amount (₹)</Label>
//           <Input
//             type="number"
//             placeholder="500000"
//             value={formData.loan_amount}
//             onChange={(e) =>
//               setFormData({ ...formData, loan_amount: e.target.value })
//             }
//           />
//         </div>

//         <div className="space-y-1.5">
//           <Label>CIBIL Score</Label>
//           <Input
//             type="number"
//             placeholder="750"
//             value={formData.cibil_score}
//             onChange={(e) =>
//               setFormData({ ...formData, cibil_score: e.target.value })
//             }
//           />
//         </div>
//       </div>

//       <div className="space-y-1.5">
//         <Label>Preferred Bank</Label>
//         <Select
//           value={formData.bank_name}
//           onValueChange={(val) => setFormData({ ...formData, bank_name: val })}
//         >
//           <SelectTrigger className="bg-white">
//             <SelectValue placeholder="Select Bank" />
//           </SelectTrigger>
//           <SelectContent className="max-h-60 bg-white">
//             {BANK_OPTIONS.map((b) => (
//               <SelectItem key={b} value={b}>
//                 {b}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </div>

//       <Button type="submit" disabled={loading} className="w-full bg-sky-600 hover:bg-sky-700">
//         {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Save Lead
//       </Button>
//     </form>
//   );
// }

// function LeadNotes({ lead }: { lead: Lead }) {
//   const [note, setNote] = useState("");
//   const [saving, setSaving] = useState(false);

//   const handleSave = async () => {
//     if (!note.trim()) return;
//     setSaving(true);
//     const { error } = await supabase.from("lead_notes").insert({
//       lead_id: lead.id,
//       note: note.trim(),
//     });
//     setSaving(false);

//     if (error) {
//       toast.error(error.message);
//       return;
//     }

//     toast.success("Note saved");
//     setNote("");
//   };

//   return (
//     <div className="space-y-3 pt-2">
//       <Textarea
//         rows={4}
//         placeholder="Add a note or update call status..."
//         value={note}
//         onChange={(e) => setNote(e.target.value)}
//       />
//       <Button disabled={saving || !note.trim()} onClick={handleSave} className="w-full">
//         {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Save Note
//       </Button>
//     </div>
//   );
// }

// function ApproveLeadDialog({
//   lead,
//   onClose,
//   onConfirm,
// }: {
//   lead: Lead | null;
//   onClose: () => void;
//   onConfirm: (lead: Lead, payload: any) => void;
// }) {
//   const [submitting, setSubmitting] = useState(false);
//   const [loanType, setLoanType] = useState(lead?.loan_type || "Personal Loan");
//   const [amount, setAmount] = useState(lead?.loan_amount?.toString() || "");
//   const [bank, setBank] = useState(lead?.bank_name || "");
//   const [notes, setNotes] = useState("");

//   useEffect(() => {
//     if (lead) {
//       setLoanType(lead.loan_type || "Personal Loan");
//       setAmount(lead.loan_amount?.toString() || "");
//       setBank(lead.bank_name || "");
//     }
//   }, [lead]);

//   if (!lead) return null;

//   const handleConfirm = async () => {
//     setSubmitting(true);
//     await onConfirm(lead, {
//       loan_type: loanType,
//       requested_amount: amount ? Number(amount) : null,
//       sanction_amount: amount ? Number(amount) : null,
//       tenure_months: 12,
//       interest_rate: 10.5,
//       bank_name: bank,
//       notes: notes || "Approved via Leads Pipeline",
//       docs: {},
//     });
//     setSubmitting(false);
//   };

//   return (
//     <Dialog open={!!lead} onOpenChange={onClose}>
//       <DialogContent className="max-w-md bg-white">
//         <DialogHeader>
//           <DialogTitle>Approve Lead: {lead.lead_name ?? lead.full_name}</DialogTitle>
//         </DialogHeader>

//         <div className="space-y-3 py-2 text-sm">
//           <div className="space-y-1">
//             <Label>Loan Type</Label>
//             <Input value={loanType} onChange={(e) => setLoanType(e.target.value)} />
//           </div>

//           <div className="space-y-1">
//             <Label>Sanctioned/Approved Amount (₹)</Label>
//             <Input
//               type="number"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//             />
//           </div>

//           <div className="space-y-1">
//             <Label>Lender Bank</Label>
//             <Select value={bank} onValueChange={setBank}>
//               <SelectTrigger className="bg-white">
//                 <SelectValue placeholder="Select Lender" />
//               </SelectTrigger>
//               <SelectContent className="max-h-60 bg-white">
//                 {BANK_OPTIONS.map((b) => (
//                   <SelectItem key={b} value={b}>
//                     {b}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>

//           <div className="space-y-1">
//             <Label>Remarks/Notes</Label>
//             <Textarea
//               rows={2}
//               value={notes}
//               onChange={(e) => setNotes(e.target.value)}
//               placeholder="Approval comments..."
//             />
//           </div>

//           <Button
//             disabled={submitting}
//             onClick={handleConfirm}
//             className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
//           >
//             {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
//             Confirm Approval
//           </Button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }

// function RejectLeadDialog({
//   lead,
//   onClose,
//   onConfirm,
// }: {
//   lead: Lead | null;
//   onClose: () => void;
//   onConfirm: (lead: Lead, reason: string) => void;
// }) {
//   const [reason, setReason] = useState("");
//   const [submitting, setSubmitting] = useState(false);

//   if (!lead) return null;

//   const handleConfirm = async () => {
//     if (!reason.trim()) {
//       toast.error("Please enter a rejection reason");
//       return;
//     }
//     setSubmitting(true);
//     await onConfirm(lead, reason);
//     setSubmitting(false);
//   };

//   return (
//     <Dialog open={!!lead} onOpenChange={onClose}>
//       <DialogContent className="max-w-md bg-white">
//         <DialogHeader>
//           <DialogTitle>Reject Lead: {lead.lead_name ?? lead.full_name}</DialogTitle>
//         </DialogHeader>
//         <div className="space-y-3 py-2">
//           <div className="space-y-1">
//             <Label>Reason for Rejection *</Label>
//             <Textarea
//               rows={3}
//               placeholder="Low CIBIL score, documents not provided, etc."
//               value={reason}
//               onChange={(e) => setReason(e.target.value)}
//             />
//           </div>
//           <Button
//             disabled={submitting || !reason.trim()}
//             onClick={handleConfirm}
//             variant="destructive"
//             className="w-full"
//           >
//             {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
//             Confirm Rejection
//           </Button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }
// import { createFileRoute } from "@tanstack/react-router";
// import { useEffect, useState } from "react";
// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { supabase } from "@/integrations/supabase/client";
// import { Loader2, Search, Phone, Mail, CheckCircle2, XCircle } from "lucide-react";

// export const Route = createFileRoute("/crm/leads")({
//   component: LeadsPage,
// });

// type Lead = {
//   id: string;
//   full_name: string;
//   phone: string | null;
//   email: string | null;
//   city: string | null;
//   product_type: string | null;
//   product_name: string | null;
//   amount: number | null;
//   status: string;
//   lead_source: string | null;
//   created_at: string;
// };

// const statusBadges: Record<string, string> = {
//   New: "bg-blue-100 text-blue-800",
//   Contacted: "bg-amber-100 text-amber-800",
//   Qualified: "bg-indigo-100 text-indigo-800",
//   Approved: "bg-emerald-100 text-emerald-800 shadow-sm",
//   Rejected: "bg-red-100 text-red-800",
// };

// export function LeadsPage() {
//   const [rows, setRows] = useState<Lead[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [q, setQ] = useState("");
//   const [productType, setProductType] = useState("all");
//   const [status, setStatus] = useState("all");
//   const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

//   const load = async () => {
//     setLoading(true);
//     const { data, error } = await supabase
//       .from("leads")
//       .select("id, full_name, phone, email, city, product_type, product_name, amount, status, lead_source, created_at")
//       .order("created_at", { ascending: false });

//     if (!error && data) {
//       setRows(data as Lead[]);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     load();
//     const ch = supabase
//       .channel("all-leads-realtime")
//       .on("postgres_changes", { event: "*", schema: "public", table: "leads" }, () => load())
//       .subscribe();

//     return () => {
//       supabase.removeChannel(ch);
//     };
//   }, []);

//   const handleReject = async (id: string) => {
//     await supabase.from("leads").update({ status: "Rejected" }).eq("id", id);
//     load();
//   };

//   const filtered = rows.filter((r) => {
//     if (productType !== "all" && r.product_type !== productType) return false;
//     if (status !== "all" && r.status !== status) return false;
//     if (!q) return true;
//     const s = q.toLowerCase();
//     return (
//       r.full_name?.toLowerCase().includes(s) ||
//       r.phone?.includes(q) ||
//       r.email?.toLowerCase().includes(s) ||
//       r.product_name?.toLowerCase().includes(s)
//     );
//   });

//   return (
//     <div className="space-y-4 p-4 md:p-6">
//       <div className="flex flex-col gap-1">
//         <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Lead Master Management</h1>
//         <p className="text-sm text-slate-500">
//           Central pipeline for managing and approving web enquiries across Loans, Mutual Funds, and Insurance.
//         </p>
//       </div>

//       <Card className="p-4">
//         <div className="flex flex-wrap items-center gap-3">
//           <div className="relative min-w-[220px] flex-1">
//             <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
//             <Input
//               placeholder="Search name, phone, email..."
//               value={q}
//               onChange={(e) => setQ(e.target.value)}
//               className="pl-9"
//             />
//           </div>

//           <select
//             className="h-9 rounded-md border border-input bg-white px-3 text-sm"
//             value={productType}
//             onChange={(e) => setProductType(e.target.value)}
//           >
//             <option value="all">All Products</option>
//             <option value="loan">Loans</option>
//             <option value="mutual_fund">Mutual Funds</option>
//             <option value="insurance">Insurance</option>
//           </select>

//           <select
//             className="h-9 rounded-md border border-input bg-white px-3 text-sm"
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//           >
//             <option value="all">All Status</option>
//             <option value="New">New</option>
//             <option value="Contacted">Contacted</option>
//             <option value="Qualified">Qualified</option>
//             <option value="Approved">Approved</option>
//             <option value="Rejected">Rejected</option>
//           </select>
//         </div>
//       </Card>

//       <Card className="overflow-hidden">
//         {loading ? (
//           <div className="flex h-40 items-center justify-center">
//             <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
//           </div>
//         ) : filtered.length === 0 ? (
//           <div className="p-10 text-center text-sm text-slate-500">
//             No matching leads found.
//           </div>
//         ) : (
//           <div className="overflow-x-auto">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Customer</TableHead>
//                   <TableHead>Contact</TableHead>
//                   <TableHead>Type</TableHead>
//                   <TableHead>Product / Plan</TableHead>
//                   <TableHead>Amount</TableHead>
//                   <TableHead>Status</TableHead>
//                   <TableHead>Received</TableHead>
//                   <TableHead className="text-right">Actions</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {filtered.map((r) => (
//                   <TableRow key={r.id}>
//                     <TableCell className="font-medium">{r.full_name}</TableCell>
//                     <TableCell>
//                       <div className="flex flex-col gap-0.5 text-xs">
//                         {r.phone && (
//                           <span className="flex items-center gap-1">
//                             <Phone className="h-3 w-3 text-slate-400" />
//                             {r.phone}
//                           </span>
//                         )}
//                         {r.email && (
//                           <span className="flex items-center gap-1 text-slate-500">
//                             <Mail className="h-3 w-3 text-slate-400" />
//                             {r.email}
//                           </span>
//                         )}
//                       </div>
//                     </TableCell>
//                     <TableCell className="capitalize text-xs font-semibold">
//                       {r.product_type?.replace("_", " ") ?? "—"}
//                     </TableCell>
//                     <TableCell>{r.product_name ?? "—"}</TableCell>
//                     <TableCell>
//                       {r.amount ? `₹${Number(r.amount).toLocaleString("en-IN")}` : "—"}
//                     </TableCell>
//                     <TableCell>
//                       <Badge className={statusBadges[r.status] || "bg-slate-100 text-slate-800"}>
//                         {r.status}
//                       </Badge>
//                     </TableCell>
//                     <TableCell className="text-xs text-slate-500">
//                       {new Date(r.created_at).toLocaleDateString()}
//                     </TableCell>
//                     <TableCell className="text-right">
//                       {r.status !== "Approved" && r.status !== "Rejected" && (
//                         <div className="flex items-center justify-end gap-2">
//                           <Button
//                             size="sm"
//                             variant="default"
//                             className="h-8 gap-1 bg-emerald-600 hover:bg-emerald-700"
//                             onClick={() => setSelectedLead(r)}
//                           >
//                             <CheckCircle2 className="h-3.5 w-3.5" /> Approve
//                           </Button>
//                           <Button
//                             size="sm"
//                             variant="outline"
//                             className="h-8 text-red-600 hover:bg-red-50 hover:text-red-700"
//                             onClick={() => handleReject(r.id)}
//                           >
//                             <XCircle className="h-3.5 w-3.5" /> Reject
//                           </Button>
//                         </div>
//                       )}
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>
//         )}
//       </Card>

//       {selectedLead && (
//         <ApproveModal
//           lead={selectedLead}
//           onClose={() => setSelectedLead(null)}
//           onSuccess={() => {
//             setSelectedLead(null);
//             load();
//           }}
//         />
//       )}
//     </div>
//   );
// }

// function ApproveModal({
//   lead,
//   onClose,
//   onSuccess,
// }: {
//   lead: Lead;
//   onClose: () => void;
//   onSuccess: () => void;
// }) {
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     // Loan specific
//     loanType: "Personal Loan",
//     sanctionedAmount: lead.amount || "",
//     lenderName: "",
//     // MF specific
//     schemeName: lead.product_name || "",
//     monthlySipAmount: lead.amount || "",
//     folioNumber: "",
//     // Insurance specific
//     policyType: lead.product_name || "Health Insurance",
//     sumInsured: lead.amount || "",
//     insurerName: "",
//     policyNumber: "",
//   });

//   const handleApprove = async () => {
//     setLoading(true);
//     try {
//       // 1. Mark lead as Approved
//       await supabase.from("leads").update({ status: "Approved" }).eq("id", lead.id);

//       // 2. Dispatch to designated workflow cases table based on product_type
//       if (lead.product_type === "mutual_fund") {
//         await supabase.from("mf_cases").insert({
//           lead_id: lead.id,
//           full_name: lead.full_name,
//           phone: lead.phone,
//           email: lead.email,
//           scheme_name: formData.schemeName,
//           sip_amount: Number(formData.monthlySipAmount) || 0,
//           folio_number: formData.folioNumber || null,
//           status: "KYC Pending",
//         });
//       } else if (lead.product_type === "insurance") {
//         await supabase.from("insurance_cases").insert({
//           lead_id: lead.id,
//           full_name: lead.full_name,
//           phone: lead.phone,
//           email: lead.email,
//           policy_type: formData.policyType,
//           sum_insured: Number(formData.sumInsured) || 0,
//           insurer_name: formData.insurerName || null,
//           policy_number: formData.policyNumber || null,
//           status: "Quote Shared",
//         });
//       } else {
//         // Fallback / Default to Loan cases table
//         await supabase.from("loan_cases").insert({
//           lead_id: lead.id,
//           full_name: lead.full_name,
//           phone: lead.phone,
//           loan_type: formData.loanType,
//           amount: Number(formData.sanctionedAmount) || 0,
//           bank_name: formData.lenderName || "TBD",
//           status: "In Process",
//         });
//       }

//       onSuccess();
//     } catch (err) {
//       console.error("Error approving lead:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Dialog open onOpenChange={onClose}>
//       <DialogContent className="max-w-md">
//         <DialogHeader>
//           <DialogTitle>
//             Approve & Convert {lead.product_type ? lead.product_type.replace("_", " ").toUpperCase() : "LOAN"} Lead
//           </DialogTitle>
//         </DialogHeader>

//         <div className="space-y-3 py-2 text-sm">
//           {lead.product_type === "mutual_fund" ? (
//             <>
//               <div>
//                 <label className="text-xs font-semibold text-slate-600">Fund / Scheme Name</label>
//                 <Input
//                   value={formData.schemeName}
//                   onChange={(e) => setFormData({ ...formData, schemeName: e.target.value })}
//                   placeholder="e.g. SBI Small Cap Fund"
//                 />
//               </div>
//               <div>
//                 <label className="text-xs font-semibold text-slate-600">SIP / Investment Amount (₹)</label>
//                 <Input
//                   type="number"
//                   value={formData.monthlySipAmount}
//                   onChange={(e) => setFormData({ ...formData, monthlySipAmount: e.target.value })}
//                 />
//               </div>
//               <div>
//                 <label className="text-xs font-semibold text-slate-600">Folio Number (Optional)</label>
//                 <Input
//                   value={formData.folioNumber}
//                   onChange={(e) => setFormData({ ...formData, folioNumber: e.target.value })}
//                   placeholder="e.g. 1234567890"
//                 />
//               </div>
//             </>
//           ) : lead.product_type === "insurance" ? (
//             <>
//               <div>
//                 <label className="text-xs font-semibold text-slate-600">Policy Plan Name</label>
//                 <Input
//                   value={formData.policyType}
//                   onChange={(e) => setFormData({ ...formData, policyType: e.target.value })}
//                   placeholder="e.g. Health Companion"
//                 />
//               </div>
//               <div>
//                 <label className="text-xs font-semibold text-slate-600">Insurer Provider</label>
//                 <Input
//                   value={formData.insurerName}
//                   onChange={(e) => setFormData({ ...formData, insurerName: e.target.value })}
//                   placeholder="e.g. Niva Bupa / HDFC ERGO"
//                 />
//               </div>
//               <div>
//                 <label className="text-xs font-semibold text-slate-600">Sum Insured (₹)</label>
//                 <Input
//                   type="number"
//                   value={formData.sumInsured}
//                   onChange={(e) => setFormData({ ...formData, sumInsured: e.target.value })}
//                 />
//               </div>
//             </>
//           ) : (
//             <>
//               <div>
//                 <label className="text-xs font-semibold text-slate-600">Loan Type</label>
//                 <Input
//                   value={formData.loanType}
//                   onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
//                 />
//               </div>
//               <div>
//                 <label className="text-xs font-semibold text-slate-600">Lender Bank Name</label>
//                 <Input
//                   value={formData.lenderName}
//                   onChange={(e) => setFormData({ ...formData, lenderName: e.target.value })}
//                   placeholder="e.g. HDFC Bank"
//                 />
//               </div>
//               <div>
//                 <label className="text-xs font-semibold text-slate-600">Sanctioned Amount (₹)</label>
//                 <Input
//                   type="number"
//                   value={formData.sanctionedAmount}
//                   onChange={(e) => setFormData({ ...formData, sanctionedAmount: e.target.value })}
//                 />
//               </div>
//             </>
//           )}
//         </div>

//         <DialogFooter className="gap-2">
//           <Button variant="outline" onClick={onClose} disabled={loading}>
//             Cancel
//           </Button>
//           <Button onClick={handleApprove} disabled={loading} className="bg-emerald-600 hover:bg-emerald-700">
//             {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
//             Confirm Approval
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }
// import { createFileRoute } from "@tanstack/react-router";
// import { useEffect, useState } from "react";
// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { supabase } from "@/integrations/supabase/client";
// import { Loader2, Search, Phone, Mail, CheckCircle2, XCircle, Plus } from "lucide-react";

// export const Route = createFileRoute("/crm/leads")({
//   component: LeadsPage,
// });

// type Partner = {
//   id: string;
//   name: string;
// };

// type Lead = {
//   id: string;
//   full_name: string;
//   phone: string | null;
//   email: string | null;
//   city: string | null;
//   product_type: string | null;
//   product_name: string | null;
//   amount: number | null;
//   status: string;
//   lead_source: string | null;
//   partner_id: string | null;
//   partner_name?: string | null;
//   created_at: string;
// };

// const statusBadges: Record<string, string> = {
//   New: "bg-blue-100 text-blue-800",
//   Contacted: "bg-amber-100 text-amber-800",
//   Qualified: "bg-indigo-100 text-indigo-800",
//   Approved: "bg-emerald-100 text-emerald-800",
//   Rejected: "bg-red-100 text-red-800",
// };

// export function LeadsPage() {
//   const [rows, setRows] = useState<Lead[]>([]);
//   const [partners, setPartners] = useState<Partner[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [q, setQ] = useState("");
//   const [productType, setProductType] = useState("all");
//   const [status, setStatus] = useState("all");
//   const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
//   const [openCreateModal, setOpenCreateModal] = useState(false);

//   const loadData = async () => {
//     setLoading(true);
//     // Fetch Partners
//     const { data: partnerData } = await supabase.from("partners").select("id, name");
//     if (partnerData) setPartners(partnerData);

//     // Fetch Leads with partner details
//     const { data, error } = await supabase
//       .from("leads")
//       .select("*, partners(name)")
//       .order("created_at", { ascending: false });

//     if (!error && data) {
//       const formattedLeads = data.map((l: any) => ({
//         ...l,
//         partner_name: l.partners?.name || null,
//       }));
//       setRows(formattedLeads as Lead[]);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     loadData();
//     const ch = supabase
//       .channel("all-leads-sync")
//       .on("postgres_changes", { event: "*", schema: "public", table: "leads" }, () => loadData())
//       .subscribe();

//     return () => {
//       supabase.removeChannel(ch);
//     };
//   }, []);

//   const handleReject = async (id: string) => {
//     await supabase.from("leads").update({ status: "Rejected" }).eq("id", id);
//     loadData();
//   };

//   const filtered = rows.filter((r) => {
//     if (productType !== "all" && r.product_type !== productType) return false;
//     if (status !== "all" && r.status !== status) return false;
//     if (!q) return true;
//     const s = q.toLowerCase();
//     return (
//       r.full_name?.toLowerCase().includes(s) ||
//       r.phone?.includes(q) ||
//       r.email?.toLowerCase().includes(s) ||
//       r.partner_name?.toLowerCase().includes(s)
//     );
//   });

//   return (
//     <div className="space-y-4 p-4 md:p-6">
//       <div className="flex flex-wrap items-center justify-between gap-3">
//         <div>
//           <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Lead Generation & Entry</h1>
//           <p className="text-sm text-slate-500">Generate fresh leads and route them for approval.</p>
//         </div>
//         <Button onClick={() => setOpenCreateModal(true)} className="gap-2">
//           <Plus className="h-4 w-4" /> Generate New Lead
//         </Button>
//       </div>

//       <Card className="p-4">
//         <div className="flex flex-wrap items-center gap-3">
//           <div className="relative min-w-[220px] flex-1">
//             <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
//             <Input
//               placeholder="Search name, phone, partner..."
//               value={q}
//               onChange={(e) => setQ(e.target.value)}
//               className="pl-9"
//             />
//           </div>

//           <select
//             className="h-9 rounded-md border border-input bg-white px-3 text-sm"
//             value={productType}
//             onChange={(e) => setProductType(e.target.value)}
//           >
//             <option value="all">All Products</option>
//             <option value="loan">Loan</option>
//             <option value="mutual_fund">Mutual Fund</option>
//             <option value="insurance">Insurance</option>
//           </select>

//           <select
//             className="h-9 rounded-md border border-input bg-white px-3 text-sm"
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//           >
//             <option value="all">All Status</option>
//             <option value="New">New</option>
//             <option value="Contacted">Contacted</option>
//             <option value="Qualified">Qualified</option>
//             <option value="Approved">Approved</option>
//             <option value="Rejected">Rejected</option>
//           </select>
//         </div>
//       </Card>

//       <Card className="overflow-hidden">
//         {loading ? (
//           <div className="flex h-40 items-center justify-center">
//             <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
//           </div>
//         ) : filtered.length === 0 ? (
//           <div className="p-10 text-center text-sm text-slate-500">No leads found.</div>
//         ) : (
//           <div className="overflow-x-auto">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Customer</TableHead>
//                   <TableHead>Contact</TableHead>
//                   <TableHead>Type</TableHead>
//                   <TableHead>Partner (Source)</TableHead>
//                   <TableHead>Amount</TableHead>
//                   <TableHead>Status</TableHead>
//                   <TableHead>Received</TableHead>
//                   <TableHead className="text-right">Actions</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {filtered.map((r) => (
//                   <TableRow key={r.id}>
//                     <TableCell className="font-medium">{r.full_name}</TableCell>
//                     <TableCell>
//                       <div className="flex flex-col gap-0.5 text-xs">
//                         {r.phone && (
//                           <span className="flex items-center gap-1">
//                             <Phone className="h-3 w-3 text-slate-400" /> {r.phone}
//                           </span>
//                         )}
//                         {r.email && (
//                           <span className="flex items-center gap-1 text-slate-500">
//                             <Mail className="h-3 w-3 text-slate-400" /> {r.email}
//                           </span>
//                         )}
//                       </div>
//                     </TableCell>
//                     <TableCell className="capitalize text-xs font-semibold">
//                       {r.product_type?.replace("_", " ")}
//                     </TableCell>
//                     <TableCell className="text-xs">
//                       {r.partner_name ? (
//                         <span className="font-semibold text-indigo-600">{r.partner_name}</span>
//                       ) : (
//                         r.lead_source || "Direct Website"
//                       )}
//                     </TableCell>
//                     <TableCell>{r.amount ? `₹${Number(r.amount).toLocaleString("en-IN")}` : "—"}</TableCell>
//                     <TableCell>
//                       <Badge className={statusBadges[r.status] || "bg-slate-100 text-slate-800"}>
//                         {r.status}
//                       </Badge>
//                     </TableCell>
//                     <TableCell className="text-xs text-slate-500">
//                       {new Date(r.created_at).toLocaleDateString()}
//                     </TableCell>
//                     <TableCell className="text-right">
//                       {r.status !== "Approved" && r.status !== "Rejected" && (
//                         <div className="flex items-center justify-end gap-2">
//                           <Button
//                             size="sm"
//                             className="h-8 gap-1 bg-emerald-600 hover:bg-emerald-700"
//                             onClick={() => setSelectedLead(r)}
//                           >
//                             <CheckCircle2 className="h-3.5 w-3.5" /> Approve
//                           </Button>
//                           <Button
//                             size="sm"
//                             variant="outline"
//                             className="h-8 text-red-600 hover:bg-red-50 hover:text-red-700"
//                             onClick={() => handleReject(r.id)}
//                           >
//                             <XCircle className="h-3.5 w-3.5" /> Reject
//                           </Button>
//                         </div>
//                       )}
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>
//         )}
//       </Card>

//       {/* Modal 1: Generate Lead Modal (Fixes #1 & #2) */}
//       {openCreateModal && (
//         <CreateLeadModal
//           partners={partners}
//           onClose={() => setOpenCreateModal(false)}
//           onSuccess={() => {
//             setOpenCreateModal(false);
//             loadData();
//           }}
//         />
//       )}

//       {/* Modal 2: Approve & Move to Customer Modal (Fixes #6, #8, #9) */}
//       {selectedLead && (
//         <ApproveModal
//           lead={selectedLead}
//           onClose={() => setSelectedLead(null)}
//           onSuccess={() => {
//             setSelectedLead(null);
//             loadData();
//           }}
//         />
//       )}
//     </div>
//   );
// }

// // Generate Lead Component
// function CreateLeadModal({
//   partners,
//   onClose,
//   onSuccess,
// }: {
//   partners: Partner[];
//   onClose: () => void;
//   onSuccess: () => void;
// }) {
//   const [loading, setLoading] = useState(false);
//   const [form, setForm] = useState({
//     full_name: "",
//     phone: "",
//     email: "",
//     city: "",
//     product_type: "loan",
//     product_name: "",
//     amount: "",
//     partner_id: "",
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     const payload = {
//       full_name: form.full_name,
//       phone: form.phone || null,
//       email: form.email || null,
//       city: form.city || null,
//       product_type: form.product_type,
//       product_name: form.product_name || null,
//       amount: form.amount ? Number(form.amount) : null,
//       partner_id: form.partner_id || null, // Preserves Partner Reference (#1)
//       status: "New",
//       lead_source: form.partner_id ? "Partner" : "Direct",
//     };

//     const { error } = await supabase.from("leads").insert([payload]);
//     setLoading(false);

//     if (!error) {
//       onSuccess();
//     } else {
//       console.error(error);
//     }
//   };

//   return (
//     <Dialog open onOpenChange={onClose}>
//       <DialogContent className="max-w-md">
//         <DialogHeader>
//           <DialogTitle>Generate New Lead</DialogTitle>
//         </DialogHeader>
//         <form onSubmit={handleSubmit} className="space-y-3 py-2 text-sm">
//           <div>
//             <label className="text-xs font-semibold">Full Name *</label>
//             <Input required value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} />
//           </div>
//           <div className="grid grid-cols-2 gap-2">
//             <div>
//               <label className="text-xs font-semibold">Phone *</label>
//               <Input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
//             </div>
//             <div>
//               <label className="text-xs font-semibold">Email</label>
//               <Input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-2">
//             <div>
//               <label className="text-xs font-semibold">Product Type</label>
//               <select
//                 className="w-full h-9 rounded-md border border-input bg-white px-3 text-xs"
//                 value={form.product_type}
//                 onChange={(e) => setForm({ ...form, product_type: e.target.value })}
//               >
//                 <option value="loan">Loan</option>
//                 <option value="mutual_fund">Mutual Fund</option>
//                 <option value="insurance">Insurance</option>
//               </select>
//             </div>
//             <div>
//               <label className="text-xs font-semibold">City</label>
//               <Input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-2">
//             <div>
//               <label className="text-xs font-semibold">Plan/Product Name</label>
//               <Input value={form.product_name} onChange={(e) => setForm({ ...form, product_name: e.target.value })} placeholder="e.g. Home Loan / SIP" />
//             </div>
//             <div>
//               <label className="text-xs font-semibold">Amount (₹)</label>
//               <Input type="number" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} />
//             </div>
//           </div>
//           <div>
//             <label className="text-xs font-semibold">Under Partner (Source)</label>
//             <select
//               className="w-full h-9 rounded-md border border-input bg-white px-3 text-xs"
//               value={form.partner_id}
//               onChange={(e) => setForm({ ...form, partner_id: e.target.value })}
//             >
//               <option value="">-- Direct Lead (No Partner) --</option>
//               {partners.map((p) => (
//                 <option key={p.id} value={p.id}>{p.name}</option>
//               ))}
//             </select>
//           </div>
//           <DialogFooter className="mt-4">
//             <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
//             <Button type="submit" disabled={loading}>
//               {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Create Lead
//             </Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }

// // Approve & Move Lead to Customer + Cases (Fixes #6, #8 & #9)
// function ApproveModal({ lead, onClose, onSuccess }: { lead: Lead; onClose: () => void; onSuccess: () => void }) {
//   const [loading, setLoading] = useState(false);

//   const handleApprove = async () => {
//     setLoading(true);
//     try {
//       // 1. Update Lead Status
//       await supabase.from("leads").update({ status: "Approved" }).eq("id", lead.id);

//       // 2. Transfer Data FULLY to Customers Table (Fixes #6)
//       const { data: customerData } = await supabase.from("customers").insert({
//         lead_id: lead.id,
//         full_name: lead.full_name,
//         phone: lead.phone,
//         email: lead.email,
//         city: lead.city,
//         product_type: lead.product_type,
//         partner_id: lead.partner_id,
//         status: "Active Customer",
//       }).select().single();

//       // 3. Move into Respective Cases Table (Fixes #8 & #9)
//       if (lead.product_type === "mutual_fund") {
//         await supabase.from("mf_cases").insert({
//           lead_id: lead.id,
//           customer_id: customerData?.id,
//           full_name: lead.full_name,
//           phone: lead.phone,
//           email: lead.email,
//           scheme_name: lead.product_name || "General Mutual Fund",
//           sip_amount: lead.amount || 0,
//           status: "KYC Pending",
//         });
//       } else if (lead.product_type === "insurance") {
//         await supabase.from("insurance_cases").insert({
//           lead_id: lead.id,
//           customer_id: customerData?.id,
//           full_name: lead.full_name,
//           phone: lead.phone,
//           email: lead.email,
//           policy_type: lead.product_name || "Insurance Policy",
//           sum_insured: lead.amount || 0,
//           status: "Quote Shared",
//         });
//       } else {
//         await supabase.from("loan_cases").insert({
//           lead_id: lead.id,
//           customer_id: customerData?.id,
//           full_name: lead.full_name,
//           phone: lead.phone,
//           loan_type: lead.product_name || "Personal Loan",
//           amount: lead.amount || 0,
//           status: "In Process",
//         });
//       }

//       onSuccess();
//     } catch (e) {
//       console.error(e);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Dialog open onOpenChange={onClose}>
//       <DialogContent className="max-w-md">
//         <DialogHeader>
//           <DialogTitle>Approve Lead</DialogTitle>
//         </DialogHeader>
//         <p className="text-sm text-slate-600">
//           This will approve <strong className="text-slate-900">{lead.full_name}</strong> and automatically map all details into the <strong className="text-slate-900">Customer Tab</strong> and <strong className="text-slate-900">{lead.product_type?.toUpperCase()} Tab</strong>.
//         </p>
//         <DialogFooter className="mt-4">
//           <Button variant="outline" onClick={onClose}>Cancel</Button>
//           <Button onClick={handleApprove} className="bg-emerald-600 hover:bg-emerald-700" disabled={loading}>
//             {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Confirm Approval
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }
// import { createFileRoute } from "@tanstack/react-router";
// import { useEffect, useState } from "react";
// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { supabase } from "@/integrations/supabase/client";
// import { Loader2, Search, Phone, Mail, CheckCircle2, XCircle, Plus } from "lucide-react";
// import { LeadStageAndNotes } from "@/components/crm/lead-stage-notes";

// export const Route = createFileRoute("/crm/leads")({
//   component: LeadsPage,
// });

// type Partner = {
//   id: string;
//   name: string;
// };

// type Lead = {
//   id: string;
//   full_name: string;
//   phone: string | null;
//   email: string | null;
//   city: string | null;
//   product_type: string | null;
//   product_name: string | null;
//   amount: number | null;
//   status: string;
//   stage?: string;
//   notes?: string;
//   lead_source: string | null;
//   partner_id: string | null;
//   partner_name?: string | null;
//   created_at: string;
// };

// const statusBadges: Record<string, string> = {
//   New: "bg-blue-100 text-blue-800",
//   Contacted: "bg-amber-100 text-amber-800",
//   Qualified: "bg-indigo-100 text-indigo-800",
//   Approved: "bg-emerald-100 text-emerald-800",
//   Rejected: "bg-red-100 text-red-800",
// };

// export function LeadsPage() {
//   const [rows, setRows] = useState<Lead[]>([]);
//   const [partners, setPartners] = useState<Partner[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [q, setQ] = useState("");
//   const [productType, setProductType] = useState("all");
//   const [status, setStatus] = useState("all");
//   const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
//   const [openCreateModal, setOpenCreateModal] = useState(false);

//   const loadData = async () => {
//     setLoading(true);
//     // Fetch Partners
//     const { data: partnerData } = await supabase.from("partners").select("id, name");
//     if (partnerData) setPartners(partnerData);

//     // Fetch Leads with partner details
//     const { data, error } = await supabase
//       .from("leads")
//       .select("*, partners(name)")
//       .order("created_at", { ascending: false });

//     if (!error && data) {
//       const formattedLeads = data.map((l: any) => ({
//         ...l,
//         partner_name: l.partners?.name || null,
//       }));
//       setRows(formattedLeads as Lead[]);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     loadData();
//     const ch = supabase
//       .channel("all-leads-sync")
//       .on("postgres_changes", { event: "*", schema: "public", table: "leads" }, () => loadData())
//       .subscribe();

//     return () => {
//       supabase.removeChannel(ch);
//     };
//   }, []);

//   const handleReject = async (id: string) => {
//     await supabase.from("leads").update({ status: "Rejected" }).eq("id", id);
//     loadData();
//   };

//   const filtered = rows.filter((r) => {
//     if (productType !== "all" && r.product_type !== productType) return false;
//     if (status !== "all" && r.status !== status) return false;
//     if (!q) return true;
//     const s = q.toLowerCase();
//     return (
//       r.full_name?.toLowerCase().includes(s) ||
//       r.phone?.includes(q) ||
//       r.email?.toLowerCase().includes(s) ||
//       r.partner_name?.toLowerCase().includes(s)
//     );
//   });

//   return (
//     <div className="space-y-4 p-4 md:p-6">
//       <div className="flex flex-wrap items-center justify-between gap-3">
//         <div>
//           <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Lead Generation & Entry</h1>
//           <p className="text-sm text-slate-500">Generate fresh leads and route them for approval.</p>
//         </div>
//         <Button onClick={() => setOpenCreateModal(true)} className="gap-2">
//           <Plus className="h-4 w-4" /> Generate New Lead
//         </Button>
//       </div>

//       <Card className="p-4">
//         <div className="flex flex-wrap items-center gap-3">
//           <div className="relative min-w-[220px] flex-1">
//             <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
//             <Input
//               placeholder="Search name, phone, partner..."
//               value={q}
//               onChange={(e) => setQ(e.target.value)}
//               className="pl-9"
//             />
//           </div>

//           <select
//             className="h-9 rounded-md border border-input bg-white px-3 text-sm"
//             value={productType}
//             onChange={(e) => setProductType(e.target.value)}
//           >
//             <option value="all">All Products</option>
//             <option value="loan">Loan</option>
//             <option value="mutual_fund">Mutual Fund</option>
//             <option value="insurance">Insurance</option>
//           </select>

//           <select
//             className="h-9 rounded-md border border-input bg-white px-3 text-sm"
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//           >
//             <option value="all">All Status</option>
//             <option value="New">New</option>
//             <option value="Contacted">Contacted</option>
//             <option value="Qualified">Qualified</option>
//             <option value="Approved">Approved</option>
//             <option value="Rejected">Rejected</option>
//           </select>
//         </div>
//       </Card>

//       <Card className="overflow-hidden">
//         {loading ? (
//           <div className="flex h-40 items-center justify-center">
//             <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
//           </div>
//         ) : filtered.length === 0 ? (
//           <div className="p-10 text-center text-sm text-slate-500">No leads found.</div>
//         ) : (
//           <div className="overflow-x-auto">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Customer</TableHead>
//                   <TableHead>Contact</TableHead>
//                   <TableHead>Type</TableHead>
//                   <TableHead>Partner (Source)</TableHead>
//                   <TableHead>Amount</TableHead>
//                   <TableHead>Status</TableHead>
//                   <TableHead>Stage & Notes</TableHead>
//                   <TableHead>Received</TableHead>
//                   <TableHead className="text-right">Actions</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {filtered.map((r) => (
//                   <TableRow key={r.id}>
//                     <TableCell className="font-medium">{r.full_name}</TableCell>
//                     <TableCell>
//                       <div className="flex flex-col gap-0.5 text-xs">
//                         {r.phone && (
//                           <span className="flex items-center gap-1">
//                             <Phone className="h-3 w-3 text-slate-400" /> {r.phone}
//                           </span>
//                         )}
//                         {r.email && (
//                           <span className="flex items-center gap-1 text-slate-500">
//                             <Mail className="h-3 w-3 text-slate-400" /> {r.email}
//                           </span>
//                         )}
//                       </div>
//                     </TableCell>
//                     <TableCell className="capitalize text-xs font-semibold">
//                       {r.product_type?.replace("_", " ")}
//                     </TableCell>
//                     <TableCell className="text-xs">
//                       {r.partner_name ? (
//                         <span className="font-semibold text-indigo-600">{r.partner_name}</span>
//                       ) : (
//                         r.lead_source || "Direct Website"
//                       )}
//                     </TableCell>
//                     <TableCell>{r.amount ? `₹${Number(r.amount).toLocaleString("en-IN")}` : "—"}</TableCell>
//                     <TableCell>
//                       <Badge className={statusBadges[r.status] || "bg-slate-100 text-slate-800"}>
//                         {r.status}
//                       </Badge>
//                     </TableCell>
//                     <TableCell>
//                       <LeadStageAndNotes leadId={r.id} currentStage={r.stage} existingNotes={r.notes} />
//                     </TableCell>
//                     <TableCell className="text-xs text-slate-500">
//                       {new Date(r.created_at).toLocaleDateString()}
//                     </TableCell>
//                     <TableCell className="text-right">
//                       {r.status !== "Approved" && r.status !== "Rejected" && (
//                         <div className="flex items-center justify-end gap-2">
//                           <Button
//                             size="sm"
//                             className="h-8 gap-1 bg-emerald-600 hover:bg-emerald-700"
//                             onClick={() => setSelectedLead(r)}
//                           >
//                             <CheckCircle2 className="h-3.5 w-3.5" /> Approve
//                           </Button>
//                           <Button
//                             size="sm"
//                             variant="outline"
//                             className="h-8 text-red-600 hover:bg-red-50 hover:text-red-700"
//                             onClick={() => handleReject(r.id)}
//                           >
//                             <XCircle className="h-3.5 w-3.5" /> Reject
//                           </Button>
//                         </div>
//                       )}
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>
//         )}
//       </Card>

//       {/* Modal 1: Generate Lead Modal */}
//       {openCreateModal && (
//         <CreateLeadModal
//           partners={partners}
//           onClose={() => setOpenCreateModal(false)}
//           onSuccess={() => {
//             setOpenCreateModal(false);
//             loadData();
//           }}
//         />
//       )}

//       {/* Modal 2: Approve & Move to Customer Modal */}
//       {selectedLead && (
//         <ApproveModal
//           lead={selectedLead}
//           onClose={() => setSelectedLead(null)}
//           onSuccess={() => {
//             setSelectedLead(null);
//             loadData();
//           }}
//         />
//       )}
//     </div>
//   );
// }

// // Generate Lead Component
// function CreateLeadModal({
//   partners,
//   onClose,
//   onSuccess,
// }: {
//   partners: Partner[];
//   onClose: () => void;
//   onSuccess: () => void;
// }) {
//   const [loading, setLoading] = useState(false);
//   const [form, setForm] = useState({
//     full_name: "",
//     phone: "",
//     email: "",
//     city: "",
//     product_type: "loan",
//     product_name: "",
//     amount: "",
//     partner_id: "",
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     const payload = {
//       full_name: form.full_name,
//       phone: form.phone || null,
//       email: form.email || null,
//       city: form.city || null,
//       product_type: form.product_type,
//       product_name: form.product_name || null,
//       amount: form.amount ? Number(form.amount) : null,
//       partner_id: form.partner_id || null,
//       status: "New",
//       lead_source: form.partner_id ? "Partner" : "Direct",
//     };

//     const { error } = await supabase.from("leads").insert([payload]);
//     setLoading(false);

//     if (!error) {
//       onSuccess();
//     } else {
//       console.error(error);
//     }
//   };

//   return (
//     <Dialog open onOpenChange={onClose}>
//       <DialogContent className="max-w-md">
//         <DialogHeader>
//           <DialogTitle>Generate New Lead</DialogTitle>
//         </DialogHeader>
//         <form onSubmit={handleSubmit} className="space-y-3 py-2 text-sm">
//           <div>
//             <label className="text-xs font-semibold">Full Name *</label>
//             <Input required value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} />
//           </div>
//           <div className="grid grid-cols-2 gap-2">
//             <div>
//               <label className="text-xs font-semibold">Phone *</label>
//               <Input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
//             </div>
//             <div>
//               <label className="text-xs font-semibold">Email</label>
//               <Input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-2">
//             <div>
//               <label className="text-xs font-semibold">Product Type</label>
//               <select
//                 className="w-full h-9 rounded-md border border-input bg-white px-3 text-xs"
//                 value={form.product_type}
//                 onChange={(e) => setForm({ ...form, product_type: e.target.value })}
//               >
//                 <option value="loan">Loan</option>
//                 <option value="mutual_fund">Mutual Fund</option>
//                 <option value="insurance">Insurance</option>
//               </select>
//             </div>
//             <div>
//               <label className="text-xs font-semibold">City</label>
//               <Input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-2">
//             <div>
//               <label className="text-xs font-semibold">Plan/Product Name</label>
//               <Input value={form.product_name} onChange={(e) => setForm({ ...form, product_name: e.target.value })} placeholder="e.g. Home Loan / SIP" />
//             </div>
//             <div>
//               <label className="text-xs font-semibold">Amount (₹)</label>
//               <Input type="number" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} />
//             </div>
//           </div>
//           <div>
//             <label className="text-xs font-semibold">Under Partner (Source)</label>
//             <select
//               className="w-full h-9 rounded-md border border-input bg-white px-3 text-xs"
//               value={form.partner_id}
//               onChange={(e) => setForm({ ...form, partner_id: e.target.value })}
//             >
//               <option value="">-- Direct Lead (No Partner) --</option>
//               {partners.map((p) => (
//                 <option key={p.id} value={p.id}>{p.name}</option>
//               ))}
//             </select>
//           </div>
//           <DialogFooter className="mt-4">
//             <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
//             <Button type="submit" disabled={loading}>
//               {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Create Lead
//             </Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }

// // Approve & Move Lead to Customer + Cases
// function ApproveModal({ lead, onClose, onSuccess }: { lead: Lead; onClose: () => void; onSuccess: () => void }) {
//   const [loading, setLoading] = useState(false);

//   const handleApprove = async () => {
//     setLoading(true);
//     try {
//       // 1. Update Lead Status
//       await supabase.from("leads").update({ status: "Approved" }).eq("id", lead.id);

//       // 2. Transfer Data FULLY to Customers Table
//       const { data: customerData } = await supabase.from("customers").insert({
//         lead_id: lead.id,
//         full_name: lead.full_name,
//         phone: lead.phone,
//         email: lead.email,
//         city: lead.city,
//         product_type: lead.product_type,
//         partner_id: lead.partner_id,
//         status: "Active Customer",
//       }).select().single();

//       // 3. Move into Respective Cases Table
//       if (lead.product_type === "mutual_fund") {
//         await supabase.from("mf_cases").insert({
//           lead_id: lead.id,
//           customer_id: customerData?.id,
//           full_name: lead.full_name,
//           phone: lead.phone,
//           email: lead.email,
//           scheme_name: lead.product_name || "General Mutual Fund",
//           sip_amount: lead.amount || 0,
//           status: "KYC Pending",
//         });
//       } else if (lead.product_type === "insurance") {
//         await supabase.from("insurance_cases").insert({
//           lead_id: lead.id,
//           customer_id: customerData?.id,
//           full_name: lead.full_name,
//           phone: lead.phone,
//           email: lead.email,
//           policy_type: lead.product_name || "Insurance Policy",
//           sum_insured: lead.amount || 0,
//           status: "Quote Shared",
//         });
//       } else {
//         await supabase.from("loan_cases").insert({
//           lead_id: lead.id,
//           customer_id: customerData?.id,
//           full_name: lead.full_name,
//           phone: lead.phone,
//           loan_type: lead.product_name || "Personal Loan",
//           amount: lead.amount || 0,
//           status: "In Process",
//         });
//       }

//       onSuccess();
//     } catch (e) {
//       console.error(e);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Dialog open onOpenChange={onClose}>
//       <DialogContent className="max-w-md">
//         <DialogHeader>
//           <DialogTitle>Approve Lead</DialogTitle>
//         </DialogHeader>
//         <p className="text-sm text-slate-600">
//           This will approve <strong className="text-slate-900">{lead.full_name}</strong> and automatically map all details into the <strong className="text-slate-900">Customer Tab</strong> and <strong className="text-slate-900">{lead.product_type?.toUpperCase()} Tab</strong>.
//         </p>
//         <DialogFooter className="mt-4">
//           <Button variant="outline" onClick={onClose}>Cancel</Button>
//           <Button onClick={handleApprove} className="bg-emerald-600 hover:bg-emerald-700" disabled={loading}>
//             {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Confirm Approval
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { supabase } from "@/integrations/supabase/client";
import {
  Loader2,
  Search,
  Phone,
  Mail,
  CheckCircle2,
  XCircle,
  Plus,
  MessageSquare,
  Calendar,
} from "lucide-react";

export const Route = createFileRoute("/crm/leads")({
  component: LeadsPage,
});

type Partner = {
  id: string;
  name: string;
};

type Lead = {
  id: string;
  full_name: string;
  phone: string | null;
  email: string | null;
  city: string | null;
  product_type: string | null;
  product_name: string | null;
  amount: number | null;
  status: string;
  stage?: string;
  notes?: string;
  lead_source: string | null;
  partner_id: string | null;
  partner_name?: string | null;
  created_at: string;
};

const statusBadges: Record<string, string> = {
  New: "bg-blue-100 text-blue-800 border-blue-200",
  Contacted: "bg-amber-100 text-amber-800 border-amber-200",
  Qualified: "bg-indigo-100 text-indigo-800 border-indigo-200",
  Approved: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Rejected: "bg-red-100 text-red-800 border-red-200",
};

export function LeadsPage() {
  const [rows, setRows] = useState<Lead[]>([]);
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [productType, setProductType] = useState("all");
  const [status, setStatus] = useState("all");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const loadData = async () => {
    setLoading(true);
    const { data: partnerData } = await supabase.from("partners").select("id, name");
    if (partnerData) setPartners(partnerData);

    const { data, error } = await supabase
      .from("leads")
      .select("*, partners(name)")
      .order("created_at", { ascending: false });

    if (!error && data) {
      const formattedLeads = data.map((l: any) => ({
        ...l,
        partner_name: l.partners?.name || null,
      }));
      setRows(formattedLeads as Lead[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();
    const ch = supabase
      .channel("all-leads-sync")
      .on("postgres_changes", { event: "*", schema: "public", table: "leads" }, () => loadData())
      .subscribe();

    return () => {
      supabase.removeChannel(ch);
    };
  }, []);

  const handleStageChange = async (id: string, stage: string) => {
    await supabase.from("leads").update({ stage }).eq("id", id);
    loadData();
  };

  const handleSaveNotes = async (id: string, notes: string) => {
    await supabase.from("leads").update({ notes }).eq("id", id);
    loadData();
  };

  const handleReject = async (id: string) => {
    await supabase.from("leads").update({ status: "Rejected" }).eq("id", id);
    loadData();
  };

  const filtered = rows.filter((r) => {
    if (productType !== "all" && r.product_type !== productType) return false;
    if (status !== "all" && r.status !== status) return false;
    if (!q) return true;
    const s = q.toLowerCase();
    return (
      r.full_name?.toLowerCase().includes(s) ||
      r.phone?.includes(q) ||
      r.email?.toLowerCase().includes(s) ||
      r.partner_name?.toLowerCase().includes(s)
    );
  });

  return (
    <div className="space-y-4 p-4 md:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Lead Generation & Entry</h1>
          <p className="text-sm text-slate-500">Generate fresh leads and route them for approval.</p>
        </div>
        <Button onClick={() => setOpenCreateModal(true)} className="gap-2">
          <Plus className="h-4 w-4" /> Generate New Lead
        </Button>
      </div>

      <Card className="p-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative min-w-[220px] flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search name, phone, partner..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="pl-9"
            />
          </div>

          <select
            className="h-9 rounded-md border border-input bg-white px-3 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400"
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
          >
            <option value="all">All Products</option>
            <option value="loan">Loan</option>
            <option value="mutual_fund">Mutual Fund</option>
            <option value="insurance">Insurance</option>
          </select>

          <select
            className="h-9 rounded-md border border-input bg-white px-3 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Qualified">Qualified</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </Card>

      <Card className="overflow-hidden">
        {loading ? (
          <div className="flex h-40 items-center justify-center">
            <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-10 text-center text-sm text-slate-500">No leads found.</div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-slate-50/50">
                <TableRow>
                  <TableHead className="w-[180px]">Customer</TableHead>
                  <TableHead className="w-[180px]">Contact</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Partner (Source)</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[160px]">Stage</TableHead>
                  <TableHead>Received</TableHead>
                  <TableHead className="text-right">Actions & Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((r) => (
                  <TableRow key={r.id} className="hover:bg-slate-50/60">
                    <TableCell className="font-medium text-slate-900">{r.full_name}</TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-0.5 text-xs">
                        {r.phone && (
                          <span className="flex items-center gap-1 font-medium text-slate-700">
                            <Phone className="h-3 w-3 text-slate-400" /> {r.phone}
                          </span>
                        )}
                        {r.email && (
                          <span className="flex items-center gap-1 text-slate-500">
                            <Mail className="h-3 w-3 text-slate-400" /> {r.email}
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="capitalize text-xs font-semibold">
                      {r.product_type?.replace("_", " ")}
                    </TableCell>
                    <TableCell className="text-xs">
                      {r.partner_name ? (
                        <span className="font-semibold text-indigo-600">{r.partner_name}</span>
                      ) : (
                        r.lead_source || "Direct Website"
                      )}
                    </TableCell>
                    <TableCell className="font-semibold text-slate-800">
                      {r.amount ? `₹${Number(r.amount).toLocaleString("en-IN")}` : "—"}
                    </TableCell>
                    <TableCell>
                      <Badge className={`border font-normal ${statusBadges[r.status] || "bg-slate-100 text-slate-800"}`}>
                        {r.status}
                      </Badge>
                    </TableCell>

                    {/* Portal-based Clean Select Dropdown (Fixes Z-Index Issue) */}
                    <TableCell>
                      <Select
                        value={r.stage || "New"}
                        onValueChange={(val) => handleStageChange(r.id, val)}
                      >
                        <SelectTrigger className="h-8 text-xs bg-white border-slate-300">
                          <SelectValue placeholder="Select Stage" />
                        </SelectTrigger>
                        <SelectContent className="z-50 bg-white border shadow-md rounded-md">
                          <SelectItem value="New">New</SelectItem>
                          <SelectItem value="Contacted">Contacted</SelectItem>
                          <SelectItem value="In Progress">In Progress</SelectItem>
                          <SelectItem value="Documentation">Documentation</SelectItem>
                          <SelectItem value="Closed Won">Closed Won</SelectItem>
                          <SelectItem value="Closed Lost">Closed Lost</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>

                    <TableCell className="text-xs text-slate-500 whitespace-nowrap">
                      {new Date(r.created_at).toLocaleDateString()}
                    </TableCell>

                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        {/* Side Drawer for Notes & Progress */}
                        <NotesDrawer lead={r} onSave={(notes) => handleSaveNotes(r.id, notes)} />

                        {r.status !== "Approved" && r.status !== "Rejected" && (
                          <>
                            <Button
                              size="sm"
                              className="h-8 gap-1 bg-emerald-600 hover:bg-emerald-700 text-xs"
                              onClick={() => setSelectedLead(r)}
                            >
                              <CheckCircle2 className="h-3.5 w-3.5" /> Approve
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-8 text-xs text-red-600 hover:bg-red-50 hover:text-red-700 border-red-200"
                              onClick={() => handleReject(r.id)}
                            >
                              <XCircle className="h-3.5 w-3.5" /> Reject
                            </Button>
                          </>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </Card>

      {/* Modal 1: Generate Lead Modal */}
      {openCreateModal && (
        <CreateLeadModal
          partners={partners}
          onClose={() => setOpenCreateModal(false)}
          onSuccess={() => {
            setOpenCreateModal(false);
            loadData();
          }}
        />
      )}

      {/* Modal 2: Approve & Move to Customer Modal */}
      {selectedLead && (
        <ApproveModal
          lead={selectedLead}
          onClose={() => setSelectedLead(null)}
          onSuccess={() => {
            setSelectedLead(null);
            loadData();
          }}
        />
      )}
    </div>
  );
}

// Sub-component: Clean Side Drawer for Lead Notes
function NotesDrawer({ lead, onSave }: { lead: Lead; onSave: (notes: string) => void }) {
  const [noteText, setNoteText] = useState(lead.notes || "");
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 gap-1.5 text-xs">
          <MessageSquare className="h-3.5 w-3.5 text-slate-500" />
          Notes
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[500px] bg-white p-6">
        <SheetHeader className="text-left border-b pb-3">
          <SheetTitle className="text-lg font-bold">Lead Notes & Details</SheetTitle>
          <p className="text-xs text-slate-500">
            {lead.full_name} • <span className="capitalize">{lead.product_type}</span>
          </p>
        </SheetHeader>

        <div className="mt-6 space-y-4 text-xs">
          <div>
            <label className="font-semibold text-slate-700 mb-1 block">Activity / Comments</label>
            <Textarea
              placeholder="Type notes or comments here..."
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              className="min-h-[140px] text-xs p-3"
            />
          </div>

          <Button
            size="sm"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => {
              onSave(noteText);
              setOpen(false);
            }}
          >
            Save Notes
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

// Generate Lead Component
function CreateLeadModal({
  partners,
  onClose,
  onSuccess,
}: {
  partners: Partner[];
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    email: "",
    city: "",
    product_type: "loan",
    product_name: "",
    amount: "",
    partner_id: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      full_name: form.full_name,
      phone: form.phone || null,
      email: form.email || null,
      city: form.city || null,
      product_type: form.product_type,
      product_name: form.product_name || null,
      amount: form.amount ? Number(form.amount) : null,
      partner_id: form.partner_id || null,
      status: "New",
      lead_source: form.partner_id ? "Partner" : "Direct",
    };

    const { error } = await supabase.from("leads").insert([payload]);
    setLoading(false);

    if (!error) {
      onSuccess();
    } else {
      console.error(error);
    }
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-white">
        <DialogHeader>
          <DialogTitle>Generate New Lead</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3 py-2 text-sm">
          <div>
            <label className="text-xs font-semibold">Full Name *</label>
            <Input required value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-xs font-semibold">Phone *</label>
              <Input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </div>
            <div>
              <label className="text-xs font-semibold">Email</label>
              <Input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-xs font-semibold">Product Type</label>
              <select
                className="w-full h-9 rounded-md border border-input bg-white px-3 text-xs"
                value={form.product_type}
                onChange={(e) => setForm({ ...form, product_type: e.target.value })}
              >
                <option value="loan">Loan</option>
                <option value="mutual_fund">Mutual Fund</option>
                <option value="insurance">Insurance</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold">City</label>
              <Input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-xs font-semibold">Plan/Product Name</label>
              <Input value={form.product_name} onChange={(e) => setForm({ ...form, product_name: e.target.value })} placeholder="e.g. Home Loan / SIP" />
            </div>
            <div>
              <label className="text-xs font-semibold">Amount (₹)</label>
              <Input type="number" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold">Under Partner (Source)</label>
            <select
              className="w-full h-9 rounded-md border border-input bg-white px-3 text-xs"
              value={form.partner_id}
              onChange={(e) => setForm({ ...form, partner_id: e.target.value })}
            >
              <option value="">-- Direct Lead (No Partner) --</option>
              {partners.map((p) => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </div>
          <DialogFooter className="mt-4">
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Create Lead
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// Approve & Move Lead to Customer + Cases
function ApproveModal({ lead, onClose, onSuccess }: { lead: Lead; onClose: () => void; onSuccess: () => void }) {
  const [loading, setLoading] = useState(false);

  const handleApprove = async () => {
    setLoading(true);
    try {
      await supabase.from("leads").update({ status: "Approved" }).eq("id", lead.id);

      const { data: customerData } = await supabase.from("customers").insert({
        lead_id: lead.id,
        full_name: lead.full_name,
        phone: lead.phone,
        email: lead.email,
        city: lead.city,
        product_type: lead.product_type,
        partner_id: lead.partner_id,
        status: "Active Customer",
      }).select().single();

      if (lead.product_type === "mutual_fund") {
        await supabase.from("mf_cases").insert({
          lead_id: lead.id,
          customer_id: customerData?.id,
          full_name: lead.full_name,
          phone: lead.phone,
          email: lead.email,
          scheme_name: lead.product_name || "General Mutual Fund",
          sip_amount: lead.amount || 0,
          status: "KYC Pending",
        });
      } else if (lead.product_type === "insurance") {
        await supabase.from("insurance_cases").insert({
          lead_id: lead.id,
          customer_id: customerData?.id,
          full_name: lead.full_name,
          phone: lead.phone,
          email: lead.email,
          policy_type: lead.product_name || "Insurance Policy",
          sum_insured: lead.amount || 0,
          status: "Quote Shared",
        });
      } else {
        await supabase.from("loan_cases").insert({
          lead_id: lead.id,
          customer_id: customerData?.id,
          full_name: lead.full_name,
          phone: lead.phone,
          loan_type: lead.product_name || "Personal Loan",
          amount: lead.amount || 0,
          status: "In Process",
        });
      }

      onSuccess();
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-white">
        <DialogHeader>
          <DialogTitle>Approve Lead</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-slate-600">
          This will approve <strong className="text-slate-900">{lead.full_name}</strong> and automatically map all details into the <strong className="text-slate-900">Customer Tab</strong> and <strong className="text-slate-900">{lead.product_type?.toUpperCase()} Tab</strong>.
        </p>
        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleApprove} className="bg-emerald-600 hover:bg-emerald-700" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Confirm Approval
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}