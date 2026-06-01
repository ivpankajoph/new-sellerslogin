import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = {
  title: "FAQ | SellersLogin",
  description: "Answers to common SellersLogin setup, pricing, support, and platform questions.",
};

const page: OptionPageContent = {
  label: "FAQ",
  icon: "message",
  eyebrow: "Resource",
  title: "Learn from FAQ",
  description: "FAQ gives buyers and store teams clear answers about setup, payments, integrations, support, and pricing.",
  highlights: ["Setup answers", "Platform details", "Support and pricing clarity"],
  stats: [{ value: "24/7", label: "answers" }, { value: "Clear", label: "next steps" }, { value: "Fast", label: "evaluation" }],
  outcomes: ["Clear guidance", "Faster evaluation", "Better decisions"],
};

export default function Page() {
  return <OptionPage page={page} />;
}
