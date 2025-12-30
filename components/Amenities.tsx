import React from "react";
import { Playfair_Display } from "next/font/google";

import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"] });

const amenities = [
  {
    icon: (
      <Image
        src={"/spaicons.png"}
        alt="spaicon"
        width={500}
        height={500}
        className="w-full h-full"
      />
    ),
    title: "Spa",
    description:
      "Experience pure relaxation with our luxurious spa treatments and tailored wellness rituals.",
  },
  {
    icon: (
      <Image
        src={"/gym.png"}
        alt="spaicon"
        width={500}
        height={500}
        className="w-full h-full"
      />
    ),
    title: "Fitness center",
    description:
      "Advanced equipment and premium facilities designed for your ultimate workout experience.",
  },
  {
    icon: (
      <Image
        src={"/confrence.png"}
        alt="spaicon"
        width={500}
        height={500}
        className="w-full h-full"
      />
    ),
    title: "Conference rooms",
    description:
      "Professional meeting spaces enhanced with modern amenities for seamless productivity.",
  },
  {
    icon: (
      <Image
        src={"/roomservice.png"}
        alt="spaicon"
        width={500}
        height={500}
        className="w-full h-full"
      />
    ),
    title: "Room service",
    description:
      "24/7 in-room dining and housekeeping services for your comfort.",
  },
  {
    icon: (
      <Image
        src={"/security.png"}
        alt="spaicon"
        width={500}
        height={500}
        className="w-full h-full"
      />
    ),
    title: "Security 24/7",
    description:
      "Safety is our priority with 24/7 security, giving you comfort day and night.",
  },
  {
    icon: (
      <Image
        src={"/reception.png"}
        alt="spaicon"
        width={500}
        height={500}
        className="w-full h-full"
      />
    ),
    title: "Reception 24/7",
    description:
      "Available whenever you need, committed to making your experience smooth and enjoyable.",
  },
  {
    icon: (
      <Image
        src={"/rooms.png"}
        alt="spaicon"
        width={500}
        height={500}
        className="w-full h-full"
      />
    ),
    title: "65 Rooms",
    description:
      "Enjoy comfort in tastefully furnished rooms crafted to provide warmth, relaxation, and a memorable stay.",
  },

  {
    icon: (
      <Image
        src={"/views.png"}
        alt="spaicon"
        width={500}
        height={500}
        className="w-full h-full"
      />
    ),
    title: "12 Nature Sights",
    description:
      "Discover stunning natural attractions just moments away, where breathtaking beauty awaits right outside your door.",
  },
];

function Amenities() {
  return (
    <div className="bg-[#faf9f6] lg:px-24 md:px-10 px-3 py-16 flex flex-col justify-center align-middle items-center">
      <h2
        className={`text-4xl md:text-5xl text-center text-emerald-800 font-heading mb-12 ${playfair.className}`}
      >
        Amenities & Facilities
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-6 gap-1 w-[85vw]  md:w-[40rem]">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className=" rounded-lg p-6 transition-transform hover:scale-[1.02] hover:-translate-y-4 ease-in-out duration-500 hover:border-green-800 group flex justify-center align-middle items-center"
          >
            <div className="flex text-center flex-col justify-center align-middle items-center ">
              <div className="flex-shrink-0 w-52 h-full">{amenity.icon}</div>
              <h3
                className={` text-lg font-semibold text-emerald-700 group-hover:text-green-800 ease-in-out duration-100  ${playfair.className}`}
              >
                {amenity.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Amenities;
