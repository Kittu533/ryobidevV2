"use client";

import React from "react";
import ItemTechstack from "./_components/item-techstack";
import { FaLaravel, FaReact, FaShare, FaVuejs } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";
import { SiExpress } from "react-icons/si";

interface TechStackCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function TechStackCard({
  title,
  description,
  icon,
}: TechStackCardProps) {
  return (
    <div className="bg-[var(--color-card)] border rounded-lg p-4 flex flex-col w-full h-full relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center w-full mb-4 gap-4 p-2">
        <div className="flex justify-center items-center text-2xl sm:text-3xl drop-shadow-[0_0_16px_#e96604]">
          {icon}
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-extrabold leading-tight">{title}</h3>
          <p className="text-gray-500 text-sm sm:text-base break-words">
            {description}
          </p>
        </div>
      </div>
      {/* Content bawah */}
      {/* Content bawah */}
      <div className="flex flex-col gap-3 p-1 sm:grid sm:grid-cols-2">
        <ItemTechstack
          label="React & Next Js"
          icon={<FaReact size={32} />}
          icon2={<CiShare1 size={24} />}
          delay={5}
        />
        <ItemTechstack
          label="Laravel"
          icon={<FaLaravel size={32} />}
          icon2={<CiShare1 size={24} />}
          delay={10}
        />
        <ItemTechstack
          label="Vue & Nuxt"
          icon={<FaVuejs size={32} />}
          icon2={<CiShare1 size={24} />}
          delay={15}
        />
        <ItemTechstack
          label="Express"
          icon={<SiExpress size={32} />}
          icon2={<CiShare1 size={24} />}
          delay={20}
        />
      </div>
    </div>
  );
}
