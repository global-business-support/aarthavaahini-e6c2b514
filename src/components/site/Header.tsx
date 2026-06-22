import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

import { LeadForm } from "./LeadForm";

import {
  ChevronDown,
  Menu,
  X,
  LogIn,
  Calculator,
  Home,
  MessageSquare,
  Phone,
  Star,
  LogOut,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import logo from "@/assets/logo.png";
import headingLogo from "@/assets/heading-logo.png";

export function Header() {
  const { user, signOut } = useAuth();

  const [mobileMenu, setMobileMenu] = useState(false);
  const [showBottomNav, setShowBottomNav] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowBottomNav(window.scrollY > 500);

      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 z-[9999] w-full border-b border-white/20 bg-white/90 shadow-sm backdrop-blur-xl transition-all duration-500 ${
          showHeader
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between gap-3 px-4 lg:px-6">
          {/* LOGO */}
          {/* <Link
            to="/"
            className="flex items-center gap-0"
            onClick={() => setMobileMenu(false)}
          >
            <div className="flex h-14 overflow-hidden rounded-2xl">
              <img
                src={logo}
                alt="Aarthvaahini"
                className="h-full w-full object-cover"
              />
            </div>

            <img
              src={headingLogo}
              alt="Aarthvaahini"
              className="mt-3 hidden h-10 w-auto object-contain sm:block"
            />
          </Link> */}
          <Link
  to="/"
  className="flex min-w-0 items-center gap-2"
  onClick={() => setMobileMenu(false)}
>
  {/* Icon Logo */}
  <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white sm:h-14 sm:w-14 sm:rounded-2xl">
    <img
      src={logo}
      alt="Aarthvaahini Logo"
      className="block h-full w-full object-contain"
      draggable={false}
    />
  </div>

  {/* Title Logo - Safari safe */}
  <img
    src={headingLogo}
    alt="Aarthvaahini"
    className="block h-8 w-[150px] shrink-0 object-contain sm:h-10 sm:w-[220px]"
    draggable={false}
  />
</Link>
          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-2 lg:flex xl:gap-3">
            <Link
              to="/loans"
              className="rounded-xl px-4 py-2 text-sm font-semibold text-[#17357e] hover:bg-blue-50 xl:text-[15px]"
            >
              Loan
            </Link>

            <Link
              to="/insurance"
              className="rounded-xl px-4 py-2 text-sm font-semibold text-[#17357e] hover:bg-blue-50 xl:text-[15px]"
            >
              Insurance
            </Link>

            <Link
              to="/mutual-funds"
              className="rounded-xl px-4 py-2 text-sm font-semibold text-[#17357e] hover:bg-blue-50 xl:text-[15px]"
            >
              Mutual Funds
            </Link>

            <a
              href="/#calculator"
              className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-[#17357e] hover:bg-blue-50 xl:text-[15px]"
            >
              <Calculator className="h-4 w-4" />
              Calculators
            </a>
          </nav>

          {/* RIGHT BUTTONS */}
          <div className="hidden items-center gap-3 lg:flex">
            {user ? (
              <Button
                onClick={signOut}
                variant="outline"
                className="rounded-full border-red-200 px-5 text-red-600 hover:bg-red-50 xl:px-6"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            ) : (
              <Link to="/admin">
                <Button
                  variant="outline"
                  className="rounded-full border-blue-200 px-5 text-[#17357e] hover:bg-blue-50 xl:px-6"
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Admin Login
                </Button>
              </Link>
            )}

            {/* APPLY NOW */}
            <div className="group relative">
              <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#17357e] to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 xl:px-7 xl:text-base">
                Apply Now
                <ChevronDown className="h-4 w-4" />
              </button>

              <div className="invisible absolute right-0 top-16 z-[9999] w-72 rounded-3xl border border-gray-100 bg-white p-5 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
                <div className="space-y-3">
                  {/* LOAN */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="w-full rounded-2xl p-4 text-left transition hover:bg-blue-50">
                        <h3 className="font-semibold text-[#17357e]">
                          Loan Application
                        </h3>
                        <p className="text-sm text-gray-500">
                          Apply for loans
                        </p>
                      </button>
                    </DialogTrigger>

                    <DialogContent className="z-[9999] max-h-[88vh] w-[94vw] max-w-3xl overflow-y-auto rounded-3xl border-0 bg-transparent p-0 shadow-none">
                      <LeadForm productType="loan" productName="Loan" />
                    </DialogContent>
                  </Dialog>

                  {/* INSURANCE */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="w-full rounded-2xl p-4 text-left transition hover:bg-green-50">
                        <h3 className="font-semibold text-[#17357e]">
                          Insurance Application
                        </h3>
                        <p className="text-sm text-gray-500">
                          Health & Life Insurance
                        </p>
                      </button>
                    </DialogTrigger>

                    <DialogContent className="z-[9999] max-h-[88vh] w-[94vw] max-w-3xl overflow-y-auto rounded-3xl border-0 bg-transparent p-0 shadow-none">
                      <LeadForm
                        productType="insurance"
                        productName="Insurance"
                      />
                    </DialogContent>
                  </Dialog>

                  {/* MUTUAL FUND */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="w-full rounded-2xl p-4 text-left transition hover:bg-orange-50">
                        <h3 className="font-semibold text-[#17357e]">
                          Mutual Fund Enquiry
                        </h3>
                        <p className="text-sm text-gray-500">
                          Start SIP & Investments
                        </p>
                      </button>
                    </DialogTrigger>

                    <DialogContent className="z-[9999] max-h-[88vh] w-[94vw] max-w-3xl overflow-y-auto rounded-3xl border-0 bg-transparent p-0 shadow-none">
                      <LeadForm
                        productType="mutual_fund"
                        productName="Mutual Fund"
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMobileMenu((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 text-[#17357e] lg:hidden"
            aria-label="Toggle mobile menu"
          >
            {mobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="absolute left-0 top-16 z-[9999] w-full border-t bg-white px-6 py-5 shadow-xl lg:hidden">
            <div className="flex flex-col gap-4">
              <Link
                to="/loans"
                className="font-medium text-[#17357e]"
                onClick={() => setMobileMenu(false)}
              >
                Loans
              </Link>

              <Link
                to="/insurance"
                className="font-medium text-[#17357e]"
                onClick={() => setMobileMenu(false)}
              >
                Insurance
              </Link>

              <Link
                to="/mutual-funds"
                className="font-medium text-[#17357e]"
                onClick={() => setMobileMenu(false)}
              >
                Mutual Funds
              </Link>

              <a
                href="/#calculator"
                className="font-medium text-[#17357e]"
                onClick={() => setMobileMenu(false)}
              >
                Calculator
              </a>

              {user ? (
                <button
                  onClick={() => {
                    signOut();
                    setMobileMenu(false);
                  }}
                  className="text-left font-medium text-red-600"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/admin"
                  className="font-medium text-[#17357e]"
                  onClick={() => setMobileMenu(false)}
                >
                  Admin Login
                </Link>
              )}

              <Link to="/contact" onClick={() => setMobileMenu(false)}>
                <Button className="mt-2 w-full bg-gradient-to-r from-[#17357e] to-blue-600">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* BOTTOM NAV */}
      {showBottomNav && (
        <div className="fixed bottom-6 left-1/2 z-[9999] hidden -translate-x-1/2 lg:flex">
          <div className="flex items-center gap-8 rounded-full border border-white/20 bg-white/90 px-8 py-4 shadow-2xl backdrop-blur-xl">
            <a
              href="/#hero"
              className="flex items-center gap-2 font-medium text-[#17357e] transition hover:text-blue-600"
            >
              <Home className="h-5 w-5" />
              Home
            </a>

            <a
              href="/#testimonials"
              className="flex items-center gap-2 font-medium text-[#17357e] transition hover:text-blue-600"
            >
              <Star className="h-5 w-5" />
              Testimonials
            </a>

            <a
              href="/#products"
              className="flex items-center gap-2 font-medium text-[#17357e] transition hover:text-blue-600"
            >
              <MessageSquare className="h-5 w-5" />
              Products
            </a>

            <Link
  to="/contact"
  className="flex items-center gap-2 font-medium text-[#17357e] transition hover:text-blue-600"
>
  <Phone className="h-5 w-5" />
  Contact
</Link>
          </div>
        </div>
      )}
    </>
  );
}