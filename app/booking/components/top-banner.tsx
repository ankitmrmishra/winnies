"use client";

import { Phone } from "lucide-react";
import { useState } from "react";

const PHONE_NUMBER = "+91 98056 33007"; // change this

export default function TopCallBanner() {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    // Mobile devices → open dialer
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
      window.location.href = `tel:${PHONE_NUMBER.replace(/\s+/g, "")}`;
      return;
    }

    // Desktop → copy number
    await navigator.clipboard.writeText(PHONE_NUMBER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-gray-900 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-end items-center">
        <button
          onClick={handleClick}
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-1.5 rounded-full transition"
        >
          <Phone size={16} />
          <span>{copied ? "Copied!" : PHONE_NUMBER}</span>
        </button>
      </div>
    </div>
  );
}
