import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = {
  title: "Whatsapp Automation | SellersLogin",
  description: "Automate cart recovery, order updates, and support messages on WhatsApp.",
};

const page: OptionPageContent = {
  label: "Whatsapp Automation",
  icon: "smartphone",
  eyebrow: "Automation",
  title: "Automate growth with Whatsapp Automation",
  description: "Whatsapp Automation helps stores send timely order updates, recovery messages, and support prompts on a channel customers already use.",
  highlights: ["Cart recovery messages", "Order updates", "Customer support prompts"],
  stats: [{ value: "3x", label: "open rates" }, { value: "24/7", label: "flows" }, { value: "1", label: "shared inbox" }],
  outcomes: ["Always-on workflows", "Quicker response times", "Better customer reach"],
};

export default function Page() {
  return <OptionPage page={page} />;
}
