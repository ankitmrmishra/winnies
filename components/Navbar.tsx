"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Stay {
  title: string;
  location: string;
  image: string;
}

interface Facilities {
  title: string;
  image: string;
}

const stays: Stay[] = [
  {
    title: "Banjara Valley Retreat",
    location: "Sangla, Himachal Pradesh",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    title: "Banjara Orchard Retreat",
    location: "Thanedar, Himachal Pradesh",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    title: "Binsar Forest Retreat",
    location: "Binsar, Uttarakhand",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    title: "Roots Stay",
    location: "Kullu Valley",
    image: "/placeholder.svg?height=80&width=80",
  },
];

const facilitiesData: Facilities[] = [
  {
    title: "Adventure",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    title: "Events",
    image: "/placeholder.svg?height=80&width=80",
  },
];

export default function Navbar() {
  const [isStaysOpen, setIsStaysOpen] = useState(false);
  const [isJourneysOpen, setIsJourneysOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isFacilitiesOpen, setIsFacilitiesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleStays = () => setIsStaysOpen(!isStaysOpen);
  const toggleFacilities = () => setIsFacilitiesOpen(!isFacilitiesOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event) {
        setIsStaysOpen(false);
        setIsJourneysOpen(false);
        setIsAboutOpen(false);
        setIsFacilitiesOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={navRef}>
      <nav className="backdrop-blur-sm bg-blend-difference fixed text-white  bg-black w-full z-50 top-0   ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 gap-6">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 bg-emerald-700 rounded-full" />
            </motion.a>

            {/* Desktop Navigation Items */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="relative text-white ">
                <motion.button
                  className="flex items-center space-x-1   hover:text-emerald-700 group "
                  onClick={toggleStays}
                >
                  <span className="">Stays</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isStaysOpen ? "rotate-180" : ""
                    }`}
                  />
                </motion.button>

                {isStaysOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 w-80 bg-white shadow-lg rounded-lg py-4 mt-2 h-96 overflow-scroll no-scrollbar"
                  >
                    {stays.map((stay) => (
                      <a
                        key={stay.title}
                        href="#"
                        className="flex items-center space-x-4 px-4 py-3 hover:bg-gray-50"
                      >
                        <img
                          src={stay.image}
                          alt={stay.title}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div>
                          <h3 className="font-medium text-white ">
                            {stay.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {stay.location}
                          </p>
                        </div>
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
              <a href="#" className="text-white  hover:text-emerald-700">
                Kasauli
              </a>
              <div className="relative">
                <motion.button
                  className="flex items-center space-x-1 text-white  hover:text-emerald-700 group"
                  onClick={() => setIsJourneysOpen(!isJourneysOpen)}
                >
                  <span>Weddings</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isJourneysOpen ? "rotate-180" : ""
                    }`}
                  />
                </motion.button>
              </div>
              <div className="relative">
                <motion.button
                  className="flex items-center space-x-1 text-white  hover:text-emerald-700 group"
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                >
                  <span>Restaurant</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isAboutOpen ? "rotate-180" : ""
                    }`}
                  />
                </motion.button>
              </div>
              <a href="#" className="text-white  hover:text-emerald-700">
                Spa
              </a>
              <a href="#" className="text-white  hover:text-emerald-700">
                Our Packages
              </a>
              <div className="relative">
                <motion.button
                  className="flex items-center space-x-1 text-white  hover:text-emerald-700 group"
                  onClick={toggleFacilities}
                >
                  <span>Facilities</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isFacilitiesOpen ? "rotate-180" : ""
                    }`}
                  />
                </motion.button>
                {isFacilitiesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 w-80 bg-white shadow-lg rounded-lg py-4 mt-2 max-h-max overflow-scroll no-scrollbar"
                  >
                    {facilitiesData.map((facility) => (
                      <a
                        key={facility.title}
                        href="#"
                        className="flex items-center space-x-4 px-4 py-3 hover:bg-gray-50"
                      >
                        <img
                          src={facility.image}
                          alt={facility.title}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div>
                          <h3 className="font-medium text-white ">
                            {facility.title}
                          </h3>
                        </div>
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
              <a href="#" className="text-white  hover:text-emerald-700">
                Contact Us
              </a>
            </div>

            {/* Book Now Button (Desktop) */}
            <Button className="hidden md:block bg-emerald-700 hover:bg-emerald-800 text-white px-6">
              Book Now
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white  hover:text-emerald-700"
              onClick={toggleMobileMenu}
            >
              {!isMobileMenuOpen && (
                <div className="bg-black rounded-full p-2">
                  <Menu size={24} className="text-white " />
                </div>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-y-0 right-0 w-64 bg-emerald-700 shadow-lg z-50 lg:hidden"
        >
          <div className="flex flex-col h-full">
            <div className="p-4 border-b flex justify-between align-middle items-center gap-5">
              <Button className="w-full bg-emerald-700 hover:bg-emerald-800 text-white md:hidden">
                Book Now
              </Button>
              <X
                size={24}
                className="text-white ease-in-out"
                onClick={toggleMobileMenu}
              />
            </div>
            <nav className="flex-1 overflow-y-auto p-4">
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-white  hover:text-emerald-700 block py-2"
                  >
                    Stays
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white  hover:text-emerald-700 block py-2"
                  >
                    Kasauli
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white  hover:text-emerald-700 block py-2"
                  >
                    Weddings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white  hover:text-emerald-700 block py-2"
                  >
                    Restaurant
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white  hover:text-emerald-700 block py-2"
                  >
                    Spa
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white  hover:text-emerald-700 block py-2"
                  >
                    Our Packages
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white  hover:text-emerald-700 block py-2"
                  >
                    Facilities
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white  hover:text-emerald-700 block py-2"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </motion.div>
      )}
    </div>
  );
}
