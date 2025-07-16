"use client";

import { useState } from "react";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

interface Project {
  title: string;
  desc: string;
  images: string[];
  stack: string[];
  link?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Web Development - Asset Management System",
    desc: "A web-based inventory system designed for tracking and managing asset ownership and status.",
    images: [
      `${getImagePrefix()}image/inventory1.png`,
      `${getImagePrefix()}image/inventory2.png`,
      `${getImagePrefix()}image/inventory3.png`,
      `${getImagePrefix()}image/inventory4.png`,
    ],
    stack: ["ASP.NET Core", "Bootstrap CSS", "MySQL", "C#"],
  },
  {
    title: "Web Development - Bookstore Inventory System",
    desc: "Software development project for Blue and Silver Bookshop, simulating online item reservation and handling.",
    images: [
      `${getImagePrefix()}image/bookstore.png`,
      `${getImagePrefix()}image/bookstoreshop.png`,
    ],
    stack: ["ASP.NET Core", "Bootstrap CSS", "SQL", "C#"],
  },
  {
    title: "Mobile Game Development - Little Chimkens",
    desc: "An engaging mobile game built using Unity to showcase interactive multiplayer game.",
    images: [
      `${getImagePrefix()}image/chimn1.jpg`,
      `${getImagePrefix()}image/chimn2.jpg`,
    ],
    stack: ["Unity", "C#"],
    link: "https://play.google.com/store/apps/details?id=com.LittleCompany.LittleChimken&pcampaignid=web_share",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  return (
    <section
      id="projects"
      className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-100"
    >
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <Typography
          variant="h2"
          color="white"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
        >
          My Projects
        </Typography>
        <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
          A collection of my web and game development works, built using various technologies and frameworks.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
        {PROJECTS.map((project, idx) => (
          <div
            key={idx}
            onClick={() => handleCardClick(project)}
            className="cursor-pointer transform transition-transform hover:scale-[1.03] w-full max-w-[160px] sm:max-w-sm mx-auto"
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      <ProjectModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        project={selectedProject}
      />
    </section>
  );
}
