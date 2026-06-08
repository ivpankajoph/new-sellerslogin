"use client";

import { 
  ShoppingCart, 
  Shirt, 
  Coffee, 
  Heart, 
  Laptop, 
  Home, 
  Wrench, 
  Building2 
} from "lucide-react";

const industries = [
  { name: "Retail", icon: ShoppingCart, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { name: "Fashion", icon: Shirt, color: "text-pink-500", bg: "bg-pink-500/10", border: "border-pink-500/20" },
  { name: "Food & Beverage", icon: Coffee, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20" },
  { name: "Health & Beauty", icon: Heart, color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20" },
  { name: "Electronics", icon: Laptop, color: "text-indigo-500", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
  { name: "Home & Furniture", icon: Home, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
  { name: "Services", icon: Wrench, color: "text-slate-500", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  { name: "B2B & Wholesale", icon: Building2, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16 md:mb-24">
          <div className="reveal inline-flex items-center bg-purple-50 border border-purple-200 text-purple-700 rounded-full py-1.5 px-4 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            Industry we serve
          </div>
          <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight mt-4">
            From selling to Automation <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              and Automation to Growth
            </span>
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
