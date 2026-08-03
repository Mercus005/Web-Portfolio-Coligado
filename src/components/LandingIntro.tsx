"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getImagePrefix } from "../../utils/utils";

const COMMAND = "itsme";
const NAME = "Cliff Marvic Coligado";
const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*<>/";

export default function LandingIntro({ onFinish }: { onFinish: () => void }) {
  const [isExiting, setIsExiting] = useState(false);
  const [typed, setTyped] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [displayName, setDisplayName] = useState("");

  const handleEnter = () => {
    if (!isExiting) {
      setIsExiting(true);
      setTimeout(onFinish, 800);
    }
  };

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setReduceMotion(prefersReduced);

    if (prefersReduced) {
      setTyped(COMMAND);
      setShowResult(true);
      return;
    }

    let i = 0;
    const typeTimer = setInterval(() => {
      i += 1;
      setTyped(COMMAND.slice(0, i));
      if (i >= COMMAND.length) {
        clearInterval(typeTimer);
        setTimeout(() => setShowResult(true), 250);
      }
    }, 90);
    return () => clearInterval(typeTimer);
  }, []);

  // Terminal-decode effect: once the command resolves, the name un-scrambles
  // left to right instead of just fading in. Skipped entirely for reduced
  // motion, which jumps straight to the final text.
  useEffect(() => {
    if (!showResult) return;

    if (reduceMotion) {
      setDisplayName(NAME);
      return;
    }

    let frame = 0;
    const totalFrames = 16;

    const scrambleTimer = setInterval(() => {
      frame += 1;
      const lockedCount = Math.ceil((frame / totalFrames) * NAME.length);
      const next = NAME.split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < lockedCount) return char;
          return SCRAMBLE_CHARS[
            Math.floor(Math.random() * SCRAMBLE_CHARS.length)
          ];
        })
        .join("");
      setDisplayName(next);

      if (frame >= totalFrames) {
        clearInterval(scrambleTimer);
        setDisplayName(NAME);
      }
    }, 28);

    return () => clearInterval(scrambleTimer);
  }, [showResult, reduceMotion]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) handleEnter();
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      transition={{ duration: 0.8 }}
      className="absolute inset-0 z-50 w-full h-screen bg-ink-950 text-paper overflow-hidden"
    >
      {/* Ambient glow — now breathing slowly instead of sitting static */}
      <motion.div
        aria-hidden
        animate={
          reduceMotion
            ? {}
            : { scale: [1, 1.15, 1], opacity: [0.2, 0.32, 0.2] }
        }
        transition={{ duration: 7, repeat: reduceMotion ? 0 : Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-32 right-0 w-[560px] h-[560px] rounded-full bg-signal/20 blur-[120px]"
      />
      <motion.div
        aria-hidden
        animate={
          reduceMotion
            ? {}
            : { scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }
        }
        transition={{ duration: 9, repeat: reduceMotion ? 0 : Infinity, ease: "easeInOut", delay: 1.5 }}
        className="pointer-events-none absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full bg-aqua/10 blur-[100px]"
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-6 md:py-8 h-full flex flex-col-reverse lg:flex-row items-center justify-between gap-4 lg:gap-8">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          {/* Signature: terminal-style identity reveal */}
          <div className="font-mono text-sm sm:text-base text-aqua mb-4 h-6 flex items-center justify-center lg:justify-start">
            <span className="text-paper-faint mr-2">$</span>
            <span>{typed}</span>
            <span className="inline-block w-[2px] h-4 bg-aqua ml-0.5 animate-pulse motion-reduce:animate-none" />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={showResult ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 leading-tight"
          >
            {displayName || "\u00A0"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={showResult ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={
              reduceMotion
                ? { duration: 0.2 }
                : { type: "spring", stiffness: 260, damping: 18, delay: 0.75 }
            }
            className="font-display text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-signal-light to-aqua mb-4"
          >
            Software Developer — Web · Mobile · Games · Etc
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={showResult ? { opacity: 1, y: 0 } : {}}
            transition={
              reduceMotion
                ? { duration: 0.2 }
                : { type: "spring", stiffness: 260, damping: 18, delay: 0.9 }
            }
            className="text-paper-muted text-base sm:text-lg mb-6 max-w-md mx-auto lg:mx-0"
          >
            A Computer Science graduate aiming to contribute to projects that make a difference. Come see what I have to offer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.85 }}
            animate={showResult ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={
              reduceMotion
                ? { duration: 0.2 }
                : { type: "spring", stiffness: 260, damping: 18, delay: 1.05 }
            }
            className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 justify-center lg:justify-start"
          >
            <button
              onClick={handleEnter}
              className="w-full sm:w-auto text-sm sm:text-base bg-signal hover:bg-signal-dark text-white font-medium px-6 py-2.5 rounded-md transition-colors duration-200 ease-in-out shadow-lg shadow-signal/20"
            >
              View my work
            </button>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 border border-ink-700 rounded-md text-sm text-paper hover:border-aqua hover:text-aqua transition-colors"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
        >
          <div className="relative w-[62%] sm:w-[42%] md:w-[36%] lg:w-[380px] max-w-[380px] aspect-[3/4]">
            {/* Soft gradient glow behind the frame */}
            <div
              aria-hidden
              className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-signal/30 via-aqua/20 to-transparent blur-2xl"
            />
            {/* Gradient ring frame */}
            <div className="relative w-full h-full rounded-xl p-[2px] bg-gradient-to-br from-signal via-aqua to-signal/40">
              <div className="w-full h-full rounded-[10px] overflow-hidden bg-ink-900">
                <img
                  src={`${getImagePrefix()}image/profilepic.png`}
                  alt="Portrait of Cliff Coligado"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Corner bracket accents — a quiet nod to code syntax */}
            <div
              aria-hidden
              className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-aqua rounded-tl-lg"
            />
            <div
              aria-hidden
              className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-signal rounded-br-lg"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={handleEnter}
        aria-label="Scroll to explore"
        initial={{ opacity: 0 }}
        animate={{ opacity: showResult ? 1 : 0 }}
        transition={{ delay: 0.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-paper-faint hover:text-aqua transition-colors"
      >
        <span className="font-mono text-xs">scroll</span>
        <motion.svg
          animate={reduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: reduceMotion ? 0 : Infinity }}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </motion.svg>
      </motion.button>
    </motion.div>
  );
}