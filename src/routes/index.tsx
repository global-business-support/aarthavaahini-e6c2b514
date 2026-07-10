import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Products } from "@/components/site/Products";
import { EmiCalculator } from "@/components/site/EmiCalculator";
import { CibilChecker } from "@/components/site/CibilChecker";
import { Testimonials } from "@/components/site/Testimonials";
import { AdminPanel } from "@/components/site/AdminPanel";
import { Footer } from "@/components/site/Footer";
import { SipPlanner } from "@/components/site/SipPlanner";
import { PartnerBanks } from "@/components/site/PartnerBanks";
import { EligibilityChecker } from "@/components/site/EligibilityChecker";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aarthvaahini — Loans, Insurance, Mutual Funds & Wealth Advisory in India" },
      { name: "description", content: "Compare home, personal & business loans from 50+ banks, buy term/health insurance, start SIP from ₹500 and check your CIBIL score free — all in one place." },
      { name: "keywords", content: "home loan, personal loan, business loan, term insurance, health insurance, mutual funds, SIP, CIBIL score, loan against property, ELSS, PMS, India" },
      { property: "og:title", content: "Aarthvaahini — Loans, Insurance, Mutual Funds & Wealth Advisory" },
      { property: "og:description", content: "Best rates from 50+ banks. Free CIBIL score, EMI & SIP calculators. Start your journey from Srijan se Samriddhi." },
      { property: "og:url", content: "https://aarthvaahini.com/" },
    ],
    links: [{ rel: "canonical", href: "https://aarthvaahini.com/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Products />
        <EligibilityChecker />
        <EmiCalculator />
        <SipPlanner />
        <CibilChecker />
        <PartnerBanks />
        <Testimonials />
        <AdminPanel />
      </main>
      <Footer />
    </div>
  );
}
