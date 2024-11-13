"use client";

import React from "react";
import { Moon, Sun, Mountain, Wind, Droplets } from "lucide-react";
import { Playfair_Display, Inter } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

interface Experience {
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
}

const experiences: Experience[] = [
  {
    title: "Stargazing Suites",
    description:
      "Drift into dreams beneath a canopy of stars in our glass-roofed luxury suites, where the night sky becomes your ceiling and every moment feels magical",
    icon: Moon,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Sunrise Yoga",
    description:
      "Rise with the sun and embrace the calm of dawn through empowering yoga, where every breath draws you closer to nature and inner peace.",
    icon: Sun,
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Mountain Trails",
    description:
      "Discover hidden paths and scenic routes that open up to stunning horizons, offering an unforgettable journey through nature’s finest views.",
    icon: Mountain,
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Forest Bathing",
    description:
      "Let the ancient forest cradle you in its quiet strength, where each towering tree and gentle play of light invites you to reconnect and rejuvenate.",
    icon: Wind,
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Natural Springs",
    description:
      "Sink into the warmth of our mineral-packed hot springs, where nature’s healing waters envelop you, offering a restorative escape for body and soul.",
    icon: Droplets,
    image:
      "https://images.unsplash.com/photo-1576020799627-aeac74d58064?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2127&q=80",
  },
];

const ExperiencesGrid = () => {
  return (
    <div className="bg-[#faf9f6] px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <h2
          className={`text-3xl sm:text-5xl lg:text-6xl italic text-center text-emerald-800 font-heading mb-12 sm:mb-16 ${playfair.className}`}
        >
          Unforgettable Experiences
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-64 sm:h-80">
                <Image
                  width={400}
                  height={400}
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <exp.icon className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-emerald-800 mb-3">
                  {exp.title}
                </h3>
                <p className={`text-gray-600 ${inter.className}`}>
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencesGrid;
