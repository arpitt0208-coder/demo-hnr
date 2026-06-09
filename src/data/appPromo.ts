import {
  Award,
  Bike,
  Calendar,
  Clock,
  Headphones,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type AppFeature = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
};

export type AppStatCard = {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
};

export type AppTrustItem = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
};

export const appFeatures: AppFeature[] = [
  {
    icon: Calendar,
    title: "Book Your Perfect Bike",
    subtitle: "Bikes for Every Trip",
  },
  {
    icon: Clock,
    title: "Rent in Minutes, Not Hours",
    subtitle: "Simple & Digital",
  },
  {
    icon: Headphones,
    title: "Ride with 24/7 Support",
    subtitle: "Your Roadside Partner",
  },
];

export const appStatCards: AppStatCard[] = [
  {
    icon: Bike,
    value: "500+",
    label: "Curated Bikes",
    description: "Ready for your next adventure.",
  },
  {
    icon: Headphones,
    value: "24/7",
    label: "Support",
    description: "We're here anytime, anywhere.",
  },
];

export const appTrustItems: AppTrustItem[] = [
  {
    icon: ShieldCheck,
    title: "Secure",
    subtitle: "Your data is 100% safe",
  },
  {
    icon: Award,
    title: "Trusted by 10K+ Riders",
    subtitle: "Join our growing community",
  },
  {
    icon: Zap,
    title: "Reliable",
    subtitle: "Always here for your ride",
  },
];
