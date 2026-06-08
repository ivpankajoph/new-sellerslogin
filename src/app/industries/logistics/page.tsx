import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = { title: "Logistics | Sellers Login", description: "Logistics workflows for tracking, updates, and partner dashboards." };

const page: OptionPageContent = {
  label: "Logistics",
  icon: "truck",
  eyebrow: "Industry",
  title: "Commerce tools for Logistics",
  description: "Logistics teams can provide shipment visibility, automate customer updates, and keep partner workflows organized.",
  highlights: ["Shipment visibility", "Customer update flows", "Partner dashboards"],
  stats: [{ value: "Live", label: "tracking" }, { value: "24/7", label: "updates" }, { value: "1", label: "ops view" }],
  outcomes: ["Industry-fit setup", "Clear tracking", "Scalable fulfillment"],
};

export default function Page() { return <OptionPage page={page} />; }
