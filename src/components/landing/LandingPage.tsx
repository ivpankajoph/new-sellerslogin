import { AnalyticsSection } from "./AnalyticsSection";
import { GlobalBackground } from "./GlobalBackground";
import { AnnouncementBar } from "./AnnouncementBar";
import { BackToTop } from "./BackToTop";
import { BlogSection } from "./BlogSection";
import { CasesSection } from "./CasesSection";
import { CookieConsent } from "./CookieConsent";
import { CtaSection } from "./CtaSection";
import { CustomCursor } from "./CustomCursor";
import { FaqSection } from "./FaqSection";
import { FeaturesSection } from "./FeaturesSection";
import { StepsSection } from "./StepsSection";
import { FooterSection } from "./FooterSection";
import { GlobeSection } from "./GlobeSection";
import { HeroSection } from "./HeroSection";
import { Navbar } from "./Navbar";
import { PricingSection } from "./PricingSection";
import { ProcessSection } from "./ProcessSection";
import { ScrollRevealInit } from "./ScrollRevealInit";
import { ShowcaseSection } from "./ShowcaseSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { TrustedMarquee } from "./TrustedMarquee";
import { WhySection } from "./WhySection";

export function LandingPage() {
  return (
    <>
      <CustomCursor />
      <GlobalBackground />
      <ScrollRevealInit />
      <Navbar />
      <HeroSection />
      <TrustedMarquee />
      <FeaturesSection />
      <ShowcaseSection />
      <WhySection />
      <ProcessSection />
      <AnalyticsSection />
      <TestimonialsSection />
      <PricingSection />
      <CasesSection />
      <StepsSection />
      <FaqSection />
 
      <CtaSection />
      <GlobeSection />
      <FooterSection />
      <BackToTop />
      <CookieConsent />
    </>
  );
}
