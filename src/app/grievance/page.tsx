import type { Metadata } from "next";
import { FooterLinkedPage, type FooterLinkedPageContent } from "@/components/landing/FooterLinkedPage";

export const metadata: Metadata = {
  title: "Grievance Officer | Sellers Login",
  description: "Grievance escalation process, required details, and contact route for Sellers Login concerns.",
};

const page: FooterLinkedPageContent = {
  eyebrow: "Escalation",
  title: "Grievance Officer",
  description:
    "Use the grievance route when a support request needs formal review, escalation, or documented resolution. Please include enough information for account, order, or transaction verification.",
  updated: "June 8, 2026",
  details: [
    { label: "Email", value: "info@sellerslogin.com" },
    { label: "Address", value: "1405, Gaur City 2, Noida Extension, 10th Avenue, Ghaziabad 201009, UP, India" },
  ],
  cards: [
    {
      title: "When to escalate",
      body: "A grievance should be used after normal support has been contacted or when the concern involves a serious account, service, payment, privacy, or policy issue.",
      items: [
        "Unresolved order, refund, warranty, or delivery concerns.",
        "Account access, billing, seller onboarding, or service quality disputes.",
        "Privacy, content, or policy concerns requiring formal review.",
      ],
    },
    {
      title: "Information to include",
      body: "Clear evidence helps the grievance team verify ownership and route the issue to the responsible internal or partner team.",
      items: [
        "Full name, registered email or phone, and business name if applicable.",
        "Order ID, ticket ID, invoice number, or dashboard account reference.",
        "A concise issue summary with dates, screenshots, and prior communication if available.",
      ],
    },
    {
      title: "Review process",
      body: "Grievances are reviewed for completeness, ownership, issue category, and the right resolution path.",
      items: [
        "Additional verification may be requested before sensitive account details are discussed.",
        "Seller, courier, payment, or technical teams may be consulted where relevant.",
        "The final response is shared through the registered communication channel.",
      ],
    },
    {
      title: "Responsible use",
      body: "Formal escalation should not include abusive language, unrelated personal data, or credentials.",
      items: [
        "Do not send passwords, OTPs, card PINs, or unnecessary identity documents.",
        "Avoid duplicate escalations for the same issue unless new information is available.",
        "Keep the subject line specific so the request can be classified quickly.",
      ],
    },
  ],
  steps: [
    "Send a grievance email with account and issue details.",
    "The team verifies ownership and reviews prior support history.",
    "Relevant operational, seller, legal, or technical inputs are collected.",
    "A documented response or next action is shared through the registered channel.",
  ],
  cta: { label: "Email grievance team", href: "mailto:info@sellerslogin.com" },
};

export default function GrievancePage() {
  return <FooterLinkedPage page={page} />;
}
