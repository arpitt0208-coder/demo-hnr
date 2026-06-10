import type { Metadata } from "next";
import { ContactHelpSection } from "@/components/Contact/ContactHelpSection";
import { ContactHeroSection } from "@/components/Contact/ContactHeroSection";
import { ContactIntroSection } from "@/components/Contact/ContactIntroSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { WhatsAppContactButton } from "@/components/UI/WhatsAppContactButton";

export const metadata: Metadata = {
  title: "Contact Us | Hire N Ride",
  description:
    "Get in touch with Hire N Ride for bookings, route guidance, bike questions, and on-road support. Our local team is here to help.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-white">
      <Navbar />
      <WhatsAppContactButton />
      <div className="relative z-10 mx-auto w-full max-w-full overflow-x-clip">
        <ContactHeroSection ctaHref="/explore" />
        <ContactIntroSection />
        <ContactHelpSection />
        <Footer />
      </div>
    </main>
  );
}
