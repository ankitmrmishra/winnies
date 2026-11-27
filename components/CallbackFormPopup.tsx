"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { CallbackForm } from "./booking-form";
import { useCallbackPopup } from "@/lib/callback-popup-context";

export function CallbackFormPopup() {
  const { isOpen, closePopup } = useCallbackPopup();

  const handleClose = () => {
    closePopup();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-[61] flex items-center justify-center overflow-y-auto p-4"
          >
            <div className="relative w-full max-w-md">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute right-8 top-8 z-10 rounded-full p-2 transition-colors hover:bg-gray-100"
                aria-label="Close popup"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              {/* Header */}
              {/* <div className="mb-6 pr-8">
                <h2 className="text-2xl font-bold text-emerald-800 mb-2">
                  Get Your Free Quote
                </h2>
                <p className="text-gray-600">
                  Fill in your details and we'll get back to you shortly with a
                  personalized quote.
                </p>
              </div> */}

              {/* Form */}
              <CallbackForm
                active={false}
                triggerKey={0}
                onUserInteraction={() => {}}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
