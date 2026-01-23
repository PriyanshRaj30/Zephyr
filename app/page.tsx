'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import VideoCall from '@/components/VideoCall';

export default function Home() {
  const [isVideoCallOpen, setIsVideoCallOpen] = useState(false);

  const toggleVideoCall = () => {
    setIsVideoCallOpen(!isVideoCallOpen);
  };

  return (
    <main className="relative h-screen w-full">
      {/* Navbar */}
      <div className="relative z-50">
        <Navbar onVideoCallToggle={toggleVideoCall} isVideoCallOpen={isVideoCallOpen} />
      </div>

      {/* Hero Content */}
      <div className="flex items-center justify-center h-full">
        <div className="text-center text-white space-y-6 px-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Welcome to Zephyr
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide">
            Your space for focus and connection
          </p>
        </div>
      </div>

      {/* Video Call Modal */}
      {isVideoCallOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-6xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-6 max-h-[90vh] overflow-auto">
            {/* Close Button */}
            <button
              onClick={toggleVideoCall}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 hover:rotate-90"
              aria-label="Close Video Call"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Call Component */}
            <VideoCall />
          </div>
        </div>
      )}
    </main>
  );
}
