import {
  Bike,
  Star,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { StaticImageData } from "next/image";
import { him4, him5, instant2, safe2 } from "@/assets/images";

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
    image: him4,
    icon: Users,
    titleBefore: "Trusted by ",
    titleHighlight: "10K+",
    titleAfter: " Riders",
    description:
      "Join thousands of riders who trust us for reliable bikes and stress-free trips.",
  },
  {
    id: 2,
    image: safe2,
    icon: Bike,
    titleHighlight: "500+",
    titleAfter: " Curated Rides",
    description:
      "Every bike is handpicked for comfort, safety, and the adventure you have in mind.",
  },
  {
    id: 3,
    image: him5,
    icon: Star,
    titleHighlight: "4.8 ★",
    titleAfter: " Real Reviews",
    description:
      "Honest feedback from real riders—rated highly and loved on every trip.",
  },
  {
    id: 4,
    image: instant2,
    icon: Zap,
    titleHighlight: "Instant",
    titleAfter: " Everything",
    description:
      "Book, verify, and hit the road in minutes—no long waits, no hassle.",
  },
];
