"use client";

import Image from "next/image";
import { features } from "@/data/landing";
import { LandingIcon } from "@/components/icons/LandingIcon";

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-12 md:mb-16">
          <div className="reveal inline-flex items-center bg-gray-50 border border-gray-200 rounded-full py-1.5 px-4 text-xs font-bold text-gray-700 uppercase tracking-wider mb-4 shadow-sm">
            Features
          </div>
          <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
            Everything you need to
            <br />
            run a successful store
          </h2>
          <p className="reveal reveal-delay-2 text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Powerful tools designed for modern e-commerce businesses, from solo
            sellers to enterprise teams.
          </p>
        </header>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f) => (
            <article
              key={f.title}
              className={`reveal ${f.delay || ""} group relative bg-white border border-gray-200 rounded-2xl p-6 md:p-8 text-left transition-all duration-300 overflow-hidden hover:-translate-y-1.5 hover:shadow-xl hover:border-gray-300 will-change-transform`.trim()}
            >
              {/* Decorative Image Overlay */}
              <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden rounded-2xl">
                <Image
                  src={f.image}
                  alt=""
                  fill
                  className="object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Smooth fade to make text readable */}
                <div className="absolute inset-0 bg-linear-to-r from-white/90 via-white/50 to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-75" />
              </div>

              {/* Card Content */}
              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5 shadow-sm"
                  style={{ background: f.bg }}
                >
                  <LandingIcon name={f.icon} size={22} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                  {f.title}
                </h3>
                <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">
                  {f.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}