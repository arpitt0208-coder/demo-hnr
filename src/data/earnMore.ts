import type { LucideIcon } from "lucide-react";
import { Building2, Bus, Utensils, Users } from "lucide-react";
import type { StaticImageData } from "next/image";
import { earnHotel, earnRestaurant, earnVolvo } from "@/assets/images";

export type ReferralCard = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: StaticImageData;
  imagePosition: string;
  icon: LucideIcon;
  badge?: {
    label: string;
    icon: LucideIcon;
  };
};

export const referralCards: ReferralCard[] = [
  {
    id: "hotel",
    title: "Hotel Referral",
    description: "Refer premium stays and earn exciting rewards.",
    href: "#earn-hotel",
    image: earnHotel,
    imagePosition: "object-center",
    icon: Building2,
    badge: {
      label: "Trusted Partners",
      icon: Users,
    },
  },
  {
    id: "volvo",
    title: "Volvo Referral",
    description: "Refer reliable travel and earn more together.",
    href: "#earn-volvo",
    image: earnVolvo,
    imagePosition: "object-center",
    icon: Bus,
  },
  {
    id: "restaurant",
    title: "Restaurant Referral",
    description: "Refer great dining experiences and get rewarded.",
    href: "#earn-restaurant",
    image: earnRestaurant,
    imagePosition: "object-center",
    icon: Utensils,
  },
];
