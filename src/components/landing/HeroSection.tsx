"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { heroChartBars, heroProductThumbs } from "@/data/landing";
import { LandingIcon } from "@/components/icons/LandingIcon";
import type { LandingIconName } from "@/components/icons/LandingIcon";

const HeroScene3D = dynamic(
  () => import("./HeroScene3D").then((m) => m.HeroScene3D),
  {
    ssr: false,
    loading: () => (
      <div className="h-[min(340px,42vw)] min-h-65 rounded-2xl border border-gray-200 bg-linear-to-r from-violet-100 via-purple-50 to-violet-100 bg-size-[200%_100%] animate-[shimmer_1.5s_ease-in-out_infinite] shadow-md" />
    ),
  }
);

export function HeroSection() {
  return (
    <section id="hero" className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden bg-white">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-3/4 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.12),transparent_70%)] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left">
      

          <h1 className="reveal text-[clamp(32px,5vw,64px)] font-bold text-gray-900 leading-[1.05] tracking-tight">
            Build Your{" "}
            <span className="text-indigo-600">Online Store</span>
            <br className="hidden sm:block" />
            in Minutes
          </h1>

          <p className="reveal reveal-delay-1 text-base md:text-[17px] font-normal text-gray-500 leading-relaxed max-w-120 mx-auto lg:mx-0">
            The all-in-one e-commerce platform trusted by 50,000+ businesses
            worldwide. Create, manage, and scale your online store with powerful
            automation and marketing tools.
          </p>

          <div className="reveal reveal-delay-2 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
            <button
              type="button"
              className="w-full sm:w-auto bg-purple-200 text-black text-[15px] font-medium py-3.5 px-6 rounded-full border border-purple-300 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-purple-300 hover:shadow-md active:translate-y-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
            >
              Start Free Trial
            </button>
            <button
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 text-[15px] font-medium py-3.5 px-6 rounded-full transition-all duration-200 hover:border-gray-900 hover:text-gray-900 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
            >
              <LandingIcon name="play" size={16} />
              Watch Demo
            </button>
          </div>

          <div className="reveal reveal-delay-3 flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2">
            {[
              { value: "50K+", label: "Stores Created" },
              { value: "$100M+", label: "Sales Generated" },
              { value: "99.9%", label: "Uptime SLA" },
              { value: "150+", label: "Countries" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900 leading-none">{value}</div>
                <div className="text-xs text-gray-500 mt-1 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>

     
      </div>
    </section>
  );
}