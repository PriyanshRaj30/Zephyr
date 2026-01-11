"use client";

import { useEffect, useState } from "react";

const videos = [
  "/lofi1.mp4",
  "/lofi2.mp4",
  "/lofi3.mp4",
  
];

export default function VideoBackground() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        key={videos[index]} // 👈 forces reload for smooth switching
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover transition-opacity duration-1000"
      >
        <source src={videos[index]} type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
