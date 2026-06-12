import {
  Bike,
  Star,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { StaticImageData } from "next/image";
import pickgo from "@/assets/images/pickgo.webp";
import rentalReadyFleet from "@/assets/images/gallery/rental-ready-fleet.png";
import {
  rohtangRide,
  rohtangRideThrill,
} from "@/assets/images/gallery/galleryImages";

export type SocialProofCard = {
  id: number;
  image: StaticImageData;
  icon: LucideIcon;
  titleBefore?: string;
  titleHighlight?: string;
  titleAfter?: string;
  title?: string;
  description: string;
};

export const socialProofCards: SocialProofCard[] = [
  {
    id: 1,
    image: rohtangRide,
    icon: Users,
    titleBefore: "Trusted by ",
    titleHighlight: "10K+",
    titleAfter: " Riders",
    description:
      "Join thousands of riders who trust us for reliable bikes and stress-free trips.",
  },
  {
    id: 2,
    image: rentalReadyFleet,
    icon: Bike,
    titleHighlight: "500+",
    titleAfter: " Curated Rides",
    description:
      "Every bike is handpicked for comfort, safety, and the adventure you have in mind.",
  },
  {
    id: 3,
    image: rohtangRideThrill,
    icon: Star,
    titleHighlight: "4.8 ★",
    titleAfter: " Real Reviews",
    description:
      "Honest feedback from real riders—rated highly and loved on every trip.",
  },
  {
    id: 4,
    image: pickgo,
    icon: Zap,
    titleHighlight: "Instant",
    titleAfter: " Everything",
    description:
      "Book, verify, and hit the road in minutes—no long waits, no hassle.",
  },
];
