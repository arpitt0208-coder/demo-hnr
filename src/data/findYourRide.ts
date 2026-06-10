import type { StaticImageData } from "next/image";
import type { Gallery4Item } from "@/components/UI/gallery4";
import { bikeImages } from "@/assets/images";

type FindYourRideBike = {
  id: string;
  name: string;
  image: StaticImageData;
};

const findYourRideBikes: FindYourRideBike[] = [
  { id: "classic-350", name: "CLASSIC 350", image: bikeImages.meteor },
  { id: "hunter", name: "Royal Enfield Hunter", image: bikeImages.hunter },
  {
    id: "ntorq-125",
    name: "TVS Ntorq 125 Race Edition",
    image: bikeImages.scram,
  },
  { id: "bullet-500", name: "BULLET 500", image: bikeImages.hunter },
  { id: "himalayan-411", name: "Himalayan 411", image: bikeImages.himalayan },
];

const findYourRideGalleryDetails: Record<
  string,
  { title: string; description: string }
> = {
  "classic-350": {
    title: "Classic 350",
    description:
      "A timeless cruiser with relaxed ergonomics—perfect for city commutes, café runs, and easy weekend rides.",
  },
  hunter: {
    title: "Royal Enfield Hunter",
    description:
      "Light, agile, and street-ready. Built for quick city hops with classic Enfield character and modern handling.",
  },
  "ntorq-125": {
    title: "TVS Ntorq 125 Race Edition",
    description:
      "Sporty styling and sharp performance for urban riders who want speed, tech features, and standout design.",
  },
  "bullet-500": {
    title: "Bullet 500",
    description:
      "The iconic thump and rugged build—made for long hauls, mountain roads, and riders who love the classic feel.",
  },
  "himalayan-411": {
    title: "Himalayan 411",
    description:
      "Adventure-ready touring for high-altitude trails and off-road escapes—built to go wherever the road ends.",
  },
};

export const findYourRideGalleryItems: Gallery4Item[] = findYourRideBikes.map(
  (bike) => ({
    id: bike.id,
    title: findYourRideGalleryDetails[bike.id].title,
    description: findYourRideGalleryDetails[bike.id].description,
    href: `#${bike.id}`,
    image: bike.image,
    ctaText: `Explore ${bike.name}`,
  }),
);
