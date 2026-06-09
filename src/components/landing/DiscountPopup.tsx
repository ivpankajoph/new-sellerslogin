"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function DiscountPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    setHasDismissed(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    closePopup();
    alert("Coupon code sent to your email!");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-[480px] bg-white p-10 text-center shadow-2xl animate-in zoom-in-95 duration-300 rounded-none">
        
        <button
          onClick={closePopup}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-700 focus:outline-none rounded-none"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative z-10">
          <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-slate-900">
            Wait! Don't miss out on this!
          </h3>
          
          <h2 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-slate-950">
            Get <span className="text-violet-950 font-extrabold">50% OFF</span> on subscriptions for life.
          </h2>
          
          <p className="mb-8 text-base leading-relaxed text-slate-600">
            This is the last chance to lock in your lifetime discount. No price hikes for you, ever.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter your email address..."
              required
              className="w-full border border-slate-300 bg-slate-50 px-5 py-4 text-sm font-medium transition-colors focus:border-violet-950 focus:bg-white focus:outline-none focus:ring-1 focus:ring-violet-950 rounded-none"
            />
            <button
              type="submit"
              className="w-full bg-violet-950 px-6 py-4 text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-violet-900 focus:outline-none focus:ring-4 focus:ring-violet-950/30 rounded-none"
            >
              Give me the 50% off coupon!
            </button>
          </form>

          <button
            onClick={closePopup}
            className="mt-6 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-700 underline"
          >
            No thanks, I'd rather pay more later.
          </button>
        </div>
      </div>
    </div>
  );
}
