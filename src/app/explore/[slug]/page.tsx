import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer, Navbar } from "@/components/Layout";
import { InstantScrollToTop } from "@/components/UI/InstantScrollToTop";
import { WhatsAppContactButton } from "@/components/UI/WhatsAppContactButton";
import { VehicleDetailView } from "@/components/VehicleDetail";
import {
  getRelatedVehicles,
  getVehicleBySlug,
  vehicles,
} from "@/data/vehicles";

type VehicleDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({ slug: vehicle.id }));
}

export async function generateMetadata({
  params,
}: VehicleDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    return {
      title: "Vehicle Not Found | Hire N Ride",
    };
  }

  return {
    title: `${vehicle.shortTitle} | Hire N Ride`,
    description: vehicle.aboutText,
  };
}

export default async function VehicleDetailPage({ params }: VehicleDetailPageProps) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    notFound();
  }

  const relatedVehicles = getRelatedVehicles(vehicle);

  return (
    <main className="relative min-h-screen overflow-x-clip bg-white">
      <InstantScrollToTop />
      <Navbar />
      <WhatsAppContactButton />
      <div className="relative z-10 mx-auto w-full max-w-full overflow-x-clip">
        <VehicleDetailView vehicle={vehicle} relatedVehicles={relatedVehicles} />
        <Footer />
      </div>
    </main>
  );
}
