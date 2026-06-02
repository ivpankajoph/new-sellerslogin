import type { Metadata } from "next";
import { SolutionPage, type SolutionPageContent } from "@/components/landing/SolutionPage";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "B2b Dashboard | SellersLogin",
  description:
    "A complete B2B commerce dashboard — account pricing, bulk ordering, quotes, credit terms, CRM, inventory, analytics, your web portal, SEO and integrated marketing (Google Ads, social, chat, Shopping SEO).",
};

const page: SolutionPageContent = {
  eyebrow: "B2B Commerce Solution",
  eyebrowIcon: "layout",
  titleBefore: "Power your entire ",
  titleHighlight: "wholesale",
  titleAfter: " business from one dashboard",
  description:
    "The B2B Dashboard brings account pricing, bulk ordering, quotes, credit terms, CRM, inventory, analytics, your web portal, SEO and integrated marketing — Google Ads, social, chat and Shopping SEO — together so your sales team closes faster and accounts reorder more.",
  cardTitle: "B2B Dashboard",
  cardIcon: "layout",
  heroMetrics: [
    {
      label: "Open Quotes",
      value: "24",
      sub: "8 awaiting approval",
      subTone: "muted",
      gradient: "from-purple-50 to-fuchsia-50",
    },
    {
      label: "Reorder Value",
      value: "₹6.4L",
      sub: "↑ +22% MoM",
      subTone: "green",
      gradient: "from-orange-50 to-amber-50",
    },
  ],
  heroRows: [
    { icon: "target", label: "Google Ads · 4.2x ROAS", tag: "Live" },
    { icon: "user", label: "New account: Metro Foods", tag: "Net 30" },
    { icon: "message", label: "Website chat · 3 active", tag: "Now" },
  ],
  featuresHeading: "One B2B Dashboard, every wholesale tool",
  featuresSubtitle:
    "From quote to reorder — account pricing, ordering, payments, CRM and marketing working together, so your team spends less time on admin and more time growing accounts.",
  features: [
    {
      icon: "user",
      title: "Account-Based Pricing",
      text: "Set custom price lists, tiers and contract rates per buyer or group. The right price shows automatically the moment a customer logs in.",
      image: images.heroPayment,
    },
    {
      icon: "package",
      title: "Bulk & Repeat Ordering",
      text: "Fast order pads, CSV upload and one-click reorders let buyers place large, recurring orders in seconds — no back-and-forth.",
      image: images.heroWarehouse,
    },
    {
      icon: "layout",
      title: "Quotes & RFQ Workflows",
      text: "Receive requests for quotes, build proposals, and run multi-step approvals with full status tracking from request to purchase order.",
      image: images.featureEditor,
    },
    {
      icon: "credit-card",
      title: "Credit & Payment Terms",
      text: "Offer Net 15/30/60 terms, set per-account credit limits, track outstanding balances and collect payments online.",
      image: images.featurePayment,
    },
    {
      icon: "trending-up",
      title: "Sales Team & CRM",
      text: "Give reps account-level visibility, assign territories, track the pipeline and follow up on quotes — all from one workspace.",
      image: images.featureMarketing,
    },
    {
      icon: "warehouse",
      title: "Catalog & Inventory",
      text: "Manage large catalogs, variants and real-time stock across warehouses, with low-stock alerts and supplier tracking.",
      image: images.heroProducts,
    },
    {
      icon: "bar-chart",
      title: "Advanced Analytics",
      text: "Track account performance, top products, reorder rates and sales-rep results — turn wholesale data into clear decisions.",
      image: images.featureAnalytics,
    },
    {
      icon: "globe",
      title: "B2B Web Portal",
      text: "Give every buyer a branded self-service portal to browse catalogs, see their pricing, reorder and download invoices 24/7.",
      image: images.heroStore,
    },
    {
      icon: "search",
      title: "Advanced SEO",
      text: "Built-in SEO tools, structured data and fast pages so buyers searching for your products find you first on Google.",
      image: images.blogStrategy,
    },
    {
      icon: "cart",
      title: "Shopping SEO",
      text: "Sync your catalog to Google Shopping and product feeds so your listings appear with images, price and stock to ready-to-buy searchers.",
      image: images.productShoes,
      badge: "Coming soon",
    },
    {
      icon: "target",
      title: "Google Ads",
      text: "Launch and manage Search, Display and Shopping campaigns from the dashboard, with conversion tracking and ROAS reporting built in.",
      image: images.blogMarketing,
      badge: "Coming soon",
    },
    {
      icon: "megaphone",
      title: "Social Media Management",
      text: "Schedule posts, run lead campaigns and manage your LinkedIn, Facebook and Instagram presence without leaving SellersLogin.",
      image: images.featureMobile,
      badge: "Coming soon",
    },
    {
      icon: "message",
      title: "Website Chat",
      text: "Convert visitors in real time with live chat and automated replies on your portal — route enquiries straight to the right rep.",
      image: images.featureAi,
      badge: "Coming soon",
    },
  ],
  stats: [
    { value: "3x", label: "Faster quotes" },
    { value: "Net 30", label: "Flexible credit terms" },
    { value: "Live", label: "Account & pipeline view" },
    { value: "4.2x", label: "Avg. ad ROAS" },
  ],
  workflowHeading: "From onboarding to scale in three steps",
  workflow: [
    {
      icon: "layout",
      title: "Onboard your accounts",
      text: "Add buyers, set account-level price lists, credit limits and approval rules in a guided setup.",
    },
    {
      icon: "rocket",
      title: "Open your B2B portal",
      text: "Go live with bulk ordering, quotes and reorders across your web portal and sales team.",
    },
    {
      icon: "trending-up",
      title: "Scale with marketing & data",
      text: "Drive demand with Google Ads, social and Shopping SEO, then grow margins using analytics.",
    },
  ],
  ctaTitle: "Bring your whole wholesale business onto SellersLogin",
  ctaText:
    "Start with pricing and bulk ordering, then switch on quotes, credit terms, CRM, marketing and analytics as you grow — all from the B2B Dashboard.",
};

export default function Page() {
  return <SolutionPage page={page} />;
}
