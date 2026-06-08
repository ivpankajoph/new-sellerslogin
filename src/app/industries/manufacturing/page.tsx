import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = { title: "Manufacturing | Sellers Login", description: "Commerce tools for manufacturing catalogs, dealers, and inventory workflows." };

const page: OptionPageContent = {
  label: "Manufacturing",
  icon: "building",
  eyebrow: "Industry",
  title: "Commerce tools for Manufacturing",
  description: "Manufacturing teams can manage dealer catalogs, bulk orders, inventory visibility, and account-led selling with Sellers Login.",
  highlights: ["Dealer portals", "Bulk catalog controls", "Production-aware inventory"],
  stats: [{ value: "B2B", label: "ready" }, { value: "Deep", label: "catalog depth" }, { value: "Live", label: "inventory view" }],
  outcomes: ["Industry-fit setup", "Flexible catalogs", "Scalable fulfillment"],
};

export default function Page() { return <OptionPage page={page} />; }
