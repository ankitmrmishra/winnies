"use client";

import { motion } from "framer-motion";
import { Plus, Users } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Playfair_Display } from "next/font/google";
import { useRouter } from "next/navigation";
import Room601 from "../app/villas/Room601/20220120-_DSC4555.jpg";
import Room602 from "../app/villas/Room602/20220120-_DSC4483.jpg";
import Room603 from "../app/villas/Room603/20220120-_DSC4782.jpg";
import Room604 from "../app/villas/Room604/20220120-_DSC4337.jpg";
import Room605 from "../app/villas/Room605/20220121-_DSC4953.jpg";

const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"] });

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";

interface VillaData {
  id: string;
  title: string;
  description: string;
  maxGuests: number;
  imageUrl: StaticImageData;
}

export const OurVillas = () => {
  return (
    <div className="bg-[#faf9f6] lg:p-20 md:p-10 mt-5">
      <div className="bg-emerald-900 md:rounded-lg rounded-t-lg text-white md:p-10 p-5 flex flex-col justify-center align-middle items-start gap-4 relative py-10">
        <div className="text-green-300">Our Villas</div>
        <div
          className={`text-white md:text-5xl md:w-[30rem] font-bold text-3xl ${playfair.className}`}
        >
          Exclusive luxury Villas
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
              {villas.map((villa, index) => (
                <CarouselItem
                  key={index}
                  className="lg:basis-1/2 flex justify-center items-center"
                >
                  <VillaCard villa={villa} />
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

function VillaCard({ villa }: { villa: VillaData }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/villas/${villa.id}`);
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
          src={villa.imageUrl}
          alt={villa.title}
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
              {villa.maxGuests} guests
            </span>
          </motion.div>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-3xl font-display text-white">{villa.title}</h3>
        <p className="text-white/80">{villa.description}</p>
      </div>
    </motion.div>
  );
}

export const villas: VillaData[] = [
  {
    id: "601",
    title: "Enchanted",
    description:
      "Step into a world of enchantment with this luxurious villa, featuring elegant interiors and stunning views for an unforgettable escape.",
    maxGuests: 4,
    imageUrl: Room601,
  },
  {
    id: "602",
    title: "Perch",
    description:
      "Perched on the hillside, this villa offers breathtaking panoramic views and a serene atmosphere perfect for relaxation and rejuvenation.",
    maxGuests: 4,
    imageUrl: Room602,
  },
  {
    id: "603",
    title: "Nook",
    description:
      "Discover your private nook in the mountains, a cozy yet luxurious retreat designed for intimate gatherings and peaceful moments.",
    maxGuests: 4,
    imageUrl: Room603,
  },
  {
    id: "604",
    title: "Bloom",
    description:
      "Experience the beauty of nature in Bloom, a villa surrounded by lush gardens and offering modern amenities for a perfect getaway.",
    maxGuests: 4,
    imageUrl: Room604,
  },
  {
    id: "605",
    title: "Elevate",
    description:
      "Elevate your stay with this premium villa, featuring spacious living areas, contemporary design, and unparalleled mountain vistas.",
    maxGuests: 4,
    imageUrl: Room605,
  },
];
