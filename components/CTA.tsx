"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="lg:p-20 md:p-20 bg-[#faf9f6] p-5 ">
      <div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 z-0">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={isInView ? { scale: 1 } : { scale: 1.1 }}
              transition={{ duration: 8 }}
              src="https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 px-6 py-12 sm:px-12 sm:py-24 lg:py-32 flex flex-col items-start">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-2xl"
            >
              Nature Reimagined{" "}
              <span className="text-amber-400">Visit us.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl"
            >
              Rediscover nature&apos;s wonders in a way you&apos;ve never
              imagined. Visit us for a unique adventure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button className="bg-white text-black hover:bg-white/90 text-base px-8 py-3 rounded-full">
                Reserve now
              </Button>
              <Button
                variant="outline"
                className="border-2 border-emerald-800 text-white bg-transparent hover:bg-white text-base px-8 py-3 rounded-full"
              >
                Browse all Rooms
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
