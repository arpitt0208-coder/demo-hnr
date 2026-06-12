import type { WeatherCondition } from "@/lib/weather";

const STORMY_CONDITIONS = new Set<WeatherCondition>([
  "drizzle",
  "rain",
  "thunderstorm",
]);

export type HomeHeroTheme = "default" | "storm";

export function isBadWeatherCondition(condition: WeatherCondition): boolean {
  return STORMY_CONDITIONS.has(condition);
}

export function getHomeHeroTheme(
  isLoading: boolean,
  isStormy: boolean,
  forceStorm = false,
): HomeHeroTheme {
  if (forceStorm) {
    return "storm";
  }

  if (isLoading || !isStormy) {
    return "default";
  }

  return "storm";
}

export function getRainIntensity(isThunderstorm: boolean): number {
  return isThunderstorm ? 180 : 120;
}
