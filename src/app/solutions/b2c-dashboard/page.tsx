"use client";

import { useEffect, useRef, useState } from "react";
import { BackToTop } from "@/components/landing/BackToTop";
import { CustomCursor } from "@/components/landing/CustomCursor";
import { FooterSection } from "@/components/landing/FooterSection";
import { GlobalBackground } from "@/components/landing/GlobalBackground";
import { Navbar } from "@/components/landing/Navbar";
import { ScrollRevealInit } from "@/components/landing/ScrollRevealInit";
import {
  RiShoppingBag3Line,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiArrowDownLine,
  RiCheckLine,
  RiTimeLine,
  RiStarFill,
  RiTruckLine,
  RiBarChartBoxLine,
  RiRefreshLine,
  RiAddLine,
  RiSearchLine,
  RiFilterLine,
  RiHeartLine,
  RiUserLine,
  RiUserFollowLine,
  RiStore2Line,
  RiArrowUpLine,
  RiFlashlightLine,
  RiMagicLine,
  RiGlobalLine,
  RiShieldCheckLine,
  RiLineChartLine,
  RiPieChartLine,
  RiPercentLine,
  RiPriceTag3Line,
  RiImageLine,
  RiSettings4Line,
  RiDatabase2Line,
  RiBellLine,
  RiMailLine,
  RiSmartphoneLine,
  RiLayoutLine,
  RiPaletteLine,
  RiCoupon3Line,
  RiRepeatLine,
  RiCursorLine,
  RiEyeLine,
  RiFileChartLine,
  RiTeamLine,
  RiLockLine,
  RiCloudLine,
  RiCodeSSlashLine,
  RiStackLine,
  RiAppsLine,
  RiRocketLine,
  RiPulseLine,
  RiFlowChart,
  RiBankCardLine,
  RiMapPin2Line,
  RiBox3Line,
  RiCustomerService2Line,
  RiExchangeLine,
  RiQrCodeLine,
  RiShareLine,
  RiLeafLine,
  RiChatSmile2Line,
  RiTableLine,
  RiGiftLine,
  RiAlertLine,
  RiArrowDownSLine,
  RiDonutChartLine,
} from "react-icons/ri";
import Link from "next/link";

/* ─── Utility ─────────────────────────────────────────────────────────── */
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
        from { opacity:0; transform:translateY(30px); }
        to   { opacity:1; transform:translateY(0); }
      }
      @keyframes fadeIn  { from { opacity:0; } to { opacity:1; } }
      @keyframes shimmer {
        0%   { background-position: -200% center; }
        100% { background-position:  200% center; }
      }
      @keyframes marquee {
        from { transform: translateX(0); }
        to   { transform: translateX(-50%); }
      }
      @keyframes pulse-ring {
        0%    { transform:scale(0.92); opacity:0.7; }
        100%  { transform:scale(1.55); opacity:0; }
      }
      @keyframes ping-sm {
        0%        { transform:scale(1); opacity:1; }
        75%,100%  { transform:scale(1.9); opacity:0; }
      }
      @keyframes barGrow {
        from { transform:scaleY(0); transform-origin:bottom; }
        to   { transform:scaleY(1); transform-origin:bottom; }
      }
      @keyframes lineGrow {
        from { stroke-dashoffset: 400; }
        to   { stroke-dashoffset: 0; }
      }
      @keyframes spin-slow {
        from { transform:rotate(0deg); }
        to   { transform:rotate(360deg); }
      }
      @keyframes float {
        0%,100% { transform:translateY(0); }
        50%     { transform:translateY(-10px); }
      }
      @keyframes tagFloat {
        0%,100% { transform:translateY(0) rotate(-2deg); }
        50%     { transform:translateY(-8px) rotate(2deg); }
      }

      .shimmer-text {
        background: linear-gradient(90deg,#be185d,#ec4899,#fda4af,#be185d);
        background-size:200% auto;
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
        animation: shimmer 3.5s linear infinite;
      }
      .card-lift {
        transition: all 0.4s cubic-bezier(.22,1,.36,1);
      }
      .card-lift:hover {
        transform: translateY(-5px);
        box-shadow: 0 24px 64px -12px rgba(219,39,119,0.13);
      }
      .dot-grid {
        background-image: radial-gradient(circle, #f9a8d4 1px, transparent 1px);
        background-size: 32px 32px;
      }
      .line-grid {
        background-image:
          linear-gradient(#fce7f3 1px, transparent 1px),
          linear-gradient(90deg, #fce7f3 1px, transparent 1px);
        background-size: 56px 56px;
      }
    `}</style>
  );
}

/* ─── Orb Background ──────────────────────────────────────────────────── */
function OrbBg({ v = 0 }: { v?: number }) {
  const sets = [
    ["#fda4af","#fbcfe8","#f9a8d4"],
    ["#fce7f3","#fbcfe8","#fecdd3"],
    ["#fecdd3","#fda4af","#fb7185"],
  ];
  const [a,b,c] = sets[v % 3];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full opacity-[0.17]"
        style={{background:`radial-gradient(circle,${a} 0%,transparent 68%)`,animation:"orbFloat 9s ease-in-out infinite"}}/>
      <div className="absolute top-1/3 -right-52 w-[420px] h-[420px] rounded-full opacity-[0.12]"
        style={{background:`radial-gradient(circle,${b} 0%,transparent 68%)`,animation:"orbFloat 12s ease-in-out infinite reverse"}}/>
      <div className="absolute -bottom-20 left-1/3 w-[300px] h-[300px] rounded-full opacity-[0.09]"
        style={{background:`radial-gradient(circle,${c} 0%,transparent 68%)`,animation:"orbFloat 10s ease-in-out infinite 3s"}}/>
    </div>
  );
}

/* ─── Section Header ──────────────────────────────────────────────────── */
function SH({ eyebrow, title, sub, align="center" }: {eyebrow:string;title:string;sub?:string;align?:"center"|"left"}) {
  const {ref,visible} = useIntersection();
  const cls = align==="center" ? "text-center mx-auto" : "text-left";
  return (
    <div ref={ref} className={`max-w-2xl mb-16 px-4 ${cls}`}>
      <span className={`inline-block text-[11px] font-semibold tracking-[0.22em] uppercase text-purple-500 mb-3 font-body transition-all duration-500 ${visible?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`}>
        {eyebrow}
      </span>
      <h2 className={`font-display text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 transition-all duration-700 delay-100 ${visible?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`}>
        {title}
      </h2>
      {sub && <p className={`font-body text-gray-500 text-lg leading-relaxed transition-all duration-700 delay-200 ${visible?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`}>{sub}</p>}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   HERO
══════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden pt-24 pb-16">
      <OrbBg v={0}/>
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-[0.045]"/>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">


        <h1 className="font-display text-6xl md:text-[84px] font-bold leading-[1.03] text-gray-900 mb-6"
          style={{animation:"fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.1s both"}}>
          Sell more.<br />
          <em className="shimmer-text not-italic">Retain longer.</em><br />
          Grow faster.
        </h1>

        <p className="font-body text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{animation:"fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.25s both"}}>
          One intelligent dashboard to run your entire D2C operation — storefront builder, 
          customer intelligence, order & returns management, promotions, and real-time analytics, 
          all in a single pane of glass.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{animation:"fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.4s both"}}>
      <Link href="https://web.sellerslogin.com/vendor/registration">
          <button className="group flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold font-body px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-purple-200 hover:shadow-purple-300 hover:-translate-y-0.5">
            Start Free Trial
            <RiArrowRightLine className="transition-transform duration-200 group-hover:translate-x-1"/>
          </button></Link>
          <button className="group flex items-center gap-2 text-gray-700 hover:text-purple-600 font-semibold font-body px-8 py-4 rounded-full border border-gray-200 hover:border-purple-200 transition-all duration-300 bg-white/80 hover:-translate-y-0.5">
            Live Demo
            <RiArrowRightUpLine/>
          </button>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 font-body"
          style={{animation:"fadeIn 1s ease 0.7s both"}}>
          {["No credit card","14-day free trial","Migrate in 24h","99.99% uptime"].map(t=>(
            <span key={t} className="flex items-center gap-1.5">
              <RiCheckLine className="text-purple-400"/> {t}
            </span>
          ))}
        </div>
      </div>

      {/* Dashboard preview */}
      <div className="relative z-10 mt-20 max-w-6xl mx-auto px-4 w-full"
        style={{animation:"fadeUp 1s cubic-bezier(.22,1,.36,1) 0.55s both"}}>
        <DashboardPreview/>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-300 text-xs font-body"
        style={{animation:"fadeIn 1.5s ease 1s both"}}>
        <span className="tracking-widest uppercase">Scroll</span>
        <RiArrowDownLine className="text-lg animate-bounce"/>
      </div>
    </section>
  );
}

/* ─── Main Dashboard Preview ──────────────────────────────────────────── */
function DashboardPreview() {
  const bars = [52,68,44,88,70,95,60,82,55,90,74,86];
  const products = [
    {name:"Linen Blazer",sales:324,revenue:"₹2.1L",stock:48,trend:"up"},
    {name:"Silk Midi Dress",sales:289,revenue:"₹1.8L",stock:12,trend:"up"},
    {name:"Canvas Sneakers",sales:201,revenue:"₹1.2L",stock:0,trend:"down"},
    {name:"Leather Tote",sales:178,revenue:"₹0.9L",stock:67,trend:"up"},
  ];
  return (
    <div className="rounded-3xl border border-purple-100 bg-white shadow-2xl shadow-purple-100/60 overflow-hidden">
      {/* Chrome bar */}
      <div className="flex items-center gap-2 px-5 py-3 border-b border-purple-50 bg-purple-50/40">
        <span className="w-3 h-3 rounded-full bg-red-300"/>
        <span className="w-3 h-3 rounded-full bg-yellow-300"/>
        <span className="w-3 h-3 rounded-full bg-green-300"/>
        <div className="ml-4 flex-1 max-w-xs bg-white/80 rounded-full px-3 py-1 text-xs text-gray-400 font-mono border border-purple-50">
          app.shopflow.io/dashboard
        </div>
        <div className="ml-auto flex items-center gap-3">
          <span className="text-[10px] text-emerald-500 font-semibold font-body flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{animation:"ping-sm 1.5s infinite"}}/>
            Live
          </span>
          <span className="text-[10px] text-gray-400 font-body">23 visitors online</span>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-[64px] md:w-[190px] border-r border-purple-50 bg-white p-3 md:p-4 flex-shrink-0 hidden sm:block">
          <div className="hidden md:flex items-center gap-2 mb-6 px-2">
            <div className="w-7 h-7 rounded-lg bg-purple-600 flex items-center justify-center">
              <RiShoppingBag3Line className="text-white text-sm"/>
            </div>
            <span className="font-display font-bold text-gray-800 text-sm">ShopFlow</span>
          </div>
          {[
            {icon:RiBarChartBoxLine,l:"Overview",a:true},
            {icon:RiShoppingBag3Line,l:"Products"},
            {icon:RiBox3Line,l:"Orders"},
            {icon:RiUserLine,l:"Customers"},
            {icon:RiCoupon3Line,l:"Promotions"},
            {icon:RiFileChartLine,l:"Analytics"},
            {icon:RiSettings4Line,l:"Settings"},
          ].map(({icon:Icon,l,a})=>(
            <div key={l} className={`flex items-center gap-2.5 text-[11px] px-3 py-2.5 rounded-xl mb-0.5 cursor-pointer font-body transition-colors ${a?"bg-purple-50 text-purple-600 font-semibold":"text-gray-400 hover:text-gray-600 hover:bg-gray-50"}`}>
              <Icon className="text-base flex-shrink-0"/>
              <span className="hidden md:block truncate">{l}</span>
            </div>
          ))}
        </div>

        {/* Main */}
        <div className="flex-1 bg-gray-50/30 p-4 md:p-5 min-w-0">
          {/* Greeting */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-display font-bold text-gray-800 text-base">Good afternoon, Priya</h3>
              <p className="text-xs text-gray-400 font-body">Friday, 13 June · Summer Sale live</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-purple-50 text-purple-600 border border-purple-100 px-2.5 py-1 rounded-full font-semibold font-body flex items-center gap-1">
                <RiFlashlightLine className="text-xs"/> Sale Active
              </span>
              <div className="relative">
                <RiBellLine className="text-gray-400 text-lg"/>
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-purple-500 text-white text-[8px] flex items-center justify-center font-bold">5</span>
              </div>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
            {[
              {label:"Today's GMV",val:"₹4.82L",delta:"+31%",up:true,icon:RiBarChartBoxLine},
              {label:"Orders",val:"1,204",delta:"+18%",up:true,icon:RiBox3Line},
              {label:"Conversion Rate",val:"3.84%",delta:"+0.6%",up:true,icon:RiPercentLine},
              {label:"Avg. Order Value",val:"₹ 401",delta:"-4%",up:false,icon:RiBankCardLine},
            ].map(k=>(
              <div key={k.label} className="bg-white rounded-2xl p-3 md:p-4 border border-purple-50 shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <p className="text-[10px] text-gray-400 font-body leading-tight">{k.label}</p>
                  <k.icon className="text-purple-300 text-sm flex-shrink-0"/>
                </div>
                <p className="text-lg md:text-xl font-bold text-gray-800 font-mono">{k.val}</p>
                <p className={`text-[10px] font-semibold font-body mt-0.5 ${k.up?"text-emerald-500":"text-rose-400"}`}>{k.delta}</p>
              </div>
            ))}
          </div>

          {/* Chart + table */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <div className="lg:col-span-2 bg-white rounded-2xl border border-purple-50 p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold text-gray-600 font-body">Revenue — Last 12 days</p>
                <span className="text-[10px] text-purple-400 bg-purple-50 px-2 py-0.5 rounded-full font-body">Live</span>
              </div>
              <div className="flex items-end gap-1.5 h-20">
                {bars.map((h,i)=>(
                  <div key={i} className="flex-1 rounded-t-md"
                    style={{height:`${h}%`,background:i===9?"#db2777":i===5?"#f9a8d4":"#fce7f3",
                    transformOrigin:"bottom",animation:`barGrow 0.5s cubic-bezier(.22,1,.36,1) ${i*0.04}s both`}}/>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-purple-50 p-4 shadow-sm">
              <p className="text-xs font-semibold text-gray-600 font-body mb-3">Top Products</p>
              <div className="space-y-2.5">
                {products.map(p=>(
                  <div key={p.name} className="flex items-center gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-semibold text-gray-700 truncate font-body">{p.name}</p>
                      <p className="text-[10px] text-gray-400 font-body">{p.sales} sold</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-purple-600 font-mono">{p.revenue}</p>
                      <p className={`text-[9px] font-body ${p.stock===0?"text-rose-400":p.stock<20?"text-amber-400":"text-emerald-400"}`}>
                        {p.stock===0?"Out of stock":`${p.stock} left`}
                      </p>
                    </div>
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



/* ══════════════════════════════════════════════════════════════
   STOREFRONT BUILDER SECTION
══════════════════════════════════════════════════════════════ */
function StorefrontBuilder() {
  const {ref,visible} = useIntersection();
  const themes = [
    {name:"Aura",tag:"Bestseller",color:"from-purple-400 to-rose-500"},
    {name:"Slate",tag:"Minimal",color:"from-gray-400 to-gray-600"},
    {name:"Bloom",tag:"Fashion",color:"from-fuchsia-400 to-purple-500"},
    {name:"Lux",tag:"Premium",color:"from-amber-400 to-orange-500"},
  ];
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div ref={ref}>
            <span className={`inline-block text-[11px] font-semibold tracking-[0.22em] uppercase text-purple-500 mb-4 font-body transition-all duration-500 ${visible?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`}>
              Storefront Builder
            </span>
            <h2 className={`font-display text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 transition-all duration-700 delay-100 ${visible?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`}>
              A storefront as unique<br/>as your <em className="shimmer-text not-italic">brand.</em>
            </h2>
            <p className={`font-body text-gray-500 text-lg leading-relaxed mb-8 transition-all duration-700 delay-200 ${visible?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`}>
              Build a stunning D2C store without writing a line of code. Choose from 
              50+ conversion-optimised themes, customise every pixel in the drag-and-drop 
              editor, and publish in minutes — not months.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "50+ mobile-first themes built for conversion",
                "Drag-and-drop page builder with live preview",
                "Custom domain, SSL, and CDN included",
                "Section-based homepage with A/B testing",
                "Auto-generated SEO meta tags and sitemaps",
                "One-click PWA — works offline on mobile",
              ].map((f,i)=>(
                <li key={f}
                  className={`flex items-start gap-3 text-sm text-gray-600 font-body transition-all duration-500 ${visible?"opacity-100 translate-x-0":"opacity-0 -translate-x-4"}`}
                  style={{transitionDelay:`${300+i*75}ms`}}>
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center flex-shrink-0">
                    <RiCheckLine className="text-purple-500 text-xs"/>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <button className="group inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold font-body px-7 py-3.5 rounded-full transition-all duration-300 shadow-md shadow-purple-200 hover:-translate-y-0.5">
              Browse Themes <RiArrowRightLine className="transition-transform group-hover:translate-x-1"/>
            </button>
          </div>

          {/* Right — theme picker mock */}
          <div className={`transition-all duration-700 delay-200 ${visible?"opacity-100 translate-x-0":"opacity-0 translate-x-8"}`}>
            <div className="bg-white rounded-3xl border border-purple-100 shadow-xl shadow-purple-50 overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-3.5 border-b border-purple-50 bg-purple-50/30">
                <RiPaletteLine className="text-purple-400"/>
                <span className="font-display font-semibold text-gray-700 text-sm">Theme Studio</span>
                <span className="ml-auto text-[10px] bg-purple-50 text-purple-500 border border-purple-100 px-2 py-0.5 rounded-full font-body">50 themes</span>
              </div>

              {/* Theme grid */}
              <div className="p-4 grid grid-cols-2 gap-3 mb-2">
                {themes.map((t,i)=>(
                  <div key={t.name}
                    className={`relative rounded-2xl overflow-hidden cursor-pointer group ${i===0?"ring-2 ring-purple-400":""}`}
                    style={{animation:`fadeUp 0.4s ease ${i*0.08}s both`}}>
                    <div className={`h-28 bg-gradient-to-br ${t.color} flex items-end p-3`}>
                      {/* Fake product cards */}
                      <div className="w-full space-y-1">
                        <div className="h-1.5 bg-white/30 rounded-full w-3/4"/>
                        <div className="h-1 bg-white/20 rounded-full w-1/2"/>
                      </div>
                    </div>
                    <div className="p-2.5 bg-white border-t border-purple-50">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-gray-700 font-body">{t.name}</span>
                        <span className="text-[9px] bg-purple-50 text-purple-500 px-1.5 py-0.5 rounded-full font-body">{t.tag}</span>
                      </div>
                    </div>
                    {i===0 && <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
                      <RiCheckLine className="text-white text-[10px]"/>
                    </div>}
                  </div>
                ))}
              </div>

              {/* Editor toolbar */}
              <div className="mx-4 mb-4 p-3 bg-purple-50/40 rounded-2xl border border-purple-100">
                <p className="text-[10px] font-semibold text-purple-500 uppercase tracking-widest mb-2 font-body">Quick customise</p>
                <div className="flex items-center gap-2 flex-wrap">
                  {["Hero Banner","Product Grid","Reviews","Newsletter","Footer"].map(s=>(
                    <span key={s} className="text-[10px] px-2.5 py-1 rounded-full bg-white border border-purple-100 text-gray-500 font-body cursor-pointer hover:border-purple-300 hover:text-purple-600 transition-colors">{s}</span>
                  ))}
                </div>
              </div>

              <div className="px-4 pb-4">
                <button className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white text-xs font-semibold font-body py-3 rounded-xl hover:bg-purple-700 transition-colors">
                  <RiRocketLine/> Publish Store
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   PRODUCT & CATALOGUE SECTION
══════════════════════════════════════════════════════════════ */
function ProductCatalogue() {
  const {ref,visible} = useIntersection();
  const products = [
    {name:"Linen Blazer — Ecru",sku:"BLZ-001",price:"₹4,299",stock:48,status:"Active",img:RiShoppingBag3Line},
    {name:"Silk Midi Dress — Blush",sku:"DRS-002",price:"₹6,499",stock:12,status:"Low Stock",img:RiHeartLine},
    {name:"Canvas Sneakers — White",sku:"SNK-003",price:"₹2,899",stock:0,status:"Out of Stock",img:RiStore2Line},
    {name:"Leather Tote — Tan",sku:"TOT-004",price:"₹8,999",stock:67,status:"Active",img:RiShoppingBag3Line},
    {name:"Cashmere Scarf — Grey",sku:"SCF-005",price:"₹3,499",stock:34,status:"Active",img:RiHeartLine},
  ];
  return (
    <section className="py-28 bg-purple-50/30 relative overflow-hidden">
      <OrbBg v={1}/>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left — product catalogue UI */}
          <div className={`transition-all duration-700 ${visible?"opacity-100 translate-x-0":"opacity-0 -translate-x-8"}`}>
            <div className="bg-white rounded-3xl border border-purple-100 shadow-xl shadow-purple-50 overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-4 border-b border-purple-50">
                <RiShoppingBag3Line className="text-purple-400"/>
                <span className="font-display font-semibold text-gray-700">Product Catalogue</span>
                <div className="ml-auto flex gap-2">
                  <div className="flex items-center gap-1.5 bg-gray-50 rounded-lg px-2.5 py-1.5 text-[10px] text-gray-400 font-body border border-gray-100">
                    <RiSearchLine className="text-xs"/> Search
                  </div>
                  <button className="text-xs text-purple-600 bg-purple-50 px-3 py-1.5 rounded-lg font-body font-semibold flex items-center gap-1 border border-purple-100">
                    <RiAddLine/> Add
                  </button>
                </div>
              </div>

              {/* Filter tabs */}
              <div className="flex gap-1 px-4 py-2.5 border-b border-purple-50 overflow-x-auto">
                {["All (284)","Active","Low Stock","Out of Stock","Drafts"].map((t,i)=>(
                  <button key={t} className={`text-[11px] px-3 py-1.5 rounded-full whitespace-nowrap font-body transition-colors ${i===0?"bg-purple-600 text-white font-semibold":"text-gray-400 hover:text-gray-600"}`}>{t}</button>
                ))}
              </div>

              <div className="p-4 space-y-2.5 max-h-72 overflow-y-auto">
                {products.map((p,i)=>(
                  <div key={p.sku}
                    className="flex items-center gap-3 p-3 rounded-2xl border border-purple-50 hover:border-purple-200 hover:bg-purple-50/20 transition-all cursor-pointer group"
                    style={{animation:`fadeUp 0.4s ease ${i*0.06}s both`}}>
                    <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                      <p.img className="text-purple-400 text-base"/>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-700 font-body truncate">{p.name}</p>
                      <p className="text-[10px] text-gray-400 font-mono">{p.sku}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-xs font-bold text-gray-800 font-mono">{p.price}</p>
                      <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-body ${
                        p.status==="Active"?"bg-emerald-50 text-emerald-600":
                        p.status==="Low Stock"?"bg-amber-50 text-amber-600":
                        "bg-rose-50 text-rose-500"
                      }`}>{p.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-4 pb-4 flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-1 text-[11px] text-purple-600 bg-purple-50 border border-purple-100 rounded-xl py-2.5 font-body font-semibold hover:bg-purple-100 transition-colors">
                  <RiImageLine/> Bulk Image Upload
                </button>
                <button className="flex-1 flex items-center justify-center gap-1 text-[11px] text-gray-500 bg-gray-50 border border-gray-100 rounded-xl py-2.5 font-body font-semibold hover:bg-gray-100 transition-colors">
                  <RiTableLine/> Import CSV
                </button>
              </div>
            </div>
          </div>

          {/* Right text */}
          <div ref={ref}>
            <span className={`inline-block text-[11px] font-semibold tracking-[0.22em] uppercase text-purple-500 mb-4 font-body transition-all duration-500 ${visible?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`}>
              Product Management
            </span>
            <h2 className={`font-display text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 transition-all duration-700 delay-100 ${visible?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`}>
              Your catalogue,<br/><em className="shimmer-text not-italic">perfectly organised.</em>
            </h2>
            <p className={`font-body text-gray-500 text-lg leading-relaxed mb-8 transition-all duration-700 delay-200 ${visible?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`}>
              From single SKUs to thousands of variants — manage your entire catalogue 
              with rich media, SEO fields, variant matrices, and multi-channel publishing 
              in one effortless workflow.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                {icon:RiImageLine,title:"Rich Media Manager",desc:"Bulk upload photos & videos, auto-compress, add alt text"},
                {icon:RiMagicLine,title:"AI Descriptions",desc:"Generate product copy and SEO meta in one click"},
                {icon:RiPriceTag3Line,title:"Variant Matrix",desc:"Size × colour × material — unlimited variant combinations"},
                {icon:RiGlobalLine,title:"Multi-channel Sync",desc:"Publish to Amazon, Flipkart, Myntra simultaneously"},
              ].map((f,i)=>(
                <div key={f.title}
                  className={`bg-white rounded-2xl border border-purple-50 p-4 hover:border-purple-200 hover:shadow-md transition-all duration-400 card-lift ${visible?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`}
                  style={{transitionDelay:`${300+i*80}ms`}}>
                  <f.icon className="text-purple-400 text-lg mb-2"/>
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

/* ══════════════════════════════════════════════════════════════
   ORDER MANAGEMENT SECTION
══════════════════════════════════════════════════════════════ */
function OrderManagement() {
  const {ref,visible} = useIntersection();
  const orders = [
    {id:"#ORD-8841",customer:"Aisha Mehta",items:"2 items",val:"₹6,799",status:"Shipped",statusColor:"bg-blue-400",time:"2h ago"},
    {id:"#ORD-8840",customer:"Rohan Kapoor",items:"1 item",val:"₹2,899",status:"Processing",statusColor:"bg-amber-400",time:"3h ago"},
    {id:"#ORD-8839",customer:"Divya Sharma",items:"4 items",val:"₹18,300",status:"Delivered",statusColor:"bg-emerald-400",time:"5h ago"},
    {id:"#ORD-8838",customer:"Kabir Singh",items:"1 item",val:"₹4,299",status:"Return Req.",statusColor:"bg-rose-400",time:"6h ago"},
    {id:"#ORD-8837",customer:"Meera Nair",items:"3 items",val:"₹9,997",status:"Shipped",statusColor:"bg-blue-400",time:"8h ago"},
  ];
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left text */}
          <div ref={ref}>
            <span className={`inline-block text-[11px] font-semibold tracking-[0.22em] uppercase text-purple-500 mb-4 font-body transition-all duration-500 ${visible?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`}>
              Order Management
            </span>
            <h2 className={`font-display text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 transition-all duration-700 delay-100 ${visible?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`}>
              Every order.<br/><em className="shimmer-text not-italic">Zero drama.</em>
            </h2>
            <p className={`font-body text-gray-500 text-lg leading-relaxed mb-8 transition-all duration-700 delay-200 ${visible?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`}>
              From checkout to delivery to returns — one unified workflow that syncs 
              with your warehouse, courier, and customer in real time. No manual chasing,
              no missed SLAs.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Auto-assign orders to nearest fulfilment centre",
                "One-click bulk shipping label generation",
                "Live courier tracking synced to customer portal",
                "Smart returns & exchange automation",
                "NDR (non-delivery) management with retry logic",
                "COD reconciliation with daily settlement reports",
              ].map((f,i)=>(
                <li key={f}
                  className={`flex items-start gap-3 text-sm text-gray-600 font-body transition-all duration-500 ${visible?"opacity-100 translate-x-0":"opacity-0 -translate-x-4"}`}
                  style={{transitionDelay:`${300+i*70}ms`}}>
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center flex-shrink-0">
                    <RiCheckLine className="text-purple-500 text-xs"/>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — orders UI */}
          <div className={`transition-all duration-700 delay-200 ${visible?"opacity-100 translate-x-0":"opacity-0 translate-x-8"}`}>
            <div className="bg-white rounded-3xl border border-purple-100 shadow-xl shadow-purple-50 overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-4 border-b border-purple-50">
                <RiBox3Line className="text-purple-400"/>
                <span className="font-display font-semibold text-gray-700">Orders</span>
                <div className="ml-auto flex items-center gap-2">
                  <span className="text-[10px] bg-purple-50 text-purple-500 px-2 py-0.5 rounded-full font-body font-semibold">1,204 today</span>
                  <RiRefreshLine className="text-gray-300 text-sm" style={{animation:"spin-slow 4s linear infinite"}}/>
                </div>
              </div>

              {/* Status tabs */}
              <div className="flex gap-1 px-4 py-2.5 border-b border-purple-50 overflow-x-auto">
                {["All","Processing","Shipped","Delivered","Returns"].map((t,i)=>(
                  <button key={t} className={`text-[11px] px-3 py-1.5 rounded-full whitespace-nowrap font-body transition-colors ${i===0?"bg-purple-600 text-white font-semibold":"text-gray-400 hover:text-gray-600"}`}>{t}</button>
                ))}
              </div>

              <div className="p-4 space-y-2.5">
                {orders.map((o,i)=>(
                  <div key={o.id}
                    className="flex items-center gap-3 p-3 rounded-2xl border border-purple-50 hover:border-purple-200 hover:bg-purple-50/20 transition-all cursor-pointer"
                    style={{animation:`fadeUp 0.4s ease ${i*0.07}s both`}}>
                    <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${o.statusColor}`}/>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-gray-700 font-mono">{o.id}</span>
                        <span className="text-[10px] text-gray-400 font-body truncate">{o.customer}</span>
                      </div>
                      <p className="text-[10px] text-gray-400 font-body">{o.items} · {o.time}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-xs font-bold text-gray-800 font-mono">{o.val}</p>
                      <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-body ${
                        o.status==="Delivered"?"bg-emerald-50 text-emerald-600":
                        o.status==="Shipped"?"bg-blue-50 text-blue-600":
                        o.status==="Processing"?"bg-amber-50 text-amber-600":
                        "bg-rose-50 text-rose-500"
                      }`}>{o.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary footer */}
              <div className="mx-4 mb-4 grid grid-cols-3 gap-2">
                {[
                  {label:"Avg. delivery",val:"2.4 days"},
                  {label:"Return rate",val:"4.1%"},
                  {label:"NPS score",val:"72"},
                ].map(s=>(
                  <div key={s.label} className="text-center bg-purple-50/40 rounded-xl py-2.5 border border-purple-50">
                    <p className="text-xs font-bold text-gray-700 font-mono">{s.val}</p>
                    <p className="text-[9px] text-gray-400 font-body">{s.label}</p>
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

/* ══════════════════════════════════════════════════════════════
   CUSTOMER INTELLIGENCE SECTION
══════════════════════════════════════════════════════════════ */
function CustomerIntelligence() {
  const {ref,visible} = useIntersection();
  const segments = [
    {label:"Champions",count:"4,821",pct:28,color:"#db2777"},
    {label:"Loyal",count:"6,203",pct:36,color:"#ec4899"},
    {label:"At Risk",count:"2,114",pct:12,color:"#fda4af"},
    {label:"Lost",count:"4,081",pct:24,color:"#fce7f3"},
  ];
  const customers = [
    {name:"Aisha Mehta",orders:24,ltv:"₹1.2L",segment:"Champion",avatar:"AM"},
    {name:"Rohan Kapoor",orders:17,ltv:"₹84K",segment:"Loyal",avatar:"RK"},
    {name:"Divya Sharma",orders:11,ltv:"₹52K",segment:"Loyal",avatar:"DS"},
    {name:"Kabir Singh",orders:3,ltv:"₹9K",segment:"At Risk",avatar:"KS"},
  ];
  return (
    <section className="py-28 bg-purple-50/30 relative overflow-hidden">
      <OrbBg v={2}/>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left — customer intel UI */}
          <div className={`transition-all duration-700 ${visible?"opacity-100 translate-x-0":"opacity-0 -translate-x-8"}`}>
            <div className="bg-white rounded-3xl border border-purple-100 shadow-xl shadow-purple-50 overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-4 border-b border-purple-50">
                <RiUserLine className="text-purple-400"/>
                <span className="font-display font-semibold text-gray-700">Customer Intelligence</span>
                <span className="ml-auto text-[10px] bg-purple-50 text-purple-500 px-2 py-0.5 rounded-full font-body">17,219 customers</span>
              </div>

              {/* RFM Segments */}
              <div className="p-4 mb-1">
                <p className="text-[10px] font-semibold text-purple-500 uppercase tracking-widest mb-3 font-body">RFM Segmentation</p>
                <div className="space-y-2">
                  {segments.map(s=>(
                    <div key={s.label}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-gray-600 font-body">{s.label}</span>
                        <span className="text-xs text-gray-400 font-mono">{s.count}</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full rounded-full transition-all duration-1000" style={{width:`${s.pct}%`,background:s.color}}/>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customer list */}
              <div className="px-4 pb-2">
                <p className="text-[10px] font-semibold text-purple-500 uppercase tracking-widest mb-2 font-body">Top Customers by LTV</p>
                <div className="space-y-2">
                  {customers.map((c,i)=>(
                    <div key={c.name}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-purple-50/30 transition-colors cursor-pointer"
                      style={{animation:`fadeUp 0.35s ease ${i*0.06}s both`}}>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-300 to-rose-400 flex items-center justify-center text-white text-xs font-bold font-body flex-shrink-0">
                        {c.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-gray-700 font-body">{c.name}</p>
                        <p className="text-[10px] text-gray-400 font-body">{c.orders} orders</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-bold text-purple-600 font-mono">{c.ltv}</p>
                        <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-body ${
                          c.segment==="Champion"?"bg-purple-50 text-purple-600":
                          c.segment==="Loyal"?"bg-emerald-50 text-emerald-600":
                          "bg-amber-50 text-amber-600"
                        }`}>{c.segment}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-4 pb-4 mt-2">
                <button className="w-full flex items-center justify-center gap-2 text-xs font-semibold text-purple-600 bg-purple-50 hover:bg-purple-100 border border-purple-100 rounded-xl py-2.5 font-body transition-colors">
                  <RiMailLine/> Launch Win-back Campaign
                </button>
              </div>
            </div>
          </div>

          {/* Right text */}
          <div ref={ref}>
            <span className={`inline-block text-[11px] font-semibold tracking-[0.22em] uppercase text-purple-500 mb-4 font-body transition-all duration-500 ${visible?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`}>
              Customer Intelligence
            </span>
            <h2 className={`font-display text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 transition-all duration-700 delay-100 ${visible?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`}>
              Know your buyers<br/><em className="shimmer-text not-italic">before they leave.</em>
            </h2>
            <p className={`font-body text-gray-500 text-lg leading-relaxed mb-8 transition-all duration-700 delay-200 ${visible?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`}>
              Automatic RFM segmentation surfaces your champions, loyals, and at-risk 
              customers. Trigger personalised win-back journeys before a customer 
              quietly disappears.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                {icon:RiDonutChartLine,title:"RFM Segmentation",desc:"Auto-classify every customer by recency, frequency, monetary value"},
                {icon:RiRepeatLine,title:"Cohort Retention",desc:"Track week-over-week retention curves and spot churn early"},
                {icon:RiUserFollowLine,title:"Loyalty Engine",desc:"Points, tiers, referral rewards — built-in, no extra app needed"},
                {icon:RiChatSmile2Line,title:"360° Profile",desc:"Order history, wishlist, support tickets, and browsing behaviour"},
              ].map((f,i)=>(
                <div key={f.title}
                  className={`bg-white rounded-2xl border border-purple-50 p-4 hover:border-purple-200 hover:shadow-md transition-all duration-400 card-lift ${visible?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`}
                  style={{transitionDelay:`${300+i*80}ms`}}>
                  <f.icon className="text-purple-400 text-lg mb-2"/>
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

/* ══════════════════════════════════════════════════════════════
   STATS BAND
══════════════════════════════════════════════════════════════ */
function StatsBand() {
  const {ref,visible} = useIntersection();
  const stats = [
    {val:38,suf:"%",label:"Average conversion lift"},
    {val:12,suf:"+",label:"B2C brands on platform"},
    {val:99,suf:".99%",label:"Platform uptime"},
    {val:4,suf:"x",label:"Average ROI in 6 months"},
  ];
  return (
    <section ref={ref} className="py-20 bg-linear-to-r from-purple-600 via-rose-500 to-purple-500 text-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-white/5"/>
        <div className="absolute -bottom-10 left-1/3 w-48 h-48 rounded-full bg-white/5"/>
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((s,i)=>(
            <div key={s.label}
              className={`transition-all duration-700 ${visible?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}
              style={{transitionDelay:`${i*100}ms`}}>
              <p className="text-5xl font-bold font-mono mb-2">
                {visible?<Counter to={s.val} suffix={s.suf}/>:`0${s.suf}`}
              </p>
              <p className="text-purple-100 text-sm font-body">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   PROMOTIONS & MARKETING
══════════════════════════════════════════════════════════════ */
function Promotions() {
  const {ref,visible} = useIntersection();
  const campaigns = [
    {name:"Summer Sale 2024",type:"Discount",reach:"24K",status:"Live",conv:"4.2%",color:"bg-emerald-400"},
    {name:"Abandonment Flow",type:"Email",reach:"8.1K",status:"Active",conv:"11%",color:"bg-blue-400"},
    {name:"Flash Sale — Friday",type:"Timer",reach:"—",status:"Scheduled",conv:"—",color:"bg-amber-400"},
    {name:"Loyalty Points Boost",type:"Loyalty",reach:"12K",status:"Live",conv:"6.8%",color:"bg-purple-400"},
  ];
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left text */}
          <div ref={ref}>
            <span className={`inline-block text-[11px] font-semibold tracking-[0.22em] uppercase text-purple-500 mb-4 font-body transition-all duration-500 ${visible?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`}>
              Promotions & Marketing
            </span>
            <h2 className={`font-display text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 transition-all duration-700 delay-100 ${visible?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`}>
              Campaigns that<br/><em className="shimmer-text not-italic">actually convert.</em>
            </h2>
            <p className={`font-body text-gray-500 text-lg leading-relaxed mb-8 transition-all duration-700 delay-200 ${visible?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`}>
              Build discount rules, flash sales, cart abandonment flows, and loyalty 
              programmes — without needing five separate tools. Set conditions, 
              schedule, and let the engine do the rest.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Coupon engine with spend, product, and user conditions",
                "Cart abandonment email & WhatsApp sequences",
                "Urgency timers and low-stock nudges on product pages",
                "Referral programme with custom reward tiers",
                "Affiliate & influencer link attribution",
                "Personalised recommendations using purchase history",
              ].map((f,i)=>(
                <li key={f}
                  className={`flex items-start gap-3 text-sm text-gray-600 font-body transition-all duration-500 ${visible?"opacity-100 translate-x-0":"opacity-0 -translate-x-4"}`}
                  style={{transitionDelay:`${300+i*70}ms`}}>
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center flex-shrink-0">
                    <RiCheckLine className="text-purple-500 text-xs"/>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — promotions UI */}
          <div className={`transition-all duration-700 delay-200 ${visible?"opacity-100 translate-x-0":"opacity-0 translate-x-8"}`}>
            <div className="bg-white rounded-3xl border border-purple-100 shadow-xl shadow-purple-50 overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-4 border-b border-purple-50">
                <RiCoupon3Line className="text-purple-400"/>
                <span className="font-display font-semibold text-gray-700">Campaigns</span>
                <button className="ml-auto text-xs text-purple-600 bg-purple-50 px-3 py-1.5 rounded-lg font-body font-semibold flex items-center gap-1 border border-purple-100">
                  <RiAddLine/> New Campaign
                </button>
              </div>

              <div className="p-4 space-y-3">
                {campaigns.map((c,i)=>(
                  <div key={c.name}
                    className="flex items-center gap-3 p-3.5 rounded-2xl border border-purple-50 hover:border-purple-200 hover:bg-purple-50/20 transition-all cursor-pointer"
                    style={{animation:`fadeUp 0.4s ease ${i*0.07}s both`}}>
                    <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${c.color}`}/>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-700 font-body">{c.name}</p>
                      <p className="text-[10px] text-gray-400 font-body">{c.type} · Reach {c.reach}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-body font-semibold ${
                        c.status==="Live"?"bg-emerald-50 text-emerald-600":
                        c.status==="Active"?"bg-blue-50 text-blue-600":
                        "bg-amber-50 text-amber-600"
                      }`}>{c.status}</span>
                      {c.conv!=="—" && <p className="text-[10px] text-purple-500 font-mono mt-0.5">{c.conv} CVR</p>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick stats */}
              <div className="mx-4 mb-4 p-4 bg-purple-50/40 rounded-2xl border border-purple-100">
                <p className="text-[10px] font-semibold text-purple-500 uppercase tracking-widest mb-3 font-body">This Month's Promo Impact</p>
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[
                    {label:"Revenue from promos",val:"₹18.4L"},
                    {label:"Coupons redeemed",val:"3,841"},
                    {label:"Promo ROAS",val:"6.2x"},
                  ].map(s=>(
                    <div key={s.label}>
                      <p className="text-sm font-bold text-gray-800 font-mono">{s.val}</p>
                      <p className="text-[9px] text-gray-400 font-body leading-tight mt-0.5">{s.label}</p>
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

/* ══════════════════════════════════════════════════════════════
   ANALYTICS SECTION
══════════════════════════════════════════════════════════════ */
function Analytics() {
  const cards = [
    {icon:RiLineChartLine,title:"Revenue & GMV",desc:"Daily, weekly, and monthly breakdowns by channel, device, city, and traffic source — drill as deep as you need.",tag:"Finance"},
    {icon:RiCursorLine,title:"Funnel Analytics",desc:"Visualise every drop-off from homepage to checkout. Know exactly where you're losing buyers and why.",tag:"Conversion"},
    {icon:RiPieChartLine,title:"Product Performance",desc:"Best and worst performers by revenue, units, returns, and margin. Kill bad inventory before it kills your metrics.",tag:"Catalogue"},
    {icon:RiUserFollowLine,title:"Customer LTV & Cohorts",desc:"Track repeat rate, purchase frequency, and lifetime value by acquisition cohort and channel.",tag:"Retention"},
    {icon:RiShareLine,title:"Marketing Attribution",desc:"Multi-touch attribution across Google, Meta, email, WhatsApp, and influencers — understand true ROAS.",tag:"Marketing"},
    {icon:RiSmartphoneLine,title:"Mobile App Analytics",desc:"Session length, push open rates, feature adoption, and in-app purchase funnels — all native to the dashboard.",tag:"App"},
  ];
  return (
    <section className="py-28 bg-purple-50/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <SH eyebrow="Analytics & Insights" title="Data that drives decisions, not reports." sub="Not a dashboard you open once a week — one you check between every meeting because it's that actionable."/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c,i)=>{
            const {ref,visible} = useIntersection();
            return (
              <div key={c.title} ref={ref}
                className={`group bg-white border border-purple-50 hover:border-purple-200 rounded-3xl p-7 card-lift transition-all duration-500 ${visible?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}
                style={{transitionDelay:`${i*80}ms`}}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                    <c.icon className="text-purple-500 text-lg"/>
                  </div>
                  <span className="text-[10px] text-purple-400 bg-purple-50 border border-purple-100 px-2 py-0.5 rounded-full font-body">{c.tag}</span>
                </div>
                <h3 className="font-display font-bold text-gray-800 text-base mb-2">{c.title}</h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{c.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs text-purple-400 font-semibold font-body opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore <RiArrowRightLine/>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   OMNICHANNEL SECTION
══════════════════════════════════════════════════════════════ */
function Omnichannel() {
  const {ref,visible} = useIntersection();
  const channels = [
    {icon:RiStore2Line,name:"D2C Website",desc:"Your own branded storefront, owned traffic, zero commissions"},
    {icon:RiSmartphoneLine,name:"Mobile App",desc:"iOS & Android apps with one-tap checkout and push campaigns"},
    {icon:RiShoppingBag3Line,name:"Marketplaces",desc:"Amazon, Flipkart, Myntra — sync catalogue and orders centrally"},
    {icon:RiShareLine,name:"Social Commerce",desc:"Instagram & WhatsApp storefronts with native checkout"},
    {icon:RiQrCodeLine,name:"Offline / QR",desc:"QR-powered offline discovery linking to online PDPs"},
    {icon:RiGlobalLine,name:"International",desc:"Multi-currency, localised catalogues, and cross-border shipping"},
  ];
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SH eyebrow="Omnichannel Commerce" title="Sell everywhere from one place." sub="Your customer doesn't think in channels. Your operations shouldn't either."/>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {channels.map((c,i)=>(
            <div key={c.name}
              className={`group bg-white border border-purple-50 hover:border-purple-200 rounded-3xl p-7 card-lift transition-all duration-500 ${visible?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}
              style={{transitionDelay:`${i*80}ms`}}>
              <div className="relative mb-5">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                  <c.icon className="text-purple-500 text-xl"/>
                </div>
                <div className="absolute inset-0 rounded-2xl border border-purple-300 opacity-0 group-hover:opacity-60 transition-opacity" style={{animation:"pulse-ring 2s ease-out infinite"}}/>
              </div>
              <h3 className="font-display font-bold text-gray-800 text-base mb-2">{c.name}</h3>
              <p className="font-body text-gray-500 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   HOW IT WORKS
══════════════════════════════════════════════════════════════ */
function HowItWorks() {
  const steps = [
    {num:"01",icon:RiStore2Line,title:"Create your store in minutes",desc:"Pick a theme, add your logo, configure your domain and payment gateway. Your storefront is live before your coffee gets cold."},
    {num:"02",icon:RiShoppingBag3Line,title:"Upload your product catalogue",desc:"Bulk import via CSV, connect your existing ERP, or add products one by one with AI-assisted descriptions and auto-tagging."},
    {num:"03",icon:RiCoupon3Line,title:"Set up promotions and pricing",desc:"Configure your discount rules, loyalty programme, and welcome offer. Schedule flash sales and seasonal campaigns from a calendar view."},
    {num:"04",icon:RiGlobalLine,title:"Connect your delivery & payment stack",desc:"One-click integrations with Razorpay, Shiprocket, Delhivery, and 40+ partners. Orders route to fulfilment automatically."},
    {num:"05",icon:RiUserFollowLine,title:"Launch and grow with data",desc:"Go live. Watch orders, revenue, and customer metrics update in real time. Use cohort analysis and campaign reports to compound growth."},
  ];
  return (
    <section className="py-28 bg-purple-50/30">
      <div className="max-w-6xl mx-auto px-6">
        <SH eyebrow="Getting Started" title="Go live in under an hour." sub="No developer, no agency, no six-week implementation. Just your brand, your products, and a working store."/>
        <div className="relative max-w-3xl mx-auto space-y-4">
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-purple-200 to-transparent hidden md:block"/>
          {steps.map((s,i)=>{
            const {ref,visible} = useIntersection();
            return (
              <div key={s.num} ref={ref}
                className={`flex gap-6 items-start p-6 bg-white border border-purple-50 hover:border-purple-200 rounded-3xl card-lift transition-all duration-600 ${visible?"opacity-100 translate-x-0":"opacity-0 -translate-x-8"}`}
                style={{transitionDelay:`${i*100}ms`}}>
                <div className="relative flex-shrink-0 z-10">
                  <div className="w-[60px] h-[60px] rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center">
                    <s.icon className="text-purple-500 text-xl"/>
                  </div>
                  <div className="absolute inset-0 rounded-2xl border border-purple-300 opacity-50" style={{animation:`pulse-ring 2.4s ease-out infinite ${i*0.4}s`}}/>
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

/* ══════════════════════════════════════════════════════════════
   USE CASES
══════════════════════════════════════════════════════════════ */
const usecases = [
  {icon:RiHeartLine,type:"Fashion & Apparel",heading:"From Instagram to checkout in one tap",body:"Sell through Instagram Shops, WhatsApp catalogues, and your D2C website — all synced. Push new drops instantly across every channel and watch inventory deduct in real time.",tags:["Social Commerce","Variants","Drops"]},
  {icon:RiGiftLine,type:"Beauty & Personal Care",heading:"Subscription boxes and reorder flows",body:"Set up auto-replenishment for consumables, bundle builder for gifting seasons, and personalised product quizzes that drive 3x higher AOV.",tags:["Subscriptions","Bundles","Quizzes"]},
  {icon:RiLeafLine,type:"Health & Wellness",heading:"Compliance-first catalogue management",body:"Manage FSSAI-required labels, ingredient disclosures, and shelf-life tracking. Set up subscription wellness plans with pause and skip controls your customers actually love.",tags:["Compliance","Subscriptions","Wellness"]},
  {icon:RiStore2Line,type:"Home & Lifestyle",heading:"High-AOV with EMI and instalment options",body:"Offer Bajaj, ZestMoney, and card EMI at checkout. Use mood boards and room visualisers as product page sections. Handle bulk B2C and interior designer orders from one queue.",tags:["EMI","High AOV","Visualiser"]},
];

function UseCases() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <OrbBg v={0}/>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SH eyebrow="Use Cases" title="Every B2C category. One platform." sub="Whether you sell skincare, sofas, or sneakers — the platform reshapes itself around your product and customer model."/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {usecases.map((u,i)=>{
            const {ref,visible} = useIntersection();
            return (
              <div key={u.type} ref={ref}
                className={`group relative overflow-hidden bg-white border border-purple-50 hover:border-purple-200 rounded-3xl p-8 card-lift transition-all duration-600 ${visible?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}
                style={{transitionDelay:`${i*100}ms`,background:i%2===0?"white":"#faf5ff"}}>
                <div className="absolute top-0 right-0 w-40 h-40 rounded-bl-full bg-purple-400/5 group-hover:bg-purple-400/10 transition-colors duration-500"/>
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                    <u.icon className="text-purple-500 text-xl"/>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-purple-400 mb-1 font-body">{u.type}</p>
                    <h3 className="font-display font-bold text-gray-800 text-lg">{u.heading}</h3>
                  </div>
                </div>
                <p className="font-body text-gray-500 text-sm leading-relaxed mb-5">{u.body}</p>
                <div className="flex flex-wrap gap-2">
                  {u.tags.map(t=>(
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

/* ══════════════════════════════════════════════════════════════
   MORE FEATURES STRIP
══════════════════════════════════════════════════════════════ */
function MoreFeatures() {
  const features = [
    {icon:RiExchangeLine,title:"Returns & Exchanges",desc:"Self-serve returns portal, exchange flow with credit note, and automated refund triggers — reduce support tickets by 60%."},
    {icon:RiCustomerService2Line,title:"Live Chat & Support Desk",desc:"Built-in live chat widget on storefront. All chats, emails, and WhatsApp conversations in a unified inbox."},
    {icon:RiLayoutLine,title:"Landing Page Builder",desc:"Build sale, influencer, and campaign landing pages with a visual editor — no dev time between campaigns."},
    {icon:RiGiftLine,title:"Gift Cards & Vouchers",desc:"Create branded digital gift cards, bulk voucher generation for corporate gifting, and balance tracking."},
    {icon:RiMapPin2Line,title:"Hyperlocal Delivery",desc:"Same-day and scheduled delivery slots, dark store routing, and delivery promise on product pages."},
    {icon:RiAlertLine,title:"Price & Stock Alerts",desc:"Let customers subscribe to restock and price-drop alerts. Trigger automated campaigns when conditions are met."},
  ];
  return (
    <section className="py-28 bg-purple-50/30">
      <div className="max-w-6xl mx-auto px-6">
        <SH eyebrow="More Capabilities" title="The details that delight customers." sub="Every feature that turns a one-time buyer into a lifetime fan."/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f,i)=>{
            const {ref,visible} = useIntersection();
            return (
              <div key={f.title} ref={ref}
                className={`group bg-white border border-purple-50 hover:border-purple-200 rounded-3xl p-7 card-lift transition-all duration-500 ${visible?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}
                style={{transitionDelay:`${i*80}ms`}}>
                <div className="w-11 h-11 rounded-2xl bg-purple-50 flex items-center justify-center mb-4 group-hover:bg-purple-100 transition-colors">
                  <f.icon className="text-purple-500 text-lg"/>
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


/* ══════════════════════════════════════════════════════════════
   INTEGRATIONS
══════════════════════════════════════════════════════════════ */
function Integrations() {
  const names = [
    "Razorpay","Cashfree","Paytm","PhonePe","Shiprocket","Delhivery",
    "Bluedart","Ecom Express","Amazon","Flipkart","Myntra","Meesho",
    "Google Ads","Meta","MoEngage","Clevertap","Gupshup","Freshdesk",
  ];
  const {ref,visible} = useIntersection();
  return (
    <section className="py-28 bg-purple-50/20">
      <div className="max-w-5xl mx-auto px-6">
        <SH eyebrow="Integrations" title="Connected to the entire D2C stack." sub="Every payment gateway, courier, marketplace, and marketing tool your brand already depends on."/>
        <div ref={ref} className="flex flex-wrap justify-center gap-3">
          {names.map((name,i)=>(
            <div key={name}
              className={`px-5 py-2.5 rounded-full border border-purple-100 bg-white text-sm font-medium text-gray-600 hover:border-purple-300 hover:text-purple-600 hover:shadow-md font-body transition-all duration-300 cursor-default ${visible?"opacity-100 scale-100":"opacity-0 scale-90"}`}
              style={{transitionDelay:`${i*40}ms`}}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   SECURITY
══════════════════════════════════════════════════════════════ */
function Security() {
  const pillars = [
    {icon:RiShieldCheckLine,label:"PCI DSS Level 1 certified"},
    {icon:RiLockLine,label:"AES-256 data encryption"},
    {icon:RiCloudLine,label:"99.99% uptime SLA"},
    {icon:RiFileChartLine,label:"Full transaction audit trail"},
    {icon:RiGlobalLine,label:"GDPR & IT Act compliant"},
    {icon:RiTeamLine,label:"Role-based access control"},
  ];
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <SH eyebrow="Security & Trust" title="Your customers' data, protected." sub="Every transaction, every session, every byte — secured to the standard your brand reputation demands."/>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {pillars.map((p,i)=>{
            const {ref,visible} = useIntersection();
            return (
              <div key={p.label} ref={ref}
                className={`flex items-center gap-3 bg-white rounded-2xl px-5 py-4 border border-purple-50 hover:border-purple-200 hover:shadow-sm card-lift transition-all duration-400 ${visible?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`}
                style={{transitionDelay:`${i*70}ms`}}>
                <p.icon className="text-purple-400 text-lg flex-shrink-0"/>
                <span className="text-sm font-medium text-gray-700 font-body">{p.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   CTA
══════════════════════════════════════════════════════════════ */
function CTA() {
  const {ref,visible} = useIntersection();
  return (
    <section className="py-28 bg-purple-50/30">
      <div ref={ref}
        className={`max-w-4xl mx-auto px-6 transition-all duration-700 ${visible?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}>
        <div className="relative rounded-[2.5rem] overflow-hidden p-16 text-center shadow-2xl shadow-purple-200"
          style={{background:"linear-gradient(135deg,#7e22ce 0%,#9333ea 50%,#c084fc 100%)"}}>
          {/* Decoration */}
          <div className="absolute top-6 right-12 w-32 h-32 rounded-full border-2 border-white/10"/>
          <div className="absolute bottom-6 left-10 w-20 h-20 rounded-full border border-white/10"/>
          <div className="absolute top-1/2 left-8 w-3 h-3 rounded-full bg-white/20"/>
          <div className="absolute top-10 left-1/3 w-4 h-4 rounded-full bg-white/10"/>
          <div className="absolute bottom-14 right-24 w-6 h-6 rounded-full bg-white/10"/>

          <span className="inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-purple-200 mb-4 font-body">Ready to build your D2C empire?</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Your brand deserves<br/>a dashboard this good.
          </h2>
          <p className="font-body text-purple-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Join 12,000+ D2C brands using ShopFlow to grow faster, retain longer, 
            and run leaner operations. Start free — upgrade when you're ready.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
           <Link href="https://web.sellerslogin.com/vendor/registration">
            <button className="group flex items-center gap-2 bg-white text-purple-600 hover:bg-purple-50 font-bold font-body px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:-translate-y-0.5">
              Start Free — No Card Needed
              <RiArrowRightLine className="transition-transform group-hover:translate-x-1"/>
            </button></Link>
           
           
          </div>
          <p className="mt-6 text-purple-200 text-xs font-body">14-day free trial · Migrate in 24h · Cancel anytime</p>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════════ */
export default function B2CDashboardPage() {
  return (
    <>
      <CustomCursor />
      <GlobalBackground />
      <ScrollRevealInit />
      <Navbar />
      <main className="bg-white text-gray-900 overflow-x-hidden antialiased">
        <GlobalStyles/>
        <Hero/>
    
        <StorefrontBuilder/>
        <StatsBand/>
        <ProductCatalogue/>
        <OrderManagement/>
        <CustomerIntelligence/>
        <Promotions/>
        <Analytics/>
        <Omnichannel/>
        <HowItWorks/>
        <UseCases/>
        <MoreFeatures/>
     
        <Security/>
        <CTA/>
        <FooterSection />
        <BackToTop />
      </main>
    </>
  );
}