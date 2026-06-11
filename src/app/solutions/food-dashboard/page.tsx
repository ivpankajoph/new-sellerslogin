"use client";

import { useEffect, useRef, useState } from "react";
import { BackToTop } from "@/components/landing/BackToTop";
import { CustomCursor } from "@/components/landing/CustomCursor";
import { FooterSection } from "@/components/landing/FooterSection";
import { GlobalBackground } from "@/components/landing/GlobalBackground";
import { Navbar } from "@/components/landing/Navbar";
import { ScrollRevealInit } from "@/components/landing/ScrollRevealInit";
import {
  RiRestaurantLine,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiArrowDownLine,
  RiCheckLine,
  RiTimeLine,
  RiMapPinLine,
  RiTruckLine,
  RiStockLine,
  RiAlertLine,
  RiBarChartBoxLine,
  RiRefreshLine,
  RiAddLine,
  RiSearchLine,
  RiFilterLine,
  RiShoppingBag3Line,
  RiCupLine,
  RiLeafLine,
  RiFireLine,
  RiSettings4Line,
  RiDatabase2Line,
  RiNotificationLine,
  RiBellLine,
  RiPieChartLine,
  RiLineChartLine,
  RiCalendarLine,
  RiUserLine,
  RiStore2Line,
  RiListCheck2,
  RiArrowUpLine,
  RiArrowDownSLine,
  RiStarFill,
  RiFlashlightLine,
  RiMagicLine,
  RiScanLine,
  RiQrCodeLine,
  RiPrinterLine,
  RiCloudLine,
  RiShieldCheckLine,
  RiGlobalLine,
  RiAppsLine,
  RiFlowChart,
  RiTeamLine,
  RiCodeSSlashLine,
  RiStackLine,
  RiLockLine,
  RiCameraLine,
  RiFileChartLine,
  RiPulseLine,
} from "react-icons/ri";
import Link from "next/link";

/* ─── Utility Hook ────────────────────────────────────────────────────── */
function useIntersection(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Counter ─────────────────────────────────────────────────────────── */
function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const [val, setVal] = useState(0);
  const { ref, visible } = useIntersection();
  useEffect(() => {
    if (!visible) return;
    let cur = 0;
    const step = Math.max(1, Math.ceil(to / 55));
    const t = setInterval(() => {
      cur += step;
      if (cur >= to) { setVal(to); clearInterval(t); } else setVal(cur);
    }, 18);
    return () => clearInterval(t);
  }, [visible, to]);
  return <span ref={ref}>{prefix}{val.toLocaleString()}{suffix}</span>;
}

/* ─── Global Styles ───────────────────────────────────────────────────── */
function GlobalStyles() {
  return (
    <style>{`
      @keyframes orbFloat {
        0%, 100% { transform: translateY(0) scale(1); }
        50% { transform: translateY(-28px) scale(1.04); }
      }
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(28px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeIn {
        from { opacity: 0; } to { opacity: 1; }
      }
      @keyframes shimmer {
        0% { background-position: -200% center; }
        100% { background-position: 200% center; }
      }
      @keyframes pulse-ring {
        0% { transform: scale(0.92); opacity: 0.7; }
        100% { transform: scale(1.55); opacity: 0; }
      }
      @keyframes barGrow {
        from { transform: scaleY(0); transform-origin: bottom; }
        to { transform: scaleY(1); transform-origin: bottom; }
      }
      @keyframes marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes ping-sm {
        0% { transform: scale(1); opacity: 1; }
        75%, 100% { transform: scale(1.8); opacity: 0; }
      }
      @keyframes slideInLeft {
        from { opacity: 0; transform: translateX(-32px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes slideInRight {
        from { opacity: 0; transform: translateX(32px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes waveBar {
        0%, 100% { transform: scaleY(0.4); }
        50% { transform: scaleY(1); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      .shimmer-text {
        background: linear-gradient(90deg, #7e22ce, #a855f7, #fda4af, #7e22ce);
        background-size: 200% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: shimmer 3.5s linear infinite;
      }
      .card-hover {
        transition: all 0.4s cubic-bezier(.22,1,.36,1);
      }
      .card-hover:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 60px -10px rgba(219,39,119,0.12);
      }
    `}</style>
  );
}

/* ─── Orb Background ──────────────────────────────────────────────────── */
function OrbBg({ variant = "default" }: { variant?: "default" | "warm" | "soft" }) {
  const colors = {
    default: ["#fda4af", "#e9d5ff", "#d8b4fe"],
    warm: ["#fecdd3", "#fda4af", "#fb7185"],
    soft: ["#f3e8ff", "#e9d5ff", "#d8b4fe"],
  }[variant];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full opacity-[0.18]"
        style={{ background: `radial-gradient(circle, ${colors[0]} 0%, transparent 68%)`, animation: "orbFloat 9s ease-in-out infinite" }} />
      <div className="absolute top-1/3 -right-52 w-[420px] h-[420px] rounded-full opacity-[0.13]"
        style={{ background: `radial-gradient(circle, ${colors[1]} 0%, transparent 68%)`, animation: "orbFloat 12s ease-in-out infinite reverse" }} />
      <div className="absolute -bottom-20 left-1/3 w-[320px] h-[320px] rounded-full opacity-[0.10]"
        style={{ background: `radial-gradient(circle, ${colors[2]} 0%, transparent 68%)`, animation: "orbFloat 10s ease-in-out infinite 3s" }} />
    </div>
  );
}

/* ─── Section Header ──────────────────────────────────────────────────── */
function SectionHeader({ eyebrow, title, sub, align = "center" }: {
  eyebrow: string; title: string; sub?: string; align?: "center" | "left";
}) {
  const { ref, visible } = useIntersection();
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div ref={ref} className={`max-w-2xl mb-16 px-4 ${a}`}>
      <span className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase text-purple-500 mb-3 font-body transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        {eyebrow}
      </span>
      <h2 className={`font-display text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        {title}
      </h2>
      {sub && <p className={`font-body text-gray-500 text-lg leading-relaxed transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>{sub}</p>}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-transparent overflow-hidden pt-24 pb-16">
      <OrbBg />
      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(circle, #7e22ce 1.2px, transparent 1.2px)", backgroundSize: "36px 36px" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
    

        <h1 className="font-display text-6xl md:text-8xl font-bold leading-[1.03] text-gray-900 mb-6"
          style={{ animation: "fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.1s both" }}>
          Every dish.{" "}
          <em className="shimmer-text not-italic">Every order.</em>
          <br />Every kitchen.
        </h1>

        <p className="font-body text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.25s both" }}>
          One intelligent dashboard to build your menu, manage stock levels in real time,
          and track every order from kitchen to doorstep — designed for restaurants,
          cloud kitchens, and food enterprises that demand precision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: "fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.4s both" }}>
       <Link href="/vendor/registration">
          <button className="group flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold font-body px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-purple-200 hover:shadow-purple-300 hover:-translate-y-0.5">
            Get Started Free
            <RiArrowRightLine className="transition-transform duration-200 group-hover:translate-x-1" />
          </button></Link>
      
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 font-body"
          style={{ animation: "fadeIn 1s ease 0.7s both" }}>
          {["No credit card required", "Setup in 15 minutes", "Works offline", "HACCP Compliant"].map(t => (
            <span key={t} className="flex items-center gap-1.5">
              <RiCheckLine className="text-purple-400" /> {t}
            </span>
          ))}
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="relative z-10 mt-20 max-w-6xl mx-auto px-4 w-full"
        style={{ animation: "fadeUp 1s cubic-bezier(.22,1,.36,1) 0.55s both" }}>
        <FoodDashboardPreview />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-300 text-xs font-body"
        style={{ animation: "fadeIn 1.5s ease 1s both" }}>
        <span className="tracking-widest uppercase">Explore</span>
        <RiArrowDownLine className="text-lg animate-bounce" />
      </div>
    </section>
  );
}

/* ─── Food Dashboard Preview ──────────────────────────────────────────── */
function FoodDashboardPreview() {
  const bars = [45, 70, 55, 90, 65, 80, 48, 95, 72, 88, 60, 75];
  const orders = [
    { id: "#4821", item: "Truffle Risotto", status: "Preparing", time: "4 min", dot: "bg-purple-200" },
    { id: "#4820", item: "Grilled Salmon", status: "Ready", time: "0 min", dot: "bg-purple-200" },
    { id: "#4819", item: "Wagyu Burger", status: "Delivered", time: "12 min", dot: "bg-gray-300" },
    { id: "#4818", item: "Caesar Salad", status: "Preparing", time: "7 min", dot: "bg-purple-200" },
  ];
  return (
    <div className="rounded-3xl border border-purple-100 bg-white shadow-2xl shadow-purple-100/50 overflow-hidden">
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-5 py-3 border-b border-purple-50 bg-purple-50/50">
        <span className="w-3 h-3 rounded-full bg-purple-200" />
        <span className="w-3 h-3 rounded-full bg-yellow-300" />
        <span className="w-3 h-3 rounded-full bg-green-300" />
        <div className="ml-4 flex-1 max-w-xs bg-white/80 rounded-full px-3 py-1 text-xs text-gray-400 font-mono border border-purple-50">
          app.foodnest.io/dashboard
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="flex items-center gap-1 text-xs text-purple-600 font-semibold font-body">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-200 inline-block" style={{ animation: "ping-sm 1.5s infinite" }} />
            Live
          </span>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-[60px] md:w-[180px] border-r border-purple-50 bg-white p-3 md:p-4 flex-shrink-0 hidden sm:block">
          <div className="hidden md:flex items-center gap-2 mb-6 px-2">
            <div className="w-7 h-7 rounded-lg bg-purple-600 flex items-center justify-center">
              <RiRestaurantLine className="text-white text-sm" />
            </div>
            <span className="font-display font-bold text-gray-800 text-sm">FoodNest</span>
          </div>
          {[
            { icon: RiBarChartBoxLine, l: "Overview", a: true },
            { icon: RiListCheck2, l: "Orders" },
            { icon: RiRestaurantLine, l: "Menu" },
            { icon: RiDatabase2Line, l: "Inventory" },
            { icon: RiTruckLine, l: "Delivery" },
            { icon: RiFileChartLine, l: "Reports" },
            { icon: RiSettings4Line, l: "Settings" },
          ].map(({ icon: Icon, l, a }) => (
            <div key={l}
              className={`flex items-center gap-2.5 text-xs px-3 py-2.5 rounded-xl mb-0.5 cursor-pointer transition-colors font-body ${a ? "bg-purple-50 text-purple-600 font-semibold" : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"}`}>
              <Icon className="text-base flex-shrink-0" />
              <span className="hidden md:block truncate">{l}</span>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 bg-gray-50/40 p-4 md:p-5 min-w-0">
          {/* Header row */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-display font-bold text-gray-800 text-base">Good morning, Chef Marco</h3>
              <p className="text-xs text-gray-400 font-body">Thursday, 12 June · Lunch service active</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <RiBellLine className="text-gray-400 text-lg" />
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-purple-500 text-white text-[8px] flex items-center justify-center font-bold">3</span>
              </div>
            </div>
          </div>

          {/* KPI row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
            {[
              { label: "Today's Revenue", val: "₹84,320", delta: "+22%", up: true, icon: RiStockLine },
              { label: "Active Orders", val: "38", delta: "+6 new", up: true, icon: RiListCheck2 },
              { label: "Low Stock Items", val: "7", delta: "Needs reorder", up: false, icon: RiAlertLine },
              { label: "Avg. Prep Time", val: "14 min", delta: "-2 min", up: true, icon: RiTimeLine },
            ].map((k) => (
              <div key={k.label} className="bg-white rounded-2xl p-3 md:p-4 border border-purple-50 shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <p className="text-[10px] text-gray-400 font-body leading-tight">{k.label}</p>
                  <k.icon className="text-purple-300 text-sm flex-shrink-0" />
                </div>
                <p className="text-lg md:text-xl font-bold text-gray-800 font-mono">{k.val}</p>
                <p className={`text-[10px] font-semibold font-body mt-0.5 ${k.up ? "text-purple-600" : "text-purple-600"}`}>{k.delta}</p>
              </div>
            ))}
          </div>

          {/* Charts + orders */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {/* Revenue chart */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-purple-50 p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold text-gray-600 font-body">Hourly Revenue</p>
                <span className="text-[10px] text-purple-400 font-body bg-purple-50 px-2 py-0.5 rounded-full">Today</span>
              </div>
              <div className="flex items-end gap-1.5 h-20">
                {bars.map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-md"
                    style={{
                      height: `${h}%`,
                      background: i === 9 ? "#9333ea" : i === 7 ? "#d8b4fe" : "#f3e8ff",
                      transformOrigin: "bottom",
                      animation: `barGrow 0.5s cubic-bezier(.22,1,.36,1) ${i * 0.04}s both`,
                    }} />
                ))}
              </div>
              <div className="flex justify-between mt-2">
                {["8AM", "10AM", "12PM", "2PM", "4PM", "6PM"].map(t => (
                  <span key={t} className="text-[9px] text-gray-300 font-mono">{t}</span>
                ))}
              </div>
            </div>

            {/* Live orders */}
            <div className="bg-white rounded-2xl border border-purple-50 p-4 shadow-sm">
              <p className="text-xs font-semibold text-gray-600 font-body mb-3">Live Orders</p>
              <div className="space-y-2.5">
                {orders.map(o => (
                  <div key={o.id} className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${o.dot}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-700 truncate font-body">{o.item}</p>
                      <p className="text-[10px] text-gray-400 font-body">{o.id} · {o.status}</p>
                    </div>
                    <span className="text-[10px] text-gray-400 font-mono flex-shrink-0">{o.time}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-3 text-xs text-purple-500 font-semibold font-body hover:text-purple-700 transition-colors">
                View all 38 orders
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════════════
   MENU BUILDER SECTION
═══════════════════════════════════════════════════════════════════════ */
function MenuBuilder() {
  const categories = ["Starters", "Mains", "Desserts", "Beverages", "Chef's Special"];
  const items = [
    { name: "Truffle Arancini", price: "₹620", tag: "Bestseller", cal: "380 kcal", icon: RiFireLine },
    { name: "Wild Mushroom Soup", price: "₹340", tag: "Vegetarian", cal: "210 kcal", icon: RiLeafLine },
    { name: "Grilled Sea Bass", price: "₹980", tag: "Signature", cal: "520 kcal", icon: RiStarFill },
    { name: "Dark Chocolate Torte", price: "₹450", tag: "New", cal: "640 kcal", icon: RiCupLine },
    { name: "Pulled Jackfruit Tacos", price: "₹520", tag: "Vegan", cal: "390 kcal", icon: RiLeafLine },
    { name: "Wagyu Beef Burger", price: "₹1,100", tag: "Premium", cal: "780 kcal", icon: RiFireLine },
  ];
  const { ref: secRef, visible: secVisible } = useIntersection();

  return (
    <section className="py-28 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left text */}
          <div ref={secRef}>
            <span className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase text-purple-500 mb-4 font-body transition-all duration-500 ${secVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Menu Management
            </span>
            <h2 className={`font-display text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 transition-all duration-700 delay-100 ${secVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              Build menus that<br /><em className="shimmer-text not-italic">tell a story.</em>
            </h2>
            <p className={`font-body text-gray-500 text-lg leading-relaxed mb-8 transition-all duration-700 delay-200 ${secVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              Create, categorise, and publish your menu across every channel in minutes.
              Add nutritional info, allergen tags, photos, and modifiers — all from one
              drag-and-drop canvas.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Drag-and-drop menu builder with live preview",
             
                "Modifier groups, add-ons, and combo logic",
                "Schedule seasonal menus in advance",
                "AI-powered item description generator",
              ].map((f, i) => (
                <li key={f}
                  className={`flex items-start gap-3 text-sm text-gray-600 font-body transition-all duration-500 ${secVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                  style={{ transitionDelay: `${300 + i * 80}ms` }}>
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center flex-shrink-0">
                    <RiCheckLine className="text-purple-500 text-xs" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
       
          </div>

          {/* Right — mock menu UI */}
          <div className={`transition-all duration-800 delay-200 ${secVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="bg-white rounded-3xl border border-purple-100 shadow-xl shadow-purple-50 overflow-hidden">
              {/* Toolbar */}
              <div className="flex items-center gap-3 px-5 py-3.5 border-b border-purple-50 bg-purple-50/30">
                <RiRestaurantLine className="text-purple-400" />
                <span className="font-display font-semibold text-gray-700 text-sm">Menu Editor</span>
                <div className="ml-auto flex items-center gap-2">
                  <button className="text-xs text-purple-600 bg-purple-50 px-3 py-1.5 rounded-full font-semibold font-body flex items-center gap-1">
                    <RiAddLine /> Add Item
                  </button>
                  <button className="text-xs text-gray-400 hover:text-gray-600 font-body flex items-center gap-1">
                    <RiSearchLine />
                  </button>
                </div>
              </div>
              {/* Category tabs */}
              <div className="flex gap-1 px-4 py-2.5 border-b border-purple-50 overflow-x-auto">
                {categories.map((c, i) => (
                  <button key={c}
                    className={`text-xs px-3 py-1.5 rounded-full whitespace-nowrap font-body transition-colors ${i === 0 ? "bg-purple-600 text-white font-semibold" : "text-gray-400 hover:text-gray-600"}`}>
                    {c}
                  </button>
                ))}
              </div>
              {/* Items */}
              <div className="p-4 space-y-2.5 max-h-80 overflow-y-auto">
                {items.map((item, i) => (
                  <div key={item.name}
                    className="flex items-center gap-3 p-3 rounded-2xl border border-purple-50 hover:border-purple-200 hover:bg-purple-50/30 transition-all cursor-pointer group"
                    style={{ animation: `fadeUp 0.4s ease ${i * 0.06}s both` }}>
                    <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-purple-400 text-base" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="text-sm font-semibold text-gray-700 font-body truncate">{item.name}</p>
                        <span className="text-[9px] bg-purple-50 text-purple-500 border border-purple-100 px-1.5 py-0.5 rounded-full font-body flex-shrink-0">{item.tag}</span>
                      </div>
                      <p className="text-[10px] text-gray-400 font-body">{item.cal}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-sm font-bold text-gray-800 font-mono">{item.price}</p>
                      <div className="flex items-center gap-1 mt-1 justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-[10px] text-purple-400 font-body cursor-pointer">Edit</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   INVENTORY SECTION
═══════════════════════════════════════════════════════════════════════ */
function InventorySection() {
  const stockItems = [
    { name: "Truffle Oil", unit: "ml", current: 340, max: 1000, status: "low", color: "#fda4af" },
    { name: "Wagyu Beef", unit: "kg", current: 8.4, max: 20, status: "medium", color: "#fb923c" },
    { name: "Basmati Rice", unit: "kg", current: 45, max: 50, status: "good", color: "#4ade80" },
    { name: "Heavy Cream", unit: "L", current: 6.2, max: 10, status: "medium", color: "#fb923c" },
    { name: "Saffron", unit: "g", current: 12, max: 100, status: "critical", color: "#f43f5e" },
    { name: "Parmesan", unit: "kg", current: 3.8, max: 5, status: "good", color: "#4ade80" },
  ];
  const { ref, visible } = useIntersection();

  return (
    <section className="py-28 bg-purple-50/30 relative overflow-hidden">
      <OrbBg variant="soft" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left — Inventory UI */}
          <div className={`transition-all duration-800 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="bg-white rounded-3xl border border-purple-100 shadow-xl shadow-purple-50 overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-purple-50">
                <RiDatabase2Line className="text-purple-400" />
                <span className="font-display font-semibold text-gray-700">Inventory Control</span>
                <div className="ml-auto flex items-center gap-2">
                  <span className="text-[10px] bg-purple-200 text-purple-600 border border-purple-200 px-2 py-1 rounded-full font-body font-semibold flex items-center gap-1">
                    <RiAlertLine className="text-xs" /> 3 Critical
                  </span>
                  <button className="text-xs text-purple-600 bg-purple-50 px-3 py-1.5 rounded-full font-body font-semibold flex items-center gap-1">
                    <RiRefreshLine /> Sync
                  </button>
                </div>
              </div>

              {/* Search */}
              <div className="px-4 py-3 border-b border-purple-50">
                <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2">
                  <RiSearchLine className="text-gray-300 text-sm" />
                  <input className="flex-1 text-xs bg-transparent outline-none text-gray-500 font-body placeholder-gray-300"
                    placeholder="Search ingredients..." readOnly />
                  <RiFilterLine className="text-gray-300 text-sm" />
                </div>
              </div>

              {/* Stock list */}
              <div className="p-4 space-y-3">
                {stockItems.map((item, i) => {
                  const pct = Math.round((item.current / item.max) * 100);
                  return (
                    <div key={item.name}
                      className="p-3 rounded-2xl border border-purple-50 hover:border-purple-100 transition-all"
                      style={{ animation: `fadeUp 0.4s ease ${i * 0.07}s both` }}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.color }} />
                          <span className="text-xs font-semibold text-gray-700 font-body">{item.name}</span>
                        </div>
                        <span className="text-xs text-gray-400 font-mono">{item.current} / {item.max} {item.unit}</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full rounded-full transition-all duration-1000"
                          style={{ width: `${pct}%`, background: item.color }} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer action */}
              <div className="px-4 pb-4">
                <button className="w-full flex items-center justify-center gap-2 text-xs font-semibold text-purple-600 bg-purple-50 hover:bg-purple-100 rounded-full py-2.5 font-body transition-colors">
                  <RiQrCodeLine /> Scan barcode to update stock
                </button>
              </div>
            </div>
          </div>

          {/* Right text */}
          <div ref={ref}>
            <span className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase text-purple-500 mb-4 font-body transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Inventory Management
            </span>
            <h2 className={`font-display text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              Never run out.<br /><em className="shimmer-text not-italic">Never over-order.</em>
            </h2>
            <p className={`font-body text-gray-500 text-lg leading-relaxed mb-8 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              Real-time stock tracking tied directly to your menu. When an item sells,
              inventory deducts automatically. Smart reorder alerts fire before you hit zero.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: RiScanLine, title: "Barcode & QR Scanning", desc: "Update stock with a phone scan — no manual entry" },
                { icon: RiFlashlightLine, title: "Auto Deduction", desc: "Sales auto-deplete ingredients per recipe" },
                { icon: RiAlertLine, title: "Smart Reorder Alerts", desc: "AI predicts stockouts before they happen" },
                { icon: RiMagicLine, title: "Recipe Cost Engine", desc: "Live COGS per dish based on current prices" },
              ].map((f, i) => (
                <div key={f.title}
                  className={`bg-white rounded-2xl border border-purple-50 p-4 transition-all duration-500 hover:border-purple-200 hover:shadow-md ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                  style={{ transitionDelay: `${300 + i * 80}ms` }}>
                  <f.icon className="text-purple-400 text-lg mb-2" />
                  <p className="font-semibold text-gray-700 text-sm font-body mb-1">{f.title}</p>
                  <p className="text-gray-400 text-xs font-body">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   ORDER TRACKING SECTION
═══════════════════════════════════════════════════════════════════════ */
function OrderTracking() {
  const { ref, visible } = useIntersection();
  const stages = [
    { label: "Order Placed", time: "12:32 PM", done: true },
    { label: "Kitchen Confirmed", time: "12:33 PM", done: true },
    { label: "Preparing", time: "12:36 PM", done: true },
    { label: "Quality Check", time: "12:48 PM", done: false, active: true },
    { label: "Out for Delivery", time: "—", done: false },
    { label: "Delivered", time: "—", done: false },
  ];
  const liveOrders = [
    { id: "#4824", buyer: "Table 7", item: "3 items · ₹1,840", stage: 2, color: "bg-purple-200" },
    { id: "#4823", buyer: "Delivery · Arjun S.", item: "2 items · ₹760", stage: 4, color: "bg-purple-200" },
    { id: "#4822", buyer: "Table 12", item: "5 items · ₹3,200", stage: 1, color: "bg-purple-200" },
    { id: "#4821", buyer: "Swiggy #Z8821", item: "1 item · ₹620", stage: 3, color: "bg-purple-200" },
    { id: "#4820", buyer: "Zomato #R4412", item: "4 items · ₹2,100", stage: 5, color: "bg-gray-300" },
  ];

  return (
    <section className="py-28 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left text */}
          <div ref={ref}>
            <span className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase text-purple-500 mb-4 font-body transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Order Tracking
            </span>
            <h2 className={`font-display text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              Every order,<br /><em className="shimmer-text not-italic">every second.</em>
            </h2>
            <p className={`font-body text-gray-500 text-lg leading-relaxed mb-8 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              A single dashboard that unifies dine-in, takeaway, and all delivery platforms.
              Track every order through each kitchen stage in real time — with one-tap escalation
              for issues.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Kitchen Display System (KDS) integration",
                "Live delivery driver location tracking",
                "Auto SMS & WhatsApp notifications to customers",
           
                "Post-delivery rating capture and response tools",
              ].map((f, i) => (
                <li key={f}
                  className={`flex items-start gap-3 text-sm text-gray-600 font-body transition-all duration-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                  style={{ transitionDelay: `${300 + i * 70}ms` }}>
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center flex-shrink-0">
                    <RiCheckLine className="text-purple-500 text-xs" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Order tracking UI */}
          <div className={`transition-all duration-800 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="bg-white rounded-3xl border border-purple-100 shadow-xl shadow-purple-50 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-purple-50">
                <div className="flex items-center gap-2">
                  <RiListCheck2 className="text-purple-400" />
                  <span className="font-display font-semibold text-gray-700">Live Orders</span>
                  <span className="text-[10px] bg-purple-50 text-purple-500 px-2 py-0.5 rounded-full font-body font-semibold">38 active</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400 font-body">
                  <RiRefreshLine className="text-purple-300" style={{ animation: "spin-slow 3s linear infinite" }} />
                  Live
                </div>
              </div>

              {/* Order list */}
              <div className="p-4 space-y-2.5">
                {liveOrders.map((o, i) => (
                  <div key={o.id}
                    className="flex items-center gap-3 p-3 rounded-2xl border border-purple-50 hover:border-purple-200 hover:bg-purple-50/20 transition-all cursor-pointer"
                    style={{ animation: `fadeUp 0.4s ease ${i * 0.07}s both` }}>
                    <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${o.color}`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-gray-700 font-mono">{o.id}</span>
                        <span className="text-[10px] text-gray-400 font-body truncate">{o.buyer}</span>
                      </div>
                      <p className="text-[10px] text-gray-400 font-body mt-0.5">{o.item}</p>
                    </div>
                    {/* Progress mini */}
                    <div className="flex gap-0.5 items-center flex-shrink-0">
                      {Array(6).fill(0).map((_, j) => (
                        <div key={j} className={`w-2.5 h-2.5 rounded-sm ${j < o.stage ? "bg-purple-400" : j === o.stage ? "bg-purple-200" : "bg-gray-100"}`} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Order timeline detail */}
              <div className="mx-4 mb-4 p-4 bg-purple-50/40 rounded-2xl border border-purple-100">
                <p className="text-[10px] font-semibold text-purple-500 uppercase tracking-widest mb-3 font-body">Order #4822 Timeline</p>
                <div className="space-y-2">
                  {stages.map((s, i) => (
                    <div key={s.label} className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 border ${s.done ? "bg-purple-500 border-purple-500" : s.active ? "bg-white border-purple-400" : "bg-white border-gray-200"}`}>
                        {s.done && <RiCheckLine className="text-white text-[8px]" />}
                        {s.active && <span className="w-1.5 h-1.5 rounded-full bg-purple-400 block" style={{ animation: "ping-sm 1.5s infinite" }} />}
                      </div>
                      <span className={`text-[11px] flex-1 font-body ${s.done ? "text-gray-700 font-semibold" : s.active ? "text-purple-600 font-semibold" : "text-gray-300"}`}>{s.label}</span>
                      <span className={`text-[10px] font-mono ${s.done || s.active ? "text-gray-400" : "text-gray-200"}`}>{s.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   STATS BAND
═══════════════════════════════════════════════════════════════════════ */
function StatsBand() {
  const { ref, visible } = useIntersection();
  const stats = [
    { val: 99, suf: ".9%", label: "Order accuracy rate" },
    { val: 14, suf: " min", label: "Average prep time saved" },
    { val: 2, suf: "+", label: "Restaurants on platform" },
    { val: 32, suf: "%", label: "Reduction in food waste" },
  ];
  return (
    <section ref={ref} className="py-20 bg-linear-to-r from-purple-600 via-purple-200 to-purple-500 text-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-white/5" />
        <div className="absolute -bottom-10 left-1/3 w-40 h-40 rounded-full bg-white/5" />
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((s, i) => (
            <div key={s.label}
              className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}>
              <p className="text-5xl font-bold font-mono mb-2">
                {visible ? <Counter to={s.val} suffix={s.suf} /> : `0${s.suf}`}
              </p>
              <p className="text-purple-100 text-sm font-body">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   ANALYTICS SECTION
═══════════════════════════════════════════════════════════════════════ */
function AnalyticsSection() {
  const cards = [
    { icon: RiLineChartLine, title: "Revenue Analytics", desc: "Hourly, daily, and monthly breakdowns with channel-level attribution — dine-in vs delivery vs takeaway.", tag: "Finance" },
    { icon: RiPieChartLine, title: "Menu Performance", desc: "See your top-selling dishes, worst performers, and margin winners. Data to kill or promote any item.", tag: "Menu" },
    { icon: RiTimeLine, title: "Prep Time Heatmaps", desc: "Visualise kitchen bottlenecks by shift, station, and dish. Find where minutes are being lost.", tag: "Operations" },
    { icon: RiUserLine, title: "Customer Cohorts", desc: "Track repeat customers, average frequency, and LTV. Build loyalty segments automatically.", tag: "CRM" },
    { icon: RiTruckLine, title: "Delivery Intelligence", desc: "Platform-by-platform delivery ratings, cancellation rates, and dispute resolution in one view.", tag: "Delivery" },
    { icon: RiStockLine, title: "Waste & COGS Reports", desc: "Daily spoilage logs, actual vs theoretical food cost, and supplier price variance tracked automatically.", tag: "Inventory" },
  ];
  return (
    <section className="py-28 bg-purple-50/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Analytics & Reporting"
          title="Data that actually runs your kitchen."
          sub="Not just charts — actionable intelligence that tells you what to cook more of, what to cut, and where you're leaving money on the table."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c, i) => {
            const { ref, visible } = useIntersection();
            return (
              <div key={c.title} ref={ref}
                className={`group bg-white border border-purple-50 hover:border-purple-200 rounded-3xl p-7 card-hover ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transition: "all 0.5s cubic-bezier(.22,1,.36,1)", transitionDelay: `${i * 80}ms` }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                    <c.icon className="text-purple-500 text-lg" />
                  </div>
                  <span className="text-[10px] text-purple-400 bg-purple-50 border border-purple-100 px-2 py-0.5 rounded-full font-body">{c.tag}</span>
                </div>
                <h3 className="font-display font-bold text-gray-800 text-base mb-2">{c.title}</h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{c.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs text-purple-400 font-semibold font-body opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <RiArrowRightLine />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   HOW IT WORKS (WORKFLOW)
═══════════════════════════════════════════════════════════════════════ */
function HowItWorks() {
  const steps = [
    { num: "01", icon: RiStore2Line, title: "Set up your restaurant profile", desc: "Add your logo, menus, operating hours, tax settings, and delivery zones in one guided onboarding flow — takes 15 minutes." },
    { num: "02", icon: RiRestaurantLine, title: "Build your digital menu", desc: "Create categories, add dishes with photos and modifier groups, set prices per channel, and publish everywhere simultaneously." },
    { num: "03", icon: RiDatabase2Line, title: "Map ingredients to dishes", desc: "Define recipes with quantities. Every sale will auto-deduct exact ingredient quantities from your live stock count." },
    { num: "04", icon: RiGlobalLine, title: "Connect delivery platforms", desc: "One-click connect Zomato, Swiggy, UberEats, and more. Orders flow in from all channels to a single unified dashboard." },
    { num: "05", icon: RiPulseLine, title: "Go live and monitor everything", desc: "Watch revenue, orders, and stock levels update in real time. Set alerts. Print KDS tickets. Run your service." },
  ];
  return (
    <section className="py-28 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Getting Started"
          title="Live in under 15 minutes."
          sub="No complex onboarding. No implementation consultant needed. Just your phone and a coffee."
        />
        <div className="relative space-y-4 max-w-3xl mx-auto">
          {/* Vertical connector */}
          <div className="absolute left-[30px] top-10 bottom-10 w-px bg-gradient-to-b from-purple-200 via-purple-300 to-transparent hidden md:block" />
          {steps.map((s, i) => {
            const { ref, visible } = useIntersection();
            return (
              <div key={s.num} ref={ref}
                className={`flex gap-6 items-start p-6 bg-white border border-purple-50 hover:border-purple-200 rounded-3xl card-hover transition-all duration-600 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="relative flex-shrink-0 z-10">
                  <div className="w-[60px] h-[60px] rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center">
                    <s.icon className="text-purple-500 text-xl" />
                  </div>
                  <div className="absolute inset-0 rounded-2xl border border-purple-300 opacity-60"
                    style={{ animation: `pulse-ring 2.5s ease-out infinite ${i * 0.5}s` }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-mono font-bold text-purple-300">{s.num}</span>
                    <h4 className="font-display font-bold text-gray-800 text-base">{s.title}</h4>
                  </div>
                  <p className="font-body text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   USE CASES
═══════════════════════════════════════════════════════════════════════ */
const usecases = [
  {
    icon: RiRestaurantLine,
    type: "Fine Dining",
    heading: "Elevate table-side service",
    body: "Handle multi-course reservations, wine pairing modifiers, and course-by-course firing from one elegant screen. Sync with reservation systems for perfectly timed service.",
    tags: ["Table Management", "Course Firing", "Reservations"],
  },
  {
    icon: RiCloudLine,
    type: "Cloud Kitchens",
    heading: "Run 10 brands from one kitchen",
    body: "Manage multiple virtual brands, each with its own menu, pricing, and delivery platform presence — all fulfilling out of a single kitchen with one unified order queue.",
    tags: ["Multi-brand", "Delivery Only", "Queue Management"],
  },
  {
    icon: RiStore2Line,
    type: "QSR Chains",
    heading: "Scale operations across locations",
    body: "Centralise menus and pricing across every outlet. Push updates instantly, compare outlet performance, and spot underperforming locations before they become a problem.",
    tags: ["Multi-location", "Central Menu", "Performance Reports"],
  },
  {
    icon: RiShoppingBag3Line,
    type: "Cafes & Bakeries",
    heading: "Freshness-first inventory control",
    body: "Set shelf-life rules per product. Get daily bake lists based on predicted demand. Track wastage by item and shift, and reduce over-production by up to 40%.",
    tags: ["Shelf Life", "Demand Forecast", "Wastage Tracking"],
  },
];

function UseCases() {
  return (
    <section className="py-28 bg-purple-50/30 relative overflow-hidden">
      <OrbBg variant="warm" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeader
          eyebrow="Use Cases"
          title="Every format of food business."
          sub="From solo cloud kitchens to multi-location chains — the platform reshapes itself around your operation model."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {usecases.map((u, i) => {
            const { ref, visible } = useIntersection();
            return (
              <div key={u.type} ref={ref}
                className={`group relative overflow-hidden bg-white border border-purple-50 hover:border-purple-200 rounded-3xl p-8 card-hover transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="absolute top-0 right-0 w-36 h-36 rounded-bl-full bg-purple-400/5 group-hover:bg-purple-400/10 transition-colors duration-500" />
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                    <u.icon className="text-purple-500 text-xl" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-purple-400 mb-1 font-body">{u.type}</p>
                    <h3 className="font-display font-bold text-gray-800 text-lg">{u.heading}</h3>
                  </div>
                </div>
                <p className="font-body text-gray-500 text-sm leading-relaxed mb-5">{u.body}</p>
                <div className="flex flex-wrap gap-2">
                  {u.tags.map(t => (
                    <span key={t} className="text-[10px] px-3 py-1 rounded-full bg-purple-50 text-purple-600 font-medium border border-purple-100 font-body">{t}</span>
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


/* ═══════════════════════════════════════════════════════════════════════
   INTEGRATIONS
═══════════════════════════════════════════════════════════════════════ */
function Integrations() {
  const names = [
    "Zomato", "Swiggy", "UberEats", "DoorDash", "Deliveroo",
    "Petpooja", "Posist", "Tally", "Zoho Books", "WhatsApp",
    "Razorpay", "Stripe", "Twilio", "Google Maps", "Shiprocket",
  ];
  const { ref, visible } = useIntersection();
  return (
    <section className="py-28 bg-purple-50/20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          eyebrow="Integrations"
          title="Connected to your entire food-tech stack."
          sub="Delivery platforms, POS, billing, mapping, payments, and communication — all pre-integrated."
        />
        <div ref={ref} className="flex flex-wrap justify-center gap-3">
          {names.map((name, i) => (
            <div key={name}
              className={`px-5 py-2.5 rounded-full border border-purple-100 bg-white text-sm font-medium text-gray-600 hover:border-purple-300 hover:text-purple-600 hover:shadow-md font-body transition-all duration-300 cursor-default ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
              style={{ transitionDelay: `${i * 45}ms` }}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   SECURITY
═══════════════════════════════════════════════════════════════════════ */
function Security() {
  const pillars = [
    { icon: RiShieldCheckLine, label: "HACCP Compliant logging" },
    { icon: RiLockLine, label: "End-to-end encrypted data" },
    { icon: RiCloudLine, label: "99.99% uptime SLA" },
    { icon: RiFileChartLine, label: "Full audit trail per order" },
    { icon: RiGlobalLine, label: "GDPR & PCI DSS ready" },
    { icon: RiPrinterLine, label: "Offline-first architecture" },
  ];
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          eyebrow="Security & Compliance"
          title="Built to the highest food-tech standards."
          sub="From payment data to health compliance records — every piece of data is treated with the seriousness it deserves."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {pillars.map((p, i) => {
            const { ref, visible } = useIntersection();
            return (
              <div key={p.label} ref={ref}
                className={`flex items-center gap-3 bg-white rounded-2xl px-5 py-4 border border-purple-50 hover:border-purple-200 hover:shadow-sm transition-all duration-400 card-hover ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${i * 70}ms` }}>
                <p.icon className="text-purple-400 text-lg flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700 font-body">{p.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   FEATURE HIGHLIGHTS STRIP
═══════════════════════════════════════════════════════════════════════ */
function FeatureHighlights() {
  const features = [
    { icon: RiCameraLine, title: "Dish Photo Manager", desc: "Upload, crop, and optimise menu photos. Bulk photo upload with AI background removal and plate styling suggestions." },
    { icon: RiCalendarLine, title: "Shift Scheduling", desc: "Plan kitchen shifts, assign roles, and auto-generate prep task lists per person per shift — linked to that day's expected orders." },
    { icon: RiNotificationLine, title: "Smart Alerts Engine", desc: "Stock hitting reorder level? Revenue below last week's Monday? Get precise, contextual alerts — not noise." },
    { icon: RiTeamLine, title: "Staff Performance", desc: "Track dishes prepped per chef, error rates, and average ticket time. Data to coach and reward your kitchen team." },
    { icon: RiFlowChart, title: "Recipe Versioning", desc: "Keep a history of every recipe change. Roll back if a reformulation affects quality. Compare cost across versions." },
    { icon: RiPrinterLine, title: "KDS & Printer Ready", desc: "Connects to thermal printers and kitchen display screens out of the box. No middleware needed." },
  ];
  return (
    <section className="py-28 bg-purple-50/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="More Capabilities"
          title="The detail work that makes the difference."
          sub="Beyond the core — every small feature that separates a great food operation from a great food business."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const { ref, visible } = useIntersection();
            return (
              <div key={f.title} ref={ref}
                className={`group bg-white border border-purple-50 hover:border-purple-200 rounded-3xl p-7 card-hover transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-11 h-11 rounded-2xl bg-purple-50 flex items-center justify-center mb-4 group-hover:bg-purple-100 transition-colors">
                  <f.icon className="text-purple-500 text-lg" />
                </div>
                <h3 className="font-display font-bold text-gray-800 mb-2">{f.title}</h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   CTA
═══════════════════════════════════════════════════════════════════════ */
function CTA() {
  const { ref, visible } = useIntersection();
  return (
    <section className="py-28 bg-transparent">
      <div ref={ref}
        className={`max-w-4xl mx-auto px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 p-16 text-center shadow-2xl shadow-purple-200">
          {/* Decorative circles */}
          <div className="absolute top-6 right-12 w-28 h-28 rounded-full border-2 border-white/10" />
          <div className="absolute bottom-6 left-10 w-16 h-16 rounded-full border border-white/10" />
          <div className="absolute top-1/2 left-6 w-3 h-3 rounded-full bg-white/20" />
          <div className="absolute bottom-12 right-20 w-5 h-5 rounded-full bg-white/10" />

          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-purple-100 mb-4 font-body">Ready to transform your food operations?</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Your kitchen deserves<br />better intelligence.
          </h2>
          <p className="font-body text-purple-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Join 2,800+ restaurants using Sellers Login Food Dashboard to run leaner, faster, and
            smarter kitchens. Start your 14-day free trial — no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
         <Link href="/vendor/registration">
            <button className="group flex items-center gap-2 bg-white text-purple-600 hover:bg-purple-50 font-bold font-body px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:-translate-y-0.5">
              Start Free Trial
              <RiArrowRightLine className="transition-transform group-hover:translate-x-1" />
            </button></Link>
          
          </div>
          <p className="mt-6 text-purple-100 text-xs font-body">15-minute setup · Works offline · Cancel anytime</p>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════════════ */
export default function FoodDashboardPage() {
  return (
    <>
      <CustomCursor />
      <GlobalBackground />
      <ScrollRevealInit />
      <Navbar />
      <main className="bg-transparent text-gray-900 overflow-x-hidden antialiased">
        <GlobalStyles />
        <Hero />
    
        <MenuBuilder />
        <StatsBand />
        <InventorySection />
        <OrderTracking />
        <AnalyticsSection />
        <HowItWorks />
        <UseCases />
        <FeatureHighlights />
   
   
        <Security />
        <CTA />
        <FooterSection />
        <BackToTop />
      </main>
    </>
  );
}