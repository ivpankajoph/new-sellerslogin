import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "SellersLogin — Build Your Online Store in Minutes",
  description:
    "SellersLogin is the all-in-one e-commerce platform that helps businesses create, manage, and scale their online stores with professional websites, automation, marketing tools, and inventory management.",
  openGraph: {
    title: "SellersLogin — Build Your Online Store in Minutes",
    description:
      "The all-in-one e-commerce platform for ambitious businesses. 50,000+ stores. $100M+ in sales generated.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
