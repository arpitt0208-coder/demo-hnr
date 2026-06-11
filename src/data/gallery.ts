import type { StaticImageData } from "next/image";
import {
  bhuntar,
  earnRestaurant,
  heroBg,
  kasol,
  manali,
} from "@/assets/images";

export const galleryHeroBackground = heroBg;

export type GalleryAccordionItem = {
  id: number;
  title: string;
  image: StaticImageData;
  alt: string;
  /** Keeps the subject visible when the panel is collapsed. */
  objectPosition?: string;
};

/** Location-only panels for the gallery hero accordion. */
export const galleryAccordionItems: GalleryAccordionItem[] = [
  {
    id: 1,
    title: "Manali",
    image: manali,
    alt: "Manali valley and mountain scenery, Himachal Pradesh",
    objectPosition: "62% 45%",
  },
  {
    id: 2,
    title: "Kullu",
    image: earnRestaurant,
    alt: "Kullu Valley terrace overlooking pine forests and Himalayan peaks",
    objectPosition: "center 38%",
  },
  {
    id: 3,
    title: "Bhuntar",
    image: bhuntar,
    alt: "Bhuntar valley with the Beas River and Himalayan peaks",
    objectPosition: "center 42%",
  },
  {
    id: 4,
    title: "Kasol",
    image: kasol,
    alt: "Kasol town with snow-capped peaks and pine forests",
    objectPosition: "center 38%",
  },
];

export const galleryHeroCopy = {
  title: {
    line1: "Explore Our",
    highlight: "Location Gallery",
  },
  description:
    "Manali, Kullu Valley, Leh Ladakh, and more—browse Himalayan destinations where Hire N Ride is ready for your next trip.",
} as const;
