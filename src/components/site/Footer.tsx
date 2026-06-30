import { Link } from "@tanstack/react-router";

import logo from "@/assets/logo.png";
import headingLogo from "@/assets/heading-logo.png";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  LogIn,
} from "lucide-react";

import { WhatsAppFab } from "./WhatsAppFab";

export function Footer() {
  return (
    <footer id="contact" className="bg-white">
      {/* FAQ SECTION */}
      <div id="faqs" className="border-t border-border/40 px-4 py-12 sm:px-6 sm:py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Frequently
              <span className="text-gradient"> Asked Questions</span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              Get answers related to loans, insurance, mutual funds and
              investments.
            </p>
          </div>

          <div className="mt-10 rounded-3xl bg-card p-5 shadow-soft sm:p-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Which loan is best for business expansion?
                </AccordionTrigger>
                <AccordionContent>
                  Business loans and working capital loans are commonly used for
                  expansion.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How to check home loan eligibility?
                </AccordionTrigger>
                <AccordionContent>
                  Eligibility depends on income, credit profile and repayment
                  capacity.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Why invest in SIP?</AccordionTrigger>
                <AccordionContent>
                  SIP helps in disciplined wealth creation and long-term
                  investing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Why is insurance important?</AccordionTrigger>
                <AccordionContent>
                  Insurance provides financial protection during emergencies.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Can I apply online?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can apply online for loans, insurance and investments.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* FOOTER CONTENT */}
      <div className="border-t border-border/40 bg-white">
        <div className="container mx-auto grid grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.9fr_0.9fr_1.4fr_0.8fr] lg:gap-8">
          {/* COMPANY INFO */}
          <div className="flex flex-col">
            <Link to="/" className="inline-flex items-center">
              <img
                src={logo}
                alt="Aarthvaahini logo"
                className="h-14 w-14 shrink-0 object-contain"
              />

              <img
                src={headingLogo}
                alt="Aarthvaahini"
                className="ml-1 h-9 w-auto max-w-[170px] object-contain"
              />
            </Link>

            <p className="mt-4 max-w-[260px] text-sm leading-7 text-muted-foreground">
              Trusted financial platform offering loans, insurance and
              investment solutions across India.
            </p>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="text-base font-bold text-foreground">Products</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-muted-foreground">
              <Link to="/loans" className="transition hover:text-primary">
                Loan
              </Link>

              <Link to="/insurance" className="transition hover:text-primary">
                Insurance
              </Link>

              <Link
                to="/mutual-funds"
                className="transition hover:text-primary"
              >
                Mutual Funds
              </Link>
            </div>
          </div>

          {/* TOOLS */}
          <div>
            <h3 className="text-base font-bold text-foreground">Tools</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-muted-foreground">
              <Link
                to="/"
                hash="calculator"
                className="transition hover:text-primary"
              >
                EMI Calculator
              </Link>

              <Link to="/" hash="cibil" className="transition hover:text-primary">
                CIBIL Score
              </Link>

              <Link to="/" hash="sip" className="transition hover:text-primary">
                SIP Planner
              </Link>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-base font-bold text-foreground">Company</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-muted-foreground">
              <Link to="/about" className="transition hover:text-primary">
                About
              </Link>

              <Link to="/contact" className="transition hover:text-primary">
                Contact
              </Link>

              <Link to="/directors" className="transition hover:text-primary">
                Directors
              </Link>

              <Link to="/blogs" className="transition hover:text-primary">
                Blogs
              </Link>

              <a href="#faqs" className="transition hover:text-primary">
                FAQs
              </a>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-base font-bold text-foreground">
              Contact Info
            </h3>

            <div className="mt-5 flex flex-col gap-4 text-sm text-muted-foreground">
              <a
                href="tel:+919827679993"
                className="flex items-center gap-3 transition hover:text-primary"
              >
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>+91 98276 79993</span>
              </a>

              <a
                href="mailto:care@aarthvaahini.com"
                className="flex items-center gap-3 transition hover:text-primary"
              >
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span className="break-all">care@aarthvaahini.com</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <span className="max-w-[280px] leading-6">
                  2nd Floor, Shrinath Tower, Opposite C3 Hospital, Behind C21
                  Mall, Vijay Nagar, Indore, MP 452010
                </span>
              </div>
            </div>
          </div>

          {/* FOLLOW US */}
          <div>
            <h3 className="text-base font-bold text-foreground">Follow Us</h3>

            <div className="mt-5 flex flex-col gap-4 text-sm text-muted-foreground">
              <a
                href="https://www.facebook.com/profile.php?id=61590224307837"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-blue-600"
              >
                <Facebook className="h-5 w-5 shrink-0" />
                <span>Facebook</span>
              </a>

              <a
                href="https://instagram.com/aarthvaahini_fin_pvt_ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-pink-600"
              >
                <Instagram className="h-5 w-5 shrink-0" />
                <span>Instagram</span>
              </a>

              <a
                href="https://www.linkedin.com/company/aarthvaahini/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-blue-700"
              >
                <Linkedin className="h-5 w-5 shrink-0" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-border/60 bg-white py-5">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-6 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Aarthvaahini Financial Services Pvt.
            Ltd. All rights reserved.
          </p>

          <Link
            to="/crm/login"
            className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-[12px] font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            <LogIn className="h-3.5 w-3.5" />
            CRM Login
          </Link>
        </div>
      </div>

      <WhatsAppFab />
    </footer>
  );
}