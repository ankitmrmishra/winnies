"use client";

import { ChevronRight } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";
import Spa3 from "../public/assets/Spa/Spa2.png";
import Restaurant3 from "../public/assets/Restaurant/DSC02113.jpg";
import Room from "../public/assets/PREMIUM ROOMS/room1.png";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const OurMVPS = () => {
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col justify-between align-middle items-start">
          <div className="relative h-48 w-full">
            <Image
              src={Room}
              alt="Luxurious room interior"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <CardContent className="p-6">
            <h3
              className={`${playfair.className} text-2xl text-emerald-800 mb-4`}
            >
              Luxurious Accommodations
            </h3>
            <p className="text-gray-600 mb-4">
              Indulge in our spacious, well-appointed rooms and suites, each
              designed to provide ultimate comfort and relaxation. Enjoy modern
              amenities and breathtaking views of the surrounding hills.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href={"/rooms"}
              className="text-emerald-700 hover:text-emerald-900 p-0 flex justify-center align-middle items-center"
            >
              Explore Rooms
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </CardFooter>
        </Card>
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col justify-between align-middle items-start">
          <div className="relative h-48 w-full">
            <Image
              src={Restaurant3}
              alt="Elegant dining area with a view"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <CardContent className="p-6">
            <h3
              className={`${playfair.className} text-2xl text-emerald-800 mb-4`}
            >
              Exquisite Dining
            </h3>
            <p className="text-gray-600 mb-4">
              Savor delectable cuisines at our on-site restaurants, featuring a
              blend of local and international flavors. Enjoy your meals with
              panoramic views of the Kasauli hills.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href={"/Restaurant"}
              className="text-emerald-700 hover:text-emerald-900 p-0 flex justify-center align-middle items-center"
            >
              Discover Dining Options
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </CardFooter>
        </Card>

        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col justify-between align-middle items-start">
          <div className="relative h-48 w-full">
            <Image
              src={Spa3}
              alt="Spa treatment room"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <CardContent className="p-6">
            <h3
              className={`${playfair.className} text-2xl text-emerald-800 mb-4`}
            >
              Rejuvenating Spa
            </h3>
            <p className="text-gray-600 mb-4">
              Pamper yourself at our world-class spa, offering a range of
              treatments inspired by ancient healing traditions. Let our expert
              therapists help you achieve total relaxation and wellness.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href={"/Spa"}
              className="text-emerald-700 hover:text-emerald-900 p-0 flex justify-center align-middle items-center"
            >
              View Spa Services
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
