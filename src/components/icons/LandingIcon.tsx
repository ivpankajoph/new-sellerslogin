import {
  BarChart3,
  Bot,
  Building2,
  CreditCard,
  Globe,
  Layout,
  Lock,
  Megaphone,
  MessageCircle,
  Package,
  Palette,
  PartyPopper,
  Play,
  Search,
  Shield,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Store,
  Rocket,
  Target,
  TrendingUp,
  Truck,
  User,
  Warehouse,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type LandingIconName =
  | "bot"
  | "palette"
  | "credit-card"
  | "package"
  | "megaphone"
  | "bar-chart"
  | "search"
  | "smartphone"
  | "layout"
  | "shopping-bag"
  | "warehouse"
  | "store"
  | "building"
  | "rocket"
  | "target"
  | "cart"
  | "truck"
  | "user"
  | "wrench"
  | "zap"
  | "lock"
  | "globe"
  | "message"
  | "trending-up"
  | "party"
  | "play"
  | "sparkles"
  | "shield";

const iconMap: Record<LandingIconName, LucideIcon> = {
  bot: Bot,
  palette: Palette,
  "credit-card": CreditCard,
  package: Package,
  megaphone: Megaphone,
  "bar-chart": BarChart3,
  search: Search,
  smartphone: Smartphone,
  layout: Layout,
  "shopping-bag": ShoppingBag,
  warehouse: Warehouse,
  store: Store,
  building: Building2,
  rocket: Rocket,
  target: Target,
  cart: ShoppingCart,
  truck: Truck,
  user: User,
  wrench: Wrench,
  zap: Zap,
  lock: Lock,
  globe: Globe,
  message: MessageCircle,
  "trending-up": TrendingUp,
  party: PartyPopper,
  play: Play,
  sparkles: Sparkles,
  shield: Shield,
};

type Props = {
  name: LandingIconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
};

export function LandingIcon({
  name,
  size = 20,
  className,
  strokeWidth = 2,
}: Props) {
  const Icon = iconMap[name];
  return (
    <Icon
      size={size}
      className={className}
      strokeWidth={strokeWidth}
      aria-hidden
    />
  );
}
