import { TrendingUp } from "lucide-react";

const TICKER_ITEMS = [
  { label: "Home Loan", highlight: "@ 7.10%*", type: "rate" as const },
  { label: "Personal Loan", highlight: "@ 9.99%*", type: "rate" as const },
  { label: "Business Loan", highlight: "@ 11.99%*", type: "rate" as const },
  { label: "Loan Against Property", highlight: "@ 8.10%*", type: "rate" as const },
  { label: "Car Loan", highlight: "@ 7.65%*", type: "rate" as const },
  { label: "Education Loan", highlight: "@ 8.50%*", type: "rate" as const },
  { label: "Project Loan", highlight: "@ 8.00%*", type: "rate" as const },
  { label: "Working Capital Loan", highlight: "@ 8.00%*", type: "rate" as const },
  { label: "₹1 Crore Term Insurance", highlight: "from ₹500/Month*", type: "highlight" as const },
  { label: "Health Insurance", highlight: "from ₹599/Month*", type: "highlight" as const },
  { label: "Equity SIP", highlight: "Start from ₹500*", type: "investment" as const },
  { label: "ELSS Tax Saver", highlight: "3-Year Lock-in", type: "investment" as const },
];

function TickerItem({ label, highlight, type }: typeof TICKER_ITEMS[number]) {
  const highlightColor =
    type === "rate"
      ? "text-emerald-400"
      : type === "investment"
      ? "text-emerald-400"
      : "text-amber-400";

  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap px-4 text-[13px] font-medium text-white/95 sm:text-sm">
      <TrendingUp className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
      <span>{label}</span>
      <span className={`${highlightColor} font-semibold`}>{highlight}</span>
      <span className="ml-2 hidden text-white/40 sm:inline">|</span>
    </span>
  );
}

export function TopTicker() {
  // Duplicate items for seamless infinite scroll
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      className="fixed left-0 right-0 top-0 z-[10000] h-9 w-full overflow-hidden border-b border-white/10 sm:h-10"
      style={{ backgroundColor: "#0B1F3A" }}
      aria-label="Live offers ticker"
    >
      <div className="group relative flex h-full w-max min-w-full items-center animate-marquee hover:[animation-play-state:paused]">
        {items.map((item, index) => (
          <TickerItem key={`${item.label}-${index}`} {...item} />
        ))}
      </div>
    </div>
  );
}
