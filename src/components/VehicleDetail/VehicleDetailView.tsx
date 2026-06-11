import {
  BadgeCheck,
  Bike,
  CircleDot,
  Fuel,
  MapPin,
  Settings2,
  Star,
} from "lucide-react";
import type { Vehicle } from "@/data/vehicles";
import { VehicleBreadcrumbs } from "./VehicleBreadcrumbs";
import { VehicleImageGallery } from "./VehicleImageGallery";
import { VehicleBookingSidebar } from "./VehicleBookingSidebar";
import { VehicleDetailTabs } from "./VehicleDetailTabs";
import { VehicleRelatedBikes } from "./VehicleRelatedBikes";

type VehicleDetailViewProps = {
  vehicle: Vehicle;
  relatedVehicles: Vehicle[];
};

const highlightIcons = [Bike, Fuel, CircleDot, Settings2] as const;

function VehicleSummary({ vehicle }: { vehicle: Vehicle }) {
  return (
    <div className="mt-6">
      <div className="flex flex-wrap items-start gap-2">
        <h1 className="text-[24px] font-extrabold leading-tight tracking-tight text-dark-navy sm:text-[28px] lg:text-[32px]">
          {vehicle.shortTitle}
        </h1>
        <BadgeCheck
          className="mt-1.5 size-5 shrink-0 text-[#3B82F6] sm:size-6"
          strokeWidth={2.25}
          aria-label="Verified listing"
        />
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
        <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-dark-navy">
          <Star
            className="size-4 fill-primary-yellow text-primary-yellow"
            aria-hidden="true"
          />
          {vehicle.rating.toFixed(1)}
          <span className="font-medium text-[#64748B]">
            ({vehicle.reviewCount} reviews)
          </span>
        </span>
        <span className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#64748B]">
          <MapPin
            className="size-4 shrink-0 text-[#94A3B8]"
            strokeWidth={2.25}
            aria-hidden="true"
          />
          {vehicle.locationLabel}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {vehicle.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#E8ECF0] bg-[#F9FAFB] px-3 py-1.5 text-[11px] font-semibold text-[#475569] sm:text-[12px]"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-5 max-w-3xl text-[14px] font-medium leading-[1.75] text-[#475569] sm:text-[15px]">
        {vehicle.description}. {vehicle.distance}. Ideal for riders exploring the
        Himalayas with a trusted, well-maintained vehicle from Hire N Ride.
      </p>

      <div className="mt-6 rounded-2xl border border-[#EEF2F6] bg-[#F9FAFB] p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex -space-x-2">
            {["A", "B", "C"].map((initial) => (
              <span
                key={initial}
                className="flex size-8 items-center justify-center rounded-full border-2 border-white bg-primary-yellow text-[11px] font-extrabold text-dark-navy"
              >
                {initial}
              </span>
            ))}
          </div>
          <div>
            <p className="text-[13px] font-bold text-dark-navy">
              Hosted by {vehicle.host.name}
              <span className="ml-2 rounded-full bg-primary-yellow/20 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-dark-navy">
                {vehicle.host.badge}
              </span>
            </p>
            <p className="mt-0.5 text-[12px] font-medium text-[#64748B]">
              {vehicle.host.tripCount} · {vehicle.host.happyRiders}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {vehicle.highlights.map((highlight, index) => {
          const Icon = highlightIcons[index % highlightIcons.length];
          return (
            <div
              key={highlight.label}
              className="flex flex-col items-center rounded-xl border border-[#EEF2F6] bg-white px-3 py-4 text-center"
            >
              <Icon
                className="size-5 text-primary-yellow"
                strokeWidth={2.25}
                aria-hidden="true"
              />
              <p className="mt-2 text-[11px] font-semibold leading-snug text-[#475569] sm:text-[12px]">
                {highlight.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function VehicleDetailView({
  vehicle,
  relatedVehicles,
}: VehicleDetailViewProps) {
  return (
    <section className="px-4 pb-12 pt-24 sm:px-6 sm:pb-14 sm:pt-28 lg:px-16 xl:px-20">
      <div className="mx-auto w-full max-w-[1280px]">
        <VehicleBreadcrumbs
          shortTitle={vehicle.shortTitle}
          location={vehicle.location}
        />

        <div className="mt-6">
          <VehicleImageGallery
            images={vehicle.images}
            title={vehicle.shortTitle}
            isPopular={vehicle.isPopular}
          />

          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start lg:gap-10">
            <div className="min-w-0">
              <VehicleSummary vehicle={vehicle} />

              <div className="mt-6 lg:hidden">
                <VehicleBookingSidebar vehicle={vehicle} />
              </div>

              <VehicleDetailTabs vehicle={vehicle} />
              <VehicleRelatedBikes vehicles={relatedVehicles} />
            </div>

            <div className="hidden lg:block">
              <VehicleBookingSidebar vehicle={vehicle} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
