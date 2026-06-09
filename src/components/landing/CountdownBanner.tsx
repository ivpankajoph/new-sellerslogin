"use client";

import { useState, useEffect } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export function CountdownBanner() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 45,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);
    const targetTime = new Date().getTime() + (5 * 60 * 60 + 45 * 60) * 1000;
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetTime - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center justify-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg w-12 h-12 shadow-sm">
      <span className="text-lg font-bold text-white leading-none">{formatNumber(value)}</span>
      <span className="text-[9px] font-bold text-white/90 uppercase tracking-wider mt-0.5">{label}</span>
    </div>
  );

  return (
    <div className="relative z-50 bg-violet-950 overflow-hidden shadow-lg border-b border-white/10">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.3),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
          
          {/* Left Text */}
          <div className="flex items-center gap-3 text-white">
            <div className="flex items-center justify-center w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shrink-0 shadow-sm">
              <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-white/90 uppercase tracking-widest mb-0.5">Limited Time Offer</p>
              <p className="text-base sm:text-lg font-bold text-white leading-tight">
                Unlock <span className="text-yellow-300 font-extrabold">50% OFF</span> on Startup & Growth plans!
              </p>
            </div>
          </div>
          
          {/* Right side: Timer and Button */}
          <div className="flex items-center gap-4 sm:gap-6">
            {mounted ? (
              <div className="flex items-center gap-2">
                <TimeUnit value={timeLeft.hours} label="HRS" />
                <span className="text-white/60 font-bold text-xl pb-3">:</span>
                <TimeUnit value={timeLeft.minutes} label="MIN" />
                <span className="text-white/60 font-bold text-xl pb-3">:</span>
                <TimeUnit value={timeLeft.seconds} label="SEC" />
              </div>
            ) : (
              <div className="flex gap-2">
                <div className="w-12 h-12 rounded-lg bg-white/20 animate-pulse border border-white/10"></div>
                <span className="text-white/60 font-bold text-xl pb-3">:</span>
                <div className="w-12 h-12 rounded-lg bg-white/20 animate-pulse border border-white/10"></div>
                <span className="text-white/60 font-bold text-xl pb-3">:</span>
                <div className="w-12 h-12 rounded-lg bg-white/20 animate-pulse border border-white/10"></div>
              </div>
            )}
            
            <a
              href="#compare"
              className="group hidden sm:flex items-center gap-2 bg-white text-violet-900 px-6 py-3 rounded-full font-bold text-sm shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-300"
            >
              Claim Discount
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
}
