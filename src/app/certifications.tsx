"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { getImagePrefix } from "../../utils/utils";

// Add more certifications as needed. `file` is optional — certifications
// without an official logo asset fall back to a badge icon instead of
// being left out.
const CERTIFICATIONS = [
  {
    name: "CompTIA ITF+",
    issuer: "CompTIA",
    date: "July 2024",
    file: "CompTIA-ITF-Plus",
  },
  {
    name: "TOEIC",
    issuer: "Princeton Assessments & Training",
    date: "March 2025",
    file: "Toeic",
  },
  {
    name: "Employability Skills — JobReady",
    issuer: "Wadhwani Foundation",
    date: "June 2025",
    file: null,
  },
  {
    name: "Basic Proficiency in KNIME Analytics Platform",
    issuer: "KNIME",
    date: "July 2026",
    file: "KNIME",
  },
];

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden py-12 px-8 lg:py-20 bg-ink-950 text-paper min-h-screen flex items-center"
    >
      <CheckBadgeIcon
        aria-hidden
        className="pointer-events-none absolute -right-16 -bottom-16 h-[420px] w-[420px] text-paper/[0.03]"
      />

      <div className="relative container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-sm text-aqua mb-3 flex items-center justify-center gap-0.5">
            {"// certifications"}
            <span className="inline-block w-[2px] h-4 bg-aqua ml-0.5 animate-pulse motion-reduce:animate-none" />
          </div>
          <Typography
            variant="h2"
            className="font-display mb-3 text-paper font-semibold text-3xl sm:text-4xl"
          >
            Credentials I&rsquo;m Proud Of
          </Typography>
          <p className="text-paper-muted text-sm sm:text-base max-w-lg mx-auto mb-12">
            Formal recognition alongside the hands-on work.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-stretch justify-center gap-5 sm:gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex w-48 sm:w-56 flex-col items-center rounded-xl border border-ink-700 bg-ink-900 py-8 px-5 hover:border-aqua hover:-translate-y-1 hover:shadow-lg hover:shadow-aqua/10 transition-all duration-300"
            >
              <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 flex items-center justify-center">
                {cert.file ? (
                  <Image
                    src={`${getImagePrefix()}logos/logo-${cert.file}.png`}
                    alt={`${cert.name} certification logo`}
                    fill
                    sizes="80px"
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <CheckBadgeIcon className="h-12 w-12 sm:h-14 sm:w-14 text-aqua" />
                )}
              </div>

              <Typography
                variant="small"
                className="mt-4 text-center text-paper font-medium leading-snug"
              >
                {cert.name}
              </Typography>
              <Typography
                variant="small"
                className="mt-1 text-center text-paper-faint text-xs"
              >
                {cert.issuer}
              </Typography>
              <span className="mt-3 font-mono text-[10px] uppercase tracking-wide text-paper-faint border-t border-ink-700 pt-2 w-full">
                {cert.date}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CertificationsSection;