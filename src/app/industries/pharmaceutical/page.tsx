import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = { title: "Pharmaceutical | Sellers Login", description: "Pharmaceutical commerce tools for distributor catalogs and stock visibility." };

const page: OptionPageContent = {
  label: "Pharmaceutical",
  icon: "zap",
  eyebrow: "Industry",
  title: "Commerce tools for Pharmaceutical",
  description: "Pharmaceutical teams can support distributor ordering, catalog controls, batch-aware visibility, and reliable stock workflows.",
  highlights: ["Distributor catalogs", "Batch-aware stock visibility", "Compliance-friendly workflows"],
  stats: [{ value: "Live", label: "stock checks" }, { value: "B2B", label: "ordering" }, { value: "99%", label: "accuracy goal" }],
  outcomes: ["Industry-fit setup", "Flexible catalogs", "Scalable fulfillment"],
};

export default function Page() { return <OptionPage page={page} />; }
