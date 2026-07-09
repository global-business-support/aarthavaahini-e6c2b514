import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { loans, insurance, mutualFunds } from "@/data/products";
import {
  sanitizeName,
  sanitizePhone10,
  validateLead,
  NAME_TITLES,
} from "@/lib/validation";

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

const cleanAmount = (value: string) =>
  value.replace(/[₹,\s]/g, "").replace(/[^\d]/g, "");

export function LeadForm({
  productType,
  productName,
  buttonLabel = "Submit Enquiry",
}: Props) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "Mr",
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
    "h-11 w-full rounded-xl border border-sky-200 bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100";

  const selectClass =
    "h-11 w-full cursor-pointer rounded-xl border border-sky-200 bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400";

  const labelClass =
    "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-700";

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    const err = validateLead({
      name: form.name,
      phone: form.phone,
      email: form.email || undefined,
    });

    if (err) {
      toast.error(err);
      return;
    }

    setLoading(true);

    const chosenProduct =
      form.loan_sub_type ||
      form.loan_type ||
      productName ||
      form.product ||
      null;

    const fullName = `${form.title} ${form.name.trim()}`;
    const amountValue = form.amount ? Number(cleanAmount(form.amount)) : null;

    const { error } = await supabase.from("leads").insert({
      full_name: fullName,
      lead_name: fullName,
      email: form.email.trim() || null,
      phone: `+91${sanitizePhone10(form.phone)}`,
      amount: amountValue,
      loan_amount: amountValue,
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
      title: "Mr",
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
    <div className="w-full overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-[0_18px_50px_rgba(14,165,233,0.18)]">
      <div className="bg-gradient-to-r from-sky-100 via-blue-100 to-cyan-100 px-5 py-5 text-slate-900 sm:px-6">
        <h2 className="text-xl font-bold text-[#17357e] sm:text-2xl">
          {productName ? `${productName} Enquiry` : "Apply Now"}
        </h2>

        <p className="mt-1 text-sm text-slate-600">
          Fill your details and our expert will contact you shortly.
        </p>
      </div>

      <form
        onSubmit={submit}
        className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 sm:p-6"
      >
        <div className="sm:col-span-2">
          <Label className={labelClass}>Full Name</Label>

          <div className="grid grid-cols-[92px_1fr] gap-2">
            <select
              value={form.title}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, title: e.target.value }))
              }
              className={selectClass}
              aria-label="Title"
            >
              {NAME_TITLES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>

            <Input
              value={form.name}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  name: sanitizeName(e.target.value),
                }))
              }
              placeholder="Enter Your Full Name"
              required
              className={inputClass}
            />
          </div>
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

          <div className="flex">
            <span className="inline-flex h-11 items-center rounded-l-xl border border-r-0 border-sky-200 bg-sky-50 px-3 text-sm font-medium text-slate-600">
              +91
            </span>

            <Input
              inputMode="numeric"
              value={form.phone}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  phone: sanitizePhone10(e.target.value),
                }))
              }
              placeholder="9xxxxxxxxx"
              required
              maxLength={10}
              className={`${inputClass} rounded-l-none`}
            />
          </div>
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
              <option value="">
                Choose a {productType.replace(/_/g, " ")}
              </option>

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
            type="text"
            inputMode="numeric"
            value={form.amount}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                amount: cleanAmount(e.target.value),
              }))
            }
            placeholder="500000"
            className={inputClass}
          />
        </div>

        <div>
          <Label className={labelClass}>Monthly Income</Label>

          <Input
            type="text"
            inputMode="numeric"
            value={form.monthly_income}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                monthly_income: cleanAmount(e.target.value),
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
            className="min-h-[86px] resize-none rounded-xl border border-sky-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus-visible:ring-4 focus-visible:ring-sky-100"
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="h-12 rounded-xl bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.01] hover:opacity-95 sm:col-span-2"
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