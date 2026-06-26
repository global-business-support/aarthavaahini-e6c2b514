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

// import advisor66 from "@/assets/hero-advisor66.jpeg";
// import advisor0 from "@/assets/hero-advisor0.jpg";
// import advisor11 from "@/assets/hero-advisor11.jpeg";

// type Slide = {
//   title: React.ReactNode;
//   subtitle: string;
//   image: string;
// };

// type PromoCard = {
//   title: string;
//   subtitle: string;
//   button1: string;
//   button2?: string;
//   bg: string;
//   image: string;
// };

// const slides: Slide[] = [
//   {
//     title: (
//       <>
//         Empowering Financial Growth
//         <span className="text-[#254185]"> Across India</span>
//       </>
//     ),
//     subtitle:
//       "Empowering Financial Growth Through Smart Lending, Investments & Protection. Aarthvaahini Financial Services Pvt. Ltd. helps individuals, professionals, businesses, and enterprises access tailored financial solutions including home loans, business loans, loan against property, insurance, mutual funds, SIP investments, and wealth management.",
//     image: advisor66,
//   },
//   {
//     title: (
//       <>
//         Protecting What
//         <span className="text-gradient"> Matters Most</span>
//       </>
//     ),
//     subtitle:
//       "Comprehensive Life, Health, Motor and Home insurance plans from India's most trusted insurers — safeguarding your family, home and assets against life's uncertainties.",
//     image: advisor0,
//   },
//   {
//     title: (
//       <>
//         Grow Your Wealth
//         <span className="text-gradient"> With Smart Investments</span>
//       </>
//     ),
//     subtitle:
//       "Build long-term wealth with curated Mutual Funds, SIPs and tax-saving investment plans — expert-led advisory designed to help your money grow steadily.",
//     image: advisor11,
//   },
// ];

// const promoCards: PromoCard[] = [
//   {
//     title: "Personal Loan",
//     subtitle: "A loan for everything from dreams to emergencies",
//     button1: "Apply online",
//     button2: "Learn more",
//     bg: "bg-[#70b8f7]",
//     image:
//       "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     title: "Credit Cards",
//     subtitle: "Credit cards for every lifestyle",
//     button1: "Apply Now",
//     button2: "Know more",
//     bg: "bg-[#f4f6fb]",
//     image:
//       "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     title: "Digital Safety Awareness",
//     subtitle: "Protect yourself from online frauds and fake video calls",
//     button1: "Know More",
//     bg: "bg-white",
//     image:
//       "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     title: "Business Loan",
//     subtitle: "Funding solutions for business growth and expansion",
//     button1: "Apply Now",
//     button2: "Learn more",
//     bg: "bg-[#eaf4ff]",
//     image:
//       "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80",
//   },
// ];

// export function Hero() {
//   const [current, setCurrent] = useState(0);
//   const [activeCard, setActiveCard] = useState(0);

//   const [isHeroPaused, setIsHeroPaused] = useState(false);
//   const [isPromoPaused, setIsPromoPaused] = useState(false);

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
//       {/* MAIN HERO - SMALLER HEIGHT */}
//       <section
//         id="hero"
//         onMouseEnter={() => setIsHeroPaused(true)}
//         onMouseLeave={() => setIsHeroPaused(false)}
//         className="relative h-[62vh] min-h-[520px] w-full overflow-hidden pt-16 sm:h-[66vh] sm:min-h-[560px] lg:h-[70vh] lg:min-h-[620px]"
//       >
//         {/* SLIDER */}
//         <div
//           className="flex h-full transition-transform duration-700 ease-in-out"
//           style={{ transform: `translateX(-${current * 100}%)` }}
//         >
//           {slides.map((slide, index) => (
//             <div key={index} className="relative h-full min-w-full">
//               <img
//                 src={slide.image}
//                 alt="Aarthvaahini financial services"
//                 className="absolute inset-0 h-full w-full object-cover"
//                 draggable={false}
//               />

//               <div className="absolute inset-0 bg-black/60" />

//               <div className="relative z-10 flex h-full items-center">
//                 <div className="container mx-auto px-4 sm:px-6">
//                   <div className="max-w-3xl text-left">
//                     <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
//                       {slide.title}
//                     </h1>

//                     <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-200 sm:text-base sm:leading-7 md:text-lg">
//                       {slide.subtitle}
//                     </p>

//                     {current === 0 && (
//                       <div className="mt-6 flex flex-wrap gap-3 sm:gap-5">
//                         <Link to="/contact">
//                           <Button className="h-11 rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 px-5 text-sm font-semibold text-white transition-all hover:scale-105 sm:h-12 sm:px-7 sm:text-base">
//                             Free Consultation
//                             <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
//                           </Button>
//                         </Link>

//                         <Link to="/about">
//                           <Button
//                             variant="outline"
//                             className="h-11 rounded-xl border-white bg-transparent px-5 text-sm font-semibold text-white hover:bg-white hover:text-black sm:h-12 sm:px-7 sm:text-base"
//                           >
//                             Meet Our Team
//                           </Button>
//                         </Link>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CATEGORY CARDS */}
//         <div className="absolute bottom-20 right-8 z-20 hidden flex-wrap items-center gap-4 xl:flex">
//           <Link to="/loans">
//             <div className="flex min-w-52 items-center gap-3 rounded-2xl border border-green-200/40 bg-white/10 px-5 py-3 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20">
//               <Wallet className="h-6 w-6 text-blue-400" />
//               <div>
//                 <h3 className="text-base font-semibold">Loans</h3>
//                 <p className="text-xs text-gray-300">Quick Loans</p>
//               </div>
//             </div>
//           </Link>

//           <Link to="/insurance">
//             <div className="flex min-w-52 items-center gap-3 rounded-2xl border border-green-200/40 bg-white/10 px-5 py-3 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20">
//               <ShieldCheck className="h-6 w-6 text-pink-400" />
//               <div>
//                 <h3 className="text-base font-semibold">Insurance</h3>
//                 <p className="text-xs text-gray-300">Secure Insurance</p>
//               </div>
//             </div>
//           </Link>

//           <Link to="/mutual-funds">
//             <div className="flex min-w-52 items-center gap-3 rounded-2xl border border-green-200/40 bg-white/10 px-5 py-3 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20">
//               <TrendingUp className="h-6 w-6 text-green-400" />
//               <div>
//                 <h3 className="text-base font-semibold">Mutual Funds</h3>
//                 <p className="text-xs text-gray-300">Wealth Growth</p>
//               </div>
//             </div>
//           </Link>
//         </div>

//         {/* HERO ARROWS */}
//         <button
//           type="button"
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition hover:bg-white/20 md:flex"
//           aria-label="Previous hero slide"
//         >
//           <ChevronLeft className="h-6 w-6 text-white" />
//         </button>

//         <button
//           type="button"
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition hover:bg-white/20 md:flex"
//           aria-label="Next hero slide"
//         >
//           <ChevronRight className="h-6 w-6 text-white" />
//         </button>

//         {/* HERO DOTS */}
//         <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               type="button"
//               onClick={() => setCurrent(index)}
//               aria-label={`Go to slide ${index + 1}`}
//               className={`h-2.5 rounded-full transition-all ${
//                 current === index ? "w-9 bg-white" : "w-2.5 bg-white/50"
//               }`}
//             />
//           ))}
//         </div>

//         <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/70 to-transparent" />
//       </section>

//       {/* HERO PROMO CARDS - CLOSER TO HERO */}
//       <section className="relative z-10 bg-white py-6 sm:py-8">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6">
//           <div
//             className="relative"
//             onMouseEnter={() => setIsPromoPaused(true)}
//             onMouseLeave={() => setIsPromoPaused(false)}
//           >
//             <div className="flex items-center justify-center overflow-hidden">
//               <div className="flex w-full items-center justify-center gap-5">
//                 {promoCards.map((card, index) => {
//                   const isActive = index === activeCard;

//                   const isPrev =
//                     index ===
//                     (activeCard === 0
//                       ? promoCards.length - 1
//                       : activeCard - 1);

//                   const isNext =
//                     index === (activeCard + 1) % promoCards.length;

//                   let cardClass = "hidden";

//                   if (isActive) {
//                     cardClass = "block scale-100 opacity-100 z-20";
//                   } else if (isPrev || isNext) {
//                     cardClass = "hidden lg:block scale-90 opacity-45 z-10";
//                   }

//                   return (
//                     <div
//                       key={card.title}
//                       className={`relative h-[230px] w-full max-w-[740px] shrink-0 overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 sm:h-[280px] lg:h-[320px] lg:w-[620px] xl:w-[740px] ${card.bg} ${cardClass}`}
//                     >
//                       <div className="relative z-10 flex h-full flex-col justify-center p-5 sm:p-8">
//                         <h3 className="max-w-[62%] text-xl font-bold text-[#08224a] sm:text-2xl lg:text-3xl">
//                           {card.title}
//                         </h3>

//                         <p className="mt-3 max-w-[55%] text-sm leading-6 text-slate-700 sm:text-base">
//                           {card.subtitle}
//                         </p>

//                         <div className="mt-5 flex flex-wrap gap-3">
//                           <button
//                             type="button"
//                             className="rounded-lg bg-[#00539b] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#17357e]"
//                           >
//                             {card.button1}
//                           </button>

//                           {card.button2 && (
//                             <button
//                               type="button"
//                               className="rounded-lg border border-[#00539b] px-4 py-2.5 text-sm font-semibold text-[#00539b] transition hover:bg-blue-50"
//                             >
//                               {card.button2}
//                             </button>
//                           )}
//                         </div>
//                       </div>

//                       <img
//                         src={card.image}
//                         alt={card.title}
//                         className="absolute bottom-0 right-0 h-full w-[55%] object-cover object-center sm:object-contain sm:object-bottom"
//                         draggable={false}
//                       />
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* PROMO ARROWS */}
//             <div className="mt-6 flex items-center justify-center gap-4">
//               <button
//                 type="button"
//                 onClick={prevCard}
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00539b] text-white shadow-lg transition hover:bg-[#17357e]"
//                 aria-label="Previous card"
//               >
//                 <ChevronLeft className="h-5 w-5" />
//               </button>

//               <button
//                 type="button"
//                 onClick={nextCard}
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00539b] text-white shadow-lg transition hover:bg-[#17357e]"
//                 aria-label="Next card"
//               >
//                 <ChevronRight className="h-5 w-5" />
//               </button>
//             </div>

//             {/* PROMO DOTS */}
//             <div className="mt-3 flex justify-center gap-2">
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
// import advisor0 from "@/assets/hero-advisor0.jpg";
// import advisor11 from "@/assets/hero-advisor11.jpeg";

// type Slide = {
//   title?: React.ReactNode;
//   subtitle?: string;
//   image: string;
// };

// type PromoCard = {
//   title: string;
//   subtitle: string;
//   button1: string;
//   button2?: string;
//   button1Link: string;
//   button2Link?: string;
//   bg: string;
//   image: string;
// };

// const slides: Slide[] = [
//   {
//     image: advisor33,
//   },
//   {
//     title: (
//       <>
//         Protecting What
//         <span className="text-gradient"> Matters Most</span>
//       </>
//     ),
//     subtitle:
//       "Comprehensive Life, Health, Motor and Home insurance plans from India's most trusted insurers — safeguarding your family, home and assets against life's uncertainties.",
//     image: advisor0,
//   },
//   {
//     title: (
//       <>
//         Grow Your Wealth
//         <span className="text-gradient"> With Smart Investments</span>
//       </>
//     ),
//     subtitle:
//       "Build long-term wealth with curated Mutual Funds, SIPs and tax-saving investment plans — expert-led advisory designed to help your money grow steadily.",
//     image: advisor11,
//   },
// ];

// const promoCards: PromoCard[] = [
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
//   const [isPromoPaused, setIsPromoPaused] = useState(false);

//   const visiblePromoCards = getVisibleCards(activeCard);

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
//           {/* HERO SLIDER - image height reduced */}
//           <div
//            className="flex h-[60vh] min-h-[520px] w-full transition-transform duration-700 ease-in-out sm:h-[62vh] sm:min-h-[540px] lg:h-[64vh] lg:min-h-[560px]"
//             style={{ transform: `translateX(-${current * 100}%)` }}
//           >
//             {slides.map((slide, index) => (
//               <div key={index} className="relative h-full min-w-full">
//                 <img
//                   src={slide.image}
//                   alt="Aarthvaahini financial services"
//                  className="absolute inset-0 h-full w-full object-cover object-center"
//                   draggable={false}
//                 />

//                 {/* Overlay only on 2nd and 3rd slide */}
//                 {index !== 0 && (
//                   <div className="absolute inset-0 bg-black/55" />
//                 )}

//                 {/* Content only on 2nd and 3rd slide */}
//                 {index !== 0 && (
//                   <div className="relative z-10 flex h-full items-center">
//                     <div className="container mx-auto px-4 sm:px-6">
//                       <div className="max-w-3xl text-left">
//                         <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
//                           {slide.title}
//                         </h1>

//                         <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-200 sm:text-base sm:leading-7 md:text-lg">
//                           {slide.subtitle}
//                         </p>

//                         <div className="mt-6 flex flex-wrap gap-3 sm:gap-5">
//                           <Link to="/contact">
//                             <Button className="h-11 rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 px-5 text-sm font-semibold text-white transition-all hover:scale-105 sm:h-12 sm:px-7 sm:text-base">
//                               Free Consultation
//                               <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
//                             </Button>
//                           </Link>

//                           <Link to="/about">
//                             <Button
//                               variant="outline"
//                               className="h-11 rounded-xl border-white bg-transparent px-5 text-sm font-semibold text-white hover:bg-white hover:text-black sm:h-12 sm:px-7 sm:text-base"
//                             >
//                               Meet Our Team
//                             </Button>
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* First slide buttons only */}
//                 {index === 0 && (
//                   <div className="absolute bottom-16 left-4 z-20 flex flex-wrap gap-3 sm:left-8 sm:bottom-18 lg:left-12 lg:bottom-20">
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

//           {/* SERVICE CARDS - little bigger */}
//          <div className="absolute bottom-16 right-4 z-20 hidden max-w-[900px] flex-wrap items-center justify-end gap-4 md:flex lg:right-8">
//             <Link to="/loans">
//               <div className="flex min-w-[200px] items-center gap-4 rounded-2xl border border-white/40 bg-white/15 px-5 py-4 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/25 lg:min-w-60">
//                 <Wallet className="h-7 w-7 text-blue-400" />

//                 <div>
//                   <h3 className="text-base font-semibold lg:text-lg">Loans</h3>
//                   <p className="text-sm text-gray-100">Quick Loans</p>
//                 </div>
//               </div>
//             </Link>

//             <Link to="/insurance">
//               <div className="flex min-w-[200px] items-center gap-4 rounded-2xl border border-white/40 bg-white/15 px-5 py-4 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/25 lg:min-w-60">
//                 <ShieldCheck className="h-7 w-7 text-pink-400" />

//                 <div>
//                   <h3 className="text-base font-semibold lg:text-lg">
//                     Insurance
//                   </h3>
//                   <p className="text-sm text-gray-100">Secure Insurance</p>
//                 </div>
//               </div>
//             </Link>

//             <Link to="/mutual-funds">
//               <div className="flex min-w-[200px] items-center gap-4 rounded-2xl border border-white/40 bg-white/15 px-5 py-4 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/25 lg:min-w-60">
//                 <TrendingUp className="h-7 w-7 text-green-400" />

//                 <div>
//                   <h3 className="text-base font-semibold lg:text-lg">Wealth</h3>
//                   <p className="text-sm text-gray-100">Mutual Funds</p>
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
//           <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-3">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 type="button"
//                 onClick={() => setCurrent(index)}
//                 aria-label={`Go to slide ${index + 1}`}
//                 className={`h-2.5 rounded-full transition-all ${
//                   current === index
//                     ? "w-9 bg-[#17357e]"
//                     : "w-2.5 bg-white/70"
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
//                   className={`relative h-[320px] overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${card.bg}`}
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
//     );
//  }

//  import { useEffect, useState } from "react";
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
// import advisor0 from "@/assets/hero-advisor0.jpg";
// import advisor11 from "@/assets/hero-advisor11.jpeg";

// type Slide = {
//   title?: React.ReactNode;
//   subtitle?: string;
//   image: string;
// };

// type PromoCard = {
//   title: string;
//   subtitle: string;
//   button1: string;
//   button2?: string;
//   button1Link: string;
//   button2Link?: string;
//   bg: string;
//   image: string;
// };

// const slides: Slide[] = [
//   {
//     image: advisor33,
//   },
//   {
//     title: (
//       <>
//         Protecting What
//         <span className="text-gradient"> Matters Most</span>
//       </>
//     ),
//     subtitle:
//       "Comprehensive Life, Health, Motor and Home insurance plans from India's most trusted insurers — safeguarding your family, home and assets against life's uncertainties.",
//     image: advisor0,
//   },
//   {
//     title: (
//       <>
//         Grow Your Wealth
//         <span className="text-gradient"> With Smart Investments</span>
//       </>
//     ),
//     subtitle:
//       "Build long-term wealth with curated Mutual Funds, SIPs and tax-saving investment plans — expert-led advisory designed to help your money grow steadily.",
//     image: advisor11,
//   },
// ];

// const promoCards: PromoCard[] = [
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
//   {
//     title: "Credit Card",
//     subtitle: "Explore a range of credit cards for every lifestyle",
//     button1: "Apply Now",
//     button2: "Know more",
//     button1Link: "/contact",
//     button2Link: "/loans",
//     bg: "bg-[#f4f6fb]",
//     image:
//       "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1200&q=80",
//   },
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
// ];

// export function Hero() {
//   const [current, setCurrent] = useState(0);
//   const [activeCard, setActiveCard] = useState(0);

//   const [isHeroPaused, setIsHeroPaused] = useState(false);
//   const [isPromoPaused, setIsPromoPaused] = useState(false);

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
//     }, 3500);

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
//         <div className="relative w-full">
//           <div className="relative w-full overflow-hidden">
//             {/* SLIDER */}
//             <div
//               className="flex h-[58vh] min-h-[440px] w-full transition-transform duration-700 ease-in-out sm:h-[62vh] sm:min-h-[480px] lg:h-[64vh] lg:min-h-[520px]"
//               style={{ transform: `translateX(-${current * 100}%)` }}
//             >
//               {slides.map((slide, index) => (
//                 <div key={index} className="relative h-full min-w-full">
//                   {/* IMAGE */}
//                   <img
//                     src={slide.image}
//                     alt="Aarthvaahini financial services"
//                     className="absolute inset-0 h-full w-full object-cover object-center"
//                     draggable={false}
//                   />

//                   {/* Overlay only on 2nd and 3rd slide */}
//                   {index !== 0 && (
//                     <div className="absolute inset-0 bg-black/55" />
//                   )}

//                   {/* Title + paragraph only on 2nd and 3rd slide */}
//                   {index !== 0 && (
//                     <div className="relative z-10 flex h-full items-center">
//                       <div className="container mx-auto px-4 sm:px-6">
//                         <div className="max-w-3xl text-left">
//                           <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
//                             {slide.title}
//                           </h1>

//                           <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-200 sm:text-base sm:leading-7 md:text-lg">
//                             {slide.subtitle}
//                           </p>

//                           <div className="mt-6 flex flex-wrap gap-3 sm:gap-5">
//                             <Link to="/contact">
//                               <Button className="h-11 rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 px-5 text-sm font-semibold text-white transition-all hover:scale-105 sm:h-12 sm:px-7 sm:text-base">
//                                 Free Consultation
//                                 <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
//                               </Button>
//                             </Link>

//                             <Link to="/about">
//                               <Button
//                                 variant="outline"
//                                 className="h-11 rounded-xl border-white bg-transparent px-5 text-sm font-semibold text-white hover:bg-white hover:text-black sm:h-12 sm:px-7 sm:text-base"
//                               >
//                                 Meet Our Team
//                               </Button>
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   {/* First slide buttons only */}
//                   {index === 0 && (
//                     <div className="absolute bottom-16 left-4 z-20 flex flex-wrap gap-3 sm:left-8 sm:bottom-18 lg:left-12 lg:bottom-20">
//                       <Link to="/contact">
//                         <Button className="h-11 rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 px-5 text-sm font-semibold text-white shadow-xl transition-all hover:scale-105 sm:h-12 sm:px-7 sm:text-base">
//                           Free Consultation
//                           <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
//                         </Button>
//                       </Link>

//                       <Link to="/about">
//                         <Button
//                           variant="outline"
//                           className="h-11 rounded-xl border-white bg-transparent px-5 text-sm font-semibold text-white shadow-xl hover:bg-white hover:text-black sm:h-12 sm:px-7 sm:text-base"
//                         >
//                           Meet Our Team
//                         </Button>
//                       </Link>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* OLD CATEGORY CARDS */}
//             <div className="absolute bottom-16 right-8 z-20 hidden flex-wrap items-center gap-4 xl:flex">
//               <Link to="/loans">
//                 <div className="flex min-w-52 items-center gap-3 rounded-2xl border border-green-200/40 bg-white/10 px-5 py-3 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20">
//                   <Wallet className="h-6 w-6 text-blue-400" />

//                   <div>
//                     <h3 className="text-base font-semibold">Loans</h3>
//                     <p className="text-xs text-gray-300">Quick Loans</p>
//                   </div>
//                 </div>
//               </Link>

//               <Link to="/insurance">
//                 <div className="flex min-w-52 items-center gap-3 rounded-2xl border border-green-200/40 bg-white/10 px-5 py-3 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20">
//                   <ShieldCheck className="h-6 w-6 text-pink-400" />

//                   <div>
//                     <h3 className="text-base font-semibold">Insurance</h3>
//                     <p className="text-xs text-gray-300">Secure Insurance</p>
//                   </div>
//                 </div>
//               </Link>

//               <Link to="/mutual-funds">
//                 <div className="flex min-w-52 items-center gap-3 rounded-2xl border border-green-200/40 bg-white/10 px-5 py-3 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20">
//                   <TrendingUp className="h-6 w-6 text-green-400" />

//                   <div>
//                     <h3 className="text-base font-semibold">Mutual Funds</h3>
//                     <p className="text-xs text-gray-300">Wealth Growth</p>
//                   </div>
//                 </div>
//               </Link>
//             </div>

//             {/* HERO ARROWS */}
//             <button
//               type="button"
//               onClick={prevSlide}
//               className="absolute left-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition hover:bg-white/20 md:flex"
//               aria-label="Previous hero slide"
//             >
//               <ChevronLeft className="h-6 w-6 text-white" />
//             </button>

//             <button
//               type="button"
//               onClick={nextSlide}
//               className="absolute right-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition hover:bg-white/20 md:flex"
//               aria-label="Next hero slide"
//             >
//               <ChevronRight className="h-6 w-6 text-white" />
//             </button>

//             {/* HERO DOTS */}
//             <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-3">
//               {slides.map((_, index) => (
//                 <button
//                   key={index}
//                   type="button"
//                   onClick={() => setCurrent(index)}
//                   aria-label={`Go to slide ${index + 1}`}
//                   className={`h-2.5 rounded-full transition-all ${
//                     current === index ? "w-9 bg-white" : "w-2.5 bg-white/50"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* PROMO CARDS */}
//       <section className="relative z-10 bg-white py-6 sm:py-8">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6">
//           <div
//             className="relative"
//             onMouseEnter={() => setIsPromoPaused(true)}
//             onMouseLeave={() => setIsPromoPaused(false)}
//           >
//             <div className="flex items-center justify-center overflow-hidden">
//               <div className="flex w-full items-center justify-center gap-6">
//                 {promoCards.map((card, index) => {
//                   const isActive = index === activeCard;

//                   const isPrev =
//                     index ===
//                     (activeCard === 0
//                       ? promoCards.length - 1
//                       : activeCard - 1);

//                   const isNext =
//                     index === (activeCard + 1) % promoCards.length;

//                   let cardClass = "hidden";

//                   if (isActive) {
//                     cardClass = "block scale-100 opacity-100 z-20";
//                   } else if (isPrev || isNext) {
//                     cardClass = "hidden lg:block scale-90 opacity-45 z-10";
//                   }

//                   return (
//                     <div
//                       key={card.title}
//                       className={`relative h-[230px] w-full max-w-[760px] shrink-0 overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 sm:h-[280px] lg:h-[320px] lg:w-[760px] ${card.bg} ${cardClass}`}
//                     >
//                       <div className="relative z-10 flex h-full flex-col justify-center p-5 sm:p-8">
//                         <h3 className="max-w-[60%] text-xl font-bold text-[#08224a] sm:text-2xl lg:text-3xl">
//                           {card.title}
//                         </h3>

//                         <p className="mt-3 max-w-[58%] text-sm leading-6 text-slate-700 sm:text-base">
//                           {card.subtitle}
//                         </p>

//                         <div className="mt-5 flex flex-wrap gap-3">
//                           <Link to={card.button1Link}>
//                             <button
//                               type="button"
//                               className="rounded-lg bg-[#00539b] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#17357e]"
//                             >
//                               {card.button1}
//                             </button>
//                           </Link>

//                           {card.button2 && card.button2Link && (
//                             <Link to={card.button2Link}>
//                               <button
//                                 type="button"
//                                 className="rounded-lg border border-[#00539b] px-4 py-2.5 text-sm font-semibold text-[#00539b] transition hover:bg-blue-50"
//                               >
//                                 {card.button2}
//                               </button>
//                             </Link>
//                           )}
//                         </div>
//                       </div>

//                       <img
//                         src={card.image}
//                         alt={card.title}
//                         className="absolute bottom-0 right-0 h-full w-[52%] object-cover object-center sm:object-contain sm:object-bottom"
//                         draggable={false}
//                       />
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* PROMO ARROWS */}
//             <div className="mt-6 flex items-center justify-center gap-4">
//               <button
//                 type="button"
//                 onClick={prevCard}
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00539b] text-white shadow-lg transition hover:bg-[#17357e]"
//                 aria-label="Previous card"
//               >
//                 <ChevronLeft className="h-5 w-5" />
//               </button>

//               <button
//                 type="button"
//                 onClick={nextCard}
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00539b] text-white shadow-lg transition hover:bg-[#17357e]"
//                 aria-label="Next card"
//               >
//                 <ChevronRight className="h-5 w-5" />
//               </button>
//             </div>

//             {/* PROMO DOTS */}
//             <div className="mt-3 flex justify-center gap-2">
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
// import advisor0 from "@/assets/hero-advisor0.jpg";
// import advisor11 from "@/assets/hero-advisor11.jpeg";

// type Slide = {
//   title?: React.ReactNode;
//   subtitle?: string;
//   image: string;
// };

// type PromoCard = {
//   title: string;
//   subtitle: string;
//   button1: string;
//   button2?: string;
//   button1Link: string;
//   button2Link?: string;
//   bg: string;
//   image: string;
// };

// const slides: Slide[] = [
//   {
//     image: advisor33,
//   },
//   {
//     title: (
//       <>
//         Protecting What
//         <span className="text-gradient"> Matters Most</span>
//       </>
//     ),
//     subtitle:
//       "Comprehensive Life, Health, Motor and Home insurance plans from India's most trusted insurers — safeguarding your family, home and assets against life's uncertainties.",
//     image: advisor0,
//   },
//   {
//     title: (
//       <>
//         Grow Your Wealth
//         <span className="text-gradient"> With Smart Investments</span>
//       </>
//     ),
//     subtitle:
//       "Build long-term wealth with curated Mutual Funds, SIPs and tax-saving investment plans — expert-led advisory designed to help your money grow steadily.",
//     image: advisor11,
//   },
// ];

// const promoCards: PromoCard[] = [
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
//   const [isPromoPaused, setIsPromoPaused] = useState(false);

//   const visiblePromoCards = getVisibleCards(activeCard);

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
//             className="flex h-[66vh] min-h-[590px] w-full transition-transform duration-700 ease-in-out sm:h-[68vh] sm:min-h-[610px] lg:h-[70vh] lg:min-h-[640px]"
//             style={{ transform: `translateX(-${current * 100}%)` }}
//           >
//             {slides.map((slide, index) => (
//               <div key={index} className="relative h-full min-w-full">
//                 <img
//                   src={slide.image}
//                   alt="Aarthvaahini financial services"
//                   className={`absolute inset-0 h-full w-full object-cover ${
//                     index === 0 ? "object-[center_18%]" : "object-center"
//                   }`}
//                   draggable={false}
//                 />

//                 {/* Overlay only on 2nd and 3rd slide */}
//                 {index !== 0 && (
//                   <div className="absolute inset-0 bg-black/55" />
//                 )}

//                 {/* Content only on 2nd and 3rd slide */}
//                 {index !== 0 && (
//                   <div className="relative z-10 flex h-full items-center">
//                     <div className="container mx-auto px-4 sm:px-6">
//                       <div className="max-w-3xl text-left">
//                         <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
//                           {slide.title}
//                         </h1>

//                         <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-200 sm:text-base sm:leading-7 md:text-lg">
//                           {slide.subtitle}
//                         </p>

//                         <div className="mt-6 flex flex-wrap gap-3 sm:gap-5">
//                           <Link to="/contact">
//                             <Button className="h-11 rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 px-5 text-sm font-semibold text-white transition-all hover:scale-105 sm:h-12 sm:px-7 sm:text-base">
//                               Free Consultation
//                               <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
//                             </Button>
//                           </Link>

//                           <Link to="/about">
//                             <Button
//                               variant="outline"
//                               className="h-11 rounded-xl border-white bg-transparent px-5 text-sm font-semibold text-white hover:bg-white hover:text-black sm:h-12 sm:px-7 sm:text-base"
//                             >
//                               Meet Our Team
//                             </Button>
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* First slide buttons only */}
//                 {index === 0 && (
//                   <div className="absolute bottom-20 left-4 z-20 flex flex-wrap gap-3 sm:left-8 sm:bottom-24 lg:left-12 lg:bottom-24">
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
//           <div className="absolute bottom-20 right-4 z-20 hidden max-w-[900px] flex-wrap items-center justify-end gap-4 md:flex lg:right-8">
//             <Link to="/loans">
//               <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-white/40 bg-white/15 px-5 py-4 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/25 lg:min-w-60">
//                 <Wallet className="h-7 w-7 text-blue-400" />

//                 <div>
//                   <h3 className="text-base font-semibold lg:text-lg">Loans</h3>
//                   <p className="text-sm text-gray-100">Quick Loans</p>
//                 </div>
//               </div>
//             </Link>

//             <Link to="/insurance">
//               <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-white/40 bg-white/15 px-5 py-4 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/25 lg:min-w-60">
//                 <ShieldCheck className="h-7 w-7 text-pink-400" />

//                 <div>
//                   <h3 className="text-base font-semibold lg:text-lg">
//                     Insurance
//                   </h3>
//                   <p className="text-sm text-gray-100">Secure Insurance</p>
//                 </div>
//               </div>
//             </Link>

//             <Link to="/mutual-funds">
//               <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-white/40 bg-white/15 px-5 py-4 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/25 lg:min-w-60">
//                 <TrendingUp className="h-7 w-7 text-green-400" />

//                 <div>
//                   <h3 className="text-base font-semibold lg:text-lg">Wealth</h3>
//                   <p className="text-sm text-gray-100">Mutual Funds</p>
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
//                   current === index
//                     ? "w-9 bg-[#17357e]"
//                     : "w-2.5 bg-white/70"
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
//                   className={`relative h-[330px] overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${card.bg}`}
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
import advisor0 from "@/assets/hero-advisor0.jpg";
import advisor11 from "@/assets/hero-advisor11.jpeg";

type Slide = {
  title?: React.ReactNode;
  subtitle?: string;
  image: string;
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
  },
  {
    title: (
      <>
        Protecting What
        <span className="text-gradient"> Matters Most</span>
      </>
    ),
    subtitle:
      "Comprehensive Life, Health, Motor and Home insurance plans from India's most trusted insurers — safeguarding your family, home and assets against life's uncertainties.",
    image: advisor0,
  },
  {
    title: (
      <>
        Grow Your Wealth
        <span className="text-gradient"> With Smart Investments</span>
      </>
    ),
    subtitle:
      "Build long-term wealth with curated Mutual Funds, SIPs and tax-saving investment plans — expert-led advisory designed to help your money grow steadily.",
    image: advisor11,
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
        <div className="relative w-full overflow-hidden">
          {/* HERO SLIDER */}
          <div
            className="flex h-[66vh] min-h-[590px] w-full transition-transform duration-700 ease-in-out sm:h-[68vh] sm:min-h-[610px] lg:h-[70vh] lg:min-h-[640px]"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="relative h-full min-w-full">
                <img
                  src={slide.image}
                  alt="Aarthvaahini financial services"
                  className={`absolute inset-0 h-full w-full object-cover ${
                    index === 0 ? "object-[center_18%]" : "object-center"
                  }`}
                  draggable={false}
                />

                {/* Overlay only on 2nd and 3rd slide */}
                {index !== 0 && (
                  <div className="absolute inset-0 bg-black/55" />
                )}

                {/* Content only on 2nd and 3rd slide */}
                {index !== 0 && (
                  <div className="relative z-10 flex h-full items-center">
                    <div className="container mx-auto px-4 sm:px-6">
                      <div className="max-w-3xl text-left">
                        <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                          {slide.title}
                        </h1>

                        <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-200 sm:text-base sm:leading-7 md:text-lg">
                          {slide.subtitle}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3 sm:gap-5">
                          <Link to="/contact">
                            <Button className="h-11 rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 px-5 text-sm font-semibold text-white transition-all hover:scale-105 sm:h-12 sm:px-7 sm:text-base">
                              Free Consultation
                              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                            </Button>
                          </Link>

                          <Link to="/about">
                            <Button
                              variant="outline"
                              className="h-11 rounded-xl border-white bg-transparent px-5 text-sm font-semibold text-white hover:bg-white hover:text-black sm:h-12 sm:px-7 sm:text-base"
                            >
                              Meet Our Team
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* First slide buttons only - moved down */}
                {index === 0 && (
                  <div className="absolute bottom-8 left-4 z-20 flex flex-wrap gap-3 sm:left-8 sm:bottom-10 lg:left-12 lg:bottom-12">
                    <Link to="/contact">
                      <Button className="h-11 rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 px-5 text-sm font-semibold text-white shadow-xl transition-all hover:scale-105 sm:h-12 sm:px-7 sm:text-base">
                        Free Consultation
                        <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                      </Button>
                    </Link>

                    <Link to="/about">
                      <Button
                        variant="outline"
                        className="h-11 rounded-xl border-[#17357e] bg-white/90 px-5 text-sm font-semibold text-[#17357e] shadow-xl hover:bg-white sm:h-12 sm:px-7 sm:text-base"
                      >
                        Meet Our Team
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* SERVICE CARDS - website color background */}
          <div className="absolute bottom-10 right-4 z-20 hidden max-w-[900px] flex-wrap items-center justify-end gap-4 md:flex lg:right-8">
            <Link to="/loans">
              <div className="flex min-w-[210px] items-center gap-4 rounded-2xl border border-blue-200/40 bg-gradient-to-r from-[#17357e] to-[#00539b] px-5 py-4 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl lg:min-w-60">
                <Wallet className="h-7 w-7 text-blue-200" />

                <div>
                  <h3 className="text-base font-semibold lg:text-lg">Loans</h3>
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
                  <h3 className="text-base font-semibold lg:text-lg">Wealth</h3>
                  <p className="text-sm text-green-100">Mutual Funds</p>
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
          <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  current === index
                    ? "w-9 bg-white"
                    : "w-2.5 bg-white/60"
                }`}
              />
            ))}
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
              <h2 className="text-2xl font-bold text-[#08224a] sm:text-3xl lg:text-4xl">
                Our Financial Products
              </h2>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                Loans, insurance and wealth solutions tailored for your goals.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {visiblePromoCards.map((card) => (
                <div
                  key={card.title}
                  className={`relative h-[330px] overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${card.bg}`}
                >
                  <div className="relative z-10 flex h-full flex-col justify-center p-7">
                    <h3 className="max-w-[62%] text-2xl font-bold text-[#08224a] lg:text-3xl">
                      {card.title}
                    </h3>

                    <p className="mt-4 max-w-[60%] text-base leading-7 text-slate-700">
                      {card.subtitle}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link to={card.button1Link}>
                        <button
                          type="button"
                          className="rounded-lg bg-[#00539b] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#17357e]"
                        >
                          {card.button1}
                        </button>
                      </Link>

                      {card.button2 && card.button2Link && (
                        <Link to={card.button2Link}>
                          <button
                            type="button"
                            className="rounded-lg border border-[#00539b] bg-white/70 px-5 py-3 text-sm font-semibold text-[#00539b] transition hover:bg-white"
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