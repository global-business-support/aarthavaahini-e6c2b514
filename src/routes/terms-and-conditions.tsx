import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/site/LegalPage";
import type { LegalSection } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Aarthvaahini Financial Services" },
      {
        name: "description",
        content:
          "Terms and Conditions for using www.aarthvaahini.com — website information, loan approval, calculators, interest rates, insurance, investments and governing law.",
      },
      {
        property: "og:title",
        content: "Terms & Conditions — Aarthvaahini Financial Services",
      },
      {
        property: "og:description",
        content:
          "The terms and conditions that govern the use of the Aarthvaahini Financial Services website and related services.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://aarthvaahini.com/terms-and-conditions",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://aarthvaahini.com/terms-and-conditions",
      },
    ],
  }),
  component: TermsAndConditionsPage,
});

const sections: LegalSection[] = [
  {
    heading: "1. About Aarthvaahini",
    paragraphs: [
      'Aarthvaahini Financial Services Pvt. Ltd. ("Aarthvaahini", "Company", "we", "us" or "our") provides financial services assistance, distribution, facilitation and related services through applicable arrangements, partnerships and channels.',
      "Our services may include assistance relating to Home Loans, Loan Against Property, Business Loans, Personal Loans, Car/Vehicle Loans, Education Loans, Gold Loans, Working Capital, Insurance, Mutual Funds, Wealth Management, Bonds, PMS, AIFs, SIFs, REITs, InvITs, structured products, private equity, credit cards and other financial products offered through applicable financial institutions and product providers.",
      "The exact nature of services provided by Aarthvaahini in relation to a particular financial product depends upon the applicable arrangement, licence, registration, authorisation and/or role of the Company or its authorised personnel.",
    ],
  },
  {
    heading: "2. Website Information",
    paragraphs: [
      "Information on this Website is provided for general informational and facilitation purposes. Information regarding interest rates, loan amounts, eligibility, EMI, premiums, investment returns, product features, tenure and charges may be indicative and may change from time to time.",
      "Website information should not by itself be considered a sanction, approval, offer, investment recommendation, insurance contract, loan commitment or guarantee.",
    ],
  },
  {
    heading: "3. Loan Approval",
    paragraphs: [
      "Submission of an enquiry, application or documents does not guarantee loan approval, a particular loan amount, interest rate, tenure, approval period or disbursement.",
      "Final approval is subject to the independent assessment, underwriting, credit policy, documentation, verification and other requirements of the concerned lender. Final loan terms are governed by the lender's sanction letter and loan agreement.",
    ],
  },
  {
    heading: "4. Calculators",
    paragraphs: [
      "Eligibility, EMI, SIP, return and other calculators are illustrative only. Results are estimates based on user-entered information and assumptions and are not guarantees of actual eligibility, approval, returns, premium, EMI or other financial outcomes.",
    ],
  },
  {
    heading: "5. Interest Rates and Charges",
    paragraphs: [
      'Rates displayed on the Website, including "starting from" rates, are indicative unless expressly stated otherwise. Actual rates, processing fees, documentation charges, insurance requirements, prepayment charges and other applicable charges are determined by the respective lender.',
    ],
  },
  {
    heading: "6. Insurance",
    paragraphs: [
      "Insurance products are subject to the terms, conditions, exclusions, underwriting guidelines and approval of the respective insurer. Premiums displayed may be indicative. Aarthvaahini does not guarantee policy issuance or insurance claim acceptance.",
    ],
  },
  {
    heading: "7. Investments",
    paragraphs: [
      "Information concerning Mutual Funds, SIPs, Bonds, PMS, AIFs, SIFs, REITs, InvITs, structured products and other investment products is subject to applicable product-specific disclosures and regulations. Investment values can rise or fall. Past performance is not indicative of future performance. No information should be construed as a guarantee of returns.",
    ],
  },
  {
    heading: "8. User Information",
    paragraphs: [
      "Users must provide accurate, complete and current information and must not submit false, misleading, forged or altered documents.",
    ],
  },
  {
    heading: "9. Communication",
    paragraphs: [
      "By submitting an enquiry or application, users may be contacted by Aarthvaahini, authorised representatives or relevant product providers regarding the enquiry and associated services through telephone, SMS, email, WhatsApp or other permitted channels, subject to applicable law and consent.",
    ],
  },
  {
    heading: "10. Third-Party Providers",
    paragraphs: [
      "Aarthvaahini may facilitate communication or applications with banks, NBFCs, HFCs, insurers, AMCs, investment product providers, card issuers and other financial institutions. Such institutions operate independently and have their own eligibility criteria, pricing, underwriting, privacy policies, terms and grievance mechanisms.",
    ],
  },
  {
    heading: "11. Third-Party Links",
    paragraphs: [
      "The Website may contain third-party links. Aarthvaahini does not control or assume responsibility for third-party content, security, privacy practices, availability or terms.",
    ],
  },
  {
    heading: "12. Intellectual Property",
    paragraphs: [
      "Website text, graphics, logos, designs, photographs, software, layouts, trademarks and other content are owned by or licensed to Aarthvaahini unless otherwise stated. They may not be reproduced or commercially exploited without permission, except where permitted by law.",
    ],
  },
  {
    heading: "13. Website Availability",
    paragraphs: [
      "Aarthvaahini does not guarantee uninterrupted, error-free or completely secure Website availability.",
    ],
  },
  {
    heading: "14. Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, Aarthvaahini shall not be liable for losses arising from rejection of applications, changes in rates or investment values, insurance claim decisions, third-party delays, incorrect user information, technical interruptions, third-party websites or user decisions based on Website information.",
    ],
  },
  {
    heading: "15. Changes",
    paragraphs: [
      "Aarthvaahini may update these Terms from time to time. The latest version will be published on the Website.",
    ],
  },
  {
    heading: "16. Privacy",
    paragraphs: [
      "Use of personal information is governed by the Aarthvaahini Privacy Policy.",
    ],
  },
  {
    heading: "17. Governing Law",
    paragraphs: [
      "These Terms are governed by the laws of India. Subject to applicable law and regulatory jurisdiction, disputes shall be subject to the competent courts at Indore, Madhya Pradesh.",
    ],
  },
  {
    heading: "18. Contact",
    paragraphs: [],
    bullets: [
      "Aarthvaahini Financial Services Pvt. Ltd.",
      "Registered Office: 2nd Floor, Shrinath Tower, Opposite C3 Hospital, Behind C21 Mall, Vijay Nagar, Indore, MP 452010",
      "Email: care@aarthvaahini.com",
      "Phone: +91 98276 79993",
      "Website: www.aarthvaahini.com",
    ],
  },
];

function TermsAndConditionsPage() {
  return (
    <LegalPage
      tag="Legal"
      title="Terms & Conditions"
      subtitle="The terms and conditions governing the use of www.aarthvaahini.com and the services of Aarthvaahini Financial Services Pvt. Ltd."
      updated="30/10/2026"
      sections={sections}
      closing={
        <p className="text-center text-sm text-muted-foreground">
          Aarthvaahini Financial Services Pvt. Ltd. | www.aarthvaahini.com
        </p>
      }
    />
  );
}
