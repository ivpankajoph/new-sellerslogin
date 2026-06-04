import type { Metadata } from "next";
import Link from "next/link";
import { LandingIcon } from "@/components/icons/LandingIcon";
import { BackToTop } from "@/components/landing/BackToTop";
import { CookieConsent } from "@/components/landing/CookieConsent";
import { CustomCursor } from "@/components/landing/CustomCursor";
import { FooterSection } from "@/components/landing/FooterSection";
import { GlobalBackground } from "@/components/landing/GlobalBackground";
import { Navbar } from "@/components/landing/Navbar";
import { ScrollRevealInit } from "@/components/landing/ScrollRevealInit";
import { FeatureCarousel } from "@/components/landing/FeatureCarousel";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Food Dashboard | SellersLogin",
  description:
    "An all-in-one Food Dashboard for restaurants and cloud kitchens — billing, WhatsApp billing, restaurant & branch management, inventory, payments, delivery, analytics, website and SEO.",
};

const pageData = {
  eyebrow: "Food & Restaurant Solution",
  eyebrowIcon: "store" as const,
  titleBefore: "Run your entire ",
  titleHighlight: "restaurant",
  titleAfter: " from one dashboard",
  description:
    "The Food Dashboard brings billing, WhatsApp orders, branch & inventory management, payments, delivery, analytics, your own website and SEO together — so every outlet runs faster and every order earns more.",
  cardTitle: "Food Dashboard",
  cardIcon: "store" as const,
  heroMetrics: [
    {
      label: "Today's Sales",
      value: "₹84,210",
      sub: "↑ +18% vs yesterday",
      subTone: "green",
      gradient: "from-purple-50 to-fuchsia-50",
    },
    {
      label: "Live Orders",
      value: "37",
      sub: "12 dine-in · 25 delivery",
      subTone: "muted",
      gradient: "from-orange-50 to-amber-50",
    },
  ],
  heroRows: [
    { icon: "message" as const, label: "WhatsApp order #1042", tag: "Paid" },
    { icon: "truck" as const, label: "Out for delivery #1039", tag: "Live" },
    { icon: "warehouse" as const, label: "Low stock: Paneer", tag: "Alert" },
  ],
  featuresHeading: "One Food Dashboard, eleven powerful tools",
  featuresSubtitle:
    "From the first bill to your hundredth branch — every tool your food business needs, working together without the chaos of separate apps.",
  features: [
    {
      icon: "credit-card" as const,
      title: "Billing",
      text: "Lightning-fast KOT & POS billing built for busy outlets — split bills, table-wise orders, taxes, discounts and printed or digital invoices in seconds.",
      image: images.featurePayment,
    },
    {
      icon: "message" as const,
      title: "WhatsApp Billing",
      text: "Send bills, order updates and payment links straight to your customer's WhatsApp. Reorders and feedback flow back into the same chat.",
      image: images.featureMobile,
    },
    {
      icon: "store" as const,
      title: "Restaurant Management",
      text: "Run dine-in, takeaway and cloud kitchen from one screen — menus, tables, staff roles, KOT routing and live kitchen status.",
      image: images.caseFood,
    },
    {
      icon: "building" as const,
      title: "Branch Management",
      text: "Control every outlet from a single dashboard. Compare branch performance, sync menus and pricing, and manage staff across locations.",
      image: images.heroStore,
    },
    {
      icon: "warehouse" as const,
      title: "Inventory Management",
      text: "Track raw materials and recipe-level stock in real time, get low-stock alerts, manage suppliers and cut wastage with usage insights.",
      image: images.heroWarehouse,
    },
    {
      icon: "lock" as const,
      title: "Payment Gateway",
      text: "Accept UPI, cards, wallets and net-banking with a secure, PCI-ready gateway. Instant settlements and automatic reconciliation.",
      image: images.heroPayment,
    },
    {
      icon: "truck" as const,
      title: "Online Delivery",
      text: "Plug into popular delivery aggregators, manage orders from every channel in one inbox and keep menus and stock perfectly in sync.",
      image: images.heroProducts,
    },
    {
      icon: "bar-chart" as const,
      title: "Advanced Analytics",
      text: "Live sales, best-selling items, peak hours, branch comparisons and profit margins — turn every order into a decision you can act on.",
      image: images.featureAnalytics,
    },
    {
      icon: "globe" as const,
      title: "Online Website",
      text: "Launch a branded ordering website in minutes with your menu, photos and offers — no commissions, no code, fully mobile-ready.",
      image: images.featureEditor,
    },
    {
      icon: "search" as const,
      title: "Advanced SEO",
      text: "Built-in SEO tools, structured data, auto-sitemaps and fast pages so hungry customers find your restaurant first on Google.",
      image: images.blogStrategy,
    },
    {
      icon: "user" as const,
      title: "Own Delivery",
      text: "Run your own rider fleet with live order assignment, GPS tracking, delivery zones and cash-on-delivery — keep 100% of every order.",
      image: images.featureMarketing,
    },
  ],
  stats: [
    { value: "11", label: "Tools in one place" },
    { value: "0%", label: "Commission on own orders" },
    { value: "Live", label: "Branch & sales insights" },
    { value: "24/7", label: "Online ordering" },
  ],
  workflowHeading: "From setup to scale in three steps",
  workflow: [
    {
      icon: "store" as const,
      title: "Set up your outlets",
      text: "Add branches, build your menu and configure tables, taxes and staff roles in a guided setup.",
    },
    {
      icon: "rocket" as const,
      title: "Start taking orders",
      text: "Go live across dine-in, your own website, WhatsApp and delivery apps from a single screen.",
    },
    {
      icon: "trending-up" as const,
      title: "Grow with data",
      text: "Use analytics, SEO and inventory insights to boost margins and scale to more locations.",
    },
  ],
  ctaTitle: "Bring your whole food business onto SellersLogin",
  ctaText:
    "Start with billing and your online website, then switch on delivery, payments, analytics and your own rider fleet as you grow — all from the Food Dashboard.",
};

export default function Page() {
  return (
    <>
      <CustomCursor />
      <GlobalBackground />
      <ScrollRevealInit />
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative min-h-[82vh] overflow-hidden bg-gray-950 px-4 sm:px-6 lg:px-8 pt-28 pb-18 text-white">
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
          <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-purple-600/30 blur-3xl animate-float-slow" />
          <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl animate-float-slower" />

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <div className="reveal mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-purple-100 backdrop-blur">
                <LandingIcon name={pageData.eyebrowIcon} size={15} />
                {pageData.eyebrow}
              </div>

              <h1 className="reveal reveal-delay-1 text-[clamp(40px,6vw,72px)] font-bold leading-[1.05] tracking-tight">
                {pageData.titleBefore}
                <span className="bg-linear-to-r from-purple-300 via-fuchsia-300 to-orange-200 bg-clip-text text-transparent">
                  {pageData.titleHighlight}
                </span>
                {pageData.titleAfter}
              </h1>

              <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-base leading-relaxed text-gray-200 md:text-lg">
                {pageData.description}
              </p>

              <div className="reveal reveal-delay-3 mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="https://web.sellerslogin.com/vendor/registration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-purple-300 bg-purple-200 px-8 py-3.5 text-sm font-semibold text-black no-underline shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-purple-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                >
                  Get Started Free
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white no-underline backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                >
                  Explore Features
                </Link>
              </div>
            </div>

            {/* Mock dashboard card */}
            <div className="reveal reveal-delay-2 animate-float-slow rounded-[2rem] border border-white/12 bg-white/10 p-4 shadow-[0_30px_80px_-30px_rgba(124,58,237,0.65)] backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-white p-5 text-gray-900">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      SellersLogin
                    </p>
                    <h2 className="mt-1 text-xl font-bold">{pageData.cardTitle}</h2>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                    <LandingIcon name={pageData.cardIcon} size={22} />
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {pageData.heroMetrics.map((metric) => (
                    <div key={metric.label} className={`rounded-xl bg-linear-to-br ${metric.gradient} p-4`}>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                        {metric.label}
                      </p>
                      <p className="mt-1 text-2xl font-bold text-gray-950">{metric.value}</p>
                      <p
                        className={`mt-1 text-xs font-semibold ${
                          metric.subTone === "green" ? "text-green-600" : "text-gray-500"
                        }`}
                      >
                        {metric.sub}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-3 space-y-2">
                  {pageData.heroRows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between rounded-xl bg-gray-50 px-3 py-2.5"
                    >
                      <span className="flex items-center gap-2.5 text-sm font-medium text-gray-700">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-100 text-purple-700">
                          <LandingIcon name={row.icon} size={14} />
                        </span>
                        {row.label}
                      </span>
                      <span className="rounded-full bg-white px-2.5 py-0.5 text-[11px] font-bold text-gray-600 shadow-sm">
                        {row.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="relative overflow-hidden px-4 py-18 sm:px-6 lg:px-8 md:py-24">
          <div className="pointer-events-none absolute left-1/2 top-40 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-purple-200/30 blur-[120px]" />
          <div className="relative mx-auto max-w-7xl">
            <div className="reveal mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-200/70 bg-white px-5 py-2 text-xs font-bold uppercase tracking-wider text-purple-700 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                Everything in one place
              </div>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
                {pageData.featuresHeading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
                {pageData.featuresSubtitle}
              </p>
              <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-linear-to-r from-purple-500 via-fuchsia-500 to-orange-400" />
            </div>

            <FeatureCarousel features={pageData.features} />
          </div>
        </section>

        {/* Stats strip */}
        <section className="px-4 pb-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-linear-to-br from-purple-700 via-fuchsia-700 to-purple-900 p-8 text-white shadow-[0_30px_80px_-40px_rgba(124,58,237,0.7)] sm:p-10 md:p-12">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {pageData.stats.map((stat, index) => (
                <div key={stat.label} className={`reveal reveal-delay-${index + 1} text-center`}>
                  <div className="text-4xl font-bold tracking-tight md:text-5xl">{stat.value}</div>
                  <div className="mt-2 text-sm font-semibold text-purple-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="px-4 py-18 sm:px-6 lg:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="reveal mx-auto max-w-2xl text-center">
              <div className="mb-4 inline-flex items-center rounded-full border border-gray-200 bg-white px-5 py-2 text-xs font-bold uppercase tracking-wider text-gray-700 shadow-sm">
                Up and running in days
              </div>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl">
                {pageData.workflowHeading}
              </h2>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {pageData.workflow.map((step, index) => (
                <article
                  key={step.title}
                  className={`reveal reveal-delay-${index + 1} group relative isolate overflow-hidden rounded-3xl border border-gray-200/80 bg-white p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-transparent hover:shadow-[0_40px_90px_-40px_rgba(76,29,149,0.65)]`}
                >
                  <div className="pointer-events-none absolute inset-0 -z-10 translate-y-full bg-linear-to-br from-gray-950 via-purple-950 to-purple-900 transition-transform duration-500 ease-out group-hover:translate-y-0" />

                  <div className="flex items-start justify-between">
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-purple-50 text-purple-700 ring-1 ring-purple-100 transition-colors duration-500 group-hover:bg-white/10 group-hover:text-white group-hover:ring-white/15">
                      <LandingIcon name={step.icon} size={24} />
                    </div>
                    <span className="text-[3.25rem] font-black leading-none tabular-nums text-gray-100 transition-colors duration-500 group-hover:text-white/10">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold tracking-tight text-gray-950 transition-colors duration-500 group-hover:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600 transition-colors duration-500 group-hover:text-gray-300">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 pb-28 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gray-900 p-8 text-center text-white shadow-[0_20px_60px_-15px_rgba(124,58,237,0.28)] sm:p-10 md:p-14">
            <div className="reveal inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gray-300">
              Ready when you are
            </div>
            <h2 className="reveal reveal-delay-1 mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {pageData.ctaTitle}
            </h2>
            <p className="reveal reveal-delay-2 mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-300">
              {pageData.ctaText}
            </p>
            <div className="reveal reveal-delay-3 mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="https://web.sellerslogin.com/vendor/registration"
                target="_blank"
                rel="noopener noreferrer"
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
