"use client";

import { useState } from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { getImagePrefix, getPdfPrefix } from "../../utils/utils";
import PDFViewerModal from "../components/PdfViewerModal";


const CERTIFICATIONS = [
  {
    name: "CompTIA ITF+",
    issuer: "CompTIA",
    date: "July 2024",
    file: "CompTIA-ITF-Plus",
    pdf: "CompTIA-ITF-Plus.pdf",
  },
  {
    name: "TOEIC",
    issuer: "Princeton Assessments & Training",
    date: "March 2025",
    file: "Toeic",
    pdf: null,
  },
  {
    name: "Employability Skills — JobReady",
    issuer: "Wadhwani Foundation",
    date: "June 2025",
    file: null,
    pdf: "Wadhwani Foundation Certificate - Coligado-merged.pdf",
  },
  {
    name: "Basic Proficiency in KNIME Analytics Platform",
    issuer: "KNIME",
    date: "July 2026",
    file: "KNIME",
    pdf: "KNIME.pdf",
  },
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    date: "July 2026",
    file: "AWS",
    pdf: "AWS Cloud Practitioner Essentials.pdf",
  },
];

export function CertificationsSection() {
  const [activeCert, setActiveCert] = useState<
    (typeof CERTIFICATIONS)[number] | null
  >(null);

  const activePdfHref = activeCert?.pdf
    ? `${getPdfPrefix()}certificates/${encodeURIComponent(activeCert.pdf)}`
    : null;

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
          {CERTIFICATIONS.map((cert, index) => {
            const isClickable = Boolean(cert.pdf);

            return (
              <motion.button
                key={cert.name}
                type="button"
                disabled={!isClickable}
                onClick={() => isClickable && setActiveCert(cert)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                aria-label={
                  isClickable ? `View ${cert.name} certificate` : cert.name
                }
                className={`group flex w-48 sm:w-56 flex-col items-center rounded-xl border border-ink-700 bg-ink-900 py-8 px-5 transition-all duration-300 text-left ${
                  isClickable
                    ? "hover:border-aqua hover:-translate-y-1 hover:shadow-lg hover:shadow-aqua/10 cursor-pointer"
                    : "cursor-default"
                }`}
              >
                <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 flex items-center justify-center self-center">
                  {cert.file ? (
                    <Image
                      src={`${getImagePrefix()}logos/logo-${cert.file}.png`}
                      alt={`${cert.name} certification logo`}
                      fill
                      sizes="80px"
                      className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  ) : (
                    <CheckBadgeIcon className="h-12 w-12 sm:h-14 sm:w-14 text-aqua" />
                  )}
                </div>

                <Typography
                  variant="small"
                  className="mt-4 text-center text-paper font-medium leading-snug w-full"
                >
                  {cert.name}
                </Typography>
                <Typography
                  variant="small"
                  className="mt-1 text-center text-paper-faint text-xs w-full"
                >
                  {cert.issuer}
                </Typography>
                <span className="mt-3 font-mono text-[10px] uppercase tracking-wide text-paper-faint border-t border-ink-700 pt-2 w-full text-center">
                  {isClickable ? (
                    <>
                      <span className="group-hover:hidden">{cert.date}</span>
                      <span className="hidden group-hover:inline text-aqua">
                        View Certificate →
                      </span>
                    </>
                  ) : (
                    cert.date
                  )}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <PDFViewerModal
        open={activeCert !== null}
        onClose={() => setActiveCert(null)}
        title={activeCert?.name ?? ""}
        src={activePdfHref}
      />
    </section>
  );
}

export default CertificationsSection;