import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { locationLabels } from "@/data/vehicles";

type VehicleBreadcrumbsProps = {
  shortTitle: string;
  location: string;
};

export function VehicleBreadcrumbs({
  shortTitle,
  location,
}: VehicleBreadcrumbsProps) {
  const locationName = locationLabels[location] ?? location;

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-1.5 text-[13px] font-medium text-[#64748B]"
    >
      <Link
        href="/"
        className="transition-colors hover:text-dark-navy"
      >
        Home
      </Link>
      <ChevronRight className="size-3.5 shrink-0 text-[#CBD5E1]" aria-hidden="true" />
      <Link
        href="/explore"
        className="transition-colors hover:text-dark-navy"
      >
        Explore
      </Link>
      <ChevronRight className="size-3.5 shrink-0 text-[#CBD5E1]" aria-hidden="true" />
      <span className="text-[#94A3B8]">{locationName}</span>
      <ChevronRight className="size-3.5 shrink-0 text-[#CBD5E1]" aria-hidden="true" />
      <span className="font-semibold text-dark-navy">{shortTitle}</span>
    </nav>
  );
}
