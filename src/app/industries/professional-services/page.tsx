import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = { title: "Professional Services | Sellers Login", description: "Professional services pages, consultation funnels, and client lifecycle workflows." };

const page: OptionPageContent = {
  label: "Professional Services",
  icon: "target",
  eyebrow: "Industry",
  title: "Commerce tools for Professional Services",
  description: "Professional Services teams can publish service pages, capture qualified leads, schedule consultations, and manage client lifecycle workflows.",
  highlights: ["Service pages", "Consultation funnels", "Client lifecycle tracking"],
  stats: [{ value: "24/7", label: "lead capture" }, { value: "1", label: "client hub" }, { value: "Live", label: "pipeline" }],
  outcomes: ["Industry-fit setup", "Better lead quality", "Scalable client work"],
};

export default function Page() { return <OptionPage page={page} />; }
