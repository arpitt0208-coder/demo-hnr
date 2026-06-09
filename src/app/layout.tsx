import type { Metadata } from "next";
import { Caveat, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hire N Ride | Premium Himalayan Bike Rentals",
  description:
    "Stop dreaming, start riding with Hire N Ride. Fully maintained bikes, transparent pricing, and 24/7 local support for your epic mountain adventure.",
  keywords: [
    "bike rental",
    "Himalayan bikes",
    "Royal Enfield",
    "mountain adventure",
    "Hire N Ride",
  ],
  openGraph: {
    title: "Hire N Ride | Premium Himalayan Bike Rentals",
    description:
      "Your travel partner for premium Himalayan bike rentals. Adventure ready & reliable.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${caveat.variable} h-full`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full overflow-x-clip antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
