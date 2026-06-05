import { GlobalBackground } from "./GlobalBackground";

import { BackToTop } from "./BackToTop";

import { CookieConsent } from "./CookieConsent";
import { CustomCursor } from "./CustomCursor";
import { HeroSection } from "./HeroSection";
import { Navbar } from "./Navbar";
import { ScrollRevealInit } from "./ScrollRevealInit";
import { TrustedMarquee } from "./TrustedMarquee";
import dynamic from "next/dynamic";

const ShowcaseSection = dynamic(() => import("./ShowcaseSection").then((mod) => mod.ShowcaseSection));
const WhySection = dynamic(() => import("./WhySection").then((mod) => mod.WhySection));
const ProcessSection = dynamic(() => import("./ProcessSection").then((mod) => mod.ProcessSection));
const AutomationSection = dynamic(() => import("./AutomationSection").then((mod) => mod.AutomationSection));
const StepsSection = dynamic(() => import("./StepsSection").then((mod) => mod.StepsSection));
const BrandsLoveSection = dynamic(() => import("./BrandsLoveSection").then((mod) => mod.BrandsLoveSection));
const FaqSection = dynamic(() => import("./FaqSection").then((mod) => mod.FaqSection));
const CtaSection = dynamic(() => import("./CtaSection").then((mod) => mod.CtaSection));
const GlobeSection = dynamic(() => import("./GlobeSection").then((mod) => mod.GlobeSection));
const FooterSection = dynamic(() => import("./FooterSection").then((mod) => mod.FooterSection));

export function LandingPage() {
  return (
    <>
      <CustomCursor />
      <GlobalBackground />
      <ScrollRevealInit />
      <Navbar />
      <HeroSection />
      <TrustedMarquee />

      <ShowcaseSection />
      <WhySection />
      <ProcessSection />

     
        <AutomationSection />
         <StepsSection />
      <BrandsLoveSection />
    
      <FaqSection />

      <CtaSection />
      <GlobeSection />
      <FooterSection />
      <BackToTop />
      <CookieConsent />
    </>
  );
}
