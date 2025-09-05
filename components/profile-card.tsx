import React from "react";
import Image from "next/image";
import BubbleProfile from "./bubble-profile";
import { FaCalendar, FaLanguage, FaPooStorm, FaReact } from "react-icons/fa";
import { FaGithub, FaLocationPin } from "react-icons/fa6";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";

interface ProfileCardProps {
  name: string;
  title: string;
}

export default function ProfileCard({ name, title }: ProfileCardProps) {
  return (
    <div className=" bg-[var(--color-card)] border rounded-lg p-4 flex flex-col items-center">
      <div className="flex justify-start text-center mt-4 ">
        <Image
          src="/avatar.webp"
          alt="Profile Picture"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div className="ml-4 flex flex-col justify-center items-start gap-1">
          <div className=" p-[4px] border rounded-lg bg-green-600/25">
            <p className="text-[#20C55E]">Open to Work</p>
          </div>
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-gray-500">{title}</p>
        </div>
      </div>
      <div className="mt-4 bg-black/30 flex flex-col  border border rounded-lg p-4 w-[382px] h-full">
        <div className="flex gap-2 mb-2">
          <BubbleProfile label="Yogyakarta" icon={<FaLocationPin />} />
          <BubbleProfile label="Indonesia" icon={<FaLanguage />} />
        </div>
        <div className="flex gap-2 mb-2">
          <BubbleProfile label="Frontend Developer" icon={<FaReact />} />
          <BubbleProfile label="22 y/o" icon={<FaCalendar />} />
        </div>
        <div className="flex gap-2 mb-2">
          <BubbleProfile label="Frontend Developer" icon={<FaReact />} />
          <BubbleProfile label="22 y/o" icon={<FaCalendar />} />
        </div>
      </div>
      <div className="flex justify-between w-full gap-4">
        <InteractiveHoverButton icon={<FaPooStorm />} className="w-full mt-4">
          Hire Me
        </InteractiveHoverButton>
        <InteractiveHoverButton icon={<FaGithub />} className="w-full mt-4">
          Github
        </InteractiveHoverButton>
      </div>
    </div>
  );
}
