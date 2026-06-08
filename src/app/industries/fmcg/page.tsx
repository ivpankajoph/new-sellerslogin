import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = { title: "FMCG | Sellers Login", description: "FMCG distributor ordering, regional inventory, and fast replenishment workflows." };

const page: OptionPageContent = {
  label: "FMCG",
  icon: "package",
  eyebrow: "Industry",
  title: "Commerce tools for FMCG",
  description: "FMCG teams can support distributor ordering, regional stock views, fast-moving catalogs, and repeat replenishment.",
  highlights: ["Distributor ordering", "Fast-moving inventory", "Regional sales views"],
  stats: [{ value: "Fast", label: "reordering" }, { value: "Live", label: "regional stock" }, { value: "B2B", label: "ready" }],
  outcomes: ["Industry-fit setup", "Flexible catalogs", "Scalable fulfillment"],
};

export default function Page() { return <OptionPage page={page} />; }
