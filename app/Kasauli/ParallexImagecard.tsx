"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export function ParallexImagecard() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    imageRefs.current = imageRefs.current.slice(0, 4);
  }, []);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    if (hoveredIndex === index) {
      const { left, top, width, height } =
        e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      if (imageRefs.current[index]) {
        imageRefs.current[index]!.style.transform = `
          scale(1.1)
          translate3d(${x * 10}px, ${y * 10}px, 0)
        `;
      }
    }
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = (index: number) => {
    setHoveredIndex(null);
    if (imageRefs.current[index]) {
      imageRefs.current[index]!.style.transform = "";
    }
  };

  const images = [
    {
      src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
      alt: "Kasauli landscape",
      className: "col-span-2 row-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1618979555863-1f2f9d6caf6c",
      alt: "Colonial architecture",
      className: "col-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1598091383021-15ddea10925d",
      alt: "Kasauli town",
    },
    {
      src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
      alt: "Pine forests",
    },
  ];

  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-2 max-w-5xl mx-auto p-4">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative overflow-hidden rounded-lg ${
            image.className || ""
          }`}
          onMouseMove={(e) => handleMouseMove(e, index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <Image
            ref={(el) => {
              imageRefs.current[index] = el;
            }}
            src={image.src}
            alt={image.alt}
            width={800}
            height={800}
            className="object-cover w-full h-full transition-transform duration-300 ease-out"
          />
        </div>
      ))}
    </div>
  );
}
