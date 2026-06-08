import Link from "next/link";

import {
  enterpriseFeatures,
  growthFeatures,
  starterFeatures,
} from "@/data/landing";

function CheckIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function PricingSection() {
  const prices = { starter: "899", growth: "2,499" };
  const period = "per month";

  return (
    <section id="pricing" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10 md:mb-16">
          <div className="reveal inline-flex items-center bg-gray-50 border border-gray-200 rounded-full py-1.5 px-4 text-xs font-bold text-gray-700 uppercase tracking-wider mb-4 shadow-sm">
            Pricing
          </div>
          <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="reveal reveal-delay-2 text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
            Start free, upgrade as you grow. No hidden fees, no surprises.
          </p>


        </header>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start max-w-6xl mx-auto">
          {/* Starter */}
          <article className={`reveal bg-white border border-gray-200 rounded-full p-6 md:p-8 relative transition-all duration-300 hover:shadow-lg hover:border-gray-300`}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Starter</h3>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-2xl text-gray-500 font-medium translate-y-1">₹</span>
              <span className="text-5xl font-bold text-gray-900 tracking-tight transition-all duration-300">
                {prices.starter}
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-6">{period}</p>
            <ul className="space-y-3.5 mb-8">
              {starterFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckIcon /> {f}
                </li>
              ))}
            </ul>
            <Link
              href="https://web.sellerslogin.com/vendor/registration"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-full font-medium text-sm transition-all duration-200 bg-purple-200 text-black border border-purple-300 shadow-sm hover:bg-purple-300 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 cursor-pointer"
            >
              Start Free Trial
            </Link>
          </article>

          {/* Growth (Popular) */}
          <article className={`reveal reveal-delay-1 relative bg-gray-900 rounded-full p-6 md:p-8 shadow-2xl ring-1 ring-purple-200/20 md:-mt-4 md:mb-4`}>
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-linear-to-r from-purple-200 to-purple-500 text-white py-1 px-3 rounded-full text-[11px] font-bold uppercase tracking-wide shadow-md whitespace-nowrap">
              Most Popular
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Growth</h3>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-2xl text-gray-400 font-medium translate-y-1">₹</span>
              <span className="text-5xl font-bold text-white tracking-tight transition-all duration-300">
                {prices.growth}
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-6">{period}</p>
            <ul className="space-y-3.5 mb-8">
              {growthFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-gray-200">
                  <svg className="w-4 h-4 shrink-0 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="https://web.sellerslogin.com/vendor/registration"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-full font-medium text-sm transition-all duration-200 bg-purple-200 text-black border border-purple-300 shadow-sm hover:bg-purple-300 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 cursor-pointer"
            >
              Get Started
            </Link>
          </article>

          {/* Enterprise */}
          <article className={`reveal reveal-delay-2 bg-white border border-gray-200 rounded-full p-6 md:p-8 relative transition-all duration-300 hover:shadow-lg hover:border-gray-300`}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Enterprise</h3>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-4xl font-bold text-gray-900 tracking-tight">Custom</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">tailored to your needs</p>
            <ul className="space-y-3.5 mb-8">
              {enterpriseFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckIcon /> {f}
                </li>
              ))}
            </ul>
            <Link
              href="https://web.sellerslogin.com/vendor/registration"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-full font-medium text-sm transition-all duration-200 bg-purple-200 text-black border border-purple-300 shadow-sm hover:bg-purple-300 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 cursor-pointer"
            >
              Contact Sales
            </Link>
          </article>
        </div>
      </div>

    </section>
  );
}
