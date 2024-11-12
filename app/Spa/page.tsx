"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { Leaf, Clock, DollarSign } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"] });

interface ImageType {
  src: string;
  alt: string;
}

interface MassageType {
  name: string;
  duration: string;
  price: string;
  description: string;
}

export default function SpaPage() {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  const images: ImageType[] = [
    {
      src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Spa atmosphere",
    },
    {
      src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Massage oils",
    },
    {
      src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      alt: "Relaxation area",
    },
    {
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Spa treatment",
    },
    {
      src: "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      alt: "Aromatherapy",
    },
    {
      src: "https://images.unsplash.com/photo-1611072965169-e1e9d934bf1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      alt: "Hot stone massage",
    },
  ];

  const BasicMassages: MassageType[] = [
    {
      name: "Relax Aromatherapy",
      duration: "60 min / 90 min",
      price: "INR 2490 / INR 3490",
      description:
        "Our special blended Balm is used to take you to the state of sublimity. The massage strokes are light and calming.",
    },
    {
      name: "Swedish Massage",
      duration: "60 min / 90 min",
      price: "INR 2490 / INR 3490",
      description: `When a normal day's rigors have tired you, and a bit of relaxed "wake me up" is required. Your stress levels will greatly reduce after this therapy.`,
    },
    {
      name: "Thai Massage",
      duration: "60 min / 90 min",
      price: "INR 2490 / INR 3490",
      description:
        "This is by far the world's most famous dry massage. Our well trained therapist will ensure that all parts of your body are individually stretched and relaxed completely.",
    },
  ];

  const RecommendedMassages: MassageType[] = [
    {
      name: "Calming Lava",
      duration: "60 min / 90 min / 120 min",
      price: "INR 2890 / INR 3690 / INR 4690",
      description:
        "When one really needs to relax the muscles and calm the mind. Natural Basalt, heated stones are used to deeply heat the relaxed muscles and open clogged chakras.",
    },
    {
      name: "Feel like flying – Royal Thai Massage",
      duration: "60 min / 90 min / 120 min",
      price: "INR 2890 / INR 3690 / INR 4690",
      description:
        "When one is physically very tired. Our well trained therapists will ensure that all parts and muscles of your body are first embalmed with our proprietary deep relaxation balm and then stretched and deeply relaxed.",
    },
  ];

  return (
    <div className="min-h-screen md:p-20">
      <section className="relative h-[100vh]">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Spa atmosphere"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Gold Leaf Spa</h1>
            <p className="text-xl mb-8">
              Indulge in pure relaxation and rejuvenation
            </p>
            <Button
              size="lg"
              className="text-white border-white bg-emerald-800 hover:bg-white hover:text-black"
            >
              Book Your Spa Session
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
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
              Premium Massage Creme
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Gold Leaf Spa makes all Massage Cremes In-House to ensure Highest
              Quality. We only use oils which are 100% Natural and without
              chemical preservatives.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                "Shea Butter",
                "Avocado Oil",
                "Apricot Kernel Oil",
                "Rose-hip Oil",
                "Evening Primrose Oil",
                "WheatGerm Oil",
                "Vitamin E",
                "Aloe Vera Gel",
                "100% Natural Essential Oils",
              ].map((ingredient, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center bg-emerald-50 p-3 rounded-lg"
                >
                  <Leaf className="w-5 h-5 text-emerald-600 mr-2" />
                  <span className="text-sm">{ingredient}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="basic-massages" className="py-20 md:px-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className={`md:text-7xl text-5xl ${playfair.className} text-emerald-800 text-center md:py-10 py-5`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Basic Massages
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BasicMassages.map((massage, index) => (
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
                  {massage.name}
                </h3>
                <div className="flex items-center mb-2">
                  <Clock className="w-5 h-5 text-emerald-600 mr-2" />
                  <span>{massage.duration}</span>
                </div>
                <div className="flex items-center mb-2">
                  <DollarSign className="w-5 h-5 text-emerald-600 mr-2" />
                  <span>{massage.price}</span>
                </div>
                <p className="text-gray-600">{massage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="recommended-massages"
        className="py-20 md:px-20 bg-emerald-50 rounded-2xl"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className={`md:text-7xl text-5xl ${playfair.className} text-emerald-800 text-center md:py-10 py-5`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Recommended Massage Therapies
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RecommendedMassages.map((massage, index) => (
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
                  {massage.name}
                </h3>
                <div className="flex items-center mb-2">
                  <Clock className="w-5 h-5 text-emerald-600 mr-2" />
                  <span>{massage.duration}</span>
                </div>
                <div className="flex items-center mb-2">
                  <DollarSign className="w-5 h-5 text-emerald-600 mr-2" />
                  <span>{massage.price}</span>
                </div>
                <p className="text-gray-600">{massage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-white rounded-2xl">
        <div className="container mx-auto px-4">
          <motion.h2
            className={`md:text-7xl text-5xl ${playfair.className} text-emerald-800 text-center md:py-10 py-5`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Spa Gallery
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">
                    {image.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
