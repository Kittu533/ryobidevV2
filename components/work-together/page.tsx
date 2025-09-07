import Image from "next/image";
import { SocialMediaDock } from "./_components/social-media-dock";
import { WordRotate } from "../magicui/word-rotate";

export default function WorkTogether() {
  return (
    <div className="rounded-lg relative border bg-card text-card-foreground shadow-sm">
      <div className="p-6 flex flex-col items-center justify-center text-center">
        {/* Icon / Illustration */}
        <div>
          <Image
            src="/Connecting.gif"
            alt="Work Together"
            width={80}
            height={40}
            className="rounded-lg"
          />
        </div>

        {/* Heading */}
        <h2 className="mt-4 text-3xl font-extrabold flex items-center gap-2">
          Lets Work Together
        </h2>

        {/* Description with rotating word - PERBAIKAN */}
        <div className=" flex flex-wrap items-center justify-center gap-1 text-md font-semibold">
          <p className="text-white/70">and make your ideas come to</p>
          <WordRotate
            words={["life", "reality", "success"]}
            className="font-bold text-orange-500 "
            duration={1500}
          />
        </div>
          <SocialMediaDock />
      </div>
    </div>
  );
}
