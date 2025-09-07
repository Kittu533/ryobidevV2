// app/page.tsx
import ProfileCard from "@/components/profile-card/profile-card";
import ServiceCard from "@/components/service-card/service-card";
import ProjectCard from "@/components/project-card";
import TechStackCard from "@/components/techstack-card/page";
import { FaRegEdit } from "react-icons/fa";
import { FaJoint } from "react-icons/fa6";
import AchievementCard from "@/components/achievment-card";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* container ala panutan: full width + padding, min 1440px hanya di layar besar */}
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 2xl:min-w-[1440px]">
        {/* grid ala panutan: mobile 1 kolom, tablet 5 kolom, desktop 16 kolom */}
        <main className="grid grid-cols-1 gap-4 md:grid-cols-5 lg:grid-cols-16 2xl:h-fit">
          {/* ==== KIRI (5) ==== */}
          <section className="col-span-1 md:col-span-5 lg:col-span-5 flex flex-col gap-4">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <ProfileCard
                  name="Ryobi Surya Atmaja"
                  title="Frontend Developer"
                />
              </div>
            </div>

            <div className="rounded-lg  border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <ServiceCard
                  title="Servies"
                  description="My services are tailored to your needs and budget"
                  icon={<FaRegEdit color="#E96604" size={32} />}
                />
              </div>
            </div>

            <div className="rounded-lg  border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <ProjectCard
                  title="Recent Projects"
                  description="Here are some of the projects I have worked on"
                  icon={<FaJoint color="#E96604" size={32} />}
                />
              </div>
            </div>
          </section>

          {/* ==== TENGAH (6) ==== */}
          <section className="col-span-1  md:col-span-5 lg:col-span-6 flex flex-col gap-4">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <TechStackCard
                title="Tech Stack"
                description="Technologies I work with"
                icon={<FaJoint color="#E96604" size={32} />}
              />
            </div>

            <div className="rounded-lg  flex justify-around text-center items-center  gap-4  text-card-foreground shadow-sm">
              <div className="h-[150px] flex gap-4 justify-around  w-full rounded-sm">
                <AchievementCard
                  value={10}
                  label="Projects"
                  icon={<FaRegEdit size={24} />}
                />
                <AchievementCard
                  value={2}
                  label="Clients"
                  icon={<FaRegEdit size={24} />}
                />
                <AchievementCard
                  value={3}
                  label="Yrs Experience"
                  icon={<FaRegEdit size={24} />}
                />
              </div>
            </div>
          </section>

          {/* ==== KANAN (5) ==== */}
          <section className="col-span-1 md:col-span-5 lg:col-span-5">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-full min-h-[320px] flex items-center justify-center">
              right column
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
