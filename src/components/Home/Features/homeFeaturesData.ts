import biker from "@/assets/images/gallery/biker.webp";
import { bike, card, fee, kyc, support } from "@/assets/images";

export const homeFeaturesItems = [
  {
    id: 1,
    url: { src: biker.src },
    title: "Complete Ride Details",
    description:
      "Check bike condition, pickup location & pricing. See everything before you decide. Because you shouldn't have to ask, 'Wait, where do I pick it up?' after booking.",
  },
  {
    id: 2,
    url: { src: bike.src },
    title: "Insured Rides Only",
    description:
      "Every bike comes with valid government insurance. Because your safety matters. Ride with confidence knowing you're fully covered on every journey.",
  },
  {
    id: 3,
    url: { src: support.src },
    title: "Contact Us & Support",
    description:
      "Real people. Real help. Get support and route tips whenever you need. Our team knows the mountains and is always ready to guide your adventure.",
  },
  {
    id: 4,
    url: { src: fee.src },
    title: "Transparent Pricing, Zero Surprises",
    description:
      "No hidden fees. No 'oh, we forgot to mention' charges. Just honest, all-inclusive rates from start to finish so you can plan your trip with confidence.",
  },
  {
    id: 5,
    url: { src: kyc.src },
    title: "Instant Booking & KYC",
    description:
      "Verify and ride in minutes, not hours. Secure, digital onboarding from anywhere. Upload your documents once and hit the road without the paperwork hassle.",
  },
  {
    id: 6,
    url: { src: card.src },
    title: "Community, Not Just Customers",
    description:
      "Join riders who share tips, photos, and stories. You're never just a number. Become part of a community that celebrates every mile of the Himalayan experience.",
  },
] as const;
