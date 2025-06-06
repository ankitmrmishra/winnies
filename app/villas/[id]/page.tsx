"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  Users,
  Calendar,
  Home,
  Wind,
  Sun,
  Coffee,
  Wifi,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";

// Import Villa 601 (Enchanted) images
import Villa601_1 from "../Room601/20220120-_DSC4399.jpeg";
import Villa601_6 from "../Room601/20220120-_DSC4555.jpg";
import Villa601_8 from "../Room601/20220120-_DSC4561.jpg";
import Villa601_11 from "../Room601/20220120-_DSC4571.jpg";
import Villa601_12 from "../Room601/20220120-_DSC4854.jpg";
import Villa601_13 from "../Room601/20220120-_DSC4857.jpg";

// Import Villa 602 (Perch) images
import Villa602_1 from "../Room602/20220120-_DSC4399.jpeg";
import Villa602_3 from "../Room602/20220120-_DSC4483.jpg";
import Villa602_5 from "../Room602/20220120-_DSC4492.jpg";
import Villa602_7 from "../Room602/20220120-_DSC4505.jpg";
import Villa602_11 from "../Room602/20220120-_DSC4543.jpg";

// Import Villa 603 (Nook) images
import Villa603_2 from "../Room603/20220120-_DSC4699.jpg";
import Villa603_3 from "../Room603/20220120-_DSC4722.jpg";
import Villa603_5 from "../Room603/20220120-_DSC4755.jpg";
import Villa603_6 from "../Room603/20220120-_DSC4770.jpg";
import Villa603_10 from "../Room603/20220120-_DSC4782.jpg";

// Import Villa 604 (Bloom) images
import Villa604_1 from "../Room604/20220120-_DSC4337.jpg";
import Villa604_3 from "../Room604/20220120-_DSC4343.jpg";
import Villa604_4 from "../Room604/20220120-_DSC4350.jpg";
import Villa604_5 from "../Room604/20220120-_DSC4361.jpg";
import Villa604_6 from "../Room604/20220120-_DSC4399.jpg";

// Import Villa 605 (Elevate) images
import Villa605_1 from "../Room605/20220121-_DSC4953.jpg";
import Villa605_2 from "../Room605/20220121-_DSC4962.jpg";
import Villa605_3 from "../Room605/20220121-_DSC4965.jpg";
import Villa605_4 from "../Room605/20220121-_DSC4968.jpg";
import Villa605_5 from "../Room605/20220121-_DSC4971.jpg";
import Villa605_6 from "../Room605/20220121-_DSC4974.jpg";

const playfair = Playfair_Display({ subsets: ["latin"] });

const villasData = [
  {
    id: "601",
    title: "Enchanted",
    description:
      "A luxurious two-bedroom villa offering enchanting valley views and modern amenities. Perfect for small families or couples seeking a magical getaway in the serene hills of Kasauli. Features spacious living areas, and private balconies to enjoy the natural surroundings.",
    location: "Winnie's Retreat, Kasauli, Himachal Pradesh, India",
    squareFeet: 1200,
    pricePerNight: 35000,
    maxGuests: 4,
    bedrooms: 2,
    imageUrl: [
      Villa601_1,
      Villa601_6,
      Villa601_8,
      Villa601_11,
      Villa601_12,
      Villa601_13,
    ],
    amenities: [
      "Valley view",
      "Private balcony",

      "Free Wi-Fi",
      "Air conditioning",
      "LED TV",
      "Premium furnishings",
      "Dining area",
    ],
    features: [
      "Daily housekeeping",
      "Complimentary breakfast",
      "In-villa dining",
      "24/7 room service",
      "Laundry service",
    ],
    policies: {
      "Check-in": "2:00 PM",
      "Check-out": "11:00 AM",
      Cancellation: "Free cancellation up to 7 days before check-in",
      Pets: "Not allowed",
      Smoking: "Non-smoking villa",
      Breakfast: "Included in room price",
    },
  },
  {
    id: "602",
    title: "Perch",
    description:
      "An expansive three-bedroom villa perched on a hilltop, offering panoramic views of the surrounding mountains. Ideal for larger families or groups seeking a luxurious retreat with ample space and premium amenities.",
    location: "Winnie's Retreat, Kasauli, Himachal Pradesh, India",
    squareFeet: 1800,
    pricePerNight: 45000,
    maxGuests: 6,
    bedrooms: 3,
    imageUrl: [Villa602_1, Villa602_3, Villa602_5, Villa602_7, Villa602_11],
    amenities: [
      "Panoramic mountain view",
      "Multiple private balconies",

      "Free Wi-Fi",
      "Air conditioning",
      "Multiple LED TVs",
      "Premium furnishings",
      "Spacious dining area",
    ],
    features: [
      "Daily housekeeping",
      "Complimentary breakfast",
      "In-villa dining",
      "24/7 room service",
      "Laundry service",
      "Private parking",
    ],
    policies: {
      "Check-in": "2:00 PM",
      "Check-out": "11:00 AM",
      Cancellation: "Free cancellation up to 7 days before check-in",
      Pets: "Not allowed",
      Smoking: "Non-smoking villa",
      Breakfast: "Included in room price",
    },
  },
  {
    id: "603",
    title: "Nook",
    description:
      "A charming two-bedroom villa nestled in nature, offering a perfect blend of comfort and tranquility. Features cozy interiors and modern amenities for a memorable stay.",
    location: "Winnie's Retreat, Kasauli, Himachal Pradesh, India",
    squareFeet: 1100,
    pricePerNight: 35000,
    maxGuests: 4,
    bedrooms: 2,
    imageUrl: [Villa603_2, Villa603_3, Villa603_5, Villa603_6, Villa603_10],
    amenities: [
      "Garden view",
      "Private sit-out",

      "Free Wi-Fi",
      "Air conditioning",
      "LED TV",
      "Cozy furnishings",
      "Dining area",
    ],
    features: [
      "Daily housekeeping",
      "Complimentary breakfast",
      "In-villa dining",
      "24/7 room service",
      "Laundry service",
    ],
    policies: {
      "Check-in": "2:00 PM",
      "Check-out": "11:00 AM",
      Cancellation: "Free cancellation up to 7 days before check-in",
      Pets: "Not allowed",
      Smoking: "Non-smoking villa",
      Breakfast: "Included in room price",
    },
  },
  {
    id: "604",
    title: "Bloom",
    description:
      "A beautiful three-bedroom villa surrounded by flowering gardens, offering spacious accommodations with modern luxuries. Perfect for families seeking a refined mountain retreat.",
    location: "Winnie's Retreat, Kasauli, Himachal Pradesh, India",
    squareFeet: 1700,
    pricePerNight: 45000,
    maxGuests: 6,
    bedrooms: 3,
    imageUrl: [Villa604_1, Villa604_3, Villa604_4, Villa604_5, Villa604_6],
    amenities: [
      "Garden view",
      "Multiple balconies",

      "Free Wi-Fi",
      "Air conditioning",
      "Multiple LED TVs",
      "Premium furnishings",
      "Large dining area",
    ],
    features: [
      "Daily housekeeping",
      "Complimentary breakfast",
      "In-villa dining",
      "24/7 room service",
      "Laundry service",
      "Private parking",
    ],
    policies: {
      "Check-in": "2:00 PM",
      "Check-out": "11:00 AM",
      Cancellation: "Free cancellation up to 7 days before check-in",
      Pets: "Not allowed",
      Smoking: "Non-smoking villa",
      Breakfast: "Included in room price",
    },
  },
  {
    id: "605",
    title: "Elevate",
    description:
      "An elevated two-bedroom villa offering stunning views and contemporary comfort. Features modern amenities and stylish interiors for a sophisticated mountain stay.",
    location: "Winnie's Retreat, Kasauli, Himachal Pradesh, India",
    squareFeet: 1150,
    pricePerNight: 35000,
    maxGuests: 4,
    bedrooms: 2,
    imageUrl: [
      Villa605_1,
      Villa605_2,
      Villa605_3,
      Villa605_4,
      Villa605_5,
      Villa605_6,
    ],
    amenities: [
      "Valley view",
      "Private balcony",

      "Free Wi-Fi",
      "Air conditioning",
      "LED TV",
      "Modern furnishings",
      "Dining area",
    ],
    features: [
      "Daily housekeeping",
      "Complimentary breakfast",
      "In-villa dining",
      "24/7 room service",
      "Laundry service",
    ],
    policies: {
      "Check-in": "2:00 PM",
      "Check-out": "11:00 AM",
      Cancellation: "Free cancellation up to 7 days before check-in",
      Pets: "Not allowed",
      Smoking: "Non-smoking villa",
      Breakfast: "Included in room price",
    },
  },
];

interface VillaData {
  id: string;
  title: string;
  description: string;
  location: string;
  squareFeet: number;
  pricePerNight: number;
  maxGuests: number;
  bedrooms: number;
  imageUrl: StaticImageData[];
  amenities: string[];
  features: string[];
  policies: { [key: string]: string };
}

const iconMap: {
  [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
} = {
  "Valley view": Sun,
  "Private balcony": Home,

  "Free Wi-Fi": Wifi,
  "Air conditioning": Wind,
  "LED TV": Sun,
  "Premium furnishings": Home,
  "Dining area": Coffee,
  "Panoramic mountain view": Sun,
  "Multiple private balconies": Home,
  "Multiple LED TVs": Sun,
  "Spacious dining area": Coffee,
  "Garden view": Sun,
  "Private sit-out": Home,
  "Cozy furnishings": Home,
  "Modern furnishings": Home,
  "Daily housekeeping": Home,
  "Complimentary breakfast": Coffee,
  "In-villa dining": Coffee,
  "24/7 room service": Home,
  "Laundry service": Sun,
  "Private parking": Home,
};

function DynamicVillaInfo({ villa }: { villa: VillaData }) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const renderIcon = (item: string) => {
    const IconComponent = iconMap[item as keyof typeof iconMap] || Sun;
    return <IconComponent className="w-5 h-5" />;
  };

  return (
    <div className="grid gap-6 lg:grid-cols-3 max-w-5xl mx-auto">
      <Card className="relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-emerald-800 transition-transform group-hover:scale-105" />
        <div className="relative p-6 text-white">
          <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
          <div className="space-y-4">
            {villa.amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 group/item hover:translate-x-1 transition-transform"
                onMouseEnter={() => setHoveredItem(amenity)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div
                  className={cn(
                    "p-2 rounded-lg transition-colors",
                    hoveredItem === amenity
                      ? "bg-emerald-700/50"
                      : "bg-emerald-800/50"
                  )}
                >
                  {renderIcon(amenity)}
                </div>
                <div className="space-y-0.5">
                  <p className="font-medium">{amenity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card className="relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-emerald-800 transition-transform group-hover:scale-105" />
        <div className="relative p-6 text-white">
          <h2 className="text-2xl font-semibold mb-4">Villa Features</h2>
          <div className="space-y-4">
            {villa.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 group/item hover:translate-x-1 transition-transform"
                onMouseEnter={() => setHoveredItem(feature)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div
                  className={cn(
                    "p-2 rounded-lg transition-colors",
                    hoveredItem === feature
                      ? "bg-emerald-700/50"
                      : "bg-emerald-800/50"
                  )}
                >
                  {renderIcon(feature)}
                </div>
                <div className="space-y-0.5">
                  <p className="font-medium">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card className="relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-emerald-800 transition-transform group-hover:scale-105" />
        <div className="relative p-6 text-white">
          <h2 className="text-2xl font-semibold mb-4">Policies</h2>
          <div className="space-y-4">
            {Object.entries(villa.policies).map(([key, value]) => (
              <div
                key={key}
                className="group/item hover:translate-x-1 transition-transform"
                onMouseEnter={() => setHoveredItem(key)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="space-y-1">
                  <p className="font-medium">{key}</p>
                  <p className="text-sm text-emerald-100/80">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function VillaPage({ params }: PageProps) {
  const router = useRouter();
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const { id } = React.use(params);
  const villa = villasData.find((v) => v.id === id);

  if (!villa) {
    return <div>Villa not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <div className="bg-emerald-900 text-white py-6">
        <div className="mt-20 mx-auto px-4">
          <Link
            href="/villas"
            className="flex items-center text-white hover:text-emerald-200 transition-colors"
          >
            <ChevronLeft className="mr-2" />
            Back to Villas
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 md:px-20 ">
        <div className="grid lg:grid-cols-2 gap-12 w-full">
          <Carousel
            plugins={[plugin.current, Autoplay({ delay: 5000 })]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="w-full h-full"
          >
            <CarouselContent>
              {villa.imageUrl.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${villa.title} - Image ${index + 1}`}
                      width={800}
                      height={800}
                      className="rounded-lg max-h-96 object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute right-[50%] justify-center md:bottom-2 -bottom-5 space-x-2 ">
              <CarouselPrevious variant="outline" size="icon" />
              <CarouselNext variant="outline" size="icon" />
            </div>
          </Carousel>

          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${playfair.className} text-4xl lg:text-5xl text-emerald-900 mb-4`}
            >
              {villa.title}
            </motion.h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {villa.description}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <Users className="text-emerald-700 mr-2" />
                <span>{villa.maxGuests} Guests</span>
              </div>
              <div className="flex items-center">
                <Home className="text-emerald-700 mr-2" />
                <span>{villa.bedrooms} Bedrooms</span>
              </div>
              <div className="flex items-center">
                <Calendar className="text-emerald-700 mr-2" />
                <span>Available</span>
              </div>
              <div className="flex items-center">
                <Wind className="text-emerald-700 mr-2" />
                <span>Air conditioning</span>
              </div>
            </div>
            <p className="text-gray-600 mb-2">
              <strong>Location:</strong> {villa.location}
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Size:</strong> {villa.squareFeet} sq ft
            </p>
            <div className="flex flex-col items-start gap-4 justify-between mb-6">
              <p className="text-emerald-700 font-bold text-3xl">
                ₹{villa.pricePerNight.toLocaleString()}{" "}
                <span className="text-sm text-gray-500 font-normal">
                  / night
                </span>
              </p>
              <Button
                onClick={() =>
                  router.push(
                    "https://bookings.resavenue.com/resBooking/availsearch?regCode=GATE0402"
                  )
                }
                className="bg-emerald-800 hover:bg-emerald-700 text-white"
              >
                Book Now
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <DynamicVillaInfo villa={villa} />
        </div>
      </main>
    </div>
  );
}
