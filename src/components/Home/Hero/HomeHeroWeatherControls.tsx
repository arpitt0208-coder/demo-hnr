"use client";

import { Cloud, CloudLightning, CloudRain, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export type HeroWeatherPreviewMode = "live" | "default" | "rain" | "thunderstorm";

type HomeHeroWeatherControlsProps = {
  mode: HeroWeatherPreviewMode;
  onModeChange: (mode: HeroWeatherPreviewMode) => void;
  isLoading?: boolean;
  liveLabel?: string;
  variant?: "light" | "dark";
  className?: string;
};

const modes: Array<{
  id: HeroWeatherPreviewMode;
  label: string;
  icon: typeof Cloud;
}> = [
  { id: "live", label: "Live", icon: MapPin },
  { id: "default", label: "Default", icon: Cloud },
  { id: "rain", label: "Rain", icon: CloudRain },
  { id: "thunderstorm", label: "Storm", icon: CloudLightning },
];

export function HomeHeroWeatherControls({
  mode,
  onModeChange,
  isLoading = false,
  liveLabel,
  variant = "dark",
  className,
}: HomeHeroWeatherControlsProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "pointer-events-auto flex flex-col items-start gap-2 sm:items-end",
        className,
      )}
      role="toolbar"
      aria-label="Hero weather preview controls"
    >
      <p
        className={cn(
          "rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] backdrop-blur-md sm:text-[11px]",
          isDark
            ? "border-white/15 bg-black/50 text-zinc-300"
            : "border-dark-navy/10 bg-white/90 text-text-gray shadow-sm",
        )}
      >
        Weather preview
        {mode === "live" && liveLabel ? ` · ${liveLabel}` : ""}
        {mode === "live" && isLoading ? " · loading…" : ""}
      </p>

      <div
        className={cn(
          "flex flex-wrap gap-1.5 rounded-2xl border p-1.5 shadow-lg backdrop-blur-md sm:gap-2 sm:rounded-full sm:p-1",
          isDark
            ? "border-white/15 bg-black/55"
            : "border-dark-navy/10 bg-white/92",
        )}
      >
        {modes.map(({ id, label, icon: Icon }) => {
          const isActive = mode === id;

          return (
            <button
              key={id}
              type="button"
              onClick={() => onModeChange(id)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-[11px] font-semibold transition sm:rounded-full sm:px-3 sm:py-2 sm:text-xs",
                isActive
                  ? "bg-primary-yellow text-dark-navy shadow-sm"
                  : isDark
                    ? "text-zinc-200 hover:bg-white/10"
                    : "text-dark-navy hover:bg-dark-navy/5",
              )}
              aria-pressed={isActive}
            >
              <Icon className="size-3.5 shrink-0" aria-hidden="true" />
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
