"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { Users, Presentation, Wifi, Coffee } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"] });

export default function ConferencePage() {
  const features = [
    {
      icon: Users,
      title: "Flexible Layouts",
      description: "Multiple seating arrangements for up to 150 attendees",
    },
    {
      icon: Presentation,
      title: "Modern Equipment",
      description: "State-of-the-art audiovisual facilities",
    },
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Seamless connectivity for all participants",
    },
    {
      icon: Coffee,
      title: "Break-Out Areas",
      description: "Dedicated spaces for networking and refreshments",
    },
  ];

  const configurations = [
    {
      title: "U-Shape Setup",
      capacity: "Up to 50 delegates",
      description: "Perfect for interactive discussions and presentations",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CF8UZ9GcYoZ6dnRjSVSSOyWg6tB1GL.png",
    },
    {
      title: "Theater Style",
      capacity: "Up to 150 delegates",
      description: "Ideal for large conferences and seminars",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CF8UZ9GcYoZ6dnRjSVSSOyWg6tB1GL.png",
    },
    {
      title: "Boardroom Setup",
      capacity: "Up to 40 delegates",
      description: "Suitable for executive meetings and workshops",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CF8UZ9GcYoZ6dnRjSVSSOyWg6tB1GL.png",
    },
  ];

  return (
    <div className="min-h-screen md:p-20">
      <section className="relative h-[100vh]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CF8UZ9GcYoZ6dnRjSVSSOyWg6tB1GL.png"
          alt="Conference Hall"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">The Conference Oasis</h1>
            <p className="text-xl mb-8">Business Meets Pleasure</p>
            <Button
              size="lg"
              className="text-white border-white bg-emerald-800 hover:bg-white hover:text-black"
            >
              Plan Your Event
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
              Professional Meetings in Paradise
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Elevate your corporate events at our sophisticated conference
              facilities. Combining professional amenities with the serene
              backdrop of Kasauli hills, we offer the perfect balance of
              business and relaxation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20  rounded-2xl">
        <div className="container mx-auto px-4">
          <motion.h2
            className={`md:text-7xl text-5xl ${playfair.className} text-emerald-800 text-center md:py-10 py-5`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Room Configurations
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {configurations.map((config, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="relative h-64">
                  <Image
                    src={config.image}
                    alt={config.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className={`text-xl font-semibold mb-2 ${playfair.className} text-emerald-800`}
                  >
                    {config.title}
                  </h3>
                  <p className="text-emerald-600 font-semibold mb-2">
                    {config.capacity}
                  </p>
                  <p className="text-gray-600">{config.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
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

      <section className="py-20 bg-emerald-800 text-white rounded-2xl">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-4xl ${playfair.className} mb-6`}>
              Corporate Packages
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              From day conferences to multi-day corporate retreats, we offer
              customizable packages to suit your business needs. Includes
              accommodation, dining, and recreational activities.
            </p>
            <Button
              size="lg"
              className="bg-white text-emerald-800 hover:bg-gray-100"
            >
              Download Package Details
            </Button>
          </motion.div>
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
              Ready to Plan Your Event?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our dedicated events team is here to help you create the perfect
              corporate gathering. Contact us for customized solutions.
            </p>
            <Button
              size="lg"
              className="text-white bg-emerald-800 hover:bg-emerald-700"
            >
              Contact Events Team
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
