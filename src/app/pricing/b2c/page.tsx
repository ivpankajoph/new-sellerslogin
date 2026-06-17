import type { Metadata } from "next";
import { PricingRoutePage } from "@/components/landing/PricingRoutePage";

export const metadata: Metadata = {
  title: "Pricing | Sellers Login",
  description:
    "Compare Sellers Login Startup, Growth, and Enterprise pricing with storefront, courier, product, marketing, email, voice, WhatsApp, payment, shipping, support, and integration features.",
};

export default function PricingPage() {
  return <PricingRoutePage />;
}
