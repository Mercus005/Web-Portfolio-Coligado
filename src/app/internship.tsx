"use client";

import { Typography, Button } from "@material-tailwind/react";
import { getPdfPrefix } from "../../utils/utils";

export function Internship() {
  const pdfPath = `${getPdfPrefix()}Practicum Final Report_Coligado.pdf`;

  return (
    <section
      id="internship"
      className="bg-white text-gray-900 px-4 sm:px-6 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12">
          <Typography
            variant="h3"
            className="text-gray-900 font-bold text-2xl sm:text-3xl md:text-4xl"
          >
            Internship Experience
          </Typography>
          <Typography className="text-gray-600 text-sm sm:text-base mt-2">
            TDK Philippines Corporation · Junior Software Developer · May – July 2025
          </Typography>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          <div className="text-gray-800 leading-relaxed text-sm sm:text-base space-y-3 sm:space-y-4">
            <p className="sm:pr-4">
              I was assigned to the Information System Department (ISD), where I underwent orientation and was later endorsed to
              the infrastructure group. After aligning goals with my supervisor, I was tasked to build an internal inventory system
              to replace manual spreadsheets used for tracking IT assets such as laptops and desktops.
            </p>
            <p className="sm:pr-4">
              The system aimed to improve efficiency, accuracy, and traceability in asset tracking across multiple departments. I worked
              closely with the infrastructure team to ensure alignment with organizational needs and integrated feedback to enhance usability.
            </p>
          </div>

          <div className="text-gray-800 leading-relaxed text-sm sm:text-base space-y-3 sm:space-y-4">
            <p className="sm:pr-4">
              The web-based system featured account-based access, import/export for csv, audit logs, and CRUD functionality. I developed
              the frontend using HTML, CSS, and Bootstrap 5, while the backend utilized ASP.NET Core MVC 8.0 and MySQL for database management.
            </p>
            <p className="sm:pr-4">
              I followed software development practices including documentation, user testing, and deployment via IIS. The project gave
              me hands-on experience building enterprise tools and maintaining code quality from development to deployment.
            </p>

            <div className="pt-2 sm:pt-4">
              <Button
                variant="gradient"
                color="gray"
                className="w-full sm:w-auto text-sm sm:text-base bg-gray-900 hover:bg-gray-800 text-white font-medium px-4 sm:px-6 py-2.5 rounded-md shadow-md transition"
                onClick={() => window.open(pdfPath, "_blank")}
              >
                View Internship Report
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Internship;
