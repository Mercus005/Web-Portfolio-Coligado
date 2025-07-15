"use client";

import React from "react";
import {
  Navbar as MTNavbar,
  IconButton,
  Typography,
  Collapse,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  XMarkIcon,
  Bars3Icon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";

const NAV_MENU = [
  { name: "About", icon: UserCircleIcon, href: "#about" },
  { name: "Projects", icon: RectangleStackIcon, href: "#projects" },
  { name: "Internship", icon: BriefcaseIcon, href: "#internship" },
  { name: "Contact", icon: CommandLineIcon, href: "#contact" },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <a
        href={href || "#"}
        className="flex items-center gap-1.5 sm:gap-2 font-medium text-gray-200 hover:text-blue-400 transition-colors duration-200 text-sm sm:text-base"
      >
        {children}
      </a>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      className="sticky top-0 z-50 border-0 bg-gray-900 text-white backdrop-blur-md px-4 sm:px-6"
    >
      <div className="container mx-auto flex items-center justify-between py-2 sm:py-3">
        <Typography className="text-base sm:text-lg font-bold text-white truncate max-w-[200px] sm:max-w-none">
          Cliff Marvic M. Coligado - Portfolio
        </Typography>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-4 sm:gap-6 lg:gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
              {name}
            </NavItem>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <IconButton
          variant="text"
          color="white"
          onClick={handleOpen}
          className="ml-auto lg:hidden h-8 w-8 sm:h-10 sm:w-10"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-5 w-5 sm:h-6 sm:w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-5 w-5 sm:h-6 sm:w-6" />
          )}
        </IconButton>
      </div>

      {/* Mobile Menu */}
      <Collapse open={open}>
        <ul className="flex flex-col gap-3 px-4 sm:px-6 pb-4 lg:hidden">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
