"use client";

import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-ink-900 text-paper px-4 sm:px-6 md:px-10 lg:px-20 min-h-screen flex items-center"
    >

      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-signal/10 blur-[140px]"
      />

      <div className="relative container mx-auto text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-aqua"
        >
          {"// about"}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-signal-light to-aqua"
          >
            Turning ideas into meaningful projects.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          <Typography
            variant="h2"
            className="text-lg sm:text-xl md:text-2xl text-paper-muted font-normal"
          >
            Web apps, mobile apps, games and everything else.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Typography
            variant="lead"
            className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-paper-muted"
          >
            I&rsquo;m{" "}
            <span className="text-paper font-medium">
              Cliff Marvic M. Coligado
            </span>
            , Computer Science graduate. Working towards a better tomorrow. Crafting responsive, beautiful, and accessible experiences. Driven by clean code, design thinking, and intuitive user interfaces.
          </Typography>
        </motion.div>
      </div>
    </section>
  );
}