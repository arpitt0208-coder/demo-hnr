import {
  Bike,
  CalendarCheck,
  Headphones,
  ShieldCheck,
  Star,
  Tag,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type SocialProofCard = {
  id: number;
  image: string;
  icon: LucideIcon;
  titleBefore?: string;
  titleHighlight?: string;
  titleAfter?: string;
  title?: string;
  description: string;
};

export type SocialProofBenefit = {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const socialProofCards: SocialProofCard[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=480&h=320&fit=crop",
    icon: Users,
    titleBefore: "Trusted by ",
    titleHighlight: "10K+",
    titleAfter: " Riders",
    description:
      "Join thousands of riders who trust us for reliable bikes and stress-free trips.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=480&h=320&fit=crop",
    icon: Bike,
    titleHighlight: "500+",
    titleAfter: " Curated Rides",
    description:
      "Every bike is handpicked for comfort, safety, and the adventure you have in mind.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=480&h=320&fit=crop",
    icon: Star,
    titleHighlight: "4.8 ★",
    titleAfter: " Real Reviews",
    description:
      "Honest feedback from real riders—rated highly and loved on every trip.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=480&h=320&fit=crop",
    icon: Zap,
    titleHighlight: "Instant",
    titleAfter: " Everything",
    description:
      "Book, verify, and hit the road in minutes—no long waits, no hassle.",
  },
];

export const socialProofBenefits: SocialProofBenefit[] = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Verified Bikes",
    description: "Quality checked & safe.",
  },
  {
    id: 2,
    icon: Tag,
    title: "Fair Prices",
    description: "Transparent & honest.",
  },
  {
    id: 3,
    icon: Headphones,
    title: "24/7 Support",
    description: "We're here anytime.",
  },
  {
    id: 4,
    icon: CalendarCheck,
    title: "Easy Bookings",
    description: "Book in just a few taps.",
  },
];
