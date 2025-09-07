"use client";

import Image from "next/image";
import Link from "next/link";

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  isFeatured?: boolean;
  techStack: {
    icon: React.ReactNode;
    name: string;
  }[];
  links?: {
    label: string;
    url: string;
  }[];
}

export default function ProjectCard({
  title,
  description,
  image,
  isFeatured = false,
  techStack,
  links = [],
}: ProjectCardProps) {
  return (
    <div className="relative flex flex-col rounded-xl bg-black border border-gray-800/30 overflow-hidden">
      {/* Project Image */}
      <div className="w-full h-64 relative">
        <Image 
          src={image} 
          alt={title} 
          fill
          className="object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">{title}</h3>
          {isFeatured && (
            <span className="px-3 py-1 bg-orange-900/40 text-orange-300 rounded-md text-xs font-medium">
              Featured
            </span>
          )}
        </div>
        
        <p className="text-gray-400 text-sm">{description}</p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-2">
          {techStack.map((tech, index) => (
            <span 
              key={index}
              className="inline-flex items-center gap-1 px-3 py-1 bg-black/50 rounded-md text-xs"
            >
              {tech.icon}
              <span>{tech.name}</span>
            </span>
          ))}
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex mt-auto border-t border-gray-800/30">
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.url}
            className="flex-1 py-3 flex items-center justify-center gap-2 text-sm font-medium hover:bg-black/30 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}