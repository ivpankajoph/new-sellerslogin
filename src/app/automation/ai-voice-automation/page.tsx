import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = {
  title: "AI Voice Automation | SellersLogin",
  description: "Automate voice-led customer support, callbacks, and lead handling with SellersLogin.",
};

const page: OptionPageContent = {
  label: "AI Voice Automation",
  icon: "bot",
  eyebrow: "Automation",
  title: "Automate growth with AI Voice Automation",
  description: "AI Voice Automation helps teams answer common questions, capture leads, and route urgent requests without waiting for manual follow-up.",
  highlights: ["Voice-led customer assistance", "Lead capture and callbacks", "Support routing"],
  stats: [{ value: "24/7", label: "voice coverage" }, { value: "3x", label: "faster response" }, { value: "0", label: "missed leads" }],
  outcomes: ["Always-on workflows", "Faster callbacks", "Better lead capture"],
};

export default function Page() {
  return <OptionPage page={page} />;
}
