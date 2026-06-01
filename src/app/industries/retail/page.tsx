import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = { title: "Retail | SellersLogin", description: "Retail commerce workflows for catalogs, local inventory, and loyalty." };

const page: OptionPageContent = {
  label: "Retail",
  icon: "store",
  eyebrow: "Industry",
  title: "Commerce tools for Retail",
  description: "Retail teams can connect online catalogs, local inventory views, customer loyalty, and promotion workflows.",
  highlights: ["Online and offline catalog views", "Local inventory", "Customer loyalty workflows"],
  stats: [{ value: "Omni", label: "channel ready" }, { value: "Live", label: "stock view" }, { value: "2x", label: "repeat reach" }],
  outcomes: ["Industry-fit setup", "Flexible catalogs", "Scalable fulfillment"],
};

export default function Page() { return <OptionPage page={page} />; }
