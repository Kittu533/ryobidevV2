import { BorderBeam } from "@/components/magicui/border-beam";
import { cn } from "@/lib/utils";

interface itemTechstackProps {
  label: string;
  icon: React.ReactNode;
  icon2: React.ReactNode;
  delay?: number; // Tambah prop delay
  className?: string; // Tambah prop className
}

export default function ItemTechstack({
  label,
  icon,
  icon2,
  delay = 10, // Default delay
  className,
}: itemTechstackProps) {
  return (
    <>
      <div className={cn("item-techstack gap-2 bg-black/30 rounded-lg", className)}>
        <div className="flex items-center gap-2 px-4 py-3 w-full justify-between rounded-lg relative z-10 overflow-hidden">
          <div className="flex items-center gap-2">
            <div className="icon">{icon}</div>
            <div className="label font-bold">{label}</div>
          </div>
          <div className="icon2">{icon2}</div>
          <BorderBeam
            size={60}
            delay={delay} // Gunakan prop delay
            className="from-transparent via-yellow-500 to-transparent"
          />
        </div>
      </div>
    </>
  );
}