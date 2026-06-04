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
  title: "B2b Dashboard | SellersLogin",
  description:
    "A complete B2B commerce dashboard — account pricing, bulk ordering, quotes, credit terms, CRM, inventory, analytics, your web portal, SEO and integrated marketing (Google Ads, social, chat, Shopping SEO).",
};

const pageData = {
  eyebrow: "B2B Commerce Solution",
  eyebrowIcon: "layout" as const,
  titleBefore: "Power your entire ",
  titleHighlight: "wholesale",
  titleAfter: " business from one dashboard",
  description:
    "The B2B Dashboard brings account pricing, bulk ordering, quotes, credit terms, CRM, inventory, analytics, your web portal, SEO and integrated marketing — Google Ads, social, chat and Shopping SEO — together so your sales team closes faster and accounts reorder more.",
  cardTitle: "B2B Dashboard",
  cardIcon: "layout" as const,
  heroMetrics: [
    {
      label: "Open Quotes",
      value: "24",
      sub: "8 awaiting approval",
      subTone: "muted",
      gradient: "from-purple-50 to-fuchsia-50",
    },
    {
      label: "Reorder Value",
      value: "₹6.4L",
      sub: "↑ +22% MoM",
      subTone: "green",
      gradient: "from-orange-50 to-amber-50",
    },
  ],
  heroRows: [
    { icon: "target" as const, label: "Google Ads · 4.2x ROAS", tag: "Live" },
    { icon: "user" as const, label: "New account: Metro Foods", tag: "Net 30" },
    { icon: "message" as const, label: "Website chat · 3 active", tag: "Now" },
  ],
  featuresHeading: "One B2B Dashboard, every wholesale tool",
  featuresSubtitle:
    "From quote to reorder — account pricing, ordering, payments, CRM and marketing working together, so your team spends less time on admin and more time growing accounts.",
  features: [
    {
      icon: "user" as const,
      title: "Account-Based Pricing",
      text: "Set custom price lists, tiers and contract rates per buyer or group. The right price shows automatically the moment a customer logs in.",
      image: images.heroPayment,
    },
    {
      icon: "package" as const,
      title: "Bulk & Repeat Ordering",
      text: "Fast order pads, CSV upload and one-click reorders let buyers place large, recurring orders in seconds — no back-and-forth.",
      image: images.heroWarehouse,
    },
    {
      icon: "layout" as const,
      title: "Quotes & RFQ Workflows",
      text: "Receive requests for quotes, build proposals, and run multi-step approvals with full status tracking from request to purchase order.",
      image: images.featureEditor,
    },
    {
      icon: "credit-card" as const,
      title: "Credit & Payment Terms",
      text: "Offer Net 15/30/60 terms, set per-account credit limits, track outstanding balances and collect payments online.",
      image: images.featurePayment,
    },
    {
      icon: "trending-up" as const,
      title: "Sales Team & CRM",
      text: "Give reps account-level visibility, assign territories, track the pipeline and follow up on quotes — all from one workspace.",
      image: images.featureMarketing,
    },
    {
      icon: "warehouse" as const,
      title: "Catalog & Inventory",
      text: "Manage large catalogs, variants and real-time stock across warehouses, with low-stock alerts and supplier tracking.",
      image: images.heroProducts,
    },
    {
      icon: "bar-chart" as const,
      title: "Advanced Analytics",
      text: "Track account performance, top products, reorder rates and sales-rep results — turn wholesale data into clear decisions.",
      image: images.featureAnalytics,
    },
    {
      icon: "globe" as const,
      title: "B2B Web Portal",
      text: "Give every buyer a branded self-service portal to browse catalogs, see their pricing, reorder and download invoices 24/7.",
      image: images.heroStore,
    },
    {
      icon: "search" as const,
      title: "Advanced SEO",
      text: "Built-in SEO tools, structured data and fast pages so buyers searching for your products find you first on Google.",
      image: images.blogStrategy,
    },
    {
      icon: "cart" as const,
      title: "Shopping SEO",
      text: "Sync your catalog to Google Shopping and product feeds so your listings appear with images, price and stock to ready-to-buy searchers.",
      image: images.productShoes,
      badge: "Coming soon",
    },
    {
      icon: "target" as const,
      title: "Google Ads",
      text: "Launch and manage Search, Display and Shopping campaigns from the dashboard, with conversion tracking and ROAS reporting built in.",
      image: images.blogMarketing,
      badge: "Coming soon",
    },
    {
      icon: "megaphone" as const,
      title: "Social Media Management",
      text: "Schedule posts, run lead campaigns and manage your LinkedIn, Facebook and Instagram presence without leaving SellersLogin.",
      image: images.featureMobile,
      badge: "Coming soon",
    },
    {
      icon: "message" as const,
      title: "Website Chat",
      text: "Convert visitors in real time with live chat and automated replies on your portal — route enquiries straight to the right rep.",
      image: images.featureAi,
      badge: "Coming soon",
    },
  ],
  stats: [
    { value: "3x", label: "Faster quotes" },
    { value: "Net 30", label: "Flexible credit terms" },
    { value: "Live", label: "Account & pipeline view" },
    { value: "4.2x", label: "Avg. ad ROAS" },
  ],

  // ── NEW: Trust Brands ───────────────────────────────────────────────────────
  trustBrands: [
    "Metro Foods",
    "Bharat Traders",
    "Sunrise Wholesale",
    "Kiran Distributors",
    "NovaPack India",
    "Apex Retail Co.",
    "Greenfield Agro",
    "Reliance Merchants",
    "Prime Stockists",
    "Delta Supply Co.",
  ],

  // ── NEW: Testimonials ───────────────────────────────────────────────────────
  testimonials: [
    {
      quote:
        "Before SellersLogin, quotes were going out on email and no one knew the status. Now every rep can see where a deal is in real time. We closed 40% more accounts in our first quarter.",
      name: "Rajesh Sharma",
      role: "Head of Sales",
      company: "Metro Foods Pvt. Ltd.",
    },
    {
      quote:
        "The reorder pad alone saved us hours every week. Our buyers love logging in and placing their weekly orders without calling us.",
      name: "Priya Nair",
      role: "Operations Manager",
      company: "Sunrise Wholesale",
    },
    {
      quote:
        "Net 30 terms used to be a nightmare to track. Now I can see every outstanding balance from one screen. Collections improved in the first month.",
      name: "Amit Verma",
      role: "Finance Lead",
      company: "Bharat Traders",
    },
    {
      quote:
        "We were running Google Ads manually and guessing at ROAS. The integrated dashboard showed us exactly which campaigns drove reorders. Game changer.",
      name: "Sneha Kapoor",
      role: "Marketing Head",
      company: "NovaPack India",
    },
    {
      quote:
        "Our catalog has over 2,000 SKUs. Managing stock alerts and variants used to require three tools. SellersLogin handles it all, including supplier tracking.",
      name: "Vikram Sinha",
      role: "Procurement Head",
      company: "Delta Supply Co.",
    },
    {
      quote:
        "The B2B portal gave our buyers a self-service experience they actually use. Invoice downloads, order history, account pricing — they love it.",
      name: "Deepa Menon",
      role: "Customer Success",
      company: "Apex Retail Co.",
    },
  ],

  // ── NEW: Comparison table ───────────────────────────────────────────────────
  comparison: [
    { feature: "Account-specific pricing",  spreadsheet: false, erp: true  },
    { feature: "Bulk & CSV ordering",        spreadsheet: true,  erp: false },
    { feature: "RFQ & quote workflows",      spreadsheet: false, erp: true  },
    { feature: "Net 30/60 credit terms",     spreadsheet: false, erp: true  },
    { feature: "CRM & sales pipeline",       spreadsheet: false, erp: false },
    { feature: "Integrated Google Ads",      spreadsheet: false, erp: false },
    { feature: "B2B self-service portal",    spreadsheet: false, erp: false },
    { feature: "Shopping SEO sync",          spreadsheet: false, erp: false },
    { feature: "Live inventory & alerts",    spreadsheet: true,  erp: true  },
    { feature: "Advanced analytics",         spreadsheet: true,  erp: true  },
  ],

  // ── NEW: Live metrics ───────────────────────────────────────────────────────
  liveMetrics: [
    { value: "₹120Cr+", label: "GMV processed" },
    { value: "8,400+",  label: "Active accounts" },
    { value: "3 days",  label: "Avg. onboarding time" },
    { value: "98.7%",   label: "Platform uptime" },
  ],

  workflowHeading: "From onboarding to scale in three steps",
  workflow: [
    {
      icon: "layout" as const,
      title: "Onboard your accounts",
      text: "Add buyers, set account-level price lists, credit limits and approval rules in a guided setup.",
    },
    {
      icon: "rocket" as const,
      title: "Open your B2B portal",
      text: "Go live with bulk ordering, quotes and reorders across your web portal and sales team.",
    },
    {
      icon: "trending-up" as const,
      title: "Scale with marketing & data",
      text: "Drive demand with Google Ads, social and Shopping SEO, then grow margins using analytics.",
    },
  ],
  ctaTitle: "Bring your whole wholesale business onto SellersLogin",
  ctaText:
    "Start with pricing and bulk ordering, then switch on quotes, credit terms, CRM, marketing and analytics as you grow — all from the B2B Dashboard.",
};

export default function Page() {
  return (
    <>
      <CustomCursor />
      <GlobalBackground />
      <ScrollRevealInit />
      <Navbar />

      <main>
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
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

        {/* ── Features ─────────────────────────────────────────────────────── */}
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

        {/* ── Stats strip ──────────────────────────────────────────────────── */}
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

        {/* ── NEW: Trust Marquee ────────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-y border-gray-100 bg-white py-5">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-white to-transparent" />
          <div className="flex animate-marquee gap-14 whitespace-nowrap">
            {[...pageData.trustBrands, ...pageData.trustBrands].map((brand, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wide text-gray-400"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-purple-300" />
                {brand}
              </span>
            ))}
          </div>
        </section>

        {/* ── NEW: Testimonials ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gray-950 px-4 py-20 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute left-1/3 top-0 h-[28rem] w-[28rem] rounded-full bg-purple-700/15 blur-[100px]" />
          <div className="pointer-events-none absolute right-1/4 bottom-0 h-[22rem] w-[22rem] rounded-full bg-fuchsia-700/10 blur-[80px]" />

          <div className="relative mx-auto max-w-7xl">
            <div className="reveal mb-14 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-purple-400">
                  What buyers &amp; sellers say
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Built for the teams <br className="hidden sm:block" />
                  <span className="text-gray-400">actually closing deals</span>
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-gray-500">
                Wholesale teams across India use SellersLogin to cut quote time, track accounts and grow reorders.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pageData.testimonials.map((t, i) => (
                <article
                  key={t.name}
                  className={`reveal reveal-delay-${(i % 3) + 1} group relative overflow-hidden rounded-2xl border border-white/8 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:border-white/15 hover:bg-white/8 ${
                    i === 1 ? "lg:mt-8" : i === 2 ? "lg:mt-4" : ""
                  }`}
                >
                  {/* Decorative quote mark */}
                  <span className="absolute right-6 top-5 select-none text-6xl font-black leading-none text-white/5">
                    "
                  </span>

                  {/* Stars */}
                  <div className="mb-4 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <svg key={s} className="h-3.5 w-3.5 fill-amber-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-[15px] leading-relaxed text-gray-300">{t.quote}</p>

                  <div className="mt-6 flex items-center gap-3 border-t border-white/8 pt-5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-fuchsia-500 text-xs font-bold text-white">
                      {t.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{t.name}</p>
                      <p className="text-[11px] text-gray-500">{t.role} · {t.company}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── NEW: Services Comparison ──────────────────────────────────────── */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="reveal mx-auto mb-14 max-w-2xl text-center">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-purple-600">
                Why SellersLogin
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                Everything else is patchwork.
                <br />
                <span className="text-gray-400">This is a system.</span>
              </h2>
            </div>

            <div className="reveal overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              {/* Header row */}
              <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] border-b border-gray-100 bg-gray-50 px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-500">
                <span>Capability</span>
                <span className="text-center">Spreadsheets</span>
                <span className="text-center">Generic ERP</span>
                <span className="text-center text-purple-700">SellersLogin</span>
              </div>

              {pageData.comparison.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-[1.6fr_1fr_1fr_1fr] items-center border-b border-gray-100 px-6 py-4 last:border-0 ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  }`}
                >
                  <span className="text-sm font-medium text-gray-800">{row.feature}</span>

                  {/* Spreadsheet */}
                  <span className="flex justify-center">
                    {row.spreadsheet ? (
                      <span className="text-[11px] font-semibold text-gray-400">Partial</span>
                    ) : (
                      <svg className="h-4 w-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </span>

                  {/* ERP */}
                  <span className="flex justify-center">
                    {row.erp ? (
                      <svg className="h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="h-4 w-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </span>

                  {/* SellersLogin — always ✓ */}
                  <span className="flex justify-center">
                    <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NEW: Live Metrics ─────────────────────────────────────────────── */}
        <section className="px-4 pb-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-3xl border border-gray-200 bg-white px-8 py-12 shadow-sm sm:px-12">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {pageData.liveMetrics.map((m, i) => (
                <div key={m.label} className={`reveal reveal-delay-${i + 1} group text-center`}>
                  <div className="text-[2.75rem] font-black tabular-nums leading-none tracking-tight text-gray-950">
                    {m.value}
                  </div>
                  <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    {m.label}
                  </div>
                  <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gray-100 transition-all duration-300 group-hover:w-16 group-hover:bg-purple-400" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ─────────────────────────────────────────────────── */}
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

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
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