"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BellRing,
  CheckCircle2,
  LineChart,
  ShieldCheck,
  Zap,
} from "lucide-react";

const registrationHref = "https://web.sellerslogin.com/vendor/registration";
const contactHref = "/contact";

const plans = [
  {
    name: "Startup",
    label: "Best for new sellers",
    priceMonthly: "INR 2,499",
    priceAnnually: "INR 1,999/mo",
    sourceNote: "Source plan: Startup",
    description:
      "For teams ready to move beyond a basic launch with more stores, users, and lower transaction fees.",
    cta: "Start with Startup",
    href: registrationHref,
    accent: "border-violet-200 bg-white",
    icon: Zap,
    stats: [
      ["Online stores", "3"],
      ["Users access", "2"],
      ["SL transaction fee", "2%"],
      ["Products", "Scale-ready"],
    ],
    features: [
      "Storefront setup with domain booking",
      "Live analytics for store performance",
      "Hosting, security, and virus-free web",
      "No Sellers Login logo on storefront",
      "Customer, sales, and product workflows",
      "Payment gateway support",
    ],
  },
  {
    name: "Growth",
    label: "Most popular",
    priceMonthly: "Custom Growth",
    priceAnnually: "Custom Growth",
    sourceNote: "Source plan: Agency",
    description:
      "For growing brands, agencies, and operators managing multiple stores, larger catalogs, and richer automation.",
    cta: "Choose Growth",
    href: registrationHref,
    accent: "relative border-violet-500 bg-violet-950 text-white shadow-2xl shadow-violet-200",
    icon: LineChart,
    stats: [
      ["Online stores", "10"],
      ["Users access", "6"],
      ["SL transaction fee", "1.5%"],
      ["Products", "600"],
    ],
    features: [
      "10 online stores for multi-brand operations",
      "Advanced storefront, catalog, and product controls",
      "Marketing, email, and WhatsApp Business API workflows",
      "Live analytics with lower transaction fees",
      "Hosting, security, and virus-free web",
      "Built for service-led and scale-led setups",
    ],
    recommended: true,
  },
  {
    name: "Enterprise",
    label: "For large teams",
    priceMonthly: "Custom Quote",
    priceAnnually: "Custom Quote",
    sourceNote: "Source plan: Enterprise",
    description:
      "For businesses that need custom store counts, larger teams, advanced onboarding, and commercial flexibility.",
    cta: "Talk to sales",
    href: contactHref,
    accent: "border-slate-200 bg-white",
    icon: ShieldCheck,
    stats: [
      ["Online stores", "Custom"],
      ["Users access", "30"],
      ["SL transaction fee", "0.75%"],
      ["Products", "1000"],
    ],
    features: [
      "Custom rollout for store count and team structure",
      "30 user access for larger operational teams",
      "Lowest listed Sellers Login transaction fee",
      "Enterprise onboarding and support mapping",
      "Hosting and security included",
      "Payment gateway and support workflows",
    ],
  },
];

export function PricingCardsSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 relative z-20">
      <div className="mx-auto max-w-7xl">
        
        {/* Toggle Switch */}
        <div className="sticky top-20 z-[60] flex justify-center mb-10 transition-all">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1.5 shadow-lg shadow-violet-900/5">
            <button
              onClick={() => setIsAnnual(false)}
              className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300 ${
                !isAnnual
                  ? "bg-violet-950 text-white shadow-md transform scale-105"
                  : "text-slate-600 hover:text-slate-900 bg-transparent hover:bg-slate-50"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300 ${
                isAnnual
                  ? "bg-violet-950 text-white shadow-md transform scale-105"
                  : "text-slate-600 hover:text-slate-900 bg-transparent hover:bg-slate-50"
              }`}
            >
              Annually <span className={`ml-1 ${isAnnual ? "text-violet-200" : "text-emerald-500"}`}>(-20%)</span>
            </button>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3 group">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isRecommended = Boolean(plan.recommended);
            const currentPrice = isAnnual ? plan.priceAnnually : plan.priceMonthly;

            return (
              <article
                key={plan.name}
                className={`relative flex min-h-full flex-col rounded-[2rem] border p-6 transition-all duration-500 hover:-translate-y-3 hover:z-50 group-hover:scale-[0.98] group-hover:opacity-40 group-hover:blur-[4px] hover:!scale-105 hover:!opacity-100 hover:!blur-none hover:shadow-2xl ${plan.accent}`}
              >
                {isRecommended && (
                  <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-violet-700">
                    <BellRing className="h-3.5 w-3.5" />
                    Recommended
                  </div>
                )}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-wider ${isRecommended ? "text-violet-200" : "text-violet-700"}`}>
                      {plan.label}
                    </p>
                    <h2 className="mt-2 text-3xl font-bold">{plan.name}</h2>
                  </div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${isRecommended ? "bg-white/10 text-white" : "bg-violet-50 text-violet-700"}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                
                <div className="mt-5 relative h-12">
                  <p className={`absolute text-4xl font-bold transition-all duration-300 ${isRecommended ? "text-white" : "text-slate-950"} ${!isAnnual ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
                    {plan.priceMonthly}
                  </p>
                  <p className={`absolute text-4xl font-bold transition-all duration-300 ${isRecommended ? "text-white" : "text-slate-950"} ${isAnnual ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
                    {plan.priceAnnually}
                  </p>
                </div>
                
                <p className={`mt-2 text-xs font-semibold ${isRecommended ? "text-violet-200" : "text-slate-500"}`}>{plan.sourceNote}</p>
                <p className={`mt-4 min-h-[84px] text-sm leading-6 ${isRecommended ? "text-slate-300" : "text-slate-600"}`}>{plan.description}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-6">
                      <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${isRecommended ? "text-violet-200" : "text-violet-600"}`} />
                      <span className={isRecommended ? "text-slate-200" : "text-slate-700"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  target={plan.href.startsWith("http") ? "_blank" : undefined}
                  rel={plan.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold no-underline transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 ${
                    isRecommended
                      ? "bg-white text-violet-700 hover:bg-violet-50"
                      : "bg-violet-600 text-white shadow-lg shadow-violet-100 hover:bg-violet-700"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
