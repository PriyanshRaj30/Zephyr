'use client';

interface NavbarProps {
    onVideoCallToggle: () => void;
    isVideoCallOpen: boolean;
}

export default function Navbar({ onVideoCallToggle, isVideoCallOpen }: NavbarProps) {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 p-6">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo/Brand */}
                <div className="text-white font-bold text-2xl tracking-wide">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Zephyr
                    </span>
                </div>

                {/* Video Call Button */}
                <button
                    onClick={onVideoCallToggle}
                    className="group relative px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95"
                    aria-label="Toggle Video Call"
                >
                    <div className="flex items-center gap-2">
                        {/* Video Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 transition-transform group-hover:rotate-12"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                        </svg>
                        <span>{isVideoCallOpen ? 'Close Call' : 'Video Call'}</span>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
                </button>
            </div>
        </nav>
    );
}
