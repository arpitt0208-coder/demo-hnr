import type { StaticImageData } from "next/image";
import {
  kasol,
  khardungLa,
  manaliView,
  tirthanValley,
} from "@/assets/images/gallery/galleryImages";
import { heroBg } from "@/assets/images";

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
    image: manaliView,
    alt: "Panoramic view of Manali valley and snow-capped peaks",
    objectPosition: "62% 45%",
  },
  {
    id: 2,
    title: "Kullu",
    image: tirthanValley,
    alt: "Tirthan Valley terraced hills and river views in Kullu",
    objectPosition: "center 38%",
  },
  {
    id: 3,
    title: "Leh Ladakh",
    image: khardungLa,
    alt: "Khardung La pass — high-altitude road in Ladakh",
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
