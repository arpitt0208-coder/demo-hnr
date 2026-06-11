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

/** Curated Unsplash Himalayan / travel imagery for location galleries. */
const unsplashPool = [
  "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
  "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1200&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80",
  "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1200&q=80",
  "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80",
];

function buildPlaceholderImages(
  locationSlug: string,
  locationName: string,
  count = 8,
): GalleryLocationImage[] {
  return Array.from({ length: count }, (_, index) => {
    const src = unsplashPool[index % unsplashPool.length];

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
