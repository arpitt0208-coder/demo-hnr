import type { Metadata } from "next";
import Image from "next/image";
import {
  GalleryImageAccordion,
  GalleryLocationSections,
} from "@/components/Gallery";
import { Footer, Navbar } from "@/components/Layout";
import { WhatsAppContactButton } from "@/components/UI/WhatsAppContactButton";
import {
  galleryAccordionItems,
  galleryHeroBackground,
  galleryHeroCopy,
} from "@/data/gallery";

export const metadata: Metadata = {
  title: "Ride Gallery | Hire N Ride",
  description:
    "From City Streets to Coastal Roads. Check out our collection of amazing photos showcasing the beauty of the area.",
};

export default function GalleryPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background">
      <Navbar />
      <WhatsAppContactButton />
      <div className="relative z-10 mx-auto w-full max-w-full overflow-x-clip">
        <section className="relative overflow-x-clip px-4 pb-10 pt-20 sm:px-6 sm:pb-12 sm:pt-24 md:px-10 md:pt-28 lg:px-16 lg:pb-14 lg:pt-32 xl:px-20 xl:pt-36">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <Image
              src={galleryHeroBackground}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-top"
            />
          </div>

          <div className="relative z-10">
            <GalleryImageAccordion
              items={galleryAccordionItems}
              title={
                <>
                  {galleryHeroCopy.title.line1}{" "}
                  <span className="text-primary-yellow">
                    {galleryHeroCopy.title.highlight}
                  </span>
                </>
              }
              description={galleryHeroCopy.description}
              ctaLabel="Explore bikes"
              ctaHref="/explore"
            />
          </div>
        </section>

        <GalleryLocationSections />

        <Footer />
      </div>
    </main>
  );
}
