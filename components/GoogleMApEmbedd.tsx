"use client";

import React from "react";

type GoogleMapEmbedProps = {
  title?: string;
  height?: number;
};

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.651913637149!2d76.9934469753798!3d30.896397174505708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f88be92e329ff%3A0xcaa9ecb0fabbedec!2sWinnies%20Holiday%20Resort%20%26%20Spa%20Kasauli!5e0!3m2!1sen!2sin!4v1767431207644!5m2!1sen!2sin";

export const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({
  title = "Winnies Holiday Resort & Spa Location",
  height = 450,
}) => {
  return (
    <section
      className="w-full overflow-hidden rounded-2xl border bg-white shadow-sm"
      aria-label={title}
    >
      <div className="relative w-full" style={{ height }}>
        <iframe
          src={MAP_SRC}
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          title={title}
        />
      </div>
    </section>
  );
};
