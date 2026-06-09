import type { StaticImageData } from "next/image";
import { bikeImages } from "@/assets/images";

export type FleetBike = {
  id: string;
  name: string;
  image: StaticImageData;
};

export const fleetBikes: FleetBike[] = [
  { id: "classic-350", name: "CLASSIC 350", image: bikeImages.meteor },
  { id: "hunter", name: "Royal Enfield Hunter", image: bikeImages.hunter },
  { id: "bullet", name: "Royal Enfield Bullet", image: bikeImages.hunter },
  { id: "classic-350-alt", name: "Classic 350", image: bikeImages.meteor },
  { id: "meteor-350", name: "Meteor 350", image: bikeImages.meteor },
  { id: "scram-411", name: "Scram 411", image: bikeImages.scram },
  { id: "himalayan-450", name: "Himalayan 450", image: bikeImages.himalayan },
  { id: "activa-6g", name: "Activa 6G", image: bikeImages.scram },
  { id: "jupiter-125", name: "Jupiter 125", image: bikeImages.scram },
];

export const fleetQuickLinks: string[] = [
  "Explore all models",
  ...fleetBikes.map((bike) => bike.name),
];
