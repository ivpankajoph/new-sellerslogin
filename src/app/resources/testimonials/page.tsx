import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = {
  title: "Testimonials | Sellers Login",
  description: "Read customer stories and growth examples from Sellers Login users.",
};

const page: OptionPageContent = {
  label: "Testimonials",
  icon: "sparkles",
  eyebrow: "Resource",
  title: "Learn from Testimonials",
  description: "Testimonials collects customer stories, growth examples, and migration wins from teams building with Sellers Login.",
  highlights: ["Customer stories", "Growth benchmarks", "Migration examples"],
  stats: [{ value: "40+", label: "markets" }, { value: "5-star", label: "feedback" }, { value: "24×7", label: "support" }],
  outcomes: ["Clear guidance", "Real examples", "Better decisions"],
};

export default function Page() {
  return <OptionPage page={page} />;
}
