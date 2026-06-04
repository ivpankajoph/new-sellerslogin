"use client";

import { useEffect, useRef, useState } from "react";
import { BackToTop } from "@/components/landing/BackToTop";
import { CustomCursor } from "@/components/landing/CustomCursor";
import { FooterSection } from "@/components/landing/FooterSection";
import { GlobalBackground } from "@/components/landing/GlobalBackground";
import { Navbar } from "@/components/landing/Navbar";
import { ScrollRevealInit } from "@/components/landing/ScrollRevealInit";
import {
  FiTruck,
  FiMapPin,
  FiClock,
  FiCheckCircle,
  FiAlertCircle,
  FiUser,
  FiStar,
  FiNavigation,
  FiPackage,
  FiArrowRight,
  FiZap,
  FiBell,
  FiPhone,
  FiTrendingUp,
  FiActivity,
  FiRepeat,
  FiShield,
  FiMessageSquare,
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white px-6 pt-20">
      {/* Dot grid texture */}
      <div className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #e9d5ff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.35,
        }} />
      {/* Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-25 -top-24 -right-24"
          style={{ background: "radial-gradient(circle, #a855f7, #f3e8ff)" }} />
        <div className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-20 bottom-0 -left-20"
          style={{ background: "radial-gradient(circle, #e9d5ff, #faf5ff)" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
         
            <h1 className="text-6xl md:text-7xl font-black text-gray-900 leading-[1.0] mb-6">
              Deliver faster,
              <br />
              <span className="relative">
                smarter
                <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full"
                  style={{ background: "linear-gradient(90deg, #9333ea, #e9d5ff)" }} />
              </span>
              <br />
              & cheaper.
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
              Optimize routes, auto-dispatch drivers, and delight customers with real-time tracking and instant proof of delivery. Manage your entire fleet from one powerful dashboard.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="group flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ background: "linear-gradient(135deg,#9333ea,#c084fc)" }}>
                Optimize Deliveries
                <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center gap-3 px-8 py-4 rounded-full border-2 border-purple-200 text-purple-600 font-semibold hover:bg-purple-50 transition-all duration-300">
                <FiNavigation size={16} />
                Live Tracking Demo
              </button>
            </div>

            {/* Trust row */}
            <div className="flex items-center gap-6 mt-10 pt-10 border-t border-purple-100">
              {[
                { icon: FiMapPin, text: "Live GPS tracking" },
                { icon: FiZap, text: "Auto-dispatch" },
                { icon: FiCheckCircle, text: "Proof of delivery" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                  <item.icon size={14} className="text-purple-400" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Dashboard mockup */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border-2 border-purple-100 bg-white shadow-2xl"
              style={{ boxShadow: "0 40px 100px rgba(147,51,234,0.12)" }}>
              {/* Header bar */}
              <div className="px-5 py-4 border-b border-purple-50 flex items-center justify-between"
                style={{ background: "linear-gradient(135deg,#faf5ff,white)" }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg,#9333ea,#c084fc)" }}>
                    <FiMapPin size={14} className="text-white" />
                  </div>
                  <span className="font-bold text-gray-800 text-sm">
                    Active Fleet Map
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-gray-400">Live</span>
                </div>
              </div>

              {/* Map Mockup Area */}
              <div className="h-48 bg-gray-100 relative overflow-hidden">
                {/* Fake Map Background */}
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22><path d=%22M0,0 L40,40 M40,0 L0,40%22 stroke=%22%239333ea%22 stroke-width=%221%22/></svg>')",
                    backgroundSize: "40px 40px"
                  }} />
                {/* Route Line */}
                <svg className="absolute inset-0 w-full h-full" style={{ strokeDasharray: "4,4" }}>
                  <path d="M40,40 Q100,100 200,80 T350,150" fill="none" stroke="#9333ea" strokeWidth="3" className="animate-pulse" />
                </svg>
                {/* Driver Markers */}
                <div className="absolute top-[30px] left-[30px] w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-purple-500">
                  <FiTruck size={14} className="text-purple-600" />
                </div>
                <div className="absolute top-[70px] left-[190px] w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-purple-500">
                  <FiTruck size={14} className="text-purple-600" />
                </div>
                <div className="absolute top-[140px] left-[340px] w-8 h-8 bg-purple-600 rounded-full shadow-lg flex items-center justify-center border-2 border-white animate-bounce">
                  <FiMapPin size={14} className="text-white" />
                </div>
              </div>

              {/* Driver List */}
              <div className="p-4 space-y-2 bg-white">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Active Drivers</p>
                {[
                  { name: "Alex Johnson", route: "Downtown Sector 4", eta: "12 min", status: "on-time" },
                  { name: "Sarah Williams", route: "Westside Heights", eta: "5 min", status: "on-time" },
                  { name: "Mike Davis", route: "North Hills", eta: "Delayed", status: "delayed" },
                ].map((d, i) => (
                  <div key={i} className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-purple-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center overflow-hidden border border-purple-200">
                        <FiUser size={14} className="text-purple-400" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-800">{d.name}</p>
                        <p className="text-[10px] text-gray-400">{d.route}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                        style={{
                          background: d.status === "on-time" ? "#e8f5e9" : "#fff3e0",
                          color: d.status === "on-time" ? "#2e7d32" : "#e65100",
                        }}
                      >
                        {d.status === "on-time" ? "On Time" : "Delayed"}
                      </span>
                      <span className="text-[9px] font-bold text-gray-500">{d.eta}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating optimization card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-4 py-3 border-2 border-purple-100 flex items-center gap-3"
              style={{ boxShadow: "0 12px 40px rgba(147,51,234,0.1)" }}>
              <div className="w-8 h-8 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                <FiActivity size={14} className="text-purple-500" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">Route Optimized</p>
                <p className="text-[10px] text-green-500 font-semibold">-24 mins saved</p>
              </div>
            </div>

            {/* Floating pod card */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 border-2 border-purple-100 flex items-center gap-3"
              style={{ boxShadow: "0 12px 40px rgba(147,51,234,0.1)" }}>
              <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#9333ea,#c084fc)" }}>
                <FiCheckCircle size={13} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">POD Collected</p>
                <p className="text-[10px] text-gray-400 font-semibold">Signature + Photo</p>
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
    { value: 99.8, suffix: "%", label: "On-Time Deliveries", prefix: "", decimals: 1 },
    { value: 30, suffix: "%", label: "Route Efficiency", prefix: "+", decimals: 0 },
    { value: 45, suffix: "%", label: "Fuel Cost Saved", prefix: "-", decimals: 0 },
    { value: 1.2, suffix: "M", label: "Deliveries Handled", prefix: "", decimals: 1 },
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
    {
      icon: FiZap,
      title: "Auto-Dispatch Engine",
      desc: "Assign orders instantly based on driver proximity, vehicle capacity, and live traffic data.",
    },
    {
      icon: FiNavigation,
      title: "Route Optimization",
      desc: "AI algorithms calculate the fastest, most fuel-efficient routes for multi-stop deliveries.",
    },
    {
      icon: FiMapPin,
      title: "Real-Time Tracking",
      desc: "Give customers an Uber-like live tracking link so they always know where their order is.",
    },
    {
      icon: FiCheckCircle,
      title: "Proof of Delivery",
      desc: "Drivers can capture e-signatures, photos, and notes via the mobile app to verify handoffs.",
    },
    {
      icon: FiMessageSquare,
      title: "Customer Notifications",
      desc: "Send automated SMS and email updates at every milestone: dispatched, arriving, and delivered.",
    },
    {
      icon: FiTruck,
      title: "Fleet Management",
      desc: "Track vehicle maintenance, driver performance, and shift schedules from a single hub.",
    },
    {
      icon: FiRepeat,
      title: "Automated Returns",
      desc: "Handle reverse logistics smoothly by automatically dispatching drivers for return pickups.",
    },
    {
      icon: FiShield,
      title: "Secure Verification",
      desc: "OTP verification for high-value items ensures packages are only handed to the right person.",
    },
  ];

  return (
    <section className="py-32 px-6" style={{ background: "#faf5ff" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-purple-500 font-semibold tracking-widest text-sm uppercase mb-4">Features</p>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900">
            Logistics,
            <br />
            <span className="text-purple-400">simplified.</span>
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
    { icon: FiPackage, title: "Order Received", desc: "System ingests order instantly.", color: "#f3e8ff" },
    { icon: FiNavigation, title: "Route Optimized", desc: "AI builds the fastest path.", color: "#e9d5ff" },
    { icon: FiTruck, title: "Dispatched", desc: "Assigned to best driver.", color: "#f3e8ff" },
    { icon: FiMessageSquare, title: "Customer Alerted", desc: "SMS with live tracking link.", color: "#faf5ff" },
    { icon: FiCheckCircle, title: "Delivered & POD", desc: "Signature captured securely.", color: "#e8f5e9" },
  ];

  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-purple-500 font-semibold tracking-widest text-sm uppercase mb-4">Delivery Flow</p>
          <h2 className="text-5xl font-black text-gray-900">
            A frictionless
            <br />
            <span className="text-purple-400">delivery experience.</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-md mx-auto">
            From checkout to the front door, we automate every step of the journey.
          </p>
        </div>

        <div ref={ref} className="flex flex-col md:flex-row items-center gap-0">
          {steps.map((s, i) => (
            <div key={i} className="flex md:flex-col items-center gap-0 flex-1 w-full">
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
        <FiTruck size={48} className="text-white/50 mx-auto mb-8" />
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6" >
          Ready to scale
          <br />
          your deliveries?
        </h2>
        <p className="text-purple-100 text-xl mb-10 leading-relaxed">
          Start dispatching faster and saving on fuel costs today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-white 
text-purple-600 font-bold text-lg hover:bg-purple-50 transition-all hover:-translate-y-1 shadow-lg">
            Start Free
            <FiArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

const styles = `
  @keyframes fadeSlideIn { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
`;

export default function DeliveryManagementPage() {
  return (
    <>
      <CustomCursor />
      <GlobalBackground />
      <ScrollRevealInit />
      <Navbar />
      <style>{styles}</style>
      <main className="font-sans antialiased">
        <HeroSection />
        <StatsBand />
        <FeaturesSection />
        <FlowSection />
        <CTASection />
        <FooterSection />
        <BackToTop />
      </main>
    </>
  );
}
