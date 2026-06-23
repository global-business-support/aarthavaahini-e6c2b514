"use client";

import { useState } from "react";

type Bank = {
  name: string;
  domain: string;
  // Optional manual logo override (used first if provided)
  logo?: string;
};

// Multi-source logo fallback chain — tries each until one loads.
function buildLogoSources(bank: Bank): string[] {
  const sources: string[] = [];
  if (bank.logo) sources.push(bank.logo);
  sources.push(`https://logo.clearbit.com/${bank.domain}`);
  sources.push(`https://icons.duckduckgo.com/ip3/${bank.domain}.ico`);
  sources.push(`https://www.google.com/s2/favicons?domain=${bank.domain}&sz=128`);
  return sources;
}

const BANKS: Bank[] = [
  { name: "HDFC Bank", domain: "hdfcbank.com" },
  { name: "ICICI Bank", domain: "icicibank.com" },
  { name: "State Bank of India", domain: "onlinesbi.sbi" },
  { name: "Axis Bank", domain: "axisbank.com" },
  { name: "Kotak Mahindra Bank", domain: "kotak.com" },
  { name: "IDFC First Bank", domain: "idfcfirstbank.com" },
  { name: "Yes Bank", domain: "yesbank.in" },
  { name: "IndusInd Bank", domain: "indusind.com" },
  { name: "Punjab National Bank", domain: "pnbindia.in" },
  { name: "Bank of Baroda", domain: "bankofbaroda.in" },
  { name: "Canara Bank", domain: "canarabank.com" },
  { name: "Union Bank of India", domain: "unionbankofindia.co.in" },
  { name: "Federal Bank", domain: "federalbank.co.in" },
  { name: "RBL Bank", domain: "rblbank.com" },
  { name: "Bajaj Finserv", domain: "bajajfinserv.in" },
  { name: "Tata Capital", domain: "tatacapital.com" },
  { name: "Aditya Birla Capital", domain: "adityabirlacapital.com" },
  { name: "L&T Finance", domain: "ltfs.com" },
  { name: "Mahindra Finance", domain: "mahindrafinance.com" },
  { name: "IDBI Bank", domain: "idbibank.in" },
  { name: "Piramal Finance", domain: "piramalfinance.com" },
  { name: "DCB Bank", domain: "dcbbank.com" },
  { name: "Karnataka Bank", domain: "karnatakabank.com" },
  { name: "South Indian Bank", domain: "southindianbank.com" },
];

function getInitials(name: string) {
  return name
    .replace(/Bank|of|Finance|Capital|Finserv/gi, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

function BankLogo({ bank }: { bank: Bank }) {
  const sources = buildLogoSources(bank);
  const [idx, setIdx] = useState(0);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#17357e] to-blue-500 text-sm font-bold text-white shadow-md sm:h-14 sm:w-14 sm:text-base">
        {getInitials(bank.name) || bank.name[0]}
      </div>
    );
  }

  return (
    <img
      src={sources[idx]}
      alt={`${bank.name} logo`}
      loading="lazy"
      className="max-h-12 w-auto max-w-[110px] object-contain sm:max-h-14 sm:max-w-[120px]"
      onError={() => {
        if (idx < sources.length - 1) setIdx(idx + 1);
        else setFailed(true);
      }}
    />
  );
}


export function PartnerBanks() {
  return (
    <section
      id="partners"
      className="bg-gradient-to-b from-blue-50/70 via-white to-blue-50/50 py-14 sm:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-[#17357e]/10 px-4 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#17357e] sm:text-xs">
            Trusted by leading lenders
          </span>

          <h2 className="mt-3 text-2xl font-bold text-[#07142f] sm:text-4xl md:text-5xl">
            Our Banking &amp; NBFC Partners
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-500 sm:text-base">
            We partner with India&rsquo;s top banks and NBFCs to help customers
            access better loan offers and faster financial services.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
          {BANKS.map((bank) => (
            <div
              key={bank.name}
              className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-blue-100 bg-white p-3 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#17357e]/30 hover:shadow-xl sm:p-4"
            >
              <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-blue-100 blur-2xl transition group-hover:bg-blue-200" />

              <div className="relative flex h-14 w-full items-center justify-center sm:h-16">
                <BankLogo bank={bank} />
              </div>

              <h3 className="relative mt-3 line-clamp-2 min-h-[34px] text-[11px] font-bold leading-tight text-[#07142f] sm:mt-4 sm:min-h-[38px] sm:text-sm">
                {bank.name}
              </h3>

              <p className="relative mt-1 text-[9px] font-semibold uppercase tracking-wider text-gray-400 sm:text-[10px]">
                Loan Partner
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const BANK_NAMES = BANKS.map((b) => b.name);
