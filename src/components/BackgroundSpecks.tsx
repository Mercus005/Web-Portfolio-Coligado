"use client";

import { useEffect, useState } from "react";
import { getIconPrefix } from "../../utils/utils";
import { TECH_ICONS } from "../data/tech-icons";

interface Speck {
  id: number;
  file: string;
  size: number;
  left: number; // percent
  driftX: number; // px, negative = drifts left as it falls
  duration: number; // seconds for one full fall
  delay: number; // negative delay staggers the starting point
  spin: number; // degrees, sign gives spin direction
  opacity: number;
}

interface BackgroundSpecksProps {
  count?: number;
}

export default function BackgroundSpecks({ count = 10 }: BackgroundSpecksProps) {
  // Empty until the client generates real values — randomized positions
  // can't be computed during server render without causing a hydration
  // mismatch (server and client would disagree on the output). For a
  // decorative, very-low-opacity layer like this, appearing a moment after
  // mount rather than being present in the initial HTML is unnoticeable.
  const [specks, setSpecks] = useState<Speck[]>([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const generated: Speck[] = Array.from({ length: count }, (_, i) => {
      const icon = TECH_ICONS[Math.floor(Math.random() * TECH_ICONS.length)];
      const direction = Math.random() > 0.5 ? 1 : -1;
      return {
        id: i,
        file: icon.file,
        size: 14 + Math.random() * 16, // 14–36px
        left: Math.random() * 100,
        driftX: -(100 + Math.random() * 200), // drifts 80–280px left as it falls
        duration: 22 + Math.random() * 26, // 22–48s, slow and gentle
        delay: -Math.random() * 40, // negative = starts already mid-fall, staggered
        spin: direction * (180 + Math.random() * 360),
        opacity: 0.05 + Math.random() * 0.10, // 12%–26%
      };
    });
    setSpecks(generated);
  }, [count]);

  if (specks.length === 0) return null;

  return (
    <div
      aria-hidden
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {specks.map((s) => (
        <img
          key={s.id}
          src={`${getIconPrefix()}${s.file}`}
          alt=""
          width={s.size}
          height={s.size}
          className="absolute top-0 grayscale invert mix-blend-screen"
          style={{
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            willChange: "transform",
            animationName: "speck-fall",
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            // @ts-expect-error -- CSS custom properties aren't in the CSSProperties type
            "--drift-x": `${s.driftX}px`,
            "--spin": `${s.spin}deg`,
          }}
        />
      ))}
    </div>
  );
}