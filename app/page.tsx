// app/page.tsx
import ProfileCard from "@/components/profile-card/profile-card";
import ServiceCard from "@/components/service-card/service-card";
import ProjectCard from "@/components/project-card";
import TechStackCard from "@/components/techstack-card/page";
import { FaRegEdit } from "react-icons/fa";
import { FaDiagramProject, FaJoint } from "react-icons/fa6";
import AchievementCard from "@/components/achievment-card";
import WorkTogether from "@/components/work-together/page";
import WorkExperience from "@/components/work-experience";
import { GrServices, GrTechnology } from "react-icons/gr";
import AwardCard from "@/components/award-card";

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
                <ProfileCard name="Ryobi Surya Atmaja" title="Web Developer" />
              </div>
            </div>

            <div className="rounded-lg  border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <ServiceCard
                  title="Services"
                  description="My services are tailored to your needs and budget"
                  icon={<GrServices color="#E96604" size={32} />}
                />
              </div>
            </div>

            <div className="rounded-lg  border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <ProjectCard
                  title="Recent Projects"
                  description="Here are some of the projects I have worked on"
                  icon={<FaDiagramProject color="#E96604" size={32} />}
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
                icon={<GrTechnology color="#E96604" size={32} />}
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
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <WorkTogether />
            </div>
            <div className="hidden lg:flex flex-col gap-4 shadow-sm p-4 text-center text-sm">
              <p>
                Made with
                <span className="mx-1">🔥</span>
                by
                <span className="font-bold ml-1 text-orange-500 bg-clip-text drop-shadow-[0_0_16px_#f59e42]">
                  ryobidev
                </span>
              </p>
              <p className="text-gray-400">© 2025 All rights reserved</p>
            </div>
          </section>

          {/* ==== KANAN (5) ==== */}
          <section className="col-span-1 md:col-span-5 lg:col-span-5 flex flex-col gap-4">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <WorkExperience />
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6">
                <AwardCard />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
