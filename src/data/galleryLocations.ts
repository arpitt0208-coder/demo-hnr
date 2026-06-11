import type { StaticImageData } from "next/image";
import {
  adventure,
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
    id: "sissu-valley",
    slug: "sissu-valley",
    name: "Sissu Valley",
    description:
      "Waterfalls, riverside trails, and quiet Himalayan scenery along the Manali–Leh highway.",
    images: buildPlaceholderImages("sissu-valley", "Sissu Valley"),
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
    id: "spiti-valley",
    slug: "spiti-valley",
    name: "Spiti Valley",
    description: "Cold desert valleys, cliffside villages, and starry skies.",
    images: buildPlaceholderImages("spiti-valley", "Spiti Valley"),
  },
  {
    id: "mohali",
    slug: "mohali",
    name: "Mohali",
    description:
      "Urban gateways and smooth highway runs before you head into the hills.",
    images: buildPlaceholderImages("mohali", "Mohali"),
  },
  {
    id: "bir-billing",
    slug: "bir-billing",
    name: "Bir Billing",
    description:
      "Paragliding capital of India with lush tea gardens and Dhauladhar views.",
    images: buildPlaceholderImages("bir-billing", "Bir Billing"),
  },
  {
    id: "dharamshala",
    slug: "dharamshala",
    name: "Dharamshala",
    description:
      "Monasteries, cedar forests, and Tibetan culture in the Kangra foothills.",
    images: buildPlaceholderImages("dharamshala", "Dharamshala"),
  },
];
