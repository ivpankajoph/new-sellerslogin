


"use client"

import { BackToTop } from "@/components/landing/BackToTop";
import { CustomCursor } from "@/components/landing/CustomCursor";
import { FooterSection } from "@/components/landing/FooterSection";
import { GlobalBackground } from "@/components/landing/GlobalBackground";
import { Navbar } from "@/components/landing/Navbar";
import { ScrollRevealInit } from "@/components/landing/ScrollRevealInit";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FiLayers,
  FiZap,
  FiLayout,
  FiShoppingBag,
  FiBriefcase,
  FiBook,
  FiCamera,
  FiBarChart2,
  FiUsers,
  FiGlobe,
  FiSettings,
  FiCheck,
  FiArrowRight,
  FiMousePointer,
  FiSliders,
  FiUploadCloud,
  FiEye,
  FiStar,
  FiTrendingUp,
  FiSmartphone,
  FiMonitor,
  FiTablet,
  FiCode,
} from "react-icons/fi";

/* ─────────────────────────────────────────────
   ANIMATION HOOK
───────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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

/* ─────────────────────────────────────────────
   COUNTER COMPONENT
───────────────────────────────────────────── */
function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useInView();
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [visible, end]);
  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ─────────────────────────────────────────────
   FLOATING SHAPES BACKGROUND
───────────────────────────────────────────── */
function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-20 blur-3xl"
          style={{
            background: i % 2 === 0 ? "#f3e8ff" : "#e9d5ff",
            width: `${180 + i * 60}px`,
            height: `${180 + i * 60}px`,
            top: `${10 + i * 15}%`,
            left: `${5 + i * 16}%`,
            animation: `float${i % 3} ${6 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white px-6 mt-14">
      <FloatingShapes />

      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#9333ea20 1px, transparent 1px), linear-gradient(90deg, #9333ea20 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center mt-14">
        {/* Headline */}
        <h1
          className="text-6xl md:text-8xl font-black tracking-tight text-gray-900 leading-none"
          
        >
          Build beautiful
          <br />
          <span className="relative inline-block">
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #9333ea 0%, #a855f7 60%, #f3e8ff 100%)",
              }}
            >
              websites
            </span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="8"
              viewBox="0 0 300 8"
              fill="none"
            >
              <path
                d="M2 6 Q75 2 150 6 Q225 10 298 4"
                stroke="#a855f7"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>
          <br />
          without code.
        </h1>

        <p
          className="max-w-2xl mx-auto text-xl text-gray-500 mb-12 leading-relaxed"
          
        >
          A drag-and-drop website builder that turns your ideas into stunning,
          production-ready sites in minutes — no developer needed.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
 <Link href="https://web.sellerslogin.com/vendor/registration">
          <button
            className="group flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            style={{ background: "linear-gradient(135deg, #9333ea, #c084fc)" }}
          >
            Start Building Free
            <FiArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
 </Link>
       
        </div>

        {/* Device mockup strip */}
        <div className="relative flex justify-center items-end gap-4">
          {/* Monitor */}
          <div
            className="hidden md:block w-80 h-52 rounded-2xl border-4 border-gray-200 bg-white shadow-2xl overflow-hidden relative"
            style={{ boxShadow: "0 40px 80px -20px rgba(147,51,234,0.15)" }}
          >
            <div className="h-6 bg-gray-100 border-b border-gray-200 flex items-center px-3 gap-1.5">
              {["#ff5f57", "#ffbd2e", "#28ca41"].map((c) => (
                <div
                  key={c}
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: c }}
                />
              ))}
            </div>
            <div className="p-3 space-y-2">
              <div className="h-3 bg-purple-100 rounded w-3/4" />
              <div className="h-2 bg-gray-100 rounded w-full" />
              <div className="h-2 bg-gray-100 rounded w-5/6" />
              <div className="grid grid-cols-3 gap-2 mt-3">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="h-12 rounded-lg"
                    style={{
                      background:
                        i % 3 === 0
                          ? "#f3e8ff"
                          : i % 3 === 1
                            ? "#e9d5ff"
                            : "#fafafa",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Tablet */}
          <div
            className="w-44 h-60 rounded-2xl border-4 border-gray-200 bg-white shadow-2xl overflow-hidden relative"
            style={{ boxShadow: "0 40px 80px -20px rgba(147,51,234,0.2)" }}
          >
            <div className="h-5 bg-gray-100 border-b border-gray-200" />
            <div className="p-2.5 space-y-2">
              <div className="h-2 bg-purple-200 rounded w-2/3" />
              <div className="h-1.5 bg-gray-100 rounded w-full" />
              <div className="h-1.5 bg-gray-100 rounded w-4/5" />
              <div className="h-16 bg-purple-50 rounded-xl mt-2 flex items-center justify-center">
                <FiLayout size={20} className="text-purple-400" />
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="h-8 rounded-lg bg-gray-50 border border-gray-100"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Phone */}
          <div
            className="w-24 h-48 rounded-2xl border-4 border-gray-200 bg-white shadow-2xl overflow-hidden"
            style={{ boxShadow: "0 40px 80px -20px rgba(147,51,234,0.25)" }}
          >
            <div className="h-4 bg-gray-100 border-b border-gray-200 flex justify-center items-center">
              <div className="w-8 h-1 bg-gray-300 rounded-full" />
            </div>
            <div className="p-1.5 space-y-1.5">
              <div className="h-1.5 bg-purple-200 rounded w-4/5" />
              <div className="h-1 bg-gray-100 rounded w-full" />
              <div className="h-1 bg-gray-100 rounded w-3/4" />
              <div className="h-10 bg-purple-50 rounded-lg mt-1 flex items-center justify-center">
                <FiSmartphone size={12} className="text-purple-400" />
              </div>
              <div className="space-y-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="h-5 bg-gray-50 rounded border border-gray-100"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   STATS SECTION
───────────────────────────────────────────── */
function StatsSection() {
  const { ref, visible } = useInView();
  const stats = [
    { value: 50, suffix: "+", label: "Websites Built" },
    { value: 99, suffix: "%", label: "Uptime Guaranteed" },
    { value: 20, suffix: "+", label: "Templates" },
    { value: 0.4, suffix: "/5", label: "Average Rating" },
  ];
  return (
    <section
      ref={ref}
      className="py-20 px-6"
      style={{
        background:
          "linear-gradient(135deg, #f3e8ff 0%, #faf5ff 50%, #f3e8ff 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div
            key={i}
            className="text-center transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transitionDelay: `${i * 100}ms`,
            }}
          >
            <div
              className="text-4xl md:text-5xl font-black text-gray-900 mb-2"
              
            >
              {visible ? (
                <Counter
                  end={
                    typeof s.value === "number" && s.value < 10
                      ? s.value * 10
                      : s.value
                  }
                  suffix={s.suffix}
                />
              ) : (
                `0${s.suffix}`
              )}
            </div>
            <div className="text-gray-500 text-sm font-medium tracking-wide uppercase">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   HOW IT WORKS
───────────────────────────────────────────── */
function HowItWorks() {
  const { ref, visible } = useInView();
  const steps = [
    {
      icon: FiMousePointer,
      step: "01",
      title: "Pick a Template",
      desc: "Browse 20+ professionally designed templates across every industry. Filter by style, purpose, or industry — then make it yours.",
    },
    {
      icon: FiSliders,
      step: "02",
      title: "Customize Everything",
      desc: "Drag, drop, resize, and recolor every element. Change fonts, layouts, and colors with live preview — no coding required.",
    },
    {
      icon: FiUploadCloud,
      step: "03",
      title: "Add Your Content",
      desc: "Upload images, write copy, add products or portfolio items. Our AI writing assistant can help you craft compelling content.",
    },
    {
      icon: FiGlobe,
      step: "04",
      title: "Publish & Go Live",
      desc: "Connect your domain and publish with one click. Your site is live on blazing-fast CDN infrastructure instantly.",
    },
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-purple-500 font-semibold tracking-widest text-sm uppercase mb-4">
            How It Works
          </p>
          <h2
            className="text-5xl md:text-6xl font-black text-gray-900 leading-tight"
            
          >
            From idea to live site
            <br />
            <span className="text-purple-400">in four steps.</span>
          </h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-4 gap-0 relative">
          {/* Connector line */}
          <div
            className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px"
            style={{
              background: "linear-gradient(90deg, #f3e8ff, #a855f7, #f3e8ff)",
            }}
          />

          {steps.map((s, i) => (
            <div
              key={i}
              className="relative text-center px-6 transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${i * 150}ms`,
              }}
            >
              <div className="relative inline-flex">
                <div
                  className="w-20 h-20 rounded-full bg-purple-50 border-4 border-white shadow-lg flex items-center justify-center mb-6 mx-auto"
                  style={{ boxShadow: "0 0 0 4px #f3e8ff" }}
                >
                  <s.icon size={28} className="text-purple-500" />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-purple-500 text-white text-xs font-black flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <p
                className="text-purple-300 font-black text-6xl absolute top-0 left-6 -z-10 select-none"
                
              >
                {s.step}
              </p>
              <h3
                className="text-xl font-bold text-gray-900 mb-3 mt-2"
                
              >
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FEATURES GRID
───────────────────────────────────────────── */
function FeaturesSection() {
  const { ref, visible } = useInView();
  const features = [
    {
      icon: FiLayout,
      title: "Visual Drag & Drop Editor",
      desc: "A pixel-perfect canvas where every element can be moved, resized, and styled intuitively. See changes in real time.",
      color: "#f3e8ff",
      accent: "#9333ea",
    },
    {
      icon: FiSmartphone,
      title: "Fully Responsive Designs",
      desc: "Every site is automatically optimized for mobile, tablet, and desktop. Preview across all breakpoints in one click.",
      color: "#f3e8ff",
      accent: "#9333ea",
    },
    {
      icon: FiZap,
      title: "Lightning Fast Performance",
      desc: "Built-in performance optimization, lazy loading, and CDN delivery ensures your site scores 95+ on PageSpeed.",
      color: "#f3e8ff",
      accent: "#9333ea",
    },
    {
      icon: FiCode,
      title: "Custom Code Support",
      desc: "Need something custom? Drop in HTML, CSS, or JavaScript anywhere on your page without breaking the visual editor.",
      color: "#f3e8ff",
      accent: "#9333ea",
    },
    {
      icon: FiSettings,
      title: "SEO Built Right In",
      desc: "Meta tags, sitemaps, structured data, and Open Graph are all handled automatically with full manual override support.",
      color: "#f3e8ff",
      accent: "#9333ea",
    },
    {
      icon: FiBarChart2,
      title: "Analytics Dashboard",
      desc: "Track visitors, bounce rate, popular pages, and conversion funnels — all from your builder dashboard.",
      color: "#f3e8ff",
      accent: "#9333ea",
    },
    {
      icon: FiUploadCloud,
      title: "One-Click Publishing",
      desc: "Connect your custom domain and publish instantly to our global edge network. SSL certificates handled automatically.",
      color: "#f3e8ff",
      accent: "#9333ea",
    },
    {
      icon: FiUsers,
      title: "Team Collaboration",
      desc: "Invite teammates with role-based permissions. Work together on the same site without stepping on each other's toes.",
      color: "#f3e8ff",
      accent: "#9333ea",
    },
  ];

  return (
    <section className="py-32 px-6" style={{ background: "#faf5ff" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-purple-500 font-semibold tracking-widest text-sm uppercase mb-4">
            Features
          </p>
          <h2
            className="text-5xl md:text-6xl font-black text-gray-900 leading-tight"
            
          >
            Everything you need,
            <br />
            <span className="text-purple-400">nothing you don't.</span>
          </h2>
          <p className="mt-6 text-gray-500 text-lg max-w-xl mx-auto">
            Every feature is purpose-built to help you create, launch, and grow
            — without friction.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl bg-white border border-purple-100 hover:border-purple-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-default"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible
                  ? "translateY(0) scale(1)"
                  : "translateY(30px) scale(0.95)",
                transitionDelay: `${i * 60}ms`,
                transitionProperty: "opacity, transform",
                boxShadow: "0 2px 20px rgba(147,51,234,0.05)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ background: f.color }}
              >
                <f.icon size={22} style={{ color: f.accent }} />
              </div>
              <h3
                className="text-base font-bold text-gray-900 mb-2"
                
              >
                {f.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   USE CASES
───────────────────────────────────────────── */
function UseCasesSection() {
  const { ref, visible } = useInView();
  const [active, setActive] = useState(0);

  const cases = [
    {
      icon: FiShoppingBag,
      label: "E-commerce",
      title: "Sell products online beautifully",
      desc: "Build a fully featured online store with product listings, a shopping cart, secure checkout, inventory management, and order tracking — all without a single line of code.",
      points: [
        "Product catalog & variants",
        "Secure payment integrations",
        "Order & inventory management",
        "Abandoned cart recovery",
      ],
    },
    {
      icon: FiBriefcase,
      label: "Business",
      title: "A professional web presence",
      desc: "Give your business the credibility it deserves. Create service pages, contact forms, team bios, and a blog to attract and convert clients from day one.",
      points: [
        "Service & pricing pages",
        "Lead capture forms",
        "Google Maps integration",
        "Client testimonials",
      ],
    },
    {
      icon: FiCamera,
      label: "Portfolio",
      title: "Showcase your creative work",
      desc: "Designers, photographers, and creatives deserve a portfolio as striking as their work. Display projects in cinematic galleries with custom case study layouts.",
      points: [
        "Filterable galleries",
        "Case study templates",
        "Password-protected projects",
        "Client-ready PDF export",
      ],
    },
    {
      icon: FiBook,
      label: "Blog & Media",
      title: "Publish and grow an audience",
      desc: "A powerful CMS for creators. Write, schedule, and categorize posts with SEO tools built in. Monetize with memberships and newsletter subscriptions.",
      points: [
        "Rich text & MDX editor",
        "Categories & tags",
        "Email newsletter sync",
        "Subscription paywall",
      ],
    },
  ];

  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-500 font-semibold tracking-widest text-sm uppercase mb-4">
            Use Cases
          </p>
          <h2
            className="text-5xl md:text-6xl font-black text-gray-900"
            
          >
            Built for every
            <br />
            <span className="text-purple-400">kind of creator.</span>
          </h2>
        </div>

        {/* Tabs */}
        <div ref={ref} className="flex flex-wrap justify-center gap-3 mb-12">
          {cases.map((c, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300"
              style={{
                background:
                  active === i
                    ? "linear-gradient(135deg,#9333ea,#c084fc)"
                    : "#faf5ff",
                color: active === i ? "white" : "#9e9e9e",
                border:
                  active === i ? "2px solid transparent" : "2px solid #f3e8ff",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <c.icon size={15} />
              {c.label}
            </button>
          ))}
        </div>

        {/* Active content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            key={active}
            className="animate-fade-in"
            style={{ animation: "fadeSlideIn 0.4s ease both" }}
          >
            <h3
              className="text-3xl font-black text-gray-900 mb-4"
              
            >
              {cases[active].title}
            </h3>
            <p className="text-gray-500 leading-relaxed mb-8">
              {cases[active].desc}
            </p>
            <ul className="space-y-3">
              {cases[active].points.map((pt, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                    <FiCheck size={11} className="text-purple-500" />
                  </div>
                  <span className="text-sm">{pt}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 group flex items-center gap-2 text-purple-500 font-semibold hover:gap-3 transition-all duration-300">
              Explore {cases[active].label} templates
              <FiArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          {/* Visual card */}
          <div
            key={`card-${active}`}
            className="relative rounded-3xl overflow-hidden h-80"
            style={{
              background: "linear-gradient(135deg, #f3e8ff 0%, #faf5ff 100%)",
              border: "2px solid #e9d5ff",
              animation: "fadeSlideIn 0.4s ease both",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {(() => {
                const Icon = cases[active].icon;
                return (
                  <div className="text-center">
                    <div
                      className="w-24 h-24 rounded-3xl bg-white shadow-lg flex items-center justify-center mx-auto mb-6"
                      style={{ boxShadow: "0 20px 50px rgba(147,51,234,0.15)" }}
                    >
                      <Icon size={44} className="text-purple-400" />
                    </div>
                    <p
                      className="text-purple-500 font-bold text-lg"
                      
                    >
                      {cases[active].label}
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      Template Collection
                    </p>
                  </div>
                );
              })()}
            </div>
            {/* Decorative circles */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-purple-100 opacity-50" />
            <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-purple-200 opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TECH STACK / HOW IT'S BUILT
───────────────────────────────────────────── */
function HowBuiltSection() {
  const { ref, visible } = useInView();
  const layers = [
    {
      layer: "Frontend Layer",
      items: [
        "React + Next.js Engine",
        "Custom Visual Editor",
        "Real-time Collaboration (WebSockets)",
        "Component Library (200+ blocks)",
      ],
      color: "#f3e8ff",
      border: "#a855f7",
    },
    {
      layer: "Infrastructure Layer",
      items: [
        "Global CDN Edge Network",
        "Auto SSL & Domain Management",
        "Auto-scaling Cloud Hosting",
        "99.99% Uptime SLA",
      ],
      color: "#faf5ff",
      border: "#e9d5ff",
    },
    {
      layer: "Data Layer",
      items: [
        "Headless CMS & Media Storage",
        "Form Submissions & CRM Sync",
        "Analytics & Event Tracking",
        "E-commerce Database",
      ],
      color: "#f3e8ff",
      border: "#a855f7",
    },
    {
      layer: "Integration Layer",
      items: [
        "10+ App Integrations",
        "Zapier & Make.com Support",
        "REST & GraphQL APIs",
        "Webhooks & Custom Code",
      ],
      color: "#faf5ff",
      border: "#e9d5ff",
    },
  ];

  return (
    <section
      className="py-32 px-6"
      style={{ background: "linear-gradient(180deg, #faf5ff 0%, white 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-purple-500 font-semibold tracking-widest text-sm uppercase mb-4">
              Architecture
            </p>
            <h2
              className="text-5xl font-black text-gray-900 leading-tight mb-6"
              
            >
              How the builder
              <br />
              <span className="text-purple-400">is engineered.</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Under the hood, our website builder is a multi-layered platform
              built on modern web technologies — designed for performance,
              reliability, and extensibility at scale.
            </p>
            <div className="space-y-3">
              {[
                "Visual DOM rendering with zero-lag WYSIWYG editing",
                "Diff-based publishing — only changed assets are pushed",
                "Built-in A/B testing at the edge",
                "Versioning with one-click rollbacks",
              ].map((pt, i) => (
                <div key={i} className="flex items-start gap-3">
                  <FiCheck
                    size={16}
                    className="text-purple-400 mt-0.5 shrink-0"
                  />
                  <span className="text-gray-600 text-sm">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          <div ref={ref} className="space-y-4">
            {layers.map((l, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 border-2 transition-all duration-700"
                style={{
                  background: l.color,
                  borderColor: l.border,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(40px)",
                  transitionDelay: `${i * 120}ms`,
                }}
              >
                <p className="text-xs font-black tracking-widest uppercase text-purple-500 mb-3">
                  {l.layer}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {l.items.map((item, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-2 text-xs text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   RESPONSIVE PREVIEW SECTION
───────────────────────────────────────────── */
function ResponsiveSection() {
  const { ref, visible } = useInView();
  const devices = [
    { icon: FiMonitor, label: "Desktop", w: "w-16", h: "h-12" },
    { icon: FiTablet, label: "Tablet", w: "w-10", h: "h-14" },
    { icon: FiSmartphone, label: "Mobile", w: "w-7", h: "h-12" },
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-purple-500 font-semibold tracking-widest text-sm uppercase mb-4">
          Responsive
        </p>
        <h2
          className="text-5xl md:text-6xl font-black text-gray-900 mb-6"
          
        >
          Looks perfect on
          <br />
          <span className="text-purple-400">every screen.</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-lg mx-auto mb-16">
          Your designs automatically adapt to every device. Switch between
          breakpoints instantly and fine-tune each view independently.
        </p>

        <div
          ref={ref}
          className="flex justify-center items-end gap-8 md:gap-16"
        >
          {devices.map((d, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-4 transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${i * 150}ms`,
              }}
            >
              <div
                className={`${d.w} ${d.h} rounded-lg bg-purple-50 border-2 border-purple-200 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer hover:border-purple-400 hover:bg-purple-100`}
                style={{ boxShadow: "0 8px 30px rgba(147,51,234,0.1)" }}
              >
                <d.icon size={20} className="text-purple-400" />
              </div>
              <span className="text-sm font-semibold text-gray-500">
                {d.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CTA SECTION
───────────────────────────────────────────── */
function CTASection() {
  const { ref, visible } = useInView();
  return (
    <section
      className="py-32 px-6 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #7e22ce 0%, #9333ea 50%, #c084fc 100%)",
      }}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-white opacity-5 blur-3xl" />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-3xl mx-auto text-center transition-all duration-1000"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
        }}
      >
        <FiTrendingUp size={48} className="text-white/60 mx-auto mb-8" />
        <h2
          className="text-5xl md:text-6xl font-black text-white mb-6"
          
        >
          Your website is
          <br />
          waiting for you.
        </h2>
        <p className="text-purple-100 text-xl mb-10 leading-relaxed">
          Join 50+ builders who launched their site without writing a single
          line of code.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="https://web.sellerslogin.com/vendor/registration">
          <button className="group flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-white text-purple-600 font-bold text-lg hover:bg-purple-50 transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl">
            Start Building for Free
            <FiArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button></Link>
        
        </div>
        <p className="text-purple-200 text-sm mt-6">
          No credit card required. Free forever plan available.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   KEYFRAME STYLES
───────────────────────────────────────────── */
const styles = `
  @keyframes float0 { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-20px) scale(1.05)} }
  @keyframes float1 { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-15px) rotate(5deg)} }
  @keyframes float2 { 0%,100%{transform:translateY(0) translateX(0)} 50%{transform:translateY(-25px) translateX(10px)} }
  @keyframes fadeSlideIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
  .animate-fade-in { animation: fadeSlideIn 0.6s ease both; }
`;

/* ─────────────────────────────────────────────
   PAGE EXPORT
───────────────────────────────────────────── */
export default function WebsiteBuilderPage() {
  return (
    <>
      <CustomCursor />
      <GlobalBackground />
      <ScrollRevealInit />
      <Navbar />
      <style>{styles}</style>
      <main className="font-sans">
        <HeroSection />
        <StatsSection />
        <HowItWorks />
        <FeaturesSection />
        <UseCasesSection />
        <HowBuiltSection />
        <ResponsiveSection />

        <CTASection />

        <FooterSection />
        <BackToTop />
      </main>
    </>
  );
}
