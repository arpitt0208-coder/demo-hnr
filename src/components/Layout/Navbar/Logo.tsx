import Link from "next/link";
import { BrandLogo } from "@/components/Layout/BrandLogo";

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center"
      aria-label="Hire n Ride home"
    >
      <BrandLogo variant="dark" size="header" priority />
    </Link>
  );
}
