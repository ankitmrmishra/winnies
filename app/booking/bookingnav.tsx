"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

import Logo from "@/public/assets/LOGO.png";

const PHONE_NUMBER = "+91 98056 33007";

export default function BookingNavbar({
  onRequest,
}: {
  onRequest: () => void;
}) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  // const [copied, setCopied] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  const handleCallClick = async () => {
    // Mobile devices → open dialer
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
      window.location.href = `tel:${PHONE_NUMBER.replace(/\s+/g, "")}`;
      return;
    }

    // Desktop → copy number
    await navigator.clipboard.writeText(PHONE_NUMBER);
    
  };

  return (
    <motion.nav
      className="sticky top-0 left-0 w-full z-50"
      initial={{ backgroundColor: "rgba(0,0,0,0)" }}
      animate={{
        backgroundColor: isScrolled
          ? "rgba(250, 249, 246, 0.95)"
          : "rgba(0,0,0,0)",
        boxShadow: isScrolled ? "0 10px 30px rgba(0,0,0,0.1)" : "none",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Top Call Banner - Desktop Only */}
      {/* <div className="hidden md:block w-full bg-emerald-600 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-end items-center">
          <button
            onClick={handleCallClick}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-1.5 rounded-full transition"
          >
            <Phone size={16} />
            <span>{copied ? "Copied!" : PHONE_NUMBER}</span>
          </button>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <Image
              src={Logo}
              alt="Logo"
              width={80}
              height={80}
              className="object-contain"
              priority
            />
          </motion.a>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-3">
            {/* Call Button - Mobile with vibration animation */}
            <motion.button
              onClick={handleCallClick}
              className="md:hidden flex items-center justify-center w-12 h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg"
              animate={{
                rotate: [0, -10, 10, -10, 10, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
            >
              <Phone size={20} />
            </motion.button>

            {/* Call Button - Desktop */}
            <Button
              onClick={handleCallClick}
              className="hidden md:flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2"
            >
              <Phone size={16} />
              <span className="hidden lg:inline">Call Now</span>
            </Button>

            {/* Get Quote Button */}
            <Button
              onClick={onRequest}
              className="bg-emerald-800 hover:bg-emerald-700 text-white px-4 md:px-6 py-2"
            >
              <span className="hidden sm:inline">Get Quote</span>
              <span className="sm:hidden">Quote</span>
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
