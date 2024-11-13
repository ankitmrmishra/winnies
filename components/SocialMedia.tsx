"use client";
import React from "react";
import { Playfair_Display } from "next/font/google";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion";
const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"] });

import {
  Heart,
  MessageCircle,
  MoreHorizontal,
  Bookmark,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
} from "lucide-react";
import Image from "next/image";

export const SocialMedia = () => {
  return (
    <div className="bg-[#faf9f6] lg:p-20 p-5">
      <div className="flex justify-center align-middle items-center gap-3 flex-col">
        <span
          className={`md:text-7xl text-5xl text-center ${playfair.className} text-emerald-800`}
        >
          Follow Us On Social Media
        </span>
        <p className="lg:w-[40rem] text-center text-emerald-700/50">
          “Let’s stay in touch! Follow us on social media to see the latest
          happenings, stunning moments, and guest stories. Join our community
          for exclusive insights and travel inspiration – you never know what
          exciting surprise might be waiting for you.
        </p>

        <InfiniteGlampingCarousel />
        <div className="medialinks flex justify-center align-middle items-center gap-3 text-emerald-800 ">
          <div className="border border-emerald-800 rounded-full p-2">
            <Instagram size={24} className="size-10 hover:cursor-pointer" />
          </div>{" "}
          <div className="border border-emerald-800 rounded-full p-2">
            <Twitter size={24} className="size-10 hover:cursor-pointer" />{" "}
          </div>{" "}
          <div className="border border-emerald-800 rounded-full p-2">
            <Facebook size={24} className="size-10 hover:cursor-pointer" />{" "}
          </div>{" "}
          <div className="border border-emerald-800 rounded-full p-2">
            <Linkedin size={24} className="size-10 hover:cursor-pointer" />{" "}
          </div>{" "}
          <div className="border border-emerald-800 rounded-full p-2">
            <Youtube size={24} className="size-10 hover:cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

interface GlampingPost {
  id: string;
  username: string;
  handle: string;
  image: string;
  likes: string;
  comments: string;
  avatar: string;
}

const glampingPosts: GlampingPost[] = [
  {
    id: "1",
    username: "Winnies Resort",
    handle: "@winniesresort",
    image:
      "https://images.unsplash.com/photo-1619631428091-1eaa03c3bdf1?q=80&w=2069&auto=format&fit=crop",
    likes: "126k",
    comments: "2.4k",
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "2",
    username: "Winnies Resort",
    handle: "@winniesresort",
    image:
      "https://images.unsplash.com/photo-1533090368676-1fd25485db88?q=80&w=1969&auto=format&fit=crop",
    likes: "95k",
    comments: "1.8k",
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "3",
    username: "Winnies Resort",
    handle: "@winniesresort",
    image:
      "https://images.unsplash.com/photo-1533090368676-1fd25485db88?q=80&w=1969&auto=format&fit=crop",
    likes: "83k",
    comments: "1.5k",
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&auto=format&fit=crop",
  },
];
const CARD_WIDTH = 288; // w-72 = 18rem = 288px
const CARD_GAP = 16; // space-x-4 = 1rem = 16px

export default function InfiniteGlampingCarousel() {
  const [posts] = React.useState<GlampingPost[]>([
    ...glampingPosts,
    ...glampingPosts,
    ...glampingPosts,
    ...glampingPosts,
    ...glampingPosts,
    ...glampingPosts,
    ...glampingPosts,
  ]);

  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = React.useState(0);
  const [contentWidth, setContentWidth] = React.useState(0);

  React.useEffect(() => {
    if (carouselRef.current) {
      setCarouselWidth(carouselRef.current.offsetWidth);
      setContentWidth(posts.length * (CARD_WIDTH + CARD_GAP));
    }
  }, [posts]);

  const x = useMotionValue(0);
  const baseVelocity = -100;

  useAnimationFrame((t, delta) => {
    const moveBy = baseVelocity * (delta / 1000);

    if (x.get() <= -contentWidth / 2) {
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
      <motion.div
        style={{ x: xTransform, width: carouselWidth }}
        className="flex space-x-4"
      >
        {posts.map((post, index) => (
          <motion.div
            key={`${post.id}-${index}`}
            className="flex-shrink-0 w-72 bg-white rounded-2xl overflow-hidden shadow-md"
          >
            <div className="p-4 flex items-center space-x-3">
              <Image
                width={500}
                height={500}
                src={post.avatar}
                objectFit="cover"
                alt={post.username}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{post.username}</h3>
                <p className="text-gray-500 text-sm">{post.handle}</p>
              </div>
              <button className="text-gray-500 hover:text-gray-700">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-square">
              <Image
                width={500}
                height={500}
                objectFit="cover"
                src={post.image}
                alt="Glamping location"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex space-x-4">
                  <button className="text-gray-500 hover:text-red-500 transition-colors">
                    <Heart className="w-6 h-6" />
                  </button>
                  <button className="text-gray-500 hover:text-gray-700 transition-colors">
                    <MessageCircle className="w-6 h-6" />
                  </button>
                </div>
                <button className="text-gray-500 hover:text-gray-700 transition-colors">
                  <Bookmark className="w-6 h-6" />
                </button>
              </div>
              <div className="text-sm">
                <span className="font-semibold">{post.likes}</span>
                <span className="text-gray-500"> likes</span>
              </div>
              <div className="text-sm text-gray-500">
                View all {post.comments} comments
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
