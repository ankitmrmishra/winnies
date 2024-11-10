"use client";

import { motion } from "framer-motion";
import { MapPin, Plus, Users, Expand, DollarSign } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"] });

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface RoomData {
  id: string;
  title: string;
  description: string;
  location: string;
  squareFeet: number;
  pricePerNight: number;
  maxGuests: number;
  imageUrl: string;
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
        <motion.img
          src={room.imageUrl}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
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
            transition={{ delay: 0.2 }}
            className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2"
          >
            <Expand className="w-4 h-4 text-emerald-900" />
            <span className="text-emerald-900 font-medium">
              {room.squareFeet} sqft
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2"
          >
            <DollarSign className="w-4 h-4 text-emerald-900" />
            <span className="text-emerald-900 font-medium">
              ${room.pricePerNight} /night
            </span>
          </motion.div>
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
        <div className="flex items-center gap-2 text-white/80">
          <MapPin className="w-5 h-5" />
          <span>{room.location}</span>
        </div>
      </div>
    </motion.div>
  );
}

const rooms: RoomData[] = [
  {
    id: "1",
    title: "Pine Ridge Glampsite",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ipsum habitasse leo molestie habitant rhoncus in.",
    location: "123 El Capitan Meadows, El Capitan, CA",
    squareFeet: 2553,
    pricePerNight: 250,
    maxGuests: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1619631428091-1eaa03c3bdf1?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Riverside Luxury Tent",
    description:
      "Nestled by the rushing waters, this spacious tent offers the perfect blend of nature and comfort.",
    location: "456 River View Road, Yosemite Valley, CA",
    squareFeet: 2200,
    pricePerNight: 275,
    maxGuests: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1533090368676-1fd25485db88?q=80&w=1969&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Pine Ridge Glampsite",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ipsum habitasse leo molestie habitant rhoncus in.",
    location: "123 El Capitan Meadows, El Capitan, CA",
    squareFeet: 2553,
    pricePerNight: 250,
    maxGuests: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1619631428091-1eaa03c3bdf1?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Riverside Luxury Tent",
    description:
      "Nestled by the rushing waters, this spacious tent offers the perfect blend of nature and comfort.",
    location: "456 River View Road, Yosemite Valley, CA",
    squareFeet: 2200,
    pricePerNight: 275,
    maxGuests: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1533090368676-1fd25485db88?q=80&w=1969&auto=format&fit=crop",
  },
];
