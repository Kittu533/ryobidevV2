"use client";

import React, { useState } from "react";
import { FaTrophy, FaMoneyBillWave, FaAward, FaMedal } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";
import { cn } from "@/lib/utils";

interface AwardCardItemProps {
  title: string;
  organization: string;
  date: string;
  description?: string;
}

const AwardCardItem = ({
  title,
  organization,
  date,
  description,
}: AwardCardItemProps) => {
  const [expanded, setExpanded] = useState(false);
  
  // Potong deskripsi jika lebih dari 70 karakter
  const shortDescription = description && description.length > 70 
    ? `${description.substring(0, 70)}...` 
    : description;
  
  return (
    <div className="flex gap-4 p-4 rounded-xl border border-gray-800/30 bg-black/20 hover:bg-black/30 transition-all">
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1 gap-1">
          <div>
            <h3 className="text-lg font-bold">{title}</h3>
            <span className="text-[#E96604] font-semibold">{organization}</span>
          </div>
          <span className="text-[#E96604] text-sm font-extrabold">{date}</span>
        </div>
        {description && (
          <div className="text-sm text-gray-400">
            <p>{expanded ? description : shortDescription}</p>
            
            {/* Tampilkan tombol "Read more" jika deskripsi dipotong */}
            {description.length > 70 && (
              <button 
                onClick={() => setExpanded(!expanded)}
                className="text-[#E96604] hover:text-orange-500 font-medium mt-1 text-xs"
              >
                {expanded ? "Read less" : "Read more"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

interface AwardCardProps {
  className?: string;
}

export default function AwardCard({ className }: AwardCardProps) {
  const awards = [
    {
    
      title: "UI/UX & Pemrograman Website Competition HMSI UTY 2025",
      organization: "3rd Place ",
      date: "August 2025",
      description: "Won third place in a national UI/UX design competition showcasing innovative mobile app designs.",
    },
    {
      
      title: "Program Kreativitas Mahasiswa PKM-KC",
      organization: "KEMENDIKBUDRISTEK",
      date: "August 2024",
      description: "Honored as a 2024 PKM Grant Recipient by the Directorate General of Higher Education for pioneering the project 'JOGFARM: Marketplace Peternak Berbasis Android' at Universitas Teknologi Yogyakarta.",
    },
    {
     
      title: "Code Problem Solving",
      organization: "HMSI UTY",
      date: "March 2024",
      description: "Created award-winning web application focused on student productivity tools.",
    }
  ];

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-[#E96604] text-4xl drop-shadow-[0_0_16px_#e96604]"><GoTrophy /></span>
          <h2 className="text-2xl font-bold">Awards</h2>
        </div>
        <p className="text-gray-400 text-md font-medium">Recognition and awards received</p>
      </div>

      <div className="flex flex-col gap-3 mt-2">
        {awards.map((award, idx) => (
          <AwardCardItem key={idx} {...award} />
        ))}
      </div>
    </div>
  );
}