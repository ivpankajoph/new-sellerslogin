import React from "react";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Sellers Login gave me the power to scale to 3 stores seamlessly. Their inventory tools saved me 20 hours a week.",
      author: "Aditi Rao",
      title: "Founder, StyleVogue",
      rating: 5,
    },
    {
      quote: "The 1.5% transaction fee on the Growth plan is unbeatable. We immediately saw a 12% increase in our margins.",
      author: "Rajiv Menon",
      title: "CEO, TechHaven Electronics",
      rating: 5,
    },
    {
      quote: "Our switch to the Enterprise tier was flawless. The dedicated account manager helped us migrate 10,000 products overnight.",
      author: "Sarah Jenkins",
      title: "Director of E-commerce, GlobalBrands",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-violet-950 text-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
      
      {/* Background decorations */}
      <div className="absolute -left-40 -top-40 w-96 h-96 bg-violet-600/30 blur-[100px] rounded-full"></div>
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-fuchsia-600/20 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl mb-4 text-white">
            Trusted by fast-growing brands
          </h2>
          <p className="text-lg text-violet-200 leading-relaxed">
            See why thousands of sellers choose us to power their online businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:bg-white/10 transition-colors">
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-lg text-white mb-8 leading-relaxed font-medium">"{t.quote}"</p>
              <div>
                <div className="font-bold text-white">{t.author}</div>
                <div className="text-sm text-violet-300">{t.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
