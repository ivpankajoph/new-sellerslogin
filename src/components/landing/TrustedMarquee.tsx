"use client";

import { brandNames } from "@/data/landing";

export function TrustedMarquee() {
  // Duplicate array for seamless infinite loop
  const items = [...brandNames, ...brandNames];

  return (
    <section id="trusted" className="py-8 md:py-10 border-y border-gray-200 bg-white overflow-hidden">
      <div className="reveal relative w-full overflow-hidden">
        {/* Left & Right Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex items-center gap-10 md:gap-16 w-max animate-[marquee_45s_linear_infinite] hover:[animation-play-state:paused] will-change-transform">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-lg md:text-2xl font-bold text-gray-400 whitespace-nowrap transition-colors duration-300 hover:text-gray-900 select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}