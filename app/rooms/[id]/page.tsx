"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  Users,
  Calendar,
  Bath,
  Wind,
  Sun,
  Moon,
  Coffee,
  Wifi,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import premiumroom from "../../../public/assets/PREMIUM ROOMS/room1.png";
import deluxroom from "../../../public/assets/DelusxRooms/room1.png";

import PREMIUM2BEDROOMAPARTMENT from "../../../public/assets/PREMIUM 2-BEDROOM APARTMENT/room1.png";
import POOLDECKPREMIUMROOMS from "../../../public/assets/POOL DECK PREMIUM ROOMS/room1.png";
import superdeluxrooms from "../../../public/assets/superdeluxrooms/room1.png";
import deluxs3bedroom from "../../../public/assets/DELUXE 3-BEDROOM APARTMENT/image.png";
import { useRouter } from "next/navigation";

const playfair = Playfair_Display({ subsets: ["latin"] });

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

const roomsData = [
  {
    id: "1",
    title: "Deluxe Rooms",
    description:
      "A cozy and comfortable space with essential amenities for a relaxing stay.",
    location: "Winnie's Retreat, Kasauli, Himachal Pradesh, India",
    squareFeet: 144,
    pricePerNight: 6000,
    priceDetails: "+ Taxes",
    maxGuests: 2,
    imageUrl: deluxroom,
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
    pricePerNight: 6500,
    priceDetails: "+ Taxes",
    maxGuests: 2,
    imageUrl: superdeluxrooms,
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
    pricePerNight: 7499,
    priceDetails: "+ Taxes",
    maxGuests: 2,
    imageUrl: premiumroom,
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
    pricePerNight: 7499,
    priceDetails: "+ Taxes",
    maxGuests: 2,
    imageUrl: POOLDECKPREMIUMROOMS,
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
    pricePerNight: 18000,
    priceDetails: "+ Taxes",
    maxGuests: 4,
    imageUrl: PREMIUM2BEDROOMAPARTMENT,
    amenities: [
      "Two bedrooms",
      "Fully equipped kitchen",
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
    pricePerNight: 19000,
    priceDetails: "+ Taxes",
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
    pricePerNight: 10000,
    priceDetails: "+ Taxes",
    maxGuests: 4,
    imageUrl: deluxroom, // Placeholder image
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

const iconMap = {
  "King-size bed": Bath,
  "Jacuzzi-equipped bathroom": Wind,
  "Natural pinewood interiors": Sun,
  "Free Wi-Fi": Wifi,
  "Daily housekeeping": Moon,
  "Complimentary breakfast": Coffee,
};

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

function DynamicRoomInfo({ room }: { room: RoomData }) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const renderIcon = (item: string) => {
    const IconComponent = iconMap[item as keyof typeof iconMap] || Sun;
    return <IconComponent className="w-5 h-5" />;
  };

  return (
    <div className="grid gap-6 lg:grid-cols-3 max-w-5xl mx-auto">
      <Card className="relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-emerald-800 transition-transform group-hover:scale-105" />
        <div className="relative p-6 text-white">
          <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
          <div className="space-y-4">
            {room.amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 group/item hover:translate-x-1 transition-transform"
                onMouseEnter={() => setHoveredItem(amenity)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div
                  className={cn(
                    "p-2 rounded-lg transition-colors",
                    hoveredItem === amenity
                      ? "bg-emerald-700/50"
                      : "bg-emerald-800/50"
                  )}
                >
                  {renderIcon(amenity)}
                </div>
                <div className="space-y-0.5">
                  <p className="font-medium">{amenity}</p>
                  {/* <p className="text-sm text-emerald-100/80">
                    {hoveredItem === amenity ? "Hover description" : ""}
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card className="relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-emerald-800 transition-transform group-hover:scale-105" />
        <div className="relative p-6 text-white">
          <h2 className="text-2xl font-semibold mb-4">Room Features</h2>
          <div className="space-y-4">
            {room.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 group/item hover:translate-x-1 transition-transform"
                onMouseEnter={() => setHoveredItem(feature)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div
                  className={cn(
                    "p-2 rounded-lg transition-colors",
                    hoveredItem === feature
                      ? "bg-emerald-700/50"
                      : "bg-emerald-800/50"
                  )}
                >
                  {renderIcon(feature)}
                </div>
                <div className="space-y-0.5">
                  <p className="font-medium">{feature}</p>
                  {/* <p className="text-sm text-emerald-100/80">
                    {hoveredItem === feature ? "Feature description" : ""}
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card className="relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-emerald-800 transition-transform group-hover:scale-105" />
        <div className="relative p-6 text-white">
          <h2 className="text-2xl font-semibold mb-4">Policies</h2>
          <div className="space-y-4">
            {Object.entries(room.policies).map(([key, value]) => (
              <div
                key={key}
                className="group/item hover:translate-x-1 transition-transform"
                onMouseEnter={() => setHoveredItem(key)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="space-y-1">
                  <p className="font-medium">{key}</p>
                  <p className="text-sm text-emerald-100/80">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default function RoomPage({ params }: PageProps) {
  const router = useRouter();
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const { id } = React.use(params);
  const room = roomsData.find((r) => r.id === id);

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <div className="bg-emerald-900 text-white py-6">
        <div className="mt-20 mx-auto px-4">
          <Link
            href="/rooms"
            className="flex items-center text-white hover:text-emerald-200 transition-colors"
          >
            <ChevronLeft className="mr-2" />
            Back to Rooms
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 md:px-20 ">
        <div className="grid lg:grid-cols-2 gap-12 w-full">
          <Carousel
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="w-full h-full"
          >
            <CarouselContent>
              <CarouselItem>
                <div className="relative w-full ">
                  <Image
                    src={room.imageUrl}
                    alt={`${room.title} }`}
                    objectFit="cover"
                    width={800}
                    height={1000}
                    className="rounded-lg"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="absolute right-[50%] justify-center md:bottom-2 -bottom-5 space-x-2 ">
              <CarouselPrevious variant="outline" size="icon" />
              <CarouselNext variant="outline" size="icon" />
            </div>
          </Carousel>

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
            <div className="flex flex-col items-start gap-4 justify-between mb-6">
              <p className="text-emerald-700 font-bold text-3xl">
                ₹{room.pricePerNight}{" "}
                <span className="text-sm text-gray-500 font-normal">
                  / night
                </span>
              </p>
              <Button
                onClick={() =>
                  router.push(
                    "https://bookings.resavenue.com/resBooking/availsearch?regCode=GATE0402"
                  )
                }
                className=" bg-emerald-800 hover:bg-emerald-700 text-white"
              >
                Book Now
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <DynamicRoomInfo room={room} />
        </div>
      </main>
    </div>
  );
}
