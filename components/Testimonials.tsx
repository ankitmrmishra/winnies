"use client";
import React from "react";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  review: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Carter",
    location: "Palo Alto, CA",
    quote: "I loved it, the best nature resort I've ever visited",
    review:
      "Ullamcorper enim augue gravida senectus lorem placerat feugiat scelerisque malesuada tristique in ultrices enim est felis neque volutpat pulvinar in id.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Sophie Moore",
    location: "New York, NY",
    quote: "Best luxury camping trip ever",
    review:
      "Lorem ipsum dolor sit amet consectetur nullmam consectetur turpis consectetur mattis fames sit eu tempus molestie.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Matt Cannon",
    location: "California, CA",
    quote: "Unmatched outdoor comfort and style",
    review:
      "Lacinia adipiscing lacinia nulla tellus sit dignissim at massa vel in aliquam nunc sapien sagittis ut id ac a integer pretium.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
  },
];

const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"] });
const Testimonials = () => {
  return (
    <div className="bg-[#faf9f6] lg:p-20 p-5">
      <div className="flex justify-center align-middle items-center flex-col gap-3">
        <span
          className={`md:text-7xl text-5xl ${playfair.className} text-emerald-800 text-center`}
        >
          Take their word, not ours
        </span>
        <p className="lg:w-[40rem] text-center text-emerald-700/50">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
          animi quam nostrum. Voluptatum doloremque, commodi hic pariatur
          ducimus quae laborum, odio expedita laudantium saepe, rem suscipit qui
          aliquid vero quas!
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

export default Testimonials;

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl p-8 shadow-sm"
    >
      <div className="flex items-start gap-4 mb-6">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3
            className={`text-2xl font-medium text-emerald-900 mb-4 ${playfair.className}`}
          >
            &ldquo;{testimonial.quote}&ldquo;
          </h3>
          <p className="text-gray-600 mb-6">{testimonial.review}</p>
          <div className="flex items-center gap-3">
            <span className="font-medium text-emerald-900">
              {testimonial.name}
            </span>
            <span className="text-gray-500">{testimonial.location}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
