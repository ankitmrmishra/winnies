"use client";
import React, { useEffect } from "react";
import { Playfair_Display } from "next/font/google";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Instagram, Twitter, Facebook } from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"] });

// Your client's Instagram post URLs
const instagramPostUrls = [
  "https://www.instagram.com/p/DR4TUN1kpuU/",
  "https://www.instagram.com/p/DR3RJInD8MM/",
  "https://www.instagram.com/p/DRzOPJmD3Yt/",
  "https://www.instagram.com/p/DRuMQpkD2OQ/",
  "https://www.instagram.com/p/DRoWg3uD8s0/",
  "https://www.instagram.com/reel/DRoVD8gD1ve/",
];

const CARD_WIDTH = 400;
const CARD_GAP = 16;

export const SocialMedia = () => {
  return (
    <div className="bg-[#faf9f6] lg:p-20 p-5">
      <div className="flex justify-center align-middle items-center gap-3 flex-col">
        <h2
          className={`text-4xl md:text-5xl text-center ${playfair.className} text-emerald-800 mb-6`}
        >
          Follow Us On Social Media
        </h2>
        <p className="lg:w-[40rem] text-center text-emerald-700/50 mb-8">
          Let&apos;s stay in touch! Follow us on social media to see the latest
          happenings, stunning moments, and guest stories. Join our community
          for exclusive insights and travel inspiration – you never know what
          exciting surprise might be waiting for you.
        </p>

        <InfiniteInstagramCarousel posts={instagramPostUrls} />

        <div className="medialinks flex justify-center align-middle items-center gap-3 text-emerald-800 mt-8">
          <div className="border border-emerald-800 rounded-full p-2">
            <a
              href="https://www.instagram.com/winniesresorts/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={24} className="size-10 hover:cursor-pointer" />
            </a>
          </div>
          <div className="border border-emerald-800 rounded-full p-2">
            <a
              href="https://x.com/WKasauli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={24} className="size-10 hover:cursor-pointer" />
            </a>
          </div>
          <div className="border border-emerald-800 rounded-full p-2">
            <a
              href="https://www.facebook.com/winnies.resorts"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={24} className="size-10 hover:cursor-pointer" />
            </a>
          </div>
          {/* <div className="border border-emerald-800 rounded-full p-2">
            <a
              href="https://linkedin.com/company/winniesresort"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} className="size-10 hover:cursor-pointer" />
            </a>
          </div>
          <div className="border border-emerald-800 rounded-full p-2">
            <a
              href="https://youtube.com/@winniesresort"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube size={24} className="size-10 hover:cursor-pointer" />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

interface InfiniteInstagramCarouselProps {
  posts: string[];
}

function InfiniteInstagramCarousel({ posts }: InfiniteInstagramCarouselProps) {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = React.useState(0);

  // Duplicate posts for seamless loop
  const duplicatedPosts = [...posts, ...posts, ...posts];

  React.useEffect(() => {
    if (carouselRef.current) {
      setContentWidth(duplicatedPosts.length * (CARD_WIDTH + CARD_GAP));
    }
  }, [duplicatedPosts.length]);

  // Load Instagram embed script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Process embeds whenever they're added
    const processEmbeds = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    // Initial process
    processEmbeds();

    // Reprocess after a delay to ensure DOM is ready
    const timer = setTimeout(processEmbeds, 1000);

    return () => {
      clearTimeout(timer);
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const x = useMotionValue(0);
  const baseVelocity = -50;

  useAnimationFrame((t, delta) => {
    const moveBy = baseVelocity * (delta / 1000);

    if (x.get() <= -contentWidth / 3) {
      x.set(0);
    }

    x.set(x.get() + moveBy);
  });

  const xTransform = useTransform(x, (value) => {
    return `${value}px`;
  });

  return (
    <div
      ref={carouselRef}
      className="w-full max-w-screen mx-auto py-12 px-4 overflow-hidden"
    >
      <motion.div style={{ x: xTransform }} className="flex space-x-4">
        {duplicatedPosts.map((postUrl, index) => (
          <motion.div
            key={`${postUrl}-${index}`}
            className="flex-shrink-0"
            style={{ width: CARD_WIDTH }}
          >
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={postUrl}
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: "0",
                borderRadius: "3px",
                boxShadow:
                  "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                margin: "1px",
                maxWidth: "540px",
                minWidth: "326px",
                padding: "0",
                width: "99.375%",
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// TypeScript declaration for Instagram embed
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}
