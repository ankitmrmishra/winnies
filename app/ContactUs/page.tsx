"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import {
  Phone,
  Mail,
  MapPin,
  CreditCard,
  Car,
  Plane,
  Train,
} from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"] });

export default function ContactPage() {
  const contactInfo = [
    { name: "Mr Ravinder Rai", phones: ["+91-9805613130", "+91-9418141218"] },
    { name: "Mr Surender Singh", phones: ["+91-9805633007", "+91-9418020218"] },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Winnies Resort Contact"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1
              className={`text-5xl md:text-6xl font-bold mb-4 ${playfair.className}`}
            >
              Contact Us
            </h1>
            <p className="text-xl mb-8">
              Get in touch with Winnies Holiday Resort
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-0">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className={`text-3xl ${playfair.className} text-emerald-800 mb-6`}
              >
                Get in Touch
              </h2>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-emerald-800">
                      {contact.name}
                    </h3>
                    {contact.phones.map((phone, phoneIndex) => (
                      <div key={phoneIndex} className="flex items-center mb-2">
                        <Phone className="w-5 h-5 text-emerald-600 mr-2" />
                        <a
                          href={`tel:${phone}`}
                          className="text-gray-600 hover:text-emerald-800"
                        >
                          {phone}
                        </a>
                      </div>
                    ))}
                  </div>
                ))}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-emerald-800">
                    Landline
                  </h3>
                  <div className="flex items-center mb-2">
                    <Phone className="w-5 h-5 text-emerald-600 mr-2" />
                    <a
                      href="tel:01792261218"
                      className="text-gray-600 hover:text-emerald-800"
                    >
                      01792-261218
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-emerald-600 mr-2" />
                    <a
                      href="tel:919805408218"
                      className="text-gray-600 hover:text-emerald-800"
                    >
                      +91-9805408218
                    </a>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-emerald-800">
                    Email
                  </h3>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-emerald-600 mr-2" />
                    <a
                      href="mailto:sales@winniesholidayresort.com"
                      className="text-gray-600 hover:text-emerald-800"
                    >
                      sales@winniesholidayresort.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button
                  size="lg"
                  className="w-full bg-emerald-800 hover:bg-emerald-700 text-white"
                  onClick={() =>
                    window.open("https://wa.me/919805613130", "_blank")
                  }
                >
                  Message us on WhatsApp
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2
                className={`text-3xl ${playfair.className} text-emerald-800 mb-6`}
              >
                Location & Details
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-2 text-emerald-800">
                  Address
                </h3>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Winnies Holiday Resort
                    <br />
                    on Main Dharampur Kasauli Road
                    <br />
                    1 Km after Pinegrove School
                    <br />
                    Sanawar Resorts, Sanawar Tehsil Kasauli,
                    <br />
                    Distt.Solan
                    <br />
                    173202 H.P
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-2 text-emerald-800">
                  Bank Account Details
                </h3>
                <div className="flex items-start">
                  <CreditCard className="w-5 h-5 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                  <div className="text-gray-600">
                    <p className="font-semibold">HDFC Bank</p>
                    <p>Account Name: Winnies Holiday Inn</p>
                    <p>Account No: 03872000001938</p>
                    <p>IFSC code: HDFC0000387</p>
                    <p>Current Account</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-emerald-800">
                  How to Reach Us
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Car className="w-5 h-5 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      From Kalka-Shimla Highway, take a left turn at Dharampur
                      (after Dharampur Police Station). Drive for about 4 km on
                      Dharampur to Kasauli Road. Nearest landmark is Pinegrove
                      School.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Plane className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0" />
                    <p className="text-gray-600">
                      Nearest Airports: Chandigarh (55 KM), Shimla (65 KM)
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Train className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0" />
                    <p className="text-gray-600">
                      Nearest Railway Stations: Dharampur (6 KM), Kalka (30 KM)
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Car className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0" />
                    <p className="text-gray-600">
                      Distances: Chandigarh (55 KM), Shimla (65 KM), Solan (25
                      KM), Delhi (300 KM)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}