"use client";

import { useEffect, useState } from "react";
import { Users, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { packages } from "@/data/packages";

export function PackageModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPackageIndex, setCurrentPackageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const nextPackage = () => {
    setCurrentPackageIndex((prevIndex) => (prevIndex + 1) % packages.length);
  };

  const prevPackage = () => {
    setCurrentPackageIndex(
      (prevIndex) => (prevIndex - 1 + packages.length) % packages.length
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[900px] bg-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-4xl text-center text-emerald-800 italic">
            Special Packages
          </DialogTitle>
          {/* <Button
            variant="ghost"
            className="absolute right-4 top-4 rounded-full bg-emerald-100 text-emerald-800 hover:bg-emerald-200 hover:text-emerald-900 z-10"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button> */}
        </DialogHeader>
        <div className="py-6">
          {/* Mobile view */}
          <div className="block sm:hidden">
            <PackageCard pkg={packages[currentPackageIndex]} />
            <div className="flex justify-between mt-4">
              <Button
                onClick={prevPackage}
                variant="outline"
                className="text-emerald-800"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              <Button
                onClick={nextPackage}
                variant="outline"
                className="text-emerald-800"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Desktop view */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
export interface Package {
  title: string;
  price: string;
  occupancy: string;
  description: string[];
}

function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-emerald-100 flex flex-col justify-between"
    >
      <div>
        <h3 className="text-xl font-semibold mb-4 text-emerald-800 italic">
          {pkg.title}
        </h3>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
          <div className="flex items-center mb-2 sm:mb-0">
            <span className="text-2xl sm:text-3xl font-bold text-emerald-800">
              ₹{pkg.price}
            </span>
            <span className="text-gray-600 ml-2">/ package</span>
          </div>
          <div className="flex items-center">
            <Users className="w-5 h-5 text-emerald-600 mr-2" />
            <span className="text-gray-600">{pkg.occupancy}</span>
          </div>
        </div>
        <ul className="space-y-2 mb-6">
          {pkg.description.map((item, i) => (
            <li key={i} className="flex items-start">
              <span className="text-emerald-600 mr-2">•</span>
              <span className="text-gray-600">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button className="w-full bg-emerald-800 hover:bg-emerald-700 text-white">
        Book Now
      </Button>
    </motion.div>
  );
}
