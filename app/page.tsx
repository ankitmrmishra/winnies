import Amenities from "@/components/Amenities";
import CTA from "@/components/CTA";
import ExperiencesGrid from "@/components/Experience";

import { HeroComponent } from "@/components/HeroComponent";
import { OurRooms } from "@/components/OurRooms";
import { SocialMedia } from "@/components/SocialMedia";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <HeroComponent />
      <ExperiencesGrid />
      <Amenities />
      <OurRooms />

      <Testimonials />
      <SocialMedia />
      <CTA />
    </div>
  );
}
