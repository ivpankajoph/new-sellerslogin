import type { Metadata } from "next";
import { OptionPage, type OptionPageContent } from "@/components/landing/OptionPage";

export const metadata: Metadata = { title: "Hospitality | SellersLogin", description: "Hospitality tools for guest inquiries, offers, and digital experiences." };

const page: OptionPageContent = {
  label: "Hospitality",
  icon: "building",
  eyebrow: "Industry",
  title: "Commerce tools for Hospitality",
  description: "Hospitality teams can manage guest inquiries, experience storefronts, booking paths, and automated messaging.",
  highlights: ["Booking inquiry flows", "Experience storefronts", "Guest messaging"],
  stats: [{ value: "24/7", label: "guest support" }, { value: "2x", label: "upsell paths" }, { value: "Live", label: "inquiries" }],
  outcomes: ["Industry-fit setup", "Better guest journeys", "Scalable service"],
};

export default function Page() { return <OptionPage page={page} />; }
