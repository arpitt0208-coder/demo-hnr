"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { adventure } from "@/assets/images";
import { Badge } from "@/components/UI/Badge";
import ShinyButton from "@/components/UI/shiny-button";
import type { LocationWeatherState } from "@/hooks/useLocationWeather";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  MapPin,
  Thermometer,
} from "lucide-react";

type HomeHeroTheme = "default" | "storm";

interface HomeHeroLeftProps {
  theme?: HomeHeroTheme;
  weather?: LocationWeatherState;
}

function WeatherIcon({
  condition,
  className,
}: {
  condition: LocationWeatherState["condition"];
  className?: string;
}) {
  switch (condition) {
    case "thunderstorm":
      return <CloudLightning className={className} aria-hidden="true" />;
    case "snow":
      return <CloudSnow className={className} aria-hidden="true" />;
    case "fog":
      return <CloudFog className={className} aria-hidden="true" />;
    default:
      return <CloudRain className={className} aria-hidden="true" />;
  }
}

export function HomeHeroLeft({
  theme = "default",
  weather,
}: HomeHeroLeftProps) {
  const isStorm = theme === "storm";

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex w-full flex-col items-start text-left"
    >
      {isStorm && weather ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-3 inline-flex flex-wrap items-center gap-2"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-zinc-200 backdrop-blur-sm">
            <MapPin className="size-3.5 shrink-0 text-primary-yellow" />
            {weather.locationName}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-zinc-200 backdrop-blur-sm">
            <WeatherIcon condition={weather.condition} className="size-3.5 shrink-0 text-sky-300" />
            {weather.conditionLabel}
            {weather.temperature !== null && (
              <>
                <span className="text-white/30">·</span>
                <Thermometer className="size-3.5 shrink-0 text-primary-yellow" />
                {weather.temperature}°C
              </>
            )}
          </span>
        </motion.div>
      ) : (
        <Badge className="border-primary-yellow/80 bg-primary-yellow/10">
          BEST SERVICES
        </Badge>
      )}

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={cn(
          "mt-4 text-[28px] font-extrabold leading-[1.08] tracking-tight min-[400px]:text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] xl:text-[55px]",
          isStorm ? "text-white" : "text-dark-navy"
        )}
      >
        {isStorm ? (
          <>
            <span className="block">Ride Safe Through</span>
            <span className="block">the Storm</span>
          </>
        ) : (
          <>
            <span className="block">Premium Himalayan</span>
            <span className="block">Bike Rentals</span>
          </>
        )}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-2 flex flex-wrap items-end gap-x-3"
      >
        <span className="relative -mb-0.5 block h-12 w-[134px] shrink-0 sm:h-[58px] sm:w-[163px] md:h-16 md:w-[180px] lg:h-[76px] lg:w-[213px]">
          <Image
            src={adventure}
            alt="Adventure"
            fill
            priority
            sizes="(max-width: 640px) 134px, (max-width: 1024px) 180px, 213px"
            className={cn(
              "object-contain object-left-bottom",
              isStorm && "brightness-110 contrast-110"
            )}
          />
        </span>
        <span
          className={cn(
            "mb-1 text-[22px] font-extrabold leading-none min-[400px]:text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] xl:text-[40px]",
            isStorm ? "text-zinc-200" : "text-dark-navy"
          )}
        >
          {isStorm ? "Gear Up & Go" : "Ready & Reliable"}
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className={cn(
          "mt-5 max-w-[440px] text-[14px] font-medium leading-[1.75] lg:text-[15px]",
          isStorm ? "text-zinc-300" : "text-[#475569]"
        )}
      >
        {isStorm
          ? `Conditions near ${weather?.locationName ?? "your area"} call for extra care. Hire N Ride keeps you covered with maintained bikes, transparent pricing, and 24/7 local support — rain or shine.`
          : "Stop dreaming, start riding with Hire N Ride. You get a fully maintained bike, transparent pricing, and 24/7 local support. Your epic mountain adventure starts with one click. Book your ride now."}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="mt-6"
      >
        <Link href="/explore" className="inline-flex">
          <ShinyButton className="group inline-flex items-center gap-2 text-[14px] font-bold">
            Explore bikes
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </ShinyButton>
        </Link>
      </motion.div>
    </motion.div>
  );
}
