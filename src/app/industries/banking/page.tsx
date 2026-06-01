import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = { title: "Banking | SellersLogin", description: "Banking campaign and lead workflows for digital customer journeys." };

const page: OptionPageContent = {
  label: "Banking",
  icon: "credit-card",
  eyebrow: "Industry",
  title: "Commerce tools for Banking",
  description: "Banking teams can launch secure campaign pages, qualify leads, and guide customer journeys through clear digital workflows.",
  highlights: ["Campaign landing pages", "Lead qualification", "Customer journey automation"],
  stats: [{ value: "Secure", label: "funnels" }, { value: "24/7", label: "lead routing" }, { value: "Live", label: "performance" }],
  outcomes: ["Industry-fit setup", "Clear lead flow", "Better decisions"],
};

export default function Page() { return <OptionPage page={page} />; }
