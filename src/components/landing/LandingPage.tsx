import { GlobalBackground } from "./GlobalBackground";

import { BackToTop } from "./BackToTop";

import { CookieConsent } from "./CookieConsent";
import { CtaSection } from "./CtaSection";
import { CustomCursor } from "./CustomCursor";
import { FaqSection } from "./FaqSection";
import { BrandsLoveSection } from "./BrandsLoveSection";

import { StepsSection } from "./StepsSection";
import { FooterSection } from "./FooterSection";
import { GlobeSection } from "./GlobeSection";
import { HeroSection } from "./HeroSection";
import { Navbar } from "./Navbar";

import { ProcessSection } from "./ProcessSection";
import { ScrollRevealInit } from "./ScrollRevealInit";
import { ShowcaseSection } from "./ShowcaseSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { TrustedMarquee } from "./TrustedMarquee";
import { WhySection } from "./WhySection";

import { AutomationSection } from "./AutomationSection";

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

      <TestimonialsSection />

      <StepsSection />
      <BrandsLoveSection />
      <AutomationSection />
      <FaqSection />

      <CtaSection />
      <GlobeSection />
      <FooterSection />
      <BackToTop />
      <CookieConsent />
    </>
  );
}
