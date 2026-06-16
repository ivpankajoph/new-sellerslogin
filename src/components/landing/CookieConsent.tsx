"use client";

import { useEffect, useState, useCallback } from "react";

export function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Prevent showing if user already made a choice
    if (typeof window !== "undefined" && sessionStorage.getItem("cookie_consent_status")) {
      setDismissed(true);
    } else {
      // Delay appearance for less intrusive UX
      const timer = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = useCallback((accepted: boolean) => {
    setShow(false);
    // Wait for exit animation to complete before unmounting & saving
    setTimeout(() => {
      sessionStorage.setItem("cookie_consent_status", accepted ? "accepted" : "declined");
      setDismissed(true);
    }, 300);
  }, []);

  if (!mounted || dismissed) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent banner"
      aria-live="polite"
      className={`fixed z-50 bottom-4 left-4 right-4 md:left-auto md:right-6 md:min-w-75 md:max-w-95 transition-all duration-300 ease-out ${
        show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md border border-gray-200 p-5 rounded-2xl shadow-xl">
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          We use cookies to enhance your experience and analyze site traffic. By continuing, you agree to our cookie policy.
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => handleDismiss(false)}
            className="flex-1 bg-gray-100 text-gray-700 py-2.5 px-4 rounded-full font-medium text-sm transition-all duration-200 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 cursor-pointer"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => handleDismiss(true)}
            className="flex-2 bg-gray-900 text-white py-2.5 px-4 rounded-full font-medium text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 cursor-pointer"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}