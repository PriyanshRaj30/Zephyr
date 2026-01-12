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
    <div className="fixed inset-0 z-0 pointer-events-none" style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <video
        key={videos[index]} 
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          minWidth: '100%',
          minHeight: '100%',
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <source src={videos[index]} type="video/mp4" />
      </video>
    </div>
  );
}

