"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Calendar,
  Bath,
  Wind,
  Sun,
  Moon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

interface RoomData {
  id: string;
  title: string;
  description: string;
  location: string;
  squareFeet: number;
  pricePerNight: number;
  maxGuests: number;
  imageUrl: string[];
  amenities: string[];
  features: string[];
  policies: { [key: string]: string };
}

const roomsData: RoomData[] = [
  {
    id: "1",
    title: "Luxury Villas (Two Bedroom & Three Bedroom Suites)",
    description:
      "Our Luxury Villas offer both Two Bedroom & Three Bedroom suites, meticulously designed to provide warmth, comfort, and luxury. Guests can enjoy a serene retreat where the beauty of nature intertwines with the comfort of home.",
    location: "Winnie's Retreat, Kasauli, Himachal Pradesh, India",
    squareFeet: 1200, // Example size, can adjust as needed
    pricePerNight: 12000,
    maxGuests: 6,
    imageUrl: [
      "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62?q=80&w=1969&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615570780411-7ecf05c91dbd?q=80&w=2070&auto=format&fit=crop",
    ],
    amenities: [
      "Two/Three bedrooms",
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
    id: "2",
    title: "All Wooden Premium Rooms with Jacuzzi (Valley Facing)",
    description:
      "Located at the top of the hill, these centrally heated/cooled rooms offer unmatched views of the valley. Made entirely of natural pine wood, the rooms feature luxurious washrooms equipped with Jacuzzis, creating a perfect blend of luxury and nature.",
    location: "Winnie's Retreat, Kasauli, Himachal Pradesh, India",
    squareFeet: 450,
    pricePerNight: 8000,
    maxGuests: 2,
    imageUrl: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2070&auto=format&fit=crop",
    ],
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
    id: "3",
    title: "Super Deluxe Valley Facing (Centrally Heated/Cooled Rooms)",
    description:
      "These rooms offer stunning valley views from the sit-outs, with ceilings crafted from imported European Pine wood that perfectly complements the wooden flooring, creating a warm and luxurious atmosphere.",
    location: "Winnie's Retreat, Kasauli, Himachal Pradesh, India",
    squareFeet: 400,
    pricePerNight: 6500,
    maxGuests: 2,
    imageUrl: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    ],
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
    id: "4",
    title: "Deluxe Rooms with Valley View (AC Rooms)",
    description:
      "Located in a separate block, these rooms offer valley views from the sit-outs. Each room is equipped with modern amenities such as LED TVs, tea/coffee makers, and air conditioning.",
    location: "Winnie's Retreat, Kasauli, Himachal Pradesh, India",
    squareFeet: 350,
    pricePerNight: 5000,
    maxGuests: 2,
    imageUrl: [
      "https://images.unsplash.com/photo-1559599189-0c3b7d2f8021?q=80&w=1969&auto=format&fit=crop",
    ],
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
    id: "5",
    title: "3 Bedroom Family Suites (AC Rooms)",
    description:
      "Ideal for bigger families, these suites provide spacious living areas with three bedrooms, individual sit-outs, and air-conditioned comfort, ensuring a relaxing stay for all members.",
    location: "Winnie's Retreat, Kasauli, Himachal Pradesh, India",
    squareFeet: 1000,
    pricePerNight: 15000,
    maxGuests: 6,
    imageUrl: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1969&auto=format&fit=crop",
    ],
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
];

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function RoomPage({ params }: PageProps) {
  const { id } = React.use(params);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const room = roomsData.find((r) => r.id === id);

  if (!room) {
    return <div>Room not found</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === room.imageUrl.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? room.imageUrl.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <header className="bg-emerald-900 text-white py-6">
        <div className="mt-20 mx-auto px-4">
          <Link
            href="/"
            className="flex items-center text-white hover:text-emerald-200 transition-colors"
          >
            <ChevronLeft className="mr-2" />
            Back to Rooms
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:px-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="md:absolute relative inset-0"
              >
                <Image
                  src={room.imageUrl[currentImageIndex]}
                  alt={`${room.title} - Image ${currentImageIndex + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
            </AnimatePresence>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
            >
              <ChevronLeft className="text-emerald-900 w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
            >
              <ChevronRight className="text-emerald-900 w-6 h-6" />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {room.imageUrl.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex
                      ? "bg-emerald-700"
                      : "bg-white bg-opacity-50 hover:bg-opacity-75"
                  }`}
                />
              ))}
            </div>
          </motion.div>
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${playfair.className} text-4xl lg:text-5xl text-emerald-900 mb-4`}
            >
              {room.title}
            </motion.h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {room.description}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <Users className="text-emerald-700 mr-2" />
                <span>{room.maxGuests} Guests</span>
              </div>
              <div className="flex items-center">
                <Calendar className="text-emerald-700 mr-2" />
                <span>Available</span>
              </div>
              <div className="flex items-center">
                <Bath className="text-emerald-700 mr-2" />
                <span>En-suite bathroom</span>
              </div>
              <div className="flex items-center">
                <Wind className="text-emerald-700 mr-2" />
                <span>Air conditioning</span>
              </div>
            </div>
            <p className="text-gray-600 mb-2">
              <strong>Location:</strong> {room.location}
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Size:</strong> {room.squareFeet} sq ft
            </p>
            <div className="flex items-center justify-between mb-6">
              <p className="text-emerald-700 font-bold text-3xl">
                ${room.pricePerNight}{" "}
                <span className="text-sm text-gray-500 font-normal">
                  / night
                </span>
              </p>
              <Button
                onClick={() => setIsBookingOpen(true)}
                className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-full transition-colors text-lg"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-72">
          <div className="bg-emerald-800 p-4 rounded-lg ">
            <h2 className={`${playfair.className} text-2xl text-white mb-4`}>
              Amenities
            </h2>
            <ul className="space-y-2">
              {room.amenities.map((amenity, index) => (
                <li key={index} className="flex items-center text-white">
                  <Sun className="w-5 h-5 mr-2 text-emerald-200" />
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-emerald-800 p-4 rounded-lg ">
            <h2 className={`${playfair.className} text-2xl text-white mb-4`}>
              Room Features
            </h2>
            <ul className="space-y-2">
              {room.features.map((feature, index) => (
                <li key={index} className="flex items-center text-white">
                  <Moon className="w-5 h-5 mr-2 text-emerald-200" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-emerald-800 p-4 rounded-lg ">
            <h2 className={`${playfair.className} text-2xl text-white mb-4`}>
              Policies
            </h2>
            <ul className="space-y-2">
              {Object.entries(room.policies).map(([key, value]) => (
                <li key={key} className="text-white">
                  <span className="font-semibold">{key}:</span> {value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {isBookingOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 p-8 bg-white rounded-lg shadow-lg"
          >
            <h2
              className={`${playfair.className} text-3xl text-emerald-900 mb-6`}
            >
              Book Your Stay
            </h2>
            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="checkIn"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Check-in Date
                </label>
                <input
                  type="date"
                  id="checkIn"
                  name="checkIn"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="checkOut"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Check-out Date
                </label>
                <input
                  type="date"
                  id="checkOut"
                  name="checkOut"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="guests"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Number of Guests
                </label>
                <select
                  id="guests"
                  name="guests"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
                >
                  {[...Array(room.maxGuests)].map((_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1} Guest{i !== 0 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="specialRequests"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Special Requests
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  rows={3}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
                  placeholder="Any special requests or preferences?"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <Button
                  type="submit"
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-full transition-colors text-lg"
                >
                  Confirm Booking
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </main>
    </div>
  );
}
