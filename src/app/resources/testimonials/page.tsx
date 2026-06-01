import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = {
  title: "Testimonials | SellersLogin",
  description: "Read customer stories and growth examples from SellersLogin users.",
};

const page: OptionPageContent = {
  label: "Testimonials",
  icon: "sparkles",
  eyebrow: "Resource",
  title: "Learn from Testimonials",
  description: "Testimonials collects customer stories, growth examples, and migration wins from teams building with SellersLogin.",
  highlights: ["Customer stories", "Growth benchmarks", "Migration examples"],
  stats: [{ value: "50K+", label: "stores" }, { value: "5-star", label: "feedback" }, { value: "$100M+", label: "sales" }],
  outcomes: ["Clear guidance", "Real examples", "Better decisions"],
};

export default function Page() {
  return <OptionPage page={page} />;
}
