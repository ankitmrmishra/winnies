"use client";
import React from "react";
import { Button } from "./ui/button";
import { ChevronRight, MapPin } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import { useCallbackPopup } from "@/lib/callback-popup-context";
import { motion } from "framer-motion";

const playfair = Playfair_Display({ subsets: ["latin"] });

import MainImage from "../public/WINNIES.png";

export const HeroComponent = () => {
  const { openPopup } = useCallbackPopup();
  const phoneNumber = "9805633007";
  const [showNumber, setShowNumber] = React.useState(false);

  const handleCallClick = () => {
    if (!showNumber) {
      // First click - show the number
      setShowNumber(true);
      
      // Track number reveal in Google Analytics
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "reveal_phone_number", {
          event_category: "engagement",
          event_label: "Hero Call Button",
          phone_number: phoneNumber,
        });
      }
    } else {
      // Second click - initiate call
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "click_to_call", {
          event_category: "engagement",
          event_label: "Hero Call Button",
          phone_number: phoneNumber,
        });
      }
      window.location.href = `tel:+91${phoneNumber}`;
    }
  };

  return (
    <div className="h-screen relative overflow-hidden">
      <Image
        src={MainImage}
        alt="Winnies Resort"
        width={1920}
        height={1080}
        priority
        className="object-cover w-full h-full absolute inset-0"
      />
      
      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Animated content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white z-40 px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium">Kasauli, Himachal Pradesh</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-4xl md:text-7xl font-bold mb-6 ${playfair.className} leading-tight`}
          >
            Winnies Holiday Resort <br />
            <span className="text-emerald-400">& Spa</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto"
          >
            Experience luxury nestled in the serene hills of Kasauli
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center px-4 w-full max-w-md sm:max-w-none"
          >
            <Button
              onClick={handleCallClick}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 sm:px-8 sm:py-5 text-base sm:text-lg rounded-full shadow-2xl hover:shadow-emerald-500/50 transition-all flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto min-h-[52px] sm:min-h-[60px]"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-semibold">{showNumber ? `Call: ${phoneNumber}` : "Talk to Us"}</span>
            </Button>
            <Button
              variant="outline"
              className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-white/40 px-6 py-4 sm:px-8 sm:py-5 text-base sm:text-lg rounded-full w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 min-h-[52px] sm:min-h-[60px] font-semibold"
              onClick={() => window.open('https://wa.me/919805633007', '_blank')}
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000000] to-transparent" />
    </div>
  );
};
