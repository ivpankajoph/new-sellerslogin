"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import type { LandingIconName } from "@/components/icons/LandingIcon";
import { LandingIcon } from "@/components/icons/LandingIcon";
import { images } from "@/lib/images";

const tabs = [
  { id: "tab-builder", label: "Website Builder" },
  { id: "tab-dashboard", label: "Seller Dashboard" },
  { id: "tab-analytics", label: "Analytics" },
  { id: "tab-marketing", label: "Marketing Tools" },
  { id: "tab-inventory", label: "Inventory" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const showcaseCategories = [
  { image: images.heroFashion, name: "T-Shirts", tag: "Apparel" },
  { image: images.showcaseFashion, name: "Dresses", tag: "Womenswear" },
  { image: images.productShoes, name: "Footwear", tag: "Sneakers" },
];

const iconPanels: {
  id: TabId;
  icon: LandingIconName;
  title: string;
  text: string;
}[] = [
  {
    id: "tab-analytics",
    icon: "bar-chart",
    title: "Real-Time Analytics",
    text: "Track every sale, visitor, and conversion in real time with beautiful, actionable dashboards.",
  },
  {
    id: "tab-marketing",
    icon: "megaphone",
    title: "Marketing Automation",
    text: "Set up email flows, SMS campaigns, and retargeting ads that run on autopilot 24/7.",
  },
  {
    id: "tab-inventory",
    icon: "warehouse",
    title: "Inventory Management",
    text: "Never oversell. Track stock across multiple warehouses with smart alerts and automation.",
  },
];

export function ShowcaseSection() {
  const [activeTab, setActiveTab] = useState<TabId>("tab-builder");

  const handleTabChange = useCallback((tabId: TabId) => {
    setActiveTab(tabId);
    // Optional: Add smooth scroll to section on tab change
    // document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <section id="showcase" className="relative py-10 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      {/* Light Overlay to keep text readable */}
      <div className="absolute inset-0  z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <header className="text-center mb-6 md:mb-8">
          <div className="reveal inline-flex items-center bg-white  rounded-full py-1.5 px-4 text-xs font-bold uppercase tracking-wider mb-4">
            Product Tour
          </div>
          <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl lg:text-5xl font-bold  leading-tight tracking-tight text-white">
            See it in action
          </h2>
        </header>

        {/* Tab Navigation */}
        <div className="reveal reveal-delay-2 flex flex-wrap items-center justify-center gap-2 mb-6 md:mb-8" role="tablist" aria-label="Product features">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={tab.id}
                id={`${tab.id}-trigger`}
                onClick={() => handleTabChange(tab.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 border ${
                  isActive
                    ? "bg-purple-200 text-black border-purple-300 shadow-sm"
                    : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                } focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 cursor-pointer`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Panels with Smooth Transitions */}
        <div className="relative max-w-3xl mx-auto">
          {/* Builder Tab */}
          <TabPanel id="tab-builder" activeTab={activeTab}>
            <div className="bg-white rounded-2xl p-4 md:p-8 shadow-2xl">
              <div className="border border-gray-200 rounded-xl overflow-hidden bg-gray-100">
                {/* Browser Chrome */}
                <div className="bg-white border-b border-gray-200 py-2 px-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <span className="bg-gray-100 text-gray-500 text-[10px] md:text-xs py-1 px-3 md:px-4 rounded-md mx-auto font-sans truncate">
                    mystore.sellerslogin.com
                  </span>
                </div>
                {/* Preview Content */}
                <div className="p-3 md:p-5 flex flex-col gap-4">
                  <div className="w-full aspect-2/1 md:aspect-3/1 relative rounded-lg overflow-hidden">
                    <Image
                      src={images.showcaseFashion}
                      alt="Fashion storefront preview"
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, 900px"
                      priority={false}
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-2 md:gap-3">
                    {showcaseCategories.map((cat) => (
                      <div key={cat.name} className="relative aspect-square rounded-lg overflow-hidden group">
                        <Image
                          src={cat.image}
                          alt={cat.name}
                          fill
                          sizes="(max-width: 768px) 33vw, 180px"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-2 md:p-4 ">
                          <div className="text-xs md:text-sm font-bold">{cat.name}</div>
                          <div className="text-[10px] md:text-xs text-gray-200">{cat.tag}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          {/* Dashboard Tab */}
          <TabPanel id="tab-dashboard" activeTab={activeTab}>
            <div className="bg-white rounded-2xl p-4 md:p-8 shadow-2xl">
              <div className="flex flex-col gap-5 md:gap-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                  {[
                    { label: "Orders", val: "1,284", ch: "↑ +18%" },
                    { label: "New Customers", val: "318", ch: "↑ +12%" },
                    { label: "Visitors", val: "33.7K", ch: "↑ +23%" },
                    { label: "Conv. Rate", val: "3.8%", ch: "↑ +0.4%" },
                  ].map((s) => (
                    <div key={s.label} className="bg-gray-100 rounded-xl p-3 md:p-4 border border-gray-200">
                      <div className="text-xs text-gray-500 mb-1 md:mb-2">{s.label}</div>
                      <div className="text-lg md:text-2xl font-bold text-gray-900 mb-0.5 md:mb-1">{s.val}</div>
                      <div className="text-[10px] md:text-xs font-semibold text-green-600">{s.ch}</div>
                    </div>
                  ))}
                </div>
                {/* Top Products */}
                <div className="bg-gray-100 rounded-xl p-4 md:p-5 border border-gray-200">
                  <div className="text-sm font-bold text-gray-900 mb-3 md:mb-4">Top Products</div>
                  {[
                    { name: "Nike Air Max 2024", val: "412 sold", w: "75%" },
                    { name: "Premium Hoodie Set", val: "286 sold", w: "52%" },
                    { name: "Wireless Earbuds Pro", val: "203 sold", w: "39%" },
                  ].map((p, i) => (
                    <div key={p.name} className="mb-3 last:mb-0">
                      <div className="flex items-center justify-between text-xs font-medium text-gray-900 mb-1.5">
                        <span className="truncate pr-2">{p.name}</span>
                        <span className="text-gray-500 font-normal shrink-0">{p.val}</span>
                      </div>
                      <div className="h-1.5 md:h-2 bg-gray-300 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: p.w,
                            background: i === 0 ? "#111827" : i === 1 ? "#374151" : "#6b7280",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabPanel>

          {/* Icon Panels (Analytics, Marketing, Inventory) */}
          {iconPanels.map((panel) => (
            <TabPanel key={panel.id} id={panel.id} activeTab={activeTab}>
              <div className="bg-white rounded-2xl p-6 md:p-10 shadow-2xl flex flex-col items-center text-center py-12 md:py-16">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 text-gray-900 rounded-xl flex items-center justify-center mb-5 md:mb-6">
                  <LandingIcon name={panel.icon} size={32} className="md:w-12 md:h-12" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">{panel.title}</h3>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-md">{panel.text}</p>
              </div>
            </TabPanel>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .tab-panel {
          animation: fadeIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </section>
  );
}

// Reusable Tab Panel Component with Smooth Transitions
function TabPanel({
  id,
  activeTab,
  children,
}: {
  id: string;
  activeTab: string;
  children: React.ReactNode;
}) {
  const isActive = activeTab === id;
  
  return (
    <div
      id={id}
      role="tabpanel"
      aria-labelledby={`${id}-trigger`}
      hidden={!isActive}
      className={`tab-panel ${isActive ? "block" : "hidden"}`}
    >
      {children}
    </div>
  );
}