import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = { title: "Fashion | Sellers Login", description: "Launch fashion storefronts with variants, collections, and mobile-first shopping." };

const page: OptionPageContent = {
  label: "Fashion",
  icon: "shopping-bag",
  eyebrow: "Industry",
  title: "Commerce tools for Fashion",
  description: "Fashion brands can launch collections, manage variants, promote drops, and deliver mobile-first shopping experiences.",
  highlights: ["Variant-rich catalogs", "Launch collections", "Style-led storefronts"],
  stats: [{ value: "100%", label: "mobile ready" }, { value: "Many", label: "variants" }, { value: "Fast", label: "drops" }],
  outcomes: ["Industry-fit setup", "Flexible catalogs", "Scalable fulfillment"],
};

export default function Page() { return <OptionPage page={page} />; }
