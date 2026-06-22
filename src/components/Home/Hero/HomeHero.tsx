"use client";

import { HeroSection } from "@/components/UI/hero-section-2";
import { HomeTrustBar } from "@/components/Home/TrustBar/HomeTrustBar";
import { HeroGeometricBackground } from "@/components/UI/modern-hero-section";
import SpotlightBackground from "@/components/UI/spotlight-background";
import { homeHeroContent } from "@/data/hero";

export function HomeHero() {
  return (
    <section className="relative overflow-visible" aria-label="Hero section">
      <SpotlightBackground>
        <HeroGeometricBackground />
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-0 pt-[5.25rem] pb-10 sm:pt-[5.75rem] sm:pb-12 md:pt-[6rem] md:pb-14">
          <HeroSection
            logo={homeHeroContent.logo}
            slogan={homeHeroContent.slogan}
            title={
              <>
                Each Peak <br />
                <span className="text-primary">Teaches Something</span>
              </>
            }
            subtitle={homeHeroContent.subtitle}
            callToAction={homeHeroContent.callToAction}
            backgroundImage={homeHeroContent.backgroundImage}
            contactInfo={homeHeroContent.contactInfo}
          />
        </div>
      </SpotlightBackground>

      <div className="absolute bottom-0 left-1/2 z-30 w-full max-w-[1280px] -translate-x-1/2 translate-y-1/2 px-4 sm:px-6 md:px-10 lg:px-12">
        <HomeTrustBar />
      </div>
    </section>
  );
}
