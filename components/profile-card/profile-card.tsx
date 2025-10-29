"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import BubbleProfile from "./bubble-profile";
import {
  FaCalendar,
  FaCoffee,
  FaPooStorm,
} from "react-icons/fa";
import { FaGithub, FaLocationPin } from "react-icons/fa6";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { RiSpeakFill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";

interface ProfileCardProps {
  name: string;
  title: string;
}

export default function ProfileCard({ name, title }: ProfileCardProps) {
  return (
    <div className="bg-[var(--color-card)] rounded-lg  w-full select-none">
      {/* HEADER */}
      <div className="grid grid-cols-[72px_1fr] md:grid-cols-[96px_1fr] gap-3 md:gap-4 items-center min-h-[96px] md:min-h-[112px]">
        <Image
          src="/profile-picture.webp"
          alt="Profile Picture"
          width={96}
          height={96}
          className="rounded-full object-cover w-[72px] h-[72px] md:w-[96px] md:h-[96px]"
        />
        <div className="min-w-0 flex flex-col gap-1">
          <div className="inline-flex items-center rounded-lg border bg-green-600/25 px-2 py-1 md:py-2 w-fit">
            <p className="text-[#20C55E] text-sm md:text-md font-medium leading-none">
              Open to Work
            </p>
          </div>
          <h2 className="text-xl md:text-3xl font-extrabold truncate">{name}</h2>
          <p className="text-gray-500 text-sm md:text-lg font-bold truncate">
            {title}
          </p>
        </div>
      </div>

      {/* INFO BUBBLES */}
      <div className="mt-4 bg-black/30 rounded-lg p-3">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-wrap gap-2">
            <BubbleProfile label="Yogyakarta" icon={<FaLocationPin />} />
            <BubbleProfile label="Indonesia " icon={<RiSpeakFill />} />
            <BubbleProfile label="Coffee Addict" icon={<FaCoffee />} />
          </div>
          <div className="flex flex-wrap gap-2">
            <BubbleProfile label="Universitas Teknologi Yogyakarta" icon={<PiStudentFill />} />
            <BubbleProfile label="22 y/o" icon={<FaCalendar />} />
          </div>
        </div>
      </div>

      {/* CTA BUTTONS */}
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 gap-3">
        <Link href="mailto:robiatmaja7@gmail.com" className="w-full">
          <InteractiveHoverButton
            icon={<FaPooStorm />}
            className="h-10 md:h-12 w-full font-semibold text-md md:text-xl"
          >
            Hire Me
          </InteractiveHoverButton>
        </Link>
        <Link href="https://github.com/Kittu533" target="_blank" rel="noopener noreferrer" className="w-full">
          <InteractiveHoverButton
            icon={<FaGithub />}
            className="h-10 md:h-12 w-full bg-orange-600 text-black font-semibold text-md md:text-xl hover:text-white"
          >
            Github
          </InteractiveHoverButton>
        </Link>
      </div>
    </div>
  );
}