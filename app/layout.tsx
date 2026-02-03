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
        {/* {<video autoPlay muted loop className="video">
          <source src="/lofi2.mp4" type="video/mp4" />
        </video> } */}
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