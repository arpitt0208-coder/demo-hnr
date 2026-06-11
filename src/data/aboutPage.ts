import type { LucideIcon } from "lucide-react";
import {
  Bike,
  CalendarCheck,
  Flag,
  Headphones,
  Heart,
  Leaf,
  MapPin,
  Mountain,
  Route,
  Shield,
  ShieldCheck,
  Star,
  Timer,
  Users,
  Zap,
} from "lucide-react";
import type { StaticImageData } from "next/image";
import {
  aboutCardGallery,
  aboutCardSupport,
  him4,
  him5,
  kasol,
  safe2,
} from "@/assets/images";

export const aboutHeroBadge = "INNER PAGE HIGHLIGHT";

export const aboutHeroTitle = {
  highlight: "Your Trusted Bike",
  line2: "Rental In Manali & Beyond",
};

export const aboutHeroDescription =
  "More Than Just Bike Rental: We're Your Guides to the Himalayas.";

export type AboutHeroFeature = {
  id: string;
  label: string;
  icon: LucideIcon;
  iconClassName: string;
  iconBgClassName: string;
};

export const aboutHeroFeatures: AboutHeroFeature[] = [
  {
    id: "trusted-fleet",
    label: "Trusted fleet",
    icon: Shield,
    iconClassName: "text-primary-yellow",
    iconBgClassName: "bg-[#FFFBF0]",
  },
  {
    id: "local-support",
    label: "Local support",
    icon: Users,
    iconClassName: "text-[#3B82F6]",
    iconBgClassName: "bg-[#EFF6FF]",
  },
  {
    id: "quick-booking",
    label: "Quick booking",
    icon: CalendarCheck,
    iconClassName: "text-[#22C55E]",
    iconBgClassName: "bg-[#F0FDF4]",
  },
];

export type AboutServiceCard = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
  iconClassName: string;
  iconBgClassName: string;
};

export const aboutWhatWeDoIntro =
  "We provide wide bike rental service in the Himalayas, ensuring that every adventure is safe, memorable and trouble free.";

export type AboutCoreValueDesktopPosition = {
  top: string;
  left?: string;
  right?: string;
};

export type AboutCoreValue = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  glowColor: string;
  desktopPosition: AboutCoreValueDesktopPosition;
};

export const aboutCoreValuesIntro =
  "These principles guide everything we do and shape the experiences we create for our riders.";

export const aboutCoreValues: AboutCoreValue[] = [
  {
    id: "adventure-first",
    number: "01",
    title: "Adventure First",
    description:
      "The Himalayas should be for everyone. Whether you planned this trip for months or decided this morning—hop on and ride.",
    icon: MapPin,
    color: "#F5A623",
    glowColor: "rgba(245, 166, 35, 0.45)",
    desktopPosition: { top: "8px", left: "10px" },
  },
  {
    id: "safety-trust",
    number: "02",
    title: "Safety & Trust",
    description:
      "Mountain roads demand reliability. That's why every bike is thoroughly checked before it reaches you. No shortcuts.",
    icon: ShieldCheck,
    color: "#3B82F6",
    glowColor: "rgba(59, 130, 246, 0.45)",
    desktopPosition: { top: "-12px", left: "398px" },
  },
  {
    id: "community-driven",
    number: "03",
    title: "Community Driven",
    description:
      "Riding alone? Great. Riding with friends? Even better. Either way, you'll meet people who love these roads as much as you do.",
    icon: Users,
    color: "#22C55E",
    glowColor: "rgba(34, 197, 94, 0.45)",
    desktopPosition: { top: "-5px", right: "762px" },
  },
  {
    id: "sustainable-tourism",
    number: "04",
    title: "Sustainable Tourism",
    description:
      "These mountains are not ours to spoil. Ride clean, ride quiet, and respect the local communities. Keep the Himalayas beautiful.",
    icon: Leaf,
    color: "#8B5CF6",
    glowColor: "rgba(139, 92, 246, 0.45)",
    desktopPosition: { top: "4px", right: "416px" },
  },
];

export const aboutServiceCards: AboutServiceCard[] = [
  {
    id: "premium-rentals",
    title: "Premium Bike Rentals",
    description:
      "Well-maintained bikes for every terrain—from city streets to high-altitude passes.",
    icon: Bike,
    iconClassName: "text-primary-yellow",
    iconBgClassName: "bg-[#FFFBF0]",
    bullets: [
      "Well-maintained vehicles",
      "Safety equipment included",
      "Multiple bike categories",
      "24/7 roadside support",
    ],
  },
  {
    id: "multi-location",
    title: "Multi-Location Service",
    description:
      "Ride across the Himalayas with local expertise at every stop on your journey.",
    icon: MapPin,
    iconClassName: "text-[#3B82F6]",
    iconBgClassName: "bg-[#EFF6FF]",
    bullets: [
      "10+ Himalayan locations",
      "Route guidance",
      "Local expertise",
      "Emergency support",
    ],
  },
  {
    id: "online-booking",
    title: "Easy Online Bike Booking",
    description:
      "Book your ride in minutes with real-time availability and instant confirmation.",
    icon: CalendarCheck,
    iconClassName: "text-[#22C55E]",
    iconBgClassName: "bg-[#F0FDF4]",
    bullets: [
      "Real-time availability",
      "Instant confirmation",
      "Secure payments",
      "Booking management",
    ],
  },
  {
    id: "support",
    title: "24/7 Support Service",
    description:
      "Round-the-clock assistance so you can focus on the ride, not the logistics.",
    icon: Headphones,
    iconClassName: "text-[#F97316]",
    iconBgClassName: "bg-[#FFF7ED]",
    bullets: [
      "Round-the-clock support",
      "Route recommendations",
      "Emergency assistance",
      "Local insights",
    ],
  },
];

export type AboutGalleryImage = {
  id: string;
  src: StaticImageData;
  alt: string;
  className?: string;
};

export const aboutStoryIntro =
  "We started this out of love for the mountains—and frustration at seeing riders stranded with unreliable bikes. Our mission is simple: give you a bike you can trust, get you on the road quickly, and always be there when you call. So you can focus on the views, not the vehicle.";

export type AboutStoryHighlight = {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
};

export type AboutStoryCard = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  highlights: AboutStoryHighlight[];
};

export const aboutStoryCards: AboutStoryCard[] = [
  {
    id: "mission",
    title: "Our Mission",
    description:
      "To connect riders with the heart of the Himalayas—through bikes that run right, support that shows up, and a booking process that takes two minutes. No hidden costs. No fine print. Just a reliable ride and the freedom to explore. Whether you're headed to Rohtang or all the way to Leh, we've got your back.",
    icon: Flag,
    highlights: [
      {
        id: "quick-booking",
        title: "Quick Booking",
        subtitle: "Just 2 Minutes",
        icon: Timer,
      },
      {
        id: "no-hidden-costs",
        title: "No Hidden Costs",
        subtitle: "Transparent Pricing",
        icon: ShieldCheck,
      },
      {
        id: "support",
        title: "We've Got Your Back",
        subtitle: "24/7 Support",
        icon: Headphones,
      },
    ],
  },
  {
    id: "vision",
    title: "Our Vision",
    description:
      "To be the name travelers trust most when they search for a bike rental in Manali—or anywhere else in the Himalayas. We want to be part of your story here. The one you tell your friends back home. The one that brings you back again.",
    icon: Zap,
    highlights: [
      {
        id: "trusted",
        title: "Trusted by Travelers",
        subtitle: "Built on Trust",
        icon: Heart,
      },
      {
        id: "adventure",
        title: "Made for Adventure",
        subtitle: "Himalayas Ready",
        icon: Mountain,
      },
      {
        id: "stories",
        title: "Stories That Stay",
        subtitle: "Memories Forever",
        icon: Users,
      },
    ],
  },
];

export const aboutStoryVideo = {
  src: "https://debuggeddata.s3.amazonaws.com/projects/attachments/1768550718744132b29ef-fba2-49ba-8403-d5da1b2ad7aa.mp4",
  poster: him4,
};

export type AboutWhyChooseCard = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  image: StaticImageData;
  imageAlt: string;
  icon: LucideIcon;
  color: string;
  iconBgClassName: string;
  side: "left" | "right";
};

export const aboutWhyChooseIntro =
  "From safety-first rentals to Himalayan expertise, we deliver the reliability, support, and local know-how that bring riders back trip after trip.";

export const aboutWhyChooseCards: AboutWhyChooseCard[] = [
  {
    id: "safety-first",
    title: "Safety First",
    description:
      "Mountain roads demand more than a bike—they demand confidence. Every vehicle is inspected, equipped, and backed by support you can count on.",
    bullets: [
      "Pre-ride safety checks",
      "Safety gear included",
      "Verified local partners",
      "24/7 roadside help",
    ],
    image: safe2,
    imageAlt: "Rider in gear standing next to a motorcycle in the Himalayas",
    icon: ShieldCheck,
    color: "#F5A623",
    iconBgClassName: "bg-[#FFFBF0]",
    side: "left",
  },
  {
    id: "premium-fleet",
    title: "Premium Fleet",
    description:
      "Ride the bikes built for these roads—well-maintained Royal Enfield models ready for city streets, winding passes, and long Himalayan stretches.",
    bullets: [
      "Latest Royal Enfield models",
      "Well-maintained vehicles",
      "Multiple bike categories",
      "Adventure-ready fleet",
    ],
    image: him5,
    imageAlt: "Rider on a Royal Enfield Himalayan along a mountain road",
    icon: Bike,
    color: "#3B82F6",
    iconBgClassName: "bg-[#EFF6FF]",
    side: "right",
  },
  {
    id: "expert-support",
    title: "Expert Support",
    description:
      "Questions before you ride? Need help on the road? Our local team is available around the clock with route tips and real assistance when it matters.",
    bullets: [
      "Round-the-clock assistance",
      "Route recommendations",
      "Emergency assistance",
      "Local insights",
    ],
    image: aboutCardSupport,
    imageAlt: "Hire N Ride support team assisting a customer in the showroom",
    icon: Headphones,
    color: "#22C55E",
    iconBgClassName: "bg-[#F0FDF4]",
    side: "left",
  },
  {
    id: "himalayan-expertise",
    title: "Himalayan Expertise",
    description:
      "We know these mountains—every pass, every season, every shortcut worth taking. Ride with people who live here and love these roads as much as you do.",
    bullets: [
      "10+ Himalayan locations",
      "Route guidance",
      "Local expertise",
      "Mountain-ready service",
    ],
    image: aboutCardGallery,
    imageAlt: "Group of riders overlooking snow-capped Himalayan peaks at sunset",
    icon: Mountain,
    color: "#8B5CF6",
    iconBgClassName: "bg-[#F5F3FF]",
    side: "right",
  },
];

export type AboutCustomerRatingStat = {
  id: string;
  value: string;
  label: string;
  icon: LucideIcon;
};

export const aboutCustomerRating = {
  score: "4.8",
  maxScore: "5",
  title: "Customer Rating",
  description:
    "Join thousands of satisfied customers who have experienced the magic of the Himalayas with us.",
  image: kasol,
  imageAlt: "Scenic Himalayan lake surrounded by snow-capped mountains",
  stats: [
    {
      id: "happy-customers",
      value: "10,000+",
      label: "Happy Customers",
      icon: Users,
    },
    {
      id: "himalayan-routes",
      value: "50+",
      label: "Himalayan Routes",
      icon: Route,
    },
    {
      id: "satisfaction-rate",
      value: "99%",
      label: "Satisfaction Rate",
      icon: Star,
    },
  ] satisfies AboutCustomerRatingStat[],
};

export const aboutWhatWeDoImages: AboutGalleryImage[] = [
  {
    id: "group-ride",
    src: him4,
    alt: "Group of riders on a scenic Himalayan mountain road",
    className: "col-span-2 aspect-[16/9] min-h-[180px] sm:min-h-[220px]",
  },
  {
    id: "solo-rider",
    src: him5,
    alt: "Rider on a motorcycle with mountain backdrop",
    className: "aspect-[3/4] min-h-[200px]",
  },
  {
    id: "group-pause",
    src: aboutCardGallery,
    alt: "Riders gathered with their bikes near a mountain stream",
    className: "aspect-[3/4] min-h-[200px]",
  },
];
