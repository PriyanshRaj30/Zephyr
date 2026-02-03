"use client";

import { useEffect, useState } from "react";

const videos = [
  "/lofi1.mp4",
  "/lofi2.mp4",
  "/lofi3.mp4"
];

export default function VideoBackground() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, 1_000); // change every 60 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <video
      key={videos[index]}
      autoPlay
      muted
      loop
      playsInline
      className="video"
    >
      <source src={videos[index]} type="video/mp4" />
    </video>
  );
}
