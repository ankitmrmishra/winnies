"use client";

import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallbackBanner({ onRequest }: { onRequest: () => void }) {
  return (
    <div className="w-full max-w-4xl mx-auto my-12 overflow-hidden rounded-2xl">
      <div className="flex flex-col md:flex-row items-center justify-between px-8 py-4 gap-4 bg-gradient-to-r from-[#FEF9C3] via-[#FBCFE8] to-[#F5D0FE]">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-emerald-950/10 rounded-full">
            <Phone className="w-6 h-6 text-emerald-950" />
          </div>
          <span className="text-emerald-950 font-medium text-lg">
            Send a query
          </span>
        </div>

        <Button
          onClick={onRequest}
          className="bg-white/40 hover:bg-white/60 text-emerald-950 border border-white/50 backdrop-blur-md rounded-full px-8 py-6 text-lg font-medium shadow-sm transition-all"
        >
          Book Your Stay
        </Button>
      </div>
    </div>
  );
}
