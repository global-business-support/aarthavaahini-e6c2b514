import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProductPage } from "@/components/site/ProductPage";
import { ProductHeroSlider } from "@/components/site/ProductHeroSlider";
import { AnimatedBackground } from "@/components/site/AnimatedBackground";
import { insurance } from "@/data/products";

export const Route = createFileRoute("/insurance")({
  head: () => ({
    meta: [
      { title: "Insurance — Term, Health, Motor, Travel | Aarthvaahini" },
      { name: "description", content: "Protect your family with term life, health, motor, travel, home and child insurance from India's top insurers. Save tax under 80C & 10(10D)." },
      { name: "keywords", content: "term insurance, health insurance, motor insurance, travel insurance, home insurance, life insurance, tax saving, 80C" },
      { property: "og:title", content: "Insurance — Term, Health, Motor & Travel | Aarthvaahini" },
      { property: "og:description", content: "₹1 Cr term cover from just ₹500/month. Compare plans from top insurers with an unbiased advisor." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://aarthvaahini.com/insurance" },
    ],
    links: [{ rel: "canonical", href: "https://aarthvaahini.com/insurance" }],
  }),
  component: () => (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground variant="insurance" />
      <Header />
      <main className="relative isolate overflow-hidden">
        <ProductHeroSlider
          variant="watermark"
          slides={[
            { title: "", subtitle: "", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80" },
            { title: "", subtitle: "", image: "https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?auto=format&fit=crop&w=1600&q=80" },
            { title: "", subtitle: "", image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1600&q=80" },
          ]}
        />
        <ProductPage
          title="Insurance"
          subtitle="Your family's protection comes first — choose from the best plans offered by top insurers."
          items={insurance}
          productType="insurance"
          accentClass="text-[#183c93]"
        />
      </main>
      <Footer />
    </div>
  ),
});
