import type { Metadata } from "next";
import { FooterLinkedPage, type FooterLinkedPageContent } from "@/components/landing/FooterLinkedPage";

export const metadata: Metadata = {
  title: "Warranty Policy | Sellers Login",
  description: "Warranty coverage, claim requirements, exclusions, and service coordination for Sellers Login orders.",
};

const page: FooterLinkedPageContent = {
  eyebrow: "Policy",
  title: "Warranty Policy",
  description:
    "Warranty coverage is provided by the relevant seller, manufacturer, brand, or service partner. Sellers Login helps route warranty queries and maintain order records, but the final warranty decision depends on the applicable product terms.",
  updated: "June 8, 2026",
  cards: [
    {
      title: "Coverage",
      body: "Warranty generally applies to manufacturing defects or service issues covered by the seller or manufacturer warranty terms.",
      items: [
        "Coverage period, repair process, replacement rights, and service location vary by product.",
        "A valid invoice, order ID, and product serial number may be required.",
        "Software, subscription, and digital services may follow separate service-level commitments.",
      ],
    },
    {
      title: "Claim requirements",
      body: "Customers should keep order documents and report issues with enough detail for support and seller teams to verify the claim.",
      items: [
        "Share product photos, error details, serial numbers, and purchase proof when requested.",
        "Do not open, modify, or repair products through unauthorized service centers before claim review.",
        "For onsite or carry-in service, the brand or seller may assign the nearest service partner.",
      ],
    },
    {
      title: "Exclusions",
      body: "Warranty does not usually cover damage caused by misuse, accidents, unauthorized modifications, or normal wear and tear.",
      items: [
        "Consumables, accessories, packaging, and cosmetic damage may be excluded.",
        "Liquid damage, electrical surge, breakage, and tampering are commonly rejected.",
        "Expired warranty claims may still be serviced on a paid basis if the seller or brand supports it.",
      ],
    },
    {
      title: "Resolution",
      body: "Depending on the warranty terms, the resolution may be repair, replacement, service credit, or seller-approved refund.",
      items: [
        "Turnaround time depends on parts availability and service partner capacity.",
        "Replacement units may be new, equivalent, or refurbished where the warranty allows.",
        "Escalations can be raised through the grievance route if the service response is delayed.",
      ],
    },
  ],
  steps: [
    "Submit warranty request with order ID and product issue details.",
    "Support validates documents and routes the claim to the seller or service partner.",
    "Service team inspects the product and confirms eligibility.",
    "Repair, replacement, or another approved resolution is completed.",
  ],
  cta: { label: "Raise a support request", href: "/contact" },
};

export default function WarrantyPage() {
  return <FooterLinkedPage page={page} />;
}
