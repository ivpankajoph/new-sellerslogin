"use client"

import {
  capabilityGroups,
  defaultBillingCycle,
  getPlanBillingOption,
  getPlanBillingOptions,
  getPlanBillingTotal,
  getPlanDisplayPrice,
  plans,
  type BillingOption,
  type PricingPlan,
} from "@/lib/pricingData";
import { Check, X } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<(PricingPlan & { currency?: "INR" | "USD"; billingCycle?: string }) | null>(null);
  const [selectedBillingCycle, setSelectedBillingCycle] = useState(defaultBillingCycle);
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

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

  const handleSelectPlan = (plan: PricingPlan) => {
    setSelectedBillingCycle(defaultBillingCycle);
    setSelectedPlan({ ...plan, currency, billingCycle: defaultBillingCycle });
  };

  const handleContinue = (billingCycle = selectedPlan?.billingCycle || defaultBillingCycle) => {
    if (selectedPlan) {
      const selectedCurrency = selectedPlan.currency || currency;
      const price = getPlanBillingTotal(selectedPlan, billingCycle, selectedCurrency);
      const displayedPrice = getPlanDisplayPrice(selectedPlan, billingCycle, selectedCurrency);

      localStorage.setItem("selectedPlanName", selectedPlan.name);
      localStorage.setItem("selectedPlanPrice", String(price));
      localStorage.setItem("selectedPlanCurrency", selectedCurrency);
      localStorage.setItem("selectedPlanBillingCycle", billingCycle);
      localStorage.setItem("selectedPlanDisplayedPrice", displayedPrice || selectedPlan.priceMonthly);
      
      router.push("/vendor/registration");
    }
  };

  const handleCloseModal = () => setSelectedPlan(null);
  const selectedBillingOption = selectedPlan
    ? getPlanBillingOption(selectedPlan, selectedBillingCycle, selectedPlan.currency || currency)
    : null;

  return (
    <>
    <section id="compare" className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
              Complete comparison
            </p>
            <h2 className="mt-3 text-[clamp(32px,5vw,56px)] font-bold leading-none tracking-tight text-slate-950">
              See every important feature at a glance.
            </h2>
          </div>
          <p className="text-base leading-7 text-slate-600">
            The source pricing matrix categories are organized into readable
            groups so buyers can compare store features, customer and sales
            tools, courier pricing, shipment dispatch, product controls,
            marketing, email, voice, WhatsApp Business, payments, shipping,
            support, and integrations without confusion.
          </p>
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
                  className={`flex h-full flex-col items-center justify-center px-4 py-6 sm:px-6 border-l border-slate-200 transition-colors ${plan.recommended ? "bg-violet-50/80 shadow-[inset_0_4px_0_0_rgb(124,58,237)]" : ""}`}
                >
                  {plan.recommended && (
                    <span className="mb-2 text-[10px] font-bold uppercase tracking-widest text-violet-600">
                      Recommended
                    </span>
                  )}
                  <span className="text-2xl font-black text-slate-900 tracking-tight">
                    {plan.name}
                  </span>
                  <div className="mt-2 flex flex-col items-center justify-center">
                    <span
                      className={`text-xl font-bold transition-all duration-300 ${plan.recommended ? "text-violet-700" : "text-slate-600"}`}
                    >
                      {getPlanDisplayPrice(plan, defaultBillingCycle, currency)}
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
                    if (val === "Yes")
                      return (
                        <Check
                          className="mx-auto h-5 w-5 text-emerald-500"
                          strokeWidth={3}
                        />
                      );
                    if (val === "No")
                      return (
                        <X
                          className="mx-auto h-5 w-5 text-red-500"
                          strokeWidth={3}
                        />
                      );
                    if (val === "-")
                      return (
                        <span className="text-slate-300 font-extrabold text-lg">
                          -
                        </span>
                      );
                    return val;
                  };
                  return (
                    <div
                      key={feature}
                      className="grid grid-cols-[1.25fr_1fr_1fr_1fr] border-t border-slate-100 text-sm hover:bg-slate-50/50 transition-colors"
                    >
                      <div className="px-4 py-5 font-bold text-slate-800 sm:px-6">
                        {feature}
                      </div>
                      <div className="px-3 py-5 text-center font-semibold text-slate-600 sm:px-6 flex items-center justify-center">
                        {renderValue(startup)}
                      </div>
                      <div className="bg-violet-50/40 px-3 py-5 text-center font-bold text-violet-900 sm:px-6 flex items-center justify-center border-x border-violet-100/50">
                        {renderValue(growth)}
                      </div>
                      <div className="px-3 py-5 text-center font-semibold text-slate-600 sm:px-6 flex items-center justify-center">
                        {renderValue(enterprise)}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {selectedPlan && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/45 backdrop-blur-sm px-4 py-6 transition-all">
        <div className="bg-white rounded-2xl max-h-[calc(100svh-3rem)] max-w-xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
          <button onClick={handleCloseModal} className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors">
            <X className="h-5 w-5" />
          </button>
          <div className="p-6 pb-4">
            <h3 className="text-2xl font-black text-slate-900 pr-8 tracking-tight">Choose billing period</h3>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Select a duration for the <strong className="text-violet-700">{selectedPlan.name}</strong> plan.
            </p>
          </div>
          <div className="max-h-[52svh] space-y-3 overflow-y-auto px-6 pb-4">
            {getPlanBillingOptions(selectedPlan, selectedPlan.currency || currency).map((option: BillingOption) => {
              const isActive = option.cycle === selectedBillingCycle;
              return (
                <button
                  key={option.cycle}
                  type="button"
                  onClick={() => setSelectedBillingCycle(option.cycle)}
                  className={`flex w-full items-center justify-between gap-4 rounded-xl border-2 px-5 py-4 text-left transition-all hover:border-violet-500 hover:bg-violet-50 ${
                    isActive ? "border-violet-500 bg-violet-50 ring-2 ring-violet-100" : "border-slate-200"
                  }`}
                >
                  <span>
                    <span className="block text-base font-black text-slate-900">{option.label}</span>
                    <span className="block text-xs font-semibold text-slate-500">Billed {selectedPlan.currency || currency} {option.total.toLocaleString("en-IN")}</span>
                  </span>
                  <span className="text-lg font-black text-violet-700">{option.price}</span>
                </button>
              );
            })}
          </div>
          <div className="grid grid-cols-2 gap-3 border-t border-slate-200 bg-white p-6">
            <button onClick={handleCloseModal} className="py-3 px-4 rounded-xl font-bold border-2 border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all">
              Cancel
            </button>
            <button
              onClick={() => handleContinue(selectedBillingCycle)}
              className="py-3 px-4 rounded-xl font-bold bg-violet-600 text-white shadow-lg shadow-violet-200 hover:bg-violet-700 hover:-translate-y-0.5 transition-all"
            >
              Select {selectedBillingOption?.price || ""}
            </button>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default Page;
