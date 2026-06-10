import type { Metadata } from "next";
import { bikeImages } from "@/assets/images";
import { BrowseVehiclesSection } from "@/components/Explore/BrowseVehiclesSection";
import { ExploreHeroSection } from "@/components/Explore/ExploreHeroSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { WhatsAppContactButton } from "@/components/UI/WhatsAppContactButton";
import type { BrowseVehicle } from "./VehicleCard";

export const metadata: Metadata = {
  title: "Explore Bike Models | Hire N Ride",
  description:
    "Browse our trusted fleet of Himalayan bikes. Well maintained, locally guided, and ready to book in minutes.",
};

const browseVehicles: BrowseVehicle[] = [
  {
    id: "suzuki-access-125",
    title: "SUZUKI MOTORCYCLE INDIA PVT LTD ACCESS 125",
    description: "A well-maintained SUZUKI MOTORCYCLE INDIA PVT LTD",
    images: [bikeImages.scram, bikeImages.hunter, bikeImages.meteor, bikeImages.himalayan],
    rating: 5.0,
    capacity: 3,
    category: "scooters",
    location: "bhuntar",
    distance: "Around 17.3 km from Manali",
    age: "1 year+ old",
    price: 816,
    href: "#suzuki-access-125",
  },
  {
    id: "royal-enfield-himalayan",
    title: "ROYAL ENFIELD MOTORCYCLES LTD HIMALAYAN",
    description: "A well-maintained ROYAL ENFIELD MOTORCYCLES LTD",
    images: [bikeImages.himalayan, bikeImages.scram, bikeImages.hunter, bikeImages.meteor],
    rating: 5.0,
    capacity: 2,
    category: "bikes",
    location: "bhuntar",
    distance: "Around 17.3 km from Manali",
    age: "2 year+ old",
    price: 2208,
    href: "#royal-enfield-himalayan",
  },
  {
    id: "royal-enfield-classic-350",
    title: "ROYAL ENFIELD MOTORCYCLES LTD CLASSIC 350 CC",
    description: "A well-maintained ROYAL ENFIELD MOTORCYCLES LTD",
    images: [bikeImages.meteor, bikeImages.himalayan, bikeImages.scram, bikeImages.hunter],
    rating: 5.0,
    capacity: 3,
    category: "bikes",
    location: "bhuntar",
    distance: "Around 17.3 km from Manali",
    age: "10 year+ old",
    price: 1488,
    href: "#royal-enfield-classic-350",
  },
  {
    id: "royal-enfield-hunter-350",
    title: "ROYAL ENFIELD MOTORCYCLES LTD HUNTER 350",
    description: "A well-maintained ROYAL ENFIELD MOTORCYCLES LTD",
    images: [bikeImages.hunter, bikeImages.meteor, bikeImages.scram, bikeImages.himalayan],
    rating: 5.0,
    capacity: 2,
    category: "bikes",
    location: "bhuntar",
    distance: "Around 12.1 km from Bhuntar",
    age: "3 year+ old",
    price: 1680,
    href: "#royal-enfield-hunter-350",
  },
];

export default function ExplorePage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-white">
      <Navbar />
      <WhatsAppContactButton />
      <div className="relative z-10 mx-auto w-full max-w-full overflow-x-clip">
        <ExploreHeroSection ctaHref="#bike-models" />

        <section
          id="bike-models"
          className="scroll-mt-24 bg-[#F9FAFB] px-4 py-10 sm:px-6 sm:py-12 lg:px-16 xl:px-20"
          aria-label="Browse available vehicles"
        >
          <div className="mx-auto w-full max-w-[1280px]">
            <div className="text-center">
              <h2 className="text-[28px] font-extrabold leading-[1.12] tracking-tight text-dark-navy sm:text-[32px]">
                Browse Available Vehicles
              </h2>
              <p className="mx-auto mt-3 max-w-[640px] text-[15px] font-medium leading-[1.7] text-[#64748B]">
                Choose from our wide range of well-maintained bikes and scooters
              </p>
            </div>

            <BrowseVehiclesSection vehicles={browseVehicles} />
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
