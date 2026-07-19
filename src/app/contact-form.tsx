"use client";

import { Typography } from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import ContactRevealCard from "../components/ContactRevealCard";

const CONTACT_TILES = [
  {
    label: "Phone",
    value: "+63 919 005 8783",
    href: "tel:+639190058783",
    icon: PhoneIcon,
  },
  {
    label: "Email",
    value: "cmrvc.coligado@gmail.com",
    href: "mailto:cmrvc.coligado@gmail.com",
    icon: EnvelopeIcon,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/cmmcoligado",
    href: "https://www.linkedin.com/in/cmmcoligado",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.5-1 1.7-2.1 3.5-2.1 3.7 0 4.4 2.4 4.4 5.5V24h-4v-8.5c0-2-.1-4.5-2.7-4.5-2.7 0-3.1 2.1-3.1 4.3V24h-4V8.5z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/Mercus005",
    href: "https://github.com/Mercus005",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.41 7.84 10.95.57.11.78-.25.78-.55v-2.1c-3.18.69-3.85-1.53-3.85-1.53-.52-1.3-1.27-1.65-1.27-1.65-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.26.72-1.55-2.54-.29-5.2-1.27-5.2-5.66 0-1.25.45-2.27 1.19-3.07-.12-.3-.52-1.51.12-3.16 0 0 .97-.31 3.18 1.18a11.03 11.03 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.18-1.18 3.18-1.18.65 1.65.25 2.86.12 3.16.75.8 1.19 1.82 1.19 3.07 0 4.4-2.66 5.36-5.21 5.65.41.35.77 1.04.77 2.1v3.12c0 .31.2.67.79.55A10.51 10.51 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
      </svg>
    ),
  },
];

export function ContactForm() {
  return (
    <section
      id="contact"
      className="px-4 sm:px-6 md:px-10 lg:px-20 py-16 bg-ink-900 text-paper min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
        {/* Left: heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 text-center lg:text-left"
        >
          <div className="font-mono text-sm text-aqua mb-3">{"// contact"}</div>
          <Typography
            variant="h1"
            className="font-display mb-4 text-3xl sm:text-4xl font-semibold text-paper leading-tight"
          >
            Let&rsquo;s Talk
          </Typography>
          <Typography className="text-paper-muted text-sm sm:text-base mb-6 max-w-sm mx-auto lg:mx-0">
            Have an opportunity, a project, or just want to say hi? Hover or
            tap a card to reveal the details.
          </Typography>
          <div className="inline-flex items-center gap-2 justify-center lg:justify-start text-sm text-paper-faint">
            <MapPinIcon className="h-4 w-4 text-signal" />
            Cabuyao City, Laguna, Philippines
          </div>
        </motion.div>

        {/* Right: contact tiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {CONTACT_TILES.map((tile) => (
            <ContactRevealCard key={tile.label} {...tile} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ContactForm;