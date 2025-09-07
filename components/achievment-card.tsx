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
    <div className="bg-[var(--color-card)] border rounded-lg w-full flex flex-col items-center justify-center gap-2 p-2 sm:p-3 md:p-4">
      <NumberTicker
        value={value}
        startValue={startValue}
        className="
          whitespace-pre-wrap 
          drop-shadow-[0_0_24px_#f59e42] 
          text-3xl sm:text-4xl md:text-5xl 
          font-extrabold 
          bg-clip-text 
          text-orange-600
        "
      />
      <div
        className="
          flex items-center gap-1.5 sm:gap-2 
          bg-black/30 rounded-lg 
          px-2 py-1.5 sm:px-3 sm:py-2
        "
      >
        <span className="text-sm sm:text-base md:text-lg text-white">
          {icon}
        </span>
        <span
          className="
            p-[1px] sm:p-[2px] 
            text-xs sm:text-sm md:text-base 
            font-semibold 
            text-white 
            bg-clip-text text-transparent
          "
        >
          {label}
        </span>
      </div>
    </div>
  );
}
