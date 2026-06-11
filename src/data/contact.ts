import type { LucideIcon } from "lucide-react";
import {
  Bike,
  Calendar,
  Headphones,
  MapPin,
  MessageCircle,
  Shield,
  Users,
} from "lucide-react";
import { footerContact } from "@/data/footer";

export const contactHeroBadge = "WE'RE HERE FOR YOU";

export const contactHeroTitle = {
  line1: "Get In",
  highlight: "Touch",
};

export const contactHeroDescription =
  "Have a question or need help? We're here for you—whether it's bookings, support, or just figuring out which bike suits your Himalayan ride.";

export type ContactHeroFeature = {
  id: string;
  label: string;
  icon: LucideIcon;
  iconClassName: string;
  iconBgClassName: string;
};

export const contactHeroFeatures: ContactHeroFeature[] = [
  {
    id: "trusted-fleet",
    label: "Trusted fleet",
    icon: Shield,
    iconClassName: "text-[#F97316]",
    iconBgClassName: "bg-[#FFF7ED]",
  },
  {
    id: "local-support",
    label: "Local support",
    icon: Headphones,
    iconClassName: "text-primary-yellow",
    iconBgClassName: "bg-[#FFFBF0]",
  },
  {
    id: "quick-booking",
    label: "Quick booking",
    icon: Calendar,
    iconClassName: "text-[#F97316]",
    iconBgClassName: "bg-[#FFF7ED]",
  },
];

export const contactIntroText =
  "At Hire N Ride, we believe that every great adventure starts with a simple conversation. Whether you're looking for bike rental in Manali, need help with your booking, or just want to hear from someone who has actually ridden the roads you're planning on visiting – our team is here to help.";

export type ContactHelpItem = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  iconClassName: string;
  iconBgClassName: string;
};

export const contactHelpItems: ContactHelpItem[] = [
  {
    id: "booking-help",
    title: "Booking Help",
    description: "Payments, dates, availability—we'll handle it.",
    icon: Calendar,
    iconClassName: "text-primary-yellow",
    iconBgClassName: "bg-[#FFFBF0]",
  },
  {
    id: "route-guidance",
    title: "Route Guidance",
    description: "Know before you go. We've ridden every road.",
    icon: MapPin,
    iconClassName: "text-[#22C55E]",
    iconBgClassName: "bg-[#F0FDF4]",
  },
  {
    id: "bike-question",
    title: "Bike Question",
    description: "Not sure which bike fits? Let's talk.",
    icon: Bike,
    iconClassName: "text-[#3B82F6]",
    iconBgClassName: "bg-[#EFF6FF]",
  },
  {
    id: "group-booking",
    title: "Group Booking",
    description: "Riding with friends? We'll sort the fleet.",
    icon: Users,
    iconClassName: "text-[#A855F7]",
    iconBgClassName: "bg-[#FAF5FF]",
  },
  {
    id: "emergency-assistance",
    title: "Emergency Assistance",
    description: "On the road and stuck? We're just a call away.",
    icon: Shield,
    iconClassName: "text-[#EF4444]",
    iconBgClassName: "bg-[#FEF2F2]",
  },
];

export const contactSupportPanel = {
  title: "Customer Support",
  description:
    "We know things don't always go as planned. For assistance with bookings, payments, or general queries, please reach out to our support team:",
};

export const contactSupportDetails = [
  {
    id: "email",
    label: "Email",
    value: footerContact.email,
    icon: "mail" as const,
    bgClassName: "bg-[#EFF6FF]",
    iconClassName: "text-[#3B82F6]",
    copyable: true,
  },
  {
    id: "phone",
    label: "Phone",
    value: footerContact.phone,
    icon: "phone" as const,
    bgClassName: "bg-[#F0FDF4]",
    iconClassName: "text-[#22C55E]",
    copyable: true,
  },
];

export const contactHelpPanelIcon = MessageCircle;
