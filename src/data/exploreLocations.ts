import type { StaticImageData } from "next/image";
import { bhuntar, kasol } from "@/assets/images";
import {
  khardungLa,
  manaliView,
  tirthanValley,
} from "@/assets/images/gallery/galleryImages";

export type ExploreLocationHero = {
  badge: string;
  titleHighlight: string;
  titleRest: string;
  subtitle: string;
  pricingNote: string;
};

export type ExploreLocation = {
  slug: string;
  name: string;
  region: string;
  description: string;
  image: StaticImageData;
  highlights: string[];
  bikesLabel: string;
  hero: ExploreLocationHero;
  /** Vehicle `location` field values shown on this location explore page. */
  vehicleLocationSlugs: string[];
};

export const exploreLocations: ExploreLocation[] = [
  {
    slug: "manali",
    name: "Manali",
    region: "Himachal Pradesh, India",
    description:
      "Snow peaks, pine forests, and the charm of old Manali town—pick up a well-maintained bike and ride Solang, Rohtang, and riverside trails with local support.",
    image: manaliView,
    highlights: ["Solang Valley", "Rohtang Pass", "Old Manali cafes"],
    bikesLabel: "55+ Bikes",
    hero: {
      badge: "MANALI, HIMACHAL PRADESH",
      titleHighlight: "Rent a Bike",
      titleRest: "in Manali — Delivered to Your Hotel",
      subtitle:
        "Royal Enfield, Himalayan and scooters — book in minutes, right from the app.",
      pricingNote:
        "From ₹800/day • hourly rides from ₹31/hr (varies by bike & dates).",
    },
    vehicleLocationSlugs: ["manali", "bhuntar"],
  },
  {
    slug: "kullu",
    name: "Kullu",
    region: "Himachal Pradesh, India",
    description:
      "Terraced hillsides and the Beas winding through the valley—ideal for relaxed cruises, temple towns, and scenic day loops from your pickup point.",
    image: tirthanValley,
    highlights: ["Kullu Valley", "Beas River", "Temple towns"],
    bikesLabel: "40+ Bikes",
    hero: {
      badge: "KULLU, HIMACHAL PRADESH",
      titleHighlight: "Rent a Bike",
      titleRest: "in Kullu — Delivered to Your Stay",
      subtitle:
        "Royal Enfield, Himalayan and scooters — book in minutes, right from the app.",
      pricingNote:
        "From ₹750/day • hourly rides from ₹29/hr (varies by bike & dates).",
    },
    vehicleLocationSlugs: ["kullu", "bhuntar"],
  },
  {
    slug: "kasol",
    name: "Kasol",
    region: "Himachal Pradesh, India",
    description:
      "Parvati Valley trails, riverside cafés, and pine-forest roads—rent a bike built for hill riding and explore Kasol, Manikaran, and nearby treks.",
    image: kasol,
    highlights: ["Parvati River", "Pine forests", "Trekking trails"],
    bikesLabel: "40+ Bikes",
    hero: {
      badge: "KASOL, HIMACHAL PRADESH",
      titleHighlight: "Rent a Bike",
      titleRest: "in Kasol — Delivered to Your Stay",
      subtitle:
        "Royal Enfield, Himalayan and scooters — book in minutes, right from the app.",
      pricingNote:
        "From ₹800/day • hourly rides from ₹31/hr (varies by bike & dates).",
    },
    vehicleLocationSlugs: ["kasol", "bhuntar"],
  },
  {
    slug: "leh-ladakh",
    name: "Leh Ladakh",
    region: "Ladakh, India",
    description:
      "High-altitude desert landscapes and ancient monasteries—adventure-ready bikes for Khardung La, Nubra, and the dramatic roads of Ladakh.",
    image: khardungLa,
    highlights: ["High passes", "Monasteries", "Adventure routes"],
    bikesLabel: "30+ Bikes",
    hero: {
      badge: "LEH LADAKH, INDIA",
      titleHighlight: "Rent a Bike",
      titleRest: "in Leh — Delivered to Your Hotel",
      subtitle:
        "Adventure-ready Royal Enfield and Himalayan bikes — book in minutes, right from the app.",
      pricingNote:
        "From ₹1,200/day • hourly rides from ₹45/hr (varies by bike & dates).",
    },
    vehicleLocationSlugs: ["leh-ladakh", "bhuntar"],
  },
  {
    slug: "bhuntar",
    name: "Bhuntar",
    region: "Himachal Pradesh, India",
    description:
      "Gateway to Kullu Valley with easy airport access—collect your rental here and head toward Manali, Kasol, or deeper into the Himalayas.",
    image: bhuntar,
    highlights: ["Bhuntar Airport", "Beas River", "Kullu Valley gateway"],
    bikesLabel: "55+ Bikes",
    hero: {
      badge: "BHUNTAR, HIMACHAL PRADESH",
      titleHighlight: "Rent a Bike",
      titleRest: "in Bhuntar — Airport Pickup Available",
      subtitle:
        "Royal Enfield, Himalayan and scooters — book in minutes, right from the app.",
      pricingNote:
        "From ₹800/day • hourly rides from ₹31/hr (varies by bike & dates).",
    },
    vehicleLocationSlugs: ["bhuntar"],
  },
];

export function getExploreLocationBySlug(
  slug: string,
): ExploreLocation | undefined {
  return exploreLocations.find((location) => location.slug === slug);
}
