import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = { title: "Food | Sellers Login", description: "Food commerce tools for fresh catalogs, local delivery, and repeat orders." };

const page: OptionPageContent = {
  label: "Food",
  icon: "store",
  eyebrow: "Industry",
  title: "Commerce tools for Food",
  description: "Food businesses can manage fresh catalogs, update availability quickly, configure delivery options, and encourage repeat orders.",
  highlights: ["Fresh catalog controls", "Local delivery options", "Repeat order journeys"],
  stats: [{ value: "Same", label: "day ready" }, { value: "Live", label: "stock status" }, { value: "2x", label: "repeat orders" }],
  outcomes: ["Industry-fit setup", "Fresh inventory control", "Scalable fulfillment"],
};

export default function Page() { return <OptionPage page={page} />; }
