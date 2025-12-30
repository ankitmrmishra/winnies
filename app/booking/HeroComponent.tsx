"use client";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { ChevronRight, Phone, Star } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"] });

// Fallback image import
import FallbackImage from "../../public/WINNIWS.jpg";

// Optimized Cloudinary video URL
const CLOUDINARY_VIDEO_URL =
  "https://res.cloudinary.com/dtml2dy8p/video/upload/" +
  "q_auto:low," + // Low quality (perfect for backgrounds)
  "f_auto," + // Auto format (WebM for Chrome, MP4 for Safari)
  "w_1920,c_limit," + // Max width 1920px, don't upscale
  "br_2500k," + // Bitrate 2.5 Mbps
  "ac_none/" + // Remove audio (not needed for background)
  "v1767021672/Winnies_Video_1_fmcbhe.mp4";

const PHONE_NUMBER = "+91 98056 33007"; // change this

export const HeroComponentBooking = () => {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    // Mobile devices → open dialer
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
      window.location.href = `tel:${PHONE_NUMBER.replace(/\s+/g, "")}`;
      return;
    }

    // Desktop → copy number
    await navigator.clipboard.writeText(PHONE_NUMBER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [videoError, setVideoError] = useState(false);
  if (videoError) console.log(videoError, "this is v ideo error ");

  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div>
      {/* Video Section */}
      <div className="md:h-screen  min-h-[30vh] relative overflow-hidden  ">
        {/* Fallback Image - shows while video loads or if video fails */}
        <Image
          src={FallbackImage}
          alt="Winnies Resort"
          fill
          priority
          className={`object-cover transition-opacity duration-500 ${
            videoLoaded && !videoError ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Video Background from Cloudinary CDN */}
        {!videoError && (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            className={`absolute inset-0 w-full h-full md:object-cover object-contain transition-opacity duration-500 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src={CLOUDINARY_VIDEO_URL} type="video/mp4" />
          </video>
        )}

        {/* Dark Overlay */}
        <div className="md:block absolute hidden inset-0 bg-black bg-opacity-50" />

        {/* Content - Only on Desktop */}
        <div className="hidden md:block absolute md:bottom-16 left-6 md:left-20 text-white z-40">
          <h1
            className={`text-4xl md:text-6xl font-bold mb-4 ${playfair.className}`}
          >
            Luxury Awaits <br />
            in <span className="text-emerald-500">Kasauli</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Discover serenity at{" "}
            <span className="text-emerald-400">Winnies Resort</span>
          </p>
          <div className="flex md:flex-row gap-3">
            <Button
              onClick={() =>
                window.open("https://wa.me/+919805633007", "_blank")
              }
              className="bg-emerald-800 hover:bg-emerald-700 text-white"
            >
              Chat With Us
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>{" "}
            <Button
              onClick={handleClick}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-1.5 rounded-full transition"
            >
              <Phone size={16} />
              <span>{copied ? "Copied!" : PHONE_NUMBER}</span>
            </Button>
          </div>
        </div>

        {/* Bottom Gradient - Desktop only */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent h-96" />
      </div>

      {/* Mobile Header Info - Shows directly after video */}
      <div className="md:hidden  px-4 py-4">
        <h1 className={`text-xl font-bold mb-2 ${playfair.className}`}>
          Winnies Holiday Resort & Spa
        </h1>
        <p className="text-gray-600 mb-3">Kasauli Himachal Pradesh</p>

        {/* Guest Favourite Badge */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1 border border-gray-300 rounded-full px-3 py-1">
            <span className="text-sm font-medium">Guest Favourite</span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="text-sm font-medium ml-1">2.4K reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};
