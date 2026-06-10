import {
  socialFacebook,
  socialInstagram,
  socialX,
  socialYoutube,
} from "@/assets/images";

interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
  secondaryLinks?: FooterLink[];
}

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
      { label: "Gallery", href: "/gallery" },
      { label: "Contact Us", href: "/contact" },
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

const footerSocialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/hirenride/" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61576470655755" },
  { label: "X", href: "https://x.com/hire_n_ride" },
  { label: "YouTube", href: "https://www.youtube.com/@HireNRide" },
] as const;

export const footerSocialTooltipItems: {
  href: string;
  ariaLabel: string;
  tooltip: string;
  color: string;
  svgUrl: string;
}[] = [
    {
      href: footerSocialLinks[0].href,
      ariaLabel: "Instagram",
      tooltip: "Instagram",
      color: "#E4405F",
      svgUrl: socialInstagram.src,
    },
    {
      href: footerSocialLinks[1].href,
      ariaLabel: "Facebook",
      tooltip: "Facebook",
      color: "#1877F2",
      svgUrl: socialFacebook.src,
    },
    {
      href: footerSocialLinks[2].href,
      ariaLabel: "X",
      tooltip: "X",
      color: "#000000",
      svgUrl: socialX.src,
    },
    {
      href: footerSocialLinks[3].href,
      ariaLabel: "YouTube",
      tooltip: "YouTube",
      color: "#FF0000",
      svgUrl: socialYoutube.src,
    },
  ];
