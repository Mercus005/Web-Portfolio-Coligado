import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
}

export function ProjectCard({ img, title, desc }: ProjectCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader
        floated={false}
        className="mx-0 mt-0 mb-6 relative aspect-video overflow-hidden rounded-xl"
      >
        <Image
  src={img}
  alt={title}
  fill
  className="object-contain"
  sizes="(max-width: 768px) 100vw, 50vw"
/>

      </CardHeader>
      <CardBody className="p-0">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>
        </a>
        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
        <Button color="gray" size="sm">
          see details
        </Button>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
