"use client";

import { useEffect, useState, type ElementType } from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface ContactRevealCardProps {
  label: string;
  value: string;
  href: string;
  icon: ElementType;
}

export default function ContactRevealCard({
  label,
  value,
  href,
  icon: Icon,
}: ContactRevealCardProps) {
  const [revealed, setRevealed] = useState(false);
  const [supportsHover, setSupportsHover] = useState(false);

  useEffect(() => {
    setSupportsHover(
      window.matchMedia("(hover: hover) and (pointer: fine)").matches
    );
  }, []);

  const isExternal = href.startsWith("http");

  return (
    <div
      className="relative h-24 sm:h-28 w-full [perspective:1000px]"

      onMouseEnter={() => supportsHover && setRevealed(true)}
      onMouseLeave={() => supportsHover && setRevealed(false)}
    >
      <motion.div
        className="relative h-full w-full [transform-style:preserve-3d]"
        animate={{ rotateY: revealed ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
      >

        <button
          type="button"
          onClick={() => setRevealed(true)}
          aria-label={`Reveal ${label}`}
          aria-hidden={revealed}
          tabIndex={revealed ? -1 : 0}
          className="absolute inset-0 [backface-visibility:hidden] flex items-center gap-4 rounded-xl border border-ink-700 bg-ink-800 p-5 hover:border-signal transition-colors text-left w-full"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-700 text-signal">
            <Icon className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="font-mono text-lg uppercase tracking-wide text-paper-white mb-1">
              {label}
            </p>
          </div>
        </button>

        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl border border-signal/60 bg-ink-800">
          {revealed && (
            <>
              <a
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group flex h-full w-full items-center gap-4 p-5 pr-10"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-signal text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-xs uppercase tracking-wide text-paper-faint mb-1">
                    {label}
                  </p>
                  <p className="text-sm sm:text-base text-paper font-medium break-words group-hover:text-aqua transition-colors">
                    {value}
                  </p>
                </div>
              </a>
              <button
                type="button"
                onClick={() => setRevealed(false)}
                aria-label={`Hide ${label}`}
                className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full text-paper-faint hover:text-paper hover:bg-ink-700 transition-colors"
              >
                <XMarkIcon className="h-3.5 w-3.5" />
              </button>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}