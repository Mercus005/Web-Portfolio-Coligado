"use client";

import Image from "next/image";
import { useState } from "react";

export default function LandingIntro({ onFinish }: { onFinish: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);

  const handleClick = () => {
    setFadeOut(true);
    setTimeout(onFinish, 700);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col md:flex-row transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* === Global Background Shapes === */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top-left triangle */}
        <div
          className="absolute top-0 left-0 w-[200px] h-[200px] bg-gray-900"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        />

        {/* Bottom-right triangle */}
        <div
          className="absolute bottom-0 right-0 w-[220px] h-[220px] bg-gray-800"
          style={{ clipPath: "polygon(100% 100%, 0 100%, 100% 0)" }}
        />

        {/* Center stripe layer */}
        <div
          className="absolute top-1/4 left-0 w-full h-[120px] bg-gray-900/40"
          style={{ clipPath: "polygon(0 0, 100% 30%, 100% 100%, 0 70%)" }}
        />

        {/* Bottom trapezoid */}
        <div
          className="absolute bottom-0 left-0 w-full h-[140px] bg-gray-900"
          style={{ clipPath: "polygon(0 40%, 100% 0%, 100% 100%, 0 100%)" }}
        />

        {/* Left vertical wedge */}
        <div
          className="absolute top-0 left-0 w-[80px] h-full bg-gray-800"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        />

        {/* Top-right overlay */}
        <div
          className="absolute top-0 right-0 w-[240px] h-[140px] bg-black/30"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
        />
      </div>

      {/* === Left Side: Image & Shapes === */}
      <div className="relative w-full md:w-1/3 h-1/2 md:h-full overflow-hidden bg-gray-900 z-10">
        <Image
          src="/image/profilepic.jpg"
          alt="Cliff Coligado"
          fill
          priority
          className="object-cover"
        />

        {/* Layered bottom frame */}
        <div
          className="absolute bottom-0 left-0 w-full h-[120px] bg-gray-900 z-20"
          style={{ clipPath: "polygon(0% 100%, 0% 0%, 65% 100%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-[100px] bg-gray-800 z-10"
          style={{ clipPath: "polygon(0 100%, 0 0, 85% 100%)" }}
        />

        {/* Side triangle wedge */}
        <div
          className="absolute top-0 left-0 h-full w-[60px] bg-black/40 z-20"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        />

        {/* Glow circle top-left */}
        <div className="absolute top-[-40px] left-[-40px] w-52 h-52 bg-white/10 rounded-full blur-3xl z-0" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10" />
      </div>

      {/* === Right Side: Text & Shapes === */}
      <div className="relative w-full md:w-2/3 h-1/2 md:h-full flex items-center justify-center md:justify-start bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-8 md:px-16 py-16 z-10">
  {/* === Floating Text Card === */}
  <div className="relative z-20 px-10 py-12 max-w-xl w-full backdrop-blur-sm rounded-2xl shadow-2xl bg-gray-800/60 animate-fade-in-up"
       style={{ clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0 95%)" }}>
    
    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-br from-white via-gray-300 to-gray-500 bg-clip-text text-transparent mb-6">
      Cliff Coligado
    </h1>

    <p className="text-base md:text-lg text-gray-300/90 leading-relaxed mb-8">
      I’m an aspiring full-stack developer passionate about building intuitive, responsive, and scalable software — from polished interfaces to robust backend systems.
    </p>

    <button
      onClick={handleClick}
      className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-sm font-semibold text-white shadow-md border border-white/10 backdrop-blur-lg transition-all"
    >
      Enter Portfolio →
    </button>
  </div>

  {/* === Optional Backdrop Shape Behind Card === */}
  <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-white/5 rotate-[20deg] rounded-xl z-0 blur-lg" />
</div>

    </div>
  );
}
