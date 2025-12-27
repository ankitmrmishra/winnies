import { About } from "@/components/About";
import Amenities from "@/components/Amenities";
import { CallbackForm } from "@/components/booking-form";
import BookingForm from "@/components/CalenderBook";
import { CallbackBanner } from "@/components/callback-banner";
import CTA from "@/components/CTA";
import ExperiencesGrid from "@/components/Experience";

import { HeroComponent } from "@/components/HeroComponent";
import { OurVillasBooking } from "@/components/open-villas-card";
import { OurRoomsBooking } from "@/components/our-rooms-card";
import { OurMVPS } from "@/components/OurMVPS";

import { RefundPolicy } from "@/components/refund-policy";
import { SocialMedia } from "@/components/SocialMedia";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <HeroComponent />

      {/* Mobile CallbackForm - shows after hero on small screens */}
      <div className="lg:hidden">
        <CallbackForm />
      </div>

      {/* Grid layout for desktop */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left content - takes 8 columns on large screens */}
          <div className="lg:col-span-8">
            <BookingForm />
            <About />
            <OurMVPS />
            <ExperiencesGrid />
            <CallbackBanner />
            <Amenities />
            <OurRoomsBooking />
            <OurVillasBooking />
            <RefundPolicy />
            <CallbackBanner />
            <Testimonials />
            <SocialMedia />
            <CTA />
          </div>

          {/* Right sidebar - takes 4 columns, sticky on large screens */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-24">
              <CallbackForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
