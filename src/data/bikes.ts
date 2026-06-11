import type { StaticImageData } from "next/image";
import { bikeImages } from "@/assets/images";
import { vehicleDetailPath } from "@/lib/vehicle-routes";

export interface Bike {
  id: string;
  brand: string;
  model: string;
  location: string;
  locationSlug: string;
  href: string;
  image: StaticImageData;
  position: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    marginBottom?: string;
    opacity?: number;
    transform?: string;
  };
  floatDelay: number;
  floatDuration: number;
}

export const featuredBikes: Bike[] = [
  {
    id: "scram-411",
    brand: "ROYAL ENFIELD",
    model: "Scram 411",
    location: "Manali",
    locationSlug: "manali",
    href: vehicleDetailPath("scram-411"),
    image: bikeImages.scram,
    position: { top: "35%", left: "-3%", opacity: 1, transform: "none" },
    floatDelay: 0.8,
    floatDuration: 5,
  },
  {
    id: "meteor-350",
    brand: "ROYAL ENFIELD",
    model: "Meteor 350",
    location: "Kullu",
    locationSlug: "kullu",
    href: vehicleDetailPath("meteor-350"),
    image: bikeImages.meteor,
    position: { top: "26%", right: "-4%", opacity: 1, transform: "none" },
    floatDelay: 1.2,
    floatDuration: 4.5,
  },
  {
    id: "himalayan-450",
    brand: "ROYAL ENFIELD",
    model: "Himalayan 450",
    location: "Leh Ladakh",
    locationSlug: "leh-ladakh",
    href: vehicleDetailPath("himalayan-450"),
    image: bikeImages.himalayan,
    position: {
      bottom: "0%",
      left: "14%",
      marginBottom: "20px",
      opacity: 1,
      transform: "none",
    },
    floatDelay: 0.4,
    floatDuration: 4.8,
  },
  {
    id: "hunter-350",
    brand: "ROYAL ENFIELD",
    model: "Hunter 350",
    location: "Kasol",
    locationSlug: "kasol",
    href: vehicleDetailPath("hunter-350"),
    image: bikeImages.hunter,
    position: {
      bottom: "0%",
      right: "14%",
      marginBottom: "20px",
      opacity: 1,
      transform: "none",
    },
    floatDelay: 0,
    floatDuration: 4.2,
  },
];
