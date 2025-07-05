"use client";

import React, { useState, useEffect, useRef } from "react";

const About = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [audioStarted, setAudioStarted] = useState(false);
  const [canStartTyping, setCanStartTyping] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const fullText = `Hey Sahil, thank you so much for replying. That alone means a lot to me.

At first, I thought: "What can I show you that isn't basic?" But then I realized the best way is to build something that brings together everything I know.

So I made this.

This project includes animations, optimized data fetching, dynamic content handling, autocomplete, debouncing, AI integration, and a clean, responsive UI. It might still feel basic to someone like you, but it's everything I know, stitched together.

Thank you for letting me share this with you. Whether or not it leads to anything, I'm truly grateful for the opportunity.`;

  const startExperience = () => {
    const audio = new Audio(
      "/sounds/757638__eclectic-kitty__mechanical-keyboard-typing.wav"
    );
    audio.loop = true;
    audio.play().catch((err) => console.error("Audio play error:", err));
    audioRef.current = audio;

    setAudioStarted(true);

    setTimeout(() => {
      setCanStartTyping(true);
    }, 2000);
  };

  useEffect(() => {
    if (canStartTyping && currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }

    if (canStartTyping && currentIndex >= fullText.length) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [currentIndex, fullText, canStartTyping]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <>
      {/* Back button always visible, placed outside overlay */}
      <div
        style={{
          marginTop: "20px",
          marginLeft: "20px",
          zIndex: 100,
          position: "relative",
        }}
      >
        <button
          style={{
          }}
          onClick={() => {
            
       if(audioRef.current){
        audioRef.current.pause();
       }
            window.history.back();
          }}
          className="border h-[32px] w-[32px] rounded-[50%] justify-center items-center flex border-gray-300 bg-gray-100 text-gray-800 cursor-pointer hover:shadow-md hover:bg-gray-200 transition"
        >
          ← 
        </button>
      </div>

      {/* Overlay appears only when experience hasn't started */}
      {!audioStarted && (
        <div className="absolute inset-0 z-40 bg-white flex items-center justify-center">
          <button
            onClick={startExperience}
            style={{ padding: "14px" }}
            className="bg-gray-50 border border-gray-300 rounded text-gray-700 hover:shadow-sm hover:border-gray-400 transition-all duration-150 text-sm font-medium"
          >
            Click to start
          </button>
        </div>
      )}

      <div
        style={{ padding: "14px", marginTop: "40px" }}
        className="min-h-screen bg-white flex justify-center"
      >
        <div className="max-w-4xl w-full z-10">
          <h1
            style={{ marginBottom: "14px" }}
            className="font-mono text-lg leading-relaxed text-gray-800 md:text-xl lg:text-xl"
          >
            Happy frontend engineer 😎
          </h1>

          <div className="font-mono text-lg leading-relaxed text-gray-800 md:text-xl lg:text-xl">
            {displayText}
            <span
              className={`ml-1 border-l-2 border-gray-800 ${
                showCursor ? "opacity-100" : "opacity-0"
              } transition-opacity duration-100`}
            ></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
