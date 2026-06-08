import type { Metadata } from "next";
import { FooterLinkedPage, type FooterLinkedPageContent } from "@/components/landing/FooterLinkedPage";

export const metadata: Metadata = {
  title: "Return and Refund | Sellers Login",
  description: "Return eligibility, refund timelines, replacement handling, and support process for Sellers Login orders.",
};

const page: FooterLinkedPageContent = {
  eyebrow: "Policy",
  title: "Return and Refund",
  description:
    "Returns and refunds are handled according to the seller policy, product category, order condition, and applicable law. Sellers Login helps document the request, coordinate seller review, and keep customers informed.",
  updated: "June 8, 2026",
  cards: [
    {
      title: "Return eligibility",
      body: "A return request is reviewed against the product condition, delivered item, invoice, and seller-specific return window.",
      items: [
        "Products should be unused, undamaged, and returned with original packaging where required.",
        "Perishable, custom, opened, or hygiene-sensitive products may not be eligible unless defective or incorrectly supplied.",
        "Customers may need to share photos, invoices, serial numbers, or delivery proof during review.",
      ],
    },
    {
      title: "Refund timeline",
      body: "Refunds begin after seller approval and, where required, successful pickup and quality check of the returned item.",
      items: [
        "Payment gateway, bank, and wallet processing times can affect when the amount is visible.",
        "Refunds are usually issued to the original payment method unless the seller confirms another mode.",
        "Partial refunds may apply for partial shipments, accepted damage claims, or approved adjustments.",
      ],
    },
    {
      title: "Replacement handling",
      body: "For damaged, defective, or wrong items, a replacement may be offered instead of a refund when stock is available.",
      items: [
        "Replacement dispatch depends on seller approval and inventory availability.",
        "The customer may need to return the original product before replacement dispatch.",
        "If replacement stock is not available, the seller may approve a refund.",
      ],
    },
    {
      title: "Non-eligible cases",
      body: "Some cases cannot be approved because the product cannot be verified or the request falls outside the accepted policy.",
      items: [
        "Damage caused after delivery, missing original accessories, or tampered labels may be rejected.",
        "Requests submitted after the return window may require seller discretion.",
        "Orders fulfilled by third-party sellers may follow that seller's posted policy.",
      ],
    },
  ],
  steps: [
    "Raise a request with order ID, reason, and supporting photos if needed.",
    "Seller or support team reviews eligibility and next action.",
    "Pickup, replacement, or refund is initiated after approval.",
    "Final refund or replacement update is shared once verification is complete.",
  ],
  cta: { label: "Contact support", href: "/contact" },
};

export default function ReturnsPage() {
  return <FooterLinkedPage page={page} />;
}
