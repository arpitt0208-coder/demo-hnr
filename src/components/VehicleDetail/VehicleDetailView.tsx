import { BadgeCheck, MapPin, Star } from "lucide-react";
import type { Vehicle } from "@/data/vehicles";
import { VehicleBreadcrumbs } from "./VehicleBreadcrumbs";
import { VehicleImageGallery } from "./VehicleImageGallery";
import { VehicleBookingSidebar } from "./VehicleBookingSidebar";
import { VehicleDetailTabs } from "./VehicleDetailTabs";
import { VehicleRelatedBikes } from "./VehicleRelatedBikes";
import { getHighlightIconStyle } from "./vehicle-detail-icons";
import { cn } from "@/lib/cn";

type VehicleDetailViewProps = {
  vehicle: Vehicle;
  relatedVehicles: Vehicle[];
};

function VehicleSummary({ vehicle }: { vehicle: Vehicle }) {
  return (
    <div>
      <div className="flex flex-wrap items-start gap-2">
        <h1 className="text-[22px] font-extrabold leading-tight tracking-tight text-dark-navy sm:text-[26px] lg:text-[28px]">
          {vehicle.shortTitle}
        </h1>
        <BadgeCheck
          className="mt-1 size-5 shrink-0 text-[#3B82F6] sm:size-[22px]"
          strokeWidth={2.25}
          aria-label="Verified listing"
        />
      </div>

      <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5">
        <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-dark-navy sm:text-[14px]">
          <Star
            className="size-3.5 fill-primary-yellow text-primary-yellow sm:size-4"
            aria-hidden="true"
          />
          {vehicle.rating.toFixed(1)}
          <span className="font-medium text-[#64748B]">
            ({vehicle.reviewCount} reviews)
          </span>
        </span>
        <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#64748B] sm:text-[14px]">
          <MapPin
            className="size-3.5 shrink-0 text-[#94A3B8] sm:size-4"
            strokeWidth={2.25}
            aria-hidden="true"
          />
          {vehicle.locationLabel}
        </span>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
        {vehicle.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#E8ECF0] bg-[#F9FAFB] px-2.5 py-1 text-[11px] font-semibold text-[#475569] sm:px-3 sm:py-1.5 sm:text-[12px]"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-3.5 text-[13px] font-medium leading-[1.7] text-[#475569] sm:text-[14px]">
        {vehicle.description}. {vehicle.distance}. Ideal for riders exploring the
        Himalayas with a trusted, well-maintained vehicle from Hire N Ride.
      </p>

      <div className="mt-4 rounded-xl border border-[#EEF2F6] bg-[#F9FAFB] p-3.5 sm:p-4">
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          <div className="flex -space-x-2">
            {["A", "B", "C"].map((initial) => (
              <span
                key={initial}
                className="flex size-7 items-center justify-center rounded-full border-2 border-white bg-primary-yellow text-[10px] font-extrabold text-dark-navy sm:size-8 sm:text-[11px]"
              >
                {initial}
              </span>
            ))}
          </div>
          <div>
            <p className="text-[12px] font-bold text-dark-navy sm:text-[13px]">
              Hosted by {vehicle.host.name}
              <span className="ml-1.5 rounded-full bg-primary-yellow/20 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-dark-navy">
                {vehicle.host.badge}
              </span>
            </p>
            <p className="mt-0.5 text-[11px] font-medium text-[#64748B] sm:text-[12px]">
              {vehicle.host.tripCount} · {vehicle.host.happyRiders}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-2.5">
        {vehicle.highlights.map((highlight) => {
          const { Icon, bg, color } = getHighlightIconStyle(highlight.label);
          return (
            <div
              key={highlight.label}
              className="flex flex-col items-center rounded-xl border border-[#EEF2F6] bg-white px-2.5 py-3 text-center sm:px-3 sm:py-3.5"
            >
              <span
                className={cn(
                  "flex size-9 items-center justify-center rounded-full sm:size-10",
                  bg,
                )}
              >
                <Icon
                  className={cn("size-4 sm:size-[18px]", color)}
                  strokeWidth={2.25}
                  aria-hidden="true"
                />
              </span>
              <p className="mt-2 text-[10px] font-semibold leading-snug text-[#475569] sm:text-[11px]">
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
    <section className="px-4 pb-10 pt-24 sm:px-6 sm:pb-12 sm:pt-28 lg:px-16 xl:px-20">
      <div className="mx-auto w-full max-w-[1200px]">
        <VehicleBreadcrumbs
          shortTitle={vehicle.shortTitle}
          location={vehicle.location}
        />

        <div className="mt-4 grid gap-5 sm:mt-5 lg:grid-cols-[minmax(0,1fr)_minmax(280px,340px)] lg:items-start lg:gap-6">
          <VehicleImageGallery
            images={vehicle.images}
            title={vehicle.shortTitle}
            isPopular={vehicle.isPopular}
            className="order-1 min-w-0 lg:col-start-1 lg:row-start-1"
          />

          <div className="order-2 min-w-0 lg:col-start-2 lg:row-start-1 lg:row-span-2">
            <VehicleBookingSidebar vehicle={vehicle} variant="compact" />
          </div>

          <div className="order-3 min-w-0 lg:col-start-1 lg:row-start-2">
            <VehicleSummary vehicle={vehicle} />
          </div>
        </div>

        <VehicleDetailTabs vehicle={vehicle} />
        <VehicleRelatedBikes vehicles={relatedVehicles} />
      </div>
    </section>
  );
}
