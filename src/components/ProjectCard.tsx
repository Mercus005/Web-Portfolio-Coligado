"use client";

import { Typography } from "@material-tailwind/react";

interface ProjectCardProps {
  title: string;
  desc: string;
  images: string[];
  stack: string[];
}

export default function ProjectCard({ title, desc, images, stack }: ProjectCardProps) {
  const [category, titleText] = title.includes(" - ") ? title.split(" - ") : ["", title];

  return (
    <div className="group [perspective:1000px] w-full h-64 sm:h-72 md:h-80">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

        {/* FRONT SIDE */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 text-gray-100 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg [backface-visibility:hidden]">
          <img
            src={images[0]}
            alt={titleText}
            className="h-32 sm:h-40 md:h-48 w-full object-cover"
          />
          <div className="p-3 sm:p-4">
            {category && (
              <Typography
                variant="small"
                className="uppercase text-blue-400 font-semibold tracking-wide text-xs sm:text-sm mb-1"
              >
                {category}
              </Typography>
            )}
            <Typography
              variant="h5"
              className="text-white font-bold text-base sm:text-lg leading-snug tracking-tight"
            >
              {titleText}
            </Typography>
          </div>
        </div>

        {/* BACK SIDE (Updated) */}
        <div className="absolute inset-0 bg-gray-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-gray-100 overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col">
          
          {/* Description */}
          <div className="mb-2">
            <Typography
              variant="small"
              className="uppercase text-gray-400 font-semibold tracking-wide text-xs sm:text-sm mb-1"
            >
              Description
            </Typography>
            <Typography className="text-xs sm:text-sm text-gray-200 leading-snug line-clamp-3">
              {desc}
            </Typography>
          </div>

          {/* Tech Stack */}
          <div className="mb-3">
            <Typography
              variant="small"
              className="uppercase text-gray-400 font-semibold tracking-wide text-xs sm:text-sm mb-1"
            >
              Tech Stack
            </Typography>
            <div className="flex flex-wrap gap-1 max-h-[3rem] overflow-y-auto">
              {stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gray-700/80 text-gray-100 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium truncate"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Click Indicator */}
          {images.length > 1 && (
            <div className="mt-auto flex justify-center">
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-400 text-blue-300 text-[11px] sm:text-xs font-medium shadow shadow-blue-400/10 hover:bg-blue-500/20 hover:text-white transition-all">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span>Click to view</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
