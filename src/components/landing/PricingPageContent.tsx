"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Check, X } from "lucide-react";
import { plans, capabilityGroups } from "@/lib/pricingData";
import { PricingCardsSection } from "./PricingCardsSection";
import { DemoCardsSection } from "./DemoCardsSection";
import { PricingFaqSection } from "./PricingFaqSection";
import { IntegrationsSection } from "./IntegrationsSection";


export function PricingPageContent() {
  const [showRegularPrice, setShowRegularPrice] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly">("monthly");
  const router = useRouter();

  useEffect(() => {
    // Detect country from IP
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.country_code && data.country_code !== 'IN') {
          setCurrency("USD");
        } else {
          setCurrency("INR");
        }
      })
      .catch(err => {
        console.error("Failed to fetch IP location, defaulting to INR", err);
      });
  }, []);

  const handleSelectPlan = (plan: any) => {
    setSelectedPlan({ ...plan, currency, billingCycle });
  };

  const handleContinue = () => {
    if (selectedPlan) {
      const isUSD = selectedPlan.currency === "USD";
      const isQuarterly = selectedPlan.billingCycle === "quarterly";
      
      const price = isUSD 
        ? (isQuarterly ? selectedPlan.billingQuarterlyTotalUSD : selectedPlan.billingMonthlyTotalUSD)
        : (isQuarterly ? selectedPlan.billingQuarterlyTotal : selectedPlan.billingMonthlyTotal);

      const displayedPrice = isUSD
        ? (isQuarterly ? selectedPlan.priceQuarterlyUSD : selectedPlan.priceMonthlyUSD)
        : (isQuarterly ? selectedPlan.priceQuarterly : selectedPlan.priceMonthly);

      localStorage.setItem("selectedPlanName", selectedPlan.name);
      localStorage.setItem("selectedPlanPrice", String(price));
      localStorage.setItem("selectedPlanCurrency", selectedPlan.currency || "INR");
      localStorage.setItem("selectedPlanBillingCycle", selectedPlan.billingCycle || "monthly");
      localStorage.setItem("selectedPlanDisplayedPrice", displayedPrice || selectedPlan.priceMonthly);
      
      router.push("/vendor/registration");
    }
  };

  const handleCloseModal = () => setSelectedPlan(null);

  return (
    <>
      <div className="relative">
        <PricingCardsSection 
          showRegularPrice={showRegularPrice} 
          onSelectPlan={handleSelectPlan} 
          currency={currency}
          billingCycle={billingCycle}
          setBillingCycle={setBillingCycle}
        />
      </div>

      <DemoCardsSection />

      <section id="compare" className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-violet-700">Complete comparison</p>
              <h2 className="mt-3 text-[clamp(32px,5vw,56px)] font-bold leading-none tracking-tight text-slate-950">
                See every important feature at a glance.
              </h2>
            </div>
            <p className="text-base leading-7 text-slate-600">
              The source pricing matrix categories are organized into readable groups so buyers can compare store features, customer and sales tools, courier pricing, shipment dispatch, product controls, marketing, email, voice, WhatsApp Business, payments, shipping, support, and integrations without confusion.
            </p>
          </div>

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

          <div className="overflow-x-auto lg:overflow-clip rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-100 relative">
            <div className="min-w-[760px]">
              <div className="sticky top-0 z-[60] grid grid-cols-[1.25fr_1fr_1fr_1fr] items-center bg-white/90 backdrop-blur-xl shadow-md border-b border-slate-200 pt-4">
                <div className="px-4 py-8 text-lg font-extrabold text-slate-900 sm:px-6">
                  Features & Capabilities
                </div>
                {plans.map((plan) => (
                  <div 
                    key={plan.name} 
                    className={`flex h-full flex-col items-center justify-center px-4 py-6 sm:px-6 border-l border-slate-200 transition-colors ${plan.recommended ? 'bg-violet-50/80 shadow-[inset_0_4px_0_0_rgb(124,58,237)]' : ''}`}
                  >
                    {plan.recommended && (
                      <span className="mb-2 text-[10px] font-bold uppercase tracking-widest text-violet-600">
                        Recommended
                      </span>
                    )}
                    <span className="text-2xl font-black text-slate-900 tracking-tight">{plan.name}</span>
                    <div className="mt-2 flex flex-col items-center justify-center">

                      <span className={`text-xl font-bold transition-all duration-300 ${plan.recommended ? 'text-violet-700' : 'text-slate-600'}`}>
                        {currency === "USD" 
                          ? (billingCycle === "quarterly" ? (plan as any).priceQuarterlyUSD : (plan as any).priceMonthlyUSD) 
                          : (billingCycle === "quarterly" ? (plan as any).priceQuarterly : plan.priceMonthly) || plan.priceMonthly}
                      </span>
                    </div>
                    {plan.cta === "Select" ? (
                      <button
                        onClick={() => handleSelectPlan(plan)}
                        className={`mt-4 w-full max-w-[160px] inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold transition-all hover:-translate-y-0.5 ${
                          plan.recommended
                            ? "bg-violet-600 text-white shadow-lg shadow-violet-200 hover:bg-violet-700"
                            : "bg-white text-slate-700 border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        {plan.cta}
                      </button>
                    ) : (
                      <Link
                        href={plan.href}
                        className={`mt-4 w-full max-w-[160px] inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold transition-all hover:-translate-y-0.5 ${
                          plan.recommended
                            ? "bg-violet-600 text-white shadow-lg shadow-violet-200 hover:bg-violet-700"
                            : "bg-white text-slate-700 border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        {plan.cta}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {capabilityGroups.map(({ title, icon: Icon, rows }) => (
                <div key={title} className="border-t border-slate-200">
                  <div className="flex items-center gap-2 bg-violet-50 px-4 py-4 text-base font-bold text-violet-900 sm:px-6 uppercase tracking-wider">
                    <Icon className="h-5 w-5" />
                    {title}
                  </div>
                  {rows.map(([feature, startup, growth, enterprise]) => {
                    const renderValue = (val: string) => {
                      if (val === "Yes") return <Check className="mx-auto h-5 w-5 text-emerald-500" strokeWidth={3} />;
                      if (val === "No") return <X className="mx-auto h-5 w-5 text-red-500" strokeWidth={3} />;
                      if (val === "-") return <span className="text-slate-300 font-extrabold text-lg">-</span>;
                      return val;
                    };
                    return (
                      <div key={feature} className="grid grid-cols-[1.25fr_1fr_1fr_1fr] border-t border-slate-100 text-sm hover:bg-slate-50/50 transition-colors">
                        <div className="px-4 py-5 font-bold text-slate-800 sm:px-6">{feature}</div>
                        <div className="px-3 py-5 text-center font-semibold text-slate-600 sm:px-6 flex items-center justify-center">{renderValue(startup)}</div>
                        <div className="bg-violet-50/40 px-3 py-5 text-center font-bold text-violet-900 sm:px-6 flex items-center justify-center border-x border-violet-100/50">{renderValue(growth)}</div>
                        <div className="px-3 py-5 text-center font-semibold text-slate-600 sm:px-6 flex items-center justify-center">{renderValue(enterprise)}</div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-violet-200 bg-[linear-gradient(135deg,#4c1d95_0%,#7c3aed_52%,#0f172a_100%)] p-6 text-white shadow-2xl shadow-violet-200 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-violet-200">Need help choosing?</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
                Map your catalog size, team access, and automation needs to the right plan.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-violet-100 sm:text-base">
                The fastest path is simple: choose Startup for first scale, Growth for multi-store operations, and Enterprise when store count, user count, integrations, or onboarding needs are custom.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-violet-700 no-underline transition-all hover:-translate-y-0.5 hover:bg-violet-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-violet-700"
            >
              Get plan guidance
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <IntegrationsSection />

      <PricingFaqSection />

      {selectedPlan && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm px-4 transition-all">
          <div className="bg-white rounded-none p-8 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button onClick={handleCloseModal} className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors">
              <X className="h-5 w-5" />
            </button>
            <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Confirm your plan</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              You have selected the <strong className="text-violet-700">{selectedPlan.name}</strong> plan at <strong>{selectedPlan.currency === "USD" ? (selectedPlan.billingCycle === "quarterly" ? selectedPlan.priceQuarterlyUSD : selectedPlan.priceMonthlyUSD) : (selectedPlan.billingCycle === "quarterly" ? selectedPlan.priceQuarterly : selectedPlan.priceMonthly) || selectedPlan.priceMonthly}</strong>.
            </p>
            <div className="flex gap-3">
              <button onClick={handleCloseModal} className="flex-1 py-3 px-4 rounded-none font-bold border-2 border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all">
                Cancel
              </button>
              <button onClick={handleContinue} className="flex-1 py-3 px-4 rounded-none font-bold bg-violet-600 text-white shadow-lg shadow-violet-200 hover:bg-violet-700 hover:-translate-y-0.5 transition-all">
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-[120] p-4 md:hidden bg-white/90 backdrop-blur-md border-t border-slate-200 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)]">
        <button onClick={() => handleSelectPlan({ ...plans[0], currency: "INR", billingCycle: "monthly" })} className="flex w-full items-center justify-center rounded-full bg-violet-600 px-4 py-3.5 text-[13px] sm:text-sm font-bold text-white shadow-lg shadow-violet-200 transition-all active:scale-[0.98] border-none outline-none">
          Signup @ ₹1,199/ month
        </button>
      </div>
    </>
  );
}
