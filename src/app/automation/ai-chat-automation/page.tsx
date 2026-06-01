import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = {
  title: "AI Chat Automation | SellersLogin",
  description: "Use AI chat automation for product discovery, customer questions, and handoff workflows.",
};

const page: OptionPageContent = {
  label: "AI Chat Automation",
  icon: "message",
  eyebrow: "Automation",
  title: "Automate growth with AI Chat Automation",
  description: "AI Chat Automation gives shoppers fast answers, guides product discovery, and keeps support teams focused on the conversations that need a human.",
  highlights: ["Instant store answers", "Product discovery prompts", "Human handoff support"],
  stats: [{ value: "80%", label: "queries deflected" }, { value: "24/7", label: "chat support" }, { value: "2m", label: "setup path" }],
  outcomes: ["Always-on workflows", "Personalized journeys", "Quicker response times"],
};

export default function Page() {
  return <OptionPage page={page} />;
}
