import Image from "next/image";
import { appStoreIcon, googlePlayIcon } from "@/assets/images";

const badgeClassName =
  "inline-flex h-[54px] w-[170px] items-center gap-3 rounded-[14px] bg-black px-3.5 transition-opacity hover:opacity-90";

type StoreButtonProps = {
  href?: string;
};

export function AppStoreButton({ href = "#download" }: StoreButtonProps) {
  return (
    <a
      href={href}
      aria-label="Download on the App Store"
      className={badgeClassName}
    >
      <Image
        src={appStoreIcon}
        alt=""
        width={30}
        height={30}
        className="size-[30px] shrink-0 object-contain"
        aria-hidden="true"
      />
      <span className="min-w-0 leading-none">
        <span className="block text-[10px] font-normal text-white">
          Download on
        </span>
        <span className="mt-0.5 block text-[17px] font-bold leading-none text-white">
          App Store
        </span>
      </span>
    </a>
  );
}

export function GooglePlayButton({ href = "#download" }: StoreButtonProps) {
  return (
    <a
      href={href}
      aria-label="Get it on Google Play"
      className={badgeClassName}
    >
      <Image
        src={googlePlayIcon}
        alt=""
        width={30}
        height={30}
        className="size-[30px] shrink-0 object-contain"
        aria-hidden="true"
      />
      <span className="min-w-0 leading-none">
        <span className="block text-[10px] font-normal text-white">Get it on</span>
        <span className="mt-0.5 block text-[17px] font-bold leading-none text-white">
          Google Play
        </span>
      </span>
    </a>
  );
}

export function AppStoreButtonStack({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-2.5 ${className}`.trim()}>
      <AppStoreButton />
      <GooglePlayButton />
    </div>
  );
}
