import React, { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, icon, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-background p-3 px-6 text-center font-semibold",
        className
      )}
      {...props}
    >
      {/* Normal state */}
      <div className="flex items-center justify-center gap-2 transition-all duration-500 ease-in-out group-hover:opacity-0">
        {icon}
        <span>{children}</span>
      </div>
      
      {/* Hover state - completely separate element */}
      <div className="absolute inset-0 flex items-center justify-center gap-2 bg-background opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight className="text-primary" />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";