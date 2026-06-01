import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = {
  title: "Analytics Dashboard | SellersLogin",
  description: "View revenue, traffic, conversion, and product insights in SellersLogin.",
};

const page: OptionPageContent = {
  label: "Analytics Dashboard",
  icon: "bar-chart",
  eyebrow: "Feature",
  title: "Run smarter with Analytics Dashboard",
  description: "Analytics Dashboard turns store activity into clear views for revenue, orders, traffic, products, and customer growth.",
  highlights: ["Revenue snapshots", "Traffic and conversion insights", "Product performance views"],
  stats: [{ value: "Live", label: "sales data" }, { value: "25+", label: "key metrics" }, { value: "1", label: "dashboard" }],
  outcomes: ["Clearer decisions", "Faster reporting", "Better growth focus"],
};

export default function Page() {
  return <OptionPage page={page} />;
}
