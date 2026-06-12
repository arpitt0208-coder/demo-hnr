"use client";

import { useEffect, useState } from "react";
import {
  DEFAULT_COORDINATES,
  fetchWeatherByCoordinates,
  reverseGeocodeCoordinates,
  type WeatherSnapshot,
} from "@/lib/weather";

type UserWeatherState = {
  loading: boolean;
  error: string | null;
  latitude: number | null;
  longitude: number | null;
  locationLabel: string;
  usedFallbackLocation: boolean;
  weather: WeatherSnapshot | null;
};

const initialState: UserWeatherState = {
  loading: true,
  error: null,
  latitude: null,
  longitude: null,
  locationLabel: DEFAULT_COORDINATES.label,
  usedFallbackLocation: true,
  weather: null,
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

export function useUserWeather() {
  const [state, setState] = useState<UserWeatherState>(initialState);

  useEffect(() => {
    let cancelled = false;

    async function loadWeather() {
      let latitude: number = DEFAULT_COORDINATES.latitude;
      let longitude: number = DEFAULT_COORDINATES.longitude;
      let locationLabel = DEFAULT_COORDINATES.label;
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

        setState({
          loading: false,
          error: null,
          latitude,
          longitude,
          locationLabel: reverseLabel ?? locationLabel,
          usedFallbackLocation,
          weather,
        });
      } catch (error) {
        if (cancelled) return;

        setState({
          loading: false,
          error:
            error instanceof Error
              ? error.message
              : "Unable to load weather for your location.",
          latitude,
          longitude,
          locationLabel,
          usedFallbackLocation,
          weather: null,
        });
      }
    }

    void loadWeather();

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
