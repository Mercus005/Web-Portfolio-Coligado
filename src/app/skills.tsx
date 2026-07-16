"use client";

import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";
import { getIconPrefix } from "../../utils/utils";


const GROUPS = [
  {
    label: "Web Development",
    eyebrow: "text-aqua",
    dot: "bg-signal",
    border: "hover:border-signal/70",
    shadow: "hover:shadow-lg hover:shadow-signal/20",
    items: [
      { name: "HTML5", icon: `${getIconPrefix()}html5.svg` },
      { name: "CSS3", icon: `${getIconPrefix()}css.svg` },
      { name: "JavaScript", icon: `${getIconPrefix()}javascript.svg` },
      { name: "React", icon: `${getIconPrefix()}react.svg` },
      { name: "Bootstrap", icon: `${getIconPrefix()}bootstrap.svg` },
      { name: "Node.js", icon: `${getIconPrefix()}nodejs.svg` },
      { name: "C#", icon: `${getIconPrefix()}csharp.svg` },
      { name: "ASP.NET", icon: `${getIconPrefix()}aspnet.svg` },
      { name: "MySQL", icon: `${getIconPrefix()}mysql.svg` },
      { name: "SQLite", icon: `${getIconPrefix()}sqlite.svg` },
    ],
  },
  {
    label: "Game & Mobile",
    eyebrow: "text-ember",
    dot: "bg-ember",
    border: "hover:border-ember/70",
    shadow: "hover:shadow-lg hover:shadow-ember/20",
    items: [
      { name: "Unity", icon: `${getIconPrefix()}unity.svg` },
      { name: "Godot", icon: `${getIconPrefix()}godot.svg` },
      { name: "Xamarin", icon: `${getIconPrefix()}xamarin.svg` },
      { name: "Flutter", icon: `${getIconPrefix()}flutter.svg` },
    ],
  },
  {
    label: "Data Science",
    eyebrow: "text-aqua",
    dot: "bg-aqua",
    border: "hover:border-aqua/70",
    shadow: "hover:shadow-lg hover:shadow-aqua/20",
    items: [
      { name: "Python", icon: `${getIconPrefix()}python.svg` },
      { name: "Pandas", icon: `${getIconPrefix()}pandas.svg` },
      { name: "NumPy", icon: `${getIconPrefix()}numpy.svg` },
      { name: "Plotly", icon: `${getIconPrefix()}plotly.svg` },
    ],
  },
];

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
          {GROUPS.map((group, gIdx) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gIdx * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className={`h-1.5 w-1.5 rounded-full ${group.dot}`} />
                <span className={`font-mono text-xs uppercase tracking-wide ${group.eyebrow}`}>
                  {group.label}
                </span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4">
                {group.items.map((tech) => (
                  <div
                    key={tech.name}
                    className={`flex flex-col items-center gap-2 text-center rounded-xl border border-ink-700 bg-ink-800 py-5 px-2 transition-all duration-200 hover:-translate-y-1 ${group.border} ${group.shadow}`}
                  >
                    <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-paper">
                      <img
                        src={tech.icon}
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
          ))}
        </div>
      </div>
    </section>
  );
}