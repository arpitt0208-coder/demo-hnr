import { Bike, Calendar, MapPin, ShieldCheck, type LucideIcon } from "lucide-react";
import { bikeImages } from "@/assets/images";
import bookmin from "@/assets/images/bookmin.png";
import pickgo from "@/assets/images/pickgo.webp";
import rentalReadyFleet from "@/assets/images/gallery/rental-ready-fleet.png";

export type HowItWorksSlide = {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
};

export const howItWorksSlides: HowItWorksSlide[] = [
  {
    id: 1,
    icon: Calendar,
    title: "Book in Minutes",
    description:
      "Reserve your rental online with clear dates, pricing, and pickup—no hidden fees.",
    image: bookmin.src,
  },
  {
    id: 2,
    icon: Bike,
    title: "Rent Scooters to Bikes",
    description:
      "Scooters for city runs, cruisers for highways, or adventure bikes for the mountains.",
    image: bikeImages.meteor.src,
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Rental-Ready Fleet",
    description:
      "Every rental bike is inspected and maintained so you get a reliable ride.",
    image: rentalReadyFleet.src,
  },
  {
    id: 4,
    icon: MapPin,
    title: "Pick Up & Go",
    description:
      "Collect your rental and hit the road—Manali, Leh, Spiti, or wherever you're headed.",
    image: pickgo.src,
  },
];
