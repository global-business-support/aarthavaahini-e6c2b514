// import { useEffect, useState } from "react";
// import { Link } from "@tanstack/react-router";

// import {
//   ArrowRight,
//   ChevronLeft,
//   ChevronRight,
//   ShieldCheck,
//   TrendingUp,
//   Wallet,
// } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { supabase } from "@/integrations/supabase/client";

// import advisor33 from "@/assets/hero-advisor33.jpeg";
// import insuranceHero from "@/assets/insurance-hero.png";
// import mutualFundHero from "@/assets/mutual-fund-hero.png";


// type Slide = {
//   image: string;
//   position?: string;
// };

// type PromoCard = {
//   title: string;
//   subtitle: string;
//   button1: string;
//   button2?: string;
//   button1Link: string;
//   button2Link?: string;
//   bg: string;
//   bgColor?: string;
//   image: string;
// };


// const defaultSlides: Slide[] = [
//   {
//     image: advisor33,
//     position: "object-center",
//   },
//   {
//     image: insuranceHero,
//     position: "object-center",
//   },
//   {
//     image: mutualFundHero,
//     position: "object-center",
//   },
// ];

// const PROMO_BG_PRESETS = [
//   "bg-[#70b8f7]",
//   "bg-[#eaf4ff]",
//   "bg-[#fff2cc]",
//   "bg-[#ffe4f1]",
//   "bg-[#dcfce7]",
//   "bg-[#f8aeb4]",
// ];

// const defaultPromoCards: PromoCard[] = [
//   {
//     title: "Personal Loan",
//     subtitle: "A loan for everything from dreams to emergencies",
//     button1: "Apply online",
//     button2: "Learn more",
//     button1Link: "/contact",
//     button2Link: "/loans",
//     bg: "bg-[#70b8f7]",
//     image:
//       "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     title: "Business Loan",
//     subtitle: "Funding solutions for business growth and expansion",
//     button1: "Apply Now",
//     button2: "Learn more",
//     button1Link: "/contact",
//     button2Link: "/loans",
//     bg: "bg-[#eaf4ff]",
//     image:
//       "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     title: "Home Loan",
//     subtitle: "Affordable home loan options for your dream home",
//     button1: "Apply Now",
//     button2: "Know more",
//     button1Link: "/contact",
//     button2Link: "/loans",
//     bg: "bg-[#fff2cc]",
//     image:
//       "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     title: "Insurance",
//     subtitle: "Secure your family, health, vehicle and assets",
//     button1: "Get quote",
//     button2: "Explore",
//     button1Link: "/contact",
//     button2Link: "/insurance",
//     bg: "bg-[#ffe4f1]",
//     image:
//       "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     title: "Mutual Funds",
//     subtitle: "Grow wealth with SIPs and curated investment plans",
//     button1: "Invest Now",
//     button2: "Learn more",
//     button1Link: "/contact",
//     button2Link: "/mutual-funds",
//     bg: "bg-[#dcfce7]",
//     image:
//       "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     title: "Fixed Deposit",
//     subtitle: "A growth plan with peace of mind",
//     button1: "Quick apply",
//     button2: "Learn more",
//     button1Link: "/contact",
//     button2Link: "/mutual-funds",
//     bg: "bg-[#f8aeb4]",
//     image:
//       "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&q=80",
//   },
// ];

// function getVisibleCards(activeIndex: number, cards: PromoCard[]) {
//   if (!cards.length) return [];
//   return [0, 1, 2].map((offset) => {
//     const index = (activeIndex + offset) % cards.length;
//     return cards[index];
//   });
// }


// export function Hero() {
//   const [current, setCurrent] = useState(0);
//   const [activeCard, setActiveCard] = useState(0);

//   const [isHeroPaused, setIsHeroPaused] = useState(false);
//   const [isPromoPaused, setIsPromoPaused] = useState(false);

//   const [slides, setSlides] = useState<Slide[]>(defaultSlides);
//   const [promoCards, setPromoCards] = useState<PromoCard[]>(defaultPromoCards);

//   useEffect(() => {
//     let cancelled = false;
//     (async () => {
//       try {
//         const [{ data: hs }, { data: pc }] = await Promise.all([
//           supabase
//             .from("hero_slides")
//             .select("image_url,is_active,position")
//             .eq("is_active", true)
//             .order("position", { ascending: true }),
//           supabase
//             .from("product_cards")
//             .select(
//               "title,subtitle,image_url,bg_color,button1_label,button1_link,button2_label,button2_link,is_active,position",
//             )
//             .eq("is_active", true)
//             .order("position", { ascending: true }),
//         ]);
//         if (cancelled) return;
//         if (hs && hs.length) {
//           const mapped = hs
//             .filter((h) => h.image_url)
//             .map((h) => ({ image: h.image_url as string, position: "object-center" }));
//           if (mapped.length) setSlides(mapped);
//         }
//         if (pc && pc.length) {
//           setPromoCards(
//             pc.map((p, i) => ({
//               title: p.title ?? "",
//               subtitle: p.subtitle ?? "",
//               button1: p.button1_label ?? "Apply Now",
//               button2: p.button2_label ?? undefined,
//               button1Link: p.button1_link ?? "/contact",
//               button2Link: p.button2_link ?? undefined,
//               bg: PROMO_BG_PRESETS[i % PROMO_BG_PRESETS.length],
//               bgColor: p.bg_color ?? undefined,

//               image: p.image_url ?? "",
//             })),
//           );
//         }
//       } catch (e) {
//         console.warn("CMS fetch failed, using defaults", e);
//       }
//     })();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   const visiblePromoCards = getVisibleCards(activeCard, promoCards);


//   useEffect(() => {
//     if (isHeroPaused) return;

//     const slider = window.setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => window.clearInterval(slider);
//   }, [isHeroPaused]);

//   useEffect(() => {
//     if (isPromoPaused) return;

//     const promoSlider = window.setInterval(() => {
//       setActiveCard((prev) => (prev + 1) % promoCards.length);
//     }, 3000);

//     return () => window.clearInterval(promoSlider);
//   }, [isPromoPaused]);

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const nextCard = () => {
//     setActiveCard((prev) => (prev + 1) % promoCards.length);
//   };

//   const prevCard = () => {
//     setActiveCard((prev) =>
//       prev === 0 ? promoCards.length - 1 : prev - 1,
//     );
//   };

//   return (
//     <>
//       {/* MAIN HERO */}
//       <section
//         id="hero"
//         onMouseEnter={() => setIsHeroPaused(true)}
//         onMouseLeave={() => setIsHeroPaused(false)}
//         className="relative w-full overflow-hidden bg-white pt-16"
//       >
//         <div className="relative w-full overflow-hidden">
//           {/* HERO SLIDER */}
//           <div
//             className="flex h-[52vh] min-h-[340px] w-full transition-transform duration-700 ease-in-out sm:h-[62vh] sm:min-h-[520px] lg:h-[70vh] lg:min-h-[640px]"
//             style={{ transform: `translateX(-${current * 100}%)` }}
//           >
//             {slides.map((slide, index) => (
//               <div
//                 key={index}
//                 className="relative h-full min-w-full overflow-hidden bg-gradient-to-br from-[#022e8c] via-[#1b4ea8] to-[#73abd9]"
//               >
//                 <img
//                   src={slide.image}
//                   alt="Aarthvaahini financial services"
//                   className={`absolute inset-0 h-full w-full object-contain object-center sm:object-cover ${
//                     slide.position ?? "sm:object-center"
//                   }`}
//                   draggable={false}
//                 />

//                 {/* First slide buttons only */}
//                 {index === 0 && (
//                   <div className="absolute bottom-8 left-4 z-20 flex flex-wrap gap-3 sm:left-8 sm:bottom-10 lg:left-12 lg:bottom-12">
//                     <Link to="/contact">
//                       <Button className="h-11 rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 px-5 text-sm font-semibold text-white shadow-xl transition-all hover:scale-105 sm:h-12 sm:px-7 sm:text-base">
//                         Free Consultation
//                         <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
//                       </Button>
//                     </Link>

//                     <Link to="/about">
//                       <Button
//                         variant="outline"
//                         className="h-11 rounded-xl border-[#17357e] bg-white/90 px-5 text-sm font-semibold text-[#17357e] shadow-xl hover:bg-white sm:h-12 sm:px-7 sm:text-base"
//                       >
//                         Meet Our Team
//                       </Button>
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* SERVICE CARDS */}
//           <div className="absolute bottom-10 right-4 z-20 hidden max-w-[900px] flex-wrap items-center justify-end gap-4 md:flex lg:right-8">
//             <Link to="/loans">
//               <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-blue-200/40 bg-gradient-to-r from-[#17357e] to-[#00539b] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
//                 <Wallet className="h-7 w-7 text-blue-200" />

//                 <div>
//                   <h3 className="text-base font-semibold lg:text-lg">Loans</h3>
//                   <p className="text-sm text-blue-100">Quick Loans</p>
//                 </div>
//               </div>
//             </Link>

//             <Link to="/insurance">
//               <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-pink-200/40 bg-gradient-to-r from-[#17357e] to-[#7c2d72] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
//                 <ShieldCheck className="h-7 w-7 text-pink-200" />

//                 <div>
//                   <h3 className="text-base font-semibold lg:text-lg">
//                     Insurance
//                   </h3>
//                   <p className="text-sm text-pink-100">Secure Insurance</p>
//                 </div>
//               </div>
//             </Link>

//             <Link to="/mutual-funds">
//               <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-green-200/40 bg-gradient-to-r from-[#17357e] to-[#047857] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
//                 <TrendingUp className="h-7 w-7 text-green-200" />

//                 <div>
//                   <h3 className="text-base font-semibold lg:text-lg">Wealth</h3>
//                   <p className="text-sm text-green-100">Mutual Funds</p>
//                 </div>
//               </div>
//             </Link>
//           </div>

//           {/* HERO ARROWS */}
//           <button
//             type="button"
//             onClick={prevSlide}
//             className="absolute left-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35 md:flex"
//             aria-label="Previous hero slide"
//           >
//             <ChevronLeft className="h-6 w-6 text-white" />
//           </button>

//           <button
//             type="button"
//             onClick={nextSlide}
//             className="absolute right-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35 md:flex"
//             aria-label="Next hero slide"
//           >
//             <ChevronRight className="h-6 w-6 text-white" />
//           </button>

//           {/* HERO DOTS */}
//           <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 type="button"
//                 onClick={() => setCurrent(index)}
//                 aria-label={`Go to slide ${index + 1}`}
//                 className={`h-2.5 rounded-full transition-all ${
//                   current === index ? "w-9 bg-white" : "w-2.5 bg-white/60"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PRODUCT / PROMO CARDS */}
//       <section className="relative z-10 bg-white py-8 sm:py-10">
//         <div className="mx-auto max-w-[1450px] px-4 sm:px-6">
//           <div
//             className="relative"
//             onMouseEnter={() => setIsPromoPaused(true)}
//             onMouseLeave={() => setIsPromoPaused(false)}
//           >
//             <div className="mb-6 text-center">
//               <h2 className="text-2xl font-bold text-[#08224a] sm:text-3xl lg:text-4xl">
//                 Our Financial Products
//               </h2>

//               <p className="mt-2 text-sm text-slate-600 sm:text-base">
//                 Loans, insurance and wealth solutions tailored for your goals.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
//               {visiblePromoCards.map((card) => (
//                 <div
//                   key={card.title}
//                   className={`relative h-[330px] overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${card.bgColor ? "" : card.bg}`}
//                   style={card.bgColor ? { backgroundColor: card.bgColor } : undefined}
//                 >

//                   <div className="relative z-10 flex h-full flex-col justify-center p-7">
//                     <h3 className="max-w-[62%] text-2xl font-bold text-[#08224a] lg:text-3xl">
//                       {card.title}
//                     </h3>

//                     <p className="mt-4 max-w-[60%] text-base leading-7 text-slate-700">
//                       {card.subtitle}
//                     </p>

//                     <div className="mt-6 flex flex-wrap gap-3">
//                       <Link to={card.button1Link}>
//                         <button
//                           type="button"
//                           className="rounded-lg bg-[#00539b] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#17357e]"
//                         >
//                           {card.button1}
//                         </button>
//                       </Link>

//                       {card.button2 && card.button2Link && (
//                         <Link to={card.button2Link}>
//                           <button
//                             type="button"
//                             className="rounded-lg border border-[#00539b] bg-white/70 px-5 py-3 text-sm font-semibold text-[#00539b] transition hover:bg-white"
//                           >
//                             {card.button2}
//                           </button>
//                         </Link>
//                       )}
//                     </div>
//                   </div>

//                   <img
//                     src={card.image}
//                     alt={card.title}
//                     className="absolute bottom-0 right-0 h-full w-[55%] object-cover object-center"
//                     draggable={false}
//                   />
//                 </div>
//               ))}
//             </div>

//             {/* PROMO ARROWS */}
//             <div className="mt-7 flex items-center justify-center gap-4">
//               <button
//                 type="button"
//                 onClick={prevCard}
//                 className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00539b] text-white shadow-lg transition hover:bg-[#17357e]"
//                 aria-label="Previous product"
//               >
//                 <ChevronLeft className="h-6 w-6" />
//               </button>

//               <button
//                 type="button"
//                 onClick={nextCard}
//                 className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00539b] text-white shadow-lg transition hover:bg-[#17357e]"
//                 aria-label="Next product"
//               >
//                 <ChevronRight className="h-6 w-6" />
//               </button>
//             </div>

//             {/* PROMO DOTS */}
//             <div className="mt-4 flex justify-center gap-2">
//               {promoCards.map((card, index) => (
//                 <button
//                   key={card.title}
//                   type="button"
//                   onClick={() => setActiveCard(index)}
//                   className={`h-2.5 rounded-full transition-all ${
//                     activeCard === index
//                       ? "w-8 bg-[#00539b]"
//                       : "w-2.5 bg-slate-300"
//                   }`}
//                   aria-label={`Go to ${card.title}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  Wallet,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import advisor33 from "@/assets/hero-advisor33.jpeg";
import insuranceHero from "@/assets/insurance-hero.png";
import mutualFundHero from "@/assets/mutual-fund-hero.png";

type Slide = {
  image: string;
  showButtons?: boolean;
};

type PromoCard = {
  title: string;
  subtitle: string;
  button1: string;
  button2?: string;
  button1Link: string;
  button2Link?: string;
  bg: string;
  image: string;
};

const slides: Slide[] = [
  {
    image: advisor33,
    showButtons: true,
  },
  {
    image: insuranceHero,
    showButtons: false,
  },
  {
    image: mutualFundHero,
    showButtons: false,
  },
];

const promoCards: PromoCard[] = [
  {
    title: "Personal Loan",
    subtitle: "A loan for everything from dreams to emergencies",
    button1: "Apply online",
    button2: "Learn more",
    button1Link: "/contact",
    button2Link: "/loans",
    bg: "bg-[#70b8f7]",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Business Loan",
    subtitle: "Funding solutions for business growth and expansion",
    button1: "Apply Now",
    button2: "Learn more",
    button1Link: "/contact",
    button2Link: "/loans",
    bg: "bg-[#eaf4ff]",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Home Loan",
    subtitle: "Affordable home loan options for your dream home",
    button1: "Apply Now",
    button2: "Know more",
    button1Link: "/contact",
    button2Link: "/loans",
    bg: "bg-[#fff2cc]",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Insurance",
    subtitle: "Secure your family, health, vehicle and assets",
    button1: "Get quote",
    button2: "Explore",
    button1Link: "/contact",
    button2Link: "/insurance",
    bg: "bg-[#ffe4f1]",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Mutual Funds",
    subtitle: "Grow wealth with SIPs and curated investment plans",
    button1: "Invest Now",
    button2: "Learn more",
    button1Link: "/contact",
    button2Link: "/mutual-funds",
    bg: "bg-[#dcfce7]",
    image:
      "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Fixed Deposit",
    subtitle: "A growth plan with peace of mind",
    button1: "Quick apply",
    button2: "Learn more",
    button1Link: "/contact",
    button2Link: "/mutual-funds",
    bg: "bg-[#f8aeb4]",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&q=80",
  },
];

function getVisibleCards(activeIndex: number) {
  return [0, 1, 2].map((offset) => {
    const index = (activeIndex + offset) % promoCards.length;
    return promoCards[index];
  });
}

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const [isHeroPaused, setIsHeroPaused] = useState(false);
  const [isPromoPaused, setIsPromoPaused] = useState(false);

  const visiblePromoCards = getVisibleCards(activeCard);
  const activeSlide = slides[current];

  useEffect(() => {
    if (isHeroPaused) return;

    const slider = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(slider);
  }, [isHeroPaused]);

  useEffect(() => {
    if (isPromoPaused) return;

    const promoSlider = window.setInterval(() => {
      setActiveCard((prev) => (prev + 1) % promoCards.length);
    }, 3000);

    return () => window.clearInterval(promoSlider);
  }, [isPromoPaused]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setActiveCard((prev) => (prev + 1) % promoCards.length);
  };

  const prevCard = () => {
    setActiveCard((prev) =>
      prev === 0 ? promoCards.length - 1 : prev - 1,
    );
  };

  return (
    <>
      {/* MAIN HERO */}
      <section
        id="hero"
        onMouseEnter={() => setIsHeroPaused(true)}
        onMouseLeave={() => setIsHeroPaused(false)}
        className="relative w-full overflow-hidden bg-white pt-16"
      >
        <div className="relative w-full overflow-hidden bg-[#0f4fa8]">
          <div className="relative aspect-[16/9] w-full overflow-hidden md:h-[620px] md:aspect-auto">
            {slides.map((slide, index) => (
              <img
                key={slide.image}
                src={slide.image}
                alt="Aarthvaahini Financial Services"
                className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
                draggable={false}
              />
            ))}

            {/* FIRST SLIDE BUTTONS */}
            {activeSlide.showButtons && (
              <div className="absolute bottom-6 left-1/2 z-20 flex w-full max-w-sm -translate-x-1/2 items-center justify-center gap-2 px-4 md:bottom-20 md:left-12 md:max-w-none md:translate-x-0 md:justify-start md:gap-4">
                <Link to="/contact">
                  <Button className="h-9 rounded-lg bg-gradient-to-r from-[#17357e] to-blue-600 px-3 text-xs font-semibold text-white shadow-lg transition-all hover:scale-105 sm:h-10 sm:px-5 sm:text-sm md:h-12 md:px-7 md:text-base">
                    Free Consultation
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  </Button>
                </Link>

                <Link to="/about">
                  <Button
                    variant="outline"
                    className="h-9 rounded-lg border border-[#17357e]/20 bg-white/95 px-3 text-xs font-semibold text-[#17357e] shadow-lg transition hover:scale-105 hover:bg-white sm:h-10 sm:px-5 sm:text-sm md:h-12 md:px-7 md:text-base"
                  >
                    Meet Our Team
                  </Button>
                </Link>
              </div>
            )}

            {/* RIGHT SIDE SERVICE CARDS - TRANSPARENT WHITE */}
            <div className="absolute bottom-20 right-4 z-20 hidden max-w-[900px] flex-wrap items-center justify-end gap-4 md:flex lg:right-8">
              <Link to="/loans">
                <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-white/40 bg-white/15 px-5 py-4 text-white shadow-xl backdrop-blur-md transition-all hover:scale-105 hover:bg-white/25 lg:min-w-60">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                    <Wallet className="h-7 w-7 text-blue-300" />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold lg:text-lg">
                      Loans
                    </h3>
                    <p className="text-sm text-gray-100">Quick Loans</p>
                  </div>
                </div>
              </Link>

              <Link to="/insurance">
                <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-white/40 bg-white/15 px-5 py-4 text-white shadow-xl backdrop-blur-md transition-all hover:scale-105 hover:bg-white/25 lg:min-w-60">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                    <ShieldCheck className="h-7 w-7 text-pink-300" />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold lg:text-lg">
                      Insurance
                    </h3>
                    <p className="text-sm text-gray-100">Secure Insurance</p>
                  </div>
                </div>
              </Link>

              <Link to="/mutual-funds">
                <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-white/40 bg-white/15 px-5 py-4 text-white shadow-xl backdrop-blur-md transition-all hover:scale-105 hover:bg-white/25 lg:min-w-60">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                    <TrendingUp className="h-7 w-7 text-green-300" />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold lg:text-lg">
                      Wealth
                    </h3>
                    <p className="text-sm text-gray-100">Mutual Funds</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* HERO ARROWS */}
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35 md:flex"
              aria-label="Previous hero slide"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35 md:flex"
              aria-label="Next hero slide"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* HERO DOTS */}
            <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-3 md:bottom-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    current === index
                      ? "w-9 bg-white"
                      : "w-2.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT / PROMO CARDS */}
      <section className="relative z-10 bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-[1450px] px-4 sm:px-6">
          <div
            className="relative"
            onMouseEnter={() => setIsPromoPaused(true)}
            onMouseLeave={() => setIsPromoPaused(false)}
          >
            <div className="mb-6 text-center">
              <h2 className="text-3xl font-bold text-[#08224a] sm:text-4xl lg:text-5xl">
                Our Financial Products
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Loans, insurance and wealth solutions tailored for your goals.
              </p>
            </div>

            {/* MOBILE HORIZONTAL ROW / DESKTOP GRID */}
            <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
              {visiblePromoCards.map((card) => (
                <div
                  key={card.title}
                  className={`relative h-[260px] min-w-[82vw] overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:h-[300px] sm:min-w-[55vw] md:h-[330px] md:min-w-0 ${card.bg}`}
                >
                  <div className="relative z-10 flex h-full flex-col justify-center p-5 sm:p-7">
                    <h3 className="max-w-[60%] text-xl font-bold text-[#08224a] sm:text-2xl lg:text-3xl">
                      {card.title}
                    </h3>

                    <p className="mt-3 max-w-[58%] text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
                      {card.subtitle}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2 sm:gap-3">
                      <Link to={card.button1Link}>
                        <button
                          type="button"
                          className="rounded-lg bg-[#00539b] px-4 py-2.5 text-xs font-semibold text-white shadow-md transition hover:bg-[#17357e] sm:px-5 sm:py-3 sm:text-sm"
                        >
                          {card.button1}
                        </button>
                      </Link>

                      {card.button2 && card.button2Link && (
                        <Link to={card.button2Link}>
                          <button
                            type="button"
                            className="rounded-lg border border-[#00539b] bg-white/70 px-4 py-2.5 text-xs font-semibold text-[#00539b] transition hover:bg-white sm:px-5 sm:py-3 sm:text-sm"
                          >
                            {card.button2}
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>

                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute bottom-0 right-0 h-full w-[55%] object-cover object-center"
                    draggable={false}
                  />
                </div>
              ))}
            </div>

            {/* PROMO ARROWS */}
            <div className="mt-7 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={prevCard}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00539b] text-white shadow-lg transition hover:bg-[#17357e]"
                aria-label="Previous product"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                type="button"
                onClick={nextCard}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00539b] text-white shadow-lg transition hover:bg-[#17357e]"
                aria-label="Next product"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* PROMO DOTS */}
            <div className="mt-4 flex justify-center gap-2">
              {promoCards.map((card, index) => (
                <button
                  key={card.title}
                  type="button"
                  onClick={() => setActiveCard(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeCard === index
                      ? "w-8 bg-[#00539b]"
                      : "w-2.5 bg-slate-300"
                  }`}
                  aria-label={`Go to ${card.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}