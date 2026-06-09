"use client";

import { useEffect, useRef, useState } from "react";
import { BackToTop } from "@/components/landing/BackToTop";
import { CustomCursor } from "@/components/landing/CustomCursor";
import { FooterSection } from "@/components/landing/FooterSection";
import { GlobalBackground } from "@/components/landing/GlobalBackground";
import { Navbar } from "@/components/landing/Navbar";
import { ScrollRevealInit } from "@/components/landing/ScrollRevealInit";
import {
  RiMailLine,
  RiMailSendLine,
  RiMailOpenLine,
  RiInboxLine,
  RiBarChartBoxLine,
  RiSettings4Line,
  RiArrowRightLine,
  RiCheckLine,
  RiDatabase2Line,
  RiGlobalLine,
  RiLineChartLine,
  RiShieldCheckLine,
  RiArrowRightUpLine,
  RiPulseLine,
  RiFlowChart,
  RiLockLine,
  RiCloudLine,
  RiArrowDownLine,
  RiFileChartLine,
  RiBrainLine,
  RiTimeLine,
  RiCalendarLine,
  RiUserLine,
  RiNotificationLine,
  RiSpeedLine,
  RiCodeLine,
  RiPlugLine,
  RiEqualizer2Line,
  RiBuildingLine,
  RiStarLine,
  RiMegaphoneLine,
  RiCoinLine,
  RiFilterLine,
  RiPencilLine,
  RiRepeatLine,
  RiGroupLine,
  RiTestTubeLine,
  RiDraftLine,
  RiAttachmentLine,
  RiLayoutLine,
  RiUserFollowLine,
  RiUserUnfollowLine,
  RiPercentLine,
  RiCursorLine,
  RiMailCheckLine,
  RiErrorWarningLine,
  RiRobot2Line,
  RiLightbulbLine,
  RiZoomInLine,
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
        if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold }
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
      if (start >= to) { setVal(to); clearInterval(t); }
      else setVal(start);
    }, 20);
    return () => clearInterval(t);
  }, [visible, to]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

/* ─── Orb Background ──────────────────────────────────────────────────── */
function OrbBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #d8b4fe 0%, transparent 70%)", animation: "orbFloat 8s ease-in-out infinite" }} />
      <div className="absolute top-1/2 -right-52 w-[420px] h-[420px] rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #e9d5ff 0%, transparent 70%)", animation: "orbFloat 11s ease-in-out infinite reverse" }} />
      <div className="absolute bottom-0 left-1/3 w-[320px] h-[320px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #c084fc 0%, transparent 70%)", animation: "orbFloat 9s ease-in-out infinite 2s" }} />
      <style>{`
        @keyframes orbFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(-30px) scale(1.05); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes barGrow {
          from { transform: scaleY(0); }
          to   { transform: scaleY(1); }
        }
        @keyframes pulseRing {
          0%   { transform: scale(0.85); opacity: 0.7; }
          100% { transform: scale(1.7);  opacity: 0; }
        }
        @keyframes tickerScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes progressFill {
          from { width: 0%; }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .typing-cursor::after {
          content: '|';
          animation: blink 1s step-end infinite;
          color: #9333ea;
          margin-left: 2px;
        }
      `}</style>
    </div>
  );
}

/* ─── Section Header ──────────────────────────────────────────────────── */
function SectionHeader({
  eyebrow, title, sub,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
}) {
  const { ref, visible } = useIntersection();
  return (
    <div ref={ref} className="text-center max-w-2xl mx-auto mb-16 px-4">
      <span className={`inline-block text-xs font-semibold tracking-widest uppercase text-purple-600 mb-3 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        {eyebrow}
      </span>
      <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
        {title}
      </h2>
      {sub && (
        <p className={`text-gray-500 text-lg leading-relaxed transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}

/* ─── Dashboard Preview ───────────────────────────────────────────────── */
function DashboardPreview() {
  const [activeRow, setActiveRow] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActiveRow((p) => (p + 1) % 5), 1800);
    return () => clearInterval(t);
  }, []);

  const campaigns = [
    { name: "Welcome Series — Day 1",    sent: "12,400", open: "68.2%", click: "24.1%", status: "active" },
    { name: "Cart Abandonment — 1hr",    sent: "3,812",  open: "54.7%", click: "31.6%", status: "active" },
    { name: "Win-back — 90 Days",        sent: "8,091",  open: "22.3%", click: "8.4%",  status: "paused" },
    { name: "Post-purchase Follow-up",   sent: "5,220",  open: "61.0%", click: "19.2%", status: "active" },
    { name: "Monthly Newsletter — June", sent: "41,008", open: "38.5%", click: "12.9%", status: "draft" },
  ];

  const statusStyle: Record<string, string> = {
    active: "bg-purple-200 text-purple-600",
    paused: "bg-purple-200 text-purple-600",
    draft:  "bg-purple-200 text-purple-600",
  };

  const bars = [38, 55, 42, 70, 58, 82, 65, 74, 60, 88, 72, 91];

  return (
    <div className="rounded-3xl border border-purple-200 bg-white overflow-hidden"
      style={{ boxShadow: "0 40px 80px -20px rgba(219,39,119,0.14)" }}>
      {/* Titlebar */}
      <div className="flex items-center gap-2 px-5 py-3 border-b border-purple-200 bg-purple-200/40">
        <span className="w-3 h-3 rounded-full bg-purple-200" />
        <span className="w-3 h-3 rounded-full bg-yellow-300" />
        <span className="w-3 h-3 rounded-full bg-green-300" />
        <span className="ml-3 flex items-center gap-2 text-xs text-gray-400 font-mono">
          <RiMailLine className="text-purple-600" /> email.autopilot.io — Campaigns
        </span>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-purple-200 animate-pulse" />
          <span className="text-xs text-gray-400 font-medium">14 flows running</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-0">
        {/* Sidebar */}
        <div className="col-span-2 border-r border-purple-200 p-4 bg-white hidden md:block">
          <div className="space-y-1">
            {[
              { icon: RiBarChartBoxLine, label: "Overview",  active: true },
              { icon: RiMailSendLine,    label: "Campaigns" },
              { icon: RiFlowChart,       label: "Flows" },
              { icon: RiGroupLine,       label: "Segments" },
              { icon: RiSettings4Line,   label: "Settings" },
            ].map(({ icon: Icon, label, active }) => (
              <div key={label}
                className={`flex items-center gap-2 text-xs px-3 py-2 rounded-xl cursor-pointer transition-colors ${active ? "bg-purple-200 text-purple-600 font-semibold" : "text-gray-400 hover:text-gray-600"}`}>
                <Icon className="text-base flex-shrink-0" />
                <span className="truncate">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main */}
        <div className="col-span-12 md:col-span-10 p-5 bg-gray-50/20">
          {/* KPI row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {[
              { label: "Emails Sent",    value: "71,231", delta: "+31.2%", up: true },
              { label: "Avg Open Rate",  value: "49.1%",  delta: "+8.4%",  up: true },
              { label: "Avg Click Rate", value: "19.6%",  delta: "+5.2%",  up: true },
              { label: "Unsubscribes",   value: "0.24%",  delta: "-0.11%", up: true },
            ].map((k) => (
              <div key={k.label} className="bg-white rounded-2xl p-4 border border-purple-200 shadow-sm">
                <p className="text-xs text-gray-400 mb-1">{k.label}</p>
                <p className="text-xl font-bold text-gray-800 font-mono">{k.value}</p>
                <p className={`text-xs font-semibold mt-1 ${k.up ? "text-purple-600" : "text-purple-600"}`}>{k.delta}</p>
              </div>
            ))}
          </div>

          {/* Chart + campaign list */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Bar chart */}
            <div className="md:col-span-2 bg-white rounded-2xl border border-purple-200 p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold text-gray-600">Daily Sends — Last 12 Days</p>
                <span className="text-xs text-purple-600 font-semibold">71.2K this period</span>
              </div>
              <div className="flex items-end gap-1.5 h-24">
                {bars.map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-md"
                    style={{
                      height: `${h}%`,
                      background: i === 11 ? "#9333ea" : "#f3e8ff",
                      transformOrigin: "bottom",
                      animation: `barGrow 0.6s cubic-bezier(.22,1,.36,1) ${i * 0.04}s both`,
                    }} />
                ))}
              </div>
            </div>

            {/* Campaign list */}
            <div className="bg-white rounded-2xl border border-purple-200 p-4 shadow-sm">
              <p className="text-xs font-semibold text-gray-600 mb-3">Active Campaigns</p>
              <div className="space-y-2">
                {campaigns.slice(0, 4).map((c, i) => (
                  <div key={i}
                    className={`flex items-center justify-between text-xs p-2 rounded-xl transition-all duration-500 ${i === activeRow ? "bg-purple-200 border border-purple-200" : ""}`}>
                    <p className="text-gray-700 font-medium truncate pr-2">{c.name}</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${statusStyle[c.status]}`}>
                      {c.status}
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

/* ─── Hero ────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-transparent overflow-hidden pt-24 pb-20">
      <OrbBg />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle, #7e22ce 1px, transparent 1px)", backgroundSize: "36px 36px" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
  

        <h1 className="font-sans text-6xl md:text-8xl font-bold leading-[1.04] text-gray-900 mb-6"
          style={{ fontFamily: "'Georgia', serif", animation: "fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.1s both" }}>
          Emails that{" "}
          <span style={{
            background: "linear-gradient(90deg, #9333ea, #a855f7, #d8b4fe, #9333ea)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "shimmer 3s linear infinite",
          }}>
            think
          </span>
          ,<br />
          send, and convert
          <br />
          on their own.
        </h1>

        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "'Georgia', serif", animation: "fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.25s both" }}>
          Connect your store data, build once, and let AI-powered flows send the
          right email to the right person at exactly the right moment — automatically,
          forever.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: "fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.4s both" }}>
          <Link href="https://sellerslogin.comvendor/registration">
            <button className="group flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-purple-200"
              style={{ background: "linear-gradient(135deg, #9333ea, #c084fc)" }}>
              Start Automating Free
              <RiArrowRightLine className="transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
      
        </div>

        {/* Trust row */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400"
          style={{ animation: "fadeIn 1s ease 0.7s both" }}>
          {["GDPR Compliant", "CAN-SPAM Ready", "99.99% Deliverability SLA", "SOC 2 Certified"].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <RiCheckLine className="text-purple-600" /> {t}
            </span>
          ))}
        </div>
      </div>

      {/* Dashboard */}
      <div className="relative z-10 mt-20 max-w-5xl mx-auto px-6 w-full"
        style={{ animation: "fadeUp 1s cubic-bezier(.22,1,.36,1) 0.5s both" }}>
        <DashboardPreview />
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-300 text-xs"
        style={{ animation: "fadeIn 1.2s ease 1s both" }}>
        <span className="tracking-widest uppercase">Scroll</span>
        <RiArrowDownLine className="text-lg animate-bounce" />
      </div>
    </section>
  );
}

/* ─── Ticker ──────────────────────────────────────────────────────────── */
function Ticker() {
  const items = [
    "Welcome Sequences", "Cart Abandonment", "Win-back Campaigns", "Post-purchase Flows",
    "Birthday Emails", "Re-engagement Series", "Upsell Triggers", "Review Requests",
    "Lead Nurture Drips", "Event Invitations", "Subscription Renewals", "Transactional Alerts",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="py-4 overflow-hidden border-y border-purple-200" style={{ background: "#faf5ff" }}>
      <div className="flex gap-12 whitespace-nowrap" style={{ animation: "tickerScroll 26s linear infinite" }}>
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-3 text-sm font-medium text-gray-400">
            <RiMailLine className="text-purple-600" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── How It Works ────────────────────────────────────────────────────── */
const steps = [
  {
    num: "01",
    title: "Connect your store",
    desc: "Sync your e-commerce platform, CRM, or custom data source. Contacts, orders, browse history, and product catalogue flow in automatically — no manual exports.",
  },
  {
    num: "02",
    title: "Build your flow",
    desc: "Use the visual flow builder to design trigger-based sequences. Set entry conditions, time delays, branching logic, and exit rules without writing a single line of code.",
  },
  {
    num: "03",
    title: "Write once with AI",
    desc: "The AI copywriter generates personalised subject lines, body copy, and CTAs tailored to each recipient's behaviour, segment, and purchase history.",
  },
  {
    num: "04",
    title: "Launch and optimise",
    desc: "Activate your flow and watch real-time metrics populate your dashboard. A/B test variants, analyse heatmaps, and let the AI surface improvement suggestions automatically.",
  },
];

function HowItWorks() {
  return (
    <section className="py-28 bg-purple-200/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Getting Started"
          title={<>From zero to converting<br />in under 30 minutes.</>}
        />
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-purple-200 via-purple-200 to-purple-200 hidden md:block" />
          {steps.map((s, i) => {
            const { ref, visible } = useIntersection();
            return (
              <div key={s.num} ref={ref}
                className={`flex flex-col items-center text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="relative w-20 h-20 rounded-full bg-white border-2 border-purple-200 flex items-center justify-center mb-5 shadow-md shadow-purple-200 z-10">
                  <span className="text-2xl font-bold text-purple-600 font-mono"
                    >{s.num}</span>
                  <div className="absolute inset-0 rounded-full border-2 border-purple-200 opacity-0"
                    style={{ animation: `pulseRing 2.5s ease-out infinite ${i * 0.5}s` }} />
                </div>
                <h4 className="font-bold text-gray-800 mb-2 text-lg"
                  >{s.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Features ────────────────────────────────────────────────────────── */
const features = [
  {
    icon: RiRobot2Line,
    title: "AI Copywriting Engine",
    desc: "Generates subject lines, preview text, and body copy personalised to each recipient — their name, purchase history, browse behaviour, and predicted intent.",
    color: "#9333ea",
  },
  {
    icon: RiFlowChart,
    title: "Visual Flow Builder",
    desc: "Drag-and-drop canvas for multi-step, multi-branch automation flows. Set time delays, behavioural triggers, and conditional splits without any code.",
    color: "#a855f7",
  },
  {
    icon: RiFilterLine,
    title: "Advanced Segmentation",
    desc: "Build hyper-precise audiences with 50+ filter dimensions — RFM scores, product category affinity, engagement tier, geography, and custom attributes.",
    color: "#c084fc",
  },
  {
    icon: RiTestTubeLine,
    title: "Multivariate A/B Testing",
    desc: "Test subject lines, send times, CTA copy, layout, and personalisation tokens simultaneously. The winning variant is auto-deployed to the remaining audience.",
    color: "#9333ea",
  },
  {
    icon: RiLayoutLine,
    title: "Drag-and-Drop Email Editor",
    desc: "Build pixel-perfect, mobile-responsive emails using a block-based editor. 200+ pre-built blocks, brand kit management, and live mobile preview.",
    color: "#a855f7",
  },
  {
    icon: RiTimeLine,
    title: "Send-time Optimisation",
    desc: "ML model analyses each contact's historical open patterns and delivers every email at their personal peak-engagement window — not a broadcast time.",
    color: "#c084fc",
  },
  {
    icon: RiPercentLine,
    title: "Deliverability Suite",
    desc: "Dedicated IP warm-up, DKIM/DMARC management, spam-score previewing, bounce and complaint handling, and ISP reputation monitoring — all automated.",
    color: "#9333ea",
  },
  {
    icon: RiDatabase2Line,
    title: "Live Data Personalisation",
    desc: "Embed real-time product recommendations, live inventory counts, dynamic pricing, and personalised content blocks pulled fresh at send time.",
    color: "#a855f7",
  },
  {
    icon: RiLineChartLine,
    title: "Revenue Attribution",
    desc: "Tie every email to downstream revenue. See click-to-purchase attribution, assisted conversions, and campaign ROI calculated automatically from order data.",
    color: "#c084fc",
  },
];

function FeaturesSection() {
  return (
    <section className="py-28 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Platform Features"
          title={<>Everything your email programme<br />needs to perform.</>}
          sub="No bolt-ons. No brittle integrations. Every capability your marketing team demands, engineered to work together from the first send."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const { ref, visible } = useIntersection();
            return (
              <div key={f.title} ref={ref}
                className={`group relative bg-white border border-purple-200 hover:border-purple-200 rounded-3xl p-7 transition-all duration-500 hover:shadow-xl hover:shadow-purple-200 hover:-translate-y-1 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${f.color}15` }}>
                  <f.icon style={{ color: f.color, fontSize: "1.4rem" }} />
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2"
                  >{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${f.color}, transparent)` }} />
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
    { value: 49,  suffix: "%",  label: "Average open rate on platform" },
    { value: 19,  suffix: "%",  label: "Average click-through rate" },
    { value: 340, suffix: "%",  label: "Average ROI on automated flows" },
    { value: 99,  suffix: ".99%", label: "Email deliverability rate" },
  ];
  return (
    <section ref={ref} className="py-20"
      style={{ background: "linear-gradient(135deg, #9333ea 0%, #a855f7 60%, #d8b4fe 100%)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((s, i) => (
            <div key={s.label}
              className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 120}ms` }}>
              <p className="text-5xl font-bold font-mono mb-2 text-white">
                {visible ? <Counter to={s.value} suffix={s.suffix} /> : `0${s.suffix}`}
              </p>
              <p className="text-purple-100 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Flow Builder Deep-dive ──────────────────────────────────────────── */
function FlowBuilderSection() {
  const { ref, visible } = useIntersection();

  const flowNodes = [
    { label: "Trigger: Cart Abandoned",  type: "trigger",   delay: 0 },
    { label: "Wait: 1 hour",             type: "wait",      delay: 100 },
    { label: "Send: Recovery Email #1",  type: "email",     delay: 200 },
    { label: "Condition: Opened?",       type: "condition", delay: 300 },
    { label: "Yes: Send Reminder #2",    type: "email",     delay: 400 },
    { label: "No: Re-segment Contact",   type: "action",    delay: 500 },
  ];

  const typeStyle: Record<string, { bg: string; text: string; border: string }> = {
    trigger:   { bg: "#f3e8ff", text: "#9333ea", border: "#d8b4fe" },
    wait:      { bg: "#fef9c3", text: "#92400e", border: "#fde68a" },
    email:     { bg: "#f0fdf4", text: "#065f46", border: "#bbf7d0" },
    condition: { bg: "#eff6ff", text: "#1e40af", border: "#bfdbfe" },
    action:    { bg: "#f9f5ff", text: "#6d28d9", border: "#ddd6fe" },
  };

  return (
    <section className="py-28 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-purple-600 mb-4">
              Flow Builder
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
              >
              Build flows as complex
              <br />as your strategy.
              <br />
              <span style={{
                background: "linear-gradient(90deg,#9333ea,#d8b4fe)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Without the complexity.
              </span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 text-lg">
              Design multi-step, multi-branch automation flows on a visual canvas.
              Set triggers, delays, conditions, and actions by dragging nodes — no engineering
              ticket, no YAML, no waiting. Publish a live flow in the time it takes to drink your coffee.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "50+ trigger types — behaviour, time, data, event",
                "Conditional splits on any contact or event property",
                "Loop, exit, and re-entry rules per flow",
                "Version history with one-click rollback",
                "Live flow analytics while it runs",
              ].map((pt) => (
                <li key={pt} className="flex items-center gap-3 text-sm text-gray-600">
                  <RiCheckLine className="text-purple-600 flex-shrink-0 text-base" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>

          {/* Flow diagram */}
          <div ref={ref} className="relative">
            <div className="rounded-3xl border-2 border-purple-200 bg-white overflow-hidden"
              style={{ boxShadow: "0 20px 60px rgba(219,39,119,0.08)" }}>
              <div className="px-5 py-4 border-b border-purple-200 flex items-center gap-2"
                style={{ background: "linear-gradient(135deg,#f3e8ff,#faf5ff)" }}>
                <RiFlowChart className="text-purple-600" />
                <span className="font-bold text-sm text-gray-700"
                  >Cart Abandonment Flow</span>
                <div className="ml-auto flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-purple-200 animate-pulse" />
                  <span className="text-xs text-gray-400">Live · 3,812 enrolled</span>
                </div>
              </div>
              <div className="p-5 space-y-2">
                {flowNodes.map((n, i) => {
                  const s = typeStyle[n.type];
                  return (
                    <div key={i} className="relative">
                      <div
                        className={`flex items-center gap-3 px-4 py-3 rounded-2xl border-2 transition-all duration-600 hover:-translate-x-1 cursor-default ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
                        style={{
                          background: s.bg,
                          borderColor: s.border,
                          transitionDelay: `${n.delay}ms`,
                          transition: "opacity 0.5s ease, transform 0.5s ease",
                        }}>
                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: s.text }} />
                        <span className="text-sm font-semibold" style={{ color: s.text }}>{n.label}</span>
                        <span className="ml-auto text-xs font-bold uppercase tracking-widest opacity-60"
                          style={{ color: s.text }}>{n.type}</span>
                      </div>
                      {i < flowNodes.length - 1 && (
                        <div className="absolute left-[1.35rem] -bottom-2 w-0.5 h-2 bg-purple-200" />
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="px-5 pb-5">
                <button className="w-full py-3 rounded-full border-2 border-dashed border-purple-200 text-purple-600 font-semibold text-sm hover:bg-purple-200 hover:border-purple-200 transition-all flex items-center justify-center gap-2">
                  <RiPencilLine /> Add a step
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── AI Copywriting Section ──────────────────────────────────────────── */
function AICopySection() {
  const { ref, visible } = useIntersection();
  const [typedLine, setTypedLine] = useState("");
  const fullLine = "Re: Your cart is still waiting, Sarah";

  useEffect(() => {
    if (!visible) return;
    let i = 0;
    const t = setInterval(() => {
      i++;
      setTypedLine(fullLine.slice(0, i));
      if (i >= fullLine.length) clearInterval(t);
    }, 48);
    return () => clearInterval(t);
  }, [visible]);

  const variants = [
    { line: "Sarah, you left something behind — and it's almost gone",  score: "A  —  62.1% open" },
    { line: "Your cart expires tonight, Sarah",                          score: "B  —  54.8% open" },
    { line: "One item in your cart just dropped in price",               score: "C  —  58.3% open" },
  ];

  return (
    <section className="py-28 bg-purple-200/30 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-purple-600 mb-4">
              AI Copywriting
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
              >
              Subject lines that
              <br />actually get opened.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 text-lg">
              The AI copywriter generates personalised subject lines, preview text, and email body
              copy for every recipient — drawing on their name, purchase history, browsing
              behaviour, and predicted intent. It then A/B tests variants automatically and
              promotes the winner without you lifting a finger.
            </p>
            <div className="space-y-4">
              {[
                { icon: RiLightbulbLine, title: "Context-aware generation", desc: "Pulls live data — product names, prices, category affinity — directly into copy at generation time." },
                { icon: RiBrainLine,     title: "Tone and brand alignment",  desc: "Learns your brand voice from existing campaigns and applies it consistently across all generated copy." },
                { icon: RiTestTubeLine, title: "Auto A/B testing",           desc: "Generates 3–5 subject-line variants, splits the audience, and promotes the winner at your configured confidence threshold." },
              ].map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-purple-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <f.icon className="text-purple-600 text-base" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm mb-0.5"
                      >{f.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel */}
          <div ref={ref}>
            <div className="rounded-3xl border-2 border-purple-200 bg-white overflow-hidden"
              style={{ boxShadow: "0 20px 60px rgba(219,39,119,0.08)" }}>
              <div className="px-5 py-4 border-b border-purple-200 flex items-center gap-2"
                style={{ background: "linear-gradient(135deg,#f3e8ff,#faf5ff)" }}>
                <RiRobot2Line className="text-purple-600" />
                <span className="font-bold text-sm text-gray-700"
                  >AI Subject Line Generator</span>
              </div>

              {/* Input mock */}
              <div className="p-5 border-b border-purple-200">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-2">Generating for</p>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-purple-200 border border-purple-200">
                  <RiUserLine className="text-purple-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Sarah M. — Cart Abandonment</p>
                    <p className="text-xs text-gray-400">3 items · $124 cart value · High LTV segment</p>
                  </div>
                </div>
              </div>

              {/* Typing area */}
              <div className="p-5 border-b border-purple-200">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-3">Generated subject line</p>
                <div className="p-4 rounded-xl bg-purple-200 border-2 border-purple-200 min-h-[52px]">
                  <p className="text-sm font-semibold text-gray-800 typing-cursor">{typedLine}</p>
                </div>
              </div>

              {/* Variants */}
              <div className="p-5 space-y-2">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-3">A/B Variants — predicted performance</p>
                {variants.map((v, i) => (
                  <div key={i}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-600 hover:border-purple-200 hover:bg-purple-200 cursor-default ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    style={{
                      borderColor: "#f3e8ff",
                      transitionDelay: `${i * 100 + 400}ms`,
                      transition: "opacity 0.5s ease, transform 0.5s ease, border-color 0.2s, background 0.2s",
                    }}>
                    <p className="text-sm text-gray-700 flex-1">{v.line}</p>
                    <span className="text-xs font-bold text-purple-600 bg-purple-200 px-2.5 py-1 rounded-full whitespace-nowrap">
                      {v.score}
                    </span>
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

/* ─── Use Cases ───────────────────────────────────────────────────────── */
const usecases = [
  {
    icon: RiMailSendLine,
    industry: "E-commerce",
    heading: "Turn every browse into a sale, automatically",
    body: "Welcome sequences, cart abandonment flows, post-purchase upsells, review requests, and win-back campaigns — all triggered by real behaviour, all personalised, all running without a single manual send.",
    tags: ["Cart Recovery", "Post-purchase", "Win-back"],
  },
  {
    icon: RiUserFollowLine,
    industry: "Lead Nurture",
    heading: "Move leads down the funnel while you sleep",
    body: "Trigger content-based drip sequences the moment a lead fills a form. Score engagement, surface hot leads to sales, and branch the sequence based on what they read and click.",
    tags: ["Drip Sequences", "Lead Scoring", "Sales Handoff"],
  },
  {
    icon: RiRepeatLine,
    industry: "SaaS & Subscriptions",
    heading: "Onboard, retain, and expand automatically",
    body: "Send contextual onboarding emails based on in-app activity. Trigger churn-risk alerts at the right moment. Surface upgrade prompts to accounts showing expansion signals.",
    tags: ["Onboarding", "Churn Prevention", "Expansion"],
  },
  {
    icon: RiCalendarLine,
    industry: "Events & Media",
    heading: "Fill seats and drive attendance at scale",
    body: "Automate pre-event nurture, day-of reminders, live session alerts, and post-event follow-ups — all personalised to registration data and past attendance behaviour.",
    tags: ["Event Reminders", "Post-event Follow-up", "Re-engagement"],
  },
];

function UseCases() {
  return (
    <section className="py-28 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Use Cases"
          title={<>One platform.<br />Every email workflow.</>}
          sub="Whether you send ten emails a day or ten million a month, the platform adapts to your model — not the other way around."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {usecases.map((u, i) => {
            const { ref, visible } = useIntersection();
            return (
              <div key={u.industry} ref={ref}
                className={`group relative overflow-hidden border border-purple-200 hover:border-purple-200 rounded-3xl p-8 transition-all duration-500 hover:shadow-xl hover:shadow-purple-200 hover:-translate-y-1 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 100}ms`, background: i % 2 === 0 ? "white" : "#faf5ff" }}>
                <div className="absolute top-0 right-0 w-40 h-40 rounded-bl-full opacity-5 bg-purple-200 transition-all duration-500 group-hover:opacity-10 group-hover:w-52 group-hover:h-52" />
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-purple-200 flex items-center justify-center flex-shrink-0">
                    <u.icon className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-purple-600 mb-1">{u.industry}</p>
                    <h3 className="font-bold text-gray-800 text-lg leading-snug"
                      >{u.heading}</h3>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{u.body}</p>
                <div className="flex flex-wrap gap-2">
                  {u.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-purple-200 text-purple-600 font-medium border border-purple-200">
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

/* ─── Analytics Deep-dive ─────────────────────────────────────────────── */
function Analytics() {
  const { ref, visible } = useIntersection();
  const metrics = [
    { label: "Emails Delivered",  value: "71,009",  delta: "+29%",   up: true },
    { label: "Unique Opens",      value: "34,884",  delta: "+18%",   up: true },
    { label: "Unique Clicks",     value: "13,918",  delta: "+22%",   up: true },
    { label: "Revenue Attributed",value: "$48,210", delta: "+34%",   up: true },
    { label: "Unsubscribes",      value: "171",     delta: "-18%",   up: true },
    { label: "Spam Complaints",   value: "3",       delta: "-67%",   up: true },
  ];

  const funnelSteps = [
    { label: "Sent",      pct: 100, val: "71,231" },
    { label: "Delivered", pct: 99,  val: "70,508" },
    { label: "Opened",    pct: 49,  val: "34,549" },
    { label: "Clicked",   pct: 20,  val: "14,246" },
    { label: "Converted", pct: 8,   val: "5,698"  },
  ];

  return (
    <section className="py-28 bg-purple-200/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Analytics"
          title={<>Every send teaches<br />the next one.</>}
          sub="Open rates, click maps, revenue attribution, and cohort analysis — surfaced automatically so you make decisions with data, not gut feel."
        />
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* KPI grid */}
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {metrics.map((m, i) => (
              <div key={m.label}
                className={`bg-white border-2 border-purple-200 rounded-2xl p-5 hover:border-purple-200 hover:shadow-md hover:shadow-purple-200 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${i * 80}ms` }}>
                <p className="text-xs text-gray-400 mb-1">{m.label}</p>
                <p className="text-2xl font-bold text-gray-800"
                  >{m.value}</p>
                <p className={`text-xs font-semibold mt-1 ${m.up ? "text-purple-600" : "text-purple-600"}`}>
                  {m.delta} vs last month
                </p>
              </div>
            ))}
          </div>

          {/* Funnel */}
          <div
            className={`bg-white border-2 border-purple-200 rounded-3xl p-6 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            style={{ transitionDelay: "480ms" }}>
            <p className="text-sm font-bold text-gray-700 mb-5"
              >Engagement Funnel</p>
            <div className="space-y-3">
              {funnelSteps.map((s, i) => (
                <div key={s.label}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-gray-600 font-medium">{s.label}</span>
                    <span className="text-gray-500">{s.val}</span>
                  </div>
                  <div className="h-2 rounded-full bg-purple-200 overflow-hidden">
                    <div className="h-full rounded-full"
                      style={{
                        width: visible ? `${s.pct}%` : "0%",
                        background: "linear-gradient(90deg,#9333ea,#d8b4fe)",
                        transition: `width 0.8s cubic-bezier(.22,1,.36,1) ${300 + i * 100}ms`,
                      }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Deliverability Section ──────────────────────────────────────────── */
function DeliverabilitySection() {
  const { ref, visible } = useIntersection();
  const checks = [
    { icon: RiShieldCheckLine, label: "DKIM / DMARC / SPF",        status: "pass", val: "Configured" },
    { icon: RiMailCheckLine,   label: "Spam Score",                 status: "pass", val: "0.8 / 10" },
    { icon: RiErrorWarningLine,label: "Blacklist Check",            status: "pass", val: "0 lists" },
    { icon: RiPercentLine,     label: "Bounce Rate",                status: "pass", val: "0.31%" },
    { icon: RiGlobalLine,      label: "IP Reputation",              status: "pass", val: "Excellent" },
    { icon: RiZoomInLine,      label: "Link & Image Scan",          status: "pass", val: "All clear" },
  ];

  return (
    <section className="py-28 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-purple-600 mb-4">
              Deliverability
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
              >
              99.99% delivered.
              <br />Not 99.99% sent.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 text-lg">
              Sending is the easy part. Landing in the inbox — every time, for every recipient,
              at every ISP — is where most platforms fall short. We built a full deliverability
              infrastructure so you never have to think about it.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Dedicated sending IPs with automated warm-up",
                "Per-domain and per-IP reputation monitoring",
                "Suppression list management across all campaigns",
                "Pre-send spam filter and link scanner",
                "ISP feedback loop integration for instant complaint handling",
                "Real-time bounce classification and contact hygiene",
              ].map((pt) => (
                <li key={pt} className="flex items-center gap-3 text-sm text-gray-600">
                  <RiCheckLine className="text-purple-600 flex-shrink-0 text-base" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>

          {/* Health card */}
          <div ref={ref}>
            <div className="rounded-3xl border-2 border-purple-200 bg-white overflow-hidden"
              style={{ boxShadow: "0 20px 60px rgba(219,39,119,0.08)" }}>
              <div className="px-5 py-4 border-b border-purple-200 flex items-center gap-2"
                style={{ background: "linear-gradient(135deg,#f3e8ff,#faf5ff)" }}>
                <RiShieldCheckLine className="text-purple-600" />
                <span className="font-bold text-sm text-gray-700"
                  >Deliverability Health Check</span>
                <span className="ml-auto text-xs font-bold text-purple-600 bg-purple-200 px-2.5 py-1 rounded-full">
                  All systems healthy
                </span>
              </div>
              <div className="p-4 space-y-2">
                {checks.map((c, i) => (
                  <div key={c.label}
                    className={`flex items-center gap-4 p-3 rounded-2xl hover:bg-purple-200 transition-all duration-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                    style={{ transitionDelay: `${i * 90}ms` }}>
                    <div className="w-9 h-9 rounded-xl bg-purple-200 flex items-center justify-center flex-shrink-0">
                      <c.icon className="text-purple-600 text-base" />
                    </div>
                    <span className="flex-1 text-sm text-gray-700 font-medium">{c.label}</span>
                    <span className="text-xs font-semibold text-purple-600 bg-purple-200 px-2.5 py-1 rounded-full">
                      {c.val}
                    </span>
                  </div>
                ))}
              </div>
              <div className="px-5 pb-5 pt-2">
                <div className="p-4 rounded-2xl bg-purple-200 border border-purple-200">
                  <p className="text-xs text-gray-500 mb-2 font-semibold">Sender Reputation Score</p>
                  <div className="h-2 rounded-full bg-white overflow-hidden">
                    <div className="h-full rounded-full"
                      style={{
                        width: visible ? "96%" : "0%",
                        background: "linear-gradient(90deg,#9333ea,#d8b4fe)",
                        transition: "width 1.2s cubic-bezier(.22,1,.36,1) 800ms",
                      }} />
                  </div>
                  <p className="text-xs text-right text-purple-600 font-bold mt-1">96 / 100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Integrations ────────────────────────────────────────────────────── */
const integrations = [
  { icon: RiDatabase2Line,    name: "Salesforce",       desc: "CRM sync" },
  { icon: RiGlobalLine,       name: "Shopify",          desc: "Order triggers" },
  { icon: RiCloudLine,        name: "HubSpot",          desc: "Lead data" },
  { icon: RiCodeLine,         name: "WooCommerce",      desc: "Store events" },
  { icon: RiPlugLine,         name: "Zapier",           desc: "Workflows" },
  { icon: RiNotificationLine, name: "Slack",            desc: "Campaign alerts" },
  { icon: RiFileChartLine,    name: "Segment",          desc: "CDP events" },
  { icon: RiCoinLine,         name: "Stripe",           desc: "Payment triggers" },
];

function Integrations() {
  return (
    <section className="py-28 bg-purple-200/30">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          eyebrow="Integrations"
          title={<>Plugs into your<br />existing stack.</>}
          sub="Pre-built connectors for the platforms your team already relies on. Your contact data, purchase events, and behavioural signals flow in automatically."
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {integrations.map((it, i) => {
            const { ref, visible } = useIntersection();
            return (
              <div key={it.name} ref={ref}
                className={`group flex flex-col items-center gap-3 p-6 rounded-3xl bg-white border border-purple-200 hover:border-purple-200 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-200 transition-all duration-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="w-12 h-12 rounded-2xl bg-purple-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <it.icon className="text-purple-600 text-xl" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-gray-800 text-sm"
                    >{it.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{it.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Security Section ────────────────────────────────────────────────── */
function Security() {
  const pillars = [
    { icon: RiShieldCheckLine, label: "SOC 2 Type II certified" },
    { icon: RiLockLine,        label: "AES-256 encryption at rest and in transit" },
    { icon: RiPulseLine,       label: "Real-time threat and anomaly monitoring" },
    { icon: RiFileChartLine,   label: "Full send and access audit trails" },
    { icon: RiGlobalLine,      label: "GDPR, CAN-SPAM, and CASL compliant" },
    { icon: RiCloudLine,       label: "Geo-redundant infrastructure" },
  ];
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          eyebrow="Security & Compliance"
          title={<>Enterprise-grade security<br />built in, not bolted on.</>}
          sub="Every contact record, every campaign send, and every integration is protected to the same standard as regulated financial services."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {pillars.map((p, i) => {
            const { ref, visible } = useIntersection();
            return (
              <div key={p.label} ref={ref}
                className={`flex items-center gap-3 bg-white rounded-2xl px-5 py-4 border border-purple-200 hover:border-purple-200 hover:shadow transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${i * 80}ms` }}>
                <p.icon className="text-purple-600 text-lg flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">{p.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ────────────────────────────────────────────────────── */
const testimonials = [
  {
    quote: "Our cart abandonment flow generated $82,000 in recovered revenue in the first 60 days. The AI subject lines outperformed everything our copywriter had written by 28 percentage points on open rate.",
    name: "Olivia T.",
    role: "Head of Growth, Luma Commerce",
    initials: "OT",
  },
  {
    quote: "We replaced three separate email tools with this platform. The flow builder alone saved us 14 hours a week in manual campaign management. Our list grew 40% and churn dropped.",
    name: "James C.",
    role: "Marketing Director, Nexora SaaS",
    initials: "JC",
  },
  {
    quote: "Deliverability went from 91% to 99.6% in the first month after migration. The automated warm-up and reputation monitoring are the best I have seen at any price point.",
    name: "Ananya K.",
    role: "Email Programme Lead, Stratus Media",
    initials: "AK",
  },
];

function Testimonials() {
  return (
    <section className="py-28 bg-purple-200/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Customer Stories"
          title={<>Results that speak<br />for themselves.</>}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            const { ref, visible } = useIntersection();
            return (
              <div key={t.name} ref={ref}
                className={`bg-white rounded-3xl p-8 border-2 border-purple-200 hover:border-purple-200 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-200 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 120}ms`, boxShadow: "0 4px 24px rgba(219,39,119,0.06)" }}>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <RiStarLine key={j} className="text-purple-600" style={{ fill: "#f3e8ff" }} />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-sm italic"
                  >
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: "linear-gradient(135deg,#9333ea,#c084fc)" }}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─────────────────────────────────────────────────────────── */
const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    desc: "For early-stage teams building their first automated flows.",
    features: [
      "Up to 2,500 contacts",
      "10,000 emails/month",
      "5 automation flows",
      "Core analytics dashboard",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$99",
    period: "/month",
    desc: "For scaling businesses that need power, personalisation, and performance.",
    features: [
      "Up to 25,000 contacts",
      "150,000 emails/month",
      "Unlimited automation flows",
      "AI copywriting engine",
      "A/B testing suite",
      "Revenue attribution",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For high-volume senders with custom compliance and infrastructure needs.",
    features: [
      "Unlimited contacts",
      "Unlimited email volume",
      "Dedicated sending IPs",
      "Custom integrations",
      "Deliverability concierge",
      "Dedicated success manager",
    ],
    cta: "Talk to Sales",
    highlight: false,
  },
];

function Pricing() {
  return (
    <section className="py-28 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Pricing"
          title={<>Simple, transparent pricing.</>}
          sub="Pay by contacts and sends. No per-seat fees. No surprise overages. Cancel any time."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => {
            const { ref, visible } = useIntersection();
            return (
              <div key={p.name} ref={ref}
                className={`relative rounded-3xl p-8 border-2 transition-all duration-700 hover:-translate-y-2 ${
                  p.highlight ? "border-transparent text-white" : "border-purple-200 bg-white hover:border-purple-200 hover:shadow-xl hover:shadow-purple-200"
                } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{
                  transitionDelay: `${i * 120}ms`,
                  background: p.highlight ? "linear-gradient(135deg,#9333ea,#c084fc)" : undefined,
                  boxShadow: p.highlight ? "0 30px 60px rgba(219,39,119,0.28)" : undefined,
                }}>
                {p.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-white rounded-full text-purple-600 text-xs font-black shadow">
                    Most Popular
                  </div>
                )}
                <p className={`font-bold tracking-wide text-sm uppercase mb-4 ${p.highlight ? "text-purple-600" : "text-purple-600"}`}>
                  {p.name}
                </p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-black"
                    >{p.price}</span>
                  <span className={`text-sm ${p.highlight ? "text-purple-600" : "text-gray-400"}`}>{p.period}</span>
                </div>
                <p className={`text-sm mb-6 leading-relaxed ${p.highlight ? "text-purple-600" : "text-gray-500"}`}>{p.desc}</p>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2.5 text-sm ${p.highlight ? "text-purple-600" : "text-gray-600"}`}>
                      <RiCheckLine className={`flex-shrink-0 ${p.highlight ? "text-purple-600" : "text-purple-600"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: p.highlight ? "white" : "linear-gradient(135deg,#9333ea,#c084fc)",
                    color: p.highlight ? "#9333ea" : "white",
                  }}>
                  {p.cta}
                </button>
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
    <section className="py-28 bg-purple-200/30">
      <div ref={ref}
        className={`max-w-4xl mx-auto px-6 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="relative rounded-3xl overflow-hidden p-16 shadow-2xl shadow-purple-200"
          style={{ background: "linear-gradient(135deg,#9333ea 0%,#a855f7 60%,#d8b4fe 100%)" }}>
          <div className="absolute top-6 right-10 w-32 h-32 rounded-full border-2 border-white/10" />
          <div className="absolute bottom-4 left-6 w-20 h-20 rounded-full border border-white/10" />
          <div className="absolute top-1/2 left-8 w-3 h-3 rounded-full bg-white/20" />
          <div className="absolute bottom-12 right-20 w-5 h-5 rounded-full bg-white/10" />

          <p className="text-xs font-semibold tracking-widest uppercase text-purple-100 mb-4">
            Ready to put your email programme on autopilot?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
            >
            Your first automated
            <br />flow is 20 minutes away.
          </h2>
          <p className="text-purple-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Connect your store, build a flow, and let the AI write and send the first campaign —
            all before your next standup.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://sellerslogin.comvendor/registration">
              <button className="group flex items-center gap-2 bg-white text-purple-600 hover:bg-purple-200 font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:-translate-y-0.5">
                Start Free — No Card Needed
                <RiArrowRightLine className="transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
        
          </div>
          <p className="text-purple-100 text-sm mt-6">
            14-day free trial. No credit card required. Cancel any time.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Page Assembly ───────────────────────────────────────────────────── */
export default function EmailAutomationPage() {
  return (
    <>
      <CustomCursor />
      <GlobalBackground />
      <ScrollRevealInit />
      <Navbar />
      <main className="font-sans antialiased bg-transparent text-gray-900 overflow-x-hidden">
        <Hero />
        <HowItWorks />
        <FeaturesSection />
        <StatsBand />
        <FlowBuilderSection />
        <AICopySection />
        <UseCases />
      
        <DeliverabilitySection />
        <Security />
        <CTA />
        <FooterSection />
        <BackToTop />
      </main>
    </>
  );
}

