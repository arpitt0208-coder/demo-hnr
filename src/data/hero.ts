import logoSvg from "@/assets/images/logo.svg";
import { bikeImages } from "@/assets/images";
import { footerContact } from "@/data/footer";

export const exploreHeroTags = [
  "Trusted fleet",
  "Local support",
  "Quick booking",
] as const;

/** Royal Enfield Himalayan — hero product shot */
export const heroBackgroundImage = bikeImages.himalayan.src;

export const homeHeroContent = {
  logo: {
    url: logoSvg.src,
    alt: "Hire n Ride",
  },
  slogan: "PREMIUM HIMALAYAN BIKE RENTALS",
  subtitle:
    "Discover breathtaking landscapes and challenge yourself with our premium Royal Enfield fleet. Fully maintained bikes, transparent pricing, and 24/7 mountain support.",
  callToAction: {
    text: "EXPLORE BIKES",
    href: "/explore",
  },
  backgroundImage: heroBackgroundImage,
  contactInfo: {
    website: "hirenride.com",
    phone: footerContact.phone,
    address: "Manali, Himachal Pradesh, India",
  },
} as const;
