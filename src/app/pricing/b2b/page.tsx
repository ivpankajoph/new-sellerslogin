import type { Metadata } from "next";
import { PricingRoutePage } from "@/components/landing/PricingRoutePage";

export const metadata: Metadata = {
  title: "B2B Pricing | Sellers Login",
  description:
    "Compare Sellers Login Basic B2B, Growth B2B, and Enterprise B2B pricing with hosting, SEO, transport, dispatch, product, marketing, email, voice, WhatsApp, payment, shipping, support, and integration features.",
};

export default function B2BPricingPage() {
  return <PricingRoutePage variant="b2b" />;
}
