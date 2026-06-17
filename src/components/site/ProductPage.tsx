import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LeadForm } from "./LeadForm";
import type { ProductItem } from "@/data/products";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import loanBg from "@/assets/loan-banner.png.asset.json";
import insuranceBg from "@/assets/insurance-banner.png.asset.json";
import mutualFundBg from "@/assets/mutual-funds-banner.png.asset.json";

type Props = {
  title: string;
  subtitle: string;
  items: ProductItem[];
  productType: "loan" | "insurance" | "mutual_fund";
  accentClass: string;
};

const CARD_PALETTES = [
  {
    bg: "bg-gradient-to-br from-blue-50 via-white to-slate-100",
    ring: "ring-blue-200",
    chip: "bg-blue-100 text-blue-700",
  },
];

const BG_BY_TYPE: Record<Props["productType"], { url: string } | null> = {
  loan: loanBg,
  insurance: insuranceBg,
  mutual_fund: mutualFundBg,
};

const RADIAL_BY_TYPE: Record<Props["productType"], string> = {
  loan: "bg-[radial-gradient(circle_at_18%_22%,rgba(37,99,235,0.10),transparent_34%),radial-gradient(circle_at_82%_72%,rgba(14,165,233,0.10),transparent_32%)]",
  insurance:
    "bg-[radial-gradient(circle_at_18%_22%,rgba(244,63,94,0.10),transparent_34%),radial-gradient(circle_at_82%_72%,rgba(217,70,239,0.10),transparent_32%)]",
  mutual_fund:
    "bg-[radial-gradient(circle_at_18%_22%,rgba(16,185,129,0.10),transparent_34%),radial-gradient(circle_at_82%_72%,rgba(245,158,11,0.10),transparent_32%)]",
};

export function ProductPage({
  title,
  subtitle,
  items,
  productType,
  accentClass,
}: Props) {
  const bg = BG_BY_TYPE[productType];
  const hasBg = !!bg;

  return (
    <div className={cn("relative isolate overflow-hidden", hasBg && "products-bg")}>
      {hasBg && bg && (
        <>
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-90 mix-blend-multiply animate-products-bg"
            style={{
              backgroundImage: `url('${bg.url}')`,
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />

          <div
            aria-hidden
            className="absolute -right-10 top-24 -z-10 hidden h-[32rem] w-[46rem] max-w-[76vw] animate-float rounded-[2rem] bg-cover bg-center opacity-60 mix-blend-multiply shadow-2xl md:block"
            style={{ backgroundImage: `url('${bg.url}')` }}
          />

          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-b from-white/0 via-transparent to-white/10"
          />

          <div
            aria-hidden
            className={cn("absolute inset-0 -z-10", RADIAL_BY_TYPE[productType])}
          />
        </>
      )}

      <div className="container mx-auto px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h1
            className={`font-display text-3xl font-bold sm:text-4xl md:text-5xl ${accentClass}`}
          >
            {title}
          </h1>

          <p
            className={cn(
              "mt-4 text-sm sm:text-base",
              hasBg ? "font-medium text-slate-700" : "text-muted-foreground"
            )}
          >
            {subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 [perspective:1400px]">
          {items.map((p, i) => {
            const palette = CARD_PALETTES[i % CARD_PALETTES.length];

            return (
              <Dialog key={p.slug}>
                <DialogTrigger asChild>
                  <Card
                    role="button"
                    tabIndex={0}
                    className={cn(
                      "card-3d group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border-0 ring-1 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.25)] backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgba(15,23,42,0.35)]",
                      hasBg && "product-card-glass",
                      palette.bg,
                      palette.ring
                    )}
                  >
                    <div className="relative h-56 w-full overflow-hidden bg-slate-200">
                      {p.image && (
                        <img
                          src={p.image}
                          alt={p.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {p.tag && (
                        <Badge
                          className={cn(
                            "absolute right-3 top-3 border-0 shadow",
                            palette.chip
                          )}
                        >
                          {p.tag}
                        </Badge>
                      )}

                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <h3 className="font-display text-2xl font-bold leading-tight text-white drop-shadow">
                          {p.name}
                        </h3>

                        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-white/80">
                          Tap to view details
                        </p>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>

                <DialogContent className="z-[9999] max-h-[88vh] w-[94vw] max-w-3xl overflow-y-auto rounded-3xl border-0 bg-transparent p-0 shadow-none">
                  <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
                    {p.image && (
                      <div className="relative h-32 w-full overflow-hidden sm:h-36">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

                        <div className="absolute inset-x-0 bottom-0 p-4">
                          <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                            {p.name}
                          </h3>

                          {p.rate && (
                            <p className="text-sm font-semibold text-white/90">
                              {p.rate}
                            </p>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="px-4 py-4 sm:px-5">
                      <DialogHeader>
                        <DialogTitle className="sr-only">{p.name}</DialogTitle>
                      </DialogHeader>

                      <p className="text-sm leading-6 text-slate-600">
                        {p.desc}
                      </p>

                      <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                        {p.features.map((f) => (
                          <li key={f} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t bg-slate-950">
                      <LeadForm productType={productType} productName={p.name} />
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </div>
  );
}