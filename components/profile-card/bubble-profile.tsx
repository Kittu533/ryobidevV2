interface BubbleProfileProps {
  label: string;
  icon: React.ReactNode;
}

export default function BubbleProfile({ label, icon }: BubbleProfileProps) {
  return (
    <div className="bubble-profile w-fit max-w-full">
      <div className="flex items-center gap-2 bg-black/70 rounded-lg px-2 py-1 sm:px-3 sm:py-1 w-fit max-w-full">
        {icon}
        <span className="p-[2px] text-sm sm:text-base font-semibold text-white bg-clip-text text-transparent truncate">
          {label}
        </span>
      </div>
    </div>
  );
}