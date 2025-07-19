"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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
      if (window.scrollY > 50) handleEnter();
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/cmmcoligado",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.5-1 1.7-2.1 3.5-2.1 3.7 0 4.4 2.4 4.4 5.5V24h-4v-8.5c0-2-.1-4.5-2.7-4.5-2.7 0-3.1 2.1-3.1 4.3V24h-4V8.5z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/Mercus005",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.41 7.84 10.95.57.11.78-.25.78-.55v-2.1c-3.18.69-3.85-1.53-3.85-1.53-.52-1.3-1.27-1.65-1.27-1.65-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.26.72-1.55-2.54-.29-5.2-1.27-5.2-5.66 0-1.25.45-2.27 1.19-3.07-.12-.3-.52-1.51.12-3.16 0 0 .97-.31 3.18 1.18a11.03 11.03 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.18-1.18 3.18-1.18.65 1.65.25 2.86.12 3.16.75.8 1.19 1.82 1.19 3.07 0 4.4-2.66 5.36-5.21 5.65.41.35.77 1.04.77 2.1v3.12c0 .31.2.67.79.55A10.51 10.51 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
        </svg>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 z-50 w-full h-screen bg-gray-900 text-white"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-6 md:py-8 h-full flex flex-col-reverse lg:flex-row items-center justify-between gap-4 lg:gap-8">
        
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Cliff Coligado is <span className="text-blue-400">Right Here!</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg mb-6">
            Come see what I have to offer
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 justify-center lg:justify-start">
            <button
              onClick={handleEnter}
              className="w-full sm:w-auto text-sm sm:text-base border border-gray-300 hover:border-white hover:bg-white hover:text-gray-900 text-white px-4 sm:px-6 py-2.5 rounded-md transition-colors duration-200 ease-in-out"
            >
              Explore My Work
            </button>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 border border-gray-600 rounded-md text-sm text-white hover:border-white transition"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full lg:w-1/2 flex justify-center items-end h-full"
        >
          <div className="w-[65%] sm:w-[55%] md:w-[45%] lg:w-[505px] aspect-[2/3] sm:aspect-[3/4] flex items-end">
            <img
              src={`${getImagePrefix()}image/profilepic.png`}
              alt="Portrait of Cliff Coligado"
              className="w-full h-full object-cover rounded-xl drop-shadow-xl"
            />
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
