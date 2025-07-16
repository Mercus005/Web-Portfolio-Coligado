"use client";

import { Typography } from "@material-tailwind/react";

const TECH_STACK = [
  // Frontend
  { name: "HTML5", icon: "/icons/html5.svg" },
  { name: "CSS3", icon: "/icons/css.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Bootstrap", icon: "/icons/bootstrap.svg" },

  // Backend
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "C#", icon: "/icons/csharp.svg" },
  { name: "ASP.NET", icon: "/icons/aspnet.svg" },

  // Database
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "SQLite", icon: "/icons/sqlite.svg" },

  // Game Development
  { name: "Unity", icon: "/icons/unity.svg" },
  { name: "Godot", icon: "/icons/godot.svg" },

  // Mobile Development
  { name: "Xamarin", icon: "/icons/xamarin.svg" },

  // Data Science
  { name: "Python", icon: "/icons/python.svg" },
  { name: "Pandas", icon: "/icons/pandas.svg" },
  { name: "NumPy", icon: "/icons/numpy.svg" },
  { name: "Plotly", icon: "/icons/plotly.svg" },
];


export default function Skills() {
  return (
    <section className="px-6 py-10 bg-gray-50" id="skills">
      <div className="text-center mb-12">
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

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-items-center max-w-5xl mx-auto">
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
    </section>
  );
}
