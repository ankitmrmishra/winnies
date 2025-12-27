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
import Room604 from "../app/villas/Room604/20220120-_DSC4337.jpg";
import Room605 from "../app/villas/Room605/20220121-_DSC4953.jpg";
import Room601 from "../app/villas/Room601/20220120-_DSC4555.jpg";
import Room602 from "../app/villas/Room602/20220120-_DSC4483.jpg";
import Room603 from "../app/villas/Room603/20220120-_DSC4782.jpg";

export const villasData = [
  {
    id: "601",
    title: "Enchanted",
    description: "A cozy two-bedroom villa with enchanting views.",
    pricePerNight: 35000,
    imageUrl: Room601,
    bedrooms: 2,
  },
  {
    id: "602",
    title: "Perch",
    description: "Spacious three-bedroom villa perched on a hilltop.",
    pricePerNight: 45000,
    imageUrl: Room602,
    bedrooms: 3,
  },
  {
    id: "603",
    title: "Nook",
    description: "Charming two-bedroom villa nestled in nature.",
    pricePerNight: 35000,
    imageUrl: Room603,
    bedrooms: 2,
  },
  {
    id: "604",
    title: "Bloom",
    description: "Beautiful three-bedroom villa surrounded by flowers.",
    pricePerNight: 45000,
    imageUrl: Room604,
    bedrooms: 3,
  },
  {
    id: "605",
    title: "Elevate",
    description: "Elevated two-bedroom villa with panoramic views.",
    pricePerNight: 35000,
    imageUrl: Room605,
    bedrooms: 2,
  },
];

interface RoomData {
  id: string;
  title: string;
  description: string;
  pricePerNight: number;
  imageUrl: StaticImageData;
  bedrooms: number;
}

interface OurRoomsProps {
  title?: string;
  subtitle?: string;
  items?: RoomData[];
  className?: string;
}

export const OurVillasBooking = ({
  subtitle = "Carefully designed luxury Villas",
  items = villasData,
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
            Number Of Rooms:
            {room.bedrooms}
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
