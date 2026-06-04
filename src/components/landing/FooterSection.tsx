"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navPageGroups } from "@/data/navPages";

const footerLinks = {
  Automation: [
    "AI Voice Automation",
    "Email Automation",
    "E-commerce Automation",
    "Whatsapp Automation",
  ],
  Solutions: [
    "B2b Dashboard",
    "B2c Dashboard",
  ],
  Industries: [
    "Manufacturing",
    "Real estate",
    "Fashion",
    "D2C",
    "Food",
    "Restaurants",
    "Saas",
    "Healthcare",
    "Pharmaceutical",
  ],
  "More Industries": [
    "Banking",
    "Hospitality",
    "Tourism",
    "Ecommerce",
    "Retail",
    "Logistics",
    "FMCG",
    "Human Resource",
    "Professional Services",
  ],
  Legal: [
    "Terms and Conditions",
    "Privacy Policy"
  ],
};



const footerHrefByLabel: Record<string, string> = {
  "Terms and Conditions": "/terms",
  "Privacy Policy": "/privacy",
  ...Object.values(navPageGroups)
    .flat()
    .reduce<Record<string, string>>((links, item) => {
      links[item.label] = item.href;
      return links;
    }, {})
};

export function FooterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  // Change this variable to update both the footer background AND the wavy divider!
  const themeColor = "#e9d5ff"; // Tailwind purple-200

  return (
    <footer 
      className="relative pt-16 md:pt-24 px-4 sm:px-6 lg:px-8 pb-8"
      style={{ backgroundColor: themeColor }}
    >
      {/* Wavy Divider at the top */}
      <div className="absolute top-[1px] left-0 w-full overflow-hidden leading-none -translate-y-full">
        <svg
          className="relative block w-full h-15 md:h-25"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,96C960,107,1056,117,1152,106.7C1248,96,1344,64,1392,48L1440,32L1440,121L1392,121C1344,121,1248,121,1152,121C1056,121,960,121,864,121C768,121,672,121,576,121C480,121,384,121,288,121C192,121,96,121,48,121L0,121Z"
            fill={themeColor}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6 mb-12">
          {/* Brand Column (Spans 2 cols on large screens) */}
          <div className="lg:col-span-2">
            <Link
              href="/#hero"
              className="inline-flex items-center gap-3 no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded-lg"
            >
              <img src="/sellerslogin-logo (1).svg" alt="SellersLogin Logo" className="w-12 h-12 object-contain bg-white rounded-xl shadow-sm p-1.5" />
              <span className="text-2xl font-bold text-gray-900 leading-none">SellersLogin</span>
            </Link>
            <div className="mt-6 mb-5 text-sm text-gray-600 space-y-3">
              <p>
                Brand : SellersLogin ( Under Life Changing Networks Pvt Ltd )
              </p>
              <p className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>1405, Gaur city 2, Noida Extension, 10th Avenue, Ghaziabad 201009, UP, India</span>
              </p>
            </div>
            
            {/* Newsletter Signup */}
            <form onSubmit={handleSubmit} className="mt-4">
            
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 min-w-0 relative">
                  {mounted ? (
                    <input
                      id="newsletter-input"
                      name="newsletter"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      data-lpignore="true"
                      data-1p-ignore="true"
                      autoComplete="off"
                      className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-lg py-2.5 px-4 text-sm placeholder-gray-500 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-colors"
                    />
                  ) : (
                    <div
                      className="w-full h-[42px] bg-gray-50 border border-gray-200 rounded-lg"
                    />
                  )}
                </div>
                <button
                  type="submit"
                  disabled={subscribed}
                  className={`whitespace-nowrap bg-purple-200 text-black border border-purple-300 shadow-sm rounded-lg py-2.5 px-5 text-sm font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 ${
                    subscribed ? "opacity-70 cursor-not-allowed bg-gray-200 text-gray-500 border-gray-300" : "hover:shadow-lg hover:bg-purple-300 hover:-translate-y-0.5"
                  }`}
                >
                  {subscribed ? "✓ Subscribed!" : "Subscribe"}
                </button>
              </div>
            </form>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <nav key={title} aria-label={`${title} links`}>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((label) => (
                  <li key={label}>
                    <Link
                      href={footerHrefByLabel[label] ?? "/"}
                      className="text-sm text-gray-600 no-underline transition-colors duration-150 hover:text-gray-900 hover:focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200 gap-4">
          <address className="not-italic text-sm text-gray-600 text-center md:text-left">
         All Rights Reserved 2026 with SellersLogin ( Under Life Changing Networks Pvt Ltd )
            <a href="mailto:hello@sellerslogin.com" className="hover:text-gray-900 hover:transition-colors underline-offset-2 hover:underline ml-2">
              info@sellerslogin.com
            </a>{" "}
            ·{" "}
         
          </address>
          
     
        </div>
      </div>
    </footer>
  );
}
