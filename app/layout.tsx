import "./globals.css";
import MusicBar from "../components/MusicBar";
import "./globals.css";
import VideoBackground from "@/components/VideoBackground";
import Navbar from "../components/Navbar";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body >
        <VideoBackground />
        <Navbar />
        <main className="relative z-10 min-h-screen pt-16">
          {children}
        </main>

        <MusicBar />
    </body>

    </html>
  );
}