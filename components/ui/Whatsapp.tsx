"use client";
import React from "react";
import { Button } from "./button";
import { BsWhatsapp } from "react-icons/bs";

export const Whatsapp = () => {
  return (
    <div className="fixed z-50 right-3 bottom-4">
      <div className="mt-8">
        <Button
          size="icon"
          className="w-full bg-emerald-500 hover:bg-emerald-700 text-white px-2 py-3"
          onClick={() => window.open("https://wa.me/9805633007", "_blank")}
        >
          <BsWhatsapp />
          Message us
        </Button>
      </div>
    </div>
  );
};
