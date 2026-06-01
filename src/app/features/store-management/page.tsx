import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = {
  title: "Store Management | SellersLogin",
  description: "Manage orders, customers, and storefront operations from one SellersLogin workspace.",
};

const page: OptionPageContent = {
  label: "Store Management",
  icon: "shopping-bag",
  eyebrow: "Feature",
  title: "Run smarter with Store Management",
  description: "Store Management gives operators a clear hub for daily orders, customer activity, team updates, and storefront controls.",
  highlights: ["Order status tracking", "Customer timelines", "Team-ready admin tools"],
  stats: [{ value: "1", label: "store hub" }, { value: "24/7", label: "order visibility" }, { value: "5x", label: "faster updates" }],
  outcomes: ["Centralized work", "Cleaner order flow", "Better customer context"],
};

export default function Page() {
  return <OptionPage page={page} />;
}
