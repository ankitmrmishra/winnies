"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
// import { Waves, Sun, Umbrella, TreePine } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"] });

export default function PoolsidePage() {
  // const features = [
  //   {
  //     icon: Waves,
  //     title: "Temperature Controlled Pool",
  //     description:
  //       "Perfect water temperature maintained year-round for your comfort",
  //   },
  //   {
  //     icon: Sun,
  //     title: "Sunbathing Deck",
  //     description: "Comfortable loungers for soaking up the mountain sun",
  //   },
  //   {
  //     icon: Umbrella,
  //     title: "Poolside Service",
  //     description: "Refreshments and snacks delivered right to your lounger",
  //   },
  //   {
  //     icon: TreePine,
  //     title: "Natural Surroundings",
  //     description:
  //       "Lush greenery and flowering plants create a tropical paradise",
  //   },
  // ];

  return (
    <div className="min-h-screen md:p-20">
      <section className="relative h-[80vh]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ljhgq27b0O2qgXHXl3xFmJ6MLUtcnT.png"
          alt="Poolside at Winnies Resort"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1
              className={`text-5xl md:text-6xl font-bold mb-4 ${playfair.className}`}
            >
              The Poolside Escape
            </h1>
            <p className="text-xl mb-8">Dive Into Relaxation</p>
            <Button
              size="lg"
              className="bg-emerald-800 hover:bg-emerald-700 text-white"
            >
              Book Your Stay
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-0">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className={`text-4xl ${playfair.className} text-emerald-800 mb-6`}
            >
              A Serene Oasis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Immerse yourself in tranquility at our stunning poolside retreat,
              where nature meets luxury in perfect harmony. Surrounded by lush
              greenery and mountain views, our pool area offers the perfect
              escape.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ljhgq27b0O2qgXHXl3xFmJ6MLUtcnT.png"
                  alt="Pool with waterfall"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ljhgq27b0O2qgXHXl3xFmJ6MLUtcnT.png"
                  alt="Poolside loungers"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <h3
                className={`text-3xl ${playfair.className} text-emerald-800 mb-6`}
              >
                Luxury Meets Nature
              </h3>
              <p className="text-gray-600 mb-8">
                Our thoughtfully designed pool area combines elegant comfort
                with natural beauty. The crystal-clear waters invite you to take
                a refreshing dip, while the surrounding deck offers plenty of
                space for relaxation. The gentle sound of the waterfall creates
                the perfect ambiance for your poolside retreat.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {/* {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <feature.icon className="w-8 h-8 text-emerald-600 mb-2" />
                    <h4 className="font-semibold text-emerald-800 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </motion.div>
                ))} */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-800 text-white">
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-4xl ${playfair.className} mb-6`}>
              Pool Hours
            </h2>
            <p className="text-xl mb-8">Open daily from 7:00 AM to 7:00 PM</p>
            <div className="max-w-xl mx-auto text-center mb-8">
              <p className="mb-4">
                Enjoy our temperature-controlled pool year-round. Poolside
                service is available from 10:00 AM to 6:00 PM for your comfort
                and convenience.
              </p>
              <p>
                For your safety, children under 12 must be accompanied by an
                adult. Professional lifeguard on duty during operational hours.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-white text-emerald-800 hover:bg-gray-100"
            >
              View Pool Guidelines
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}