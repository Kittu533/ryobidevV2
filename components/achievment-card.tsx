import { ReactNode } from "react";
import { NumberTicker } from "./magicui/number-ticker";

interface AchievementCardProps {
  value: number;
  label: string;
  icon: ReactNode;
  startValue?: number;
}

export default function AchievementCard({
  value,
  label,
  icon,
  startValue = 0,
}: AchievementCardProps) {
  return (
    <div className="bg-[var(--color-card)] border rounded-lg w-full flex flex-col items-center justify-center gap-2">
      <NumberTicker
        value={value}
        startValue={startValue}
        className="whitespace-pre-wrap text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-gray-700 bg-clip-text text-transparent"
      />
      <div className="flex items-center gap-2 bg-black/30 rounded-lg px-3 py-3">
        {icon}
        <span className="p-[2px] text-base font-semibold text-white bg-clip-text text-transparent">
          {label}
        </span>
      </div>
    </div>
  );
}