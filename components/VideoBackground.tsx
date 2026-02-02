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
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <video autoPlay muted loop className="video">         
          <source src={`/lofi1.mp4`} type="video/mp4"/>       
      </video>
  );
}
