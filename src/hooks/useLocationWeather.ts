"use client";

import { useEffect, useState } from "react";
import {
  DEFAULT_COORDINATES,
  fetchWeatherByCoordinates,
  reverseGeocodeCoordinates,
  type WeatherCondition,
  type WeatherSnapshot,
} from "@/lib/weather";

export type LocationWeatherState = {
  isLoading: boolean;
  error: string | null;
  locationName: string;
  temperature: number | null;
  condition: WeatherCondition;
  conditionLabel: string;
  isStormy: boolean;
  isThunderstorm: boolean;
  usedFallbackLocation: boolean;
};

const initialState: LocationWeatherState = {
  isLoading: true,
  error: null,
  locationName: DEFAULT_COORDINATES.label,
  temperature: null,
  condition: "unknown",
  conditionLabel: "Current weather",
  isStormy: false,
  isThunderstorm: false,
  usedFallbackLocation: true,
};

function getCoordinates(): Promise<GeolocationCoordinates> {
  return new Promise((resolve, reject) => {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      reject(new Error("Geolocation is not supported."));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position.coords),
      (error) => reject(error),
      {
        enableHighAccuracy: false,
        timeout: 10_000,
        maximumAge: 15 * 60 * 1000,
      },
    );
  });
}

function toLocationWeatherState(
  weather: WeatherSnapshot | null,
  locationName: string,
  usedFallbackLocation: boolean,
  error: string | null,
): LocationWeatherState {
  return {
    isLoading: false,
    error,
    locationName,
    temperature: weather?.temperature ?? null,
    condition: weather?.condition ?? "unknown",
    conditionLabel: weather?.label ?? "Current weather",
    isStormy: weather?.isStormy ?? false,
    isThunderstorm: weather?.isThunderstorm ?? false,
    usedFallbackLocation,
  };
}

export function useLocationWeather(): LocationWeatherState {
  const [state, setState] = useState<LocationWeatherState>(initialState);

  useEffect(() => {
    let cancelled = false;

    async function loadWeather() {
      let latitude: number = DEFAULT_COORDINATES.latitude;
      let longitude: number = DEFAULT_COORDINATES.longitude;
      let locationName = DEFAULT_COORDINATES.label;
      let usedFallbackLocation = true;

      try {
        const coords = await getCoordinates();
        latitude = coords.latitude;
        longitude = coords.longitude;
        usedFallbackLocation = false;
      } catch {
        // Keep Manali as the fallback when permission is denied or unavailable.
      }

      try {
        const [weather, reverseLabel] = await Promise.all([
          fetchWeatherByCoordinates(latitude, longitude),
          reverseGeocodeCoordinates(latitude, longitude),
        ]);

        if (cancelled) return;

        setState(
          toLocationWeatherState(
            weather,
            reverseLabel ?? locationName,
            usedFallbackLocation,
            null,
          ),
        );
      } catch (error) {
        if (cancelled) return;

        setState(
          toLocationWeatherState(
            null,
            locationName,
            usedFallbackLocation,
            error instanceof Error
              ? error.message
              : "Unable to load weather for your location.",
          ),
        );
      }
    }

    void loadWeather();

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
