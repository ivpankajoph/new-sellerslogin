import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = { title: "Saas | Sellers Login", description: "Saas growth workflows for self-serve funnels, accounts, and activation." };

const page: OptionPageContent = {
  label: "Saas",
  icon: "rocket",
  eyebrow: "Industry",
  title: "Commerce tools for Saas",
  description: "Saas teams can build self-serve funnels, track trial activity, guide account journeys, and connect growth workflows.",
  highlights: ["Self-serve funnels", "Usage-led messaging", "Account dashboards"],
  stats: [{ value: "PLG", label: "ready" }, { value: "Live", label: "trial signals" }, { value: "3x", label: "activation" }],
  outcomes: ["Industry-fit setup", "Flexible funnels", "Scalable growth"],
};

export default function Page() { return <OptionPage page={page} />; }
