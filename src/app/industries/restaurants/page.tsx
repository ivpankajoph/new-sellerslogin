import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = { title: "Restaurants | SellersLogin", description: "Digital restaurant workflows for menus, ordering, and promotions." };

const page: OptionPageContent = {
  label: "Restaurants",
  icon: "store",
  eyebrow: "Industry",
  title: "Commerce tools for Restaurants",
  description: "Restaurants can manage digital menus, ordering flows, local promotions, and customer messages from one commerce workspace.",
  highlights: ["Digital menus", "Table and delivery workflows", "Promotion campaigns"],
  stats: [{ value: "15m", label: "menu updates" }, { value: "24/7", label: "ordering" }, { value: "1", label: "ops screen" }],
  outcomes: ["Industry-fit setup", "Flexible menus", "Faster service"],
};

export default function Page() { return <OptionPage page={page} />; }
