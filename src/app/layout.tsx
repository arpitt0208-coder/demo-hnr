import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
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
      className={`${montserrat.variable} h-full`}
      suppressHydrationWarning
    >
      <body
        className={`${montserrat.className} min-h-full overflow-x-clip font-sans antialiased`}
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
