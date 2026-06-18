import homeLoanImg from "@/assets/home-loan.jpeg";
import personalLoanImg from "@/assets/personal-loan.jpeg";
import businessLoanImg from "@/assets/business-loan.jpeg";
import lapLoanImg from "@/assets/lap-loan.jpeg";
import carLoanImg from "@/assets/car-loan.jpeg";
import educationLoanImg from "@/assets/education-loan.jpeg";
import projectLoanImg from "@/assets/project-loan.jpeg";

import termLifeImg from "@/assets/term-life.jpeg";
import healthInsuranceImg from "@/assets/health-insurance.jpeg";
import motorInsuranceImg from "@/assets/motor-insurance.jpeg";
import travelInsuranceImg from "@/assets/travel-insurance.jpeg";
import personalAccidentImg from "@/assets/personal-accident.jpeg";
import childPlanImg from "@/assets/child-plan.jpeg";
import endowmentUlipImg from "@/assets/endowment-ulip.jpeg";

import equitySipImg from "@/assets/equity-sip.jpeg";
import elssTaxSaverImg from "@/assets/elss-tax-saver.jpeg";
import debtFundsImg from "@/assets/debt-funds.jpeg";
import hybridBalancedImg from "@/assets/hybrid-balanced.jpeg";
import internationalFundsImg from "@/assets/international-funds.jpeg";
import npsImg from "@/assets/nps.jpeg";
import sovereignGoldBondsImg from "@/assets/sovereign-gold-bonds.jpeg";
import pmsAifImg from "@/assets/pms-aif.jpeg";
import workingCapitalLoanImg from "@/assets/working-capital-loan.png";
import machineryEquipmentLoanImg from "@/assets/machinery-equipment-loan.png";

export type ProductItem = {
  slug: string;
  name: string;
  tag?: string;
  rate?: string;
  desc: string;
  features: string[];
  image?: string;
};

export const loans: ProductItem[] = [
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
      "Zero processing fee offers",
    ],
    image: homeLoanImg,
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
      "Instant in-principle approval",
    ],
    image: personalLoanImg,
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
      "Dedicated relationship manager",
    ],
    image: businessLoanImg,
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
      "Overdraft facility",
    ],
    image: lapLoanImg,
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
      "Quick disbursal",
    ],
    image: carLoanImg,
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
      "Collateral free up to ₹40L",
    ],
    image: educationLoanImg,
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
      "Customized funding solutions",
    ],
    image: projectLoanImg,
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
    "Quick approval for eligible businesses",
  ],
  image: workingCapitalLoanImg,
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
    "Suitable for MSME and manufacturing units",
  ],
  image: machineryEquipmentLoanImg,
},
];

export const insurance: ProductItem[] = [
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
      "Tax benefits under 80C + 10(10D)",
    ],
    image: termLifeImg,
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
      "OPD, maternity and no-claim bonus benefits",
    ],
    image: healthInsuranceImg,
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
      "Instant policy renewal",
    ],
    image: motorInsuranceImg,
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
      "Schengen approved plans",
    ],
    image: travelInsuranceImg,
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
      "Electrical breakdown protection",
    ],
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
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
      "Education benefit for children",
    ],
    image: personalAccidentImg,
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
      "Tax-free returns as per policy terms",
    ],
    image: childPlanImg,
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
      "Top-up investment flexibility",
    ],
    image: endowmentUlipImg,
  },
];
export const mutualFunds: ProductItem[] = [
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
      "Goal based portfolios",
    ],
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
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
      "Lump-sum + SIP",
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
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
      "Indexation benefit",
    ],
    image:
      "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=1200&q=80",
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
      "5-year horizon",
    ],
    image:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&q=80",
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
      "Fund of funds",
    ],
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80",
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
      "Annuity post 60",
    ],
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80",
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
      "RBI issued",
    ],
    image:
      "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1200&q=80",
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
      "Quarterly reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
  },
];
