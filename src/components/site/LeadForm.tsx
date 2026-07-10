// import { useMemo, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { supabase } from "@/integrations/supabase/client";
// import { toast } from "sonner";
// import { Loader2, Send } from "lucide-react";
// import { loans, insurance, mutualFunds } from "@/data/products";
// import {
//   sanitizeName,
//   sanitizePhone10,
//   validateLead,
//   NAME_TITLES,
// } from "@/lib/validation";

// type Props = {
//   productType:
//     | "loan"
//     | "insurance"
//     | "mutual_fund"
//     | "contact"
//     | "cibil";
//   productName?: string;
//   buttonLabel?: string;
// };

// const LOAN_TYPES: { value: string; label: string; subs: string[] }[] = [
//   {
//     value: "Home Loan",
//     label: "Home Loan",
//     subs: [
//       "Home Purchase",
//       "Home Construction",
//       "Plot Loan",
//       "Home Renovation",
//       "Balance Transfer + Top-up",
//     ],
//   },
//   {
//     value: "Personal Loan",
//     label: "Personal Loan",
//     subs: [
//       "Salaried",
//       "Self-Employed",
//       "Wedding",
//       "Medical",
//       "Travel",
//       "Debt Consolidation",
//     ],
//   },
//   {
//     value: "Business Loan",
//     label: "Business Loan",
//     subs: ["MSME", "Working Capital", "Term Loan", "Startup", "CC / Overdraft"],
//   },
//   {
//     value: "Car / Vehicle Loan",
//     label: "Car / Vehicle Loan",
//     subs: ["New Car", "Used Car", "Commercial Vehicle", "Two Wheeler"],
//   },
//   {
//     value: "Education Loan",
//     label: "Education Loan",
//     subs: ["India", "Abroad", "Skill / Vocational"],
//   },
//   {
//     value: "Loan Against Property",
//     label: "Loan Against Property",
//     subs: ["Residential", "Commercial", "Industrial", "LAP Overdraft"],
//   },
//   {
//     value: "Gold Loan",
//     label: "Gold Loan",
//     subs: ["Bullet Repayment", "Monthly EMI"],
//   },
//   {
//     value: "Project Loan",
//     label: "Project Loan",
//     subs: ["Infrastructure", "Real Estate", "Greenfield", "Brownfield"],
//   },
//   {
//     value: "Credit Card",
//     label: "Credit Card",
//     subs: ["Cashback", "Travel", "Fuel", "Lifetime Free"],
//   },
// ];

// const cleanAmount = (value: string) =>
//   value.replace(/[₹,\s]/g, "").replace(/[^\d]/g, "");

// export function LeadForm({
//   productType,
//   productName,
//   buttonLabel = "Submit Enquiry",
// }: Props) {
//   const [loading, setLoading] = useState(false);

//   const [form, setForm] = useState({
//     title: "Mr",
//     name: "",
//     email: "",
//     phone: "",
//     product: productName ?? "",
//     loan_type: "",
//     loan_sub_type: "",
//     amount: "",
//     monthly_income: "",
//     message: "",
//   });

//   const productOptions = useMemo(() => {
//     if (productType === "loan") return loans;
//     if (productType === "insurance") return insurance;
//     if (productType === "mutual_fund") return mutualFunds;
//     return [];
//   }, [productType]);

//   const productLabel =
//     productType === "loan"
//       ? "Select Loan"
//       : productType === "insurance"
//         ? "Select Insurance Plan"
//         : productType === "mutual_fund"
//           ? "Select Mutual Fund"
//           : "Product";

//   const isLoanFlow = productType === "loan";

//   const subOptions = useMemo(
//     () => LOAN_TYPES.find((loan) => loan.value === form.loan_type)?.subs ?? [],
//     [form.loan_type],
//   );

//   const inputClass =
//     "h-11 w-full rounded-xl border border-sky-200 bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100";

//   const selectClass =
//     "h-11 w-full cursor-pointer rounded-xl border border-sky-200 bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400";

//   const labelClass =
//     "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-700";

//   const submit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const err = validateLead({
//       name: form.name,
//       phone: form.phone,
//       email: form.email || undefined,
//     });

//     if (err) {
//       toast.error(err);
//       return;
//     }

//     setLoading(true);

//     const chosenProduct =
//       form.loan_sub_type ||
//       form.loan_type ||
//       productName ||
//       form.product ||
//       null;

//     const fullName = `${form.title} ${form.name.trim()}`;
//     const amountValue = form.amount ? Number(cleanAmount(form.amount)) : null;

//     const { error } = await supabase.from("leads").insert({
//       full_name: fullName,
//       lead_name: fullName,
//       email: form.email.trim() || null,
//       phone: `+91${sanitizePhone10(form.phone)}`,
//       amount: amountValue,
//       loan_amount: amountValue,
//       loan_type: form.loan_type || null,
//       loan_sub_type: form.loan_sub_type || null,
//       message: form.message.trim() || null,
//       product_type: productType === "contact" ? "loan" : productType,
//       product_name: chosenProduct,
//       lead_source: "Website",
//       status: "New",
//     });

//     setLoading(false);

//     if (error) {
//       toast.error(error.message);
//       return;
//     }

//     toast.success("Lead Submitted Successfully!");

//     setForm({
//       title: "Mr",
//       name: "",
//       email: "",
//       phone: "",
//       product: productName ?? "",
//       loan_type: "",
//       loan_sub_type: "",
//       amount: "",
//       monthly_income: "",
//       message: "",
//     });
//   };

//   return (
//     <div className="w-full overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-[0_18px_50px_rgba(14,165,233,0.18)]">
//       <div className="bg-gradient-to-r from-sky-100 via-blue-100 to-cyan-100 px-5 py-5 text-slate-900 sm:px-6">
//         <h2 className="text-xl font-bold text-[#17357e] sm:text-2xl">
//           {productName ? `${productName} Enquiry` : "Apply Now"}
//         </h2>

//         <p className="mt-1 text-sm text-slate-600">
//           Fill your details and our expert will contact you shortly.
//         </p>
//       </div>

//       <form
//         onSubmit={submit}
//         className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 sm:p-6"
//       >
//         <div className="sm:col-span-2">
//           <Label className={labelClass}>Full Name</Label>

//           <div className="grid grid-cols-[92px_1fr] gap-2">
//             <select
//               value={form.title}
//               onChange={(e) =>
//                 setForm((prev) => ({ ...prev, title: e.target.value }))
//               }
//               className={selectClass}
//               aria-label="Title"
//             >
//               {NAME_TITLES.map((t) => (
//                 <option key={t} value={t}>
//                   {t}
//                 </option>
//               ))}
//             </select>

//             <Input
//               value={form.name}
//               onChange={(e) =>
//                 setForm((prev) => ({
//                   ...prev,
//                   name: sanitizeName(e.target.value),
//                 }))
//               }
//               placeholder="Enter Your Full Name"
//               required
//               className={inputClass}
//             />
//           </div>
//         </div>

//         <div>
//           <Label className={labelClass}>Email</Label>

//           <Input
//             type="email"
//             value={form.email}
//             onChange={(e) =>
//               setForm((prev) => ({ ...prev, email: e.target.value }))
//             }
//             placeholder="you@example.com"
//             className={inputClass}
//           />
//         </div>

//         <div>
//           <Label className={labelClass}>Phone</Label>

//           <div className="flex">
//             <span className="inline-flex h-11 items-center rounded-l-xl border border-r-0 border-sky-200 bg-sky-50 px-3 text-sm font-medium text-slate-600">
//               +91
//             </span>

//             <Input
//               inputMode="numeric"
//               value={form.phone}
//               onChange={(e) =>
//                 setForm((prev) => ({
//                   ...prev,
//                   phone: sanitizePhone10(e.target.value),
//                 }))
//               }
//               placeholder="9xxxxxxxxx"
//               required
//               maxLength={10}
//               className={`${inputClass} rounded-l-none`}
//             />
//           </div>
//         </div>

//         {isLoanFlow && (
//           <>
//             <div>
//               <Label className={labelClass}>Loan Type</Label>

//               <select
//                 value={form.loan_type}
//                 onChange={(e) =>
//                   setForm((prev) => ({
//                     ...prev,
//                     loan_type: e.target.value,
//                     loan_sub_type: "",
//                   }))
//                 }
//                 className={selectClass}
//               >
//                 <option value="">Choose loan type</option>

//                 {LOAN_TYPES.map((loan) => (
//                   <option key={loan.value} value={loan.value}>
//                     {loan.label}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <Label className={labelClass}>Sub-Loan Type</Label>

//               <select
//                 value={form.loan_sub_type}
//                 onChange={(e) =>
//                   setForm((prev) => ({
//                     ...prev,
//                     loan_sub_type: e.target.value,
//                   }))
//                 }
//                 disabled={!form.loan_type}
//                 className={selectClass}
//               >
//                 <option value="">
//                   {form.loan_type ? "Choose sub-type" : "Select loan type first"}
//                 </option>

//                 {subOptions.map((sub) => (
//                   <option key={sub} value={sub}>
//                     {sub}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </>
//         )}

//         {!productName && !isLoanFlow && productOptions.length > 0 && (
//           <div className="sm:col-span-2">
//             <Label className={labelClass}>{productLabel}</Label>

//             <select
//               value={form.product}
//               onChange={(e) =>
//                 setForm((prev) => ({ ...prev, product: e.target.value }))
//               }
//               className={selectClass}
//             >
//               <option value="">
//                 Choose a {productType.replace(/_/g, " ")}
//               </option>

//               {productOptions.map((product) => (
//                 <option key={product.slug} value={product.name}>
//                   {product.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )}

//         <div>
//           <Label className={labelClass}>
//             {isLoanFlow ? "Loan Amount (₹)" : "Amount (₹)"}
//           </Label>

//           <Input
//             type="text"
//             inputMode="numeric"
//             value={form.amount}
//             onChange={(e) =>
//               setForm((prev) => ({
//                 ...prev,
//                 amount: cleanAmount(e.target.value),
//               }))
//             }
//             placeholder="500000"
//             className={inputClass}
//           />
//         </div>

//         <div>
//           <Label className={labelClass}>Monthly Income</Label>

//           <Input
//             type="text"
//             inputMode="numeric"
//             value={form.monthly_income}
//             onChange={(e) =>
//               setForm((prev) => ({
//                 ...prev,
//                 monthly_income: cleanAmount(e.target.value),
//               }))
//             }
//             placeholder="50000"
//             className={inputClass}
//           />
//         </div>

//         <div className="sm:col-span-2">
//           <Label className={labelClass}>Message</Label>

//           <Textarea
//             rows={3}
//             value={form.message}
//             onChange={(e) =>
//               setForm((prev) => ({ ...prev, message: e.target.value }))
//             }
//             placeholder="Write your message..."
//             className="min-h-[86px] resize-none rounded-xl border border-sky-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus-visible:ring-4 focus-visible:ring-sky-100"
//           />
//         </div>

//         <Button
//           type="submit"
//           disabled={loading}
//           className="h-12 rounded-xl bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.01] hover:opacity-95 sm:col-span-2"
//         >
//           {loading ? (
//             <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//           ) : (
//             <Send className="mr-2 h-4 w-4" />
//           )}
//           {buttonLabel}
//         </Button>
//       </form>
//     </div>
//   );
// }
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type FormEvent } from "react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
} from "@/components/ui/dialog";

import { supabase } from "@/integrations/supabase/client";
import { CustomerProfileDialog } from "@/components/crm/CustomerProfileDialog";

import { Banknote, FileCheck2, Loader2, Pencil } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/crm/loans")({
  component: LoansPage,
});

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const LOAN_STAGES: string[] = [
  "New",
  "Login",
  "Closed",
  "Approved",
  "Rejected",
  "Disbursement",
];

const DOC_LIST = [
  "PAN Card",
  "Aadhaar Card",
  "Income Proof / Salary Slips",
  "Bank Statement (6 months)",
  "Photograph",
  "Address Proof",
  "ITR / Form 16",
  "Business Proof",
  "Property Documents",
];

const LOAN_TYPES = [
  "Home Loan",
  "Personal Loan",
  "Business Loan",
  "Car / Vehicle Loan",
  "Education Loan",
  "Loan Against Property",
  "Gold Loan",
  "Working Capital Loan",
  "Machinery & Equipment Loan",
  "Credit Card",
];

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

type Row = {
  id: string;
  loan_type: string;
  loan_amount: number | null;
  lender_name: string | null;
  stage: string;
  sanction_amount: number | null;
  disbursement_amount: number | null;
  requested_amount: number | null;
  tenure_months: number | null;
  interest_rate: number | null;
  notes: string | null;
  documents_checklist: Record<string, boolean> | null;
  created_at: string;
  customer_id: string | null;
  lead_id: string | null;
  customer?: {
    customer_name: string | null;
    mobile: string | null;
  } | null;
};

type LoanFormState = {
  loan_type: string;
  lender_name: string;
  stage: string;
  requested_amount: string;
  sanction_amount: string;
  disbursement_amount: string;
  tenure_months: string;
  interest_rate: string;
  notes: string;
  docs: Record<string, boolean>;
};

/* -------------------------------------------------------------------------- */
/*                                MAIN PAGE                                   */
/* -------------------------------------------------------------------------- */

function LoansPage() {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Row | null>(null);
  const [profileId, setProfileId] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("loan_cases")
      .select("*, customer:customers(customer_name, mobile)")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error(error.message);
      setRows([]);
      setLoading(false);
      return;
    }

    const activeLoanCases = ((data ?? []) as unknown as Row[]).filter(
      (row) => row.stage !== "Rejected",
    );

    setRows(activeLoanCases);
    setLoading(false);
  };

  useEffect(() => {
    load();

    const channel = supabase
      .channel("crm-loans-sync")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "loan_cases" },
        () => load(),
      )
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "customers" },
        () => load(),
      )
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "leads" },
        () => load(),
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, []);

  const stats = useMemo(() => {
    const total = rows.length;

    const sanctioned = rows.reduce((amount, row) => {
      return amount + (Number(row.sanction_amount) || 0);
    }, 0);

    const disbursed = rows.reduce((amount, row) => {
      return amount + (Number(row.disbursement_amount) || 0);
    }, 0);

    return {
      total,
      sanctioned,
      disbursed,
    };
  }, [rows]);

  const handleSaved = () => {
    setEditing(null);

    window.setTimeout(() => {
      load();
    }, 120);
  };

  return (
    <div className="space-y-4">
      {/* TOP SUMMARY CARD */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-4 py-4 text-white shadow-md">
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/15 blur-2xl" />

        <div className="relative flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
              <Banknote className="h-5 w-5" />
            </div>

            <div>
              <h1 className="text-lg font-bold">Loan Cases</h1>

              <p className="text-xs text-white/80">
                Workflow: {LOAN_STAGES.join(" → ")}
              </p>
            </div>
          </div>

          <div className="flex gap-4 text-xs">
            <div>
              <div className="text-white/70">Cases</div>
              <div className="text-lg font-bold">{stats.total}</div>
            </div>

            <div>
              <div className="text-white/70">Sanctioned</div>
              <div className="text-lg font-bold">
                ₹{(stats.sanctioned / 1e5).toFixed(1)}L
              </div>
            </div>

            <div>
              <div className="text-white/70">Disbursed</div>
              <div className="text-lg font-bold">
                ₹{(stats.disbursed / 1e5).toFixed(1)}L
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LOAN CASES TABLE */}
      <Card className="overflow-hidden rounded-2xl border-slate-200 bg-white shadow-sm">
        {loading ? (
          <div className="flex h-40 items-center justify-center">
            <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
          </div>
        ) : rows.length === 0 ? (
          <div className="p-10 text-center text-sm text-slate-500">
            No active loan cases yet. Rejected cases are moved to Rejected Leads.
          </div>
        ) : (
          <div className="w-full overflow-x-auto">
            <Table className="min-w-[1250px]">
              <TableHeader>
                <TableRow className="bg-slate-50 hover:bg-slate-50">
                  <TableHead className="w-[210px] whitespace-nowrap">Customer</TableHead>
                  <TableHead className="w-[130px] whitespace-nowrap">Mobile</TableHead>
                  <TableHead className="w-[170px] whitespace-nowrap">Loan Type</TableHead>
                  <TableHead className="w-[130px] whitespace-nowrap">Requested</TableHead>
                  <TableHead className="w-[130px] whitespace-nowrap">Sanctioned</TableHead>
                  <TableHead className="w-[130px] whitespace-nowrap">Disbursed</TableHead>
                  <TableHead className="w-[90px] whitespace-nowrap">Tenure</TableHead>
                  <TableHead className="w-[80px] whitespace-nowrap">ROI</TableHead>
                  <TableHead className="w-[150px] whitespace-nowrap">Lender</TableHead>
                  <TableHead className="w-[120px] whitespace-nowrap">Stage</TableHead>
                  <TableHead className="w-[100px] whitespace-nowrap">Docs</TableHead>
                  <TableHead className="sticky right-0 z-20 w-[90px] bg-slate-50 text-center shadow-[-8px_0_12px_-12px_rgba(15,23,42,0.45)]">
                    Edit
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {rows.map((row) => {
                  const docCount = row.documents_checklist
                    ? Object.values(row.documents_checklist).filter(Boolean).length
                    : 0;

                  return (
                    <TableRow key={row.id} className="hover:bg-emerald-50/40">
                      <TableCell className="max-w-[210px] font-medium">
                        {row.customer_id ? (
                          <button
                            type="button"
                            onClick={() => setProfileId(row.customer_id)}
                            className="block max-w-[190px] truncate text-left text-sky-700 hover:underline"
                            title={row.customer?.customer_name ?? "Customer"}
                          >
                            {row.customer?.customer_name ?? "—"}
                          </button>
                        ) : (
                          <span
                            className="block max-w-[190px] truncate"
                            title={row.customer?.customer_name ?? ""}
                          >
                            {row.customer?.customer_name ?? "—"}
                          </span>
                        )}
                      </TableCell>

                      <TableCell className="whitespace-nowrap">
                        {row.customer?.mobile ?? "—"}
                      </TableCell>

                      <TableCell>
                        <span className="block max-w-[150px] truncate" title={row.loan_type}>
                          {row.loan_type}
                        </span>
                      </TableCell>

                      <TableCell className="whitespace-nowrap">
                        {row.requested_amount
                          ? `₹${Number(row.requested_amount).toLocaleString("en-IN")}`
                          : "—"}
                      </TableCell>

                      <TableCell className="whitespace-nowrap">
                        {row.sanction_amount
                          ? `₹${Number(row.sanction_amount).toLocaleString("en-IN")}`
                          : "—"}
                      </TableCell>

                      <TableCell className="whitespace-nowrap">
                        {row.disbursement_amount
                          ? `₹${Number(row.disbursement_amount).toLocaleString("en-IN")}`
                          : "—"}
                      </TableCell>

                      <TableCell className="whitespace-nowrap">
                        {row.tenure_months ? `${row.tenure_months}m` : "—"}
                      </TableCell>

                      <TableCell className="whitespace-nowrap">
                        {row.interest_rate ? `${row.interest_rate}%` : "—"}
                      </TableCell>

                      <TableCell>
                        <span
                          className="block max-w-[130px] truncate"
                          title={row.lender_name ?? ""}
                        >
                          {row.lender_name ?? "—"}
                        </span>
                      </TableCell>

                      <TableCell>
                        <Badge variant="secondary" className="whitespace-nowrap">
                          {row.stage}
                        </Badge>
                      </TableCell>

                      <TableCell>
                        <Badge variant="outline" className="gap-1 whitespace-nowrap">
                          <FileCheck2 className="h-3 w-3" />
                          {docCount}/{DOC_LIST.length}
                        </Badge>
                      </TableCell>

                      <TableCell className="sticky right-0 z-10 bg-white text-center shadow-[-8px_0_12px_-12px_rgba(15,23,42,0.45)] group-hover:bg-emerald-50">
                        <Button
                          type="button"
                          size="icon"
                          variant="ghost"
                          onClick={() => setEditing(row)}
                          className="h-8 w-8 rounded-lg text-sky-700 hover:bg-sky-100 hover:text-sky-800"
                          title="Edit loan case"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        )}
      </Card>

      {/* EDIT LOAN DIALOG */}
      <LoanEditDialog
        row={editing}
        onClose={() => setEditing(null)}
        onSaved={handleSaved}
      />

      {/* CUSTOMER PROFILE DIALOG */}
      <CustomerProfileDialog
        open={!!profileId}
        onOpenChange={(value) => !value && setProfileId(null)}
        customerId={profileId}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              EDIT DIALOG                                   */
/* -------------------------------------------------------------------------- */

function LoanEditDialog({
  row,
  onClose,
  onSaved,
}: {
  row: Row | null;
  onClose: () => void;
  onSaved: () => void;
}) {
  const [form, setForm] = useState<LoanFormState>({
    loan_type: "",
    lender_name: "",
    stage: "New",
    requested_amount: "",
    sanction_amount: "",
    disbursement_amount: "",
    tenure_months: "",
    interest_rate: "",
    notes: "",
    docs: {},
  });

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!row) return;

    setForm({
      loan_type: row.loan_type ?? "",
      lender_name: row.lender_name ?? "",
      stage: LOAN_STAGES.includes(row.stage) ? row.stage : "New",
      requested_amount: row.requested_amount?.toString() ?? "",
      sanction_amount: row.sanction_amount?.toString() ?? "",
      disbursement_amount: row.disbursement_amount?.toString() ?? "",
      tenure_months: row.tenure_months?.toString() ?? "",
      interest_rate: row.interest_rate?.toString() ?? "",
      notes: row.notes ?? "",
      docs: row.documents_checklist ?? {},
    });
  }, [row]);

  if (!row) return null;

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setSaving(true);

    const nextStage = form.stage;

    const { error: loanError } = await supabase
      .from("loan_cases")
      .update({
        loan_type: form.loan_type,
        lender_name: form.lender_name || null,
        stage: nextStage,
        requested_amount: form.requested_amount ? Number(form.requested_amount) : null,
        sanction_amount: form.sanction_amount ? Number(form.sanction_amount) : null,
        disbursement_amount: form.disbursement_amount
          ? Number(form.disbursement_amount)
          : null,
        loan_amount: form.sanction_amount
          ? Number(form.sanction_amount)
          : form.requested_amount
            ? Number(form.requested_amount)
            : null,
        tenure_months: form.tenure_months ? Number(form.tenure_months) : null,
        interest_rate: form.interest_rate ? Number(form.interest_rate) : null,
        notes: form.notes || null,
        documents_checklist: form.docs,
      })
      .eq("id", row.id);

    if (loanError) {
      setSaving(false);
      toast.error(loanError.message);
      return;
    }

    if (nextStage === "Rejected" && row.lead_id) {
      const { error: leadError } = await supabase
        .from("leads")
        .update({ status: "Rejected" })
        .eq("id", row.lead_id);

      if (leadError) {
        setSaving(false);
        toast.error(leadError.message);
        return;
      }
    }

    setSaving(false);

    if (nextStage === "Rejected") {
      toast.success("Loan case rejected and moved to Rejected Leads");
    } else {
      toast.success("Loan case updated");
    }

    onSaved();
  };

  const inputCls =
    "h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100";

  return (
    <Dialog open={!!row} onOpenChange={(value) => !value && !saving && onClose()}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto rounded-2xl bg-white">
        <DialogHeader>
          <DialogTitle>
            Edit Loan Case — {row.customer?.customer_name ?? "Customer"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={submit} className="space-y-4">
          {/* BASIC DETAILS */}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div>
              <Label>Loan Type</Label>

              <select
                className={`${inputCls} mt-1`}
                value={form.loan_type}
                onChange={(event) =>
                  setForm({ ...form, loan_type: event.target.value })
                }
              >
                {LOAN_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <Label>Stage</Label>

              <select
                className={`${inputCls} mt-1`}
                value={form.stage}
                onChange={(event) =>
                  setForm({ ...form, stage: event.target.value })
                }
              >
                {LOAN_STAGES.map((stage) => (
                  <option key={stage} value={stage}>
                    {stage}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <Label>Lender / Bank</Label>

              <Input
                className="mt-1"
                value={form.lender_name}
                onChange={(event) =>
                  setForm({ ...form, lender_name: event.target.value })
                }
              />
            </div>

            <div>
              <Label>Requested Amount (₹)</Label>

              <Input
                type="number"
                className="mt-1"
                value={form.requested_amount}
                onChange={(event) =>
                  setForm({
                    ...form,
                    requested_amount: event.target.value,
                  })
                }
              />
            </div>

            <div>
              <Label>Sanctioned Amount (₹)</Label>

              <Input
                type="number"
                className="mt-1"
                value={form.sanction_amount}
                onChange={(event) =>
                  setForm({
                    ...form,
                    sanction_amount: event.target.value,
                  })
                }
              />
            </div>

            <div>
              <Label>Disbursed Amount (₹)</Label>

              <Input
                type="number"
                className="mt-1"
                value={form.disbursement_amount}
                onChange={(event) =>
                  setForm({
                    ...form,
                    disbursement_amount: event.target.value,
                  })
                }
              />
            </div>

            <div>
              <Label>Tenure (months)</Label>

              <Input
                type="number"
                className="mt-1"
                value={form.tenure_months}
                onChange={(event) =>
                  setForm({
                    ...form,
                    tenure_months: event.target.value,
                  })
                }
              />
            </div>

            <div>
              <Label>Interest Rate (%)</Label>

              <Input
                type="number"
                step="0.01"
                className="mt-1"
                value={form.interest_rate}
                onChange={(event) =>
                  setForm({
                    ...form,
                    interest_rate: event.target.value,
                  })
                }
              />
            </div>
          </div>

          {/* NOTES */}
          <div>
            <Label>Notes</Label>

            <Textarea
              rows={2}
              className="mt-1"
              value={form.notes}
              onChange={(event) =>
                setForm({ ...form, notes: event.target.value })
              }
            />
          </div>

          {/* DOCUMENTS */}
          <div>
            <Label className="mb-2 block">Documents Received</Label>

            <div className="grid grid-cols-1 gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3 md:grid-cols-2">
              {DOC_LIST.map((documentName) => (
                <label
                  key={documentName}
                  className="flex items-center gap-2 text-sm"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-emerald-600"
                    checked={!!form.docs[documentName]}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        docs: {
                          ...form.docs,
                          [documentName]: event.target.checked,
                        },
                      })
                    }
                  />

                  {documentName}
                </label>
              ))}
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              disabled={saving}
              onClick={onClose}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={saving}
              className="bg-emerald-600 text-white hover:bg-emerald-700"
            >
              {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save Changes
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}