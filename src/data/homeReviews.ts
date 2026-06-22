export type HomeReview = {
  id: string;
  name: string;
  location: string;
  trip: string;
  date: string;
  rating: number;
  text: string;
  avatarSeed: string;
};

export const homeReviews: HomeReview[] = [
  {
    id: "rahul-sharma",
    name: "Rahul Sharma",
    location: "Delhi, India",
    trip: "Manali → Rohtang Pass",
    date: "March 2026",
    rating: 5,
    text: "Absolutely flawless experience. The Himalayan was in perfect condition and the team walked us through every detail before we left. Rohtang was a dream ride.",
    avatarSeed: "rahul",
  },
  {
    id: "priya-mehta",
    name: "Priya Mehta",
    location: "Mumbai, India",
    trip: "Kasol Valley Ride",
    date: "February 2026",
    rating: 5,
    text: "Light, easy to handle on narrow lanes, and very well maintained. Booking was quick, transparent, and the pickup was right on time.",
    avatarSeed: "priya",
  },
  {
    id: "arjun-patel",
    name: "Arjun Patel",
    location: "Ahmedabad, India",
    trip: "Bhuntar to Manali",
    date: "January 2026",
    rating: 5,
    text: "Comfortable for two riders with luggage. Helmet quality was excellent and fuel efficiency lived up to every promise they made.",
    avatarSeed: "arjun",
  },
  {
    id: "sneha-reddy",
    name: "Sneha Reddy",
    location: "Hyderabad, India",
    trip: "Manali Town Explorer",
    date: "December 2025",
    rating: 5,
    text: "Best rental service in the mountains. The scooter was spotless, pickup was seamless, and support was available whenever we needed help.",
    avatarSeed: "sneha",
  },
  {
    id: "vikram-singh",
    name: "Vikram Singh",
    location: "Chandigarh, India",
    trip: "Solang Valley Adventure",
    date: "November 2025",
    rating: 4,
    text: "Great bikes, fair pricing, and zero hidden charges. The whole process from KYC to return took less than 15 minutes. Highly recommend.",
    avatarSeed: "vikram",
  },
  {
    id: "ananya-kapoor",
    name: "Ananya Kapoor",
    location: "Bangalore, India",
    trip: "Kasol Weekend Getaway",
    date: "October 2025",
    rating: 5,
    text: "Felt genuinely cared for throughout the trip. They even suggested the best routes and checked in after our ride. That level of service is rare.",
    avatarSeed: "ananya",
  },
  {
    id: "rohit-malhotra",
    name: "Rohit Malhotra",
    location: "Pune, India",
    trip: "Manali → Atal Tunnel",
    date: "September 2025",
    rating: 5,
    text: "The Royal Enfield Himalayan handled the mountain roads beautifully. Insurance included, well-serviced bike, and a team that truly knows the terrain.",
    avatarSeed: "rohit",
  },
  {
    id: "meera-joshi",
    name: "Meera Joshi",
    location: "Jaipur, India",
    trip: "Bhuntar Airport Pickup",
    date: "August 2025",
    rating: 5,
    text: "Landed at Bhuntar and had our bike ready within minutes. Smooth paperwork, friendly staff, and a ride that made our entire Himachal trip unforgettable.",
    avatarSeed: "meera",
  },
];

export const reviewStats = {
  averageRating: 4.8,
  totalReviews: "2,000+",
  recommendPercent: 98,
};
