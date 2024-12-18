"use client";

import { motion } from "framer-motion";
import { Plus, Users } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Playfair_Display } from "next/font/google";
import premiumroom from "../public/assets/PREMIUM ROOMS/room1.png";
import deluxroom from "../public/assets/DelusxRooms/room1.png";
import PREMIUM2BEDROOMAPARTMENT from "../public/assets/PREMIUM 2-BEDROOM APARTMENT/room1.png";
import POOLDECKPREMIUMROOMS from "../public/assets/POOL DECK PREMIUM ROOMS/room1.png";
import superdeluxrooms from "../public/assets/superdeluxrooms/room1.png";
import deluxs3bedroom from "../public/assets/DELUXE 3-BEDROOM APARTMENT/image.png";

// import DelusRoom from "../public/assets/DelusxRooms/K81A0514.jpg";

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
  imageUrl: string | StaticImageData;
}

export const OurRooms = () => {
  return (
    <div className="bg-[#faf9f6] lg:p-20 md:p-10">
      {" "}
      <div className=" bg-emerald-900 md:rounded-lg rounded-t-lg text-white md:p-10 p-5 flex flex-col justify-center align-middle items-start gap-4 relative py-10">
        <div className="text-green-300">Our Rooms</div>
        <div
          className={`text-white md:text-5xl md:w-[30rem] font-bold text-3xl ${playfair.className} `}
        >
          Carefully designed luxury Rooms
        </div>
        <div className=" w-full max-w-max     ">
          <Carousel
            opts={{
              align: "start",
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className=" max-w-max"
          >
            <CarouselContent>
              {rooms.map((room, index) => (
                <CarouselItem
                  key={index}
                  className=" lg:basis-1/2 flex justify-center items-center "
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-emerald-900 rounded-3xl overflow-hidden "
    >
      <div className="relative">
        <Image
          src={room.imageUrl}
          alt={room.title}
          objectFit="cover"
          className="w-full  h-[400px] object-cover"
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
    title: "Deluxe Room",
    description:
      "Embrace simplicity with comfort in our Deluxe Room, a cozy retreat perfect for unwinding with nature right outside your window.",
    location: "123 El Capitan Meadows, El Capitan, CA",
    squareFeet: 2553,
    pricePerNight: 250,
    maxGuests: 2,
    imageUrl: deluxroom,
  },
  {
    id: "2",
    title: "Super Deluxe Room",
    description:
      "A touch of luxury awaits in our Super Deluxe Room. Spacious, stylish, and designed for relaxation, it’s an ideal escape.",
    location: "456 River View Road, Yosemite Valley, CA",
    squareFeet: 2200,
    pricePerNight: 275,
    maxGuests: 3,
    imageUrl: superdeluxrooms,
  },
  {
    id: "3",
    title: "Premium Room",
    description:
      "Bask in elegance with our Premium Room’s sweeping views and refined interiors. A serene, uplifting experience curated just for you.",
    location: "123 El Capitan Meadows, El Capitan, CA",
    squareFeet: 2553,
    pricePerNight: 250,
    maxGuests: 2,
    imageUrl: premiumroom,
  },
  {
    id: "4",
    title: "Two Bedroom Premium Suite",
    description:
      "Ideal for family or friends, this suite offers connected rooms for shared moments and personal space – all in cozy luxury.",
    location: "456 River View Road, Yosemite Valley, CA",
    squareFeet: 2200,
    pricePerNight: 275,
    maxGuests: 3,
    imageUrl: PREMIUM2BEDROOMAPARTMENT,
  },
  {
    id: "5",
    title: "Three Bedroom Suite",
    description:
      "Gather in style in our Three Bedroom Suite, designed to feel like a private retreat for larger groups to relax and connect.",
    location: "456 River View Road, Yosemite Valley, CA",
    squareFeet: 2200,
    pricePerNight: 275,
    maxGuests: 3,
    imageUrl: deluxs3bedroom,
  },
  {
    id: "6",
    title: "Two Bedroom Family Room",
    description:
      "Perfect for families, this room combines private spaces with shared comfort. Enjoy quality time in a warm inviting setting.",
    location: "456 River View Road, Yosemite Valley, CA",
    squareFeet: 2200,
    pricePerNight: 275,
    maxGuests: 3,
    imageUrl: POOLDECKPREMIUMROOMS,
  },
];
