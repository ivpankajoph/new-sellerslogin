"use client";

import { useEffect, useRef, useState } from "react";
import { BackToTop } from "@/components/landing/BackToTop";
import { CustomCursor } from "@/components/landing/CustomCursor";
import { FooterSection } from "@/components/landing/FooterSection";
import { GlobalBackground } from "@/components/landing/GlobalBackground";
import { Navbar } from "@/components/landing/Navbar";
import { ScrollRevealInit } from "@/components/landing/ScrollRevealInit";
import {
  FiPackage,
  FiAlertCircle,
  FiTrendingUp,
  FiTrendingDown,
  FiRefreshCw,
  FiBarChart2,
  FiGrid,
  FiList,
  FiBell,
  FiTag,
  FiLayers,
  FiShoppingCart,
  FiArrowRight,
  FiCheck,
  FiZap,
  FiFilter,
  FiSearch,
  FiEdit3,
  FiTrash2,
  FiPlusCircle,
  FiDownload,
  FiUpload,
  FiEye,
  FiStar,
  FiBox,
  FiClock,
  FiMapPin,
  FiDollarSign,
  FiRepeat,
  FiSliders,
  FiActivity,
  FiCheckCircle,
  FiAlertTriangle,
  FiXCircle,
  FiArrowUp,
  FiArrowDown,
  FiMoreVertical,
} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface Product {
  id: number;
  name: string;
  sku: string;
  category: string;
  stock: number;
  threshold: number;
  price: number;
  sold: number;
  status: "in-stock" | "low" | "out";
}

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
      {/* Dot grid texture */}
      <div className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #e9d5ff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.35,
        }} />
      {/* Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute w-125 h-125 rounded-full blur-3xl opacity-25 -top-24 -right-24"
          style={{ background: "radial-gradient(circle, #a855f7, #f3e8ff)" }} />
        <div className="absolute w-100 h-100 rounded-full blur-3xl opacity-20 bottom-0 -left-20"
          style={{ background: "radial-gradient(circle, #e9d5ff, #faf5ff)" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
           
            <h1 className="text-6xl md:text-7xl font-black text-gray-900 leading-none mb-6"
              >
              Your store,
              <br />
              <span className="relative">
                always
                <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full"
                  style={{ background: "linear-gradient(90deg, #9333ea, #e9d5ff)" }} />
              </span>
              <br />
              in control.
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
              Track every product, variant, and warehouse location in real time. Get smart alerts before you run out, and reorder automatically — all from one elegant dashboard.
            </p>
            <div className="flex flex-wrap gap-4">
             <Link href="/vendor/registration">
              <button className="group flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ background: "linear-gradient(135deg,#9333ea,#c084fc)" }}>
                Start Managing
                <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button></Link>
          
            </div>

            {/* Trust row */}
            <div className="flex items-center gap-6 mt-10 pt-10 border-t border-purple-100">
              {[
                { icon: FiCheckCircle, text: "Real-time sync" },
                { icon: FiZap, text: "Auto reorder" },
                { icon: FiBell, text: "Smart alerts" },
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
                    <FiPackage size={14} className="text-white" />
                  </div>
                  <span className="font-bold text-gray-800 text-sm" >
                    Inventory Overview
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-gray-400">Live</span>
                </div>
              </div>

              {/* Stat chips */}
              <div className="grid grid-cols-3 gap-3 p-4 border-b border-purple-50">
                {[
                  { label: "Total SKUs", value: "1,248", icon: FiBox, color: "#f3e8ff", text: "#9333ea" },
                  { label: "Low Stock", value: "14", icon: FiAlertTriangle, color: "#fff3e0", text: "#f57c00" },
                  { label: "Out of Stock", value: "3", icon: FiXCircle, color: "#f3e8ff", text: "#c62828" },
                ].map((s, i) => (
                  <div key={i} className="rounded-xl p-3 text-center" style={{ background: s.color }}>
                    <s.icon size={16} className="mx-auto mb-1" style={{ color: s.text }} />
                    <p className="text-xs font-bold" style={{ color: s.text }}>{s.value}</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Mini product rows */}
              <div className="p-4 space-y-2">
                {[
                  { name: "Classic Tote Bag", sku: "TBG-001", stock: 84, status: "in-stock" },
                  { name: "Silk Scrunchie Set", sku: "SCR-014", stock: 6, status: "low" },
                  { name: "Rose Gold Earrings", sku: "ERG-007", stock: 0, status: "out" },
                  { name: "Linen Blazer — Ivory", sku: "BLZ-023", stock: 31, status: "in-stock" },
                ].map((p, i) => (
                  <div key={i} className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-purple-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-purple-100 flex items-center justify-center">
                        <FiPackage size={12} className="text-purple-400" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-800">{p.name}</p>
                        <p className="text-[10px] text-gray-400">{p.sku}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-gray-700">{p.stock} units</span>
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                        style={{
                          background: p.status === "in-stock" ? "#e8f5e9" : p.status === "low" ? "#fff3e0" : "#f3e8ff",
                          color: p.status === "in-stock" ? "#2e7d32" : p.status === "low" ? "#e65100" : "#c62828",
                        }}
                      >
                        {p.status === "in-stock" ? "In Stock" : p.status === "low" ? "Low" : "Out"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mini bar chart */}
              <div className="px-4 pb-4">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Weekly Sales Velocity</p>
                <div className="flex items-end gap-1 h-12">
                  {[40, 65, 50, 80, 55, 90, 72].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-sm transition-all duration-700"
                      style={{
                        height: `${h}%`,
                        background: i === 5 ? "linear-gradient(180deg,#9333ea,#a855f7)" : "#f3e8ff",
                      }} />
                  ))}
                </div>
                <div className="flex justify-between mt-1">
                  {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                    <span key={i} className="flex-1 text-center text-[9px] text-gray-400">{d}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating alert card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-4 py-3 border-2 border-purple-200 flex items-center gap-3"
              style={{ boxShadow: "0 12px 40px rgba(147,51,234,0.1)" }}>
              <div className="w-8 h-8 rounded-xl bg-purple-200 flex items-center justify-center flex-shrink-0">
                <FiBell size={14} className="text-purple-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">Low Stock Alert</p>
                <p className="text-[10px] text-gray-400">Silk Scrunchie — 6 left</p>
              </div>
            </div>

            {/* Floating reorder card */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 border-2 border-purple-100 flex items-center gap-3"
              style={{ boxShadow: "0 12px 40px rgba(147,51,234,0.1)" }}>
              <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#9333ea,#c084fc)" }}>
                <FiRepeat size={13} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">Auto-Reorder</p>
                <p className="text-[10px] text-green-500 font-semibold">Triggered</p>
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
    { value: 99.9, suffix: "%", label: "Inventory Accuracy", prefix: "", decimals: 1 },
    { value: 24, suffix: "+", label: "Products Supported", prefix: "", decimals: 0 },
    { value: 38, suffix: "%", label: "Fewer Stockouts", prefix: "", decimals: 0 },
    { value: 12, suffix: "min", label: "Avg Setup Time", prefix: "<", decimals: 0 },
  ];
  return (
    <section ref={ref} className="py-16 px-6"
      style={{ background: "linear-gradient(135deg,#f3e8ff 0%,#faf5ff 50%,#f3e8ff 100%)" }}>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="text-center transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transitionDelay: `${i * 100}ms` }}>
            <p className="text-4xl md:text-5xl font-black text-gray-900 mb-1" >
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
   INTERACTIVE INVENTORY TABLE DEMO
───────────────────────────────────────────── */
const DEMO_PRODUCTS: Product[] = [
  { id: 1, name: "Classic Tote Bag", sku: "TBG-001", category: "Bags", stock: 84, threshold: 20, price: 49.99, sold: 142, status: "in-stock" },
  { id: 2, name: "Silk Scrunchie Set", sku: "SCR-014", category: "Accessories", stock: 6, threshold: 15, price: 14.99, sold: 89, status: "low" },
  { id: 3, name: "Rose Gold Earrings", sku: "ERG-007", category: "Jewelry", stock: 0, threshold: 10, price: 29.99, sold: 56, status: "out" },
  { id: 4, name: "Linen Blazer — Ivory", sku: "BLZ-023", category: "Clothing", stock: 31, threshold: 10, price: 119.99, sold: 63, status: "in-stock" },
  { id: 5, name: "Pearl Drop Necklace", sku: "NCK-011", category: "Jewelry", stock: 8, threshold: 12, price: 39.99, sold: 34, status: "low" },
  { id: 6, name: "Canvas Weekend Bag", sku: "WKD-003", category: "Bags", stock: 52, threshold: 15, price: 89.99, sold: 201, status: "in-stock" },
];

function InventoryTableDemo() {
  const { ref, visible } = useInView();
  const [filter, setFilter] = useState<"all" | "in-stock" | "low" | "out">("all");
  const [search, setSearch] = useState("");

  const filtered = DEMO_PRODUCTS.filter(p => {
    const matchFilter = filter === "all" || p.status === filter;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.sku.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const statusConfig = {
    "in-stock": { label: "In Stock", bg: "#e8f5e9", color: "#2e7d32", icon: FiCheckCircle },
    low: { label: "Low Stock", bg: "#fff3e0", color: "#e65100", icon: FiAlertTriangle },
    out: { label: "Out of Stock", bg: "#f3e8ff", color: "#c62828", icon: FiXCircle },
  };

  return (
    <section className="py-32 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-500 font-semibold tracking-widest text-sm uppercase mb-4">Live Dashboard</p>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900" >
            Your inventory,
            <br />
            <span className="text-purple-400">at a glance.</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            A fully interactive product table with live stock levels, status badges, and inline controls — everything visible in one place.
          </p>
        </div>

        <div ref={ref} className="rounded-3xl border-2 border-purple-100 overflow-hidden bg-white transition-all duration-1000"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            boxShadow: "0 30px 80px rgba(147,51,234,0.08)",
          }}>
          {/* Toolbar */}
          <div className="px-6 py-4 border-b border-purple-50 flex flex-wrap items-center gap-4"
            style={{ background: "#faf5ff" }}>
            {/* Search */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 bg-white flex-1 min-w-48">
              <FiSearch size={14} className="text-purple-400" />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search products or SKU…"
                className="text-sm text-gray-600 outline-none bg-transparent w-full placeholder-gray-400"
              />
            </div>
            {/* Filters */}
            <div className="flex gap-2">
              {(["all", "in-stock", "low", "out"] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className="px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200"
                  style={{
                    background: filter === f ? "linear-gradient(135deg,#9333ea,#c084fc)" : "white",
                    color: filter === f ? "white" : "#9e9e9e",
                    border: filter === f ? "2px solid transparent" : "2px solid #f3e8ff",
                  }}
                >
                  {f === "all" ? "All" : f === "in-stock" ? "In Stock" : f === "low" ? "Low" : "Out"}
                </button>
              ))}
            </div>
            {/* Actions */}
            <div className="flex items-center gap-2 ml-auto">
              <button className="p-2 rounded-full border border-purple-200 text-purple-400 hover:bg-purple-50 transition-colors">
                <FiDownload size={14} />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-bold transition-all hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg,#9333ea,#c084fc)" }}>
                <FiPlusCircle size={13} />
                Add Product
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-purple-50">
                  {["Product", "SKU", "Category", "Stock", "Threshold", "Price", "Sold", "Status", ""].map((h, i) => (
                    <th key={i} className="text-left px-6 py-3 text-xs font-black text-gray-400 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((p, i) => {
                  const sc = statusConfig[p.status];
                  const StatusIcon = sc.icon;
                  const stockPct = Math.min((p.stock / (p.threshold * 3)) * 100, 100);
                  return (
                    <tr key={p.id}
                      className="border-b border-purple-50 hover:bg-purple-50/40 transition-colors group"
                      style={{ animationDelay: `${i * 60}ms` }}>
                      {/* Product */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center flex-shrink-0">
                            <FiPackage size={14} className="text-purple-400" />
                          </div>
                          <span className="text-sm font-semibold text-gray-800">{p.name}</span>
                        </div>
                      </td>
                      {/* SKU */}
                      <td className="px-6 py-4">
                        <span className="text-xs font-mono text-gray-400 bg-gray-50 px-2 py-1 rounded">{p.sku}</span>
                      </td>
                      {/* Category */}
                      <td className="px-6 py-4">
                        <span className="text-xs text-purple-500 bg-purple-50 px-2 py-1 rounded-full font-medium">{p.category}</span>
                      </td>
                      {/* Stock */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-1.5 bg-purple-100 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-700"
                              style={{
                                width: `${stockPct}%`,
                                background: p.status === "in-stock" ? "#66bb6a" : p.status === "low" ? "#ffa726" : "#ef5350",
                              }}
                            />
                          </div>
                          <span className="text-sm font-bold text-gray-700">{p.stock}</span>
                        </div>
                      </td>
                      {/* Threshold */}
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-500">{p.threshold}</span>
                      </td>
                      {/* Price */}
                      <td className="px-6 py-4">
                        <span className="text-sm font-semibold text-gray-800">${p.price.toFixed(2)}</span>
                      </td>
                      {/* Sold */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <FiTrendingUp size={12} className="text-green-400" />
                          {p.sold}
                        </div>
                      </td>
                      {/* Status */}
                      <td className="px-6 py-4">
                        <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-full w-fit"
                          style={{ background: sc.bg, color: sc.color }}>
                          <StatusIcon size={11} />
                          {sc.label}
                        </span>
                      </td>
                      {/* Actions */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-1.5 rounded-full hover:bg-purple-100 text-purple-400 transition-colors">
                            <FiEdit3 size={13} />
                          </button>
                          <button className="p-1.5 rounded-full hover:bg-purple-200 text-purple-600 transition-colors">
                            <FiTrash2 size={13} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="px-6 py-3 border-t border-purple-50 flex items-center justify-between"
            style={{ background: "#faf5ff" }}>
            <span className="text-xs text-gray-400">{filtered.length} of {DEMO_PRODUCTS.length} products</span>
            <span className="text-xs text-purple-400 font-semibold">Last synced: just now</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FEATURES — INVENTORY SPECIFIC
───────────────────────────────────────────── */
function FeaturesSection() {
  const { ref, visible } = useInView();
  const features = [
    {
      icon: FiBell,
      title: "Smart Low-Stock Alerts",
      desc: "Set custom thresholds per product or category. Get notified via email, SMS, or in-app before you ever run out.",
    },
    {
      icon: FiRepeat,
      title: "Automatic Reordering",
      desc: "Define reorder rules once. When stock drops below your threshold, purchase orders are drafted or sent automatically.",
    },
    {
      icon: FiActivity,
      title: "Real-Time Stock Sync",
      desc: "Every sale, return, or manual adjustment is reflected instantly across all sales channels — no lag, no drift.",
    },
    {
      icon: FiMapPin,
      title: "Multi-Location Tracking",
      desc: "Manage stock across multiple warehouses, stores, or fulfillment centers from a single unified dashboard.",
    },
    {
      icon: FiLayers,
      title: "Variant Management",
      desc: "Track each size, color, or bundle variant as its own SKU, with independent stock levels and reorder rules.",
    },
 
    {
      icon: FiDownload,
      title: "Bulk Import & Export",
      desc: "Import products via CSV or connect your supplier catalog. Export reports for accounting, audits, or analysis.",
    },

  ];

  return (
    <section className="py-32 px-6" style={{ background: "#faf5ff" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-purple-500 font-semibold tracking-widest text-sm uppercase mb-4">Features</p>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900" >
            Stock management
            <br />
            <span className="text-purple-400">done right.</span>
          </h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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
              <h3 className="text-sm font-bold text-gray-900 mb-2" >{f.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ALERT & REORDER FLOW SECTION
───────────────────────────────────────────── */
function AlertFlowSection() {
  const { ref, visible } = useInView();
  const steps = [
    {
      icon: FiActivity,
      title: "Stock is tracked",
      desc: "Every sale, return, and adjustment updates inventory in real time across all channels.",
      color: "#f3e8ff",
    },
    {
      icon: FiAlertTriangle,
      title: "Threshold reached",
      desc: "When stock drops below your defined minimum, the system flags it immediately.",
      color: "#fff3e0",
    },
    {
      icon: FiBell,
      title: "Alert is fired",
      desc: "You receive an instant notification via email, Slack, or in-app — your choice.",
      color: "#f3e8ff",
    },
    {
      icon: FiRepeat,
      title: "Reorder is triggered",
      desc: "A purchase order is auto-drafted or sent directly to your supplier based on your rules.",
      color: "#e8f5e9",
    },
    {
      icon: FiCheckCircle,
      title: "Stock is replenished",
      desc: "Received stock is logged, and your dashboard updates to reflect the new levels instantly.",
      color: "#f3e8ff",
    },
  ];

  return (
    <section className="py-32 px-6 bg-transparent overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-purple-500 font-semibold tracking-widest text-sm uppercase mb-4">Alert System</p>
          <h2 className="text-5xl font-black text-gray-900" >
            Never run out of stock
            <br />
            <span className="text-purple-400">again.</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-md mx-auto">
            Our automated alert and reorder pipeline means you're always one step ahead of demand.
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
                  <p className="font-bold text-gray-900 text-sm mb-1" >{s.title}</p>
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
   ANALYTICS PREVIEW SECTION
───────────────────────────────────────────── */
function AnalyticsSection() {
  const { ref, visible } = useInView();
  const bars = [42, 67, 55, 80, 62, 95, 74, 88, 60, 78, 91, 69];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <section className="py-32 px-6" style={{ background: "linear-gradient(180deg,#faf5ff,white)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-purple-500 font-semibold tracking-widest text-sm uppercase mb-4">Analytics</p>
            <h2 className="text-5xl font-black text-gray-900 mb-6" >
              Understand your
              <br />
              <span className="text-purple-400">stock performance.</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Built-in analytics surface your fastest-moving products, seasonal trends, dead stock, and supplier performance — so every restocking decision is backed by data.
            </p>
            <div className="space-y-4">
              {[
                { icon: FiTrendingUp, text: "Top-selling products by revenue and units", color: "text-green-500" },
                { icon: FiTrendingDown, text: "Dead stock flagged before it hurts margins", color: "text-purple-600" },
                { icon: FiClock, text: "Lead time analysis per supplier", color: "text-purple-500" },
                { icon: FiDollarSign, text: "COGS and margin tracking per SKU", color: "text-purple-500" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <item.icon size={16} className={item.color} />
                  <span className="text-gray-600 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — chart card */}
          <div ref={ref} className="rounded-3xl bg-white border-2 border-purple-100 p-6 transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(40px)",
              boxShadow: "0 24px 60px rgba(147,51,234,0.08)",
            }}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="font-bold text-gray-900 text-sm" >Monthly Stock Turnover</p>
                <p className="text-gray-400 text-xs mt-0.5">Units sold / average stock on hand</p>
              </div>
              <div className="flex items-center gap-1 text-green-500 bg-green-50 px-3 py-1.5 rounded-full">
                <FiArrowUp size={12} />
                <span className="text-xs font-bold">+14.2%</span>
              </div>
            </div>

            <div className="flex items-end gap-2 h-36">
              {bars.map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-lg transition-all duration-700"
                    style={{
                      height: visible ? `${h}%` : "0%",
                      transitionDelay: `${i * 60}ms`,
                      background: i === 5 || i === 10
                        ? "linear-gradient(180deg,#9333ea,#a855f7)"
                        : "#f3e8ff",
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-2">
              {months.map((m, i) => (
                <span key={i} className="flex-1 text-center text-[9px] text-gray-400">{m}</span>
              ))}
            </div>

            {/* Mini KPI row */}
            <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-purple-50">
              {[
                { label: "Avg Turnover", value: "4.2x" },
                { label: "Best Month", value: "Jun" },
                { label: "Dead Stock", value: "3 SKUs" },
              ].map((kpi, i) => (
                <div key={i} className="text-center">
                  <p className="font-black text-gray-900 text-lg" >{kpi.value}</p>
                  <p className="text-gray-400 text-[10px] mt-0.5">{kpi.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



/* ─────────────────────────────────────────────
   MULTI-LOCATION SECTION
───────────────────────────────────────────── */
function MultiLocationSection() {
  const { ref, visible } = useInView();


  return (
    <section className="py-32 px-6" style={{ background: "#faf5ff" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div ref={ref} className="relative rounded-3xl overflow-hidden drop-shadow-2xl border border-purple-100 flex items-center justify-center transition-all duration-700" style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-30px)" }}>
            <Image
              src="/images/inventory-tracking.png"
              alt="Inventory Dashboard"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right — copy */}
          <div>
            <p className="text-purple-500 font-semibold tracking-widest text-sm uppercase mb-4">Multi-Location</p>
            <h2 className="text-5xl font-black text-gray-900 mb-6" >
              One dashboard.
              <br />
              <span className="text-purple-400">Every Inventory.</span>
            </h2>
          
            <div className="space-y-3">
              {[
                "Transfer stock between locations in seconds",
                "Location-specific low-stock thresholds",
                "Fulfillment routing based on proximity",
                "Per-location profit and loss reporting",
              ].map((pt, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <FiCheck size={10} className="text-purple-500" />
                  </div>
                  <span className="text-gray-600 text-sm">{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TESTIMONIALS
───────────────────────────────────────────── */
function TestimonialsSection() {
  const { ref, visible } = useInView();
  const testimonials = [
    {
      quote: "Stockouts used to happen every other week. Since we set up the auto-reorder rules, we haven't had a single one in six months.",
      name: "Layla T.",
      role: "Owner, Petal & Co.",
      initials: "LT",
    },
    {
      quote: "Managing inventory across three locations was a nightmare. Now I see everything in one place and transfers take about 30 seconds.",
      name: "David K.",
      role: "Ops Manager, Hatch Supply",
      initials: "DK",
    },
    {
      quote: "The demand forecasting actually works. It flagged a seasonal spike two weeks early and we had stock in place before the rush hit.",
      name: "Meera S.",
      role: "Founder, Sundrop Skincare",
      initials: "MS",
    },
  ];

  return (
    <section className="py-32 px-6" style={{ background: "linear-gradient(135deg,#f3e8ff 0%,#faf5ff 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-500 font-semibold tracking-widest text-sm uppercase mb-4">Testimonials</p>
          <h2 className="text-5xl font-black text-gray-900" >
            Trusted by <span className="text-purple-400">store owners.</span>
          </h2>
        </div>
        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i}
              className="bg-white rounded-3xl p-8 border border-purple-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transitionDelay: `${i * 120}ms`,
                boxShadow: "0 4px 24px rgba(147,51,234,0.07)",
              }}>
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <FiStar key={j} size={13} style={{ fill: "#e9d5ff", color: "#a855f7" }} />
                ))}
              </div>
              <p className="text-gray-700 text-sm italic leading-relaxed mb-6" >
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
        <FiPackage size={48} className="text-white/50 mx-auto mb-8" />
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6" >
          Take control of
          <br />
          your stock today.
        </h2>
        <p className="text-purple-100 text-xl mb-10 leading-relaxed">
          Set up your inventory in minutes. No spreadsheets, no guesswork — just clarity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
         <Link href="/vendor/registration">
          <button className="group flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-white text-purple-600 font-bold text-lg hover:bg-purple-50 transition-all hover:-translate-y-1 shadow-lg">
            Start Free
            <FiArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button></Link>
      
        </div>
        <p className="text-white text-sm mt-6">No credit card required. Free forever plan available.</p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   STYLES
───────────────────────────────────────────── */
const styles = `
  @keyframes fadeSlideIn { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
`;

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function InventoryManagementPage() {
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
        <InventoryTableDemo />
        <FeaturesSection />
        <AlertFlowSection />
        <AnalyticsSection />
        <MultiLocationSection />
      
        <CTASection />
        <FooterSection />
        <BackToTop />
      </main>
    </>
  );
}