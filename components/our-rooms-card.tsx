"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";
import Image, { type StaticImageData } from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

// Pool Deck rooms
import PoolDeckRoom1 from "../app/rooms/PollDeck Rooms/DSC01173-Enhanced-NR.jpg";
// import skn from ""

// Delux Room

// import DeluxRoom1 from "./DeluxRoom/DSC03073-Enhanced-NR.jpg";

// Super delux room

import SuperDeluxRoom2 from "../app/rooms/Superdeluxroom/DSC01159-Enhanced-NR.jpg";

// Premium Valley Room
// import PremiumValleyRooms1 from "./PremiumValleyRooms/DSC03111-Enhanced-NR.jpg";

// Two Bedroom apartments

// import TwoBedroom3 from "./twoBedRoom/DSC03266-Enhanced-NR.jpg";

// 3 bedroom aprtments

import ThreeBedroom3 from "../app/rooms/ThreeBedroom/DSC03371-Enhanced-NR.jpg";

// Family Room

// import FamilyRoom1 from "./FamilyRoom/DSC03154-Enhanced-NR.jpg";

import DeluxRoom1 from "../app/rooms/DeluxRoom/DSC03074-Enhanced-NR.jpg";
import PremiumValleyRooms1 from "../app/rooms/PremiumValleyRooms/DSC03131-Enhanced-NR.jpg";
import TwoBedroom3 from "../app/rooms/twoBedRoom/DSC03285-Enhanced-NR.jpg";
import FamilyRoom1 from "../app/rooms/FamilyRoom/DSC03157.jpg";
import LuxuryRoomWithprivatepool from "../app/rooms/Luxryroomwithpool/IMG20250610163200.jpg";
import LuxurywithJacizzi from "../app/rooms/Luxuryroomsiwthjcuzzi/8.jpg";

export const roomsData = [
  {
    id: "1",
    title: "Deluxe Rooms",
    description:
      "A cozy and comfortable space with essential amenities for a relaxing stay.",
    location: "Winnie's Retreat, Kasauli, Himachal Pradesh, India",
    squareFeet: 144,
    pricePerNight: 7000,
    priceDetails: "+ Taxes",
    maxGuests: 2,
    imageUrl: DeluxRoom1,
    amenities: [
      "Valley view",
      "Sit-out balcony",
      "AC rooms",
      "LED TV",
      "Room service",
    ],
    features: ["Daily housekeeping", "Complimentary breakfast"],
    policies: {
      "Check-in": "1:00 PM",
      "Check-out": "11:00 AM",
      Cancellation: "Free cancellation up to 72 hours before check-in",
      Pets: "Allowed",
      Smoking: "Non-smoking room",
    },
  },
  {
    id: "2",
    title: "Super Deluxe Rooms",
    description:
      "Spacious and luxurious rooms with elegant interiors and valley views.",
    location: "Winnie's Retreat, Kasauli, Himachal Pradesh, India",
    squareFeet: 210,
    pricePerNight: 8500,
    priceDetails: "+ Taxes",
    maxGuests: 2,
    imageUrl: SuperDeluxRoom2,
    amenities: [
      "Valley-facing sit-out",
      "Wooden flooring",
      "Centrally heated/cooled",
      "Free Wi-Fi",
      "Room service",
    ],
    features: ["Daily housekeeping", "Complimentary breakfast"],
    policies: {
      "Check-in": "1:00 PM",
      "Check-out": "11:00 AM",
      Cancellation: "Free cancellation up to 72 hours before check-in",
      Pets: "Not allowed",
      Smoking: "Non-smoking room",
    },
  },
  {
    id: "3",
    title: "Premium Valley View Room",
    description: "Stylish and luxurious rooms offering stunning valley views.",
    location: "Winnie's Retreat, Kasauli, Himachal Pradesh, India",
    squareFeet: 215,
    pricePerNight: 9600,
    priceDetails: "+ Taxes",
    maxGuests: 2,
    imageUrl: PremiumValleyRooms1,
    amenities: [
      "King-size bed",
      "Jacuzzi-equipped bathroom",
      "Valley-facing sit-out",
      "Centrally heated/cooled",
      "Free Wi-Fi",
    ],
    features: [
      "Daily housekeeping",
      "Complimentary breakfast",
      "In-room dining",
    ],
    policies: {
      "Check-in": "1:00 PM",
      "Check-out": "11:00 AM",
      Cancellation: "Free cancellation up to 72 hours before check-in",
      Pets: "Not allowed",
      Smoking: "Non-smoking room",
    },
  },
  {
    id: "4",
    title: "Premium Pool Deck Rooms",
    description:
      "Rooms with direct pool access and private decks for an exquisite stay.",
    location: "Winnie's Retreat, Kasauli, Himachal Pradesh, India",
    squareFeet: 195,
    pricePerNight: 9600,
    priceDetails: "+ Taxes",
    maxGuests: 2,
    imageUrl: PoolDeckRoom1,
    amenities: [
      "Direct pool access",
      "Private deck",
      "King-size bed",
      "Luxurious bathroom",
      "Free Wi-Fi",
    ],
    features: [
      "Daily housekeeping",
      "Complimentary breakfast",
      "Pool towels provided",
    ],
    policies: {
      "Check-in": "1:00 PM",
      "Check-out": "11:00 AM",
      Cancellation: "Free cancellation up to 72 hours before check-in",
      Pets: "Not allowed",
      Smoking: "Non-smoking room",
    },
  },
  {
    id: "5",
    title: "2 Bedroom Premium Apartment",
    description:
      "Spacious apartments with premium amenities, perfect for families.",
    location: "Winnie's Retreat, Kasauli, Himachal Pradesh, India",
    squareFeet: 650,
    pricePerNight: 20500,
    priceDetails: "+ Taxes",
    maxGuests: 4,
    imageUrl: TwoBedroom3,
    amenities: [
      "Two bedrooms",

      "Independent living area",
      "Private balconies",
      "Free Wi-Fi",
    ],
    features: [
      "Daily housekeeping",
      "Complimentary breakfast",
      "Dedicated parking",
    ],
    policies: {
      "Check-in": "1:00 PM",
      "Check-out": "11:00 AM",
      Cancellation: "Free cancellation up to 72 hours before check-in",
      Pets: "Not allowed",
      Smoking: "Non-smoking room",
    },
  },
  {
    id: "6",
    title: "3 Bedroom Deluxe Apartment",
    description:
      "Elegant and spacious apartments for larger families or groups.",
    location: "Winnie's Retreat, Kasauli, Himachal Pradesh, India",
    squareFeet: 900,
    pricePerNight: 21500,
    priceDetails: "+ Taxes",
    maxGuests: 6,
    imageUrl: ThreeBedroom3,
    amenities: [
      "Three bedrooms",
      "Individual sit-outs",
      "AC in all rooms",
      "LED TV",
      "Room service",
    ],
    features: ["Daily housekeeping", "Complimentary breakfast"],
    policies: {
      "Check-in": "1:00 PM",
      "Check-out": "11:00 AM",
      Cancellation: "Free cancellation up to 72 hours before check-in",
      Pets: "Allowed",
      Smoking: "Non-smoking room",
    },
  },
  {
    id: "7",
    title: "Family Room",
    description:
      "Comfortable and spacious rooms for families to relax and unwind.",
    location: "Winnie's Retreat, Kasauli, Himachal Pradesh, India",
    squareFeet: 500,
    pricePerNight: 11500,
    priceDetails: "+ Taxes",
    maxGuests: 4,
    imageUrl: FamilyRoom1, // Placeholder image
    amenities: [
      "Spacious layout",
      "Multiple beds",
      "Free Wi-Fi",
      "Room service",
    ],
    features: ["Daily housekeeping", "Complimentary breakfast"],
    policies: {
      "Check-in": "1:00 PM",
      "Check-out": "11:00 AM",
      Cancellation: "Free cancellation up to 72 hours before check-in",
      Pets: "Allowed",
      Smoking: "Non-smoking room",
    },
  },
  {
    id: "8",
    title: "Luxury Room with Private Pool",
    description:
      "Indulge in luxury with your very own private pool. Perfect for families seeking privacy, comfort, and relaxation in a scenic retreat.",
    location: "Winnie's Retreat, Kasauli, Himachal Pradesh, India",
    squareFeet: 500,
    pricePerNight: 20000,
    priceDetails: "+ Taxes with breakfast. 2 Adults ",
    maxGuests: 2,
    imageUrl: LuxuryRoomWithprivatepool, // Placeholder image
    amenities: [
      "Spacious layout",
      "Multiple beds",
      "Free Wi-Fi",
      "Room service",
    ],
    features: ["Daily housekeeping", "Complimentary breakfast"],
    policies: {
      "Check-in": "1:00 PM",
      "Check-out": "11:00 AM",
      Cancellation: "Free cancellation up to 72 hours before check-in",
      Pets: "Allowed",
      Smoking: "Non-smoking room",
    },
  },
  {
    id: "9",
    title: "Luxury Room with Jacuzzi",
    description:
      "Unwind in style with a private in-room Jacuzzi. Ideal for families or couples seeking a cozy escape with added indulgence and comfort.",
    location: "Winnie's Retreat, Kasauli, Himachal Pradesh, India",
    squareFeet: 500,
    pricePerNight: 15000,
    priceDetails: "+ Taxes and breakfast for 2 adults per night",
    maxGuests: 2,
    imageUrl: LuxurywithJacizzi, // Placeholder image
    amenities: [
      "Spacious layout",
      "Multiple beds",
      "Free Wi-Fi",
      "Room service",
    ],
    features: ["Daily housekeeping", "Complimentary breakfast"],
    policies: {
      "Check-in": "1:00 PM",
      "Check-out": "11:00 AM",
      Cancellation: "Free cancellation up to 72 hours before check-in",
      Pets: "Allowed",
      Smoking: "Non-smoking room",
    },
  },
];

interface RoomData {
  id: string;
  title: string;
  description: string;
  pricePerNight: number;
  imageUrl: StaticImageData;
  maxGuests: number;
}

interface OurRoomsProps {
  title?: string;
  subtitle?: string;
  items?: RoomData[];
  className?: string;
}

export const OurRoomsBooking = ({
  subtitle = "Carefully designed luxury Rooms",
  items = roomsData,
  className = "",
}: OurRoomsProps) => {
  return (
    <div className={`py-12 ${className}`}>
      <div className="space-y-4 mb-10 px-4">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-[#ff7e7e]" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {subtitle}
          </h2>
        </div>
      </div>

      <div className="w-full px-4">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 3000 })]}
          className="w-full group"
        >
          <CarouselContent className="-ml-4">
            {items.map((room, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/2"
              >
                <RoomCard room={room} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white text-emerald-900 border-none shadow-md h-10 w-10" />
            <CarouselNext className="right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white text-emerald-900 border-none shadow-md h-10 w-10" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

function RoomCard({ room }: { room: RoomData }) {
  const router = useRouter();
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl overflow-hidden h-full flex flex-col shadow-sm border border-gray-100 cursor-pointer"
      onClick={() => router.push(`/rooms/${room.id}`)}
    >
      <div className="relative aspect-[16/10]">
        <Image
          src={room.imageUrl || "/placeholder.svg"}
          alt={room.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-5 flex flex-col flex-1 space-y-3">
        <h3 className="text-xl font-bold text-gray-900">{room.title}</h3>
        <p className="text-gray-600 line-clamp-2 text-sm leading-relaxed">
          {room.description}
        </p>

        <div className="flex items-center justify-between pt-4 mt-auto">
          <div className="text-emerald-700 font-bold text-lg">
            Price Per Night: {room.pricePerNight}
          </div>
          <Button className="bg-emerald-800 hover:bg-emerald-700 text-white rounded-full px-4 py-1.5 flex items-center gap-2 h-auto text-sm">
            View Details
            <ChevronRight className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

// const defaultRooms: RoomData[] = [
//   {
//     id: "1",
//     title: "Deluxe Rooms",
//     description:
//       "Experience comfort and style in our Deluxe Rooms, offering a perfect blend of modern amenities.",
//     details: "1 Bedroom",
//     price: "₹15,000 / night",
//     imageUrl: deluxeRoom,
//   },
//   {
//     id: "2",
//     title: "Super Deluxe Rooms",
//     description:
//       "Indulge in luxury with our Super Deluxe Rooms, featuring spacious interiors and premium furnishings.",
//     details: "1 Bedroom",
//     price: "₹18,000 / night",
//     imageUrl: superDeluxeRoom,
//   },
//   {
//     id: "3",
//     title: "Enchanted",
//     description:
//       "A cozy two-bedroom villa with enchanting views and private sit-out area.",
//     details: "2 Bedrooms",
//     price: "₹35,000 / night",
//     imageUrl: "/resort-room-with-valley-view.jpg",
//   },
// ];

// export const villaData: RoomData[] = [
//   {
//     id: "v1",
//     title: "Royal Villa",
//     description:
//       "Our signature villa offering unparalleled luxury with private butler service.",
//     details: "4 Bedrooms",
//     price: "₹75,000 / night",
//     imageUrl: "/three-bedroom-luxury-villa.jpg",
//   },
//   {
//     id: "v2",
//     title: "Garden Villa",
//     description:
//       "Surround yourself with lush greenery and blooming flowers in our private garden villa.",
//     details: "3 Bedrooms",
//     price: "₹55,000 / night",
//     imageUrl: "/two-bedroom-resort-suite.jpg",
//   },
//   {
//     id: "v3",
//     title: "Pool Villa",
//     description:
//       "Features a private infinity pool overlooking the valley for ultimate relaxation.",
//     details: "2 Bedrooms",
//     price: "₹45,000 / night",
//     imageUrl: "/resort-room-with-pool-access.jpg",
//   },
// ];
