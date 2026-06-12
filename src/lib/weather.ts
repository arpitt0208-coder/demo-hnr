export type WeatherCondition =
  | "clear"
  | "cloudy"
  | "fog"
  | "drizzle"
  | "rain"
  | "snow"
  | "thunderstorm"
  | "unknown";

export type CurrentWeather = {
  weatherCode: number;
  condition: WeatherCondition;
  temperatureC: number;
  precipitationMm: number;
  isDay: boolean;
};

export type GeoLocation = {
  latitude: number;
  longitude: number;
  name: string;
  region?: string;
};

/** Default pickup hub when geolocation is unavailable. */
export const DEFAULT_LOCATION: GeoLocation = {
  latitude: 32.2396,
  longitude: 77.1887,
  name: "Manali",
  region: "Himachal Pradesh",
};

const DRIZZLE_CODES = new Set([51, 53, 55, 56, 57]);
const RAIN_CODES = new Set([61, 63, 65, 66, 67, 80, 81, 82]);
const SNOW_CODES = new Set([71, 73, 75, 77, 85, 86]);
const THUNDERSTORM_CODES = new Set([95, 96, 99]);

export function getWeatherCondition(code: number): WeatherCondition {
  if (code === 0) return "clear";
  if (code >= 1 && code <= 3) return "cloudy";
  if (code === 45 || code === 48) return "fog";
  if (DRIZZLE_CODES.has(code)) return "drizzle";
  if (RAIN_CODES.has(code)) return "rain";
  if (SNOW_CODES.has(code)) return "snow";
  if (THUNDERSTORM_CODES.has(code)) return "thunderstorm";
  return "unknown";
}

export function isStormWeather(code: number): boolean {
  return THUNDERSTORM_CODES.has(code);
}

export function isRainWeather(code: number): boolean {
  return DRIZZLE_CODES.has(code) || RAIN_CODES.has(code);
}

export function isBadWeather(code: number): boolean {
  return isStormWeather(code) || isRainWeather(code);
}

export function getWeatherLabel(condition: WeatherCondition): string {
  switch (condition) {
    case "thunderstorm":
      return "Thunderstorm";
    case "rain":
      return "Rain";
    case "drizzle":
      return "Drizzle";
    case "snow":
      return "Snow";
    case "fog":
      return "Fog";
    case "cloudy":
      return "Cloudy";
    case "clear":
      return "Clear";
    default:
      return "Weather update";
  }
}

export async function reverseGeocode(
  latitude: number,
  longitude: number,
): Promise<GeoLocation> {
  const params = new URLSearchParams({
    latitude: latitude.toString(),
    longitude: longitude.toString(),
    language: "en",
    format: "json",
  });

  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/reverse?${params.toString()}`,
  );

  if (!response.ok) {
    return { latitude, longitude, name: "Your area" };
  }

  const data = (await response.json()) as {
    results?: Array<{
      name: string;
      admin1?: string;
      country?: string;
    }>;
  };

  const place = data.results?.[0];
  if (!place) {
    return { latitude, longitude, name: "Your area" };
  }

  return {
    latitude,
    longitude,
    name: place.name,
    region: place.admin1,
  };
}

export async function fetchCurrentWeather(
  latitude: number,
  longitude: number,
): Promise<CurrentWeather> {
  const params = new URLSearchParams({
    latitude: latitude.toString(),
    longitude: longitude.toString(),
    current: "weather_code,temperature_2m,precipitation,is_day",
    timezone: "auto",
  });

  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?${params.toString()}`,
  );

  if (!response.ok) {
    throw new Error("Unable to fetch weather data.");
  }

  const data = (await response.json()) as {
    current: {
      weather_code: number;
      temperature_2m: number;
      precipitation: number;
      is_day: number;
    };
  };

  const weatherCode = data.current.weather_code;

  return {
    weatherCode,
    condition: getWeatherCondition(weatherCode),
    temperatureC: data.current.temperature_2m,
    precipitationMm: data.current.precipitation,
    isDay: data.current.is_day === 1,
  };
}

export function requestUserCoordinates(): Promise<GeolocationCoordinates> {
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
