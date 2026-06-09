import { Bike, Calendar, type LucideIcon } from "lucide-react";

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
    icon: Bike,
    title: "Pick Up & Go",
    description:
      "From scooters to adventure bikes—transparent pricing and pickup when you're ready.",
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=640&h=400&fit=crop",
  },
  {
    id: 2,
    icon: Bike,
    title: "Pick Up & Go",
    description:
      "Collect your rental and hit the road—Manali, Leh, Spiti, or wherever you're headed.",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=640&h=400&fit=crop",
  },
  {
    id: 3,
    icon: Calendar,
    title: "Book in Minutes",
    description:
      "Reserve your rental online with clear dates, pricing, and pickup—no hidden fees.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=640&h=400&fit=crop",
  },
];
