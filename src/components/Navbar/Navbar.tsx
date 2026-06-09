"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { navItems } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { AboutDropdown } from "./AboutDropdown";
import { FleetDropdown } from "./FleetDropdown";
import { Logo } from "./Logo";

const FLEET_LABEL = "Our Fleet";
const ABOUT_LABEL = "About Us";
const CLOSE_DELAY_MS = 160;

type NavDropdownId = "fleet" | "about";

function getNavDropdownId(label: string): NavDropdownId | null {
  if (label === FLEET_LABEL) return "fleet";
  if (label === ABOUT_LABEL) return "about";
  return null;
}

export function Navbar() {
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<NavDropdownId | null>(
    null
  );

  const openDropdown = useCallback((id: NavDropdownId) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveDropdown(id);
  }, []);

  const closeDropdown = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveDropdown(null);
  }, []);

  const scheduleCloseDropdown = useCallback(() => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(
      () => setActiveDropdown(null),
      CLOSE_DELAY_MS
    );
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!activeDropdown) return;

    const scrollY = window.scrollY;
    const { style } = document.body;
    style.position = "fixed";
    style.top = `-${scrollY}px`;
    style.left = "0";
    style.right = "0";
    style.overflow = "hidden";

    return () => {
      style.position = "";
      style.top = "";
      style.left = "";
      style.right = "";
      style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, [activeDropdown]);

  const dropdownOpen = activeDropdown !== null;

  return (
    <div className="pointer-events-none sticky top-0 z-50 h-0 overflow-visible">
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-auto absolute top-4 right-4 left-4 sm:top-5 sm:right-5 sm:left-5 lg:top-6 lg:right-6 lg:left-6"
      >
        <AnimatePresence>
          {dropdownOpen && (
            <motion.div
              key="nav-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-[#0F172A]/20"
              aria-hidden="true"
              onMouseEnter={closeDropdown}
            />
          )}
        </AnimatePresence>

        <div className="relative z-50" onMouseLeave={scheduleCloseDropdown}>
          <div
            className={cn(
              "bg-white shadow-[0_8px_32px_rgba(15,23,42,0.08)] transition-shadow duration-300",
              dropdownOpen
                ? "rounded-t-[24px] shadow-[0_16px_48px_rgba(15,23,42,0.12)]"
                : "rounded-[24px]"
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
                          : scheduleCloseDropdown
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
                aria-label="Open menu"
              >
                <span className="flex flex-col gap-1">
                  <span className="block h-0.5 w-5 bg-dark-navy" />
                  <span className="block h-0.5 w-5 bg-dark-navy" />
                </span>
              </button>
            </nav>
          </div>

          <div
            onMouseEnter={() => {
              if (activeDropdown) openDropdown(activeDropdown);
            }}
            className="absolute left-0 right-0 top-full z-50 hidden lg:block"
          >
            <AnimatePresence mode="wait">
              {activeDropdown === "fleet" && (
                <FleetDropdown key="fleet-dropdown" />
              )}
              {activeDropdown === "about" && (
                <AboutDropdown key="about-dropdown" />
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>
    </div>
  );
}
