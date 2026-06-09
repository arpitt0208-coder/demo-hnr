export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
  secondaryLinks?: FooterLink[];
}

export const footerRouteStops = [
  { label: "Manali", x: 8 },
  { label: "Solang", x: 22 },
  { label: "Rohtang", x: 35 },
  { label: "Leh", x: 48 },
  { label: "Spiti", x: 58 },
  { label: "Dharamshala", x: 75 },
  { label: "Bir Billing", x: 90 },
] as const;

export const footerColumns: FooterColumn[] = [
  {
    title: "LOCATIONS",
    links: [
      { label: "Manali", href: "#" },
      { label: "Kullu", href: "#" },
      { label: "Leh-Ladakh", href: "#" },
      { label: "Spiti Valley", href: "#" },
      { label: "Solang Valley", href: "#" },
    ],
    secondaryLinks: [
      { label: "Rohtang Pass", href: "#" },
      { label: "Manali to Sissu", href: "#" },
      { label: "Mohali", href: "#" },
      { label: "Bir Billing", href: "#" },
      { label: "Dharamshala", href: "#" },
    ],
  },
  {
    title: "SERVICES",
    links: [
      { label: "Bike Rental", href: "#" },
      { label: "Hotel Referral", href: "#" },
      { label: "Volvo Referral", href: "#" },
      { label: "Restaurant Referral", href: "#" },
      { label: "Rental Location", href: "#" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About Us", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Gallery", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    title: "POLICIES",
    links: [
      { label: "Cancellation & Refunds", href: "#" },
      { label: "Shipping & Delivery Policy", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
    ],
  },
];

export const footerContact = {
  phone: "+91 8065063875",
  email: "info@hirenride.com",
};

export const footerSocialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "X", href: "#" },
  { label: "YouTube", href: "#" },
] as const;
