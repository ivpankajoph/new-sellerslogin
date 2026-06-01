import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = { title: "Healthcare | SellersLogin", description: "Healthcare digital workflows for inquiries, service pages, and appointments." };

const page: OptionPageContent = {
  label: "Healthcare",
  icon: "shield",
  eyebrow: "Industry",
  title: "Commerce tools for Healthcare",
  description: "Healthcare teams can publish service pages, capture inquiries securely, and route appointment-ready workflows.",
  highlights: ["Service pages", "Secure inquiry flows", "Appointment-ready automation"],
  stats: [{ value: "Secure", label: "forms" }, { value: "24/7", label: "intake" }, { value: "1", label: "care dashboard" }],
  outcomes: ["Industry-fit setup", "Clear patient journeys", "Better intake"],
};

export default function Page() { return <OptionPage page={page} />; }
