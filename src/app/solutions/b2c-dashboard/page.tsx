import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = {
  title: "B2c Dashboard | SellersLogin",
  description: "B2c dashboard tools for merchandising, customers, promotions, and store growth.",
};

const page: OptionPageContent = {
  label: "B2c Dashboard",
  icon: "shopping-bag",
  eyebrow: "Solution",
  title: "A focused workspace for B2c Dashboard",
  description: "B2c Dashboard helps direct-to-consumer teams understand shoppers, move campaigns faster, and manage store performance.",
  highlights: ["Customer behavior views", "Merchandising controls", "Promotion and order insights"],
  stats: [{ value: "2x", label: "campaign speed" }, { value: "Live", label: "store insights" }, { value: "100%", label: "mobile commerce" }],
  outcomes: ["Sharper merchandising", "Unified customer data", "Faster promotion cycles"],
};

export default function Page() {
  return <OptionPage page={page} />;
}
