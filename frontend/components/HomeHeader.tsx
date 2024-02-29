"use client";
import authStore from "@/stores/authStore";
import Image from "next/image";
import React from "react";

const headerroutes = ["Timeline", "About", "Following", "Media"];

const HomeHeader = () => {
  const user = authStore((state) => state.user);

  return (
    <div className="bg-components-bg h-[22%] w-full flex flex-col">
      <div className="relative w-full h-[84%]">
        <Image
          src={"/default_cover.png"}
          className="object-cover"
          alt="cover_image"
          fill
        />
      </div>
      <div className="flex-1 flex items-center relative justify-center gap-4">
        <div className="absolute left-14 bottom-4 flex items-center gap-5">
          <div className="w-[120px] h-[120px] rounded-full relative">
            <Image
              src={"/avatar.png"}
              className="object-cover"
              fill
              alt="avatar"
            />
          </div>
          <p className="text-white text-lg font-bold">{user && user.name}</p>
        </div>
        
        {headerroutes.map((item, i) => (
          <p className="font-medium text-main-light" key={i}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default HomeHeader;
