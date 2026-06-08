import type { Metadata } from "next";
import { FooterLinkedPage, type FooterLinkedPageContent } from "@/components/landing/FooterLinkedPage";

export const metadata: Metadata = {
  title: "Contact Us | Sellers Login",
  description: "Contact Sellers Login for seller onboarding, platform support, order help, partnerships, and business queries.",
};

const page: FooterLinkedPageContent = {
  eyebrow: "Support",
  title: "Contact Us",
  description:
    "Reach Sellers Login for onboarding, product questions, order support, partnerships, billing, or operational help. Include your order ID, registered email, or business name so the team can route your request faster.",
  details: [
    { label: "Email", value: "info@sellerslogin.com" },
    { label: "Phone", value: "Support is coordinated through email and registered account channels." },
    { label: "Address", value: "1405, Gaur City 2, Noida Extension, 10th Avenue, Ghaziabad 201009, UP, India" },
  ],
  cards: [
    {
      title: "Seller onboarding",
      body: "For new seller accounts, store setup, dashboard access, or registration support, share your business name and preferred contact details.",
      items: [
        "Marketplace and ecommerce sellers can request a guided setup.",
        "Teams can ask about catalog, inventory, payment, and shipping workflow readiness.",
        "Existing sellers should include their registered account email for faster verification.",
      ],
    },
    {
      title: "Order support",
      body: "For shipping, return, refund, or delivery questions, support can check the order route after receiving basic order information.",
      items: [
        "Share order ID, registered phone number, and a short description of the issue.",
        "Attach photos for damaged, wrong, or missing items where applicable.",
        "Avoid sharing sensitive payment credentials or passwords in support messages.",
      ],
    },
    {
      title: "Business enquiries",
      body: "Brands, distributors, agencies, and integration partners can contact Sellers Login for product demos and commercial discussions.",
      items: [
        "Include business category, team size, and current ecommerce stack.",
        "Mention whether you need B2B, B2C, food, automation, or industry-specific workflows.",
        "Partnership requests are reviewed by the business team before next steps.",
      ],
    },
    {
      title: "Response handling",
      body: "Support responses depend on request type, account verification, and seller or logistics partner availability.",
      items: [
        "Operational issues are prioritized by order status and customer impact.",
        "Legal, grievance, and billing issues may require additional verification.",
        "For urgent delivery exceptions, include the shipment tracking ID if available.",
      ],
    },
  ],
  steps: [
    "Send the request with account, order, or business details.",
    "Support verifies ownership and classifies the issue.",
    "The relevant seller, logistics, billing, or onboarding team is looped in.",
    "You receive the next action or resolution update through the registered channel.",
  ],
  cta: { label: "Email Sellers Login", href: "mailto:info@sellerslogin.com" },
};

export default function ContactPage() {
  return <FooterLinkedPage page={page} />;
}
