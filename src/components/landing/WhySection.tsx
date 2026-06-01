"use client";

import type { LandingIconName } from "@/components/icons/LandingIcon";
import { LandingIcon } from "@/components/icons/LandingIcon";

function BentoIcon({ name, isDark = false }: { name: LandingIconName; isDark?: boolean }) {
  return (
    <div
      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
        isDark ? "bg-white/10 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <LandingIcon name={name} size={24} />
    </div>
  );
}

export function WhySection() {
  return (
    <section id="why" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-12 md:mb-16">
          <div className="reveal inline-flex items-center bg-gray-50 border border-gray-200 rounded-full py-1.5 px-4 text-xs font-bold text-gray-700 uppercase tracking-wider mb-4 shadow-sm">
            Why SellersLogin
          </div>
          <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            Built different.
            <br />
            Designed to win.
          </h2>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto lg:auto-rows-[200px]">
          {/* Card 1: AI Setup (Large, Dark) */}
          <article className="reveal bg-white border border-gray-200 rounded-2xl p-6 md:p-7 flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-gray-300 lg:col-span-2 lg:row-span-1">
            <BentoIcon name="zap" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Setup in Under 5 Minutes</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Our AI onboarding creates your entire store — products, pages, and
              payment gateway — before you finish your coffee.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-[10px] font-bold tracking-wide uppercase py-1.5 px-2.5 rounded-md bg-purple-100 text-purple-700">
                AI-Powered
              </span>
              <span className="text-[10px] font-bold tracking-wide uppercase py-1.5 px-2.5 rounded-md bg-purple-100 text-purple-700">
                Zero Code
              </span>
            </div>
          </article>

          {/* Card 2: Conversion Rate */}
          <article className="reveal reveal-delay-1 bg-white border border-gray-200 rounded-2xl p-6 md:p-7 flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gray-300">
            <div className="text-4xl font-bold text-gray-900 leading-none mb-auto tracking-tight">3.8%</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 mt-4">Higher Conversion</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Optimized checkout flows built from analyzing 50M+ transactions.
            </p>
          </article>

          {/* Card 3: PageSpeed */}
          <article className="reveal reveal-delay-2 bg-white border border-gray-200 rounded-2xl p-6 md:p-7 flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gray-300">
            <div className="text-4xl font-bold text-gray-900 leading-none mb-auto tracking-tight">97</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 mt-4">Google PageSpeed</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Blazing fast stores rank higher and convert better.
            </p>
          </article>

          {/* Card 4: Mobile First */}
          <article className="reveal bg-white border border-gray-200 rounded-2xl p-6 md:p-7 flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gray-300">
            <BentoIcon name="smartphone" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Mobile First</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              72% of shoppers buy on mobile. Every SellersLogin store is
              pixel-perfect on every screen.
            </p>
          </article>

          {/* Card 5: Secure Payments */}
          <article className="reveal reveal-delay-1 bg-white border border-gray-200 rounded-2xl p-6 md:p-7 flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gray-300">
            <BentoIcon name="shield" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Secure Payments</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              PCI DSS Level 1 certified. SSL, fraud detection, and chargeback
              protection built-in.
            </p>
          </article>

          {/* Card 6: AI Automation (Large) */}
          <article className="reveal reveal-delay-2 bg-white border border-gray-200 rounded-2xl p-6 md:p-7 flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gray-300 lg:col-span-2 lg:row-span-2">
            <div className="flex flex-col md:flex-row lg:flex-col gap-6 h-full items-start md:items-center lg:items-start justify-center">
              <div className="flex-1 flex flex-col">
                <BentoIcon name="bot" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">AI Automation</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  From product descriptions to ad copy, email campaigns to
                  support — AI handles the repetitive work so you can focus on
                  growth.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 md:gap-3 flex-1 w-full lg:mt-auto">
                {[
                  { v: "80%", l: "Less manual work" },
                  { v: "2x", l: "Faster launches" },
                  { v: "24/7", l: "AI support bot" },
                  { v: "+34%", l: "Revenue uplift" },
                ].map((s) => (
                  <div key={s.l} className="bg-gray-100 rounded-xl p-3 flex flex-col justify-center">
                    <div className="text-xl font-bold text-gray-900 leading-none mb-1">{s.v}</div>
                    <div className="text-[10px] text-gray-500">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Card 7: Global Scale */}
          <article className="reveal bg-white border border-gray-200 rounded-2xl p-6 md:p-7 flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gray-300">
            <BentoIcon name="globe" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Global Scale</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Multi-currency, multi-language, 150+ countries, and CDN-powered
              delivery worldwide.
            </p>
          </article>

          {/* Card 8: 24/7 Support */}
          <article className="reveal reveal-delay-1 bg-white border border-gray-200 rounded-2xl p-6 md:p-7 flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gray-300">
            <BentoIcon name="message" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Live chat, phone, and email support with a dedicated success
              manager on Growth+ plans.
            </p>
          </article>
        </div>
      </div>

    </section>
  );
}