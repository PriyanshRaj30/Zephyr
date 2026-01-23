import Link from "next/link";
import { ReactNode } from "react";
import VideoBackground from "../components/VideoBackground";
import MusicBar from "../components/MusicBar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-hidden">
        {/* Background */}
        <VideoBackground />

        {/* Overlay Content */}
        <div className="relative z-10 min-h-screen">
          {children}
        </div>

        <MusicBar />
      </body>
    </html>
  );
}

