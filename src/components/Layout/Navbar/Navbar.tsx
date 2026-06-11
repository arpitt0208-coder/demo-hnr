"use client";

import { motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { navItems } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { AboutDropdown } from "./AboutDropdown";
import { EarnMoreDropdown } from "./EarnMoreDropdown";
import { FleetDropdown } from "./FleetDropdown";
import { LocationsDropdown } from "./LocationsDropdown";
import { Logo } from "./Logo";

const FLEET_LABEL = "Our Fleet";
const ABOUT_LABEL = "About Us";
const LOCATIONS_LABEL = "Locations";
const EARN_MORE_LABEL = "Earn More";
const CLOSE_DELAY_MS = 200;

type NavDropdownId = "fleet" | "about" | "locations" | "earn";

function isScrollableMenuElement(element: HTMLElement) {
  const { overflowY } = getComputedStyle(element);
  return (
    (overflowY === "auto" || overflowY === "scroll") &&
    element.scrollHeight > element.clientHeight
  );
}

function shouldPreventMenuWheel(
  element: HTMLElement,
  deltaY: number,
) {
  const atTop = element.scrollTop <= 0;
  const atBottom =
    element.scrollTop + element.clientHeight >= element.scrollHeight - 1;

  return (deltaY < 0 && atTop) || (deltaY > 0 && atBottom);
}

function getNavDropdownId(label: string): NavDropdownId | null {
  if (label === FLEET_LABEL) return "fleet";
  if (label === ABOUT_LABEL) return "about";
  if (label === LOCATIONS_LABEL) return "locations";
  if (label === EARN_MORE_LABEL) return "earn";
  return null;
}

export function Navbar() {
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const mobileMenuScrollRef = useRef<HTMLDivElement>(null);
  const lockedScrollYRef = useRef(0);
  const [activeDropdown, setActiveDropdown] = useState<NavDropdownId | null>(
    null
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cancelScheduledClose = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const openDropdown = useCallback(
    (id: NavDropdownId) => {
      cancelScheduledClose();
      setActiveDropdown(id);
    },
    [cancelScheduledClose]
  );

  const closeDropdown = useCallback(() => {
    cancelScheduledClose();
    setActiveDropdown(null);
  }, [cancelScheduledClose]);

  const scheduleCloseDropdown = useCallback(() => {
    cancelScheduledClose();
    closeTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
      closeTimerRef.current = null;
    }, CLOSE_DELAY_MS);
  }, [cancelScheduledClose]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const dropdownOpen = activeDropdown !== null;

  useEffect(() => {
    if (!mobileMenuOpen) return;

    lockedScrollYRef.current = window.scrollY;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const { style: bodyStyle } = document.body;
    const { style: htmlStyle } = document.documentElement;

    bodyStyle.position = "fixed";
    bodyStyle.top = `-${lockedScrollYRef.current}px`;
    bodyStyle.left = "0";
    bodyStyle.right = "0";
    bodyStyle.width = "100%";
    bodyStyle.paddingRight = `${scrollbarWidth}px`;
    bodyStyle.overflow = "hidden";
    htmlStyle.overflow = "hidden";

    return () => {
      bodyStyle.position = "";
      bodyStyle.top = "";
      bodyStyle.left = "";
      bodyStyle.right = "";
      bodyStyle.width = "";
      bodyStyle.paddingRight = "";
      bodyStyle.overflow = "";
      htmlStyle.overflow = "";
      window.scrollTo(0, lockedScrollYRef.current);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!dropdownOpen && !mobileMenuOpen) return;

    const preventBackgroundScroll = (event: WheelEvent | TouchEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;

      if (navContainerRef.current?.contains(target)) {
        let element = target instanceof Element ? target : target.parentElement;

        while (element && navContainerRef.current.contains(element)) {
          if (
            element instanceof HTMLElement &&
            isScrollableMenuElement(element)
          ) {
            if (
              event instanceof WheelEvent &&
              shouldPreventMenuWheel(element, event.deltaY)
            ) {
              event.preventDefault();
            }
            return;
          }

          element = element.parentElement;
        }

        event.preventDefault();
        return;
      }

      event.preventDefault();
    };

    document.addEventListener("wheel", preventBackgroundScroll, {
      passive: false,
    });
    document.addEventListener("touchmove", preventBackgroundScroll, {
      passive: false,
    });

    return () => {
      document.removeEventListener("wheel", preventBackgroundScroll);
      document.removeEventListener("touchmove", preventBackgroundScroll);
    };
  }, [dropdownOpen, mobileMenuOpen]);

  useEffect(() => {
    if (!dropdownOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (navContainerRef.current?.contains(target)) return;
      closeDropdown();
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [dropdownOpen, closeDropdown]);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, []);

  const openMobileDropdown = useCallback((id: NavDropdownId) => {
    cancelScheduledClose();
    setActiveDropdown(id);
  }, [cancelScheduledClose]);

  const handleMobileMenuLinkClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const link =
        event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (link) closeMobileMenu();
    },
    [closeMobileMenu]
  );

  const navPanelOpen = dropdownOpen || mobileMenuOpen;

  return (
    <div
      className={cn(
        "pointer-events-none sticky top-0 h-0 overflow-visible",
        mobileMenuOpen ? "z-[100]" : "z-50"
      )}
    >
      <motion.header
        initial={false}
        className={cn(
          "pointer-events-auto top-4 right-4 left-4 sm:top-5 sm:right-5 sm:left-5 lg:top-6 lg:right-6 lg:left-6",
          mobileMenuOpen
            ? "fixed z-[100] lg:absolute lg:z-auto"
            : "absolute"
        )}
      >
        <button
          type="button"
          className={cn(
            "fixed inset-0 bg-[#0F172A]/40 transition-opacity duration-200 ease-out lg:hidden",
            mobileMenuOpen
              ? "pointer-events-auto z-0 opacity-100"
              : "pointer-events-none z-0 opacity-0"
          )}
          aria-label="Close menu"
          onClick={closeMobileMenu}
          tabIndex={mobileMenuOpen ? 0 : -1}
        />

        <div
          className={cn(
            "fixed inset-0 z-0 transition-opacity duration-200 ease-out lg:bg-[#0F172A]/20",
            mobileMenuOpen
              ? "pointer-events-none opacity-0"
              : dropdownOpen
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0"
          )}
          aria-hidden={!dropdownOpen || mobileMenuOpen}
          onClick={closeDropdown}
        />

        <div
          ref={navContainerRef}
          className="relative z-10 isolate"
          onMouseEnter={cancelScheduledClose}
          onMouseLeave={scheduleCloseDropdown}
        >
          <div
            className={cn(
              "bg-white shadow-[0_8px_32px_rgba(15,23,42,0.08)] transition-[border-radius,box-shadow] duration-200",
              navPanelOpen
                ? "rounded-t-[24px] shadow-[0_16px_48px_rgba(15,23,42,0.12)] lg:rounded-b-none"
                : "rounded-[24px]",
              mobileMenuOpen && "rounded-b-[24px]"
            )}
          >
            <nav
              className="mx-auto flex h-[68px] items-center justify-between px-4 sm:h-[74px] sm:px-6 md:h-[80px] md:px-12 lg:px-20"
              aria-label="Main navigation"
            >
              <Logo />
              <ul className="hidden items-center gap-10 lg:flex">
                {navItems.map((item) => {
                  const dropdownId = getNavDropdownId(item.label);
                  const isDropdownOpen =
                    dropdownId !== null && activeDropdown === dropdownId;

                  return (
                    <li
                      key={item.label}
                      className="relative"
                      onMouseEnter={
                        dropdownId
                          ? () => openDropdown(dropdownId)
                          : closeDropdown
                      }
                    >
                      <a
                        href={item.href}
                        className={cn(
                          "group relative flex items-center gap-1.5 py-2 text-sm font-medium transition-colors duration-300",
                          isDropdownOpen
                            ? "text-primary-yellow"
                            : "text-dark-navy/75 hover:text-dark-navy"
                        )}
                        aria-expanded={
                          dropdownId ? isDropdownOpen : undefined
                        }
                        aria-haspopup={dropdownId ? "true" : undefined}
                      >
                        {item.label}
                        {item.hasDropdown && (
                          <ChevronDown
                            className={cn(
                              "h-3.5 w-3.5 transition-all duration-300",
                              isDropdownOpen
                                ? "rotate-180 text-primary-yellow"
                                : "text-text-gray group-hover:rotate-180"
                            )}
                            aria-hidden="true"
                          />
                        )}
                        {dropdownId && (
                          <motion.span
                            layoutId={`${dropdownId}-nav-indicator`}
                            className="absolute -bottom-1 left-0 h-[2px] rounded-full bg-primary-yellow"
                            initial={false}
                            animate={{
                              width: isDropdownOpen ? "100%" : "0%",
                              opacity: isDropdownOpen ? 1 : 0,
                            }}
                            transition={{
                              duration: 0.3,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            aria-hidden="true"
                          />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                onClick={() => {
                  if (mobileMenuOpen) {
                    closeMobileMenu();
                  } else {
                    setActiveDropdown(null);
                    setMobileMenuOpen(true);
                  }
                }}
              >
                {mobileMenuOpen ? (
                  <X className="size-5 text-dark-navy" aria-hidden="true" />
                ) : (
                  <span className="flex flex-col gap-1" aria-hidden="true">
                    <span className="block h-0.5 w-5 bg-dark-navy" />
                    <span className="block h-0.5 w-5 bg-dark-navy" />
                  </span>
                )}
              </button>
            </nav>

            <div
              className={cn(
                "border-t border-[#F1F5F9] bg-white transition-[max-height,opacity] duration-300 ease-out lg:hidden",
                mobileMenuOpen
                  ? "flex max-h-[calc(100dvh-5.5rem-env(safe-area-inset-top,0px)-env(safe-area-inset-bottom,0px))] flex-col opacity-100"
                  : "max-h-0 overflow-hidden opacity-0"
              )}
              aria-hidden={!mobileMenuOpen}
            >
              <div
                ref={mobileMenuScrollRef}
                className={cn(
                  "min-h-0 flex-1 touch-pan-y overflow-y-auto overscroll-y-contain pb-[env(safe-area-inset-bottom,0px)] [-webkit-overflow-scrolling:touch]",
                  !mobileMenuOpen && "hidden"
                )}
              >
                {activeDropdown ? (
                  <>
                    <div className="sticky top-0 z-10 border-b border-[#F1F5F9] bg-white px-4 py-3 sm:px-6">
                      <button
                        type="button"
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-[14px] font-semibold text-dark-navy transition-colors hover:bg-[#FAFAFA] hover:text-primary-yellow"
                      >
                        <ChevronDown
                          className="size-4 rotate-90 text-text-gray"
                          aria-hidden="true"
                        />
                        Back
                      </button>
                    </div>
                    <div onClick={handleMobileMenuLinkClick}>
                      {activeDropdown === "fleet" && <FleetDropdown />}
                      {activeDropdown === "about" && <AboutDropdown />}
                      {activeDropdown === "locations" && <LocationsDropdown />}
                      {activeDropdown === "earn" && <EarnMoreDropdown />}
                    </div>
                  </>
                ) : (
                  <ul className="flex flex-col gap-1 px-4 py-4 sm:px-6">
                    {navItems.map((item) => {
                      const dropdownId = getNavDropdownId(item.label);

                      return (
                        <li key={item.label}>
                          <button
                            type="button"
                            onClick={() => {
                              if (dropdownId) openMobileDropdown(dropdownId);
                            }}
                            className="flex w-full items-center justify-between rounded-xl px-3 py-3.5 text-left text-[15px] font-semibold text-dark-navy transition-colors hover:bg-[#FAFAFA] hover:text-primary-yellow"
                            aria-expanded={dropdownId ? false : undefined}
                            aria-haspopup={dropdownId ? "true" : undefined}
                          >
                            {item.label}
                            <ChevronDown
                              className={cn(
                                "size-4 -rotate-90 text-text-gray",
                                item.hasDropdown && "opacity-100"
                              )}
                              aria-hidden="true"
                            />
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div
            className={cn(
              "absolute top-full right-0 left-0 z-50 hidden lg:block",
              !dropdownOpen && "pointer-events-none"
            )}
            aria-hidden={!dropdownOpen}
          >
            <div
              className={cn(
                "max-h-[calc(100dvh-6.5rem)] overflow-x-hidden overflow-y-auto overscroll-y-contain rounded-b-[24px] border-t border-[#F1F5F9] bg-white shadow-[0_16px_48px_rgba(15,23,42,0.12)] transition-[opacity,transform] duration-200 ease-out",
                dropdownOpen
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-1 opacity-0"
              )}
            >
              {dropdownOpen && (
                <>
                  <div hidden={activeDropdown !== "fleet"}>
                    <FleetDropdown />
                  </div>
                  <div hidden={activeDropdown !== "about"}>
                    <AboutDropdown />
                  </div>
                  <div hidden={activeDropdown !== "locations"}>
                    <LocationsDropdown />
                  </div>
                  <div hidden={activeDropdown !== "earn"}>
                    <EarnMoreDropdown />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.header>
    </div>
  );
}
