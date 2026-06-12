export type WeatherCondition =
  | "clear"
  | "cloudy"
  | "fog"
  | "drizzle"
  | "rain"
  | "snow"
  | "thunderstorm"
  | "unknown";

export type WeatherSnapshot = {
  temperature: number;
  weatherCode: number;
  condition: WeatherCondition;
  isStormy: boolean;
  isThunderstorm: boolean;
  label: string;
};

/** Default fallback: Manali, Himachal Pradesh — primary service area. */
export const DEFAULT_COORDINATES = {
  latitude: 32.2396,
  longitude: 77.1887,
  label: "Manali",
} as const;

const STORMY_WEATHER_CODES = new Set([
  51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 97, 98, 99,
]);

const THUNDERSTORM_WEATHER_CODES = new Set([95, 96, 97, 98, 99]);

export function getWeatherCondition(code: number): WeatherCondition {
  if (code === 0) return "clear";
  if (code >= 1 && code <= 3) return "cloudy";
  if (code >= 45 && code <= 48) return "fog";
  if (code >= 51 && code <= 57) return "drizzle";
  if (code >= 61 && code <= 67) return "rain";
  if (code >= 71 && code <= 77) return "snow";
  if (code >= 80 && code <= 82) return "rain";
  if (code >= 95 && code <= 99) return "thunderstorm";
  return "unknown";
}

export function getWeatherLabel(condition: WeatherCondition): string {
  switch (condition) {
    case "clear":
      return "Clear skies";
    case "cloudy":
      return "Cloudy";
    case "fog":
      return "Foggy";
    case "drizzle":
      return "Light rain";
    case "rain":
      return "Rain";
    case "snow":
      return "Snow";
    case "thunderstorm":
      return "Thunderstorm";
    default:
      return "Current weather";
  }
}

export function isStormyWeatherCode(code: number): boolean {
  return STORMY_WEATHER_CODES.has(code);
}

export function isThunderstormWeatherCode(code: number): boolean {
  return THUNDERSTORM_WEATHER_CODES.has(code);
}

export function toWeatherSnapshot(
  weatherCode: number,
  temperature: number,
): WeatherSnapshot {
  const condition = getWeatherCondition(weatherCode);
  return {
    temperature,
    weatherCode,
    condition,
    isStormy: isStormyWeatherCode(weatherCode),
    isThunderstorm: isThunderstormWeatherCode(weatherCode),
    label: getWeatherLabel(condition),
  };
}

type OpenMeteoCurrentResponse = {
  current?: {
    temperature_2m?: number;
    weather_code?: number;
  };
};

type OpenMeteoReverseGeocodeResponse = {
  results?: Array<{
    name?: string;
    admin1?: string;
    country?: string;
  }>;
};

export async function fetchWeatherByCoordinates(
  latitude: number,
  longitude: number,
): Promise<WeatherSnapshot> {
  const params = new URLSearchParams({
    latitude: String(latitude),
    longitude: String(longitude),
    current: "temperature_2m,weather_code",
    timezone: "auto",
  });

  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?${params.toString()}`,
  );

  if (!response.ok) {
    throw new Error("Unable to fetch weather data.");
  }

  const data = (await response.json()) as OpenMeteoCurrentResponse;
  const weatherCode = data.current?.weather_code ?? 0;
  const temperature = data.current?.temperature_2m ?? 0;

  return toWeatherSnapshot(weatherCode, temperature);
}

export async function reverseGeocodeCoordinates(
  latitude: number,
  longitude: number,
): Promise<string | null> {
  const params = new URLSearchParams({
    latitude: String(latitude),
    longitude: String(longitude),
    language: "en",
    count: "1",
  });

  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/reverse?${params.toString()}`,
  );

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as OpenMeteoReverseGeocodeResponse;
  const place = data.results?.[0];
  if (!place?.name) return null;

  if (place.admin1 && place.admin1 !== place.name) {
    return `${place.name}, ${place.admin1}`;
  }

  return place.name;
}
