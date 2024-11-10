import React from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const playfairItalic = Playfair_Display({
  style: ["italic"],
  subsets: ["cyrillic"],
});

import { Bell, Dumbbell, Hotel, Monitor, Shield, TreePine } from "lucide-react";
import { GiRobe } from "react-icons/gi";

function Amenities() {
  return (
    <div className="bg-[#faf9f6] lg:px-24 md:px-10 px-3 py-16">
      <h3
        className={`text-5xl italic md:text-7xl text-center text-emerald-800 font-heading md:mb-6 mb-4 ${playfair.className}`}
      >
        Amenities & Facilities
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 transition-transform hover:scale-[1.02]"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">{amenity.icon}</div>
              <div className="space-y-2">
                <h3
                  className={`text-2xl font-semibold text-emerald-800 italic ${playfairItalic.className}`}
                >
                  {amenity.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Amenities;

const amenities = [
  {
    icon: <GiRobe className="w-8 h-8 text-[#C5B358]" />,
    title: "Spa",
    description:
      "Luxurious spa treatments and wellness services for complete relaxation.",
  },
  {
    icon: <Dumbbell className="w-8 h-8 text-[#C5B358]" />,
    title: "Fitness center",
    description:
      "State-of-the-art equipment and facilities for your workout needs.",
  },
  {
    icon: <Monitor className="w-8 h-8 text-[#C5B358]" />,
    title: "Conference rooms",
    description: "Professional meeting spaces equipped with modern amenities.",
  },
  {
    icon: <Hotel className="w-8 h-8 text-[#C5B358]" />,
    title: "Room service",
    description:
      "24/7 in-room dining and housekeeping services for your comfort.",
  },
  {
    icon: <Shield className="w-8 h-8 text-[#C5B358]" />,
    title: "Security 24/7",
    description: "Round-the-clock security for your peace of mind.",
  },
  {
    icon: <Bell className="w-8 h-8 text-[#C5B358]" />,
    title: "Reception 24/7",
    description: "Always available to assist you with any requests.",
  },
  {
    icon: <Hotel className="w-8 h-8 text-[#C5B358]" />,
    title: "28 Rooms",
    description: "Comfortable and well-appointed rooms for your stay.",
  },
  {
    icon: <GiRobe className="w-8 h-8 text-[#C5B358]" />,
    title: "9 Amenities",
    description: "Comprehensive facilities for an enhanced stay experience.",
  },
  {
    icon: <TreePine className="w-8 h-8 text-[#C5B358]" />,
    title: "12 Nature Sights",
    description: "Beautiful natural attractions in close proximity.",
  },
];
