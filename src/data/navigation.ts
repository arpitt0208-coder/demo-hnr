export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export const navItems: NavItem[] = [
  { label: "Our Fleet", href: "#fleet", hasDropdown: true },
  { label: "About Us", href: "#about", hasDropdown: true },
  { label: "Locations", href: "#locations", hasDropdown: true },
  { label: "Earn More", href: "#earn", hasDropdown: true },
];
