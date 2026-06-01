import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = {
  title: "Email Automation | SellersLogin",
  description: "Build lifecycle email flows, cart recovery, and win-back campaigns in SellersLogin.",
};

const page: OptionPageContent = {
  label: "Email Automation",
  icon: "megaphone",
  eyebrow: "Automation",
  title: "Automate growth with Email Automation",
  description: "Email Automation turns customer events into targeted messages for onboarding, cart recovery, repeat purchase, and win-back campaigns.",
  highlights: ["Lifecycle campaigns", "Personalized product nudges", "Win-back sequences"],
  stats: [{ value: "12+", label: "email flows" }, { value: "18%", label: "sales lift" }, { value: "Auto", label: "segments" }],
  outcomes: ["Always-on workflows", "Smarter retention", "Higher repeat sales"],
};

export default function Page() {
  return <OptionPage page={page} />;
}
