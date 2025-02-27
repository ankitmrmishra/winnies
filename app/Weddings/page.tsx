"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { useState } from "react";

const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"] });
interface ImageType {
  src: StaticImageData;
  alt: string;
}

import Image1 from "./1.png";
import Image2 from "./2.png";
import Image3 from "./3.png";
import Image4 from "./4.png";
import Image5 from "./5.png";
import Image6 from "./6.png";
import Image7 from "./7.png";
import Image8 from "./8.png";

export default function Weddings() {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  const images: ImageType[] = [
    {
      src: Image1,
      alt: "Elegant wedding setup",
    },
    {
      src: Image2,
      alt: "Bride and groom",
    },
    {
      src: Image3,
      alt: "Wedding rings",
    },
    {
      src: Image4,
      alt: "Mountain wedding venue",
    },
    {
      src: Image5,
      alt: "Wedding table setup",
    },
    {
      src: Image6,
      alt: "Wedding bouquet",
    },
    {
      src: Image7,
      alt: "Wedding bouquet",
    },
    {
      src: Image8,
      alt: "Wedding bouquet",
    },
  ];
  return (
    <div className="min-h-screen  ">
      <section className="relative h-[100vh]">
        <Image
          src={Image6}
          alt="Scenic view of Kasauli"
          width={800}
          height={800}
          className="w-full h-full object-cover blur-[2px]"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">
              Destination Wedding in Kasauli
            </h1>
            <p className="text-xl mb-8">
              Experience the magic of a hill station wedding at Winnies Holiday
              Resort and Spa
            </p>
            <Button
              size="lg"
              className="text-white border-white bg-emerald-800 hover:bg-white hover:text-black"
            >
              Plan your Wedding
            </Button>
          </div>
        </div>
      </section>
      <section id="about" className="py-20 ">
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
              Your Dream Destination Wedding
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Imagine a wedding surrounded by the lush, tranquil beauty of
              Himachal&apos;s hills—a setting that feels like something out of a
              fairytale. Kasauli, a charming hill station often evoking the
              romance of a Ruskin Bond novel, is the perfect destination for a
              magical wedding experience. With its misty mornings, endless
              mountain views, and serene charm, Kasauli promises an
              unforgettable ambiance for your big day. It&apos;s not just a
              location but an experience, offering couples a unique blend of
              intimacy and grandeur as they celebrate amidst nature&apos;s
              splendor.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              At the heart of Kasauli&apos;s stunning landscape, Winnies Holiday
              Resort and Spa is an idyllic venue that elevates every moment of
              your wedding. The resort&apos;s inviting and luxurious setting is
              ideal for couples envisioning a Himachali ceremony or a
              destination wedding near Chandigarh. Winnies&apos; exceptional
              service and beautifully crafted spaces allow you and your guests
              to drown fully in the joy of the occasion. Whether you&apos;re
              dreaming of an elegant gathering or a cozy celebration, Winnies
              ensures a seamless and unforgettable experience, where each moment
              becomes a memory to treasure forever in Kasauli&apos;s peaceful
              embrace.
            </p>
          </motion.div>
        </div>
      </section>
      <section id="services" className="py-20 md:px-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className={`md:text-7xl text-5xl ${playfair.className} text-emerald-800 text-center md:py-10 py-5`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Wedding Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Elegant Banquet Hall",
                description:
                  "Host your dream wedding in our spacious banquet hall, accommodating up to 150 guests in a setting that blends elegance and comfort for an unforgettable celebration.",
              },
              {
                title: "Impeccable Hospitality",
                description:
                  "Our dedicated team delivers top-tier service with heart, going above and beyond to turn every moment into a cherished memory. Let us handle the details, so you can savor every moment.",
              },
              {
                title: "Breathtaking Scenery",
                description:
                  "Exchange vows against a breathtaking backdrop of rolling hills, tranquil greenery, and panoramic views that create a naturally romantic setting for your love story.",
              },
              {
                title: "Luxurious Accomodation",
                description:
                  "Enjoy a retreat that combines the best of comfort and nature. Our luxury rooms offer a serene and stylish space for you and your guests to relax and unwind.",
              },
              {
                title: "Tailored Wedding Packages",
                description:
                  "From intimate gatherings to grand celebrations, we offer customized wedding packages designed to match your vision, ensuring every detail aligns with your style and preferences.",
              },
              {
                title: "Expert Planning Support",
                description:
                  "Our expert planning team is here to make your wedding day effortlessly perfect, handling every detail so you can focus on celebrating love with family and friends.",
              },
            ].map((service, index) => (
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
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white rounded-2xl md:px-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className={`md:text-7xl text-5xl ${playfair.className} text-emerald-800 text-center md:py-10 py-5`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Capture Your Perfect Moments
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
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
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
