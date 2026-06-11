import type { LucideIcon } from "lucide-react";
import { BookOpen, MapPin, Shield } from "lucide-react";
import type { StaticImageData } from "next/image";
import {
  adventure,
  bhuntar,
  earnHotel,
  him4,
  him5,
  instant2,
  kasol,
  manali,
  mountainbg,
  safe2,
} from "@/assets/images";

export const blogHeroBadge = "TRAVEL & STORIES";

export const blogHeroTitle = {
  line1: "Discover Stories From the",
  highlight: "Himalayas",
};

export const blogHeroDescription =
  "Explore expert insights, travel guides, and thrilling adventure stories from the heart of the Himalayas. From safety tips to hidden destinations, discover everything you need for your next mountain adventure.";

export const blogHeroCta = "Browse articles";

export type BlogHeroCategory = {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
};

export const blogHeroCategories: BlogHeroCategory[] = [
  {
    id: "travel-guides",
    title: "Travel Guides",
    subtitle: "Expert tips & itineraries",
    icon: BookOpen,
  },
  {
    id: "safety-tips",
    title: "Safety Tips",
    subtitle: "Stay safe, travel smart",
    icon: Shield,
  },
  {
    id: "hidden-gems",
    title: "Hidden Gems",
    subtitle: "Offbeat places & locals",
    icon: MapPin,
  },
];

export const blogHeroOverlay = {
  location: "HIMALAYAS",
  quote: "Every turn tells a story.",
  subtext: "Where journeys become memories.",
  thumbnail: him5,
};

export const blogHeroImage = manali;

export const blogTrendingTitle = "Our Trending Insights & Stories";

export const blogTrendingSubtitle =
  "Discover expert opinions, helpful guides, and real-world stories curated just for you.";

export const blogSearchPlaceholder =
  "Search for adventure stories, tips, destinations...";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  image: StaticImageData;
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    id: "kasol-tosh-malana",
    slug: "kasol-vs-tosh-vs-malana-best-place-to-rent-a-bike",
    title: "Kasol vs Tosh vs Malana: Best Place to Rent a Bike & Explore",
    excerpt:
      "Compare the three most popular Parvati Valley destinations and find out where to rent a bike, what routes to take, and which village suits your adventure style best...",
    category: "BIKE RENTAL",
    author: "Hire N Ride Team",
    publishedAt: "May 29, 2026",
    readTime: "5 min read",
    image: kasol,
    featured: true,
  },
  {
    id: "manali-leh-june",
    slug: "manali-leh-ladakh-bike-trip-in-june",
    title: "Manali Leh Ladakh Bike Trip in June",
    excerpt:
      "Everything you need to know about planning a Manali to Leh bike trip in June — road conditions, permits, bike choices, and essential packing tips for the ultimate Himalayan ride...",
    category: "BIKE RENTAL",
    author: "Hire N Ride Team",
    publishedAt: "May 22, 2026",
    readTime: "7 min read",
    image: him4,
  },
  {
    id: "own-bike-vs-rent",
    slug: "bring-your-own-bike-vs-rent-in-manali",
    title: "Bring Your Own Bike vs Rent in Manali: Which is Better?",
    excerpt:
      "Weigh the pros and cons of bringing your own motorcycle versus renting locally in Manali. Cost, convenience, maintenance, and route flexibility compared side by side...",
    category: "BIKE RENTAL",
    author: "Hire N Ride Team",
    publishedAt: "May 15, 2026",
    readTime: "4 min read",
    image: manali,
  },
  {
    id: "spiti-valley-guide",
    slug: "spiti-valley-bike-rental-complete-guide",
    title: "Spiti Valley Bike Rental: A Complete Guide for First-Timers",
    excerpt:
      "Navigate the high-altitude desert of Spiti with confidence. Learn about permits, best rental bikes, acclimatization stops, and the must-ride routes from Kaza to Key Monastery...",
    category: "TRAVEL GUIDE",
    author: "Hire N Ride Team",
    publishedAt: "May 8, 2026",
    readTime: "8 min read",
    image: him5,
  },
  {
    id: "monsoon-riding-tips",
    slug: "himalayan-monsoon-bike-riding-safety-tips",
    title: "Himalayan Monsoon Bike Riding: 10 Essential Safety Tips",
    excerpt:
      "Riding in the rains demands extra caution. From tyre pressure to landslide awareness, here are the top safety practices every rider should follow during monsoon season...",
    category: "SAFETY TIPS",
    author: "Hire N Ride Team",
    publishedAt: "May 1, 2026",
    readTime: "6 min read",
    image: safe2,
  },
  {
    id: "bhuntar-gateway",
    slug: "bhuntar-airport-bike-rental-gateway-to-parvati",
    title: "Bhuntar Airport Bike Rental: Your Gateway to Parvati Valley",
    excerpt:
      "Flying into Kullu-Manali Airport? Bhuntar is the perfect starting point for your Parvati Valley adventure. Compare pickup options, routes to Kasol, and rental pricing...",
    category: "BIKE RENTAL",
    author: "Hire N Ride Team",
    publishedAt: "Apr 24, 2026",
    readTime: "5 min read",
    image: bhuntar,
  },
  {
    id: "best-bikes-manali",
    slug: "best-bikes-to-rent-in-manali-for-himalayan-trips",
    title: "Best Bikes to Rent in Manali for Himalayan Trips",
    excerpt:
      "Royal Enfield Himalayan, Classic 350, or something sportier? We break down which rental bike suits different routes — from Rohtang Pass to Leh Highway...",
    category: "BIKE RENTAL",
    author: "Hire N Ride Team",
    publishedAt: "Apr 17, 2026",
    readTime: "6 min read",
    image: adventure,
  },
  {
    id: "hidden-waterfalls",
    slug: "hidden-waterfalls-near-manali-bike-day-trips",
    title: "5 Hidden Waterfalls Near Manali You Can Reach by Bike",
    excerpt:
      "Skip the crowded tourist spots and discover secluded waterfalls perfect for a half-day ride. GPS coordinates, road conditions, and the best time to visit each one...",
    category: "HIDDEN GEMS",
    author: "Hire N Ride Team",
    publishedAt: "Apr 10, 2026",
    readTime: "5 min read",
    image: mountainbg,
  },
  {
    id: "instant-booking",
    slug: "how-instant-bike-booking-works-at-hire-n-ride",
    title: "How Instant Bike Booking Works at Hire N Ride",
    excerpt:
      "Book your ride in minutes — no phone calls, no waiting. Walk through our digital KYC, payment process, and what to expect when you pick up your bike...",
    category: "TRAVEL GUIDE",
    author: "Hire N Ride Team",
    publishedAt: "Apr 3, 2026",
    readTime: "4 min read",
    image: instant2,
  },
  {
    id: "hotel-partnerships",
    slug: "bike-rental-partnerships-with-manali-hotels",
    title: "Bike Rental Partnerships with Manali Hotels: What Guests Get",
    excerpt:
      "Staying at a partner hotel? Learn about exclusive discounts, doorstep delivery, and how our hotel partnerships make your Himalayan trip seamless from check-in to checkout...",
    category: "TRAVEL GUIDE",
    author: "Hire N Ride Team",
    publishedAt: "Mar 27, 2026",
    readTime: "4 min read",
    image: earnHotel,
  },
  {
    id: "rohtang-permit",
    slug: "rohtang-pass-bike-permit-guide-2026",
    title: "Rohtang Pass Bike Permit Guide 2026: Everything You Need",
    excerpt:
      "Rohtang permits are mandatory and sell out fast. Get the latest on online booking, fees, valid dates, and alternative routes if permits are unavailable...",
    category: "SAFETY TIPS",
    author: "Hire N Ride Team",
    publishedAt: "Mar 20, 2026",
    readTime: "7 min read",
    image: him4,
  },
  {
    id: "winter-riding-manali",
    slug: "winter-bike-riding-in-manali-what-to-expect",
    title: "Winter Bike Riding in Manali: What to Expect & How to Prepare",
    excerpt:
      "Snow-lined roads and crisp mountain air — winter riding is magical but challenging. Gear recommendations, road closures, and the best winter routes around Manali...",
    category: "SAFETY TIPS",
    author: "Hire N Ride Team",
    publishedAt: "Mar 13, 2026",
    readTime: "6 min read",
    image: kasol,
  },
];

export const BLOG_POSTS_PER_PAGE = 6;

export const blogRelatedBadge = "DISCOVER MORE";

export const blogRelatedTitle = "Related Articles";

export const blogRelatedSubtitle =
  "Discover more adventure stories and tips that might interest you";

/** Slugs for the related-articles row (order matches layout left → right). */
export const blogRelatedPostSlugs = [
  "manali-leh-ladakh-bike-trip-in-june",
  "kasol-vs-tosh-vs-malana-best-place-to-rent-a-bike",
  "how-instant-bike-booking-works-at-hire-n-ride",
] as const;

export const blogRelatedHighlightedSlug =
  "kasol-vs-tosh-vs-malana-best-place-to-rent-a-bike";

export function getBlogRelatedPosts(): BlogPost[] {
  return blogRelatedPostSlugs
    .map((slug) => blogPosts.find((post) => post.slug === slug))
    .filter((post): post is BlogPost => post !== undefined);
}
