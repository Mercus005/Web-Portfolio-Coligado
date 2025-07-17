"use client";

import {
  Typography,
  IconButton,
} from "@material-tailwind/react";
import {
  EnvelopeIcon,
  PhoneIcon,
  TicketIcon,
} from "@heroicons/react/24/solid";

export function ContactForm() {
  return (
    <section
      id="contact"
      className="px-4 sm:px-6 md:px-8 py-16 bg-gray-50 min-h-screen flex flex-col items-center"
    >
      <div className="text-center mb-10 px-4">
        <Typography variant="h1" color="blue-gray" className="mb-4 text-3xl sm:text-4xl">
          Contact Me
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full max-w-lg text-gray-500"
        >
          My contact information.
        </Typography>
      </div>

      <div className="w-full max-w-3xl">
        <div className="w-full rounded-lg h-full py-10 px-6 sm:px-8 md:px-16 bg-gray-900">
          <Typography variant="h4" color="white" className="mb-4 text-2xl sm:text-3xl">
            Contact Information
          </Typography>

          <Typography
            variant="lead"
            className="text-base text-gray-400 mb-8"
          >
            You can get in touch with me through the channels below.
          </Typography>

          <div className="space-y-6 text-white">
            <div className="flex items-start gap-4">
              <PhoneIcon className="h-6 w-6 mt-1 text-white shrink-0" />
              <Typography variant="h6" color="white" className="break-words">
                +63 919 005 8783
              </Typography>
            </div>

            <div className="flex items-start gap-4">
              <EnvelopeIcon className="h-6 w-6 mt-1 text-white shrink-0" />
              <div className="text-white space-y-1 text-sm sm:text-base">
                <div>cmrvc.coligado@gmail.com</div>
                <div>2021cmmcoligado@live.mcl.edu.ph</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <TicketIcon className="h-6 w-6 mt-1 text-white shrink-0" />
              <div className="text-white space-y-1 text-sm sm:text-base break-words">
                <div>www.linkedin.com/in/cmmcoligado</div>
                <div>https://github.com/Mercus005</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-start gap-5 mt-10">
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
      </div>
    </section>
  );
}

export default ContactForm;
