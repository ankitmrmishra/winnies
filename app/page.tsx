import { About } from "@/components/About";
import Amenities from "@/components/Amenities";
import BookingForm from "@/components/CalenderBook";
import CTA from "@/components/CTA";
import ExperiencesGrid from "@/components/Experience";

import { HeroComponent } from "@/components/HeroComponent";
import { OurMVPS } from "@/components/OurMVPS";
import { OurRooms } from "@/components/OurRooms";
import { SocialMedia } from "@/components/SocialMedia";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <HeroComponent />
      <BookingForm />
      <About />
      <OurMVPS />
      <ExperiencesGrid />
      <Amenities />
      <OurRooms />

      <Testimonials />
      <SocialMedia />
      <CTA />
    </div>
  );
}
