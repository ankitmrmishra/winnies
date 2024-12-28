import React from "react";
import { Playfair_Display } from "next/font/google";
import { Bell, Dumbbell, Hotel, Monitor, Shield, TreePine } from "lucide-react";
import { GiRobe } from "react-icons/gi";

const playfair = Playfair_Display({ subsets: ["latin"] });

const amenities = [
  {
    icon: <GiRobe className="w-8 h-8 text-[#C5B358]" />,
    title: "Spa",
    description:
      "Experience pure relaxation with our luxurious spa treatments and tailored wellness rituals.",
  },
  {
    icon: <Dumbbell className="w-8 h-8 text-[#C5B358]" />,
    title: "Fitness center",
    description:
      "Advanced equipment and premium facilities designed for your ultimate workout experience.",
  },
  {
    icon: <Monitor className="w-8 h-8 text-[#C5B358]" />,
    title: "Conference rooms",
    description:
      "Professional meeting spaces enhanced with modern amenities for seamless productivity.",
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
    description:
      "Safety is our priority with 24/7 security, giving you comfort day and night.",
  },
  {
    icon: <Bell className="w-8 h-8 text-[#C5B358]" />,
    title: "Reception 24/7",
    description:
      "Available whenever you need, committed to making your experience smooth and enjoyable.",
  },
  {
    icon: <Hotel className="w-8 h-8 text-[#C5B358]" />,
    title: "65 Rooms",
    description:
      "Enjoy comfort in tastefully furnished rooms crafted to provide warmth, relaxation, and a memorable stay.",
  },
  {
    icon: <GiRobe className="w-8 h-8 text-[#C5B358]" />,
    title: "9 Amenities",
    description:
      "Enhance your stay with our diverse facilities, designed to cater to every need and desire.",
  },
  {
    icon: <TreePine className="w-8 h-8 text-[#C5B358]" />,
    title: "12 Nature Sights",
    description:
      "Discover stunning natural attractions just moments away, where breathtaking beauty awaits right outside your door.",
  },
];

function Amenities() {
  return (
    <div className="bg-[#faf9f6] lg:px-24 md:px-10 px-3 py-16">
      <h2
        className={`text-4xl md:text-5xl text-center text-emerald-800 font-heading mb-12 ${playfair.className}`}
      >
        Amenities & Facilities
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-9 md:gap-6 gap-1 w-[85vw]  md:w-[85rem]">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="bg-green-800 rounded-lg p-6 transition-transform hover:scale-[1.02] hover:-translate-y-4 ease-in-out duration-500 hover:bg-white w-40 border border-white hover:border-green-800 group"
          >
            <div className="flex text-center flex-col justify-center align-middle items-center ">
              <div className="flex-shrink-0">{amenity.icon}</div>
              <h3
                className={`text-2xl font-semibold text-white group-hover:text-green-800 ease-in-out duration-100  ${playfair.className}`}
              >
                {amenity.title}
              </h3>
              {/* <div className="space-y-2">
                <h3
                  className={`text-2xl font-semibold text-emerald-800 ${playfair.className}`}
                >
                  {amenity.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {amenity.description}
                </p>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Amenities;
