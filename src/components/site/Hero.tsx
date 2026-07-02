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

// import advisor33 from "@/assets/hero-advisor33.jpeg";
// import insuranceHero from "@/assets/insurance-hero.png";
// import mutualFundHero from "@/assets/mutual-fund-hero.png";

// type Slide = {
//   image: string;
//   showButtons?: boolean;
// };

// type PromoCard = {
//   title: string;
//   subtitle: string;
//   button1: string;
//   button2?: string;
//   button1Link: string;
//   button2Link?: string;
//   bg: string;
//   icon: string;
// };

// const slides: Slide[] = [
//   {
//     image: advisor33,
//     showButtons: true,
//   },
//   {
//     image: insuranceHero,
//     showButtons: false,
//   },
//   {
//     image: mutualFundHero,
//     showButtons: false,
//   },
// ];

// const promoCards: PromoCard[] = [
//   {
//     title: "Personal Loan",
//     subtitle: "Quick personal loan support for urgent needs and goals.",
//     button1: "Apply Now",
//     button2: "Know more",
//     button1Link: "/contact",
//     button2Link: "/loans",
//     bg: "bg-[#dbeafe]",
//     icon: "💳",
//   },
//   {
//     title: "Insurance",
//     subtitle: "Protect your family, health, vehicle and valuable assets.",
//     button1: "Get quote",
//     button2: "Explore",
//     button1Link: "/contact",
//     button2Link: "/insurance",
//     bg: "bg-[#ffe4f1]",
//     icon: "🛡️",
//   },
//   {
//     title: "Mutual Funds",
//     subtitle: "Build long-term wealth with SIP and investment planning.",
//     button1: "Invest Now",
//     button2: "Learn more",
//     button1Link: "/contact",
//     button2Link: "/mutual-funds",
//     bg: "bg-[#dcfce7]",
//     icon: "📈",
//   },
//   {
//     title: "Home Loan",
//     subtitle: "Affordable finance options for your dream home.",
//     button1: "Apply Now",
//     button2: "Know more",
//     button1Link: "/contact",
//     button2Link: "/loans",
//     bg: "bg-[#fff2cc]",
//     icon: "🏠",
//   },
//   {
//     title: "Business Loan",
//     subtitle: "Funding solutions for business growth and expansion.",
//     button1: "Apply Now",
//     button2: "Learn more",
//     button1Link: "/contact",
//     button2Link: "/loans",
//     bg: "bg-[#e0f2fe]",
//     icon: "💼",
//   },
//   {
//     title: "Credit Card",
//     subtitle: "Explore credit card options for daily and lifestyle needs.",
//     button1: "Apply Now",
//     button2: "Know more",
//     button1Link: "/contact",
//     button2Link: "/loans",
//     bg: "bg-[#f3f4f6]",
//     icon: "💰",
//   },
// ];

// function getVisibleCards(activeIndex: number) {
//   return [0, 1, 2].map((offset) => {
//     const index = (activeIndex + offset) % promoCards.length;
//     return promoCards[index];
//   });
// }

// export function Hero() {
//   const [current, setCurrent] = useState(0);
//   const [activeCard, setActiveCard] = useState(0);
//   const [isHeroPaused, setIsHeroPaused] = useState(false);

//   const visiblePromoCards = getVisibleCards(activeCard);
//   const activeSlide = slides[current];

//   useEffect(() => {
//     if (isHeroPaused) return;

//     const slider = window.setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => window.clearInterval(slider);
//   }, [isHeroPaused]);

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
//         <div className="relative w-full overflow-hidden bg-[#0f4fa8]">
//           <div className="relative aspect-[16/9] w-full overflow-hidden md:h-[620px] md:aspect-auto">
//             {slides.map((slide, index) => (
//               <img
//                 key={slide.image}
//                 src={slide.image}
//                 alt="Aarthvaahini Financial Services"
//                 className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
//                   index === current ? "opacity-100" : "opacity-0"
//                 }`}
//                 draggable={false}
//               />
//             ))}

//             {/* FIRST SLIDE BUTTONS */}
//             {activeSlide.showButtons && (
//               <div className="absolute bottom-6 left-1/2 z-20 flex w-full max-w-sm -translate-x-1/2 items-center justify-center gap-2 px-4 md:bottom-20 md:left-12 md:max-w-none md:translate-x-0 md:justify-start md:gap-4">
//                 <Link to="/contact">
//                   <Button className="h-9 rounded-lg bg-gradient-to-r from-[#17357e] to-blue-600 px-3 text-xs font-semibold text-white shadow-lg transition-all hover:scale-105 sm:h-10 sm:px-5 sm:text-sm md:h-12 md:px-7 md:text-base">
//                     Free Consultation
//                     <ArrowRight className="ml-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
//                   </Button>
//                 </Link>

//                 <Link to="/about">
//                   <Button
//                     variant="outline"
//                     className="h-9 rounded-lg border border-[#17357e]/20 bg-white/95 px-3 text-xs font-semibold text-[#17357e] shadow-lg transition hover:scale-105 hover:bg-white sm:h-10 sm:px-5 sm:text-sm md:h-12 md:px-7 md:text-base"
//                   >
//                     Meet Our Team
//                   </Button>
//                 </Link>
//               </div>
//             )}

//             {/* SERVICE CARDS */}
//             <div className="absolute bottom-10 right-4 z-20 hidden max-w-[900px] flex-wrap items-center justify-end gap-4 md:flex lg:right-8">
//               <Link to="/loans">
//                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-blue-200/40 bg-gradient-to-r from-[#17357e] to-[#00539b] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
//                   <Wallet className="h-7 w-7 text-blue-200" />

//                   <div>
//                     <h3 className="text-base font-semibold lg:text-lg">
//                       Loans
//                     </h3>
//                     <p className="text-sm text-blue-100">Quick Loans</p>
//                   </div>
//                 </div>
//               </Link>

//               <Link to="/insurance">
//                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-pink-200/40 bg-gradient-to-r from-[#17357e] to-[#7c2d72] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
//                   <ShieldCheck className="h-7 w-7 text-pink-200" />

//                   <div>
//                     <h3 className="text-base font-semibold lg:text-lg">
//                       Insurance
//                     </h3>
//                     <p className="text-sm text-pink-100">Secure Insurance</p>
//                   </div>
//                 </div>
//               </Link>

//               <Link to="/mutual-funds">
//                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-green-200/40 bg-gradient-to-r from-[#17357e] to-[#047857] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
//                   <TrendingUp className="h-7 w-7 text-green-200" />

//                   <div>
//                     <h3 className="text-base font-semibold lg:text-lg">
//                       Wealth
//                     </h3>
//                     <p className="text-sm text-green-100">Mutual Funds</p>
//                   </div>
//                 </div>
//               </Link>
//             </div>

//             {/* HERO ARROWS */}
//             <button
//               type="button"
//               onClick={prevSlide}
//               className="absolute left-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35 md:flex"
//               aria-label="Previous hero slide"
//             >
//               <ChevronLeft className="h-6 w-6 text-white" />
//             </button>

//             <button
//               type="button"
//               onClick={nextSlide}
//               className="absolute right-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35 md:flex"
//               aria-label="Next hero slide"
//             >
//               <ChevronRight className="h-6 w-6 text-white" />
//             </button>

//             {/* HERO DOTS */}
//             <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-3 md:bottom-8">
//               {slides.map((_, index) => (
//                 <button
//                   key={index}
//                   type="button"
//                   onClick={() => setCurrent(index)}
//                   aria-label={`Go to slide ${index + 1}`}
//                   className={`h-2.5 rounded-full transition-all ${
//                     current === index
//                       ? "w-9 bg-white"
//                       : "w-2.5 bg-white/50"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* PRODUCT / PROMO CARDS */}
//       <section className="relative z-10 bg-white py-8 sm:py-10">
//         <div className="mx-auto max-w-[1500px] px-4 sm:px-6">
//           <div className="relative">
//             <div className="mb-6 text-center">
//               <h2 className="text-3xl font-bold text-[#08224a] sm:text-4xl lg:text-5xl">
//                 Our Financial Products
//               </h2>

//               <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
//                 Loans, insurance and wealth solutions tailored for your goals.
//               </p>
//             </div>

//             {/* SIMPLE PLAIN PRODUCT CARDS */}
//             <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
//               {visiblePromoCards.map((card) => (
//                 <div
//                   key={card.title}
//                   className={`relative min-h-[250px] min-w-[86vw] overflow-hidden rounded-3xl border border-slate-100 p-7 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:min-w-[60vw] md:min-w-0 ${card.bg}`}
//                 >
//                   <div className="flex h-full flex-col justify-between">
//                     <div>
//                       <div className="mb-4 flex h-13 w-13 items-center justify-center rounded-2xl bg-white/70 text-2xl shadow-sm">
//                         {card.icon}
//                       </div>

//                       <h3 className="text-2xl font-bold text-[#07142f] sm:text-3xl">
//                         {card.title}
//                       </h3>

//                       <p className="mt-3 max-w-[90%] text-sm leading-7 text-slate-700 sm:text-base">
//                         {card.subtitle}
//                       </p>
//                     </div>

//                     <div className="mt-5 flex flex-wrap gap-3">
//                       <Link to={card.button1Link}>
//                         <button
//                           type="button"
//                           className="rounded-lg bg-[#00539b] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#17357e]"
//                         >
//                           {card.button1}
//                         </button>
//                       </Link>

//                       {card.button2 && card.button2Link && (
//                         <Link to={card.button2Link}>
//                           <button
//                             type="button"
//                             className="rounded-lg border border-[#00539b] bg-white/50 px-5 py-2.5 text-sm font-semibold text-[#00539b] transition hover:bg-white"
//                           >
//                             {card.button2}
//                           </button>
//                         </Link>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* SMALL ARROWS ONLY */}
//             <div className="mt-5 flex items-center justify-center gap-3">
//               <button
//                 type="button"
//                 onClick={prevCard}
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00539b] text-white shadow-md transition hover:bg-[#17357e]"
//                 aria-label="Previous product"
//               >
//                 <ChevronLeft className="h-5 w-5" />
//               </button>

//               <button
//                 type="button"
//                 onClick={nextCard}
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00539b] text-white shadow-md transition hover:bg-[#17357e]"
//                 aria-label="Next product"
//               >
//                 <ChevronRight className="h-5 w-5" />
//               </button>
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
  objectPosition: string;
};

type PromoCard = {
  title: string;
  subtitle: string;
  button1: string;
  button2?: string;
  button1Link: string;
  button2Link?: string;
  bg: string;
  icon: string;
};

const slides: Slide[] = [
  {
    image: advisor33,
    showButtons: true,
    objectPosition: "center top",
  },
  {
    image: insuranceHero,
    showButtons: false,
    objectPosition: "center top",
  },
  {
    image: mutualFundHero,
    showButtons: false,
    objectPosition: "center top",
  },
];

const promoCards: PromoCard[] = [
  {
    title: "Personal Loan",
    subtitle: "Quick personal loan support for urgent needs and goals.",
    button1: "Apply Now",
    button2: "Know more",
    button1Link: "/contact",
    button2Link: "/loans",
    bg: "bg-[#dbeafe]",
    icon: "💳",
  },
  {
    title: "Business Loan",
    subtitle: "Funding solutions for business growth and expansion.",
    button1: "Apply Now",
    button2: "Learn more",
    button1Link: "/contact",
    button2Link: "/loans",
    bg: "bg-[#e0f2fe]",
    icon: "💼",
  },
  {
    title: "Insurance",
    subtitle: "Protect your family, health, vehicle and valuable assets.",
    button1: "Get quote",
    button2: "Explore",
    button1Link: "/contact",
    button2Link: "/insurance",
    bg: "bg-[#ffe4f1]",
    icon: "🛡️",
  },
  {
    title: "Term Life Insurance",
    subtitle: "Secure your family’s future with affordable term life coverage.",
    button1: "Get quote",
    button2: "Explore",
    button1Link: "/contact",
    button2Link: "/insurance",
    bg: "bg-[#eaf2ff]",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    title: "Mutual Funds",
    subtitle: "Build long-term wealth with SIP and investment planning.",
    button1: "Invest Now",
    button2: "Learn more",
    button1Link: "/contact",
    button2Link: "/mutual-funds",
    bg: "bg-[#dcfce7]",
    icon: "📈",
  },
  {
    title: "Home Loan",
    subtitle: "Affordable finance options for your dream home.",
    button1: "Apply Now",
    button2: "Know more",
    button1Link: "/contact",
    button2Link: "/loans",
    bg: "bg-[#fff2cc]",
    icon: "🏠",
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

  const visiblePromoCards = getVisibleCards(activeCard);
  const activeSlide = slides[current];

  useEffect(() => {
    if (isHeroPaused) return;

    const slider = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(slider);
  }, [isHeroPaused]);

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
        className="relative w-full overflow-hidden bg-white pt-20"
      >
        <div className="relative w-full overflow-hidden bg-[#0f4fa8]">
<<<<<<< HEAD
          <div className="relative aspect-[21/9] max-h-[420px] w-full overflow-hidden bg-[linear-gradient(135deg,#022e8c_0%,#73abd9_100%)] md:max-h-[500px]">
=======
          <div className="relative h-[520px] w-full overflow-hidden sm:h-[560px] md:h-[620px] lg:h-[680px] xl:h-[720px]">
>>>>>>> 86ecec0 (Fix hero image crop and remove dots)
            {slides.map((slide, index) => (
              <img
                key={slide.image}
                src={slide.image}
                alt="Aarthvaahini Financial Services"
<<<<<<< HEAD
                className={`absolute inset-0 h-full w-full object-contain object-center transition-opacity duration-700 ${
=======
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
>>>>>>> 86ecec0 (Fix hero image crop and remove dots)
                  index === current ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  objectPosition: slide.objectPosition,
                }}
                draggable={false}
              />
            ))}

            {/* FIRST SLIDE BUTTONS */}
            {activeSlide.showButtons && (
              <div className="absolute bottom-20 left-4 z-20 flex flex-wrap items-center gap-3 px-3 sm:left-6 md:bottom-20 md:left-10 lg:left-14">
                <Link to="/contact">
                  <Button className="h-10 rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 px-4 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 sm:px-5 md:h-12 md:px-7 md:text-base">
                    Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </Link>

                <Link to="/about">
                  <Button
                    variant="outline"
                    className="h-10 rounded-xl border border-[#17357e]/20 bg-white/95 px-4 text-sm font-semibold text-[#17357e] shadow-lg transition hover:scale-105 hover:bg-white sm:px-5 md:h-12 md:px-7 md:text-base"
                  >
                    Meet Our Team
                  </Button>
                </Link>
              </div>
            )}

            {/* SERVICE CARDS */}
            <div className="absolute bottom-10 right-4 z-20 hidden max-w-[900px] flex-wrap items-center justify-end gap-4 md:flex lg:right-8">
              <Link to="/loans">
                <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-blue-200/40 bg-gradient-to-r from-[#17357e] to-[#00539b] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
                  <Wallet className="h-7 w-7 text-blue-200" />

                  <div>
                    <h3 className="text-base font-semibold lg:text-lg">
                      Loans
                    </h3>
                    <p className="text-sm text-blue-100">Quick Loans</p>
                  </div>
                </div>
              </Link>

              <Link to="/insurance">
                <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-pink-200/40 bg-gradient-to-r from-[#17357e] to-[#7c2d72] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
                  <ShieldCheck className="h-7 w-7 text-pink-200" />

                  <div>
                    <h3 className="text-base font-semibold lg:text-lg">
                      Insurance
                    </h3>
                    <p className="text-sm text-pink-100">Secure Insurance</p>
                  </div>
                </div>
              </Link>

              <Link to="/mutual-funds">
                <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-green-200/40 bg-gradient-to-r from-[#17357e] to-[#047857] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
                  <TrendingUp className="h-7 w-7 text-green-200" />

                  <div>
                    <h3 className="text-base font-semibold lg:text-lg">
                      Wealth
                    </h3>
                    <p className="text-sm text-green-100">Mutual Funds</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* HERO ARROWS */}
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35"
              aria-label="Previous hero slide"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35"
              aria-label="Next hero slide"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* HERO DOTS REMOVED */}
          </div>
        </div>
      </section>

      {/* PRODUCT / PROMO CARDS */}
      <section className="relative z-10 bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6">
          <div className="relative">
            <div className="mb-6 text-center">
              <h2 className="text-3xl font-bold text-[#08224a] sm:text-4xl lg:text-5xl">
                Our Financial Products
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Loans, insurance and wealth solutions tailored for your goals.
              </p>
            </div>

            {/* SIMPLE PLAIN PRODUCT CARDS */}
            <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
              {visiblePromoCards.map((card) => (
                <div
                  key={card.title}
                  className={`relative min-h-[250px] min-w-[86vw] overflow-hidden rounded-3xl border border-slate-100 p-7 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:min-w-[60vw] md:min-w-0 ${card.bg}`}
                >
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/70 text-2xl shadow-sm">
                        {card.icon}
                      </div>

                      <h3 className="text-2xl font-bold text-[#07142f] sm:text-3xl">
                        {card.title}
                      </h3>

                      <p className="mt-3 max-w-[90%] text-sm leading-7 text-slate-700 sm:text-base">
                        {card.subtitle}
                      </p>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <Link to={card.button1Link}>
                        <button
                          type="button"
                          className="rounded-lg bg-[#00539b] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#17357e]"
                        >
                          {card.button1}
                        </button>
                      </Link>

                      {card.button2 && card.button2Link && (
                        <Link to={card.button2Link}>
                          <button
                            type="button"
                            className="rounded-lg border border-[#00539b] bg-white/50 px-5 py-2.5 text-sm font-semibold text-[#00539b] transition hover:bg-white"
                          >
                            {card.button2}
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* SMALL ARROWS ONLY */}
            <div className="mt-5 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={prevCard}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00539b] text-white shadow-md transition hover:bg-[#17357e]"
                aria-label="Previous product"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={nextCard}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00539b] text-white shadow-md transition hover:bg-[#17357e]"
                aria-label="Next product"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
