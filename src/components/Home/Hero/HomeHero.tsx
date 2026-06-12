"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { heroBg } from "@/assets/images";
import { HomeTrustBar } from "@/components/Home/TrustBar/HomeTrustBar";
import { WeatherEffect } from "@/components/UI/rain-and-lightening-hero-section";
import { useUserWeather } from "@/hooks/useUserWeather";
import { cn } from "@/lib/utils";
import type { CurrentWeather, GeoLocation, WeatherCondition } from "@/lib/weather";
import {
  HomeHeroWeatherControls,
  type HeroWeatherPreviewMode,
} from "./HomeHeroWeatherControls";
import { HomeHeroLeft } from "./HomeHeroLeft";
import { HomeHeroShowcase } from "./HomeHeroShowcase";

const PREVIEW_LOCATION: GeoLocation = {
  latitude: 32.2396,
  longitude: 77.1887,
  name: "Manali",
  region: "Himachal Pradesh",
};

const PREVIEW_WEATHER: Record<
  Exclude<HeroWeatherPreviewMode, "live" | "default">,
  CurrentWeather
> = {
  rain: {
    weatherCode: 63,
    condition: "rain",
    temperatureC: 14,
    precipitationMm: 2.4,
    isDay: false,
  },
  thunderstorm: {
    weatherCode: 95,
    condition: "thunderstorm",
    temperatureC: 11,
    precipitationMm: 6.1,
    isDay: false,
  },
};

function HomeHeroContent({
  theme = "default",
  locationName,
  weatherCondition,
  temperatureC,
  showcaseMuted = false,
}: {
  theme?: "default" | "storm";
  locationName?: string;
  weatherCondition?: WeatherCondition;
  temperatureC?: number;
  showcaseMuted?: boolean;
}) {
  return (
    <div className="relative z-10 mx-auto w-full max-w-[1320px]">
      <div className="relative grid items-start gap-6 pb-4 sm:gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8 lg:pb-6">
        <div className="relative z-20 w-full min-w-0 self-start justify-self-start lg:max-w-[560px] xl:max-w-[580px]">
          <HomeHeroLeft
            theme={theme}
            locationName={locationName}
            weatherCondition={weatherCondition}
            temperatureC={temperatureC}
          />
        </div>

        <div
          className={cn(
            "relative z-10 flex w-full min-w-0 items-start justify-center overflow-x-clip lg:min-h-[600px]",
            showcaseMuted && "opacity-90 brightness-90",
          )}
        >
          <HomeHeroShowcase theme={theme} />
        </div>
      </div>

      <HomeTrustBar />
    </div>
  );
}

export function HomeHero() {
  const { weather, location, isLoading, isBadWeather, isStorm } =
    useUserWeather();
  const [previewMode, setPreviewMode] = useState<HeroWeatherPreviewMode>("live");

  const heroState = useMemo(() => {
    if (previewMode === "default") {
      return { showStormHero: false, isStormMode: false };
    }

    if (previewMode === "rain") {
      return { showStormHero: true, isStormMode: false };
    }

    if (previewMode === "thunderstorm") {
      return { showStormHero: true, isStormMode: true };
    }

    return {
      showStormHero: !isLoading && isBadWeather && Boolean(weather && location),
      isStormMode: isStorm,
    };
  }, [previewMode, isLoading, isBadWeather, isStorm, weather, location]);

  const activeWeather =
    previewMode === "rain"
      ? PREVIEW_WEATHER.rain
      : previewMode === "thunderstorm"
        ? PREVIEW_WEATHER.thunderstorm
        : weather;

  const activeLocation =
    previewMode === "rain" || previewMode === "thunderstorm"
      ? PREVIEW_LOCATION
      : location;

  const liveLabel =
    weather && location
      ? `${weather.condition} · ${location.name}`
      : undefined;

  const controlsClassName =
    "absolute bottom-4 left-4 z-50 sm:bottom-6 sm:left-auto sm:right-6";

  if (heroState.showStormHero && activeWeather && activeLocation) {
    const stormMode = heroState.isStormMode;

    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-x-clip bg-gradient-to-b from-zinc-950 via-zinc-900 to-black px-4 pb-6 pt-20 sm:px-6 sm:pb-8 sm:pt-24 md:px-10 md:pt-28 lg:px-16 lg:pb-12 lg:pt-32 xl:px-20 xl:pt-36"
        aria-label="Hero section"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <WeatherEffect
            className="h-full min-h-[480px] w-full"
            contentLayout="default"
            rainIntensity={stormMode ? 220 : 160}
            rainSpeed={stormMode ? 0.1 : 0.14}
            rainAngle={stormMode ? 15 : 12}
            rainColor="rgba(174, 194, 224, 0.55)"
            lightningEnabled={stormMode}
            lightningFrequency={stormMode ? 4 : 0}
            lightningSpeed={0.8}
            lightningIntensity={1.2}
            lightningSize={1.8}
            thunderEnabled={stormMode}
            thunderVolume={0.35}
            thunderDelay={1.5}
          />
        </div>

        <HomeHeroContent
          theme="storm"
          locationName={activeLocation.name}
          weatherCondition={activeWeather.condition}
          temperatureC={activeWeather.temperatureC}
          showcaseMuted
        />

        <HomeHeroWeatherControls
          mode={previewMode}
          onModeChange={setPreviewMode}
          isLoading={previewMode === "live" && isLoading}
          liveLabel={liveLabel}
          variant="dark"
          className={controlsClassName}
        />
      </motion.section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-x-clip px-4 pb-6 pt-20 sm:px-6 sm:pb-8 sm:pt-24 md:px-10 md:pt-28 lg:px-16 lg:pb-12 lg:pt-32 xl:px-20 xl:pt-36"
      aria-label="Hero section"
    >
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

      <HomeHeroContent />

      <HomeHeroWeatherControls
        mode={previewMode}
        onModeChange={setPreviewMode}
        isLoading={previewMode === "live" && isLoading}
        liveLabel={liveLabel}
        variant="light"
        className={controlsClassName}
      />
    </motion.section>
  );
}
