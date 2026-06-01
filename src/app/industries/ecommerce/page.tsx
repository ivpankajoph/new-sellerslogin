import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = { title: "Ecommerce | SellersLogin", description: "Ecommerce storefront, order, analytics, and automation tools." };

const page: OptionPageContent = {
  label: "Ecommerce",
  icon: "cart",
  eyebrow: "Industry",
  title: "Commerce tools for Ecommerce",
  description: "Ecommerce teams can build storefronts, manage orders, track performance, automate growth, and scale operations from SellersLogin.",
  highlights: ["Storefront builder", "Order management", "Growth automation"],
  stats: [{ value: "50K+", label: "stores" }, { value: "$100M+", label: "sales" }, { value: "99.9%", label: "uptime" }],
  outcomes: ["Industry-fit setup", "Flexible catalogs", "Scalable fulfillment"],
};

export default function Page() { return <OptionPage page={page} />; }
