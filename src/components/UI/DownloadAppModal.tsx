"use client";

import { Download, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { qrDownloadApp } from "@/assets/images";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/appStoreLinks";
import { cn } from "@/lib/cn";

const downloadButtonClassName = cn(
  "flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#1A1A1A] text-[13px] font-bold text-white shadow-[0_4px_16px_rgba(15,23,42,0.18)] transition-all hover:bg-[#111111] hover:shadow-[0_6px_20px_rgba(15,23,42,0.24)] active:scale-[0.99] sm:h-[52px] sm:text-[14px]",
);

type DownloadAppModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function DownloadAppModal({ isOpen, onClose }: DownloadAppModalProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const lockedScrollY = window.scrollY;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const { style: bodyStyle } = document.body;
    const { style: htmlStyle } = document.documentElement;

    bodyStyle.position = "fixed";
    bodyStyle.top = `-${lockedScrollY}px`;
    bodyStyle.left = "0";
    bodyStyle.right = "0";
    bodyStyle.width = "100%";
    bodyStyle.paddingRight = `${scrollbarWidth}px`;
    bodyStyle.overflow = "hidden";
    htmlStyle.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      bodyStyle.position = "";
      bodyStyle.top = "";
      bodyStyle.left = "";
      bodyStyle.right = "";
      bodyStyle.width = "";
      bodyStyle.paddingRight = "";
      bodyStyle.overflow = "";
      htmlStyle.overflow = "";
      window.scrollTo(0, lockedScrollY);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !isMounted) {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden overscroll-none bg-[#0F172A]/55 p-4 backdrop-blur-[3px] sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="download-app-modal-title"
      onClick={onClose}
    >
      <div
        className="relative max-h-[calc(100dvh-2rem)] w-full max-w-[400px] overflow-y-auto rounded-2xl bg-white px-6 py-7 shadow-[0_24px_80px_rgba(15,23,42,0.18)] sm:max-w-[420px] sm:px-8 sm:py-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full text-[#94A3B8] transition-colors hover:bg-[#F1F5F9] hover:text-[#475569] sm:right-5 sm:top-5"
          aria-label="Close download app modal"
        >
          <X className="size-5" aria-hidden="true" />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="rounded-xl border border-[#EEF2F6] bg-white p-2 shadow-[0_2px_12px_rgba(15,23,42,0.06)]">
            <Image
              src={qrDownloadApp}
              alt="QR code to download the Hire N Ride app"
              width={128}
              height={128}
              className="size-[112px] rounded-md sm:size-[128px]"
            />
          </div>

          <h2
            id="download-app-modal-title"
            className="mt-5 text-[20px] font-extrabold leading-tight text-dark-navy sm:mt-6 sm:text-[22px]"
          >
            Scan to Download App
          </h2>

          <p className="mt-2.5 max-w-[320px] text-[13px] font-medium leading-[1.65] text-[#64748B] sm:text-[14px]">
            Get the best experience by downloading our mobile app. Book bikes,
            manage rentals, and explore our full collection with ease.
          </p>

          <div className="mt-6 flex w-full flex-col gap-2.5 sm:mt-7 sm:gap-3">
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={downloadButtonClassName}
            >
              <Download className="size-4 shrink-0" aria-hidden="true" />
              Download for Android
            </a>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={downloadButtonClassName}
            >
              <Download className="size-4 shrink-0" aria-hidden="true" />
              Download for iOS
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
