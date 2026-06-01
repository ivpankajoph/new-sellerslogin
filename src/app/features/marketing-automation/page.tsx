import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = {
  title: "Marketing Automation | SellersLogin",
  description: "Launch segmented campaigns, cart recovery, and customer journeys in SellersLogin.",
};

const page: OptionPageContent = {
  label: "Marketing Automation",
  icon: "megaphone",
  eyebrow: "Feature",
  title: "Run smarter with Marketing Automation",
  description: "Marketing Automation connects customer behavior with timely campaigns so your store can recover carts, build loyalty, and grow repeat sales.",
  highlights: ["Audience segmentation", "Abandoned cart flows", "Campaign performance tracking"],
  stats: [{ value: "18%", label: "repeat lift" }, { value: "12+", label: "campaign flows" }, { value: "0", label: "manual exports" }],
  outcomes: ["Always-on campaigns", "Better customer timing", "Higher repeat sales"],
};

export default function Page() {
  return <OptionPage page={page} />;
}
