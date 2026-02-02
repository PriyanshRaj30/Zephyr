import "./globals.css";
import MusicBar from "../components/MusicBar";
import "./globals.css";
import Navbar from "../components/Navbar";
import { color } from "framer-motion";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body >
        {<video autoPlay muted loop className="video">
          <source src="/lofi1.mp4" type="video/mp4" />
        </video> }

        <Navbar />
        <main className="relative z-10 min-h-screen pt-16">
          {children}
        </main>

        {/* <MusicBar /> */}
    </body>

    </html>
  );
}