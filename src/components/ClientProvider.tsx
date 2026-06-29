"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import React from "react";

const StoreProvider = dynamic(() => import("./StoreProvider"), {
  ssr: false,
});

const STORE_ROUTE_PREFIXES = [
  "/cart",
  "/category",
  "/categories",
  "/checkout",
  "/login",
  "/main-categories",
  "/orders",
  "/product",
  "/profile",
  "/sub-categories",
  "/vendor/registration",
  "/wishlist",
];

const needsStoreProvider = (pathname: string | null) => {
  const normalizedPath = pathname || "/";
  return STORE_ROUTE_PREFIXES.some(
    (prefix) =>
      normalizedPath === prefix || normalizedPath.startsWith(`${prefix}/`),
  );
};

export function ClientProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (!needsStoreProvider(pathname)) {
    return <>{children}</>;
  }

  return <StoreProvider>{children}</StoreProvider>;
}
