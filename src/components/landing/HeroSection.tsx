"use client";

import { LandingIcon } from "@/components/icons/LandingIcon";

export function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
        {/* Fallback */}
        <div className="absolute inset-0" />
      </video>

      {/* Light Overlay to keep text readable */}
      <div className="absolute inset-0  z-0 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center flex flex-col items-center">
        <h1 className="reveal text-[clamp(40px,6vw,72px)] font-bold text-white leading-[1.1] tracking-tight mb-6">
          Build Your <span className="text-purple-600">Online Store</span>
          <br className="hidden sm:block" />
          in Minutes
        </h1>

        <p className="reveal reveal-delay-1 text-base md:text-lg lg:text-xl font-normal text-white leading-relaxed max-w-2xl mx-auto mb-10">
          The all-in-one e-commerce platform trusted by 50,000+ businesses
          worldwide. Create, manage, and scale your online store with powerful
          automation and marketing tools.
        </p>

        <div className="reveal reveal-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          <button
            type="button"
            className="w-full sm:w-auto bg-purple-200 text-black text-[15px] font-medium py-3.5 px-8 rounded-full border border-purple-300 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-purple-300 hover:shadow-md active:translate-y-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
          >
            Start Free Trial
          </button>
          <button
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-300 text-gray-900 text-[15px] font-medium py-3.5 px-8 rounded-full transition-all duration-200 hover:border-gray-900 hover:bg-white cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
          >
            <LandingIcon name="play" size={16} />
            Watch Demo
          </button>
        </div>

        <div className="reveal reveal-delay-3 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {[
            { value: "50K+", label: "Stores Created" },
            { value: "$100M+", label: "Sales Generated" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "150+", label: "Countries" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white leading-none mb-1 md:mb-2">{value}</div>
              <div className="text-xs md:text-sm text-white font-bold uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}