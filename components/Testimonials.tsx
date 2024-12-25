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
    name: "Best place for stay #Stacation",
    role: "Rashmi Aery",
    content:
      "The experience was lovely. The vibe , the food , the service and the staff was beyond expectations. So welcoming staff♥️ So to start with got the candle light dinner done for my partner. But they did much much beyond that. It was perfect and lovely in every sense. Gave the best service indeed amd the staff is very very good. Had one of the best nights of my life. Forever thankful to winnies resort and spa♥️🙏",
    avatar:
      "https://images.unsplash.com/photo-1706943262473-fc393f495501?q=80&w=1786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Perfect place for destination wedding",
    role: "Ankur Sharma",
    content:
      "I had an exceptional stay at winnies Kasauli! From the moment I arrived, the staff were incredibly welcoming and attentive,specially priyanka and madhu...ensuring all my needs were met. The rooms were spacious, clean, and well-appointed with stunning views of the surrounding hills. The amenities, including the pool and fitness center, were top-notch and added to the overall comfort of my stay. The food at the hotel restaurant was delicious and offered a great variety of local and international dishes. The serene and picturesque location made for a perfect retreat. I highly recommend winnies Kasauli for anyone looking for a luxurious and relaxing getaway. Five stars all the way!",
    avatar:
      "https://images.unsplash.com/photo-1534339480783-6816b68be29c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Out of the World destination in kasauli",
    role: "Sakal Khurana",
    content:
      "Simply fantastic place to chill and unwind The hospitality lead by manager Rajesh Mehta was phenomenal Food excellent Views from balcony superb It's a perfect destination for unwinding and those of you tired of day to day hustle in cities Winnie resort gives you that much needed mind space to reconnect Pool gym activities super holiday destination for family with kids too",
    avatar:
      "https://images.unsplash.com/photo-1620324122918-6e47aa23133c?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          width={500}
          height={500}
          className="rounded-full mr-4 size-16 object-cover"
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
