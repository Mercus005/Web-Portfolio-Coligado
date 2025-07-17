"use client";

import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 px-4 sm:px-6 md:px-10 lg:px-20 min-h-screen flex items-center"
    >
      <div className="container mx-auto text-center space-y-6">
        {/* Artistic Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400"
          >
            Hello, I'm Cliff
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Typography
            variant="h2"
            className="text-lg sm:text-xl md:text-2xl text-gray-300"
          >
            Software Developer — crafting responsive, beautiful, and accessible experiences.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Typography
            variant="lead"
            className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-400"
          >
            I’m <span className="text-white font-medium">Cliff Marvic M. Coligado</span>, a graduating Computer Science student driven by clean code, design thinking, and intuitive user interfaces.
          </Typography>
        </motion.div>
      </div>
    </section>
  );
}
