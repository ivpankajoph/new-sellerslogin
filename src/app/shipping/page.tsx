import type { Metadata } from "next";
import { FooterLinkedPage, type FooterLinkedPageContent } from "@/components/landing/FooterLinkedPage";

export const metadata: Metadata = {
  title: "Shipping and Delivery | Sellers Login",
  description: "Shipping and delivery timelines, tracking, delivery attempts, and support information for Sellers Login orders.",
};

const page: FooterLinkedPageContent = {
  eyebrow: "Policy",
  title: "Shipping and Delivery",
  description:
    "Sellers Login helps sellers coordinate order fulfillment, delivery updates, and customer communication from one workspace. The exact delivery promise depends on the seller, product availability, destination, and shipping partner assigned to the order.",
  updated: "June 8, 2026",
  cards: [
    {
      title: "Order processing",
      body: "Orders are processed after seller confirmation, stock allocation, and payment verification where applicable.",
      items: [
        "Most ready-stock orders move to dispatch preparation within 1 to 2 business days.",
        "Custom, bulk, or made-to-order items may require additional confirmation before dispatch.",
        "Customers receive tracking details once the shipment is handed to the delivery partner.",
      ],
    },
    {
      title: "Delivery timelines",
      body: "Delivery dates are estimates and may change because of courier capacity, public holidays, address accuracy, or local restrictions.",
      items: [
        "Metro and nearby locations are usually faster than remote or service-limited pin codes.",
        "Failed delivery attempts may require customer confirmation before another attempt is scheduled.",
        "Shipping fees, if any, are shown by the seller or checkout flow before order confirmation.",
      ],
    },
    {
      title: "Tracking and notifications",
      body: "Sellers Login supports status updates so customers and seller teams can follow order movement clearly.",
      items: [
        "Common statuses include confirmed, packed, dispatched, out for delivery, delivered, and returned.",
        "If tracking is delayed, please allow the courier system time to sync after pickup.",
        "For incorrect phone numbers or addresses, contact support before the shipment reaches the final hub.",
      ],
    },
    {
      title: "Delivery support",
      body: "If a shipment is delayed, damaged, or marked delivered but not received, contact support with the order ID and registered phone or email.",
      items: [
        "We coordinate with the seller and logistics partner to check shipment status.",
        "Proof of delivery may be requested from the courier where available.",
        "Replacement or refund decisions follow the seller policy and applicable return terms.",
      ],
    },
  ],
  steps: [
    "Seller confirms the order and prepares the package.",
    "Shipping partner pickup is assigned and tracking is generated.",
    "Customer receives delivery updates through the available contact channels.",
    "Support helps resolve exceptions such as delays, failed attempts, or address issues.",
  ],
  cta: { label: "Track your order", href: "/track-order" },
};

export default function ShippingPage() {
  return <FooterLinkedPage page={page} />;
}
