"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";


import Bar from "@/public/assets/Bar/DSC02395.jpg";
import Activities from "@/public/assets/Activities/pool.jpg";
import MeetingHalls from "@/public/assets/Confrenceroom/DSC02387.jpg";
import PoolImages from "@/public/assets/Pool/DSC02120.jpg";
import SkyDeck from "@/public/assets/OpenDeck/DSC02105.jpg";
import CozyCorners from "@/public/assets/CozyCorners/Screenshot 2025-02-26 230417.png";

import Premiumroom from "@/public/assets/PREMIUM ROOMS/room1.png";
import deluxroom from "@/public/assets/DelusxRooms/room1.png";
import PREMIUM2BEDROOMAPARTMENT from "@/public/assets/PREMIUM 2-BEDROOM APARTMENT/room1.png";
import POOLDECKPREMIUMROOMS from "@/public/assets/POOL DECK PREMIUM ROOMS/room1.png";
import superdeluxrooms from "@/public/assets/superdeluxrooms/room1.png";
import deluxs3bedroom from "@/public/assets/DELUXE 3-BEDROOM APARTMENT/image.png";
import Logo from "../public/assets/LOGO.png";
import LogoWhite from "../public/assets/whitelogo.png";
import { usePathname } from "next/navigation";

import Room604 from "../app/villas/Room604/20220120-_DSC4337.jpg";
import Room605 from "../app/villas/Room605/20220121-_DSC4953.jpg";
import Room601 from "../app/villas/Room601/20220120-_DSC4555.jpg";
import Room602 from "../app/villas/Room602/20220120-_DSC4483.jpg";
import Room603 from "../app/villas/Room603/20220120-_DSC4782.jpg";
import Luxurywithpool from "../app/rooms/Luxryroomwithpool/IMG20250610163200.jpg";
import Luxurywithjacuzi from "../app/rooms/Luxuryroomsiwthjcuzzi/8.jpg";

interface Facility {
  title: string;
  image: StaticImageData;
  link: string;
}

interface Room {
  id: string;
  title: string;
  imageUrl: string | StaticImageData;
}

interface Villa {
  id: string;
  title: string;
  imageUrl: string | StaticImageData;
}

export const facilitiesData: Facility[] = [
  { title: "Activities", image: Activities, link: "Activities" },
  { title: "Bar", image: Bar, link: "Bar" },
  { title: "Meeting Halls", image: MeetingHalls, link: "Meetinghalls" },
  { title: "Pool Area", image: PoolImages, link: "PoolSide" },
  { title: "Sky Deck", image: SkyDeck, link: "SkyDeck" },
  { title: "Cozy Corners", image: CozyCorners, link: "CozyCorners" },
];

export const roomsData: Room[] = [
  { id: "8", title: "Luxury Rooms with Pool", imageUrl: Luxurywithpool },
  { id: "9", title: "Luxury Rooms with Jacuzzi", imageUrl: Luxurywithjacuzi },
  { id: "1", title: "Deluxe Rooms", imageUrl: deluxroom },
  { id: "2", title: "Super Deluxe Rooms", imageUrl: superdeluxrooms },
  { id: "3", title: "Premium Valley View Rooms", imageUrl: Premiumroom },
  { id: "4", title: "Premium Pool Deck Rooms", imageUrl: POOLDECKPREMIUMROOMS },
  { id: "5", title: "2-Bedroom Premium Suite", imageUrl: PREMIUM2BEDROOMAPARTMENT },
  { id: "6", title: "3-Bedroom Deluxe Suite", imageUrl: deluxs3bedroom },
  { id: "7", title: "Family Room", imageUrl: deluxroom },
];

export const villasData: Villa[] = [
  { id: "601", title: "Enchanted", imageUrl: Room601 },
  { id: "602", title: "Perch", imageUrl: Room602 },
  { id: "603", title: "Nook", imageUrl: Room603 },
  { id: "604", title: "Bloom", imageUrl: Room604 },
  { id: "605", title: "Elevate", imageUrl: Room605 },
];

export default function Navbar() {
  const [isFacilitiesOpen, setIsFacilitiesOpen] = useState(false);
  const [isRoomsOpen, setIsRoomsOpen] = useState(false);
  const [isVillasOpen, setIsVillasOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleFacilities = () => setIsFacilitiesOpen(!isFacilitiesOpen);
  const toggleRooms = () => setIsRoomsOpen(!isRoomsOpen);
  const toggleVillas = () => setIsVillasOpen(!isVillasOpen);

  const phoneNumber = "9805633007";

  const handleCallClick = () => {
    // Track call click in Google Analytics
    if (typeof window !== "undefined" && (window as Window & { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as unknown as Window & { gtag: (...args: unknown[]) => void }).gtag("event", "click_to_call", {
        event_category: "engagement",
        event_label: "Navbar Call Button",
        phone_number: phoneNumber,
        click_id: "navbar-call-button",
        button_location: "navbar",
      });
    }
    window.location.href = `tel:+91${phoneNumber}`;
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsFacilitiesOpen(false);
        setIsMobileMenuOpen(false);
        setIsRoomsOpen(false);
        setIsVillasOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const pathname = usePathname();
  if (pathname.startsWith("/booking")) return null;

  return (
    <div className="sticky z-50" ref={navRef}>
      <motion.nav
        className="fixed w-full top-0 z-50 backdrop-blur-[1px]"
        initial={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        animate={{
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(0, 0, 0, 0.3)",
          boxShadow: isScrolled ? "0 4px 20px rgba(0, 0, 0, 0.08)" : "none",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={isScrolled ? Logo : LogoWhite}
                className="h-14 w-auto md:h-16"
                width={200}
                height={200}
                alt="Winnies Resort Logo"
                priority
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {/* Rooms Dropdown */}
              <div className="relative">
                <motion.button
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all font-medium text-sm ${
                    isScrolled ? "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50" : "text-white hover:text-emerald-400"
                  }`}
                  onClick={toggleRooms}
                  whileHover={{ y: -2 }}
                >
                  <span>Rooms</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isRoomsOpen ? "rotate-180" : ""}`} />
                </motion.button>
                {isRoomsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 w-80 bg-white shadow-2xl rounded-xl py-2 mt-2 max-h-96 overflow-auto no-scrollbar border border-gray-100"
                  >
                    {roomsData.map((room) => (
                      <Link
                        key={room.id}
                        href={`/rooms/${room.id}`}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-emerald-50 transition-colors"
                      >
                        <Image
                          src={room.imageUrl}
                          alt={room.title}
                          width={64}
                          height={64}
                          className="w-14 h-14 object-cover rounded-lg flex-shrink-0"
                        />
                        <span className="font-medium text-sm">{room.title}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Villas Dropdown */}
              <div className="relative">
                <motion.button
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all font-medium text-sm ${
                    isScrolled ? "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50" : "text-white hover:text-emerald-400"
                  }`}
                  onClick={toggleVillas}
                  whileHover={{ y: -2 }}
                >
                  <span>Villas</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isVillasOpen ? "rotate-180" : ""}`} />
                </motion.button>
                {isVillasOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 w-80 bg-white shadow-2xl rounded-xl py-2 mt-2 max-h-96 overflow-auto no-scrollbar border border-gray-100"
                  >
                    {villasData.map((villa) => (
                      <Link
                        key={villa.id}
                        href={`/villas/${villa.id}`}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-emerald-50 transition-colors"
                      >
                        <Image
                          src={villa.imageUrl}
                          alt={villa.title}
                          width={64}
                          height={64}
                          className="w-14 h-14 object-cover rounded-lg flex-shrink-0"
                        />
                        <span className="font-medium text-sm">{villa.title}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Regular Links */}
              {[
                { href: "/Kasauli", label: "Kasauli" },
                { href: "/Weddings", label: "Weddings" },
                { href: "/Restaurant", label: "Restaurant" },
                { href: "/Spa", label: "Spa" },
                { href: "/Packages", label: "Packages" },
              ].map((link) => (
                <motion.div key={link.href} whileHover={{ y: -2 }}>
                  <Link
                    href={link.href}
                    className={`px-3 py-2 rounded-lg transition-all font-medium text-sm ${
                      isScrolled ? "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50" : "text-white hover:text-emerald-400"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Facilities Dropdown */}
              <div className="relative">
                <motion.button
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all font-medium text-sm ${
                    isScrolled ? "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50" : "text-white hover:text-emerald-400"
                  }`}
                  onClick={toggleFacilities}
                  whileHover={{ y: -2 }}
                >
                  <span>Facilities</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isFacilitiesOpen ? "rotate-180" : ""}`} />
                </motion.button>
                {isFacilitiesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full right-0 w-80 bg-white shadow-2xl rounded-xl py-2 mt-2 max-h-96 overflow-auto border border-gray-100"
                  >
                    {facilitiesData.map((facility) => (
                      <Link key={facility.title} href={facility.link}>
                        <div className="flex items-center space-x-3 px-4 py-3 hover:bg-emerald-50 text-gray-700 transition-colors">
                          <Image
                            src={facility.image}
                            alt={facility.title}
                            width={64}
                            height={64}
                            className="w-14 h-14 object-cover rounded-lg flex-shrink-0"
                          />
                          <span className="font-medium text-sm">{facility.title}</span>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>

              <motion.div whileHover={{ y: -2 }}>
                <Link
                  href="/ContactUs"
                  className={`px-3 py-2 rounded-lg transition-all font-medium text-sm ${
                    isScrolled ? "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50" : "text-white hover:text-emerald-400"
                  }`}
                >
                  Contact
                </Link>
              </motion.div>
            </div>

            {/* CTA and Mobile Menu */}
            <div className="flex items-center space-x-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={handleCallClick}
                  id="navbar-call-button"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 md:px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="hidden md:inline">Call: {phoneNumber}</span>
                  <span className="md:hidden">Talk to Us</span>
                </Button>
              </motion.div>

              <button
                className={`lg:hidden p-2 rounded-lg ${isScrolled ? "text-gray-700" : "text-white"}`}
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-y-0 right-0 w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
        >
          <div className="flex flex-col h-full">
            <div className="p-6 border-b flex justify-between items-center">
              <Image src={Logo} alt="Logo" width={80} height={80} className="h-12 w-auto" />
              <button onClick={toggleMobileMenu} className="p-2 hover:bg-gray-100 rounded-lg">
                <X size={24} className="text-gray-700" />
              </button>
            </div>
            <nav className="flex-1 p-6">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={toggleRooms}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-emerald-600 py-3 font-medium"
                  >
                    Rooms
                    <ChevronDown className={`w-4 h-4 transition-transform ${isRoomsOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isRoomsOpen && (
                    <ul className="space-y-1 pl-4 mt-2">
                      {roomsData.map((room) => (
                        <li key={room.id}>
                          <Link href={`/rooms/${room.id}`} className="block py-2 text-sm text-gray-600 hover:text-emerald-600">
                            {room.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <button
                    onClick={toggleVillas}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-emerald-600 py-3 font-medium"
                  >
                    Villas
                    <ChevronDown className={`w-4 h-4 transition-transform ${isVillasOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isVillasOpen && (
                    <ul className="space-y-1 pl-4 mt-2">
                      {villasData.map((villa) => (
                        <li key={villa.id}>
                          <Link href={`/villas/${villa.id}`} className="block py-2 text-sm text-gray-600 hover:text-emerald-600">
                            {villa.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                {[
                  { href: "/Kasauli", label: "Kasauli" },
                  { href: "/Weddings", label: "Weddings" },
                  { href: "/Restaurant", label: "Restaurant" },
                  { href: "/Spa", label: "Spa" },
                  { href: "/Packages", label: "Packages" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="block text-gray-700 hover:text-emerald-600 py-3 font-medium">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    onClick={toggleFacilities}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-emerald-600 py-3 font-medium"
                  >
                    Facilities
                    <ChevronDown className={`w-4 h-4 transition-transform ${isFacilitiesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isFacilitiesOpen && (
                    <ul className="space-y-1 pl-4 mt-2">
                      {facilitiesData.map((facility) => (
                        <li key={facility.title}>
                          <Link href={facility.link} className="block py-2 text-sm text-gray-600 hover:text-emerald-600">
                            {facility.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <Link href="/ContactUs" className="block text-gray-700 hover:text-emerald-600 py-3 font-medium">
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
