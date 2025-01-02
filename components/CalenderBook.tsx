"use client";

import { Calendar } from "lucide-react";
import React, { useState } from "react";
import { format, addDays, parseISO, isValid } from "date-fns";

const BookingForm = () => {
  const today = new Date();
  const tomorrow = addDays(today, 1);

  const [checkInDate, setCheckInDate] = useState(format(today, "yyyy-MM-dd"));
  const [checkOutDate, setCheckOutDate] = useState(
    format(tomorrow, "yyyy-MM-dd")
  );
  const [error, setError] = useState({ checkIn: false, checkOut: false });

  const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckIn = e.target.value;
    if (isValid(parseISO(newCheckIn))) {
      setCheckInDate(newCheckIn);
      if (newCheckIn >= checkOutDate) {
        const nextDay = format(addDays(parseISO(newCheckIn), 1), "yyyy-MM-dd");
        setCheckOutDate(nextDay);
      }
    }
  };

  const handleCheckOutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckOut = e.target.value;
    if (isValid(parseISO(newCheckOut))) {
      setCheckOutDate(newCheckOut);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let isValidForm = true;

    if (!isValid(parseISO(checkInDate))) {
      setError((prev) => ({ ...prev, checkIn: true }));
      isValidForm = false;
    } else {
      setError((prev) => ({ ...prev, checkIn: false }));
    }

    if (!isValid(parseISO(checkOutDate))) {
      setError((prev) => ({ ...prev, checkOut: true }));
      isValidForm = false;
    } else {
      setError((prev) => ({ ...prev, checkOut: false }));
    }

    if (isValidForm) {
      const formattedCheckIn = format(parseISO(checkInDate), "dd/MM/yyyy");
      const formattedCheckOut = format(parseISO(checkOutDate), "dd/MM/yyyy");

      const url = `https://bookings.resavenue.com/resBooking4/searchRooms?targetTemplate=4&arrDate=${formattedCheckIn}&depDate=${formattedCheckOut}&regCode=GATE0402&curr=INR&arr_date=${formattedCheckIn}&dep_date=${formattedCheckOut}`;
      window.location.href = url;
    }
  };

  return (
    <div className="md:px-[10rem]px-2 mt-3">
      <div className="w-full bg-[#0B3B2D] text-white rounded-lg shadow-xl overflow-hidden">
        <form onSubmit={handleSubmit} className="p-6 md:p-8 lg:p-10">
          <div className="grid gap-2 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {/* Heading */}
            <div className="md:col-span-1">
              <h2 className="text-lg md:text-xl font-bold mb-2">
                BOOK YOUR
                <span className="block text-[#FFA500]">IDEAL STAY</span>
              </h2>
            </div>

            {/* Check-in Date */}
            <div className="relative md:col-span-1">
              <label className="block text-sm font-medium mb-1">CHECK-IN</label>
              <div className="relative">
                <input
                  type="date"
                  value={checkInDate}
                  onChange={handleCheckInChange}
                  min={format(today, "yyyy-MM-dd")}
                  className={`w-full bg-transparent border-2 rounded-lg px-4 py-2 appearance-none ${
                    error.checkIn ? "border-red-500" : "border-gray-400"
                  }`}
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
              {error.checkIn && (
                <p className="mt-1 text-sm text-red-500">
                  Check-in date is required.
                </p>
              )}
            </div>

            {/* Separator */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-px h-10 bg-gray-400"></div>
            </div>

            {/* Check-out Date */}
            <div className="relative md:col-span-1">
              <label className="block text-sm font-medium mb-1">
                CHECK-OUT
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={checkOutDate}
                  onChange={handleCheckOutChange}
                  min={format(addDays(parseISO(checkInDate), 1), "yyyy-MM-dd")}
                  className={`w-full bg-transparent border-2 rounded-lg px-4 py-2 appearance-none ${
                    error.checkOut ? "border-red-500" : "border-gray-400"
                  }`}
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
              {error.checkOut && (
                <p className="mt-1 text-sm text-red-500">
                  Check-out date is required.
                </p>
              )}
            </div>

            {/* Book Now Button */}
            <button
              type="submit"
              className="md:col-span-1 bg-[#FFA500] text-white px-8 py-3 rounded-lg hover:bg-[#ff9100] transition-colors duration-200 font-semibold text-center h-fit self-end"
            >
              BOOK NOW
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
