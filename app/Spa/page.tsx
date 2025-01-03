"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { Leaf, Clock, DollarSign, X } from "lucide-react";
import Spa from "../../public/assets/Spa/Spa2.png";
import Spaa from "../../public/assets/Spa/image.png";
import Spa1 from "../../public/assets/Spa/DSC02358.jpg";
import Spa2 from "../../public/assets/Spa/DSC02367.jpg";
import Spa3 from "../../public/assets/Spa/DSC02371.jpg";
import Menu1 from "../../public/assets/Spa/1.jpg";
import Menu2 from "../../public/assets/Spa/2.jpg";
import Menu3 from "../../public/assets/Spa/3.jpg";
import Menu4 from "../../public/assets/Spa/4.jpg";
import Menu5 from "../../public/assets/Spa/5.jpg";
import Menu6 from "../../public/assets/Spa/6.jpg";
import Menu7 from "../../public/assets/Spa/7.jpg";
import Menu8 from "../../public/assets/Spa/8.jpg";
import Menu9 from "../../public/assets/Spa/9.jpg";
import Menu10 from "../../public/assets/Spa/10.jpg";
import { Dialog } from "@/components/ui/dialog";

const playfair = Playfair_Display({ subsets: ["latin"] });

interface ImageType {
  src: string | StaticImageData;
}

interface MassageType {
  name: string;
  duration: string;
  price: string;
  description: string;
}

const menuImages = [
  Menu1,
  Menu2,
  Menu3,
  Menu4,
  Menu5,
  Menu6,
  Menu7,
  Menu8,
  Menu9,
  Menu10,
];

export default function SpaPage() {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [showAllMenuImages, setShowAllMenuImages] = useState(false);
  const [selectedMenuImage, setSelectedMenuImage] =
    useState<StaticImageData | null>(null);

  const images: ImageType[] = [
    { src: Spaa },
    { src: Spa1 },
    { src: Spa2 },
    { src: Spa3 },
    { src: Spa },
    { src: Spa3 },
  ];

  const BasicMassages: MassageType[] = [
    {
      name: "Relaxing Aromatherapy",
      duration: "60 min / 90 min",
      price: "INR 2490 / INR 3490",
      description:
        "Our unique blended balm elevates you to sublime relaxation, with gentle, calming massage strokes throughout.",
    },
    {
      name: "Swedish Massage",
      duration: "60 min / 90 min",
      price: "INR 2490 / INR 3490",
      description: `When daily demands wear you down, rejuvenate with a gentle "wake-me-up" therapy, melting away stress and refreshing your spirit.`,
    },
    {
      name: "Thai Massage",
      duration: "60 min / 90 min",
      price: "INR 2490 / INR 3490",
      description:
        "Experience the world's renowned dry massage, with expert therapists stretching and relaxing every part of you.",
    },
  ];

  const RecommendedMassages: MassageType[] = [
    {
      name: "Calming Lava",
      duration: "60 min / 90 min / 120 min",
      price: "INR 2890 / INR 3690 / INR 4690",
      description:
        "For deep muscle relaxation and a tranquil mind, warm basalt stones soothe muscles and release energy by unblocking chakras",
    },
    {
      name: "Feel like flying – Royal Thai Massage",
      duration: "60 min / 90 min / 120 min",
      price: "INR 2890 / INR 3690 / INR 4690",
      description:
        "When physical fatigue sets in, our expert therapists gently apply a deep relaxation balm, soothing each muscle before skillfully stretching and easing every part of your body into profound relaxation.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[100vh]">
        <Image
          src={Spa}
          alt="Spa atmosphere"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 `}>
              Tender Leaves Spa & Wellness
            </h1>
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

      <section id="about" className="py-20 md:px-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className={`text-4xl md:text-5xl ${playfair.className} text-emerald-800 text-center mb-6`}
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
                  className="flex md:flex-row flex-col items-center justify-center bg-emerald-50 p-3 rounded-lg"
                >
                  <Leaf className="w-5 h-5 text-emerald-600 mr-2" />
                  <span className="text-sm">{ingredient}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="basic-massages" className="py-20 md:px-20 md:-mt-24">
        <div className="container mx-auto px-4">
          <motion.h2
            className={`text-4xl md:text-5xl ${playfair.className} text-emerald-800 text-center mb-6`}
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
                  className={`text-2xl font-semibold mb-2 ${playfair.className} text-emerald-800`}
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
            className={`text-4xl md:text-5xl ${playfair.className} text-emerald-800 text-center mb-6`}
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
                  className={`text-2xl font-semibold mb-2 ${playfair.className} text-emerald-800`}
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

      <section id="menu" className="py-20 md:px-20 bg-emerald-800 text-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className={`text-4xl md:text-5xl ${playfair.className} text-center mb-6`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Spa Menu
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {menuImages
              .slice(0, showAllMenuImages ? menuImages.length : 6)
              .map((img, index) => (
                <motion.div
                  key={index}
                  className="relative aspect-[3/4] h-[50rem] w-full overflow-hidden rounded-lg hover:cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedMenuImage(img)}
                >
                  <div className="absolute w-full h-full bg-black/75 hover:opacity-100 z-10 opacity-0 text-center flex justify-center align-middle items-center">
                    OPEN
                  </div>
                  <Image
                    src={img}
                    alt={`Menu Image ${index + 1}`}
                    height={800}
                    width={800}
                    className="transition-transform duration-300 hover:scale-110 h-full object-contain"
                  />
                </motion.div>
              ))}
          </div>
          {!showAllMenuImages && (
            <div className="text-center mt-8">
              <Button
                onClick={() => setShowAllMenuImages(true)}
                size="lg"
                className="bg-white text-emerald-800 hover:bg-gray-100"
              >
                See More
              </Button>
            </div>
          )}
        </div>
      </section>

      <section id="gallery" className="py-20 rounded-2xl md:px-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className={`text-4xl md:text-5xl ${playfair.className} text-emerald-800 text-center mb-6`}
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
                  alt="spa"
                  width={500}
                  height={300}
                  objectFit="cover"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
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
              alt=""
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

      {selectedMenuImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <Dialog open={selectedMenuImage !== null}>
            <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
            <div className="relative bg-white/75 rounded-lg max-w-3xl max-h-[100vh] overflow-hidden">
              <button
                onClick={() => setSelectedMenuImage(null)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
              {selectedMenuImage && (
                <Image
                  src={selectedMenuImage}
                  alt="Selected menu"
                  width={500}
                  height={500}
                  className="object-contain h-[45rem] max-w-max"
                />
              )}
            </div>
          </Dialog>
        </div>
      )}
    </div>
  );
}
