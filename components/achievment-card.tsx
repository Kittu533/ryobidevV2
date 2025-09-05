import { ReactNode } from "react";

interface AchievementCardProps {
    value:string | number;
    label:string;
    icon:ReactNode;
}

export default function AchievementCard({ value, label, icon }: AchievementCardProps) {
  return (
    <div className="bg-[var(--color-card)] border rounded-lg w-[161px] h-[161px] flex flex-col items-center justify-center gap-2">
      <span className="text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-gray-700 bg-clip-text text-transparent">{value}</span>
      <div className="flex items-center gap-2 bg-black/30 rounded-lg px-3 py-1">
        {icon}
        <span className="p-[2px] text-base font-semibold bg-gradient-to-r from-orange-500 to-gray-700 bg-clip-text text-transparent">{label}</span>
      </div>
    </div>
  );
}
