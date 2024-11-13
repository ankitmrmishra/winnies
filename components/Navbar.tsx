"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface Facility {
  title: string;
  image: string;
  link: string;
}

export const facilitiesData: Facility[] = [
  {
    title: "Activities",
    image:
      "https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "Activities",
  },
  {
    title: "Bar",
    image:
      "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    link: "Bar",
  },
  {
    title: "Meeting Halls",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    link: "Meetinghalls",
  },
  {
    title: "Pool Area",
    image:
      "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    link: "PoolSide",
  },
  {
    title: "Sky Deck",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "SkyDeck",
  },
  {
    title: "Cozy Corners",
    image:
      "https://images.unsplash.com/photo-1602872030219-ad2b9a54315c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    link: "CozyCorners",
  },
];

export default function Navbar() {
  const [isFacilitiesOpen, setIsFacilitiesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const toggleFacilities = () => setIsFacilitiesOpen(!isFacilitiesOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
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
    <div className="relative z-50" ref={navRef}>
      <nav className="backdrop-blur-sm bg-blend-difference  text-white  bg-black w-full z-50 top-0   ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 gap-6">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 bg-emerald-700 rounded-full" />
            </motion.a>

            {/* Desktop Navigation Items */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/Kasauli"
                className="text-white  hover:text-emerald-700"
              >
                Kasauli
              </Link>
              <div className="relative">
                <motion.button className="flex items-center space-x-1 text-white  hover:text-emerald-700 group">
                  <Link
                    href={"/Weddings"}
                    className="text-white  hover:text-emerald-700"
                  >
                    Weddings
                  </Link>
                </motion.button>
              </div>
              <div className="relative">
                <motion.button className="flex items-center space-x-1 text-white  hover:text-emerald-700 group">
                  <Link
                    href={"/Restaurant"}
                    className="text-white  hover:text-emerald-700"
                  >
                    Restaurant
                  </Link>
                </motion.button>
              </div>
              <Link
                href={"/Spa"}
                className="text-white  hover:text-emerald-700"
              >
                Spa
              </Link>
              <Link
                href={"/Packages"}
                className="text-white  hover:text-emerald-700"
              >
                Our Packages
              </Link>
              <div className="relative">
                <motion.button
                  className="flex items-center space-x-1 text-white  hover:text-emerald-700 group"
                  onClick={toggleFacilities}
                >
                  <span className="text-white  hover:text-emerald-700">
                    Facilities
                  </span>
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
                    className="absolute top-full left-0 w-80 bg-emerald-800 shadow-lg rounded-lg py-4 mt-2 max-h-96 overflow-scroll no-scrollbar"
                  >
                    {facilitiesData.map((facility) => (
                      <Link
                        key={facility.title}
                        href={facility.link}
                        className="flex items-center space-x-4 px-4 py-3 bg-blend-difference text-white hover:bg-emerald-700  "
                      >
                        <div className="w-20 h-20 overflow-clip">
                          <Image
                            objectFit="cover"
                            width={500}
                            height={500}
                            src={facility.image}
                            alt={facility.title}
                            className="w-20 h-20 object-cover  rounded-lg"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium text-white ">
                            {facility.title}
                          </h3>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
              <Link
                href={"/ContactUs"}
                className="text-white  hover:text-emerald-700"
              >
                Contact Us
              </Link>
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
              <Button className="w-full bg-white text-emerald-800 hover:bg-emerald-800 md:hidden">
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
                  <Link
                    href="/"
                    className="text-white hover:text-emerald-700 block py-2"
                  >
                    Stays
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Kasauli"
                    className="text-white hover:text-emerald-700 block py-2"
                  >
                    Kasauli
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Weddings"
                    className="text-white hover:text-emerald-700 block py-2"
                  >
                    Weddings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Restaurant"
                    className="text-white hover:text-emerald-700 block py-2"
                  >
                    Restaurant
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Spa"
                    className="text-white hover:text-emerald-700 block py-2"
                  >
                    Spa
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Packages"
                    className="text-white hover:text-emerald-700 block py-2"
                  >
                    Our Packages
                  </Link>
                </li>
                {/* Facilities dropdown */}
                <li>
                  <button
                    onClick={toggleFacilities}
                    className="flex items-center justify-between w-full text-white hover:text-emerald-200 py-2"
                  >
                    Facilities
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isFacilitiesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isFacilitiesOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2 pl-4 mt-2 text-white"
                    >
                      {facilitiesData.map((facility) => (
                        <li key={facility.title}>
                          <Link
                            href={facility.link}
                            className="block py-2 hover:text-emerald-200"
                          >
                            {facility.title}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </li>
                <li>
                  <Link
                    href="/ContactUs"
                    className="text-white hover:text-emerald-700 block py-2"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </motion.div>
      )}
    </div>
  );
}
