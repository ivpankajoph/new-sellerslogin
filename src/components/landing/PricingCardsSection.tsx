"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight, BellRing, CheckCircle2 } from "lucide-react";
import { plans } from "@/lib/pricingData";

export function PricingCardsSection({ 
  showRegularPrice, 
  onSelectPlan,
  currency,
  billingCycle,
  setBillingCycle
}: { 
  showRegularPrice: boolean, 
  onSelectPlan: (plan: any) => void,
  currency: "INR" | "USD",
  billingCycle: "monthly" | "quarterly",
  setBillingCycle: (cycle: "monthly" | "quarterly") => void
}) {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 relative z-20">
      <div className="mx-auto max-w-7xl">

        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center rounded-full bg-slate-100 p-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                billingCycle === "monthly"
                  ? "bg-white text-violet-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("quarterly")}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                billingCycle === "quarterly"
                  ? "bg-white text-violet-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Quarterly
            </button>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3 group">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isRecommended = Boolean(plan.recommended);

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
                
                <div className="mt-5 flex flex-col justify-start">

                  <p className={`text-4xl font-bold ${isRecommended ? "text-white" : "text-slate-950"}`}>
                    {currency === "USD" 
                      ? (billingCycle === "quarterly" ? (plan as any).priceQuarterlyUSD : (plan as any).priceMonthlyUSD) 
                      : (billingCycle === "quarterly" ? (plan as any).priceQuarterly : plan.priceMonthly) || plan.priceMonthly}
                  </p>
                </div>
                
                {plan.name === "Enterprise" && (
                  <p className={`mt-2 text-xs font-semibold ${isRecommended ? "text-violet-200" : "text-slate-500"}`}>{currency === "USD" ? (plan as any).sourceNoteUSD : plan.sourceNote}</p>
                )}
                <p className={`mt-4 min-h-[84px] text-sm leading-6 ${isRecommended ? "text-slate-300" : "text-slate-600"}`}>{plan.description}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-6">
                      <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${isRecommended ? "text-violet-200" : "text-violet-600"}`} />
                      <span className={isRecommended ? "text-slate-200" : "text-slate-700"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.cta === "Select" ? (
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 ${
                      isRecommended
                        ? "bg-white text-violet-700 hover:bg-violet-50"
                        : "bg-violet-600 text-white shadow-lg shadow-violet-100 hover:bg-violet-700"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
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
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
