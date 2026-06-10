import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/UI/social-icons";
import { footerContact } from "@/data/footer";
import { cn } from "@/lib/cn";

const WHATSAPP_URL = "https://wa.me/916283047569?text=Hi";

const floatingButtonClassName = cn(
  "flex size-12 items-center justify-center rounded-full",
  "border border-[#E8ECF0] bg-white",
  "shadow-[0_4px_20px_rgba(15,23,42,0.18)]",
  "transition-all duration-300",
  "hover:scale-105 hover:border-primary-yellow/40 hover:shadow-[0_8px_28px_rgba(239,190,61,0.25)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-yellow focus-visible:ring-offset-2"
);

export function WhatsAppContactButton() {
  const phoneHref = `tel:${footerContact.phone.replace(/\s/g, "")}`;

  return (
    <div
      className="pointer-events-none fixed right-4 bottom-6 z-50 flex flex-col gap-3 sm:right-5 sm:bottom-8"
      aria-label="Contact options"
    >
      <a
        href={phoneHref}
        aria-label="Call us"
        className={cn(floatingButtonClassName, "pointer-events-auto")}
      >
        <Phone
          className="size-5 text-primary-yellow"
          strokeWidth={2.2}
          aria-hidden="true"
        />
      </a>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className={cn(floatingButtonClassName, "pointer-events-auto")}
      >
        <WhatsAppIcon className="size-6 text-[#25D366]" aria-hidden="true" />
      </a>
    </div>
  );
}
