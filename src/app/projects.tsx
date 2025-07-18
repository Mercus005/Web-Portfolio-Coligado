"use client";

import { useState, useCallback } from "react";
import { Typography } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { getIconPrefix } from "../../utils/utils";
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
    title: "Web Development - CA19-9 Elevation Likelihood Prediction System",
    desc: "A thesis project to predict the likelihood of CA19-9 elevation in patients based on urine biomarkers.",
    images: [
      `${getImagePrefix()}image/ca19_login.png`,
      `${getImagePrefix()}image/ca19_form.png`,
      `${getImagePrefix()}image/ca19_analytics.png`,
      `${getImagePrefix()}image/ca19_history.png`,
      `${getImagePrefix()}image/ca19_admin.png`,
    ],
    stack: ["Django", "Python", "Bootstrap CSS", "HTML", "JavaScript", "Plotly"],
    link: "https://ca19pred-web.onrender.com/",
  },
  {
    title: "Mobile Game Development - Little Chimkens",
    desc: "An engaging mobile game built using Unity to showcase interactive multiplayer gameplay.",
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

  const handleCardClick = useCallback((project: Project) => {
    setSelectedProject(project);
    setOpenModal(true);
  }, []);

  return (
    <section
      id="projects"
      className="bg-gray-900 text-white py-2 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center relative"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <Typography
          variant="h2"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
        >
          My Projects
        </Typography>
        <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
          A showcase of my recent development work across various technologies.
        </p>
      </div>

      <div className="relative w-full max-w-7xl mx-auto">
        <div className="absolute -left-14 top-1/2 transform -translate-y-1/2 z-10">
          <div className="swiper-button-prev custom-nav-arrow">
            <img
              src={`${getIconPrefix()}navarrow.svg`}
              alt="Previous"
              className="nav-arrow-img arrow-left"
            />
          </div>
        </div>

        <div className="absolute -right-14 top-1/2 transform -translate-y-1/2 z-10">
          <div className="swiper-button-next custom-nav-arrow">
            <img
              src={`${getIconPrefix()}navarrow.svg`}
              alt="Next"
              className="nav-arrow-img arrow-right"
            />
          </div>
        </div>


        <Swiper
          modules={[Pagination, Navigation, Autoplay, Keyboard]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          keyboard={{ enabled: true }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            bulletClass: "swiper-pagination-bullet custom-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active custom-bullet-active",
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {PROJECTS.map((project, idx) => (
            <SwiperSlide key={idx}>
              <div
                onClick={() => handleCardClick(project)}
                className="cursor-pointer transform transition-transform hover:scale-[1.03] hover: w-full h-full px-2 py-2"
              >
                <ProjectCard {...project} />
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-pagination mt-6 flex justify-center gap-2" />
        </Swiper>
      </div>


      <ProjectModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        project={selectedProject}
      />
    </section>
  );
}
