import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { C as Card } from "./card-RGlIzTYo.mjs";
import { B as Badge } from "./badge-DyfXZgLs.mjs";
import { D as Dialog, f as DialogTrigger, a as DialogContent, d as DialogHeader, e as DialogTitle } from "./dialog-RBdmK4nU.mjs";
import { L as LeadForm } from "./Footer-X7G0v4le.mjs";
import { c as cn } from "./utils-H80jjgLf.mjs";
import { y as CircleCheck } from "../_libs/lucide-react.mjs";
const version$2 = 1;
const asset_id$2 = "58679ecd-c16c-4d51-8fe1-d33262a71bbf";
const project_id$2 = "6f85b7b2-86f6-4671-87b1-8cf45300b2e3";
const url$5 = "/__l5e/assets-v1/58679ecd-c16c-4d51-8fe1-d33262a71bbf/loan-banner.png";
const r2_key$2 = "a/v1/6f85b7b2-86f6-4671-87b1-8cf45300b2e3/58679ecd-c16c-4d51-8fe1-d33262a71bbf/loan-banner.png";
const original_filename$2 = "loan-banner.png";
const size$2 = 1619958;
const content_type$2 = "image/png";
const created_at$2 = "2026-06-17T06:48:16Z";
const loanBg$1 = {
  version: version$2,
  asset_id: asset_id$2,
  project_id: project_id$2,
  url: url$5,
  r2_key: r2_key$2,
  original_filename: original_filename$2,
  size: size$2,
  content_type: content_type$2,
  created_at: created_at$2
};
const version$1 = 1;
const asset_id$1 = "854f0cb7-848c-4daf-a2ca-947719e82cdf";
const project_id$1 = "6f85b7b2-86f6-4671-87b1-8cf45300b2e3";
const url$4 = "/__l5e/assets-v1/854f0cb7-848c-4daf-a2ca-947719e82cdf/insurance-banner.png";
const r2_key$1 = "a/v1/6f85b7b2-86f6-4671-87b1-8cf45300b2e3/854f0cb7-848c-4daf-a2ca-947719e82cdf/insurance-banner.png";
const original_filename$1 = "insurance-banner.png";
const size$1 = 1543122;
const content_type$1 = "image/png";
const created_at$1 = "2026-06-17T06:48:10Z";
const insuranceBg$1 = {
  version: version$1,
  asset_id: asset_id$1,
  project_id: project_id$1,
  url: url$4,
  r2_key: r2_key$1,
  original_filename: original_filename$1,
  size: size$1,
  content_type: content_type$1,
  created_at: created_at$1
};
const version = 1;
const asset_id = "33fa1290-9d6b-4019-a929-0df7360ee2c9";
const project_id = "6f85b7b2-86f6-4671-87b1-8cf45300b2e3";
const url$3 = "/__l5e/assets-v1/33fa1290-9d6b-4019-a929-0df7360ee2c9/mutual-funds-banner.png";
const r2_key = "a/v1/6f85b7b2-86f6-4671-87b1-8cf45300b2e3/33fa1290-9d6b-4019-a929-0df7360ee2c9/mutual-funds-banner.png";
const original_filename = "mutual-funds-banner.png";
const size = 1686964;
const content_type = "image/png";
const created_at = "2026-06-17T06:48:13Z";
const mutualFundBg$1 = {
  version,
  asset_id,
  project_id,
  url: url$3,
  r2_key,
  original_filename,
  size,
  content_type,
  created_at
};
const CARD_PALETTES = [
  {
    bg: "bg-gradient-to-br from-blue-50 via-white to-slate-100",
    ring: "ring-blue-200",
    chip: "bg-blue-100 text-blue-700"
  }
];
const BG_BY_TYPE = {
  loan: loanBg$1,
  insurance: insuranceBg$1,
  mutual_fund: mutualFundBg$1
};
const RADIAL_BY_TYPE = {
  loan: "bg-[radial-gradient(circle_at_18%_22%,rgba(37,99,235,0.10),transparent_34%),radial-gradient(circle_at_82%_72%,rgba(14,165,233,0.10),transparent_32%)]",
  insurance: "bg-[radial-gradient(circle_at_18%_22%,rgba(244,63,94,0.10),transparent_34%),radial-gradient(circle_at_82%_72%,rgba(217,70,239,0.10),transparent_32%)]",
  mutual_fund: "bg-[radial-gradient(circle_at_18%_22%,rgba(16,185,129,0.10),transparent_34%),radial-gradient(circle_at_82%_72%,rgba(245,158,11,0.10),transparent_32%)]"
};
function ProductPage({
  title,
  subtitle,
  items,
  productType,
  accentClass
}) {
  const bg = BG_BY_TYPE[productType];
  const hasBg = !!bg;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("relative isolate overflow-hidden", hasBg && "products-bg"), children: [
    hasBg && bg && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "aria-hidden": true,
          className: "absolute inset-0 -z-10 opacity-90 mix-blend-multiply animate-products-bg",
          style: {
            backgroundImage: `url('${bg.url}')`,
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "aria-hidden": true,
          className: "absolute -right-10 top-24 -z-10 hidden h-[32rem] w-[46rem] max-w-[76vw] animate-float rounded-[2rem] bg-cover bg-center opacity-60 mix-blend-multiply shadow-2xl md:block",
          style: { backgroundImage: `url('${bg.url}')` }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "aria-hidden": true,
          className: "absolute inset-0 -z-10 bg-gradient-to-b from-white/0 via-transparent to-white/10"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "aria-hidden": true,
          className: cn("absolute inset-0 -z-10", RADIAL_BY_TYPE[productType])
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-16 sm:px-6 md:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h1",
          {
            className: `font-display text-3xl font-bold sm:text-4xl md:text-5xl ${accentClass}`,
            children: title
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: cn(
              "mt-4 text-sm sm:text-base",
              hasBg ? "font-medium text-slate-700" : "text-muted-foreground"
            ),
            children: subtitle
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 [perspective:1400px]", children: items.map((p, i) => {
        const palette = CARD_PALETTES[i % CARD_PALETTES.length];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Card,
            {
              role: "button",
              tabIndex: 0,
              className: cn(
                "card-3d group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border-0 ring-1 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.25)] backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgba(15,23,42,0.35)]",
                hasBg && "product-card-glass",
                palette.bg,
                palette.ring
              ),
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[300px] w-full overflow-hidden bg-white", children: [
                p.image && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: p.image,
                    alt: p.name,
                    loading: "lazy",
                    className: "h-full w-full object-contain p-3 transition-transform duration-700 group-hover:scale-105"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" }),
                p.tag && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    className: cn(
                      "absolute right-3 top-3 border-0 shadow",
                      palette.chip
                    ),
                    children: p.tag
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold leading-tight text-white drop-shadow", children: p.name }),
                  p.rate && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-semibold text-white/90", children: p.rate }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs font-medium uppercase tracking-wide text-white/80", children: "Tap to view details" })
                ] })
              ] })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { className: "z-[9999] max-h-[88vh] w-[94vw] max-w-3xl overflow-y-auto rounded-3xl border-0 bg-transparent p-0 shadow-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-3xl bg-white shadow-2xl", children: [
            p.image && // <div className="relative h-32 w-full overflow-hidden sm:h-36">
            //   <img
            //     src={p.image}
            //     alt={p.name}
            //     className="h-full w-full object-cover"
            //   />
            //   <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
            //   <div className="absolute inset-x-0 bottom-0 p-4">
            //     <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
            //       {p.name}
            //     </h3>
            //     {p.rate && (
            //       <p className="text-sm font-semibold text-white/90">
            //         {p.rate}
            //       </p>
            //     )}
            //   </div>
            // </div>
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[260px] w-full overflow-hidden bg-white sm:h-[320px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: p.image,
                  alt: p.name,
                  className: "h-full w-full object-contain p-3"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-white sm:text-2xl", children: p.name }),
                p.rate && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-white/90", children: p.rate })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-4 sm:px-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "sr-only", children: p.name }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-6 text-slate-600", children: p.desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2", children: p.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-emerald-600" }),
                f
              ] }, f)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t bg-slate-950", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LeadForm, { productType, productName: p.name }) })
          ] }) })
        ] }, p.slug);
      }) })
    ] })
  ] });
}
function ProductHeroSlider({
  slides,
  variant = "hero"
}) {
  const [i, setI] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % slides.length), 5500);
    return () => clearInterval(id);
  }, [slides.length]);
  if (variant === "watermark") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "aria-hidden": true,
        className: "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        children: [
          slides.map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `absolute inset-0 transition-opacity duration-[1500ms] ${i === idx ? "opacity-100" : "opacity-0"}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: s.image,
                  alt: "",
                  className: "h-full w-full object-cover opacity-20"
                }
              )
            },
            idx
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white/90" })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[340px] w-full overflow-hidden md:h-[420px]", children: [
    slides.map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `absolute inset-0 transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.image, alt: s.title, className: "h-full w-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[#0b1f4d]/85 via-[#17357e]/60 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container relative mx-auto flex h-full items-center px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold leading-tight md:text-5xl", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-white/90 md:text-lg", children: s.subtitle })
          ] }) })
        ]
      },
      idx
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2", children: slides.map((_, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        "aria-label": `slide-${idx + 1}`,
        onClick: () => setI(idx),
        className: `h-2 rounded-full transition-all ${i === idx ? "w-8 bg-white" : "w-2 bg-white/50"}`
      },
      idx
    )) })
  ] });
}
const url$2 = "/__l5e/assets-v1/c0424df3-ca29-47c6-8c14-e2f02af6c832/loan-bg.jpg";
const loanBg = {
  url: url$2
};
const url$1 = "/__l5e/assets-v1/a0d20f39-386c-4034-ade2-ddcdd660a720/insurance-bg.jpeg";
const insuranceBg = {
  url: url$1
};
const url = "/__l5e/assets-v1/3af27d3f-544b-43f6-94be-2aaec4735414/mutual-fund-bg.jpg";
const mutualFundBg = {
  url
};
const PRESETS = {
  loans: {
    tint: "from-blue-100/60 via-sky-50/50 to-indigo-100/50",
    blob1: "bg-blue-400/35",
    blob2: "bg-sky-400/35",
    blob3: "bg-indigo-400/30",
    images: [loanBg.url]
  },
  insurance: {
    tint: "from-emerald-100/60 via-teal-50/50 to-cyan-100/50",
    blob1: "bg-emerald-400/35",
    blob2: "bg-teal-400/35",
    blob3: "bg-cyan-400/30",
    images: [insuranceBg.url]
  },
  "mutual-funds": {
    tint: "from-amber-100/60 via-orange-50/50 to-rose-100/50",
    blob1: "bg-amber-400/40",
    blob2: "bg-orange-400/35",
    blob3: "bg-rose-400/30",
    images: [mutualFundBg.url]
  }
};
function AnimatedBackground({ variant }) {
  const preset = PRESETS[variant];
  const slides = preset.images;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden", children: [
    slides.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 bg-cover bg-center animate-bg-zoom animate-bg-fade",
        style: {
          backgroundImage: `url('${src}')`,
          animationDelay: `${i * (slides.length > 1 ? 24 / slides.length : 0)}s, ${i * (slides.length > 1 ? 24 / slides.length : 0)}s`,
          opacity: slides.length > 1 ? 0 : 1
        }
      },
      src
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${preset.tint}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-white/30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full ${preset.blob1} blur-3xl animate-blob` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `absolute top-1/3 -right-32 h-[30rem] w-[30rem] rounded-full ${preset.blob2} blur-3xl animate-blob`,
        style: { animationDelay: "3s" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `absolute -bottom-40 left-1/4 h-[34rem] w-[34rem] rounded-full ${preset.blob3} blur-3xl animate-blob`,
        style: { animationDelay: "6s" }
      }
    ),
    variant === "loans" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[12%] left-[8%] text-6xl opacity-20 animate-float", children: "🏠" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-[22%] right-[10%] text-6xl opacity-20 animate-float",
          style: { animationDelay: "1.5s" },
          children: "💰"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute bottom-[18%] left-[14%] text-6xl opacity-20 animate-float",
          style: { animationDelay: "3s" },
          children: "🚗"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute bottom-[24%] right-[16%] text-6xl opacity-20 animate-float",
          style: { animationDelay: "4.5s" },
          children: "🏦"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:48px_48px]" })
  ] });
}
export {
  AnimatedBackground as A,
  ProductHeroSlider as P,
  ProductPage as a
};
