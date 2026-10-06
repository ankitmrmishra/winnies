"use client";
import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";

const playfair = Playfair_Display({ subsets: ["latin"] });

import MainImage from "../public/WinniesHeaderNew.png";

export const HeroComponent = () => {
  return (
    <div className="relative overflow-hidden mt-20">
      {/* Hero Container - auto height on mobile, full screen on desktop */}
      <div className="h-[40vh] md:h-screen relative">
        <Image
          src={MainImage}
          alt="Winnies Resort"
          width={1920}
          height={1080}
          priority
          className="object-cover w-full h-full absolute inset-0"
        />

        {/* Modern gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* Animated content - positioned at top */}
        <div className="absolute top-0 left-0 right-0 pt-12 md:pt-24 flex justify-center">
          <div className="text-center text-white z-40 px-6 max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`text-3xl md:text-6xl font-bold mb-3 md:mb-6 ${playfair.className} leading-tight text-white`}
            >
              Winnies Holiday Resort & Spa
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base md:text-2xl text-gray-200 max-w-2xl mx-auto"
            >
              Kasauli, Himachal Pradesh
            </motion.p>
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000000] to-transparent" />
      </div>
    </div>
  );
};
