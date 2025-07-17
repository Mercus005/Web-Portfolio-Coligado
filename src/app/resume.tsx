"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    title: "Education",
    description: "Bachelor of Science in Computer Science",
  },
  {
    icon: PuzzlePieceIcon,
    title: "Career Goal",
    description: "Aspiring Web Developer focused on responsive and accessible design.",
  },
  {
    icon: CursorArrowRaysIcon,
    title: "Specialization",
    description:
      "Front-end development using HTML, CSS, Bootstrap, Tailwind, React, JavaScript, and TypeScript.",
  },
];

export function Resume() {
  return (
    <section
      id="resume"
      className="bg-gray-900 text-gray-100 px-6 min-h-screen flex items-center"
    >
      <div className="container mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
        {/* Left Side - Resume Details */}
        <div className="space-y-6">
          {RESUME_ITEMS.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="mt-1 text-blue-500">
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <Typography variant="h5" className="mb-1 text-white">
                  {item.title}
                </Typography>
                <Typography className="text-sm text-gray-300 leading-relaxed">
                  {item.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Summary and Resume Button */}
        <div>
          <Typography variant="h3" className="mb-4 font-bold text-white">
            My Resume
          </Typography>
          <Typography className="mb-6 text-gray-300 leading-relaxed text-sm">
            Passionate and determined web developer with hands-on experience
            building visually engaging and performant applications. I enjoy crafting clean UI,
            optimizing for responsiveness, and continuously learning modern front-end tools.
          </Typography>
          <a
            href="/Coligado_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="gradient"
              color="gray"
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600"
            >
              View Resume
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
