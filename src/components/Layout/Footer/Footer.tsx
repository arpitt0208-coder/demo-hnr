"use client";

import Link from "next/link";
import { Bike, Mail, MapPin, Phone, ShieldCheck, User } from "lucide-react";
import { cn } from "@/lib/cn";
import { BrandLogo } from "@/components/Layout/BrandLogo";
import { SocialTooltip } from "@/components/UI/social-media";
import {
  footerColumns,
  footerContact,
  footerSocialTooltipItems,
} from "@/data/footer";
import { BorderRotate } from "@/components/UI/animated-gradient-border";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/UI/scroll-reveal";
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
    <ul className="space-y-2.5 text-sm text-[#475569]">
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
    <footer
      className={cn(
        "relative w-full border-t border-[#E8ECF0] bg-white text-dark-navy",
      )}
    >
      <div className="relative mx-auto px-4 py-10 pb-[calc(env(safe-area-inset-bottom,0px)+2.5rem)] sm:px-6 sm:py-12 sm:pb-12 md:px-10 lg:px-20 xl:px-32 lg:py-16">
        <div className="absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8ECF0]" />

        <StaggerReveal className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8" stagger={0.08}>
          <StaggerItem variant="fade-up">
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex shrink-0 items-center"
              aria-label="Hire n Ride home"
            >
              <BrandLogo variant="dark" size="footer" />
            </Link>
            <p className="mt-8 text-sm text-[#64748B] md:mt-0">
              © {new Date().getFullYear()} Hire N Ride — All rights reserved.
            </p>
          </div>
          </StaggerItem>

          <StaggerItem variant="fade-up" className="mt-8 sm:mt-10 xl:col-span-2 xl:mt-0">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-8 md:grid-cols-4">
            {footerColumns.map((column) => {
              const Icon =
                columnIcons[column.title as keyof typeof columnIcons];

              return (
                <div key={column.title}>
                  <div className="mb-10 md:mb-0">
                    <div className="mb-4 flex items-center gap-2">
                      <Icon
                        className="icon-float size-4 shrink-0 text-primary-yellow"
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
          </StaggerItem>
        </StaggerReveal>

        <ScrollReveal variant="fade-up" delay={0.1} className="mt-10">
          <BorderRotate
            animationMode="auto-rotate"
            animationSpeed={6}
            gradientColors={{
              primary: "#3d2f00",
              secondary: "#efbe3d",
              accent: "#f8e4a0",
            }}
            backgroundColor="#ffffff"
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
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[#E8ECF0] bg-[#f5f5f7]">
                    <Phone
                      className="size-[18px] text-primary-yellow"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>
                  <span>
                    <span className="block text-[11px] font-medium text-[#64748B]">
                      Call Us
                    </span>
                    <span className="mt-1 block text-[15px] font-semibold text-dark-navy">
                      {footerContact.phone}
                    </span>
                  </span>
                </a>

                <a
                  href={`mailto:${footerContact.email}`}
                  className="flex items-center gap-4"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[#E8ECF0] bg-[#f5f5f7]">
                    <Mail
                      className="size-[18px] text-primary-yellow"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>
                  <span>
                    <span className="block text-[11px] font-medium text-[#64748B]">
                      Email Us
                    </span>
                    <span className="mt-1 block text-[15px] font-semibold text-dark-navy">
                      {footerContact.email}
                    </span>
                  </span>
                </a>
              </div>

              <div>
                <p className="mb-3 text-[10px] font-bold tracking-[0.18em] text-[#64748B]">
                  DOWNLOAD OUR APP
                </p>
                <FooterAppBadges />
              </div>

              <div className="overflow-visible border-t border-[#E8ECF0] pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <p className="mb-3 text-[10px] font-bold tracking-[0.18em] text-[#64748B]">
                  FOLLOW US
                </p>
                <SocialTooltip
                  items={footerSocialTooltipItems}
                  className="justify-start gap-2.5 [&_a]:size-9 [&_a]:h-9 [&_a]:w-9 [&_a]:rounded-lg [&_a]:shadow-sm [&_a]:transition-transform [&_a]:hover:scale-105"
                />
              </div>
            </div>
          </BorderRotate>
        </ScrollReveal>

        <ScrollReveal variant="fade" delay={0.15} className="mt-8 flex flex-col items-center justify-between gap-3 text-[11px] font-medium text-[#64748B] sm:flex-row sm:gap-4">
            <p className="text-center sm:text-left">
              All information is subject to specific conditions.
            </p>
            <p className="text-center sm:text-right">
              <a href="#" className="text-[#475569] transition-all duration-300 hover:text-dark-navy">
                Terms &amp; Conditions
              </a>
              <span className="mx-2 text-[#CBD5E1]">|</span>
              <a href="#" className="text-[#475569] transition-all duration-300 hover:text-dark-navy">
                Privacy Policy
              </a>
            </p>
        </ScrollReveal>
      </div>
    </footer>
  );
}
