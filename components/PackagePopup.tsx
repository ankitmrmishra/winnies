"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCallbackPopup } from "@/lib/callback-popup-context";

export function PackageModal() {
  const [isOpen, setIsOpen] = useState(true);
  const { openPopup } = useCallbackPopup();
  const pathname = usePathname();

  const closeOffer = () => {
    setIsOpen(false);
    openPopup();
  };

  if (pathname.startsWith("/booking")) return null;

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) closeOffer();
      }}
    >
      <DialogContent className="w-fit max-w-[calc(100vw-2rem)] border-none bg-transparent p-0 shadow-none [&>button]:hidden">
        <DialogTitle className="sr-only">New Year package offer</DialogTitle>
        <div className="relative flex max-h-[calc(100dvh-2rem)] max-w-[calc(100vw-2rem)] items-center justify-center">
          <Image
            src="/assets/popnewyear2027.jpeg"
            alt="New Year 2027 package offer"
            width={1199}
            height={1312}
            priority
            className="h-auto max-h-[calc(100dvh-2rem)] w-auto max-w-[calc(100vw-2rem)] rounded-xl object-contain"
          />
          <button
            type="button"
            onClick={closeOffer}
            aria-label="Close New Year offer and open the quote form"
            className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-gray-800 shadow-md transition-colors hover:bg-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
