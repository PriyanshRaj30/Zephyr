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
    }, 60000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="fixed inset-0 z-0 pointer-events-none" style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <video
        key={videos[index]} 
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="video"
      >
        <source src={videos[index]} type="video/mp4" />
      </video>
    </div>
  );
}

