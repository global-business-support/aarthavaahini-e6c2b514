import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { D as Dialog, f as DialogTrigger, a as DialogContent } from "./dialog-RBdmK4nU.mjs";
import { B as Button } from "./button-TjZkfKyC.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { L as Label } from "./label-JU3yqRBo.mjs";
import { T as Textarea } from "./textarea-DtF-dDz-.mjs";
import { u as useAuth, s as supabase } from "./router-DSDPkTTS.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { l as logoUrl } from "./logo-DoXs6W9W.mjs";
import { R as Root2, I as Item, H as Header$1, T as Trigger2, C as Content2 } from "../_libs/radix-ui__react-accordion.mjs";
import { c as cn } from "./utils-H80jjgLf.mjs";
import { C as Calculator, a7 as LogOut, V as Handshake, r as ChevronDown, aJ as X, ab as Menu, Y as House, aw as Star, ad as MessageSquare, aj as Phone, a8 as Mail, a9 as MapPin, L as Facebook, $ as Instagram, a3 as Linkedin, a6 as LogIn, a4 as LoaderCircle, aq as Send, ac as MessageCircle } from "../_libs/lucide-react.mjs";
const homeLoanImg = "/assets/home-loan-dDdEUfmq.jpeg";
const personalLoanImg = "/assets/personal-loan-BiFguqfs.jpeg";
const businessLoanImg = "/assets/business-loan-QLezjNuU.jpeg";
const lapLoanImg = "/assets/lap-loan-BeECyk4m.jpeg";
const carLoanImg = "/assets/car-loan-DSh1z3QF.jpeg";
const educationLoanImg = "/assets/education-loan-DT7IGiId.jpeg";
const projectLoanImg = "/assets/project-loan-CwxLG-Iv.jpeg";
const workingCapitalLoanImg = "/assets/working-capital-loan-B4_ft3tw.png";
const machineryEquipmentLoanImg = "/assets/machinery-equipment-loan-DDJnaQ0_.png";
const termLifeImg = "/assets/term-life-EQDuapiM.jpeg";
const healthInsuranceImg = "/assets/health-insurance-bp2ypgo3.jpeg";
const motorInsuranceImg = "/assets/motor-insurance-BAGfJJI9.jpeg";
const travelInsuranceImg = "/assets/travel-insurance-5TrTfm7p.jpeg";
const personalAccidentImg = "/assets/personal-accident-DHdN-015.jpeg";
const childPlanImg = "/assets/child-plan-zM9xafE6.jpeg";
const endowmentUlipImg = "/assets/endowment-ulip-DWw2tw17.jpeg";
const loanProtectionImg = "/assets/loan-protection-DiwIrqj_.png";
const equitySipImg = "/assets/equity-sip-Cw7w-Dd7.jpeg";
const elssTaxSaverImg = "/assets/elss-tax-saver-Aaf1BARy.jpeg";
const debtFundsImg = "/assets/debt-funds-JzbxVcGX.jpeg";
const hybridBalancedImg = "/assets/hybrid-balanced-rWKJWeF9.jpeg";
const internationalFundsImg = "/assets/international-funds-C6RtkoMr.jpeg";
const npsImg = "/assets/nps-DCNi-9gb.jpeg";
const sovereignGoldBondsImg = "/assets/sovereign-gold-bonds-Cd_EL6fr.jpeg";
const pmsAifImg = "/assets/pms-aif-CQmrkIND.jpeg";
const goldSilverEtfImg = "/assets/gold-silver-etf-CcGAIhdS.png";
const loans = [
  {
    slug: "home-loan",
    name: "Home Loan",
    rate: "8.40% p.a.*",
    tag: "Most Popular",
    desc: "Turn your dream home into reality with competitive rates from 40+ banks.",
    features: [
      "Loan up to ₹10 Cr",
      "Tenure up to 30 years",
      "Balance transfer + top-up",
      "Zero processing fee offers"
    ],
    image: homeLoanImg
  },
  {
    slug: "personal-loan",
    name: "Personal Loan",
    rate: "10.49% p.a.*",
    tag: "Quick Approval",
    desc: "Need money for a wedding, healthcare, travel or emergency? Get fast approval in just 24 hours.",
    features: [
      "Loan up to ₹40 Lakh",
      "Tenure up to 6 years",
      "Minimal paperwork",
      "Instant in-principle approval"
    ],
    image: personalLoanImg
  },
  {
    slug: "business-loan",
    name: "Business Loan",
    rate: "12.00% p.a.*",
    tag: "MSME Friendly",
    desc: "MSME, startup, or business expansion — collateral-free financing options are also available.",
    features: [
      "Loan up to ₹2 Cr",
      "Working capital + term loans",
      "GST/ITR based",
      "Dedicated relationship manager"
    ],
    image: businessLoanImg
  },
  {
    slug: "loan-against-property",
    name: "Loan Against Property",
    rate: "9.10% p.a.*",
    tag: "Property Backed",
    desc: "Apni property ki value unlock karein — lowest rates LAP me.",
    features: [
      "Loan up to ₹15 Cr",
      "Tenure up to 20 years",
      "Residential / commercial / industrial",
      "Overdraft facility"
    ],
    image: lapLoanImg
  },
  {
    slug: "car-loan",
    name: "Car Loan",
    rate: "8.75% p.a.*",
    tag: "Fast Disbursal",
    desc: "New ya used car ke liye easy EMI options ke saath quick vehicle loan.",
    features: [
      "Up to ₹1 Cr",
      "Tenure up to 7 years",
      "Pre-approved offers",
      "Quick disbursal"
    ],
    image: carLoanImg
  },
  {
    slug: "education-loan",
    name: "Education Loan",
    rate: "8.85% p.a.*",
    tag: "Student Friendly",
    desc: "Complete funding solutions for education in India or abroad.",
    features: [
      "Up to ₹1.5 Cr",
      "Moratorium period",
      "Tax benefits 80E",
      "Collateral free up to ₹40L"
    ],
    image: educationLoanImg
  },
  {
    slug: "project-loan",
    name: "Project Loan",
    rate: "Starting from 8.50%*",
    tag: "Project Funding",
    desc: "Funding solutions for MSME projects, startups, infrastructure development, and business expansion requirements.",
    features: [
      "Collateral & collateral-free options",
      "Quick approval process",
      "Long repayment tenure",
      "Customized funding solutions"
    ],
    image: projectLoanImg
  },
  {
    slug: "working-capital-loan",
    name: "Working Capital Loan",
    rate: "Starting from 11.50%*",
    tag: "Business Cash Flow",
    desc: "Short-term funding support to manage daily business operations, inventory, vendor payments and cash flow needs.",
    features: [
      "Funds for daily operations",
      "Inventory and vendor payment support",
      "Flexible repayment options",
      "Quick approval for eligible businesses"
    ],
    image: workingCapitalLoanImg
  },
  {
    slug: "machinery-equipment-loan",
    name: "Machinery & Equipment Loan",
    rate: "Starting from 10.75%*",
    tag: "Equipment Finance",
    desc: "Finance new or used machinery, tools and equipment for business expansion, production and operational growth.",
    features: [
      "Funding for machinery purchase",
      "New and used equipment finance",
      "Flexible tenure options",
      "Suitable for MSME and manufacturing units"
    ],
    image: machineryEquipmentLoanImg
  }
];
const insurance = [
  {
    slug: "term-life",
    name: "Term Life Insurance",
    rate: "₹1 Cr @ ₹500/m*",
    tag: "Recommended",
    desc: "Secure your family's future with high life cover at affordable premiums.",
    features: [
      "Cover up to ₹10 Cr",
      "Tenure up to 85 years",
      "Critical illness rider",
      "Tax benefits under 80C + 10(10D)"
    ],
    image: termLifeImg
  },
  {
    slug: "health",
    name: "Health Insurance",
    rate: "₹10 L @ ₹599/m*",
    tag: "Family Cover",
    desc: "Protect yourself and your family with cashless health insurance plans from trusted insurers.",
    features: [
      "Cover up to ₹1 Cr",
      "Cashless treatment in 10,000+ hospitals",
      "No room rent capping options",
      "OPD, maternity and no-claim bonus benefits"
    ],
    image: healthInsuranceImg
  },
  {
    slug: "motor",
    name: "Motor Insurance",
    tag: "Instant Policy",
    desc: "Comprehensive protection for car, bike and commercial vehicles with quick policy issuance.",
    features: [
      "Zero depreciation cover",
      "Engine protection add-on",
      "Roadside assistance 24x7",
      "Instant policy renewal"
    ],
    image: motorInsuranceImg
  },
  {
    slug: "travel",
    name: "Travel Insurance",
    tag: "Travel Safe",
    desc: "Complete travel protection for domestic and international trips.",
    features: [
      "Medical emergency cover",
      "Baggage loss protection",
      "Trip cancellation support",
      "Schengen approved plans"
    ],
    image: travelInsuranceImg
  },
  {
    slug: "home",
    name: "Home Insurance",
    tag: "Home Protection",
    desc: "Protect your home and belongings from fire, theft, natural calamities and accidental damage.",
    features: [
      "Structure + contents cover",
      "Fire and burglary protection",
      "Natural calamity cover",
      "Electrical breakdown protection"
    ],
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "personal-accident",
    name: "Personal Accident",
    tag: "Safety Cover",
    desc: "Financial protection against accidental death, disability and hospital expenses.",
    features: [
      "Accidental death cover",
      "Permanent disability cover",
      "Hospital cash benefit",
      "Education benefit for children"
    ],
    image: personalAccidentImg
  },
  {
    slug: "child-plan",
    name: "Child Plan",
    tag: "Future Planning",
    desc: "Plan your child's education, future milestones and long-term financial security.",
    features: [
      "Guaranteed maturity benefits",
      "Waiver of premium option",
      "Education milestone planning",
      "Tax-free returns as per policy terms"
    ],
    image: childPlanImg
  },
  {
    slug: "endowment",
    name: "Endowment / ULIP",
    tag: "Wealth + Cover",
    desc: "Insurance plus investment plans for long-term wealth creation and financial protection.",
    features: [
      "Market-linked return options",
      "Life cover with savings",
      "Partial withdrawal facility",
      "Top-up investment flexibility"
    ],
    image: endowmentUlipImg
  },
  {
    slug: "loan-protection",
    name: "Loan Protection",
    rate: "Secure Cover*",
    tag: "Loan Safety",
    desc: "Protect your loan repayment and secure your family against unexpected events with reliable loan protection coverage.",
    features: [
      "Covers outstanding loan liability",
      "Financial security for family",
      "Affordable premium options",
      "Peace of mind during repayment"
    ],
    image: loanProtectionImg
  }
];
const mutualFunds = [
  {
    slug: "equity-sip",
    name: "Equity SIP",
    rate: "Avg 14% CAGR*",
    tag: "Top Pick",
    desc: "Start from ₹500 — long-term wealth creation through disciplined SIP investments.",
    features: [
      "Large/Mid/Small cap",
      "Step-up SIP",
      "Direct plans",
      "Goal based portfolios"
    ],
    image: equitySipImg
  },
  {
    slug: "elss",
    name: "ELSS Tax Saver",
    rate: "Lock-in 3 yrs",
    tag: "Tax Saving",
    desc: "Tax savings up to ₹1.5L under Section 80C with equity-linked growth potential.",
    features: [
      "Shortest lock-in",
      "Tax free LTCG up to ₹1L",
      "Curated funds",
      "Lump-sum + SIP"
    ],
    image: elssTaxSaverImg
  },
  {
    slug: "debt",
    name: "Debt Funds",
    rate: "7-8% p.a.*",
    tag: "Low Risk",
    desc: "Stable investment option with lower risk and better liquidity than traditional savings.",
    features: [
      "Liquid / short / long term",
      "Better than FD post-tax",
      "Daily liquidity",
      "Indexation benefit"
    ],
    image: debtFundsImg
  },
  {
    slug: "hybrid",
    name: "Hybrid / Balanced",
    rate: "Balanced Growth",
    tag: "Beginner Friendly",
    desc: "A smart mix of equity and debt, suitable for balanced risk and steady growth.",
    features: [
      "Auto rebalancing",
      "Lower volatility",
      "SWP for income",
      "5-year horizon"
    ],
    image: hybridBalancedImg
  },
  {
    slug: "international",
    name: "International Funds",
    rate: "Global Exposure",
    tag: "Diversification",
    desc: "Invest in global markets and diversify your portfolio beyond India.",
    features: [
      "Geographic diversification",
      "Tech giants exposure",
      "USD appreciation",
      "Fund of funds"
    ],
    image: internationalFundsImg
  },
  {
    slug: "nps",
    name: "NPS (National Pension)",
    rate: "Extra ₹50K tax bachat",
    tag: "Retirement Plan",
    desc: "Build a retirement corpus with additional tax benefits under Section 80CCD(1B).",
    features: [
      "Lowest cost",
      "Tier 1 + Tier 2",
      "Auto/active choice",
      "Annuity post 60"
    ],
    image: npsImg
  },
  {
    slug: "sgb",
    name: "Sovereign Gold Bonds",
    rate: "2.5% Interest*",
    tag: "Gold Investment",
    desc: "Invest in gold digitally with 2.5% extra interest and government-backed safety.",
    features: [
      "No storage cost",
      "Tax free on maturity",
      "8 year tenure",
      "RBI issued"
    ],
    image: sovereignGoldBondsImg
  },
  {
    slug: "pms",
    name: "PMS & AIF (HNI)",
    rate: "₹50L+ Portfolio",
    tag: "Premium",
    desc: "Expert-managed portfolios for high-net-worth investors with customized strategies.",
    features: [
      "SEBI registered",
      "Direct stock ownership",
      "Customized strategy",
      "Quarterly reporting"
    ],
    image: pmsAifImg
  },
  {
    slug: "gold-silver-etf",
    name: "Gold / Silver ETF",
    rate: "Precious Metals",
    tag: "Smart Investment",
    desc: "Invest in gold and silver through ETFs for diversification, liquidity and long-term wealth creation.",
    features: [
      "Easy exposure to precious metals",
      "High liquidity",
      "Portfolio diversification",
      "Transparent market-linked returns"
    ],
    image: goldSilverEtfImg
  }
];
const LOAN_TYPES = [
  {
    value: "Home Loan",
    label: "Home Loan",
    subs: [
      "Home Purchase",
      "Home Construction",
      "Plot Loan",
      "Home Renovation",
      "Balance Transfer + Top-up"
    ]
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
      "Debt Consolidation"
    ]
  },
  {
    value: "Business Loan",
    label: "Business Loan",
    subs: ["MSME", "Working Capital", "Term Loan", "Startup", "CC / Overdraft"]
  },
  {
    value: "Car / Vehicle Loan",
    label: "Car / Vehicle Loan",
    subs: ["New Car", "Used Car", "Commercial Vehicle", "Two Wheeler"]
  },
  {
    value: "Education Loan",
    label: "Education Loan",
    subs: ["India", "Abroad", "Skill / Vocational"]
  },
  {
    value: "Loan Against Property",
    label: "Loan Against Property",
    subs: ["Residential", "Commercial", "Industrial", "LAP Overdraft"]
  },
  {
    value: "Gold Loan",
    label: "Gold Loan",
    subs: ["Bullet Repayment", "Monthly EMI"]
  },
  {
    value: "Project Loan",
    label: "Project Loan",
    subs: ["Infrastructure", "Real Estate", "Greenfield", "Brownfield"]
  },
  {
    value: "Credit Card",
    label: "Credit Card",
    subs: ["Cashback", "Travel", "Fuel", "Lifetime Free"]
  }
];
function LeadForm({
  productType,
  productName,
  buttonLabel = "Submit Enquiry"
}) {
  const [loading, setLoading] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    product: productName ?? "",
    loan_type: "",
    loan_sub_type: "",
    amount: "",
    monthly_income: "",
    message: ""
  });
  const productOptions = reactExports.useMemo(() => {
    if (productType === "loan") return loans;
    if (productType === "insurance") return insurance;
    if (productType === "mutual_fund") return mutualFunds;
    return [];
  }, [productType]);
  const productLabel = productType === "loan" ? "Select Loan" : productType === "insurance" ? "Select Insurance Plan" : productType === "mutual_fund" ? "Select Mutual Fund" : "Product";
  const isLoanFlow = productType === "loan";
  const subOptions = reactExports.useMemo(
    () => LOAN_TYPES.find((loan) => loan.value === form.loan_type)?.subs ?? [],
    [form.loan_type]
  );
  const inputClass = "h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100";
  const selectClass = "h-11 w-full cursor-pointer rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400";
  const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-600";
  const submit = async (e) => {
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
    const chosenProduct = form.loan_sub_type || form.loan_type || productName || form.product || null;
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
      status: "New"
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
      message: ""
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-[#17357e] via-blue-700 to-sky-500 px-5 py-5 text-white sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold sm:text-2xl", children: productName ? `${productName} Enquiry` : "Apply Now" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-white/80", children: "Fill your details and our expert will contact you shortly." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 sm:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: labelClass, children: "Full Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: form.name,
            onChange: (e) => setForm((prev) => ({ ...prev, name: e.target.value })),
            placeholder: "Enter your full name",
            required: true,
            className: inputClass
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: labelClass, children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "email",
            value: form.email,
            onChange: (e) => setForm((prev) => ({ ...prev, email: e.target.value })),
            placeholder: "you@example.com",
            className: inputClass
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: labelClass, children: "Phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: form.phone,
            onChange: (e) => setForm((prev) => ({ ...prev, phone: e.target.value })),
            placeholder: "+91 9xxxxxxxxx",
            required: true,
            className: inputClass
          }
        )
      ] }),
      isLoanFlow && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: labelClass, children: "Loan Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: form.loan_type,
              onChange: (e) => setForm((prev) => ({
                ...prev,
                loan_type: e.target.value,
                loan_sub_type: ""
              })),
              className: selectClass,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Choose loan type" }),
                LOAN_TYPES.map((loan) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: loan.value, children: loan.label }, loan.value))
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: labelClass, children: "Sub-Loan Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: form.loan_sub_type,
              onChange: (e) => setForm((prev) => ({
                ...prev,
                loan_sub_type: e.target.value
              })),
              disabled: !form.loan_type,
              className: selectClass,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: form.loan_type ? "Choose sub-type" : "Select loan type first" }),
                subOptions.map((sub) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: sub, children: sub }, sub))
              ]
            }
          )
        ] })
      ] }),
      !productName && !isLoanFlow && productOptions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: labelClass, children: productLabel }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: form.product,
            onChange: (e) => setForm((prev) => ({ ...prev, product: e.target.value })),
            className: selectClass,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: "", children: [
                "Choose a ",
                productType.replace(/_/g, " ")
              ] }),
              productOptions.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: product.name, children: product.name }, product.slug))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: labelClass, children: isLoanFlow ? "Loan Amount (₹)" : "Amount (₹)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "number",
            value: form.amount,
            onChange: (e) => setForm((prev) => ({ ...prev, amount: e.target.value })),
            placeholder: "500000",
            className: inputClass
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: labelClass, children: "Monthly Income" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "number",
            value: form.monthly_income,
            onChange: (e) => setForm((prev) => ({
              ...prev,
              monthly_income: e.target.value
            })),
            placeholder: "50000",
            className: inputClass
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: labelClass, children: "Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            rows: 3,
            value: form.message,
            onChange: (e) => setForm((prev) => ({ ...prev, message: e.target.value })),
            placeholder: "Write your message...",
            className: "min-h-[88px] resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus-visible:ring-4 focus-visible:ring-blue-100"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "submit",
          disabled: loading,
          className: "h-12 rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.01] hover:opacity-95 sm:col-span-2",
          children: [
            loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "mr-2 h-4 w-4" }),
            buttonLabel
          ]
        }
      )
    ] })
  ] });
}
const headingLogo = "/assets/heading-logo-B_STQhzt.png";
function Header() {
  const { user, signOut } = useAuth();
  const [mobileMenu, setMobileMenu] = reactExports.useState(false);
  const [showBottomNav, setShowBottomNav] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const handleScroll = () => {
      setShowBottomNav(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "fixed top-0 z-[9999] w-full border-b border-blue-100 bg-white/95 shadow-md backdrop-blur-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex h-20 items-center justify-between gap-3 px-3 sm:px-4 lg:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/",
            className: "flex min-w-0 shrink-0 items-center gap-1 overflow-visible",
            onClick: () => setMobileMenu(false),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: logoUrl,
                  alt: "Aarthvaahini Logo",
                  className: "block h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16 lg:h-[72px] lg:w-[72px]",
                  draggable: false
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: headingLogo,
                  alt: "Aarthvaahini",
                  className: "block h-10 w-[170px] shrink-0 -translate-x-5 translate-y-1 object-contain sm:h-12 sm:w-[210px] sm:-translate-x-6 lg:h-[54px] lg:w-[260px] lg:-translate-x-7",
                  draggable: false
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-2 lg:flex xl:gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/loans",
              className: "rounded-xl px-4 py-2 text-[15px] font-semibold text-[#17357e] transition hover:bg-blue-50 xl:text-base",
              children: "Loan"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/insurance",
              className: "rounded-xl px-4 py-2 text-[15px] font-semibold text-[#17357e] transition hover:bg-blue-50 xl:text-base",
              children: "Insurance"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/mutual-funds",
              className: "rounded-xl px-4 py-2 text-[15px] font-semibold text-[#17357e] transition hover:bg-blue-50 xl:text-base",
              children: "Mutual Funds"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "/#calculator",
              className: "flex items-center gap-2 rounded-xl px-4 py-2 text-[15px] font-semibold text-[#17357e] transition hover:bg-blue-50 xl:text-base",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "h-4 w-4" }),
                "Calculators"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden items-center gap-3 lg:flex", children: [
          user ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: signOut,
              className: "rounded-full bg-gradient-to-r from-red-600 to-red-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-red-700 hover:to-red-600 xl:px-7 xl:text-base",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "mr-2 h-4 w-4" }),
                "Logout"
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/partner-signup", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "flex items-center gap-2 rounded-full bg-gradient-to-r from-[#17357e] to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 xl:px-7 xl:text-base",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Handshake, { className: "h-4 w-4" }),
                "Become a Partner"
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "flex items-center gap-2 rounded-full bg-gradient-to-r from-[#17357e] to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 xl:px-7 xl:text-base",
                children: [
                  "Apply Now",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "invisible absolute right-0 top-16 z-[9999] w-72 rounded-3xl border border-gray-100 bg-white p-5 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "w-full rounded-2xl p-4 text-left transition hover:bg-blue-50",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-[#17357e]", children: "Loan Application" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: "Apply for loans" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "z-[9999] max-h-[88vh] w-[94vw] max-w-3xl overflow-y-auto rounded-3xl border-0 bg-transparent p-0 shadow-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LeadForm, { productType: "loan", productName: "Loan" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "w-full rounded-2xl p-4 text-left transition hover:bg-green-50",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-[#17357e]", children: "Insurance Application" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: "Health & Life Insurance" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "z-[9999] max-h-[88vh] w-[94vw] max-w-3xl overflow-y-auto rounded-3xl border-0 bg-transparent p-0 shadow-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  LeadForm,
                  {
                    productType: "insurance",
                    productName: "Insurance"
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "w-full rounded-2xl p-4 text-left transition hover:bg-orange-50",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-[#17357e]", children: "Mutual Fund Enquiry" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: "Start SIP & Investments" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "z-[9999] max-h-[88vh] w-[94vw] max-w-3xl overflow-y-auto rounded-3xl border-0 bg-transparent p-0 shadow-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  LeadForm,
                  {
                    productType: "mutual_fund",
                    productName: "Mutual Fund"
                  }
                ) })
              ] })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setMobileMenu((prev) => !prev),
            className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-100 text-[#17357e] lg:hidden",
            "aria-label": "Toggle mobile menu",
            children: mobileMenu ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
          }
        )
      ] }),
      mobileMenu && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-20 z-[9999] w-full border-t bg-white px-6 py-5 shadow-xl lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/loans",
            className: "font-medium text-[#17357e]",
            onClick: () => setMobileMenu(false),
            children: "Loans"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/insurance",
            className: "font-medium text-[#17357e]",
            onClick: () => setMobileMenu(false),
            children: "Insurance"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/mutual-funds",
            className: "font-medium text-[#17357e]",
            onClick: () => setMobileMenu(false),
            children: "Mutual Funds"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "/#calculator",
            className: "font-medium text-[#17357e]",
            onClick: () => setMobileMenu(false),
            children: "Calculator"
          }
        ),
        user && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              signOut();
              setMobileMenu(false);
            },
            className: "text-left font-medium text-red-600",
            children: "Logout"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/partner-signup", onClick: () => setMobileMenu(false), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "mt-2 w-full rounded-full bg-gradient-to-r from-[#17357e] to-blue-600 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Handshake, { className: "mr-2 h-4 w-4" }),
          "Become a Partner"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", onClick: () => setMobileMenu(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full rounded-full bg-gradient-to-r from-[#17357e] to-blue-600", children: "Apply Now" }) })
      ] }) })
    ] }),
    showBottomNav && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-4 left-1/2 z-[9999] flex w-[94vw] max-w-[620px] -translate-x-1/2 justify-center sm:bottom-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center justify-between gap-2 rounded-full border border-white/20 bg-white/95 px-3 py-3 shadow-2xl backdrop-blur-xl sm:gap-6 sm:px-8 sm:py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "/#hero",
          className: "flex flex-col items-center gap-1 text-[11px] font-medium text-[#17357e] transition hover:text-blue-600 sm:flex-row sm:gap-2 sm:text-base",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-5 w-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Home" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "/#testimonials",
          className: "flex flex-col items-center gap-1 text-[11px] font-medium text-[#17357e] transition hover:text-blue-600 sm:flex-row sm:gap-2 sm:text-base",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-5 w-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Testimonials" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "/#products",
          className: "flex flex-col items-center gap-1 text-[11px] font-medium text-[#17357e] transition hover:text-blue-600 sm:flex-row sm:gap-2 sm:text-base",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-5 w-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Products" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/contact",
          className: "flex flex-col items-center gap-1 text-[11px] font-medium text-[#17357e] transition hover:text-blue-600 sm:flex-row sm:gap-2 sm:text-base",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Contact" })
          ]
        }
      )
    ] }) })
  ] });
}
const Accordion = Root2;
const AccordionItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Item,
  {
    ref,
    className: cn("border-b", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Header$1, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger2,
  {
    ref,
    className: cn(
      // UNDERLINE REMOVED HERE
      "flex flex-1 items-center justify-between py-4 text-left text-sm font-medium transition-all [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = Trigger2.displayName;
const AccordionContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = Content2.displayName;
const BUSINESS_PHONE = "919000000000";
function WhatsAppFab() {
  const [open, setOpen] = reactExports.useState(false);
  const [name, setName] = reactExports.useState("");
  const [msg, setMsg] = reactExports.useState("");
  const send = () => {
    const text = `Hi Aarthvaahini Team,%0A%0AMy name is ${encodeURIComponent(name || "—")}.%0A${encodeURIComponent(msg || "I need help with your services.")}`;
    window.open(`https://wa.me/${BUSINESS_PHONE}?text=${text}`, "_blank");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3", children: [
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-72 animate-fade-in rounded-2xl border border-green-200 bg-white p-4 shadow-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-slate-900", children: "Chat with us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-green-600", children: "● Online now" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(false), className: "text-slate-400 hover:text-slate-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          value: name,
          onChange: (e) => setName(e.target.value),
          placeholder: "Your name",
          className: "mb-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-green-400"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          value: msg,
          onChange: (e) => setMsg(e.target.value),
          rows: 3,
          placeholder: "How can we help you?",
          className: "mb-3 w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-green-400"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: send,
          className: "flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-green-600",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-3.5 w-3.5" }),
            " Send on WhatsApp"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setOpen((v) => !v),
        className: cn(
          "group flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-500/40 transition-all hover:scale-110 hover:bg-green-600"
        ),
        "aria-label": "WhatsApp",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute h-14 w-14 animate-ping rounded-full bg-green-400 opacity-40" }),
          open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "relative h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "relative h-7 w-7" })
        ]
      }
    )
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { id: "contact", className: "bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "faqs", className: "border-t border-border/40 px-4 py-12 sm:px-6 sm:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-4xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl", children: [
          "Frequently",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: " Asked Questions" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base", children: "Get answers related to loans, insurance, mutual funds and investments." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 rounded-3xl bg-card p-5 shadow-soft sm:p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Accordion, { type: "single", collapsible: true, className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "item-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { children: "Which loan is best for business expansion?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { children: "Business loans and working capital loans are commonly used for expansion." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "item-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { children: "How to check home loan eligibility?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { children: "Eligibility depends on income, credit profile and repayment capacity." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "item-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { children: "Why invest in SIP?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { children: "SIP helps in disciplined wealth creation and long-term investing." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "item-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { children: "Why is insurance important?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { children: "Insurance provides financial protection during emergencies." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: "item-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { children: "Can I apply online?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { children: "Yes, you can apply online for loans, insurance and investments." })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border/40 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto grid grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.9fr_0.9fr_1.4fr_0.8fr] lg:gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: logoUrl,
              alt: "Aarthvaahini logo",
              className: "h-14 w-14 shrink-0 object-contain"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: headingLogo,
              alt: "Aarthvaahini",
              className: "ml-1 h-9 w-auto max-w-[170px] object-contain"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-[260px] text-sm leading-7 text-muted-foreground", children: "Trusted financial platform offering loans, insurance and investment solutions across India." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-foreground", children: "Products" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-col gap-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/loans", className: "transition hover:text-primary", children: "Loan" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/insurance", className: "transition hover:text-primary", children: "Insurance" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/mutual-funds",
              className: "transition hover:text-primary",
              children: "Mutual Funds"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-foreground", children: "Tools" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-col gap-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/",
              hash: "calculator",
              className: "transition hover:text-primary",
              children: "EMI Calculator"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "cibil", className: "transition hover:text-primary", children: "CIBIL Score" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "sip", className: "transition hover:text-primary", children: "SIP Planner" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-foreground", children: "Company" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-col gap-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "transition hover:text-primary", children: "About" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "transition hover:text-primary", children: "Contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/directors", className: "transition hover:text-primary", children: "Directors" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blogs", className: "transition hover:text-primary", children: "Blogs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#faqs", className: "transition hover:text-primary", children: "FAQs" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-foreground", children: "Contact Info" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-col gap-4 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "tel:+919827679993",
              className: "flex items-center gap-3 transition hover:text-primary",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 shrink-0 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+91 98276 79993" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "mailto:care@aarthvaahini.com",
              className: "flex items-center gap-3 transition hover:text-primary",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 shrink-0 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "break-all", children: "care@aarthvaahini.com" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-1 h-4 w-4 shrink-0 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "max-w-[280px] leading-6", children: "2nd Floor, Shrinath Tower, Opposite C3 Hospital, Behind C21 Mall, Vijay Nagar, Indore, MP 452010" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-foreground", children: "Follow Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-col gap-4 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://www.facebook.com/profile.php?id=61590224307837",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-center gap-3 transition hover:text-blue-600",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-5 w-5 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Facebook" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://instagram.com/aarthvaahini_fin_pvt_ltd",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-center gap-3 transition hover:text-pink-600",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-5 w-5 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Instagram" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://www.linkedin.com/company/aarthvaahini/",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-center gap-3 transition hover:text-blue-700",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-5 w-5 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "LinkedIn" })
              ]
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border/60 bg-white py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex flex-col items-center justify-between gap-3 px-6 text-center text-xs text-muted-foreground sm:flex-row sm:text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Aarthvaahini Financial Services Pvt. Ltd. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/crm/login",
          className: "inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-[12px] font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "h-3.5 w-3.5" }),
            "CRM Login"
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppFab, {})
  ] });
}
export {
  Footer as F,
  Header as H,
  LeadForm as L,
  insurance as i,
  loans as l,
  mutualFunds as m
};
