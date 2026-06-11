import type { StaticImageData } from "next/image";
import { bikeImages, manali } from "@/assets/images";
import { resolveVehicleSlug } from "@/lib/vehicle-routes";

type VehicleReview = {
  name: string;
  date: string;
  rating: number;
  text: string;
};

type VehicleFaq = {
  question: string;
  answer: string;
};

type VehicleSpecification = {
  label: string;
  value: string;
};

type VehicleHighlight = {
  label: string;
};

export type Vehicle = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  images: StaticImageData[];
  rating: number;
  reviewCount: number;
  capacity: number;
  category: string;
  location: string;
  locationLabel: string;
  distance: string;
  age: string;
  price: number;
  isPopular?: boolean;
  tags: string[];
  aboutText: string;
  host: {
    name: string;
    badge: string;
    tripCount: string;
    happyRiders: string;
  };
  highlights: VehicleHighlight[];
  availability: string;
  availabilityNote: string;
  specifications: VehicleSpecification[];
  features: string[];
  requirements: string[];
  reviews: VehicleReview[];
  faqs: VehicleFaq[];
  promoTitle: string;
  promoCta: string;
};

export const locationLabels: Record<string, string> = {
  bhuntar: "Bhuntar",
  manali: "Manali",
  kullu: "Kullu",
  kasol: "Kasol",
  "leh-ladakh": "Leh Ladakh",
};

const sharedFaqs: VehicleFaq[] = [
  {
    question: "What documents do I need to rent this bike?",
    answer:
      "You need a valid driving license, one government-issued photo ID, and a security deposit. International riders should carry an International Driving Permit where applicable.",
  },
  {
    question: "Is fuel included in the rental price?",
    answer:
      "Fuel is not included. The bike is handed over with a full tank and should be returned with a full tank unless otherwise agreed at pickup.",
  },
  {
    question: "Can I extend my rental after booking?",
    answer:
      "Yes. Contact our support team or the host before your return time. Extensions are subject to availability and may affect pricing.",
  },
  {
    question: "What happens if the bike breaks down?",
    answer:
      "Our 24/7 roadside support team will assist with repairs, replacement, or towing depending on the situation and your location.",
  },
];

const sharedRequirements = [
  "Valid driving license (minimum 1 year old)",
  "Government-issued photo ID (Aadhaar / Passport)",
  "Refundable security deposit",
  "Rider must be 18+ years of age",
];

export const vehicles: Vehicle[] = [
  {
    id: "suzuki-access-125",
    title: "SUZUKI MOTORCYCLE INDIA PVT LTD ACCESS 125",
    shortTitle: "Suzuki Access 125 Standard",
    description: "A well-maintained SUZUKI MOTORCYCLE INDIA PVT LTD",
    images: [bikeImages.scram, bikeImages.hunter, bikeImages.meteor, bikeImages.himalayan],
    rating: 5.0,
    reviewCount: 312,
    capacity: 3,
    category: "scooters",
    location: "bhuntar",
    locationLabel: "Manali, Himachal Pradesh",
    distance: "Around 17.3 km from Manali",
    age: "1 year+ old",
    price: 816,
    isPopular: true,
    tags: ["Perfect for town", "Great Mileage", "Easy to Ride", "Top Choice"],
    aboutText:
      "The Suzuki Access 125 is a reliable, fuel-efficient scooter built for easy hill-town riding. Lightweight handling, comfortable seating, and strong mileage make it ideal for Manali commutes, café hops, and short scenic loops. Every unit is serviced before handover and includes helmets for a hassle-free start.",
    host: {
      name: "Hire N Ride",
      badge: "Super Host",
      tripCount: "2,400+ trips completed",
      happyRiders: "+1.2K happy riders",
    },
    highlights: [
      { label: "Smooth on Hills" },
      { label: "Great Mileage" },
      { label: "Easy & Comfortable" },
      { label: "Well Maintained" },
    ],
    availability: "Bike available from 8:00 AM to 8:00 PM Every day",
    availabilityNote: "Limited availability this week — book early to secure your dates.",
    specifications: [
      { label: "Engine", value: "124 cc" },
      { label: "Fuel Type", value: "PETROL" },
      { label: "Mileage", value: "45 km/l" },
      { label: "Transmission", value: "Automatic" },
      { label: "Seating", value: "2 People" },
      { label: "Helmets", value: "2 Included" },
      { label: "Color", value: "MELT MAT STELLAR BLUE" },
    ],
    features: [
      "Combined braking system",
      "Under-seat storage",
      "USB charging port",
      "LED headlamp",
      "Tubeless tyres",
      "Side stand indicator",
    ],
    requirements: sharedRequirements,
    reviews: [
      {
        name: "Rahul Sharma",
        date: "March 2026",
        rating: 5,
        text: "Perfect scooter for Manali town rides. Smooth pickup, great mileage, and the team was super helpful at handover.",
      },
      {
        name: "Priya Mehta",
        date: "February 2026",
        rating: 5,
        text: "Light, easy to handle on narrow lanes, and very well maintained. Booking was quick and transparent.",
      },
      {
        name: "Arjun Patel",
        date: "January 2026",
        rating: 4,
        text: "Comfortable for two riders with luggage. Helmet quality was good and fuel efficiency lived up to expectations.",
      },
    ],
    faqs: sharedFaqs,
    promoTitle: "Explore Manali Like Never Before",
    promoCta: "Explore Manali",
  },
  {
    id: "royal-enfield-himalayan",
    title: "ROYAL ENFIELD MOTORCYCLES LTD HIMALAYAN",
    shortTitle: "Royal Enfield Himalayan",
    description: "A well-maintained ROYAL ENFIELD MOTORCYCLES LTD",
    images: [bikeImages.himalayan, bikeImages.scram, bikeImages.hunter, bikeImages.meteor],
    rating: 5.0,
    reviewCount: 428,
    capacity: 2,
    category: "adventure",
    location: "bhuntar",
    locationLabel: "Manali, Himachal Pradesh",
    distance: "Around 17.3 km from Manali",
    age: "2 year+ old",
    price: 2208,
    isPopular: true,
    tags: ["Adventure Ready", "Mountain Pro", "Long Range", "Top Choice"],
    aboutText:
      "The Royal Enfield Himalayan is built for high-altitude trails and long touring days. Stable geometry, comfortable upright ergonomics, and proven reliability make it the go-to choice for Rohtang, Spiti approaches, and off-beat mountain routes. Each bike is inspected and adventure-ready before every rental.",
    host: {
      name: "Hire N Ride",
      badge: "Super Host",
      tripCount: "3,100+ trips completed",
      happyRiders: "+1.2K happy riders",
    },
    highlights: [
      { label: "Trail Ready" },
      { label: "Stable Handling" },
      { label: "Touring Comfort" },
      { label: "Well Maintained" },
    ],
    availability: "Bike available from 7:00 AM to 8:00 PM Every day",
    availabilityNote: "High demand for weekends — reserve early for Rohtang and Spiti routes.",
    specifications: [
      { label: "Engine", value: "411 cc" },
      { label: "Fuel Type", value: "PETROL" },
      { label: "Mileage", value: "30 km/l" },
      { label: "Transmission", value: "Manual" },
      { label: "Seating", value: "2 People" },
      { label: "Helmets", value: "2 Included" },
      { label: "Color", value: "GRANITE BLACK" },
    ],
    features: [
      "Long-travel suspension",
      "21-inch front wheel",
      "Tripper navigation mount",
      "Engine crash guard",
      "Dual-purpose tyres",
      "USB charging port",
    ],
    requirements: sharedRequirements,
    reviews: [
      {
        name: "Vikram Singh",
        date: "March 2026",
        rating: 5,
        text: "Took the Himalayan to Rohtang — flawless performance. The bike felt brand new and support was available throughout.",
      },
      {
        name: "Neha Kapoor",
        date: "February 2026",
        rating: 5,
        text: "Comfortable for long rides with panniers. Excellent for mixed road and trail conditions around Manali.",
      },
      {
        name: "David Miller",
        date: "January 2026",
        rating: 5,
        text: "As a tourist, the handover briefing was thorough. Stable, predictable, and perfect for mountain touring.",
      },
    ],
    faqs: sharedFaqs,
    promoTitle: "Explore Manali Like Never Before",
    promoCta: "Explore Manali",
  },
  {
    id: "royal-enfield-classic-350",
    title: "ROYAL ENFIELD MOTORCYCLES LTD CLASSIC 350 CC",
    shortTitle: "Royal Enfield Classic 350",
    description: "A well-maintained ROYAL ENFIELD MOTORCYCLES LTD",
    images: [bikeImages.meteor, bikeImages.himalayan, bikeImages.scram, bikeImages.hunter],
    rating: 5.0,
    reviewCount: 267,
    capacity: 3,
    category: "bikes",
    location: "bhuntar",
    locationLabel: "Manali, Himachal Pradesh",
    distance: "Around 17.3 km from Manali",
    age: "10 year+ old",
    price: 1488,
    tags: ["Classic Style", "Relaxed Ride", "Iconic Thump", "Weekend Favorite"],
    aboutText:
      "The Royal Enfield Classic 350 delivers timeless cruiser character with relaxed ergonomics for scenic mountain roads. Ideal for unhurried rides, café stops, and easy day trips around Kullu Valley. Our classics are regularly serviced to keep that signature thump smooth and dependable.",
    host: {
      name: "Hire N Ride",
      badge: "Super Host",
      tripCount: "1,850+ trips completed",
      happyRiders: "+1.2K happy riders",
    },
    highlights: [
      { label: "Classic Feel" },
      { label: "Relaxed Posture" },
      { label: "Stable Cruise" },
      { label: "Well Maintained" },
    ],
    availability: "Bike available from 8:00 AM to 8:00 PM Every day",
    availabilityNote: "Popular on long weekends — book ahead for the best pickup slots.",
    specifications: [
      { label: "Engine", value: "349 cc" },
      { label: "Fuel Type", value: "PETROL" },
      { label: "Mileage", value: "35 km/l" },
      { label: "Transmission", value: "Manual" },
      { label: "Seating", value: "2 People" },
      { label: "Helmets", value: "2 Included" },
      { label: "Color", value: "CHROME BROWN" },
    ],
    features: [
      "Classic twin-pod instrument cluster",
      "Comfortable dual-seat",
      "Halogen headlamp",
      "Electric start",
      "Heel-and-toe shifter",
      "Engine crash guard",
    ],
    requirements: sharedRequirements,
    reviews: [
      {
        name: "Amit Verma",
        date: "March 2026",
        rating: 5,
        text: "The classic thump on mountain roads is unbeatable. Bike was polished, serviced, and ready to go.",
      },
      {
        name: "Sneha Reddy",
        date: "February 2026",
        rating: 5,
        text: "Comfortable for two with light luggage. Perfect for slow scenic rides around the valley.",
      },
      {
        name: "Karan Joshi",
        date: "December 2025",
        rating: 4,
        text: "Authentic Enfield experience with transparent pricing. Would rent again on my next Manali trip.",
      },
    ],
    faqs: sharedFaqs,
    promoTitle: "Explore Manali Like Never Before",
    promoCta: "Explore Manali",
  },
  {
    id: "royal-enfield-hunter-350",
    title: "ROYAL ENFIELD MOTORCYCLES LTD HUNTER 350",
    shortTitle: "Royal Enfield Hunter 350",
    description: "A well-maintained ROYAL ENFIELD MOTORCYCLES LTD",
    images: [bikeImages.hunter, bikeImages.meteor, bikeImages.scram, bikeImages.himalayan],
    rating: 5.0,
    reviewCount: 198,
    capacity: 2,
    category: "bikes",
    location: "bhuntar",
    locationLabel: "Manali, Himachal Pradesh",
    distance: "Around 12.1 km from Bhuntar",
    age: "3 year+ old",
    price: 1680,
    tags: ["City Agile", "Lightweight", "Modern Classic", "Easy Handling"],
    aboutText:
      "The Royal Enfield Hunter 350 blends retro style with nimble street handling. Lighter and more agile than traditional Enfields, it is ideal for quick town hops, café runs, and twisty hill roads. Each Hunter is maintained to deliver crisp throttle response and confident cornering.",
    host: {
      name: "Hire N Ride",
      badge: "Super Host",
      tripCount: "1,620+ trips completed",
      happyRiders: "+1.2K happy riders",
    },
    highlights: [
      { label: "Agile Handling" },
      { label: "Lightweight Frame" },
      { label: "Street Ready" },
      { label: "Well Maintained" },
    ],
    availability: "Bike available from 8:00 AM to 8:00 PM Every day",
    availabilityNote: "Weekend slots fill fast — reserve your Hunter early.",
    specifications: [
      { label: "Engine", value: "349 cc" },
      { label: "Fuel Type", value: "PETROL" },
      { label: "Mileage", value: "36 km/l" },
      { label: "Transmission", value: "Manual" },
      { label: "Seating", value: "2 People" },
      { label: "Helmets", value: "2 Included" },
      { label: "Color", value: "REBEL RED" },
    ],
    features: [
      "Compact wheelbase",
      "LCD instrument cluster",
      "LED tail lamp",
      "Lightweight chassis",
      "Responsive throttle",
      "Dual-channel ABS",
    ],
    requirements: sharedRequirements,
    reviews: [
      {
        name: "Rohan Desai",
        date: "March 2026",
        rating: 5,
        text: "Super fun in town and on winding roads. Much easier to handle than heavier Enfields.",
      },
      {
        name: "Meera Iyer",
        date: "February 2026",
        rating: 5,
        text: "Stylish, comfortable, and well maintained. Pickup and drop were seamless.",
      },
      {
        name: "Tarun Bhatia",
        date: "January 2026",
        rating: 5,
        text: "Great balance of classic looks and modern agility. Highly recommend for solo riders.",
      },
    ],
    faqs: sharedFaqs,
    promoTitle: "Explore Manali Like Never Before",
    promoCta: "Explore Manali",
  },
];

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  const resolved = resolveVehicleSlug(slug);
  return vehicles.find((vehicle) => vehicle.id === resolved);
}

export function getRelatedVehicles(vehicle: Vehicle, limit = 4): Vehicle[] {
  return vehicles
    .filter((item) => item.id !== vehicle.id)
    .slice(0, limit);
}

/** @deprecated Import Vehicle from @/data/vehicles instead */
export type BrowseVehicle = Pick<
  Vehicle,
  | "id"
  | "title"
  | "description"
  | "images"
  | "rating"
  | "capacity"
  | "category"
  | "location"
  | "distance"
  | "age"
  | "price"
> & { href: string };

function toBrowseVehicle(vehicle: Vehicle): BrowseVehicle {
  return {
    id: vehicle.id,
    title: vehicle.title,
    description: vehicle.description,
    images: vehicle.images,
    rating: vehicle.rating,
    capacity: vehicle.capacity,
    category: vehicle.category,
    location: vehicle.location,
    distance: vehicle.distance,
    age: vehicle.age,
    price: vehicle.price,
    href: `/explore/${vehicle.id}`,
  };
}

export const browseVehicles: BrowseVehicle[] = vehicles.map(toBrowseVehicle);

export const vehiclePromoImage = manali;
