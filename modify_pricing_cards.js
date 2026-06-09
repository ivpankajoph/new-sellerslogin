const fs = require('fs');
const file = 'c:\\\\oph work\\\\new-sellerslogin\\\\src\\\\components\\\\landing\\\\PricingCardsSection.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetImportAndFunction = `"use client";

import Link from "next/link";
import { ArrowRight, BellRing, CheckCircle2 } from "lucide-react";
import { plans } from "@/lib/pricingData";

export function PricingCardsSection({ showRegularPrice, onSelectPlan }: { showRegularPrice: boolean, onSelectPlan: (plan: any) => void }) {`;

const replacementImportAndFunction = `"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight, BellRing, CheckCircle2 } from "lucide-react";
import { plans } from "@/lib/pricingData";

export function PricingCardsSection({ showRegularPrice, onSelectPlan }: { showRegularPrice: boolean, onSelectPlan: (plan: any) => void }) {
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
  }, []);`;

content = content.replace(targetImportAndFunction, replacementImportAndFunction);

// Update rendering blocks inside the loop
const targetPrices = `<div className="mt-5 relative h-12">
                  <p className={\`absolute text-4xl font-bold transition-all duration-300 \${isRecommended ? "text-white" : "text-slate-950"} \${!showRegularPrice ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}\`}>
                    {plan.priceMonthly}
                  </p>
                  <p className={\`absolute text-4xl font-bold transition-all duration-300 \${isRecommended ? "text-white" : "text-slate-950"} \${showRegularPrice ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}\`}>
                    {plan.priceAnnually}
                  </p>
                </div>
                
                <p className={\`mt-2 text-xs font-semibold \${isRecommended ? "text-violet-200" : "text-slate-500"}\`}>{plan.sourceNote}</p>`;

const replacementPrices = `<div className="mt-5 relative h-12">
                  <p className={\`absolute text-4xl font-bold transition-all duration-300 \${isRecommended ? "text-white" : "text-slate-950"} \${!showRegularPrice ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}\`}>
                    {currency === "USD" ? (plan as any).priceMonthlyUSD : plan.priceMonthly}
                  </p>
                  <p className={\`absolute text-4xl font-bold transition-all duration-300 \${isRecommended ? "text-white" : "text-slate-950"} \${showRegularPrice ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}\`}>
                    {currency === "USD" ? (plan as any).priceAnnuallyUSD : plan.priceAnnually}
                  </p>
                </div>
                
                <p className={\`mt-2 text-xs font-semibold \${isRecommended ? "text-violet-200" : "text-slate-500"}\`}>{currency === "USD" ? (plan as any).sourceNoteUSD : plan.sourceNote}</p>`;

content = content.replace(targetPrices, replacementPrices);

const targetSelectPlan = `                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={\`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 \${`;

const replacementSelectPlan = `                  <button
                    onClick={() => onSelectPlan({ ...plan, currency })}
                    className={\`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 \${`;

content = content.replace(targetSelectPlan, replacementSelectPlan);

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated PricingCardsSection.tsx');
