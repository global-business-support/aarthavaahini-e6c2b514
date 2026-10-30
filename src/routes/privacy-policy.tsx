import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/site/LegalPage";
import type { LegalSection } from "@/components/site/LegalPage";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Aarthvaahini Financial Services" },
      {
        name: "description",
        content:
          "Privacy Policy of Aarthvaahini Financial Services — what information we collect, how it is used, shared, secured and how you can exercise your rights.",
      },
      {
        property: "og:title",
        content: "Privacy Policy — Aarthvaahini Financial Services",
      },
      {
        property: "og:description",
        content:
          "How Aarthvaahini Financial Services collects, uses, shares and protects your personal information.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://aarthvaahini.com/privacy-policy",
      },
    ],
    links: [
      { rel: "canonical", href: "https://aarthvaahini.com/privacy-policy" },
    ],
  }),
  component: PrivacyPolicyPage,
});

const sections: LegalSection[] = [
  {
    heading: "1. Information We May Collect",
    paragraphs: [
      "Depending on the service requested, we may collect name, mobile number, email address, address, city/state, date of birth or age, gender where relevant, PAN and other KYC information where required, income, business turnover, employment information, employer/business details, existing loan obligations, EMI information, credit-related information, loan requirements, bank-related information, investment information, insurance requirements, financial documents and supporting documents.",
      "We may also collect IP address, browser/device information, operating system, website usage information, pages visited, referring website, cookies and similar technical information.",
    ],
  },
  {
    heading: "2. How Information Is Collected",
    paragraphs: [
      "Information may be collected when you submit a lead form, request a callback, apply for a financial product, use a calculator, request insurance or investment assistance, contact us, upload documents, communicate with our representatives, or browse/interact with our Website.",
    ],
  },
  {
    heading: "3. Purpose of Processing",
    paragraphs: [
      "We may process personal information to respond to enquiries, understand financial requirements, assess preliminary eligibility, facilitate applications, facilitate insurance and investment enquiries, connect users with relevant financial institutions/product providers, process applications and documents, conduct verification, provide support, communicate about services, prevent fraud, maintain records, comply with law/regulation, improve services and send permitted marketing communications.",
    ],
  },
  {
    heading: "4. Consent",
    paragraphs: [
      "Where consent is required, we will seek consent in accordance with applicable law. Where applicable, consent may be withdrawn using the mechanism provided by us. Withdrawal may affect our ability to provide services where processing is necessary for that service.",
    ],
  },
  {
    heading: "5. Sharing",
    paragraphs: [
      "Where necessary and legally permitted, information may be shared with banks, NBFCs, HFCs, insurance companies, insurance intermediaries, AMCs, mutual fund platforms, investment product providers, credit information/assessment service providers where applicable, KYC/verification providers, technology/CRM/communication providers, professional service providers and government, regulatory or law-enforcement authorities where legally required.",
    ],
  },
  {
    heading: "6. Third-Party Service Providers",
    paragraphs: [
      "We may use service providers for hosting, CRM, communication, analytics, document management, security, customer support, lead management and other business functions.",
    ],
  },
  {
    heading: "7. Financial and Confidential Information",
    paragraphs: [
      "Users should only submit information necessary for the requested service. Do not submit passwords, PINs, OTPs, CVV numbers or internet banking credentials through ordinary Website forms. Aarthvaahini will not require these confidential authentication credentials through an ordinary enquiry form.",
    ],
  },
  {
    heading: "8. Data Security",
    paragraphs: [
      "We take reasonable technical and organisational measures designed to protect personal information from unauthorised access, loss, misuse, alteration or disclosure. No internet-based transmission or storage system can be guaranteed completely secure.",
    ],
  },
  {
    heading: "9. Data Retention",
    paragraphs: [
      "We may retain information for as long as reasonably necessary for providing services, maintaining records, legal/regulatory requirements, dispute resolution, fraud prevention, accounting/audit and other legitimate business purposes.",
    ],
  },
  {
    heading: "10. Cookies",
    paragraphs: [
      "The Website may use cookies and similar technologies for functionality, preferences, analytics, security, performance and marketing/advertising where applicable. Users may manage cookie settings through their browser or mechanisms provided on the Website.",
    ],
  },
  {
    heading: "11. Third-Party Websites",
    paragraphs: [
      "We are not responsible for the privacy practices or content of third-party websites linked from our Website.",
    ],
  },
  {
    heading: "12. Marketing Communications",
    paragraphs: [
      "Where permitted by applicable law and subject to consent requirements, we may communicate regarding relevant products, services and offers. Users may opt out of promotional communications using the provided mechanism or by contacting us.",
    ],
  },
  {
    heading: "13. User Requests and Rights",
    paragraphs: [
      "Subject to applicable law, users may contact us regarding access, correction, withdrawal of consent where applicable, deletion/erasure where applicable and grievances concerning processing of personal information. We may verify identity before processing a request.",
    ],
  },
  {
    heading: "14. Children",
    paragraphs: [
      "The Website is not intended to knowingly collect personal information from children except where permitted by applicable law and with appropriate consent.",
    ],
  },
  {
    heading: "15. Changes",
    paragraphs: [
      "We may update this Privacy Policy from time to time. The latest version will be published with the revised date.",
    ],
  },
  {
    heading: "16. Contact",
    paragraphs: [],
    bullets: [
      "Aarthvaahini Financial Services Pvt. Ltd.",
      "Registered Office: 2nd Floor, Shrinath Tower, Opposite C3 Hospital, Behind C21 Mall, Vijay Nagar, Indore, MP 452010",
      "Privacy/Grievance Email: care@aarthvaahini.com",
      "Phone: +91 98276 79993",
      "Website: www.aarthvaahini.com",
    ],
  },
];

function PrivacyPolicyPage() {
  return (
    <LegalPage
      tag="Legal"
      title="Privacy Policy"
      subtitle="Aarthvaahini Financial Services Pvt. Ltd. ("Aarthvaahini", "we", "us" or "our") respects your privacy and is committed to protecting personal information provided through www.aarthvaahini.com ("Website"), our forms, communication channels and related services."
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
