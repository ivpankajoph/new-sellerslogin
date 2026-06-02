import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SellersLogin — Build Your Online Store in Minutes",
  description:
    "SellersLogin is the all-in-one e-commerce platform that helps businesses create, manage, and scale their online stores with professional websites, automation, marketing tools, and inventory management.",
  openGraph: {
    title: "SellersLogin — Build Your Online Store in Minutes",
    description:
      "The all-in-one e-commerce platform for ambitious businesses. A professional store, advanced dashboard, and inbuilt global payments in one place.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  other: {
    "facebook-domain-verification": "7i0cyqq95aam0ac12gsywt3niirx2z",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full antialiased font-sans">{children}</body>
    </html>
  );
}
