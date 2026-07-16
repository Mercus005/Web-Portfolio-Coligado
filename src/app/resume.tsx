"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  RocketLaunchIcon,
  CodeBracketIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { getPdfPrefix } from "../../utils/utils";

const RESUME_ITEMS = [
  {
    icon: AcademicCapIcon,
    title: "Education",
    description:
      "B.S. in Computer Science, Mapúa Malayan Colleges Laguna — Magna Cum Laude. President's List and Dean's Lister.",
  },
  {
    icon: RocketLaunchIcon,
    title: "Career Focus",
    description:
      "Software developer building across web, mobile, and etc.",
  },
  {
    icon: CodeBracketIcon,
    title: "Core Stack",
    description:
      "Focusing on web, software, and mobile development.",
  },
];

export function Resume() {
  const resumePdfPath = `${getPdfPrefix()}COLIGADO_CV.pdf`;

  return (
    <section
      id="resume"
      className="bg-ink-950 text-paper px-4 sm:px-6 md:px-10 lg:px-20 min-h-screen flex items-center"
    >
      <div className="container mx-auto">
        <div className="font-mono text-sm text-aqua mb-3">
          {"// CV"}
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
          {/* Resume details */}
          <div className="space-y-8">
            {RESUME_ITEMS.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-800 border border-ink-700 text-signal">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <Typography
                    variant="h5"
                    className="font-display mb-1 text-paper text-lg font-semibold"
                  >
                    {item.title}
                  </Typography>
                  <Typography className="text-sm text-paper-muted leading-relaxed">
                    {item.description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>

          {/* Resume summary and button */}
          <div className="rounded-xl border border-ink-700 bg-ink-900 p-6 sm:p-8">
            <Typography
              variant="h3"
              className="font-display mb-4 font-semibold text-paper text-2xl sm:text-3xl"
            >
              My CV
            </Typography>
            <Typography className="mb-6 text-paper-muted leading-relaxed text-sm">
              Determined developer with hands-on experience building
              visually engaging, performant applications. I care about clean
              UI, responsive design, and continuously learning modern
              front-end and back-end tools.
            </Typography>
            <a href={resumePdfPath} target="_blank" rel="noopener noreferrer">
              <Button
                variant="filled"
                className="flex items-center gap-2 bg-signal hover:bg-signal-dark text-white normal-case font-medium shadow-lg shadow-signal/20 transition-colors"
              >
                View CV
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;