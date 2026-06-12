"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CloudRain, MapPin, Zap } from "lucide-react";
import { heroBg } from "@/assets/images";
import { HomeTrustBar } from "@/components/Home/TrustBar/HomeTrustBar";
import { WeatherEffect } from "@/components/UI/rain-and-lightening-hero-section";
import { useUserWeather } from "@/hooks/useUserWeather";
import { HomeHeroLeft } from "./HomeHeroLeft";
import { HomeHeroShowcase } from "./HomeHeroShowcase";

function StormWeatherBadge({
  locationLabel,
  weatherLabel,
  temperature,
  isThunderstorm,
}: {
  locationLabel: string;
  weatherLabel: string;
  temperature: number | null;
  isThunderstorm: boolean;
}) {
  const Icon = isThunderstorm ? Zap : CloudRain;

  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-xs font-semibold text-zinc-100 backdrop-blur-sm sm:text-sm">
      <MapPin className="size-3.5 shrink-0 text-primary-yellow" aria-hidden />
      <span className="truncate">{locationLabel}</span>
      <span className="text-zinc-400" aria-hidden>
        ·
      </span>
      <Icon className="size-3.5 shrink-0 text-sky-300" aria-hidden />
      <span>
        {weatherLabel}
        {temperature !== null ? ` · ${Math.round(temperature)}°C` : ""}
      </span>
    </div>
  );
}

export function HomeHero() {
  const { loading, weather, locationLabel } = useUserWeather();
  const isStormy = !loading && Boolean(weather?.isStormy);
  const isThunderstorm = Boolean(weather?.isThunderstorm);

  const heroContent = (
    <div className="relative z-10 mx-auto w-full max-w-[1320px]">
      <div className="relative grid items-start gap-6 pb-4 sm:gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8 lg:pb-6">
        <div className="relative z-20 w-full min-w-0 self-start justify-self-start lg:max-w-[560px] xl:max-w-[580px]">
          {isStormy && weather && (
            <StormWeatherBadge
              locationLabel={locationLabel}
              weatherLabel={weather.label}
              temperature={weather.temperature}
              isThunderstorm={isThunderstorm}
            />
          )}
          <HomeHeroLeft variant={isStormy ? "storm" : "default"} />
        </div>

        <div className="relative z-10 flex w-full min-w-0 items-start justify-center overflow-x-clip lg:min-h-[600px]">
          <HomeHeroShowcase variant={isStormy ? "storm" : "default"} />
        </div>
      </div>

      <HomeTrustBar />
    </div>
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-x-clip px-4 pb-6 pt-20 sm:px-6 sm:pb-8 sm:pt-24 md:px-10 md:pt-28 lg:px-16 lg:pb-12 lg:pt-32 xl:px-20 xl:pt-36"
      aria-label="Hero section"
    >
      {isStormy ? (
        <WeatherEffect
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black"
          rainIntensity={isThunderstorm ? 200 : 140}
          rainSpeed={isThunderstorm ? 0.1 : 0.15}
          rainAngle={15}
          rainColor="rgba(174, 194, 224, 0.55)"
          lightningEnabled={isThunderstorm}
          lightningFrequency={isThunderstorm ? 4 : 8}
          lightningSpeed={0.8}
          lightningIntensity={1.3}
          lightningSize={1.8}
          thunderEnabled={isThunderstorm}
          thunderVolume={0.35}
          thunderDelay={1.5}
        >
          <div aria-hidden />
        </WeatherEffect>
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

      {heroContent}
    </motion.section>
  );
}
