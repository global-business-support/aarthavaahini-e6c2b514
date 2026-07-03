import { useEffect, useState } from "react";
import type { CSSProperties, TouchEvent } from "react";
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

  const [heroTouchStart, setHeroTouchStart] = useState<number | null>(null);
  const [productTouchStart, setProductTouchStart] = useState<number | null>(
    null,
  );

  const activeSlide = slides[current];

  useEffect(() => {
    if (isHeroPaused) return;

    const slider = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(slider);
  }, [isHeroPaused]);

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

  const handleHeroTouchStart = (e: TouchEvent<HTMLElement>) => {
    setHeroTouchStart(e.touches[0].clientX);
  };

  const handleHeroTouchEnd = (e: TouchEvent<HTMLElement>) => {
    if (heroTouchStart === null) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = heroTouchStart - touchEnd;

    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    setHeroTouchStart(null);
  };

  const handleProductTouchStart = (e: TouchEvent<HTMLElement>) => {
    setProductTouchStart(e.touches[0].clientX);
    setIsProductPaused(true);
  };

  const handleProductTouchEnd = (e: TouchEvent<HTMLElement>) => {
    if (productTouchStart === null) {
      setIsProductPaused(false);
      return;
    }

    const touchEnd = e.changedTouches[0].clientX;
    const diff = productTouchStart - touchEnd;

    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        nextCard();
      } else {
        prevCard();
      }
    }

    setProductTouchStart(null);
    setIsProductPaused(false);
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
      transform: `translateX(calc(-50% + ${offset} * min(680px, 98vw))) scale(${
        isCenter ? 1 : isSide ? 0.9 : 0.75
      })`,
      opacity: isCenter ? 1 : isSide ? 0.48 : 0,
      filter: isCenter ? "blur(0px)" : isSide ? "blur(1px)" : "blur(3px)",
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
        onTouchStart={handleHeroTouchStart}
        onTouchEnd={handleHeroTouchEnd}
        className="relative w-full overflow-hidden bg-white pt-20"
      >
        <div className="relative w-full overflow-hidden bg-white md:bg-[#0f4fa8]">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-white md:aspect-auto md:h-[620px] lg:h-[680px] xl:h-[720px]">
            {slides.map((slide, index) => (
              <img
                key={slide.image}
                src={slide.image}
                alt="Aarthvaahini Financial Services"
                className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 md:object-cover ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  objectPosition: slide.objectPosition,
                }}
                draggable={false}
              />
            ))}

            {/* FIRST SLIDE BUTTONS - DESKTOP ONLY */}
            {activeSlide.showButtons && (
              <div className="absolute bottom-20 left-4 z-20 hidden flex-wrap items-center gap-3 px-3 sm:left-6 md:left-10 md:flex lg:left-14">
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

            {/* SERVICE CARDS DESKTOP ONLY */}
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

            {/* HERO ARROWS - DESKTOP ONLY */}
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
          </div>
        </div>
      </section>

      {/* PRODUCT AUTO SLIDER */}
      <section
        className="relative z-10 overflow-hidden bg-white py-8 sm:py-12"
        onMouseEnter={() => setIsProductPaused(true)}
        onMouseLeave={() => setIsProductPaused(false)}
        onTouchStart={handleProductTouchStart}
        onTouchEnd={handleProductTouchEnd}
      >
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6">
          <div className="mb-6 text-center sm:mb-8">
            <h2 className="text-3xl font-bold leading-tight text-[#08224a] sm:text-4xl lg:text-5xl">
              Our Financial Products
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Loans, insurance and wealth solutions tailored for your goals.
            </p>
          </div>

          {/* MOBILE ROW SLIDER */}
          <div className="md:hidden">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${activeCard * 100}%)`,
                }}
              >
                {promoCards.map((card) => (
                  <div key={card.title} className="min-w-full px-2">
                    <div
                      className={`relative h-[230px] overflow-hidden rounded-3xl ${card.bg} shadow-xl`}
                    >
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-full w-full object-contain object-center"
                        draggable={false}
                      />

                      <div className="absolute bottom-5 left-5 z-20">
                        <Link to={card.applyLink}>
                          <button
                            type="button"
                            className="inline-flex items-center gap-2 rounded-lg bg-[#00539b] px-4 py-2.5 text-sm font-bold text-white shadow-lg active:scale-95"
                          >
                            Apply Now
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={prevCard}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00539b] text-white shadow-md active:scale-95"
                aria-label="Previous product"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={nextCard}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00539b] text-white shadow-md active:scale-95"
                aria-label="Next product"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* DESKTOP HDFC STYLE SLIDER */}
          <div className="relative mx-auto hidden max-w-[1440px] overflow-hidden py-6 md:block">
            <div className="relative flex min-h-[420px] items-center justify-center">
              {promoCards.map((card, index) => {
                const isCenter = getCardOffset(index) === 0;

                return (
                  <div
                    key={card.title}
                    className="absolute w-[78%] max-w-[620px] lg:w-[620px]"
                    style={getCardStyle(index)}
                  >
                    <div
                      className={`group relative h-[365px] overflow-hidden rounded-[22px] ${card.bg} shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl active:scale-[1.03]`}
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