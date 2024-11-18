"use client";
import React from "react";

import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { About } from "./About";
import { Prompt } from "next/font/google";
import Image from "next/image";
const japan_sans = Prompt({
  subsets: ["thai"],
  weight: ["500"],
});

import MainImage from "../public/assets/MainImage.jpg";

export const HeroComponent = () => {
  return (
    <div className=" md:h-[200vh]  relative -z-50  ">
      <div className="h-screen sticky inset-0 top-0 ">
        <Image
          src={MainImage}
          alt="Winnies Resort"
          layout="fill"
          objectFit="cover"
          priority
          className=" object-cover w-full h-full absolute inset-0 top-0  "
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Hero Content */}
        <div className="absolute bottom-16 left-6 md:left-20 text-white z-40">
          <h1
            className={`text-4xl md:text-8xl  font-bold mb-4 ${japan_sans.className}`}
          >
            Luxury Awaits <br />
            in <span className="text-emerald-500">Kasauli</span>
          </h1>
          <p className="text-xl md:text-4xl mb-8">
            Discover serenity at{" "}
            <span className="text-emerald-400">Winnies Resort</span>
          </p>
          <Button className="bg-emerald-700 text-white hover:bg-emerald-500">
            Book Now
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent md:h-96 h-4 " />
      </div>
      <About />
    </div>
  );
};
