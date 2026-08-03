import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/blogs/sip-guide")({
  head: () => ({
    meta: [
      { title: "Why SIP is the Smartest Investment for Beginners | Aarthvaahini" },
      { name: "description", content: "Start SIP from ₹500 — how systematic investment plans build long-term wealth with compounding and rupee cost averaging." },
      { property: "og:title", content: "Why SIP is the Smartest Investment for Beginners" },
      { property: "og:description", content: "The beginner's guide to SIPs, compounding and building wealth with mutual funds." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://aarthvaahini.com/blogs/sip-guide" },
    ],
    links: [{ rel: "canonical", href: "https://aarthvaahini.com/blogs/sip-guide" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Why SIP is the Smartest Investment for Beginners",
        author: { "@type": "Organization", name: "Aarthvaahini" },
        publisher: { "@type": "Organization", name: "Aarthvaahini" },
        mainEntityOfPage: "https://aarthvaahini.com/blogs/sip-guide",
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

        <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
          Mutual Funds
        </span>

        <h1 className="mt-6 bg-linear-to-r from-[#17357e] to-blue-600 bg-clip-text text-5xl font-bold text-transparent">
          Why SIP is the Smartest Investment for Beginners
        </h1>

        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          SIP (Systematic Investment Plan) is one of the safest and smartest ways
          to build long-term wealth through mutual funds.
        </p>

        <div className="mt-10 space-y-6 text-lg leading-8 text-foreground">

          <p>
            • Start investing with as low as ₹500 per month.
          </p>

          <p>
            • Benefit from compounding and disciplined investing.
          </p>

          <p>
            • Reduce market risk through rupee cost averaging.
          </p>

          <p>
            • Suitable for salaried employees and beginners.
          </p>

          <p>
            • Long-term SIPs can generate significant wealth.
          </p>

        </div>

        <div className="mt-12 rounded-2xl border border-green-100 bg-green-50/50 p-6">
          <h3 className="text-lg font-semibold text-green-800">Related on Aarthvaahini</h3>
          <ul className="mt-3 space-y-2 text-green-700">
            <li>→ <a href="/mutual-funds" className="underline hover:text-green-900">Start SIP from ₹500 on Aarthvaahini</a></li>
            <li>→ <a href="/insurance" className="underline hover:text-green-900">Secure your family with term insurance</a></li>
            <li>→ <a href="/blogs/home-loan-guide" className="underline hover:text-green-900">Home Loan Guide for First-Time Buyers</a></li>
            <li>→ <a href="/blogs/cibil-score" className="underline hover:text-green-900">Improve your CIBIL score in 30 days</a></li>
          </ul>
        </div>

      </main>

      <Footer />

    </div>
  );
}