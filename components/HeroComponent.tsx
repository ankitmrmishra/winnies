"use client";
import React from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"] });

import MainImage from "../public/WINNIWS.jpg";
import { useRouter } from "next/navigation";

export const HeroComponent = () => {
  const router = useRouter();
  return (
    <div className="h-screen relative">
      <Image
        src={MainImage}
        alt="Winnies Resort"
        width={1000}
        height={1000}
        priority
        className="object-cover w-full h-full inset-0 top-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <div className="absolute md:bottom-16 bottom-40 left-6 md:left-20 text-white z-40">
        <h1
          className={`text-4xl md:text-6xl font-bold mb-4 ${playfair.className}`}
        >
          Luxury Awaits <br />
          in <span className="text-emerald-500">Kasauli</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Discover serenity at{" "}
          <span className="text-emerald-400">Winnies Resort</span>
        </p>
        <Button
          onClick={() =>
            router.push(
              "https://bookings.resavenue.com/resBooking/availsearch?regCode=GATE0402"
            )
          }
          className=" bg-emerald-800 hover:bg-emerald-700 text-white"
        >
          Book Now
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent md:h-96 h-4 " />
    </div>
  );
};
