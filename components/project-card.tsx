"use client";

import React from "react";
import { Marquee } from "@/components/magicui/marquee";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { useRouter } from "next/navigation";
import { FaHireAHelper } from "react-icons/fa";

const projects = [
  { image: "/Delvfox.webp" },
  { image: "/Delvfox.webp" },
  { image: "/Delvfox.webp" },
  { image: "/Delvfox.webp" },
];

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  projectSlug?: string;
}

export default function ProjectCard({
  title,
  description,
  icon,
  projectSlug = "",
}: ProjectCardProps) {
  const router = useRouter();

  //    function for navigate to detail-project / showcase page
  const goToShowcaseProject = () => {
    const targetUrl = projectSlug
      ? `/showcase-project/${projectSlug}`
      : "/showcase-project";
    router.push(targetUrl);
  };
  return (
    <div className="bg-[var(--color-card)]  rounded-lg  flex flex-col w-full h-full relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-col items-start sm:items-start w-full mb-4 gap-4 p-2">
        <div className="flex gap-2 justify-center items-center text-2xl sm:text-3xl">
          <span className="drop-shadow-[0_0_16px_#e96604]">
            {icon}
          </span>
          <h3 className="text-2xl font-extrabold leading-tight">{title}</h3>
        </div>
        <p className="text-gray-500 text-sm sm:text-base break-words">
          {description}
        </p>
      </div>

      {/* Marquee bawah */}
      <div className="relative w-full overflow-hidden">
        <Marquee
          items={projects}
          variant="image"
          repeat={6}
          pauseOnHover
          className="[--duration:30s]"
        />

        {/* Button overlay */}
        <div className="absolute inset-x-0 bottom-1  z-10 flex justify-center">
          <InteractiveHoverButton
            onClick={goToShowcaseProject}
            icon={<FaHireAHelper />}
            className="px-12 py-2"
          >
            See More
          </InteractiveHoverButton>
        </div>

        {/* Gradient fade kiri */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--color-card)] to-transparent" />

        {/* Gradient fade kanan */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--color-card)] to-transparent" />
      </div>
    </div>
  );
}
