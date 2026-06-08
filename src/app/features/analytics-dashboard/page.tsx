"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BackToTop } from "@/components/landing/BackToTop";
import { CustomCursor } from "@/components/landing/CustomCursor";
import { FooterSection } from "@/components/landing/FooterSection";
import { GlobalBackground } from "@/components/landing/GlobalBackground";
import { Navbar } from "@/components/landing/Navbar";
import { ScrollRevealInit } from "@/components/landing/ScrollRevealInit";
import {
  FiBarChart2,
  FiPieChart,
  FiActivity,
  FiTrendingUp,
  FiFilter,
  FiDownload,
  FiUsers,
  FiTarget,
  FiDollarSign,
  FiArrowRight,
  FiArrowUp,
  FiArrowDown,
  FiCheckCircle,
  FiEye,
  FiMonitor,
  FiGlobe
} from "react-icons/fi";
import Link from "next/link";

/* ─────────────────────────────────────────────
   ANIMATION HOOK
───────────────────────────────────────────── */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─────────────────────────────────────────────
   COUNTER
───────────────────────────────────────────── */
function Counter({ end, prefix = "", suffix = "", decimals = 0 }: { end: number; prefix?: string; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useInView(0.1);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 1600;
    const steps = 60;
    const increment = end / steps;
    const interval = duration / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(parseFloat(start.toFixed(decimals)));
    }, interval);
    return () => clearInterval(timer);
  }, [visible, end, decimals]);
  return (
    <span ref={ref}>
      {prefix}{decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}{suffix}
    </span>
  );
}

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
function HeroSection() {
  const bars = [40, 65, 50, 80, 55, 90, 72, 85, 60, 95];
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent px-6 pt-20">
      <div className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #e9d5ff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.35,
        }} />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-25 -top-24 -right-24"
          style={{ background: "radial-gradient(circle, #a855f7, #f3e8ff)" }} />
        <div className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-20 bottom-0 -left-20"
          style={{ background: "radial-gradient(circle, #e9d5ff, #faf5ff)" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
          
            <h1 className="text-6xl md:text-7xl font-black text-gray-900 leading-[1.0] mb-6">
              Your data,
              <br />
              <span className="relative">
                beautifully
                <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full"
                  style={{ background: "linear-gradient(90deg, #9333ea, #e9d5ff)" }} />
              </span>
              <br />
              visualized.
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
              Turn complex data into actionable insights. Monitor live traffic, track revenue, and understand customer behavior with 100+ pre-built reports.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="https://web.sellerslogin.com/vendor/registration">
              <button className="group flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ background: "linear-gradient(135deg,#9333ea,#c084fc)" }}>
                Start Analyzing
                <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button></Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden border-2 border-purple-100 bg-white shadow-2xl"
              style={{ boxShadow: "0 40px 100px rgba(147,51,234,0.12)" }}>
              <div className="px-5 py-4 border-b border-purple-50 flex items-center justify-between"
                style={{ background: "linear-gradient(135deg,#faf5ff,white)" }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg,#9333ea,#c084fc)" }}>
                    <FiTrendingUp size={14} className="text-white" />
                  </div>
                  <span className="font-bold text-gray-800 text-sm">
                    Revenue Overview
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold bg-purple-100 text-purple-600 px-2 py-1 rounded">This Month</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-end justify-between mb-8">
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Total Revenue</p>
                    <p className="text-3xl font-black text-gray-900">$124,592.00</p>
                  </div>
                  <div className="flex items-center gap-1 text-green-500 bg-green-50 px-2.5 py-1 rounded-full">
                    <FiArrowUp size={12} />
                    <span className="text-xs font-bold">+24%</span>
                  </div>
                </div>

                <div className="flex items-end gap-1.5 h-32">
                  {bars.map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-sm transition-all duration-700"
                      style={{
                        height: `${h}%`,
                        background: i === 7 ? "linear-gradient(180deg,#9333ea,#c084fc)" : "#f3e8ff",
                      }} />
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-purple-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center">
                      <FiUsers size={16} className="text-purple-600" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Visitors</p>
                      <p className="text-sm font-black text-gray-800">45,210</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                      <FiTarget size={16} className="text-green-500" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Conversion</p>
                      <p className="text-sm font-black text-gray-800">3.4%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-4 py-3 border-2 border-purple-100 flex items-center gap-3"
              style={{ boxShadow: "0 12px 40px rgba(147,51,234,0.1)" }}>
              <div className="w-8 h-8 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                <FiActivity size={14} className="text-purple-500" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">Live Traffic</p>
                <p className="text-[10px] text-gray-400 font-semibold">124 active users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   STATS BAND
───────────────────────────────────────────── */
function StatsBand() {
  const { ref, visible } = useInView();
  const stats = [
    { value: 100, suffix: "+", label: "Pre-built Reports", prefix: "", decimals: 0 },
    { value: 0, suffix: "ms", label: "Data Lag", prefix: "< ", decimals: 0 },
    { value: 99.9, suffix: "%", label: "Uptime", prefix: "", decimals: 1 },
    { value: 3, suffix: "x", label: "Faster Insights", prefix: "", decimals: 0 },
  ];
  return (
    <section ref={ref} className="py-16 px-6"
      style={{ background: "linear-gradient(135deg,#f3e8ff 0%,#faf5ff 50%,#f3e8ff 100%)" }}>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="text-center transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transitionDelay: `${i * 100}ms` }}>
            <p className="text-4xl md:text-5xl font-black text-gray-900 mb-1">
              {visible ? <Counter end={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} /> : `${s.prefix}0${s.suffix}`}
            </p>
            <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FEATURES
───────────────────────────────────────────── */
function FeaturesSection() {
  const { ref, visible } = useInView();
  const features = [
    { icon: FiActivity, title: "Real-Time Tracking", desc: "Watch visitors interact with your site in real time, block by block." },
    { icon: FiTarget, title: "Conversion Funnels", desc: "Identify exactly where users drop off and optimize for higher conversions." },
    { icon: FiUsers, title: "Cohort Analysis", desc: "Group users by behavior and track retention over weeks and months." },
    { icon: FiDollarSign, title: "Profit Margins", desc: "Automatically calculate COGS, shipping, and taxes to see true profit." },
    { icon: FiPieChart, title: "Custom Reports", desc: "Build tailored dashboards with drag-and-drop widgets and custom metrics." },
    { icon: FiMonitor, title: "Device Breakdowns", desc: "Understand how mobile vs desktop users behave on your store." },
    { icon: FiGlobe, title: "Geographic Data", desc: "See exactly where your best customers are located globally." },
    { icon: FiDownload, title: "Automated Exports", desc: "Schedule daily or weekly email reports for your entire team." },
  ];

  return (
    <section className="py-32 px-6" style={{ background: "#faf5ff" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-purple-500 font-semibold tracking-widest text-sm uppercase mb-4">Features</p>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900">
            Insights that,
            <br />
            <span className="text-purple-400">drive growth.</span>
          </h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div key={i}
              className="p-6 rounded-2xl bg-white border border-purple-100 hover:border-purple-300 hover:-translate-y-2 hover:shadow-xl transition-all duration-500 cursor-default"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transitionDelay: `${i * 55}ms`,
                transitionProperty: "opacity, transform, border-color, box-shadow",
                boxShadow: "0 2px 16px rgba(147,51,234,0.04)",
              }}>
              <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center mb-4">
                <f.icon size={20} className="text-purple-500" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FLOW SECTION
───────────────────────────────────────────── */
function FlowSection() {
  const { ref, visible } = useInView();
  const steps = [
    { icon: FiCheckCircle, title: "Connect Store", desc: "1-click integration with your backend.", color: "#e8f5e9" },
    { icon: FiActivity, title: "Data Flows In", desc: "Millions of events processed securely.", color: "#f3e8ff" },
    { icon: FiTrendingUp, title: "AI Analyzes", desc: "Machine learning finds hidden trends.", color: "#e9d5ff" },
    { icon: FiTarget, title: "Insights Generated", desc: "Clear actions to improve sales.", color: "#faf5ff" },
  ];

  return (
    <section className="py-32 px-6 bg-transparent overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-purple-500 font-semibold tracking-widest text-sm uppercase mb-4">How it works</p>
          <h2 className="text-5xl font-black text-gray-900">
            From raw data to
            <br />
            <span className="text-purple-400">smart decisions.</span>
          </h2>
        </div>

        <div ref={ref} className="flex flex-col md:flex-row items-center justify-center gap-0">
          {steps.map((s, i) => (
            <div key={i} className="flex md:flex-col items-center gap-0 flex-1 w-full max-w-[200px]">
              <div
                className="flex flex-col md:items-center items-start gap-3 p-4 flex-1 transition-all duration-700"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: `${i * 130}ms`,
                }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 mx-auto border-4 border-white shadow-md"
                  style={{ background: s.color, boxShadow: "0 0 0 4px #f3e8ff" }}>
                  <s.icon size={22} className="text-purple-500" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-gray-900 text-sm mb-1">{s.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center flex-shrink-0 mt-7">
                  <FiArrowRight size={16} className="text-purple-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CTA
───────────────────────────────────────────── */
function CTASection() {
  const { ref, visible } = useInView();
  return (
    <section className="py-32 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg,#7e22ce 0%,#9333ea 50%,#c084fc 100%)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white opacity-5 blur-3xl" />
      </div>
      <div ref={ref}
        className="relative z-10 max-w-3xl mx-auto text-center transition-all duration-1000"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(36px)" }}>
        <FiBarChart2 size={48} className="text-white/50 mx-auto mb-8" />
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6" >
          Stop guessing,
          <br />
          start growing.
        </h2>
        <p className="text-purple-100 text-xl mb-10 leading-relaxed">
          Access world-class analytics and scale your business with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="https://web.sellerslogin.com/vendor/registration">
          <button className="group flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-white text-purple-600 font-bold text-lg hover:bg-purple-50 transition-all hover:-translate-y-1 shadow-lg">
            View Your Dashboard
            <FiArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button></Link>
        </div>
      </div>
    </section>
  );
}

function ReportBuilderSection() {
  const { ref, visible } = useInView();
  const layers = [
    { label: "Revenue", color: "bg-purple-500", width: "92%" },
    { label: "Orders", color: "bg-purple-300", width: "76%" },
    { label: "Returns", color: "bg-gray-300", width: "34%" },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-6 py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div
          className="relative transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-36px)" }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-purple-100 bg-purple-50 shadow-2xl shadow-purple-100">
            <div className="relative h-[430px]">
              <Image
                src="/images/dashboard/d1.png"
                alt="Sellers Login analytics dashboard report preview"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover object-left"
              />
              <div className="absolute inset-0 bg-linear-to-r from-white/20 via-transparent to-purple-950/35" />
            </div>
          </div>
          <div className="absolute -bottom-7 left-8 right-8 rounded-3xl border border-purple-100 bg-white p-5 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-black text-gray-900">Metric mixer</p>
              <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-bold text-purple-600">Live</span>
            </div>
            <div className="space-y-3">
              {layers.map((layer) => (
                <div key={layer.label} className="grid grid-cols-[80px_1fr] items-center gap-3">
                  <span className="text-xs font-bold text-gray-500">{layer.label}</span>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                    <div className={`h-full rounded-full ${layer.color}`} style={{ width: visible ? layer.width : "0%" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={ref}
          className="transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(34px)" }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-purple-500">Report builder</p>
          <h2 className="text-5xl font-black leading-tight text-gray-900">
            Build the exact view your team needs.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-500">
            Combine sales, inventory, traffic, payment, and delivery signals into role-specific dashboards without waiting on manual spreadsheet work.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: FiFilter, label: "Smart filters" },
              { icon: FiEye, label: "Live visibility" },
              { icon: FiDownload, label: "Auto exports" },
            ].map((item, index) => (
              <div
                key={item.label}
                className="rounded-2xl border border-purple-100 bg-purple-50 p-5 transition-all duration-700"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(22px)",
                  transitionDelay: `${index * 120}ms`,
                }}
              >
                <item.icon className="mb-4 text-purple-600" size={22} />
                <p className="text-sm font-black text-gray-900">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InsightSegmentsSection() {
  const { ref, visible } = useInView();
  const cards = [
    { title: "Customer cohorts", value: "All Group", delta: "+12%", icon: FiUsers },
    { title: "Revenue leakage", value: "All Data", delta: "-7%", icon: FiArrowDown },
    { title: "Conversion goals", value: "Instant live", delta: "+9%", icon: FiTarget },
    { title: "Storefront regions", value: "All Zones", delta: "+16%", icon: FiGlobe },
  ];

  return (
    <section className="overflow-hidden bg-purple-50 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-purple-500">Insight segments</p>
          <h2 className="text-5xl font-black leading-tight text-gray-900">Move from top-line numbers to the exact segment causing change.</h2>
        </div>
        <div ref={ref} className="grid gap-5 md:grid-cols-4">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="relative overflow-hidden rounded-3xl border border-purple-100 bg-white p-6 shadow-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-xl"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${index * 110}ms`,
              }}
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
                <card.icon size={22} />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">{card.title}</p>
              <p className="mt-2 text-3xl font-black text-gray-900">{card.value}</p>
              <div className="mt-5 flex items-center gap-2 text-sm font-bold text-purple-600">
                <FiActivity />
                {card.delta} this week
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AnalyticsDashboardPage() {
  return (
    <>
      <CustomCursor />
      <GlobalBackground />
      <ScrollRevealInit />
      <Navbar />
      <main className="font-sans antialiased">
        <HeroSection />
        <StatsBand />
        <FeaturesSection />
        <FlowSection />
        <ReportBuilderSection />
        <InsightSegmentsSection />
        <CTASection />
        <FooterSection />
        <BackToTop />
      </main>
    </>
  );
}
