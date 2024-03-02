"use client";
import authStore from "@/stores/authStore";
import Image from "next/image";
import React from "react";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

const publicheaderroutes = ["Timeline", "About", "Projects", "Media"];
const privateheaderroutes = [
  "Timeline",
  "About",
  "Followers",
  "Following",
  "Projects",
  "Media",
];

const HomeHeader = () => {
  const user = authStore((state) => state.user);
  const params = useParams();
  const isuserProfile = user?._id === params.id;
  const pathname = usePathname();

  const tabViewStyler = (route: string): string => {
    if (route === pathname) {
      return "bg-[#1AA0FF22] text-white px-2 h-full flex items-center justify-center  border-b-[3px] border-[#1AA0FF]";
    }
    return "bg-transparent text-main-light";
  };

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
              className="object-cover "
              fill
              alt="avatar"
            />
          </div>
          <p className="text-white text-lg font-bold">{user && user.name}</p>
        </div>

        {isuserProfile
          ? privateheaderroutes.map((item) => (
              <Link
                className={`${tabViewStyler(
                  item === "Timeline"
                    ? `/userprofile/${params.id}`
                    : `/userprofile/${params.id}/${item.toLocaleLowerCase()}`
                )}`}
                href={`${
                  item === "Timeline"
                    ? `/userprofile/${params.id}`
                    : `/userprofile/${params.id}/${item.toLocaleLowerCase()}`
                } `}
              >
                {item}
              </Link>
            ))
          : publicheaderroutes.map((item, i) => (
              <p className="font-medium text-main-light" key={i}>
                {item}
              </p>
            ))}
      </div>
    </div>
  );
};

export default HomeHeader;
