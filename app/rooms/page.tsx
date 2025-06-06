"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";
import { ChevronRight } from "lucide-react";

// Pool Deck rooms
import PoolDeckRoom1 from "./PollDeck Rooms/DSC01173-Enhanced-NR.jpg";

// Delux Room

// import DeluxRoom1 from "./DeluxRoom/DSC03073-Enhanced-NR.jpg";

// Super delux room

import SuperDeluxRoom2 from "./Superdeluxroom/DSC01159-Enhanced-NR.jpg";

// Premium Valley Room
// import PremiumValleyRooms1 from "./PremiumValleyRooms/DSC03111-Enhanced-NR.jpg";

// Two Bedroom apartments

// import TwoBedroom3 from "./twoBedRoom/DSC03266-Enhanced-NR.jpg";

// 3 bedroom aprtments

import ThreeBedroom3 from "./ThreeBedroom/DSC03371-Enhanced-NR.jpg";

// Family Room

// import FamilyRoom1 from "./FamilyRoom/DSC03154-Enhanced-NR.jpg";

import DeluxRoom1 from "../rooms/DeluxRoom/DSC03074-Enhanced-NR.jpg";
import PremiumValleyRooms1 from "../rooms/PremiumValleyRooms/DSC03131-Enhanced-NR.jpg";
import TwoBedroom3 from "../rooms/twoBedRoom/DSC03285-Enhanced-NR.jpg";
import FamilyRoom1 from "../rooms/FamilyRoom/DSC03157.jpg";
const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

// interface RoomData {
//   id: string;
//   title: string;
//   description: string;
//   location: string;
//   squareFeet: number;
//   pricePerNight: number;
//   maxGuests: number;
//   imageUrl: string | StaticImageData;
//   amenities: string[];
//   features: string[];
//   policies: { [key: string]: string };
// }

const roomsData = [
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
];

export default function RoomsPage() {
  return (
    <div className={`min-h-screen bg-[#faf9f6] ${inter.className} `}>
      <div className="bg-emerald-900 text-white pt-44 md:p-20">
        <div className="container mx-auto px-4">
          <h1
            className={`${playfair.className} text-4xl md:text-5xl mb-4 mt-10`}
          >
            Our Rooms
          </h1>
          <p className="text-xl">
            Discover comfort and luxury in our carefully designed spaces
          </p>
        </div>
      </div>

      <main className="container mx-auto  py-12 md:px-20 px-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsData.map((room) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between items-start align-middle"
            >
              <div className="relative h-64">
                <Image
                  src={room.imageUrl}
                  alt={room.title}
                  objectFit="cover"
                  className="h-64"
                />
              </div>
              <div className="p-6">
                <h2
                  className={`${playfair.className} text-2xl text-emerald-900 mb-2`}
                >
                  {room.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {room.description.substring(0, 100)}...
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-700 font-bold">
                    ₹{room.pricePerNight.toLocaleString()} / night
                  </span>
                  <Link
                    href={`/rooms/${room.id}`}
                    className="bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-full transition-colors flex items-center"
                  >
                    View Details
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
