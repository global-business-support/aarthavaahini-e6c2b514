// // import { createFileRoute, Link } from "@tanstack/react-router";

// // import { Header } from "@/components/site/Header";
// // import { Footer } from "@/components/site/Footer";

// // import { Card } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";

// // import {
// //   CalendarDays,
// //   ArrowRight,
// //   TrendingUp,
// //   ShieldCheck,
// //   Landmark,
// // } from "lucide-react";

// // export const Route = createFileRoute("/blogs")({
// //   component: BlogsPage,
// // });

// // function BlogsPage() {

// //   const blogs = [
// //     {
// //       title: "How to Improve Your CIBIL Score in 30 Days",
// //       description:
// //         "Learn practical ways to increase your credit score and improve your loan approval chances.",
// //       icon: TrendingUp,
// //       category: "Finance Tips",
// //       date: "May 2026",
// //       link: "/blogs/cibil-score",
// //     },

// //     {
// //       title: "Why SIP is the Smartest Investment for Beginners",
// //       description:
// //         "Understand how SIP investments help create long-term wealth with disciplined investing.",
// //       icon: ShieldCheck,
// //       category: "Mutual Funds",
// //       date: "May 2026",
// //       link: "/blogs/sip-guide",
// //     },

// //     {
// //       title: "Complete Home Loan Guide for First-Time Buyers",
// //       description:
// //         "Everything you need to know before applying for a home loan in India.",
// //       icon: Landmark,
// //       category: "Loans",
// //       date: "May 2026",
// //       link: "/blogs/home-loan-guide",
// //     },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-background">

// //       <Header />

// //       <main className="container mx-auto px-6 py-28">

// //         {/* HERO */}

// //         <div className="mx-auto max-w-3xl text-center">

// //           <h1 className="bg-linear-to-r from-[#17357e] to-blue-600 bg-clip-text font-display text-5xl font-bold text-transparent">

// //             Aarthvaahini Financial Insights

// //           </h1>

// //           <p className="mt-5 text-lg text-muted-foreground">

// //             Expert guidance on loans, insurance, investments,
// //             and financial planning.

// //           </p>

// //         </div>

// //         {/* BLOG GRID */}

// //         <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

// //           {blogs.map((blog, index) => {

// //             const Icon = blog.icon;

// //             return (

// //               <Card
// //                 key={index}
// //                 className="group overflow-hidden rounded-3xl border border/50 p-6 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-elegant"
// //               >

// //                 {/* TOP */}

// //                 <div className="flex items-center justify-between">

// //                   <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-r from-[#17357e] to-blue-600 text-white">

// //                     <Icon className="h-7 w-7" />

// //                   </div>

// //                   <span className="rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold text-[#17357e]">

// //                     {blog.category}

// //                   </span>

// //                 </div>

// //                 {/* TITLE */}

// //                 <h2 className="mt-6 text-2xl font-bold text-[#17357e]">

// //                   {blog.title}

// //                 </h2>

// //                 {/* DESCRIPTION */}

// //                 <p className="mt-4 leading-7 text-muted-foreground">

// //                   {blog.description}

// //                 </p>

// //                 {/* DATE */}

// //                 <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">

// //                   <CalendarDays className="h-4 w-4" />

// //                   {blog.date}

// //                 </div>

// //                 {/* BUTTON */}

// //               <a
// //   href={blog.link}
// //   className="mt-7 inline-flex"
// // >
// //   <Button className="rounded-xl bg-linear-to-r from-[#17357e] to-blue-600 text-white">

// //     Read More

// //     <ArrowRight className="ml-2 h-4 w-4" />

// //   </Button>
// // </a>

// //               </Card>

// //             );
// //           })}

// //         </div>

// //       </main>

// //       <Footer />

// //     </div>
// //   );
// // }
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
//         "Read financial guides, loan tips, insurance insights and investment education.",
//       icon: BookOpen,
//       link: "/blogs",
//     },
//     {
//       title: "News",
//       description:
//         "Stay updated with financial services updates, market trends and company announcements.",
//       icon: Newspaper,
//       link: "/news",
//     },
//     {
//       title: "Location Map",
//       description:
//         "Find Aarthvaahini office locations and directions for easy client visits.",
//       icon: MapPin,
//       link: "/location-map",
//     },
//     {
//       title: "Become a Partner",
//       description:
//         "Join our distribution network and grow with Aarthvaahini Financial Services.",
//       icon: Handshake,
//       link: "/become-a-partner",
//     },
//     {
//       title: "Documents List",
//       description:
//         "Check required documents for loans, insurance, mutual funds and other services.",
//       icon: FileText,
//       link: "/documents",
//     },
//     {
//       title: "Ahmedabad Address",
//       description:
//         "Ahmedabad Office: Add your complete Ahmedabad office address here.",
//       icon: Building2,
//       link: "/contact",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />

//       <main className="container mx-auto px-6 py-28">
//         {/* HERO */}
//         <div className="mx-auto max-w-3xl text-center">
//           <h1 className="bg-linear-to-r from-[#17357e] to-blue-600 bg-clip-text font-display text-4xl font-bold text-transparent sm:text-5xl">
//             Aarthvaahini Financial Insights
//           </h1>

//           <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
//             Expert guidance on loans, insurance, investments, and financial
//             planning.
//           </p>
//         </div>

//         {/* BLOG GRID */}
//         <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
//           {blogs.map((blog, index) => {
//             const Icon = blog.icon;

//             return (
//               <Card
//                 key={index}
//                 className="group overflow-hidden rounded-3xl border border-slate-200 p-6 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-elegant"
//               >
//                 <div className="flex items-center justify-between gap-4">
//                   <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-r from-[#17357e] to-blue-600 text-white">
//                     <Icon className="h-7 w-7" />
//                   </div>

//                   <span className="rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold text-[#17357e]">
//                     {blog.category}
//                   </span>
//                 </div>

//                 <h2 className="mt-6 text-2xl font-bold text-[#17357e]">
//                   {blog.title}
//                 </h2>

//                 <p className="mt-4 leading-7 text-muted-foreground">
//                   {blog.description}
//                 </p>

//                 <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
//                   <CalendarDays className="h-4 w-4" />
//                   {blog.date}
//                 </div>

//                 <Link to={blog.link} className="mt-7 inline-flex">
//                   <Button className="rounded-xl bg-linear-to-r from-[#17357e] to-blue-600 text-white">
//                     Read More
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </Button>
//                 </Link>
//               </Card>
//             );
//           })}
//         </div>

//         {/* BLOG RESOURCES SECTION */}
//         <section className="mt-20">
//           <div className="mx-auto max-w-3xl text-center">
//             <h2 className="text-3xl font-bold text-[#07142f] sm:text-4xl">
//               More from Aarthvaahini
//             </h2>

//             <p className="mt-4 text-base leading-7 text-muted-foreground">
//               Explore news, location details, partner opportunities, document
//               requirements and office information.
//             </p>
//           </div>

//           <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//             {resources.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <Card
//                   key={index}
//                   className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
//                 >
//                   <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#17357e]/10 text-[#17357e] transition group-hover:bg-[#17357e] group-hover:text-white">
//                     <Icon className="h-7 w-7" />
//                   </div>

//                   <h3 className="mt-5 text-xl font-bold text-[#17357e]">
//                     {item.title}
//                   </h3>

//                   <p className="mt-3 min-h-[72px] leading-7 text-muted-foreground">
//                     {item.description}
//                   </p>

//                   <Link
//                     to={item.link}
//                     className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#17357e] transition hover:text-blue-600"
//                   >
//                     View Details
//                     <ArrowRight className="h-4 w-4" />
//                   </Link>
//                 </Card>
//               );
//             })}
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// }
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
} from "lucide-react";

export const Route = createFileRoute("/blogs")({
  component: BlogsPage,
});

function BlogsPage() {
  const blogs = [
    {
      title: "How to Improve Your CIBIL Score in 30 Days",
      description:
        "Learn practical ways to increase your credit score and improve your loan approval chances.",
      icon: TrendingUp,
      category: "Finance Tips",
      date: "May 2026",
      link: "/blogs/cibil-score",
    },
    {
      title: "Why SIP is the Smartest Investment for Beginners",
      description:
        "Understand how SIP investments help create long-term wealth with disciplined investing.",
      icon: ShieldCheck,
      category: "Mutual Funds",
      date: "May 2026",
      link: "/blogs/sip-guide",
    },
    {
      title: "Complete Home Loan Guide for First-Time Buyers",
      description:
        "Everything you need to know before applying for a home loan in India.",
      icon: Landmark,
      category: "Loans",
      date: "May 2026",
      link: "/blogs/home-loan-guide",
    },
  ];

  const resources = [
    {
      title: "Blogs",
      description:
        "Read useful financial guides, loan tips, insurance insights and investment education.",
      icon: BookOpen,
      link: "/blogs",
      badge: "Insights",
      color: "from-[#17357e] to-blue-600",
    },
    {
      title: "News",
      description:
        "Stay updated with financial service updates, market trends and company announcements.",
      icon: Newspaper,
      link: "/news",
      badge: "Updates",
      color: "from-[#0f766e] to-emerald-500",
    },
    {
      title: "Location Map",
      description:
        "Find Aarthvaahini office locations and directions for smooth client visits.",
      icon: MapPin,
      link: "/location-map",
      badge: "Office Map",
      color: "from-[#7c2d12] to-orange-500",
    },
    {
      title: "Become a Partner",
      description:
        "Join our partner network and grow with Aarthvaahini Financial Services.",
      icon: Handshake,
      link: "/become-a-partner",
      badge: "Partner",
      color: "from-[#6d28d9] to-violet-500",
    },
    {
      title: "Documents List",
      description:
        "Check required documents for loans, insurance, mutual funds and other services.",
      icon: FileText,
      link: "/documents",
      badge: "Checklist",
      color: "from-[#be123c] to-rose-500",
    },
    {
      title: "Ahmedabad Address",
      description:
        "Ahmedabad Office: Add your complete Ahmedabad office address here.",
      icon: Building2,
      link: "/contact",
      badge: "New Office",
      color: "from-[#17357e] to-[#0ea5e9]",
    },
  ];

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

                  <Link to="/become-a-partner">
                    <Button
                      variant="outline"
                      className="h-12 rounded-xl border-white bg-transparent px-6 font-semibold text-white hover:bg-white hover:text-[#17357e]"
                    >
                      Become a Partner
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

                <Link to="/blogs/home-loan-guide" className="mt-6 inline-flex">
                  <Button className="rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 text-white">
                    Read Featured Blog
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
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

                      <Link to={blog.link} className="mt-7 inline-flex">
                        <Button className="rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 text-white">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
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

                    <Link
                      to={item.link}
                      className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#f0f5ff] px-5 py-3 text-sm font-bold text-[#17357e] transition hover:bg-[#17357e] hover:text-white"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}