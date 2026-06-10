import Image from "next/image";
import { qrDownloadApp } from "@/assets/images";
import { AppStoreButtonStack } from "@/components/UI/AppStoreButtons";

export function FooterAppBadges() {
  return (
    <div className="flex items-center gap-4 sm:gap-5">
      <Image
        src={qrDownloadApp}
        alt="Scan to download the Hire n Ride app"
        width={96}
        height={96}
        className="size-[80px] shrink-0 rounded-[4px] sm:size-[96px]"
      />
      <AppStoreButtonStack variant="footer" />
    </div>
  );
}
