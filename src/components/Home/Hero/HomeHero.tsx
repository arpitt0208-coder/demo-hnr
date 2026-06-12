"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { heroBg } from "@/assets/images";
import { HomeTrustBar } from "@/components/Home/TrustBar/HomeTrustBar";
import { StormHeroBackground } from "@/components/UI/modern-hero-section";
import { WeatherEffect } from "@/components/UI/rain-and-lightening-hero-section";
import { useLocationWeather } from "@/hooks/useLocationWeather";
import type { LocationWeatherState } from "@/hooks/useLocationWeather";
import { cn } from "@/lib/utils";
import { getHomeHeroTheme, getRainIntensity } from "@/lib/weatherHero";
import { HomeHeroLeft } from "./HomeHeroLeft";
import { HomeHeroShowcase } from "./HomeHeroShowcase";
import { HomeHeroWeatherPreview } from "./HomeHeroWeatherPreview";

function getPreviewWeather(weather: LocationWeatherState): LocationWeatherState {
  return {
    ...weather,
    isLoading: false,
    isStormy: true,
    isThunderstorm: true,
    condition: "thunderstorm",
    conditionLabel: "Thunderstorm (preview)",
    temperature: weather.temperature ?? 14,
    locationName: weather.locationName,
  };
}

export function HomeHero() {
  const weather = useLocationWeather();
  const [stormPreview, setStormPreview] = useState(false);
  const displayWeather = stormPreview ? getPreviewWeather(weather) : weather;
  const heroTheme = getHomeHeroTheme(
    weather.isLoading,
    weather.isStormy,
    stormPreview,
  );
  const showStormHero = heroTheme === "storm";

  const heroContent = (
    <div className="relative z-10 mx-auto w-full max-w-[1320px]">
      <div className="relative grid items-start gap-6 pb-4 sm:gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8 lg:pb-6">
        <div className="relative z-20 w-full min-w-0 self-start justify-self-start lg:max-w-[560px] xl:max-w-[580px]">
          <HomeHeroLeft theme={showStormHero ? "storm" : "default"} weather={displayWeather} />
        </div>

        <div className="relative z-10 flex w-full min-w-0 items-start justify-center overflow-x-clip lg:min-h-[600px]">
          <HomeHeroShowcase theme={showStormHero ? "storm" : "default"} />
        </div>
      </div>

      <HomeTrustBar theme={showStormHero ? "storm" : "default"} />
    </div>
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={cn(
        "relative overflow-x-clip px-4 pb-6 pt-20 sm:px-6 sm:pb-8 sm:pt-24 md:px-10 md:pt-28 lg:px-16 lg:pb-12 lg:pt-32 xl:px-20 xl:pt-36",
        showStormHero && "bg-gradient-to-b from-zinc-950 via-zinc-900 to-black"
      )}
      aria-label="Hero section"
    >
      {showStormHero ? (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <StormHeroBackground />
          <WeatherEffect
            className="h-full w-full"
            rainIntensity={getRainIntensity(displayWeather.isThunderstorm)}
            rainSpeed={0.12}
            rainAngle={14}
            rainColor="rgba(174, 194, 224, 0.55)"
            lightningEnabled={displayWeather.isThunderstorm}
            lightningFrequency={4}
            lightningSpeed={0.8}
            lightningIntensity={1.2}
            lightningSize={1.6}
            thunderEnabled={displayWeather.isThunderstorm}
            thunderVolume={0.35}
            thunderDelay={1.5}
          />
        </div>
      ) : (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Image
            src={heroBg}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>
      )}

      <div className="pointer-events-auto absolute right-4 top-24 z-50 sm:right-6 md:right-10 lg:right-16 xl:right-20">
        <HomeHeroWeatherPreview
          active={stormPreview}
          onToggle={() => setStormPreview((current) => !current)}
        />
      </div>

      {heroContent}
    </motion.section>
  );
}
