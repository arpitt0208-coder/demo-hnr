/** Maps card / fleet IDs to canonical vehicle detail slugs. */
const vehicleSlugAliases: Record<string, string> = {
  "classic-350": "royal-enfield-classic-350",
  "classic-350-alt": "royal-enfield-classic-350",
  hunter: "royal-enfield-hunter-350",
  "hunter-350": "royal-enfield-hunter-350",
  bullet: "royal-enfield-classic-350",
  "bullet-500": "royal-enfield-classic-350",
  "meteor-350": "royal-enfield-classic-350",
  "scram-411": "royal-enfield-himalayan",
  "himalayan-411": "royal-enfield-himalayan",
  "himalayan-450": "royal-enfield-himalayan",
  "ntorq-125": "suzuki-access-125",
  "activa-6g": "suzuki-access-125",
  "jupiter-125": "suzuki-access-125",
};

export function resolveVehicleSlug(idOrSlug: string): string {
  return vehicleSlugAliases[idOrSlug] ?? idOrSlug;
}

export function vehicleDetailPath(idOrSlug: string): string {
  return `/explore/${resolveVehicleSlug(idOrSlug)}`;
}
