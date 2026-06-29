// import { useMemo, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { supabase } from "@/integrations/supabase/client";
// import { toast } from "sonner";
// import { Loader2 } from "lucide-react";
// import { loans, insurance, mutualFunds } from "@/data/products";

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

// export function LeadForm({
//   productType,
//   productName,
//   buttonLabel = "Submit Enquiry",
// }: Props) {
//   const [loading, setLoading] = useState(false);

//   const [form, setForm] = useState({
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
//     "h-10 w-full rounded-lg border border-slate-700 bg-slate-800/60 px-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30";

//   const selectClass =
//     "h-10 w-full cursor-pointer rounded-lg border border-slate-700 bg-slate-800/60 px-3 text-sm text-white outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30 disabled:cursor-not-allowed disabled:opacity-50";

//   const submit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!form.name.trim()) {
//       toast.error("Full name is required");
//       return;
//     }

//     if (!form.phone.trim()) {
//       toast.error("Phone number is required");
//       return;
//     }

//     setLoading(true);

//     const chosenProduct =
//       form.loan_sub_type ||
//       form.loan_type ||
//       productName ||
//       form.product ||
//       null;

//     const { error } = await supabase.from("leads").insert({
//       full_name: form.name.trim(),
//       lead_name: form.name.trim(),
//       email: form.email.trim() || null,
//       phone: form.phone.trim(),
//       amount: form.amount ? Number(form.amount) : null,
//       loan_amount: form.amount ? Number(form.amount) : null,
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
//     <div className="w-full rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-black p-4 shadow-2xl sm:p-5">
//       <div className="mb-4">
//         <h2 className="text-xl font-bold text-white">
//           {productName ? `${productName} — Enquiry` : "Apply Now"}
//         </h2>

//         <p className="mt-1 text-xs text-slate-400">
//           Fill in your details and our expert will contact you shortly.
//         </p>
//       </div>

//       <form onSubmit={submit} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
//         <div className="sm:col-span-2">
//           <Label className="mb-1 block text-xs font-medium text-slate-300">
//             Full Name
//           </Label>

//           <Input
//             value={form.name}
//             onChange={(e) =>
//               setForm((prev) => ({ ...prev, name: e.target.value }))
//             }
//             placeholder="Enter your full name"
//             required
//             className={inputClass}
//           />
//         </div>

//         <div>
//           <Label className="mb-1 block text-xs font-medium text-slate-300">
//             Email
//           </Label>

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
//           <Label className="mb-1 block text-xs font-medium text-slate-300">
//             Phone
//           </Label>

//           <Input
//             value={form.phone}
//             onChange={(e) =>
//               setForm((prev) => ({ ...prev, phone: e.target.value }))
//             }
//             placeholder="+91 9xxxxxxxxx"
//             required
//             className={inputClass}
//           />
//         </div>

//         {isLoanFlow && (
//           <>
//             <div>
//               <Label className="mb-1 block text-xs font-medium text-slate-300">
//                 Loan Type
//               </Label>

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
//               <Label className="mb-1 block text-xs font-medium text-slate-300">
//                 Sub-Loan Type
//               </Label>

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
//             <Label className="mb-1 block text-xs font-medium text-slate-300">
//               {productLabel}
//             </Label>

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
//           <Label className="mb-1 block text-xs font-medium text-slate-300">
//             {isLoanFlow ? "Loan Amount (₹)" : "Amount (₹)"}
//           </Label>

//           <Input
//             type="number"
//             value={form.amount}
//             onChange={(e) =>
//               setForm((prev) => ({ ...prev, amount: e.target.value }))
//             }
//             placeholder="5,00,000"
//             className={inputClass}
//           />
//         </div>

//         <div>
//           <Label className="mb-1 block text-xs font-medium text-slate-300">
//             Monthly Income
//           </Label>

//           <Input
//             type="number"
//             value={form.monthly_income}
//             onChange={(e) =>
//               setForm((prev) => ({
//                 ...prev,
//                 monthly_income: e.target.value,
//               }))
//             }
//             placeholder="50,000"
//             className={inputClass}
//           />
//         </div>

//         <div className="sm:col-span-2">
//           <Label className="mb-1 block text-xs font-medium text-slate-300">
//             Message
//           </Label>

//           <Textarea
//             rows={2}
//             value={form.message}
//             onChange={(e) =>
//               setForm((prev) => ({ ...prev, message: e.target.value }))
//             }
//             placeholder="Write your message..."
//             className="min-h-[70px] resize-none rounded-lg border-slate-700 bg-slate-800/60 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus-visible:ring-sky-500"
//           />
//         </div>

//         <Button
//           type="submit"
//           disabled={loading}
//           className="h-11 rounded-lg bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition-all hover:scale-[1.01] hover:opacity-95 sm:col-span-2"
//         >
//           {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
//           {buttonLabel}
//         </Button>
//       </form>
//     </div>
//   );
// }
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { loans, insurance, mutualFunds } from "@/data/products";

type Props = {
  productType:
    | "loan"
    | "insurance"
    | "mutual_fund"
    | "contact"
    | "cibil";
  productName?: string;
  buttonLabel?: string;
};

const LOAN_TYPES: { value: string; label: string; subs: string[] }[] = [
  {
    value: "Home Loan",
    label: "Home Loan",
    subs: [
      "Home Purchase",
      "Home Construction",
      "Plot Loan",
      "Home Renovation",
      "Balance Transfer + Top-up",
    ],
  },
  {
    value: "Personal Loan",
    label: "Personal Loan",
    subs: [
      "Salaried",
      "Self-Employed",
      "Wedding",
      "Medical",
      "Travel",
      "Debt Consolidation",
    ],
  },
  {
    value: "Business Loan",
    label: "Business Loan",
    subs: ["MSME", "Working Capital", "Term Loan", "Startup", "CC / Overdraft"],
  },
  {
    value: "Car / Vehicle Loan",
    label: "Car / Vehicle Loan",
    subs: ["New Car", "Used Car", "Commercial Vehicle", "Two Wheeler"],
  },
  {
    value: "Education Loan",
    label: "Education Loan",
    subs: ["India", "Abroad", "Skill / Vocational"],
  },
  {
    value: "Loan Against Property",
    label: "Loan Against Property",
    subs: ["Residential", "Commercial", "Industrial", "LAP Overdraft"],
  },
  {
    value: "Gold Loan",
    label: "Gold Loan",
    subs: ["Bullet Repayment", "Monthly EMI"],
  },
  {
    value: "Project Loan",
    label: "Project Loan",
    subs: ["Infrastructure", "Real Estate", "Greenfield", "Brownfield"],
  },
  {
    value: "Credit Card",
    label: "Credit Card",
    subs: ["Cashback", "Travel", "Fuel", "Lifetime Free"],
  },
];

export function LeadForm({
  productType,
  productName,
  buttonLabel = "Submit Enquiry",
}: Props) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    product: productName ?? "",
    loan_type: "",
    loan_sub_type: "",
    amount: "",
    monthly_income: "",
    message: "",
  });

  const productOptions = useMemo(() => {
    if (productType === "loan") return loans;
    if (productType === "insurance") return insurance;
    if (productType === "mutual_fund") return mutualFunds;
    return [];
  }, [productType]);

  const productLabel =
    productType === "loan"
      ? "Select Loan"
      : productType === "insurance"
        ? "Select Insurance Plan"
        : productType === "mutual_fund"
          ? "Select Mutual Fund"
          : "Product";

  const isLoanFlow = productType === "loan";

  const subOptions = useMemo(
    () => LOAN_TYPES.find((loan) => loan.value === form.loan_type)?.subs ?? [],
    [form.loan_type],
  );

  const inputClass =
    "h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

  const selectClass =
    "h-11 w-full cursor-pointer rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400";

  const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-600";

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim()) {
      toast.error("Full name is required");
      return;
    }

    if (!form.phone.trim()) {
      toast.error("Phone number is required");
      return;
    }

    setLoading(true);

    const chosenProduct =
      form.loan_sub_type ||
      form.loan_type ||
      productName ||
      form.product ||
      null;

    const { error } = await supabase.from("leads").insert({
      full_name: form.name.trim(),
      lead_name: form.name.trim(),
      email: form.email.trim() || null,
      phone: form.phone.trim(),
      amount: form.amount ? Number(form.amount) : null,
      loan_amount: form.amount ? Number(form.amount) : null,
      loan_type: form.loan_type || null,
      loan_sub_type: form.loan_sub_type || null,
      message: form.message.trim() || null,
      product_type: productType === "contact" ? "loan" : productType,
      product_name: chosenProduct,
      lead_source: "Website",
      status: "New",
    });

    setLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Lead Submitted Successfully!");

    setForm({
      name: "",
      email: "",
      phone: "",
      product: productName ?? "",
      loan_type: "",
      loan_sub_type: "",
      amount: "",
      monthly_income: "",
      message: "",
    });
  };

  return (
    <div className="w-full overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#17357e] via-blue-700 to-sky-500 px-5 py-5 text-white sm:px-6">
        <h2 className="text-xl font-bold sm:text-2xl">
          {productName ? `${productName} Enquiry` : "Apply Now"}
        </h2>

        <p className="mt-1 text-sm text-white/80">
          Fill your details and our expert will contact you shortly.
        </p>
      </div>

      {/* Form Body */}
      <form onSubmit={submit} className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 sm:p-6">
        <div className="sm:col-span-2">
          <Label className={labelClass}>Full Name</Label>

          <Input
            value={form.name}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, name: e.target.value }))
            }
            placeholder="Enter your full name"
            required
            className={inputClass}
          />
        </div>

        <div>
          <Label className={labelClass}>Email</Label>

          <Input
            type="email"
            value={form.email}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, email: e.target.value }))
            }
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>

        <div>
          <Label className={labelClass}>Phone</Label>

          <Input
            value={form.phone}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, phone: e.target.value }))
            }
            placeholder="+91 9xxxxxxxxx"
            required
            className={inputClass}
          />
        </div>

        {isLoanFlow && (
          <>
            <div>
              <Label className={labelClass}>Loan Type</Label>

              <select
                value={form.loan_type}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    loan_type: e.target.value,
                    loan_sub_type: "",
                  }))
                }
                className={selectClass}
              >
                <option value="">Choose loan type</option>

                {LOAN_TYPES.map((loan) => (
                  <option key={loan.value} value={loan.value}>
                    {loan.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <Label className={labelClass}>Sub-Loan Type</Label>

              <select
                value={form.loan_sub_type}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    loan_sub_type: e.target.value,
                  }))
                }
                disabled={!form.loan_type}
                className={selectClass}
              >
                <option value="">
                  {form.loan_type ? "Choose sub-type" : "Select loan type first"}
                </option>

                {subOptions.map((sub) => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}

        {!productName && !isLoanFlow && productOptions.length > 0 && (
          <div className="sm:col-span-2">
            <Label className={labelClass}>{productLabel}</Label>

            <select
              value={form.product}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, product: e.target.value }))
              }
              className={selectClass}
            >
              <option value="">Choose a {productType.replace(/_/g, " ")}</option>

              {productOptions.map((product) => (
                <option key={product.slug} value={product.name}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          <Label className={labelClass}>
            {isLoanFlow ? "Loan Amount (₹)" : "Amount (₹)"}
          </Label>

          <Input
            type="number"
            value={form.amount}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, amount: e.target.value }))
            }
            placeholder="500000"
            className={inputClass}
          />
        </div>

        <div>
          <Label className={labelClass}>Monthly Income</Label>

          <Input
            type="number"
            value={form.monthly_income}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                monthly_income: e.target.value,
              }))
            }
            placeholder="50000"
            className={inputClass}
          />
        </div>

        <div className="sm:col-span-2">
          <Label className={labelClass}>Message</Label>

          <Textarea
            rows={3}
            value={form.message}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, message: e.target.value }))
            }
            placeholder="Write your message..."
            className="min-h-[88px] resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus-visible:ring-4 focus-visible:ring-blue-100"
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="h-12 rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.01] hover:opacity-95 sm:col-span-2"
        >
          {loading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Send className="mr-2 h-4 w-4" />
          )}
          {buttonLabel}
        </Button>
      </form>
    </div>
  );
}