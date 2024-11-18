"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { Cloud, Sunset, Users, UtensilsCrossed } from "lucide-react";
import Skydeck from "../../public/assets/OpenDeck/DSC02105.jpg";
import Skydeck1 from "../../public/assets/OpenDeck/DSC02106.jpg";

const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"] });

export default function SkyDeckPage() {
  const features = [
    {
      icon: Sunset,
      title: "Panoramic Views",
      description: "Breathtaking vistas of Kasauli hills",
    },
    {
      icon: Cloud,
      title: "Open Air Dining",
      description: "Fresh mountain air and natural ambiance",
    },
    {
      icon: UtensilsCrossed,
      title: "Fine Dining",
      description: "Exquisite cuisine under the sky",
    },
    {
      icon: Users,
      title: "Event Space",
      description: "Perfect for celebrations and gatherings",
    },
  ];

  return (
    <div className="min-h-screen ">
      <section className="relative h-[100vh]">
        <Image
          src={Skydeck}
          alt="Open Sky Deck"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">The Open Sky Deck</h1>
            <p className="text-xl mb-8">Bask in Nature&apos;s Splendor</p>
            <Button
              size="lg"
              className="text-white border-white bg-emerald-800 hover:bg-white hover:text-black"
            >
              Reserve Your Table
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:px-20">
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
              Dine Under the Stars
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Experience dining at its finest at our Open Sky Deck, where
              culinary excellence meets breathtaking views. Whether you&apos;re
              planning a romantic dinner or a special celebration, our outdoor
              venue provides the perfect backdrop for memorable moments.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:px-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className={`text-4xl ${playfair.className} text-emerald-800 mb-6`}
              >
                A Unique Dining Experience
              </h2>
              <p className="text-gray-700 mb-8">
                Our Open Sky Deck offers an unparalleled dining experience with
                panoramic views of the Kasauli hills. The carefully curated
                ambiance combines natural beauty with elegant comfort, creating
                the perfect setting for any occasion.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <feature.icon className="w-8 h-8 text-emerald-600 mb-2" />
                    <h3
                      className={`text-lg font-semibold mb-1 ${playfair.className} text-emerald-800`}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={Skydeck1}
                alt="Dining setup with mountain view"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-50 rounded-2xl md:px-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className={`md:text-7xl text-5xl ${playfair.className} text-emerald-800 text-center md:py-10 py-5`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Perfect for Every Occasion
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Romantic Dinners",
                description: "Intimate setting with stunning sunset views",
              },
              {
                title: "Private Events",
                description: "Customizable space for special celebrations",
              },
              {
                title: "Corporate Gatherings",
                description: "Unique venue for business meetings and events",
              },
            ].map((occasion, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <h3
                  className={`text-xl font-semibold mb-2 ${playfair.className} text-emerald-800`}
                >
                  {occasion.title}
                </h3>
                <p className="text-gray-600">{occasion.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:px-20">
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
              Make a Reservation
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join us for an unforgettable dining experience under the open sky.
              Advance reservations recommended.
            </p>
            <Button
              size="lg"
              className="text-white bg-emerald-800 hover:bg-emerald-700"
            >
              Book Your Table
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
