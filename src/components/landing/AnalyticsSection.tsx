"use client";

import { useEffect, useRef, useState } from "react";
import { counters, revenueMonths } from "@/data/landing";

// Reusable Counter Card with Scroll-Triggered Animation
function CounterCard({ counter }: { counter: typeof counters[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [display, setDisplay] = useState(`${counter.prefix}0${counter.suffix}`);

  // Trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Run count-up animation
  useEffect(() => {
    if (!isVisible) return;
    const target = counter.target;
    const duration = 2000;
    const start = performance.now();
    
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(`${counter.prefix}${Math.floor(eased * target).toLocaleString()}${counter.suffix}`);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, counter.target, counter.prefix, counter.suffix]);

  return (
    <div
      ref={ref}
      className={`reveal ${counter.delay} bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-300`}
    >
      <div className="text-3xl md:text-[42px] font-bold text-gray-900 leading-tight tracking-tight mb-2">
        {display}
      </div>
      <div className="text-sm md:text-[15px] font-medium text-gray-500 mb-1">
        {counter.label}
      </div>
      <div className="text-xs md:text-[13px] font-semibold text-green-600">
        {counter.change}
      </div>
    </div>
  );
}

export function AnalyticsSection() {
  return (
    <section id="analytics" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-12 md:mb-16">
          <div className="reveal inline-flex items-center bg-gray-50 border border-gray-200 rounded-full py-1.5 px-4 text-xs font-bold text-gray-700 uppercase tracking-wider mb-4 shadow-sm">
            Analytics & Growth
          </div>
          <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            Numbers that tell
            <br className="hidden sm:block" />
            your success story
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Revenue Chart */}
          <div className="reveal bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Monthly Revenue Growth</h3>
            <div className="flex flex-col gap-4">
              {revenueMonths.map((m) => (
                <div key={m.label} className="flex items-center gap-3 md:gap-4">
                  <span className="w-10 md:w-12 text-xs md:text-sm font-semibold text-gray-500 shrink-0">
                    {m.label}
                  </span>
                  <div className="flex-1 h-7 md:h-8 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-gray-900 to-indigo-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: m.width }}
                    />
                  </div>
                  <span className="w-14 md:w-16 text-right text-xs md:text-sm font-bold text-gray-900 shrink-0">
                    {m.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Counters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {counters.map((c) => (
              <CounterCard key={c.label} counter={c} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}