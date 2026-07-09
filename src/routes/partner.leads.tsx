import { createFileRoute, Link } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/partner/leads")({
  component: PartnerLeadsPage,
});

function PartnerLeadsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-6 py-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-[#17357e]/10 px-5 py-2 text-sm font-bold text-[#17357e]">
            Partner Leads
          </span>

          <h1 className="mt-6 text-4xl font-bold text-[#07142f] sm:text-5xl">
            Partner Leads Coming Soon
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            This page will show partner lead tracking, lead status, customer
            details and follow-up updates.
          </p>

          <Link to="/contact">
            <Button className="mt-8 rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 text-white">
              Contact Admin
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}