"use client";

import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  BeakerIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const HIGHLIGHTS = [
  {
    icon: AcademicCapIcon,
    label: "Education",
    value: "B.S. Computer Science, Magna Cum Laude",
    detail: "Mapúa Malayan Colleges Laguna · GWA 1.42",
  },
  {
    icon: BriefcaseIcon,
    label: "Last Position",
    value: "Computer Science Part-time Faculty",
    detail: "Mapúa Malayan Colleges Laguna · Sept. 2025 - Apr. 2026",
  },
  {
    icon: BeakerIcon,
    label: "Research",
    value: "Web-Based Predictive Tool for CA19-9 Levels Using Selected Urine Biomarkers via Ensemble Learning Techniques",
    detail: "Undergraduate thesis, ensemble learning on biomarker data",
  },
  {
    icon: MapPinIcon,
    label: "Based in",
    value: "Cabuyao City, Laguna",
    detail: "Philippines",
  },
];

export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="bg-ink-950 text-paper px-4 sm:px-6 md:px-10 lg:px-20 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
        {/* Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <div className="font-mono text-sm text-aqua mb-3">{"// bio"}</div>
          <Typography
            variant="h2"
            className="font-display text-3xl sm:text-4xl font-semibold text-paper mb-5"
          >
            About Me
          </Typography>
          <div className="space-y-4 text-paper-muted text-sm sm:text-base leading-relaxed">
            <p>
              I graduated <span className="text-paper font-medium">Magna Cum Laude</span> with
              a B.S. in Computer Science from Mapúa Malayan Colleges Laguna, and I&rsquo;ve stayed
              in the university as part-time faculty teaching Computer Science courses since September 2025 until April 2026. 
              My teaching experience has strengthened my understanding of core programming concepts and allowed me to mentor aspiring developers.
            </p>
            <p>
              My undergraduate thesis combined two things: software engineering and
              real-world impact. I built a web application that uses ensemble learning to predict
              CA19-9 elevation likelihood from urine biomarkers, bridging web development and
              machine learning in a biomedical context.
            </p>
            <p>
              Before that, I interned as a Software Engineering Intern at TDK Philippines
              Corporation, where I built a full-stack asset management system now used
              internally to replace manual spreadsheet tracking.
            </p>
          </div>
        </motion.div>

        {/* Highlights grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-ink-700 bg-ink-900 p-5 hover:border-signal transition-colors"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-800 text-signal mb-3">
                <item.icon className="h-5 w-5" />
              </div>
              <p className="font-mono text-xs uppercase tracking-wide text-paper-faint mb-1">
                {item.label}
              </p>
              <p className="text-paper font-medium text-sm sm:text-base leading-snug mb-1">
                {item.value}
              </p>
              <p className="text-paper-muted text-xs sm:text-sm">{item.detail}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}