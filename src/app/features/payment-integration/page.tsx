"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BackToTop } from "@/components/landing/BackToTop";
import { CustomCursor } from "@/components/landing/CustomCursor";
import { FooterSection } from "@/components/landing/FooterSection";
import { GlobalBackground } from "@/components/landing/GlobalBackground";
import { Navbar } from "@/components/landing/Navbar";
import { ScrollRevealInit } from "@/components/landing/ScrollRevealInit";
import {
  FiCreditCard,
  FiShield,
  FiGlobe,
  FiDollarSign,
  FiRefreshCw,
  FiCheckCircle,
  FiLock,
  FiSmartphone,
  FiArrowRight,
  FiZap,
  FiSettings,
  FiRepeat
} from "react-icons/fi";

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
              Accept payments
              <br />
              <span className="relative">
                globally,
                <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full"
                  style={{ background: "linear-gradient(90deg, #9333ea, #e9d5ff)" }} />
              </span>
              <br />
              securely.
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
              Process payments in over 135 currencies. Reduce fraud with 3D Secure checkout, and increase conversions with one-click Apple Pay and Google Pay integrations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://sellerslogin.comvendor/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl no-underline"
                style={{ background: "linear-gradient(135deg,#9333ea,#c084fc)" }}
              >
                Start Accepting Payments
                <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
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
                    <FiShield size={14} className="text-white" />
                  </div>
                  <span className="font-bold text-gray-800 text-sm">
                    Secure Checkout
                  </span>
                </div>
                <div className="flex items-center gap-2 text-green-500 bg-green-50 px-2 py-1 rounded">
                  <FiLock size={12} />
                  <span className="text-xs font-semibold">Encrypted</span>
                </div>
              </div>

              <div className="p-6">
                {/* Mockup Checkout Form */}
                <div className="mb-6">
                  <p className="text-xl font-bold text-gray-900 mb-1">Total: $124.99</p>
                  <p className="text-sm text-gray-500">Premium Subscription (Annual)</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="w-full h-12 rounded-lg border border-gray-200 flex items-center px-4 bg-gray-50">
                    <FiCreditCard className="text-gray-400 mr-3" />
                    <span className="text-gray-400 text-sm">•••• •••• •••• 4242</span>
                    <span className="ml-auto text-gray-400 text-sm">12/28</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex-1 h-12 rounded-full bg-black text-white flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                      <FiSmartphone size={16} /> Pay
                    </button>
                    <button className="flex-1 h-12 rounded-full bg-white border border-gray-200 text-gray-900 flex items-center justify-center hover:bg-gray-50 transition-colors">
                      <FiGlobe size={16} className="text-purple-600 mr-1" /> Pay
                    </button>
                  </div>
                </div>

                <button className="w-full h-12 rounded-full text-white font-bold flex items-center justify-center gap-2 transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg,#9333ea,#c084fc)" }}>
                  Pay $124.99 <FiArrowRight />
                </button>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-4 py-3 border-2 border-purple-100 flex items-center gap-3"
              style={{ boxShadow: "0 12px 40px rgba(147,51,234,0.1)" }}>
              <div className="w-8 h-8 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                <FiCheckCircle size={14} className="text-purple-500" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">Payment Captured</p>
                <p className="text-[10px] text-gray-400 font-semibold">Auth ID: #84920</p>
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
    { value: 135, suffix: "+", label: "Supported Currencies", prefix: "", decimals: 0 },
    { value: 99.99, suffix: "%", label: "Gateway Uptime", prefix: "", decimals: 2 },
    { value: 0, suffix: "%", label: "Hidden Fees", prefix: "", decimals: 0 },
    { value: 12, suffix: "x", label: "Faster Payouts", prefix: "", decimals: 0 },
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
    { icon: FiGlobe, title: "Global Acquiring", desc: "Accept payments from anywhere in the world, settled in your local currency." },
    { icon: FiShield, title: "Fraud Protection", desc: "Built-in 3D Secure and machine learning to block fraudulent transactions." },
    { icon: FiRepeat, title: "Subscription Billing", desc: "Easily set up recurring payments, trials, and complex billing logic." },
    { icon: FiZap, title: "Instant Payouts", desc: "Get access to your funds in minutes, not days, directly to your bank account." },
    { icon: FiSmartphone, title: "Mobile Wallets", desc: "Native support for Apple Pay, Google Pay, and regional digital wallets." },
    { icon: FiDollarSign, title: "Multi-Currency", desc: "Display prices in local currencies to boost international conversion rates." },
    { icon: FiSettings, title: "Customizable UI", desc: "Embed checkout forms directly on your site, fully matching your brand." },
    { icon: FiCheckCircle, title: "Automated Taxes", desc: "Automatically calculate and collect VAT, GST, and local sales taxes." },
  ];

  return (
    <section className="py-32 px-6" style={{ background: "#faf5ff" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-purple-500 font-semibold tracking-widest text-sm uppercase mb-4">Features</p>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900">
            A checkout that,
            <br />
            <span className="text-purple-400">converts.</span>
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
    { icon: FiCreditCard, title: "Customer Checkout", desc: "User inputs payment details on a secure form.", color: "#f3e8ff" },
    { icon: FiShield, title: "Fraud Check", desc: "AI instantly analyzes risk and applies 3D Secure.", color: "#e9d5ff" },
    { icon: FiZap, title: "Payment Captured", desc: "Funds are verified and reserved immediately.", color: "#f3e8ff" },
    { icon: FiDollarSign, title: "Funds Settled", desc: "Money arrives in your business bank account.", color: "#e8f5e9" },
  ];

  return (
    <section className="py-32 px-6 bg-transparent overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-purple-500 font-semibold tracking-widest text-sm uppercase mb-4">Payment Flow</p>
          <h2 className="text-5xl font-black text-gray-900">
            From checkout to
            <br />
            <span className="text-purple-400">your bank account.</span>
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
        <FiCreditCard size={48} className="text-white/50 mx-auto mb-8" />
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6" >
          Start collecting
          <br />
          payments globally.
        </h2>
        <p className="text-purple-100 text-xl mb-10 leading-relaxed">
          The most reliable, developer-friendly payment gateway on the planet.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://sellerslogin.comvendor/registration"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-white text-purple-600 font-bold text-lg hover:bg-purple-50 transition-all hover:-translate-y-1 shadow-lg no-underline"
          >
            Create Free Account
            <FiArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function PaymentMethodsSection() {
  const { ref, visible } = useInView();
  const methods = ["Cards", "UPI", "Wallets", "Net banking", "EMI", "COD sync"];

  return (
    <section className="relative overflow-hidden bg-white px-6 py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <div
          ref={ref}
          className="transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(34px)" }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-purple-500">Payment methods</p>
          <h2 className="text-5xl font-black leading-tight text-gray-900">
            Give every buyer their preferred way to pay.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-500">
            Show the right payment options by cart value, buyer location, business rule, currency, and risk score.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {methods.map((method, index) => (
              <span
                key={method}
                className="rounded-full border border-purple-100 bg-purple-50 px-5 py-3 text-sm font-bold text-gray-700 transition-all duration-700"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(18px)",
                  transitionDelay: `${index * 80}ms`,
                }}
              >
                {method}
              </span>
            ))}
          </div>
        </div>

        <div
          className="relative transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(36px)" }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-purple-100 bg-purple-50 shadow-2xl shadow-purple-100">
            <div className="relative h-[430px]">
              <Image
                src="/images/secure_payments.png"
                alt="Sellers Login secure payment workflow"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-950/55 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 grid gap-3 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur">
                {[
                  { label: "Risk score", value: "Low", icon: FiShield },
                  { label: "Settlement batch", value: "Ready", icon: FiCheckCircle },
                  { label: "Currency route", value: "INR", icon: FiGlobe },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-xl bg-purple-50 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <item.icon className="text-purple-600" />
                      <span className="text-sm font-bold text-gray-700">{item.label}</span>
                    </div>
                    <span className="text-sm font-black text-gray-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -left-5 top-10 rounded-2xl border border-purple-100 bg-white px-5 py-4 shadow-xl">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Auth rate</p>
            <p className="text-2xl font-black text-purple-600">98.4%</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReconciliationSection() {
  const { ref, visible } = useInView();
  const rows = [
    { title: "Gateway capture", status: "Matched", icon: FiCreditCard },
    { title: "Refund queue", status: "Synced", icon: FiRefreshCw },
    { title: "Tax ledger", status: "Posted", icon: FiSettings },
    { title: "Payout batch", status: "Settled", icon: FiDollarSign },
  ];

  return (
    <section className="overflow-hidden bg-purple-50 px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-purple-500">Reconciliation</p>
          <h2 className="text-5xl font-black leading-tight text-gray-900">Keep finance, refunds, and settlement records in sync.</h2>
        </div>

        <div ref={ref} className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl border border-purple-100 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-black text-gray-900">Settlement timeline</h3>
              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-600">Balanced</span>
            </div>
            <div className="space-y-4">
              {rows.map((row, index) => (
                <div
                  key={row.title}
                  className="flex items-center justify-between rounded-2xl border border-purple-50 bg-purple-50/50 p-4 transition-all duration-700"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(-24px)",
                    transitionDelay: `${index * 110}ms`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-purple-600">
                      <row.icon size={18} />
                    </div>
                    <p className="text-sm font-bold text-gray-700">{row.title}</p>
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-purple-600">{row.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-3xl border border-purple-100 bg-gray-950 p-6 text-white shadow-xl transition-all duration-1000"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)" }}
          >
            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500">
              <FiLock size={22} />
            </div>
            <h3 className="text-3xl font-black">Security checks run with every transaction.</h3>
            <div className="mt-8 space-y-4">
              {["Velocity rules", "Device fingerprint", "Address checks", "3D Secure routing"].map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <div
                    className="h-2 rounded-full bg-purple-400 transition-all duration-1000"
                    style={{ width: visible ? `${38 + index * 14}%` : "0%" }}
                  />
                  <span className="text-sm font-semibold text-purple-100">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PaymentIntegrationPage() {
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
        <PaymentMethodsSection />
        <ReconciliationSection />
        <CTASection />
        <FooterSection />
        <BackToTop />
      </main>
    </>
  );
}
