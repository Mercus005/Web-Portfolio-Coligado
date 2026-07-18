"use client";

import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";
import { getIconPrefix } from "../../utils/utils";
import { TECH_ICONS, type TechCategory } from "../../src/data/tech-icons";


const GROUP_THEME: Record<
  TechCategory,
  { eyebrow: string; dot: string; border: string; shadow: string }
> = {
  "Web Development": {
    eyebrow: "text-aqua",
    dot: "bg-signal",
    border: "hover:border-signal/70",
    shadow: "hover:shadow-lg hover:shadow-signal/20",
  },
  "Game & Mobile": {
    eyebrow: "text-ember",
    dot: "bg-ember",
    border: "hover:border-ember/70",
    shadow: "hover:shadow-lg hover:shadow-ember/20",
  },
  "Data Science": {
    eyebrow: "text-aqua",
    dot: "bg-aqua",
    border: "hover:border-aqua/70",
    shadow: "hover:shadow-lg hover:shadow-aqua/20",
  },
};

const CATEGORY_ORDER = Array.from(
  new Set(TECH_ICONS.map((t) => t.category))
) as TechCategory[];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-ink-900 text-paper flex items-center justify-center px-4 sm:px-6 py-16"
    >
      <div className="max-w-5xl w-full">
        <div className="text-center mb-12">
          <div className="font-mono text-sm text-aqua mb-3 flex items-center justify-center gap-0.5">
            {"// skills"}
            <span className="inline-block w-[2px] h-4 bg-aqua ml-0.5 animate-pulse motion-reduce:animate-none" />
          </div>
          <Typography
            variant="h2"
            className="font-display text-3xl sm:text-4xl font-semibold text-paper"
          >
            Tools &amp; Technologies
          </Typography>
        </div>

        <div className="space-y-10">
          {CATEGORY_ORDER.map((category, gIdx) => {
            const theme = GROUP_THEME[category];
            const items = TECH_ICONS.filter((t) => t.category === category);
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: gIdx * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`h-1.5 w-1.5 rounded-full ${theme.dot}`} />
                  <span className={`font-mono text-xs uppercase tracking-wide ${theme.eyebrow}`}>
                    {category}
                  </span>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4">
                  {items.map((tech) => (
                    <div
                      key={tech.name}
                      className={`flex flex-col items-center gap-2 text-center rounded-xl border border-ink-700 bg-ink-800 py-5 px-2 transition-all duration-200 hover:-translate-y-1 ${theme.border} ${theme.shadow}`}
                    >
                      <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-paper">
                        <img
                          src={`${getIconPrefix()}${tech.file}`}
                          alt={tech.name}
                          className="h-6 w-6 sm:h-7 sm:w-7 object-contain"
                        />
                      </div>
                      <span className="text-xs sm:text-sm text-paper-muted font-medium">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}