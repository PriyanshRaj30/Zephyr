'use client';
import { useEffect, useRef, useState } from "react";
import Peer from "peerjs";

export default function VideoCall() {
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);

  const [peer, setPeer] = useState<Peer | null>(null);
  const [peerId, setPeerId] = useState("");
  const [remoteId, setRemoteId] = useState("");

  // Init Peer
  useEffect(() => {
    const p = new Peer(); // uses public PeerJS server
    setPeer(p);

    p.on("open", (id) => {
      setPeerId(id);
      console.log("My Peer ID:", id);
    });

    p.on("call", async (call) => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }

      call.answer(stream);

      call.on("stream", (remoteStream) => {
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = remoteStream;
        }
      });
    });

    return () => p.destroy();
  }, []);

  // Call Friend
  const callPeer = async () => {
    if (!peer) return;

    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    if (localVideoRef.current) {
      localVideoRef.current.srcObject = stream;
    }

    const call = peer.call(remoteId, stream);

    call.on("stream", (remoteStream) => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = remoteStream;
      }
    });
  };

  return (
    <div className="space-y-6 text-white">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
        Video Call
      </h2>

      {/* Peer ID Display */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
        <p className="text-sm text-white/60 mb-1">Your Peer ID</p>
        <p className="font-mono text-lg break-all bg-white/5 p-3 rounded-lg border border-white/10">
          {peerId || 'Connecting...'}
        </p>
      </div>

      {/* Call Controls */}
      <div className="flex gap-3 flex-col sm:flex-row">
        <input
          placeholder="Enter friend's Peer ID"
          value={remoteId}
          onChange={(e) => setRemoteId(e.target.value)}
          className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
        />

        <button
          onClick={callPeer}
          className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          disabled={!peer || !remoteId}
        >
          Start Call
        </button>
      </div>

      {/* Video Streams */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {/* Local Video */}
        <div className="relative aspect-video bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
          <video
            ref={localVideoRef}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-sm font-medium">
            You
          </div>
        </div>

        {/* Remote Video */}
        <div className="relative aspect-video bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
          <video
            ref={remoteVideoRef}
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-sm font-medium">
            Friend
          </div>
        </div>
      </div>
    </div>
  );
}
