"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 px-4 sm:px-6 md:px-10 lg:px-20 min-h-screen flex items-center"
    >
      <div className="container mx-auto grid grid-cols-1 items-center gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-2">
        {/* Text Section */}
        <div className="order-2 lg:order-1 text-center lg:text-left space-y-3 sm:space-y-4 animate-fade-in-up">
          <Typography
            variant="small"
            className="uppercase text-blue-400 font-semibold tracking-wider text-sm sm:text-base"
          >
            Hello, I&apos;m Cliff
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="text-3xl sm:text-4xl font-extrabold leading-tight lg:text-5xl"
          >
            Aspiring Developer <br />
            <span className="text-blue-500">Building for the Web</span>
          </Typography>
          <Typography
            variant="lead"
            className="text-gray-300 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg"
          >
            I&apos;m <strong className="text-white">Cliff Marvic M. Coligado</strong>, a graduating Computer Science student passionate about clean design,
            frontend development, and building responsive, accessible user interfaces.
          </Typography>
        </div>

        {/* Image Section */}
        <div className="order-1 lg:order-2 flex justify-center animate-fade-in-up delay-[200ms]">
          <motion.div
            layoutId="profile-image"
            className="relative h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-full ring-2 sm:ring-4 ring-blue-500 shadow-2xl overflow-hidden"
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
    </section>
  );
}
