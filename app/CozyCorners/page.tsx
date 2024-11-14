"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { Flame, Moon, Wine, Star } from "lucide-react";
import cozycorners from "@/public/assets/CozyCorners/K81A0416-HDR.png";
import jamison from "@/public/assets/CozyCorners/image.png";

import SD from "@/public/assets/CozyCorners/SD.png";

const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"] });

export default function CozyCornersPage() {
  const features = [
    {
      icon: Flame,
      title: "Bonfire Experience",
      description: "Warm, crackling fires under the stars",
    },
    {
      icon: Moon,
      title: "Evening Ambiance",
      description: "Magical lighting and mountain views",
    },
    {
      icon: Wine,
      title: "Private Dining",
      description: "Intimate dining setups for two",
    },
    {
      icon: Star,
      title: "Themed Spaces",
      description: "Uniquely designed comfort zones",
    },
  ];

  return (
    <div className="min-h-screen md:p-20">
      <section className="relative h-[100vh]">
        <Image
          src={cozycorners}
          alt="Cozy Corner at Night"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Cozy Corners</h1>
            <p className="text-xl mb-8">Your Personal Nook of Comfort</p>
            <Button
              size="lg"
              className="text-white border-white bg-emerald-800 hover:bg-white hover:text-black"
            >
              Reserve Your Corner
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className={`md:text-7xl text-5xl ${playfair.className} text-emerald-800 text-center md:py-10 py-5`}
            >
              Find Your Perfect Spot
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Discover intimate spaces designed for memorable moments. Whether
              you&apos;re planning a romantic evening or seeking a peaceful
              retreat, our Cozy Corners offer the perfect setting under the
              stars.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:px-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="relative h-96 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={jamison}
                alt="Jameson Corner"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className={`text-2xl ${playfair.className} mb-2`}>
                    The Jameson Corner
                  </h3>
                  <p>Fireside conversations with premium spirits</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative h-96 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src={SD}
                alt="Romantic Dining Setup"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className={`text-2xl ${playfair.className} mb-2`}>
                    Starlight Dining
                  </h3>
                  <p>Private dining under the night sky</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative h-96 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Image
                src={cozycorners}
                alt="Evening Firepit"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className={`text-2xl ${playfair.className} mb-2`}>
                    Firepit Lounge
                  </h3>
                  <p>Cozy evenings by the warmth of the fire</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-50 rounded-2xl">
        <div className="container mx-auto px-4">
          <motion.h2
            className={`md:text-7xl text-5xl ${playfair.className} text-emerald-800 text-center md:py-10 py-5`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Experience Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <feature.icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3
                  className={`text-xl font-semibold mb-2 ${playfair.className} text-emerald-800`}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className={`text-4xl ${playfair.className} text-emerald-800 mb-6`}
            >
              Book Your Experience
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Create unforgettable moments in your own private corner of
              comfort. Advance reservations recommended.
            </p>
            <Button
              size="lg"
              className="text-white bg-emerald-800 hover:bg-emerald-700"
            >
              Make a Reservation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
