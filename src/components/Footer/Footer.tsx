"use client";

import Link from "next/link";
import { Bike, Mail, MapPin, Phone, ShieldCheck, User } from "lucide-react";
import logoWhite from "@/assets/images/logowhite.png";
import logoWhite2x from "@/assets/images/logowhite-2x.png";
import { SocialTooltip } from "@/components/UI/social-media";
import {
  footerColumns,
  footerContact,
  footerSocialTooltipItems,
} from "@/data/footer";
import { BorderRotate } from "@/components/UI/animated-gradient-border";
import { FooterAppBadges } from "./FooterAppBadges";

const columnIcons = {
  LOCATIONS: MapPin,
  SERVICES: Bike,
  COMPANY: User,
  POLICIES: ShieldCheck,
} as const;

function FooterLinkList({
  links,
}: {
  links: { label: string; href: string }[];
}) {
  return (
    <ul className="space-y-2.5 text-sm text-white/85">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="block leading-snug transition-colors duration-300 hover:text-primary-yellow"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="relative w-full border-t border-white/10 bg-black text-white">
      <div className="relative mx-auto px-4 py-10 sm:px-6 sm:py-12 md:px-10 lg:px-20 xl:px-32 lg:py-16">
        <div className="absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20" />

        <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex shrink-0 items-center"
              aria-label="Hire n Ride home"
            >
              <img
                src={logoWhite.src}
                srcSet={`${logoWhite.src} 1x, ${logoWhite2x.src} 2x`}
                width={121}
                height={32}
                alt="Hire n Ride — Your travel partner"
                decoding="async"
                className="block h-8 w-[121px] max-w-none"
              />
            </Link>
            <p className="mt-8 text-sm text-white/65 md:mt-0">
              © {new Date().getFullYear()} Hire N Ride — All rights reserved.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 sm:grid-cols-2 sm:gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
            {footerColumns.map((column) => {
              const Icon =
                columnIcons[column.title as keyof typeof columnIcons];

              return (
                <div key={column.title}>
                  <div className="mb-10 md:mb-0">
                    <div className="mb-4 flex items-center gap-2">
                      <Icon
                        className="size-4 shrink-0 text-primary-yellow"
                        strokeWidth={2.2}
                        aria-hidden="true"
                      />
                      <h3 className="text-xs font-bold tracking-[0.16em] text-primary-yellow">
                        {column.title}
                      </h3>
                    </div>

                    {column.secondaryLinks ? (
                      <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
                        <FooterLinkList links={column.links} />
                        <FooterLinkList links={column.secondaryLinks} />
                      </div>
                    ) : (
                      <FooterLinkList links={column.links} />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10">
          <BorderRotate
            animationMode="auto-rotate"
            animationSpeed={6}
            gradientColors={{
              primary: "#3d2f00",
              secondary: "#efbe3d",
              accent: "#f8e4a0",
            }}
            backgroundColor="#0a0a0a"
            borderWidth={1}
            borderRadius={16}
            className="px-5 py-6 sm:px-8 sm:py-7"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
                <a
                  href={`tel:${footerContact.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-4"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#111111]">
                    <Phone
                      className="size-[18px] text-primary-yellow"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>
                  <span>
                    <span className="block text-[11px] font-medium text-white/70">
                      Call Us
                    </span>
                    <span className="mt-1 block text-[15px] font-semibold text-white">
                      {footerContact.phone}
                    </span>
                  </span>
                </a>

                <a
                  href={`mailto:${footerContact.email}`}
                  className="flex items-center gap-4"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#111111]">
                    <Mail
                      className="size-[18px] text-primary-yellow"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>
                  <span>
                    <span className="block text-[11px] font-medium text-white/70">
                      Email Us
                    </span>
                    <span className="mt-1 block text-[15px] font-semibold text-white">
                      {footerContact.email}
                    </span>
                  </span>
                </a>
              </div>

              <div>
                <p className="mb-3 text-[10px] font-bold tracking-[0.18em] text-white/70">
                  DOWNLOAD OUR APP
                </p>
                <FooterAppBadges />
              </div>

              <div className="overflow-visible border-t border-primary-yellow/15 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <p className="mb-3 text-[10px] font-bold tracking-[0.18em] text-white/70">
                  FOLLOW US
                </p>
                <SocialTooltip
                  items={footerSocialTooltipItems}
                  className="justify-start gap-2.5 [&_a]:size-9 [&_a]:h-9 [&_a]:w-9 [&_a]:rounded-lg [&_a]:shadow-sm [&_a]:transition-transform [&_a]:hover:scale-105"
                />
              </div>
            </div>
          </BorderRotate>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-[11px] font-medium text-white/65 sm:flex-row sm:gap-4">
            <p className="text-center sm:text-left">
              All information is subject to specific conditions.
            </p>
            <p className="text-center sm:text-right">
              <a href="#" className="text-white/80 transition-all duration-300 hover:text-white">
                Terms &amp; Conditions
              </a>
              <span className="mx-2 text-white/40">|</span>
              <a href="#" className="text-white/80 transition-all duration-300 hover:text-white">
                Privacy Policy
              </a>
            </p>
        </div>
      </div>
    </footer>
  );
}
