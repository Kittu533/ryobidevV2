"use client";

import React from "react";
import { FaReact, FaLaptopCode } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { cn } from "@/lib/utils";

interface ExperienceStepProps {
  icon: React.ReactNode;
  position: string;
  company: string;
  period: string;
  description?: string;
}

const ExperienceStep = ({
  icon,
  position,
  company,
  period,
  description,
}: ExperienceStepProps) => (
  <div className="flex justify-center items-center gap-4 p-4 rounded-xl border border-gray-800/30 bg-black/20 hover:bg-black/30 transition-all">
    <div className="flex items-center justify-center  h-14 w-14 rounded-lg bg-[#E96604] text-2xl text-white">
      {icon}
    </div>
    <div className="flex-1">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1 gap-1">
        <div>
          <h3 className="text-lg font-bold">{position}</h3>
          <span className="text-[#E96604] font-semibold">{company}</span>
        </div>
        <span className="text-[#E96604] text-sm font-extrabold">{period}</span>
      </div>
      {description && (
        <p className="text-sm text-gray-400">{description}</p>
      )}
    </div>
  </div>
);

interface WorkExperienceProps {
  className?: string;
}

export default function WorkExperience({ className }: WorkExperienceProps) {
  const experiences = [
    {
      icon: <FaReact />,
      position: "Internship Frontend Developer",
      company: "Gama Integra Informatika",
      period: "Feb 2025 - Present",
      description: "Frontend development for company projects.",
    },
     {
      icon: <FaReact />,
      position: "Internship Frontend Developer",
      company: "USH UTY X GMEDIA",
      period: "Sep 2025 - Present",
      description: "Frontend development for company projects.",
    },
    {
      icon: <FaLaptopCode />,
      position: "Web Developer",
      company: "UTY Growpath #2",
      period: "Sep 2024 - Feb 2025",
      description: "Developed and maintained web applications.",
    },
  ];

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div className="flex flex-col gap-2">
        <div className="flex items-center   gap-2">
          <span className="text-[#E96604] text-4xl drop-shadow-[0_0_16px_#e96604]"><MdWorkHistory /></span>
          <h2 className="text-2xl font-bold">Work Experience</h2>
        </div>
        <p className="text-gray-400 text-md font-medium">Journey of my work experience</p>
      </div>

      <div className="flex flex-col gap-3 mt-2">
        {experiences.map((exp, idx) => (
          <ExperienceStep key={idx} {...exp} />
        ))}
      </div>
    </div>
  );
}