// import { createFileRoute } from "@tanstack/react-router";
// import { Header } from "@/components/site/Header";
// import { Footer } from "@/components/site/Footer";
// import { Card } from "@/components/ui/card";
// import {Button} from "@/components/ui/button";


// export const Route = createFileRoute("/contact")({
//   head: () => ({ meta: [
//     { title: "Contact Us — Aarthvaahini" },
//     { name: "description", content: "Get in touch with Aarthvaahini for loans, insurance and investment queries." },
//   ]}),
//   component: ContactPage,
// });
// function ContactPage() {

//   return (

//     <div className="min-h-screen bg-background">

//       <Header />

//       <main className="container mx-auto px-6 py-26">

//         {/* HEADING */}

//         <div className="mx-auto max-w-2xl text-center">

//           <h1 className="font-display text-4xl font-bold sm:text-5xl">

//             Contact <span className="text-gradient">Us</span>

//           </h1>

//           <p className="mt-4 text-muted-foreground">

//             Fill the form and our team will contact you shortly.

//           </p>

//         </div>

//         {/* CENTER FORM */}

//         <div className="mt-12 flex justify-center">

//           <Card className="w-full max-w-2xl rounded-3xl p-8 shadow-elegant">

//             <h2 className="font-display text-2xl font-bold">

//               Free Consultation

//             </h2>

//             <p className="mt-2 text-sm text-muted-foreground">

//               Fill the form and our expert will contact you shortly.

//             </p>

//             <form className="mt-8 space-y-5">

//               {/* NAME */}

//               <div>

//                 <label className="mb-2 block text-sm font-medium text-[#17357e]">

//                    Name

//                 </label>

//                 <input
//                   type="text"
//                   placeholder="Enter your name"
//                   className="h-12 w-full rounded-xl border border-gray-200 px-4 outline-none transition focus:border-blue-500"
//                 />

//               </div>

//               {/* MOBILE */}

//               <div>

//                 <label className="mb-2 block text-sm font-medium text-[#17357e]">

//                   Phone

//                 </label>

//                 <input
//                   type="tel"
//                   placeholder="+91 98XXXXXXXX"
//                   className="h-12 w-full rounded-xl border border-gray-200 px-4 outline-none transition focus:border-blue-500"
//                 />

//               </div>

//               {/* EMAIL */}

//               <div>

//                 <label className="mb-2 block text-sm font-medium text-[#17357e]">

//                   Email 

//                 </label>

//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="h-12 w-full rounded-xl border border-gray-200 px-4 outline-none transition focus:border-blue-500"
//                 />

//               </div>

//               {/* SERVICE */}

//               <div>

//                 <label className="mb-2 block text-sm font-medium text-[#17357e]">

//                   LoanType

//                 </label>

//                 <select
//                   className="h-12 w-full rounded-xl border border-gray-200 px-4 outline-none transition focus:border-blue-500"
//                 >

//                   <option>Personal Loan</option>

//                   <option>Business Loan</option>

//                   <option>Home Loan</option>

//                   <option>Insurance</option>

//                   <option>Mutual Funds</option>

//                   <option>SIP Planning</option>

//                 </select>

//               </div>
//                <div>

//                 <label className="mb-2 block text-sm font-medium text-[#17357e]">

//                    Amount

//                 </label>

//                 <input
//                   type="text"
//                   placeholder="Enter your amount"
//                   className="h-12 w-full rounded-xl border border-gray-200 px-4 outline-none transition focus:border-blue-500"
//                 />

//               </div>

//               {/* MESSAGE */}

//               <div>

//                 <label className="mb-2 block text-sm font-medium text-[#17357e]">

//                   Message

//                 </label>

//                 <textarea
//                   rows={4}
//                   placeholder="Write your requirement..."
//                   className="w-full rounded-xl border border-gray-200 p-4 outline-none transition focus:border-blue-500"
//                 />

//               </div>
             

//               {/* BUTTON */}

//               <Button className="h-12 w-full rounded-xl bg-linear-to-r from-[#17357e] to-blue-600 text-white transition-all hover:scale-[1.02]">

//                 Submit Enquiry

//               </Button>

//             </form>

//           </Card>

//         </div>

//       </main>

//       <Footer />

//     </div>

//   );
// }
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  Loader2,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  MessageSquareText,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Aarthvaahini" },
      {
        name: "description",
        content:
          "Get in touch with Aarthvaahini for loans, insurance, mutual funds, private equity and alternative investment queries.",
      },
    ],
  }),
  component: ContactPage,
});

const SERVICE_OPTIONS = [
  "Home Loan",
  "Personal Loan",
  "Business Loan",
  "Working Capital Loan",
  "Machinery & Equipment Loan",
  "Loan Against Property",
  "Insurance",
  "Corporate Insurance",
  "Keyman Insurance",
  "Mutual Funds",
  "PMS",
  "SIF",
  "AIF",
  "Private Equity",
  "Alternative Assets",
  "High Rental Yield",
  "Other",
];

function ContactPage() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Personal Loan",
    amount: "",
    message: "",
  });

  const inputClass =
    "h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim()) {
      toast.error("Name is required");
      return;
    }

    if (!form.phone.trim()) {
      toast.error("Phone number is required");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("leads").insert({
      lead_name: form.name.trim(),
      full_name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim() || null,
      product_type: "contact",
      product_name: form.service,
      loan_type: form.service,
      amount: form.amount ? Number(form.amount) : null,
      loan_amount: form.amount ? Number(form.amount) : null,
      message: form.message.trim() || null,
      lead_source: "Website Contact Page",
      status: "New",
    });

    setLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Enquiry submitted successfully!");

    setForm({
      name: "",
      phone: "",
      email: "",
      service: "Personal Loan",
      amount: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/40 to-white">
      <Header />

      <main className="container mx-auto px-4 py-20 sm:px-6 sm:py-28">
        {/* HEADING */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Contact Aarthvaahini
          </span>

          <h1 className="mt-4 font-display text-4xl font-bold text-slate-950 sm:text-5xl md:text-6xl">
            Let’s Discuss Your
            <span className="text-gradient"> Financial Goals</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Share your requirement and our advisory team will connect with you
            for loans, insurance, wealth solutions, private equity or
            alternative assets.
          </p>
        </div>

        {/* CONTACT GRID */}
        <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.2fr]">
          {/* LEFT INFO CARD */}
          <Card className="relative overflow-hidden rounded-[32px] border border-blue-100 bg-gradient-to-br from-[#17357e] via-blue-700 to-sky-500 p-7 text-white shadow-2xl shadow-blue-500/20 sm:p-8">
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <MessageSquareText className="h-7 w-7" />
              </div>

              <h2 className="mt-6 text-3xl font-bold">
                Free Consultation
              </h2>

              <p className="mt-3 text-sm leading-7 text-white/85">
                Get structured guidance from our financial consultants. We help
                you explore suitable options based on your profile, requirement
                and financial goals.
              </p>

              <div className="mt-8 space-y-4">
                <InfoRow
                  icon={Phone}
                  title="Call Support"
                  text="Our team will contact you after form submission."
                />
                <InfoRow
                  icon={Mail}
                  title="Email Assistance"
                  text="Get support for loans, insurance and investments."
                />
                <InfoRow
                  icon={MapPin}
                  title="Multiple Offices"
                  text="Advisor support through our business locations."
                />
              </div>

              <div className="mt-8 rounded-2xl bg-white/12 p-4 backdrop-blur">
                <h3 className="font-semibold">Why contact us?</h3>

                <ul className="mt-3 space-y-2 text-sm text-white/85">
                  {[
                    "Corporate financial consultants",
                    "Tailored solutions to meet your goals",
                    "Loan options from 50+ financiers",
                    "Insurance, wealth and alternative asset advisory",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          {/* RIGHT FORM CARD */}
          <Card className="rounded-[32px] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200/70 sm:p-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-950">
                Submit Your Enquiry
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Fill the form and our expert will contact you shortly.
              </p>
            </div>

            <form onSubmit={submit} className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* NAME */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-[#17357e]">
                  Full Name *
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                  required
                  className={inputClass}
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#17357e]">
                  Phone *
                </label>

                <input
                  type="tel"
                  placeholder="+91 98XXXXXXXX"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  required
                  className={inputClass}
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#17357e]">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className={inputClass}
                />
              </div>

              {/* SERVICE */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#17357e]">
                  Service Interested
                </label>

                <select
                  value={form.service}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, service: e.target.value }))
                  }
                  className={`${inputClass} cursor-pointer`}
                >
                  {SERVICE_OPTIONS.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* AMOUNT */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#17357e]">
                  Amount / Requirement Value
                </label>

                <input
                  type="number"
                  placeholder="Enter amount"
                  value={form.amount}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, amount: e.target.value }))
                  }
                  className={inputClass}
                />
              </div>

              {/* MESSAGE */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-[#17357e]">
                  Message
                </label>

                <textarea
                  rows={4}
                  placeholder="Write your requirement..."
                  value={form.message}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, message: e.target.value }))
                  }
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* BUTTON */}
              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  disabled={loading}
                  className="h-12 w-full rounded-xl bg-gradient-to-r from-[#17357e] via-blue-600 to-cyan-500 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.01] hover:opacity-95"
                >
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Submit Enquiry
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function InfoRow({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15">
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-white/75">{text}</p>
      </div>
    </div>
  );
}