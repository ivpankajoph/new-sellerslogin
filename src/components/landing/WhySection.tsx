"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { images } from "@/lib/images";

const content = [
  {
    title: "Setup in Under 5 Minutes",
    description: "Our AI onboarding creates your entire store — products, pages, and payment gateway — before you finish your coffee.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={images.featureEditor}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Setup"
        />
      </div>
    ),
  },
  {
    title: "3.8% Higher Conversion",
    description: "Optimized checkout flows built from analyzing multiple transactions.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={images.featureAnalytics}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Conversion"
        />
      </div>
    ),
  },
  {
    title: "97 Google PageSpeed",
    description: "Blazing fast stores rank higher and convert better.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={images.featureSeo}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="PageSpeed"
        />
      </div>
    ),
  },
  {
    title: "Mobile First",
    description: "Every SellersLogin store is pixel-perfect on every screen.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={images.featureMobile}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Mobile First"
        />
      </div>
    ),
  },
  {
    title: "Secure Payments",
    description: "PCI DSS Level 1 certified. SSL, fraud detection, and chargeback protection built-in.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={images.featurePayment}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Secure Payments"
        />
      </div>
    ),
  },
  {
    title: "AI Automation",
    description: "From product descriptions to ad copy, email campaigns to support — AI handles the repetitive work so you can focus on growth.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={images.featureAi}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="AI Automation"
        />
      </div>
    ),
  },
  {
    title: "Global Scale",
    description: "Multi-currency, multi-language, 150+ countries, and CDN-powered delivery worldwide.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={images.heroWarehouse}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Global Scale"
        />
      </div>
    ),
  },
  {
    title: "24/7 Support",
    description: "Live chat, phone, and email support with a dedicated success manager on Growth+ plans.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={images.heroStore}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="24/7 Support"
        />
      </div>
    ),
  },
];

export function WhySection() {
  return (
    <section id="why" className="py-20 md:py-28 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <header className="text-center">
          <div className="reveal inline-flex items-center bg-gray-50 border border-gray-200 rounded-full py-1.5 px-4 text-xs font-bold text-gray-700 uppercase tracking-wider mb-4 shadow-sm">
            Why SellersLogin
          </div>
          <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            Built different.
            <br />
            Designed to win.
          </h2>
        </header>
      </div>

      <div className="w-full">
        <StickyScroll content={content} />
      </div>
    </section>
  );
}