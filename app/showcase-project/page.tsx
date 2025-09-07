"use client";

import ProjectCard, {
  ProjectCardProps,
} from "@/components/showcase-project/project-card";
import { Spotlight } from "@/components/ui/spotlight-new";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiMysql,
  SiNuxtdotjs,
  SiTypescript,
  SiFirebase,
  SiFastapi,
  SiFlutter,
} from "react-icons/si";

export default function ShowcaseProject() {
  const projects: ProjectCardProps[] = [
    {
      title: "Jobprep",
      description:
        "Jobprep is a platform designed to help users prepare for job interviews by providing a wide range of resources and tools.",
      image: "/jobprep-project.webp",
      isFeatured: true,
      techStack: [
        { icon: <SiNuxtdotjs className="text-white" />, name: "Nuxt" },
        {
          icon: <SiTailwindcss className="text-blue-400" />,
          name: "TailwindCSS",
        },
        {
          icon: <SiTypescript className="text-yellow-400" />,
          name: "Typescript",
        },
        { icon: <SiFirebase className="text-blue-500" />, name: "Firebase" },
        { icon: <SiFastapi className="text-blue-500" />, name: "FastAPI" },

      ],
      links: [
      { label: "Live Demo", url: "https://jobprep-six.vercel.app/" },
    ],
    },
     {
      title: "Jogfarm",
      description:
        "Jogfarm is a platform designed to help users prepare for job interviews by providing a wide range of resources and tools.",
      image: "/jogfarm.webp",
      isFeatured: true,
      techStack: [
        { icon: <SiFlutter className="text-blue-500" />, name: "Flutter" },
        { icon: <SiFirebase className="text-blue-500" />, name: "Firebase" },
      ],
      links: [
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.jogfarm.jogfarmv1&pcampaignid=web_share" },
    ],
    },
  ];

  return (
    <div className="w-full min-h-screen  text-white py-12 px-4 sm:px-6 lg:px-8 bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Header */}
      <Spotlight />

      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Here you can find a collection of my public/open-source projects. Feel
          free to explore and check them out!
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-8 px-6 py-2 bg-orange-600/30 text-orange-300 rounded-lg hover:bg-orange-600/40 transition-colors"
        >
          <FaChevronLeft size={14} /> Back to Home
        </Link>
      </div>

      {/* Project Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
}
