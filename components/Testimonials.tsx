"use client";
import React from "react";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"] });

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Thompson",
    role: "Nature Enthusiast",
    content:
      "Winnies Resort exceeded all my expectations. The serene environment, coupled with top-notch amenities, made for an unforgettable stay. I particularly loved the guided nature walks and the farm-to-table dining experience. Can't wait to return!",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Adventure Seeker",
    content:
      "As an avid hiker, I was blown away by the trails around Winnies Resort. The staff were incredibly knowledgeable about the local terrain and wildlife. The luxury of the resort combined with the raw beauty of nature created a perfect balance.",
    avatar:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Wellness Enthusiast",
    content:
      "The spa at Winnies Resort is a hidden gem. The treatments, inspired by local traditions, were both relaxing and rejuvenating. The yoga sessions at sunrise, overlooking the misty hills, were truly magical. It's the perfect place to reconnect with yourself.",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-[#faf9f6] lg:p-20 p-5">
      <div className="flex justify-center align-middle items-center flex-col gap-3">
        <h2
          className={`text-4xl md:text-5xl ${playfair.className} text-emerald-800 text-center mb-6`}
        >
          Take their word, not ours
        </h2>
        <p className="lg:w-[40rem] text-center text-emerald-700/50 mb-8">
          Our promise is to create memorable experiences, but don&apos;t just
          take our word for it. The heartfelt stories shared by our guests
          capture the essence of what makes our resort special. From treasured
          family moments to peaceful escapes, these are the real experiences
          that bring our resort to life. So, listen to those who have already
          made memories here.
        </p>
        <div className="testimonial_grid">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={testimonial.id === 1 ? "md:col-span-2" : ""}
              >
                <TestimonialCard key={index} testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <div className="flex items-center mb-4">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={48}
          height={48}
          className="rounded-full mr-4"
        />
        <div>
          <h3 className="font-semibold text-lg">{testimonial.name}</h3>
          <p className="text-gray-600">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-700">{testimonial.content}</p>
    </motion.div>
  );
};

export default Testimonials;
