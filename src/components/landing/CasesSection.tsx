"use client";

import Image from "next/image";
import { images } from "@/lib/images";

const cases = [
  {
    image: images.caseFashion,
    industry: "Fashion & Apparel",
    title: "StyleNova went from $0 to $2M revenue in 12 months",
    text: "Leveraging SellersLogin's AI marketing automation and SEO tools, StyleNova scaled from a solo founder to a team of 15 serving customers in 28 countries.",
    stats: [
      { v: "$2M", l: "Annual Revenue" },
      { v: "340%", l: "Revenue Growth" },
      { v: "28", l: "Countries" },
    ],
    delay: "",
  },
  {
    image: images.caseTech,
    industry: "Electronics & Tech",
    title: "GadgetHub scaled to 10,000 orders per month",
    text: "With multi-warehouse inventory management and automated order routing, GadgetHub reduced fulfillment time by 60% and doubled customer satisfaction scores.",
    stats: [
      { v: "10K", l: "Monthly Orders" },
      { v: "60%", l: "Faster Fulfillment" },
      { v: "4.9★", l: "Customer Rating" },
    ],
    delay: "reveal-delay-1",
  },
  {
    image: images.caseFood,
    industry: "Food & Grocery",
    title: "FreshBox built a $500K/year subscription business",
    text: "Using SellersLogin's subscription management and SMS marketing tools, FreshBox grew a loyal base of 3,500 recurring monthly subscribers.",
    stats: [
      { v: "$500K", l: "ARR" },
      { v: "3,500", l: "Subscribers" },
      { v: "92%", l: "Retention Rate" },
    ],
    delay: "reveal-delay-2",
  },
];

export function CasesSection() {
  return (
    <section id="cases" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-12 md:mb-16">
          <div className="reveal inline-flex items-center bg-gray-50 border border-gray-200 rounded-full py-1.5 px-4 text-xs font-bold text-gray-700 uppercase tracking-wider mb-4 shadow-sm">
            Case Studies
          </div>
          <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            Real results, real businesses
          </h2>
        </header>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((c) => (
            <article
              key={c.title}
              className={`reveal ${c.delay} group bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-gray-300 flex flex-col`}
            >
              {/* Image */}
              <div className="relative w-full aspect-video mb-5 rounded-xl overflow-hidden">
                <Image
                  src={c.image}
                  alt={`${c.industry} case study`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <span className="inline-flex self-start bg-gray-100 text-gray-700 text-[11px] font-bold uppercase tracking-wider py-1 px-2.5 rounded-md mb-3">
                  {c.industry}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                  {c.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  {c.text}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 pt-5 border-t border-gray-200">
                {c.stats.map((s) => (
                  <div key={s.l} className="text-center">
                    <div className="text-lg font-bold text-gray-900 leading-none mb-1">{s.v}</div>
                    <div className="text-[11px] text-gray-500 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}