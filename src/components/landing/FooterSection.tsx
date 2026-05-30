"use client";

import { useState } from "react";

const footerLinks = {
  Products: [
    "Website Builder",
    "Store Management",
    "Marketing Tools",
    "Analytics",
    "Mobile Commerce",
    "Payment Gateway",
  ],
  Solutions: [
    "Small Business",
    "Enterprise",
    "Agencies",
    "Multi-Vendor",
    "Dropshipping",
    "Startups",
  ],
  Resources: [
    "Documentation",
    "API Reference",
    "Blog",
    "Case Studies",
    "Community",
    "Status Page",
  ],
  Company: [
    "About Us",
    "Careers",
    "Press Kit",
    "Contact",
    "Privacy Policy",
    "Terms of Service",
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

  return (
    <footer className="bg-white pt-12 md:pt-16 px-4 sm:px-6 lg:px-8 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6 mb-12">
          {/* Brand Column (Spans 2 cols on large screens) */}
          <div className="lg:col-span-2">
            <a
              href="#hero"
              className="inline-flex items-center gap-2 text-lg font-bold text-gray-900 no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded-lg"
            >
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-sm font-bold text-white">
                SL
              </div>
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
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 min-w-0 bg-gray-50 border border-gray-200 text-gray-900 rounded-lg py-2.5 px-4 text-sm placeholder-gray-500 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-colors"
                />
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