import type { StaticImageData } from "next/image";
import {
  bhuntar,
  bhuntarWebp,
  earnHotel,
  earnRestaurant,
  earnVolvo,
  faqsec,
  him4,
  him5,
  kasol,
  kasolBig,
  manali,
  mountainbg,
} from "@/assets/images";

export const GALLERY_PREVIEW_COUNT = 6;

export type GalleryLocationImage = {
  id: string;
  src: StaticImageData | string;
  alt: string;
};

export type GalleryLocationLayout = "grid" | "expandable";

export type GalleryLocationSection = {
  id: string;
  slug: string;
  name: string;
  description?: string;
  layout?: GalleryLocationLayout;
  images: GalleryLocationImage[];
};

/** Reliable Unsplash Himalayan / travel photos for gallery sections. */
const unsplash = {
  mountainsClouds:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop",
  alpineRidge:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
  himalayanPeaks:
    "https://images.unsplash.com/photo-1454496526348-38a048a878e3?q=80&w=1200&auto=format&fit=crop",
  starryMountains:
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
  mountainLake:
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
  snowTrail:
    "https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=1200&auto=format&fit=crop",
  forestPath:
    "https://images.unsplash.com/photo-1585687501004-615dfdfde7f1?q=80&w=1200&auto=format&fit=crop",
  valleySunset:
    "https://images.unsplash.com/photo-1601568494843-772eb04aca5d?q=80&w=1200&auto=format&fit=crop",
  riverValley:
    "https://images.unsplash.com/photo-1729086046027-09979ade13fd?q=80&w=1200&auto=format&fit=crop",
  desertMountains:
    "https://images.unsplash.com/photo-1649265825072-f7dd6942baed?q=80&w=1200&auto=format&fit=crop",
  monasteryView:
    "https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&w=1200&auto=format&fit=crop",
} as const;

type ImageSource = {
  src: StaticImageData | string;
  alt: string;
};

function toGalleryImages(
  slug: string,
  sources: ImageSource[],
): GalleryLocationImage[] {
  return sources.map((source, index) => ({
    id: `${slug}-${index + 1}`,
    src: source.src,
    alt: source.alt,
  }));
}

const kulluValleyGalleryImages = toGalleryImages("kullu-valley", [
  {
    src: earnRestaurant,
    alt: "Kullu Valley terrace overlooking pine forests and Himalayan peaks",
  },
  {
    src: manali,
    alt: "Snow-capped mountains above the Kullu valley",
  },
  {
    src: him4,
    alt: "Misty mountain ridges in Himachal Pradesh",
  },
  {
    src: him5,
    alt: "Alpine scenery along the Kullu valley",
  },
  {
    src: unsplash.himalayanPeaks,
    alt: "Himalayan peaks rising above valley clouds",
  },
  {
    src: unsplash.mountainsClouds,
    alt: "River valley landscape in the Himalayas",
  },
  {
    src: unsplash.starryMountains,
    alt: "Starry night over Kullu valley mountains",
  },
  {
    src: unsplash.mountainLake,
    alt: "Lake and mountain views near Kullu",
  },
]);

const manaliGalleryImages = toGalleryImages("manali", [
  { src: manali, alt: "Manali town with snow-capped Himalayan peaks" },
  { src: him4, alt: "Pine forests and mountain roads near Manali" },
  { src: him5, alt: "Meadows and valleys around Manali" },
  { src: earnHotel, alt: "Himalayan lodge views near Manali" },
  { src: unsplash.snowTrail, alt: "Snow-lined trails in the Manali region" },
  { src: unsplash.alpineRidge, alt: "Alpine ridge above Manali valley" },
  { src: unsplash.starryMountains, alt: "Night sky over Manali mountains" },
  { src: unsplash.mountainLake, alt: "Mountain lake near Manali" },
]);

const lehLadakhGalleryImages = toGalleryImages("leh-ladakh", [
  { src: unsplash.desertMountains, alt: "High-altitude desert mountains of Ladakh" },
  { src: unsplash.monasteryView, alt: "Ancient monastery overlooking Ladakh valleys" },
  { src: him4, alt: "Barren peaks on the Leh–Manali route" },
  { src: unsplash.himalayanPeaks, alt: "Snow peaks surrounding Leh Ladakh" },
  { src: unsplash.mountainsClouds, alt: "Clouds rolling over Ladakh mountain passes" },
  { src: unsplash.starryMountains, alt: "Starry skies above Leh Ladakh" },
  { src: mountainbg, alt: "Dramatic mountain backdrop in Ladakh" },
  { src: unsplash.mountainLake, alt: "High-altitude lake near Leh" },
]);

const rohtangPassGalleryImages = toGalleryImages("rohtang-pass", [
  { src: unsplash.snowTrail, alt: "Snow-covered Rohtang Pass trail" },
  { src: him5, alt: "Snow fields and mountain views at Rohtang" },
  { src: manali, alt: "Panoramic views above Manali from Rohtang" },
  { src: unsplash.mountainsClouds, alt: "Cloud sea visible from Rohtang Pass" },
  { src: unsplash.alpineRidge, alt: "Alpine scenery along Rohtang road" },
  { src: earnVolvo, alt: "Mountain road journey to Rohtang Pass" },
  { src: unsplash.himalayanPeaks, alt: "Himalayan peaks from Rohtang summit" },
  { src: faqsec, alt: "Snow-lined pass roads in Himachal Pradesh" },
]);

const sissuGalleryImages = toGalleryImages("sissu", [
  { src: bhuntarWebp, alt: "Mountain road through Lahaul near Sissu" },
  { src: bhuntar, alt: "River valley scenery around Sissu" },
  { src: unsplash.riverValley, alt: "Waterfall and valley views at Sissu" },
  { src: him4, alt: "Pine-covered slopes near Sissu village" },
  { src: unsplash.mountainLake, alt: "Glacial lake scenery near Sissu" },
  { src: unsplash.valleySunset, alt: "Sunset over Sissu valley mountains" },
  { src: earnHotel, alt: "Quiet Himalayan stay near Sissu" },
  { src: unsplash.starryMountains, alt: "Clear night skies above Sissu" },
]);

const slongValleyGalleryImages = toGalleryImages("slong-valley", [
  { src: him5, alt: "Meadows and open valley in Slong" },
  { src: manali, alt: "Mountain panorama of Slong Valley" },
  { src: earnRestaurant, alt: "Valley terrace views in Slong" },
  { src: unsplash.snowTrail, alt: "Adventure trails through Slong Valley" },
  { src: unsplash.alpineRidge, alt: "Alpine ridge above Slong meadows" },
  { src: mountainbg, alt: "Dramatic peaks surrounding Slong Valley" },
  { src: unsplash.mountainsClouds, alt: "Clouds over Slong Valley peaks" },
  { src: unsplash.forestPath, alt: "Forest paths near Slong Valley" },
]);

const solangValleyGalleryImages = toGalleryImages("solang-valley", [
  { src: unsplash.snowTrail, alt: "Snow activities in Solang Valley" },
  { src: him4, alt: "Ski slopes and meadows at Solang" },
  { src: manali, alt: "Mountain backdrop of Solang Valley" },
  { src: unsplash.valleySunset, alt: "Sunset over Solang Valley peaks" },
  { src: earnVolvo, alt: "Road to Solang adventure hub" },
  { src: unsplash.himalayanPeaks, alt: "Snow peaks above Solang Valley" },
  { src: unsplash.mountainLake, alt: "Glacier views near Solang" },
  { src: faqsec, alt: "Winter scenery in Solang Valley" },
]);

const tamsaraGalleryImages = toGalleryImages("tamsara", [
  { src: unsplash.forestPath, alt: "Forest trail through Tamsara region" },
  { src: him5, alt: "Untouched Himalayan scenery at Tamsara" },
  { src: mountainbg, alt: "Mountain ridges near Tamsara" },
  { src: unsplash.alpineRidge, alt: "Alpine views along Tamsara trails" },
  { src: earnRestaurant, alt: "Valley overlook near Tamsara" },
  { src: unsplash.riverValley, alt: "River valley near Tamsara" },
  { src: unsplash.starryMountains, alt: "Night sky over Tamsara mountains" },
  { src: unsplash.mountainsClouds, alt: "Misty peaks around Tamsara" },
]);

const spitiGalleryImages = toGalleryImages("spiti", [
  { src: unsplash.desertMountains, alt: "Cold desert valleys of Spiti" },
  { src: unsplash.monasteryView, alt: "Cliffside monastery in Spiti valley" },
  { src: him4, alt: "Barren mountain landscapes of Spiti" },
  { src: unsplash.himalayanPeaks, alt: "High peaks surrounding Spiti" },
  { src: unsplash.starryMountains, alt: "Starry skies over Spiti villages" },
  { src: mountainbg, alt: "Dramatic Spiti valley backdrop" },
  { src: unsplash.mountainLake, alt: "High-altitude lake in Spiti region" },
  { src: unsplash.valleySunset, alt: "Sunset over Spiti desert mountains" },
]);

const bhuntarGalleryImages = toGalleryImages("bhuntar", [
  { src: bhuntar, alt: "Bhuntar valley with the Beas River" },
  { src: bhuntarWebp, alt: "Aerial view of Bhuntar town and valley" },
  { src: earnVolvo, alt: "Mountain highway through Bhuntar" },
  { src: him4, alt: "River confluence scenery at Bhuntar" },
  { src: unsplash.riverValley, alt: "Beas river valley near Bhuntar" },
  { src: earnHotel, alt: "Valley views from Bhuntar hillside" },
  { src: unsplash.mountainsClouds, alt: "Clouds over Bhuntar peaks" },
  { src: unsplash.forestPath, alt: "Forest roads leading to Bhuntar" },
]);

const kasolGalleryImages = toGalleryImages("kasol", [
  { src: kasol, alt: "Kasol town with snow-capped peaks" },
  { src: kasolBig, alt: "Parvati valley panorama from Kasol" },
  { src: earnRestaurant, alt: "Riverside terrace near Kasol" },
  { src: him5, alt: "Pine forests surrounding Kasol" },
  { src: unsplash.riverValley, alt: "Parvati river flowing through Kasol valley" },
  { src: unsplash.forestPath, alt: "Forest trail near Kasol village" },
  { src: unsplash.starryMountains, alt: "Night sky over Kasol mountains" },
  { src: unsplash.valleySunset, alt: "Sunset over Kasol valley" },
]);

/** Location gallery sections — replace images with your own assets per location. */
export const galleryLocationSections: GalleryLocationSection[] = [
  {
    id: "manali",
    slug: "manali",
    name: "Manali",
    layout: "expandable",
    description: "Snow peaks, pine forests, and the charm of the old Manali town.",
    images: manaliGalleryImages,
  },
  {
    id: "kullu-valley",
    slug: "kullu-valley",
    name: "Kullu Valley",
    layout: "expandable",
    description:
      "Terraced hillsides, pine forests, and the Beas winding through one of Himachal's most scenic valleys.",
    images: kulluValleyGalleryImages,
  },
  {
    id: "leh-ladakh",
    slug: "leh-ladakh",
    name: "Leh Ladakh",
    layout: "expandable",
    description: "High-altitude desert landscapes and ancient monasteries.",
    images: lehLadakhGalleryImages,
  },
  {
    id: "rohtang-pass",
    slug: "rohtang-pass",
    name: "Rohtang Pass",
    layout: "expandable",
    description: "Snow-lined passes and sweeping views above Manali.",
    images: rohtangPassGalleryImages,
  },
  {
    id: "sissu",
    slug: "sissu",
    name: "Sissu",
    layout: "expandable",
    description:
      "Waterfalls, mountain roads, and quiet Himalayan scenery in Lahaul.",
    images: sissuGalleryImages,
  },
  {
    id: "slong-valley",
    slug: "slong-valley",
    name: "Slong Valley",
    layout: "expandable",
    description:
      "Explore the stunning beauty and adventure of Slong Valley through our curated collection of photographs.",
    images: slongValleyGalleryImages,
  },
  {
    id: "solang-valley",
    slug: "solang-valley",
    name: "Solang Valley",
    layout: "expandable",
    description:
      "Explore the stunning beauty and adventure of Solang Valley through our curated collection of photographs.",
    images: solangValleyGalleryImages,
  },
  {
    id: "tamsara",
    slug: "tamsara",
    name: "Tamsara",
    layout: "expandable",
    description: "Scenic trails and untouched Himalayan scenery.",
    images: tamsaraGalleryImages,
  },
  {
    id: "spiti",
    slug: "spiti",
    name: "Spiti",
    layout: "expandable",
    description: "Cold desert valleys, cliffside villages, and starry skies.",
    images: spitiGalleryImages,
  },
  {
    id: "bhuntar",
    slug: "bhuntar",
    name: "Bhuntar",
    layout: "expandable",
    description: "River confluence town and gateway to the Kullu valley.",
    images: bhuntarGalleryImages,
  },
  {
    id: "kasol",
    slug: "kasol",
    name: "Kasol",
    layout: "expandable",
    description: "Parvati valley views, riverside walks, and mountain cafes.",
    images: kasolGalleryImages,
  },
];
