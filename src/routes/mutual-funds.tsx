import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProductPage } from "@/components/site/ProductPage";
import { ProductHeroSlider } from "@/components/site/ProductHeroSlider";
import { MfCalculator } from "@/components/site/MfCalculator";
import { AnimatedBackground } from "@/components/site/AnimatedBackground";
import { mutualFunds } from "@/data/products";

export const Route = createFileRoute("/mutual-funds")({
  head: () => ({
    meta: [
      { title: "Mutual Funds — SIP, ELSS, Debt, NPS | Aarthvaahini" },
      { name: "description", content: "Start SIP from ₹500. Invest in ELSS tax-saver, equity, debt, NPS, SGB and PMS with SEBI-registered advisors. Historical 14% CAGR*." },
      { name: "keywords", content: "mutual funds, SIP, ELSS, tax saver mutual fund, debt funds, equity funds, NPS, PMS, SGB, wealth creation, India" },
      { property: "og:title", content: "Mutual Funds & SIP from ₹500 | Aarthvaahini" },
      { property: "og:description", content: "Grow wealth with SIP, ELSS, debt funds, PMS and NPS — guided by SEBI-registered advisors." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://aarthvaahini.com/mutual-funds" },
    ],
    links: [{ rel: "canonical", href: "https://aarthvaahini.com/mutual-funds" }],
  }),
  component: () => (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground variant="mutual-funds" />
      <Header />
      <main className="relative isolate overflow-hidden">
        <ProductHeroSlider
          slides={[
            { title: "Start SIP from just ₹500", subtitle: "Long-term wealth creation guided by SEBI-registered advisors.", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80", cta: "Start SIP", href: "/contact" },
            { title: "Save Tax with ELSS Funds", subtitle: "Save up to ₹46,800 in tax under Section 80C.", image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=1600&q=80", cta: "Explore ELSS", href: "/contact" },
            { title: "Plan Your Retirement Corpus", subtitle: "NPS, PMS, SGB and more — one advisor for every goal.", image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1600&q=80", cta: "Plan Now", href: "/contact" },
          ]}
        />
        <ProductPage
          title="Mutual Funds"
          subtitle="Start investing with SIP from just ₹500 — the smartest path to long-term wealth creation."
          items={mutualFunds}
          productType="mutual_fund"
          accentClass="text-[#183c93]"
        />
        <MfCalculator />
      </main>
      <Footer />
    </div>
  ),
});
