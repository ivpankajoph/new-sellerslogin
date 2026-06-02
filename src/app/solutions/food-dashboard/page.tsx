import type { Metadata } from "next";
import { SolutionPage, type SolutionPageContent } from "@/components/landing/SolutionPage";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Food Dashboard | SellersLogin",
  description:
    "An all-in-one Food Dashboard for restaurants and cloud kitchens — billing, WhatsApp billing, restaurant & branch management, inventory, payments, delivery, analytics, website and SEO.",
};

const page: SolutionPageContent = {
  eyebrow: "Food & Restaurant Solution",
  eyebrowIcon: "store",
  titleBefore: "Run your entire ",
  titleHighlight: "restaurant",
  titleAfter: " from one dashboard",
  description:
    "The Food Dashboard brings billing, WhatsApp orders, branch & inventory management, payments, delivery, analytics, your own website and SEO together — so every outlet runs faster and every order earns more.",
  cardTitle: "Food Dashboard",
  cardIcon: "store",
  heroMetrics: [
    {
      label: "Today's Sales",
      value: "₹84,210",
      sub: "↑ +18% vs yesterday",
      subTone: "green",
      gradient: "from-purple-50 to-fuchsia-50",
    },
    {
      label: "Live Orders",
      value: "37",
      sub: "12 dine-in · 25 delivery",
      subTone: "muted",
      gradient: "from-orange-50 to-amber-50",
    },
  ],
  heroRows: [
    { icon: "message", label: "WhatsApp order #1042", tag: "Paid" },
    { icon: "truck", label: "Out for delivery #1039", tag: "Live" },
    { icon: "warehouse", label: "Low stock: Paneer", tag: "Alert" },
  ],
  featuresHeading: "One Food Dashboard, eleven powerful tools",
  featuresSubtitle:
    "From the first bill to your hundredth branch — every tool your food business needs, working together without the chaos of separate apps.",
  features: [
    {
      icon: "credit-card",
      title: "Billing",
      text: "Lightning-fast KOT & POS billing built for busy outlets — split bills, table-wise orders, taxes, discounts and printed or digital invoices in seconds.",
      image: images.featurePayment,
    },
    {
      icon: "message",
      title: "WhatsApp Billing",
      text: "Send bills, order updates and payment links straight to your customer's WhatsApp. Reorders and feedback flow back into the same chat.",
      image: images.featureMobile,
    },
    {
      icon: "store",
      title: "Restaurant Management",
      text: "Run dine-in, takeaway and cloud kitchen from one screen — menus, tables, staff roles, KOT routing and live kitchen status.",
      image: images.caseFood,
    },
    {
      icon: "building",
      title: "Branch Management",
      text: "Control every outlet from a single dashboard. Compare branch performance, sync menus and pricing, and manage staff across locations.",
      image: images.heroStore,
    },
    {
      icon: "warehouse",
      title: "Inventory Management",
      text: "Track raw materials and recipe-level stock in real time, get low-stock alerts, manage suppliers and cut wastage with usage insights.",
      image: images.heroWarehouse,
    },
    {
      icon: "lock",
      title: "Payment Gateway",
      text: "Accept UPI, cards, wallets and net-banking with a secure, PCI-ready gateway. Instant settlements and automatic reconciliation.",
      image: images.heroPayment,
    },
    {
      icon: "truck",
      title: "Online Delivery",
      text: "Plug into popular delivery aggregators, manage orders from every channel in one inbox and keep menus and stock perfectly in sync.",
      image: images.heroProducts,
    },
    {
      icon: "bar-chart",
      title: "Advanced Analytics",
      text: "Live sales, best-selling items, peak hours, branch comparisons and profit margins — turn every order into a decision you can act on.",
      image: images.featureAnalytics,
    },
    {
      icon: "globe",
      title: "Online Website",
      text: "Launch a branded ordering website in minutes with your menu, photos and offers — no commissions, no code, fully mobile-ready.",
      image: images.featureEditor,
    },
    {
      icon: "search",
      title: "Advanced SEO",
      text: "Built-in SEO tools, structured data, auto-sitemaps and fast pages so hungry customers find your restaurant first on Google.",
      image: images.blogStrategy,
    },
    {
      icon: "user",
      title: "Own Delivery",
      text: "Run your own rider fleet with live order assignment, GPS tracking, delivery zones and cash-on-delivery — keep 100% of every order.",
      image: images.featureMarketing,
    },
  ],
  stats: [
    { value: "11", label: "Tools in one place" },
    { value: "0%", label: "Commission on own orders" },
    { value: "Live", label: "Branch & sales insights" },
    { value: "24/7", label: "Online ordering" },
  ],
  workflowHeading: "From setup to scale in three steps",
  workflow: [
    {
      icon: "store",
      title: "Set up your outlets",
      text: "Add branches, build your menu and configure tables, taxes and staff roles in a guided setup.",
    },
    {
      icon: "rocket",
      title: "Start taking orders",
      text: "Go live across dine-in, your own website, WhatsApp and delivery apps from a single screen.",
    },
    {
      icon: "trending-up",
      title: "Grow with data",
      text: "Use analytics, SEO and inventory insights to boost margins and scale to more locations.",
    },
  ],
  ctaTitle: "Bring your whole food business onto SellersLogin",
  ctaText:
    "Start with billing and your online website, then switch on delivery, payments, analytics and your own rider fleet as you grow — all from the Food Dashboard.",
};

export default function Page() {
  return <SolutionPage page={page} />;
}
