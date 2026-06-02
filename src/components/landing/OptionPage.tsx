import Link from "next/link";
import { LandingIcon } from "@/components/icons/LandingIcon";
import { BackToTop } from "./BackToTop";
import { CookieConsent } from "./CookieConsent";
import { CustomCursor } from "./CustomCursor";
import { FooterSection } from "./FooterSection";
import { GlobalBackground } from "./GlobalBackground";
import { Navbar } from "./Navbar";
import { ScrollRevealInit } from "./ScrollRevealInit";
import type { LandingIconName } from "@/components/icons/LandingIcon";

export type OptionPageContent = {
  label: string;
  icon: LandingIconName;
  eyebrow: string;
  title: string;
  description: string;
  stats: { value: string; label: string }[];
  highlights: string[];
  outcomes: string[];
};

type Props = {
  page: OptionPageContent;
};

export function OptionPage({ page }: Props) {
  return (
    <>
      <CustomCursor />
      <GlobalBackground />
      <ScrollRevealInit />
      <Navbar />

      <main>
        <section className="relative min-h-[78vh] overflow-hidden bg-gray-950 px-4 sm:px-6 lg:px-8 pt-28 pb-18 text-white">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-linear-to-b from-gray-950/45 via-gray-950/80 to-gray-950" />

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <div className="reveal mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-purple-100 backdrop-blur">
                <LandingIcon name={page.icon} size={15} />
                {page.eyebrow}
              </div>

              <h1 className="reveal reveal-delay-1 text-[clamp(40px,6vw,72px)] font-bold leading-[1.05] tracking-tight">
                {page.title}
              </h1>

              <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-base leading-relaxed text-gray-200 md:text-lg">
                {page.description}
              </p>

              <div className="reveal reveal-delay-3 mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="https://web.sellerslogin.com/vendor/registration"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-purple-300 bg-purple-200 px-8 py-3.5 text-sm font-semibold text-black no-underline shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-purple-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                >
                  Get Started Free
                </Link>
                <Link
                  href="/#features"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white no-underline backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                >
                  Explore Platform
                </Link>
              </div>
            </div>

            <div className="reveal reveal-delay-2 rounded-[2rem] border border-white/12 bg-white/10 p-4 shadow-[0_30px_80px_-30px_rgba(124,58,237,0.65)] backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-white p-5 text-gray-900">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">SellersLogin</p>
                    <h2 className="mt-1 text-xl font-bold">{page.label}</h2>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                    <LandingIcon name={page.icon} size={22} />
                  </div>
                </div>

                <div className="mt-5 grid gap-3">
                  {page.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-purple-700">
                        <LandingIcon name="sparkles" size={15} />
                      </div>
                      <span className="text-sm font-semibold text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  {page.stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-gray-100 bg-white p-3 text-center shadow-sm">
                      <div className="text-lg font-bold text-gray-950">{stat.value}</div>
                      <div className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-18 sm:px-6 lg:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="reveal mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center rounded-full border border-gray-200 bg-white px-5 py-2 text-xs font-bold uppercase tracking-wider text-gray-700 shadow-sm">
                Built for execution
              </div>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
                Everything your team needs to move from setup to scale
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {page.outcomes.map((item, index) => (
                <div
                  key={item}
                  className={`reveal reveal-delay-${index + 1} rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_18px_45px_-32px_rgba(15,23,42,0.55)]`}
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                    <LandingIcon name={index === 0 ? "rocket" : index === 1 ? "bar-chart" : "zap"} size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-950">{item}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    Connect {page.label.toLowerCase()} with store data, customer activity, and operational workflows without leaving the SellersLogin workspace.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-28 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gray-900 p-8 text-center text-white shadow-[0_20px_60px_-15px_rgba(124,58,237,0.28)] sm:p-10 md:p-14">
            <div className="reveal inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gray-300">
              Ready when you are
            </div>
            <h2 className="reveal reveal-delay-1 mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Bring {page.label} into your commerce stack
            </h2>
            <p className="reveal reveal-delay-2 mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-300">
              Start with a focused setup, then expand into automation, analytics, payments, and customer growth tools as your business matures.
            </p>
            <div className="reveal reveal-delay-3 mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="https://web.sellerslogin.com/vendor/registration"
                target="_blank" rel="noopener noreferrer"
                className="rounded-full border border-purple-300 bg-purple-200 px-8 py-3 text-sm font-semibold text-black no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-purple-300"
              >
                Start Free Trial
              </Link>
              <Link
                href="/#faq"
                className="rounded-full border border-white/25 px-8 py-3 text-sm font-semibold text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
              >
                View FAQ
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
      <BackToTop />
      <CookieConsent />
    </>
  );
}
