"use client";

import { useEffect, useState } from "react";

export function ChatbotIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the indicator after 15 seconds or when user clicks on the chatbot area
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 15000);

    const handleClick = (e: MouseEvent) => {
      // Hide if clicking near bottom-right (where chatbot is)
      if (window.innerWidth - e.clientX < 200 && window.innerHeight - e.clientY < 200) {
        setIsVisible(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-28 right-8 z-[9998] pointer-events-none">
      <div className="relative">
        {/* Clean white tooltip */}
        <div className="bg-white text-gray-800 px-4 py-3 rounded-lg shadow-xl border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-emerald-400 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <span className="font-bold text-sm text-gray-900">
              Chat with us!
            </span>
          </div>
          <p className="text-xs text-gray-600">
            Ask about rooms, bookings & more
          </p>
          {/* Arrow pointing down-right */}
          <div className="absolute top-full right-8 -mt-1">
            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
