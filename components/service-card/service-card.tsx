import React from "react";
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

// ==== DATA SERVICE ====
const services = [
  { text: "Web Development" },
  { text: "UI/UX Design" },
  { text: "Mobile App Development" },
  { text: "SEO Optimization" },
  { text: "Performance Optimization" },
];

const services2 = [
  { text: "Web Development" },
  { text: "UI/UX Design" },
  { text: "Mobile App Development" },
  { text: "SEO Optimization" },
  { text: "Performance Optimization" },
];

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <div className="bg-[var(--color-card)] rounded-lg  flex flex-col w-full h-full">
      {/* Header card */}
      <div className="flex flex-col sm:flex-col items-start sm:items-start w-full mb-4 gap-4 p-2">
        <div className="flex justify-center gap-2 items-center text-2xl  sm:text-3xl">
          <span className="drop-shadow-[0_0_16px_#e96604]">
            {icon}
          </span>
          <h3 className="text-2xl font-extrabold leading-tight">{title}</h3>
        </div>
        <p className="text-gray-500 text-sm sm:text-base break-words">
          {description}
        </p>
      </div>

      {/* Content bawah - 2 baris marquee */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden  ">
        {/* Row 1 */}
        <Marquee
          items={services}
          variant="text"
          pauseOnHover
          className="[--duration:25s] py-2"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="px-4 py-2 mx-2 rounded-lg bg-black/30 hover:bg-black/40 transition-all"
            >
              <span className="text-sm font-medium bg-gradient-to-r  from-orange-600 to-black bg-clip-text text-transparent">
                {service.text}
              </span>
            </div>
          ))}
        </Marquee>

        {/* Row 2 - reverse direction */}
        <Marquee
          items={services2}
          variant="text"
          pauseOnHover
          reverse
          className="[--duration:30s] py-2 "
        >
          {services2.map((service, index) => (
            <div
              key={index}
              className="px-4 py-2 mx-2 rounded-lg bg-black/30 hover:bg-black/40 transition-all"
            >
              <span className="text-sm font-medium bg-gradient-to-r from-orange-600 to-black bg-clip-text text-transparent">
                {service.text}
              </span>
            </div>
          ))}
        </Marquee>

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--color-card)] to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--color-card)] to-transparent"></div>
      </div>
    </div>
  );
}
