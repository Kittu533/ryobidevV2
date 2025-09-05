import React from "react";
import { MarqueeDemo } from "./marquee-service";

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ProjectCard({
  title,
  description,
  icon,
}: ProjectCardProps) {
  return (
    <div className="bg-[var(--color-card)] border rounded-lg p-4 flex flex-col">
      <div className="flex items-center w-full mb-4 gap-4 p-2">
        <div className="flex justify-center items-center ">{icon}</div>
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-extrabold ">{title}</h3>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
      <div className=" w-full overflow-visible">
        <MarqueeDemo />
      </div>
    </div>
  );
}
