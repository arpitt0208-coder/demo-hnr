import type { LucideIcon } from "lucide-react";
import {
  Camera,
  FileText,
  Headphones,
  ImageIcon,
  Phone,
  Users,
} from "lucide-react";
import type { StaticImageData } from "next/image";
import { adventure } from "@/assets/images";

export type AboutCard = {
  id: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  image: StaticImageData;
  icon: LucideIcon;
};

export const aboutCards: AboutCard[] = [
  {
    id: "story",
    title: "Know more about Hire N Ride",
    description:
      "Discover how we started, what drives us, and why riders across India trust us for every road trip.",
    cta: "Explore our story",
    href: "#about",
    image: adventure,
    icon: Users,
  },
  {
    id: "support",
    title: "Contact Us & Support",
    description:
      "Questions before you ride? Our team is here to help with bookings, routes, and on-trip assistance.",
    cta: "Get in touch",
    href: "#contact",
    image: adventure,
    icon: Headphones,
  },
  {
    id: "gallery",
    title: "Customer ride gallery",
    description:
      "See real journeys from fellow riders—scenic routes, mountain passes, and unforgettable memories.",
    cta: "View gallery",
    href: "#gallery",
    image: adventure,
    icon: Camera,
  },
];

export type AboutQuickLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const aboutQuickLinks: AboutQuickLink[] = [
  { label: "About Hire N Ride", href: "#about", icon: Users },
  { label: "All blogs", href: "#blogs", icon: FileText },
  { label: "Gallery", href: "#gallery", icon: ImageIcon },
  { label: "Contact Us", href: "#contact", icon: Phone },
];
