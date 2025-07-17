"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { getImagePrefix } from "../../utils/utils";

export default function LandingIntro({ onFinish }: { onFinish: () => void }) {
  const [isExiting, setIsExiting] = useState(false);
  const [showSocials, setShowSocials] = useState(false);

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
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="..." />
        </svg>
      ),
      href: "https://www.linkedin.com/in/cmmcoligado",
    },
    {
      name: "GitHub",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="..." />
        </svg>
      ),
      href: "https://github.com/Mercus005",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 z-50 w-full min-h-screen bg-gray-900 overflow-y-auto"
    >
      {/* Background shapes – don’t remove */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] bg-gray-800" style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} />
        <div className="absolute bottom-0 right-0 w-[170px] sm:w-[220px] h-[170px] sm:h-[220px] bg-gray-700" style={{ clipPath: "polygon(100% 100%, 0 100%, 100% 0)" }} />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,...')] bg-[length:20px_20px]" />
      </div>

      {/* Main content – scrollable and responsive */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row min-h-screen">
        {/* Image Section */}
        <div className="relative w-full lg:w-1/3 aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto lg:h-auto overflow-hidden group">
          <div className="absolute inset-0 m-3 sm:m-4 lg:m-6 rounded-xl overflow-hidden border border-gray-700/50 shadow-2xl group-hover:shadow-gray-600/30 transition-all duration-700">
            <img
              src={`${getImagePrefix()}image/profilepic.png`}
              alt="Professional portrait of Cliff Coligado"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10 rounded-xl" />
          </div>

          {/* Shapes stay intact */}
          <div className="absolute bottom-[-5px] left-0 w-full h-[60px] sm:h-[90px] bg-gray-900 z-20" style={{ clipPath: "polygon(0% 100%, 0% 0%, 65% 100%)" }} />
          <div className="absolute bottom-[-5px] left-0 w-full h-[50px] sm:h-[80px] bg-gray-800 z-10" style={{ clipPath: "polygon(0 100%, 0 0, 85% 100%)" }} />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-2/3 flex items-center justify-center p-6 sm:p-8 md:p-16 bg-gradient-to-b from-gray-900 to-gray-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl w-full space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 bg-clip-text text-transparent">
                Cliff Marvic Coligado
              </span>
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 sm:mb-6">
              <hr className="w-12 h-0.5 bg-gray-500 border-0" />
              <span className="text-gray-400 font-medium text-sm uppercase tracking-wider">Aspiring Full Stack Developer</span>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              I hope to create elegant digital experiences through clean, efficient code and thoughtful user interfaces.
            </p>

            <div>
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Core Competencies:</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {["HTML", "CSS", "JavaScript", "UI/UX Design", "C#", "Python"].map((skill) => (
                  <span key={skill} className="px-3 py-1 text-xs sm:text-sm bg-gray-800 text-gray-300 rounded-full border border-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleEnter}
                className="px-6 sm:px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg border border-white/10 backdrop-blur-lg shadow-lg"
              >
                Explore Work
              </motion.button>

              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setShowSocials(!showSocials)}
                  className="px-6 sm:px-8 py-3.5 text-white font-medium rounded-lg border border-gray-700 bg-gray-800/50 hover:bg-gray-800 backdrop-blur-lg w-full sm:w-auto"
                >
                  Get In Touch
                </motion.button>

                <AnimatePresence>
                  {showSocials && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="absolute right-0 top-full mt-2 p-2 bg-gray-800 rounded-lg border border-gray-700 shadow-xl z-50 min-w-[200px]"
                    >
                      <div className="flex flex-col gap-2">
                        {socialLinks.map((link) => (
                          <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-md transition-colors"
                          >
                            {link.icon}
                            <span>{link.name}</span>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Decorations */}
            <div className="absolute -bottom-16 -left-8 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/5 rounded-full blur-[90px] z-0" />
            <div className="absolute top-1/4 -right-8 w-24 sm:w-32 h-px bg-gradient-to-l from-gray-500/30 via-gray-500/10 to-transparent" />
            <div className="absolute top-10 -left-6 w-20 sm:w-24 h-20 sm:h-24 rounded-full border border-gray-700/30" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <div className="text-gray-400 text-sm mb-2">Scroll to continue</div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="text-xl text-gray-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
