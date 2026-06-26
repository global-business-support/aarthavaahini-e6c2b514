import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

import bipinchandraImg from "@/assets/directors/bipinchandra-malavia.png";
import akhilImg from "@/assets/directors/akhil-jain.png";
import vikasImg from "@/assets/directors/vikas-asawa.png";

export const Route = createFileRoute("/directors")({
  component: DirectorsPage,
});

type Director = {
  name: string;
  role: string;
  image: string;
  shortTitle: string;
  imageClass?: string;
  content: string[];
};

const directors: Director[] = [
  {
    name: "Bipinchandra Malavia",
    role: "Director",
    image: bipinchandraImg,
    shortTitle: "Institutional Anchor",
    content: [
      `Bipinchandra Malavia brings a monumental 51+ years of practical, analytical experience to the Aarthvaahini boardroom. An Electrical Engineer by profession, he spent over three decades (1973 to 2006) serving as the Head of Department across various prominent manufacturing companies, mastering complex project workflows and resource management.`,
      `Upon retiring in 2006, Bipinchandra pivoted to his core passion: wealth creation driven by the systematic monitoring of macroeconomic indicators that move global markets. At Aarthvaahini, he serves as a guiding institutional anchor, helping the company establish robust internal processes, streamline operational workflows, and scale securely without losing precision.`,
    ],
  },
  {
    name: "Akhil Jain",
    role: "Director",
    image: akhilImg,
    shortTitle: "Debt & Corporate Lending Expert",
    imageClass: "scale-135 -translate-y-12",
    content: [
      `Akhil Jain brings over 25 years of formidable experience in the banking and financial services sector, serving as a strategic anchor for Aarthvaahini’s debt and corporate lending verticals. An Electrical Engineer by qualification with an MBA in Sales & Marketing, Akhil combines an analytical, problem-solving mindset with sharp commercial acumen.`,
      `Before transitioning into corporate financial consulting, Akhil held various high-impact leadership positions across marquee banking institutions, where he successfully managed expansive geographies and diverse asset portfolios. Since 2017, he has operated as a trusted strategic consultant, helping businesses—ranging from MSMEs to large corporate houses—navigate the complexities of borrowing, optimize their capital structures, and secure critical funding.`,
    ],
  },
  {
    name: "Vikas Asawa",
    role: "Director",
    image: vikasImg,
    shortTitle: "Wealth & Investment Strategist",
    content: [
      `Vikas Asawa anchors the investment, wealth management, and risk mitigation verticals at Aarthvaahini. An MBA in Finance with over 24 years of rich experience, Vikas’s career spans the entire spectrum of financial services, including core Banking, Mutual Funds, Stock Broking, and Bespoke Wealth Advisory.`,
      `Vikas holds prestigious industry credentials, including the NISM Series V-A, Series VIII, and Series XIII certifications. His deep market insight allows him to help individuals, generational families, and business owners systematically create, grow, protect, and seamlessly transfer wealth.`,
      `Renowned for his unwavering client-first philosophy, Vikas prides himself on building relationships that outlast market cycles—a testament to which is his portfolio of clients who have trusted his counsel for over two decades.`,
    ],
  },
];

function DirectorsPage() {
  const [selectedDirector, setSelectedDirector] = useState<Director | null>(
    null,
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* HERO */}
        <section className="border-b border-slate-100 bg-white py-14 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-5xl text-center">
              <span className="inline-block rounded-full bg-[#17357e]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#17357e]">
                Board of Directors
              </span>

              <h1 className="mt-5 text-4xl font-bold text-[#07142f] sm:text-6xl">
                Our Leadership Team
              </h1>

              <p className="mx-auto mt-5 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
                With a combined track record of nearly a century across
                institutional banking, wealth management, real estate
                operations, and macro-economics, our leadership team provides
                the strategic foresight and execution power that drives
                Aarthvaahini Financial Services Private Limited.
              </p>
            </div>
          </div>
        </section>

        {/* DIRECTORS GRID */}
        <section className="bg-white py-10 sm:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid border-l border-t border-slate-200 md:grid-cols-2">
              {directors.map((director) => (
                <div
                  key={director.name}
                  className="group relative grid min-h-[360px] overflow-hidden border-b border-r border-slate-200 bg-white sm:min-h-[420px] lg:grid-cols-[0.95fr_1.05fr]"
                >
                  {/* LIGHT WATERMARK */}
                  <div className="pointer-events-none absolute right-8 top-8 text-[220px] font-black leading-none text-[#f7eaea] opacity-70">
                    +
                  </div>

                  {/* TEXT SIDE */}
                  <div className="relative z-10 flex flex-col justify-center p-7 sm:p-10">
                    <h2 className="text-2xl font-semibold leading-tight text-[#07142f] sm:text-3xl">
                      {director.name}
                    </h2>

                    <p className="mt-3 text-lg font-medium text-slate-700">
                      {director.role}
                    </p>

                    <p className="mt-2 text-sm font-medium text-[#17357e]">
                      {director.shortTitle}
                    </p>

                    <button
                      type="button"
                      onClick={() => setSelectedDirector(director)}
                      className="mt-6 inline-flex w-fit items-center gap-2 rounded-md border border-[#00539b] px-5 py-3 text-sm font-bold text-[#00539b] transition hover:bg-[#00539b] hover:text-white"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                  {/* IMAGE SIDE - SAME SIZE FIX */}
                  <div className="relative z-10 flex items-end justify-center overflow-hidden px-4 pt-6">
                    <div className="flex h-[300px] w-[260px] items-end justify-center overflow-hidden sm:h-[380px] sm:w-[320px]">
                      <img
                        src={director.image}
                        alt={director.name}
                        className={`h-full w-full object-contain object-bottom transition duration-500 group-hover:scale-105 ${
                          director.imageClass ?? ""
                        }`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* READ MORE MODAL */}
      {selectedDirector && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[28px] bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedDirector(null)}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative flex min-h-[420px] items-end justify-center overflow-hidden bg-[#f7f1f1]">
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-[260px] font-black leading-none text-white/70">
                  +
                </div>

                {/* MODAL IMAGE - SAME SIZE FIX */}
                <div className="relative z-10 flex h-[520px] w-[420px] items-end justify-center overflow-hidden p-6">
                  <img
                    src={selectedDirector.image}
                    alt={selectedDirector.name}
                    className={`h-full w-full object-contain object-bottom ${
                      selectedDirector.imageClass ?? ""
                    }`}
                  />
                </div>
              </div>

              <div className="p-7 sm:p-10">
                <span className="inline-block rounded-full bg-[#17357e]/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#17357e]">
                  {selectedDirector.role}
                </span>

                <h2 className="mt-4 text-3xl font-bold text-[#07142f] sm:text-4xl">
                  {selectedDirector.name}
                </h2>

                <p className="mt-2 text-base font-semibold text-[#17357e]">
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