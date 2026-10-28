import { useCallback, useEffect, useRef, useState } from "react";

type Slide = { title: string; subtitle: string; image: string; cta?: string; href?: string };

export function ProductHeroSlider({
  slides,
  variant = "hero",
}: {
  slides: Slide[];
  variant?: "hero" | "watermark";
}) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (next: number) => setI((next + slides.length) % slides.length),
    [slides.length],
  );

  useEffect(() => {
    if (variant === "watermark" || paused) return;
    timer.current = setInterval(() => setI((x) => (x + 1) % slides.length), 5500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [slides.length, paused, variant]);

  if (variant === "watermark") {
    return (
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {slides.map((s, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={s.image}
              alt=""
              className="h-full w-full object-cover opacity-20"
            />
          </div>
        ))}
        {/* Soft wash so text stays legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white/90" />
      </div>
    );
  }

  return (
    <section
      className="relative h-[300px] w-full overflow-hidden md:h-[440px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {slides.map((s, idx) => (
        <div
          key={idx}
          aria-hidden={i !== idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === idx ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <img
            src={s.image}
            alt={s.title || "banner"}
            className="h-full w-full object-cover"
            loading={idx === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f4d]/90 via-[#17357e]/65 to-transparent" />
          {(s.title || s.subtitle) && (
            <div className="container relative mx-auto flex h-full items-center px-5 sm:px-6">
              <div className="max-w-xl text-white">
                {s.title && (
                  <h2 className="font-display text-2xl font-bold leading-tight sm:text-3xl md:text-5xl">
                    {s.title}
                  </h2>
                )}
                {s.subtitle && (
                  <p className="mt-2 text-sm text-white/90 sm:mt-3 md:text-lg">
                    {s.subtitle}
                  </p>
                )}
                {s.cta && s.href && (
                  <a
                    href={s.href}
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f4a300] to-[#ff8c00] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:scale-105 sm:mt-6 sm:text-base"
                  >
                    {s.cta}
                    <span aria-hidden>&rarr;</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Prev / Next arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(i - 1)}
        className="absolute left-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/30 sm:left-4 sm:flex"
      >
        &#10094;
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(i + 1)}
        className="absolute right-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/30 sm:right-4 sm:flex"
      >
        &#10095;
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            aria-current={i === idx}
            onClick={() => go(idx)}
            className={`h-2 rounded-full transition-all ${
              i === idx ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
