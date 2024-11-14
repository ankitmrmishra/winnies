"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { Coffee, Moon, Sun, Star } from "lucide-react";
import Restaurant1 from "../../public/assets/Restaurant/DSC02111.jpg";
// import Restaurant2 from "../../public/assets/Restaurant/DSC02112.jpg";
import Restaurant3 from "../../public/assets/Restaurant/DSC02113.jpg";
// import Restaurant4 from "../../public/assets/Restaurant/DSC02115.jpg";
// import Restaurant5 from "../../public/assets/Restaurant/DSC02117.jpg";
// import Restaurant6 from "../../public/assets/Restaurant/DSC02119.jpg";

const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"] });

export default function RestaurantPage() {
  const features = [
    {
      icon: Coffee,
      title: "Breakfast",
      description:
        "Kickstart your day with a delightful blend of local delicacies and international breakfast favorites.",
    },
    {
      icon: Sun,
      title: "Lunch",
      description:
        "Savor a relaxed lunch featuring vibrant dishes made from the freshest local ingredients, crafted to perfection.",
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
        "Savor our unique fusion of local Himachali flavors with contemporary cuisine",
    },
  ];

  return (
    <div className="min-h-screen md:p-20">
      <section className="relative min-h-screen">
        <Image
          src={Restaurant3}
          alt="Winnies Resort Restaurant"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className={`text-5xl md:text-6xl font-bold mb-4 `}>
              THE WINNIES CULINARY AFFAIR
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
              Winnies Holiday Resort invites you to indulge in a truly
              unforgettable dining experience, where elegant interiors, stunning
              vistas, and an array of delectable dishes come together to awaken
              your senses. Whether you&apos;re here for a romantic dinner, a
              family gathering, or simply to enjoy a serene meal, we promise to
              leave your taste buds delighted and your spirit refreshed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src={Restaurant3}
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
                Step into a world of refined elegance as you enter our
                thoughtfully designed restaurant. Warm, inviting interiors
                create a cozy haven, making every meal feel special and
                memorable.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-emerald-600 mr-2" />
                  <div className="w-full">
                    <span className="font-bold">
                      Chic Decor with Local Charm:
                    </span>{" "}
                    Sophisticated decor accented with regional touches creates a
                    space that’s both stylish and welcoming.
                  </div>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-emerald-600 mr-2" />
                  <div className="w-full">
                    <span className="font-bold">Ambient Lighting: </span> Enjoy
                    a warm glow that enhances the intimate atmosphere, perfect
                    for relaxed conversations and meaningful moments.
                  </div>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-emerald-600 mr-2" />
                  <div className="w-full">
                    <span className="font-bold">Comfortable Seating: </span>{" "}
                    Sink into plush seating, ideal for enjoying leisurely meals
                    with loved ones.
                  </div>
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
                Dine with breathtaking views as your backdrop, losing yourself
                in the natural beauty that surrounds Kasauli. Our restaurant is
                designed to showcase panoramic views of rolling hills and
                tranquil forests, providing a feast for the eyes to complement
                the flavors on your plate.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-emerald-600 mr-2" />
                  <div className="w-full">
                    <span className="font-bold">Expansive Windows:</span>
                    Floor-to-ceiling windows offer uninterrupted views, allowing
                    nature to be part of your dining experience.
                  </div>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-emerald-600 mr-2" />
                  <div className="w-full">
                    <span className="font-bold">Al Fresco Dining:</span>
                    For a closer connection with nature, our outdoor seating
                    area provides the perfect setting to dine under open skies.
                  </div>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-emerald-600 mr-2" />
                  <div className="w-full">
                    <span className="font-bold">Sunset Magic:</span>
                    As evening descends, witness a golden sunset that adds a
                    magical touch, creating an unforgettable dining ambiance
                  </div>
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
                src={Restaurant1}
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
              Delight in a symphony of flavors, where local ingredients and
              global recipes harmonize under the creative hands of our chefs,
              making each meal an extraordinary experience.
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
                  "Enjoy an intimate dinner, watching the sun set over the hills, casting a magical glow.",
              },
              {
                title: "Chef's Table",
                description:
                  "Enjoy an intimate meal crafted by our head chef’s expertise",
              },
              {
                title: "Local Flavors Night",
                description:
                  "A weekly feast of Himachali flavors, culture, and timeless traditions",
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
