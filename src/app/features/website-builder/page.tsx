import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = {
  title: "Website Builder | SellersLogin",
  description: "Create responsive commerce pages with the SellersLogin website builder.",
};

const page: OptionPageContent = {
  label: "Website Builder",
  icon: "layout",
  eyebrow: "Feature",
  title: "Run smarter with Website Builder",
  description: "Website Builder helps your team create polished storefront pages, publish campaigns quickly, and keep every page connected to your commerce operations.",
  highlights: ["AI-assisted page creation", "Responsive storefront sections", "Fast publishing workflow"],
  stats: [{ value: "60s", label: "first draft" }, { value: "40+", label: "store sections" }, { value: "100%", label: "mobile ready" }],
  outcomes: ["Faster launches", "Cleaner operations", "Less manual work"],
};

export default function Page() {
  return <OptionPage page={page} />;
}
