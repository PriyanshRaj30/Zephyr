import Link from "next/link";
import { ReactNode } from "react";
import VideoBackground from "./components/VideoBackground"; 

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <VideoBackground />
        {children}
      </body>
    </html>
  );
}
