import { Typography, Button } from "@material-tailwind/react";

const LINKS = ["Home", "About Us", "Blog", "Service"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="">
      <div className="container mx-auto">
        <div className="mt-2 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
