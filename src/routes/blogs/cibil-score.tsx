import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/blogs/cibil-score")({
  head: () => ({
    meta: [
      { title: "How to Improve Your CIBIL Score in 30 Days | Aarthvaahini" },
      { name: "description", content: "Practical steps to boost your CIBIL score fast — pay EMIs on time, control credit utilisation and fix errors on your report." },
      { property: "og:title", content: "Improve Your CIBIL Score in 30 Days" },
      { property: "og:description", content: "Actionable tips to raise your credit score and unlock better loan offers." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://aarthvaahini.com/blogs/cibil-score" },
    ],
    links: [{ rel: "canonical", href: "https://aarthvaahini.com/blogs/cibil-score" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "How to Improve Your CIBIL Score in 30 Days",
        author: { "@type": "Organization", name: "Aarthvaahini" },
        publisher: { "@type": "Organization", name: "Aarthvaahini" },
        mainEntityOfPage: "https://aarthvaahini.com/blogs/cibil-score",
      }),
    }],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-background">

      <Header />

      <main className="container mx-auto max-w-4xl px-6 py-28">

        <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-[#17357e]">
          Finance Tips
        </span>

        <h1 className="mt-6 bg-linear-to-r from-[#17357e] to-blue-600 bg-clip-text text-5xl font-bold text-transparent">
          How to Improve Your CIBIL Score in 30 Days
        </h1>

        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Your CIBIL score plays a major role in loan approval and credit card eligibility.
          A higher score increases your chances of getting loans at lower interest rates.
        </p>

        <div className="mt-10 space-y-6 text-lg leading-8 text-foreground">

          <p>
            • Pay all EMIs and credit card bills on time.
          </p>

          <p>
            • Avoid applying for multiple loans together.
          </p>

          <p>
            • Maintain low credit utilization below 30%.
          </p>

          <p>
            • Keep old credit cards active for better credit history.
          </p>

          <p>
            • Regularly monitor your credit report for errors.
          </p>

        </div>

        <div className="mt-12 rounded-2xl border border-blue-100 bg-blue-50/50 p-6">
          <h3 className="text-lg font-semibold text-[#17357e]">Related on Aarthvaahini</h3>
          <ul className="mt-3 space-y-2 text-blue-700">
            <li>→ <a href="/cibil" className="underline hover:text-[#17357e]">Check your CIBIL score free</a></li>
            <li>→ <a href="/loans" className="underline hover:text-[#17357e]">Compare loan offers from 50+ banks</a></li>
            <li>→ <a href="/blogs/home-loan-guide" className="underline hover:text-[#17357e]">Complete Home Loan Guide for First-Time Buyers</a></li>
            <li>→ <a href="/blogs/sip-guide" className="underline hover:text-[#17357e]">Why SIP is the Smartest Investment for Beginners</a></li>
          </ul>
        </div>

      </main>

      <Footer />

    </div>
  );
}
