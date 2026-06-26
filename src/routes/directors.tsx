// import { createFileRoute } from "@tanstack/react-router";
// import { ArrowRight, X } from "lucide-react";
// import { useState } from "react";

// import { Header } from "@/components/site/Header";
// import { Footer } from "@/components/site/Footer";

// import bipinchandraImg from "@/assets/directors/bipinchandra-malavia.png";
// import akhilImg from "@/assets/directors/akhil-jain.png";
// import vikasImg from "@/assets/directors/vikas-asawa.png";

// export const Route = createFileRoute("/directors")({
//   component: DirectorsPage,
// });

// type Director = {
//   name: string;
//   role: string;
//   image: string;
//   shortTitle: string;
//   imageClass?: string;
//   content: string[];
// };

// const directors: Director[] = [
//   {
//     name: "Bipinchandra Malavia",
//     role: "Director",
//     image: bipinchandraImg,
//     shortTitle: "Institutional Anchor",
//     content: [
//       `Bipinchandra Malavia brings a monumental 51+ years of practical, analytical experience to the Aarthvaahini boardroom. An Electrical Engineer by profession, he spent over three decades (1973 to 2006) serving as the Head of Department across various prominent manufacturing companies, mastering complex project workflows and resource management.`,
//       `Upon retiring in 2006, Bipinchandra pivoted to his core passion: wealth creation driven by the systematic monitoring of macroeconomic indicators that move global markets. At Aarthvaahini, he serves as a guiding institutional anchor, helping the company establish robust internal processes, streamline operational workflows, and scale securely without losing precision.`,
//     ],
//   },
//   {
//     name: "Akhil Jain",
//     role: "Director",
//     image: akhilImg,
//     shortTitle: "Debt & Corporate Lending Expert",
//     imageClass: "scale-135 -translate-y-12",
//     content: [
//       `Akhil Jain brings over 25 years of formidable experience in the banking and financial services sector, serving as a strategic anchor for Aarthvaahini’s debt and corporate lending verticals. An Electrical Engineer by qualification with an MBA in Sales & Marketing, Akhil combines an analytical, problem-solving mindset with sharp commercial acumen.`,
//       `Before transitioning into corporate financial consulting, Akhil held various high-impact leadership positions across marquee banking institutions, where he successfully managed expansive geographies and diverse asset portfolios. Since 2017, he has operated as a trusted strategic consultant, helping businesses—ranging from MSMEs to large corporate houses—navigate the complexities of borrowing, optimize their capital structures, and secure critical funding.`,
//     ],
//   },
//   {
//     name: "Vikas Asawa",
//     role: "Director",
//     image: vikasImg,
//     shortTitle: "Wealth & Investment Strategist",
//     content: [
//       `Vikas Asawa anchors the investment, wealth management, and risk mitigation verticals at Aarthvaahini. An MBA in Finance with over 24 years of rich experience, Vikas’s career spans the entire spectrum of financial services, including core Banking, Mutual Funds, Stock Broking, and Bespoke Wealth Advisory.`,
//       `Vikas holds prestigious industry credentials, including the NISM Series V-A, Series VIII, and Series XIII certifications. His deep market insight allows him to help individuals, generational families, and business owners systematically create, grow, protect, and seamlessly transfer wealth.`,
//       `Renowned for his unwavering client-first philosophy, Vikas prides himself on building relationships that outlast market cycles—a testament to which is his portfolio of clients who have trusted his counsel for over two decades.`,
//     ],
//   },
// ];

// function DirectorsPage() {
//   const [selectedDirector, setSelectedDirector] = useState<Director | null>(
//     null,
//   );

//   return (
//     <div className="min-h-screen bg-white">
//       <Header />

//       <main className="pt-20">
//         {/* HERO */}
//         <section className="border-b border-slate-100 bg-white py-14 sm:py-20">
//           <div className="container mx-auto px-4 sm:px-6">
//             <div className="mx-auto max-w-5xl text-center">
//               <span className="inline-block rounded-full bg-[#17357e]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#17357e]">
//                 Board of Directors
//               </span>

//               <h1 className="mt-5 text-4xl font-bold text-[#07142f] sm:text-6xl">
//                 Our Leadership Team
//               </h1>

//               <p className="mx-auto mt-5 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
//                 With a combined track record of nearly a century across
//                 institutional banking, wealth management, real estate
//                 operations, and macro-economics, our leadership team provides
//                 the strategic foresight and execution power that drives
//                 Aarthvaahini Financial Services Private Limited.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* DIRECTORS GRID */}
//         <section className="bg-white py-10 sm:py-14">
//           <div className="mx-auto max-w-7xl px-4 sm:px-6">
//             <div className="grid border-l border-t border-slate-200 md:grid-cols-2">
//               {directors.map((director) => (
//                 <div
//                   key={director.name}
//                   className="group relative grid min-h-[360px] overflow-hidden border-b border-r border-slate-200 bg-white sm:min-h-[420px] lg:grid-cols-[0.95fr_1.05fr]"
//                 >
//                   {/* LIGHT WATERMARK */}
//                   <div className="pointer-events-none absolute right-8 top-8 text-[220px] font-black leading-none text-[#f7eaea] opacity-70">
//                     +
//                   </div>

//                   {/* TEXT SIDE */}
//                   <div className="relative z-10 flex flex-col justify-center p-7 sm:p-10">
//                     <h2 className="text-2xl font-semibold leading-tight text-[#07142f] sm:text-3xl">
//                       {director.name}
//                     </h2>

//                     <p className="mt-3 text-lg font-medium text-slate-700">
//                       {director.role}
//                     </p>

//                     <p className="mt-2 text-sm font-medium text-[#17357e]">
//                       {director.shortTitle}
//                     </p>

//                     <button
//                       type="button"
//                       onClick={() => setSelectedDirector(director)}
//                       className="mt-6 inline-flex w-fit items-center gap-2 rounded-md border border-[#00539b] px-5 py-3 text-sm font-bold text-[#00539b] transition hover:bg-[#00539b] hover:text-white"
//                     >
//                       Read More
//                       <ArrowRight className="h-4 w-4" />
//                     </button>
//                   </div>

//                   {/* IMAGE SIDE - SAME SIZE FIX */}
//                   <div className="relative z-10 flex items-end justify-center overflow-hidden px-4 pt-6">
//                     <div className="flex h-[300px] w-[260px] items-end justify-center overflow-hidden sm:h-[380px] sm:w-[320px]">
//                       <img
//                         src={director.image}
//                         alt={director.name}
//                         className={`h-full w-full object-contain object-bottom transition duration-500 group-hover:scale-105 ${
//                           director.imageClass ?? ""
//                         }`}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />

//       {/* READ MORE MODAL */}
//       {selectedDirector && (
//         <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm">
//           <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[28px] bg-white shadow-2xl">
//             <button
//               type="button"
//               onClick={() => setSelectedDirector(null)}
//               className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
//               aria-label="Close"
//             >
//               <X className="h-5 w-5" />
//             </button>

//             <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
//               <div className="relative flex min-h-[420px] items-end justify-center overflow-hidden bg-[#f7f1f1]">
//                 <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-[260px] font-black leading-none text-white/70">
//                   +
//                 </div>

//                 {/* MODAL IMAGE - SAME SIZE FIX */}
//                 <div className="relative z-10 flex h-[520px] w-[420px] items-end justify-center overflow-hidden p-6">
//                   <img
//                     src={selectedDirector.image}
//                     alt={selectedDirector.name}
//                     className={`h-full w-full object-contain object-bottom ${
//                       selectedDirector.imageClass ?? ""
//                     }`}
//                   />
//                 </div>
//               </div>

//               <div className="p-7 sm:p-10">
//                 <span className="inline-block rounded-full bg-[#17357e]/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#17357e]">
//                   {selectedDirector.role}
//                 </span>

//                 <h2 className="mt-4 text-3xl font-bold text-[#07142f] sm:text-4xl">
//                   {selectedDirector.name}
//                 </h2>

//                 <p className="mt-2 text-base font-semibold text-[#17357e]">
//                   {selectedDirector.shortTitle}
//                 </p>

//                 <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
//                   {selectedDirector.content.map((paragraph) => (
//                     <p key={paragraph}>{paragraph}</p>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, X, Users, Landmark, BriefcaseBusiness, BarChart3 } from "lucide-react";
import { useState } from "react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

import bipinchandraImg from "@/assets/directors/bipinchandra-malavia.png";
import akhilImg from "@/assets/directors/akhil-jain.png";
import vikasImg from "@/assets/directors/vikas-asawa.png";
import akshatImg from "@/assets/directors/akshat-chouhan .png";

export const Route = createFileRoute("/directors")({
  component: DirectorsPage,
});

type Director = {
  name: string;
  role: string;
  image: string;
  shortTitle: string;
  icon: React.ElementType;
  imagePosition: "left" | "right";
  imageClass?: string;
  shortDescription: string;
  content: string[];
};

const directors: Director[] = [
  {
    name: "Bipinchandra Malavia",
    role: "Director",
    image: bipinchandraImg,
    shortTitle: "Institutional Anchor",
    icon: Landmark,
    imagePosition: "left",
    imageClass: "object-cover",
    shortDescription:
      "With 51+ years of practical and analytical experience, he helps build robust processes and scale organizations with precision and integrity.",
    content: [
      `Bipinchandra Malavia brings a monumental 51+ years of practical, analytical experience to the Aarthvaahini boardroom. An Electrical Engineer by profession, he spent over three decades serving as the Head of Department across various prominent manufacturing companies, mastering complex project workflows and resource management.`,
      `Upon retiring, Bipinchandra pivoted to his core passion: wealth creation driven by the systematic monitoring of macroeconomic indicators that move global markets. At Aarthvaahini, he serves as a guiding institutional anchor, helping the company establish robust internal processes, streamline operational workflows, and scale securely without losing precision.`,
    ],
  },
  {
    name: "Akhil Jain",
    role: "Director",
    image: akhilImg,
    shortTitle: "Debt & Corporate Lending Expert",
    icon: BriefcaseBusiness,
    imagePosition: "right",
    imageClass: "object-cover",
    shortDescription:
      "Bringing 25+ years of rich experience in banking and financial services, he specializes in structuring and delivering debt and corporate lending solutions.",
    content: [
      `Akhil Jain brings over 25 years of formidable experience in the banking and financial services sector, serving as a strategic anchor for Aarthvaahini’s debt and corporate lending verticals.`,
      `Before transitioning into corporate financial consulting, Akhil held various high-impact leadership positions across marquee banking institutions. Since 2017, he has operated as a trusted strategic consultant, helping businesses navigate the complexities of borrowing, optimize capital structures, and secure critical funding.`,
    ],
  },
  {
    name: "Vikas Asawa",
    role: "Director",
    image: vikasImg,
    shortTitle: "Wealth & Investment Strategist",
    icon: BarChart3,
    imagePosition: "left",
    imageClass: "object-cover object-top",
    shortDescription:
      "With 24+ years across banking, mutual funds, broking, and wealth advisory, he focuses on creating and protecting wealth for long-term financial well-being.",
    content: [
      `Vikas Asawa anchors the investment, wealth management, and risk mitigation verticals at Aarthvaahini. An MBA in Finance with over 24 years of rich experience, Vikas’s career spans the entire spectrum of financial services, including core banking, mutual funds, stock broking, and bespoke wealth advisory.`,
      `His deep market insight allows him to help individuals, generational families, and business owners systematically create, grow, protect, and seamlessly transfer wealth.`,
      `Renowned for his client-first philosophy, Vikas believes in building relationships that outlast market cycles.`,
    ],
  },
  {
    name: "Akshat Chouhan",
    role: "Director",
    image: akshatImg,
    shortTitle: "Growth Ecosystem Builder",
    icon: Users,
    imagePosition: "right",
    imageClass: "object-cover object-center",
    shortDescription:
      "A dynamic, forward-thinking leader on a mission to democratize financial product distribution and empower individuals to build healthier, wealthier lives.",
    content: [
      `Akshat Chouhan is a dynamic, forward-thinking leader on a mission to democratize financial product distribution. He envisions a future where financial freedom is accessible to all, helping individuals build healthier, wealthier lives.`,
      `True to the meaning of Aarthvaahini — The Vehicle of Wealth — Akshat is focused on building a collaborative, high-growth ecosystem for consultant associates.`,
      `By creating rewarding earning programs and fostering personal entrepreneurship, he is empowering a new generation of financial professionals to drive community-wide wealth creation.`,
    ],
  },
];

function DirectorsPage() {
  const [selectedDirector, setSelectedDirector] = useState<Director | null>(null);

  return (
    <div className="min-h-screen bg-[#f8fbff]">
      <Header />

      <main className="pt-20">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-white via-[#f5f9ff] to-[#eaf3ff] py-14 sm:py-16">
          <div className="pointer-events-none absolute right-0 top-0 h-full w-[45%] opacity-40">
            <div className="absolute right-12 top-8 text-[360px] font-black leading-none text-[#17357e]/5">
              A
            </div>
          </div>

          <div className="container relative z-10 mx-auto px-5 sm:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#17357e] to-blue-600 px-5 py-2 text-sm font-bold uppercase tracking-wide text-white shadow-lg">
                <Users className="h-4 w-4" />
                Board of Directors
              </div>

              <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-[#07142f] sm:text-5xl lg:text-6xl">
                Our Leadership Team
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
                Guided by experience. Driven by purpose. Our leadership team
                brings together decades of expertise across finance,
                investments, banking, and distribution to create sustainable
                value for our clients and partners.
              </p>
            </div>
          </div>
        </section>

        {/* DIRECTOR CARDS */}
        <section className="relative -mt-1 rounded-t-[36px] bg-white py-8 sm:py-10">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
            <div className="grid gap-5 lg:grid-cols-2">
              {directors.map((director) => (
                <DirectorCard
                  key={director.name}
                  director={director}
                  onReadMore={() => setSelectedDirector(director)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* MODAL */}
      {selectedDirector && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[28px] bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedDirector(null)}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#07142f] to-[#17357e] p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_35%)]" />

                <div className="relative z-10 h-[360px] w-full max-w-[340px] overflow-hidden rounded-3xl border border-white/20 bg-white shadow-xl">
                  <img
                    src={selectedDirector.image}
                    alt={selectedDirector.name}
                    className={`h-full w-full ${selectedDirector.imageClass ?? "object-cover"}`}
                  />
                </div>
              </div>

              <div className="p-7 sm:p-10">
                <span className="inline-block rounded-full bg-[#17357e]/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#17357e]">
                  {selectedDirector.role}
                </span>

                <h2 className="mt-4 font-display text-3xl font-bold text-[#07142f] sm:text-4xl">
                  {selectedDirector.name}
                </h2>

                <div className="mt-2 h-1 w-8 rounded-full bg-[#0b55c7]" />

                <p className="mt-5 text-base font-semibold text-[#17357e]">
                  {selectedDirector.shortTitle}
                </p>

                <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
                  {selectedDirector.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DirectorCard({
  director,
  onReadMore,
}: {
  director: Director;
  onReadMore: () => void;
}) {
  const Icon = director.icon;

  const imageBlock = (
    <div className="flex items-center justify-center p-4">
      <div className="h-[270px] w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-sm sm:h-[300px]">
        <img
          src={director.image}
          alt={director.name}
          className={`h-full w-full ${director.imageClass ?? "object-cover"}`}
        />
      </div>
    </div>
  );

  const contentBlock = (
    <div className="flex flex-col justify-center p-6 sm:p-8">
      <h2 className="font-display text-3xl font-bold leading-tight text-[#07142f] sm:text-4xl">
        {director.name}
      </h2>

      <p className="mt-1 text-lg font-medium text-slate-700">
        {director.role}
      </p>

      <div className="mt-3 h-1 w-7 rounded-full bg-[#0b55c7]" />

      <div className="mt-5 flex items-center gap-3 border-b border-slate-200 pb-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#17357e]">
          <Icon className="h-5 w-5" />
        </div>

        <p className="text-sm font-bold text-[#0b3d91] sm:text-base">
          {director.shortTitle}
        </p>
      </div>

      <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
        {director.shortDescription}
      </p>

      <button
        type="button"
        onClick={onReadMore}
        className="mt-7 inline-flex w-fit items-center gap-3 rounded-md bg-gradient-to-r from-[#07142f] to-[#0b55c7] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
      >
        Read More
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
          <ArrowRight className="h-4 w-4" />
        </span>
      </button>
    </div>
  );

  return (
    <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_12px_36px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.14)]">
      <div className="grid min-h-[360px] md:grid-cols-2">
        {director.imagePosition === "left" ? (
          <>
            {imageBlock}
            {contentBlock}
          </>
        ) : (
          <>
            {contentBlock}
            {imageBlock}
          </>
        )}
      </div>
    </article>
  );
}