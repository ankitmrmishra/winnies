"use client";

import { FocusCards } from "@/components/ui/focus-cards";
export function FocusCardsComponent() {
  const cards = [
    {
      title: "Sunset Point",
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/e5/03/8a/caption.jpg?w=1000&h=-1&s=1",
    },
    {
      title: "Christ Church",
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/29/f8/12/christ-church.jpg?w=1000&h=-1&s=1",
    },
    {
      title: "Monkey Point",
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/a1/43/07/img-20170517-082248-359.jpg?w=900&h=-1&s=1",
    },
    {
      title: "Gilbert Nature Trail",
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/81/db/e6/gilbert-trail.jpg?w=1000&h=-1&s=1",
    },
    {
      title: "Mall Road",
      src: "https://www.holidify.com/images/cmsuploads/compressed/4543_20220709112016.jpg",
    },
    {
      title: "Gurkha Fort",
      src: "https://www.exoticmiles.com/wp-content/uploads/2020/06/Gurkha-Fort.jpg",
    },
  ];

  return <FocusCards cards={cards} />;
}
