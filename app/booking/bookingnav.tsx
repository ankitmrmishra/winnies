"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import Logo from "@/public/assets/LOGO.png";

export default function BookingNavbar({
  onRequest,
}: {
  onRequest: () => void;
}) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  return (
    <motion.nav
      className=" sticky top-0 left-0 w-full z-50"
      initial={{ backgroundColor: "rgba(0,0,0,0)" }}
      animate={{
        backgroundColor: isScrolled
          ? "rgba(250, 249, 246, 0.95)"
          : "rgba(0,0,0,0)",
        boxShadow: isScrolled ? "0 10px 30px rgba(0,0,0,0.1)" : "none",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
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

          {/* Book Now Button */}
          <Button
            onClick={onRequest}
            className="bg-emerald-800 hover:bg-emerald-700 text-white px-6 py-2"
          >
            Request A CallBack
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
