"use client";

import React, { useRef, useState } from "react";
// import { FaPause, FaPlay } from "react-icons/fa";

import Content from "@/components/Content";

const PlayerPage = () => {
  // const [isPaused, setIsPaused] = useState(false);
  // const videoRef = useRef<HTMLVideoElement>(null);

  // const togglePlayPause = () => {
  //   if (videoRef.current) {
  //     if (isPaused) {
  //       videoRef.current.play();
  //     } else {
  //       videoRef.current.pause();
  //     }
  //     setIsPaused(!isPaused);
  //   }
  // };

  return (
    <Content>
      <div className="flex-grow">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-2xl font-bold">Player</h1>
          <div className="relative w-[50%] max-w-6xl mx-auto my-4 rounded-xl overflow-hidden">
            {/* <button
              onClick={togglePlayPause}
              className="absolute top-4 right-4 z-10 text-white"
            >
              {isPaused ? <FaPlay size={20} /> : <FaPause size={20} />}
            </button> */}
            <video className="w-full" controls loop muted autoPlay>
              <source src="/video.mp4" />
            </video>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default PlayerPage;
