"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { LandingIcon } from "@/components/icons/LandingIcon";

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const text1 = "The World's Most Advance ";
  const text2 = "AI Powered Online Store";
  const text3 = " with Automations";
  const totalChars = text1.length + text2.length + text3.length;

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (charIndex < totalChars) {
      timeout = setTimeout(() => setCharIndex((prev) => prev + 1), 60);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, totalChars]);

  return (
    <>
      <section id="hero" className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/background2.mp4" type="video/mp4" />
          {/* Fallback */}
          <div className="absolute inset-0" />
        </video>

        {/* Light Overlay to keep text readable */}
        <div className="absolute inset-0  z-0 pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center flex flex-col items-center">
          <h1 className="text-[clamp(40px,6vw,72px)] font-bold text-white leading-[1.1] tracking-tight mb-6">
            {text1.slice(0, charIndex)}
            <span className="opacity-0">{text1.slice(charIndex)}</span>

            <span className="text-purple-200">
              {text2.slice(0, Math.max(0, charIndex - text1.length))}
              <span className="opacity-0">{text2.slice(Math.max(0, charIndex - text1.length))}</span>
            </span>

            <br className="hidden sm:block" />

            {text3.slice(0, Math.max(0, charIndex - text1.length - text2.length))}
            <span className="opacity-0">{text3.slice(Math.max(0, charIndex - text1.length - text2.length))}</span>
            
            <span className={`animate-pulse ${charIndex >= totalChars ? 'opacity-0' : 'opacity-100'}`}>|</span>
          </h1>

          <p className="reveal reveal-delay-1 text-base md:text-lg lg:text-xl font-normal text-white leading-relaxed max-w-2xl mx-auto mb-10">
            The all-in-one e-commerce platform trusted by many businesses
            worldwide. Create, manage, and scale your online store with powerful
            automations and marketing tools.
          </p>

          <div className="reveal reveal-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
            <Link
              href="https://web.sellerslogin.com/vendor/registration"
              target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto text-center inline-block bg-purple-200 text-black text-[15px] font-medium py-3.5 px-8 rounded-full border border-purple-300 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-purple-300 hover:shadow-md active:translate-y-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 no-underline"
            >
              Start Free Trial
            </Link>
            <button
              type="button"
              onClick={() => setIsVideoOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-300 text-gray-900 text-[15px] font-medium py-3.5 px-8 rounded-full transition-all duration-200 hover:border-gray-900 hover:bg-white cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
            >
              <LandingIcon name="play" size={16} />
              Watch Demo
            </button>
          </div>

          <div className="reveal reveal-delay-3 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {[
              { value: "40+", label: "Supported Markets" },
              { value: "135+", label: "Currencies" },
              { value: "24×7", label: "Seller Support" },
              { value: "5 min", label: "Avg Launch" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white leading-none mb-1 md:mb-2">{value}</div>
                <div className="text-xs md:text-sm text-white font-bold uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ease-out ${
          isVideoOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsVideoOpen(false)}
        />
        <div 
          className={`relative w-full max-w-4xl mx-4 aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 transition-transform duration-300 ease-out delay-75 ${
            isVideoOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
          }`}
        >
          <button
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {isVideoOpen && (
            <video
              autoPlay
              controls
              className="w-full h-full object-cover"
            >
              <source src="/videos/background.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </>
  );
}