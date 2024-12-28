"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Playfair_Display, Inter } from "next/font/google";
import { ChevronRight } from "lucide-react";
import premiumroom from "../../public/assets/PREMIUM ROOMS/room1.png";
import deluxroom from "../../public/assets/DelusxRooms/room1.png";

import PREMIUM2BEDROOMAPARTMENT from "../../public/assets/PREMIUM 2-BEDROOM APARTMENT/room1.png";
import POOLDECKPREMIUMROOMS from "../../public/assets/POOL DECK PREMIUM ROOMS/room1.png";
import superdeluxrooms from "../../public/assets/superdeluxrooms/room1.png";
import deluxs3bedroom from "../../public/assets/DELUXE 3-BEDROOM APARTMENT/image.png";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

interface RoomData {
  id: string;
  title: string;
  description: string;
  location: string;
  squareFeet: number;
  pricePerNight: number;
  maxGuests: number;
  imageUrl: string | StaticImageData;
  amenities: string[];
  features: string[];
  policies: { [key: string]: string };
}

const roomsData: RoomData[] = [
  {
    id: "1",
    title: "Deluxe Rooms with Valley View (AC Rooms)",
    description:
      "Located in a separate block, these rooms offer valley views from the sit-outs. Each room is equipped with modern amenities such as LED TVs, tea/coffee makers, and air conditioning.",
    location: "Winnie's Retreat, Kasauli, Himachal Pradesh, India",
    squareFeet: 350,
    pricePerNight: 5000,
    maxGuests: 2,
    imageUrl: deluxroom,
    amenities: [
      "Valley view",
      "Sit-out balcony",
      "AC rooms",
      "LED TV with Tata Sky",
      "Tea/coffee maker",
      "Room service",
    ],
    features: ["Daily housekeeping", "Complimentary breakfast"],
    policies: {
      "Check-in": "2:00 PM",
      "Check-out": "12:00 PM",
      Cancellation: "Free cancellation up to 48 hours before check-in",
      Pets: "Not allowed",
      Smoking: "Non-smoking room",
    },
  },
  {
    id: "2",
    title: "Super Deluxe Valley Facing (Centrally Heated/Cooled Rooms)",
    description:
      "These rooms offer stunning valley views from the sit-outs, with ceilings crafted from imported European Pine wood that perfectly complements the wooden flooring, creating a warm and luxurious atmosphere.",
    location: "Winnie's Retreat, Kasauli, Himachal Pradesh, India",
    squareFeet: 400,
    pricePerNight: 6500,
    maxGuests: 2,
    imageUrl: superdeluxrooms,
    amenities: [
      "Valley-facing sit-out",
      "European Pine wood ceilings",
      "Wooden flooring",
      "Centrally heated/cooled",
      "Free Wi-Fi",
      "Room service",
    ],
    features: ["Daily housekeeping", "Complimentary breakfast"],
    policies: {
      "Check-in": "2:00 PM",
      "Check-out": "12:00 PM",
      Cancellation: "Free cancellation up to 48 hours before check-in",
      Pets: "Not allowed",
      Smoking: "Non-smoking room",
    },
  },
  {
    id: "3",
    title: "All Wooden Premium Rooms with Jacuzzi (Valley Facing)",
    description:
      "Located at the top of the hill, these centrally heated/cooled rooms offer unmatched views of the valley. Made entirely of natural pine wood, the rooms feature luxurious washrooms equipped with Jacuzzis, creating a perfect blend of luxury and nature.",
    location: "Winnie's Retreat, Kasauli, Himachal Pradesh, India",
    squareFeet: 450,
    pricePerNight: 8000,
    maxGuests: 2,
    imageUrl: premiumroom,
    amenities: [
      "King-size bed",
      "Jacuzzi-equipped bathroom",
      "Natural pinewood interiors",
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
      "Check-in": "2:00 PM",
      "Check-out": "12:00 PM",
      Cancellation: "Free cancellation up to 48 hours before check-in",
      Pets: "Not allowed",
      Smoking: "Non-smoking room",
    },
  },
  {
    id: "4",
    title: "Pool Deck Premium Rooms",
    description:
      "Experience luxury with our Pool Deck Premium Rooms, offering direct access to the pool area and stunning views. These rooms combine comfort with convenience for an unforgettable stay.",
    location: "Winnie's Retreat, Kasauli, Himachal Pradesh, India",
    squareFeet: 400,
    pricePerNight: 7500,
    maxGuests: 2,
    imageUrl: POOLDECKPREMIUMROOMS,
    amenities: [
      "Direct pool access",
      "Private deck",
      "King-size bed",
      "Luxurious bathroom",
      "Free Wi-Fi",
      "Mini-bar",
    ],
    features: [
      "Daily housekeeping",
      "Complimentary breakfast",
      "Pool towels provided",
    ],
    policies: {
      "Check-in": "2:00 PM",
      "Check-out": "12:00 PM",
      Cancellation: "Free cancellation up to 48 hours before check-in",
      Pets: "Not allowed",
      Smoking: "Non-smoking room",
    },
  },
  {
    id: "5",
    title: "Luxury Villas (Two Bedroom Suites)",
    description:
      "Our Luxury Villas offer Two Bedroom suites, meticulously designed to provide warmth, comfort, and luxury. Guests can enjoy a serene retreat where the beauty of nature intertwines with the comfort of home.",
    location: "Winnie's Retreat, Kasauli, Himachal Pradesh, India",
    squareFeet: 1000,
    pricePerNight: 12000,
    maxGuests: 4,
    imageUrl: PREMIUM2BEDROOMAPARTMENT,
    amenities: [
      "Two bedrooms",
      "Fully equipped kitchen",
      "Independent living area",
      "Private balconies",
      "Luxurious interiors",
      "Free Wi-Fi",
      "Room service",
      "Flat-screen TV",
    ],
    features: [
      "Daily housekeeping",
      "Complimentary breakfast",
      "Dedicated parking",
      "24/7 concierge service",
    ],
    policies: {
      "Check-in": "2:00 PM",
      "Check-out": "12:00 PM",
      Cancellation: "Free cancellation up to 72 hours before check-in",
      Pets: "Allowed (on request)",
      Smoking: "Non-smoking room",
    },
  },
  {
    id: "6",
    title: "3 Bedroom Family Suites (AC Rooms)",
    description:
      "Ideal for bigger families, these suites provide spacious living areas with three bedrooms, individual sit-outs, and air-conditioned comfort, ensuring a relaxing stay for all members.",
    location: "Winnie's Retreat, Kasauli, Himachal Pradesh, India",
    squareFeet: 1200,
    pricePerNight: 15000,
    maxGuests: 6,
    imageUrl: deluxs3bedroom,
    amenities: [
      "Three bedrooms",
      "Individual sit-outs",
      "AC in all rooms",
      "LED TV",
      "Room service",
    ],
    features: ["Daily housekeeping", "Complimentary breakfast"],
    policies: {
      "Check-in": "2:00 PM",
      "Check-out": "12:00 PM",
      Cancellation: "Free cancellation up to 72 hours before check-in",
      Pets: "Allowed (on request)",
      Smoking: "Non-smoking room",
    },
  },
  {
    id: "7",
    title: "Family Room",
    description:
      "Our Family Rooms are designed with comfort and convenience in mind, offering a welcoming space for families to relax and create lasting memories together.",
    location: "Winnie's Retreat, Kasauli, Himachal Pradesh, India",
    squareFeet: 500,
    pricePerNight: 9000,
    maxGuests: 4,
    imageUrl: deluxroom, // Using deluxe room image as a placeholder
    amenities: [
      "Spacious layout",
      "Multiple beds",
      "Family-friendly amenities",
      "Free Wi-Fi",
      "Room service",
    ],
    features: ["Daily housekeeping", "Complimentary breakfast"],
    policies: {
      "Check-in": "2:00 PM",
      "Check-out": "12:00 PM",
      Cancellation: "Free cancellation up to 48 hours before check-in",
      Pets: "Allowed (on request)",
      Smoking: "Non-smoking room",
    },
  },
];

export default function RoomsPage() {
  return (
    <div className={`min-h-screen bg-[#faf9f6] ${inter.className} `}>
      <div className="bg-emerald-900 text-white pt-44 md:p-20">
        <div className="container mx-auto px-4">
          <h1 className={`${playfair.className} text-4xl md:text-5xl mb-4`}>
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
