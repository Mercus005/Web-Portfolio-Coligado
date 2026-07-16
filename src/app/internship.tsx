"use client";

import { Typography, Button } from "@material-tailwind/react";
import { getPdfPrefix } from "../../utils/utils";

export function Internship() {
  const pdfPath = `${getPdfPrefix()}Practicum Final Report_Coligado.pdf`;

  return (
    <section
      id="internship"
      className="bg-ink-900 text-paper px-4 sm:px-6 md:px-10 lg:px-20 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12">
          <div className="font-mono text-sm text-aqua mb-3">
            {"// internship"}
          </div>
          <Typography
            variant="h3"
            className="font-display text-paper font-semibold text-2xl sm:text-3xl md:text-4xl"
          >
            Internship Experience
          </Typography>
          <Typography className="text-paper-muted text-sm sm:text-base mt-2">
            TDK Philippines Corporation · Software Engineering Intern · May – July 2025
          </Typography>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          <div className="text-paper-muted leading-relaxed text-sm sm:text-base space-y-3 sm:space-y-4">
            <p className="sm:pr-4">
              I was assigned to the Information System Department (ISD), where I underwent orientation and was later endorsed to
              the infrastructure group. After aligning goals with my supervisor, I was tasked to build an internal asset management
              system to replace manual spreadsheets used for tracking IT assets such as laptops and desktops.
            </p>
            <p className="sm:pr-4">
              The system aimed to improve efficiency, accuracy, and traceability in asset tracking across multiple departments. I worked
              closely with the infrastructure team to ensure alignment with organizational needs and integrated feedback to enhance usability.
            </p>
          </div>

          <div className="text-paper-muted leading-relaxed text-sm sm:text-base space-y-3 sm:space-y-4">
            <p className="sm:pr-4">
              The web-based system featured account-based access, CSV import/export, audit logs, and CRUD functionality. I built
              the frontend using HTML, CSS, and Bootstrap 5, while the backend used ASP.NET Core MVC and MySQL, with the database
              architecture designed as an ERD before implementation.
            </p>
            <p className="sm:pr-4">
              I followed real development practices including documentation, user testing, and deployment via IIS. Produced a
              system user manual to support training and long-term maintenance handoff to the Information Systems Department.
            </p>

            <div className="pt-2 sm:pt-4">
              <Button
                variant="filled"
                className="w-full sm:w-auto text-sm sm:text-base bg-signal hover:bg-signal-dark text-white normal-case font-medium px-4 sm:px-6 py-2.5 rounded-md shadow-lg shadow-signal/20 transition-colors"
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