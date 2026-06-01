"use client";

import { useState } from "react";

const footerLinks = {
  Automation: [
    "AI Voice Automation",
    "AI Chat Automation",
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
};

const socialLinks = [
  { name: "Twitter", href: "#", icon: "𝕏" },
  { name: "LinkedIn", href: "#", icon: "in" },
  { name: "Instagram", href: "#", icon: "▣" },
  { name: "YouTube", href: "#", icon: "▷" },
] as const;

export function FooterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

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
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-full">
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
            <a
              href="#hero"
              className="inline-flex items-center gap-2 text-lg font-bold text-gray-900 no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded-lg"
            >
              <img src="/sellerslogin-logo (1).svg" alt="SellersLogin Logo" className="w-8 h-8 object-contain" />
              SellersLogin
            </a>
            <p className="text-sm text-gray-600 leading-relaxed mt-4 mb-5 max-w-sm">
              The all-in-one e-commerce platform for ambitious businesses
              worldwide.
            </p>
            
            {/* Newsletter Signup */}
            <form onSubmit={handleSubmit} className="mt-4">
              <label htmlFor="footer-email" className="block text-sm text-gray-600 mb-2">
                Stay updated with the latest tips and product news
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 min-w-0 relative" suppressHydrationWarning>
                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-lg py-2.5 px-4 text-sm placeholder-gray-500 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-colors"
                  />
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
                    <a
                      href="#"
                      className="text-sm text-gray-600 no-underline transition-colors duration-150 hover:text-gray-900 hover:focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200 gap-4">
          <address className="not-italic text-sm text-gray-600 text-center md:text-left">
            © 2025 SellersLogin. All rights reserved. ·{" "}
            <a href="mailto:hello@sellerslogin.com" className="hover:text-gray-900 hover:transition-colors underline-offset-2 hover:underline">
              hello@sellerslogin.com
            </a>{" "}
            ·{" "}
            <a href="tel:+18001234567" className="hover:text-gray-900 hover:transition-colors underline-offset-2 hover:underline">
              +1 (800) 123-4567
            </a>
          </address>
          
          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                title={social.name}
                className="w-9 h-9 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center text-sm no-underline transition-all duration-150 text-gray-500 hover:text-gray-900 hover:bg-gray-100 hover:focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}