"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { Mountain, GamepadIcon, Dumbbell } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"] });

export default function ActivitiesPage() {
  const activities = [
    {
      category: "Adventure Activities",
      icon: Mountain,
      description:
        "Challenge yourself with our exciting outdoor activities set against the backdrop of stunning mountain views.",
      items: [
        {
          title: "High Ropes Course",
          description:
            "Test your courage on our professional high ropes course with safety equipment and trained instructors.",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kmRDnrBpcAlgMfO2dUJBOSTsEHI0DU.png",
        },
        {
          title: "Children's Play Area",
          description:
            "A safe and fun environment for children to play and explore.",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kmRDnrBpcAlgMfO2dUJBOSTsEHI0DU.png",
        },
      ],
    },
    {
      category: "Indoor Recreation",
      icon: GamepadIcon,
      description:
        "Enjoy our variety of indoor games and recreational facilities perfect for leisure time.",
      items: [
        {
          title: "Games Room",
          description:
            "Challenge friends and family to foosball and other exciting games.",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kmRDnrBpcAlgMfO2dUJBOSTsEHI0DU.png",
        },
        {
          title: "Billiards Room",
          description:
            "Elegant pool room with professional tables in a sophisticated setting.",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kmRDnrBpcAlgMfO2dUJBOSTsEHI0DU.png",
        },
      ],
    },
    {
      category: "Fitness Center",
      icon: Dumbbell,
      description:
        "Stay fit during your vacation in our well-equipped fitness center.",
      items: [
        {
          title: "Modern Gym",
          description:
            "State-of-the-art equipment for a complete workout experience.",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kmRDnrBpcAlgMfO2dUJBOSTsEHI0DU.png",
        },
        {
          title: "Modern Gym",
          description:
            "State-of-the-art equipment for a complete workout experience.",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kmRDnrBpcAlgMfO2dUJBOSTsEHI0DU.png",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen md:p-20 ">
      <section className="relative h-[80vh]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kmRDnrBpcAlgMfO2dUJBOSTsEHI0DU.png"
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
            <p className="text-xl mb-8">Discover excitement at every corner</p>
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

              <div className="grid md:grid-cols-2 gap-8">
                {activity.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
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
