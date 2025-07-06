"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-50 w-full h-full overflow-hidden bg-gray-900"
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-gray-800" 
             style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} />
        <div className="absolute bottom-0 right-0 w-[220px] h-[220px] bg-gray-700" 
             style={{ clipPath: "polygon(100% 100%, 0 100%, 100% 0)" }} />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cGF0aCBkPSJNMTAwIDBWMTBIMFYxMDBIMTBWMEgxMDBaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] bg-[length:20px_20px]" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row">
        <div className="relative w-full lg:w-1/3 h-1/2 lg:h-full overflow-hidden group">
          <div className="absolute inset-0 m-4 lg:m-6 rounded-xl overflow-hidden border border-gray-700/50 shadow-2xl transition-all duration-700 group-hover:shadow-gray-600/30">
            <div className="absolute inset-0 rounded-xl pointer-events-none shadow-[inset_0_0_30px_0_rgba(255,255,255,0.05)]" />
            <img
              src="/image/profilepic.png"
              alt="Professional portrait of Cliff Coligado"
              className="w-full h-full object-cover scale-[1.03]"
            />
            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white/10 transition-all duration-300" />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gray-900 z-20"
               style={{ clipPath: "polygon(0% 100%, 0% 0%, 65% 100%)" }} />
          <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gray-800 z-10"
               style={{ clipPath: "polygon(0 100%, 0 0, 85% 100%)" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
        </div>

        <div className="w-full lg:w-2/3 h-1/2 lg:h-full flex items-center justify-center p-8 md:p-16 bg-gradient-to-b from-gray-900 to-gray-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl w-full relative"
          >
            <div className="relative z-10 space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-3 leading-tight tracking-tight">
                  <span className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 bg-clip-text text-transparent">
                    Cliff Marvic Coligado
                  </span>
                </h1>
                <div className="flex items-center gap-2 mb-6">
                  <hr className="w-12 h-0.5 bg-gray-500 border-0" />
                  <span className="text-gray-400 font-medium text-sm uppercase tracking-wider">Aspiring Full Stack Developer</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-prose">
                  I hope to create elegant digital experiences through clean, efficient code and thoughtful user interfaces.
                </p>
                
                <div className="space-y-2">
                  <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Core Competencies:</p>
                  <div className="flex flex-wrap gap-2">
                    {['HTML', 'CSS', 'JavaScript', 'UI/UX Design', 'C#', 'Python'].map((skill) => (
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
                  className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg border border-white/10 backdrop-blur-lg transition-all shadow-lg hover:shadow-gray-500/20 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Work
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
                
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="#contact"
                  className="px-8 py-3.5 text-white font-medium rounded-lg border border-gray-700 bg-gray-800/50 hover:bg-gray-800 backdrop-blur-lg transition-all"
                >
                  Get In Touch
                </motion.a>
              </div>
            </div>
            
            <div className="absolute -bottom-16 -left-8 w-64 h-64 bg-blue-500/5 rounded-full blur-[90px] z-0" />
            <div className="absolute top-1/4 -right-8 w-32 h-px bg-gradient-to-l from-gray-500/30 via-gray-500/10 to-transparent" />
            <div className="absolute top-10 -left-6 w-24 h-24 rounded-full border border-gray-700/30" />
          </motion.div>
        </div>
      </div>

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
