import { Headphones, ShieldCheck, Tag } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface TrustItem {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

export const trustItems: TrustItem[] = [
  { icon: ShieldCheck, title: "Fully Maintained", subtitle: "" },
  { icon: Tag, title: "Transparent Pricing", subtitle: "" },
  { icon: Headphones, title: "24/7 Support", subtitle: "" },
  { icon: ShieldCheck, title: "100% Safety First", subtitle: "" },
];
