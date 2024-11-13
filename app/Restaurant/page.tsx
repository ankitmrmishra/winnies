"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { Coffee, Moon, Sun, Star } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"] });

export default function RestaurantPage() {
  const features = [
    {
      icon: Coffee,
      title: "Breakfast",
      description:
        "Start your day with a delightful spread of local and international breakfast options.",
    },
    {
      icon: Sun,
      title: "Lunch",
      description:
        "Enjoy a leisurely lunch with a variety of dishes crafted from fresh, local ingredients.",
    },
    {
      icon: Moon,
      title: "Dinner",
      description:
        "Experience fine dining with our chef's special creations and breathtaking evening views.",
    },
    {
      icon: Star,
      title: "Signature Dishes",
      description:
        "Savor our unique fusion of local Himachali flavors with contemporary cuisine.",
    },
  ];

  return (
    <div className="min-h-screen md:p-20">
      <section className="relative min-h-screen">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Winnies Resort Restaurant"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className={`text-5xl md:text-6xl font-bold mb-4 `}>
              Dining at Winnies
            </h1>
            <p className="text-xl mb-8">
              Exquisite cuisine with a view to match
            </p>
            {/* <Button
              size="lg"
              className="bg-emerald-800 hover:bg-emerald-700 text-white"
            >
              Reserve a Table
            </Button> */}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-0">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className={`text-4xl md:text-5xl ${playfair.className} text-emerald-800 mb-6`}
            >
              A Culinary Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Winnies Holiday Resort&apos;s restaurant offers an unforgettable
              dining experience, combining elegant interiors, breathtaking
              views, and delectable cuisine that will tantalize your taste buds.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Elegant Restaurant Interior"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3
                className={`text-3xl ${playfair.className} text-emerald-800 mb-4`}
              >
                Elegant Interiors
              </h3>
              <p className="text-gray-600 mb-6">
                Step into our restaurant and be greeted by an atmosphere of
                refined elegance. The warm, inviting interiors create the
                perfect setting for a memorable dining experience, whether
                you&apos;re enjoying a romantic dinner or a family celebration.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-emerald-600 mr-2" />
                  Sophisticated decor with local touches
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-emerald-600 mr-2" />
                  Ambient lighting for a cozy atmosphere
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-emerald-600 mr-2" />
                  Comfortable seating for leisurely meals
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-2 md:order-1"
            >
              <h3
                className={`text-3xl ${playfair.className} text-emerald-800 mb-4`}
              >
                Majestic Views
              </h3>
              <p className="text-gray-600 mb-6">
                Dine with a backdrop of breathtaking vistas. Our restaurant
                offers panoramic views of the surrounding hills and reserve
                forest, creating an enchanting atmosphere that complements our
                exquisite cuisine.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-emerald-600 mr-2" />
                  Floor-to-ceiling windows for unobstructed views
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-emerald-600 mr-2" />
                  Outdoor seating area for al fresco dining
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-emerald-600 mr-2" />
                  Sunset views that create a magical ambiance
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="order-1 md:order-2"
            >
              <Image
                src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Majestic View from Restaurant"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className={`text-4xl ${playfair.className} text-emerald-800 mb-6`}
            >
              Culinary Delights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Indulge in a gastronomic adventure that celebrates local flavors
              and international cuisine. Our talented chefs craft each dish with
              passion and creativity, ensuring a memorable dining experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <feature.icon className="w-12 h-12 text-emerald-600 mb-4" />
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

      <section className="py-20 bg-emerald-800 text-white md:px-20 px-5">
        <div className="container mx-auto max-w-5xl px-4 md:px-0">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-4xl ${playfair.className} mb-6`}>
              Unique Dining Experiences
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              At Winnies, we believe in creating memorable moments. Explore our
              special dining experiences that go beyond the ordinary.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Sunset Dinner",
                description:
                  "Enjoy a romantic dinner as the sun sets over the hills.",
              },
              {
                title: "Chef's Table",
                description:
                  "An intimate dining experience with our head chef.",
              },
              {
                title: "Local Flavors Night",
                description:
                  "A weekly celebration of Himachali cuisine and culture.",
              },
            ].map((experience, index) => (
              <motion.div
                key={index}
                className="bg-emerald-700 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3
                  className={`text-xl font-semibold mb-2 ${playfair.className}`}
                >
                  {experience.title}
                </h3>
                <p>{experience.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-white text-emerald-800 hover:bg-gray-100"
            >
              Explore Dining Experiences
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
