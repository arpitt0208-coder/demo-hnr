import {
  HomeAppPromoSection,
  HomeFeaturesSection,
  HomeFindYourRideSection,
  // HomeHelpInfoSection,
  HomeHero,
  HomeLocationsMapSection,
  HomeServicesSection,
  HomeSocialProofSection,
  HomeTestimonialsSection,
} from "@/components/Home";
import { HomePremiumProvider } from "@/components/Home/HomePremiumProvider";
import { ServiceTierCard } from "@/components/Home/Services/ServiceTierCard";
import { Footer, Navbar } from "@/components/Layout";
import { WhatsAppContactButton } from "@/components/UI/WhatsAppContactButton";
import { serviceTiers } from "@/data/serviceTiers";

export default function Home() {
  return (
    <HomePremiumProvider>
      <main className="home-premium relative min-h-screen overflow-x-clip">
        <Navbar variant="premium" />
        <WhatsAppContactButton />

        <div className="relative z-10 mx-auto w-full max-w-full overflow-x-clip">
          <HomeHero />
          <HomeServicesSection />
          <HomeLocationsMapSection />
          <HomeFindYourRideSection />
          <HomeFeaturesSection />
          <HomeSocialProofSection />
          <HomeTestimonialsSection />
          <HomeAppPromoSection />
          {/* <HomeHelpInfoSection /> */}
          <Footer />
        </div>
      </main>
    </HomePremiumProvider>
  );
}
