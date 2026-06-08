import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = { title: "Real estate | Sellers Login", description: "Lead capture and digital workflows for real estate teams." };

const page: OptionPageContent = {
  label: "Real estate",
  icon: "store",
  eyebrow: "Industry",
  title: "Commerce tools for Real estate",
  description: "Real estate teams can publish project pages, capture inquiries, route leads, and keep broker activity visible in Sellers Login.",
  highlights: ["Lead capture pages", "Property inquiry workflows", "Broker activity visibility"],
  stats: [{ value: "24/7", label: "lead capture" }, { value: "3x", label: "follow-up" }, { value: "1", label: "pipeline view" }],
  outcomes: ["Industry-fit setup", "Faster lead routing", "Better follow-up"],
};

export default function Page() { return <OptionPage page={page} />; }
