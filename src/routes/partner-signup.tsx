import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Handshake, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/partner-signup")({
  head: () => ({
    meta: [
      { title: "Become a Partner — Aarthvaahini" },
      {
        name: "description",
        content:
          "Join Aarthvaahini as a DSA, connector or channel partner. Earn attractive commissions on loans, insurance and mutual funds.",
      },
      { property: "og:title", content: "Become a Partner — Aarthvaahini" },
      {
        property: "og:description",
        content: "Partner with us and grow your financial services business.",
      },
    ],
  }),
  component: PartnerSignupPage,
});

const CATEGORIES = [
  "DSA / Connector",
  "Bank Partner",
  "NBFC",
  "Insurance Agent",
  "Mutual Fund Distributor",
  "Referral Partner",
  "Other",
];

function PartnerSignupPage() {
  const [f, setF] = useState({
    name: "",
    organisation: "",
    category: CATEGORIES[0],
    phone: "",
    email: "",
    city: "",
    experience: "",
    message: "",
  });
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!f.name.trim() || !f.phone.trim()) {
      toast.error("Name and phone are required");
      return;
    }
    setBusy(true);
    const { error } = await supabase.from("leads").insert({
      full_name: f.name.trim(),
      lead_name: f.name.trim(),
      phone: f.phone.trim(),
      email: f.email.trim() || null,
      city: f.city.trim() || null,
      product_type: "partner",
      product_name: f.category,
      lead_source: "Partner Signup",
      status: "New",
      message:
        `Partner Application\nOrganisation: ${f.organisation || "—"}\n` +
        `Category: ${f.category}\nExperience: ${f.experience || "—"}\n` +
        `Notes: ${f.message || "—"}`,
    });
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Application submitted! Our team will contact you.");
    setDone(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <Header />
      <main className="container mx-auto px-4 pb-16 pt-24 sm:px-6 sm:pt-28">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#17357e]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#17357e]">
              <Handshake className="h-3.5 w-3.5" /> Channel Partner Program
            </span>
            <h1 className="mt-4 text-3xl font-bold text-[#07142f] sm:text-4xl md:text-5xl">
              Become an Aarthvaahini Partner
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
              Grow your income by referring loans, insurance and mutual fund
              customers. Get dedicated CRM access, real-time payout tracking
              and end-to-end operations support.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-5">
            {/* Benefits */}
            <div className="space-y-3 lg:col-span-2">
              {[
                "Attractive commission on every disbursement",
                "Dedicated Partner Portal with lead tracking",
                "Access to 25+ banks & NBFCs",
                "Marketing collateral & training support",
                "Fast payouts and transparent reporting",
              ].map((b) => (
                <div
                  key={b}
                  className="flex items-start gap-3 rounded-2xl border border-sky-100 bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  <span className="text-sm font-medium text-slate-700">{b}</span>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {done ? (
                <div className="rounded-3xl border border-emerald-200 bg-white p-10 text-center shadow-lg">
                  <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-500" />
                  <h2 className="mt-4 text-2xl font-bold text-slate-900">
                    Thank you!
                  </h2>
                  <p className="mt-2 text-sm text-slate-600">
                    Your partner application has been received. Our team will
                    contact you within 24 hours to activate your account.
                  </p>
                  <Button
                    className="mt-6 rounded-full bg-gradient-to-r from-[#17357e] to-blue-600"
                    onClick={() => setDone(false)}
                  >
                    Submit another
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={submit}
                  className="space-y-4 rounded-3xl border border-blue-100 bg-white p-6 shadow-lg sm:p-7"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full Name *">
                      <Input
                        required
                        value={f.name}
                        onChange={(e) => setF({ ...f, name: e.target.value })}
                      />
                    </Field>
                    <Field label="Organisation">
                      <Input
                        value={f.organisation}
                        onChange={(e) =>
                          setF({ ...f, organisation: e.target.value })
                        }
                      />
                    </Field>
                    <Field label="Phone *">
                      <Input
                        required
                        type="tel"
                        value={f.phone}
                        onChange={(e) => setF({ ...f, phone: e.target.value })}
                      />
                    </Field>
                    <Field label="Email">
                      <Input
                        type="email"
                        value={f.email}
                        onChange={(e) => setF({ ...f, email: e.target.value })}
                      />
                    </Field>
                    <Field label="City">
                      <Input
                        value={f.city}
                        onChange={(e) => setF({ ...f, city: e.target.value })}
                      />
                    </Field>
                    <Field label="Partner Category">
                      <select
                        className="h-9 w-full rounded-md border border-input bg-white px-3 text-sm"
                        value={f.category}
                        onChange={(e) =>
                          setF({ ...f, category: e.target.value })
                        }
                      >
                        {CATEGORIES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <div className="sm:col-span-2">
                      <Field label="Years of Experience">
                        <Input
                          value={f.experience}
                          onChange={(e) =>
                            setF({ ...f, experience: e.target.value })
                          }
                          placeholder="e.g. 3 years in home loans"
                        />
                      </Field>
                    </div>
                    <div className="sm:col-span-2">
                      <Field label="Message">
                        <Textarea
                          rows={3}
                          value={f.message}
                          onChange={(e) =>
                            setF({ ...f, message: e.target.value })
                          }
                          placeholder="Tell us about your existing customer base and products you'd like to offer."
                        />
                      </Field>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    disabled={busy}
                    className="w-full rounded-full bg-gradient-to-r from-[#17357e] to-blue-600 py-6 text-base font-semibold text-white"
                  >
                    {busy && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Submit Partner Application
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-0">
      <Label className="text-xs font-semibold uppercase tracking-wide text-slate-600">
        {label}
      </Label>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}
