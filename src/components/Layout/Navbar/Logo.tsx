import Link from "next/link";
import logo from "@/assets/images/logo.png";
import logo2x from "@/assets/images/logo-2x.png";

const LOGO_WIDTH = 121;
const LOGO_HEIGHT = 32;

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center"
      aria-label="Hire n Ride home"
    >
      <img
        src={logo.src}
        srcSet={`${logo.src} 1x, ${logo2x.src} 2x`}
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        alt="Hire n Ride — Your travel partner"
        decoding="async"
        fetchPriority="high"
        className="block h-8 w-[121px] max-w-none"
      />
    </Link>
  );
}
