"use client";

import { Phone } from "lucide-react";

export function FloatingCallButton() {
  const phoneNumber = "9805633007";

  const handleCall = () => {
    // Track call click in Google Analytics
    if (typeof window !== "undefined" && (window as Window & { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as unknown as Window & { gtag: (...args: unknown[]) => void }).gtag("event", "click_to_call", {
        event_category: "engagement",
        event_label: "Floating Call Button",
        phone_number: phoneNumber,
        click_id: "floating-call-button",
        button_location: "floating_sidebar",
      });
    }

    // Initiate phone call
    window.location.href = `tel:+91${phoneNumber}`;
  };

  return (
    <button
      onClick={handleCall}
      id="floating-call-button"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-emerald-600 hover:bg-emerald-700 text-white py-6 pl-4 pr-6 shadow-lg transition-colors group z-50"
      style={{
        borderTopLeftRadius: "24px",
        borderBottomLeftRadius: "24px",
      }}
    >
      <div className="flex flex-col items-center gap-2 ">
        <Phone className="w-6 h-6" />
        
      </div>
    </button>
  );
}
