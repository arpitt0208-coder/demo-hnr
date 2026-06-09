"use client";

import Image, { type StaticImageData } from "next/image";
import {
  Bell,
  Home,
  Search,
  User,
  Bike,
} from "lucide-react";
import { bikeImages } from "@/assets/images";

type MockBikeCard = {
  tag: string;
  name: string;
  distance: string;
  hourly: string;
  daily: string;
  image: StaticImageData;
};

const POPULAR_BIKES: MockBikeCard[] = [
  {
    tag: "Best Value",
    name: "Royal Enfield Himalayan 450",
    distance: "15 km away in manali",
    hourly: "₹62",
    daily: "₹1,488",
    image: bikeImages.himalayan,
  },
  {
    tag: "Best Value",
    name: "Royal Enfield Himalayan 450",
    distance: "15 km away in manali",
    hourly: "₹62",
    daily: "₹1,488",
    image: bikeImages.hunter,
  },
];

const BUDGET_BIKES: MockBikeCard[] = [
  {
    tag: "Budget",
    name: "Royal Enfield Himalayan 450",
    distance: "15 km away in manali",
    hourly: "₹62",
    daily: "₹1,488",
    image: bikeImages.scram,
  },
  {
    tag: "Budget",
    name: "Royal Enfield Himalayan 450",
    distance: "15 km away in manali",
    hourly: "₹62",
    daily: "₹1,488",
    image: bikeImages.meteor,
  },
];

function BikeListingCard({
  tag,
  name,
  distance,
  hourly,
  daily,
  image,
}: MockBikeCard) {
  return (
    <div className="w-[108px] shrink-0 overflow-hidden rounded-[10px] border border-[#E8ECF0] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.06)]">
      <div className="relative px-2 pt-2">
        <span className="inline-block rounded-full bg-primary-yellow px-2 py-0.5 text-[6px] font-bold text-dark-navy">
          {tag}
        </span>
        <div className="relative mx-auto mt-1 h-[52px] w-full">
          <Image
            src={image}
            alt=""
            fill
            className="object-contain object-center"
            sizes="108px"
          />
        </div>
      </div>
      <div className="px-2 pb-2">
        <p className="text-[7px] font-bold leading-tight text-dark-navy">{name}</p>
        <p className="mt-0.5 text-[5.5px] text-text-gray">{distance}</p>
        <p className="mt-1 text-[5px] font-semibold text-dark-navy">
          PER HOUR {hourly} | DAY {daily}
        </p>
        <div className="mt-1 flex items-center gap-1">
          <span className="size-1 rounded-full bg-[#22C55E]" aria-hidden="true" />
          <span className="text-[5px] font-medium text-[#22C55E]">On demand</span>
        </div>
      </div>
    </div>
  );
}

function BikeSection({
  title,
  bikes,
}: {
  title: string;
  bikes: MockBikeCard[];
}) {
  return (
    <div className="mt-3 px-2.5">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-[9px] font-bold text-dark-navy">{title}</p>
        <span className="text-[7px] font-semibold text-[#0D6E6E]">See all &gt;</span>
      </div>
      <div className="flex gap-2 overflow-hidden">
        {bikes.map((bike, index) => (
          <BikeListingCard key={`${title}-${index}`} {...bike} />
        ))}
      </div>
    </div>
  );
}

export function AppPhoneMockup() {
  return (
    <div
      className="relative mx-auto w-[248px] rounded-[32px] border-[6px] border-[#1A1A1A] bg-[#1A1A1A] p-[3px] shadow-[0_20px_60px_rgba(15,23,42,0.22)] sm:w-[268px]"
      aria-hidden="true"
    >
      <div className="relative overflow-hidden rounded-[26px] bg-white">
        <div className="bg-[#0D6E6E] px-3 pb-3 pt-6">
          <div className="flex items-center gap-2 rounded-full bg-white/95 px-3 py-2">
            <Search className="size-3 shrink-0 text-text-gray" strokeWidth={2} />
            <span className="truncate text-[8px] text-text-gray">
              Find a bike or scooter by name
            </span>
          </div>
        </div>

        <div className="bg-[#F8FAFC] pb-14">
          <BikeSection title="Popular Bikes" bikes={POPULAR_BIKES} />
          <BikeSection title="Budget Picks" bikes={BUDGET_BIKES} />
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around border-t border-[#E8ECF0] bg-white px-2 py-2">
          <Home className="size-4 text-[#0D6E6E]" strokeWidth={2} />
          <Search className="size-4 text-[#94A3B8]" strokeWidth={2} />
          <Bike className="size-4 text-[#94A3B8]" strokeWidth={2} />
          <Bell className="size-4 text-[#94A3B8]" strokeWidth={2} />
          <User className="size-4 text-[#94A3B8]" strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}
