"use client";

import { useEffect, useRef, useState } from "react";
import { BackToTop } from "@/components/landing/BackToTop";
import { CustomCursor } from "@/components/landing/CustomCursor";
import { FooterSection } from "@/components/landing/FooterSection";
import { GlobalBackground } from "@/components/landing/GlobalBackground";
import { Navbar } from "@/components/landing/Navbar";
import { ScrollRevealInit } from "@/components/landing/ScrollRevealInit";
import {
  RiWhatsappLine,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiArrowDownLine,
  RiCheckLine,
  RiBarChartBoxLine,
  RiSettings4Line,
  RiFlowChart,
  RiGroupLine,
  RiDatabase2Line,
  RiGlobalLine,
  RiLineChartLine,
  RiShieldCheckLine,
  RiPulseLine,
  RiLockLine,
  RiCloudLine,
  RiFileChartLine,
  RiBrainLine,
  RiTimeLine,
  RiCalendarLine,
  RiUserLine,
  RiNotificationLine,
  RiCodeLine,
  RiPlugLine,
  RiBuildingLine,
  RiStarLine,
  RiCoinLine,
  RiFilterLine,
  RiPencilLine,
  RiRepeatLine,
  RiTestTubeLine,
  RiLayoutLine,
  RiUserFollowLine,
  RiPercentLine,
  RiMailCheckLine,
  RiErrorWarningLine,
  RiRobot2Line,
  RiLightbulbLine,
  RiZoomInLine,
  RiMessageLine,
  RiSendPlaneLine,
  RiPhoneLine,
  RiQrCodeLine,
  RiLink,
  RiDashboardLine,
  RiListCheck2,
  RiCursorLine,
  RiEqualizer2Line,
  RiMegaphoneLine,
  RiRefreshLine,
  RiUserAddLine,
  RiStore2Line,
  RiImageLine,
  RiFileTextLine,
  RiPlayCircleLine,
  RiCustomerService2Line,
  RiSpeedLine,
  RiMapPinLine,
  RiStockLine,
  RiShoppingCartLine,
  RiBellLine,
  RiCheckboxCircleLine,
  RiCloseCircleLine,
} from "react-icons/ri";
import Link from "next/link";

/* ─── Utility ─────────────────────────────────────────────────────────── */
function useIntersection(threshold = 0.12) {
  const ref = useRef(null);
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

function Counter({ to, suffix = "", prefix = "" }: any) {
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
  return <span ref={ref}>{prefix}{val.toLocaleString()}{suffix}</span>;
}

/* ─── Orb Background ──────────────────────────────────────────────────── */
function OrbBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #d8b4fe 0%, transparent 70%)", animation: "orbFloat 8s ease-in-out infinite" }} />
      <div className="absolute top-1/3 -right-52 w-[450px] h-[450px] rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #e9d5ff 0%, transparent 70%)", animation: "orbFloat 11s ease-in-out infinite reverse" }} />
      <div className="absolute bottom-10 left-1/4 w-[350px] h-[350px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #c084fc 0%, transparent 70%)", animation: "orbFloat 9s ease-in-out infinite 2s" }} />
      <style>{`
        @keyframes orbFloat { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-28px) scale(1.04)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes barGrow { from{transform:scaleY(0)} to{transform:scaleY(1)} }
        @keyframes pulseRing { 0%{transform:scale(0.85);opacity:0.7} 100%{transform:scale(1.75);opacity:0} }
        @keyframes tickerScroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes dotBounce { 0%,80%,100%{transform:scale(0)} 40%{transform:scale(1)} }
        @keyframes messageSlide { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        @keyframes progressFill { from{width:0%} }
        @keyframes waveIn { 0%{transform:scaleX(0);transform-origin:left} 100%{transform:scaleX(1);transform-origin:left} }
        @keyframes pingRing { 0%{transform:scale(1);opacity:0.6} 100%{transform:scale(2.2);opacity:0} }
        .typing-cursor::after { content:'|'; animation:blink 1s step-end infinite; color:#9333ea; margin-left:2px; }
        @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes rotateIn { from{opacity:0;transform:rotate(-8deg) scale(0.92)} to{opacity:1;transform:rotate(0deg) scale(1)} }
      `}</style>
    </div>
  );
}

/* ─── Section Header ──────────────────────────────────────────────────── */
function SectionHeader({ eyebrow, title, sub }: { eyebrow: any, title: any, sub?: any }) {
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

/* ─── WhatsApp Chat Preview ─────────────────────────────────────────────── */
function ChatPreview() {
  const [step, setStep] = useState(0);
  const messages = [
    { from: "bot", text: "Hi Riya! Your order #4821 has been shipped and will arrive by Friday. Track here: bit.ly/track4821", time: "10:02 AM" },
    { from: "user", text: "Can I change the delivery address?", time: "10:03 AM" },
    { from: "bot", text: "Of course! Please share the new address and I will update it right away.", time: "10:03 AM" },
    { from: "user", text: "42 Marine Drive, Mumbai 400002", time: "10:04 AM" },
    { from: "bot", text: "Done! Address updated successfully. You will receive a confirmation shortly.", time: "10:04 AM" },
  ];
  useEffect(() => {
    if (step >= messages.length) return;
    const t = setTimeout(() => setStep((s) => s + 1), 1100);
    return () => clearTimeout(t);
  }, [step]);

  return (
    <div className="rounded-3xl border border-purple-200 bg-white overflow-hidden"
      style={{ boxShadow: "0 40px 80px -20px rgba(219,39,119,0.14)" }}>
      {/* Titlebar */}
      <div className="flex items-center gap-2 px-5 py-3 border-b border-purple-200 bg-purple-200/40">
        <span className="w-3 h-3 rounded-full bg-purple-200" />
        <span className="w-3 h-3 rounded-full bg-yellow-300" />
        <span className="w-3 h-3 rounded-full bg-green-300" />
        <span className="ml-3 flex items-center gap-2 text-xs text-gray-400 font-mono">
          <RiWhatsappLine className="text-purple-600" /> wa.autopilot.io — Live Conversations
        </span>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-purple-200 animate-pulse" />
          <span className="text-xs text-gray-400 font-medium">8,412 active threads</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-0 min-h-[420px]">
        {/* Sidebar */}
        <div className="col-span-3 border-r border-purple-200 p-3 bg-white hidden md:block">
          <div className="space-y-1 mb-4">
            {[
              { icon: RiDashboardLine, label: "Overview", active: true },
              { icon: RiMessageLine, label: "Conversations" },
              { icon: RiFlowChart, label: "Flows" },
              { icon: RiGroupLine, label: "Segments" },
              { icon: RiBarChartBoxLine, label: "Analytics" },
              { icon: RiSettings4Line, label: "Settings" },
            ].map(({ icon: Icon, label, active }) => (
              <div key={label}
                className={`flex items-center gap-2 text-xs px-3 py-2 rounded-xl cursor-pointer transition-colors ${active ? "bg-purple-200 text-purple-600 font-semibold" : "text-gray-400 hover:text-gray-600"}`}>
                <Icon className="text-base flex-shrink-0" />
                <span className="truncate">{label}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-2">
            {[
              { name: "Riya M.", msg: "Can I change address?", time: "now", active: true },
              { name: "Arjun S.", msg: "Track my order", time: "2m" },
              { name: "Priya K.", msg: "Promo code applied", time: "5m" },
              { name: "Rohit D.", msg: "Refund status?", time: "12m" },
            ].map((c) => (
              <div key={c.name} className={`p-2.5 rounded-xl cursor-pointer border transition-all ${c.active ? "bg-purple-200 border-purple-200" : "border-transparent hover:bg-gray-50"}`}>
                <div className="flex justify-between items-center mb-0.5">
                  <span className="text-xs font-semibold text-gray-800">{c.name}</span>
                  <span className="text-[10px] text-gray-400">{c.time}</span>
                </div>
                <span className="text-[11px] text-gray-400 truncate block">{c.msg}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Chat */}
        <div className="col-span-12 md:col-span-6 flex flex-col bg-[#faf5ff]">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-purple-200 bg-white">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
              style={{ background: "linear-gradient(135deg,#9333ea,#c084fc)" }}>RM</div>
            <div>
              <p className="text-sm font-bold text-gray-800">Riya M.</p>
              <p className="text-xs text-purple-600 font-medium">Online</p>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <span className="text-[10px] text-gray-400 bg-purple-200 px-2 py-0.5 rounded-full border border-purple-200">AI Agent Active</span>
            </div>
          </div>
          <div className="flex-1 p-4 space-y-3 overflow-hidden">
            {messages.slice(0, step).map((m, i) => (
              <div key={i}
                className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                style={{ animation: "messageSlide 0.35s ease both" }}>
                <div className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed shadow-sm ${m.from === "bot" ? "bg-white text-gray-700 border border-purple-200" : "text-white"}`}
                  style={m.from === "user" ? { background: "linear-gradient(135deg,#9333ea,#c084fc)" } : {}}>
                  <p>{m.text}</p>
                  <p className={`text-[10px] mt-1 text-right ${m.from === "bot" ? "text-gray-400" : "text-purple-600"}`}>{m.time}</p>
                </div>
              </div>
            ))}
            {step < messages.length && (
              <div className="flex justify-start">
                <div className="bg-white border border-purple-200 rounded-2xl px-4 py-3 flex gap-1 shadow-sm">
                  {[0, 1, 2].map(d => (
                    <span key={d} className="w-1.5 h-1.5 rounded-full bg-purple-200"
                      style={{ animation: `dotBounce 1.2s ease-in-out infinite ${d * 0.2}s` }} />
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="px-4 py-3 border-t border-purple-200 bg-white flex items-center gap-2">
            <input className="flex-1 text-xs rounded-xl border border-purple-200 px-3 py-2 outline-none bg-purple-200/30 placeholder:text-gray-300" placeholder="AI is composing a reply..." readOnly />
            <button className="w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0"
              style={{ background: "linear-gradient(135deg,#9333ea,#c084fc)" }}>
              <RiSendPlaneLine className="text-sm" />
            </button>
          </div>
        </div>

        {/* Right KPIs */}
        <div className="col-span-3 border-l border-purple-200 p-4 bg-white hidden md:block">
          <p className="text-xs font-semibold text-gray-600 mb-3">Today — Live Stats</p>
          {[
            { label: "Messages Sent", val: "48,210", up: true },
            { label: "Delivery Rate", val: "99.4%", up: true },
            { label: "Response Rate", val: "72.1%", up: true },
            { label: "Conversions", val: "3,812", up: true },
            { label: "Avg CSAT", val: "4.8 / 5", up: true },
          ].map((s) => (
            <div key={s.label} className="mb-3 p-3 rounded-2xl bg-purple-200/50 border border-purple-200">
              <p className="text-[11px] text-gray-400 mb-0.5">{s.label}</p>
              <p className="text-base font-bold text-gray-800 font-mono">{s.val}</p>
            </div>
          ))}
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
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(circle, #7e22ce 1px, transparent 1px)", backgroundSize: "36px 36px" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
     

        <h1 className="font-sans text-6xl md:text-8xl font-bold leading-[1.04] text-gray-900 mb-6"
          style={{ fontFamily: "'Georgia', serif", animation: "fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.1s both" }}>
          WhatsApp that{" "}
          <span style={{
            background: "linear-gradient(90deg, #9333ea, #a855f7, #d8b4fe, #9333ea)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "shimmer 3s linear infinite",
          }}>
            sells
          </span>
          ,<br />
          supports, and scales
          <br />
          on its own.
        </h1>

        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "'Georgia', serif", animation: "fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.25s both" }}>
          Connect your WhatsApp Business number in minutes. Build once, and let AI-powered
          flows send personalised messages, recover carts, handle support, and drive revenue
          — automatically, around the clock, across every customer.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: "fadeUp 0.8s cubic-bezier(.22,1,.36,1) 0.4s both" }}>
          <button className="group flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-purple-200"
            style={{ background: "linear-gradient(135deg, #9333ea, #c084fc)" }}>
            Connect Your Number Free
            <RiArrowRightLine className="transition-transform group-hover:translate-x-1" />
          </button>
       
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400"
          style={{ animation: "fadeIn 1s ease 0.7s both" }}>
          {["Meta Official BSP Partner", "GDPR Compliant", "End-to-End Encrypted", "99.9% Uptime SLA"].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <RiCheckLine className="text-purple-600" /> {t}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-20 max-w-5xl mx-auto px-6 w-full"
        style={{ animation: "fadeUp 1s cubic-bezier(.22,1,.36,1) 0.5s both" }}>
        <ChatPreview />
      </div>

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
    "Cart Abandonment Recovery", "Order Status Updates", "Product Recommendations",
    "Support Automation", "Appointment Reminders", "Flash Sale Broadcasts",
    "Loyalty Programme Alerts", "Onboarding Sequences", "Reorder Nudges",
    "Payment Confirmations", "Review Requests", "Win-back Campaigns",
    "Lead Qualification Bots", "Event Invitations", "Refund Status Updates",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="py-4 overflow-hidden border-y border-purple-200" style={{ background: "#faf5ff" }}>
      <div className="flex gap-12 whitespace-nowrap" style={{ animation: "tickerScroll 30s linear infinite" }}>
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-3 text-sm font-medium text-gray-400">
            <RiWhatsappLine className="text-purple-600" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Number Onboarding ─────────────────────────────────────────────────── */
const steps = [
  {
    num: "01",
    title: "Connect your WhatsApp number",
    desc: "Link your existing WhatsApp Business number or procure a new one through our Meta-verified BSP channel. The setup wizard walks you through verification, display name approval, and webhook configuration — all under ten minutes.",
  },
  {
    num: "02",
    title: "Import your customer data",
    desc: "Sync contacts from your CRM, e-commerce store, CDP, or upload a CSV. Map fields — phone, name, segment, purchase history, tags — to personalisation tokens used throughout every flow and message template.",
  },
  {
    num: "03",
    title: "Build your automation flows",
    desc: "Use the drag-and-drop flow builder to design trigger-based multi-step sequences. Set entry conditions, time delays, conditional branches, and AI-generated message copy — without a single line of code.",
  },
  {
    num: "04",
    title: "Go live and let AI optimise",
    desc: "Activate your flow. Real-time analytics populate your dashboard as messages deliver, are read, and convert. The AI engine analyses engagement patterns and surfaces optimisation suggestions automatically.",
  },
];

function HowItWorks() {
  return (
    <section className="py-28 bg-purple-200/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Getting Started"
          title={<>Live on WhatsApp<br />in under 15 minutes.</>}
          sub="No technical team required. From number connection to first automated message, the entire setup is designed to be completed by a marketing manager, not an engineer."
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
    icon: RiQrCodeLine,
    title: "Official WhatsApp Business API",
    desc: "Send messages at scale through Meta's official cloud API. No unofficial libraries, no grey-area tools, no risk of number ban. Full template management with instant approval workflows.",
    color: "#9333ea",
  },
  {
    icon: RiFlowChart,
    title: "Visual Flow Automation Builder",
    desc: "Drag-and-drop canvas for multi-step, multi-branch WhatsApp flows. Set triggers, delays, condition splits, and fallback paths. Publish a fully automated conversation flow in minutes.",
    color: "#a855f7",
  },
  {
    icon: RiRobot2Line,
    title: "AI Conversational Agent",
    desc: "Deploy an AI agent that reads, understands, and replies to incoming messages in natural language. Handles FAQs, order queries, complaints, and escalations — 24 hours a day.",
    color: "#c084fc",
  },
  {
    icon: RiFilterLine,
    title: "Precision Audience Segmentation",
    desc: "Build hyper-targeted audiences using 50-plus filter dimensions: RFM score, purchase category, city, language, opt-in source, custom tags, and real-time behavioural events.",
    color: "#9333ea",
  },
  {
    icon: RiImageLine,
    title: "Rich Media Message Builder",
    desc: "Create and send text, images, videos, PDFs, location pins, product catalogues, and interactive buttons — all within a single drag-and-drop message template editor.",
    color: "#a855f7",
  },
  {
    icon: RiTestTubeLine,
    title: "Multivariate A/B Testing",
    desc: "Test message copy, media, CTA button labels, and send times simultaneously across split audiences. The winning variant is auto-promoted to the remaining segment at your confidence threshold.",
    color: "#c084fc",
  },
  {
    icon: RiTimeLine,
    title: "Send-time Optimisation",
    desc: "Machine learning analyses each contact's historical read patterns and delivers every message at their personal peak-engagement window rather than a single broadcast time.",
    color: "#9333ea",
  },
  {
    icon: RiShoppingCartLine,
    title: "WhatsApp Commerce Integration",
    desc: "Sync your product catalogue, enable in-chat add-to-cart, and process orders end-to-end without the customer leaving WhatsApp. Native payment link support across major gateways.",
    color: "#a855f7",
  },
  {
    icon: RiLineChartLine,
    title: "Revenue Attribution Analytics",
    desc: "Tie every WhatsApp touchpoint to downstream purchases. See message-to-conversion attribution, assisted revenue, flow-level ROI, and cohort performance in one unified dashboard.",
    color: "#c084fc",
  },
  {
    icon: RiCustomerService2Line,
    title: "Live Agent Handoff",
    desc: "When the AI reaches its confidence threshold, the conversation is instantly handed to a human agent with full context — chat history, customer profile, and sentiment score attached.",
    color: "#9333ea",
  },
  {
    icon: RiBrainLine,
    title: "AI Copy Generation",
    desc: "The AI copywriter generates personalised message text for every recipient — drawing on their name, last purchase, browse behaviour, and predicted intent — and tests variants automatically.",
    color: "#a855f7",
  },
  {
    icon: RiDatabase2Line,
    title: "Live Data Personalisation",
    desc: "Embed real-time product recommendations, live inventory counts, dynamic pricing, order status, and loyalty points pulled fresh from your data sources at message-send time.",
    color: "#c084fc",
  },
];

function FeaturesSection() {
  return (
    <section className="py-28 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Platform Capabilities"
          title={<>Everything your WhatsApp<br />marketing needs to perform.</>}
          sub="No bolt-ons. No brittle third-party workarounds. Every capability your team needs to acquire, engage, and retain customers through WhatsApp — engineered to work together from the first message."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const { ref, visible } = useIntersection();
            return (
              <div key={f.title} ref={ref}
                className={`group relative bg-white border border-purple-200 hover:border-purple-200 rounded-3xl p-7 transition-all duration-500 hover:shadow-xl hover:shadow-purple-200 hover:-translate-y-1 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 70}ms` }}>
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
    { value: 98, suffix: "%", label: "Average message delivery rate" },
    { value: 72, suffix: "%", label: "Average message open rate within 5 minutes" },
    { value: 420, suffix: "%", label: "Average ROI on automated WhatsApp flows" },
    { value: 65, suffix: "%", label: "Reduction in support ticket volume" },
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
              <p className="text-purple-100 text-sm leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Flow Builder Deep-dive ────────────────────────────────────────────── */
function FlowBuilderSection() {
  const { ref, visible } = useIntersection();

  const flowNodes = [
    { label: "Trigger: Cart Abandoned — Rs. 1,200+", type: "trigger", delay: 0 },
    { label: "Wait: 45 minutes", type: "wait", delay: 100 },
    { label: "Send: Cart Recovery Message + Image", type: "message", delay: 200 },
    { label: "Condition: Message Read?", type: "condition", delay: 300 },
    { label: "Yes — Wait 2 hours, Send Discount", type: "message", delay: 400 },
    { label: "No — Re-segment: Cold Lead", type: "action", delay: 500 },
    { label: "Condition: Clicked Discount Link?", type: "condition", delay: 600 },
    { label: "Yes — Send Order Confirmation Flow", type: "action", delay: 700 },
  ];

  const typeStyle: any = {
    trigger: { bg: "#f3e8ff", text: "#9333ea", border: "#d8b4fe" },
    wait: { bg: "#fef9c3", text: "#92400e", border: "#fde68a" },
    message: { bg: "#f0fdf4", text: "#065f46", border: "#bbf7d0" },
    condition: { bg: "#eff6ff", text: "#1e40af", border: "#bfdbfe" },
    action: { bg: "#f9f5ff", text: "#6d28d9", border: "#ddd6fe" },
  };

  return (
    <section className="py-28 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-purple-600 mb-4">
              Flow Automation Builder
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
              >
              Build flows as complex
              <br />as your strategy.
              <br />
              <span style={{ background: "linear-gradient(90deg,#9333ea,#d8b4fe)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Without the complexity.
              </span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 text-lg">
              Design multi-step, multi-branch WhatsApp automation flows on a visual canvas.
              Set triggers, time delays, read conditions, link-click conditions, and follow-up
              actions by dragging nodes — no engineering resource, no YAML, no waiting.
              A live flow can be built and published in under twenty minutes.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "60-plus trigger types — behaviour, event, time, data, webhook",
                "Conditional splits on message read, link click, reply keyword, and custom property",
                "Loop, exit, re-entry, and opt-out rules per flow",
                "Multi-language support with per-segment language routing",
                "Version history and one-click rollback for every flow",
                "Live node-level analytics while the flow is running",
                "Drag-to-connect nodes with auto-layout and collision avoidance",
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
                  <span className="text-xs text-gray-400">Live — 5,291 enrolled</span>
                </div>
              </div>
              <div className="p-5 space-y-2">
                {flowNodes.map((n, i) => {
                  const s = typeStyle[n.type];
                  return (
                    <div key={i} className="relative">
                      <div
                        className={`flex items-center gap-3 px-4 py-3 rounded-2xl border-2 cursor-default ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
                        style={{
                          background: s.bg, borderColor: s.border,
                          transition: `opacity 0.5s ease ${n.delay}ms, transform 0.5s ease ${n.delay}ms`,
                        }}>
                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: s.text }} />
                        <span className="text-xs font-semibold" style={{ color: s.text }}>{n.label}</span>
                        <span className="ml-auto text-[10px] font-bold uppercase tracking-widest opacity-50"
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

/* ─── AI Agent Section ──────────────────────────────────────────────────── */
function AIAgentSection() {
  const { ref, visible } = useIntersection();
  const [typedLine, setTypedLine] = useState("");
  const fullLine = "Your order #4821 is out for delivery. Expected by 6 PM today.";
  useEffect(() => {
    if (!visible) return;
    let i = 0;
    const t = setInterval(() => {
      i++;
      setTypedLine(fullLine.slice(0, i));
      if (i >= fullLine.length) clearInterval(t);
    }, 35);
    return () => clearInterval(t);
  }, [visible]);

  const intents = [
    { label: "Order Status", confidence: "98.2%", action: "Fetch from OMS and reply" },
    { label: "Return Request", confidence: "94.7%", action: "Initiate return flow" },
    { label: "Product Query", confidence: "91.3%", action: "Fetch catalogue and suggest" },
    { label: "Complaint", confidence: "88.1%", action: "Escalate to live agent" },
  ];

  return (
    <section className="py-28 bg-purple-200/30 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-purple-600 mb-4">
              AI Conversational Agent
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
              >
              A support team that
              <br />never sleeps, never
              <br />
              <span style={{ background: "linear-gradient(90deg,#9333ea,#d8b4fe)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                misses a message.
              </span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 text-lg">
              The AI agent reads every incoming WhatsApp message, detects intent with over
              ninety percent accuracy, fetches live data from your connected systems, and
              replies in natural language — in the customer's language. It handles order
              status, returns, product questions, complaints, and FAQs without any human
              intervention, handing off to a live agent only when genuinely necessary.
            </p>
            <div className="space-y-4">
              {[
                { icon: RiBrainLine, title: "Intent detection in 80-plus languages", desc: "Understands queries in the customer's own language and replies in the same language using the same conversational tone your brand uses." },
                { icon: RiDatabase2Line, title: "Live system integrations", desc: "Connected to your OMS, CRM, ERP, and product catalogue. Fetches real data — order status, return eligibility, stock levels — at reply time." },
                { icon: RiCustomerService2Line, title: "Intelligent human handoff", desc: "Detects sentiment, frustration, and confidence thresholds. Passes to a live agent with full context — history, profile, and urgency score — in one tap." },
              ].map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-purple-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <f.icon className="text-purple-600 text-base" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm mb-0.5" >{f.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={ref}>
            <div className="rounded-3xl border-2 border-purple-200 bg-white overflow-hidden"
              style={{ boxShadow: "0 20px 60px rgba(219,39,119,0.08)" }}>
              <div className="px-5 py-4 border-b border-purple-200 flex items-center gap-2"
                style={{ background: "linear-gradient(135deg,#f3e8ff,#faf5ff)" }}>
                <RiRobot2Line className="text-purple-600" />
                <span className="font-bold text-sm text-gray-700" >AI Agent — Live Processing</span>
                <span className="ml-auto text-xs font-bold text-purple-600 bg-purple-200 px-2.5 py-1 rounded-full">Active</span>
              </div>

              <div className="p-5 border-b border-purple-200">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-2">Incoming message</p>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-purple-200 border border-purple-200">
                  <RiUserLine className="text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Vikram S. — +91 98765 43210</p>
                    <p className="text-xs text-gray-500 mt-0.5">where is my order 4821 please tell me</p>
                  </div>
                </div>
              </div>

              <div className="p-5 border-b border-purple-200">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-3">Intent classification</p>
                <div className="space-y-2">
                  {intents.map((it, i) => (
                    <div key={i}
                      className={`flex items-center gap-3 p-2.5 rounded-xl border transition-all duration-500 ${i === 0 ? "border-purple-200 bg-purple-200" : "border-purple-200"} ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}
                      style={{ transitionDelay: `${i * 80 + 200}ms` }}>
                      <span className={`text-xs font-semibold w-28 ${i === 0 ? "text-purple-600" : "text-gray-500"}`}>{it.label}</span>
                      <div className="flex-1 h-1.5 rounded-full bg-purple-200 overflow-hidden">
                        <div className="h-full rounded-full"
                          style={{
                            width: visible ? it.confidence : "0%",
                            background: "linear-gradient(90deg,#9333ea,#d8b4fe)",
                            transition: `width 0.8s cubic-bezier(.22,1,.36,1) ${i * 80 + 400}ms`,
                          }} />
                      </div>
                      <span className="text-xs text-gray-400 w-10 text-right">{it.confidence}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-3">AI-generated reply</p>
                <div className="p-4 rounded-xl bg-purple-200 border-2 border-purple-200 min-h-[52px]">
                  <p className="text-sm font-semibold text-gray-800 typing-cursor">{visible ? typedLine : ""}</p>
                </div>
                <div className="flex gap-2 mt-3">
                  <button className="flex-1 py-2 rounded-full text-xs font-semibold text-white transition-all hover:-translate-y-0.5"
                    style={{ background: "linear-gradient(135deg,#9333ea,#c084fc)" }}>Send Reply</button>
                  <button className="flex-1 py-2 rounded-full text-xs font-semibold text-purple-600 border border-purple-200 hover:bg-purple-200 transition-all">
                    Edit First
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Broadcast & Campaigns ───────────────────────────────────────────── */
function BroadcastSection() {
  const { ref, visible } = useIntersection();
  const [activeRow, setActiveRow] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActiveRow((p) => (p + 1) % 5), 1800);
    return () => clearInterval(t);
  }, []);

  const campaigns = [
    { name: "Diwali Sale — All Customers", reach: "41,208", read: "76.3%", click: "38.1%", revenue: "Rs. 8.2L", status: "sent" },
    { name: "Cart Recovery — 2hr Delay", reach: "3,812", read: "68.4%", click: "44.2%", revenue: "Rs. 1.9L", status: "active" },
    { name: "VIP Loyalty Reward Offer", reach: "5,100", read: "82.0%", click: "51.3%", revenue: "Rs. 3.1L", status: "active" },
    { name: "Post-purchase Upsell — D3", reach: "9,041", read: "61.2%", click: "29.8%", revenue: "Rs. 2.4L", status: "active" },
    { name: "Win-back — 60-day Lapsed", reach: "12,300", read: "34.1%", click: "12.6%", revenue: "Rs. 0.8L", status: "paused" },
  ];

  const statusStyle: any = {
    active: "bg-purple-200 text-purple-600",
    paused: "bg-purple-200 text-purple-600",
    sent: "bg-purple-200 text-purple-600",
  };

  const bars = [42, 58, 47, 73, 61, 85, 69, 78, 63, 91, 74, 96];

  return (
    <section className="py-28 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-purple-600 mb-4">
              Broadcast Campaigns
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
              >
              Reach a million customers.
              <br />
              <span style={{ background: "linear-gradient(90deg,#9333ea,#d8b4fe)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Each one personalised.
              </span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 text-lg">
              Send bulk WhatsApp campaigns to segmented audiences at scale through Meta's
              official API. Every message is personalised with the recipient's name, purchase
              history, loyalty tier, and behavioural context — not a generic blast.
              Pre-approved template management, real-time delivery tracking, and read receipt
              analytics are built in from day one.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Personalisation tokens across every field — name, city, product, price",
                "Audience segmentation with 50-plus filter dimensions",
                "Template creation and Meta approval within the platform",
                "Scheduled sends with per-contact timezone awareness",
                "Broadcast pause, resume, and audience update mid-send",
                "Drip pacing to stay within Meta's messaging quality limits",
                "Unsubscribe and opt-out management across all campaigns",
              ].map((pt) => (
                <li key={pt} className="flex items-center gap-3 text-sm text-gray-600">
                  <RiCheckLine className="text-purple-600 flex-shrink-0 text-base" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>

          <div ref={ref} className="space-y-4">
            <div className="rounded-3xl border border-purple-200 bg-white overflow-hidden"
              style={{ boxShadow: "0 20px 60px rgba(219,39,119,0.08)" }}>
              <div className="flex items-center gap-2 px-5 py-3 border-b border-purple-200"
                style={{ background: "linear-gradient(135deg,#f3e8ff,#faf5ff)" }}>
                <RiMegaphoneLine className="text-purple-600" />
                <span className="font-bold text-sm text-gray-700" >Campaign Performance</span>
                <span className="ml-auto text-xs text-gray-400">Last 30 days</span>
              </div>
              <div className="p-5">
                <div className="flex items-end gap-1.5 h-24 mb-4">
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
                <div className="space-y-2">
                  {campaigns.slice(0, 4).map((c, i) => (
                    <div key={i}
                      className={`flex items-center gap-3 text-xs p-2.5 rounded-xl transition-all duration-500 ${i === activeRow ? "bg-purple-200 border border-purple-200" : "border border-transparent"}`}>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-700 font-semibold truncate">{c.name}</p>
                        <p className="text-gray-400">{c.reach} recipients — {c.read} read</p>
                      </div>
                      <span className="font-bold text-purple-600 whitespace-nowrap">{c.revenue}</span>
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
    </section>
  );
}

/* ─── Stats Band 2 ────────────────────────────────────────────────────── */
function StatsBand2() {
  const { ref, visible } = useIntersection();
  const stats = [
    { value: 2, suffix: "B+", label: "WhatsApp active users reachable globally" },
    { value: 5, suffix: "x", label: "Higher open rate vs email marketing" },
    { value: 3, suffix: " min", label: "Average message read time after delivery" },
    { value: 40, suffix: "%", label: "Average click-through rate on WhatsApp CTAs" },
  ];
  return (
    <section ref={ref} className="py-20 bg-purple-200/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((s, i) => (
            <div key={s.label}
              className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 120}ms` }}>
              <p className="text-5xl font-bold font-mono mb-2 text-gray-900" >
                {visible ? <Counter to={s.value} suffix={s.suffix} /> : `0${s.suffix}`}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Vendor Dashboard Section ──────────────────────────────────────────── */
function VendorDashboard() {
  const { ref, visible } = useIntersection();

  const funnelSteps = [
    { label: "Messages Sent", pct: 100, val: "48,210" },
    { label: "Delivered", pct: 99, val: "47,727" },
    { label: "Read (within 5 min)", pct: 72, val: "34,726" },
    { label: "Clicked CTA", pct: 40, val: "19,284" },
    { label: "Converted to Purchase", pct: 14, val: "6,749" },
  ];

  const kpis = [
    { label: "Messages Sent Today", value: "48,210", delta: "+24%" },
    { label: "Total Revenue Attributed", value: "Rs. 14.2L", delta: "+38%" },
    { label: "Active Automation Flows", value: "24", delta: "+6" },
    { label: "Contacts in Platform", value: "1,82,041", delta: "+4,200" },
    { label: "Average CSAT Score", value: "4.8 / 5", delta: "+0.3" },
    { label: "Opt-out Rate", value: "0.18%", delta: "-0.09%" },
  ];

  return (
    <section className="py-28 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Vendor Dashboard"
          title={<>Every metric, every channel,<br />one unified view.</>}
          sub="The vendor dashboard gives you real-time visibility into every message sent, every conversation active, every flow running, and every rupee attributed — across your entire WhatsApp programme."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {kpis.map((m, i) => (
              <div key={m.label}
                className={`bg-white border-2 border-purple-200 rounded-2xl p-5 hover:border-purple-200 hover:shadow-md hover:shadow-purple-200 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${i * 80}ms` }}>
                <p className="text-xs text-gray-400 mb-1">{m.label}</p>
                <p className="text-2xl font-bold text-gray-800"
                  >{m.value}</p>
                <p className="text-xs font-semibold mt-1 text-purple-600">{m.delta} vs last month</p>
              </div>
            ))}
          </div>

          <div
            className={`bg-white border-2 border-purple-200 rounded-3xl p-6 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            style={{ transitionDelay: "480ms" }}>
            <p className="text-sm font-bold text-gray-700 mb-5" >Message Funnel</p>
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

/* ─── Use Cases ───────────────────────────────────────────────────────── */
const usecases = [
  {
    icon: RiStore2Line,
    industry: "E-commerce and D2C",
    heading: "Turn every browse and abandoned cart into revenue",
    body: "Trigger cart recovery messages, post-purchase upsells, review requests, reorder nudges, and win-back campaigns — all personalised to the customer's behaviour, purchase history, and loyalty tier. Running automatically, around the clock, without any manual input.",
    tags: ["Cart Recovery", "Post-purchase", "Win-back", "Review Requests"],
  },
  {
    icon: RiUserFollowLine,
    industry: "Lead Generation and Sales",
    heading: "Qualify leads and book demos while you sleep",
    body: "Run AI-powered qualification conversations the moment a lead fills a form or clicks an ad. Score intent, collect requirements, and book a sales call directly through WhatsApp — with the full conversation transcript sent to your CRM automatically.",
    tags: ["Lead Qualification", "Demo Booking", "CRM Sync"],
  },
  {
    icon: RiRepeatLine,
    industry: "SaaS and Subscriptions",
    heading: "Onboard, retain, and expand your subscriber base",
    body: "Send contextual onboarding messages based on in-app activity. Detect churn signals from usage patterns and trigger retention flows at exactly the right moment. Surface upgrade prompts to accounts showing expansion behaviour.",
    tags: ["Onboarding", "Churn Prevention", "Expansion Revenue"],
  },
  {
    icon: RiCalendarLine,
    industry: "Healthcare and Services",
    heading: "Automate appointments, reminders, and follow-ups",
    body: "Send appointment confirmations, pre-visit reminders, post-visit follow-ups, and prescription renewal alerts through WhatsApp. Allow patients and clients to confirm, reschedule, or cancel — all handled by the AI agent automatically.",
    tags: ["Appointment Reminders", "Rescheduling", "Follow-ups"],
  },
  {
    icon: RiBuildingLine,
    industry: "Banking and Financial Services",
    heading: "Personalised offers, alerts, and service at scale",
    body: "Send account alerts, EMI reminders, personalised product recommendations, and policy renewal nudges through an end-to-end encrypted, compliant WhatsApp channel — with full audit trails and consent management built in.",
    tags: ["Account Alerts", "EMI Reminders", "Product Offers"],
  },
  {
    icon: RiMegaphoneLine,
    industry: "Education and EdTech",
    heading: "Enrol more students and drive course completion",
    body: "Trigger personalised enrolment nudges, class reminders, assignment alerts, and re-engagement messages based on course activity. The AI agent handles admissions queries, fee payment questions, and schedule changes conversationally.",
    tags: ["Enrolment Flows", "Course Reminders", "Admissions Bot"],
  },
];

function UseCases() {
  return (
    <section className="py-28 bg-purple-200/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Use Cases"
          title={<>One platform.<br />Every industry.</>}
          sub="From a ten-person D2C brand to a hundred-thousand-customer enterprise — the platform scales to your volume, your stack, and your workflows."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {usecases.map((u, i) => {
            const { ref, visible } = useIntersection();
            return (
              <div key={u.industry} ref={ref}
                className={`group relative overflow-hidden border border-purple-200 hover:border-purple-200 rounded-3xl p-8 transition-all duration-500 hover:shadow-xl hover:shadow-purple-200 hover:-translate-y-1 bg-white ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 90}ms` }}>
                <div className="absolute top-0 right-0 w-40 h-40 rounded-bl-full opacity-[0.04] bg-purple-200 transition-all duration-500 group-hover:opacity-[0.08] group-hover:w-52 group-hover:h-52" />
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-purple-200 flex items-center justify-center flex-shrink-0">
                    <u.icon className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-purple-600 mb-1">{u.industry}</p>
                    <h3 className="font-bold text-gray-800 text-base leading-snug"
                      >{u.heading}</h3>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{u.body}</p>
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

/* ─── Number Connect Deep-dive ──────────────────────────────────────────── */
function NumberConnectSection() {
  const { ref, visible } = useIntersection();

  const connectSteps = [
    { icon: RiQrCodeLine, label: "Verify via QR or OTP", desc: "Scan the QR code or enter the one-time passcode sent to your business number to authenticate the connection.", status: "done" },
    { icon: RiBuildingLine, label: "Submit Business Verification", desc: "Upload your business registration documents. Meta verification is completed in as little as 24 hours.", status: "done" },
    { icon: RiFileTextLine, label: "Register Display Name and Category", desc: "Choose your display name and business category. Approval is tracked live inside the platform.", status: "done" },
    { icon: RiNotificationLine, label: "Configure Webhook Events", desc: "Select which message events — delivery, read, reply, button click — should trigger flows or update contact records.", status: "active" },
    { icon: RiCheckboxCircleLine, label: "Send First Test Message", desc: "Verify end-to-end delivery with a test message to your own number before activating any live flow.", status: "pending" },
  ];

  const statusStyle: any = { done: "text-purple-600", active: "text-purple-600", pending: "text-gray-400" };
  const statusLabel: any = { done: "Complete", active: "In Progress", pending: "Pending" };

  return (
    <section className="py-28 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-purple-600 mb-4">
              Number Integration
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
              >
              Your number, your brand,
              <br />your inbox —
              <br />
              <span style={{ background: "linear-gradient(90deg,#9333ea,#d8b4fe)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                fully in your control.
              </span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 text-lg">
              Connect your existing WhatsApp Business number through the official Meta Cloud API
              integration. No number migration. No disruption to existing conversations. No
              third-party library risk. Your business display name, profile picture, and
              verified green tick remain exactly as they are — the platform simply adds the
              automation and intelligence layer on top.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Connect any existing WhatsApp Business API number",
                "Full Meta Cloud API — no unofficial libraries or ban risk",
                "Dedicated sending infrastructure per vendor account",
                "Multi-number support for brands with regional or product lines",
                "Phone number quality monitoring and auto-throttling",
                "Meta business verification support included",
                "Green tick application assistance for eligible businesses",
              ].map((pt) => (
                <li key={pt} className="flex items-center gap-3 text-sm text-gray-600">
                  <RiCheckLine className="text-purple-600 flex-shrink-0 text-base" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>

          <div ref={ref}>
            <div className="rounded-3xl border-2 border-purple-200 bg-white overflow-hidden"
              style={{ boxShadow: "0 20px 60px rgba(219,39,119,0.08)" }}>
              <div className="px-5 py-4 border-b border-purple-200 flex items-center gap-2"
                style={{ background: "linear-gradient(135deg,#f3e8ff,#faf5ff)" }}>
                <RiPhoneLine className="text-purple-600" />
                <span className="font-bold text-sm text-gray-700" >Number Onboarding Checklist</span>
                <span className="ml-auto text-xs text-gray-400">3 / 5 complete</span>
              </div>

              <div className="p-4 space-y-3">
                {connectSteps.map((s, i) => (
                  <div key={i}
                    className={`flex items-start gap-4 p-4 rounded-2xl border-2 transition-all duration-500 ${s.status === "active" ? "border-purple-200 bg-purple-200" : s.status === "done" ? "border-purple-200 bg-purple-200/40" : "border-purple-200 bg-white"} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    style={{ transitionDelay: `${i * 100}ms` }}>
                    <s.icon className={`flex-shrink-0 text-lg mt-0.5 ${statusStyle[s.status]}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-gray-800 mb-0.5">{s.label}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                    </div>
                    <span className={`text-xs font-bold flex-shrink-0 ${statusStyle[s.status]}`}>
                      {statusLabel[s.status]}
                    </span>
                  </div>
                ))}
              </div>

              <div className="px-5 pb-5">
                <div className="p-4 rounded-2xl bg-purple-200 border border-purple-200">
                  <p className="text-xs text-gray-500 mb-2 font-semibold">Onboarding Progress</p>
                  <div className="h-2 rounded-full bg-white overflow-hidden">
                    <div className="h-full rounded-full"
                      style={{
                        width: visible ? "60%" : "0%",
                        background: "linear-gradient(90deg,#9333ea,#d8b4fe)",
                        transition: "width 1.2s cubic-bezier(.22,1,.36,1) 600ms",
                      }} />
                  </div>
                  <p className="text-xs text-right text-purple-600 font-bold mt-1">3 of 5 steps complete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Analytics Section ─────────────────────────────────────────────────── */
function Analytics() {
  const { ref, visible } = useIntersection();
  const metrics = [
    { label: "Messages Delivered", value: "47,727", delta: "+24%", up: true },
    { label: "Unique Reads", value: "34,484", delta: "+19%", up: true },
    { label: "Link Clicks", value: "19,284", delta: "+31%", up: true },
    { label: "Revenue Attributed", value: "Rs. 14.2L", delta: "+38%", up: true },
    { label: "Opt-outs", value: "86", delta: "-22%", up: true },
    { label: "Spam Reports", value: "2", delta: "-80%", up: true },
    { label: "AI Agent Resolutions", value: "8,412", delta: "+44%", up: true },
    { label: "Avg First Reply Time", value: "< 4 sec", delta: "-62%", up: true },
    { label: "CSAT Score", value: "4.8 / 5", delta: "+0.3", up: true },
  ];

  return (
    <section className="py-28 bg-purple-200/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Analytics and Reporting"
          title={<>Every message.<br />Every conversion. Explained.</>}
          sub="Real-time and historical analytics across every message, flow, campaign, and AI agent interaction — with revenue attribution tied directly to your order data."
        />
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {metrics.map((m, i) => (
              <div key={m.label}
                className={`bg-white border-2 border-purple-200 rounded-2xl p-5 hover:border-purple-200 hover:shadow-md hover:shadow-purple-200 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${i * 60}ms` }}>
                <p className="text-xs text-gray-400 mb-1">{m.label}</p>
                <p className="text-2xl font-bold text-gray-800" >{m.value}</p>
                <p className="text-xs font-semibold mt-1 text-purple-600">{m.delta} vs last month</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Flow-level Attribution",
              desc: "See the exact revenue and conversion contribution of every automation flow — broken down by trigger, message, and exit path. Identify which flow earns the most per enrolled contact.",
              icon: RiFlowChart,
            },
            {
              title: "Cohort and Retention Analysis",
              desc: "Track how engagement and re-purchase rates evolve over time for cohorts enrolled through different flows. Understand long-term LTV impact, not just first-touch attribution.",
              icon: RiGroupLine,
            },
            {
              title: "Agent Performance Reporting",
              desc: "Monitor AI agent resolution rate, escalation rate, average handle time, and CSAT score across every conversation type — with drill-down to individual interaction transcripts.",
              icon: RiRobot2Line,
            },
            {
              title: "Template and Creative Analytics",
              desc: "Compare read rate, click rate, and conversion rate across every message template variant. Surface the highest-performing creative combinations for each audience segment.",
              icon: RiBarChartBoxLine,
            },
          ].map((item, i) => {
            const { ref: r, visible: v } = useIntersection();
            return (
              <div key={item.title} ref={r}
                className={`group bg-white border border-purple-200 hover:border-purple-200 rounded-3xl p-7 transition-all duration-500 hover:shadow-lg hover:shadow-purple-200 hover:-translate-y-1 ${v ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-11 h-11 rounded-2xl bg-purple-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="text-purple-600 text-lg" />
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2" >{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Compliance and Deliverability ─────────────────────────────────────── */
function ComplianceSection() {
  const { ref, visible } = useIntersection();
  const checks = [
    { icon: RiShieldCheckLine, label: "Meta Official BSP Partner", val: "Verified" },
    { icon: RiLockLine, label: "End-to-End Encryption", val: "Active" },
    { icon: RiMailCheckLine, label: "Opt-in Consent Management", val: "Compliant" },
    { icon: RiErrorWarningLine, label: "Spam Report Rate", val: "0.004%" },
    { icon: RiGlobalLine, label: "GDPR / PDPB Compliance", val: "Certified" },
    { icon: RiZoomInLine, label: "Message Quality Rating", val: "High" },
  ];
  return (
    <section className="py-28 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-purple-600 mb-4">
              Compliance and Quality
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
              >
              Stay in Meta's good books.
              <br />
              <span style={{ background: "linear-gradient(90deg,#9333ea,#d8b4fe)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Always.
              </span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 text-lg">
              Sending on WhatsApp at scale requires maintaining a high phone number quality
              rating, staying within template messaging policies, managing opt-ins and
              opt-outs correctly, and monitoring spam complaint rates. The platform handles
              all of this automatically — with real-time alerts and automated throttling to
              keep your number in the highest quality tier.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Phone number quality monitoring with automated send-rate throttling",
                "Opt-in audit trails with timestamp and consent source recorded",
                "One-tap opt-out processing and suppression list enforcement",
                "Template violation detection and pre-submission compliance scan",
                "Real-time spam complaint alerts with auto-pause threshold",
                "Message frequency capping per contact across all campaigns and flows",
                "GDPR and India PDPB compliant data processing and storage",
              ].map((pt) => (
                <li key={pt} className="flex items-center gap-3 text-sm text-gray-600">
                  <RiCheckLine className="text-purple-600 flex-shrink-0 text-base" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
          <div ref={ref}>
            <div className="rounded-3xl border-2 border-purple-200 bg-white overflow-hidden"
              style={{ boxShadow: "0 20px 60px rgba(219,39,119,0.08)" }}>
              <div className="px-5 py-4 border-b border-purple-200 flex items-center gap-2"
                style={{ background: "linear-gradient(135deg,#f3e8ff,#faf5ff)" }}>
                <RiShieldCheckLine className="text-purple-600" />
                <span className="font-bold text-sm text-gray-700" >Compliance Health Dashboard</span>
                <span className="ml-auto text-xs font-bold text-purple-600 bg-purple-200 px-2.5 py-1 rounded-full">All Healthy</span>
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
                    <span className="text-xs font-semibold text-purple-600 bg-purple-200 px-2.5 py-1 rounded-full">{c.val}</span>
                  </div>
                ))}
              </div>
              <div className="px-5 pb-5 pt-2">
                <div className="p-4 rounded-2xl bg-purple-200 border border-purple-200">
                  <p className="text-xs text-gray-500 mb-2 font-semibold">Number Quality Rating</p>
                  <div className="h-2 rounded-full bg-white overflow-hidden">
                    <div className="h-full rounded-full"
                      style={{
                        width: visible ? "94%" : "0%",
                        background: "linear-gradient(90deg,#9333ea,#d8b4fe)",
                        transition: "width 1.2s cubic-bezier(.22,1,.36,1) 800ms",
                      }} />
                  </div>
                  <p className="text-xs text-right text-purple-600 font-bold mt-1">94 / 100 — High</p>
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
  { icon: RiDatabase2Line, name: "Salesforce", desc: "CRM sync" },
  { icon: RiStore2Line, name: "Shopify", desc: "Order triggers" },
  { icon: RiCloudLine, name: "HubSpot", desc: "Lead data" },
  { icon: RiCodeLine, name: "WooCommerce", desc: "Store events" },
  { icon: RiPlugLine, name: "Zapier", desc: "Workflows" },
  { icon: RiNotificationLine, name: "Razorpay", desc: "Payment events" },
  { icon: RiFileChartLine, name: "Segment", desc: "CDP events" },
  { icon: RiCoinLine, name: "Stripe", desc: "Billing triggers" },
  { icon: RiGlobalLine, name: "Magento", desc: "E-commerce" },
  { icon: RiStockLine, name: "Zoho CRM", desc: "Contact data" },
  { icon: RiShoppingCartLine, name: "BigCommerce", desc: "Cart events" },
  { icon: RiMapPinLine, name: "Google Sheets", desc: "Data import" },
];

function Integrations() {
  return (
    <section className="py-28 bg-purple-200/30">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          eyebrow="Integrations"
          title={<>Plugs into every tool<br />you already use.</>}
          sub="Pre-built connectors for the CRMs, e-commerce platforms, payment processors, and CDPs your team depends on. Contact data, purchase events, and behavioural signals flow in automatically."
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {integrations.map((it, i) => {
            const { ref, visible } = useIntersection();
            return (
              <div key={it.name} ref={ref}
                className={`group flex flex-col items-center gap-3 p-6 rounded-3xl bg-white border border-purple-200 hover:border-purple-200 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-200 transition-all duration-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="w-12 h-12 rounded-2xl bg-purple-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <it.icon className="text-purple-600 text-xl" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-gray-800 text-sm" >{it.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{it.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Also available: REST API and Webhooks for custom integrations with any system.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ────────────────────────────────────────────────────── */
const testimonials = [
  {
    quote: "Our cart abandonment flow on WhatsApp recovered Rs. 41 lakh in the first 45 days. The AI agent now handles 78 percent of our customer support queries without any human involvement. The ROI is unlike anything we have seen from email or SMS.",
    name: "Priya Menon",
    role: "Head of Growth, NestKart",
    initials: "PM",
  },
  {
    quote: "We connected our Shopify store and had the first automated flow live within 20 minutes. The flow builder is genuinely the most intuitive automation tool I have used in eight years of marketing. Our open rates are consistently above 70 percent.",
    name: "Arjun Malhotra",
    role: "Marketing Director, Urbane Threads",
    initials: "AM",
  },
  {
    quote: "The AI agent handles 2,400 support conversations a day across 11 languages. Escalation rate is under 12 percent. Our CSAT went from 3.9 to 4.8 in three months. We run a team of four agents now where we previously needed twenty-two.",
    name: "Sneha Patel",
    role: "VP Customer Experience, Luminary Financial",
    initials: "SP",
  },
  {
    quote: "We replaced three tools — a bulk WhatsApp sender, a chatbot builder, and a support inbox — with this single platform. Vendor onboarding took one afternoon. The compliance monitoring alone justifies the price given our regulated industry.",
    name: "Rahul Verma",
    role: "CTO, MedConnect India",
    initials: "RV",
  },
  {
    quote: "Our lead qualification bot books 140 to 180 demos a week entirely autonomously. The AI asks the right questions, scores intent, and drops the meeting link — all within the WhatsApp conversation. Our sales team only speaks to warm, qualified leads.",
    name: "Kavya Nair",
    role: "Sales Operations Lead, SaasBridge",
    initials: "KN",
  },
  {
    quote: "The broadcast personalisation is genuinely impressive. We send 85,000 messages per campaign and every single one addresses the recipient by name with their last purchase and a relevant product suggestion. Read rates average 74 percent.",
    name: "Manish Sharma",
    role: "E-commerce Manager, Glow Republic",
    initials: "MS",
  },
];

function Testimonials() {
  return (
    <section className="py-28 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Customer Results"
          title={<>Brands that automated<br />and never looked back.</>}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            const { ref, visible } = useIntersection();
            return (
              <div key={t.name} ref={ref}
                className={`bg-white rounded-3xl p-8 border-2 border-purple-200 hover:border-purple-200 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-200 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 100}ms`, boxShadow: "0 4px 24px rgba(219,39,119,0.05)" }}>
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

/* ─── Security ────────────────────────────────────────────────────────── */
function Security() {
  const pillars = [
    { icon: RiShieldCheckLine, label: "SOC 2 Type II certified infrastructure" },
    { icon: RiLockLine, label: "AES-256 encryption at rest and in transit" },
    { icon: RiPulseLine, label: "Real-time threat and anomaly detection" },
    { icon: RiFileChartLine, label: "Full message and access audit trails" },
    { icon: RiGlobalLine, label: "GDPR, PDPB, CAN-SPAM, and TRAI compliant" },
    { icon: RiCloudLine, label: "Geo-redundant multi-region infrastructure" },
    { icon: RiDatabase2Line, label: "Data residency options for regulated industries" },
    { icon: RiUserLine, label: "Role-based access control across vendor accounts" },
   
  ];
  return (
    <section className="py-24 bg-purple-200/30">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          eyebrow="Security and Compliance"
          title={<>Enterprise-grade security,<br />built in from day one.</>}
          sub="Every message, every contact record, and every integration is protected to the same standard used by regulated financial and healthcare businesses."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {pillars.map((p, i) => {
            const { ref, visible } = useIntersection();
            return (
              <div key={p.label} ref={ref}
                className={`flex items-center gap-3 bg-white rounded-2xl px-5 py-4 border border-purple-200 hover:border-purple-200 hover:shadow transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${i * 70}ms` }}>
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

/* ─── Pricing ─────────────────────────────────────────────────────────── */
const plans = [
  {
    name: "Starter",
    price: "Rs. 2,499",
    period: "/month",
    desc: "For small businesses sending their first automated WhatsApp campaigns.",
    features: [
      "Up to 5,000 contacts",
      "20,000 messages/month",
      "5 automation flows",
      "AI agent — 500 conversations/month",
      "Core analytics dashboard",
      "1 WhatsApp Business number",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlight: false,
  },
  {
    name: "Growth",
    price: "Rs. 7,999",
    period: "/month",
    desc: "For scaling brands that need power, personalisation, and revenue attribution.",
    features: [
      "Up to 50,000 contacts",
      "2,00,000 messages/month",
      "Unlimited automation flows",
      "AI agent — 5,000 conversations/month",
      "AI copy generation engine",
      "A/B testing suite",
      "Revenue attribution reporting",
      "3 WhatsApp Business numbers",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For high-volume businesses with compliance, security, and infrastructure requirements.",
    features: [
      "Unlimited contacts and messages",
      "Unlimited AI agent conversations",
      "Dedicated number infrastructure",
      "Custom integrations and API access",
      "Data residency and DPA available",
      "Dedicated customer success manager",
      "SLA-backed uptime guarantee",
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
          title={<>Clear pricing. No surprises.</>}
          sub="Pay by contacts and messages. No per-agent fees. No overages without warning. Upgrade, downgrade, or cancel at any time."
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
                  <span className="text-3xl font-black" >{p.price}</span>
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
        <p className="text-center text-gray-400 text-sm mt-8">
          All plans include a 14-day free trial. Meta API message costs billed separately at pass-through rates with no markup.
        </p>
      </div>
    </section>
  );
}

/* ─── FAQ ─────────────────────────────────────────────────────────────── */
const faqs = [
  {
    q: "Can I use my existing WhatsApp Business number?",
    a: "Yes. You can connect any WhatsApp Business API-enabled number. If your number is currently on the consumer app or the basic WhatsApp Business app, the onboarding wizard guides you through the migration process — typically completed within 24 to 48 hours with no downtime.",
  },
  {
    q: "Do I need a Meta Business Manager account?",
    a: "Yes, a verified Meta Business Manager account is required to connect through the official API. If you do not have one, the onboarding checklist walks you through creating and verifying it. We also offer assisted verification for eligible accounts.",
  },
  {
    q: "What happens if my phone number quality rating drops?",
    a: "The platform monitors your quality rating in real time. If it moves toward Medium, automated throttling reduces your send rate and you receive an alert with recommended actions. Campaign sends can be automatically paused at a quality threshold you configure.",
  },
  {
    q: "Is there a limit on the number of messages I can send?",
    a: "Your messaging limit is governed by Meta's tiered system — starting at 1,000 unique conversations per day and scaling to unlimited based on your business verification level and quality rating. The platform manages tier warm-up automatically.",
  },
  {
    q: "How does the AI agent handle messages it cannot answer?",
    a: "When the AI detects low confidence, negative sentiment, or a question outside its knowledge scope, it immediately escalates to a human agent. The entire conversation history, customer profile, and a confidence score are passed to the agent inbox in real time.",
  },
  {
    q: "Is WhatsApp message data stored on your servers?",
    a: "Message content is stored in accordance with your data residency configuration. Enterprise customers can opt for in-region storage in India, EU, or US data centres. All data is encrypted at rest using AES-256 and in transit using TLS 1.3.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-28 bg-purple-200/30">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader
          eyebrow="Frequently Asked Questions"
          title={<>Questions we get<br />asked most often.</>}
        />
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const { ref, visible } = useIntersection();
            return (
              <div key={i} ref={ref}
                className={`bg-white border-2 rounded-2xl overflow-hidden transition-all duration-500 ${open === i ? "border-purple-200" : "border-purple-200"} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${i * 70}ms` }}>
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                  onClick={() => setOpen(open === i ? null : i)}>
                  <span className="font-bold text-gray-800 text-sm pr-4" >{f.q}</span>
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs transition-all duration-300 ${open === i ? "bg-purple-200 text-gray-900 rotate-45" : "bg-purple-200 text-purple-600"}`}>+</span>
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-400 ${open === i ? "max-h-48 pb-5" : "max-h-0"}`}>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
                </div>
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
    <section className="py-28 bg-transparent">
      <div ref={ref}
        className={`max-w-4xl mx-auto px-6 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="relative rounded-3xl overflow-hidden p-16 shadow-2xl shadow-purple-200"
          style={{ background: "linear-gradient(135deg,#9333ea 0%,#a855f7 60%,#d8b4fe 100%)" }}>
          <div className="absolute top-6 right-10 w-32 h-32 rounded-full border-2 border-white/10" />
          <div className="absolute bottom-4 left-6 w-20 h-20 rounded-full border border-white/10" />
          <div className="absolute top-1/2 left-8 w-3 h-3 rounded-full bg-white/20" />
          <div className="absolute bottom-12 right-20 w-5 h-5 rounded-full bg-white/10" />
          <div className="absolute top-16 left-1/3 w-2 h-2 rounded-full bg-white/15" />

          <p className="text-xs font-semibold tracking-widest uppercase text-purple-100 mb-4">
            Ready to put your WhatsApp programme on autopilot?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
            >
            Your first automated
            <br />flow is 15 minutes away.
          </h2>
          <p className="text-purple-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Connect your number, import your contacts, build a flow, and let the AI send the first
            personalised message — all before your next meeting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
           <Link href="https://web.sellerslogin.com/vendor/registration">
            <button className="group flex items-center gap-2 bg-white text-purple-600 hover:bg-purple-200 font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:-translate-y-0.5">
              Connect Your Number Free
              <RiArrowRightLine className="transition-transform group-hover:translate-x-1" />
            </button></Link>
           
          </div>
          <p className="text-purple-100 text-sm mt-6">
            14-day free trial. No credit card required. Cancel at any time.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Page Assembly ───────────────────────────────────────────────────── */
export default function WhatsAppAutomationPage() {
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
        <AIAgentSection />
        <BroadcastSection />
        <StatsBand2 />
        <VendorDashboard />
        <UseCases />
        <Analytics />
        <NumberConnectSection />
        <ComplianceSection />
        <Security />
        <FAQ />
        <CTA />
        <FooterSection />
        <BackToTop />
      </main>
    </>
  );
}