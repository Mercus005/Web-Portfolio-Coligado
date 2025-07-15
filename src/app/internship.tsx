"use client";

import { Typography, Button } from "@material-tailwind/react";

export function Internship() {
  return (
    <section className="bg-white py-20 px-6" id="internship">
      <div className="max-w-6xl mx-auto">
        {/* Header Section - Left Aligned */}
        <div className="mb-12">
          <Typography variant="h3" className="text-gray-900 font-bold">
            Internship Experience
          </Typography>
          <Typography className="text-gray-600 text-md">
            TDK Philippines Corporation · Junior Software Developer · May – July 2025
          </Typography>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Paragraph */}
          <div className="text-gray-800 leading-relaxed text-[16px] space-y-4">
            <p>
              I was assigned to the Information System Department (ISD), where I underwent orientation and was later endorsed to
              the infrastructure group. After aligning goals with my supervisor, I was tasked to build an internal inventory system
              to replace manual spreadsheets used for tracking IT assets such as laptops and desktops.
            </p>
            <p>
              The system aimed to improve efficiency, accuracy, and traceability in asset tracking across multiple departments. I worked
              closely with the infrastructure team to ensure alignment with organizational needs and integrated feedback to enhance usability.
            </p>
          </div>

          {/* Right Paragraph */}
          <div className="text-gray-800 leading-relaxed text-[16px] space-y-4">
            <p>
              The web-based system featured account-based access, import/export for csv, audit logs, and CRUD functionality. I developed
              the frontend using HTML, CSS, and Bootstrap 5, while the backend utilized ASP.NET Core MVC 8.0 and MySQL for database management.
            </p>
            <p>
              I followed software development best practices including clean documentation, user testing, and deployment via IIS. The project gave
              me hands-on experience building enterprise tools and maintaining code quality from development to deployment.
            </p>

            <Button
              variant="gradient"
              color="gray"
              className="mt-4 bg-gray-900 hover:bg-gray-800 text-white font-medium px-6 py-2 rounded-md shadow-md transition"
              onClick={() => window.open("/Practicum Final Report_Coligado.pdf", "_blank")}
            >
              View Internship Report
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Internship;
