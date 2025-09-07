import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  repeat?: number;
  /**
   * Data items (text / image)
   */
  items: { image?: string; text?: string }[];
  /**
   * Render mode
   */
  variant?: "image" | "text" | "mixed";
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  vertical = false,
  repeat = 4,
  items,
  variant = "mixed",
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] ",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)] ", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {items.map((item, idx) => (
              <div
                key={idx}
                className="px-4 py-2 mx-2 rounded-lg bg-black/30 hover:bg-black/40 transition-all"
              >
                {variant !== "text" && item.image && (
                  <Image
                    src={item.image}
                    alt={item.text || `marquee-${idx}`}
                    width={200}
                    height={200}
                    className="rounded-md object-contain"
                  />
                )}
                {variant !== "image" && item.text && (
                  <span className="text-sm font-medium text-white bg-clip-text text-transparent">
                    {item.text}
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}
