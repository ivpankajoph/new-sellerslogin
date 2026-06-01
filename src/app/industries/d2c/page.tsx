import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = { title: "D2C | SellersLogin", description: "Direct-to-consumer commerce tools for owned data, retention, and growth." };

const page: OptionPageContent = {
  label: "D2C",
  icon: "package",
  eyebrow: "Industry",
  title: "Commerce tools for D2C",
  description: "D2C teams can own customer data, build retention journeys, manage subscriptions, and improve repeat purchase workflows.",
  highlights: ["Direct customer ownership", "Subscription-ready flows", "Retention campaigns"],
  stats: [{ value: "1st", label: "party data" }, { value: "18%", label: "retention lift" }, { value: "Live", label: "cohorts" }],
  outcomes: ["Industry-fit setup", "Flexible catalogs", "Better retention"],
};

export default function Page() { return <OptionPage page={page} />; }
