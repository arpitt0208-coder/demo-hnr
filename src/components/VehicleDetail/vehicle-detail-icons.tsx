import type { LucideIcon } from "lucide-react";
import {
  Armchair,
  BadgeCheck,
  CircleDot,
  Cog,
  Crown,
  Feather,
  Fuel,
  Gauge,
  HardHat,
  Headphones,
  Lightbulb,
  MapPin,
  Mountain,
  MountainSnow,
  Package,
  Palette,
  Settings2,
  Shield,
  ShieldCheck,
  Sparkles,
  Usb,
  Users,
  Wallet,
  Zap,
} from "lucide-react";

export type IconStyle = {
  Icon: LucideIcon;
  bg: string;
  color: string;
};

const specIconMap: Record<string, IconStyle> = {
  Engine: { Icon: Cog, bg: "bg-red-50", color: "text-red-500" },
  "Fuel Type": { Icon: Fuel, bg: "bg-red-50", color: "text-red-500" },
  Mileage: { Icon: Gauge, bg: "bg-emerald-50", color: "text-emerald-500" },
  Transmission: { Icon: Settings2, bg: "bg-sky-50", color: "text-sky-500" },
  Seating: { Icon: Users, bg: "bg-violet-50", color: "text-violet-500" },
  Helmets: { Icon: HardHat, bg: "bg-orange-50", color: "text-orange-500" },
  Color: { Icon: Palette, bg: "bg-fuchsia-50", color: "text-fuchsia-500" },
};

const highlightIconMap: Record<string, IconStyle> = {
  "Smooth on Hills": { Icon: Mountain, bg: "bg-emerald-50", color: "text-emerald-600" },
  "Great Mileage": { Icon: Fuel, bg: "bg-sky-50", color: "text-sky-600" },
  "Easy & Comfortable": { Icon: Armchair, bg: "bg-violet-50", color: "text-violet-600" },
  "Well Maintained": { Icon: Sparkles, bg: "bg-amber-50", color: "text-amber-600" },
  "Trail Ready": { Icon: MountainSnow, bg: "bg-sky-50", color: "text-sky-600" },
  "Stable Handling": { Icon: CircleDot, bg: "bg-emerald-50", color: "text-emerald-600" },
  "Touring Comfort": { Icon: Armchair, bg: "bg-violet-50", color: "text-violet-600" },
  "Classic Feel": { Icon: Crown, bg: "bg-amber-50", color: "text-amber-600" },
  "Relaxed Posture": { Icon: Armchair, bg: "bg-sky-50", color: "text-sky-600" },
  "Stable Cruise": { Icon: Gauge, bg: "bg-emerald-50", color: "text-emerald-600" },
  "Agile Handling": { Icon: Zap, bg: "bg-orange-50", color: "text-orange-500" },
  "Lightweight Frame": { Icon: Feather, bg: "bg-fuchsia-50", color: "text-fuchsia-600" },
  "Street Ready": { Icon: MapPin, bg: "bg-red-50", color: "text-red-500" },
};

const featureIconStyles: IconStyle[] = [
  { Icon: Shield, bg: "bg-red-50", color: "text-red-500" },
  { Icon: Package, bg: "bg-sky-50", color: "text-sky-500" },
  { Icon: Usb, bg: "bg-violet-50", color: "text-violet-500" },
  { Icon: Lightbulb, bg: "bg-amber-50", color: "text-amber-500" },
  { Icon: CircleDot, bg: "bg-emerald-50", color: "text-emerald-500" },
  { Icon: BadgeCheck, bg: "bg-orange-50", color: "text-orange-500" },
];

const defaultSpecStyle: IconStyle = {
  Icon: Cog,
  bg: "bg-slate-50",
  color: "text-slate-500",
};

const defaultHighlightStyle: IconStyle = {
  Icon: BadgeCheck,
  bg: "bg-amber-50",
  color: "text-amber-500",
};

const trustIconMap: Record<string, IconStyle> = {
  "Free Cancellation": {
    Icon: ShieldCheck,
    bg: "bg-emerald-50",
    color: "text-emerald-500",
  },
  "Verified Host": {
    Icon: BadgeCheck,
    bg: "bg-sky-50",
    color: "text-sky-500",
  },
  "24/7 Support": {
    Icon: Headphones,
    bg: "bg-violet-50",
    color: "text-violet-500",
  },
  "No Hidden Charges": {
    Icon: Wallet,
    bg: "bg-amber-50",
    color: "text-amber-500",
  },
};

const defaultTrustStyle: IconStyle = {
  Icon: ShieldCheck,
  bg: "bg-amber-50",
  color: "text-primary-yellow",
};

export function getSpecIconStyle(label: string): IconStyle {
  return specIconMap[label] ?? defaultSpecStyle;
}

export function getHighlightIconStyle(label: string): IconStyle {
  return highlightIconMap[label] ?? defaultHighlightStyle;
}

export function getFeatureIconStyle(index: number): IconStyle {
  return featureIconStyles[index % featureIconStyles.length];
}

export function getTrustIconStyle(label: string): IconStyle {
  return trustIconMap[label] ?? defaultTrustStyle;
}
