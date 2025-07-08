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
      if (window.scrollY > 50) {
        handleEnter();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      href: "www.linkedin.com/in/cmmcoligado",
    },
    {
      name: "GitHub",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
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
      className="fixed inset-0 z-50 w-full h-full overflow-hidden bg-gray-900"
    >
      {/* Background graphics - Adjusted for better mobile scaling */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] bg-gray-800" style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} />
        <div className="absolute bottom-0 right-0 w-[170px] sm:w-[220px] h-[170px] sm:h-[220px] bg-gray-700" style={{ clipPath: "polygon(100% 100%, 0 100%, 100% 0)" }} />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB...')] bg-[length:20px_20px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row">
        {/* Image Panel - Adjusted padding and sizing for mobile */}
        <div className="relative w-full lg:w-1/3 h-[60vh] sm:h-[75vh] lg:h-full overflow-hidden group">
          <div className="absolute inset-0 m-3 sm:m-4 lg:m-6 rounded-xl overflow-hidden border border-gray-700/50 shadow-2xl transition-all duration-700 group-hover:shadow-gray-600/30">
            <div className="absolute inset-0 rounded-xl pointer-events-none shadow-[inset_0_0_30px_0_rgba(255,255,255,0.05)]" />
            <img
              src={`${getImagePrefix()}image/profilepic.png`}
              alt="Professional portrait of Cliff Coligado"
              className="w-full h-full object-cover object-top scale-[1.0]"
            />
            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white/10 transition-all duration-300" />
          </div>

          {/* Reduced and shifted overlays */}
          <div className="absolute bottom-[-5px] left-0 w-full h-[60px] sm:h-[90px] bg-gray-900 z-20" style={{ clipPath: "polygon(0% 100%, 0% 0%, 65% 100%)" }} />
          <div className="absolute bottom-[-5px] left-0 w-full h-[50px] sm:h-[80px] bg-gray-800 z-10" style={{ clipPath: "polygon(0 100%, 0 0, 85% 100%)" }} />

          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
        </div>


        {/* Text Section - Improved spacing for mobile */}
        <div className="w-full lg:w-2/3 h-2/3 sm:h-1/2 lg:h-full flex items-center justify-center p-6 sm:p-8 md:p-16 bg-gradient-to-b from-gray-900 to-gray-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl w-full relative"
          >
            <div className="relative z-10 space-y-6 sm:space-y-8">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-3 leading-tight tracking-tight">
                  <span className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 bg-clip-text text-transparent">
                    Cliff Marvic Coligado
                  </span>
                </h1>
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <hr className="w-12 h-0.5 bg-gray-500 border-0" />
                  <span className="text-gray-400 font-medium text-sm uppercase tracking-wider">Aspiring Full Stack Developer</span>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-prose">
                  I hope to create elegant digital experiences through clean, efficient code and thoughtful user interfaces.
                </p>

                <div className="space-y-2">
                  <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Core Competencies:</p>
                  <div className="flex flex-wrap gap-2">
                    {["HTML", "CSS", "JavaScript", "UI/UX Design", "C#", "Python"].map((skill) => (
                      <span key={skill} className="px-3 py-1 text-xs md:text-sm bg-gray-800 text-gray-300 rounded-full border border-gray-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleEnter}
                  className="px-6 sm:px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg border border-white/10 backdrop-blur-lg transition-all shadow-lg hover:shadow-gray-500/20 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Work
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>

                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setShowSocials(!showSocials)}
                    className="px-6 sm:px-8 py-3.5 text-white font-medium rounded-lg border border-gray-700 bg-gray-800/50 hover:bg-gray-800 backdrop-blur-lg transition-all w-full sm:w-auto"
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
                        className="absolute left-0 sm:left-auto right-0 sm:right-0 top-full mt-2 p-2 bg-gray-800 rounded-lg border border-gray-700 shadow-xl z-50 min-w-[200px]"
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
            </div>

            {/* Decorative Elements - Adjusted for mobile */}
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
