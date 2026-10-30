import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/site/LegalPage";
import type { LegalSection } from "@/components/site/LegalPage";

export const Route = createFileRoute("/disclaimers")({
  head: () => ({
    meta: [
      { title: "Disclaimers & Policies — Aarthvaahini Financial Services" },
      {
        name: "description",
        content:
          "Disclaimers and policies of Aarthvaahini Financial Services covering loans, insurance, mutual funds, credit score, grievance redressal, refunds and fraud prevention.",
      },
      {
        property: "og:title",
        content: "Disclaimers & Policies — Aarthvaahini Financial Services",
      },
      {
        property: "og:description",
        content:
          "Official disclaimers and policies for loans, insurance, mutual funds and investments offered through Aarthvaahini Financial Services.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://aarthvaahini.com/disclaimers",
      },
    ],
    links: [
      { rel: "canonical", href: "https://aarthvaahini.com/disclaimers" },
    ],
  }),
  component: DisclaimersPage,
});

const sections: LegalSection[] = [
  {
    heading: "1. General Financial Disclaimer",
    paragraphs: [
      "Aarthvaahini Financial Services Pvt. Ltd. provides financial services assistance, distribution, facilitation and related services through applicable arrangements and channels. Website information is for general informational purposes and should not automatically be considered personalised financial, investment, legal or tax advice.",
    ],
  },
  {
    heading: "2. Loan Disclaimer",
    paragraphs: [
      "Loan approval is subject to the independent assessment and credit policy of the respective lender. Aarthvaahini does not guarantee loan approval, loan amount, interest rate, tenure, processing time, disbursement or any other final loan terms.",
    ],
  },
  {
    heading: "3. Interest Rate Disclaimer",
    paragraphs: [
      '"Starting from" and other displayed interest rates are indicative unless expressly stated otherwise. Actual rates may depend on credit profile, credit score, income, employment/business profile, loan amount, tenure, property profile, lender policy, risk assessment and other factors.',
    ],
  },
  {
    heading: "4. Insurance Disclaimer",
    paragraphs: [
      "Insurance products are subject to underwriting and the terms and conditions of the respective insurer. Premiums displayed are indicative unless expressly stated otherwise. Aarthvaahini does not guarantee policy issuance, renewal, claim acceptance or claim settlement.",
    ],
  },
  {
    heading: "5. Mutual Fund Disclaimer",
    paragraphs: [],
    bullets: [
      "Mutual Fund investments are subject to market risks, read all scheme related documents carefully.",
      "Past performance is not indicative of future performance.",
      "Investment values may rise or fall depending on market conditions.",
      "SIP return illustrations, CAGR, projected values and calculator outputs are illustrative and are not guarantees of future returns.",
    ],
  },
  {
    heading: "6. Alternative Investment Disclaimer",
    paragraphs: [
      "Information relating to PMS, AIFs, SIFs, private equity, structured products, REITs, InvITs, bonds, NCDs and other alternative or market-linked products is subject to product-specific regulations, eligibility criteria, documentation and risk disclosures. Such products may involve market, credit, liquidity, concentration and issuer risks and loss of capital.",
    ],
  },
  {
    heading: "7. Credit Score / Credit Information",
    paragraphs: [
      "Where the Website provides or facilitates access to credit-score or credit-report-related services, such services may be provided through the relevant authorised credit information company or third-party provider. Aarthvaahini does not independently determine a customer's credit score.",
    ],
  },
  {
    heading: "8. \"Free\" and Promotional Offers",
    paragraphs: [
      'Where a service is described as "free", the statement applies only to the specific service and conditions mentioned. Third-party charges, government charges, lender charges, insurer charges, taxes, processing fees or other applicable charges may still apply unless expressly stated otherwise.',
    ],
  },
  {
    heading: "9. No Guarantee of Financial Outcome",
    paragraphs: [
      "Nothing on the Website guarantees loan approval, insurance issuance, claim settlement, investment returns, capital appreciation, tax savings, credit-score improvement, wealth creation or any particular financial outcome.",
    ],
  },
  {
    heading: "10. Third-Party Product Providers",
    paragraphs: [
      "Financial products may be offered by independent banks, NBFCs, insurers, AMCs, investment companies, card issuers or other regulated/authorised entities. Their applicable terms and regulatory disclosures govern the relevant product.",
    ],
  },
  {
    heading: "11. Grievance Redressal",
    paragraphs: [
      "Aarthvaahini currently does not have a separately designated Grievance Officer.",
      "For any grievance or complaint, customers may contact:",
    ],
    bullets: [
      "Aarthvaahini Financial Services Pvt. Ltd.",
      "Email: care@aarthvaahini.com",
      "Phone: +91 98276 79993",
      "Registered Office: 2nd Floor, Shrinath Tower, Opposite C3 Hospital, Behind C21 Mall, Vijay Nagar, Indore, MP 452010",
      "Please include your name, contact details, relevant application/policy/reference number and details of the grievance.",
      "We will address complaints in accordance with applicable law, contractual obligations and the nature of the service involved.",
      "Where a complaint concerns a regulated financial institution, insurer, AMC or other product provider, the customer may also use that institution's grievance mechanism.",
    ],
  },
  {
    heading: "12. Refund & Cancellation Policy",
    paragraphs: [
      "Submitting an enquiry through the Website does not itself constitute a paid service.",
      "Aarthvaahini does not charge a fee merely for submitting a general enquiry unless such fee is expressly disclosed before the service is provided.",
      "Where a paid service is introduced, applicable fee, cancellation and refund terms will be communicated before payment.",
      "Fees charged by third-party financial institutions, lenders, insurers, AMCs or other product providers are governed by their respective terms and are not automatically refundable by Aarthvaahini.",
    ],
  },
  {
    heading: "13. Fraud Prevention Notice",
    paragraphs: [
      "Aarthvaahini will not ask customers to share OTP, ATM PIN, internet banking password, UPI PIN, CVV or other confidential authentication credentials through ordinary Website forms or unsolicited communication.",
      "Customers should verify the identity of anyone claiming to represent Aarthvaahini before transferring money or sharing confidential information.",
    ],
  },
  {
    heading: "14. Website Content",
    paragraphs: [
      "We make reasonable efforts to keep information accurate and current. Financial products, rates, premiums, eligibility criteria, regulations and market conditions can change.",
    ],
  },
  {
    heading: "15. Regulatory Status",
    paragraphs: [
      "Where Aarthvaahini, its employees, authorised representatives or partners operate under a specific regulatory registration, licence, certificate, ARN, corporate-agent registration, intermediary registration or other authorisation, the applicable details should be displayed accurately and only to the extent legally permitted.",
      "Nothing on this Website should be interpreted as claiming a regulatory licence or registration that Aarthvaahini or its personnel do not actually hold.",
    ],
  },
  {
    heading: "16. Contact",
    paragraphs: [],
    bullets: [
      "Registered Office: 2nd Floor, Shrinath Tower, Opposite C3 Hospital, Behind C21 Mall, Vijay Nagar, Indore, MP 452010",
      "Email: care@aarthvaahini.com",
      "Phone: +91 98276 79993",
      "Website: www.aarthvaahini.com",
    ],
  },
];

function DisclaimersPage() {
  return (
    <LegalPage
      tag="Legal"
      title="Disclaimers & Policies"
      subtitle="Aarthvaahini Financial Services Pvt. Ltd. — disclaimers and policies applicable to the information and services presented on www.aarthvaahini.com."
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
