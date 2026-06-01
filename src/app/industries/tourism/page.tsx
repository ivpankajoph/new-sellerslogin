import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = { title: "Tourism | SellersLogin", description: "Tourism pages and inquiry workflows for travel packages and campaigns." };

const page: OptionPageContent = {
  label: "Tourism",
  icon: "globe",
  eyebrow: "Industry",
  title: "Commerce tools for Tourism",
  description: "Tourism businesses can publish packages, capture travel inquiries, promote destinations, and manage follow-up workflows.",
  highlights: ["Package pages", "Inquiry automation", "Multi-location promotion"],
  stats: [{ value: "150+", label: "markets" }, { value: "24/7", label: "trip inquiries" }, { value: "Fast", label: "campaigns" }],
  outcomes: ["Industry-fit setup", "Flexible offers", "Better inquiry flow"],
};

export default function Page() { return <OptionPage page={page} />; }
