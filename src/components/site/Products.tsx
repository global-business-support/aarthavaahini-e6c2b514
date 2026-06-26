// import {
//   Dialog,
//   DialogContent,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// import {
//   Banknote,
//   ShieldPlus,
//   LineChart,
//   ArrowRight,
//   Landmark,
//   FileCheck2,
//   Percent,
//   CheckCircle2,
// } from "lucide-react";

// const bankingFeatures = [
//   {
//     icon: Landmark,
//     title: "40+ bank partners",
//     desc: "Home, business and personal loan options in one place.",
//     bg: "bg-[#E3F2FD]",
//     color: "text-[#1565C0]",
//   },
//   {
//     icon: Percent,
//     title: "Low interest offers",
//     desc: "Compare rates and eligibility before you apply.",
//     bg: "bg-[#FFF4E5]",
//     color: "text-[#E65100]",
//   },
//   {
//     icon: ShieldPlus,
//     title: "Insurance protection",
//     desc: "Health, life, term and motor plans for every family.",
//     bg: "bg-[#FCE4EC]",
//     color: "text-[#AD1457]",
//   },
//   {
//     icon: FileCheck2,
//     title: "Fast processing",
//     desc: "Guided documentation with advisor support.",
//     bg: "bg-[#E8F5E9]",
//     color: "text-[#2E7D32]",
//   },
// ];

// const products = [
//   {
//     icon: Banknote,
//     name: "Easy & Fast Loan Solutions",
//     title: (
//       <>
//         Easy & Fast
//         <span className="text-gradient">
//           {" "}Loan Solutions
//         </span>
//       </>
//     ),
//     desc:
//       "Get instant access to Home Loans, Personal Loans, Business Loans, and Loan Against Property with low interest rates and quick approvals.",

//     items: [
//       "Home Loan",
//       "Personal Loan",
//       "Business Loan",
//       "Car / Vehicle Loan",
//       "Education Loan",
//       "Gold Loan",
//       "Loan Against Property",
//       "Cash Credit & Overdraft",
//     ],
//   },

//   {
//     icon: ShieldPlus,
//     name: "Complete Financial Insurance Protection",

//     title: (
//       <>
//         Complete Financial
//         <span className="text-gradient">
//           {" "}Insurance Protection
//         </span>
//       </>
//     ),

//     desc:
//       "Protect your family, health, vehicle, and future with comprehensive insurance solutions.",

//     items: [
//       "Life Insurance",
//       "Term Insurance",
//       "Health Insurance",
//       "Motor Insurance",
//       "Business Insurance",
//       "Travel Insurance",
//     ],
//   },

//   {
//     icon: LineChart,
//     name: "Smart Wealth Creation Through Mutual Funds",

//     title: (
//       <>
//         Smart Wealth Creation
//         <span className="text-gradient">
//           {" "}Through Mutual Funds
//         </span>
//       </>
//     ),

//     desc:
//       "Build long-term wealth with SIP investments and expert-guided mutual fund solutions.",

//     items: [
//       "SIP Investment",
//       "Mutual Funds",
//       "Tax Saving Investment",
//       "Wealth Management",
//     ],
//   },
// ];

// export function Products() {

//   return (

//     <section
//       id="products"
//       className="container mx-auto scroll-mt-24 px-4 py-14 sm:px-6 sm:py-24"
//     >

//       {/* TOP FEATURES */}

//       <div className="grid gap-4 rounded-4xl border border-gray-200 bg-white p-4 shadow-sm md:grid-cols-4 md:p-5">

//         {bankingFeatures.map(
//           ({ icon: Icon, title, desc, bg, color }) => (

//             <div
//               key={title}
//               className={`rounded-2xl ${bg} p-5`}
//             >

//               <Icon className={`h-6 w-6 ${color}`} />

//               <h3
//                 className={`mt-4 text-lg font-bold ${color}`}
//               >
//                 {title}
//               </h3>

//               <p className="mt-2 text-sm text-gray-600">
//                 {desc}
//               </p>

//             </div>
//           )
//         )}

//       </div>

//       {/* HEADING */}

//       <div className="mx-auto mt-12 max-w-2xl text-center sm:mt-20">

//         <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
//           Our Products
//         </span>

//         <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-4xl md:text-5xl">

//           Loans, insurance and investments,

//           <span className="text-blue-600">
//             {" "}in one place
//           </span>

//         </h2>

//         <p className="mt-4 text-gray-500">
//           Aarthvaahini Financial Services Pvt. Ltd. offers loans,
//           insurance, mutual funds, and investment solutions for
//           individuals and businesses.
//         </p>

//       </div>

//       {/* PRODUCT CARDS */}

//       <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-3">

//         {products.map(
//           ({
//             icon: Icon,
//             name,
//             title,
//             desc,
//             items,
//           }) => (

//             <Card
//               key={name}
//               className="glow-border group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
//             >

//               {/* GLOW */}

//               <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition-all duration-300 group-hover:bg-blue-500/20" />

//               <div className="relative">

//                 {/* ICON */}

//                 <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#17357e] to-blue-600 text-white shadow-lg">

//                   <Icon className="h-7 w-7" />

//                 </div>

//                 {/* TITLE */}

//                 <h3 className="mt-6 text-2xl font-bold text-gray-900">
//                   {title}
//                 </h3>

//                 {/* DESC */}

//                 <p className="mt-3 text-sm leading-6 text-gray-500">
//                   {desc}
//                 </p>

//                 {/* FEATURES */}

//                 <ul className="mt-5 grid grid-cols-2 gap-3 text-sm text-gray-700">

//                   {items.map((i) => (

//                     <li
//                       key={i}
//                       className="flex items-center gap-2"
//                     >

//                       <span className="h-2 w-2 rounded-full bg-blue-600" />

//                       {i}

//                     </li>
//                   ))}

//                 </ul>

//                 {/* VIEW FEATURES */}

//                 <Dialog>

//                   <DialogTrigger asChild>

//                     <Button
//                       variant="ghost"
//                       className="mt-6 px-0 text-blue-700 hover:bg-transparent hover:text-blue-500"
//                     >

//                       View Features

//                       <ArrowRight className="ml-2 h-4 w-4" />

//                     </Button>

//                   </DialogTrigger>

//                   {/* POPUP */}

//                   <DialogContent className="max-w-2xl overflow-hidden rounded-[32px] border-0 p-0 shadow-2xl">

//                     {/* TOP */}

//                     <div className="bg-gradient-to-r from-[#17357e] to-blue-600 p-8 text-white">

//                       <h2 className="text-3xl font-bold">
//                         {title}
//                       </h2>

//                       <p className="mt-3 text-white/80">
//                         {desc}
//                       </p>

//                     </div>

//                     {/* CONTENT */}

//                     <div className="bg-white p-8">

//                       <h3 className="mb-5 text-2xl font-bold text-[#17357e]">

//                         Features Included

//                       </h3>

//                       <ul className="space-y-4">

//                         {items.map((feature) => (

//                           <li
//                             key={feature}
//                             className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-4"
//                           >

//                             <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />

//                             <span className="text-gray-700">
//                               {feature}
//                             </span>

//                           </li>
//                         ))}

//                       </ul>

//                       {/* BOTTOM INFO */}

//                       <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#17357e]/5 to-blue-50 p-5">

//                         <div className="flex items-start gap-3">

//                           <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#17357e] text-white">

//                             <CheckCircle2 className="h-5 w-5" />

//                           </div>

//                           <div>

//                             <h4 className="text-lg font-semibold text-[#17357e]">

//                               Trusted Financial Solutions

//                             </h4>

//                             <p className="mt-1 text-sm leading-6 text-gray-600">

//                               Aarthvaahini provides fast approvals,
//                               secure documentation, expert financial
//                               guidance, and trusted partner support
//                               for all your loans, insurance, and
//                               investment needs.

//                             </p>

//                           </div>

//                         </div>

//                       </div>

//                     </div>

//                   </DialogContent>

//                 </Dialog>

//               </div>

//             </Card>
//           )
//         )}

//       </div>

//     </section>
//   );
// }
// import {
//   Dialog,
//   DialogContent,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// import {
//   Banknote,
//   ShieldPlus,
//   LineChart,
//   ArrowRight,
//   Building2,
//   Target,
//   UsersRound,
//   MapPinned,
//   CheckCircle2,
//   BriefcaseBusiness,
//   HandHeart,
// } from "lucide-react";

// const bankingFeatures = [
//   {
//     icon: Building2,
//     title: "Corporate Financial Consultants",
//     desc: "Expert consulting for Loans, Insurance, Mutual Funds, PE and Alternative Assets under one roof.",
//     bg: "bg-[#E3F2FD]",
//     color: "text-[#1565C0]",
//   },
//   {
//     icon: Target,
//     title: "Tailored Solutions",
//     desc: "Personalized financial solutions designed to meet your goals.",
//     bg: "bg-[#FFF4E5]",
//     color: "text-[#E65100]",
//   },
//   {
//     icon: UsersRound,
//     title: "Century of Experience",
//     desc: "A combined century of experience amongst our directors.",
//     bg: "bg-[#FCE4EC]",
//     color: "text-[#AD1457]",
//   },
//   {
//     icon: MapPinned,
//     title: "Multiple Offices",
//     desc: "Accessible support through multiple office locations.",
//     bg: "bg-[#E8F5E9]",
//     color: "text-[#2E7D32]",
//   },
// ];

// const products = [
//   {
//     icon: Banknote,
//     name: "Wide Range of Loans from 50+ Financiers",
//     title: (
//       <>
//         Wide Range of Loans
//         <span className="text-gradient"> from 50+ Financiers</span>
//       </>
//     ),
//     desc:
//       "Access a wide range of loan solutions from 50+ financiers with expert guidance, structured documentation and tailored options based on your financial goals.",
//     items: [
//       "Home Loan",
//       "Personal Loan",
//       "Business Loan",
//       "Car / Vehicle Loan",
//       "Education Loan",
//       "Gold Loan",
//       "Loan Against Property",
//       "Cash Credit & Overdraft",
//     ],
//   },
//   {
//     icon: ShieldPlus,
//     name: "Corporate Insurance Advisor",
//     title: (
//       <>
//         Corporate Insurance
//         <span className="text-gradient"> Advisor</span>
//       </>
//     ),
//     desc:
//       "Get expert advisory for corporate insurance, keyman insurance, tax-saving plans and assured return solutions designed for long-term protection and financial planning.",
//     items: [
//       "Corporate Insurance",
//       "Keyman Insurance",
//       "Tax Saving Plans",
//       "Assured Return Plans",
//       "Life Insurance",
//       "Health Insurance",
//       "Term Insurance",
//       "Business Insurance",
//     ],
//   },
//   {
//     icon: LineChart,
//     name: "Smart Wealth Creation",
//     title: (
//       <>
//         Smart Wealth
//         <span className="text-gradient"> Creation</span>
//       </>
//     ),
//     desc:
//       "Build long-term wealth through diversified investment solutions including mutual funds, PMS, SIF, AIF and high-yield opportunities with expert advisory support.",
//     items: [
//       "Mutual Funds",
//       "PMS",
//       "SIF",
//       "AIF",
//       "High Rental Yields",
//       "Tax Saving Investment",
//       "Wealth Management",
//       "Portfolio Review",
//     ],
//   },
//   {
//     icon: BriefcaseBusiness,
//     name: "Private Equity & Alternative Assets",
//     title: (
//       <>
//         Private Equity
//         <span className="text-gradient"> & Alternative Assets</span>
//       </>
//     ),
//     desc:
//       "Access curated opportunities across Private Equity, AIFs, PMS, Bonds, REITs, InvITs and other alternative investment solutions.",
//     items: [
//       "Private Equity",
//       "Alternative Investment Funds",
//       "PMS",
//       "Bonds & NCDs",
//       "REITs & InvITs",
//       "Structured Products",
//     ],
//   },
// ];

// export function Products() {
//   return (
//     <section
//       id="products"
//       className="container mx-auto scroll-mt-24 px-4 py-14 sm:px-6 sm:py-24"
//     >
//       {/* TOP FEATURES */}
//       <div className="grid gap-4 rounded-4xl border border-gray-200 bg-white p-4 shadow-sm md:grid-cols-4 md:p-5">
//         {bankingFeatures.map(({ icon: Icon, title, desc, bg, color }) => (
//           <div key={title} className={`rounded-2xl ${bg} p-5`}>
//             <Icon className={`h-6 w-6 ${color}`} />

//             <h3 className={`mt-4 text-lg font-bold ${color}`}>{title}</h3>

//             <p className="mt-2 text-sm leading-6 text-gray-600">{desc}</p>
//           </div>
//         ))}
//       </div>

//       {/* HEADING */}
//       <div className="mx-auto mt-12 max-w-2xl text-center sm:mt-20">
//         <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
//           Our Products
//         </span>

//         <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
//           Loans, Insurance, Wealth Solutions and
//           <span className="text-blue-600"> Alternative Investments</span>
//         </h2>

//         <p className="mt-4 text-gray-500">
//           Aarthvaahini Financial Services Pvt. Ltd. offers loans, corporate
//           insurance advisory, wealth solutions, private equity, alternative
//           assets and investment solutions for individuals and businesses.
//         </p>
//       </div>

//       {/* PRODUCT CARDS */}
//       <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
//         {products.map(({ icon: Icon, name, title, desc, items }) => (
//           <Card
//             key={name}
//             className="glow-border group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
//           >
//             {/* GLOW */}
//             <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition-all duration-300 group-hover:bg-blue-500/20" />

//             <div className="relative">
//               {/* ICON */}
//               <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#17357e] to-blue-600 text-white shadow-lg">
//                 <Icon className="h-7 w-7" />
//               </div>

//               {/* TITLE */}
//               <h3 className="mt-6 text-2xl font-bold text-gray-900">
//                 {title}
//               </h3>

//               {/* DESC */}
//               <p className="mt-3 text-sm leading-6 text-gray-500">{desc}</p>

//               {/* FEATURES */}
//               <ul className="mt-5 grid grid-cols-1 gap-3 text-sm text-gray-700 sm:grid-cols-2 lg:grid-cols-1">
//                 {items.map((item) => (
//                   <li key={item} className="flex items-center gap-2">
//                     <span className="h-2 w-2 shrink-0 rounded-full bg-blue-600" />
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>

//               {/* VIEW FEATURES */}
//               <Dialog>
//                 <DialogTrigger asChild>
//                   <Button
//                     variant="ghost"
//                     className="mt-6 px-0 text-blue-700 hover:bg-transparent hover:text-blue-500"
//                   >
//                     View Features
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </Button>
//                 </DialogTrigger>

//                 {/* POPUP */}
//                 <DialogContent className="max-w-2xl overflow-hidden rounded-[32px] border-0 p-0 shadow-2xl">
//                   {/* TOP */}
//                   <div className="bg-gradient-to-r from-[#17357e] to-blue-600 p-8 text-white">
//                     <h2 className="text-3xl font-bold">{title}</h2>

//                     <p className="mt-3 text-white/80">{desc}</p>
//                   </div>

//                   {/* CONTENT */}
//                   <div className="bg-white p-8">
//                     <h3 className="mb-5 text-2xl font-bold text-[#17357e]">
//                       Features Included
//                     </h3>

//                     <ul className="space-y-4">
//                       {items.map((feature) => (
//                         <li
//                           key={feature}
//                           className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-4"
//                         >
//                           <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />

//                           <span className="text-gray-700">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>

//                     {/* BOTTOM INFO */}
//                     <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#17357e]/5 to-blue-50 p-5">
//                       <div className="flex items-start gap-3">
//                         <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#17357e] text-white">
//                           <CheckCircle2 className="h-5 w-5" />
//                         </div>

//                         <div>
//                           <h4 className="text-lg font-semibold text-[#17357e]">
//                             Trusted Financial Solutions
//                           </h4>

//                           <p className="mt-1 text-sm leading-6 text-gray-600">
//                             Aarthvaahini provides structured financial
//                             consulting, secure documentation, expert guidance
//                             and trusted partner support for loans, corporate
//                             insurance advisory, wealth solutions, private
//                             equity and alternative investment needs.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </DialogContent>
//               </Dialog>
//             </div>
//           </Card>
//         ))}
//       </div>

//       {/* CSR PLACEHOLDER */}
//       <div className="mt-14 rounded-[28px] border border-blue-100 bg-gradient-to-r from-blue-50 to-sky-50 p-6 text-center sm:p-8">
//         <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
//           <HandHeart className="h-7 w-7" />
//         </div>

//         <span className="mt-5 block text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
//           CSR Initiatives
//         </span>

//         <h3 className="mt-3 text-2xl font-bold text-gray-900">
//           Community and CSR Activities
//         </h3>

//         <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600">
//           This section is reserved for future CSR activities, community
//           initiatives, financial awareness programs and social impact updates by
//           Aarthvaahini.
//         </p>
//       </div>
//     </section>
//   );
// }
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  Banknote,
  ShieldPlus,
  LineChart,
  ArrowRight,
  Building2,
  Target,
  UsersRound,
  MapPinned,
  CheckCircle2,
  BriefcaseBusiness,
  HandHeart,
} from "lucide-react";

const bankingFeatures = [
  {
    icon: Building2,
    title: "Corporate Financial Consultants",
    desc: "Expert consulting for Loans, Insurance, Mutual Funds, PE and Alternative Assets under one roof.",
    bg: "bg-[#E3F2FD]",
    color: "text-[#1565C0]",
  },
  {
    icon: Target,
    title: "Tailored Solutions",
    desc: "Personalized financial solutions designed to meet your goals.",
    bg: "bg-[#FFF4E5]",
    color: "text-[#E65100]",
  },
  {
    icon: UsersRound,
    title: "Century of Experience",
    desc: "A combined century of experience amongst our directors.",
    bg: "bg-[#FCE4EC]",
    color: "text-[#AD1457]",
  },
  {
    icon: MapPinned,
    title: "Multiple Offices",
    desc: "Accessible support through multiple office locations.",
    bg: "bg-[#E8F5E9]",
    color: "text-[#2E7D32]",
  },
];

const products = [
  {
    icon: Banknote,
    name: "Wide Range of Loans from 50+ Financiers",
    title: (
      <>
        Wide Range of Loans
        <span className="text-gradient"> from 50+ Financiers</span>
      </>
    ),
    desc:
      "Access a wide range of loan solutions from 50+ financiers with expert guidance, structured documentation and tailored options based on your financial goals.",
    items: [
      "Home Loan",
      "Personal Loan",
      "Business Loan",
      "Car / Vehicle Loan",
      "Education Loan",
      "Gold Loan",
      "Loan Against Property",
      "Cash Credit & Overdraft",
    ],
  },
  {
    icon: ShieldPlus,
    name: "Corporate Insurance Advisor",
    title: (
      <>
        Corporate Insurance
        <span className="text-gradient"> Advisor</span>
      </>
    ),
    desc:
      "Get expert advisory for corporate insurance, keyman insurance, tax-saving plans and assured return solutions designed for long-term protection and financial planning.",
    items: [
      "Corporate Insurance",
      "Keyman Insurance",
      "Tax Saving Plans",
      "Assured Return Plans",
      "Life Insurance",
      "Health Insurance",
      "Term Insurance",
      "Business Insurance",
    ],
  },
  {
    icon: LineChart,
    name: "Smart Wealth Creation",
    title: (
      <>
        Smart Wealth
        <span className="text-gradient"> Creation</span>
      </>
    ),
    desc:
      "Build long-term wealth through diversified investment solutions including mutual funds, PMS, SIF, AIF and high-yield opportunities with expert advisory support.",
    items: [
      "Mutual Funds",
      "PMS",
      "SIF",
      "AIF",
      "High Rental Yields",
      "Tax Saving Investment",
      "Wealth Management",
      "Portfolio Review",
    ],
  },
  {
    icon: BriefcaseBusiness,
    name: "Private Equity & Alternative Assets",
    title: (
      <>
        Private Equity
        <span className="text-gradient"> & Alternative Assets</span>
      </>
    ),
    desc:
      "Access curated opportunities across Private Equity, AIFs, PMS, Bonds, REITs, InvITs and other alternative investment solutions.",
    items: [
      "Private Equity",
      "Alternative Investment Funds",
      "PMS",
      "Bonds & NCDs",
      "REITs & InvITs",
      "Structured Products",
    ],
  },
];

export function Products() {
  return (
    <section
      id="products"
      className="container mx-auto scroll-mt-24 px-4 py-14 sm:px-6 sm:py-24"
    >
      {/* TOP FEATURES */}
      <div className="grid gap-4 rounded-4xl border border-gray-200 bg-white p-4 shadow-sm md:grid-cols-4 md:p-5">
        {bankingFeatures.map(({ icon: Icon, title, desc, bg, color }) => (
          <div key={title} className={`rounded-2xl ${bg} p-5`}>
            <Icon className={`h-6 w-6 ${color}`} />

            <h3 className={`mt-4 text-lg font-bold ${color}`}>
              {title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              {desc}
            </p>
          </div>
        ))}
      </div>

      {/* HEADING */}
      <div className="mx-auto mt-12 max-w-2xl text-center sm:mt-20">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Our Products
        </span>

        <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
          Loans, Insurance, Wealth Solutions and
          <span className="text-blue-600"> Alternative assets</span>
        </h2>

        <p className="mt-4 text-gray-500">
          Aarthvaahini Financial Services Pvt. Ltd. offers loans, corporate
          insurance advisory, wealth solutions, private equity, alternative
          assets and investment solutions for individuals and businesses.
        </p>
      </div>

      {/* PRODUCT CARDS */}
      <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
        {products.map(({ icon: Icon, name, title, desc, items }) => (
          <Card
            key={name}
            className="glow-border group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
          >
            {/* GLOW */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition-all duration-300 group-hover:bg-blue-500/20" />

            <div className="relative">
              {/* ICON */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#17357e] to-blue-600 text-white shadow-lg">
                <Icon className="h-7 w-7" />
              </div>

              {/* TITLE */}
              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {title}
              </h3>

              {/* DESC */}
              <p className="mt-3 text-sm leading-6 text-gray-500">
                {desc}
              </p>

              {/* FEATURES */}
              <ul className="mt-5 grid grid-cols-1 gap-3 text-sm text-gray-700 sm:grid-cols-2 lg:grid-cols-1">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* VIEW FEATURES */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    type="button"
                    variant="ghost"
                    className="mt-6 px-0 text-blue-700 hover:bg-transparent hover:text-blue-500"
                  >
                    View Features
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </DialogTrigger>

                {/* SCROLLABLE POPUP */}
                <DialogContent className="max-h-[88vh] w-[94vw] max-w-2xl overflow-hidden rounded-[32px] border-0 p-0 shadow-2xl">
                  <div className="max-h-[88vh] overflow-y-auto">
                    {/* TOP */}
                    <div className="bg-gradient-to-r from-[#17357e] to-blue-600 p-6 text-white sm:p-8">
                      <h2 className="text-2xl font-bold sm:text-3xl">
                        {title}
                      </h2>

                      <p className="mt-3 text-sm leading-6 text-white/80 sm:text-base">
                        {desc}
                      </p>
                    </div>

                    {/* CONTENT */}
                    <div className="bg-white p-5 sm:p-8">
                      <h3 className="mb-5 text-xl font-bold text-[#17357e] sm:text-2xl">
                        Features Included
                      </h3>

                      <ul className="space-y-3 sm:space-y-4">
                        {items.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-4"
                          >
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />

                            <span className="text-sm text-gray-700 sm:text-base">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* BOTTOM INFO */}
                      <div className="mt-6 rounded-2xl bg-gradient-to-r from-[#17357e]/5 to-blue-50 p-4 sm:mt-8 sm:p-5">
                        <div className="flex items-start gap-3">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#17357e] text-white">
                            <CheckCircle2 className="h-5 w-5" />
                          </div>

                          <div>
                            <h4 className="text-base font-semibold text-[#17357e] sm:text-lg">
                              Trusted Financial Solutions
                            </h4>

                            <p className="mt-1 text-sm leading-6 text-gray-600">
                              Aarthvaahini provides structured financial
                              consulting, secure documentation, expert guidance
                              and trusted partner support for loans, corporate
                              insurance advisory, wealth solutions, private
                              equity and alternative investment needs.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </Card>
        ))}
      </div>

      {/* CSR PLACEHOLDER */}
      <div className="mt-14 rounded-[28px] border border-blue-100 bg-gradient-to-r from-blue-50 to-sky-50 p-6 text-center sm:p-8">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
          <HandHeart className="h-7 w-7" />
        </div>

        <span className="mt-5 block text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          CSR Initiatives
        </span>

        <h3 className="mt-3 text-2xl font-bold text-gray-900">
          Community and CSR Activities
        </h3>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600">
          This section is reserved for future CSR activities, community
          initiatives, financial awareness programs and social impact updates by
          Aarthvaahini.
        </p>
      </div>
    </section>
  );
}