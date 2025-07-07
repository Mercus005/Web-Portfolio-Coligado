"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { getImagePrefix } from "../../utils/utils";


export default function LandingIntro({ onFinish }: { onFinish: () => void }) {
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = () => {
    if (!isExiting) {
      setIsExiting(true);
      setTimeout(onFinish, 1000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        handleEnter();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-50 w-full h-full overflow-hidden bg-gray-900"
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-0 w-[200px] h-[200px] bg-gray-800"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[220px] h-[220px] bg-gray-700"
          style={{ clipPath: "polygon(100% 100%, 0 100%, 100% 0)" }}
        />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB...')] bg-[length:20px_20px]" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row">
        <div className="relative w-full lg:w-1/3 h-1/2 lg:h-full overflow-hidden group">
          <div className="absolute inset-0 m-4 lg:m-6 rounded-xl overflow-hidden border border-gray-700/50 shadow-2xl transition-all duration-700 group-hover:shadow-gray-600/30">
            <div className="absolute inset-0 rounded-xl pointer-events-none shadow-[inset_0_0_30px_0_rgba(255,255,255,0.05)]" />
            <img
              src={`${getImagePrefix()}image/profilepic.png`} // ✅ FIXED HERE
              alt="Professional portrait of Cliff Coligado"
              className="w-full h-full object-cover scale-[1.03]"
            />
            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white/10 transition-all duration-300" />
          </div>
          <div
            className="absolute bottom-0 left-0 w-full h-[120px] bg-gray-900 z-20"
            style={{ clipPath: "polygon(0% 100%, 0% 0%, 65% 100%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-full h-[100px] bg-gray-800 z-10"
            style={{ clipPath: "polygon(0 100%, 0 0, 85% 100%)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
        </div>

        {/* ... rest of your unchanged content ... */}
      </div>

      {/* ... scroll hint unchanged ... */}
    </motion.div>
  );
}
