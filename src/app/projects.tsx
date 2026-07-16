"use client";

import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useState, useRef, useCallback, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from "@heroicons/react/24/solid";
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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardElsRef = useRef<Array<HTMLDivElement | null>>([]);
  const dragRef = useRef({ startX: 0, startScroll: 0, moved: false });

  const handleCardClick = useCallback((project: Project, idx: number) => {
    // A drag that ends over a card shouldn't also open it as a click.
    if (dragRef.current.moved) return;
    setSelectedProject(project);
    setSelectedIndex(idx);
    setOpenModal(true);
  }, []);

  // Click-and-drag scrolling for mouse users (trackpads and touch already
  // scroll this natively). A small movement threshold distinguishes an
  // actual drag from a click that happens to twitch a pixel or two, so
  // clicking a card still opens it normally.
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    dragRef.current = { startX: e.pageX, startScroll: scroller.scrollLeft, moved: false };
    setIsDragging(true);

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const dx = moveEvent.pageX - dragRef.current.startX;
      if (Math.abs(dx) > 4) dragRef.current.moved = true;
      if (dragRef.current.moved) {
        scroller.scrollLeft = dragRef.current.startScroll - dx;
      }
    };
    const handleMouseUp = () => {
      setIsDragging(false);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      // Clear the "moved" flag after the click event that follows mouseup
      // has had a chance to check it.
      setTimeout(() => {
        dragRef.current.moved = false;
      }, 0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  }, []);

  // Lets a plain mouse wheel control this row when hovering over it,
  // instead of doing nothing (or bouncing focus to the vertically-snapping
  // page). Only takes over vertical wheel ticks — a trackpad's horizontal
  // swipe is left alone — and steps aside at either end of the row so wheel
  // users aren't trapped and can keep scrolling the page as normal.
  const handleWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

    const { scrollLeft, scrollWidth, clientWidth } = scroller;
    const atStart = scrollLeft <= 0;
    const atEnd = scrollLeft + clientWidth >= scrollWidth - 1;
    if ((atStart && e.deltaY < 0) || (atEnd && e.deltaY > 0)) return;

    e.preventDefault();
    scroller.scrollLeft += e.deltaY;
  }, []);

  const scrollToIndex = useCallback((idx: number) => {
    const clamped = Math.max(0, Math.min(idx, PROJECTS.length - 1));
    cardElsRef.current[clamped]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  }, []);

  // Track which card is at the start of the visible area, computed from
  // scroll position directly. This tracks distance from scrollLeft (the
  // left edge of the view), not the view's center — several cards are
  // visible at once in a wide row, so "nearest to center" pointed at
  // whichever card happened to be geometrically in the middle of that
  // multi-card view rather than the first one, which is why the counter
  // started at 2 instead of 1.
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let ticking = false;
    const updateActive = () => {
      ticking = false;
      const scrollPos = scroller.scrollLeft;
      let closestIdx = 0;
      let closestDist = Infinity;
      cardElsRef.current.forEach((el, i) => {
        if (!el) return;
        const dist = Math.abs(el.offsetLeft - scrollPos);
        if (dist < closestDist) {
          closestDist = dist;
          closestIdx = i;
        }
      });
      setActiveIndex(closestIdx);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateActive);
      }
    };

    updateActive(); // set the correct initial value on mount
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="projects"
      className="bg-ink-950 text-paper py-16 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-10">
          <div className="font-mono text-sm text-aqua mb-3 flex items-center justify-center gap-0.5">
            {"// projects"}
            <span className="inline-block w-[2px] h-4 bg-aqua ml-0.5 animate-pulse motion-reduce:animate-none" />
          </div>
          <Typography
            variant="h2"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 text-paper"
          >
            My Projects
          </Typography>
          <p className="text-sm sm:text-base text-paper-muted max-w-xl mx-auto">
            Drag or use the arrows to browse — pick a card, any card.
          </p>
        </div>

        <div className="relative">
          {/* Edge fades hint that there's more to scroll */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 bg-gradient-to-r from-ink-950 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 bg-gradient-to-l from-ink-950 to-transparent z-10" />

          <div
            ref={scrollerRef}
            onMouseDown={handleMouseDown}
            onWheel={handleWheel}
            className={`flex gap-8 overflow-x-auto py-6 select-none ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.title}
                ref={(el) => {
                  cardElsRef.current[idx] = el;
                }}
                role="button"
                tabIndex={0}
                aria-label={`View ${project.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCardClick(project, idx);
                  }
                }}
                onClick={() => handleCardClick(project, idx)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -12, scale: 1.03 }}
                whileFocus={{ y: -12, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 280, damping: 24 }}
                className="shrink-0 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-signal rounded-2xl w-[260px] sm:w-[300px] md:w-[320px]"
              >
                <ProjectCard {...project} index={idx} />
              </motion.div>
            ))}

            <motion.a
              href="https://github.com/Mercus005"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              className="shrink-0 rounded-2xl w-[260px] sm:w-[300px] md:w-[320px] h-[340px] sm:h-[390px] md:h-[420px] border-2 border-dashed border-ink-700 hover:border-aqua flex flex-col items-center justify-center text-center p-6 transition-colors group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-800 border border-ink-700 text-aqua mb-4 group-hover:scale-110 group-hover:bg-ink-700 transition-all duration-300">
                <PlusIcon className="h-5 w-5" />
              </div>
              <p className="font-display text-base sm:text-lg font-semibold text-paper mb-2">
                More on the way
              </p>
              <p className="text-xs sm:text-sm text-paper-muted leading-relaxed">
                — see everything on GitHub in the meantime.
              </p>
            </motion.a>
          </div>
        </div>

        {/* Arrows + progress */}
        <div className="flex items-center justify-center gap-5 sm:gap-7 mt-8">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToIndex(activeIndex - 1)}
            aria-label="Previous project"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-paper hover:border-signal hover:text-signal transition-colors"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </motion.button>

          <p className="font-mono text-xs text-paper-faint w-16 text-center">
            {String(activeIndex + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
          </p>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToIndex(activeIndex + 1)}
            aria-label="Next project"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-paper hover:border-signal hover:text-signal transition-colors"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </motion.button>
        </div>
      </div>

      <ProjectModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        project={selectedProject}
        index={selectedIndex}
      />
    </section>
  );
}