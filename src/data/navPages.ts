import type { LandingIconName } from "@/components/icons/LandingIcon";

export type NavPageCategory =
  | "features"
  | "solutions"
  | "automation"
  | "industries"
  | "resources";

type NavLink = {
  href: string;
  icon: LandingIconName;
  label: string;
};

export const navPageGroups: Record<NavPageCategory, NavLink[]> = {
  features: [
    { href: "/features/website-builder", icon: "layout", label: "Website Builder" },
    { href: "/features/inventory-tracking", icon: "package", label: "Inventory Tracking" },
    { href: "/features/delivery-management", icon: "truck", label: "Delivery Management" },
    { href: "/features/analytics-dashboard", icon: "bar-chart", label: "Analytics Dashboard" },
    { href: "/features/payment-integration", icon: "credit-card", label: "Payment Integration" },
  ],
  solutions: [
    { href: "/solutions/b2b-dashboard", icon: "layout", label: "B2b Dashboard" },
    { href: "/solutions/b2c-dashboard", icon: "shopping-bag", label: "B2c Dashboard" },
    { href: "/solutions/food-dashboard", icon: "store", label: "Food Dashboard" },
  ],
  automation: [
    { href: "/automation/marketing-automation", icon: "megaphone", label: "Marketing Automation" },
    { href: "/automation/ai-voice-automation", icon: "bot", label: "AI Voice Automation" },
    { href: "/automation/email-automation", icon: "megaphone", label: "Email Automation" },
    { href: "/automation/whatsapp-automation", icon: "smartphone", label: "Whatsapp Automation" },
  ],
  industries: [
    { href: "/industries/manufacturing", icon: "building", label: "Manufacturing" },
    { href: "/industries/real-estate", icon: "store", label: "Real estate" },
    { href: "/industries/fashion", icon: "shopping-bag", label: "Fashion" },
    { href: "/industries/d2c", icon: "package", label: "D2C" },
    { href: "/industries/food", icon: "store", label: "Food" },
    { href: "/industries/restaurants", icon: "store", label: "Restaurants" },
    { href: "/industries/saas", icon: "rocket", label: "Saas" },
    { href: "/industries/healthcare", icon: "shield", label: "Healthcare" },
    { href: "/industries/pharmaceutical", icon: "zap", label: "Pharmaceutical" },
    { href: "/industries/banking", icon: "credit-card", label: "Banking" },
    { href: "/industries/hospitality", icon: "building", label: "Hospitality" },
    { href: "/industries/tourism", icon: "globe", label: "Tourism" },
    { href: "/industries/ecommerce", icon: "cart", label: "Ecommerce" },
    { href: "/industries/retail", icon: "store", label: "Retail" },
    { href: "/industries/logistics", icon: "truck", label: "Logistics" },
    { href: "/industries/fmcg", icon: "package", label: "FMCG" },
    { href: "/industries/human-resource", icon: "user", label: "Human Resource" },
    { href: "/industries/professional-services", icon: "target", label: "Professional Services" },
  ],
  resources: [
    { href: "/resources/testimonials", icon: "sparkles", label: "Testimonials" },
    { href: "/resources/blog", icon: "layout", label: "Blog" },
    { href: "/resources/faq", icon: "message", label: "FAQ" },
  ],
};
