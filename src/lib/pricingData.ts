import {
  CreditCard,
  Headphones,
  LineChart,
  Mail,
  Megaphone,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Store,
  Truck,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const registrationHref = "/vendor/registration";
export const contactHref = "/contact";

export const defaultBillingCycle = "3_years";

export type BillingCurrency = "INR" | "USD";

export type BillingOption = {
  cycle: string;
  label: string;
  months: number;
  monthlyPrice: number;
  total: number;
  price: string;
};

export type PricingPlan = {
  name: string;
  label: string;
  priceMonthly: string;
  priceQuarterly: string;
  sourceNote: string;
  billingMonthlyTotal?: number;
  billingQuarterlyTotal?: number;
  priceMonthlyUSD: string;
  priceQuarterlyUSD: string;
  billingMonthlyTotalUSD?: number;
  billingQuarterlyTotalUSD?: number;
  sourceNoteUSD: string;
  billingOptions?: BillingOption[];
  billingOptionsUSD?: BillingOption[];
  description: string;
  cta: string;
  href: string;
  accent: string;
  icon: LucideIcon;
  features: string[];
  recommended?: boolean;
};

export const billingCycleLabels: Record<string, string> = {
  "4_years": "4 Years",
  "3_years": "3 Years",
  "2_years": "2 Years",
  "1_year": "1 Year",
  "6_months": "6 Months",
  "1_month": "1 Month",
  monthly: "Monthly",
  quarterly: "Quarterly",
};

export const getPlanBillingOptions = (plan: PricingPlan, currency: BillingCurrency = "INR") =>
  currency === "USD" && plan.billingOptionsUSD?.length
    ? plan.billingOptionsUSD
    : plan.billingOptions || [];

export const getPlanBillingOption = (
  plan: PricingPlan,
  billingCycle = defaultBillingCycle,
  currency: BillingCurrency = "INR",
) => {
  const options = getPlanBillingOptions(plan, currency);
  return (
    options.find((option) => option.cycle === billingCycle) ||
    options.find((option) => option.cycle === defaultBillingCycle) ||
    options[0] ||
    null
  );
};

export const getPlanDisplayPrice = (
  plan: PricingPlan,
  billingCycle = defaultBillingCycle,
  currency: BillingCurrency = "INR",
) => {
  const option = getPlanBillingOption(plan, billingCycle, currency);
  if (option) return option.price;
  if (currency === "USD") return plan.priceMonthlyUSD;
  return plan.priceMonthly;
};

export const getPlanBillingTotal = (
  plan: PricingPlan,
  billingCycle = defaultBillingCycle,
  currency: BillingCurrency = "INR",
) => {
  const option = getPlanBillingOption(plan, billingCycle, currency);
  if (option) return option.total;
  if (currency === "USD") return plan.billingMonthlyTotalUSD;
  return plan.billingMonthlyTotal;
};

export const plans: PricingPlan[] = [
  {
    name: "Startup",
    label: "Best for new sellers",
    priceMonthly: "INR 1,199/mo",
    priceQuarterly: "INR 399/mo",
    sourceNote: "Billed based on your selected duration.",
    billingMonthlyTotal: 1199,
    billingQuarterlyTotal: 14364,
    priceMonthlyUSD: "USD 15/mo",
    priceQuarterlyUSD: "USD 9/mo",
    billingMonthlyTotalUSD: 15,
    billingQuarterlyTotalUSD: 27,
    sourceNoteUSD: "Billed based on your selected duration.",
    billingOptions: [
      { cycle: "3_years", label: "3 Years", months: 36, monthlyPrice: 399, total: 14364, price: "INR 399/mo" },
      { cycle: "2_years", label: "2 Years", months: 24, monthlyPrice: 549, total: 13176, price: "INR 549/mo" },
      { cycle: "1_year", label: "1 Year", months: 12, monthlyPrice: 699, total: 8388, price: "INR 699/mo" },
      { cycle: "6_months", label: "6 Months", months: 6, monthlyPrice: 999, total: 5994, price: "INR 999/mo" },
      { cycle: "1_month", label: "1 Month", months: 1, monthlyPrice: 1199, total: 1199, price: "INR 1,199/mo" },
    ],
    description:
      "",
    cta: "Select",
    href: registrationHref,
    accent: "border-violet-200 bg-white",
    icon: Zap,
    features: [
      "1 online store with custom domain mapping",
      "3 staff accounts with SSL, hosting, and unlimited bandwidth",
      "2% Sellers Login transaction fee",
      "Scale-ready products with SEO and page controls",
      "12,000 email credits with ecommerce email automation",
      "Ticket, mail, and chat support",
    ],
  },
  {
    name: "Growth",
    label: "Most popular",
    priceMonthly: "INR 1,999/mo",
    priceQuarterly: "INR 899/mo",
    sourceNote: "Billed based on your selected duration.",
    billingMonthlyTotal: 1999,
    billingQuarterlyTotal: 32364,
    priceMonthlyUSD: "USD 30/mo",
    priceQuarterlyUSD: "USD 25/mo",
    billingMonthlyTotalUSD: 30,
    billingQuarterlyTotalUSD: 75,
    sourceNoteUSD: "Billed based on your selected duration.",
    billingOptions: [
      { cycle: "3_years", label: "3 Years", months: 36, monthlyPrice: 899, total: 32364, price: "INR 899/mo" },
      { cycle: "2_years", label: "2 Years", months: 24, monthlyPrice: 1199, total: 28776, price: "INR 1,199/mo" },
      { cycle: "1_year", label: "1 Year", months: 12, monthlyPrice: 1499, total: 17988, price: "INR 1,499/mo" },
      { cycle: "6_months", label: "6 Months", months: 6, monthlyPrice: 1799, total: 10794, price: "INR 1,799/mo" },
      { cycle: "1_month", label: "1 Month", months: 1, monthlyPrice: 1999, total: 1999, price: "INR 1,999/mo" },
    ],
    description:
      "",
    cta: "Select",
    href: registrationHref,
    accent: "relative border-violet-500 bg-violet-950 text-white shadow-2xl shadow-violet-200",
    icon: LineChart,
    features: [
      "2 online stores with 10 staff accounts",
      "1.5% Sellers Login transaction fee",
      "600 product capacity with advanced storefront controls",
      "Advanced coupons, landing pages, loyalty, and AI suggestions",
      "Courier assignment, warehouse dispatch, and hyperlocal delivery",
      "Dedicated account manager and 2 hours expert onboarding",
    ],
    recommended: true,
  },
  {
    name: "Enterprise",
    label: "For large teams",
    priceMonthly: "Custom Quote",
    priceQuarterly: "Custom Quote",
    sourceNote: "Custom quote with enterprise rollout and commercial terms.",
    priceMonthlyUSD: "Custom Quote",
    priceQuarterlyUSD: "Custom Quote",
    sourceNoteUSD: "Custom quote with enterprise rollout and commercial terms.",
    description:
      "",
    cta: "Talk to sales",
    href: contactHref,
    accent: "border-slate-200 bg-white",
    icon: ShieldCheck,
    features: [
      "Custom online stores, logo controls, and account structure",
      "0.75% listed Sellers Login transaction fee",
      "1,000 product capacity with custom storefront controls",
      "Custom marketing automation and AI-powered suggestions",
      "B2B freight, route delivery, GRN, and custom workflow automation",
      "Dedicated account manager and 4 hours expert onboarding",
    ],
  },
];

export const capabilityGroups = [
  {
    title: "Store Features",
    icon: Store,
    rows: [
      ["Online Store", "1 Store", "2 Stores", "Custom"],
      ["Custom Domain Mapping", "Yes", "Yes", "Custom"],
      ["Live Analytics", "Yes", "Yes", "Custom"],
      ["SL Transaction Fees", "2%", "1.5%", "0.75%"],
      ["Sellers Login Logo", "No Logo", "No Logo", "Custom"],
      ["Virus-Free Web", "Yes", "Yes", "Custom"],
      ["Staff Accounts", "3 accounts", "10 accounts", "Custom"],
      ["Free SSL Certificate", "Yes", "Yes", "Yes"],
      ["Free Hosting & Unlimited Bandwidth", "Yes", "Yes", "Yes"],
      ["Custom Domain Mapping Included", "Yes", "Yes", "Yes"],
      ["File Storage", "50 GB", "100 GB", "Unmetered"],
    ],
  },
  {
    title: "Customer & Sales",
    icon: Users,
    rows: [
      ["Customer Records", "Included", "Advanced", "Custom"],
      ["Order and Sales Visibility", "Included", "Advanced", "Advanced"],
      ["B2C and B2B Workflow Fit", "Startup", "Multi-store", "Custom"],
      ["Customer Accounts Limit", "Unlimited", "Unlimited", "Unlimited"],
      ["Abandoned Cart Recovery", "Yes", "Yes", "Yes"],
      ["Wishlist", "Yes", "Yes", "Yes"],
      ["Customer Segmentation", "Basic", "Advanced", "Custom"],
    ],
  },
  {
    title: "Courier Pricing Management",
    icon: Truck,
    rows: [
      ["Courier Rate Card Setup", "Basic (1 courier)", "Multi-courier", "Full control"],
      ["Weight-Based Pricing Slabs", "Yes", "Yes", "Yes"],
      ["Volumetric Weight Calculation", "Yes", "Yes", "Yes"],
      ["Pincode Wise Delivery Pricing", "Yes", "Yes", "Yes"],
      ["COD Charges Configuration", "Yes", "Yes", "Yes"],
      ["Free Shipping Threshold", "Yes", "Yes", "Yes"],
      ["Courier Rate Comparison Tool", "Yes", "Yes", "Yes"],
      ["Seasonal / Festive Rate Override", "No", "Yes", "Yes"],
    ],
  },
  {
    title: "Courier Vendor Selection",
    icon: Truck,
    rows: [
      ["Pincode Serviceability Check", "Yes", "Yes", "Yes"],
      ["Auto Courier Assignment Rules", "No", "Yes", "Yes"],
      ["Manual Courier Override", "Yes", "Yes", "Yes"],
    ],
  },
  {
    title: "Shipment Dispatch & Label Generation",
    icon: PackageCheck,
    rows: [
      ["One-Click Shipment Creation", "Yes", "Yes", "Yes"],
      ["Shipping Label Generation", "Yes", "Yes", "Yes"],
      ["Pickup Scheduling", "Yes", "Yes", "Yes"],
      ["Packing Slip & GST Invoice Print", "Yes", "Yes", "Yes"],
      ["Multi-Warehouse Dispatch / Pickup Management", "No", "Yes", "Yes"],
    ],
  },
  {
    title: "B2B Heavy Duty & Large Item",
    icon: PackageCheck,
    rows: [
      ["B2B Bulk Order Dispatch", "No", "Yes", "Yes"],
      ["Scheduled B2B Delivery Days", "No", "Yes", "Yes"],
      ["Multi-Drop Route Delivery", "No", "No", "Yes"],
      ["GRN / Digital Delivery Confirmation", "No", "No", "Yes"],
      ["B2B Freight / LTL Shipping", "No", "No", "Yes"],
    ],
  },
  {
    title: "Heavy Duty & Large Item Delivery",
    icon: PackageCheck,
    rows: [
      ["Heavy-Weight Courier Partner Integration", "No", "Yes", "Yes"],
      ["Oversized / Special Handling Flag", "No", "Yes", "Yes"],
      ["Freight Charges Calculator", "Yes", "Yes", "Yes"],
      ["Multiple Truck Option", "Yes", "Yes", "Yes"],
    ],
  },
  {
    title: "Local & Hyperlocal Delivery",
    icon: Truck,
    rows: [
      ["Same-Day / Express Delivery", "No", "Yes", "Yes"],
      ["Hyperlocal Courier Integration", "No", "Yes", "Yes"],
      ["Delivery Time Slot Selection", "No", "Yes", "Yes"],
      ["In-House Delivery Fleet Management", "No", "Yes", "Yes"],
      ["OTP-Based Delivery Confirmation", "No", "Yes", "Yes"],
    ],
  },
  {
    title: "Products & Storefront",
    icon: Store,
    rows: [
      ["Product Capacity", "Scale-ready", "600", "1,000"],
      ["Storefront Feature Controls", "Included", "Advanced", "Custom"],
      ["SEO and Page Controls", "Included", "Advanced", "Advanced"],
      ["Product Reviews", "Yes", "Yes", "Yes"],
    ],
  },
  {
    title: "Marketing & Automation",
    icon: Megaphone,
    rows: [
      ["Marketing Features", "Core", "Advanced", "Custom"],
      ["Basic Coupons / Discounts", "Yes", "Yes", "Yes"],
      ["Advanced Coupons", "No", "Yes", "Yes"],
      ["Automatic Discounts", "No", "Yes", "Yes"],
      ["Campaign / Landing Pages", "10 pages", "200 pages", "500 pages"],
      ["Member-Only Access / Gated Content", "No", "Yes", "Yes"],
      ["Marketing Automation (SmartPush)", "Yes", "Advanced", "Custom"],
      ["Loyalty & Rewards Program", "No", "Yes", "Yes"],
      ["AI-Powered Product Suggestions", "Basic", "Advanced", "Custom"],
    ],
  },
  {
    title: "Email Features (Add-on)",
    icon: Mail,
    rows: [
      ["Free Emails Credit", "12,000 (400 per day)", "12,000 (400 per day)", "12,000 (400 per day)"],
      ["Email Automation with Ecommerce Website", "Yes", "Yes", "Yes"],
      ["Email Template Making", "Unlimited", "Unlimited", "Unlimited"],
      ["Promotion Email Campaign", "No", "Yes", "Yes"],
      ["Drip Email Campaign", "Yes", "Yes", "Yes"],
      ["Newsletter", "No", "Yes", "Yes"],
      ["Order Notification", "Yes", "Yes", "Yes"],
      ["Bounce Tracking", "Yes", "Yes", "Yes"],
      ["Advance Reporting System", "Yes", "Yes", "Yes"],
      ["Track Buyer Activity", "Yes", "Yes", "Yes"],
      ["Follow-up Notification", "Yes", "Yes", "Yes"],
    ],
  },
  {
    title: "Voice Marketing (Add-on)",
    icon: MessageCircle,
    rows: [
      ["Voice Call Pricing", "Applicable", "Applicable", "Applicable"],
      ["Voice AI Automation", "Yes", "Yes", "Yes"],
      ["Voice Cloning", "Yes", "Yes", "Yes"],
      ["Voice Agent Integration", "Yes", "Yes", "Yes"],
      ["Notification to Buyers on Call", "Yes", "Yes", "Yes"],
      ["Promotional Marketing", "Yes", "Yes", "Yes"],
      ["Drip Campaign", "Yes", "Yes", "Yes"],
      ["Follow-up Voice Calling", "Yes", "Yes", "Yes"],
      ["Bulk AI Voice Marketing", "Yes", "Yes", "Yes"],
    ],
  },
  {
    title: "WhatsApp Business (Add-on)",
    icon: MessageCircle,
    rows: [
      ["WhatsApp Messages Price", "Applicable", "Applicable", "Applicable"],
      ["Template Making", "Unlimited", "Unlimited", "Unlimited"],
      ["WhatsApp & Website Automation", "Yes", "Yes", "Yes"],
      ["Notification to Buyers", "Yes", "Yes", "Yes"],
      ["Promotion Messaging", "Yes", "Yes", "Yes"],
      ["Drip Campaign", "Yes", "Yes", "Yes"],
      ["Follow-up Messaging", "Yes", "Yes", "Yes"],
      ["Bulk Messaging", "Yes", "Yes", "Yes"],
    ],
  },
  {
    title: "Payment Gateway",
    icon: CreditCard,
    rows: [
      ["Payment Gateway Integration", "Yes", "Yes", "-"],
      ["Domestic / International Payment", "Yes", "Yes", "-"],
      ["2-Day Settlement", "Yes", "Yes", "-"],
      ["Multi-Currency Checkout", "Yes", "Yes", "Yes"],
    ],
  },
  {
    title: "Shipping & Fulfillment",
    icon: PackageCheck,
    rows: [
      ["Live Shipping Rates", "No", "Yes", "Yes"],
      ["Pickup Locations", "Yes", "Yes", "Yes"],
      ["Returns Management", "Yes", "Yes", "Yes"],
      ["Third-Party Marketplace Integration", "No", "Yes", "Yes"],
    ],
  },
  {
    title: "Support",
    icon: Headphones,
    rows: [
      ["Ticket Support", "Yes", "Yes", "Yes"],
      ["Mail Support", "Yes", "Yes", "Yes"],
      ["Chat Support", "Yes", "Yes", "Yes"],
      ["Expert Onboarding Assistance", "No", "2 hours", "4 hours"],
      ["Dedicated Account Manager", "No", "Yes", "Yes"],
    ],
  },
  {
    title: "Custom Fields & Integrations",
    icon: Store,
    rows: [
      ["Custom Fields on Orders/Products", "No", "Yes", "Yes"],
      ["Custom Modules / Business Logic", "No", "No", "Yes"],
      ["App Marketplace & Integrations", "Basic", "Advanced", "Full"],
      ["API Access", "No", "Yes", "Full"],
      ["Workflow Automation (Custom)", "No", "No", "Custom"],
    ],
  },
];
