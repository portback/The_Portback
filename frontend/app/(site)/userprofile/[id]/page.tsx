import ProfileIntroCard from "@/components/ProfileIntroCard";
import Image from "next/image";
import React from "react";

const UserProfilePage = () => {
  return (
    <div className="flex w-full mt-[1rem] min-h-screen  gap-4">
      <div className="flex flex-col basis-1/3 px-3 py-3 gap-8">
        {/* sidebar */}
        <ProfileIntroCard />
        <div className="min-h-[210px] w-full rounded-md bg-sidebar-bg text-main-light ">
          <div className="relative w-full h-[70%]">
            <Image
              className="object-cover rounded-t-md object-center"
              src={"/stars.jpeg"}
              alt="stars"
              fill
            />
          </div>
          <div className="px-2 py-2 flex flex-col ">
            <p className="text-white capitalize font-bold text-base">Portback User</p>
            <p className="font-medium capitalize">
              since <span className="text-main-blue">
                16th Aug 2023
              </span>
            </p>
          </div>
        </div>
        <div className="min-h-[200px] w-full rounded-md bg-sidebar-bg text-main-light px-2 py-2">
          <p className="text-lg">Work Experience</p>
        </div>
      </div>

      <div className="flex-1 ">{/* main */}</div>
    </div>
  );
};

export default UserProfilePage;
