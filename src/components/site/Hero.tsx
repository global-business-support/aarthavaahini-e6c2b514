// // // // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // // // import { Link } from "@tanstack/react-router";
// // // // // // // // // // // import {
// // // // // // // // // // //   ArrowRight,
// // // // // // // // // // //   ChevronLeft,
// // // // // // // // // // //   ChevronRight,
// // // // // // // // // // //   ShieldCheck,
// // // // // // // // // // //   TrendingUp,
// // // // // // // // // // //   Wallet,
// // // // // // // // // // // } from "lucide-react";

// // // // // // // // // // // import { Button } from "@/components/ui/button";

// // // // // // // // // // // import advisor33 from "@/assets/hero-advisor33.jpeg";
// // // // // // // // // // // import insuranceHero from "@/assets/insurance-hero.png";
// // // // // // // // // // // import mutualFundHero from "@/assets/mutual-fund-hero.png";

// // // // // // // // // // // type Slide = {
// // // // // // // // // // //   image: string;
// // // // // // // // // // //   showButtons?: boolean;
// // // // // // // // // // // };

// // // // // // // // // // // type PromoCard = {
// // // // // // // // // // //   title: string;
// // // // // // // // // // //   subtitle: string;
// // // // // // // // // // //   button1: string;
// // // // // // // // // // //   button2?: string;
// // // // // // // // // // //   button1Link: string;
// // // // // // // // // // //   button2Link?: string;
// // // // // // // // // // //   bg: string;
// // // // // // // // // // //   icon: string;
// // // // // // // // // // // };

// // // // // // // // // // // const slides: Slide[] = [
// // // // // // // // // // //   {
// // // // // // // // // // //     image: advisor33,
// // // // // // // // // // //     showButtons: true,
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     image: insuranceHero,
// // // // // // // // // // //     showButtons: false,
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     image: mutualFundHero,
// // // // // // // // // // //     showButtons: false,
// // // // // // // // // // //   },
// // // // // // // // // // // ];

// // // // // // // // // // // const promoCards: PromoCard[] = [
// // // // // // // // // // //   {
// // // // // // // // // // //     title: "Personal Loan",
// // // // // // // // // // //     subtitle: "Quick personal loan support for urgent needs and goals.",
// // // // // // // // // // //     button1: "Apply Now",
// // // // // // // // // // //     button2: "Know more",
// // // // // // // // // // //     button1Link: "/contact",
// // // // // // // // // // //     button2Link: "/loans",
// // // // // // // // // // //     bg: "bg-[#dbeafe]",
// // // // // // // // // // //     icon: "💳",
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     title: "Insurance",
// // // // // // // // // // //     subtitle: "Protect your family, health, vehicle and valuable assets.",
// // // // // // // // // // //     button1: "Get quote",
// // // // // // // // // // //     button2: "Explore",
// // // // // // // // // // //     button1Link: "/contact",
// // // // // // // // // // //     button2Link: "/insurance",
// // // // // // // // // // //     bg: "bg-[#ffe4f1]",
// // // // // // // // // // //     icon: "🛡️",
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     title: "Mutual Funds",
// // // // // // // // // // //     subtitle: "Build long-term wealth with SIP and investment planning.",
// // // // // // // // // // //     button1: "Invest Now",
// // // // // // // // // // //     button2: "Learn more",
// // // // // // // // // // //     button1Link: "/contact",
// // // // // // // // // // //     button2Link: "/mutual-funds",
// // // // // // // // // // //     bg: "bg-[#dcfce7]",
// // // // // // // // // // //     icon: "📈",
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     title: "Home Loan",
// // // // // // // // // // //     subtitle: "Affordable finance options for your dream home.",
// // // // // // // // // // //     button1: "Apply Now",
// // // // // // // // // // //     button2: "Know more",
// // // // // // // // // // //     button1Link: "/contact",
// // // // // // // // // // //     button2Link: "/loans",
// // // // // // // // // // //     bg: "bg-[#fff2cc]",
// // // // // // // // // // //     icon: "🏠",
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     title: "Business Loan",
// // // // // // // // // // //     subtitle: "Funding solutions for business growth and expansion.",
// // // // // // // // // // //     button1: "Apply Now",
// // // // // // // // // // //     button2: "Learn more",
// // // // // // // // // // //     button1Link: "/contact",
// // // // // // // // // // //     button2Link: "/loans",
// // // // // // // // // // //     bg: "bg-[#e0f2fe]",
// // // // // // // // // // //     icon: "💼",
// // // // // // // // // // //   },
// // // // // // // // // // //   {
// // // // // // // // // // //     title: "Credit Card",
// // // // // // // // // // //     subtitle: "Explore credit card options for daily and lifestyle needs.",
// // // // // // // // // // //     button1: "Apply Now",
// // // // // // // // // // //     button2: "Know more",
// // // // // // // // // // //     button1Link: "/contact",
// // // // // // // // // // //     button2Link: "/loans",
// // // // // // // // // // //     bg: "bg-[#f3f4f6]",
// // // // // // // // // // //     icon: "💰",
// // // // // // // // // // //   },
// // // // // // // // // // // ];

// // // // // // // // // // // function getVisibleCards(activeIndex: number) {
// // // // // // // // // // //   return [0, 1, 2].map((offset) => {
// // // // // // // // // // //     const index = (activeIndex + offset) % promoCards.length;
// // // // // // // // // // //     return promoCards[index];
// // // // // // // // // // //   });
// // // // // // // // // // // }

// // // // // // // // // // // export function Hero() {
// // // // // // // // // // //   const [current, setCurrent] = useState(0);
// // // // // // // // // // //   const [activeCard, setActiveCard] = useState(0);
// // // // // // // // // // //   const [isHeroPaused, setIsHeroPaused] = useState(false);

// // // // // // // // // // //   const visiblePromoCards = getVisibleCards(activeCard);
// // // // // // // // // // //   const activeSlide = slides[current];

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     if (isHeroPaused) return;

// // // // // // // // // // //     const slider = window.setInterval(() => {
// // // // // // // // // // //       setCurrent((prev) => (prev + 1) % slides.length);
// // // // // // // // // // //     }, 5000);

// // // // // // // // // // //     return () => window.clearInterval(slider);
// // // // // // // // // // //   }, [isHeroPaused]);

// // // // // // // // // // //   const nextSlide = () => {
// // // // // // // // // // //     setCurrent((prev) => (prev + 1) % slides.length);
// // // // // // // // // // //   };

// // // // // // // // // // //   const prevSlide = () => {
// // // // // // // // // // //     setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
// // // // // // // // // // //   };

// // // // // // // // // // //   const nextCard = () => {
// // // // // // // // // // //     setActiveCard((prev) => (prev + 1) % promoCards.length);
// // // // // // // // // // //   };

// // // // // // // // // // //   const prevCard = () => {
// // // // // // // // // // //     setActiveCard((prev) =>
// // // // // // // // // // //       prev === 0 ? promoCards.length - 1 : prev - 1,
// // // // // // // // // // //     );
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <>
// // // // // // // // // // //       {/* MAIN HERO */}
// // // // // // // // // // //       <section
// // // // // // // // // // //         id="hero"
// // // // // // // // // // //         onMouseEnter={() => setIsHeroPaused(true)}
// // // // // // // // // // //         onMouseLeave={() => setIsHeroPaused(false)}
// // // // // // // // // // //         className="relative w-full overflow-hidden bg-white pt-16"
// // // // // // // // // // //       >
// // // // // // // // // // //         <div className="relative w-full overflow-hidden bg-[#0f4fa8]">
// // // // // // // // // // //           <div className="relative aspect-[16/9] w-full overflow-hidden md:h-[620px] md:aspect-auto">
// // // // // // // // // // //             {slides.map((slide, index) => (
// // // // // // // // // // //               <img
// // // // // // // // // // //                 key={slide.image}
// // // // // // // // // // //                 src={slide.image}
// // // // // // // // // // //                 alt="Aarthvaahini Financial Services"
// // // // // // // // // // //                 className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
// // // // // // // // // // //                   index === current ? "opacity-100" : "opacity-0"
// // // // // // // // // // //                 }`}
// // // // // // // // // // //                 draggable={false}
// // // // // // // // // // //               />
// // // // // // // // // // //             ))}

// // // // // // // // // // //             {/* FIRST SLIDE BUTTONS */}
// // // // // // // // // // //             {activeSlide.showButtons && (
// // // // // // // // // // //               <div className="absolute bottom-6 left-1/2 z-20 flex w-full max-w-sm -translate-x-1/2 items-center justify-center gap-2 px-4 md:bottom-20 md:left-12 md:max-w-none md:translate-x-0 md:justify-start md:gap-4">
// // // // // // // // // // //                 <Link to="/contact">
// // // // // // // // // // //                   <Button className="h-9 rounded-lg bg-gradient-to-r from-[#17357e] to-blue-600 px-3 text-xs font-semibold text-white shadow-lg transition-all hover:scale-105 sm:h-10 sm:px-5 sm:text-sm md:h-12 md:px-7 md:text-base">
// // // // // // // // // // //                     Free Consultation
// // // // // // // // // // //                     <ArrowRight className="ml-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
// // // // // // // // // // //                   </Button>
// // // // // // // // // // //                 </Link>

// // // // // // // // // // //                 <Link to="/about">
// // // // // // // // // // //                   <Button
// // // // // // // // // // //                     variant="outline"
// // // // // // // // // // //                     className="h-9 rounded-lg border border-[#17357e]/20 bg-white/95 px-3 text-xs font-semibold text-[#17357e] shadow-lg transition hover:scale-105 hover:bg-white sm:h-10 sm:px-5 sm:text-sm md:h-12 md:px-7 md:text-base"
// // // // // // // // // // //                   >
// // // // // // // // // // //                     Meet Our Team
// // // // // // // // // // //                   </Button>
// // // // // // // // // // //                 </Link>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             )}

// // // // // // // // // // //             {/* SERVICE CARDS */}
// // // // // // // // // // //             <div className="absolute bottom-10 right-4 z-20 hidden max-w-[900px] flex-wrap items-center justify-end gap-4 md:flex lg:right-8">
// // // // // // // // // // //               <Link to="/loans">
// // // // // // // // // // //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-blue-200/40 bg-gradient-to-r from-[#17357e] to-[#00539b] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// // // // // // // // // // //                   <Wallet className="h-7 w-7 text-blue-200" />

// // // // // // // // // // //                   <div>
// // // // // // // // // // //                     <h3 className="text-base font-semibold lg:text-lg">
// // // // // // // // // // //                       Loans
// // // // // // // // // // //                     </h3>
// // // // // // // // // // //                     <p className="text-sm text-blue-100">Quick Loans</p>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </Link>

// // // // // // // // // // //               <Link to="/insurance">
// // // // // // // // // // //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-pink-200/40 bg-gradient-to-r from-[#17357e] to-[#7c2d72] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// // // // // // // // // // //                   <ShieldCheck className="h-7 w-7 text-pink-200" />

// // // // // // // // // // //                   <div>
// // // // // // // // // // //                     <h3 className="text-base font-semibold lg:text-lg">
// // // // // // // // // // //                       Insurance
// // // // // // // // // // //                     </h3>
// // // // // // // // // // //                     <p className="text-sm text-pink-100">Secure Insurance</p>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </Link>

// // // // // // // // // // //               <Link to="/mutual-funds">
// // // // // // // // // // //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-green-200/40 bg-gradient-to-r from-[#17357e] to-[#047857] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// // // // // // // // // // //                   <TrendingUp className="h-7 w-7 text-green-200" />

// // // // // // // // // // //                   <div>
// // // // // // // // // // //                     <h3 className="text-base font-semibold lg:text-lg">
// // // // // // // // // // //                       Wealth
// // // // // // // // // // //                     </h3>
// // // // // // // // // // //                     <p className="text-sm text-green-100">Mutual Funds</p>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </Link>
// // // // // // // // // // //             </div>

// // // // // // // // // // //             {/* HERO ARROWS */}
// // // // // // // // // // //             <button
// // // // // // // // // // //               type="button"
// // // // // // // // // // //               onClick={prevSlide}
// // // // // // // // // // //               className="absolute left-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35 md:flex"
// // // // // // // // // // //               aria-label="Previous hero slide"
// // // // // // // // // // //             >
// // // // // // // // // // //               <ChevronLeft className="h-6 w-6 text-white" />
// // // // // // // // // // //             </button>

// // // // // // // // // // //             <button
// // // // // // // // // // //               type="button"
// // // // // // // // // // //               onClick={nextSlide}
// // // // // // // // // // //               className="absolute right-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35 md:flex"
// // // // // // // // // // //               aria-label="Next hero slide"
// // // // // // // // // // //             >
// // // // // // // // // // //               <ChevronRight className="h-6 w-6 text-white" />
// // // // // // // // // // //             </button>

// // // // // // // // // // //             {/* HERO DOTS */}
// // // // // // // // // // //             <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-3 md:bottom-8">
// // // // // // // // // // //               {slides.map((_, index) => (
// // // // // // // // // // //                 <button
// // // // // // // // // // //                   key={index}
// // // // // // // // // // //                   type="button"
// // // // // // // // // // //                   onClick={() => setCurrent(index)}
// // // // // // // // // // //                   aria-label={`Go to slide ${index + 1}`}
// // // // // // // // // // //                   className={`h-2.5 rounded-full transition-all ${
// // // // // // // // // // //                     current === index
// // // // // // // // // // //                       ? "w-9 bg-white"
// // // // // // // // // // //                       : "w-2.5 bg-white/50"
// // // // // // // // // // //                   }`}
// // // // // // // // // // //                 />
// // // // // // // // // // //               ))}
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </section>

// // // // // // // // // // //       {/* PRODUCT / PROMO CARDS */}
// // // // // // // // // // //       <section className="relative z-10 bg-white py-8 sm:py-10">
// // // // // // // // // // //         <div className="mx-auto max-w-[1500px] px-4 sm:px-6">
// // // // // // // // // // //           <div className="relative">
// // // // // // // // // // //             <div className="mb-6 text-center">
// // // // // // // // // // //               <h2 className="text-3xl font-bold text-[#08224a] sm:text-4xl lg:text-5xl">
// // // // // // // // // // //                 Our Financial Products
// // // // // // // // // // //               </h2>

// // // // // // // // // // //               <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
// // // // // // // // // // //                 Loans, insurance and wealth solutions tailored for your goals.
// // // // // // // // // // //               </p>
// // // // // // // // // // //             </div>

// // // // // // // // // // //             {/* SIMPLE PLAIN PRODUCT CARDS */}
// // // // // // // // // // //             <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
// // // // // // // // // // //               {visiblePromoCards.map((card) => (
// // // // // // // // // // //                 <div
// // // // // // // // // // //                   key={card.title}
// // // // // // // // // // //                   className={`relative min-h-[250px] min-w-[86vw] overflow-hidden rounded-3xl border border-slate-100 p-7 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:min-w-[60vw] md:min-w-0 ${card.bg}`}
// // // // // // // // // // //                 >
// // // // // // // // // // //                   <div className="flex h-full flex-col justify-between">
// // // // // // // // // // //                     <div>
// // // // // // // // // // //                       <div className="mb-4 flex h-13 w-13 items-center justify-center rounded-2xl bg-white/70 text-2xl shadow-sm">
// // // // // // // // // // //                         {card.icon}
// // // // // // // // // // //                       </div>

// // // // // // // // // // //                       <h3 className="text-2xl font-bold text-[#07142f] sm:text-3xl">
// // // // // // // // // // //                         {card.title}
// // // // // // // // // // //                       </h3>

// // // // // // // // // // //                       <p className="mt-3 max-w-[90%] text-sm leading-7 text-slate-700 sm:text-base">
// // // // // // // // // // //                         {card.subtitle}
// // // // // // // // // // //                       </p>
// // // // // // // // // // //                     </div>

// // // // // // // // // // //                     <div className="mt-5 flex flex-wrap gap-3">
// // // // // // // // // // //                       <Link to={card.button1Link}>
// // // // // // // // // // //                         <button
// // // // // // // // // // //                           type="button"
// // // // // // // // // // //                           className="rounded-lg bg-[#00539b] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#17357e]"
// // // // // // // // // // //                         >
// // // // // // // // // // //                           {card.button1}
// // // // // // // // // // //                         </button>
// // // // // // // // // // //                       </Link>

// // // // // // // // // // //                       {card.button2 && card.button2Link && (
// // // // // // // // // // //                         <Link to={card.button2Link}>
// // // // // // // // // // //                           <button
// // // // // // // // // // //                             type="button"
// // // // // // // // // // //                             className="rounded-lg border border-[#00539b] bg-white/50 px-5 py-2.5 text-sm font-semibold text-[#00539b] transition hover:bg-white"
// // // // // // // // // // //                           >
// // // // // // // // // // //                             {card.button2}
// // // // // // // // // // //                           </button>
// // // // // // // // // // //                         </Link>
// // // // // // // // // // //                       )}
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               ))}
// // // // // // // // // // //             </div>

// // // // // // // // // // //             {/* SMALL ARROWS ONLY */}
// // // // // // // // // // //             <div className="mt-5 flex items-center justify-center gap-3">
// // // // // // // // // // //               <button
// // // // // // // // // // //                 type="button"
// // // // // // // // // // //                 onClick={prevCard}
// // // // // // // // // // //                 className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00539b] text-white shadow-md transition hover:bg-[#17357e]"
// // // // // // // // // // //                 aria-label="Previous product"
// // // // // // // // // // //               >
// // // // // // // // // // //                 <ChevronLeft className="h-5 w-5" />
// // // // // // // // // // //               </button>

// // // // // // // // // // //               <button
// // // // // // // // // // //                 type="button"
// // // // // // // // // // //                 onClick={nextCard}
// // // // // // // // // // //                 className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00539b] text-white shadow-md transition hover:bg-[#17357e]"
// // // // // // // // // // //                 aria-label="Next product"
// // // // // // // // // // //               >
// // // // // // // // // // //                 <ChevronRight className="h-5 w-5" />
// // // // // // // // // // //               </button>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </section>
// // // // // // // // // // //     </>
// // // // // // // // // // //   );
// // // // // // // // // // // }
// // // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // // import { Link } from "@tanstack/react-router";
// // // // // // // // // // import {
// // // // // // // // // //   ArrowRight,
// // // // // // // // // //   ChevronLeft,
// // // // // // // // // //   ChevronRight,
// // // // // // // // // //   ShieldCheck,
// // // // // // // // // //   TrendingUp,
// // // // // // // // // //   Wallet,
// // // // // // // // // // } from "lucide-react";

// // // // // // // // // // import { Button } from "@/components/ui/button";

// // // // // // // // // // import advisor33 from "@/assets/hero-advisor33.jpeg";
// // // // // // // // // // import insuranceHero from "@/assets/insurance-hero.png";
// // // // // // // // // // import mutualFundHero from "@/assets/mutual-fund-hero.png";

// // // // // // // // // // type Slide = {
// // // // // // // // // //   image: string;
// // // // // // // // // //   showButtons?: boolean;
// // // // // // // // // //   objectPosition: string;
// // // // // // // // // // };

// // // // // // // // // // type PromoCard = {
// // // // // // // // // //   title: string;
// // // // // // // // // //   subtitle: string;
// // // // // // // // // //   button1: string;
// // // // // // // // // //   button2?: string;
// // // // // // // // // //   button1Link: string;
// // // // // // // // // //   button2Link?: string;
// // // // // // // // // //   bg: string;
// // // // // // // // // //   icon: string;
// // // // // // // // // // };

// // // // // // // // // // const slides: Slide[] = [
// // // // // // // // // //   {
// // // // // // // // // //     image: advisor33,
// // // // // // // // // //     showButtons: true,
// // // // // // // // // //     objectPosition: "center top",
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     image: insuranceHero,
// // // // // // // // // //     showButtons: false,
// // // // // // // // // //     objectPosition: "center top",
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     image: mutualFundHero,
// // // // // // // // // //     showButtons: false,
// // // // // // // // // //     objectPosition: "center top",
// // // // // // // // // //   },
// // // // // // // // // // ];

// // // // // // // // // // const promoCards: PromoCard[] = [
// // // // // // // // // //   {
// // // // // // // // // //     title: "Personal Loan",
// // // // // // // // // //     subtitle: "Quick personal loan support for urgent needs and goals.",
// // // // // // // // // //     button1: "Apply Now",
// // // // // // // // // //     button2: "Know more",
// // // // // // // // // //     button1Link: "/contact",
// // // // // // // // // //     button2Link: "/loans",
// // // // // // // // // //     bg: "bg-[#dbeafe]",
// // // // // // // // // //     icon: "💳",
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     title: "Business Loan",
// // // // // // // // // //     subtitle: "Funding solutions for business growth and expansion.",
// // // // // // // // // //     button1: "Apply Now",
// // // // // // // // // //     button2: "Learn more",
// // // // // // // // // //     button1Link: "/contact",
// // // // // // // // // //     button2Link: "/loans",
// // // // // // // // // //     bg: "bg-[#e0f2fe]",
// // // // // // // // // //     icon: "💼",
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     title: "Insurance",
// // // // // // // // // //     subtitle: "Protect your family, health, vehicle and valuable assets.",
// // // // // // // // // //     button1: "Get quote",
// // // // // // // // // //     button2: "Explore",
// // // // // // // // // //     button1Link: "/contact",
// // // // // // // // // //     button2Link: "/insurance",
// // // // // // // // // //     bg: "bg-[#ffe4f1]",
// // // // // // // // // //     icon: "🛡️",
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     title: "Term Life Insurance",
// // // // // // // // // //     subtitle: "Secure your family’s future with affordable term life coverage.",
// // // // // // // // // //     button1: "Get quote",
// // // // // // // // // //     button2: "Explore",
// // // // // // // // // //     button1Link: "/contact",
// // // // // // // // // //     button2Link: "/insurance",
// // // // // // // // // //     bg: "bg-[#eaf2ff]",
// // // // // // // // // //     icon: "👨‍👩‍👧‍👦",
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     title: "Mutual Funds",
// // // // // // // // // //     subtitle: "Build long-term wealth with SIP and investment planning.",
// // // // // // // // // //     button1: "Invest Now",
// // // // // // // // // //     button2: "Learn more",
// // // // // // // // // //     button1Link: "/contact",
// // // // // // // // // //     button2Link: "/mutual-funds",
// // // // // // // // // //     bg: "bg-[#dcfce7]",
// // // // // // // // // //     icon: "📈",
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     title: "Home Loan",
// // // // // // // // // //     subtitle: "Affordable finance options for your dream home.",
// // // // // // // // // //     button1: "Apply Now",
// // // // // // // // // //     button2: "Know more",
// // // // // // // // // //     button1Link: "/contact",
// // // // // // // // // //     button2Link: "/loans",
// // // // // // // // // //     bg: "bg-[#fff2cc]",
// // // // // // // // // //     icon: "🏠",
// // // // // // // // // //   },
// // // // // // // // // // ];

// // // // // // // // // // function getVisibleCards(activeIndex: number) {
// // // // // // // // // //   return [0, 1, 2].map((offset) => {
// // // // // // // // // //     const index = (activeIndex + offset) % promoCards.length;
// // // // // // // // // //     return promoCards[index];
// // // // // // // // // //   });
// // // // // // // // // // }

// // // // // // // // // // export function Hero() {
// // // // // // // // // //   const [current, setCurrent] = useState(0);
// // // // // // // // // //   const [activeCard, setActiveCard] = useState(0);
// // // // // // // // // //   const [isHeroPaused, setIsHeroPaused] = useState(false);

// // // // // // // // // //   const visiblePromoCards = getVisibleCards(activeCard);
// // // // // // // // // //   const activeSlide = slides[current];

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     if (isHeroPaused) return;

// // // // // // // // // //     const slider = window.setInterval(() => {
// // // // // // // // // //       setCurrent((prev) => (prev + 1) % slides.length);
// // // // // // // // // //     }, 5000);

// // // // // // // // // //     return () => window.clearInterval(slider);
// // // // // // // // // //   }, [isHeroPaused]);

// // // // // // // // // //   const nextSlide = () => {
// // // // // // // // // //     setCurrent((prev) => (prev + 1) % slides.length);
// // // // // // // // // //   };

// // // // // // // // // //   const prevSlide = () => {
// // // // // // // // // //     setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
// // // // // // // // // //   };

// // // // // // // // // //   const nextCard = () => {
// // // // // // // // // //     setActiveCard((prev) => (prev + 1) % promoCards.length);
// // // // // // // // // //   };

// // // // // // // // // //   const prevCard = () => {
// // // // // // // // // //     setActiveCard((prev) =>
// // // // // // // // // //       prev === 0 ? promoCards.length - 1 : prev - 1,
// // // // // // // // // //     );
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <>
// // // // // // // // // //       {/* MAIN HERO */}
// // // // // // // // // //       <section
// // // // // // // // // //         id="hero"
// // // // // // // // // //         onMouseEnter={() => setIsHeroPaused(true)}
// // // // // // // // // //         onMouseLeave={() => setIsHeroPaused(false)}
// // // // // // // // // //         className="relative w-full overflow-hidden bg-white pt-20"
// // // // // // // // // //       >
// // // // // // // // // //         <div className="relative w-full overflow-hidden bg-[#0f4fa8]">
// // // // // // // // // //           <div className="relative h-[520px] w-full overflow-hidden sm:h-[560px] md:h-[620px] lg:h-[680px] xl:h-[720px]">
// // // // // // // // // //             {slides.map((slide, index) => (
// // // // // // // // // //               <img
// // // // // // // // // //                 key={slide.image}
// // // // // // // // // //                 src={slide.image}
// // // // // // // // // //                 alt="Aarthvaahini Financial Services"
// // // // // // // // // //                 className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
// // // // // // // // // //                   index === current ? "opacity-100" : "opacity-0"
// // // // // // // // // //                 }`}
// // // // // // // // // //                 style={{
// // // // // // // // // //                   objectPosition: slide.objectPosition,
// // // // // // // // // //                 }}
// // // // // // // // // //                 draggable={false}
// // // // // // // // // //               />
// // // // // // // // // //             ))}

// // // // // // // // // //             {/* FIRST SLIDE BUTTONS */}
// // // // // // // // // //             {activeSlide.showButtons && (
// // // // // // // // // //               <div className="absolute bottom-20 left-4 z-20 flex flex-wrap items-center gap-3 px-3 sm:left-6 md:bottom-20 md:left-10 lg:left-14">
// // // // // // // // // //                 <Link to="/contact">
// // // // // // // // // //                   <Button className="h-10 rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 px-4 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 sm:px-5 md:h-12 md:px-7 md:text-base">
// // // // // // // // // //                     Free Consultation
// // // // // // // // // //                     <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
// // // // // // // // // //                   </Button>
// // // // // // // // // //                 </Link>

// // // // // // // // // //                 <Link to="/about">
// // // // // // // // // //                   <Button
// // // // // // // // // //                     variant="outline"
// // // // // // // // // //                     className="h-10 rounded-xl border border-[#17357e]/20 bg-white/95 px-4 text-sm font-semibold text-[#17357e] shadow-lg transition hover:scale-105 hover:bg-white sm:px-5 md:h-12 md:px-7 md:text-base"
// // // // // // // // // //                   >
// // // // // // // // // //                     Meet Our Team
// // // // // // // // // //                   </Button>
// // // // // // // // // //                 </Link>
// // // // // // // // // //               </div>
// // // // // // // // // //             )}

// // // // // // // // // //             {/* SERVICE CARDS */}
// // // // // // // // // //             <div className="absolute bottom-10 right-4 z-20 hidden max-w-[900px] flex-wrap items-center justify-end gap-4 md:flex lg:right-8">
// // // // // // // // // //               <Link to="/loans">
// // // // // // // // // //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-blue-200/40 bg-gradient-to-r from-[#17357e] to-[#00539b] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// // // // // // // // // //                   <Wallet className="h-7 w-7 text-blue-200" />

// // // // // // // // // //                   <div>
// // // // // // // // // //                     <h3 className="text-base font-semibold lg:text-lg">
// // // // // // // // // //                       Loans
// // // // // // // // // //                     </h3>
// // // // // // // // // //                     <p className="text-sm text-blue-100">Quick Loans</p>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </Link>

// // // // // // // // // //               <Link to="/insurance">
// // // // // // // // // //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-pink-200/40 bg-gradient-to-r from-[#17357e] to-[#7c2d72] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// // // // // // // // // //                   <ShieldCheck className="h-7 w-7 text-pink-200" />

// // // // // // // // // //                   <div>
// // // // // // // // // //                     <h3 className="text-base font-semibold lg:text-lg">
// // // // // // // // // //                       Insurance
// // // // // // // // // //                     </h3>
// // // // // // // // // //                     <p className="text-sm text-pink-100">Secure Insurance</p>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </Link>

// // // // // // // // // //               <Link to="/mutual-funds">
// // // // // // // // // //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-green-200/40 bg-gradient-to-r from-[#17357e] to-[#047857] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// // // // // // // // // //                   <TrendingUp className="h-7 w-7 text-green-200" />

// // // // // // // // // //                   <div>
// // // // // // // // // //                     <h3 className="text-base font-semibold lg:text-lg">
// // // // // // // // // //                       Wealth
// // // // // // // // // //                     </h3>
// // // // // // // // // //                     <p className="text-sm text-green-100">Mutual Funds</p>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </Link>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* HERO ARROWS */}
// // // // // // // // // //             <button
// // // // // // // // // //               type="button"
// // // // // // // // // //               onClick={prevSlide}
// // // // // // // // // //               className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35"
// // // // // // // // // //               aria-label="Previous hero slide"
// // // // // // // // // //             >
// // // // // // // // // //               <ChevronLeft className="h-6 w-6 text-white" />
// // // // // // // // // //             </button>

// // // // // // // // // //             <button
// // // // // // // // // //               type="button"
// // // // // // // // // //               onClick={nextSlide}
// // // // // // // // // //               className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35"
// // // // // // // // // //               aria-label="Next hero slide"
// // // // // // // // // //             >
// // // // // // // // // //               <ChevronRight className="h-6 w-6 text-white" />
// // // // // // // // // //             </button>

// // // // // // // // // //             {/* HERO DOTS REMOVED */}
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </section>

// // // // // // // // // //       {/* PRODUCT / PROMO CARDS */}
// // // // // // // // // //       <section className="relative z-10 bg-white py-8 sm:py-10">
// // // // // // // // // //         <div className="mx-auto max-w-[1500px] px-4 sm:px-6">
// // // // // // // // // //           <div className="relative">
// // // // // // // // // //             <div className="mb-6 text-center">
// // // // // // // // // //               <h2 className="text-3xl font-bold text-[#08224a] sm:text-4xl lg:text-5xl">
// // // // // // // // // //                 Our Financial Products
// // // // // // // // // //               </h2>

// // // // // // // // // //               <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
// // // // // // // // // //                 Loans, insurance and wealth solutions tailored for your goals.
// // // // // // // // // //               </p>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* SIMPLE PLAIN PRODUCT CARDS */}
// // // // // // // // // //             <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
// // // // // // // // // //               {visiblePromoCards.map((card) => (
// // // // // // // // // //                 <div
// // // // // // // // // //                   key={card.title}
// // // // // // // // // //                   className={`relative min-h-[250px] min-w-[86vw] overflow-hidden rounded-3xl border border-slate-100 p-7 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:min-w-[60vw] md:min-w-0 ${card.bg}`}
// // // // // // // // // //                 >
// // // // // // // // // //                   <div className="flex h-full flex-col justify-between">
// // // // // // // // // //                     <div>
// // // // // // // // // //                       <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/70 text-2xl shadow-sm">
// // // // // // // // // //                         {card.icon}
// // // // // // // // // //                       </div>

// // // // // // // // // //                       <h3 className="text-2xl font-bold text-[#07142f] sm:text-3xl">
// // // // // // // // // //                         {card.title}
// // // // // // // // // //                       </h3>

// // // // // // // // // //                       <p className="mt-3 max-w-[90%] text-sm leading-7 text-slate-700 sm:text-base">
// // // // // // // // // //                         {card.subtitle}
// // // // // // // // // //                       </p>
// // // // // // // // // //                     </div>

// // // // // // // // // //                     <div className="mt-5 flex flex-wrap gap-3">
// // // // // // // // // //                       <Link to={card.button1Link}>
// // // // // // // // // //                         <button
// // // // // // // // // //                           type="button"
// // // // // // // // // //                           className="rounded-lg bg-[#00539b] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#17357e]"
// // // // // // // // // //                         >
// // // // // // // // // //                           {card.button1}
// // // // // // // // // //                         </button>
// // // // // // // // // //                       </Link>

// // // // // // // // // //                       {card.button2 && card.button2Link && (
// // // // // // // // // //                         <Link to={card.button2Link}>
// // // // // // // // // //                           <button
// // // // // // // // // //                             type="button"
// // // // // // // // // //                             className="rounded-lg border border-[#00539b] bg-white/50 px-5 py-2.5 text-sm font-semibold text-[#00539b] transition hover:bg-white"
// // // // // // // // // //                           >
// // // // // // // // // //                             {card.button2}
// // // // // // // // // //                           </button>
// // // // // // // // // //                         </Link>
// // // // // // // // // //                       )}
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               ))}
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* SMALL ARROWS ONLY */}
// // // // // // // // // //             <div className="mt-5 flex items-center justify-center gap-3">
// // // // // // // // // //               <button
// // // // // // // // // //                 type="button"
// // // // // // // // // //                 onClick={prevCard}
// // // // // // // // // //                 className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00539b] text-white shadow-md transition hover:bg-[#17357e]"
// // // // // // // // // //                 aria-label="Previous product"
// // // // // // // // // //               >
// // // // // // // // // //                 <ChevronLeft className="h-5 w-5" />
// // // // // // // // // //               </button>

// // // // // // // // // //               <button
// // // // // // // // // //                 type="button"
// // // // // // // // // //                 onClick={nextCard}
// // // // // // // // // //                 className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00539b] text-white shadow-md transition hover:bg-[#17357e]"
// // // // // // // // // //                 aria-label="Next product"
// // // // // // // // // //               >
// // // // // // // // // //                 <ChevronRight className="h-5 w-5" />
// // // // // // // // // //               </button>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </section>
// // // // // // // // // //     </>
// // // // // // // // // //   );
// // // // // // // // // // }
// // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // import { Link } from "@tanstack/react-router";
// // // // // // // // // import {
// // // // // // // // //   ArrowRight,
// // // // // // // // //   ChevronLeft,
// // // // // // // // //   ChevronRight,
// // // // // // // // //   ShieldCheck,
// // // // // // // // //   TrendingUp,
// // // // // // // // //   Wallet,
// // // // // // // // // } from "lucide-react";

// // // // // // // // // import { Button } from "@/components/ui/button";

// // // // // // // // // import advisor33 from "@/assets/hero-advisor33.jpeg";
// // // // // // // // // import insuranceHero from "@/assets/insurance-hero.png";
// // // // // // // // // import mutualFundHero from "@/assets/mutual-fund-hero.png";

// // // // // // // // // type Slide = {
// // // // // // // // //   image: string;
// // // // // // // // //   showButtons?: boolean;
// // // // // // // // //   objectPosition: string;
// // // // // // // // // };

// // // // // // // // // type PromoCard = {
// // // // // // // // //   title: string;
// // // // // // // // //   subtitle: string;
// // // // // // // // //   button1: string;
// // // // // // // // //   button2?: string;
// // // // // // // // //   button1Link: string;
// // // // // // // // //   button2Link?: string;
// // // // // // // // //   bg: string;
// // // // // // // // //   icon: string;
// // // // // // // // //   glow: string;
// // // // // // // // // };

// // // // // // // // // const slides: Slide[] = [
// // // // // // // // //   {
// // // // // // // // //     image: advisor33,
// // // // // // // // //     showButtons: true,
// // // // // // // // //     objectPosition: "center top",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     image: insuranceHero,
// // // // // // // // //     showButtons: false,
// // // // // // // // //     objectPosition: "center top",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     image: mutualFundHero,
// // // // // // // // //     showButtons: false,
// // // // // // // // //     objectPosition: "center top",
// // // // // // // // //   },
// // // // // // // // // ];

// // // // // // // // // const promoCards: PromoCard[] = [
// // // // // // // // //   {
// // // // // // // // //     title: "Personal Loan",
// // // // // // // // //     subtitle: "Quick personal loan support for urgent needs and goals.",
// // // // // // // // //     button1: "Apply Now",
// // // // // // // // //     button2: "Know more",
// // // // // // // // //     button1Link: "/contact",
// // // // // // // // //     button2Link: "/loans",
// // // // // // // // //     bg: "bg-gradient-to-br from-[#dbeafe] via-[#eff6ff] to-[#bfdbfe]",
// // // // // // // // //     icon: "💳",
// // // // // // // // //     glow: "from-blue-400/40 to-cyan-400/30",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     title: "Business Loan",
// // // // // // // // //     subtitle: "Funding solutions for business growth and expansion.",
// // // // // // // // //     button1: "Apply Now",
// // // // // // // // //     button2: "Learn more",
// // // // // // // // //     button1Link: "/contact",
// // // // // // // // //     button2Link: "/loans",
// // // // // // // // //     bg: "bg-gradient-to-br from-[#e0f2fe] via-[#f0f9ff] to-[#bae6fd]",
// // // // // // // // //     icon: "💼",
// // // // // // // // //     glow: "from-sky-400/40 to-blue-400/30",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     title: "Insurance",
// // // // // // // // //     subtitle: "Protect your family, health, vehicle and valuable assets.",
// // // // // // // // //     button1: "Get quote",
// // // // // // // // //     button2: "Explore",
// // // // // // // // //     button1Link: "/contact",
// // // // // // // // //     button2Link: "/insurance",
// // // // // // // // //     bg: "bg-gradient-to-br from-[#ffe4f1] via-[#fff1f7] to-[#fbcfe8]",
// // // // // // // // //     icon: "🛡️",
// // // // // // // // //     glow: "from-pink-400/40 to-rose-400/30",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     title: "Term Life Insurance",
// // // // // // // // //     subtitle: "Secure your family’s future with affordable term life coverage.",
// // // // // // // // //     button1: "Get quote",
// // // // // // // // //     button2: "Explore",
// // // // // // // // //     button1Link: "/contact",
// // // // // // // // //     button2Link: "/insurance",
// // // // // // // // //     bg: "bg-gradient-to-br from-[#eaf2ff] via-[#f8fbff] to-[#c7d2fe]",
// // // // // // // // //     icon: "👨‍👩‍👧‍👦",
// // // // // // // // //     glow: "from-indigo-400/40 to-blue-400/30",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     title: "Mutual Funds",
// // // // // // // // //     subtitle: "Build long-term wealth with SIP and investment planning.",
// // // // // // // // //     button1: "Invest Now",
// // // // // // // // //     button2: "Learn more",
// // // // // // // // //     button1Link: "/contact",
// // // // // // // // //     button2Link: "/mutual-funds",
// // // // // // // // //     bg: "bg-gradient-to-br from-[#dcfce7] via-[#f0fdf4] to-[#bbf7d0]",
// // // // // // // // //     icon: "📈",
// // // // // // // // //     glow: "from-green-400/40 to-emerald-400/30",
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     title: "Home Loan",
// // // // // // // // //     subtitle: "Affordable finance options for your dream home.",
// // // // // // // // //     button1: "Apply Now",
// // // // // // // // //     button2: "Know more",
// // // // // // // // //     button1Link: "/contact",
// // // // // // // // //     button2Link: "/loans",
// // // // // // // // //     bg: "bg-gradient-to-br from-[#fff2cc] via-[#fffbeb] to-[#fde68a]",
// // // // // // // // //     icon: "🏠",
// // // // // // // // //     glow: "from-yellow-400/40 to-orange-400/30",
// // // // // // // // //   },
// // // // // // // // // ];

// // // // // // // // // function getVisibleCards(activeIndex: number) {
// // // // // // // // //   return [0, 1, 2].map((offset) => {
// // // // // // // // //     const index = (activeIndex + offset) % promoCards.length;
// // // // // // // // //     return promoCards[index];
// // // // // // // // //   });
// // // // // // // // // }

// // // // // // // // // export function Hero() {
// // // // // // // // //   const [current, setCurrent] = useState(0);
// // // // // // // // //   const [activeCard, setActiveCard] = useState(0);
// // // // // // // // //   const [isHeroPaused, setIsHeroPaused] = useState(false);

// // // // // // // // //   const visiblePromoCards = getVisibleCards(activeCard);
// // // // // // // // //   const activeSlide = slides[current];

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (isHeroPaused) return;

// // // // // // // // //     const slider = window.setInterval(() => {
// // // // // // // // //       setCurrent((prev) => (prev + 1) % slides.length);
// // // // // // // // //     }, 5000);

// // // // // // // // //     return () => window.clearInterval(slider);
// // // // // // // // //   }, [isHeroPaused]);

// // // // // // // // //   const nextSlide = () => {
// // // // // // // // //     setCurrent((prev) => (prev + 1) % slides.length);
// // // // // // // // //   };

// // // // // // // // //   const prevSlide = () => {
// // // // // // // // //     setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
// // // // // // // // //   };

// // // // // // // // //   const nextCard = () => {
// // // // // // // // //     setActiveCard((prev) => (prev + 1) % promoCards.length);
// // // // // // // // //   };

// // // // // // // // //   const prevCard = () => {
// // // // // // // // //     setActiveCard((prev) =>
// // // // // // // // //       prev === 0 ? promoCards.length - 1 : prev - 1,
// // // // // // // // //     );
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <>
// // // // // // // // //       {/* MAIN HERO */}
// // // // // // // // //       <section
// // // // // // // // //         id="hero"
// // // // // // // // //         onMouseEnter={() => setIsHeroPaused(true)}
// // // // // // // // //         onMouseLeave={() => setIsHeroPaused(false)}
// // // // // // // // //         className="relative w-full overflow-hidden bg-white pt-20"
// // // // // // // // //       >
// // // // // // // // //         <div className="relative w-full overflow-hidden bg-[#0f4fa8]">
// // // // // // // // //           <div className="relative h-[520px] w-full overflow-hidden sm:h-[560px] md:h-[620px] lg:h-[680px] xl:h-[720px]">
// // // // // // // // //             {slides.map((slide, index) => (
// // // // // // // // //               <img
// // // // // // // // //                 key={slide.image}
// // // // // // // // //                 src={slide.image}
// // // // // // // // //                 alt="Aarthvaahini Financial Services"
// // // // // // // // //                 className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
// // // // // // // // //                   index === current ? "opacity-100" : "opacity-0"
// // // // // // // // //                 }`}
// // // // // // // // //                 style={{
// // // // // // // // //                   objectPosition: slide.objectPosition,
// // // // // // // // //                 }}
// // // // // // // // //                 draggable={false}
// // // // // // // // //               />
// // // // // // // // //             ))}

// // // // // // // // //             {/* FIRST SLIDE BUTTONS */}
// // // // // // // // //             {activeSlide.showButtons && (
// // // // // // // // //               <div className="absolute bottom-20 left-4 z-20 flex flex-wrap items-center gap-3 px-3 sm:left-6 md:bottom-20 md:left-10 lg:left-14">
// // // // // // // // //                 <Link to="/contact">
// // // // // // // // //                   <Button className="h-10 rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 px-4 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 sm:px-5 md:h-12 md:px-7 md:text-base">
// // // // // // // // //                     Free Consultation
// // // // // // // // //                     <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
// // // // // // // // //                   </Button>
// // // // // // // // //                 </Link>

// // // // // // // // //                 <Link to="/about">
// // // // // // // // //                   <Button
// // // // // // // // //                     variant="outline"
// // // // // // // // //                     className="h-10 rounded-xl border border-[#17357e]/20 bg-white/95 px-4 text-sm font-semibold text-[#17357e] shadow-lg transition hover:scale-105 hover:bg-white sm:px-5 md:h-12 md:px-7 md:text-base"
// // // // // // // // //                   >
// // // // // // // // //                     Meet Our Team
// // // // // // // // //                   </Button>
// // // // // // // // //                 </Link>
// // // // // // // // //               </div>
// // // // // // // // //             )}

// // // // // // // // //             {/* SERVICE CARDS */}
// // // // // // // // //             <div className="absolute bottom-10 right-4 z-20 hidden max-w-[900px] flex-wrap items-center justify-end gap-4 md:flex lg:right-8">
// // // // // // // // //               <Link to="/loans">
// // // // // // // // //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-blue-200/40 bg-gradient-to-r from-[#17357e] to-[#00539b] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// // // // // // // // //                   <Wallet className="h-7 w-7 text-blue-200" />

// // // // // // // // //                   <div>
// // // // // // // // //                     <h3 className="text-base font-semibold lg:text-lg">
// // // // // // // // //                       Loans
// // // // // // // // //                     </h3>
// // // // // // // // //                     <p className="text-sm text-blue-100">Quick Loans</p>
// // // // // // // // //                   </div>
// // // // // // // // //                 </div>
// // // // // // // // //               </Link>

// // // // // // // // //               <Link to="/insurance">
// // // // // // // // //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-pink-200/40 bg-gradient-to-r from-[#17357e] to-[#7c2d72] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// // // // // // // // //                   <ShieldCheck className="h-7 w-7 text-pink-200" />

// // // // // // // // //                   <div>
// // // // // // // // //                     <h3 className="text-base font-semibold lg:text-lg">
// // // // // // // // //                       Insurance
// // // // // // // // //                     </h3>
// // // // // // // // //                     <p className="text-sm text-pink-100">Secure Insurance</p>
// // // // // // // // //                   </div>
// // // // // // // // //                 </div>
// // // // // // // // //               </Link>

// // // // // // // // //               <Link to="/mutual-funds">
// // // // // // // // //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-green-200/40 bg-gradient-to-r from-[#17357e] to-[#047857] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// // // // // // // // //                   <TrendingUp className="h-7 w-7 text-green-200" />

// // // // // // // // //                   <div>
// // // // // // // // //                     <h3 className="text-base font-semibold lg:text-lg">
// // // // // // // // //                       Wealth
// // // // // // // // //                     </h3>
// // // // // // // // //                     <p className="text-sm text-green-100">Mutual Funds</p>
// // // // // // // // //                   </div>
// // // // // // // // //                 </div>
// // // // // // // // //               </Link>
// // // // // // // // //             </div>

// // // // // // // // //             {/* HERO ARROWS */}
// // // // // // // // //             <button
// // // // // // // // //               type="button"
// // // // // // // // //               onClick={prevSlide}
// // // // // // // // //               className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35"
// // // // // // // // //               aria-label="Previous hero slide"
// // // // // // // // //             >
// // // // // // // // //               <ChevronLeft className="h-6 w-6 text-white" />
// // // // // // // // //             </button>

// // // // // // // // //             <button
// // // // // // // // //               type="button"
// // // // // // // // //               onClick={nextSlide}
// // // // // // // // //               className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35"
// // // // // // // // //               aria-label="Next hero slide"
// // // // // // // // //             >
// // // // // // // // //               <ChevronRight className="h-6 w-6 text-white" />
// // // // // // // // //             </button>

// // // // // // // // //             {/* HERO DOTS REMOVED */}
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* PRODUCT / PROMO CARDS */}
// // // // // // // // //       <section className="relative z-10 overflow-hidden bg-white py-10 sm:py-12">
// // // // // // // // //         <div className="pointer-events-none absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
// // // // // // // // //         <div className="pointer-events-none absolute right-[-120px] bottom-10 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />

// // // // // // // // //         <div className="mx-auto max-w-[1500px] px-4 sm:px-6">
// // // // // // // // //           <div className="relative">
// // // // // // // // //             <div className="mb-8 text-center">
// // // // // // // // //               <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-[#00539b]">
// // // // // // // // //                 Explore Services
// // // // // // // // //               </p>

// // // // // // // // //               <h2 className="text-3xl font-black text-[#08224a] sm:text-4xl lg:text-5xl">
// // // // // // // // //                 Our Financial Products
// // // // // // // // //               </h2>

// // // // // // // // //               <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
// // // // // // // // //                 Loans, insurance and wealth solutions tailored for your goals.
// // // // // // // // //               </p>
// // // // // // // // //             </div>

// // // // // // // // //             {/* ANIMATED PRODUCT CARDS */}
// // // // // // // // //             <div className="flex gap-6 overflow-x-auto pb-5 pt-3 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
// // // // // // // // //               {visiblePromoCards.map((card, index) => (
// // // // // // // // //                 <div
// // // // // // // // //                   key={card.title}
// // // // // // // // //                   className={`group relative min-h-[285px] min-w-[86vw] overflow-hidden rounded-[32px] border border-white/70 p-[1px] shadow-xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl sm:min-w-[60vw] md:min-w-0`}
// // // // // // // // //                   style={{
// // // // // // // // //                     animation: "fadeCard 0.6s ease both",
// // // // // // // // //                     animationDelay: `${index * 120}ms`,
// // // // // // // // //                   }}
// // // // // // // // //                 >
// // // // // // // // //                   {/* gradient border glow */}
// // // // // // // // //                   <div
// // // // // // // // //                     className={`absolute inset-0 bg-gradient-to-br ${card.glow} opacity-0 blur-xl transition duration-500 group-hover:opacity-100`}
// // // // // // // // //                   />

// // // // // // // // //                   {/* shine line */}
// // // // // // // // //                   <div className="absolute inset-y-0 -left-24 z-20 w-20 rotate-12 bg-white/40 blur-md transition-all duration-700 group-hover:left-[120%]" />

// // // // // // // // //                   <div
// // // // // // // // //                     className={`relative z-10 flex h-full min-h-[285px] flex-col justify-between rounded-[31px] p-7 ${card.bg}`}
// // // // // // // // //                   >
// // // // // // // // //                     {/* soft circles */}
// // // // // // // // //                     <div className="absolute right-[-35px] top-[-35px] h-28 w-28 rounded-full bg-white/40 transition duration-500 group-hover:scale-150" />
// // // // // // // // //                     <div className="absolute bottom-[-45px] right-12 h-24 w-24 rounded-full bg-white/30 transition duration-500 group-hover:scale-125" />

// // // // // // // // //                     <div className="relative z-10">
// // // // // // // // //                       <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl border border-white/70 bg-white/80 text-3xl shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-6 group-hover:scale-110">
// // // // // // // // //                         {card.icon}
// // // // // // // // //                       </div>

// // // // // // // // //                       <h3 className="text-2xl font-black text-[#07142f] transition duration-300 group-hover:text-[#00539b] sm:text-3xl">
// // // // // // // // //                         {card.title}
// // // // // // // // //                       </h3>

// // // // // // // // //                       <p className="mt-3 max-w-[92%] text-sm leading-7 text-slate-700 sm:text-base">
// // // // // // // // //                         {card.subtitle}
// // // // // // // // //                       </p>
// // // // // // // // //                     </div>

// // // // // // // // //                     <div className="relative z-10 mt-6 flex flex-wrap gap-3">
// // // // // // // // //                       <Link to={card.button1Link}>
// // // // // // // // //                         <button
// // // // // // // // //                           type="button"
// // // // // // // // //                           className="group/btn inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00539b] to-[#17357e] px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
// // // // // // // // //                         >
// // // // // // // // //                           {card.button1}
// // // // // // // // //                           <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
// // // // // // // // //                         </button>
// // // // // // // // //                       </Link>

// // // // // // // // //                       {card.button2 && card.button2Link && (
// // // // // // // // //                         <Link to={card.button2Link}>
// // // // // // // // //                           <button
// // // // // // // // //                             type="button"
// // // // // // // // //                             className="rounded-xl border border-[#00539b]/50 bg-white/70 px-5 py-2.5 text-sm font-bold text-[#00539b] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
// // // // // // // // //                           >
// // // // // // // // //                             {card.button2}
// // // // // // // // //                           </button>
// // // // // // // // //                         </Link>
// // // // // // // // //                       )}
// // // // // // // // //                     </div>
// // // // // // // // //                   </div>
// // // // // // // // //                 </div>
// // // // // // // // //               ))}
// // // // // // // // //             </div>

// // // // // // // // //             {/* SMALL ARROWS ONLY */}
// // // // // // // // //             <div className="mt-6 flex items-center justify-center gap-3">
// // // // // // // // //               <button
// // // // // // // // //                 type="button"
// // // // // // // // //                 onClick={prevCard}
// // // // // // // // //                 className="flex h-11 w-11 items-center justify-center rounded-full bg-[#00539b] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#17357e] hover:shadow-xl"
// // // // // // // // //                 aria-label="Previous product"
// // // // // // // // //               >
// // // // // // // // //                 <ChevronLeft className="h-5 w-5" />
// // // // // // // // //               </button>

// // // // // // // // //               <button
// // // // // // // // //                 type="button"
// // // // // // // // //                 onClick={nextCard}
// // // // // // // // //                 className="flex h-11 w-11 items-center justify-center rounded-full bg-[#00539b] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#17357e] hover:shadow-xl"
// // // // // // // // //                 aria-label="Next product"
// // // // // // // // //               >
// // // // // // // // //                 <ChevronRight className="h-5 w-5" />
// // // // // // // // //               </button>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         <style>{`
// // // // // // // // //           @keyframes fadeCard {
// // // // // // // // //             from {
// // // // // // // // //               opacity: 0;
// // // // // // // // //               transform: translateY(24px) scale(0.96);
// // // // // // // // //             }
// // // // // // // // //             to {
// // // // // // // // //               opacity: 1;
// // // // // // // // //               transform: translateY(0) scale(1);
// // // // // // // // //             }
// // // // // // // // //           }
// // // // // // // // //         `}</style>
// // // // // // // // //       </section>
// // // // // // // // //     </>
// // // // // // // // //   );
// // // // // // // // // }
// // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // import { Link } from "@tanstack/react-router";
// // // // // // // // import { motion } from "framer-motion";
// // // // // // // // import {
// // // // // // // //   ArrowRight,
// // // // // // // //   ChevronLeft,
// // // // // // // //   ChevronRight,
// // // // // // // //   ShieldCheck,
// // // // // // // //   TrendingUp,
// // // // // // // //   Wallet,
// // // // // // // // } from "lucide-react";

// // // // // // // // import { Button } from "@/components/ui/button";

// // // // // // // // import advisor33 from "@/assets/hero-advisor33.jpeg";
// // // // // // // // import insuranceHero from "@/assets/insurance-hero.png";
// // // // // // // // import mutualFundHero from "@/assets/mutual-fund-hero.png";

// // // // // // // // import personalLoanImg from "@/assets/products/personal-loan.png";
// // // // // // // // import businessLoanImg from "@/assets/products/business-loan.png";
// // // // // // // // import insuranceCardImg from "@/assets/products/insurance.png";
// // // // // // // // import termLifeInsuranceImg from "@/assets/products/term-life-insurance.png";
// // // // // // // // import mutualFundsImg from "@/assets/products/mutual-funds.png";
// // // // // // // // import homeLoanImg from "@/assets/products/home-loan.png";

// // // // // // // // type Slide = {
// // // // // // // //   image: string;
// // // // // // // //   showButtons?: boolean;
// // // // // // // //   objectPosition: string;
// // // // // // // // };

// // // // // // // // type PromoCard = {
// // // // // // // //   title: string;
// // // // // // // //   subtitle: string;
// // // // // // // //   button1: string;
// // // // // // // //   button2?: string;
// // // // // // // //   button1Link: string;
// // // // // // // //   button2Link?: string;
// // // // // // // //   image: string;
// // // // // // // // };

// // // // // // // // const slides: Slide[] = [
// // // // // // // //   {
// // // // // // // //     image: advisor33,
// // // // // // // //     showButtons: true,
// // // // // // // //     objectPosition: "center top",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     image: insuranceHero,
// // // // // // // //     showButtons: false,
// // // // // // // //     objectPosition: "center top",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     image: mutualFundHero,
// // // // // // // //     showButtons: false,
// // // // // // // //     objectPosition: "center top",
// // // // // // // //   },
// // // // // // // // ];

// // // // // // // // const promoCards: PromoCard[] = [
// // // // // // // //   {
// // // // // // // //     title: "Personal Loan",
// // // // // // // //     subtitle: "Quick personal loan support for urgent needs and goals.",
// // // // // // // //     button1: "Apply Now",
// // // // // // // //     button2: "Know more",
// // // // // // // //     button1Link: "/contact",
// // // // // // // //     button2Link: "/loans",
// // // // // // // //     image: personalLoanImg,
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     title: "Business Loan",
// // // // // // // //     subtitle: "Funding solutions for business growth and expansion.",
// // // // // // // //     button1: "Apply Now",
// // // // // // // //     button2: "Learn more",
// // // // // // // //     button1Link: "/contact",
// // // // // // // //     button2Link: "/loans",
// // // // // // // //     image: businessLoanImg,
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     title: "Insurance",
// // // // // // // //     subtitle: "Protect your family, health, vehicle and valuable assets.",
// // // // // // // //     button1: "Get quote",
// // // // // // // //     button2: "Explore",
// // // // // // // //     button1Link: "/contact",
// // // // // // // //     button2Link: "/insurance",
// // // // // // // //     image: insuranceCardImg,
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     title: "Term Life Insurance",
// // // // // // // //     subtitle: "Secure your family’s future with affordable term life coverage.",
// // // // // // // //     button1: "Get quote",
// // // // // // // //     button2: "Explore",
// // // // // // // //     button1Link: "/contact",
// // // // // // // //     button2Link: "/insurance",
// // // // // // // //     image: termLifeInsuranceImg,
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     title: "Mutual Funds",
// // // // // // // //     subtitle: "Build long-term wealth with SIP and investment planning.",
// // // // // // // //     button1: "Invest Now",
// // // // // // // //     button2: "Learn more",
// // // // // // // //     button1Link: "/contact",
// // // // // // // //     button2Link: "/mutual-funds",
// // // // // // // //     image: mutualFundsImg,
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     title: "Home Loan",
// // // // // // // //     subtitle: "Affordable finance options for your dream home.",
// // // // // // // //     button1: "Apply Now",
// // // // // // // //     button2: "Know more",
// // // // // // // //     button1Link: "/contact",
// // // // // // // //     button2Link: "/loans",
// // // // // // // //     image: homeLoanImg,
// // // // // // // //   },
// // // // // // // // ];

// // // // // // // // function getCoverflowCards(activeIndex: number) {
// // // // // // // //   const total = promoCards.length;

// // // // // // // //   return [-2, -1, 0, 1, 2].map((offset) => {
// // // // // // // //     const index = (activeIndex + offset + total) % total;

// // // // // // // //     return {
// // // // // // // //       card: promoCards[index],
// // // // // // // //       index,
// // // // // // // //       offset,
// // // // // // // //     };
// // // // // // // //   });
// // // // // // // // }

// // // // // // // // export function Hero() {
// // // // // // // //   const [current, setCurrent] = useState(0);
// // // // // // // //   const [activeCard, setActiveCard] = useState(0);
// // // // // // // //   const [isHeroPaused, setIsHeroPaused] = useState(false);

// // // // // // // //   const activeSlide = slides[current];
// // // // // // // //   const coverflowCards = getCoverflowCards(activeCard);

// // // // // // // //   useEffect(() => {
// // // // // // // //     if (isHeroPaused) return;

// // // // // // // //     const slider = window.setInterval(() => {
// // // // // // // //       setCurrent((prev) => (prev + 1) % slides.length);
// // // // // // // //     }, 5000);

// // // // // // // //     return () => window.clearInterval(slider);
// // // // // // // //   }, [isHeroPaused]);

// // // // // // // //   useEffect(() => {
// // // // // // // //     const productSlider = window.setInterval(() => {
// // // // // // // //       setActiveCard((prev) => (prev + 1) % promoCards.length);
// // // // // // // //     }, 4500);

// // // // // // // //     return () => window.clearInterval(productSlider);
// // // // // // // //   }, []);

// // // // // // // //   const nextSlide = () => {
// // // // // // // //     setCurrent((prev) => (prev + 1) % slides.length);
// // // // // // // //   };

// // // // // // // //   const prevSlide = () => {
// // // // // // // //     setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
// // // // // // // //   };

// // // // // // // //   const nextCard = () => {
// // // // // // // //     setActiveCard((prev) => (prev + 1) % promoCards.length);
// // // // // // // //   };

// // // // // // // //   const prevCard = () => {
// // // // // // // //     setActiveCard((prev) =>
// // // // // // // //       prev === 0 ? promoCards.length - 1 : prev - 1,
// // // // // // // //     );
// // // // // // // //   };

// // // // // // // //   const getCardAnimation = (offset: number) => {
// // // // // // // //     if (offset === 0) {
// // // // // // // //       return {
// // // // // // // //         x: 0,
// // // // // // // //         scale: 1,
// // // // // // // //         rotateY: 0,
// // // // // // // //         opacity: 1,
// // // // // // // //         zIndex: 50,
// // // // // // // //         filter: "grayscale(0%) blur(0px)",
// // // // // // // //       };
// // // // // // // //     }

// // // // // // // //     if (offset === -1) {
// // // // // // // //       return {
// // // // // // // //         x: -190,
// // // // // // // //         scale: 0.82,
// // // // // // // //         rotateY: 32,
// // // // // // // //         opacity: 0.75,
// // // // // // // //         zIndex: 40,
// // // // // // // //         filter: "grayscale(75%) blur(0px)",
// // // // // // // //       };
// // // // // // // //     }

// // // // // // // //     if (offset === 1) {
// // // // // // // //       return {
// // // // // // // //         x: 190,
// // // // // // // //         scale: 0.82,
// // // // // // // //         rotateY: -32,
// // // // // // // //         opacity: 0.75,
// // // // // // // //         zIndex: 40,
// // // // // // // //         filter: "grayscale(75%) blur(0px)",
// // // // // // // //       };
// // // // // // // //     }

// // // // // // // //     if (offset === -2) {
// // // // // // // //       return {
// // // // // // // //         x: -330,
// // // // // // // //         scale: 0.68,
// // // // // // // //         rotateY: 42,
// // // // // // // //         opacity: 0.45,
// // // // // // // //         zIndex: 30,
// // // // // // // //         filter: "grayscale(100%) blur(0.5px)",
// // // // // // // //       };
// // // // // // // //     }

// // // // // // // //     return {
// // // // // // // //       x: 330,
// // // // // // // //       scale: 0.68,
// // // // // // // //       rotateY: -42,
// // // // // // // //       opacity: 0.45,
// // // // // // // //       zIndex: 30,
// // // // // // // //       filter: "grayscale(100%) blur(0.5px)",
// // // // // // // //     };
// // // // // // // //   };

// // // // // // // //   const activeProduct = promoCards[activeCard];

// // // // // // // //   return (
// // // // // // // //     <>
// // // // // // // //       {/* MAIN HERO */}
// // // // // // // //       <section
// // // // // // // //         id="hero"
// // // // // // // //         onMouseEnter={() => setIsHeroPaused(true)}
// // // // // // // //         onMouseLeave={() => setIsHeroPaused(false)}
// // // // // // // //         className="relative w-full overflow-hidden bg-white pt-20"
// // // // // // // //       >
// // // // // // // //         <div className="relative w-full overflow-hidden bg-[#0f4fa8]">
// // // // // // // //           <div className="relative h-[520px] w-full overflow-hidden sm:h-[560px] md:h-[620px] lg:h-[680px] xl:h-[720px]">
// // // // // // // //             {slides.map((slide, index) => (
// // // // // // // //               <img
// // // // // // // //                 key={slide.image}
// // // // // // // //                 src={slide.image}
// // // // // // // //                 alt="Aarthvaahini Financial Services"
// // // // // // // //                 className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
// // // // // // // //                   index === current ? "opacity-100" : "opacity-0"
// // // // // // // //                 }`}
// // // // // // // //                 style={{
// // // // // // // //                   objectPosition: slide.objectPosition,
// // // // // // // //                 }}
// // // // // // // //                 draggable={false}
// // // // // // // //               />
// // // // // // // //             ))}

// // // // // // // //             {activeSlide.showButtons && (
// // // // // // // //               <div className="absolute bottom-20 left-4 z-20 flex flex-wrap items-center gap-3 px-3 sm:left-6 md:bottom-20 md:left-10 lg:left-14">
// // // // // // // //                 <Link to="/contact">
// // // // // // // //                   <Button className="h-10 rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 px-4 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 sm:px-5 md:h-12 md:px-7 md:text-base">
// // // // // // // //                     Free Consultation
// // // // // // // //                     <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
// // // // // // // //                   </Button>
// // // // // // // //                 </Link>

// // // // // // // //                 <Link to="/about">
// // // // // // // //                   <Button
// // // // // // // //                     variant="outline"
// // // // // // // //                     className="h-10 rounded-xl border border-[#17357e]/20 bg-white/95 px-4 text-sm font-semibold text-[#17357e] shadow-lg transition hover:scale-105 hover:bg-white sm:px-5 md:h-12 md:px-7 md:text-base"
// // // // // // // //                   >
// // // // // // // //                     Meet Our Team
// // // // // // // //                   </Button>
// // // // // // // //                 </Link>
// // // // // // // //               </div>
// // // // // // // //             )}

// // // // // // // //             {/* SERVICE CARDS */}
// // // // // // // //             <div className="absolute bottom-10 right-4 z-20 hidden max-w-[900px] flex-wrap items-center justify-end gap-4 md:flex lg:right-8">
// // // // // // // //               <Link to="/loans">
// // // // // // // //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-blue-200/40 bg-gradient-to-r from-[#17357e] to-[#00539b] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// // // // // // // //                   <Wallet className="h-7 w-7 text-blue-200" />

// // // // // // // //                   <div>
// // // // // // // //                     <h3 className="text-base font-semibold lg:text-lg">
// // // // // // // //                       Loans
// // // // // // // //                     </h3>
// // // // // // // //                     <p className="text-sm text-blue-100">Quick Loans</p>
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //               </Link>

// // // // // // // //               <Link to="/insurance">
// // // // // // // //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-pink-200/40 bg-gradient-to-r from-[#17357e] to-[#7c2d72] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// // // // // // // //                   <ShieldCheck className="h-7 w-7 text-pink-200" />

// // // // // // // //                   <div>
// // // // // // // //                     <h3 className="text-base font-semibold lg:text-lg">
// // // // // // // //                       Insurance
// // // // // // // //                     </h3>
// // // // // // // //                     <p className="text-sm text-pink-100">Secure Insurance</p>
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //               </Link>

// // // // // // // //               <Link to="/mutual-funds">
// // // // // // // //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-green-200/40 bg-gradient-to-r from-[#17357e] to-[#047857] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// // // // // // // //                   <TrendingUp className="h-7 w-7 text-green-200" />

// // // // // // // //                   <div>
// // // // // // // //                     <h3 className="text-base font-semibold lg:text-lg">
// // // // // // // //                       Wealth
// // // // // // // //                     </h3>
// // // // // // // //                     <p className="text-sm text-green-100">Mutual Funds</p>
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //               </Link>
// // // // // // // //             </div>

// // // // // // // //             {/* HERO ARROWS */}
// // // // // // // //             <button
// // // // // // // //               type="button"
// // // // // // // //               onClick={prevSlide}
// // // // // // // //               className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35"
// // // // // // // //               aria-label="Previous hero slide"
// // // // // // // //             >
// // // // // // // //               <ChevronLeft className="h-6 w-6 text-white" />
// // // // // // // //             </button>

// // // // // // // //             <button
// // // // // // // //               type="button"
// // // // // // // //               onClick={nextSlide}
// // // // // // // //               className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35"
// // // // // // // //               aria-label="Next hero slide"
// // // // // // // //             >
// // // // // // // //               <ChevronRight className="h-6 w-6 text-white" />
// // // // // // // //             </button>

// // // // // // // //             {/* HERO DOTS REMOVED */}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* 3D IMAGE PRODUCT SLIDER */}
// // // // // // // //       <section className="relative z-10 overflow-hidden bg-[#050b22] py-16 sm:py-20">
// // // // // // // //         <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.24),transparent_42%)]" />
// // // // // // // //         <div className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 text-[70px] font-black uppercase tracking-wider text-white/5 sm:text-[100px] md:text-[130px]">
// // // // // // // //           Products
// // // // // // // //         </div>

// // // // // // // //         <div className="relative mx-auto max-w-[1400px] px-4">
// // // // // // // //           <div className="mb-8 text-center">
// // // // // // // //             <p className="mb-2 text-sm font-bold uppercase tracking-[0.35em] text-blue-300">
// // // // // // // //               Explore Services
// // // // // // // //             </p>

// // // // // // // //             <h2 className="text-4xl font-black uppercase tracking-wide text-white sm:text-5xl">
// // // // // // // //               Our Products
// // // // // // // //             </h2>
// // // // // // // //           </div>

// // // // // // // //           <div
// // // // // // // //             className="relative mx-auto flex min-h-[430px] items-center justify-center overflow-hidden md:min-h-[500px]"
// // // // // // // //             style={{
// // // // // // // //               perspective: "1400px",
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             {coverflowCards.map(({ card, index, offset }) => (
// // // // // // // //               <motion.div
// // // // // // // //                 key={`${card.title}-${offset}`}
// // // // // // // //                 className="absolute h-[330px] w-[235px] cursor-pointer overflow-hidden rounded-3xl bg-white shadow-2xl sm:h-[370px] sm:w-[265px] md:h-[400px] md:w-[285px]"
// // // // // // // //                 initial={false}
// // // // // // // //                 animate={getCardAnimation(offset)}
// // // // // // // //                 transition={{
// // // // // // // //                   type: "spring",
// // // // // // // //                   stiffness: 120,
// // // // // // // //                   damping: 22,
// // // // // // // //                 }}
// // // // // // // //                 style={{
// // // // // // // //                   transformStyle: "preserve-3d",
// // // // // // // //                 }}
// // // // // // // //                 onClick={() => setActiveCard(index)}
// // // // // // // //               >
// // // // // // // //                 <img
// // // // // // // //                   src={card.image}
// // // // // // // //                   alt={card.title}
// // // // // // // //                   className="h-full w-full object-cover"
// // // // // // // //                   draggable={false}
// // // // // // // //                 />

// // // // // // // //                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

// // // // // // // //                 <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
// // // // // // // //                   <h3 className="text-xl font-black leading-tight">
// // // // // // // //                     {card.title}
// // // // // // // //                   </h3>

// // // // // // // //                   <p className="mt-2 line-clamp-2 text-xs leading-5 text-white/80">
// // // // // // // //                     {card.subtitle}
// // // // // // // //                   </p>

// // // // // // // //                   {offset === 0 && (
// // // // // // // //                     <div className="mt-4 flex gap-2">
// // // // // // // //                       <Link to={card.button1Link}>
// // // // // // // //                         <button
// // // // // // // //                           type="button"
// // // // // // // //                           className="rounded-lg bg-white px-4 py-2 text-xs font-bold text-[#00539b] shadow-md transition hover:bg-blue-50"
// // // // // // // //                         >
// // // // // // // //                           {card.button1}
// // // // // // // //                         </button>
// // // // // // // //                       </Link>

// // // // // // // //                       {card.button2 && card.button2Link && (
// // // // // // // //                         <Link to={card.button2Link}>
// // // // // // // //                           <button
// // // // // // // //                             type="button"
// // // // // // // //                             className="rounded-lg border border-white/60 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur transition hover:bg-white/20"
// // // // // // // //                           >
// // // // // // // //                             {card.button2}
// // // // // // // //                           </button>
// // // // // // // //                         </Link>
// // // // // // // //                       )}
// // // // // // // //                     </div>
// // // // // // // //                   )}
// // // // // // // //                 </div>
// // // // // // // //               </motion.div>
// // // // // // // //             ))}
// // // // // // // //           </div>

// // // // // // // //           <div className="mt-2 text-center">
// // // // // // // //             <h3 className="text-2xl font-black text-white">
// // // // // // // //               {activeProduct.title}
// // // // // // // //             </h3>

// // // // // // // //             <div className="mx-auto mt-2 h-px w-44 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

// // // // // // // //             <p className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
// // // // // // // //               Financial Service
// // // // // // // //             </p>
// // // // // // // //           </div>

// // // // // // // //           <div className="mt-6 flex items-center justify-center gap-5">
// // // // // // // //             <button
// // // // // // // //               type="button"
// // // // // // // //               onClick={prevCard}
// // // // // // // //               className="flex h-11 w-11 items-center justify-center border border-white/30 bg-white text-[#07142f] shadow-lg transition hover:scale-110 hover:bg-blue-50"
// // // // // // // //               aria-label="Previous product"
// // // // // // // //             >
// // // // // // // //               <ChevronLeft className="h-5 w-5" />
// // // // // // // //             </button>

// // // // // // // //             <button
// // // // // // // //               type="button"
// // // // // // // //               onClick={nextCard}
// // // // // // // //               className="flex h-11 w-11 items-center justify-center border border-white/30 bg-white text-[#07142f] shadow-lg transition hover:scale-110 hover:bg-blue-50"
// // // // // // // //               aria-label="Next product"
// // // // // // // //             >
// // // // // // // //               <ChevronRight className="h-5 w-5" />
// // // // // // // //             </button>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </section>
// // // // // // // //     </>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // import { Link } from "@tanstack/react-router";
// // // // // // // // import { motion } from "framer-motion";
// // // // // // // // import {
// // // // // // // //   ArrowRight,
// // // // // // // //   ChevronLeft,
// // // // // // // //   ChevronRight,
// // // // // // // //   ShieldCheck,
// // // // // // // //   TrendingUp,
// // // // // // // //   Wallet,
// // // // // // // // } from "lucide-react";

// // // // // // // // import { Button } from "@/components/ui/button";

// // // // // // // // import advisor33 from "@/assets/hero-advisor33.jpeg";
// // // // // // // // import insuranceHero from "@/assets/insurance-hero.png";
// // // // // // // // import mutualFundHero from "@/assets/mutual-fund-hero.png";

// // // // // // // // import personalLoanImg from "@/assets/products/personal-loan.png";
// // // // // // // // import businessLoanImg from "@/assets/products/business-loan.png";
// // // // // // // // import insuranceCardImg from "@/assets/products/insurance.png";
// // // // // // // // import termLifeInsuranceImg from "@/assets/products/term-life-insurance.png";
// // // // // // // // import mutualFundsImg from "@/assets/products/mutual-funds.png";
// // // // // // // // import homeLoanImg from "@/assets/products/home-loan.png";

// // // // // // // // type Slide = {
// // // // // // // //   image: string;
// // // // // // // //   showButtons?: boolean;
// // // // // // // //   objectPosition: string;
// // // // // // // // };

// // // // // // // // type PromoCard = {
// // // // // // // //   title: string;
// // // // // // // //   subtitle: string;
// // // // // // // //   button1: string;
// // // // // // // //   button2?: string;
// // // // // // // //   button1Link: string;
// // // // // // // //   button2Link?: string;
// // // // // // // //   image: string;
// // // // // // // // };

// // // // // // // // const slides: Slide[] = [
// // // // // // // //   {
// // // // // // // //     image: advisor33,
// // // // // // // //     showButtons: true,
// // // // // // // //     objectPosition: "center top",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     image: insuranceHero,
// // // // // // // //     showButtons: false,
// // // // // // // //     objectPosition: "center top",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     image: mutualFundHero,
// // // // // // // //     showButtons: false,
// // // // // // // //     objectPosition: "center top",
// // // // // // // //   },
// // // // // // // // ];

// // // // // // // // const promoCards: PromoCard[] = [
// // // // // // // //   {
// // // // // // // //     title: "Personal Loan",
// // // // // // // //     subtitle: "Quick personal loan support for urgent needs and goals.",
// // // // // // // //     button1: "Apply Now",
// // // // // // // //     button2: "Know more",
// // // // // // // //     button1Link: "/contact",
// // // // // // // //     button2Link: "/loans",
// // // // // // // //     image: personalLoanImg,
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     title: "Business Loan",
// // // // // // // //     subtitle: "Funding solutions for business growth and expansion.",
// // // // // // // //     button1: "Apply Now",
// // // // // // // //     button2: "Learn more",
// // // // // // // //     button1Link: "/contact",
// // // // // // // //     button2Link: "/loans",
// // // // // // // //     image: businessLoanImg,
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     title: "Insurance",
// // // // // // // //     subtitle: "Protect your family, health, vehicle and valuable assets.",
// // // // // // // //     button1: "Get quote",
// // // // // // // //     button2: "Explore",
// // // // // // // //     button1Link: "/contact",
// // // // // // // //     button2Link: "/insurance",
// // // // // // // //     image: insuranceCardImg,
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     title: "Term Life Insurance",
// // // // // // // //     subtitle: "Secure your family’s future with affordable term life coverage.",
// // // // // // // //     button1: "Get quote",
// // // // // // // //     button2: "Explore",
// // // // // // // //     button1Link: "/contact",
// // // // // // // //     button2Link: "/insurance",
// // // // // // // //     image: termLifeInsuranceImg,
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     title: "Mutual Funds",
// // // // // // // //     subtitle: "Build long-term wealth with SIP and investment planning.",
// // // // // // // //     button1: "Invest Now",
// // // // // // // //     button2: "Learn more",
// // // // // // // //     button1Link: "/contact",
// // // // // // // //     button2Link: "/mutual-funds",
// // // // // // // //     image: mutualFundsImg,
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     title: "Home Loan",
// // // // // // // //     subtitle: "Affordable finance options for your dream home.",
// // // // // // // //     button1: "Apply Now",
// // // // // // // //     button2: "Know more",
// // // // // // // //     button1Link: "/contact",
// // // // // // // //     button2Link: "/loans",
// // // // // // // //     image: homeLoanImg,
// // // // // // // //   },
// // // // // // // // ];

// // // // // // // // function getCoverflowCards(activeIndex: number) {
// // // // // // // //   const total = promoCards.length;

// // // // // // // //   return [-2, -1, 0, 1, 2].map((offset) => {
// // // // // // // //     const index = (activeIndex + offset + total) % total;

// // // // // // // //     return {
// // // // // // // //       card: promoCards[index],
// // // // // // // //       index,
// // // // // // // //       offset,
// // // // // // // //     };
// // // // // // // //   });
// // // // // // // // }

// // // // // // // // export function Hero() {
// // // // // // // //   const [current, setCurrent] = useState(0);
// // // // // // // //   const [activeCard, setActiveCard] = useState(0);
// // // // // // // //   const [isHeroPaused, setIsHeroPaused] = useState(false);

// // // // // // // //   const activeSlide = slides[current];
// // // // // // // //   const coverflowCards = getCoverflowCards(activeCard);

// // // // // // // //   useEffect(() => {
// // // // // // // //     if (isHeroPaused) return;

// // // // // // // //     const slider = window.setInterval(() => {
// // // // // // // //       setCurrent((prev) => (prev + 1) % slides.length);
// // // // // // // //     }, 5000);

// // // // // // // //     return () => window.clearInterval(slider);
// // // // // // // //   }, [isHeroPaused]);

// // // // // // // //   useEffect(() => {
// // // // // // // //     const productSlider = window.setInterval(() => {
// // // // // // // //       setActiveCard((prev) => (prev + 1) % promoCards.length);
// // // // // // // //     }, 4500);

// // // // // // // //     return () => window.clearInterval(productSlider);
// // // // // // // //   }, []);

// // // // // // // //   const nextSlide = () => {
// // // // // // // //     setCurrent((prev) => (prev + 1) % slides.length);
// // // // // // // //   };

// // // // // // // //   const prevSlide = () => {
// // // // // // // //     setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
// // // // // // // //   };

// // // // // // // //   const nextCard = () => {
// // // // // // // //     setActiveCard((prev) => (prev + 1) % promoCards.length);
// // // // // // // //   };

// // // // // // // //   const prevCard = () => {
// // // // // // // //     setActiveCard((prev) =>
// // // // // // // //       prev === 0 ? promoCards.length - 1 : prev - 1,
// // // // // // // //     );
// // // // // // // //   };

// // // // // // // //   const getCardAnimation = (offset: number) => {
// // // // // // // //     if (offset === 0) {
// // // // // // // //       return {
// // // // // // // //         x: 0,
// // // // // // // //         scale: 1,
// // // // // // // //         rotateY: 0,
// // // // // // // //         opacity: 1,
// // // // // // // //         zIndex: 50,
// // // // // // // //         filter: "grayscale(0%) blur(0px)",
// // // // // // // //       };
// // // // // // // //     }

// // // // // // // //     if (offset === -1) {
// // // // // // // //       return {
// // // // // // // //         x: -190,
// // // // // // // //         scale: 0.82,
// // // // // // // //         rotateY: 32,
// // // // // // // //         opacity: 0.75,
// // // // // // // //         zIndex: 40,
// // // // // // // //         filter: "grayscale(75%) blur(0px)",
// // // // // // // //       };
// // // // // // // //     }

// // // // // // // //     if (offset === 1) {
// // // // // // // //       return {
// // // // // // // //         x: 190,
// // // // // // // //         scale: 0.82,
// // // // // // // //         rotateY: -32,
// // // // // // // //         opacity: 0.75,
// // // // // // // //         zIndex: 40,
// // // // // // // //         filter: "grayscale(75%) blur(0px)",
// // // // // // // //       };
// // // // // // // //     }

// // // // // // // //     if (offset === -2) {
// // // // // // // //       return {
// // // // // // // //         x: -330,
// // // // // // // //         scale: 0.68,
// // // // // // // //         rotateY: 42,
// // // // // // // //         opacity: 0.45,
// // // // // // // //         zIndex: 30,
// // // // // // // //         filter: "grayscale(100%) blur(0.5px)",
// // // // // // // //       };
// // // // // // // //     }

// // // // // // // //     return {
// // // // // // // //       x: 330,
// // // // // // // //       scale: 0.68,
// // // // // // // //       rotateY: -42,
// // // // // // // //       opacity: 0.45,
// // // // // // // //       zIndex: 30,
// // // // // // // //       filter: "grayscale(100%) blur(0.5px)",
// // // // // // // //     };
// // // // // // // //   };

// // // // // // // //   const activeProduct = promoCards[activeCard];

// // // // // // // //   return (
// // // // // // // //     <>
// // // // // // // //       {/* MAIN HERO */}
// // // // // // // //       <section
// // // // // // // //         id="hero"
// // // // // // // //         onMouseEnter={() => setIsHeroPaused(true)}
// // // // // // // //         onMouseLeave={() => setIsHeroPaused(false)}
// // // // // // // //         className="relative w-full overflow-hidden bg-white pt-20"
// // // // // // // //       >
// // // // // // // //         <div className="relative w-full overflow-hidden bg-[#0f4fa8]">
// // // // // // // //           <div className="relative h-[520px] w-full overflow-hidden sm:h-[560px] md:h-[620px] lg:h-[680px] xl:h-[720px]">
// // // // // // // //             {slides.map((slide, index) => (
// // // // // // // //               <img
// // // // // // // //                 key={slide.image}
// // // // // // // //                 src={slide.image}
// // // // // // // //                 alt="Aarthvaahini Financial Services"
// // // // // // // //                 className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
// // // // // // // //                   index === current ? "opacity-100" : "opacity-0"
// // // // // // // //                 }`}
// // // // // // // //                 style={{
// // // // // // // //                   objectPosition: slide.objectPosition,
// // // // // // // //                 }}
// // // // // // // //                 draggable={false}
// // // // // // // //               />
// // // // // // // //             ))}

// // // // // // // //             {activeSlide.showButtons && (
// // // // // // // //               <div className="absolute bottom-20 left-4 z-20 flex flex-wrap items-center gap-3 px-3 sm:left-6 md:bottom-20 md:left-10 lg:left-14">
// // // // // // // //                 <Link to="/contact">
// // // // // // // //                   <Button className="h-10 rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 px-4 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 sm:px-5 md:h-12 md:px-7 md:text-base">
// // // // // // // //                     Free Consultation
// // // // // // // //                     <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
// // // // // // // //                   </Button>
// // // // // // // //                 </Link>

// // // // // // // //                 <Link to="/about">
// // // // // // // //                   <Button
// // // // // // // //                     variant="outline"
// // // // // // // //                     className="h-10 rounded-xl border border-[#17357e]/20 bg-white/95 px-4 text-sm font-semibold text-[#17357e] shadow-lg transition hover:scale-105 hover:bg-white sm:px-5 md:h-12 md:px-7 md:text-base"
// // // // // // // //                   >
// // // // // // // //                     Meet Our Team
// // // // // // // //                   </Button>
// // // // // // // //                 </Link>
// // // // // // // //               </div>
// // // // // // // //             )}

// // // // // // // //             {/* SERVICE CARDS */}
// // // // // // // //             <div className="absolute bottom-10 right-4 z-20 hidden max-w-[900px] flex-wrap items-center justify-end gap-4 md:flex lg:right-8">
// // // // // // // //               <Link to="/loans">
// // // // // // // //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-blue-200/40 bg-gradient-to-r from-[#17357e] to-[#00539b] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// // // // // // // //                   <Wallet className="h-7 w-7 text-blue-200" />

// // // // // // // //                   <div>
// // // // // // // //                     <h3 className="text-base font-semibold lg:text-lg">
// // // // // // // //                       Loans
// // // // // // // //                     </h3>
// // // // // // // //                     <p className="text-sm text-blue-100">Quick Loans</p>
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //               </Link>

// // // // // // // //               <Link to="/insurance">
// // // // // // // //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-pink-200/40 bg-gradient-to-r from-[#17357e] to-[#7c2d72] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// // // // // // // //                   <ShieldCheck className="h-7 w-7 text-pink-200" />

// // // // // // // //                   <div>
// // // // // // // //                     <h3 className="text-base font-semibold lg:text-lg">
// // // // // // // //                       Insurance
// // // // // // // //                     </h3>
// // // // // // // //                     <p className="text-sm text-pink-100">Secure Insurance</p>
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //               </Link>

// // // // // // // //               <Link to="/mutual-funds">
// // // // // // // //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-green-200/40 bg-gradient-to-r from-[#17357e] to-[#047857] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// // // // // // // //                   <TrendingUp className="h-7 w-7 text-green-200" />

// // // // // // // //                   <div>
// // // // // // // //                     <h3 className="text-base font-semibold lg:text-lg">
// // // // // // // //                       Wealth
// // // // // // // //                     </h3>
// // // // // // // //                     <p className="text-sm text-green-100">Mutual Funds</p>
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //               </Link>
// // // // // // // //             </div>

// // // // // // // //             {/* HERO ARROWS */}
// // // // // // // //             <button
// // // // // // // //               type="button"
// // // // // // // //               onClick={prevSlide}
// // // // // // // //               className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35"
// // // // // // // //               aria-label="Previous hero slide"
// // // // // // // //             >
// // // // // // // //               <ChevronLeft className="h-6 w-6 text-white" />
// // // // // // // //             </button>

// // // // // // // //             <button
// // // // // // // //               type="button"
// // // // // // // //               onClick={nextSlide}
// // // // // // // //               className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35"
// // // // // // // //               aria-label="Next hero slide"
// // // // // // // //             >
// // // // // // // //               <ChevronRight className="h-6 w-6 text-white" />
// // // // // // // //             </button>

// // // // // // // //             {/* HERO DOTS REMOVED */}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* 3D IMAGE PRODUCT SLIDER */}
// // // // // // // //       <section className="relative z-10 overflow-hidden bg-[#050b22] py-16 sm:py-20">
// // // // // // // //         <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.24),transparent_42%)]" />
// // // // // // // //         <div className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 text-[70px] font-black uppercase tracking-wider text-white/5 sm:text-[100px] md:text-[130px]">
// // // // // // // //           Products
// // // // // // // //         </div>

// // // // // // // //         <div className="relative mx-auto max-w-[1400px] px-4">
// // // // // // // //           <div className="mb-8 text-center">
// // // // // // // //             <p className="mb-2 text-sm font-bold uppercase tracking-[0.35em] text-blue-300">
// // // // // // // //               Explore Services
// // // // // // // //             </p>

// // // // // // // //             <h2 className="text-4xl font-black uppercase tracking-wide text-white sm:text-5xl">
// // // // // // // //               Our Products
// // // // // // // //             </h2>
// // // // // // // //           </div>

// // // // // // // //           <div
// // // // // // // //             className="relative mx-auto flex min-h-[430px] items-center justify-center overflow-hidden md:min-h-[500px]"
// // // // // // // //             style={{
// // // // // // // //               perspective: "1400px",
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             {coverflowCards.map(({ card, index, offset }) => (
// // // // // // // //               <motion.div
// // // // // // // //                 key={`${card.title}-${offset}`}
// // // // // // // //                 className="absolute h-[330px] w-[235px] cursor-pointer overflow-hidden rounded-3xl bg-white shadow-2xl sm:h-[370px] sm:w-[265px] md:h-[400px] md:w-[285px]"
// // // // // // // //                 initial={false}
// // // // // // // //                 animate={getCardAnimation(offset)}
// // // // // // // //                 transition={{
// // // // // // // //                   type: "spring",
// // // // // // // //                   stiffness: 120,
// // // // // // // //                   damping: 22,
// // // // // // // //                 }}
// // // // // // // //                 style={{
// // // // // // // //                   transformStyle: "preserve-3d",
// // // // // // // //                 }}
// // // // // // // //                 onClick={() => setActiveCard(index)}
// // // // // // // //               >
// // // // // // // //                 <img
// // // // // // // //                   src={card.image}
// // // // // // // //                   alt={card.title}
// // // // // // // //                   className="h-full w-full object-cover"
// // // // // // // //                   draggable={false}
// // // // // // // //                 />

// // // // // // // //                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

// // // // // // // //                 <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
// // // // // // // //                   <h3 className="text-xl font-black leading-tight">
// // // // // // // //                     {card.title}
// // // // // // // //                   </h3>

// // // // // // // //                   <p className="mt-2 line-clamp-2 text-xs leading-5 text-white/80">
// // // // // // // //                     {card.subtitle}
// // // // // // // //                   </p>

// // // // // // // //                   {offset === 0 && (
// // // // // // // //                     <div className="mt-4 flex gap-2">
// // // // // // // //                       <Link to={card.button1Link}>
// // // // // // // //                         <button
// // // // // // // //                           type="button"
// // // // // // // //                           className="rounded-lg bg-white px-4 py-2 text-xs font-bold text-[#00539b] shadow-md transition hover:bg-blue-50"
// // // // // // // //                         >
// // // // // // // //                           {card.button1}
// // // // // // // //                         </button>
// // // // // // // //                       </Link>

// // // // // // // //                       {card.button2 && card.button2Link && (
// // // // // // // //                         <Link to={card.button2Link}>
// // // // // // // //                           <button
// // // // // // // //                             type="button"
// // // // // // // //                             className="rounded-lg border border-white/60 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur transition hover:bg-white/20"
// // // // // // // //                           >
// // // // // // // //                             {card.button2}
// // // // // // // //                           </button>
// // // // // // // //                         </Link>
// // // // // // // //                       )}
// // // // // // // //                     </div>
// // // // // // // //                   )}
// // // // // // // //                 </div>
// // // // // // // //               </motion.div>
// // // // // // // //             ))}
// // // // // // // //           </div>

// // // // // // // //           <div className="mt-2 text-center">
// // // // // // // //             <h3 className="text-2xl font-black text-white">
// // // // // // // //               {activeProduct.title}
// // // // // // // //             </h3>

// // // // // // // //             <div className="mx-auto mt-2 h-px w-44 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

// // // // // // // //             <p className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
// // // // // // // //               Financial Service
// // // // // // // //             </p>
// // // // // // // //           </div>

// // // // // // // //           <div className="mt-6 flex items-center justify-center gap-5">
// // // // // // // //             <button
// // // // // // // //               type="button"
// // // // // // // //               onClick={prevCard}
// // // // // // // //               className="flex h-11 w-11 items-center justify-center border border-white/30 bg-white text-[#07142f] shadow-lg transition hover:scale-110 hover:bg-blue-50"
// // // // // // // //               aria-label="Previous product"
// // // // // // // //             >
// // // // // // // //               <ChevronLeft className="h-5 w-5" />
// // // // // // // //             </button>

// // // // // // // //             <button
// // // // // // // //               type="button"
// // // // // // // //               onClick={nextCard}
// // // // // // // //               className="flex h-11 w-11 items-center justify-center border border-white/30 bg-white text-[#07142f] shadow-lg transition hover:scale-110 hover:bg-blue-50"
// // // // // // // //               aria-label="Next product"
// // // // // // // //             >
// // // // // // // //               <ChevronRight className="h-5 w-5" />
// // // // // // // //             </button>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </section>
// // // // // // // //     </>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // import { useEffect, useState } from "react";
// // // // // // // import { Link } from "@tanstack/react-router";
// // // // // // // import { motion } from "framer-motion";
// // // // // // // import {
// // // // // // //   ArrowRight,
// // // // // // //   ChevronLeft,
// // // // // // //   ChevronRight,
// // // // // // //   ShieldCheck,
// // // // // // //   TrendingUp,
// // // // // // //   Wallet,
// // // // // // // } from "lucide-react";

// // // // // // // import { Button } from "@/components/ui/button";

// // // // // // // import advisor33 from "@/assets/hero-advisor33.jpeg";
// // // // // // // import insuranceHero from "@/assets/insurance-hero.png";
// // // // // // // import mutualFundHero from "@/assets/mutual-fund-hero.png";

// // // // // // // import personalLoanImg from "@/assets/products/personal-loan.png";
// // // // // // // import businessLoanImg from "@/assets/products/business-loan.png";
// // // // // // // import insuranceCardImg from "@/assets/products/insurance.png";
// // // // // // // import mutualFundsImg from "@/assets/products/mutual-funds.png";
// // // // // // // import homeLoanImg from "@/assets/products/home-loan.png";

// // // // // // // type Slide = {
// // // // // // //   image: string;
// // // // // // //   showButtons?: boolean;
// // // // // // //   objectPosition: string;
// // // // // // // };

// // // // // // // type PromoCard = {
// // // // // // //   title: string;
// // // // // // //   subtitle: string;
// // // // // // //   button1: string;
// // // // // // //   button2?: string;
// // // // // // //   button1Link: string;
// // // // // // //   button2Link?: string;
// // // // // // //   image: string;
// // // // // // // };

// // // // // // // const slides: Slide[] = [
// // // // // // //   {
// // // // // // //     image: advisor33,
// // // // // // //     showButtons: true,
// // // // // // //     objectPosition: "center top",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     image: insuranceHero,
// // // // // // //     showButtons: false,
// // // // // // //     objectPosition: "center top",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     image: mutualFundHero,
// // // // // // //     showButtons: false,
// // // // // // //     objectPosition: "center top",
// // // // // // //   },
// // // // // // // ];

// // // // // // // const promoCards: PromoCard[] = [
// // // // // // //   {
// // // // // // //     title: "Personal Loan",
// // // // // // //     subtitle: "Quick personal loan support for urgent needs and goals.",
// // // // // // //     button1: "Apply Now",
// // // // // // //     button2: "Know more",
// // // // // // //     button1Link: "/contact",
// // // // // // //     button2Link: "/loans",
// // // // // // //     image: personalLoanImg,
// // // // // // //   },
// // // // // // //   {
// // // // // // //     title: "Business Loan",
// // // // // // //     subtitle: "Funding solutions for business growth and expansion.",
// // // // // // //     button1: "Apply Now",
// // // // // // //     button2: "Learn more",
// // // // // // //     button1Link: "/contact",
// // // // // // //     button2Link: "/loans",
// // // // // // //     image: businessLoanImg,
// // // // // // //   },
// // // // // // //   {
// // // // // // //     title: "Insurance",
// // // // // // //     subtitle: "Protect your family, health, vehicle and valuable assets.",
// // // // // // //     button1: "Get quote",
// // // // // // //     button2: "Explore",
// // // // // // //     button1Link: "/contact",
// // // // // // //     button2Link: "/insurance",
// // // // // // //     image: insuranceCardImg,
// // // // // // //   },
// // // // // // //   {
// // // // // // //     title: "Term Life Insurance",
// // // // // // //     subtitle: "Secure your family’s future with affordable term life coverage.",
// // // // // // //     button1: "Get quote",
// // // // // // //     button2: "Explore",
// // // // // // //     button1Link: "/contact",
// // // // // // //     button2Link: "/insurance",
// // // // // // //     image: insuranceCardImg,
// // // // // // //   },
// // // // // // //   {
// // // // // // //     title: "Mutual Funds",
// // // // // // //     subtitle: "Build long-term wealth with SIP and investment planning.",
// // // // // // //     button1: "Invest Now",
// // // // // // //     button2: "Learn more",
// // // // // // //     button1Link: "/contact",
// // // // // // //     button2Link: "/mutual-funds",
// // // // // // //     image: mutualFundsImg,
// // // // // // //   },
// // // // // // //   {
// // // // // // //     title: "Home Loan",
// // // // // // //     subtitle: "Affordable finance options for your dream home.",
// // // // // // //     button1: "Apply Now",
// // // // // // //     button2: "Know more",
// // // // // // //     button1Link: "/contact",
// // // // // // //     button2Link: "/loans",
// // // // // // //     image: homeLoanImg,
// // // // // // //   },
// // // // // // // ];

// // // // // // // function getCoverflowCards(activeIndex: number) {
// // // // // // //   const total = promoCards.length;

// // // // // // //   return [-2, -1, 0, 1, 2].map((offset) => {
// // // // // // //     const index = (activeIndex + offset + total) % total;

// // // // // // //     return {
// // // // // // //       card: promoCards[index],
// // // // // // //       index,
// // // // // // //       offset,
// // // // // // //     };
// // // // // // //   });
// // // // // // // }

// // // // // // // export function Hero() {
// // // // // // //   const [current, setCurrent] = useState(0);
// // // // // // //   const [activeCard, setActiveCard] = useState(0);
// // // // // // //   const [isHeroPaused, setIsHeroPaused] = useState(false);

// // // // // // //   const activeSlide = slides[current];
// // // // // // //   const coverflowCards = getCoverflowCards(activeCard);
// // // // // // //   const activeProduct = promoCards[activeCard];

// // // // // // //   useEffect(() => {
// // // // // // //     if (isHeroPaused) return;

// // // // // // //     const slider = window.setInterval(() => {
// // // // // // //       setCurrent((prev) => (prev + 1) % slides.length);
// // // // // // //     }, 5000);

// // // // // // //     return () => window.clearInterval(slider);
// // // // // // //   }, [isHeroPaused]);

// // // // // // //   useEffect(() => {
// // // // // // //     const productSlider = window.setInterval(() => {
// // // // // // //       setActiveCard((prev) => (prev + 1) % promoCards.length);
// // // // // // //     }, 4500);

// // // // // // //     return () => window.clearInterval(productSlider);
// // // // // // //   }, []);

// // // // // // //   const nextSlide = () => {
// // // // // // //     setCurrent((prev) => (prev + 1) % slides.length);
// // // // // // //   };

// // // // // // //   const prevSlide = () => {
// // // // // // //     setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
// // // // // // //   };

// // // // // // //   const nextCard = () => {
// // // // // // //     setActiveCard((prev) => (prev + 1) % promoCards.length);
// // // // // // //   };

// // // // // // //   const prevCard = () => {
// // // // // // //     setActiveCard((prev) =>
// // // // // // //       prev === 0 ? promoCards.length - 1 : prev - 1,
// // // // // // //     );
// // // // // // //   };

// // // // // // //   const getCardAnimation = (offset: number) => {
// // // // // // //     if (offset === 0) {
// // // // // // //       return {
// // // // // // //         x: 0,
// // // // // // //         scale: 1,
// // // // // // //         rotateY: 0,
// // // // // // //         opacity: 1,
// // // // // // //         zIndex: 50,
// // // // // // //         filter: "grayscale(0%) blur(0px)",
// // // // // // //       };
// // // // // // //     }

// // // // // // //     if (offset === -1) {
// // // // // // //       return {
// // // // // // //         x: -190,
// // // // // // //         scale: 0.82,
// // // // // // //         rotateY: 32,
// // // // // // //         opacity: 0.75,
// // // // // // //         zIndex: 40,
// // // // // // //         filter: "grayscale(75%) blur(0px)",
// // // // // // //       };
// // // // // // //     }

// // // // // // //     if (offset === 1) {
// // // // // // //       return {
// // // // // // //         x: 190,
// // // // // // //         scale: 0.82,
// // // // // // //         rotateY: -32,
// // // // // // //         opacity: 0.75,
// // // // // // //         zIndex: 40,
// // // // // // //         filter: "grayscale(75%) blur(0px)",
// // // // // // //       };
// // // // // // //     }

// // // // // // //     if (offset === -2) {
// // // // // // //       return {
// // // // // // //         x: -330,
// // // // // // //         scale: 0.68,
// // // // // // //         rotateY: 42,
// // // // // // //         opacity: 0.45,
// // // // // // //         zIndex: 30,
// // // // // // //         filter: "grayscale(100%) blur(0.5px)",
// // // // // // //       };
// // // // // // //     }

// // // // // // //     return {
// // // // // // //       x: 330,
// // // // // // //       scale: 0.68,
// // // // // // //       rotateY: -42,
// // // // // // //       opacity: 0.45,
// // // // // // //       zIndex: 30,
// // // // // // //       filter: "grayscale(100%) blur(0.5px)",
// // // // // // //     };
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       {/* MAIN HERO */}
// // // // // // //       <section
// // // // // // //         id="hero"
// // // // // // //         onMouseEnter={() => setIsHeroPaused(true)}
// // // // // // //         onMouseLeave={() => setIsHeroPaused(false)}
// // // // // // //         className="relative w-full overflow-hidden bg-white pt-20"
// // // // // // //       >
// // // // // // //         <div className="relative w-full overflow-hidden bg-[#0f4fa8]">
// // // // // // //           <div className="relative h-[520px] w-full overflow-hidden sm:h-[560px] md:h-[620px] lg:h-[680px] xl:h-[720px]">
// // // // // // //             {slides.map((slide, index) => (
// // // // // // //               <img
// // // // // // //                 key={slide.image}
// // // // // // //                 src={slide.image}
// // // // // // //                 alt="Aarthvaahini Financial Services"
// // // // // // //                 className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
// // // // // // //                   index === current ? "opacity-100" : "opacity-0"
// // // // // // //                 }`}
// // // // // // //                 style={{
// // // // // // //                   objectPosition: slide.objectPosition,
// // // // // // //                 }}
// // // // // // //                 draggable={false}
// // // // // // //               />
// // // // // // //             ))}

// // // // // // //             {activeSlide.showButtons && (
// // // // // // //               <div className="absolute bottom-20 left-4 z-20 flex flex-wrap items-center gap-3 px-3 sm:left-6 md:bottom-20 md:left-10 lg:left-14">
// // // // // // //                 <Link to="/contact">
// // // // // // //                   <Button className="h-10 rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 px-4 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 sm:px-5 md:h-12 md:px-7 md:text-base">
// // // // // // //                     Free Consultation
// // // // // // //                     <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
// // // // // // //                   </Button>
// // // // // // //                 </Link>

// // // // // // //                 <Link to="/about">
// // // // // // //                   <Button
// // // // // // //                     variant="outline"
// // // // // // //                     className="h-10 rounded-xl border border-[#17357e]/20 bg-white/95 px-4 text-sm font-semibold text-[#17357e] shadow-lg transition hover:scale-105 hover:bg-white sm:px-5 md:h-12 md:px-7 md:text-base"
// // // // // // //                   >
// // // // // // //                     Meet Our Team
// // // // // // //                   </Button>
// // // // // // //                 </Link>
// // // // // // //               </div>
// // // // // // //             )}

// // // // // // //             {/* SERVICE CARDS */}
// // // // // // //             <div className="absolute bottom-10 right-4 z-20 hidden max-w-[900px] flex-wrap items-center justify-end gap-4 md:flex lg:right-8">
// // // // // // //               <Link to="/loans">
// // // // // // //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-blue-200/40 bg-gradient-to-r from-[#17357e] to-[#00539b] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// // // // // // //                   <Wallet className="h-7 w-7 text-blue-200" />

// // // // // // //                   <div>
// // // // // // //                     <h3 className="text-base font-semibold lg:text-lg">
// // // // // // //                       Loans
// // // // // // //                     </h3>
// // // // // // //                     <p className="text-sm text-blue-100">Quick Loans</p>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               </Link>

// // // // // // //               <Link to="/insurance">
// // // // // // //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-pink-200/40 bg-gradient-to-r from-[#17357e] to-[#7c2d72] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// // // // // // //                   <ShieldCheck className="h-7 w-7 text-pink-200" />

// // // // // // //                   <div>
// // // // // // //                     <h3 className="text-base font-semibold lg:text-lg">
// // // // // // //                       Insurance
// // // // // // //                     </h3>
// // // // // // //                     <p className="text-sm text-pink-100">Secure Insurance</p>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               </Link>

// // // // // // //               <Link to="/mutual-funds">
// // // // // // //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-green-200/40 bg-gradient-to-r from-[#17357e] to-[#047857] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// // // // // // //                   <TrendingUp className="h-7 w-7 text-green-200" />

// // // // // // //                   <div>
// // // // // // //                     <h3 className="text-base font-semibold lg:text-lg">
// // // // // // //                       Wealth
// // // // // // //                     </h3>
// // // // // // //                     <p className="text-sm text-green-100">Mutual Funds</p>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               </Link>
// // // // // // //             </div>

// // // // // // //             {/* HERO ARROWS */}
// // // // // // //             <button
// // // // // // //               type="button"
// // // // // // //               onClick={prevSlide}
// // // // // // //               className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35"
// // // // // // //               aria-label="Previous hero slide"
// // // // // // //             >
// // // // // // //               <ChevronLeft className="h-6 w-6 text-white" />
// // // // // // //             </button>

// // // // // // //             <button
// // // // // // //               type="button"
// // // // // // //               onClick={nextSlide}
// // // // // // //               className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35"
// // // // // // //               aria-label="Next hero slide"
// // // // // // //             >
// // // // // // //               <ChevronRight className="h-6 w-6 text-white" />
// // // // // // //             </button>

// // // // // // //             {/* HERO DOTS REMOVED */}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* 3D IMAGE PRODUCT SLIDER */}
// // // // // // //       <section className="relative z-10 overflow-hidden bg-[#050b22] py-16 sm:py-20">
// // // // // // //         <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.24),transparent_42%)]" />

// // // // // // //         <div className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 text-[70px] font-black uppercase tracking-wider text-white/5 sm:text-[100px] md:text-[130px]">
// // // // // // //           Products
// // // // // // //         </div>

// // // // // // //         <div className="relative mx-auto max-w-[1400px] px-4">
// // // // // // //           <div className="mb-8 text-center">
// // // // // // //             <p className="mb-2 text-sm font-bold uppercase tracking-[0.35em] text-blue-300">
// // // // // // //               Explore Services
// // // // // // //             </p>

// // // // // // //             <h2 className="text-4xl font-black uppercase tracking-wide text-white sm:text-5xl">
// // // // // // //               Our Products
// // // // // // //             </h2>
// // // // // // //           </div>

// // // // // // //           <div
// // // // // // //             className="relative mx-auto flex min-h-[430px] items-center justify-center overflow-hidden md:min-h-[500px]"
// // // // // // //             style={{
// // // // // // //               perspective: "1400px",
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             {coverflowCards.map(({ card, index, offset }) => (
// // // // // // //               <motion.div
// // // // // // //                 key={`${card.title}-${offset}`}
// // // // // // //                 className="absolute h-[330px] w-[235px] cursor-pointer overflow-hidden rounded-3xl bg-white shadow-2xl sm:h-[370px] sm:w-[265px] md:h-[400px] md:w-[285px]"
// // // // // // //                 initial={false}
// // // // // // //                 animate={getCardAnimation(offset)}
// // // // // // //                 transition={{
// // // // // // //                   type: "spring",
// // // // // // //                   stiffness: 120,
// // // // // // //                   damping: 22,
// // // // // // //                 }}
// // // // // // //                 style={{
// // // // // // //                   transformStyle: "preserve-3d",
// // // // // // //                 }}
// // // // // // //                 onClick={() => setActiveCard(index)}
// // // // // // //               >
// // // // // // //                 <img
// // // // // // //                   src={card.image}
// // // // // // //                   alt={card.title}
// // // // // // //                   className="h-full w-full object-cover"
// // // // // // //                   draggable={false}
// // // // // // //                 />

// // // // // // //                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

// // // // // // //                 <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
// // // // // // //                   <h3 className="text-xl font-black leading-tight">
// // // // // // //                     {card.title}
// // // // // // //                   </h3>

// // // // // // //                   <p className="mt-2 line-clamp-2 text-xs leading-5 text-white/80">
// // // // // // //                     {card.subtitle}
// // // // // // //                   </p>

// // // // // // //                   {offset === 0 && (
// // // // // // //                     <div className="mt-4 flex gap-2">
// // // // // // //                       <Link to={card.button1Link}>
// // // // // // //                         <button
// // // // // // //                           type="button"
// // // // // // //                           className="rounded-lg bg-white px-4 py-2 text-xs font-bold text-[#00539b] shadow-md transition hover:bg-blue-50"
// // // // // // //                         >
// // // // // // //                           {card.button1}
// // // // // // //                         </button>
// // // // // // //                       </Link>

// // // // // // //                       {card.button2 && card.button2Link && (
// // // // // // //                         <Link to={card.button2Link}>
// // // // // // //                           <button
// // // // // // //                             type="button"
// // // // // // //                             className="rounded-lg border border-white/60 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur transition hover:bg-white/20"
// // // // // // //                           >
// // // // // // //                             {card.button2}
// // // // // // //                           </button>
// // // // // // //                         </Link>
// // // // // // //                       )}
// // // // // // //                     </div>
// // // // // // //                   )}
// // // // // // //                 </div>
// // // // // // //               </motion.div>
// // // // // // //             ))}
// // // // // // //           </div>

// // // // // // //           <div className="mt-2 text-center">
// // // // // // //             <h3 className="text-2xl font-black text-white">
// // // // // // //               {activeProduct.title}
// // // // // // //             </h3>

// // // // // // //             <div className="mx-auto mt-2 h-px w-44 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

// // // // // // //             <p className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
// // // // // // //               Financial Service
// // // // // // //             </p>
// // // // // // //           </div>

// // // // // // //           <div className="mt-6 flex items-center justify-center gap-5">
// // // // // // //             <button
// // // // // // //               type="button"
// // // // // // //               onClick={prevCard}
// // // // // // //               className="flex h-11 w-11 items-center justify-center border border-white/30 bg-white text-[#07142f] shadow-lg transition hover:scale-110 hover:bg-blue-50"
// // // // // // //               aria-label="Previous product"
// // // // // // //             >
// // // // // // //               <ChevronLeft className="h-5 w-5" />
// // // // // // //             </button>

// // // // // // //             <button
// // // // // // //               type="button"
// // // // // // //               onClick={nextCard}
// // // // // // //               className="flex h-11 w-11 items-center justify-center border border-white/30 bg-white text-[#07142f] shadow-lg transition hover:scale-110 hover:bg-blue-50"
// // // // // // //               aria-label="Next product"
// // // // // // //             >
// // // // // // //               <ChevronRight className="h-5 w-5" />
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </section>
// // // // // // //     </>
// // // // // // //   );
// // // // // // // }
// // // // // // import { useEffect, useState } from "react";
// // // // // // import { Link } from "@tanstack/react-router";
// // // // // // import {
// // // // // //   ArrowRight,
// // // // // //   ChevronLeft,
// // // // // //   ChevronRight,
// // // // // //   ShieldCheck,
// // // // // //   TrendingUp,
// // // // // //   Wallet,
// // // // // // } from "lucide-react";

// // // // // // import { Button } from "@/components/ui/button";

// // // // // // import advisor33 from "@/assets/hero-advisor33.jpeg";
// // // // // // import insuranceHero from "@/assets/insurance-hero.png";
// // // // // // import mutualFundHero from "@/assets/mutual-fund-hero.png";

// // // // // // import personalLoanImg from "@/assets/products/personal-loan.png";
// // // // // // import businessLoanImg from "@/assets/products/business-loan.png";
// // // // // // import insuranceCardImg from "@/assets/products/insurance.png";
// // // // // // import mutualFundsImg from "@/assets/products/mutual-funds.png";
// // // // // // import homeLoanImg from "@/assets/products/home-loan.png";

// // // // // // type Slide = {
// // // // // //   image: string;
// // // // // //   showButtons?: boolean;
// // // // // //   objectPosition: string;
// // // // // // };

// // // // // // type PromoCard = {
// // // // // //   title: string;
// // // // // //   subtitle: string;
// // // // // //   button1: string;
// // // // // //   button2?: string;
// // // // // //   button1Link: string;
// // // // // //   button2Link?: string;
// // // // // //   image: string;
// // // // // // };

// // // // // // const slides: Slide[] = [
// // // // // //   {
// // // // // //     image: advisor33,
// // // // // //     showButtons: true,
// // // // // //     objectPosition: "center top",
// // // // // //   },
// // // // // //   {
// // // // // //     image: insuranceHero,
// // // // // //     showButtons: false,
// // // // // //     objectPosition: "center top",
// // // // // //   },
// // // // // //   {
// // // // // //     image: mutualFundHero,
// // // // // //     showButtons: false,
// // // // // //     objectPosition: "center top",
// // // // // //   },
// // // // // // ];

// // // // // // const promoCards: PromoCard[] = [
// // // // // //   {
// // // // // //     title: "Personal Loan",
// // // // // //     subtitle: "Quick personal loan support for urgent needs and goals.",
// // // // // //     button1: "Apply Now",
// // // // // //     button2: "Know more",
// // // // // //     button1Link: "/contact",
// // // // // //     button2Link: "/loans",
// // // // // //     image: personalLoanImg,
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Business Loan",
// // // // // //     subtitle: "Funding solutions for business growth and expansion.",
// // // // // //     button1: "Apply Now",
// // // // // //     button2: "Learn more",
// // // // // //     button1Link: "/contact",
// // // // // //     button2Link: "/loans",
// // // // // //     image: businessLoanImg,
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Insurance",
// // // // // //     subtitle: "Protect your family, health, vehicle and valuable assets.",
// // // // // //     button1: "Get quote",
// // // // // //     button2: "Explore",
// // // // // //     button1Link: "/contact",
// // // // // //     button2Link: "/insurance",
// // // // // //     image: insuranceCardImg,
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Term Life Insurance",
// // // // // //     subtitle: "Secure your family’s future with affordable term life coverage.",
// // // // // //     button1: "Get quote",
// // // // // //     button2: "Explore",
// // // // // //     button1Link: "/contact",
// // // // // //     button2Link: "/insurance",
// // // // // //     image: insuranceCardImg,
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Mutual Funds",
// // // // // //     subtitle: "Build long-term wealth with SIP and investment planning.",
// // // // // //     button1: "Invest Now",
// // // // // //     button2: "Learn more",
// // // // // //     button1Link: "/contact",
// // // // // //     button2Link: "/mutual-funds",
// // // // // //     image: mutualFundsImg,
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Home Loan",
// // // // // //     subtitle: "Affordable finance options for your dream home.",
// // // // // //     button1: "Apply Now",
// // // // // //     button2: "Know more",
// // // // // //     button1Link: "/contact",
// // // // // //     button2Link: "/loans",
// // // // // //     image: homeLoanImg,
// // // // // //   },
// // // // // // ];

// // // // // // export function Hero() {
// // // // // //   const [current, setCurrent] = useState(0);
// // // // // //   const [isHeroPaused, setIsHeroPaused] = useState(false);

// // // // // //   const activeSlide = slides[current];

// // // // // //   useEffect(() => {
// // // // // //     if (isHeroPaused) return;

// // // // // //     const slider = window.setInterval(() => {
// // // // // //       setCurrent((prev) => (prev + 1) % slides.length);
// // // // // //     }, 5000);

// // // // // //     return () => window.clearInterval(slider);
// // // // // //   }, [isHeroPaused]);

// // // // // //   const nextSlide = () => {
// // // // // //     setCurrent((prev) => (prev + 1) % slides.length);
// // // // // //   };

// // // // // //   const prevSlide = () => {
// // // // // //     setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
// // // // // //   };

// // // // // //   return (
// // // // // //     <>
// // // // // //       {/* MAIN HERO */}
// // // // // //       <section
// // // // // //         id="hero"
// // // // // //         onMouseEnter={() => setIsHeroPaused(true)}
// // // // // //         onMouseLeave={() => setIsHeroPaused(false)}
// // // // // //         className="relative w-full overflow-hidden bg-white pt-20"
// // // // // //       >
// // // // // //         <div className="relative w-full overflow-hidden bg-[#0f4fa8]">
// // // // // //           <div className="relative h-[520px] w-full overflow-hidden sm:h-[560px] md:h-[620px] lg:h-[680px] xl:h-[720px]">
// // // // // //             {slides.map((slide, index) => (
// // // // // //               <img
// // // // // //                 key={slide.image}
// // // // // //                 src={slide.image}
// // // // // //                 alt="Aarthvaahini Financial Services"
// // // // // //                 className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
// // // // // //                   index === current ? "opacity-100" : "opacity-0"
// // // // // //                 }`}
// // // // // //                 style={{
// // // // // //                   objectPosition: slide.objectPosition,
// // // // // //                 }}
// // // // // //                 draggable={false}
// // // // // //               />
// // // // // //             ))}

// // // // // //             {/* FIRST SLIDE BUTTONS */}
// // // // // //             {activeSlide.showButtons && (
// // // // // //               <div className="absolute bottom-20 left-4 z-20 flex flex-wrap items-center gap-3 px-3 sm:left-6 md:bottom-20 md:left-10 lg:left-14">
// // // // // //                 <Link to="/contact">
// // // // // //                   <Button className="h-10 rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 px-4 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 sm:px-5 md:h-12 md:px-7 md:text-base">
// // // // // //                     Free Consultation
// // // // // //                     <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
// // // // // //                   </Button>
// // // // // //                 </Link>

// // // // // //                 <Link to="/about">
// // // // // //                   <Button
// // // // // //                     variant="outline"
// // // // // //                     className="h-10 rounded-xl border border-[#17357e]/20 bg-white/95 px-4 text-sm font-semibold text-[#17357e] shadow-lg transition hover:scale-105 hover:bg-white sm:px-5 md:h-12 md:px-7 md:text-base"
// // // // // //                   >
// // // // // //                     Meet Our Team
// // // // // //                   </Button>
// // // // // //                 </Link>
// // // // // //               </div>
// // // // // //             )}

// // // // // //             {/* SERVICE CARDS */}
// // // // // //             <div className="absolute bottom-10 right-4 z-20 hidden max-w-[900px] flex-wrap items-center justify-end gap-4 md:flex lg:right-8">
// // // // // //               <Link to="/loans">
// // // // // //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-blue-200/40 bg-gradient-to-r from-[#17357e] to-[#00539b] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// // // // // //                   <Wallet className="h-7 w-7 text-blue-200" />

// // // // // //                   <div>
// // // // // //                     <h3 className="text-base font-semibold lg:text-lg">
// // // // // //                       Loans
// // // // // //                     </h3>
// // // // // //                     <p className="text-sm text-blue-100">Quick Loans</p>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </Link>

// // // // // //               <Link to="/insurance">
// // // // // //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-pink-200/40 bg-gradient-to-r from-[#17357e] to-[#7c2d72] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// // // // // //                   <ShieldCheck className="h-7 w-7 text-pink-200" />

// // // // // //                   <div>
// // // // // //                     <h3 className="text-base font-semibold lg:text-lg">
// // // // // //                       Insurance
// // // // // //                     </h3>
// // // // // //                     <p className="text-sm text-pink-100">Secure Insurance</p>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </Link>

// // // // // //               <Link to="/mutual-funds">
// // // // // //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-green-200/40 bg-gradient-to-r from-[#17357e] to-[#047857] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// // // // // //                   <TrendingUp className="h-7 w-7 text-green-200" />

// // // // // //                   <div>
// // // // // //                     <h3 className="text-base font-semibold lg:text-lg">
// // // // // //                       Wealth
// // // // // //                     </h3>
// // // // // //                     <p className="text-sm text-green-100">Mutual Funds</p>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </Link>
// // // // // //             </div>

// // // // // //             {/* HERO ARROWS */}
// // // // // //             <button
// // // // // //               type="button"
// // // // // //               onClick={prevSlide}
// // // // // //               className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35"
// // // // // //               aria-label="Previous hero slide"
// // // // // //             >
// // // // // //               <ChevronLeft className="h-6 w-6 text-white" />
// // // // // //             </button>

// // // // // //             <button
// // // // // //               type="button"
// // // // // //               onClick={nextSlide}
// // // // // //               className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35"
// // // // // //               aria-label="Next hero slide"
// // // // // //             >
// // // // // //               <ChevronRight className="h-6 w-6 text-white" />
// // // // // //             </button>

// // // // // //             {/* HERO DOTS REMOVED */}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* PRODUCT IMAGE CARDS NORMAL */}
// // // // // //       <section className="relative z-10 bg-white py-10 sm:py-12">
// // // // // //         <div className="mx-auto max-w-[1500px] px-4 sm:px-6">
// // // // // //           <div className="mb-8 text-center">
// // // // // //             <h2 className="text-3xl font-bold text-[#08224a] sm:text-4xl lg:text-5xl">
// // // // // //               Our Financial Products
// // // // // //             </h2>

// // // // // //             <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
// // // // // //               Loans, insurance and wealth solutions tailored for your goals.
// // // // // //             </p>
// // // // // //           </div>

// // // // // //           <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
// // // // // //             {promoCards.map((card) => (
// // // // // //               <div
// // // // // //                 key={card.title}
// // // // // //                 className="group overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
// // // // // //               >
// // // // // //                 <div className="relative h-[310px] overflow-hidden bg-slate-100">
// // // // // //                   <img
// // // // // //                     src={card.image}
// // // // // //                     alt={card.title}
// // // // // //                     className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
// // // // // //                     draggable={false}
// // // // // //                   />

// // // // // //                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

// // // // // //                   <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
// // // // // //                     <h3 className="text-2xl font-black">{card.title}</h3>

// // // // // //                     <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/85">
// // // // // //                       {card.subtitle}
// // // // // //                     </p>

// // // // // //                     <div className="mt-5 flex flex-wrap gap-3">
// // // // // //                       <Link to={card.button1Link}>
// // // // // //                         <button
// // // // // //                           type="button"
// // // // // //                           className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-[#00539b] shadow-md transition hover:bg-blue-50"
// // // // // //                         >
// // // // // //                           {card.button1}
// // // // // //                           <ArrowRight className="h-4 w-4" />
// // // // // //                         </button>
// // // // // //                       </Link>

// // // // // //                       {card.button2 && card.button2Link && (
// // // // // //                         <Link to={card.button2Link}>
// // // // // //                           <button
// // // // // //                             type="button"
// // // // // //                             className="rounded-xl border border-white/70 bg-white/10 px-5 py-2.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
// // // // // //                           >
// // // // // //                             {card.button2}
// // // // // //                           </button>
// // // // // //                         </Link>
// // // // // //                       )}
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>
// // // // // //     </>
// // // // // //   );
// // // // // // }\
// // // // // import { useEffect, useState } from "react";
// // // // // import { Link } from "@tanstack/react-router";
// // // // // import {
// // // // //   ArrowRight,
// // // // //   ChevronLeft,
// // // // //   ChevronRight,
// // // // //   ShieldCheck,
// // // // //   TrendingUp,
// // // // //   Wallet,
// // // // // } from "lucide-react";

// // // // // import { Button } from "@/components/ui/button";

// // // // // import advisor33 from "@/assets/hero-advisor33.jpeg";
// // // // // import insuranceHero from "@/assets/insurance-hero.png";
// // // // // import mutualFundHero from "@/assets/mutual-fund-hero.png";

// // // // // import personalLoanImg from "@/assets/products/personal-loan.png";
// // // // // import businessLoanImg from "@/assets/products/business-loan.png";
// // // // // import insuranceCardImg from "@/assets/products/insurance.png";
// // // // // import mutualFundsImg from "@/assets/products/mutual-funds.png";
// // // // // import homeLoanImg from "@/assets/products/home-loan.png";

// // // // // type Slide = {
// // // // //   image: string;
// // // // //   showButtons?: boolean;
// // // // //   objectPosition: string;
// // // // // };

// // // // // type PromoCard = {
// // // // //   title: string;
// // // // //   subtitle: string;
// // // // //   button1: string;
// // // // //   button2?: string;
// // // // //   button1Link: string;
// // // // //   button2Link?: string;
// // // // //   image: string;
// // // // // };

// // // // // const slides: Slide[] = [
// // // // //   {
// // // // //     image: advisor33,
// // // // //     showButtons: true,
// // // // //     objectPosition: "center top",
// // // // //   },
// // // // //   {
// // // // //     image: insuranceHero,
// // // // //     showButtons: false,
// // // // //     objectPosition: "center top",
// // // // //   },
// // // // //   {
// // // // //     image: mutualFundHero,
// // // // //     showButtons: false,
// // // // //     objectPosition: "center top",
// // // // //   },
// // // // // ];

// // // // // const promoCards: PromoCard[] = [
// // // // //   {
// // // // //     title: "Personal Loan",
// // // // //     subtitle: "Quick personal loan support for urgent needs and goals.",
// // // // //     button1: "Apply Now",
// // // // //     button2: "Know more",
// // // // //     button1Link: "/contact",
// // // // //     button2Link: "/loans",
// // // // //     image: personalLoanImg,
// // // // //   },
// // // // //   {
// // // // //     title: "Business Loan",
// // // // //     subtitle: "Funding solutions for business growth and expansion.",
// // // // //     button1: "Apply Now",
// // // // //     button2: "Learn more",
// // // // //     button1Link: "/contact",
// // // // //     button2Link: "/loans",
// // // // //     image: businessLoanImg,
// // // // //   },
// // // // //   {
// // // // //     title: "Term Life Insurance",
// // // // //     subtitle: "Secure your family’s future with affordable term life coverage.",
// // // // //     button1: "Get quote",
// // // // //     button2: "Explore",
// // // // //     button1Link: "/contact",
// // // // //     button2Link: "/insurance",
// // // // //     image: insuranceCardImg,
// // // // //   },
// // // // //   {
// // // // //     title: "Mutual Funds",
// // // // //     subtitle: "Build long-term wealth with SIP and investment planning.",
// // // // //     button1: "Invest Now",
// // // // //     button2: "Learn more",
// // // // //     button1Link: "/contact",
// // // // //     button2Link: "/mutual-funds",
// // // // //     image: mutualFundsImg,
// // // // //   },
// // // // //   {
// // // // //     title: "Home Loan",
// // // // //     subtitle: "Affordable finance options for your dream home.",
// // // // //     button1: "Apply Now",
// // // // //     button2: "Know more",
// // // // //     button1Link: "/contact",
// // // // //     button2Link: "/loans",
// // // // //     image: homeLoanImg,
// // // // //   },
// // // // // ];

// // // // // function getVisibleCards(activeIndex: number) {
// // // // //   return [0, 1, 2].map((offset) => {
// // // // //     const index = (activeIndex + offset) % promoCards.length;
// // // // //     return promoCards[index];
// // // // //   });
// // // // // }

// // // // // export function Hero() {
// // // // //   const [current, setCurrent] = useState(0);
// // // // //   const [activeCard, setActiveCard] = useState(0);
// // // // //   const [isHeroPaused, setIsHeroPaused] = useState(false);

// // // // //   const activeSlide = slides[current];
// // // // //   const visiblePromoCards = getVisibleCards(activeCard);

// // // // //   useEffect(() => {
// // // // //     if (isHeroPaused) return;

// // // // //     const slider = window.setInterval(() => {
// // // // //       setCurrent((prev) => (prev + 1) % slides.length);
// // // // //     }, 5000);

// // // // //     return () => window.clearInterval(slider);
// // // // //   }, [isHeroPaused]);

// // // // //   const nextSlide = () => {
// // // // //     setCurrent((prev) => (prev + 1) % slides.length);
// // // // //   };

// // // // //   const prevSlide = () => {
// // // // //     setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
// // // // //   };

// // // // //   const nextCard = () => {
// // // // //     setActiveCard((prev) => (prev + 1) % promoCards.length);
// // // // //   };

// // // // //   const prevCard = () => {
// // // // //     setActiveCard((prev) =>
// // // // //       prev === 0 ? promoCards.length - 1 : prev - 1,
// // // // //     );
// // // // //   };

// // // // //   return (
// // // // //     <>
// // // // //       {/* MAIN HERO */}
// // // // //       <section
// // // // //         id="hero"
// // // // //         onMouseEnter={() => setIsHeroPaused(true)}
// // // // //         onMouseLeave={() => setIsHeroPaused(false)}
// // // // //         className="relative w-full overflow-hidden bg-white pt-20"
// // // // //       >
// // // // //         <div className="relative w-full overflow-hidden bg-[#0f4fa8]">
// // // // //           <div className="relative h-[520px] w-full overflow-hidden sm:h-[560px] md:h-[620px] lg:h-[680px] xl:h-[720px]">
// // // // //             {slides.map((slide, index) => (
// // // // //               <img
// // // // //                 key={slide.image}
// // // // //                 src={slide.image}
// // // // //                 alt="Aarthvaahini Financial Services"
// // // // //                 className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
// // // // //                   index === current ? "opacity-100" : "opacity-0"
// // // // //                 }`}
// // // // //                 style={{
// // // // //                   objectPosition: slide.objectPosition,
// // // // //                 }}
// // // // //                 draggable={false}
// // // // //               />
// // // // //             ))}

// // // // //             {activeSlide.showButtons && (
// // // // //               <div className="absolute bottom-20 left-4 z-20 flex flex-wrap items-center gap-3 px-3 sm:left-6 md:bottom-20 md:left-10 lg:left-14">
// // // // //                 <Link to="/contact">
// // // // //                   <Button className="h-10 rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 px-4 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 sm:px-5 md:h-12 md:px-7 md:text-base">
// // // // //                     Free Consultation
// // // // //                     <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
// // // // //                   </Button>
// // // // //                 </Link>

// // // // //                 <Link to="/about">
// // // // //                   <Button
// // // // //                     variant="outline"
// // // // //                     className="h-10 rounded-xl border border-[#17357e]/20 bg-white/95 px-4 text-sm font-semibold text-[#17357e] shadow-lg transition hover:scale-105 hover:bg-white sm:px-5 md:h-12 md:px-7 md:text-base"
// // // // //                   >
// // // // //                     Meet Our Team
// // // // //                   </Button>
// // // // //                 </Link>
// // // // //               </div>
// // // // //             )}

// // // // //             {/* SERVICE CARDS */}
// // // // //             <div className="absolute bottom-10 right-4 z-20 hidden max-w-[900px] flex-wrap items-center justify-end gap-4 md:flex lg:right-8">
// // // // //               <Link to="/loans">
// // // // //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-blue-200/40 bg-gradient-to-r from-[#17357e] to-[#00539b] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// // // // //                   <Wallet className="h-7 w-7 text-blue-200" />

// // // // //                   <div>
// // // // //                     <h3 className="text-base font-semibold lg:text-lg">
// // // // //                       Loans
// // // // //                     </h3>
// // // // //                     <p className="text-sm text-blue-100">Quick Loans</p>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </Link>

// // // // //               <Link to="/insurance">
// // // // //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-pink-200/40 bg-gradient-to-r from-[#17357e] to-[#7c2d72] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// // // // //                   <ShieldCheck className="h-7 w-7 text-pink-200" />

// // // // //                   <div>
// // // // //                     <h3 className="text-base font-semibold lg:text-lg">
// // // // //                       Insurance
// // // // //                     </h3>
// // // // //                     <p className="text-sm text-pink-100">Secure Insurance</p>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </Link>

// // // // //               <Link to="/mutual-funds">
// // // // //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-green-200/40 bg-gradient-to-r from-[#17357e] to-[#047857] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// // // // //                   <TrendingUp className="h-7 w-7 text-green-200" />

// // // // //                   <div>
// // // // //                     <h3 className="text-base font-semibold lg:text-lg">
// // // // //                       Wealth
// // // // //                     </h3>
// // // // //                     <p className="text-sm text-green-100">Mutual Funds</p>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </Link>
// // // // //             </div>

// // // // //             {/* HERO ARROWS */}
// // // // //             <button
// // // // //               type="button"
// // // // //               onClick={prevSlide}
// // // // //               className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35"
// // // // //               aria-label="Previous hero slide"
// // // // //             >
// // // // //               <ChevronLeft className="h-6 w-6 text-white" />
// // // // //             </button>

// // // // //             <button
// // // // //               type="button"
// // // // //               onClick={nextSlide}
// // // // //               className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35"
// // // // //               aria-label="Next hero slide"
// // // // //             >
// // // // //               <ChevronRight className="h-6 w-6 text-white" />
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* PRODUCT CARDS ONE LINE SLIDER */}
// // // // //       <section className="relative z-10 bg-white py-10 sm:py-12">
// // // // //         <div className="mx-auto max-w-[1500px] px-4 sm:px-6">
// // // // //           <div className="mb-8 text-center">
// // // // //             <h2 className="text-3xl font-bold text-[#08224a] sm:text-4xl lg:text-5xl">
// // // // //               Our Financial Products
// // // // //             </h2>

// // // // //             <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
// // // // //               Loans, insurance and wealth solutions tailored for your goals.
// // // // //             </p>
// // // // //           </div>

// // // // //           <div className="relative">
// // // // //             {/* LEFT ARROW */}
// // // // //             <button
// // // // //               type="button"
// // // // //               onClick={prevCard}
// // // // //               className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#00539b] shadow-xl transition hover:scale-110 hover:bg-[#00539b] hover:text-white md:flex"
// // // // //               aria-label="Previous product"
// // // // //             >
// // // // //               <ChevronLeft className="h-6 w-6" />
// // // // //             </button>

// // // // //             {/* CARDS SINGLE LINE */}
// // // // //             <div className="mx-auto flex max-w-[1380px] gap-7 overflow-hidden px-0 py-4 md:px-16">
// // // // //               {visiblePromoCards.map((card) => (
// // // // //                 <div
// // // // //                   key={card.title}
// // // // //                   className="group min-w-full overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl active:scale-[1.04] sm:min-w-[48%] lg:min-w-[31.7%]"
// // // // //                 >
// // // // //                   <div className="relative h-[330px] overflow-hidden bg-slate-100">
// // // // //                     <img
// // // // //                       src={card.image}
// // // // //                       alt={card.title}
// // // // //                       className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
// // // // //                       draggable={false}
// // // // //                     />

// // // // //                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

// // // // //                     <div className="absolute inset-x-0 bottom-0 p-6 text-white">
// // // // //                       <h3 className="text-2xl font-black drop-shadow">
// // // // //                         {card.title}
// // // // //                       </h3>

// // // // //                       <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/90">
// // // // //                         {card.subtitle}
// // // // //                       </p>

// // // // //                       <div className="mt-5 flex flex-wrap gap-3">
// // // // //                         <Link to={card.button1Link}>
// // // // //                           <button
// // // // //                             type="button"
// // // // //                             className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-[#00539b] shadow-md transition hover:bg-blue-50"
// // // // //                           >
// // // // //                             {card.button1}
// // // // //                             <ArrowRight className="h-4 w-4" />
// // // // //                           </button>
// // // // //                         </Link>

// // // // //                         {card.button2 && card.button2Link && (
// // // // //                           <Link to={card.button2Link}>
// // // // //                             <button
// // // // //                               type="button"
// // // // //                               className="rounded-xl border border-white/70 bg-white/10 px-5 py-2.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
// // // // //                             >
// // // // //                               {card.button2}
// // // // //                             </button>
// // // // //                           </Link>
// // // // //                         )}
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>

// // // // //             {/* RIGHT ARROW */}
// // // // //             <button
// // // // //               type="button"
// // // // //               onClick={nextCard}
// // // // //               className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#00539b] shadow-xl transition hover:scale-110 hover:bg-[#00539b] hover:text-white md:flex"
// // // // //               aria-label="Next product"
// // // // //             >
// // // // //               <ChevronRight className="h-6 w-6" />
// // // // //             </button>

// // // // //             {/* MOBILE ARROWS */}
// // // // //             <div className="mt-4 flex items-center justify-center gap-4 md:hidden">
// // // // //               <button
// // // // //                 type="button"
// // // // //                 onClick={prevCard}
// // // // //                 className="flex h-11 w-11 items-center justify-center rounded-full bg-[#00539b] text-white shadow-lg transition active:scale-95"
// // // // //                 aria-label="Previous product"
// // // // //               >
// // // // //                 <ChevronLeft className="h-5 w-5" />
// // // // //               </button>

// // // // //               <button
// // // // //                 type="button"
// // // // //                 onClick={nextCard}
// // // // //                 className="flex h-11 w-11 items-center justify-center rounded-full bg-[#00539b] text-white shadow-lg transition active:scale-95"
// // // // //                 aria-label="Next product"
// // // // //               >
// // // // //                 <ChevronRight className="h-5 w-5" />
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>
// // // // //     </>
// // // // //   );
// // // // // }
// // // // import { useEffect, useState } from "react";
// // // // import { Link } from "@tanstack/react-router";
// // // // import {
// // // //   ArrowRight,
// // // //   ChevronLeft,
// // // //   ChevronRight,
// // // //   ShieldCheck,
// // // //   TrendingUp,
// // // //   Wallet,
// // // // } from "lucide-react";

// // // // import { Button } from "@/components/ui/button";

// // // // import advisor33 from "@/assets/hero-advisor33.jpeg";
// // // // import insuranceHero from "@/assets/insurance-hero.png";
// // // // import mutualFundHero from "@/assets/mutual-fund-hero.png";

// // // // import personalLoanImg from "@/assets/products/personal-loan.png";
// // // // import businessLoanImg from "@/assets/products/business-loan.png";
// // // // import insuranceCardImg from "@/assets/products/insurance.png";
// // // // import mutualFundsImg from "@/assets/products/mutual-funds.png";
// // // // import homeLoanImg from "@/assets/products/home-loan.png";

// // // // type Slide = {
// // // //   image: string;
// // // //   showButtons?: boolean;
// // // //   objectPosition: string;
// // // // };

// // // // type PromoCard = {
// // // //   title: string;
// // // //   subtitle: string;
// // // //   button1: string;
// // // //   button2?: string;
// // // //   button1Link: string;
// // // //   button2Link?: string;
// // // //   image: string;
// // // //   bg: string;
// // // // };

// // // // const slides: Slide[] = [
// // // //   {
// // // //     image: advisor33,
// // // //     showButtons: true,
// // // //     objectPosition: "center top",
// // // //   },
// // // //   {
// // // //     image: insuranceHero,
// // // //     showButtons: false,
// // // //     objectPosition: "center top",
// // // //   },
// // // //   {
// // // //     image: mutualFundHero,
// // // //     showButtons: false,
// // // //     objectPosition: "center top",
// // // //   },
// // // // ];

// // // // const promoCards: PromoCard[] = [
// // // //   {
// // // //     title: "Personal Loan",
// // // //     subtitle: "Quick personal loan support for urgent needs and goals.",
// // // //     button1: "Apply Now",
// // // //     button2: "Know more",
// // // //     button1Link: "/contact",
// // // //     button2Link: "/loans",
// // // //     image: personalLoanImg,
// // // //     bg: "bg-[#dbeafe]",
// // // //   },
// // // //   {
// // // //     title: "Business Loan",
// // // //     subtitle: "Funding solutions for business growth and expansion.",
// // // //     button1: "Apply Now",
// // // //     button2: "Learn more",
// // // //     button1Link: "/contact",
// // // //     button2Link: "/loans",
// // // //     image: businessLoanImg,
// // // //     bg: "bg-[#e0f2fe]",
// // // //   },
// // // //   {
// // // //     title: "Term Life Insurance",
// // // //     subtitle: "Secure your family’s future with affordable term life coverage.",
// // // //     button1: "Get quote",
// // // //     button2: "Explore",
// // // //     button1Link: "/contact",
// // // //     button2Link: "/insurance",
// // // //     image: insuranceCardImg,
// // // //     bg: "bg-[#eaf2ff]",
// // // //   },
// // // //   {
// // // //     title: "Mutual Funds",
// // // //     subtitle: "Build long-term wealth with SIP and investment planning.",
// // // //     button1: "Invest Now",
// // // //     button2: "Learn more",
// // // //     button1Link: "/contact",
// // // //     button2Link: "/mutual-funds",
// // // //     image: mutualFundsImg,
// // // //     bg: "bg-[#dcfce7]",
// // // //   },
// // // //   {
// // // //     title: "Home Loan",
// // // //     subtitle: "Affordable finance options for your dream home.",
// // // //     button1: "Apply Now",
// // // //     button2: "Know more",
// // // //     button1Link: "/contact",
// // // //     button2Link: "/loans",
// // // //     image: homeLoanImg,
// // // //     bg: "bg-[#fff2cc]",
// // // //   },
// // // // ];

// // // // function getHdfcStyleCards(activeIndex: number) {
// // // //   const total = promoCards.length;

// // // //   return [-1, 0, 1].map((offset) => {
// // // //     const index = (activeIndex + offset + total) % total;

// // // //     return {
// // // //       card: promoCards[index],
// // // //       offset,
// // // //     };
// // // //   });
// // // // }

// // // // export function Hero() {
// // // //   const [current, setCurrent] = useState(0);
// // // //   const [activeCard, setActiveCard] = useState(0);
// // // //   const [isHeroPaused, setIsHeroPaused] = useState(false);

// // // //   const activeSlide = slides[current];
// // // //   const visiblePromoCards = getHdfcStyleCards(activeCard);

// // // //   useEffect(() => {
// // // //     if (isHeroPaused) return;

// // // //     const slider = window.setInterval(() => {
// // // //       setCurrent((prev) => (prev + 1) % slides.length);
// // // //     }, 5000);

// // // //     return () => window.clearInterval(slider);
// // // //   }, [isHeroPaused]);

// // // //   const nextSlide = () => {
// // // //     setCurrent((prev) => (prev + 1) % slides.length);
// // // //   };

// // // //   const prevSlide = () => {
// // // //     setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
// // // //   };

// // // //   const nextCard = () => {
// // // //     setActiveCard((prev) => (prev + 1) % promoCards.length);
// // // //   };

// // // //   const prevCard = () => {
// // // //     setActiveCard((prev) =>
// // // //       prev === 0 ? promoCards.length - 1 : prev - 1,
// // // //     );
// // // //   };

// // // //   const getCardPositionClass = (offset: number) => {
// // // //     if (offset === 0) {
// // // //       return "z-30 translate-x-0 scale-100 opacity-100 blur-0";
// // // //     }

// // // //     if (offset === -1) {
// // // //       return "z-10 -translate-x-[78%] scale-[0.92] opacity-45 blur-[1px]";
// // // //     }

// // // //     return "z-10 translate-x-[78%] scale-[0.92] opacity-45 blur-[1px]";
// // // //   };

// // // //   return (
// // // //     <>
// // // //       {/* MAIN HERO */}
// // // //       <section
// // // //         id="hero"
// // // //         onMouseEnter={() => setIsHeroPaused(true)}
// // // //         onMouseLeave={() => setIsHeroPaused(false)}
// // // //         className="relative w-full overflow-hidden bg-white pt-20"
// // // //       >
// // // //         <div className="relative w-full overflow-hidden bg-[#0f4fa8]">
// // // //           <div className="relative h-[520px] w-full overflow-hidden sm:h-[560px] md:h-[620px] lg:h-[680px] xl:h-[720px]">
// // // //             {slides.map((slide, index) => (
// // // //               <img
// // // //                 key={slide.image}
// // // //                 src={slide.image}
// // // //                 alt="Aarthvaahini Financial Services"
// // // //                 className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
// // // //                   index === current ? "opacity-100" : "opacity-0"
// // // //                 }`}
// // // //                 style={{
// // // //                   objectPosition: slide.objectPosition,
// // // //                 }}
// // // //                 draggable={false}
// // // //               />
// // // //             ))}

// // // //             {activeSlide.showButtons && (
// // // //               <div className="absolute bottom-20 left-4 z-20 flex flex-wrap items-center gap-3 px-3 sm:left-6 md:bottom-20 md:left-10 lg:left-14">
// // // //                 <Link to="/contact">
// // // //                   <Button className="h-10 rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 px-4 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 sm:px-5 md:h-12 md:px-7 md:text-base">
// // // //                     Free Consultation
// // // //                     <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
// // // //                   </Button>
// // // //                 </Link>

// // // //                 <Link to="/about">
// // // //                   <Button
// // // //                     variant="outline"
// // // //                     className="h-10 rounded-xl border border-[#17357e]/20 bg-white/95 px-4 text-sm font-semibold text-[#17357e] shadow-lg transition hover:scale-105 hover:bg-white sm:px-5 md:h-12 md:px-7 md:text-base"
// // // //                   >
// // // //                     Meet Our Team
// // // //                   </Button>
// // // //                 </Link>
// // // //               </div>
// // // //             )}

// // // //             {/* SERVICE CARDS */}
// // // //             <div className="absolute bottom-10 right-4 z-20 hidden max-w-[900px] flex-wrap items-center justify-end gap-4 md:flex lg:right-8">
// // // //               <Link to="/loans">
// // // //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-blue-200/40 bg-gradient-to-r from-[#17357e] to-[#00539b] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// // // //                   <Wallet className="h-7 w-7 text-blue-200" />

// // // //                   <div>
// // // //                     <h3 className="text-base font-semibold lg:text-lg">
// // // //                       Loans
// // // //                     </h3>
// // // //                     <p className="text-sm text-blue-100">Quick Loans</p>
// // // //                   </div>
// // // //                 </div>
// // // //               </Link>

// // // //               <Link to="/insurance">
// // // //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-pink-200/40 bg-gradient-to-r from-[#17357e] to-[#7c2d72] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// // // //                   <ShieldCheck className="h-7 w-7 text-pink-200" />

// // // //                   <div>
// // // //                     <h3 className="text-base font-semibold lg:text-lg">
// // // //                       Insurance
// // // //                     </h3>
// // // //                     <p className="text-sm text-pink-100">Secure Insurance</p>
// // // //                   </div>
// // // //                 </div>
// // // //               </Link>

// // // //               <Link to="/mutual-funds">
// // // //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-green-200/40 bg-gradient-to-r from-[#17357e] to-[#047857] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// // // //                   <TrendingUp className="h-7 w-7 text-green-200" />

// // // //                   <div>
// // // //                     <h3 className="text-base font-semibold lg:text-lg">
// // // //                       Wealth
// // // //                     </h3>
// // // //                     <p className="text-sm text-green-100">Mutual Funds</p>
// // // //                   </div>
// // // //                 </div>
// // // //               </Link>
// // // //             </div>

// // // //             {/* HERO ARROWS */}
// // // //             <button
// // // //               type="button"
// // // //               onClick={prevSlide}
// // // //               className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35"
// // // //               aria-label="Previous hero slide"
// // // //             >
// // // //               <ChevronLeft className="h-6 w-6 text-white" />
// // // //             </button>

// // // //             <button
// // // //               type="button"
// // // //               onClick={nextSlide}
// // // //               className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35"
// // // //               aria-label="Next hero slide"
// // // //             >
// // // //               <ChevronRight className="h-6 w-6 text-white" />
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* HDFC STYLE PRODUCT SLIDER */}
// // // //       <section className="relative z-10 overflow-hidden bg-white py-10 sm:py-12">
// // // //         <div className="mx-auto max-w-[1500px] px-4 sm:px-6">
// // // //           <div className="mb-8 text-center">
// // // //             <h2 className="text-3xl font-bold text-[#08224a] sm:text-4xl lg:text-5xl">
// // // //               Our Financial Products
// // // //             </h2>

// // // //             <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
// // // //               Loans, insurance and wealth solutions tailored for your goals.
// // // //             </p>
// // // //           </div>

// // // //           <div className="relative mx-auto max-w-[1380px] overflow-hidden py-4">
// // // //             <div className="relative flex min-h-[350px] items-center justify-center sm:min-h-[390px]">
// // // //               {visiblePromoCards.map(({ card, offset }) => (
// // // //                 <div
// // // //                   key={`${card.title}-${offset}`}
// // // //                   className={`absolute w-[90%] max-w-[660px] transition-all duration-700 ease-in-out sm:w-[78%] lg:w-[620px] ${getCardPositionClass(
// // // //                     offset,
// // // //                   )}`}
// // // //                 >
// // // //                   <div
// // // //                     className={`group relative h-[310px] overflow-hidden rounded-[20px] ${card.bg} shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl active:scale-[1.03] sm:h-[340px]`}
// // // //                   >
// // // //                     <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/65 to-transparent" />

// // // //                     <div className="relative z-10 flex h-full">
// // // //                       <div className="flex w-[55%] flex-col justify-center px-8 py-7 sm:px-10">
// // // //                         <h3 className="text-2xl font-black text-[#07142f] sm:text-3xl">
// // // //                           {card.title}
// // // //                         </h3>

// // // //                         <p className="mt-4 max-w-[320px] text-sm leading-6 text-slate-700 sm:text-base">
// // // //                           {card.subtitle}
// // // //                         </p>

// // // //                         <div className="mt-6 flex flex-wrap gap-3">
// // // //                           <Link to={card.button1Link}>
// // // //                             <button
// // // //                               type="button"
// // // //                               className="inline-flex items-center gap-2 rounded-lg bg-[#00539b] px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-[#17357e]"
// // // //                             >
// // // //                               {card.button1}
// // // //                               <ArrowRight className="h-4 w-4" />
// // // //                             </button>
// // // //                           </Link>

// // // //                           {card.button2 && card.button2Link && (
// // // //                             <Link to={card.button2Link}>
// // // //                               <button
// // // //                                 type="button"
// // // //                                 className="rounded-lg border border-[#00539b] bg-white/50 px-5 py-2.5 text-sm font-bold text-[#00539b] transition hover:bg-white"
// // // //                               >
// // // //                                 {card.button2}
// // // //                               </button>
// // // //                             </Link>
// // // //                           )}
// // // //                         </div>
// // // //                       </div>

// // // //                       <div className="absolute bottom-0 right-0 h-full w-[55%]">
// // // //                         <img
// // // //                           src={card.image}
// // // //                           alt={card.title}
// // // //                           className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
// // // //                           draggable={false}
// // // //                         />
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>

// // // //             {/* HDFC STYLE SMALL ARROWS */}
// // // //             <div className="mt-3 flex items-center justify-center gap-5">
// // // //               <button
// // // //                 type="button"
// // // //                 onClick={prevCard}
// // // //                 className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00539b] text-white shadow-md transition hover:scale-110 hover:bg-[#17357e]"
// // // //                 aria-label="Previous product"
// // // //               >
// // // //                 <ChevronLeft className="h-5 w-5" />
// // // //               </button>

// // // //               <button
// // // //                 type="button"
// // // //                 onClick={nextCard}
// // // //                 className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00539b] text-white shadow-md transition hover:scale-110 hover:bg-[#17357e]"
// // // //                 aria-label="Next product"
// // // //               >
// // // //                 <ChevronRight className="h-5 w-5" />
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //     </>
// // // //   );
// // // // }
// // // import { useEffect, useState } from "react";
// // // import { Link } from "@tanstack/react-router";
// // // import {
// // //   ArrowRight,
// // //   ChevronLeft,
// // //   ChevronRight,
// // //   ShieldCheck,
// // //   TrendingUp,
// // //   Wallet,
// // // } from "lucide-react";

// // // import { Button } from "@/components/ui/button";

// // // import advisor33 from "@/assets/hero-advisor33.jpeg";
// // // import insuranceHero from "@/assets/insurance-hero.png";
// // // import mutualFundHero from "@/assets/mutual-fund-hero.png";

// // // import personalLoanImg from "@/assets/products/personal-loan.png";
// // // import businessLoanImg from "@/assets/products/business-loan.png";
// // // import insuranceCardImg from "@/assets/products/insurance.png";
// // // import mutualFundsImg from "@/assets/products/mutual-funds.png";
// // // import homeLoanImg from "@/assets/products/home-loan.png";

// // // type Slide = {
// // //   image: string;
// // //   showButtons?: boolean;
// // //   objectPosition: string;
// // // };

// // // type PromoCard = {
// // //   title: string;
// // //   image: string;
// // //   applyLink: string;
// // //   bg: string;
// // // };

// // // const slides: Slide[] = [
// // //   {
// // //     image: advisor33,
// // //     showButtons: true,
// // //     objectPosition: "center top",
// // //   },
// // //   {
// // //     image: insuranceHero,
// // //     showButtons: false,
// // //     objectPosition: "center top",
// // //   },
// // //   {
// // //     image: mutualFundHero,
// // //     showButtons: false,
// // //     objectPosition: "center top",
// // //   },
// // // ];

// // // const promoCards: PromoCard[] = [
// // //   {
// // //     title: "Personal Loan",
// // //     image: personalLoanImg,
// // //     applyLink: "/contact",
// // //     bg: "bg-[#dbeafe]",
// // //   },
// // //   {
// // //     title: "Business Loan",
// // //     image: businessLoanImg,
// // //     applyLink: "/contact",
// // //     bg: "bg-[#e0f2fe]",
// // //   },
// // //   {
// // //     title: "Term Life Insurance",
// // //     image: insuranceCardImg,
// // //     applyLink: "/contact",
// // //     bg: "bg-[#eaf2ff]",
// // //   },
// // //   {
// // //     title: "Mutual Funds",
// // //     image: mutualFundsImg,
// // //     applyLink: "/contact",
// // //     bg: "bg-[#dcfce7]",
// // //   },
// // //   {
// // //     title: "Home Loan",
// // //     image: homeLoanImg,
// // //     applyLink: "/contact",
// // //     bg: "bg-[#fff2cc]",
// // //   },
// // // ];

// // // function getHdfcStyleCards(activeIndex: number) {
// // //   const total = promoCards.length;

// // //   return [-1, 0, 1].map((offset) => {
// // //     const index = (activeIndex + offset + total) % total;

// // //     return {
// // //       card: promoCards[index],
// // //       offset,
// // //     };
// // //   });
// // // }

// // // export function Hero() {
// // //   const [current, setCurrent] = useState(0);
// // //   const [activeCard, setActiveCard] = useState(0);
// // //   const [isHeroPaused, setIsHeroPaused] = useState(false);

// // //   const activeSlide = slides[current];
// // //   const visiblePromoCards = getHdfcStyleCards(activeCard);

// // //   useEffect(() => {
// // //     if (isHeroPaused) return;

// // //     const slider = window.setInterval(() => {
// // //       setCurrent((prev) => (prev + 1) % slides.length);
// // //     }, 5000);

// // //     return () => window.clearInterval(slider);
// // //   }, [isHeroPaused]);

// // //   const nextSlide = () => {
// // //     setCurrent((prev) => (prev + 1) % slides.length);
// // //   };

// // //   const prevSlide = () => {
// // //     setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
// // //   };

// // //   const nextCard = () => {
// // //     setActiveCard((prev) => (prev + 1) % promoCards.length);
// // //   };

// // //   const prevCard = () => {
// // //     setActiveCard((prev) =>
// // //       prev === 0 ? promoCards.length - 1 : prev - 1,
// // //     );
// // //   };

// // //   const getCardPositionClass = (offset: number) => {
// // //     if (offset === 0) {
// // //       return "z-30 translate-x-0 scale-100 opacity-100 blur-0";
// // //     }

// // //     if (offset === -1) {
// // //       return "z-10 -translate-x-[78%] scale-[0.92] opacity-45 blur-[1px]";
// // //     }

// // //     return "z-10 translate-x-[78%] scale-[0.92] opacity-45 blur-[1px]";
// // //   };

// // //   return (
// // //     <>
// // //       {/* MAIN HERO */}
// // //       <section
// // //         id="hero"
// // //         onMouseEnter={() => setIsHeroPaused(true)}
// // //         onMouseLeave={() => setIsHeroPaused(false)}
// // //         className="relative w-full overflow-hidden bg-white pt-20"
// // //       >
// // //         <div className="relative w-full overflow-hidden bg-[#0f4fa8]">
// // //           <div className="relative h-[520px] w-full overflow-hidden sm:h-[560px] md:h-[620px] lg:h-[680px] xl:h-[720px]">
// // //             {slides.map((slide, index) => (
// // //               <img
// // //                 key={slide.image}
// // //                 src={slide.image}
// // //                 alt="Aarthvaahini Financial Services"
// // //                 className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
// // //                   index === current ? "opacity-100" : "opacity-0"
// // //                 }`}
// // //                 style={{
// // //                   objectPosition: slide.objectPosition,
// // //                 }}
// // //                 draggable={false}
// // //               />
// // //             ))}

// // //             {activeSlide.showButtons && (
// // //               <div className="absolute bottom-20 left-4 z-20 flex flex-wrap items-center gap-3 px-3 sm:left-6 md:bottom-20 md:left-10 lg:left-14">
// // //                 <Link to="/contact">
// // //                   <Button className="h-10 rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 px-4 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 sm:px-5 md:h-12 md:px-7 md:text-base">
// // //                     Free Consultation
// // //                     <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
// // //                   </Button>
// // //                 </Link>

// // //                 <Link to="/about">
// // //                   <Button
// // //                     variant="outline"
// // //                     className="h-10 rounded-xl border border-[#17357e]/20 bg-white/95 px-4 text-sm font-semibold text-[#17357e] shadow-lg transition hover:scale-105 hover:bg-white sm:px-5 md:h-12 md:px-7 md:text-base"
// // //                   >
// // //                     Meet Our Team
// // //                   </Button>
// // //                 </Link>
// // //               </div>
// // //             )}

// // //             {/* SERVICE CARDS */}
// // //             <div className="absolute bottom-10 right-4 z-20 hidden max-w-[900px] flex-wrap items-center justify-end gap-4 md:flex lg:right-8">
// // //               <Link to="/loans">
// // //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-blue-200/40 bg-gradient-to-r from-[#17357e] to-[#00539b] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// // //                   <Wallet className="h-7 w-7 text-blue-200" />

// // //                   <div>
// // //                     <h3 className="text-base font-semibold lg:text-lg">
// // //                       Loans
// // //                     </h3>
// // //                     <p className="text-sm text-blue-100">Quick Loans</p>
// // //                   </div>
// // //                 </div>
// // //               </Link>

// // //               <Link to="/insurance">
// // //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-pink-200/40 bg-gradient-to-r from-[#17357e] to-[#7c2d72] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// // //                   <ShieldCheck className="h-7 w-7 text-pink-200" />

// // //                   <div>
// // //                     <h3 className="text-base font-semibold lg:text-lg">
// // //                       Insurance
// // //                     </h3>
// // //                     <p className="text-sm text-pink-100">Secure Insurance</p>
// // //                   </div>
// // //                 </div>
// // //               </Link>

// // //               <Link to="/mutual-funds">
// // //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-green-200/40 bg-gradient-to-r from-[#17357e] to-[#047857] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// // //                   <TrendingUp className="h-7 w-7 text-green-200" />

// // //                   <div>
// // //                     <h3 className="text-base font-semibold lg:text-lg">
// // //                       Wealth
// // //                     </h3>
// // //                     <p className="text-sm text-green-100">Mutual Funds</p>
// // //                   </div>
// // //                 </div>
// // //               </Link>
// // //             </div>

// // //             {/* HERO ARROWS */}
// // //             <button
// // //               type="button"
// // //               onClick={prevSlide}
// // //               className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35"
// // //               aria-label="Previous hero slide"
// // //             >
// // //               <ChevronLeft className="h-6 w-6 text-white" />
// // //             </button>

// // //             <button
// // //               type="button"
// // //               onClick={nextSlide}
// // //               className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35"
// // //               aria-label="Next hero slide"
// // //             >
// // //               <ChevronRight className="h-6 w-6 text-white" />
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* HDFC STYLE PRODUCT SLIDER */}
// // //       <section className="relative z-10 overflow-hidden bg-white py-10 sm:py-12">
// // //         <div className="mx-auto max-w-[1500px] px-4 sm:px-6">
// // //           <div className="mb-8 text-center">
// // //             <h2 className="text-3xl font-bold text-[#08224a] sm:text-4xl lg:text-5xl">
// // //               Our Financial Products
// // //             </h2>

// // //             <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
// // //               Loans, insurance and wealth solutions tailored for your goals.
// // //             </p>
// // //           </div>

// // //           <div className="relative mx-auto max-w-[1380px] overflow-hidden py-4">
// // //             <div className="relative flex min-h-[360px] items-center justify-center sm:min-h-[405px]">
// // //               {visiblePromoCards.map(({ card, offset }) => (
// // //                 <div
// // //                   key={`${card.title}-${offset}`}
// // //                   className={`absolute w-[90%] max-w-[690px] transition-all duration-700 ease-in-out sm:w-[80%] lg:w-[670px] ${getCardPositionClass(
// // //                     offset,
// // //                   )}`}
// // //                 >
// // //                   <div
// // //                     className={`group relative h-[320px] overflow-hidden rounded-[18px] ${card.bg} shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl active:scale-[1.03] sm:h-[365px]`}
// // //                   >
// // //                     {/* IMAGE - NO CUT */}
// // //                     <img
// // //                       src={card.image}
// // //                       alt={card.title}
// // //                       className="h-full w-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.03]"
// // //                       draggable={false}
// // //                     />

// // //                     {/* APPLY NOW BUTTON ONLY */}
// // //                     <div className="absolute left-8 top-1/2 z-20 -translate-y-1/2">
// // //                       <Link to={card.applyLink}>
// // //                         <button
// // //                           type="button"
// // //                           className="inline-flex items-center gap-2 rounded-lg bg-[#00539b] px-5 py-2.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#17357e] hover:shadow-xl"
// // //                         >
// // //                           Apply Now
// // //                           <ArrowRight className="h-4 w-4" />
// // //                         </button>
// // //                       </Link>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>

// // //             {/* HDFC STYLE SMALL ARROWS */}
// // //             <div className="mt-3 flex items-center justify-center gap-5">
// // //               <button
// // //                 type="button"
// // //                 onClick={prevCard}
// // //                 className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00539b] text-white shadow-md transition hover:scale-110 hover:bg-[#17357e]"
// // //                 aria-label="Previous product"
// // //               >
// // //                 <ChevronLeft className="h-5 w-5" />
// // //               </button>

// // //               <button
// // //                 type="button"
// // //                 onClick={nextCard}
// // //                 className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00539b] text-white shadow-md transition hover:scale-110 hover:bg-[#17357e]"
// // //                 aria-label="Next product"
// // //               >
// // //                 <ChevronRight className="h-5 w-5" />
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </>
// // //   );
// // // }
// // import { useEffect, useState } from "react";
// // import { Link } from "@tanstack/react-router";
// // import {
// //   ArrowRight,
// //   ChevronLeft,
// //   ChevronRight,
// //   ShieldCheck,
// //   TrendingUp,
// //   Wallet,
// // } from "lucide-react";

// // import { Button } from "@/components/ui/button";

// // import advisor33 from "@/assets/hero-advisor33.jpeg";
// // import insuranceHero from "@/assets/insurance-hero.png";
// // import mutualFundHero from "@/assets/mutual-fund-hero.png";

// // import personalLoanImg from "@/assets/products/personal-loan.png";
// // import businessLoanImg from "@/assets/products/business-loan.png";
// // import insuranceCardImg from "@/assets/products/insurance.png";
// // import mutualFundsImg from "@/assets/products/mutual-funds.png";
// // import homeLoanImg from "@/assets/products/home-loan.png";

// // type Slide = {
// //   image: string;
// //   showButtons?: boolean;
// //   objectPosition: string;
// // };

// // type PromoCard = {
// //   title: string;
// //   image: string;
// //   applyLink: string;
// //   bg: string;
// // };

// // const slides: Slide[] = [
// //   {
// //     image: advisor33,
// //     showButtons: true,
// //     objectPosition: "center top",
// //   },
// //   {
// //     image: insuranceHero,
// //     showButtons: false,
// //     objectPosition: "center top",
// //   },
// //   {
// //     image: mutualFundHero,
// //     showButtons: false,
// //     objectPosition: "center top",
// //   },
// // ];

// // const promoCards: PromoCard[] = [
// //   {
// //     title: "Personal Loan",
// //     image: personalLoanImg,
// //     applyLink: "/contact",
// //     bg: "bg-[#dbeafe]",
// //   },
// //   {
// //     title: "Business Loan",
// //     image: businessLoanImg,
// //     applyLink: "/contact",
// //     bg: "bg-[#e0f2fe]",
// //   },
// //   {
// //     title: "Term Life Insurance",
// //     image: insuranceCardImg,
// //     applyLink: "/contact",
// //     bg: "bg-[#eaf2ff]",
// //   },
// //   {
// //     title: "Mutual Funds",
// //     image: mutualFundsImg,
// //     applyLink: "/contact",
// //     bg: "bg-[#dcfce7]",
// //   },
// //   {
// //     title: "Home Loan",
// //     image: homeLoanImg,
// //     applyLink: "/contact",
// //     bg: "bg-[#fff2cc]",
// //   },
// // ];

// // function getHdfcStyleCards(activeIndex: number) {
// //   const total = promoCards.length;

// //   return [-1, 0, 1].map((offset) => {
// //     const index = (activeIndex + offset + total) % total;

// //     return {
// //       card: promoCards[index],
// //       offset,
// //     };
// //   });
// // }

// // export function Hero() {
// //   const [current, setCurrent] = useState(0);
// //   const [activeCard, setActiveCard] = useState(0);
// //   const [isHeroPaused, setIsHeroPaused] = useState(false);
// //   const [isProductPaused, setIsProductPaused] = useState(false);

// //   const activeSlide = slides[current];
// //   const visiblePromoCards = getHdfcStyleCards(activeCard);

// //   useEffect(() => {
// //     if (isHeroPaused) return;

// //     const slider = window.setInterval(() => {
// //       setCurrent((prev) => (prev + 1) % slides.length);
// //     }, 5000);

// //     return () => window.clearInterval(slider);
// //   }, [isHeroPaused]);

// //   useEffect(() => {
// //     if (isProductPaused) return;

// //     const productSlider = window.setInterval(() => {
// //       setActiveCard((prev) => (prev + 1) % promoCards.length);
// //     }, 3500);

// //     return () => window.clearInterval(productSlider);
// //   }, [isProductPaused]);

// //   const nextSlide = () => {
// //     setCurrent((prev) => (prev + 1) % slides.length);
// //   };

// //   const prevSlide = () => {
// //     setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
// //   };

// //   const nextCard = () => {
// //     setActiveCard((prev) => (prev + 1) % promoCards.length);
// //   };

// //   const prevCard = () => {
// //     setActiveCard((prev) =>
// //       prev === 0 ? promoCards.length - 1 : prev - 1,
// //     );
// //   };

// //   const getCardPositionClass = (offset: number) => {
// //     if (offset === 0) {
// //       return "z-30 translate-x-0 scale-100 opacity-100 blur-0";
// //     }

// //     if (offset === -1) {
// //       return "z-10 -translate-x-[106%] scale-[0.88] opacity-40 blur-[1px]";
// //     }

// //     return "z-10 translate-x-[106%] scale-[0.88] opacity-40 blur-[1px]";
// //   };

// //   return (
// //     <>
// //       {/* MAIN HERO */}
// //       <section
// //         id="hero"
// //         onMouseEnter={() => setIsHeroPaused(true)}
// //         onMouseLeave={() => setIsHeroPaused(false)}
// //         className="relative w-full overflow-hidden bg-white pt-20"
// //       >
// //         <div className="relative w-full overflow-hidden bg-[#0f4fa8]">
// //           <div className="relative h-[520px] w-full overflow-hidden sm:h-[560px] md:h-[620px] lg:h-[680px] xl:h-[720px]">
// //             {slides.map((slide, index) => (
// //               <img
// //                 key={slide.image}
// //                 src={slide.image}
// //                 alt="Aarthvaahini Financial Services"
// //                 className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
// //                   index === current ? "opacity-100" : "opacity-0"
// //                 }`}
// //                 style={{
// //                   objectPosition: slide.objectPosition,
// //                 }}
// //                 draggable={false}
// //               />
// //             ))}

// //             {/* FIRST SLIDE BUTTONS */}
// //             {activeSlide.showButtons && (
// //               <div className="absolute bottom-20 left-4 z-20 flex flex-wrap items-center gap-3 px-3 sm:left-6 md:bottom-20 md:left-10 lg:left-14">
// //                 <Link to="/contact">
// //                   <Button className="h-10 rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 px-4 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 sm:px-5 md:h-12 md:px-7 md:text-base">
// //                     Free Consultation
// //                     <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
// //                   </Button>
// //                 </Link>

// //                 <Link to="/about">
// //                   <Button
// //                     variant="outline"
// //                     className="h-10 rounded-xl border border-[#17357e]/20 bg-white/95 px-4 text-sm font-semibold text-[#17357e] shadow-lg transition hover:scale-105 hover:bg-white sm:px-5 md:h-12 md:px-7 md:text-base"
// //                   >
// //                     Meet Our Team
// //                   </Button>
// //                 </Link>
// //               </div>
// //             )}

// //             {/* SERVICE CARDS */}
// //             <div className="absolute bottom-10 right-4 z-20 hidden max-w-[900px] flex-wrap items-center justify-end gap-4 md:flex lg:right-8">
// //               <Link to="/loans">
// //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-blue-200/40 bg-gradient-to-r from-[#17357e] to-[#00539b] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// //                   <Wallet className="h-7 w-7 text-blue-200" />

// //                   <div>
// //                     <h3 className="text-base font-semibold lg:text-lg">
// //                       Loans
// //                     </h3>
// //                     <p className="text-sm text-blue-100">Quick Loans</p>
// //                   </div>
// //                 </div>
// //               </Link>

// //               <Link to="/insurance">
// //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-pink-200/40 bg-gradient-to-r from-[#17357e] to-[#7c2d72] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// //                   <ShieldCheck className="h-7 w-7 text-pink-200" />

// //                   <div>
// //                     <h3 className="text-base font-semibold lg:text-lg">
// //                       Insurance
// //                     </h3>
// //                     <p className="text-sm text-pink-100">Secure Insurance</p>
// //                   </div>
// //                 </div>
// //               </Link>

// //               <Link to="/mutual-funds">
// //                 <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-green-200/40 bg-gradient-to-r from-[#17357e] to-[#047857] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
// //                   <TrendingUp className="h-7 w-7 text-green-200" />

// //                   <div>
// //                     <h3 className="text-base font-semibold lg:text-lg">
// //                       Wealth
// //                     </h3>
// //                     <p className="text-sm text-green-100">Mutual Funds</p>
// //                   </div>
// //                 </div>
// //               </Link>
// //             </div>

// //             {/* HERO ARROWS */}
// //             <button
// //               type="button"
// //               onClick={prevSlide}
// //               className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35"
// //               aria-label="Previous hero slide"
// //             >
// //               <ChevronLeft className="h-6 w-6 text-white" />
// //             </button>

// //             <button
// //               type="button"
// //               onClick={nextSlide}
// //               className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35"
// //               aria-label="Next hero slide"
// //             >
// //               <ChevronRight className="h-6 w-6 text-white" />
// //             </button>

// //             {/* HERO DOTS REMOVED */}
// //           </div>
// //         </div>
// //       </section>

// //       {/* HDFC STYLE PRODUCT AUTO SLIDER */}
// //       <section
// //         className="relative z-10 overflow-hidden bg-white py-10 sm:py-12"
// //         onMouseEnter={() => setIsProductPaused(true)}
// //         onMouseLeave={() => setIsProductPaused(false)}
// //         onTouchStart={() => setIsProductPaused(true)}
// //         onTouchEnd={() => setIsProductPaused(false)}
// //       >
// //         <div className="mx-auto max-w-[1500px] px-4 sm:px-6">
// //           <div className="mb-8 text-center">
// //             <h2 className="text-3xl font-bold text-[#08224a] sm:text-4xl lg:text-5xl">
// //               Our Financial Products
// //             </h2>

// //             <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
// //               Loans, insurance and wealth solutions tailored for your goals.
// //             </p>
// //           </div>

// //           <div className="relative mx-auto max-w-[1420px] overflow-hidden py-6">
// //             <div className="relative flex min-h-[370px] items-center justify-center sm:min-h-[420px]">
// //               {visiblePromoCards.map(({ card, offset }) => (
// //                 <div
// //                   key={`${card.title}-${offset}`}
// //                   className={`absolute w-[88%] max-w-[620px] transition-all duration-700 ease-in-out sm:w-[78%] lg:w-[620px] ${getCardPositionClass(
// //                     offset,
// //                   )}`}
// //                 >
// //                   <div
// //                     className={`group relative h-[320px] overflow-hidden rounded-[22px] ${card.bg} shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl active:scale-[1.03] sm:h-[365px]`}
// //                   >
// //                     {/* IMAGE - NO CUT */}
// //                     <img
// //                       src={card.image}
// //                       alt={card.title}
// //                       className="h-full w-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
// //                       draggable={false}
// //                     />

// //                     {/* APPLY NOW BUTTON ONLY CENTER CARD */}
// //                     {offset === 0 && (
// //                       <div className="absolute bottom-8 left-8 z-30">
// //                         <Link to={card.applyLink}>
// //                           <button
// //                             type="button"
// //                             className="inline-flex items-center gap-2 rounded-lg bg-[#00539b] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#17357e] hover:shadow-xl active:scale-95"
// //                           >
// //                             Apply Now
// //                             <ArrowRight className="h-4 w-4" />
// //                           </button>
// //                         </Link>
// //                       </div>
// //                     )}
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* HDFC STYLE SMALL ARROWS */}
// //             <div className="mt-4 flex items-center justify-center gap-5">
// //               <button
// //                 type="button"
// //                 onClick={prevCard}
// //                 className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00539b] text-white shadow-md transition hover:scale-110 hover:bg-[#17357e]"
// //                 aria-label="Previous product"
// //               >
// //                 <ChevronLeft className="h-5 w-5" />
// //               </button>

// //               <button
// //                 type="button"
// //                 onClick={nextCard}
// //                 className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00539b] text-white shadow-md transition hover:scale-110 hover:bg-[#17357e]"
// //                 aria-label="Next product"
// //               >
// //                 <ChevronRight className="h-5 w-5" />
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // }
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

// import personalLoanImg from "@/assets/products/personal-loan.png";
// import businessLoanImg from "@/assets/products/business-loan.png";
// import insuranceCardImg from "@/assets/products/insurance.png";
// import mutualFundsImg from "@/assets/products/mutual-funds.png";
// import homeLoanImg from "@/assets/products/home-loan.png";

// type Slide = {
//   image: string;
//   showButtons?: boolean;
//   objectPosition: string;
// };

// type PromoCard = {
//   title: string;
//   image: string;
//   applyLink: string;
//   bg: string;
// };

// const slides: Slide[] = [
//   {
//     image: advisor33,
//     showButtons: true,
//     objectPosition: "center top",
//   },
//   {
//     image: insuranceHero,
//     showButtons: false,
//     objectPosition: "center top",
//   },
//   {
//     image: mutualFundHero,
//     showButtons: false,
//     objectPosition: "center top",
//   },
// ];

// const promoCards: PromoCard[] = [
//   {
//     title: "Personal Loan",
//     image: personalLoanImg,
//     applyLink: "/contact",
//     bg: "bg-[#dbeafe]",
//   },
//   {
//     title: "Business Loan",
//     image: businessLoanImg,
//     applyLink: "/contact",
//     bg: "bg-[#e0f2fe]",
//   },
//   {
//     title: "Term Life Insurance",
//     image: insuranceCardImg,
//     applyLink: "/contact",
//     bg: "bg-[#eaf2ff]",
//   },
//   {
//     title: "Mutual Funds",
//     image: mutualFundsImg,
//     applyLink: "/contact",
//     bg: "bg-[#dcfce7]",
//   },
//   {
//     title: "Home Loan",
//     image: homeLoanImg,
//     applyLink: "/contact",
//     bg: "bg-[#fff2cc]",
//   },
// ];

// function getHdfcStyleCards(activeIndex: number) {
//   const total = promoCards.length;

//   return [-1, 0, 1].map((offset) => {
//     const index = (activeIndex + offset + total) % total;

//     return {
//       card: promoCards[index],
//       offset,
//     };
//   });
// }

// export function Hero() {
//   const [current, setCurrent] = useState(0);
//   const [activeCard, setActiveCard] = useState(0);
//   const [isHeroPaused, setIsHeroPaused] = useState(false);
//   const [isProductPaused, setIsProductPaused] = useState(false);

//   const activeSlide = slides[current];
//   const visiblePromoCards = getHdfcStyleCards(activeCard);

//   useEffect(() => {
//     if (isHeroPaused) return;

//     const slider = window.setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => window.clearInterval(slider);
//   }, [isHeroPaused]);

//   // PRODUCT AUTO SLIDE
//   useEffect(() => {
//     if (isProductPaused) return;

//     const productSlider = window.setInterval(() => {
//       setActiveCard((prev) => (prev + 1) % promoCards.length);
//     }, 3000);

//     return () => window.clearInterval(productSlider);
//   }, [isProductPaused]);

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

//   const getCardPositionClass = (offset: number) => {
//     if (offset === 0) {
//       return "z-30 translate-x-0 scale-100 opacity-100 blur-0";
//     }

//     if (offset === -1) {
//       return "z-10 -translate-x-[106%] scale-[0.88] opacity-40 blur-[1px]";
//     }

//     return "z-10 translate-x-[106%] scale-[0.88] opacity-40 blur-[1px]";
//   };

//   return (
//     <>
//       {/* MAIN HERO */}
//       <section
//         id="hero"
//         onMouseEnter={() => setIsHeroPaused(true)}
//         onMouseLeave={() => setIsHeroPaused(false)}
//         className="relative w-full overflow-hidden bg-white pt-20"
//       >
//         <div className="relative w-full overflow-hidden bg-[#0f4fa8]">
//           <div className="relative h-[520px] w-full overflow-hidden sm:h-[560px] md:h-[620px] lg:h-[680px] xl:h-[720px]">
//             {slides.map((slide, index) => (
//               <img
//                 key={slide.image}
//                 src={slide.image}
//                 alt="Aarthvaahini Financial Services"
//                 className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
//                   index === current ? "opacity-100" : "opacity-0"
//                 }`}
//                 style={{
//                   objectPosition: slide.objectPosition,
//                 }}
//                 draggable={false}
//               />
//             ))}

//             {/* FIRST SLIDE BUTTONS */}
//             {activeSlide.showButtons && (
//               <div className="absolute bottom-20 left-4 z-20 flex flex-wrap items-center gap-3 px-3 sm:left-6 md:bottom-20 md:left-10 lg:left-14">
//                 <Link to="/contact">
//                   <Button className="h-10 rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 px-4 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 sm:px-5 md:h-12 md:px-7 md:text-base">
//                     Free Consultation
//                     <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
//                   </Button>
//                 </Link>

//                 <Link to="/about">
//                   <Button
//                     variant="outline"
//                     className="h-10 rounded-xl border border-[#17357e]/20 bg-white/95 px-4 text-sm font-semibold text-[#17357e] shadow-lg transition hover:scale-105 hover:bg-white sm:px-5 md:h-12 md:px-7 md:text-base"
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
//               className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35"
//               aria-label="Previous hero slide"
//             >
//               <ChevronLeft className="h-6 w-6 text-white" />
//             </button>

//             <button
//               type="button"
//               onClick={nextSlide}
//               className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-md transition hover:bg-black/35"
//               aria-label="Next hero slide"
//             >
//               <ChevronRight className="h-6 w-6 text-white" />
//             </button>

//             {/* HERO DOTS REMOVED */}
//           </div>
//         </div>
//       </section>

//       {/* HDFC STYLE PRODUCT AUTO SLIDER */}
//       <section
//         className="relative z-10 overflow-hidden bg-white py-10 sm:py-12"
//         onMouseEnter={() => setIsProductPaused(true)}
//         onMouseLeave={() => setIsProductPaused(false)}
//         onTouchStart={() => setIsProductPaused(true)}
//         onTouchEnd={() => setIsProductPaused(false)}
//       >
//         <div className="mx-auto max-w-[1500px] px-4 sm:px-6">
//           <div className="mb-8 text-center">
//             <h2 className="text-3xl font-bold text-[#08224a] sm:text-4xl lg:text-5xl">
//               Our Financial Products
//             </h2>

//             <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
//               Loans, insurance and wealth solutions tailored for your goals.
//             </p>
//           </div>

//           <div className="relative mx-auto max-w-[1420px] overflow-hidden py-6">
//             <div className="relative flex min-h-[370px] items-center justify-center sm:min-h-[420px]">
//               {visiblePromoCards.map(({ card, offset }) => (
//                 <div
//                   key={`${card.title}-${offset}`}
//                   className={`absolute w-[88%] max-w-[620px] transition-all duration-700 ease-in-out sm:w-[78%] lg:w-[620px] ${getCardPositionClass(
//                     offset,
//                   )}`}
//                 >
//                   <div
//                     className={`group relative h-[320px] overflow-hidden rounded-[22px] ${card.bg} shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl active:scale-[1.03] sm:h-[365px]`}
//                   >
//                     {/* IMAGE - NO CUT */}
//                     <img
//                       src={card.image}
//                       alt={card.title}
//                       className="h-full w-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
//                       draggable={false}
//                     />

//                     {/* APPLY NOW BUTTON ONLY CENTER CARD */}
//                     {offset === 0 && (
//                       <div className="absolute bottom-8 left-8 z-30">
//                         <Link to={card.applyLink}>
//                           <button
//                             type="button"
//                             className="inline-flex items-center gap-2 rounded-lg bg-[#00539b] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#17357e] hover:shadow-xl active:scale-95"
//                           >
//                             Apply Now
//                             <ArrowRight className="h-4 w-4" />
//                           </button>
//                         </Link>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* HDFC STYLE SMALL ARROWS */}
//             <div className="mt-4 flex items-center justify-center gap-5">
//               <button
//                 type="button"
//                 onClick={prevCard}
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00539b] text-white shadow-md transition hover:scale-110 hover:bg-[#17357e]"
//                 aria-label="Previous product"
//               >
//                 <ChevronLeft className="h-5 w-5" />
//               </button>

//               <button
//                 type="button"
//                 onClick={nextCard}
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00539b] text-white shadow-md transition hover:scale-110 hover:bg-[#17357e]"
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
import type { CSSProperties } from "react";
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

import personalLoanImg from "@/assets/products/personal-loan.png";
import businessLoanImg from "@/assets/products/business-loan.png";
import insuranceCardImg from "@/assets/products/insurance.png";
import mutualFundsImg from "@/assets/products/mutual-funds.png";
import homeLoanImg from "@/assets/products/home-loan.png";

type Slide = {
  image: string;
  showButtons?: boolean;
  objectPosition: string;
};

type PromoCard = {
  title: string;
  image: string;
  applyLink: string;
  bg: string;
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
    image: personalLoanImg,
    applyLink: "/contact",
    bg: "bg-[#dbeafe]",
  },
  {
    title: "Business Loan",
    image: businessLoanImg,
    applyLink: "/contact",
    bg: "bg-[#e0f2fe]",
  },
  {
    title: "Term Life Insurance",
    image: insuranceCardImg,
    applyLink: "/contact",
    bg: "bg-[#eaf2ff]",
  },
  {
    title: "Mutual Funds",
    image: mutualFundsImg,
    applyLink: "/contact",
    bg: "bg-[#dcfce7]",
  },
  {
    title: "Home Loan",
    image: homeLoanImg,
    applyLink: "/contact",
    bg: "bg-[#fff2cc]",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const [isHeroPaused, setIsHeroPaused] = useState(false);
  const [isProductPaused, setIsProductPaused] = useState(false);

  const activeSlide = slides[current];

  useEffect(() => {
    if (isHeroPaused) return;

    const slider = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(slider);
  }, [isHeroPaused]);

  // HDFC STYLE AUTO SLIDE
  useEffect(() => {
    if (isProductPaused) return;

    const productSlider = window.setInterval(() => {
      setActiveCard((prev) => (prev + 1) % promoCards.length);
    }, 3200);

    return () => window.clearInterval(productSlider);
  }, [isProductPaused]);

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

  const getCardOffset = (index: number) => {
    const total = promoCards.length;
    let offset = index - activeCard;

    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    return offset;
  };

  const getCardStyle = (index: number): CSSProperties => {
    const offset = getCardOffset(index);
    const absOffset = Math.abs(offset);

    const isCenter = offset === 0;
    const isSide = absOffset === 1;
    const isHidden = absOffset > 1;

    return {
      left: "50%",
      transform: `translateX(calc(-50% + ${offset} * min(720px, 105vw))) scale(${
        isCenter ? 1 : isSide ? 0.88 : 0.75
      })`,
      opacity: isCenter ? 1 : isSide ? 0.42 : 0,
      filter: isCenter ? "blur(0px)" : isSide ? "blur(1.2px)" : "blur(3px)",
      zIndex: isCenter ? 30 : isSide ? 10 : 0,
      pointerEvents: isHidden ? "none" : "auto",
      transition:
        "transform 950ms cubic-bezier(0.22, 1, 0.36, 1), opacity 950ms ease, filter 950ms ease",
    };
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
          <div className="relative h-[520px] w-full overflow-hidden sm:h-[560px] md:h-[620px] lg:h-[680px] xl:h-[720px]">
            {slides.map((slide, index) => (
              <img
                key={slide.image}
                src={slide.image}
                alt="Aarthvaahini Financial Services"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
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

      {/* HDFC STYLE SMOOTH PRODUCT AUTO SLIDER */}
      <section
        className="relative z-10 overflow-hidden bg-white py-10 sm:py-12"
        onMouseEnter={() => setIsProductPaused(true)}
        onMouseLeave={() => setIsProductPaused(false)}
        onTouchStart={() => setIsProductPaused(true)}
        onTouchEnd={() => setIsProductPaused(false)}
      >
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-[#08224a] sm:text-4xl lg:text-5xl">
              Our Financial Products
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Loans, insurance and wealth solutions tailored for your goals.
            </p>
          </div>

          <div className="relative mx-auto max-w-[1440px] overflow-hidden py-6">
            <div className="relative flex min-h-[370px] items-center justify-center sm:min-h-[420px]">
              {promoCards.map((card, index) => {
                const isCenter = getCardOffset(index) === 0;

                return (
                  <div
                    key={card.title}
                    className="absolute w-[88%] max-w-[620px] sm:w-[78%] lg:w-[620px]"
                    style={getCardStyle(index)}
                  >
                    <div
                      className={`group relative h-[320px] overflow-hidden rounded-[22px] ${card.bg} shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl active:scale-[1.03] sm:h-[365px]`}
                    >
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-full w-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
                        draggable={false}
                      />

                      {isCenter && (
                        <div className="absolute bottom-8 left-8 z-30">
                          <Link to={card.applyLink}>
                            <button
                              type="button"
                              className="inline-flex items-center gap-2 rounded-lg bg-[#00539b] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#17357e] hover:shadow-xl active:scale-95"
                            >
                              Apply Now
                              <ArrowRight className="h-4 w-4" />
                            </button>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* HDFC STYLE ARROWS */}
            <div className="mt-4 flex items-center justify-center gap-5">
              <button
                type="button"
                onClick={prevCard}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00539b] text-white shadow-md transition hover:scale-110 hover:bg-[#17357e]"
                aria-label="Previous product"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={nextCard}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00539b] text-white shadow-md transition hover:scale-110 hover:bg-[#17357e]"
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