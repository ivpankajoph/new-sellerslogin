import React from "react";
import { Check, Minus, HelpCircle } from "lucide-react";

export function PricingComparisonTable() {
  const features = [
    {
      category: "Storefront & Catalog",
      items: [
        { name: "Online Stores", startup: "1 Store", growth: "2 Stores", enterprise: "Custom" },
        { name: "Products limit", startup: "Unlimited", growth: "Unlimited", enterprise: "Unlimited" },
        { name: "Staff Accounts", startup: "3", growth: "10", enterprise: "Unlimited" },
        { name: "Custom Domain", startup: true, growth: true, enterprise: true },
        { name: "Free SSL Certificate", startup: true, growth: true, enterprise: true },
      ],
    },
    {
      category: "Marketing & Growth",
      items: [
        { name: "Discount Codes", startup: true, growth: true, enterprise: true },
        { name: "Abandoned Cart Recovery", startup: false, growth: true, enterprise: true },
        { name: "Gift Cards", startup: false, growth: true, enterprise: true },
        { name: "Advanced Reports", startup: false, growth: true, enterprise: true },
        { name: "AI SEO Optimization", startup: false, growth: true, enterprise: true },
      ],
    },
    {
      category: "Payments & Fees",
      items: [
        { name: "Transaction Fee", startup: "2.0%", growth: "1.5%", enterprise: "0.75%" },
        { name: "Multiple Payment Gateways", startup: true, growth: true, enterprise: true },
        { name: "Fraud Analysis", startup: true, growth: true, enterprise: true },
        { name: "Manual Payment Methods", startup: true, growth: true, enterprise: true },
      ],
    },
    {
      category: "Support",
      items: [
        { name: "24/7 Email Support", startup: true, growth: true, enterprise: true },
        { name: "Live Chat Support", startup: false, growth: true, enterprise: true },
        { name: "Dedicated Account Manager", startup: false, growth: false, enterprise: true },
        { name: "Priority Phone Support", startup: false, growth: false, enterprise: true },
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight sm:text-4xl mb-4">
            Compare plans feature by feature
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Find the perfect mix of features to help you start, grow, and scale your business.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="w-1/3 p-6 border-b border-slate-200 bg-slate-50/50"></th>
                  <th className="w-[22%] p-6 border-b border-slate-200 text-center">
                    <div className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-1">Startup</div>
                    <div className="text-xl font-bold text-slate-900">₹999/mo</div>
                  </th>
                  <th className="w-[22%] p-6 border-b border-slate-200 text-center bg-violet-50/50 relative">
                    <div className="absolute inset-x-0 top-0 h-1 bg-violet-600"></div>
                    <div className="text-sm font-bold uppercase tracking-wider text-violet-700 mb-1">Growth</div>
                    <div className="text-xl font-bold text-slate-900">₹2,499/mo</div>
                  </th>
                  <th className="w-[22%] p-6 border-b border-slate-200 text-center">
                    <div className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-1">Enterprise</div>
                    <div className="text-xl font-bold text-slate-900">Custom</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((section, idx) => (
                  <React.Fragment key={idx}>
                    <tr>
                      <th
                        colSpan={4}
                        className="py-4 px-6 text-sm font-bold uppercase tracking-wider text-slate-900 bg-slate-50 border-b border-slate-200"
                      >
                        {section.category}
                      </th>
                    </tr>
                    {section.items.map((item, iIdx) => (
                      <tr key={iIdx} className="hover:bg-slate-50/50 transition-colors group">
                        <td className="py-4 px-6 text-sm text-slate-600 border-b border-slate-100 flex items-center gap-2">
                          {item.name}
                          <HelpCircle className="h-3.5 w-3.5 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" />
                        </td>
                        <td className="py-4 px-6 text-center border-b border-slate-100 font-medium text-slate-900">
                          {typeof item.startup === "boolean" ? (
                            item.startup ? (
                              <Check className="h-5 w-5 mx-auto text-violet-600" />
                            ) : (
                              <Minus className="h-5 w-5 mx-auto text-slate-300" />
                            )
                          ) : (
                            item.startup
                          )}
                        </td>
                        <td className="py-4 px-6 text-center border-b border-slate-100 bg-violet-50/30 font-bold text-violet-900">
                          {typeof item.growth === "boolean" ? (
                            item.growth ? (
                              <Check className="h-5 w-5 mx-auto text-violet-600" />
                            ) : (
                              <Minus className="h-5 w-5 mx-auto text-slate-300" />
                            )
                          ) : (
                            item.growth
                          )}
                        </td>
                        <td className="py-4 px-6 text-center border-b border-slate-100 font-medium text-slate-900">
                          {typeof item.enterprise === "boolean" ? (
                            item.enterprise ? (
                              <Check className="h-5 w-5 mx-auto text-violet-600" />
                            ) : (
                              <Minus className="h-5 w-5 mx-auto text-slate-300" />
                            )
                          ) : (
                            item.enterprise
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
