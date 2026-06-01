import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = {
  title: "Payment Integration | SellersLogin",
  description: "Connect payment gateways and localized checkout methods with SellersLogin.",
};

const page: OptionPageContent = {
  label: "Payment Integration",
  icon: "credit-card",
  eyebrow: "Feature",
  title: "Run smarter with Payment Integration",
  description: "Payment Integration helps stores accept more checkout methods while keeping payment operations simple, secure, and conversion-focused.",
  highlights: ["Multiple gateway support", "Secure checkout flows", "Localized payment methods"],
  stats: [{ value: "80+", label: "gateways" }, { value: "99.9%", label: "uptime" }, { value: "150+", label: "countries" }],
  outcomes: ["Smoother checkout", "More payment choice", "Reliable transactions"],
};

export default function Page() {
  return <OptionPage page={page} />;
}
