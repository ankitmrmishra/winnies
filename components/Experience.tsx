"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Pooltable1 from "../public/assets/Activities/pool.jpg";
import Bar from "../public/assets/Bar/DSC02396.jpg";
import cozycorners from "@/public/assets/CozyCorners/K81A0416-HDR.png";
import Pool from "../public/assets/Pool/DSC02149.jpg";
import Skydeck from "../public/assets/OpenDeck/DSC02105.jpg";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

interface Facility {
  title: string;
  image: StaticImageData;
  link: string;
  description: string;
  features: string[];
}

export const facilitiesData: Facility[] = [
  {
    title: "Activities",
    image: Pooltable1,
    link: "Activities",
    description:
      "Experience a wide range of thrilling activities amidst the beautiful Kasauli hills.",
    features: ["Indoor Games Room", "Modern Fitness Center"],
  },
  {
    title: "Bar",
    image: Bar,
    link: "Bar",
    description:
      "Enjoy premium spirits and stunning views at our sophisticated Cliffhouzz Bar.",
    features: [
      "Curated selection of fine whiskeys",
      "Signature cocktails",
      "Panoramic mountain vistas",
      "Evening ambiance",
    ],
  },

  {
    title: "Pool Area",
    image: Pool,
    link: "PoolSide",
    description:
      "Dive into serenity at our exquisite poolside retreat surrounded by nature.",
    features: [
      "Temperature-controlled pool",
      "Comfortable loungers",
      "Poolside service",
      "Lush greenery surroundings",
    ],
  },
  {
    title: "Sky Deck",
    image: Skydeck,
    link: "SkyDeck",
    description:
      "Experience dining at its finest with breathtaking views of Kasauli hills.",
    features: [
      "Open-air dining",
      "Panoramic vistas",
      "Fine cuisine",
      "Perfect for special events",
    ],
  },
  {
    title: "Cozy Corners",
    image: cozycorners,
    link: "CozyCorners",
    description:
      "Discover intimate spaces designed for memorable moments and relaxation.",
    features: [
      "Fireside conversations",
      "Private dining setups",
      "Starlight experiences",
      "Themed comfort zones",
    ],
  },
];

const ResortExperiences: React.FC = () => {
  const [currentExperience, setCurrentExperience] = useState(0);

  const nextExperience = () => {
    setCurrentExperience((prev) => (prev + 1) % facilitiesData.length);
  };

  const prevExperience = () => {
    setCurrentExperience(
      (prev) => (prev - 1 + facilitiesData.length) % facilitiesData.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextExperience();
    }, 5000); // Change experience every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#faf9f6] py-16 px-4 md:px-0">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl text-center text-emerald-800 mb-12 ${playfair.className}`}
        >
          Resort Facilities
        </h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={facilitiesData[currentExperience].title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="w-full md:w-1/2 aspect-video relative overflow-hidden rounded-lg shadow-xl">
                <Image
                  src={facilitiesData[currentExperience].image}
                  alt={facilitiesData[currentExperience].title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3
                  className={`text-3xl text-emerald-700 ${playfair.className}`}
                >
                  {facilitiesData[currentExperience].title}
                </h3>
                <p className={`text-gray-600 ${inter.className}`}>
                  {facilitiesData[currentExperience].description}
                </p>
                <ul className={`space-y-2 ${inter.className}`}>
                  {facilitiesData[currentExperience].features.map(
                    (feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center text-gray-700"
                      >
                        <ChevronRight className="w-5 h-5 text-emerald-500 mr-2" />
                        {feature}
                      </motion.li>
                    )
                  )}
                </ul>
                <Link
                  href={`/${facilitiesData[currentExperience].link}`}
                  className={`inline-block bg-emerald-600 text-white px-6 py-2 rounded-full transition-colors hover:bg-emerald-700 ${inter.className}`}
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {facilitiesData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentExperience(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentExperience === index
                  ? "bg-emerald-600 scale-125"
                  : "bg-emerald-200"
              }`}
              aria-label={`Go to facility ${index + 1}`}
            />
          ))}
        </div>
        <div className="w-full flex justify-center align-middle items-center gap-8 mt-9">
          <button
            onClick={prevExperience}
            className="bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300"
            aria-label="Previous facility"
          >
            <ChevronLeft className="w-6 h-6 text-emerald-700" />
          </button>
          <button
            onClick={nextExperience}
            className="bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300"
            aria-label="Next facility"
          >
            <ChevronRight className="w-6 h-6 text-emerald-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResortExperiences;
