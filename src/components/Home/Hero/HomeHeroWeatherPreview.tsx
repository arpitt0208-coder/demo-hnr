"use client";

import { cn } from "@/lib/utils";
import { CloudLightning, CloudRain, Sun } from "lucide-react";

type HomeHeroWeatherPreviewProps = {
  active: boolean;
  onToggle: () => void;
  className?: string;
};

export function HomeHeroWeatherPreview({
  active,
  onToggle,
  className,
}: HomeHeroWeatherPreviewProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={active}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[11px] font-semibold tracking-wide backdrop-blur-md transition-colors sm:px-4 sm:text-xs",
        active
          ? "border-primary-yellow/40 bg-primary-yellow/15 text-primary-yellow hover:bg-primary-yellow/25"
          : "border-white/20 bg-black/40 text-white hover:bg-black/55",
        className,
      )}
    >
      {active ? (
        <>
          <Sun className="size-3.5 shrink-0" aria-hidden="true" />
          Back to live weather
        </>
      ) : (
        <>
          <CloudRain className="size-3.5 shrink-0" aria-hidden="true" />
          Preview storm hero
          <CloudLightning className="size-3.5 shrink-0 text-sky-300" aria-hidden="true" />
        </>
      )}
    </button>
  );
}
