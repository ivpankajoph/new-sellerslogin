import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = {
  title: "B2b Dashboard | SellersLogin",
  description: "B2b commerce dashboards for accounts, pricing, bulk orders, and sales teams.",
};

const page: OptionPageContent = {
  label: "B2b Dashboard",
  icon: "layout",
  eyebrow: "Solution",
  title: "A focused workspace for B2b Dashboard",
  description: "B2b Dashboard gives wholesale and account-led teams the workflows they need for pricing, bulk ordering, and pipeline visibility.",
  highlights: ["Account-level pricing", "Bulk order workflows", "Sales team visibility"],
  stats: [{ value: "3x", label: "faster quotes" }, { value: "50K+", label: "accounts ready" }, { value: "24/7", label: "pipeline view" }],
  outcomes: ["Role-ready dashboards", "Unified account data", "Practical growth controls"],
};

export default function Page() {
  return <OptionPage page={page} />;
}
