"use client";

import { Typography } from "@material-tailwind/react";
import { getIconPrefix } from "../../utils/utils";

const TECH_STACK = [
  // Frontend
  { name: "HTML5", icon: `${getIconPrefix()}html5.svg` },
  { name: "CSS3", icon: `${getIconPrefix()}css.svg` },
  { name: "JavaScript", icon: `${getIconPrefix()}javascript.svg` },
  { name: "React", icon: `${getIconPrefix()}react.svg` },
  { name: "Bootstrap", icon: `${getIconPrefix()}bootstrap.svg` },

  // Backend
  { name: "Node.js", icon: `${getIconPrefix()}nodejs.svg` },
  { name: "C#", icon: `${getIconPrefix()}csharp.svg` },
  { name: "ASP.NET", icon: `${getIconPrefix()}aspnet.svg` },

  // Database
  { name: "MySQL", icon: `${getIconPrefix()}mysql.svg` },
  { name: "SQLite", icon: `${getIconPrefix()}sqlite.svg` },

  // Game Development
  { name: "Unity", icon: `${getIconPrefix()}unity.svg` },
  { name: "Godot", icon: `${getIconPrefix()}godot.svg` },

  // Mobile Development
  { name: "Xamarin", icon: `${getIconPrefix()}xamarin.svg` },

  // Data Science
  { name: "Python", icon: `${getIconPrefix()}python.svg` },
  { name: "Pandas", icon: `${getIconPrefix()}pandas.svg` },
  { name: "NumPy", icon: `${getIconPrefix()}numpy.svg` },
  { name: "Plotly", icon: `${getIconPrefix()}plotly.svg` },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-50 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full flex flex-col items-center text-center">
        <div className="mb-10">
          <Typography
            color="blue-gray"
            className="mb-2 font-bold uppercase text-sm tracking-widest"
          >
            my tech stack
          </Typography>
          <Typography
            variant="h2"
            className="text-3xl sm:text-4xl font-bold mb-4 text-blue-gray-900"
          >
            Tools & Technologies
          </Typography>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-items-center w-full">
          {TECH_STACK.map((tech, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-2 text-center hover:scale-105 transition"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-10 w-10 object-contain"
              />
              <span className="text-sm text-gray-700 font-medium">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
