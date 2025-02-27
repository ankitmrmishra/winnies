"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";
import { ChevronRight } from "lucide-react";
import Room604 from "./Room604/20220120-_DSC4337.jpg";
import Room605 from "./Room605/20220121-_DSC4953.jpg";
import Room601 from "./Room601/20220120-_DSC4555.jpg";
import Room602 from "./Room602/20220120-_DSC4483.jpg";
import Room603 from "./Room603/20220120-_DSC4782.jpg";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const villasData = [
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

export default function VillasPage() {
  return (
    <div className={`min-h-screen bg-[#faf9f6] ${inter.className}`}>
      <div className="bg-emerald-900 text-white pt-44 md:p-20">
        <div className="container mx-auto px-4">
          <h1
            className={`${playfair.className} text-4xl md:text-5xl mb-4 mt-10`}
          >
            Our Villas
          </h1>
          <p className="text-xl">
            Experience luxury and comfort in our exquisite villas
          </p>
        </div>
      </div>

      <main className="container mx-auto py-12 md:px-20 px-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {villasData.map((villa) => (
            <motion.div
              key={villa.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between items-start align-middle"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={villa.imageUrl}
                  alt={villa.title}
                  width={800}
                  height={800}
                  className="h-full w-full"
                />
              </div>
              <div className="p-6">
                <h2
                  className={`${playfair.className} text-2xl text-emerald-900 mb-2`}
                >
                  {villa.title}
                </h2>
                <p className="text-gray-600 mb-4">{villa.description}</p>
                <p className="text-gray-600 mb-4">{villa.bedrooms} Bedrooms</p>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-700 font-bold">
                    ₹{villa.pricePerNight.toLocaleString()} / night
                  </span>
                  <Link
                    href={`/villas/${villa.id}`}
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
