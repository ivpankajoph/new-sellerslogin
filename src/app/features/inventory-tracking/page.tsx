import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = {
  title: "Inventory Tracking | SellersLogin",
  description: "Track stock, alerts, and inventory movement with SellersLogin.",
};

const page: OptionPageContent = {
  label: "Inventory Tracking",
  icon: "package",
  eyebrow: "Feature",
  title: "Run smarter with Inventory Tracking",
  description: "Inventory Tracking keeps stock levels visible across your catalog so teams can prevent stockouts and make fulfillment decisions faster.",
  highlights: ["Live stock levels", "Low-stock alerts", "Multi-location inventory views"],
  stats: [{ value: "99%", label: "stock accuracy" }, { value: "3x", label: "fewer stockouts" }, { value: "All", label: "SKU scale" }],
  outcomes: ["Better stock control", "Faster replenishment", "Fewer missed orders"],
};

export default function Page() {
  return <OptionPage page={page} />;
}
