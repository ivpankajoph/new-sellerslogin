

import type { LandingIconName } from "@/components/icons/LandingIcon";
import { LandingIcon } from "@/components/icons/LandingIcon";

const steps: {
  num: string;
  icon: LandingIconName;
  title: string;
  text: string;
  delay: string;
}[] = [
  {
    num: "1",
    icon: "user",
    title: "Create Account",
    text: "Sign up free in 30 seconds. No credit card required. Choose your plan later.",
    delay: "",
  },
  {
    num: "2",
    icon: "layout",
    title: "Build Your Store",
    text: "Use AI or our drag-and-drop editor to design your perfect storefront in minutes.",
    delay: "reveal-delay-1",
  },
  {
    num: "3",
    icon: "package",
    title: "Add Products",
    text: "Import from CSV, add manually, or sync with your existing inventory systems.",
    delay: "reveal-delay-2",
  },
  {
    num: "4",
    icon: "rocket",
    title: "Start Selling",
    text: "Go live and start accepting orders from day one. We handle hosting and security.",
    delay: "reveal-delay-3",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-12 md:mb-16">
          <div className="reveal inline-flex items-center bg-gray-50 border border-gray-200 rounded-full py-1.5 px-4 text-xs font-bold text-gray-700 uppercase tracking-wider mb-4 shadow-sm">
            How It Works
          </div>
          <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
            From zero to selling in 4 steps
          </h2>
          <p className="reveal reveal-delay-2 text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
            No technical skills needed. Our guided setup gets your store live and
            ready to sell in minutes.
          </p>
        </header>

        {/* Steps Grid with Connector Line */}
        <div className="relative">
          {/* Desktop Connector Line */}
          <div className="hidden md:block absolute top-10 left-8 right-8 h-px bg-gray-200 z-0" aria-hidden="true" />
          
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((s, index) => (
              <li
                key={s.num}
                className={`reveal ${s.delay} text-center relative`.trim()}
              >
                {/* Step Number Badge */}
                <div className="relative inline-block mb-5">
                  {/* Connector Dots (Mobile) */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden absolute top-10 left-1/2 -translate-x-1/2 w-px h-8 bg-gray-200" aria-hidden="true" />
                  )}
                  
                  {/* Icon Circle */}
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white border-2 border-gray-200 rounded-full mx-auto flex items-center justify-center text-gray-900 relative z-10 shadow-sm transition-all duration-300 hover:scale-105 hover:border-gray-300 hover:shadow-md focus-within:ring-2 focus-within:ring-gray-900 focus-within:ring-offset-2">
                    <LandingIcon name={s.icon} size={24} />
                  </div>
                  
                  {/* Step Number Badge */}
                  <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-6 h-6 md:w-7 md:h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold border-2 border-white shadow-sm">
                    {s.num}
                  </span>
                </div>
                
                {/* Step Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed px-2">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

    </section>
  );
}