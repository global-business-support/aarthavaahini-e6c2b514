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
      { property: "og:image", content: "https://aarthvaahini.com/og-image.jpg" },
      { property: "og:image:width", content: "1600" },
      { property: "og:image:height", content: "1600" },
      { name: "twitter:image", content: "https://aarthvaahini.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://aarthvaahini.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which loan is best for business expansion?",
              acceptedAnswer: { "@type": "Answer", text: "Business loans and working capital loans from 50+ partner banks are commonly used for expansion. Aarthvaahini helps you compare rates and get sanction in 48 hours." },
            },
            {
              "@type": "Question",
              name: "How to check home loan eligibility online?",
              acceptedAnswer: { "@type": "Answer", text: "Use the Aarthvaahini free eligibility checker — enter income, city and existing EMIs to see loan amount you qualify for across HDFC, SBI, ICICI, Axis and 50+ lenders." },
            },
            {
              "@type": "Question",
              name: "How much SIP should I start with?",
              acceptedAnswer: { "@type": "Answer", text: "You can start a SIP from ₹500 per month. Use the SIP Planner on Aarthvaahini to see projected wealth over 5, 10 or 20 years based on your monthly investment." },
            },
            {
              "@type": "Question",
              name: "Is checking CIBIL score free on Aarthvaahini?",
              acceptedAnswer: { "@type": "Answer", text: "Yes. Aarthvaahini's CIBIL score check is 100% free and does not impact your credit score. Get instant credit report and improvement tips." },
            },
            {
              "@type": "Question",
              name: "Which insurance is best — term or health?",
              acceptedAnswer: { "@type": "Answer", text: "Both are essential. Term insurance secures your family financially, while health insurance covers medical emergencies. Aarthvaahini advisors help you pick the right cover from top IRDAI-registered insurers." },
            },
          ],
        }),
      },
    ],
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
