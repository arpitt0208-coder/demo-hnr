import logoSvg from "@/assets/images/logo.svg";
import { footerContact } from "@/data/footer";

export const exploreHeroTags = [
  "Trusted fleet",
  "Local support",
  "Quick booking",
] as const;

/** Reliable Unsplash — snow-capped Himalayan peaks */
export const heroBackgroundImage =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&auto=format&fit=crop&q=80";

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
