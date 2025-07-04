"use client";

import {
  Typography,
  Card,
  CardBody,
  IconButton,
} from "@material-tailwind/react";
import {
  EnvelopeIcon,
  PhoneIcon,
  TicketIcon,
} from "@heroicons/react/24/solid";

export function ContactForm() {
  return (
    <section className="px-8 py-10 bg-gray-50" id="contact">
      <div className="container mx-auto mb-10 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Contact Me
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
        >
          My contact information.
        </Typography>
      </div>
      <Card shadow={true} className="container mx-auto border border-gray/50">
        <CardBody className="grid grid-cols-1 lg:grid-cols-2 md:gap-10">
          <div className="w-full rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
            <Typography variant="h4" color="white" className="mb-4">
              Contact Information
            </Typography>
            <Typography
              variant="lead"
              className="text-base !text-gray-400 mb-8"
            >
              You can get in touch with me through the channels below.
            </Typography>

            <div className="flex gap-5 mb-4">
              <PhoneIcon className="h-6 w-6 text-white" />
              <Typography variant="h6" color="white">
                +63 919 005 8783
              </Typography>
            </div>

            <div className="flex gap-5 mb-4">
              <EnvelopeIcon className="h-6 w-6 text-white" />
              <Typography variant="h6" color="white">
                cmrvc.coligado@gmail.com
                2021cmmcoligado@live.mcl.edu.ph
              </Typography>
            </div>

            <div className="flex gap-5 mb-8">
              <TicketIcon className="h-6 w-6 text-white" />
              <Typography variant="h6" color="white">
                www.linkedin.com/in/cmmcoligado 
              </Typography>
            </div>

            <div className="flex items-center gap-5">
              <IconButton variant="text" color="white">
                <i className="fa-brands fa-facebook text-lg" />
              </IconButton>
              <IconButton variant="text" color="white">
                <i className="fa-brands fa-instagram text-lg" />
              </IconButton>
              <IconButton variant="text" color="white">
                <i className="fa-brands fa-github text-lg" />
              </IconButton>
              <IconButton variant="text" color="white">
                <i className="fa-brands fa-linkedin text-lg" />
              </IconButton>
            </div>
          </div>

          <div className="w-full flex items-center justify-center p-10">
            <Typography variant="lead" className="text-gray-600 text-center">
              I'm excited to connect and share my passion for web development. Whether it's a project, collaboration, or opportunity to grow, I'm eager to contribute and learn through building meaningful digital experiences.
            </Typography>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}

export default ContactForm;
