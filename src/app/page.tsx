"use client";

import { Footer } from "../components";
import Navbar from "../components/navbar";
import Hero from "./hero";
import AboutMe from "./about-me";
import { CertificationsSection } from "./certifications";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import ContactForm from "./contact-form";
import Internship from "./internship";
import { useRef, useEffect, useState, useCallback } from "react";

const SECTIONS = [
  { id: "about", Component: Hero },
  { id: "about-me", Component: AboutMe },
  { id: "resume", Component: Resume },
  { id: "internship", Component: Internship },
  { id: "certifications", Component: CertificationsSection },
  { id: "skills", Component: Skills },
  { id: "projects", Component: Projects },
  { id: "contact", Component: ContactForm },
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeSection, setActiveSection] = useState(0);

  const scrollToSection = useCallback((index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  const handleNavClick = (sectionId: string) => {
    // "clients" is the legacy nav id pointing at the certifications section
    const normalized = sectionId === "clients" ? "certifications" : sectionId;
    const index = SECTIONS.findIndex((s) => s.id === normalized);
    if (index !== -1) scrollToSection(index);
  };

  // Drive the side dot-nav off real intersection with the scroll container,
  // instead of hand-rolled wheel/touch delta math.
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const index = sectionRefs.current.findIndex(
              (el) => el === entry.target
            );
            if (index !== -1) setActiveSection(index);
          }
        });
      },
      { root, threshold: 0.5 }
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar onNavClick={handleNavClick} />
      <main
        ref={containerRef}
        className="relative snap-y snap-proximity overflow-y-scroll scroll-smooth"
        style={{ height: "calc(100vh - 4rem)" }}
      >
        {SECTIONS.map(({ id, Component }, index) => (
          <div
            key={id}
            id={id}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            className="snap-start scroll-mt-16 min-h-screen"
          >
            <Component />
          </div>
        ))}

        {/* Side dot navigation */}
        <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-3">
          {SECTIONS.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === index
                  ? "bg-signal scale-125"
                  : "bg-ink-600 hover:bg-paper-faint"
              }`}
              aria-label={`Go to ${section.id} section`}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}