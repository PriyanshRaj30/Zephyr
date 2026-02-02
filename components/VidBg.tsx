import React from 'react';

interface VideoBackgroundProps {
  videoSrc: string;
  fallbackImage?: string;
  opacity?: number;
  children?: React.ReactNode;
}

export default function VidBg({
  videoSrc,
  fallbackImage,
  opacity = 0,
  children
}: VideoBackgroundProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ opacity }}
        poster={fallbackImage}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30" />

      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}