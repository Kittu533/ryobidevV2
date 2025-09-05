import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const services = [
  { title: "Front-end Development" },
  { title: "Web Development" },
  { title: "UI/UX Design" },
  { title: "Mobile App Development" },
  { title: "React Development" },
  { title: "Next.js Development" },
  { title: "Tailwind CSS" },
  { title: "Responsive Design" }
];

const firstRow = services.slice(0, services.length / 2);
const secondRow = services.slice(services.length / 2);

const ServiceCard = ({ title }: { title: string }) => {
  return (
    <div
      className={cn(
        "relative mx-4 px-4 py-2 cursor-pointer overflow-hidden rounded-lg",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-black/30 dark:hover:bg-black/40",
      )}
    >
      <span className="text-base font-medium bg-gradient-to-r from-orange-500 to-gray-700 bg-clip-text text-transparent">
        {title}
      </span>
    </div>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-4">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}