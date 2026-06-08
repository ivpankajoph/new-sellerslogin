import type { Metadata } from "next";
import { FooterLinkedPage, type FooterLinkedPageContent } from "@/components/landing/FooterLinkedPage";

export const metadata: Metadata = {
  title: "About Sellers Login | Sellers Login",
  description: "Learn about Sellers Login, the commerce operations platform by Life Changing Networks Pvt Ltd.",
};

const page: FooterLinkedPageContent = {
  eyebrow: "Company",
  title: "About Sellers Login",
  description:
    "Sellers Login is a commerce operations platform built for sellers, brands, distributors, and service teams that need one workspace for storefronts, orders, inventory, payments, delivery coordination, analytics, and automation.",
  details: [
    { label: "Email", value: "info@sellerslogin.com" },
    { label: "Address", value: "1405, Gaur City 2, Noida Extension, 10th Avenue, Ghaziabad 201009, UP, India" },
  ],
  cards: [
    {
      title: "What we build",
      body: "The platform brings day-to-day seller workflows into one connected system so teams can reduce manual follow-ups and operate with clearer data.",
      items: [
        "B2B, B2C, food, retail, D2C, and industry-specific dashboard experiences.",
        "Automation for WhatsApp, email, voice workflows, marketing, and delivery operations.",
        "Operational visibility across catalog, inventory, payments, customer activity, and fulfillment.",
      ],
    },
    {
      title: "Who we serve",
      body: "Sellers Login is designed for Indian and global businesses that want structured ecommerce operations without stitching together disconnected tools.",
      items: [
        "Manufacturers, distributors, wholesalers, and professional service providers.",
        "Retail, fashion, food, healthcare, pharmaceutical, SaaS, and ecommerce teams.",
        "Growing sellers who need practical tools before moving to heavy enterprise systems.",
      ],
    },
    {
      title: "Operating principles",
      body: "The product focuses on clarity, workflow speed, and dependable seller/customer communication.",
      items: [
        "Keep operational data visible and actionable for the people handling orders.",
        "Automate repetitive updates while keeping humans in control of exceptions.",
        "Make seller onboarding, tracking, and support easier to manage at scale.",
      ],
    },
    {
      title: "Company details",
      body: "Sellers Login operates under Life Changing Networks Pvt Ltd and maintains support and business communication through the listed contact channels.",
      items: [
        "Brand: Sellers Login under Life Changing Networks Pvt Ltd.",
        "Office address: 1405, Gaur City 2, Noida Extension, Ghaziabad 201009, UP, India.",
        "Primary contact: info@sellerslogin.com.",
      ],
    },
  ],
  steps: [
    "Understand the seller's category, workflow, and operational bottlenecks.",
    "Set up the dashboard, catalog, automation, and fulfillment flow.",
    "Connect customers, staff, partners, and support teams into one process.",
    "Use reporting and automation to improve speed, accuracy, and customer experience.",
  ],
  cta: { label: "Start selling", href: "https://web.sellerslogin.com/vendor/registration" },
};

export default function AboutPage() {
  return <FooterLinkedPage page={page} />;
}
