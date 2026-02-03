"use client";

import { useState } from "react";
import Link from "next/link";
import VideoCall from "@/components/VideoCall";
// import { Link } from 'react-router-dom';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [isVideoCalling, setIsVideoCalling] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="flex h-16 items-center justify-between">

                        {/* Logo */}
                        <Link href="/" className="text-xl font-semibold text-white">
                            Zephyr
                        </Link>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-8">
                            <Link href="/" className="nav-link">Home</Link>
                            <button
                                onClick={() => setIsVideoCalling(!isVideoCalling)}
                                className="nav-link">
                                Duo Meet
                            </button>
                        </div>

                        {/* Mobile Button */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="md:hidden text-white"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                            >
                                {open ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10">
                        <div className="flex flex-col gap-4 px-6 py-6">
                            <Link href="/" onClick={() => setOpen(false)} className="mobile-link">Home</Link>
                            <button
                                onClick={() => {
                                    setIsVideoCalling(!isVideoCalling);
                                    setOpen(false);
                                }}
                                className="nav-link text-left"
                            >
                                Duo Meet
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Video Call Modal/Overlay */}
            {isVideoCalling && (
                <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="w-full max-w-6xl bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-6 relative max-h-[90vh] overflow-y-auto">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsVideoCalling(false)}
                            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 hover:rotate-90"
                        >
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        <VideoCall />
                    </div>
                </div>
            )}
        </>
    );
}