import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = {
  title: "Blog | SellersLogin",
  description: "Commerce playbooks, automation ideas, and launch guidance from SellersLogin.",
};

const page: OptionPageContent = {
  label: "Blog",
  icon: "layout",
  eyebrow: "Resource",
  title: "Learn from Blog",
  description: "Blog gives teams practical commerce playbooks, automation ideas, launch checklists, and growth guidance.",
  highlights: ["Commerce playbooks", "Automation ideas", "Launch checklists"],
  stats: [{ value: "Weekly", label: "insights" }, { value: "Practical", label: "guides" }, { value: "Growth", label: "focus" }],
  outcomes: ["Clear guidance", "Practical examples", "Better decisions"],
};

export default function Page() {
  return <OptionPage page={page} />;
}
