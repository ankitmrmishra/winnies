"use client";

import { motion } from "framer-motion";
import { Plus, Users } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Playfair_Display } from "next/font/google";
import { useRouter } from "next/navigation";
import deluxeRoom from "../public/assets/DelusxRooms/room1.png";
import superDeluxeRoom from "../public/assets/superdeluxrooms/room1.png";
import premiumValleyViewRoom from "../public/assets/PREMIUM ROOMS/room1.png";
import premiumPoolDeckRoom from "../public/assets/POOL DECK PREMIUM ROOMS/room1.png";
import twoBedroom from "../public/assets/PREMIUM 2-BEDROOM APARTMENT/room1.png";
import threeBedroom from "../public/assets/DELUXE 3-BEDROOM APARTMENT/image.png";
import familyRoom from "../public/assets/DelusxRooms/room1.png"; // Using deluxe room image as placeholder for family room

const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"] });

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";

interface RoomData {
  id: string;
  title: string;
  description: string;
  location: string;
  squareFeet: number;
  pricePerNight: number;
  maxGuests: number;
  imageUrl: StaticImageData;
}

export const OurRooms = () => {
  return (
    <div className="bg-[#faf9f6] lg:p-20 md:p-10">
      <div className="bg-emerald-900 md:rounded-lg rounded-t-lg text-white md:p-10 p-5 flex flex-col justify-center align-middle items-start gap-4 relative py-10">
        <div className="text-green-300">Our Rooms</div>
        <div
          className={`text-white md:text-5xl md:w-[30rem] font-bold text-3xl ${playfair.className}`}
        >
          Carefully designed luxury Rooms
        </div>
        <div className="w-full max-w-max">
          <Carousel
            opts={{
              align: "start",
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="max-w-max"
          >
            <CarouselContent>
              {rooms.map((room, index) => (
                <CarouselItem
                  key={index}
                  className="lg:basis-1/2 flex justify-center items-center"
                >
                  <RoomCard room={room} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="bg-emerald-800 text-white" />
              <CarouselNext className="bg-emerald-800 text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

function RoomCard({ room }: { room: RoomData }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/rooms/${room.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-emerald-900 rounded-3xl overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative">
        <Image
          src={room.imageUrl}
          alt={room.title}
          className="w-full h-[400px] object-cover"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
        >
          <Plus className="w-6 h-6 text-emerald-900" />
        </motion.button>
        <div className="absolute bottom-4 left-4 right-4 flex gap-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2"
          >
            <Users className="w-4 h-4 text-emerald-900" />
            <span className="text-emerald-900 font-medium">
              {room.maxGuests} guests
            </span>
          </motion.div>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-3xl font-display text-white">{room.title}</h3>
        <p className="text-white/80">{room.description}</p>
      </div>
    </motion.div>
  );
}

const rooms: RoomData[] = [
  {
    id: "1",
    title: "Deluxe Rooms",
    description:
      "Experience comfort and style in our Deluxe Rooms, offering a perfect blend of modern amenities and cozy ambiance for a relaxing stay.",
    location: "Main Building, 1st Floor",
    squareFeet: 300,
    pricePerNight: 200,
    maxGuests: 2,
    imageUrl: deluxeRoom,
  },
  {
    id: "2",
    title: "Super Deluxe Rooms",
    description:
      "Indulge in luxury with our Super Deluxe Rooms, featuring spacious interiors, premium furnishings, and enhanced amenities for an elevated experience.",
    location: "Main Building, 2nd Floor",
    squareFeet: 400,
    pricePerNight: 250,
    maxGuests: 2,
    imageUrl: superDeluxeRoom,
  },
  {
    id: "3",
    title: "Premium Valley View Rooms",
    description:
      "Wake up to breathtaking valley views in our Premium Valley View Rooms, combining luxury with nature for an unforgettable stay.",
    location: "East Wing, 3rd-5th Floors",
    squareFeet: 450,
    pricePerNight: 300,
    maxGuests: 2,
    imageUrl: premiumValleyViewRoom,
  },
  {
    id: "4",
    title: "Premium Pool Deck Rooms",
    description:
      "Enjoy direct access to our stunning pool area from these Premium Pool Deck Rooms, perfect for those who love to lounge and swim.",
    location: "West Wing, Ground Floor",
    squareFeet: 400,
    pricePerNight: 275,
    maxGuests: 2,
    imageUrl: premiumPoolDeckRoom,
  },
  {
    id: "5",
    title: "2-Bedroom Premium Suite",
    description:
      "Ideal for families or groups, our 2-Bedroom Premium Suite offers ample space and luxury amenities for a comfortable and memorable stay.",
    location: "North Tower, 6th-8th Floors",
    squareFeet: 800,
    pricePerNight: 500,
    maxGuests: 4,
    imageUrl: twoBedroom,
  },
  {
    id: "6",
    title: "3-Bedroom Deluxe Suite",
    description:
      "Experience the pinnacle of luxury in our spacious 3-Bedroom Deluxe Suite, perfect for larger groups or those seeking extra space and privacy.",
    location: "North Tower, 9th-10th Floors",
    squareFeet: 1200,
    pricePerNight: 750,
    maxGuests: 6,
    imageUrl: threeBedroom,
  },
  {
    id: "7",
    title: "Family Room",
    description:
      "Our Family Rooms are designed with comfort and convenience in mind, offering a welcoming space for families to relax and create lasting memories together.",
    location: "South Wing, 2nd-4th Floors",
    squareFeet: 500,
    pricePerNight: 350,
    maxGuests: 4,
    imageUrl: familyRoom,
  },
];
