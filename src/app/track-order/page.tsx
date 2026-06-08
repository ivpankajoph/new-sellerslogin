import type { Metadata } from "next";
import { FooterLinkedPage, type FooterLinkedPageContent } from "@/components/landing/FooterLinkedPage";

export const metadata: Metadata = {
  title: "Track Your Order | Sellers Login",
  description: "Track Sellers Login order status, delivery progress, and shipment support steps.",
};

const page: FooterLinkedPageContent = {
  eyebrow: "Support",
  title: "Track Your Order",
  description:
    "Order tracking helps customers and seller teams see where an order stands from confirmation to delivery. Use the order ID, registered contact details, or seller dashboard record when asking for a tracking update.",
  details: [


  ],
  cards: [
    {
      title: "What you need",
      body: "Tracking requests are easier to resolve when the support team can identify the exact order and shipment.",
      items: [
        "Order ID or invoice number from the confirmation message.",
        "Registered phone number, email address, or business account name.",
        "Shipment tracking ID if it was already shared by the seller or courier.",
      ],
    },
    {
      title: "Common statuses",
      body: "Each status reflects the latest known update from the seller workflow or delivery partner.",
      items: [
        "Confirmed means the seller has accepted the order.",
        "Packed or dispatched means the shipment is being prepared or handed to the courier.",
        "Out for delivery means the courier has assigned the package for final delivery.",
      ],
    },
    {
      title: "Delayed updates",
      body: "Tracking can lag while courier systems sync scans between pickup hubs, transit centers, and delivery branches.",
      items: [
        "Allow some time after pickup before expecting the first courier scan.",
        "Incorrect addresses or unreachable phone numbers can pause delivery.",
        "Remote locations may show fewer scan events before final delivery.",
      ],
    },
    {
      title: "When to contact support",
      body: "Contact support if the delivery estimate has passed, tracking has not moved, or the order status looks incorrect.",
      items: [
        "Share screenshots only when they help explain the issue.",
        "Never share OTPs, passwords, or full payment credentials.",
        "Support can coordinate with the seller or courier for verified updates.",
      ],
    },
  ],
  steps: [
    "Find your order ID or tracking ID from the confirmation message.",
    "Check the latest status in your seller/customer channel.",
    "Email support if the shipment is delayed, stuck, or marked incorrectly.",
    "Receive the verified update or next action from the support team.",
  ],
  cta: { label: "Contact Support", href: "/contact" },
};

export default function TrackOrderPage() {
  return <FooterLinkedPage page={page} />;
}
