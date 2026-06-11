import type { StaticImageData } from "next/image";
import {
  adventure,
  bhuntar,
  earnHotel,
  earnRestaurant,
  earnVolvo,
  him4,
  him5,
  kasol,
  manali,
  mountainbg,
} from "@/assets/images";

export const GALLERY_PREVIEW_COUNT = 6;

export type GalleryLocationImage = {
  id: string;
  src: StaticImageData | string;
  alt: string;
};

export type GalleryLocationSection = {
  id: string;
  slug: string;
  /** Display name, e.g. "Manali" → section title "Manali in Pictures" */
  name: string;
  description?: string;
  images: GalleryLocationImage[];
};

/** Placeholder pool — swap per-location `images` with your real assets later. */
const placeholderPool: StaticImageData[] = [
  manali,
  kasol,
  bhuntar,
  earnRestaurant,
  earnHotel,
  earnVolvo,
  him4,
  him5,
  adventure,
  mountainbg,
];

function buildPlaceholderImages(
  locationSlug: string,
  locationName: string,
  count = 8,
): GalleryLocationImage[] {
  return Array.from({ length: count }, (_, index) => {
    const src = placeholderPool[index % placeholderPool.length];

    return {
      id: `${locationSlug}-${index + 1}`,
      src,
      alt: `${locationName} gallery photo ${index + 1}`,
    };
  });
}

/** Location gallery sections — replace placeholder images with your own per location. */
export const galleryLocationSections: GalleryLocationSection[] = [
  {
    id: "manali",
    slug: "manali",
    name: "Manali",
    description: "Snow peaks, pine forests, and the charm of the old Manali town.",
    images: buildPlaceholderImages("manali", "Manali"),
  },
  {
    id: "kullu-valley",
    slug: "kullu-valley",
    name: "Kullu Valley",
    description: "Terraced hillsides and the Beas winding through the valley.",
    images: buildPlaceholderImages("kullu-valley", "Kullu Valley"),
  },
  {
    id: "leh-ladakh",
    slug: "leh-ladakh",
    name: "Leh Ladakh",
    description: "High-altitude desert landscapes and ancient monasteries.",
    images: buildPlaceholderImages("leh-ladakh", "Leh Ladakh"),
  },
  {
    id: "rohtang-pass",
    slug: "rohtang-pass",
    name: "Rohtang Pass",
    description: "Snow-lined passes and sweeping views above Manali.",
    images: buildPlaceholderImages("rohtang-pass", "Rohtang Pass"),
  },
  {
    id: "sissu",
    slug: "sissu",
    name: "Sissu",
    description:
      "Waterfalls, riverside trails, and quiet Himalayan scenery along the Manali–Leh highway.",
    images: buildPlaceholderImages("sissu", "Sissu"),
  },
  {
    id: "solang-valley",
    slug: "solang-valley",
    name: "Solang Valley",
    description:
      "Explore the stunning beauty and adventure of Solang Valley through our curated collection of photographs.",
    images: buildPlaceholderImages("solang-valley", "Solang Valley"),
  },
  {
    id: "tamsara",
    slug: "tamsara",
    name: "Tamsara",
    description: "Scenic trails and untouched Himalayan scenery.",
    images: buildPlaceholderImages("tamsara", "Tamsara"),
  },
  {
    id: "spiti",
    slug: "spiti",
    name: "Spiti",
    description: "Cold desert valleys, cliffside villages, and starry skies.",
    images: buildPlaceholderImages("spiti", "Spiti"),
  },
  {
    id: "bhuntar",
    slug: "bhuntar",
    name: "Bhuntar",
    description: "River confluence town and gateway to the Kullu valley.",
    images: buildPlaceholderImages("bhuntar", "Bhuntar"),
  },
  {
    id: "kasol",
    slug: "kasol",
    name: "Kasol",
    description: "Parvati valley views, riverside walks, and mountain cafes.",
    images: buildPlaceholderImages("kasol", "Kasol"),
  },
];
