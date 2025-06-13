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

import deluxroom from "../../../public/assets/DelusxRooms/room1.png";

import POOLDECKPREMIUMROOMS from "../../../public/assets/POOL DECK PREMIUM ROOMS/room1.png";
import superdeluxrooms from "../../../public/assets/superdeluxrooms/room1.png";

// Pool Deck rooms
import PoolDeckRoom1 from "../PollDeck Rooms/DSC01173-Enhanced-NR.jpg";
import PoolDeckRoom2 from "../PollDeck Rooms/DSC01184-Enhanced-NR.jpg";
import PoolDeckRoom3 from "../PollDeck Rooms/DSC01196-Enhanced-NR.jpg";
import PoolDeckRoom4 from "../PollDeck Rooms/DSC01206-Enhanced-NR.jpg";
import PoolDeckRoom5 from "../PollDeck Rooms/DSC03019-Enhanced-NR.jpg";
// import PoolDeckRoom6 from "../PollDeck Rooms/DSC03020-Enhanced-NR.jpg";
import PoolDeckRoom7 from "../PollDeck Rooms/DSC03021-Enhanced-NR.jpg";
// import PoolDeckRoom8 from "../PollDeck Rooms/DSC03032-Enhanced-NR.jpg";
import PoolDeckRoom9 from "../PollDeck Rooms/DSC03022-Enhanced-NR.jpg";
import PoolDeckRoom10 from "../PollDeck Rooms/DSC03034-Enhanced-NR.jpg";

// Delux Room

// import DeluxRoom1 from "../DeluxRoom/DSC03073-Enhanced-NR.jpg";
import DeluxRoom2 from "../DeluxRoom/DSC03074-Enhanced-NR.jpg";
import DeluxRoom3 from "../DeluxRoom/DSC03078-Enhanced-NR.jpg";
import DeluxRoom4 from "../DeluxRoom/DSC03082-Enhanced-NR.jpg";
import DeluxRoom5 from "../DeluxRoom/DSC03085-Enhanced-NR.jpg";
import DeluxRoom6 from "../DeluxRoom/DSC03087.jpg";

// Super delux room
import SuperDeluxRoom1 from "../Superdeluxroom/DSC01157-Enhanced-NR.jpg";
import SuperDeluxRoom2 from "../Superdeluxroom/DSC01159-Enhanced-NR.jpg";
// import SuperDeluxRoom3 from "../Superdeluxroom/DSC01163-Enhanced-NR.jpg";
// import SuperDeluxRoom4 from "../Superdeluxroom/DSC01164-Enhanced-NR.jpg";
// import SuperDeluxRoom5 from "../Superdeluxroom/DSC01165-Enhanced-NR.jpg";
import SuperDeluxRoom6 from "../Superdeluxroom/DSC01166-Enhanced-NR.jpg";
// import SuperDeluxRoom7 from "../Superdeluxroom/DSC01168-Enhanced-NR.jpg";
import SuperDeluxRoom10 from "../Superdeluxroom/DSC01169-Enhanced-NR.jpg";
import SuperDeluxRoom11 from "../Superdeluxroom/DSC01172-Enhanced-NR.jpg";
import SuperDeluxRoom12 from "../Superdeluxroom/DSC03004-Enhanced-NR-1.jpg";
import SuperDeluxRoom13 from "../Superdeluxroom/DSC03005-Enhanced-NR.jpg";
import SuperDeluxRoom14 from "../Superdeluxroom/DSC03006-Enhanced-NR.jpg";
// import SuperDeluxRoom15 from "../Superdeluxroom/DSC03007-Enhanced-NR.jpg";
import SuperDeluxRoom9 from "../Superdeluxroom/DSC03010-Enhanced-NR.jpg";
// import SuperDeluxRoom8 from "../Superdeluxroom/DSC03014-Enhanced-NR.jpg";

// Premium Valley Room
// import PremiumValleyRooms1 from "../PremiumValleyRooms/DSC03111-Enhanced-NR.jpg";

import PremiumValleyRooms4 from "../PremiumValleyRooms/DSC03133-Enhanced-NR.jpg";
import PremiumValleyRooms5 from "../PremiumValleyRooms/DSC03134-Enhanced-NR.jpg";
// import PremiumValleyRooms6 from "../PremiumValleyRooms/DSC03136-Enhanced-NR.jpg";
// import PremiumValleyRooms7 from "../PremiumValleyRooms/DSC03140-Enhanced-NR.jpg";
import PremiumValleyRooms8 from "../PremiumValleyRooms/DSC03141-Enhanced-NR.jpg";
import PremiumValleyRooms9 from "../PremiumValleyRooms/DSC03144-Enhanced-NR.jpg";
// import PremiumValleyRooms10 from "../PremiumValleyRooms/DSC03146-Enhanced-NR.jpg";
import PremiumValleyRooms11 from "../PremiumValleyRooms/DSC03151-Enhanced-NR.jpg";

// Two Bedroom apartments

import TwoBedroom1 from "../twoBedRoom/DSC03259-Enhanced-NR.jpg";
// import TwoBedroom2 from "../twoBedRoom/DSC03263-Enhanced-NR.jpg";
// import TwoBedroom3 from "../twoBedRoom/DSC03266-Enhanced-NR.jpg";
import TwoBedroom4 from "../twoBedRoom/DSC03267-Enhanced-NR.jpg";
// import TwoBedroom5 from "../twoBedRoom/DSC03270-Enhanced-NR.jpg";
// import TwoBedroom6 from "../twoBedRoom/DSC03271-Enhanced-NR.jpg";
import TwoBedroom7 from "../twoBedRoom/DSC03272-Enhanced-NR.jpg";
import TwoBedroom8 from "../twoBedRoom/DSC03274-Enhanced-NR.jpg";
import TwoBedroom9 from "../twoBedRoom/DSC03282-Enhanced-NR.jpg";
import TwoBedroom10 from "../twoBedRoom/DSC03285-Enhanced-NR.jpg";
import TwoBedroom11 from "../twoBedRoom/DSC03287-Enhanced-NR.jpg";
import TwoBedroom12 from "../twoBedRoom/DSC03289-Enhanced-NR.jpg";
// import TwoBedroom13 from "../twoBedRoom/DSC03291-Enhanced-NR.jpg";
import TwoBedroom14 from "../twoBedRoom/DSC03295-HDR.jpg";
import TwoBedroom15 from "../twoBedRoom/DSC03296-Enhanced-NR.jpg";
// import TwoBedroom16 from "../twoBedRoom/DSC03302-Enhanced-NR.jpg";

// 3 bedroom aprtments

// import ThreeBedroom1 from "../ThreeBedroom/DSC03369-Enhanced-NR.jpg";
import ThreeBedroom2 from "../ThreeBedroom/DSC03370-Enhanced-NR.jpg";
import ThreeBedroom3 from "../ThreeBedroom/DSC03371-Enhanced-NR.jpg";
import ThreeBedroom4 from "../ThreeBedroom/DSC03372-Enhanced-NR.jpg";
import ThreeBedroom5 from "../ThreeBedroom/DSC03373-Enhanced-NR.jpg";
import ThreeBedroom6 from "../ThreeBedroom/DSC03376-Enhanced-NR.jpg";
// import ThreeBedroom7 from "../ThreeBedroom/DSC03377.jpg";
// import ThreeBedroom8 from "../ThreeBedroom/DSC03378-Enhanced-NR.jpg";
import ThreeBedroom9 from "../ThreeBedroom/DSC03379-Enhanced-NR.jpg";
// import ThreeBedroom10 from "../ThreeBedroom/DSC03384-Enhanced-NR.jpg";
import ThreeBedroom11 from "../ThreeBedroom/DSC03386-Enhanced-NR.jpg";
import ThreeBedroom12 from "../ThreeBedroom/DSC03389-Enhanced-NR.jpg";
import ThreeBedroom13 from "../ThreeBedroom/DSC03390-Enhanced-NR.jpg";
// import ThreeBedroom14 from "../ThreeBedroom/DSC03395.jpg";
import ThreeBedroom15 from "../ThreeBedroom/DSC03393.jpg";
// import ThreeBedroom16 from "../ThreeBedroom/DSC03395.jpg";

// Family Room

// import FamilyRoom1 from "../FamilyRoom/DSC03154-Enhanced-NR.jpg";
import FamilyRoom2 from "../FamilyRoom/DSC03155.jpg";
import FamilyRoom3 from "../FamilyRoom/DSC03157.jpg";
import FamilyRoom4 from "../FamilyRoom/DSC03165-Enhanced-NR.jpg";
import FamilyRoom5 from "../FamilyRoom/DSC03168-Enhanced-NR.jpg";
import FamilyRoom6 from "../FamilyRoom/DSC03169-Enhanced-NR.jpg";
import FamilyRoom7 from "../FamilyRoom/DSC03174.jpg";

import Luxurywithpool1 from "../Luxryroomwithpool/1.jpg";
import Luxurywithpool2 from "../Luxryroomwithpool/2.jpg";
import Luxurywithpool3 from "../Luxryroomwithpool/3.jpg";
import Luxurywithpool4 from "../Luxryroomwithpool/4.jpg";
import Luxurywithpool5 from "../Luxryroomwithpool/5.jpg";
import Luxurywithpool6 from "../Luxryroomwithpool/6.jpg";
import Luxurywithpool7 from "../Luxryroomwithpool/7.jpg";

import LuxurywithJacuzzi1 from "../Luxuryroomsiwthjcuzzi/1.jpg";
import LuxurywithJacuzzi2 from "../Luxuryroomsiwthjcuzzi/2.jpg";
import LuxurywithJacuzzi3 from "../Luxuryroomsiwthjcuzzi/3.jpg";
import LuxurywithJacuzzi4 from "../Luxuryroomsiwthjcuzzi/4.jpg";
import LuxurywithJacuzzi5 from "../Luxuryroomsiwthjcuzzi/5.jpg";
import LuxurywithJacuzzi6 from "../Luxuryroomsiwthjcuzzi/6.jpg";
import LuxurywithJacuzzi7 from "../Luxuryroomsiwthjcuzzi/7.jpg";

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
  imageUrl: string[] | StaticImageData[];
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
    pricePerNight: 7000,
    priceDetails: "+ Taxes",
    maxGuests: 2,
    imageUrl: [
      deluxroom,

      DeluxRoom2,
      DeluxRoom3,
      DeluxRoom4,
      DeluxRoom5,
      DeluxRoom6,
    ],
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
    imageUrl: [
      superdeluxrooms,
      SuperDeluxRoom1,
      SuperDeluxRoom2,

      SuperDeluxRoom6,
      SuperDeluxRoom6,

      SuperDeluxRoom9,

      SuperDeluxRoom10,

      SuperDeluxRoom11,
      SuperDeluxRoom12,
      SuperDeluxRoom13,
      SuperDeluxRoom14,
    ],
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
    imageUrl: [
      PremiumValleyRooms4,
      PremiumValleyRooms5,

      PremiumValleyRooms8,
      PremiumValleyRooms9,

      PremiumValleyRooms11,
    ],
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
    imageUrl: [
      POOLDECKPREMIUMROOMS,
      PoolDeckRoom1,
      PoolDeckRoom2,
      PoolDeckRoom3,
      PoolDeckRoom4,
      PoolDeckRoom5,

      PoolDeckRoom7,

      PoolDeckRoom9,
      PoolDeckRoom10,
    ],
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
    imageUrl: [
      TwoBedroom1,

      TwoBedroom4,

      TwoBedroom7,
      TwoBedroom8,
      TwoBedroom9,
      TwoBedroom10,
      TwoBedroom11,

      TwoBedroom12,

      TwoBedroom14,

      TwoBedroom15,
    ],
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
    imageUrl: [
      ThreeBedroom2,
      ThreeBedroom3,
      ThreeBedroom4,
      ThreeBedroom5,
      ThreeBedroom6,

      ThreeBedroom9,

      ThreeBedroom11,

      ThreeBedroom12,

      ThreeBedroom13,

      ThreeBedroom15,
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
    imageUrl: [
      FamilyRoom2,
      FamilyRoom3,
      FamilyRoom4,
      FamilyRoom5,
      FamilyRoom6,
      FamilyRoom7,
    ],
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
    imageUrl: [
      Luxurywithpool1,
      Luxurywithpool2,
      Luxurywithpool3,
      Luxurywithpool4,
      Luxurywithpool5,
      Luxurywithpool6,
      Luxurywithpool7,
    ],
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
    imageUrl: [
      LuxurywithJacuzzi1,
      LuxurywithJacuzzi2,
      LuxurywithJacuzzi3,
      LuxurywithJacuzzi4,
      LuxurywithJacuzzi4,
      LuxurywithJacuzzi5,
      LuxurywithJacuzzi6,
      LuxurywithJacuzzi7,
    ],
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
            plugins={[
              plugin.current,
              Autoplay({
                delay: 5000,
              }),
            ]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="w-full h-full"
          >
            <CarouselContent>
              {room.imageUrl.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${room.title} - Image ${index + 1}`}
                      objectFit="cover"
                      width={800}
                      height={800}
                      className="rounded-lg max-h-96 object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
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
