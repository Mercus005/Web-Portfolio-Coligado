"use client";

// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Clients from "./clients";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import Testimonial from "./testimonial";
import PopularClients from "./popular-clients";
import ContactForm from "./contact-form";
import { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeSection, setActiveSection] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartY = useRef(0);
  
  const scrollToSection = useCallback((index: number, newDirection: number) => {
    const totalSections = sectionRefs.current.length;
    if (index >= 0 && index < totalSections) {
      setDirection(newDirection);
      setActiveSection(index);
      const navbarHeight = 64; // 4rem = 64px
      const sectionEl = sectionRefs.current[index];
      if (sectionEl && containerRef.current) {
        containerRef.current.scrollTo({
          top: sectionEl.offsetTop,
          behavior: "instant"
        });
      }
    }
  }, []);

  useEffect(() => {
    let isScrolling = false;
    let currentSection = activeSection;
    const totalSections = sectionRefs.current.length;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isScrolling) return;
      isScrolling = true;

      const direction = e.deltaY > 0 ? 1 : -1;
      if (direction > 0 && currentSection < totalSections - 1) {
        scrollToSection(currentSection + 1, 1);
        currentSection++;
      } else if (direction < 0 && currentSection > 0) {
        scrollToSection(currentSection - 1, -1);
        currentSection--;
      }

      setTimeout(() => {
        isScrolling = false;
      }, 400); // Faster reset for more responsive feel
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;
      isScrolling = true;

      switch (e.key) {
        case "ArrowDown":
        case "PageDown":
          if (currentSection < totalSections - 1) {
            scrollToSection(currentSection + 1, 1);
            currentSection++;
          }
          break;
        case "ArrowUp":
        case "PageUp":
          if (currentSection > 0) {
            scrollToSection(currentSection - 1, -1);
            currentSection--;
          }
          break;
      }

      setTimeout(() => {
        isScrolling = false;
      }, 400);
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isScrolling) return;
      
      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;
      
      if (Math.abs(deltaY) > 50) { // Minimum swipe distance
        isScrolling = true;
        
        if (deltaY > 0 && currentSection < totalSections - 1) {
          scrollToSection(currentSection + 1, 1);
          currentSection++;
        } else if (deltaY < 0 && currentSection > 0) {
          scrollToSection(currentSection - 1, -1);
          currentSection--;
        }

        setTimeout(() => {
          isScrolling = false;
        }, 400);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      container.addEventListener("touchstart", handleTouchStart);
      container.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [activeSection, scrollToSection]);

  const sectionVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      y: direction < 0 ? 60 : -40,
      opacity: 0,
      scale: 0.98
    })
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <main
        ref={containerRef}
        className="relative overflow-auto"
        style={{ marginTop: '0rem', height: 'calc(100vh - 4rem)' }}
      >
        <div className="relative">
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.div
              key={activeSection}
              custom={direction}
              variants={sectionVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                y: { type: "spring", stiffness: 800, damping: 35 },
                opacity: { duration: 0.1 },
                scale: { duration: 0.15 }
              }}
              className="w-full"
            >
              <div ref={el => sectionRefs.current[0] = el} className="">
                <Hero />
              </div>
              <div ref={el => sectionRefs.current[1] = el} className="">
                <Resume />
              </div>
              <div ref={el => sectionRefs.current[2] = el} className="">
                <Clients />
              </div>
              <div ref={el => sectionRefs.current[3] = el} className="">
                <Skills />
              </div>
              <div ref={el => sectionRefs.current[4] = el} className="">
                <Projects />
              </div>
              <div ref={el => sectionRefs.current[5] = el} className="">
                <ContactForm />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
          <div className="flex flex-col gap-3">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <button
                key={index}
                onClick={() => {
                  scrollToSection(index, index > activeSection ? 1 : -1);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === index 
                    ? 'bg-white scale-125' 
                    : 'bg-gray-500 hover:bg-gray-400'
                }`}
                aria-label={`Go to section ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
