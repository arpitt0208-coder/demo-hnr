import { bikeImages } from "@/assets/images";
import type { Bike } from "@/data/bikes";
import { featuredBikes } from "@/data/bikes";
import type { BrowseVehicle } from "@/data/vehicles";
import { locationLabels } from "@/data/vehicles";

const CASCADE_POSITIONS: Bike["position"][] = [
  { top: "2%", left: "-2%", opacity: 1, transform: "none" },
  { top: "14%", left: "20%", opacity: 1, transform: "none" },
  { top: "28%", right: "-4%", opacity: 1, transform: "none" },
  { top: "44%", left: "6%", opacity: 1, transform: "none" },
  { top: "58%", left: "26%", opacity: 1, transform: "none" },
  { top: "72%", left: "2%", opacity: 1, transform: "none" },
];

const vehicleImageById: Record<string, (typeof bikeImages)[keyof typeof bikeImages]> = {
  "suzuki-access-125": bikeImages.scram,
  "royal-enfield-himalayan": bikeImages.himalayan,
  "royal-enfield-classic-350": bikeImages.meteor,
  "royal-enfield-hunter-350": bikeImages.hunter,
};

function vehicleToShowcaseBike(
  vehicle: BrowseVehicle,
  locationSlug: string,
): Bike {
  const words = vehicle.title.split(" ");
  const model = words.slice(-2).join(" ");

  return {
    id: vehicle.id,
    brand: vehicle.category === "scooters" ? "SCOOTER" : "ROYAL ENFIELD",
    model,
    location: locationLabels[locationSlug] ?? locationSlug,
    locationSlug,
    href: vehicle.href,
    image: vehicleImageById[vehicle.id] ?? vehicle.images[0],
    position: { opacity: 1, transform: "none" },
    floatDelay: 0,
    floatDuration: 4.5,
  };
}

export function getLocationShowcaseBikes(
  locationSlug: string,
  vehicleLocationSlugs: string[],
  vehicles: BrowseVehicle[],
): Bike[] {
  const fromFeatured = featuredBikes.filter(
    (bike) =>
      bike.locationSlug === locationSlug ||
      vehicleLocationSlugs.includes(bike.locationSlug),
  );

  const featuredIds = new Set(fromFeatured.map((bike) => bike.id));
  const remainingSlots = Math.max(0, 6 - fromFeatured.length);

  const fromVehicles = vehicles
    .filter((vehicle) => !featuredIds.has(vehicle.id))
    .slice(0, remainingSlots)
    .map((vehicle) => vehicleToShowcaseBike(vehicle, locationSlug));

  return [...fromFeatured, ...fromVehicles].slice(0, 6).map((bike, index) => ({
    ...bike,
    position: CASCADE_POSITIONS[index] ?? bike.position,
    floatDelay: index * 0.15,
  }));
}
