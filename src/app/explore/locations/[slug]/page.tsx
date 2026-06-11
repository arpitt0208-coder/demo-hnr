import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationExploreView } from "@/components/Explore";
import { Footer, Navbar } from "@/components/Layout";
import { WhatsAppContactButton } from "@/components/UI/WhatsAppContactButton";
import {
  exploreLocations,
  getExploreLocationBySlug,
} from "@/data/exploreLocations";
import { browseVehicles } from "@/data/vehicles";

type LocationExplorePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return exploreLocations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: LocationExplorePageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getExploreLocationBySlug(slug);

  if (!location) {
    return {
      title: "Location Not Found | Hire N Ride",
    };
  }

  return {
    title: `Explore Bikes in ${location.name} | Hire N Ride`,
    description: location.description,
  };
}

export default async function LocationExplorePage({
  params,
}: LocationExplorePageProps) {
  const { slug } = await params;
  const location = getExploreLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const locationVehicles = browseVehicles.filter((vehicle) =>
    location.vehicleLocationSlugs.includes(vehicle.location),
  );

  return (
    <main className="relative min-h-screen overflow-x-clip bg-white">
      <Navbar />
      <WhatsAppContactButton />
      <div className="relative z-10 mx-auto w-full max-w-full overflow-x-clip">
        <LocationExploreView location={location} vehicles={locationVehicles} />
        <Footer />
      </div>
    </main>
  );
}
