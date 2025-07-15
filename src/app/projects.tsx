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
    link: "https://play.google.com/store/apps/details?id=com.LittleCompany.LittleChimken&pcampaignid=web_share", // ✅
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
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-100" id="projects">
    <div className="max-w-7xl mx-auto mb-16 text-center">
      <Typography variant="h2" color="white" className="mb-6 text-3xl sm:text-4xl">
        My Projects
      </Typography>
    </div>
  
    <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {PROJECTS.map((project, idx) => (
        <div
        key={idx}
        onClick={() => handleCardClick(project)}
        className="cursor-pointer transform transition hover:scale-[1.03] mx-auto w-full max-w-xs sm:max-w-sm"
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
