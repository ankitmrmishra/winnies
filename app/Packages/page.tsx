"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import {
  Calendar,
  Coffee,
  Utensils,
  Users,
  Clock,
  ChevronRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"] });

interface PackageType {
  title: string;
  price: string;
  occupancy: string;
  description: string[];
}

export default function PackagePage() {
  const packages: PackageType[] = [
    {
      title: "Premium Valley Facing with Jacuzzi",
      price: "23,000",
      occupancy: "Double Occupancy",
      description: [
        "Breakfast & Dinner included",
        "Welcome Drink on Arrival",
        "Fruit Basket & Cookies",
        "Valley View",
        "Private Jacuzzi",
      ],
    },
    {
      title: "Super Deluxe Room",
      price: "21,000",
      occupancy: "Double Occupancy",
      description: [
        "Breakfast & Dinner included",
        "Welcome Drink on Arrival",
        "Fruit Basket & Cookies",
      ],
    },
    {
      title: "Premium Room with Jacuzzi Pool Deck Facing",
      price: "23,000",
      occupancy: "Double Occupancy",
      description: [
        "Breakfast & Dinner included",
        "Welcome Drink on Arrival",
        "Fruit Basket & Cookies",
        "Pool Deck View",
        "Private Jacuzzi",
      ],
    },
    {
      title: "Deluxe Room",
      price: "18,000",
      occupancy: "Double Occupancy",
      description: [
        "Breakfast & Dinner included",
        "Welcome Drink on Arrival",
        "Fruit Basket & Cookies",
      ],
    },
  ];

  const familyPackages: PackageType[] = [
    {
      title: "All Wooden Premium Family Suite",
      price: "48,000",
      occupancy: "4 Persons",
      description: [
        "2 Bedrooms",
        "Breakfast & Dinner included",
        "Welcome Drink on Arrival",
        "Fruit Basket & Cookies",
      ],
    },
    {
      title: "Family Room",
      price: "28,000",
      occupancy: "4 Persons",
      description: [
        "2 Interconnected Bedrooms",
        "Breakfast & Dinner included",
        "Welcome Drink on Arrival",
        "Fruit Basket & Cookies",
      ],
    },
    {
      title: "Family Suite",
      price: "54,000",
      occupancy: "6 Persons",
      description: [
        "3 Bedrooms",
        "Breakfast & Dinner included",
        "Welcome Drink on Arrival",
        "Fruit Basket & Cookies",
      ],
    },
  ];

  const router = useRouter();

  return (
    <div className="min-h-screen ">
      <section className="relative h-[100vh]">
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Luxury Resort Room"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Stay Packages</h1>
            <p className="text-xl mb-8">
              Experience luxury at Winnies Resort and Spa
            </p>
            <Button
              onClick={() =>
                router.push(
                  "https://bookings.resavenue.com/resBooking/availsearch?regCode=GATE0402"
                )
              }
              className="w-full bg-emerald-800 hover:bg-emerald-700 text-white"
            >
              Book Now
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:px-20">
        <div className="flex flex-col justify-center align-middle items-center mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className={`md:text-7xl text-5xl ${playfair.className} text-emerald-800 text-center md:py-10 py-5`}
            >
              Our Packages
            </h2>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-emerald-600" />
                <span>2 Nights / 3 Days</span>
              </div>
              <div className="flex items-center">
                <Coffee className="w-4 h-4 mr-2 text-emerald-600" />
                <span>Breakfast Included</span>
              </div>
              <div className="flex items-center">
                <Utensils className="w-4 h-4 mr-2 text-emerald-600" />
                <span>Hi-Tea & Dinner</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border border-emerald-100 flex flex-col justify-between align-middle items-start "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <h3
                  className={`text-xl font-semibold mb-4 ${playfair.className} text-emerald-800`}
                >
                  {pkg.title}
                </h3>
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-bold text-emerald-800">
                    ₹{pkg.price}
                  </span>
                  <span className="text-gray-600 ml-2">/ package</span>
                </div>
                <div className="flex items-center mb-4">
                  <Users className="w-5 h-5 text-emerald-600 mr-2" />
                  <span className="text-gray-600">{pkg.occupancy}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {pkg.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-emerald-600 mr-2">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() =>
                    router.push(
                      "https://bookings.resavenue.com/resBooking/availsearch?regCode=GATE0402"
                    )
                  }
                  className="w-full bg-emerald-800 hover:bg-emerald-700 text-white"
                >
                  Book Now
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.h2
            className={`md:text-7xl text-5xl ${playfair.className} text-emerald-800 text-center md:py-10 py-5`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Family Packages
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {familyPackages.map((pkg, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border border-emerald-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <h3
                  className={`text-xl font-semibold mb-4 ${playfair.className} text-emerald-800`}
                >
                  {pkg.title}
                </h3>
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-bold text-emerald-800">
                    ₹{pkg.price}
                  </span>
                  <span className="text-gray-600 ml-2">/ package</span>
                </div>
                <div className="flex items-center mb-4">
                  <Users className="w-5 h-5 text-emerald-600 mr-2" />
                  <span className="text-gray-600">{pkg.occupancy}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {pkg.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-emerald-600 mr-2">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() =>
                    router.push(
                      "https://bookings.resavenue.com/resBooking/availsearch?regCode=GATE0402"
                    )
                  }
                  className="w-full bg-emerald-800 hover:bg-emerald-700 text-white"
                >
                  Book Now
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="bg-emerald-50 rounded-2xl p-8 mb-20">
            <h3
              className={`text-2xl ${playfair.className} text-emerald-800 mb-6`}
            >
              Additional Information
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-emerald-800 mb-4">
                  Child Policy
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    • Children below 5 years: Complimentary without Extra Bed
                  </li>
                  <li>
                    • Children 5-12 years: ₹1,500 without bed (breakfast &
                    dinner included)
                  </li>
                  <li>
                    • Children 5-12 years: ₹2,250 with bed (breakfast & dinner
                    included)
                  </li>
                  <li>
                    • Above 12 years: ₹2,500 with bed (breakfast & dinner
                    included)
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-emerald-800 mb-4">
                  Meal Timings
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-emerald-600" />
                    Breakfast: 08:30 AM to 10:30 AM
                  </li>
                  <li className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-emerald-600" />
                    Hi-Tea: 04:30 PM to 05:30 PM
                  </li>
                  <li className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-emerald-600" />
                    Dinner: 08:30 PM to 10:45 PM
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-emerald-800 text-white rounded-2xl p-8 ">
            <h3 className={`text-2xl ${playfair.className} mb-6`}>
              Reservation & Cancellation Policy
            </h3>
            <ul className="space-y-2">
              <li>• Advance payment should be 50% of the total amount</li>
              <li>
                • Before 14 days of check-in: 50% of the total booking amount
              </li>
              <li>
                • Before 7 days of check-in: 100% of the total booking amount
              </li>
              <li>
                • Season: 15th of April to 15th July, 1st October to 5th January
              </li>
              <li>
                • Minimum 2 nights booking applicable for weekends & special
                occasions
              </li>
              <li>• All rates are inclusive of taxes</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
