import type { LandingIconName } from "@/components/icons/LandingIcon";
import { images } from "@/lib/images";

export const heroChartBars = [
  "30%",
  "45%",
  "38%",
  "62%",
  "55%",
  "70%",
  "58%",
  "80%",
  "72%",
  "90%",
  "85%",
  "100%",
];

export const heroProductThumbs = [
  { src: images.productShoes, alt: "Footwear product" },
  { src: images.productWatch, alt: "Accessories product" },
  { src: images.productBag, alt: "Bags product" },
];

export const brandNames = [
  "Zara Commerce",
  "NovaTech",
  "FreshMart",
  "StyleHub",
  "GearPro",
  "UrbanBlend",
  "PeakStore",
  "EcoNest",
  "LuxLine",
  "SwiftSell",
];

export const features: {
  icon: LandingIconName;
  image: string;
  bg: string;
  title: string;
  text: string;
  delay: string;
}[] = [
  {
    icon: "bot",
    image: images.featureAi,
    bg: "#f5f3ff",
    title: "AI Website Builder",
    text: "Generate a complete, branded online store in under 60 seconds using our intelligent AI that understands your business.",
    delay: "",
  },
  {
    icon: "palette",
    image: images.featureEditor,
    bg: "#ede9fe",
    title: "Drag & Drop Editor",
    text: "Design stunning pages with our intuitive visual editor. No coding required — just drag, drop, and publish.",
    delay: "reveal-delay-1",
  },
  {
    icon: "credit-card",
    image: images.featurePayment,
    bg: "#faf5ff",
    title: "Multi Payment Gateway",
    text: "Accept payments via Stripe, PayPal, Razorpay, and 80+ gateways globally. Maximize conversions at checkout.",
    delay: "reveal-delay-2",
  },
  {
    icon: "package",
    image: images.featureInventory,
    bg: "#f3e8ff",
    title: "Inventory Management",
    text: "Real-time stock tracking, low-stock alerts, multi-warehouse support, and automated reorder triggers.",
    delay: "reveal-delay-3",
  },
  {
    icon: "megaphone",
    image: images.featureMarketing,
    bg: "#ede9fe",
    title: "Marketing Automation",
    text: "Automated email campaigns, SMS marketing, abandoned cart recovery, and customer segmentation tools.",
    delay: "",
  },
  {
    icon: "bar-chart",
    image: images.featureAnalytics,
    bg: "#f5f3ff",
    title: "Real-Time Analytics",
    text: "Deep insights into sales, traffic, and customer behavior. Make data-driven decisions with live dashboards.",
    delay: "reveal-delay-1",
  },
  {
    icon: "search",
    image: images.featureSeo,
    bg: "#ede9fe",
    title: "SEO Optimization",
    text: "Built-in SEO tools, structured data, auto-sitemaps, and page speed optimization to rank higher on Google.",
    delay: "reveal-delay-2",
  },
  {
    icon: "smartphone",
    image: images.featureMobile,
    bg: "#faf5ff",
    title: "Mobile Commerce",
    text: "Lightning-fast mobile storefronts, PWA support, and native app-like experience for mobile shoppers.",
    delay: "reveal-delay-3",
  },
];

export const featureDropdown: {
  href: string;
  icon: LandingIconName;
  label: string;
}[] = [
  { href: "#features", icon: "layout", label: "Website Builder" },
  { href: "#features", icon: "shopping-bag", label: "Store Management" },
  { href: "#features", icon: "megaphone", label: "Marketing Automation" },
  { href: "#features", icon: "package", label: "Inventory Tracking" },
  { href: "#analytics", icon: "bar-chart", label: "Analytics Dashboard" },
  { href: "#features", icon: "credit-card", label: "Payment Integration" },
];

export const solutionsDropdown: {
  href: string;
  icon: LandingIconName;
  label: string;
}[] = [
  { href: "#why", icon: "store", label: "Small Businesses" },
  { href: "#why", icon: "rocket", label: "Startups" },
  { href: "#why", icon: "building", label: "Enterprise" },
  { href: "#why", icon: "target", label: "Agencies" },
  { href: "#why", icon: "cart", label: "Multi Vendor Marketplace" },
  { href: "#why", icon: "truck", label: "Dropshipping" },
];

export const revenueMonths = [
  { label: "Jan", width: "45%", val: "$22K" },
  { label: "Feb", width: "52%", val: "$26K" },
  { label: "Mar", width: "61%", val: "$31K" },
  { label: "Apr", width: "70%", val: "$35K" },
  { label: "May", width: "84%", val: "$42K" },
  { label: "Jun", width: "96%", val: "$48K" },
];

export const counters = [
  {
    target: 48200,
    prefix: "$",
    suffix: "",
    label: "Monthly Revenue",
    change: "↑ +18.4% MoM",
    delay: "",
  },
  {
    target: 33700,
    prefix: "",
    suffix: "",
    label: "Unique Visitors",
    change: "↑ +23% MoM",
    delay: "reveal-delay-1",
  },
  {
    target: 1284,
    prefix: "",
    suffix: "",
    label: "Total Orders",
    change: "↑ +12.1% MoM",
    delay: "reveal-delay-2",
  },
  {
    target: 38,
    prefix: "",
    suffix: "%",
    label: "Customer Return Rate",
    change: "↑ +5% YoY",
    delay: "reveal-delay-3",
  },
];

export const testimonials = [
  {
    n: "Rohan Mehta",
    r: "Founder, StyleNova",
    t: "SellersLogin transformed my side hustle into a $2M business. The AI tools are genuinely magic — it wrote all my product descriptions and set up email flows automatically.",
    stars: 5,
  },
  {
    n: "Emily Carter",
    r: "CEO, GadgetHub",
    t: "We went from 200 to 10,000 orders monthly without adding a single operations person. The inventory automation is flawless.",
    stars: 5,
  },
  {
    n: "Priya Singh",
    r: "Owner, FreshBox",
    t: "The subscription management module alone is worth triple the price. Our subscriber retention went from 60% to 92% in 4 months.",
    stars: 5,
  },
  {
    n: "James Liu",
    r: "Dropshipper",
    t: "Best platform for dropshipping. The supplier sync and automated order routing saved me hours every single day. Highly recommended.",
    stars: 5,
  },
  {
    n: "Aisha Mohammed",
    r: "CMO, LuxLine",
    t: "The marketing automation tools are on par with dedicated platforms costing 10x more. Abandoned cart recovery alone adds $8K/month.",
    stars: 5,
  },
  {
    n: "Carlos Rivera",
    r: "Founder, PeakStore",
    t: "Migrated from Shopify and cut our monthly SaaS costs in half while getting MORE features. The analytics dashboard is incredible.",
    stars: 5,
  },
  {
    n: "Sophie Turner",
    r: "Head of E-comm, UrbanBlend",
    t: "Customer support is genuinely exceptional. They helped us go live with a 500-product store in one weekend. Unmatched service.",
    stars: 5,
  },
  {
    n: "Dev Patel",
    r: "Founder, NovaTech",
    t: "The SEO tools are outstanding. Our organic traffic tripled in 3 months and we now rank for competitive product keywords.",
    stars: 5,
  },
  {
    n: "Nina Hoffman",
    r: "Director, EcoNest",
    t: "Perfect for our multi-country, multi-currency needs. Setting up localized stores for 8 countries took less than a day.",
    stars: 5,
  },
  {
    n: "Liam O'Brien",
    r: "Founder, SwiftSell",
    t: "Fastest checkout I've ever seen. Our mobile conversion rate jumped from 1.8% to 3.7% immediately after switching. Phenomenal.",
    stars: 5,
  },
];

export const faqs = [
  {
    q: "How do I create my online store?",
    a: "Sign up for free, choose a template or use our AI builder, customize your store with our drag-and-drop editor, add your products, and go live. The entire process takes less than 30 minutes.",
  },
  {
    q: "Which payment gateways are supported?",
    a: "We support 80+ payment gateways including Stripe, PayPal, Razorpay, Paytm, Square, Braintree, and many more. You can accept credit cards, debit cards, net banking, UPI, and wallets.",
  },
  {
    q: "Do you provide hosting?",
    a: "Yes! All plans include fully managed cloud hosting powered by AWS with global CDN. Your store is automatically optimized for speed and guaranteed 99.9% uptime.",
  },
  {
    q: "Is SellersLogin good for SEO?",
    a: "Absolutely. Every store comes with built-in SEO tools including meta tags, structured data markup, XML sitemaps, canonical URLs, image optimization, and page speed optimization for excellent Google rankings.",
  },
  {
    q: "What kind of support do you offer?",
    a: "All plans include email support. Growth plans include priority live chat. Enterprise plans include a dedicated account manager and 24/7 phone support with guaranteed SLA response times.",
  },
  {
    q: "Can I use my own domain name?",
    a: "Yes, you can connect any custom domain you own. We also offer free subdomains (yourstore.sellerslogin.com) and can help you register a new domain directly through our platform.",
  },
  {
    q: "What integrations are available?",
    a: "We integrate with 200+ tools including Zapier, Mailchimp, HubSpot, Google Analytics, Facebook Pixel, WhatsApp Business, QuickBooks, Tally, and major shipping carriers like FedEx, UPS, and DHL.",
  },
];

export const starterFeatures = [
  "1 Online Store",
  "Up to 100 Products",
  "2% Transaction Fee",
  "Basic Analytics",
  "Email Support",
  "SSL Certificate",
  "Mobile Responsive",
];

export const growthFeatures = [
  "3 Online Stores",
  "Unlimited Products",
  "0.5% Transaction Fee",
  "Advanced Analytics",
  "Priority Support",
  "Marketing Automation",
  "Custom Domain",
  "Abandoned Cart Recovery",
  "Inventory Management",
];

export const enterpriseFeatures = [
  "Unlimited Stores",
  "Unlimited Products",
  "No Transaction Fees",
  "Custom Integrations",
  "Dedicated Account Manager",
  "SLA 99.99% Uptime",
  "White Label Option",
  "On-premise Deployment",
  "24/7 Phone Support",
];
