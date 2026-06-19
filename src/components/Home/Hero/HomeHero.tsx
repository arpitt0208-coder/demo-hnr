"use client";

import { HeroSection } from "@/components/UI/hero-section-2";
import { HomeTrustBar } from "@/components/Home/TrustBar/HomeTrustBar";
import { homeHeroContent } from "@/data/hero";

export function HomeHero() {
  return (
    <section className="relative bg-background" aria-label="Hero section">
      <div className="mx-auto w-full max-w-[1280px] px-4 pt-16 sm:px-6 sm:pt-20 md:px-10 md:pt-24 lg:px-12">
        <HeroSection
          className="md:max-h-[min(560px,82vh)] md:overflow-hidden"
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

        <HomeTrustBar className="mt-6 sm:mt-8 md:mt-10" />
      </div>
    </section>
  );
}
