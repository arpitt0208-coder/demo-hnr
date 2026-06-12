"use client";

import { useEffect, useState } from "react";
import {
  DEFAULT_LOCATION,
  fetchCurrentWeather,
  isBadWeather,
  isStormWeather,
  requestUserCoordinates,
  reverseGeocode,
  type CurrentWeather,
  type GeoLocation,
} from "@/lib/weather";

export type UserWeatherState = {
  weather: CurrentWeather | null;
  location: GeoLocation | null;
  isLoading: boolean;
  isBadWeather: boolean;
  isStorm: boolean;
};

export function useUserWeather(): UserWeatherState {
  const [weather, setWeather] = useState<CurrentWeather | null>(null);
  const [location, setLocation] = useState<GeoLocation | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function loadWeather() {
      try {
        let coords = {
          latitude: DEFAULT_LOCATION.latitude,
          longitude: DEFAULT_LOCATION.longitude,
        };

        try {
          const position = await requestUserCoordinates();
          coords = {
            latitude: position.latitude,
            longitude: position.longitude,
          };
        } catch {
          // Fall back to the primary service area when permission is denied.
        }

        const [resolvedLocation, currentWeather] = await Promise.all([
          reverseGeocode(coords.latitude, coords.longitude),
          fetchCurrentWeather(coords.latitude, coords.longitude),
        ]);

        if (cancelled) return;

        setLocation(resolvedLocation);
        setWeather(currentWeather);
      } catch (error) {
        console.error("Failed to load weather for hero:", error);
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    loadWeather();

    return () => {
      cancelled = true;
    };
  }, []);

  return {
    weather,
    location,
    isLoading,
    isBadWeather: weather ? isBadWeather(weather.weatherCode) : false,
    isStorm: weather ? isStormWeather(weather.weatherCode) : false,
  };
}
