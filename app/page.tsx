import AchievementCard from "@/components/achievment-card";
import ProfileCard from "@/components/profile-card";
import ProjectCard from "@/components/project-card";
import ServiceCard from "@/components/service-card";
import { FaRegEdit } from "react-icons/fa";
import { FaJoint } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="flex flex-row justify-evenly gap-4 p-4">

      {/* Baris 1 */}
      <div className=" w-[424px] h-full  rounded-lg flex flex-col gap-4 items-center justify-center">
        <div className="bg-[#0F0F10] h-[391px] w-full">
          <ProfileCard name="Ryobi Surya Atmaja" title="Frontend Developer" />
        </div>
        <div className="bg-[#0F0F10] h-[253px] w-full">
          <ServiceCard title="Web Development" description="Building responsive websites" icon={<FaRegEdit color="#E96604" size={32}/>} />
        </div>
        <div className="bg-[#0F0F10] h-[253px] w-full">
          <ProjectCard title="Recent Projects" description="A web application for managing tasks" icon={<FaJoint color="#E96604" size={32}/>} />
        </div>
      </div>
      {/* Baris 2 */}
      <div className="flex flex-col gap-4">
        <div className="bg-[#0F0F10] w-[523px] h-[238px] border rounded-lg">
          sad
        </div>
        <div className=" flex gap-2 justify-evenly">
          <AchievementCard value="10+" label="Projects" icon={<FaRegEdit />}  />
          <AchievementCard value="2+" label="Clients" icon={<FaRegEdit />} />
          <AchievementCard
            value="2+"
            label="Yrs Experience"
            icon={<FaRegEdit />}
          />
        </div>
        <div className="bg-red-500">sad</div>
      </div>
      {/* Baris 3 */}
      <div className="w-[424px] h-[391px] bg-black rounded-lg flex items-center justify-center">
        asdsd
      </div>
    </div>
  );
}
