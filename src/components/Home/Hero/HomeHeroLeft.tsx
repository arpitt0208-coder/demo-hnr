"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { adventure } from "@/assets/images";
import { ArrowRight, CloudRain, CloudLightning } from "lucide-react";
import { Badge } from "@/components/UI/Badge";
import ShinyButton from "@/components/UI/shiny-button";
import { cn } from "@/lib/utils";
import type { WeatherCondition } from "@/lib/weather";
import { getWeatherLabel } from "@/lib/weather";

type HomeHeroLeftProps = {
  theme?: "default" | "storm";
  locationName?: string;
  weatherCondition?: WeatherCondition;
  temperatureC?: number;
};

export function HomeHeroLeft({
  theme = "default",
  locationName,
  weatherCondition,
  temperatureC,
}: HomeHeroLeftProps) {
  const isStormTheme = theme === "storm";
  const WeatherIcon =
    weatherCondition === "thunderstorm" ? CloudLightning : CloudRain;
  const weatherLabel = weatherCondition
    ? getWeatherLabel(weatherCondition)
    : null;
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex w-full flex-col items-start text-left"
    >
      <Badge
        className={cn(
          isStormTheme
            ? "border-white/20 bg-white/10 text-white"
            : "border-primary-yellow/80 bg-primary-yellow/10",
        )}
      >
        {isStormTheme && weatherLabel && locationName ? (
          <span className="inline-flex items-center gap-1.5">
            <WeatherIcon className="size-3.5" aria-hidden="true" />
            {weatherLabel} in {locationName}
            {typeof temperatureC === "number" ? ` · ${Math.round(temperatureC)}°C` : ""}
          </span>
        ) : (
          "BEST SERVICES"
        )}
      </Badge>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={cn(
          "mt-4 text-[28px] font-extrabold leading-[1.08] tracking-tight min-[400px]:text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] xl:text-[55px]",
          isStormTheme ? "text-white" : "text-dark-navy",
        )}
      >
        <span className="block">Premium Himalayan</span>
        <span className="block">Bike Rentals</span>
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
            className="object-contain object-left-bottom"
          />
        </span>
        {/* mt-4 text-[32px] font-extrabold leading-[1.08] tracking-tight text-dark-navy sm:text-[46px] md:text-[50px] lg:text-[55px] */}
        <span
          className={cn(
            "mb-1 text-[22px] font-extrabold leading-none min-[400px]:text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] xl:text-[40px]",
            isStormTheme ? "text-zinc-200" : "text-dark-navy",
          )}
        >
          {isStormTheme ? "Ride Safe, Ride Smart" : "Ready & Reliable"}
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className={cn(
          "mt-5 max-w-[440px] text-[14px] font-medium leading-[1.75] lg:text-[15px]",
          isStormTheme ? "text-zinc-300" : "text-[#475569]",
        )}
      >
        {isStormTheme
          ? "Rough weather near you — our bikes stay maintained and ready. Book with flexible support, rain gear guidance, and local assistance whenever you need it."
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
