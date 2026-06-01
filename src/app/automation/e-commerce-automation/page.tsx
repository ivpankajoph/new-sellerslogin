import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = {
  title: "E-commerce Automation | SellersLogin",
  description: "Automate orders, catalog updates, customer events, and store operations.",
};

const page: OptionPageContent = {
  label: "E-commerce Automation",
  icon: "store",
  eyebrow: "Automation",
  title: "Automate growth with E-commerce Automation",
  description: "E-commerce Automation connects catalog, orders, fulfillment, and customer events so store teams can reduce manual work.",
  highlights: ["Order and fulfillment triggers", "Catalog sync routines", "Customer event workflows"],
  stats: [{ value: "40%", label: "less admin" }, { value: "100+", label: "triggers" }, { value: "Live", label: "sync status" }],
  outcomes: ["Always-on workflows", "Cleaner operations", "Less manual work"],
};

export default function Page() {
  return <OptionPage page={page} />;
}
