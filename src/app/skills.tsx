"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Web Development",
    desc: "Build responsive, dynamic sites using HTML, CSS, JavaScript, React, and Node.js.",
  },
  {
    icon: FingerPrintIcon,
    title: "Mobile App Development",
    desc: "Experience in cross-platform mobile apps with Xamarin for iOS and Android.",
  },
  {
    icon: SwatchIcon,
    title: "Programming Languages",
    desc: "Experience in Python, C#, and JavaScript using modern OOP practices.",
  },
  {
    icon: HashtagIcon,
    title: "Database Management",
    desc: "Manage data using MySQL and SQLite in structured, optimized formats.",
  },
  {
    icon: DocumentTextIcon,
    title: "Data Science Foundations",
    desc: "Use Pandas and NumPy for data analysis and exploration.",
  },
];

export default function Skills() {
  return (
    <section className="px-6 py-6 bg-gray-50">
      <div className="text-center mb-16">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase text-sm tracking-widest">
          my skills
        </Typography>
        <Typography variant="h2" className="text-4xl font-bold mb-4 text-blue-gray-900">
          What I Do
        </Typography>
        <Typography variant="lead" className="text-gray-600 max-w-2xl mx-auto">
          I create intuitive digital experiences with code and creativity, focusing on frontend, backend, and mobile development.
        </Typography>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {SKILLS.map(({ icon: Icon, title, desc }, idx) => (
          <div
            key={idx}
            className="w-full max-w-xs flex flex-col items-center text-center px-4 py-6 rounded-xl bg-white shadow hover:shadow-md transition duration-300"
          >
            <div className="mb-4 bg-blue-100 text-blue-600 p-3 rounded-full">
              <Icon className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-semibold text-blue-gray-800 mb-2">{title}</h4>
            <p className="text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
