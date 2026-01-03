"use client";

import { About } from "@/components/About";
import Amenities from "@/components/Amenities";
import { CallbackForm, CallbackFormHandle } from "@/components/booking-form";
import { CallbackBanner } from "@/components/callback-banner";
import CTA from "@/components/CTA";
import ExperiencesGrid from "@/components/Experience";
import { OurVillasBooking } from "@/components/open-villas-card";
import { OurRoomsBooking } from "@/components/our-rooms-card";
import { RefundPolicy } from "@/components/refund-policy";
import { SocialMedia } from "@/components/SocialMedia";
import Testimonials from "@/components/Testimonials";
import { HeroComponentBooking } from "./HeroComponent";
import BookingNavbar from "./bookingnav";
import TopCallBanner from "./components/top-banner";
import { useRef, useState, useEffect } from "react";
import { GoogleMapEmbed } from "@/components/GoogleMApEmbedd";

export default function Home() {
  const desktopFormRef = useRef<CallbackFormHandle>(null);
  const mobileFormRef = useRef<CallbackFormHandle>(null);

  const [active, setActive] = useState(false);
  const [triggerKey, setTriggerKey] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  /* detect screen size */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleRequestCallback = () => {
    const ref = isMobile ? mobileFormRef : desktopFormRef;

    // 📜 First, scroll the form into view
    ref.current?.scrollIntoView?.({
      behavior: "smooth",
      block: "center",
    });

    // ⏱️ Wait for scroll to complete, then trigger animation
    setTimeout(() => {
      setActive(true);
      setTriggerKey((k) => k + 1);

      // 🎯 Focus input after animation starts
      setTimeout(() => {
        ref.current?.focus();
      }, 100);

      // ⏱ Auto-remove glow after 2.5s
      setTimeout(() => setActive(false), 2500);
    }, 500); // Give scroll time to start
  };

  const handleUserInteraction = () => {
    setActive(false);
  };

  return (
    <div>
      <TopCallBanner />
      <BookingNavbar onRequest={handleRequestCallback} />
      <HeroComponentBooking />

      {/* 📱 Mobile */}
      <div className="lg:hidden px-4">
        <CallbackForm
          ref={mobileFormRef}
          active={active}
          triggerKey={triggerKey}
          onUserInteraction={handleUserInteraction}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left */}
          <div className="lg:col-span-8">
            <OurRoomsBooking />
            <OurVillasBooking />
            <CallbackBanner onRequest={handleRequestCallback} />
            <RefundPolicy />
            <ExperiencesGrid />

            <CallbackBanner onRequest={handleRequestCallback} />

            <Amenities />

            <Testimonials />
            <SocialMedia />
            <CallbackBanner onRequest={handleRequestCallback} />
            <About onRequest={handleRequestCallback} />
            <GoogleMapEmbed />
            <CTA onRequest={handleRequestCallback} />
          </div>

          {/* 🖥 Desktop sticky */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-24">
              <CallbackForm
                ref={desktopFormRef}
                active={active}
                triggerKey={triggerKey}
                onUserInteraction={handleUserInteraction}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
