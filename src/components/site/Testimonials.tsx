// import { Card } from "@/components/ui/card";
// import { Star, Quote } from "lucide-react";

// const items = [
//   {
//     name: "Rahul Sharma",
//     role: "Business Owner, Mumbai",
//     text: "Aarthvaahini got my business loan approved in just 3 days. The process was smooth and the team guided me at every step.",
//     rating: 5,
//     initials: "RS",
//     color: "from-blue-500 to-blue-700",
//   },
//   {
//     name: "Priya Verma",
//     role: "Software Engineer, Pune",
//     text: "Their SIP planning and mutual fund advice was excellent. My portfolio gained 18% returns in a year. Highly recommended!",
//     rating: 5,
//     initials: "PV",
//     color: "from-pink-500 to-rose-600",
//   },
//   {
//     name: "Amit Patel",
//     role: "Doctor, Ahmedabad",
//     text: "I was confused about choosing health insurance, but the team suggested the best plan. The claim was cashless and hassle-free.",
//     rating: 5,
//     initials: "AP",
//     color: "from-emerald-500 to-teal-600",
//   },
//   {
//     name: "Neha Singh",
//     role: "Teacher, Lucknow",
//     text: "I got the lowest home loan interest rate here. From documentation to disbursal, everything was fast and transparent.",
//     rating: 5,
//     initials: "NS",
//     color: "from-orange-500 to-amber-600",
//   },
//   {
//     name: "Vikram Joshi",
//     role: "Entrepreneur, Bengaluru",
//     text: "Their tips to improve my CIBIL score were super helpful. In 4 months, my score went from 680 to 770.",
//     rating: 5,
//     initials: "VJ",
//     color: "from-indigo-500 to-purple-600",
//   },
//   {
//     name: "Sneha Kapoor",
//     role: "HR Manager, Delhi",
//     text: "I applied for a personal loan and the amount was credited within 24 hours. Transparent charges with no hidden fees.",
//     rating: 5,
//     initials: "SK",
//     color: "from-cyan-500 to-blue-600",
//   },
// ];

// export function Testimonials() {
//   return (
//     <section className="container mx-auto px-6 py-24">
//       <div className="text-center">
//         <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
//           ★ Trusted by 50,000+ customers
//         </span>
//         <h2 className="mt-4 font-display text-4xl font-bold text-foreground sm:text-5xl">
//           What our <span className="text-gradient">customers say</span>
//         </h2>
//         <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
//           Real stories from real people who achieved their financial goals with Aarthvaahini.
//         </p>
//       </div>

//       <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {items.map((t) => (
//           <Card
//             key={t.name}
//             className="group relative overflow-hidden border-border/60 bg-gradient-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
//           >
//             <Quote className="absolute -right-2 -top-2 h-20 w-20 text-primary/5" />
//             <div className="relative">
//               <div className="flex gap-0.5">
//                 {Array.from({ length: t.rating }).map((_, i) => (
//                   <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
//                 ))}
//               </div>
//               <p className="mt-4 text-[15px] leading-relaxed text-foreground/80">
//                 "{t.text}"
//               </p>
//               <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4">
//                 <div
//                   className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-sm font-bold text-white shadow-md`}
//                 >
//                   {t.initials}
//                 </div>
//                 <div>
//                   <p className="font-semibold text-foreground">{t.name}</p>
//                   <p className="text-xs text-muted-foreground">{t.role}</p>
//                 </div>
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// }
import { Card } from "@/components/ui/card";
import { Star, Quote, BadgeCheck } from "lucide-react";

const items = [
  {
    name: "Rahul Sharma",
    role: "Business Owner, Mumbai",
    text: "Aarthvaahini got my business loan approved in just 3 days. The process was smooth and the team guided me at every step.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Priya Verma",
    role: "Software Engineer, Pune",
    text: "Their SIP planning and mutual fund advice was excellent. My portfolio is now well diversified and easy to track.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Amit Patel",
    role: "Doctor, Ahmedabad",
    text: "I was confused about choosing health insurance, but the team suggested the best plan. The process was clear and hassle-free.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Neha Singh",
    role: "Teacher, Lucknow",
    text: "I got a better home loan option through Aarthvaahini. From documentation to approval, everything was fast and transparent.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Vikram Joshi",
    role: "Entrepreneur, Bengaluru",
    text: "Their guidance helped me understand my CIBIL score and improve my loan eligibility. Very professional service.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Sneha Kapoor",
    role: "HR Manager, Delhi",
    text: "I applied for a personal loan and got proper support from enquiry to disbursal. No confusion and no hidden surprises.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  },
];

export function Testimonials() {
  return (
    <section
  id="testimonials"
  className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50 py-24 scroll-mt-24"
>
      {/* Background texture */}
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#17357e]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#17357e]">
            ★ Trusted by 50,000+ customers
          </span>

          <h2 className="mt-4 font-display text-4xl font-bold text-[#07142f] sm:text-5xl">
            What our{" "}
            <span className="bg-gradient-to-r from-[#17357e] to-blue-600 bg-clip-text text-transparent">
              customers say
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-slate-500">
            Real-looking customer stories from people who achieved their financial
            goals with Aarthvaahini.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <Card
              key={t.name}
              className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white/90 p-7 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <Quote className="absolute -right-3 -top-3 h-24 w-24 text-[#17357e]/5" />

              <div className="relative">
                {/* Customer */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-16 w-16 rounded-full border-4 border-white object-cover shadow-lg"
                    />

                    <div className="absolute -bottom-1 -right-1 rounded-full bg-[#17357e] p-1 text-white shadow-md">
                      <BadgeCheck className="h-4 w-4" />
                    </div>
                  </div>

                  <div>
                    <p className="font-bold text-[#07142f]">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="mt-5 flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}

                  <span className="ml-2 text-xs font-medium text-slate-500">
                    5.0
                  </span>
                </div>

                {/* Text */}
                <p className="mt-4 text-[15px] leading-relaxed text-slate-700">
                  “{t.text}”
                </p>

                {/* Bottom tag */}
                <div className="mt-6 border-t border-blue-100 pt-4">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#17357e]">
                    Verified Customer
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}