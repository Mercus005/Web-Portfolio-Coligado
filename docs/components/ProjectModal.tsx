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
      className="bg-gray-900 text-white rounded-2xl overflow-hidden p-0"
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
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-gray-700/70 hover:bg-gray-600 p-2 rounded-full z-40"
                >
                  <ArrowLeftIcon className="h-5 w-5 text-white" />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  onClick={onClickHandler}
                  title={label}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-700/70 hover:bg-gray-600 p-2 rounded-full z-40"
                >
                  <ArrowRightIcon className="h-5 w-5 text-white" />
                </button>
              )
            }
          >
            {project.images.map((img, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-[400px] bg-gray-800"
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
        <div className="w-full lg:w-1/2 p-6 lg:p-8 relative">
          {/* Close Button */}
          <div className="absolute top-4 right-4 z-50 lg:top-4 lg:right-4">
            <IconButton
              variant="text"
              onClick={onClose}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <XMarkIcon className="h-6 w-6" />
            </IconButton>
          </div>

          {/* Content */}
          <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

          <p className="text-gray-300 text-base leading-relaxed mb-6">
            {project.desc}
          </p>

          {/* Tech Stack */}
          {project.stack && (
            <>
              <h4 className="text-lg font-semibold mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-700 text-gray-100 px-3 py-1 rounded-full text-sm font-medium"
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
              className="inline-block mt-6 px-6 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-md hover:bg-yellow-300 transition"
            >
              View Project →
            </a>
          )}

        </div>
      </div>
    </Dialog>
  );
}
