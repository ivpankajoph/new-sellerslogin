import type { Metadata } from "next";
import Link from "next/link";
import { PricingFaqSection } from "@/components/landing/PricingFaqSection";
import {
  ArrowRight,
  BellRing,
  CheckCircle2,
  Clock3,
  CreditCard,
  Headphones,
  LineChart,
  Megaphone,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
  Zap,
} from "lucide-react";
import { CustomCursor } from "@/components/landing/CustomCursor";
import { ScrollRevealInit } from "@/components/landing/ScrollRevealInit";
import { CountdownBanner } from "@/components/landing/CountdownBanner";
import { FooterSection } from "@/components/landing/FooterSection";
import { GlobalBackground } from "@/components/landing/GlobalBackground";

export const metadata: Metadata = {
  title: "Pricing | Sellers Login",
  description:
    "Compare Sellers Login Startup, Growth, and Enterprise pricing with storefront, product, marketing, WhatsApp, payment, support, hosting, and security features.",
};

const registrationHref = "https://web.sellerslogin.com/vendor/registration";
const contactHref = "/contact";

const plans = [
  {
    name: "Startup",
    label: "Best for new sellers",
    price: "INR 2,499",
    sourceNote: "Source plan: Startup",
    description:
      "For teams ready to move beyond a basic launch with more stores, users, and lower transaction fees.",
    cta: "Start with Startup",
    href: registrationHref,
    accent: "border-violet-200 bg-white",
    icon: Zap,
    stats: [
      ["Online stores", "3"],
      ["Users access", "2"],
      ["SL transaction fee", "2%"],
      ["Products", "Scale-ready"],
    ],
    features: [
      "Storefront setup with domain booking",
      "Live analytics for store performance",
      "Hosting, security, and virus-free web",
      "No Sellers Login logo on storefront",
      "Customer, sales, and product workflows",
      "Payment gateway support",
    ],
  },
  {
    name: "Growth",
    label: "Most popular",
    price: "Custom Growth",
    sourceNote: "Source plan: Agency",
    description:
      "For growing brands, agencies, and operators managing multiple stores, larger catalogs, and richer automation.",
    cta: "Choose Growth",
    href: registrationHref,
    accent: "relative border-violet-500 bg-violet-950 text-white shadow-2xl shadow-violet-200",
    icon: LineChart,
    stats: [
      ["Online stores", "10"],
      ["Users access", "6"],
      ["SL transaction fee", "1.5%"],
      ["Products", "600"],
    ],
    features: [
      "10 online stores for multi-brand operations",
      "Advanced storefront, catalog, and product controls",
      "Marketing, email, and WhatsApp Business API workflows",
      "Live analytics with lower transaction fees",
      "Hosting, security, and virus-free web",
      "Built for service-led and scale-led setups",
    ],
    recommended: true,
  },
  {
    name: "Enterprise",
    label: "For large teams",
    price: "Custom Quote",
    sourceNote: "Source plan: Enterprise",
    description:
      "For businesses that need custom store counts, larger teams, advanced onboarding, and commercial flexibility.",
    cta: "Talk to sales",
    href: contactHref,
    accent: "border-slate-200 bg-white",
    icon: ShieldCheck,
    stats: [
      ["Online stores", "Custom"],
      ["Users access", "30"],
      ["SL transaction fee", "0.75%"],
      ["Products", "1000"],
    ],
    features: [
      "Custom rollout for store count and team structure",
      "30 user access for larger operational teams",
      "Lowest listed Sellers Login transaction fee",
      "Enterprise onboarding and support mapping",
      "Hosting and security included",
      "Payment gateway and support workflows",
    ],
  },
];



const capabilityGroups = [
  {
    title: "Store Features",
    icon: Store,
    rows: [
      ["Online store", "3", "10", "Custom"],
      ["Users access", "2", "6", "30"],
      ["New domain booking", "Yes", "Yes", "Custom"],
      ["Live analytics", "Yes", "Yes", "Custom"],
      ["SL transaction fees", "2%", "1.5%", "0.75%"],
      ["Hosting and security", "Yes", "Yes", "Yes"],
      ["Sellers Login logo", "No", "No", "Custom"],
      ["Virus-free web", "Yes", "Yes", "Custom"],
    ],
  },
  {
    title: "Customer and Sales",
    icon: Users,
    rows: [
      ["Customer records", "Included", "Advanced", "Custom"],
      ["Order and sales visibility", "Included", "Advanced", "Advanced"],
      ["B2C and B2B workflow fit", "Startup", "Multi-store", "Custom"],
    ],
  },
  {
    title: "Products and Storefront",
    icon: PackageCheck,
    rows: [
      ["Product capacity", "Scale-ready", "600", "1000"],
      ["Storefront feature controls", "Included", "Advanced", "Custom"],
      ["SEO and page controls", "Included", "Advanced", "Advanced"],
    ],
  },
  {
    title: "Marketing and Automation",
    icon: Megaphone,
    rows: [
      ["Marketing features", "Core", "Advanced", "Custom"],
      ["Email features", "Core", "Advanced", "Custom"],
      ["WhatsApp Business API", "Available", "Advanced", "Custom"],
    ],
  },
  {
    title: "Payments and Support",
    icon: CreditCard,
    rows: [
      ["Payment gateway", "Included", "Included", "Included"],
      ["Support", "Standard", "Priority", "Enterprise"],
      ["Setup guidance", "Guided", "Growth mapping", "Custom onboarding"],
    ],
  },
];



export default function PricingPage() {
  return (
    <>
      <CustomCursor />
      <GlobalBackground />
      <ScrollRevealInit />
      <CountdownBanner />

      <main className="relative overflow-hidden bg-white text-slate-950">
        <section className="relative px-4 pb-14 pt-32 sm:px-6 lg:px-8 lg:pb-20">
          <div className="absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(circle_at_20%_15%,rgba(124,58,237,0.18),transparent_34%),radial-gradient(circle_at_82%_10%,rgba(14,165,233,0.12),transparent_30%),linear-gradient(180deg,#ffffff_0%,#faf7ff_100%)]" />
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center text-center">
          
              <h1 className="reveal reveal-delay-1 max-w-4xl text-[clamp(42px,7vw,82px)] font-bold leading-[0.95] tracking-tight text-slate-950">
                Choose the plan that makes your store grow faster.
              </h1>
              <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-lg leading-8 text-slate-600 mx-auto">
                Compare Startup, Growth, and Enterprise in one clear view. Every tier is arranged around the features sellers ask about first: stores, users, products, marketing, payments, support, hosting, and security.
              </p>
              <div className="reveal reveal-delay-3 mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        
              </div>
            </div>

            <div className="reveal reveal-delay-4 mt-12 relative overflow-hidden rounded-[2rem] p-8 sm:p-12 text-center shadow-2xl bg-violet-950">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />
              <div className="relative z-10 flex flex-col items-center justify-center">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                  Need help choosing the right plan?
                </h2>
                <p className="text-violet-100 mb-8 max-w-2xl mx-auto text-lg">
                  If you need any help mapping your catalog size, setup path, or feature stack, feel free to reach out to our team.
                </p>
                <Link
                  href="mailto:info@sellerslogin.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-violet-900 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:bg-violet-50 focus:outline-none"
                >
                  <Headphones className="h-5 w-5 text-violet-600 shrink-0" />
                  Contact Us via Email
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-5 lg:grid-cols-3">
              {plans.map((plan) => {
                const Icon = plan.icon;
                const isRecommended = Boolean(plan.recommended);

                return (
                  <article
                    key={plan.name}
                    className={`flex min-h-full flex-col rounded-[2rem] border p-6 transition-all hover:-translate-y-1 ${plan.accent}`}
                  >
                    {isRecommended && (
                      <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-violet-700">
                        <BellRing className="h-3.5 w-3.5" />
                        Recommended
                      </div>
                    )}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className={`text-xs font-bold uppercase tracking-wider ${isRecommended ? "text-violet-200" : "text-violet-700"}`}>
                          {plan.label}
                        </p>
                        <h2 className="mt-2 text-3xl font-bold">{plan.name}</h2>
                      </div>
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${isRecommended ? "bg-white/10 text-white" : "bg-violet-50 text-violet-700"}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <p className={`mt-5 text-4xl font-bold ${isRecommended ? "text-white" : "text-slate-950"}`}>{plan.price}</p>
                    <p className={`mt-2 text-xs font-semibold ${isRecommended ? "text-violet-200" : "text-slate-500"}`}>{plan.sourceNote}</p>
                    <p className={`mt-4 min-h-[84px] text-sm leading-6 ${isRecommended ? "text-slate-300" : "text-slate-600"}`}>{plan.description}</p>

                    <ul className="mt-6 flex-1 space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex gap-3 text-sm leading-6">
                          <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${isRecommended ? "text-violet-200" : "text-violet-600"}`} />
                          <span className={isRecommended ? "text-slate-200" : "text-slate-700"}>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={plan.href}
                      target={plan.href.startsWith("http") ? "_blank" : undefined}
                      rel={plan.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold no-underline transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 ${
                        isRecommended
                          ? "bg-white text-violet-700 hover:bg-violet-50"
                          : "bg-violet-600 text-white shadow-lg shadow-violet-100 hover:bg-violet-700"
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="compare" className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-violet-700">Complete comparison</p>
                <h2 className="mt-3 text-[clamp(32px,5vw,56px)] font-bold leading-none tracking-tight text-slate-950">
                  See every important feature at a glance.
                </h2>
              </div>
              <p className="text-base leading-7 text-slate-600">
                The source pricing matrix categories are organized into readable groups so buyers can compare store features, customers, sales, products, storefront controls, marketing, email, WhatsApp Business API, payments, and support without confusion.
              </p>
            </div>

            <div className="overflow-x-auto rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-100">
              <div className="min-w-[760px]">
                <div className="grid grid-cols-[1.25fr_1fr_1fr_1fr] bg-slate-950 text-white">
                  <div className="px-4 py-4 text-sm font-bold sm:px-6">Features</div>
                  {plans.map((plan) => (
                    <div key={plan.name} className="px-3 py-4 text-center text-sm font-bold sm:px-6">
                      {plan.name}
                    </div>
                  ))}
                </div>

                {capabilityGroups.map(({ title, icon: Icon, rows }) => (
                  <div key={title} className="border-t border-slate-200">
                    <div className="flex items-center gap-2 bg-violet-50 px-4 py-3 text-sm font-bold text-violet-800 sm:px-6">
                      <Icon className="h-4 w-4" />
                      {title}
                    </div>
                    {rows.map(([feature, startup, growth, enterprise]) => (
                      <div key={feature} className="grid grid-cols-[1.25fr_1fr_1fr_1fr] border-t border-slate-100 text-sm">
                        <div className="px-4 py-4 font-semibold text-slate-800 sm:px-6">{feature}</div>
                        <div className="px-3 py-4 text-center text-slate-600 sm:px-6">{startup}</div>
                        <div className="bg-violet-50/60 px-3 py-4 text-center font-semibold text-violet-800 sm:px-6">{growth}</div>
                        <div className="px-3 py-4 text-center text-slate-600 sm:px-6">{enterprise}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-violet-200 bg-[linear-gradient(135deg,#4c1d95_0%,#7c3aed_52%,#0f172a_100%)] p-6 text-white shadow-2xl shadow-violet-200 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-violet-200">Need help choosing?</p>
                <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
                  Map your catalog size, team access, and automation needs to the right plan.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-violet-100 sm:text-base">
                  The fastest path is simple: choose Startup for first scale, Growth for multi-store operations, and Enterprise when store count, user count, or onboarding needs are custom.
                </p>
              </div>
              <Link
                href={contactHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-violet-700 no-underline transition-all hover:-translate-y-0.5 hover:bg-violet-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-violet-700"
              >
                Get plan guidance
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <PricingFaqSection />
      </main>

      <FooterSection />
    </>
  );
}
