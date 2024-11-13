"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { Wine, Clock, Mountain, Star } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"] });

export default function BarPage() {
  const features = [
    {
      icon: Wine,
      title: "Premium Spirits",
      description:
        "Curated selection of fine whiskeys and international spirits",
    },
    {
      icon: Mountain,
      title: "Stunning Views",
      description: "Panoramic mountain vistas while you enjoy your drink",
    },
    {
      icon: Star,
      title: "Signature Cocktails",
      description: "Expertly crafted cocktails by our skilled bartenders",
    },
    {
      icon: Clock,
      title: "Evening Ambiance",
      description: "Perfect setting for a relaxing evening",
    },
  ];

  return (
    <div className="min-h-screen md:p-20 ">
      <section className="relative h-[100vh]  ">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EXXOidiR39HAKxAchQAj8YDKWYmjK5.png"
          alt="Cliffhouzz Bar"
          layout="fill"
          objectFit="cover"
          priority
          className=""
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1
              className={`text-5xl md:text-6xl font-bold mb-4 ${playfair.className}`}
            >
              Cliffhouzz Bar
            </h1>
            <p className="text-xl mb-8">Sip & Savor with Stunning Views</p>
            <Button
              size="lg"
              className="bg-emerald-800 hover:bg-emerald-700 text-white"
            >
              View Menu
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
              A Premium Bar Experience
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover our sophisticated bar where premium spirits meet
              breathtaking views. Unwind in an atmosphere of refined comfort
              while our expert bartenders craft the perfect drink for your
              evening.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EXXOidiR39HAKxAchQAj8YDKWYmjK5.png"
                  alt="Bar interior"
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
                The Perfect Pour
              </h3>
              <p className="text-gray-700 mb-8">
                At Cliffhouzz Bar, we take pride in our carefully curated
                selection of spirits. From premium whiskeys to craft cocktails,
                each drink is prepared with precision and served in an
                atmosphere that combines rustic charm with modern
                sophistication.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <feature.icon className="w-8 h-8 text-emerald-800 mb-2" />
                    <h4
                      className={`font-semibold text-emerald-600 mb-1 ${playfair.className}`}
                    >
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-emerald-800 p-6 rounded-lg">
              <h3
                className={`text-2xl ${playfair.className} text-emerald-400 mb-4`}
              >
                Signature Drinks
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>Mountain Sunset Martini</li>
                <li>Himalayan Mule</li>
                <li>Kasauli Collins</li>
                <li>Cedar Forest Old Fashioned</li>
              </ul>
            </div>
            <div className="bg-emerald-800 p-6 rounded-lg">
              <h3
                className={`text-2xl ${playfair.className} text-emerald-400 mb-4`}
              >
                Premium Whiskeys
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>100 Pipers Deluxe</li>
                <li>Single Malt Selection</li>
                <li>Rare Scotch Collection</li>
                <li>Japanese Whisky Specials</li>
              </ul>
            </div>
            <div className="bg-emerald-800 p-6 rounded-lg">
              <h3
                className={`text-2xl ${playfair.className} text-emerald-400 mb-4`}
              >
                Bar Bites
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>Himalayan Tapas</li>
                <li>Spiced Nuts Medley</li>
                <li>Grilled Appetizers</li>
                <li>Chef&apos;s Special Platters</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-emerald-800 rounded-xl ">
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className={`text-4xl ${playfair.className} text-emerald-400 mb-6`}
            >
              Bar Hours
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Open daily from 4:00 PM to 11:00 PM
            </p>
            <div className="max-w-xl mx-auto text-center mb-8 text-gray-400">
              <p className="mb-4">Happy Hours: 4:00 PM to 7:00 PM daily</p>
              <p>
                Reservations recommended for groups of 6 or more. Live music on
                weekends.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-emerald-300 text-gray-900 hover:bg-emerald-600"
            >
              Make a Reservation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
