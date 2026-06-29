"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const BackToTop = dynamic(() => import("./BackToTop").then((mod) => mod.BackToTop), {
  loading: () => null,
});
const CookieConsent = dynamic(
  () => import("./CookieConsent").then((mod) => mod.CookieConsent),
  { loading: () => null },
);
const CustomCursor = dynamic(
  () => import("./CustomCursor").then((mod) => mod.CustomCursor),
  { loading: () => null },
);
const ShowcaseSection = dynamic(() => import("./ShowcaseSection").then((mod) => mod.ShowcaseSection));
const WhySection = dynamic(() => import("./WhySection").then((mod) => mod.WhySection));
const ProcessSection = dynamic(() => import("./ProcessSection").then((mod) => mod.ProcessSection));
const AutomationSection = dynamic(() => import("./AutomationSection").then((mod) => mod.AutomationSection));
const IndustriesSection = dynamic(() => import("./IndustriesSection").then((mod) => mod.IndustriesSection));
const BrandsLoveSection = dynamic(() => import("./BrandsLoveSection").then((mod) => mod.BrandsLoveSection));
const FaqSection = dynamic(() => import("./FaqSection").then((mod) => mod.FaqSection));
const CtaSection = dynamic(() => import("./CtaSection").then((mod) => mod.CtaSection));
const GlobeSection = dynamic(() => import("./GlobeSection").then((mod) => mod.GlobeSection));
const FooterSection = dynamic(() => import("./FooterSection").then((mod) => mod.FooterSection));

const deferredSectionHashes = new Set([
  "#features",
  "#why",
  "#process",
  "#automation",
  "#industries",
  "#faq",
  "#cta",
]);

export function DeferredLandingSections() {
  const [enabled, setEnabled] = useState(false);
  const [globeEnabled, setGlobeEnabled] = useState(false);
  const contentSentinelRef = useRef<HTMLDivElement | null>(null);
  const globeSentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (enabled) return;

    const enable = () => setEnabled(true);
    if (deferredSectionHashes.has(window.location.hash)) {
      enable();
      return;
    }

    const enableForHash = () => {
      if (deferredSectionHashes.has(window.location.hash)) enable();
    };

    const events: Array<keyof WindowEventMap> = ["scroll", "keydown", "touchstart"];

    events.forEach((eventName) =>
      window.addEventListener(eventName, enable, {
        once: true,
        passive: true,
      }),
    );
    window.addEventListener("hashchange", enableForHash);

    return () => {
      events.forEach((eventName) =>
        window.removeEventListener(eventName, enable),
      );
      window.removeEventListener("hashchange", enableForHash);
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const hash = window.location.hash;
    if (!deferredSectionHashes.has(hash)) return;

    requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({
        block: "start",
      });
    });
  }, [enabled]);

  useEffect(() => {
    if (enabled) return;

    const node = contentSentinelRef.current;
    if (!node || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setEnabled(true);
      },
      { rootMargin: "0px 0px 160px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [enabled]);

  useEffect(() => {
    if (!enabled || globeEnabled) return;

    const node = globeSentinelRef.current;
    if (!node || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setGlobeEnabled(true);
      },
      { rootMargin: "480px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [enabled, globeEnabled]);

  if (!enabled) {
    return (
      <div
        ref={contentSentinelRef}
        className="h-px w-full"
        aria-hidden="true"
      />
    );
  }

  return (
    <>
      <CustomCursor />
      <ShowcaseSection />
      <WhySection />
      <ProcessSection />
      <AutomationSection />
      <IndustriesSection />
      <BrandsLoveSection />
      <FaqSection />
      <CtaSection />
      <div ref={globeSentinelRef} className="h-px w-full" aria-hidden="true" />
      {globeEnabled ? <GlobeSection /> : null}
      <FooterSection />
      <BackToTop />
      <CookieConsent />
    </>
  );
}
