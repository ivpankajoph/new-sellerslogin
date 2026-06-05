"use client";

import { useEffect, useRef, useState } from "react";
import { BackToTop } from "@/components/landing/BackToTop";
import { CustomCursor } from "@/components/landing/CustomCursor";
import { FooterSection } from "@/components/landing/FooterSection";
import { GlobalBackground } from "@/components/landing/GlobalBackground";
import { Navbar } from "@/components/landing/Navbar";
import { ScrollRevealInit } from "@/components/landing/ScrollRevealInit";
import {
  RiBarChartBoxLine,
  RiShoppingCart2Line,
  RiTeamLine,
  RiFileChartLine,
  RiArrowRightLine,
  RiCheckLine,
  RiDatabase2Line,
  RiGlobalLine,
  RiSecurePaymentLine,
  RiLineChartLine,
  RiSettings4Line,
  RiShieldCheckLine,
  RiArrowRightUpLine,
  RiPulseLine,
  RiBuildingLine,
  RiFlowChart,
  RiLockLine,
  RiCloudLine,
  RiArrowDownLine,
} from "react-icons/ri";
import Link from "next/link";

/* ─── Utility ─────────────────────────────────────────────────────────── */
function useIntersection(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Animated Counter ────────────────────────────────────────────────── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const { ref, visible } = useIntersection();
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(to / 60);
    const t = setInterval(() => {
      start += step;
      if (start >= to) {
        setVal(to);
        clearInterval(t);
      } else setVal(start);
    }, 20);
    return () => clearInterval(t);
  }, [visible, to]);
  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ─── Floating Orb Background ─────────────────────────────────────────── */
function OrbBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #f9a8d4 0%, transparent 70%)",
          animation: "orbFloat 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-1/2 -right-48 w-[400px] h-[400px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, #fbcfe8 0%, transparent 70%)",
          animation: "orbFloat 11s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #f472b6 0%, transparent 70%)",
          animation: "orbFloat 9s ease-in-out infinite 2s",
        }}
      />
      <style>{`
        @keyframes orbFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.9); opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes dash {
          from { stroke-dashoffset: 300; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes barGrow {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
        .fade-up { animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) both; }
        .fade-in { animation: fadeIn 0.6s ease both; }
        .slide-right { animation: slideRight 0.6s cubic-bezier(.22,1,.36,1) both; }
      `}</style>
    </div>
  );
}

/* ─── Hero ────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden pt-24 pb-20">
      <OrbBg />

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#be185d 1px, transparent 1px), linear-gradient(90deg, #be185d 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Pill badge */}

        <h1
          className="font-serif text-6xl md:text-8xl font-bold leading-[1.05] text-gray-900 mb-6"
          style={{
            animation: "fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.1s both",
          }}
        >
          Commerce that{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, #db2777, #ec4899, #f9a8d4, #db2777)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shimmer 3s linear infinite",
            }}
          >
            scales
          </span>{" "}
          <br />
          with your ambition.
        </h1>

        <p
          className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{
            animation: "fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.25s both",
          }}
        >
          A unified B2B e-commerce dashboard that brings orders, buyers,
          analytics, and operations into one elegant command centre — built for
          enterprises that refuse to compromise.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{
            animation: "fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.4s both",
          }}
        >
          <Link href="https://web.sellerslogin.com/vendor/registration">
            <button className="flex items-center gap-2 text-gray-700 hover:text-purple-600 font-semibold px-8 py-4 rounded-full border border-gray-200 hover:border-purple-200 transition-all duration-300 hover:-translate-y-0.5 bg-white/80">
              View Live Dashboard
              <RiArrowRightUpLine />
            </button>
          </Link>
        </div>

        {/* Trust row */}
        <div
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400"
          style={{ animation: "fadeIn 1s ease 0.7s both" }}
        >
          {[
            "SOC 2 Type II",
            "GDPR Ready",
            "99.99% Uptime",
            "24 / 7 Support",
          ].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <RiCheckLine className="text-purple-400" /> {t}
            </span>
          ))}
        </div>
      </div>

      {/* Dashboard preview card */}
      <div
        className="relative z-10 mt-20 max-w-5xl mx-auto px-6 w-full"
        style={{ animation: "fadeUp 1s cubic-bezier(.22,1,.36,1) 0.5s both" }}
      >
        <DashboardPreview />
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-300 text-xs"
        style={{ animation: "fadeIn 1.2s ease 1s both" }}
      >
        <span className="tracking-widest uppercase">Scroll</span>
        <RiArrowDownLine className="text-lg animate-bounce" />
      </div>
    </section>
  );
}

/* ─── Dashboard Preview Card ──────────────────────────────────────────── */
function DashboardPreview() {
  const bars = [65, 40, 80, 55, 90, 72, 48, 85, 60, 95, 70, 88];
  return (
    <div className="rounded-3xl border border-purple-100 bg-white shadow-2xl shadow-purple-100/60 overflow-hidden">
      {/* Titlebar */}
      <div className="flex items-center gap-2 px-5 py-3 border-b border-purple-50 bg-purple-50/40">
        <span className="w-3 h-3 rounded-full bg-red-300" />
        <span className="w-3 h-3 rounded-full bg-yellow-300" />
        <span className="w-3 h-3 rounded-full bg-green-300" />
        <span className="ml-auto text-xs text-gray-400 font-mono">
          dashboard.b2bpro.io
        </span>
      </div>

      <div className="grid grid-cols-12 gap-0">
        {/* Sidebar */}
        <div className="col-span-2 border-r border-purple-50 p-4 bg-white hidden md:block">
          <div className="space-y-1">
            {[
              { icon: RiBarChartBoxLine, label: "Overview", active: true },
              { icon: RiShoppingCart2Line, label: "Orders" },
              { icon: RiTeamLine, label: "Buyers" },
              { icon: RiFileChartLine, label: "Reports" },
              { icon: RiSettings4Line, label: "Settings" },
            ].map(({ icon: Icon, label, active }) => (
              <div
                key={label}
                className={`flex items-center gap-2 text-xs px-3 py-2 rounded-xl cursor-pointer transition-colors ${
                  active
                    ? "bg-purple-50 text-purple-600 font-semibold"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <Icon className="text-base flex-shrink-0" />
                <span className="truncate">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main */}
        <div className="col-span-12 md:col-span-10 p-5 bg-gray-50/30">
          {/* KPI row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {[
              { label: "Revenue", value: "$2.4M", delta: "+18.2%", up: true },
              { label: "Orders", value: "8,341", delta: "+12.5%", up: true },
              { label: "Buyers", value: "1,209", delta: "+9.1%", up: true },
              { label: "Avg. Order", value: "$287", delta: "-2.3%", up: false },
            ].map((k) => (
              <div
                key={k.label}
                className="bg-white rounded-2xl p-4 border border-purple-50 shadow-sm"
              >
                <p className="text-xs text-gray-400 mb-1">{k.label}</p>
                <p className="text-xl font-bold text-gray-800 font-mono">
                  {k.value}
                </p>
                <p
                  className={`text-xs font-semibold mt-1 ${k.up ? "text-emerald-500" : "text-rose-400"}`}
                >
                  {k.delta}
                </p>
              </div>
            ))}
          </div>

          {/* Chart + table */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Bar chart */}
            <div className="md:col-span-2 bg-white rounded-2xl border border-purple-50 p-4 shadow-sm">
              <p className="text-xs font-semibold text-gray-600 mb-3">
                Monthly Revenue
              </p>
              <div className="flex items-end gap-1.5 h-24">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-md"
                    style={{
                      height: `${h}%`,
                      background: i === 10 ? "#db2777" : "#fce7f3",
                      transformOrigin: "bottom",
                      animation: `barGrow 0.6s cubic-bezier(.22,1,.36,1) ${i * 0.04}s both`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Mini table */}
            <div className="bg-white rounded-2xl border border-purple-50 p-4 shadow-sm">
              <p className="text-xs font-semibold text-gray-600 mb-3">
                Top Buyers
              </p>
              <div className="space-y-2">
                {[
                  { name: "Nexora Corp", val: "$124K" },
                  { name: "BlueWave Ltd", val: "$98K" },
                  { name: "Stratus Inc", val: "$76K" },
                  { name: "Vantex Group", val: "$61K" },
                ].map((b) => (
                  <div
                    key={b.name}
                    className="flex items-center justify-between text-xs"
                  >
                    <span className="text-gray-600 truncate">{b.name}</span>
                    <span className="font-semibold text-purple-600 font-mono">
                      {b.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Section Header ──────────────────────────────────────────────────── */
function SectionHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  const { ref, visible } = useIntersection();
  return (
    <div ref={ref} className="text-center max-w-2xl mx-auto mb-16 px-4">
      <span
        className={`inline-block text-xs font-semibold tracking-widest uppercase text-purple-500 mb-3 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        {eyebrow}
      </span>
      <h2
        className={`text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`text-gray-500 text-lg leading-relaxed transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

/* ─── Features ────────────────────────────────────────────────────────── */
const features = [
  {
    icon: RiBarChartBoxLine,
    title: "Real-time Analytics",
    desc: "Live dashboards powered by streaming data pipelines. Track GMV, conversion rates, and buyer behaviour as they happen — not hours later.",
    color: "#db2777",
  },
  {
    icon: RiShoppingCart2Line,
    title: "Order Management",
    desc: "Unified order lifecycle from quote to fulfilment. Handle bulk orders, custom pricing tiers, and partial shipments with no manual overhead.",
    color: "#ec4899",
  },
  {
    icon: RiTeamLine,
    title: "Buyer Accounts",
    desc: "Multi-user buyer portals with granular roles, credit limits, and approval workflows — tailored to how enterprise procurement actually works.",
    color: "#f472b6",
  },
  {
    icon: RiGlobalLine,
    title: "Multi-region Commerce",
    desc: "Sell across geographies with localised pricing, currencies, tax rules, and regulatory compliance baked into every transaction.",
    color: "#db2777",
  },
  {
    icon: RiSecurePaymentLine,
    title: "Flexible Payments",
    desc: "Net 30/60/90, PO-based invoicing, ACH, wire, and card — every B2B payment method supported without third-party patchwork.",
    color: "#ec4899",
  },
  {
    icon: RiDatabase2Line,
    title: "Product Catalogue",
    desc: "Manage millions of SKUs with variant matrices, tiered pricing, contract-specific catalogues, and ERP-synced inventory in real time.",
    color: "#f472b6",
  },
];

function FeaturesSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Platform Features"
          title="Everything your B2B operation needs."
          sub="No duct tape. No workarounds. Every capability your team demands, designed to work together from day one."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const { ref, visible } = useIntersection();
            return (
              <div
                key={f.title}
                ref={ref}
                className={`group relative bg-white border border-purple-50 hover:border-purple-200 rounded-3xl p-7 transition-all duration-500 hover:shadow-xl hover:shadow-purple-50 hover:-translate-y-1 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${f.color}15` }}
                >
                  <f.icon style={{ color: f.color, fontSize: "1.4rem" }} />
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {f.desc}
                </p>

                {/* Hover accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${f.color}, transparent)`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HowBuilt() {
  return (
    <section className="py-28 bg-purple-50/40 relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #db2777 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </section>
  );
}

/* ─── Use Cases ───────────────────────────────────────────────────────── */
const usecases = [
  {
    icon: RiBuildingLine,
    industry: "Manufacturing",
    heading: "Streamline dealer & distributor ordering",
    body: "Replace spreadsheet-based order collection with a self-serve portal. Distributors log in, see contract pricing, and submit orders that flow directly into your ERP.",
    tags: ["Bulk Orders", "Contract Pricing", "ERP Sync"],
  },
  {
    icon: RiFlowChart,
    industry: "Distribution",
    heading: "Multi-warehouse fulfillment intelligence",
    body: "Route orders to the optimal warehouse, track inventory across locations in real time, and surface low-stock alerts before they become missed shipments.",
    tags: ["Multi-warehouse", "Inventory", "Alerts"],
  },
  {
    icon: RiGlobalLine,
    industry: "Wholesale",
    heading: "Global catalogue with local pricing",
    body: "Present region-specific catalogues with localised currencies, tax-inclusive pricing, and compliance-ready invoices — all managed from one interface.",
    tags: ["Multi-currency", "Tax Rules", "Localisation"],
  },
  {
    icon: RiLineChartLine,
    industry: "SaaS / Technology",
    heading: "Usage-based & subscription billing",
    body: "Track product usage across customer accounts, trigger invoices on thresholds, and give finance teams real-time ARR and churn dashboards.",
    tags: ["Usage Billing", "ARR Tracking", "Churn Analysis"],
  },
];

function UseCases() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Use Cases"
          title="One platform. Every B2B vertical."
          sub="Whether you sell widgets or software licences, the platform adapts to your model — not the other way around."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {usecases.map((u, i) => {
            const { ref, visible } = useIntersection();
            return (
              <div
                key={u.industry}
                ref={ref}
                className={`group relative overflow-hidden border border-purple-50 hover:border-purple-200 rounded-3xl p-8 transition-all duration-500 hover:shadow-xl hover:shadow-purple-50 hover:-translate-y-1 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  transitionDelay: `${i * 100}ms`,
                  background: i % 2 === 0 ? "white" : "#faf5ff",
                }}
              >
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-40 h-40 rounded-bl-full opacity-5 bg-purple-400 transition-all duration-500 group-hover:opacity-10 group-hover:w-52 group-hover:h-52" />

                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                    <u.icon className="text-purple-500 text-xl" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-1">
                      {u.industry}
                    </p>
                    <h3 className="font-bold text-gray-800 text-lg leading-snug">
                      {u.heading}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {u.body}
                </p>
                <div className="flex flex-wrap gap-2">
                  {u.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-purple-50 text-purple-600 font-medium border border-purple-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Stats Band ──────────────────────────────────────────────────────── */
function StatsBand() {
  const { ref, visible } = useIntersection();
  const stats = [
    { value: 20, suffix: "+", label: "No. of templates" },
    { value: 40, suffix: "+", label: "Enterprise customers" },
    { value: 99, suffix: ".99%", label: "Guaranteed uptime" },
    { value: 48, suffix: "hr", label: "Average onboarding time" },
  ];
  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-r from-purple-600 via-purple-500 to-rose-400 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <p className="text-5xl font-bold font-mono mb-2">
                {visible ? (
                  <Counter to={s.value} suffix={s.suffix} />
                ) : (
                  `0${s.suffix}`
                )}
              </p>
              <p className="text-purple-100 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Workflow / How It Works ─────────────────────────────────────────── */
const steps = [
  {
    num: "01",
    title: "Connect your data sources",
    desc: "Sync your ERP, CRM, and warehouse systems in hours using pre-built connectors. No custom ETL required.",
  },
  {
    num: "02",
    title: "Configure your storefront",
    desc: "Set up buyer portals, custom catalogues, pricing rules, and payment terms through a no-code visual editor.",
  },
  {
    num: "03",
    title: "Invite your buyers",
    desc: "Send branded invite links. Buyers self-register, get assigned roles, and can place orders immediately.",
  },
  {
    num: "04",
    title: "Go live and monitor",
    desc: "Launch with confidence. Real-time dashboards surface every KPI you care about from the moment orders start flowing.",
  },
];

function HowItWorks() {
  return (
    <section className="py-28 bg-purple-50/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Getting Started"
          title="From zero to live in under 48 hours."
        />
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Horizontal connector line (desktop) */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200 hidden md:block" />

          {steps.map((s, i) => {
            const { ref, visible } = useIntersection();
            return (
              <div
                key={s.num}
                ref={ref}
                className={`flex flex-col items-center text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="relative w-20 h-20 rounded-full bg-white border-2 border-purple-200 flex items-center justify-center mb-5 shadow-md shadow-purple-100 z-10">
                  <span className="text-2xl font-bold text-purple-500 font-mono">
                    {s.num}
                  </span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{s.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Integrations Grid ───────────────────────────────────────────────── */
const integrations = [
  "Salesforce",
  "SAP",
  "Oracle",
  "NetSuite",
  "Shopify Plus",
  "QuickBooks",
  "Stripe",
  "Avalara",
  "FedEx",
  "UPS",
  "Workday",
  "HubSpot",
  "Zendesk",
  "Slack",
  "Zapier",
];

/* ─── Security Section ────────────────────────────────────────────────── */
function Security() {
  const pillars = [
    { icon: RiShieldCheckLine, label: "SOC 2 Type II certified" },
    { icon: RiLockLine, label: "AES-256 encryption at rest" },
    { icon: RiPulseLine, label: "Real-time threat monitoring" },
    { icon: RiFileChartLine, label: "Full audit trails" },
    { icon: RiGlobalLine, label: "GDPR & CCPA compliant" },
    { icon: RiCloudLine, label: "Geo-redundant backups" },
  ];
  return (
    <section className="py-24 bg-purple-50/40">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          eyebrow="Security"
          title="Enterprise-grade security by default."
          sub="Not an add-on. Not a tier. Every customer gets the same bank-level security infrastructure."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {pillars.map((p, i) => {
            const { ref, visible } = useIntersection();
            return (
              <div
                key={p.label}
                ref={ref}
                className={`flex items-center gap-3 bg-white rounded-2xl px-5 py-4 border border-purple-50 hover:border-purple-200 hover:shadow transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p.icon className="text-purple-400 text-lg flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">
                  {p.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─────────────────────────────────────────────────────────────── */
function CTA() {
  const { ref, visible } = useIntersection();
  return (
    <section className="py-28 bg-white">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-6 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="relative rounded-4xl overflow-hidden bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 p-16 shadow-2xl shadow-purple-200">
          {/* Floating circles */}
          <div className="absolute top-6 right-10 w-32 h-32 rounded-full border-2 border-white/10" />
          <div className="absolute bottom-4 left-6 w-20 h-20 rounded-full border border-white/10" />
          <div className="absolute top-1/2 left-8 w-3 h-3 rounded-full bg-white/20" />

          <p className="text-xs font-semibold tracking-widest uppercase text-purple-200 mb-4">
            Ready to transform your B2B commerce?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            See the dashboard
            <br />
            live — in 30 minutes.
          </h2>
          <p className="text-purple-100 text-lg mb-10 max-w-xl mx-auto">
            Book a personalised demo with a product specialist who knows your
            industry. No sales pitch, just a real look at your use case.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="https://web.sellerslogin.com/vendor/registration">
                <button className="group flex items-center gap-2 bg-white text-purple-600 hover:bg-purple-50 font-bold font-body px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:-translate-y-0.5">
                  Start Free
                  <RiArrowRightLine className="transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Page Assembly ───────────────────────────────────────────────────── */
export default function B2BDashboardPage() {
  return (
    <>
      <CustomCursor />
      <GlobalBackground />
      <ScrollRevealInit />
      <Navbar />
      <main className="font-sans antialiased bg-white text-gray-900 overflow-x-hidden">
        <Hero />

        <FeaturesSection />
        <StatsBand />
        <HowItWorks />
        <UseCases />

        <Security />
        <CTA />
        <FooterSection />
        <BackToTop />
      </main>
    </>
  );
}
