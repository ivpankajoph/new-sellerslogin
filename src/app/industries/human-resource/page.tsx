import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = { title: "Human Resource | SellersLogin", description: "Human resource pages and workflows for hiring and candidate communication." };

const page: OptionPageContent = {
  label: "Human Resource",
  icon: "user",
  eyebrow: "Industry",
  title: "Commerce tools for Human Resource",
  description: "Human Resource teams can publish career pages, capture candidates, automate follow-up, and coordinate hiring workflows.",
  highlights: ["Career landing pages", "Candidate workflows", "Team communication automation"],
  stats: [{ value: "24/7", label: "candidate intake" }, { value: "1", label: "hiring view" }, { value: "3x", label: "follow-up" }],
  outcomes: ["Industry-fit setup", "Clear candidate flow", "Better decisions"],
};

export default function Page() { return <OptionPage page={page} />; }
