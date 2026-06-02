import type { Metadata } from "next";
import { SolutionPage, type SolutionPageContent } from "@/components/landing/SolutionPage";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "B2c Dashboard | SellersLogin",
  description:
    "A complete B2C commerce dashboard — online store, catalog, payments, delivery, customer insights, promotions, analytics, SEO and integrated marketing (Google Ads, social, website chat, Shopping SEO).",
};

const page: SolutionPageContent = {
  eyebrow: "B2C / D2C Commerce Solution",
  eyebrowIcon: "shopping-bag",
  titleBefore: "Grow your ",
  titleHighlight: "online store",
  titleAfter: " from one powerful dashboard",
  description:
    "The B2C Dashboard brings your online store, catalog, payments, delivery, customer insights, promotions, analytics, SEO and integrated marketing — Google Ads, social, website chat and Shopping SEO — together so you turn more visitors into loyal, repeat buyers.",
  cardTitle: "B2C Dashboard",
  cardIcon: "shopping-bag",
  heroMetrics: [
    {
      label: "Today's Revenue",
      value: "₹1,24,560",
      sub: "↑ +31% vs last week",
      subTone: "green",
      gradient: "from-purple-50 to-fuchsia-50",
    },
    {
      label: "Live Visitors",
      value: "312",
      sub: "48 in checkout",
      subTone: "muted",
      gradient: "from-orange-50 to-amber-50",
    },
  ],
  heroRows: [
    { icon: "cart", label: "New order #5821", tag: "Paid" },
    { icon: "megaphone", label: "Instagram campaign live", tag: "Live" },
    { icon: "message", label: "Website chat · 5 active", tag: "Now" },
  ],
  featuresHeading: "One B2C Dashboard, every tool to sell direct",
  featuresSubtitle:
    "From the first visit to the repeat order — your store, payments, delivery, customer data and marketing in one place, so you sell more without juggling a dozen apps.",
  features: [
    {
      icon: "layout",
      title: "Online Store Builder",
      text: "Launch a fast, branded storefront with your own theme, pages and mobile-ready checkout — no code, no commissions.",
      image: images.heroStore,
    },
    {
      icon: "package",
      title: "Product & Catalog Management",
      text: "Add unlimited products, variants, images and collections, and keep stock in sync across every sales channel.",
      image: images.heroProducts,
    },
    {
      icon: "lock",
      title: "Payment Gateway",
      text: "Accept UPI, cards, wallets and net-banking through a secure, PCI-ready gateway with instant settlements and reconciliation.",
      image: images.featurePayment,
    },
    {
      icon: "truck",
      title: "Order & Delivery Management",
      text: "Manage every order in one inbox, print labels, connect courier partners and keep customers updated with live tracking.",
      image: images.heroWarehouse,
    },
    {
      icon: "user",
      title: "Customer CRM & Insights",
      text: "See every shopper's history, segment your audience and build loyalty with profiles that update in real time.",
      image: images.featureMarketing,
    },
    {
      icon: "party",
      title: "Promotions & Coupons",
      text: "Run discounts, BOGO offers, coupon codes and limited-time sales, then measure exactly how each campaign performed.",
      image: images.showcaseFashion,
    },
    {
      icon: "bar-chart",
      title: "Advanced Analytics",
      text: "Track revenue, conversion, best-sellers, traffic sources and customer lifetime value — clarity on what drives growth.",
      image: images.featureAnalytics,
    },
    {
      icon: "search",
      title: "Advanced SEO",
      text: "Built-in SEO tools, structured data, auto-sitemaps and fast pages so customers find your store first on Google.",
      image: images.blogStrategy,
    },
    {
      icon: "cart",
      title: "Shopping SEO",
      text: "Sync your catalog to Google Shopping and product feeds so listings appear with images, price and reviews to ready-to-buy shoppers.",
      image: images.productShoes,
      badge: "Coming soon",
    },
    {
      icon: "target",
      title: "Google Ads",
      text: "Create and manage Search, Display and Shopping campaigns from the dashboard, with conversion tracking and ROAS reporting built in.",
      image: images.blogMarketing,
      badge: "Coming soon",
    },
    {
      icon: "megaphone",
      title: "Social Media Management",
      text: "Schedule posts, sync your product catalog and run shoppable campaigns across Instagram and Facebook — all in one place.",
      image: images.featureMobile,
      badge: "Coming soon",
    },
    {
      icon: "message",
      title: "Website Chat",
      text: "Turn browsers into buyers with live chat and automated replies, answering questions and recovering carts in real time.",
      image: images.featureAi,
      badge: "Coming soon",
    },
  ],
  stats: [
    { value: "2x", label: "Higher conversion" },
    { value: "0%", label: "Marketplace commission" },
    { value: "Live", label: "Visitor & sales insights" },
    { value: "24/7", label: "Online storefront" },
  ],
  workflowHeading: "From launch to loyal customers in three steps",
  workflow: [
    {
      icon: "layout",
      title: "Launch your store",
      text: "Build your branded website, add products and connect your payment gateway in minutes.",
    },
    {
      icon: "rocket",
      title: "Start selling everywhere",
      text: "Go live across web, social and Google Shopping, with delivery and website chat built in.",
    },
    {
      icon: "trending-up",
      title: "Grow with data",
      text: "Use analytics, SEO and campaigns to convert more visitors and drive repeat orders.",
    },
  ],
  ctaTitle: "Bring your whole online business onto SellersLogin",
  ctaText:
    "Start with your store and payments, then switch on delivery, promotions, marketing and analytics as you grow — all from the B2C Dashboard.",
};

export default function Page() {
  return <SolutionPage page={page} />;
}
