"use client";

import { 
  ShoppingCart, 
  Shirt, 
  Utensils, 
  Heart, 
  Globe, 
  Building, 
  Factory, 
  Box,
  Store,
  Cloud,
  Activity,
  Pill,
  Landmark,
  BedDouble,
  Plane,
  Truck,
  Package,
  Users,
  Briefcase,
  GraduationCap,
  Car
} from "lucide-react";

const industries = [
  { name: "Manufacturing", icon: Factory, color: "text-slate-500", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  { name: "Real Estate", icon: Building, color: "text-teal-500", bg: "bg-teal-500/10", border: "border-teal-500/20" },
  { name: "Fashion", icon: Shirt, color: "text-pink-500", bg: "bg-pink-500/10", border: "border-pink-500/20" },
  { name: "D2C", icon: Box, color: "text-indigo-500", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
  { name: "Food", icon: Utensils, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20" },
  { name: "Restaurants", icon: Store, color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20" },
  { name: "SaaS", icon: Cloud, color: "text-sky-500", bg: "bg-sky-500/10", border: "border-sky-500/20" },
  { name: "Healthcare", icon: Activity, color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20" },
  { name: "Pharmaceutical", icon: Pill, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
  { name: "Banking", icon: Landmark, color: "text-emerald-600", bg: "bg-emerald-600/10", border: "border-emerald-600/20" },
  { name: "Hospitality", icon: BedDouble, color: "text-rose-500", bg: "bg-rose-500/10", border: "border-rose-500/20" },
  { name: "Tourism", icon: Plane, color: "text-cyan-500", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
  { name: "Ecommerce", icon: Globe, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  { name: "Retail", icon: ShoppingCart, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { name: "Logistics", icon: Truck, color: "text-yellow-600", bg: "bg-yellow-600/10", border: "border-yellow-600/20" },
  { name: "FMCG", icon: Package, color: "text-lime-600", bg: "bg-lime-600/10", border: "border-lime-600/20" },
  { name: "Human Resource", icon: Users, color: "text-fuchsia-500", bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/20" },
  { name: "Professional Services", icon: Briefcase, color: "text-stone-500", bg: "bg-stone-500/10", border: "border-stone-500/20" },
  { name: "Education", icon: GraduationCap, color: "text-violet-500", bg: "bg-violet-500/10", border: "border-violet-500/20" },
  { name: "Automotive", icon: Car, color: "text-slate-800", bg: "bg-slate-800/10", border: "border-slate-800/20" },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16 md:mb-24">
          <h2 className="reveal text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            Industry We Serve
          </h2>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 reveal reveal-delay-2">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl border ${industry.border} ${industry.bg} hover:-translate-y-1 transition-transform duration-300 backdrop-blur-sm group`}
            >
              <div className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl bg-white shadow-sm mb-4 transition-transform duration-300 group-hover:scale-110`}>
                <industry.icon className={`w-8 h-8 sm:w-10 sm:h-10 ${industry.color}`} />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 text-center">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
