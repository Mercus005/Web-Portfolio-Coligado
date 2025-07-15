"use client";

import { Dialog, IconButton } from "@material-tailwind/react";
import { Carousel } from "react-responsive-carousel";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
}

export default function ProjectModal({ open, onClose, project }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog
      open={open}
      handler={onClose}
      size="xl"
      className="bg-gray-900 text-white rounded-2xl overflow-hidden p-0 w-full max-w-sm sm:max-w-lg md:max-w-2xl"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Left: Carousel */}
        <div className="w-full lg:w-1/2 bg-gray-800 relative">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            emulateTouch
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  onClick={onClickHandler}
                  title={label}
                  className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-gray-700/70 hover:bg-gray-600 p-2 sm:p-3 rounded-full z-40"
                >
                  <ArrowLeftIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  onClick={onClickHandler}
                  title={label}
                  className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-gray-700/70 hover:bg-gray-600 p-2 sm:p-3 rounded-full z-40"
                >
                  <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </button>
              )
            }
          >
            {project.images.map((img, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-[250px] sm:h-[300px] md:h-[400px] bg-gray-800"
              >
                <img
                  src={img}
                  alt={`Slide ${i}`}
                  className="h-full max-h-full w-full object-contain rounded"
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Right: Info */}
        <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 relative">
          {/* Close Button */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50">
            <IconButton
              variant="text"
              onClick={onClose}
              className="text-gray-400 hover:text-white focus:outline-none"
              size="sm"
            >
              <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </IconButton>
          </div>

          {/* Content */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
            {project.title}
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
            {project.desc}
          </p>

          {/* Tech Stack */}
          {project.stack && (
            <>
              <h4 className="text-base sm:text-lg font-semibold mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-700 text-gray-100 px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </>
          )}

          {/* View Project Button */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 sm:mt-6 px-5 sm:px-6 py-2 text-sm sm:text-base bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-md hover:bg-yellow-300 transition"
            >
              View Project →
            </a>
          )}
        </div>
      </div>
    </Dialog>
  );
}
