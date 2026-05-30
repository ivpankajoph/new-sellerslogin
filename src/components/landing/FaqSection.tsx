"use client";

import { useState } from "react";
import { faqs } from "@/data/landing";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-12 md:mb-16">
          <div className="reveal inline-flex items-center bg-gray-50 border border-gray-200 rounded-full py-1.5 px-4 text-xs font-bold text-gray-700 uppercase tracking-wider mb-4 shadow-sm">
            FAQ
          </div>
          <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            Frequently asked questions
          </h2>
        </header>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3 md:space-y-4" role="region" aria-label="Frequently asked questions">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="reveal">
                <div
                  className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen ? "border-gray-300 shadow-sm" : "border-gray-200"
                  }`}
                >
                  <button
                  type="button"
                  className={`w-full p-5 md:p-6 flex items-center justify-between text-left text-base md:text-lg font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 cursor-pointer ${
                    isOpen ? "bg-gray-50 text-gray-900" : "text-gray-900 hover:bg-gray-50/50"
                  }`}
                  onClick={() => toggleFAQ(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="pr-4">{f.q}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </button>

                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "max-h-200 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <p className="text-sm md:text-base text-gray-500 leading-relaxed">{f.a}</p>
                  </div>
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}