

import { testimonials } from "@/data/landing";

export function TestimonialsSection() {
  const all = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 md:py-28 px-0 overflow-hidden bg-transparent">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-14">
        <header className="text-center">
          <div className="reveal inline-flex items-center bg-gray-50 border border-gray-200 rounded-full py-1.5 px-4 text-xs font-bold text-gray-700 uppercase tracking-wider mb-4 shadow-sm">
            Testimonials
          </div>
          <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            Loved by top Sellers
          </h2>
        </header>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-1/5 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" aria-hidden="true" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-1/5 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" aria-hidden="true" />

        {/* Scrolling Container */}
        <div
          className="flex items-start gap-4 md:gap-5 w-max animate-[marquee_55s_linear_infinite] hover:[animation-play-state:paused] will-change-transform"
          role="list"
          aria-label="Customer testimonials"
        >
          {all.map((t, i) => {
            const initials = t.n
              .split(" ")
              .map((w) => w[0])
              .join("");
            return (
              <article
                key={`${t.n}-${i}`}
                role="listitem"
                className="w-70 sm:w-[320px] md:w-90 bg-white border border-gray-200 rounded-2xl p-6 md:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-gray-300 shrink-0"
              >
                {/* Stars */}
                <div className="text-yellow-400 text-lg mb-4 tracking-wider" aria-label={`${t.stars} out of 5 stars`}>
                  {"★".repeat(t.stars)}
                </div>
                
                {/* Quote */}
                <p className="text-sm md:text-[15px] text-gray-900 font-medium leading-relaxed mb-6">
                  &quot;{t.t}&quot;
                </p>
                
                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xs md:text-sm font-bold text-gray-900 shrink-0">
                    {initials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">{t.n}</div>
                    <div className="text-xs text-gray-500">{t.r}</div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Animation & Reveal Styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-[marquee_55s_linear_infinite] {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}