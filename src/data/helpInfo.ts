import {
  Headphones,
  HelpCircle,
  MessageCircleQuestion,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type HelpFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type HelpInfoPanel = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const helpFaqItems: HelpFaqItem[] = [
  {
    id: "book-bike",
    question: "How do I book a bike?",
    answer:
      "Browse available bikes, pick your dates and location, complete KYC, and confirm your booking in the app or on our website.",
  },
  {
    id: "documents",
    question: "What documents are required?",
    answer:
      "A valid driving license, government ID proof, and a refundable security deposit are required before pickup.",
  },
  {
    id: "cancel-modify",
    question: "Can I cancel or modify my booking?",
    answer:
      "Yes. You can modify or cancel from your booking dashboard, subject to our cancellation and rescheduling policy.",
  },
  {
    id: "fuel",
    question: "Is fuel included in the rental?",
    answer:
      "Fuel is not included. You receive the bike with a full tank and should return it with a similar fuel level.",
  },
];

export const helpFaqPanel: HelpInfoPanel = {
  id: "faq",
  icon: MessageCircleQuestion,
  title: "Frequently Asked Questions",
  description:
    "Everything you need to know about bookings, payments, rentals, and more.",
};

export const helpDisclaimerPanel: HelpInfoPanel = {
  id: "disclaimer",
  icon: ShieldCheck,
  title: "Disclaimer",
  description:
    "Important terms, conditions, and legal information you should know.",
};

export const helpDisclaimerContent =
  "Rentals are subject to availability, local regulations, and Hire N Ride terms of service. Riders must comply with traffic laws and wear approved safety gear. Hire N Ride is not liable for delays caused by weather, road closures, or force majeure events.";

export const helpContactPanel = {
  icon: Headphones,
  title: "Still need help?",
  description: "Our support team is just a message away.",
  cta: "Contact Support",
};

export const helpBadgeIcon = HelpCircle;
