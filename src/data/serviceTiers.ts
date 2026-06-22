import { bikeImages } from "@/assets/images";

export type ServiceTier = {
  id: string;
  eyebrow: string;
  title: string;
  learnMoreHref: string;
  bookHref: string;
  image: string;
  imageAlt: string;
  variant: "light" | "dark";
};

export const serviceTiers: ServiceTier[] = [
  {
    id: "black",
    eyebrow: "Hire N Ride Black",
    title: "Arrive,\ndistinguished.",
    learnMoreHref: "/about",
    bookHref: "/explore",
    image: bikeImages.meteor.src,
    imageAlt: "Royal Enfield Meteor motorcycle",
    variant: "light",
  },
  {
    id: "night",
    eyebrow: "Hire N Ride Night",
    title: "Owns the city\nafter dark.",
    learnMoreHref: "/about",
    bookHref: "/explore",
    image: bikeImages.hunter.src,
    imageAlt: "Royal Enfield Hunter motorcycle",
    variant: "dark",
  },
];
