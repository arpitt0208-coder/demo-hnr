import {
  birBillingGalleryImages,
  dharamshalaGalleryImages,
  kulluValleyGalleryImages,
  lehLadakhGalleryImages,
  manaliGalleryImages,
  mohaliGalleryImages,
  rohtangPassGalleryImages,
  sissuValleyGalleryImages,
  solangValleyGalleryImages,
  spitiValleyGalleryImages,
  type LocationGalleryAsset,
} from "@/assets/images/gallery/galleryImages";

export type GalleryLocationImage = {
  id: string;
  src: string;
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

function buildGalleryImages(
  locationSlug: string,
  items: LocationGalleryAsset[],
): GalleryLocationImage[] {
  return items.map((item, index) => ({
    id: `${locationSlug}-${index + 1}`,
    src: item.src.src,
    alt: item.alt,
  }));
}

/** Location gallery sections with curated Himalayan photography. */
export const galleryLocationSections: GalleryLocationSection[] = [
  {
    id: "manali",
    slug: "manali",
    name: "Manali",
    description: "Snow peaks, pine forests, and the charm of the old Manali town.",
    images: buildGalleryImages("manali", manaliGalleryImages),
  },
  {
    id: "kullu-valley",
    slug: "kullu-valley",
    name: "Kullu Valley",
    description: "Terraced hillsides and the Beas winding through the valley.",
    images: buildGalleryImages("kullu-valley", kulluValleyGalleryImages),
  },
  {
    id: "leh-ladakh",
    slug: "leh-ladakh",
    name: "Leh Ladakh",
    description: "High-altitude desert landscapes and ancient monasteries.",
    images: buildGalleryImages("leh-ladakh", lehLadakhGalleryImages),
  },
  {
    id: "rohtang-pass",
    slug: "rohtang-pass",
    name: "Rohtang Pass",
    description: "Snow-lined passes and sweeping views above Manali.",
    images: buildGalleryImages("rohtang-pass", rohtangPassGalleryImages),
  },
  {
    id: "sissu-valley",
    slug: "sissu-valley",
    name: "Sissu Valley",
    description:
      "Waterfalls, riverside trails, and quiet Himalayan scenery along the Manali–Leh highway.",
    images: buildGalleryImages("sissu-valley", sissuValleyGalleryImages),
  },
  {
    id: "solang-valley",
    slug: "solang-valley",
    name: "Solang Valley",
    description:
      "Explore the stunning beauty and adventure of Solang Valley through our curated collection of photographs.",
    images: buildGalleryImages("solang-valley", solangValleyGalleryImages),
  },
  {
    id: "spiti-valley",
    slug: "spiti-valley",
    name: "Spiti Valley",
    description: "Cold desert valleys, cliffside villages, and starry skies.",
    images: buildGalleryImages("spiti-valley", spitiValleyGalleryImages),
  },
  {
    id: "mohali",
    slug: "mohali",
    name: "Mohali",
    description:
      "Urban gateways and smooth highway runs before you head into the hills.",
    images: buildGalleryImages("mohali", mohaliGalleryImages),
  },
  {
    id: "bir-billing",
    slug: "bir-billing",
    name: "Bir Billing",
    description:
      "Paragliding capital of India with lush tea gardens and Dhauladhar views.",
    images: buildGalleryImages("bir-billing", birBillingGalleryImages),
  },
  {
    id: "dharamshala",
    slug: "dharamshala",
    name: "Dharamshala",
    description:
      "Monasteries, cedar forests, and Tibetan culture in the Kangra foothills.",
    images: buildGalleryImages("dharamshala", dharamshalaGalleryImages),
  },
];
