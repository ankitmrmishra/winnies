"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export function About() {
  return (
    <section
      className={`py-20 sticky px-6 md:px-20 bg-[#faf9f6] text-black  h-screen flex justify-center align-middle items-center overflow-hidden ${inter.className}`}
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="italic font-medium">
          Experience the Essence of Nature, Wrapped in Luxury
        </span>
        <h2
          className={`text-3xl italic md:text-7xl font-heading text-emerald-800 mb-6 ${playfair.className}`}
        >
          Winnies <br />
          <span className="md:text-5xl text-2xl">Holiday Resort & Spa</span>
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto font-body">
          Set in the quiet beauty of Kasauli’s hills, Winnies Resort is your
          retreat for peace and comfort. With luxurious amenities and stunning
          natural surroundings, this haven offers the ideal escape from the
          city, letting you unwind and revive in nature’s gentle embrace.
        </p>
        <Button
          variant="outline"
          className="border-emerald-700 text-black hover:bg-emerald-600 hover:text-white transition-colors duration-300"
        >
          Learn More
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      {/* <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <span
          className={`text-[20vw] font-bold whitespace-nowrap ${playfair.className}`}
        >
          RELAX & UNWIND
        </span>
      </div> */}
    </section>
  );
}
