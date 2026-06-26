// import { useEffect, useState } from "react";
// import { Link } from "@tanstack/react-router";

// import {
//   ChevronLeft,
//   ChevronRight,
//   ShieldCheck,
//   TrendingUp,
//   Sparkles,
// } from "lucide-react";

// import { Button } from "@/components/ui/button";

// import advisor from "@/assets/hero-advisor.png";
// import advisor15  from "@/assets/hero-advisor15.png";
// import advisor16 from "@/assets/hero-advisor16.png";

// const slides = [
//   {
//     title: "Fast Personal & Business Loans",
//     desc: "Get instant approval, low interest rates and quick disbursal for personal, home and business loans.",
//     image: advisor,
//     button: "Apply Loan",
//     bg: "from-[#EEF6FF] via-[#F7FBFF] to-[#E4F1FF]",
//   },

//   {
//     title: "Secure Your Family With Insurance",
//     desc: "Compare health, life, travel and motor insurance plans with trusted partners.",
//     image: advisor15,
//     button: "Get Insurance",
//     bg: "from-[#FFF1F4] via-[#FFF8FA] to-[#FFE7EF]",
//   },

//   {
//     title: "Smart Mutual Funds & SIP Planning",
//     desc: "Build long-term wealth with SIP investments, ELSS funds and expert financial planning.",
//     image: advisor16,
//     button: "Start SIP",
//     bg: "from-[#F1FFF5] via-[#F7FFF9] to-[#E2F8EA]",
//   },
// ];

// export function Hero() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative overflow-hidden pt-24">

//       {/* LEFT ARROW */}

//       <button
//         onClick={() =>
//           setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
//         }
//         className="absolute left-4 top-1/2 z-40 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-xl lg:flex"
//       >
//         <ChevronLeft className="h-5 w-5 text-[#0B1B3F]" />
//       </button>

//       {/* RIGHT ARROW */}

//       <button
//         onClick={() =>
//           setCurrent((prev) => (prev + 1) % slides.length)
//         }
//         className="absolute right-4 top-1/2 z-40 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-xl lg:flex"
//       >
//         <ChevronRight className="h-5 w-5 text-[#0B1B3F]" />
//       </button>

//       {/* SLIDER */}

//       <div
//         className="flex transition-transform duration-700 ease-in-out"
//         style={{
//           transform: `translateX(-${current * 100}%)`,
//         }}
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`min-w-full bg-gradient-to-r ${slide.bg}`}
//           >
//             <div className="container mx-auto grid min-h-[90vh] items-center gap-12 px-6 py-10 lg:grid-cols-2">

//               {/* LEFT CONTENT */}

//               <div>

//                 {/* BADGE */}

//                 <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 shadow-md">

//                   <Sparkles className="h-4 w-4 text-blue-600" />

//                   <span className="text-sm font-semibold text-[#17357E]">
//                     India's Trusted Financial Partner
//                   </span>

//                 </div>

//                 {/* TITLE */}

//                 <h1 className="mt-8 max-w-[650px] text-5xl font-extrabold leading-[1.05] tracking-[-2px] text-[#07142F] lg:text-7xl">
//                   {slide.title}
//                 </h1>

//                 {/* DESCRIPTION */}

//                 <p className="mt-6 max-w-[620px] text-lg leading-8 text-[#335081]">
//                   {slide.desc}
//                 </p>

//                 {/* BUTTONS */}

//                 <div className="mt-8 flex flex-wrap gap-4">

//                   <Button className="h-14 rounded-2xl bg-[#17357E] px-8 text-lg hover:bg-[#102962]">
//                     {slide.button}
//                   </Button>

//                   <Button
//                     variant="outline"
//                     className="h-14 rounded-2xl border-blue-200 bg-white px-8 text-lg text-[#17357E]"
//                   >
//                     Explore More
//                   </Button>

//                 </div>

//                 {/* FOOTER */}

//                 <div className="mt-10 flex flex-wrap gap-8 text-sm text-[#4F6285]">

//                   <div className="flex items-center gap-2">
//                     <ShieldCheck className="h-5 w-5 text-blue-600" />
//                     RBI compliant partners
//                   </div>

//                   <div className="flex items-center gap-2">
//                     <TrendingUp className="h-5 w-5 text-blue-600" />
//                     50,000+ happy customers
//                   </div>

//                 </div>

//               </div>

//               {/* RIGHT IMAGE */}

//               <div className="flex items-center justify-center">

//                 <img
//                   src={slide.image}
//                   alt={slide.title}
//                   className="w-full max-w-[700px] object-contain"
//                 />

//               </div>

//             </div>
//           </div>
//         ))}
//       </div>

//       {/* DOTS */}

//       <div className="absolute bottom-6 left-1/2 z-40 flex -translate-x-1/2 gap-3">

//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`h-3 rounded-full transition-all ${
//               current === index
//                 ? "w-10 bg-blue-600"
//                 : "w-3 bg-gray-400"
//             }`}
//           />
//         ))}

//       </div>

//     </section>
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

// import advisor17 from "@/assets/hero-advisor17.jpeg";
// import advisor18 from "@/assets/hero-advisor18.png";
// import advisor20 from "@/assets/hero-advisor20.jpeg";

// type Slide = {
//   title: string;
//   subtitle: string;
//   button1: string;
//   button2: string;
//   image: string;
// };

// const slides: Slide[] = [
//   {
//     title: "Banking, Loans & Insurance made simple.",
//     subtitle:
//       "Empowering Financial Growth Through Smart Lending, Investments & Protection Aarthvaahini Financial Services Pvt. Ltd. helps individuals, professionals, businesses, and enterprises access tailored financial solutions including home loans, business loans, loan against property, insurance, mutual funds, SIP investments, and wealth management.",
//     button1: "Free Consultation",
//     button2: "Explore Loans",
//     image: advisor17,
//   },

//   {
//     title: "Instant Loans With Low Interest & Quick Approval",
//     subtitle:
//       "Get personal, business and home loans with fast approvals, affordable EMI and trusted banking partners.",
//     button1: "Apply Loan",
//     button2: "Check EMI",
//     image: advisor18,
//   },

//   {
//     title: "Protect Your Family With Smart Insurance Plans",
//     subtitle:
//       "Health, life and vehicle insurance plans with complete protection and cashless claim support.",
//     button1: "Get Insurance",
//     button2: "View Plans",
//     image: advisor20,
//   },
// ];

// export function Hero() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const slider = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(slider);
//   }, []);

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) =>
//       prev === 0 ? slides.length - 1 : prev - 1
//     );
//   };

//   return (
//     <section className="relative h-screen w-full overflow-hidden">

//       {/* SLIDES */}

//       <div
//         className="flex h-full transition-transform duration-700 ease-in-out"
//         style={{
//           transform: `translateX(-${current * 100}%)`,
//         }}
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className="relative min-w-full h-screen"
//           >
//             {/* BACKGROUND IMAGE */}

//             <img
//               src={slide.image}
//               alt="hero"
//               className="absolute inset-0 h-full w-full object-cover"
//             />

//             {/* DARK OVERLAY */}

//             <div className="absolute inset-0 bg-black/55" />

//             {/* CONTENT */}

//             <div className="relative z-10 flex h-full items-center">

//               <div className="container mx-auto px-6">

//                 <div className="max-w-3xl">

//                   <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
//                     {slide.title}
//                   </h1>

//                   <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">
//                     {slide.subtitle}
//                   </p>

//                   {/* BUTTONS */}

//                   <div className="mt-10 flex flex-wrap gap-4">

//                     <Button className="h-14 rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 px-8 text-lg font-semibold text-white hover:scale-105 transition-all">

//                       {slide.button1}

//                       <ArrowRight className="ml-2 h-5 w-5" />

//                     </Button>

//                     <Button
//                       variant="outline"
//                       className="h-14 rounded-xl border-white bg-transparent px-8 text-lg font-semibold text-white hover:bg-white hover:text-black"
//                     >
//                       {slide.button2}
//                     </Button>

//                   </div>

//                   {/* FEATURES */}

//                   <div className="mt-14 flex flex-wrap gap-6 text-white">

//                     <div className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-md">
//                       <TrendingUp className="h-5 w-5 text-green-400" />
//                       Trusted Partner
//                     </div>

//                     <div className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-md">
//                       <Wallet className="h-5 w-5 text-blue-400" />
//                       Smart Financial Plans
//                     </div>

//                     <div className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-md">
//                       <ShieldCheck className="h-5 w-5 text-pink-400" />
//                       Secure Investments
//                     </div>

//                   </div>

//                 </div>

//               </div>

//             </div>
//           </div>
//         ))}
//       </div>

//       {/* LEFT BUTTON */}

//       <button
//         onClick={prevSlide}
//         className="absolute left-6 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition hover:bg-white/20"
//       >
//         <ChevronLeft className="h-7 w-7 text-white" />
//       </button>

//       {/* RIGHT BUTTON */}

//       <button
//         onClick={nextSlide}
//         className="absolute right-6 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition hover:bg-white/20"
//       >
//         <ChevronRight className="h-7 w-7 text-white" />
//       </button>

//       {/* DOTS */}

//       <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3">

//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`h-3 rounded-full transition-all ${
//               current === index
//                 ? "w-10 bg-white"
//                 : "w-3 bg-white/50"
//             }`}
//           />
//         ))}

//       </div>
//     </section>
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

// import advisor66 from "@/assets/hero-advisor66.jpeg";
// import advisor0 from "@/assets/hero-advisor0.jpg";
// import advisor11 from "@/assets/hero-advisor11.jpeg";

// type Slide = {
//   title: React.ReactNode;
//   subtitle: string;
//   image: string;
// };

// const slides: Slide[] = [
//   {
//     title: (
//       <>
//         Empowering Financial Growth
//       <span className="text-[#254185]"> Across India</span>
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

// export function Hero() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const slider = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(slider);
//   }, []);

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) =>
//       prev === 0 ? slides.length - 1 : prev - 1
//     );
//   };

//   return ( 
    
//     <section 
//     id="hero"
//      className="relative min-h-[88vh] w-full overflow-hidden pt-16 sm:min-h-screen sm:pt-0">

//       {/* SLIDER */}

//       <div
//         className="flex min-h-[88vh] transition-transform duration-700 ease-in-out sm:min-h-screen"
//         style={{ transform: `translateX(-${current * 100}%)` }}
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className="relative min-h-[88vh] min-w-full sm:min-h-screen"
//           >
//             {/* BACKGROUND IMAGE */}

//             <img
//               src={slide.image}
//               alt="hero"
//               className="absolute inset-0 h-full w-full object-cover"
//             />

//             {/* OVERLAY */}

//             <div className="absolute inset-0 bg-black/60" />

//             {/* CONTENT */}

//             <div className="relative z-10 flex min-h-[88vh] items-center sm:min-h-screen">
//              <div className="container mx-auto px-4 sm:px-6">

//                <div className="max-w-3xl text-left">
//                   <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
//                     {slide.title}
//                   </h1>

//                  <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-200 sm:mt-6 sm:text-base sm:leading-7 md:text-lg lg:text-xl">
//                     {slide.subtitle}
//                   </p>

//                   {current === 0 && (
//                     <div className="mt-6 flex flex-wrap gap-3 sm:mt-10 sm:gap-5">

//                       <Link to="/contact">
//                         <Button className="h-11 rounded-xl bg-linear-to-r from-[#17357e] to-blue-600 px-5 text-sm font-semibold text-white transition-all hover:scale-105 sm:h-14 sm:px-8 sm:text-lg">
//                           Free Consultation
//                           <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
//                         </Button>
//                       </Link>

//                       <Link to="/about">
//                         <Button
//                           variant="outline"
//                           className="h-11 rounded-xl border-white bg-transparent px-5 text-sm font-semibold text-white hover:bg-white hover:text-black sm:h-14 sm:px-8 sm:text-lg"
//                         >
//                           Meet Our Team
//                         </Button>
//                       </Link>

//                     </div>
//                   )}

//                 </div>

//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* RIGHT SIDE BUTTONS BOTTOM */}

//       <div className="absolute bottom-24 right-10 z-20 hidden flex-wrap items-center gap-5 lg:flex">

//         <Link to="/loans">
//           <div className="flex min-w-60 items-center gap-4 rounded-2xl border border-green-200/40 bg-white/10 px-6 py-4 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20">

//             <Wallet className="h-7 w-7 text-blue-400" />

//             <div>
//               <h3 className="text-lg font-semibold">
//                 Loans
//               </h3>

//               <p className="text-sm text-gray-300">
//                 Quick Loans
//               </p>
//             </div>

//           </div>
//         </Link>

//         <Link to="/insurance">
//           <div className="flex min-w-60 items-center gap-4 rounded-2xl border border-green-200/40 bg-white/10 px-6 py-4 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20">

//             <ShieldCheck className="h-7 w-7 text-pink-400" />

//             <div>
//               <h3 className="text-lg font-semibold">
//                 Insurance
//               </h3>

//               <p className="text-sm text-gray-300">
//                 Secure Insurance
//               </p>
//             </div>

//           </div>
//         </Link>

//         <Link to="/mutual-funds">
//           <div className="flex min-w-60 items-center gap-4 rounded-2xl border border-green-200/40 bg-white/10 px-6 py-4 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20">

//             <TrendingUp className="h-7 w-7 text-green-400" />

//             <div>
//               <h3 className="text-lg font-semibold">
//                 Mutual Funds 
//               </h3>

//               <p className="text-sm text-gray-300">
//                 Wealth Growth
//               </p>
//             </div>

//           </div>
//         </Link>

//       </div>

    

//       {/* <button
//         onClick={prevSlide}
//         className="absolute left-6 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition hover:bg-white/20"
//       >
//         <ChevronLeft className="h-7 w-7 text-white" />
//       </button> */}

//       {/* RIGHT ARROW

//       <button
//         onClick={nextSlide}
//         className="absolute right-6 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition hover:bg-white/20"
//       >
//         <ChevronRight className="h-7 w-7 text-white" />
//       </button> */}

//       {/* DOTS */}

//       <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">

//         {slides.map((_, index) => (
//           <button
//             key={index}
//             type="button"
//             onClick={() => setCurrent(index)}
//             aria-label={`Go to slide ${index + 1}`}
//             className={`h-3 rounded-full transition-all ${
//               current === index
//                 ? "w-10 bg-white"
//                 : "w-3 bg-white/50"
//             }`}
//           />
//         ))}

//       </div>

//       {/* BOTTOM GRADIENT */}

//       <div className="absolute bottom-0 left-0 h-40 w-full bg-linear-to-t from-black/70 to-transparent" />

//     </section>
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

import advisor66 from "@/assets/hero-advisor66.jpeg";
import advisor0 from "@/assets/hero-advisor0.jpg";
import advisor11 from "@/assets/hero-advisor11.jpeg";

type Slide = {
  title: React.ReactNode;
  subtitle: string;
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
    title: (
      <>
        Empowering Financial Growth
        <span className="text-[#254185]"> Across India</span>
      </>
    ),
    subtitle:
      "Empowering Financial Growth Through Smart Lending, Investments & Protection. Aarthvaahini Financial Services Pvt. Ltd. helps individuals, professionals, businesses, and enterprises access tailored financial solutions including home loans, business loans, loan against property, insurance, mutual funds, SIP investments, and wealth management.",
    image: advisor66,
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
  {
    title: "Credit Card",
    subtitle: "Explore a range of Credit Cards for every lifestyle",
    button1: "Apply Now",
    button2: "Know more",
    button1Link: "/contact",
    button2Link: "/loans",
    bg: "bg-[#f4f6fb]",
    image:
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1200&q=80",
  },
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
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [activeCard, setActiveCard] = useState(0);

  const [isHeroPaused, setIsHeroPaused] = useState(false);
  const [isPromoPaused, setIsPromoPaused] = useState(false);

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
        className="relative h-[62vh] min-h-[520px] w-full overflow-hidden pt-16 sm:h-[66vh] sm:min-h-[560px] lg:h-[70vh] lg:min-h-[620px]"
      >
        {/* SLIDER */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="relative h-full min-w-full">
              <img
                src={slide.image}
                alt="Aarthvaahini financial services"
                className="absolute inset-0 h-full w-full object-cover"
                draggable={false}
              />

              <div className="absolute inset-0 bg-black/60" />

              <div className="relative z-10 flex h-full items-center">
                <div className="container mx-auto px-4 sm:px-6">
                  <div className="max-w-3xl text-left">
                    <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                      {slide.title}
                    </h1>

                    <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-200 sm:text-base sm:leading-7 md:text-lg">
                      {slide.subtitle}
                    </p>

                    {current === 0 && (
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
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CATEGORY CARDS */}
        <div className="absolute bottom-20 right-8 z-20 hidden flex-wrap items-center gap-4 xl:flex">
          <Link to="/loans">
            <div className="flex min-w-52 items-center gap-3 rounded-2xl border border-green-200/40 bg-white/10 px-5 py-3 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20">
              <Wallet className="h-6 w-6 text-blue-400" />

              <div>
                <h3 className="text-base font-semibold">Loans</h3>
                <p className="text-xs text-gray-300">Quick Loans</p>
              </div>
            </div>
          </Link>

          <Link to="/insurance">
            <div className="flex min-w-52 items-center gap-3 rounded-2xl border border-green-200/40 bg-white/10 px-5 py-3 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20">
              <ShieldCheck className="h-6 w-6 text-pink-400" />

              <div>
                <h3 className="text-base font-semibold">Insurance</h3>
                <p className="text-xs text-gray-300">Secure Insurance</p>
              </div>
            </div>
          </Link>

          <Link to="/mutual-funds">
            <div className="flex min-w-52 items-center gap-3 rounded-2xl border border-green-200/40 bg-white/10 px-5 py-3 text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20">
              <TrendingUp className="h-6 w-6 text-green-400" />

              <div>
                <h3 className="text-base font-semibold">Mutual Funds</h3>
                <p className="text-xs text-gray-300">Wealth Growth</p>
              </div>
            </div>
          </Link>
        </div>

        {/* HERO ARROWS */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition hover:bg-white/20 md:flex"
          aria-label="Previous hero slide"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition hover:bg-white/20 md:flex"
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
                current === index ? "w-9 bg-white" : "w-2.5 bg-white/50"
              }`}
            />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/70 to-transparent" />
      </section>

      {/* HERO PROMO CARDS */}
      <section className="relative z-10 bg-white py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div
            className="relative"
            onMouseEnter={() => setIsPromoPaused(true)}
            onMouseLeave={() => setIsPromoPaused(false)}
          >
            <div className="flex items-center justify-center overflow-hidden">
              <div className="flex w-full items-center justify-center gap-6">
                {promoCards.map((card, index) => {
                  const isActive = index === activeCard;

                  const isPrev =
                    index ===
                    (activeCard === 0
                      ? promoCards.length - 1
                      : activeCard - 1);

                  const isNext =
                    index === (activeCard + 1) % promoCards.length;

                  let cardClass = "hidden";

                  if (isActive) {
                    cardClass = "block scale-100 opacity-100 z-20";
                  } else if (isPrev || isNext) {
                    cardClass = "hidden lg:block scale-90 opacity-45 z-10";
                  }

                  return (
                    <div
                      key={card.title}
                      className={`relative h-[230px] w-full max-w-[760px] shrink-0 overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 sm:h-[280px] lg:h-[320px] lg:w-[760px] ${card.bg} ${cardClass}`}
                    >
                      <div className="relative z-10 flex h-full flex-col justify-center p-5 sm:p-8">
                        <h3 className="max-w-[60%] text-xl font-bold text-[#08224a] sm:text-2xl lg:text-3xl">
                          {card.title}
                        </h3>

                        <p className="mt-3 max-w-[58%] text-sm leading-6 text-slate-700 sm:text-base">
                          {card.subtitle}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-3">
                          <Link
                            to={card.button1Link}
                            className="inline-flex items-center justify-center rounded-lg bg-[#00539b] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#17357e]"
                          >
                            {card.button1}
                          </Link>

                          {card.button2 && card.button2Link && (
                            <Link
                              to={card.button2Link}
                              className="inline-flex items-center justify-center rounded-lg border border-[#00539b] bg-white px-4 py-2.5 text-sm font-semibold text-[#00539b] transition hover:bg-blue-50"
                            >
                              {card.button2}
                            </Link>
                          )}
                        </div>
                      </div>

                      <img
                        src={card.image}
                        alt={card.title}
                        className="absolute bottom-0 right-0 h-full w-[52%] object-cover object-center sm:object-contain sm:object-bottom"
                        draggable={false}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* PROMO ARROWS */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={prevCard}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00539b] text-white shadow-lg transition hover:bg-[#17357e]"
                aria-label="Previous card"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={nextCard}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00539b] text-white shadow-lg transition hover:bg-[#17357e]"
                aria-label="Next card"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* PROMO DOTS */}
            <div className="mt-3 flex justify-center gap-2">
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