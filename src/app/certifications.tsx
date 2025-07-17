"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

// Add more certifications as needed
const CERTIFICATIONS = [
  {
    name: "CompTIA ITF+",
    file: "CompTIA-ITF-Plus", // matches file: logos/logo-[file].png
  },
  {
    name: "TOEIC",
    file: "Toeic",
  },
];

export function CertificationsSection() {
  return (
<section
  id="certifications"
  className="py-12 px-8 lg:py-20 bg-gray-900 text-gray-100 min-h-screen flex items-center"
>
  <div className="container mx-auto text-center">
    <Typography variant="h6" className="mb-2 uppercase text-gray-400">
      Certifications & Credentials
    </Typography>
    <Typography variant="h2" className="mb-8 text-gray-300">
      Credentials I’m Proud Of
    </Typography>

    <div className="flex flex-wrap items-center justify-center gap-8">
      {CERTIFICATIONS.map((cert, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center w-40"
        >
          <Image
            src={`${getImagePrefix()}logos/logo-${cert.file}.png`}
            alt={`${cert.name} certification logo`}
            width={160}
            height={160}
            className="grayscale hover:grayscale-0 opacity-100 hover:opacity-100 transition-all duration-300"
          />

          <Typography
            variant="small"
            className="mt-2 text-center text-gray-300"
          >
            {cert.name}
          </Typography>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}

export default CertificationsSection;
