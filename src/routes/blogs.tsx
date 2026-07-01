// import { createFileRoute, Link } from "@tanstack/react-router";

// import { Header } from "@/components/site/Header";
// import { Footer } from "@/components/site/Footer";

// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// import {
//   CalendarDays,
//   ArrowRight,
//   TrendingUp,
//   ShieldCheck,
//   Landmark,
//   Newspaper,
//   MapPin,
//   Handshake,
//   FileText,
//   BookOpen,
//   Building2,
//   Sparkles,
// } from "lucide-react";

// export const Route = createFileRoute("/blogs")({
//   component: BlogsPage,
// });

// function BlogsPage() {
//   const blogs = [
//     {
//       title: "How to Improve Your CIBIL Score in 30 Days",
//       description:
//         "Learn practical ways to increase your credit score and improve your loan approval chances.",
//       icon: TrendingUp,
//       category: "Finance Tips",
//       date: "May 2026",
//       link: "/blogs/cibil-score",
//     },
//     {
//       title: "Why SIP is the Smartest Investment for Beginners",
//       description:
//         "Understand how SIP investments help create long-term wealth with disciplined investing.",
//       icon: ShieldCheck,
//       category: "Mutual Funds",
//       date: "May 2026",
//       link: "/blogs/sip-guide",
//     },
//     {
//       title: "Complete Home Loan Guide for First-Time Buyers",
//       description:
//         "Everything you need to know before applying for a home loan in India.",
//       icon: Landmark,
//       category: "Loans",
//       date: "May 2026",
//       link: "/blogs/home-loan-guide",
//     },
//   ];

//   const resources = [
//     {
//       title: "Blogs",
//       description:
//         "Read useful financial guides, loan tips, insurance insights and investment education.",
//       icon: BookOpen,
//       link: "/blogs",
//       badge: "Insights",
//       color: "from-[#17357e] to-blue-600",
//     },
//     {
//       title: "News",
//       description:
//         "Stay updated with financial service updates, market trends and company announcements.",
//       icon: Newspaper,
//       link: "/news",
//       badge: "Updates",
//       color: "from-[#0f766e] to-emerald-500",
//     },
//     {
//       title: "Location Map",
//       description:
//         "Find Aarthvaahini office locations and directions for smooth client visits.",
//       icon: MapPin,
//       link: "/location-map",
//       badge: "Office Map",
//       color: "from-[#7c2d12] to-orange-500",
//     },
//     {
//       title: "Become a Partner",
//       description:
//         "Join our partner network and grow with Aarthvaahini Financial Services.",
//       icon: Handshake,
//       link: "/become-a-partner",
//       badge: "Partner",
//       color: "from-[#6d28d9] to-violet-500",
//     },
//     {
//       title: "Documents List",
//       description:
//         "Check required documents for loans, insurance, mutual funds and other services.",
//       icon: FileText,
//       link: "/documents",
//       badge: "Checklist",
//       color: "from-[#be123c] to-rose-500",
//     },
//     {
//       title: "Ahmedabad Address",
//       description:
//         "Ahmedabad Office: Add your complete Ahmedabad office address here.",
//       icon: Building2,
//       link: "/contact",
//       badge: "New Office",
//       color: "from-[#17357e] to-[#0ea5e9]",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#f8fbff]">
//       <Header />

//       <main className="pt-24">
//         {/* HERO */}
//         <section className="relative overflow-hidden bg-gradient-to-br from-[#07142f] via-[#17357e] to-blue-700 px-6 py-20 text-white">
//           <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
//           <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />

//           <div className="relative mx-auto max-w-6xl">
//             <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur">
//               <Sparkles className="h-4 w-4" />
//               Aarthvaahini Knowledge Hub
//             </div>

//             <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
//               <div>
//                 <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
//                   Financial Insights, News & Resources
//                 </h1>

//                 <p className="mt-6 max-w-2xl text-base leading-8 text-blue-50 sm:text-lg">
//                   Explore expert guidance on loans, insurance, mutual funds,
//                   partner opportunities, documents and office location details.
//                 </p>

//                 <div className="mt-8 flex flex-wrap gap-4">
//                   <Link to="/contact">
//                     <Button className="h-12 rounded-xl bg-white px-6 font-semibold text-[#17357e] hover:bg-blue-50">
//                       Free Consultation
//                       <ArrowRight className="ml-2 h-5 w-5" />
//                     </Button>
//                   </Link>

                  
//                 </div>
//               </div>

//               {/* FEATURED CARD */}
//               <Card className="rounded-[28px] border border-white/20 bg-white/95 p-7 shadow-2xl">
//                 <div className="flex items-center justify-between gap-4">
//                   <span className="rounded-full bg-blue-50 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#17357e]">
//                     Featured
//                   </span>

//                   <div className="flex items-center gap-2 text-sm text-slate-500">
//                     <CalendarDays className="h-4 w-4" />
//                     May 2026
//                   </div>
//                 </div>

//                 <h2 className="mt-5 text-2xl font-bold leading-snug text-[#07142f]">
//                   Complete Home Loan Guide for First-Time Buyers
//                 </h2>

//                 <p className="mt-4 leading-7 text-slate-600">
//                   Understand eligibility, documents, interest rates and smart
//                   steps before applying for a home loan in India.
//                 </p>

//                 <Link to="/blogs/home-loan-guide" className="mt-6 inline-flex">
//                   <Button className="rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 text-white">
//                     Read Featured Blog
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </Button>
//                 </Link>
//               </Card>
//             </div>
//           </div>
//         </section>

//         {/* BLOG GRID */}
//         <section className="px-6 py-16">
//           <div className="mx-auto max-w-7xl">
//             <div className="text-center">
//               <h2 className="text-3xl font-bold text-[#07142f] sm:text-4xl">
//                 Latest Financial Blogs
//               </h2>

//               <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
//                 Simple and practical articles to help you make better financial
//                 decisions.
//               </p>
//             </div>

//             <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
//               {blogs.map((blog, index) => {
//                 const Icon = blog.icon;

//                 return (
//                   <Card
//                     key={index}
//                     className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
//                   >
//                     <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-blue-50 transition group-hover:bg-blue-100" />

//                     <div className="relative z-10">
//                       <div className="flex items-center justify-between gap-4">
//                         <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#17357e] to-blue-600 text-white shadow-lg">
//                           <Icon className="h-7 w-7" />
//                         </div>

//                         <span className="rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold text-[#17357e]">
//                           {blog.category}
//                         </span>
//                       </div>

//                       <h3 className="mt-6 text-2xl font-bold leading-snug text-[#07142f]">
//                         {blog.title}
//                       </h3>

//                       <p className="mt-4 min-h-[84px] leading-7 text-slate-600">
//                         {blog.description}
//                       </p>

//                       <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
//                         <CalendarDays className="h-4 w-4" />
//                         {blog.date}
//                       </div>

//                       <Link to={blog.link} className="mt-7 inline-flex">
//                         <Button className="rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 text-white">
//                           Read More
//                           <ArrowRight className="ml-2 h-4 w-4" />
//                         </Button>
//                       </Link>
//                     </div>
//                   </Card>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//         {/* RESOURCES SECTION */}
//         <section className="bg-white px-6 py-16">
//           <div className="mx-auto max-w-7xl">
//             <div className="mx-auto max-w-3xl text-center">
//               <span className="rounded-full bg-[#17357e]/10 px-5 py-2 text-sm font-bold text-[#17357e]">
//                 Explore More
//               </span>

//               <h2 className="mt-5 text-3xl font-bold text-[#07142f] sm:text-4xl">
//                 More from Aarthvaahini
//               </h2>

//               <p className="mt-4 text-base leading-7 text-slate-600">
//                 News, location details, partner opportunities, document
//                 requirements and office information in one place.
//               </p>
//             </div>

//             <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
//               {resources.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <Card
//                     key={index}
//                     className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
//                   >
//                     <div
//                       className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${item.color}`}
//                     />

//                     <div className="flex items-start justify-between gap-4">
//                       <div
//                         className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} text-white shadow-lg`}
//                       >
//                         <Icon className="h-8 w-8" />
//                       </div>

//                       <span className="rounded-full bg-slate-100 px-4 py-1 text-xs font-bold text-slate-600">
//                         {item.badge}
//                       </span>
//                     </div>

//                     <h3 className="mt-7 text-2xl font-bold text-[#07142f]">
//                       {item.title}
//                     </h3>

//                     <p className="mt-4 min-h-[84px] leading-7 text-slate-600">
//                       {item.description}
//                     </p>

//                     <Link
//                       to={item.link}
//                       className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#f0f5ff] px-5 py-3 text-sm font-bold text-[#17357e] transition hover:bg-[#17357e] hover:text-white"
//                     >
//                       View Details
//                       <ArrowRight className="h-4 w-4" />
//                     </Link>
//                   </Card>
//                 );
//               })}
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// }
import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  CalendarDays,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Landmark,
  Newspaper,
  MapPin,
  Handshake,
  FileText,
  BookOpen,
  Building2,
  Sparkles,
  X,
  Phone,
  Mail,
  MapPinned,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/blogs")({
  component: BlogsPage,
});

type BlogItem = {
  title: string;
  description: string;
  content: string[];
  icon: typeof TrendingUp;
  category: string;
  date: string;
};

type ResourceItem = {
  title: string;
  description: string;
  icon: typeof BookOpen;
  badge: string;
  color: string;
  type:
    | "blogs"
    | "news"
    | "locations"
    | "partner"
    | "documents"
    | "ahmedabad";
};

const registeredOffice = {
  title: "Registered Office - Indore",
  address:
    "2nd Floor, Shrinath Tower, Opposite C3 Hospital, Behind C21 Mall, Vijay Nagar, Indore, Madhya Pradesh 452010",
  phone: "+91 98276 79993",
  email: "care@aarthvaahini.com",
  mapLink: "https://maps.app.goo.gl/53k5MsRLK6neMAYN8",
};

const ahmedabadOffice = {
  title: "Marketing Office - Ahmedabad",
  address:
    "1023, 10th Floor, Gala Empire, Near Doordarshan Metro Station, Drive In Road, Thaltej, Ahmedabad, Gujarat 380054",
  phone: "+91 98276 79993",
  email: "care@aarthvaahini.com",
  mapLink: "https://maps.app.goo.gl/UpDjTghw8YjZDZ9c7?g_st=iw",
};

const blogs: BlogItem[] = [
  {
    title: "How to Improve Your CIBIL Score in 30 Days",
    description:
      "Learn practical ways to increase your credit score and improve your loan approval chances.",
    icon: TrendingUp,
    category: "Finance Tips",
    date: "May 2026",
    content: [
      "A good CIBIL score helps you get faster loan approvals and better interest rate offers. Most banks and NBFCs prefer applicants with a strong repayment history and disciplined credit usage.",
      "To improve your score, always pay EMIs and credit card bills on time. Avoid unnecessary loan enquiries and keep your credit card usage below 30% of your available limit.",
      "You should also check your credit report regularly. If there is any incorrect loan, wrong payment status or duplicate entry, raise a dispute with the credit bureau and get it corrected.",
      "Improving your CIBIL score takes discipline, but small steps like timely payments, low credit usage and avoiding multiple applications can create visible improvement over time.",
    ],
  },
  {
    title: "Why SIP is the Smartest Investment for Beginners",
    description:
      "Understand how SIP investments help create long-term wealth with disciplined investing.",
    icon: ShieldCheck,
    category: "Mutual Funds",
    date: "May 2026",
    content: [
      "SIP, or Systematic Investment Plan, allows investors to invest a fixed amount regularly in mutual funds. It is a simple and disciplined way to start wealth creation.",
      "SIP is helpful for beginners because you do not need a large amount to start. You can begin with a small monthly investment and increase it as your income grows.",
      "One major benefit of SIP is rupee cost averaging. When markets go down, your SIP buys more units, and when markets go up, your investment value grows.",
      "For long-term goals like education, home purchase, retirement or wealth creation, SIP can be a smart option when selected according to your risk profile and time horizon.",
    ],
  },
  {
    title: "Complete Home Loan Guide for First-Time Buyers",
    description:
      "Everything you need to know before applying for a home loan in India.",
    icon: Landmark,
    category: "Loans",
    date: "May 2026",
    content: [
      "Buying a home is one of the biggest financial decisions. Before applying for a home loan, you should check your eligibility, income stability, credit score and repayment capacity.",
      "Important documents generally include PAN card, Aadhaar card, income proof, bank statements, property papers, employment proof and photographs.",
      "Compare loan offers from different banks and NBFCs. Check interest rate, processing fee, prepayment charges, loan tenure and EMI amount before making a decision.",
      "Aarthvaahini helps customers understand their loan options and connect with suitable financial institutions for smooth home loan processing.",
    ],
  },
];

const resources: ResourceItem[] = [
  {
    title: "Blogs",
    description:
      "Read useful financial guides, loan tips, insurance insights and investment education.",
    icon: BookOpen,
    badge: "Insights",
    color: "from-[#17357e] to-blue-600",
    type: "blogs",
  },
  {
    title: "News",
    description:
      "Stay updated with financial service updates, market trends and company announcements.",
    icon: Newspaper,
    badge: "Updates",
    color: "from-[#0f766e] to-emerald-500",
    type: "news",
  },
  {
    title: "Location Map",
    description:
      "Find Aarthvaahini office locations and directions for smooth client visits.",
    icon: MapPin,
    badge: "Office Map",
    color: "from-[#7c2d12] to-orange-500",
    type: "locations",
  },
  {
    title: "Become a Partner",
    description:
      "Join our partner network and grow with Aarthvaahini Financial Services.",
    icon: Handshake,
    badge: "Partner",
    color: "from-[#6d28d9] to-violet-500",
    type: "partner",
  },
  {
    title: "Documents List",
    description:
      "Check required documents for loans, insurance, mutual funds and other services.",
    icon: FileText,
    badge: "Checklist",
    color: "from-[#be123c] to-rose-500",
    type: "documents",
  },
  {
    title: "Ahmedabad Address",
    description:
      "View our Ahmedabad marketing office address and location details.",
    icon: Building2,
    badge: "New Office",
    color: "from-[#17357e] to-[#0ea5e9]",
    type: "ahmedabad",
  },
];

function BlogsPage() {
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | null>(null);
  const [selectedResource, setSelectedResource] =
    useState<ResourceItem | null>(null);

  return (
    <div className="min-h-screen bg-[#f8fbff]">
      <Header />

      <main className="pt-24">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#07142f] via-[#17357e] to-blue-700 px-6 py-20 text-white">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />

          <div className="relative mx-auto max-w-6xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Aarthvaahini Knowledge Hub
            </div>

            <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                  Financial Insights, News & Resources
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-blue-50 sm:text-lg">
                  Explore expert guidance on loans, insurance, mutual funds,
                  partner opportunities, documents and office location details.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button className="h-12 rounded-xl bg-white px-6 font-semibold text-[#17357e] hover:bg-blue-50">
                      Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* FEATURED CARD */}
              <Card className="rounded-[28px] border border-white/20 bg-white/95 p-7 shadow-2xl">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-blue-50 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#17357e]">
                    Featured
                  </span>

                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <CalendarDays className="h-4 w-4" />
                    May 2026
                  </div>
                </div>

                <h2 className="mt-5 text-2xl font-bold leading-snug text-[#07142f]">
                  Complete Home Loan Guide for First-Time Buyers
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  Understand eligibility, documents, interest rates and smart
                  steps before applying for a home loan in India.
                </p>

                <Button
                  onClick={() => setSelectedBlog(blogs[2])}
                  className="mt-6 rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 text-white"
                >
                  Read Featured Blog
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* BLOG GRID */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#07142f] sm:text-4xl">
                Latest Financial Blogs
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Simple and practical articles to help you make better financial
                decisions.
              </p>
            </div>

            <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
              {blogs.map((blog, index) => {
                const Icon = blog.icon;

                return (
                  <Card
                    key={index}
                    className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-blue-50 transition group-hover:bg-blue-100" />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#17357e] to-blue-600 text-white shadow-lg">
                          <Icon className="h-7 w-7" />
                        </div>

                        <span className="rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold text-[#17357e]">
                          {blog.category}
                        </span>
                      </div>

                      <h3 className="mt-6 text-2xl font-bold leading-snug text-[#07142f]">
                        {blog.title}
                      </h3>

                      <p className="mt-4 min-h-[84px] leading-7 text-slate-600">
                        {blog.description}
                      </p>

                      <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
                        <CalendarDays className="h-4 w-4" />
                        {blog.date}
                      </div>

                      <Button
                        onClick={() => setSelectedBlog(blog)}
                        className="mt-7 rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 text-white"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* RESOURCES SECTION */}
        <section className="bg-white px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <span className="rounded-full bg-[#17357e]/10 px-5 py-2 text-sm font-bold text-[#17357e]">
                Explore More
              </span>

              <h2 className="mt-5 text-3xl font-bold text-[#07142f] sm:text-4xl">
                More from Aarthvaahini
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600">
                News, location details, partner opportunities, document
                requirements and office information in one place.
              </p>
            </div>

            <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
              {resources.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Card
                    key={index}
                    className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <div
                      className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${item.color}`}
                    />

                    <div className="flex items-start justify-between gap-4">
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} text-white shadow-lg`}
                      >
                        <Icon className="h-8 w-8" />
                      </div>

                      <span className="rounded-full bg-slate-100 px-4 py-1 text-xs font-bold text-slate-600">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="mt-7 text-2xl font-bold text-[#07142f]">
                      {item.title}
                    </h3>

                    <p className="mt-4 min-h-[84px] leading-7 text-slate-600">
                      {item.description}
                    </p>

                    <button
                      type="button"
                      onClick={() => setSelectedResource(item)}
                      className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#f0f5ff] px-5 py-3 text-sm font-bold text-[#17357e] transition hover:bg-[#17357e] hover:text-white"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* BLOG POPUP */}
      {selectedBlog && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6">
          <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold text-[#17357e]">
                  {selectedBlog.category}
                </span>

                <h2 className="mt-4 text-2xl font-bold leading-snug text-[#07142f] sm:text-3xl">
                  {selectedBlog.title}
                </h2>

                <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                  <CalendarDays className="h-4 w-4" />
                  {selectedBlog.date}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedBlog(null)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">
              {selectedBlog.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact">
                <Button className="rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 text-white">
                  Apply / Enquire Now
                </Button>
              </Link>

              <Button
                variant="outline"
                onClick={() => setSelectedBlog(null)}
                className="rounded-xl"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* RESOURCE DETAILS POPUP */}
      {selectedResource && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6">
          <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold text-[#17357e]">
                  {selectedResource.badge}
                </span>

                <h2 className="mt-4 text-2xl font-bold text-[#07142f] sm:text-3xl">
                  {selectedResource.title}
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                  {selectedResource.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedResource(null)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-8">
              {selectedResource.type === "blogs" && <BlogsDetailsContent />}

              {selectedResource.type === "news" && <NewsDetailsContent />}

              {selectedResource.type === "locations" && (
                <LocationsDetailsContent />
              )}

              {selectedResource.type === "partner" && (
                <PartnerFormContent />
              )}

              {selectedResource.type === "documents" && (
                <DocumentsListContent />
              )}

              {selectedResource.type === "ahmedabad" && (
                <SingleLocationCard office={ahmedabadOffice} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function BlogsDetailsContent() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {blogs.map((blog, index) => (
        <div
          key={index}
          className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
        >
          <h3 className="text-lg font-bold text-[#07142f]">{blog.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            {blog.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function NewsDetailsContent() {
  const news = [
    "Aarthvaahini Financial Services is expanding its service network across India.",
    "Customers can explore loan, insurance and investment guidance through one trusted platform.",
    "New partner opportunities are available for finance professionals and business associates.",
  ];

  return (
    <div className="space-y-4">
      {news.map((item, index) => (
        <div
          key={index}
          className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5"
        >
          <Newspaper className="mt-1 h-5 w-5 shrink-0 text-[#17357e]" />
          <p className="leading-7 text-slate-600">{item}</p>
        </div>
      ))}
    </div>
  );
}

function LocationsDetailsContent() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <SingleLocationCard office={registeredOffice} />
      <SingleLocationCard office={ahmedabadOffice} />
    </div>
  );
}

function SingleLocationCard({
  office,
}: {
  office: {
    title: string;
    address: string;
    phone: string;
    email: string;
    mapLink: string;
  };
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#17357e] to-blue-600 text-white shadow-lg">
        <MapPinned className="h-7 w-7" />
      </div>

      <h3 className="mt-5 text-xl font-bold text-[#07142f]">{office.title}</h3>

      <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
        <div className="flex items-start gap-3">
          <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#17357e]" />
          <span>{office.address}</span>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 shrink-0 text-[#17357e]" />
          <a href={`tel:${office.phone}`} className="hover:text-[#17357e]">
            {office.phone}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 shrink-0 text-[#17357e]" />
          <a href={`mailto:${office.email}`} className="hover:text-[#17357e]">
            {office.email}
          </a>
        </div>
      </div>

      <a
        href={office.mapLink}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#17357e] px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
      >
        View on Google Maps
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

function PartnerFormContent() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
      <form className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
        <h3 className="text-xl font-bold text-[#07142f]">
          Become a Partner Form
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Fill your details and our team will connect with you.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Full Name"
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#17357e]"
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#17357e]"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#17357e]"
          />

          <input
            type="text"
            placeholder="City"
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#17357e]"
          />

          <select className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#17357e]">
            <option value="">Partnership Type</option>
            <option value="loan">Loan Partner</option>
            <option value="insurance">Insurance Partner</option>
            <option value="mutual-fund">Mutual Fund Partner</option>
            <option value="referral">Referral Partner</option>
          </select>

          <input
            type="text"
            placeholder="Experience / Business Type"
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#17357e]"
          />

          <textarea
            placeholder="Message"
            rows={4}
            className="sm:col-span-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#17357e]"
          />
        </div>

        <Button
          type="button"
          className="mt-6 rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 text-white"
        >
          Submit Partner Request
        </Button>
      </form>

      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <h3 className="text-xl font-bold text-[#07142f]">
          Partner Document List
        </h3>

        <ul className="mt-5 space-y-4 text-sm text-slate-600">
          {[
            "PAN Card",
            "Aadhaar Card",
            "Passport Size Photo",
            "Business Registration Proof, if applicable",
            "Bank Details / Cancelled Cheque",
            "GST Certificate, if applicable",
            "Office Address Proof, if applicable",
            "Experience Details / Profile",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function DocumentsListContent() {
  const documentGroups = [
    {
      title: "Loan Documents",
      items: [
        "PAN Card",
        "Aadhaar Card",
        "Passport Size Photo",
        "Last 6 Months Bank Statement",
        "Salary Slip / Income Proof",
        "ITR / Form 16, if applicable",
        "Business Proof, for self-employed",
        "Property Documents, for home loan",
      ],
    },
    {
      title: "Insurance Documents",
      items: [
        "PAN Card",
        "Aadhaar Card",
        "Passport Size Photo",
        "Nominee Details",
        "Medical Details, if required",
        "Vehicle RC, for motor insurance",
        "Previous Policy Copy, if applicable",
      ],
    },
    {
      title: "Mutual Fund Documents",
      items: [
        "PAN Card",
        "Aadhaar Card",
        "Bank Details",
        "Cancelled Cheque",
        "KYC Details",
        "Nominee Details",
        "Mobile Number and Email ID",
      ],
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {documentGroups.map((group) => (
        <div
          key={group.title}
          className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
        >
          <h3 className="text-xl font-bold text-[#07142f]">{group.title}</h3>

          <ul className="mt-5 space-y-3 text-sm text-slate-600">
            {group.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}