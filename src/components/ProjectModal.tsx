"use client";

import { useEffect, useState } from "react";
import { Dialog, IconButton } from "@material-tailwind/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowTopRightOnSquareIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

interface Project {
  title: string;
  desc: string;
  images: string[];
  stack?: string[];
  link?: string;
}

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  project: Project | null;
  index?: number;
}

export default function ProjectModal({ open, onClose, project, index = 0 }: ProjectModalProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Reset to the first image whenever a new project is opened.
  useEffect(() => {
    setActiveIndex(0);
  }, [project]);

  if (!project) return null;

  const [category, titleText] = project.title.includes(" - ")
    ? project.title.split(" - ")
    : ["", project.title];

  const hasMultiple = project.images.length > 1;
  const goPrev = () =>
    setActiveIndex((i) => (i - 1 + project.images.length) % project.images.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % project.images.length);

  return (
    <Dialog
      open={open}
      handler={onClose}
      size="lg"
      className="bg-ink-900 text-paper rounded-2xl overflow-hidden p-0 w-full max-w-sm sm:max-w-xl md:max-w-2xl border border-ink-700 shadow-2xl shadow-signal/10 max-h-[88vh] overflow-y-auto"
    >
      {/* Top accent — a small, consistent signature across every project card */}
      <div className="h-1.5 w-full bg-gradient-to-r from-signal via-aqua to-signal" />

      {/* Image stage — fixed height regardless of each image's native size,
          so switching between a portrait phone screenshot and a landscape
          web screenshot never changes the modal's shape. */}
      <div className="relative w-full h-[220px] sm:h-[320px] md:h-[380px] bg-ink-950 flex items-center justify-center">
        <img
          key={activeIndex}
          src={project.images[activeIndex]}
          alt={`${titleText} screenshot ${activeIndex + 1}`}
          className="max-h-full max-w-full object-contain"
        />

        <IconButton
          variant="text"
          onClick={onClose}
          className="absolute top-3 right-3 z-20 bg-ink-950/70 hover:bg-ink-800 text-paper backdrop-blur-sm"
          size="sm"
        >
          <XMarkIcon className="h-5 w-5" />
        </IconButton>

        {category && (
          <span className="absolute top-3 left-3 flex items-center gap-1.5 font-mono text-[10px] sm:text-xs uppercase tracking-wide text-aqua bg-ink-950/70 backdrop-blur-sm px-2 py-1 rounded">
            {category}
            <span className="text-paper-faint">· {String(index + 1).padStart(2, "0")}</span>
          </span>
        )}

        {hasMultiple && (
          <>
            <button
              onClick={goPrev}
              aria-label="Previous image"
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-ink-950/70 hover:bg-signal p-2 rounded-full transition-colors backdrop-blur-sm"
            >
              <ChevronLeftIcon className="h-4 w-4 sm:h-5 sm:w-5 text-paper" />
            </button>
            <button
              onClick={goNext}
              aria-label="Next image"
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-ink-950/70 hover:bg-signal p-2 rounded-full transition-colors backdrop-blur-sm"
            >
              <ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5 text-paper" />
            </button>
          </>
        )}
      </div>

      {/* Dot pagination */}
      {hasMultiple && (
        <div className="flex justify-center gap-2 py-3 bg-ink-950">
          {project.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-6 bg-signal" : "w-1.5 bg-ink-700 hover:bg-paper-faint"
              }`}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="p-5 sm:p-7 md:p-8">
        <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold mb-3 text-paper">
          {titleText}
        </h2>

        <p className="text-paper-muted text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
          {project.desc}
        </p>

        {project.stack && (
          <>
            <h4 className="font-mono text-xs uppercase tracking-wide text-paper-faint font-semibold mb-2">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-ink-800 border border-ink-700 text-paper-muted px-3 py-1 rounded-full text-xs sm:text-sm font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </>
        )}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 text-sm sm:text-base bg-signal hover:bg-signal-dark text-white font-semibold rounded-full shadow-lg shadow-signal/20 transition-colors"
          >
            View Project
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </a>
        )}
      </div>
    </Dialog>
  );
}