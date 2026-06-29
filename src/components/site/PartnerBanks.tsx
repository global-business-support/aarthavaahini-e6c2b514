// "use client";

// import { useState } from "react";

// type Bank = {
//   name: string;
//   domain: string;
//   logo?: string;
// };

// type PartnerCategory = {
//   title: string;
//   subtitle: string;
//   banks: Bank[];
// };

// // Multi-source logo fallback chain — tries each until one loads.
// function buildLogoSources(bank: Bank): string[] {
//   const sources: string[] = [];

//   if (bank.logo) sources.push(bank.logo);

//   sources.push(`https://logo.clearbit.com/${bank.domain}`);
//   sources.push(`https://icons.duckduckgo.com/ip3/${bank.domain}.ico`);
//   sources.push(
//     `https://www.google.com/s2/favicons?domain=${bank.domain}&sz=128`,
//   );

//   return sources;
// }

// const PARTNER_CATEGORIES: PartnerCategory[] = [
//   {
//     title: "Leading Banks & financial institutions",
//     subtitle: "Trusted public sector banking partners",
//     banks: [
//       {
//         name: "Bank of Baroda",
//         domain: "bankofbaroda.in",
//         logo: "https://i.pinimg.com/736x/62/29/0e/62290e422e2a7435d8e1ba37649245b9.jpg",
//       },
//       {
//         name: "State Bank of India",
//         domain: "onlinesbi.sbi",
//         logo: "https://i.pinimg.com/736x/57/7c/63/577c63d920a82e991cf1918157874971.jpg",
//       },
//       {
//         name: "Bank of India",
//         domain: "bankofindia.co.in",
//         logo: "https://i.pinimg.com/736x/ef/db/35/efdb3546b5e212c7c7bb73a6aa7640f5.jpg",
//       },
//       {
//         name: "Punjab National Bank",
//         domain: "pnbindia.in",
//         logo: "https://i.pinimg.com/736x/b7/75/40/b775406fd56b8401eeb8b771d060bf1e.jpg",
//       },
//       {
//         name: "Central Bank of India",
//         domain: "centralbankofindia.co.in",
//         logo: "https://i.pinimg.com/736x/f2/d2/a3/f2d2a3f5ba989ded02b0a32acbc113dc.jpg",
//       },
//     ],
//   },
//   {
//     title: "",
//     subtitle: "",
//     banks: [
//       {
//         name: "HDFC Bank",
//         domain: "hdfcbank.com",
//         logo: "https://i.pinimg.com/736x/1e/b4/93/1eb49385575175ab7f541d7000273a1b.jpg",
//       },
//       {
//         name: "ICICI Bank",
//         domain: "icicibank.com",
//         logo: "https://i.pinimg.com/736x/22/96/9c/22969cee81f5338672583e8c524a8dab.jpg",
//       },
//       {
//         name: "Axis Bank",
//         domain: "axisbank.com",
//         logo: "https://i.pinimg.com/1200x/df/70/76/df70767105d12ee9466bcbb1190c85fc.jpg",
//       },
//       {
//         name: "Kotak Mahindra Bank",
//         domain: "kotak.com",
//         logo: "https://i.pinimg.com/736x/05/4e/0b/054e0b16f909715ba8897497c93360f9.jpg",
//       },
//       {
//         name: "IndusInd Bank",
//         domain: "indusind.com",
//         logo: "https://i.pinimg.com/736x/f0/b3/15/f0b31567ad1eeb418e19b0290fee2bae.jpg",
//       },
//     ],
//   },
  
//   {
//     title: "",
//     subtitle: "",
//     banks: [
//       {
//         name: "RBL Bank",
//         domain: "rblbank.com",
//         logo: "https://i.pinimg.com/736x/23/a8/f9/23a8f910bd3f7b0ab2b65745faec679e.jpg",
//       },
//       {
//         name: "Yes Bank",
//         domain: "yesbank.in",
//         logo: "https://i.pinimg.com/736x/78/cf/b5/78cfb5d5005f532fe2a88d135d4c6026.jpg",
//       },
//       {
//         name: "Bandhan Bank",
//         domain: "bandhanbank.com",
//         logo: "https://i.pinimg.com/1200x/9a/b4/f2/9ab4f2ffacecc3b687b3bdd4eb337772.jpg",
//       },
//       {
//         name: "IDFC First Bank",
//         domain: "idfcfirstbank.com",
//         logo: "https://i.pinimg.com/736x/5a/78/24/5a78247d843aed1eaaf1085572ac81c4.jpg",
//       },
//       {
//         name: "Saraswat Bank",
//         domain: "saraswatbank.com",
//         logo: "https://i.pinimg.com/1200x/46/a8/ba/46a8babd0c52cb628cd330700e0575b3.jpg",
//       },
//     ],
//   },
//   {
//     title: "",
//     subtitle: "",
//     banks: [
//       {
//         name: "Aditya Birla Capital",
//         domain: "adityabirlacapital.com",
//         logo: "https://i.pinimg.com/1200x/13/c8/86/13c886a2b2a4c77e2afde6f3c1176f50.jpg",
//       },
//       {
//         name: "PNB Housing Finance",
//         domain: "pnbhousing.com",
//         logo: "https://i.pinimg.com/736x/b7/75/40/b775406fd56b8401eeb8b771d060bf1e.jpg",
//       },
//       {
//         name: "Tata Capital",
//         domain: "tatacapital.com",
//         logo: "https://i.pinimg.com/736x/01/90/3b/01903b0dc9bd5375b90201738398aa8b.jpg",
//       },
//       {
//         name: "Sundaram Housing Finance",
//         domain: "sundaramhome.in",
//         logo: "https://i.pinimg.com/1200x/2a/bb/0e/2abb0eb15d74141be890b7ae57e56a2b.jpg",
//       },
//       {
//         name: "SMFG India Credit",
//         domain: "smfgindiacredit.com",
//         logo: "https://i.pinimg.com/736x/b4/36/e5/b436e574bf496047ad9904e43f6a4ae2.jpg",
//       },
//     ],
//   },
//   {
//     title: "",
//     subtitle: "",
//     banks: [
//       {
//         name: "Bajaj Finserv",
//         domain: "bajajfinserv.in",
//         logo: "https://i.pinimg.com/736x/82/e4/80/82e480131ceb59e4060a615260e13e2d.jpg",
//       },
//       {
//         name: "Jio Finance",
//         domain: "jiofinance.com",
//         logo: "https://i.pinimg.com/736x/b2/19/61/b21961b4cd04bfecc1d1568af3933b98.jpg",
//       },
//       {
//         name: "L&T Finance",
//         domain: "ltfs.com",
//         logo: "https://i.pinimg.com/736x/2f/cc/a0/2fcca03b088d4bd529abebe7ed74ea55.jpg",
//       },
//       {
//         name: "Cholamandalam Finance",
//         domain: "cholamandalam.com",
//         logo: "https://i.pinimg.com/736x/8f/39/18/8f39181c68c7a6ad3ff6bb4a66b85556.jpg",
//       },
//       {
//         name: "Mahindra Finance",
//         domain: "mahindrafinance.com",
//         logo: "https://i.pinimg.com/736x/23/3a/a7/233aa74e2c07210342c9015af4763e32.jpg",
//       },
//     ],
//   },
// ];

// const BANKS: Bank[] = PARTNER_CATEGORIES.flatMap((category) => category.banks);

// function BankLogo({ bank }: { bank: Bank }) {
//   const sources = buildLogoSources(bank);
//   const [idx, setIdx] = useState(0);
//   const src = sources[Math.min(idx, sources.length - 1)];

//   return (
//     <img
//       src={src}
//       alt={`${bank.name} logo`}
//       loading="lazy"
//       className="max-h-11 w-auto max-w-[105px] object-contain sm:max-h-12 sm:max-w-[120px]"
//       onError={() => {
//         if (idx < sources.length - 1) {
//           setIdx(idx + 1);
//         }
//       }}
//     />
//   );
// }

// function PartnerCard({ bank }: { bank: Bank }) {
//   return (
//     <div className="group relative flex min-h-[150px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-blue-100 bg-white p-4 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#17357e]/30 hover:shadow-xl">
//       <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-blue-100 blur-2xl transition group-hover:bg-blue-200" />

//       <div className="relative flex h-16 w-full items-center justify-center">
//         <BankLogo bank={bank} />
//       </div>

//       <h3 className="relative mt-3 line-clamp-2 min-h-[34px] text-[11px] font-bold leading-tight text-[#07142f] sm:text-sm">
//         {bank.name}
//       </h3>

//       <p className="relative mt-1 text-[9px] font-semibold uppercase tracking-wider text-gray-400 sm:text-[10px]">
//         Financial Partner
//       </p>
//     </div>
//   );
// }

// export function PartnerBanks() {
//   return (
//     <section
//       id="partners"
//       className="bg-gradient-to-b from-blue-50/70 via-white to-blue-50/50 py-14 sm:py-20"
//     >
//       <div className="container mx-auto px-4 sm:px-6">
//         {/* HEADING */}
//         <div className="mx-auto max-w-4xl text-center">
//           <span className="inline-block rounded-full bg-[#17357e]/10 px-4 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#17357e] sm:text-xs">
//             Trusted Financial Network
//           </span>

//           <h2 className="mt-4 text-3xl font-bold text-[#07142f] sm:text-4xl md:text-5xl">
//             50+ Financial Institutions and
//             <span className="text-blue-600"> 350+ Products</span>
//           </h2>

//           <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-gray-500 sm:text-base">
//             We work with leading private banks, government banks, NBFCs,
//             housing finance companies and financial institutions to offer a wide
//             range of financial solutions under one platform.
//           </p>
//         </div>

//         {/* STATS */}
//         <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
//           <div className="rounded-2xl border border-blue-100 bg-white p-5 text-center shadow-sm">
//             <h3 className="text-3xl font-bold text-[#17357e]">50+</h3>
//             <p className="mt-1 text-sm font-medium text-gray-500">
//               Financial Institutions
//             </p>
//           </div>

//           <div className="rounded-2xl border border-blue-100 bg-white p-5 text-center shadow-sm">
//             <h3 className="text-3xl font-bold text-[#17357e]">350+</h3>
//             <p className="mt-1 text-sm font-medium text-gray-500">
//               Financial Products
//             </p>
//           </div>

//           <div className="rounded-2xl border border-blue-100 bg-white p-5 text-center shadow-sm">
//             <h3 className="text-3xl font-bold text-[#17357e]">5+</h3>
//             <p className="mt-1 text-sm font-medium text-gray-500">
//               Partner Categories
//             </p>
//           </div>
//         </div>

//         {/* CATEGORY WISE PARTNERS */}
//         <div className="mt-12 space-y-12">
//           {PARTNER_CATEGORIES.map((category) => (
//             <div key={category.title}>
//               <div className="mb-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
//                 <div>
//                   <h3 className="text-xl font-bold text-[#07142f] sm:text-2xl">
//                     {category.title}
//                   </h3>

//                   <p className="mt-1 text-sm text-gray-500">
//                     {category.subtitle}
//                   </p>
//                 </div>

//                 <span className="w-fit rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold text-blue-700">
//                   {category.banks.length} Partners
//                 </span>
//               </div>

//               <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-5">
//                 {category.banks.map((bank) => (
//                   <PartnerCard key={bank.name} bank={bank} />
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export const BANK_NAMES = BANKS.map((bank) => bank.name);
"use client";

import { useState } from "react";

type Bank = {
  name: string;
  domain: string;
  logo?: string;
};

type PartnerCategory = {
  title: string;
  subtitle: string;
  banks: Bank[];
};

function buildLogoSources(bank: Bank): string[] {
  const sources: string[] = [];

  if (bank.logo) sources.push(bank.logo);

  sources.push(`https://logo.clearbit.com/${bank.domain}`);
  sources.push(`https://icons.duckduckgo.com/ip3/${bank.domain}.ico`);
  sources.push(
    `https://www.google.com/s2/favicons?domain=${bank.domain}&sz=128`,
  );

  return sources;
}

const PARTNER_CATEGORIES: PartnerCategory[] = [
  {
    title: "Leading Banks & financial institutions",
    subtitle: "Trusted public sector banking partners",
    banks: [
      {
        name: "Bank of Baroda",
        domain: "bankofbaroda.in",
        logo: "https://i.pinimg.com/736x/62/29/0e/62290e422e2a7435d8e1ba37649245b9.jpg",
      },
      {
        name: "State Bank of India",
        domain: "onlinesbi.sbi",
        logo: "https://i.pinimg.com/736x/57/7c/63/577c63d920a82e991cf1918157874971.jpg",
      },
      {
        name: "Bank of India",
        domain: "bankofindia.co.in",
        logo: "https://i.pinimg.com/736x/ef/db/35/efdb3546b5e212c7c7bb73a6aa7640f5.jpg",
      },
      {
        name: "Punjab National Bank",
        domain: "pnbindia.in",
        logo: "https://i.pinimg.com/736x/b7/75/40/b775406fd56b8401eeb8b771d060bf1e.jpg",
      },
      {
        name: "Central Bank of India",
        domain: "centralbankofindia.co.in",
        logo: "https://i.pinimg.com/736x/f2/d2/a3/f2d2a3f5ba989ded02b0a32acbc113dc.jpg",
      },
    ],
  },
  {
    title: "",
    subtitle: "",
    banks: [
      {
        name: "HDFC Bank",
        domain: "hdfcbank.com",
        logo: "https://i.pinimg.com/736x/1e/b4/93/1eb49385575175ab7f541d7000273a1b.jpg",
      },
      {
        name: "ICICI Bank",
        domain: "icicibank.com",
        logo: "https://i.pinimg.com/736x/22/96/9c/22969cee81f5338672583e8c524a8dab.jpg",
      },
      {
        name: "Axis Bank",
        domain: "axisbank.com",
        logo: "https://i.pinimg.com/1200x/df/70/76/df70767105d12ee9466bcbb1190c85fc.jpg",
      },
      {
        name: "Kotak Mahindra Bank",
        domain: "kotak.com",
        logo: "https://i.pinimg.com/736x/05/4e/0b/054e0b16f909715ba8897497c93360f9.jpg",
      },
      {
        name: "IndusInd Bank",
        domain: "indusind.com",
        logo: "https://i.pinimg.com/736x/f0/b3/15/f0b31567ad1eeb418e19b0290fee2bae.jpg",
      },
    ],
  },
  {
    title: "",
    subtitle: "",
    banks: [
      {
        name: "RBL Bank",
        domain: "rblbank.com",
        logo: "https://i.pinimg.com/736x/23/a8/f9/23a8f910bd3f7b0ab2b65745faec679e.jpg",
      },
      {
        name: "Yes Bank",
        domain: "yesbank.in",
        logo: "https://i.pinimg.com/736x/78/cf/b5/78cfb5d5005f532fe2a88d135d4c6026.jpg",
      },
      {
        name: "Bandhan Bank",
        domain: "bandhanbank.com",
        logo: "https://i.pinimg.com/1200x/9a/b4/f2/9ab4f2ffacecc3b687b3bdd4eb337772.jpg",
      },
      {
        name: "IDFC First Bank",
        domain: "idfcfirstbank.com",
        logo: "https://i.pinimg.com/736x/5a/78/24/5a78247d843aed1eaaf1085572ac81c4.jpg",
      },
      {
        name: "Saraswat Bank",
        domain: "saraswatbank.com",
        logo: "https://i.pinimg.com/1200x/46/a8/ba/46a8babd0c52cb628cd330700e0575b3.jpg",
      },
    ],
  },
  {
    title: "",
    subtitle: "",
    banks: [
      {
        name: "Aditya Birla Capital",
        domain: "adityabirlacapital.com",
        logo: "https://i.pinimg.com/1200x/13/c8/86/13c886a2b2a4c77e2afde6f3c1176f50.jpg",
      },
      {
        name: "PNB Housing Finance",
        domain: "pnbhousing.com",
        logo: "https://i.pinimg.com/736x/b7/75/40/b775406fd56b8401eeb8b771d060bf1e.jpg",
      },
      {
        name: "Tata Capital",
        domain: "tatacapital.com",
        logo: "https://i.pinimg.com/736x/01/90/3b/01903b0dc9bd5375b90201738398aa8b.jpg",
      },
      {
        name: "Sundaram Housing Finance",
        domain: "sundaramhome.in",
        logo: "https://i.pinimg.com/1200x/2a/bb/0e/2abb0eb15d74141be890b7ae57e56a2b.jpg",
      },
      {
        name: "SMFG India Credit",
        domain: "smfgindiacredit.com",
        logo: "https://i.pinimg.com/736x/b4/36/e5/b436e574bf496047ad9904e43f6a4ae2.jpg",
      },
    ],
  },
  {
    title: "",
    subtitle: "",
    banks: [
      {
        name: "Bajaj Finserv",
        domain: "bajajfinserv.in",
        logo: "https://i.pinimg.com/736x/82/e4/80/82e480131ceb59e4060a615260e13e2d.jpg",
      },
      {
        name: "Jio Finance",
        domain: "jiofinance.com",
        logo: "https://i.pinimg.com/736x/b2/19/61/b21961b4cd04bfecc1d1568af3933b98.jpg",
      },
      {
        name: "L&T Finance",
        domain: "ltfs.com",
        logo: "https://i.pinimg.com/736x/2f/cc/a0/2fcca03b088d4bd529abebe7ed74ea55.jpg",
      },
      {
        name: "Cholamandalam Finance",
        domain: "cholamandalam.com",
        logo: "https://i.pinimg.com/736x/8f/39/18/8f39181c68c7a6ad3ff6bb4a66b85556.jpg",
      },
      {
        name: "Mahindra Finance",
        domain: "mahindrafinance.com",
        logo: "https://i.pinimg.com/736x/23/3a/a7/233aa74e2c07210342c9015af4763e32.jpg",
      },
    ],
  },
];

const BANKS: Bank[] = PARTNER_CATEGORIES.flatMap((category) => category.banks);

function BankLogo({ bank }: { bank: Bank }) {
  const sources = buildLogoSources(bank);
  const [idx, setIdx] = useState(0);
  const src = sources[Math.min(idx, sources.length - 1)];

  return (
    <img
      src={src}
      alt={`${bank.name} logo`}
      loading="lazy"
      className="max-h-11 w-auto max-w-[105px] object-contain sm:max-h-12 sm:max-w-[120px]"
      onError={() => {
        if (idx < sources.length - 1) {
          setIdx(idx + 1);
        }
      }}
    />
  );
}

function PartnerCard({ bank }: { bank: Bank }) {
  return (
    <div className="group relative flex min-h-[150px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-blue-100 bg-white p-4 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#17357e]/30 hover:shadow-xl">
      <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-blue-100 blur-2xl transition group-hover:bg-blue-200" />

      <div className="relative flex h-16 w-full items-center justify-center">
        <BankLogo bank={bank} />
      </div>

      <h3 className="relative mt-3 line-clamp-2 min-h-[34px] text-[11px] font-bold leading-tight text-[#07142f] sm:text-sm">
        {bank.name}
      </h3>

      <p className="relative mt-1 text-[9px] font-semibold uppercase tracking-wider text-gray-400 sm:text-[10px]">
        Financial Partner
      </p>
    </div>
  );
}

export function PartnerBanks() {
  return (
    <section
      id="partners"
      className="bg-gradient-to-b from-blue-50/70 via-white to-blue-50/50 py-14 sm:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* TOP HEADING */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full bg-[#17357e]/10 px-4 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#17357e] sm:text-xs">
            Trusted Financial Network
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#07142f] sm:text-4xl md:text-5xl">
            50+ Financial Institutions and
            <span className="text-blue-600"> 350+ Products</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-gray-500 sm:text-base">
            We work with leading private banks, government banks, NBFCs,
            housing finance companies and financial institutions to offer a wide
            range of financial solutions under one platform.
          </p>
        </div>

        {/* STATS */}
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-blue-100 bg-white p-5 text-center shadow-sm">
            <h3 className="text-3xl font-bold text-[#17357e]">50+</h3>
            <p className="mt-1 text-sm font-medium text-gray-500">
              Financial Institutions
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-5 text-center shadow-sm">
            <h3 className="text-3xl font-bold text-[#17357e]">350+</h3>
            <p className="mt-1 text-sm font-medium text-gray-500">
              Financial Products
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white p-5 text-center shadow-sm">
            <h3 className="text-3xl font-bold text-[#17357e]">5+</h3>
            <p className="mt-1 text-sm font-medium text-gray-500">
              Partner Categories
            </p>
          </div>
        </div>

        {/* BANKS */}
        <div className="mt-10 space-y-4">
          {PARTNER_CATEGORIES.map((category, index) => (
            <div key={`${category.title}-${index}`}>
              {index === 0 && (
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#07142f] sm:text-2xl">
                    {category.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {category.subtitle}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-5">
                {category.banks.map((bank) => (
                  <PartnerCard key={bank.name} bank={bank} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const BANK_NAMES = BANKS.map((bank) => bank.name);