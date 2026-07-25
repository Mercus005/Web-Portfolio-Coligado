"use client";

import { useState, type ElementType, type PointerEvent } from "react";
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
  // Hover and click are tracked separately and combined with OR. This
  // matters: if they shared one flag, a leave event (real or a synthetic
  // one some emulators fire right after a simulated tap, to mimic "touch
  // doesn't linger like a mouse hovering in place") could reset the same
  // flag a click just set — which looked exactly like "clicking does
  // nothing." Keeping them separate means a leave can only ever cancel a
  // hover, never a deliberate click.
  const [hoverRevealed, setHoverRevealed] = useState(false);
  const [clickRevealed, setClickRevealed] = useState(false);
  const revealed = hoverRevealed || clickRevealed;

  // Pointer Events report, per interaction, whether it came from a mouse,
  // touch, or pen — checking e.pointerType directly is more reliable than
  // guessing from a matchMedia check on mount, which can disagree with how
  // an emulator or hybrid device actually dispatches events.
  const handlePointerEnter = (e: PointerEvent) => {
    if (e.pointerType === "mouse") setHoverRevealed(true);
  };
  const handlePointerLeave = (e: PointerEvent) => {
    if (e.pointerType === "mouse") setHoverRevealed(false);
  };
  const closeCard = () => {
    setClickRevealed(false);
    setHoverRevealed(false);
  };

  const isExternal = href.startsWith("http");

  return (
    <div
      className="flip-perspective relative h-24 sm:h-28 w-full"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <motion.div
        className="flip-inner relative h-full w-full"
        animate={{ rotateY: revealed ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
      >
        {/* Front — no contact info here at all, just a label. Explicitly
            disabled from receiving taps once flipped (pointer-events-none),
            rather than relying only on backface-visibility to keep it out
            of the way — that's the fix for taps on mobile hitting this
            invisible layer instead of the real link underneath. */}
        <button
          type="button"
          onClick={() => setClickRevealed(true)}
          aria-label={`Reveal ${label}`}
          aria-hidden={revealed}
          tabIndex={revealed ? -1 : 0}
          className={`flip-face absolute inset-0 flex items-center gap-4 rounded-xl border border-ink-700 bg-ink-800 p-5 hover:border-signal transition-colors text-left w-full ${
            revealed ? "pointer-events-none" : ""
          }`}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-700 text-signal">
            <Icon className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="font-mono text-xs uppercase tracking-wide text-paper-faint mb-1">
              {label}
            </p>
            {/* Pure CSS (not JS) decides which hint to show, using the same
                (hover: hover) media feature the browser itself uses to
                apply :hover styling — so the text and the actual hover
                behavior can't disagree with each other. */}
            <p className="text-sm text-paper-muted italic">
              <span className="hidden [@media(hover:hover)]:inline">
                Click or hover to reveal
              </span>
              <span className="inline [@media(hover:hover)]:hidden">
                Tap to reveal
              </span>
            </p>
          </div>
        </button>

        {/* Back — the real value only ever renders once `revealed` is
            true, so it's genuinely absent from the page until then, not
            just hidden by CSS. The hide (X) button is a separate element
            from the link, not nested inside it — so tapping the link
            navigates normally, and only the X explicitly flips it back. */}
        <div
          className={`flip-face absolute inset-0 [transform:rotateY(180deg)] rounded-xl border border-signal/60 bg-ink-800 ${
            revealed ? "" : "pointer-events-none"
          }`}
        >
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
                onClick={closeCard}
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