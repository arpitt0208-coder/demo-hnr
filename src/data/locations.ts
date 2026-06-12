import type { LucideIcon } from "lucide-react";
import {
  Anchor,
  Crosshair,
  MapPin,
  Mountain,
  Plane,
  Trees,
  Waves,
} from "lucide-react";
import type { StaticImageData } from "next/image";
import { bhuntar, kasol } from "@/assets/images";
import { manaliView } from "@/assets/images/gallery/galleryImages";

type LocationFeature = {
  icon: LucideIcon;
  label: string;
};

export type FeaturedLocation = {
  id: string;
  title: string;
  region: string;
  href: string;
  image: StaticImageData;
  isTopPick?: boolean;
  highlight?: LocationFeature;
  features?: LocationFeature[];
};

export const featuredLocations: FeaturedLocation[] = [
  {
    id: "queen-of-hills",
    title: "Queen of Hills",
    region: "Himachal Pradesh, India",
    href: "#locations",
    image: manaliView,
    isTopPick: true,
    highlight: {
      icon: Mountain,
      label: "Scenic valleys & breathtaking views",
    },
  },
  {
    id: "bhuntar",
    title: "Bhuntar",
    region: "Himachal Pradesh, India",
    href: "#locations",
    image: bhuntar,
    features: [
      { icon: Anchor, label: "Gateway to Kullu Valley" },
      { icon: Plane, label: "Bhuntar Airport" },
      { icon: Waves, label: "Beas River" },
    ],
  },
  {
    id: "kasol",
    title: "Kasol",
    region: "Himachal Pradesh, India",
    href: "#locations",
    image: kasol,
    features: [
      { icon: Waves, label: "Parvati River" },
      { icon: Trees, label: "Pine forests" },
      { icon: Mountain, label: "Trekking trails" },
    ],
  },
];

export type LocationQuickLink = {
  label: string;
  href: string;
  icon?: LucideIcon;
};

export const locationQuickLinks: LocationQuickLink[] = [
  { label: "All locations", href: "#locations", icon: Crosshair },
  { label: "Manali", href: "#locations" },
  { label: "Rishikesh", href: "#locations" },
  { label: "Rohtang Pass", href: "#locations" },
  { label: "Solang Valley", href: "#locations" },
  { label: "Bhuntar", href: "#locations" },
  { label: "Spiti Valley", href: "#locations" },
  { label: "Bir-Billing", href: "#locations" },
  { label: "Leh Ladakh", href: "#locations" },
  { label: "Dharamshala", href: "#locations" },
  { label: "Mohali", href: "#locations" },
  { label: "Sissu", href: "#locations" },
  { label: "Kasol", href: "#locations" },
  { label: "Kullu", href: "#locations" },
];

export const locationQuickLinkIcon = MapPin;
