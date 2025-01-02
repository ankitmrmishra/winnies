"use client";

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

      // Ensure checkout is at least one day after checkin
      if (newCheckIn >= checkOutDate) {
        const nextDay = format(addDays(new Date(newCheckIn), 1), "yyyy-MM-dd");
        setCheckOutDate(nextDay);
      }
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
      // Format dates for the URL
      const formattedCheckIn = format(parseISO(checkInDate), "dd-MM-yyyy");
      const formattedCheckOut = format(parseISO(checkOutDate), "dd-MM-yyyy");

      const url = `https://bookings.resavenue.com/resBooking4/searchRooms?arrDate=${formattedCheckIn}&depDate=${formattedCheckOut}&regCode=GATE0402&curr=INR`;
      window.location.href = url;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Book Your Ideal Stay
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="checkInDate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Check-in
            </label>
            <input
              id="checkInDate"
              type="date"
              value={checkInDate}
              onChange={handleCheckInChange}
              min={format(today, "yyyy-MM-dd")}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors ${
                error.checkIn ? "border-red-500" : "border-gray-300"
              }`}
            />
            {error.checkIn && (
              <p className="mt-1 text-sm text-red-500">
                Check-in date is invalid or required.
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="checkOutDate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Check-out
            </label>
            <input
              id="checkOutDate"
              type="date"
              value={checkOutDate}
              onChange={(e) => {
                const newCheckOut = e.target.value;
                if (isValid(parseISO(newCheckOut))) {
                  setCheckOutDate(newCheckOut);
                }
              }}
              min={format(addDays(parseISO(checkInDate), 1), "yyyy-MM-dd")}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors ${
                error.checkOut ? "border-red-500" : "border-gray-300"
              }`}
            />
            {error.checkOut && (
              <p className="mt-1 text-sm text-red-500">
                Check-out date is invalid or required.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-3 px-4 rounded-lg hover:bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
