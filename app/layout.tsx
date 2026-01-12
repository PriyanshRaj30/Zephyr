import Link from "next/link";
import { ReactNode } from "react";
import VideoBackground from "./components/VideoBackground";
import MusicBar from "./components/MusicBar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full relative overflow-hidden">
        <VideoBackground />
        {children}
        <MusicBar />
      </body>
    </html>
  );
}

