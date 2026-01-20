"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { CallbackForm } from "./booking-form";
import { usePathname } from "next/navigation";
import { useCallbackPopup } from "@/lib/callback-popup-context";

export function CallbackFormPopup() {
  const [autoPopupShown, setAutoPopupShown] = useState(false);
  const pathname = usePathname();
  const { isOpen, closePopup } = useCallbackPopup();

  useEffect(() => {
    console.log("CallbackFormPopup mounted, pathname:", pathname);

    // Don't show auto popup on booking page
   

    // Check if popup was shown today (localStorage persists across sessions)
    const lastShown = localStorage.getItem("callbackPopupLastShown");
    const today = new Date().toDateString();
    
    if (lastShown === today) {
      console.log("Auto popup already shown today");
      return;
    }

    // Random delay between 6-8 seconds
    const delay = Math.random() * 2000 + 6000; // 6000ms to 8000ms
    console.log(`Auto popup will show in ${(delay / 1000).toFixed(1)} seconds`);

    const timer = setTimeout(() => {
      console.log("Showing auto popup now");
      setAutoPopupShown(true);
      localStorage.setItem("callbackPopupLastShown", today);
    }, delay);

    return () => {
      console.log("Cleaning up auto popup timer");
      clearTimeout(timer);
    };
  }, [pathname]);

  const handleClose = () => {
    console.log("Closing popup");
    setAutoPopupShown(false);
    closePopup();
  };

  // Show popup if either auto-triggered or manually triggered
  const shouldShowPopup = isOpen || autoPopupShown;

  // Don't render anything on booking page
  // if (pathname?.startsWith("/booking")) return null;

  return (
    <AnimatePresence>
      {shouldShowPopup && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed mx-auto  inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed mx-auto  w-screen h-screen flex justify-center align-middle items-center z-50  max-h-[100vh]  "
          >
            <div className="relative  max-w-max flex justify-center align-middle item-center rounded-2xl shadow-2xl p-6">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-8 right-8 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
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
