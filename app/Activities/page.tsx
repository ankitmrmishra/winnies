"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { Mountain, GamepadIcon, Dumbbell } from "lucide-react";
import Gym1 from "../../public/assets/Activities/gym.jpg";
import Gym2 from "../../public/assets/Activities/gym2.jpg";
// import Gym3 from "../../public/assets/Activities/gym3.jpg";
import Pooltable1 from "../../public/assets/Activities/pool.jpg";
// import Pooltable2 from "../../public/assets/Activities/pool2.jpg";
// import Pooltable3 from "../../public/assets/Activities/pool3.jpg";
// import childrenplay from "../../public/assets/Activities/childrenplay.jpg";
import ftbl from "../../public/assets/Activities/ftbl.jpg";
// import Manwalking from "../../public/assets/Activities/Manwalking.jpg";
// import Manwalking2 from "../../public/assets/Activities/ManWalking2.jpg";
import ropewalking from "../../public/assets/Activities/ropewalking.jpg";
import ropewalking1 from "../../public/assets/Activities/ropewalking1.jpg";
// import ropewalking2 from "../../public/assets/Activities/ropewalking2.jpg";
// import ropewalking3 from "../../public/assets/Activities/ropewalking3.jpg";
// import tt from "../../public/assets/Activities/tt.jpg";
const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"] });

export default function ActivitiesPage() {
  const activities = [
    {
      category: "Adventure Activities",
      icon: Mountain,
      description:
        "Test your limits with exhilarating outdoor activities, surrounded by majestic mountain views",
      items: [
        {
          title: "High Ropes Course",
          description:
            "Conquer your fears on our high ropes course, with expert instructors and fully secure safety equipment.",
          image: ropewalking,
        },
        // {
        //   title: "Children's Play Area",
        //   description:
        //     "A safe and fun environment for children to play and explore.",
        //   image: childrenplay,
        // },
      ],
    },
    {
      category: "Indoor Recreation",
      icon: GamepadIcon,
      description:
        "Explore our diverse indoor games and recreational spaces, crafted for maximum fun and leisure.",
      items: [
        {
          title: "Games Room",
          description:
            "Gather your friends and family for a friendly foosball showdown and other thrilling games of fun!",
          image: ftbl,
        },
        {
          title: "Billiards Room",
          description:
            "Step into an elegant pool room, where professional tables meet a refined, sophisticated atmosphere for ultimate enjoyment.",
          image: Pooltable1,
        },
      ],
    },
    {
      category: "Fitness Center",
      icon: Dumbbell,
      description:
        "Stay fit during your vacation in our well-equipped fitness centre",
      items: [
        {
          title: "Modern Gym",
          description:
            "Achieve your best with cutting-edge equipment for a complete workout experience.",
          image: Gym1,
        },

        {
          title: "High-Performance Gym",
          description:
            "Elevate your fitness journey with advanced training zones and personalized workout options.",
          image: Gym2,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen  ">
      <section className="relative h-[100vh]">
        <Image
          src={ropewalking1}
          alt="Adventure Activities at Winnies"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className={`text-5xl md:text-6xl font-bold mb-4 `}>
              Activities & Adventures
            </h1>
            <p className="text-xl mb-8">Experience surprises at each step</p>
            <Button
              size="lg"
              className="bg-emerald-800 hover:bg-emerald-700 text-white"
            >
              Explore Activities
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-0">
        <div className="container mx-auto max-w-6xl">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-center mb-12">
                <activity.icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h2
                  className={`text-4xl ${playfair.className} text-emerald-800 mb-4`}
                >
                  {activity.category}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {activity.description}
                </p>
              </div>

              <div className="flex flex-wrap justify-center align-middle items-center gap-8">
                {activity.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2 + itemIndex * 0.1,
                    }}
                  >
                    <div className="relative h-64">
                      <Image
                        src={item.image}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="p-6">
                      <h3
                        className={`text-xl font-semibold mb-2 ${playfair.className} text-emerald-800`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <div className="md:px-20 ">
        <section className="py-20 rounded-2xl bg-emerald-800 text-white ">
          <div className="container mx-auto max-w-5xl px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={`text-4xl ${playfair.className} mb-6`}>
                Ready for Adventure?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Whether you seek thrilling outdoor activities or relaxing indoor
                recreation, Winnies Resort has something for everyone.
              </p>
              <Button
                size="lg"
                className="bg-white text-emerald-800 hover:bg-gray-100"
              >
                Book Your Adventure
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
