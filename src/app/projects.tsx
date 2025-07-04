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
  stack: ["ASP.NET Core", "Bootstrap CSS", "MySQL", "C#"]
},
{
  title: "Web Development - Bookstore Inventory System",
  desc: "Software development project for Blue and Silver Bookshop, simulating online item reservation and handling.",
  images: [
    `${getImagePrefix()}image/bookstore.png`,
    `${getImagePrefix()}image/bookstoreshop.png`,
  ],
  stack: ["ASP.NET Core", "Bootstrap CSS", "SQL", "C#"]
},
{
  title: "Mobile Game Development - Little Chimkens",
  desc: "An engaging mobile game built using Unity to showcase interactive multiplayer game.",
  images: [
    `${getImagePrefix()}image/chimn1.jpg`,
    `${getImagePrefix()}image/chimn2.jpg`,
  ],
  stack: ["Unity", "C#"]
}

];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  return (
    <section className="py-20 px-8 bg-gray-900 text-gray-100" id="projects">
  <div className="container mx-auto mb-20 text-center">
    <Typography variant="h2" color="white" className="mb-4">
      My Projects
    </Typography>
    <Typography
      variant="lead"
      className="mx-auto w-full px-4 font-normal text-gray-300 lg:w-6/12"
    >
      Whether you have a mobile app idea that needs to come to life or a
      website that requires a facelift, I&apos;m here to turn your digital
      dreams into reality.
    </Typography>
  </div>

      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((project, idx) => (
          <div key={idx} onClick={() => handleCardClick(project)} className="cursor-pointer">
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
