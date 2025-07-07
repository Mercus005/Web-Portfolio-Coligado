"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 px-6 py-24 md:px-10 lg:px-20"
    >
      <div className="container mx-auto grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Text Section */}
        <div className="order-2 lg:order-1 text-center lg:text-left space-y-4 animate-fade-in-up">
          <Typography
            variant="small"
            className="uppercase text-blue-400 font-semibold tracking-wider mb-3"
          >
            Hello, I'm Cliff
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="text-4xl font-extrabold leading-tight lg:text-5xl"
          >
            Aspiring Developer <br />
            <span className="text-blue-500">Building for the Web</span>
          </Typography>
          <Typography
            variant="lead"
            className="text-gray-300 max-w-xl mx-auto lg:mx-0"
          >
            I'm <strong className="text-white">Cliff Marvic M. Coligado</strong>, a graduating Computer Science student passionate about clean design,
            frontend development, and building responsive, accessible user interfaces.
          </Typography>
        </div>

        {/* Image Section */}
        <div className="order-1 lg:order-2 flex justify-center animate-fade-in-up delay-[200ms]">
          <div className="relative h-80 w-80 sm:h-96 sm:w-96 rounded-full ring-4 ring-blue-500 shadow-2xl overflow-hidden">
            <motion.div
              layoutId="profile-image"
              className="relative h-80 w-80 sm:h-96 sm:w-96 rounded-full ring-4 ring-blue-500 shadow-2xl overflow-hidden"
            >
              <Image
                width={600}
                height={600}
                alt="Cliff Coligado portrait"
                src={`${getImagePrefix()}image/profilepic.jpg`}
                className="h-full w-full object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
