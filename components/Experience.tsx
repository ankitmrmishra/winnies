"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google";
import { ChevronRight, ChevronLeft } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

interface Experience {
  id: string;
  title: string;
  description: string;
  activities: string[];
  image: string;
}

const experiences: Experience[] = [
  {
    id: "nature",
    title: "Nature Immersion",
    description:
      "Reconnect with the natural world through our curated outdoor experiences.",
    activities: [
      "Forest Bathing",
      "Guided Nature Walks",
      "Birdwatching Tours",
      "Stargazing Nights",
    ],
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=80",
  },
  {
    id: "wellness",
    title: "Wellness & Relaxation",
    description:
      "Rejuvenate your body and mind with our range of wellness activities.",
    activities: [
      "Yoga Retreats",
      "Meditation Sessions",
      "Spa Treatments",
      "Hot Spring Soaks",
    ],
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=80",
  },
  {
    id: "adventure",
    title: "Adventure Pursuits",
    description:
      "Challenge yourself with exciting outdoor adventures in breathtaking landscapes.",
    activities: [
      "Mountain Biking",
      "Rock Climbing",
      "Whitewater Rafting",
      "Zip-lining",
    ],
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=80",
  },
  {
    id: "culinary",
    title: "Culinary Delights",
    description:
      "Embark on a gastronomic journey with our farm-to-table experiences.",
    activities: [
      "Cooking Classes",
      "Wine Tasting",
      "Foraging Expeditions",
      "Gourmet Dinners",
    ],
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=80",
  },
];

const ResortExperiences: React.FC = () => {
  const [currentExperience, setCurrentExperience] = useState(0);

  const nextExperience = () => {
    setCurrentExperience((prev) => (prev + 1) % experiences.length);
  };

  const prevExperience = () => {
    setCurrentExperience(
      (prev) => (prev - 1 + experiences.length) % experiences.length
    );
  };

  return (
    <section className="bg-[#faf9f6] py-16 px-4 md:px-0">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl text-center text-emerald-800 mb-12 ${playfair.className}`}
        >
          Unforgettable Experiences
        </h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={experiences[currentExperience].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="w-full md:w-1/2 aspect-video relative overflow-hidden rounded-lg shadow-xl">
                <motion.img
                  src={experiences[currentExperience].image}
                  alt={experiences[currentExperience].title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3
                  className={`text-3xl text-emerald-700 ${playfair.className}`}
                >
                  {experiences[currentExperience].title}
                </h3>
                <p className={`text-lg text-gray-600 ${inter.className}`}>
                  {experiences[currentExperience].description}
                </p>
                <ul className={`space-y-2 ${inter.className}`}>
                  {experiences[currentExperience].activities.map((activity) => (
                    <motion.li
                      key={activity}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center text-gray-700"
                    >
                      <ChevronRight className="w-5 h-5 text-emerald-500 mr-2" />
                      {activity}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentExperience(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentExperience === index
                  ? "bg-emerald-600 scale-125"
                  : "bg-emerald-200"
              }`}
              aria-label={`Go to experience ${index + 1}`}
            />
          ))}
        </div>
        <div className="w-full flex justify-center align-middle items-center gap-8 mt-9">
          <button
            onClick={prevExperience}
            className="  bg-opacity-50 hover:bg-opacity-75 rounded-full p-2  transition-all duration-300"
            aria-label="Previous experience"
          >
            <ChevronLeft className="w-6 h-6 text-emerald-700" />
          </button>
          <button
            onClick={nextExperience}
            className="left-28 transform   bg-opacity-50 hover:bg-opacity-75 rounded-full p-2  transition-all duration-300"
            aria-label="Next experience"
          >
            <ChevronRight className="w-6 h-6 text-emerald-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResortExperiences;
