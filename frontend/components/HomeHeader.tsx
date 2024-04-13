"use client";
import authStore from "@/stores/authStore";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { getUser } from "@/lib/actions/authRequest";
import { User } from "@/types/User";

const publicheaderroutes = ["Timeline", "About", "Projects", "Media"];
const privateheaderroutes = [
  "Timeline",
  "About",
  "Followers",
  "Following",
  "Projects",
  "Media",
];
// TODO:TYPE FULL PROJECT
const HomeHeader = () => {
  const params = useParams();
  const user = authStore((state) => state.user);
  const execwind = authStore((state) => state.initializeWindow);
  const isuserProfile = user?._id === params.id;
  const pathname = usePathname();
  const [userdata, setUserdata] = useState<User>();

  const tabViewStyler = (route: string): string => {
    if (route === pathname) {
      return "bg-[#1AA0FF22] text-white px-2 h-full flex items-center justify-center  border-b-[3px] border-[#1AA0FF]";
    }
    return "bg-transparent text-main-light";
  };

  useEffect(() => {
    const getme = async () => {
      try {
        execwind();
        const userEff = authStore.getState().user;
        const response = await getUser(params.id, userEff.token);
        setUserdata(response?.data);
        console.log(userdata);
      } catch (error) {
        console.error(error);
      }
    };
    getme();
  }, []);

  return (
    <div className="bg-components-bg h-[22%] w-full flex flex-col">
      <div className="relative w-full h-[84%]">
        <Image
          src={"/pb.jpeg"}
          className="object-cover  object-center"
          alt="cover_image"
          fill
        />
      </div>
      <div className="flex-1 flex items-center relative justify-center gap-4">
        <div className="absolute left-14 bottom-4 flex items-center gap-5">
          <div className="w-[120px] h-[120px]  rounded-full relative bg-white">
            <Image
              src={"/avatar.jpeg"}
              className="object-cover rounded-full object-top"
              fill
              alt="avatar"
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-white text-lg font-bold">
              {userdata && userdata?.name}
            </p>
            {!isuserProfile && (
              <div className="px-4 py-1 text-center font-bold cursor-pointer rounded-full bg-white text-black">
                Follow
              </div>
            )}
          </div>
        </div>

        {isuserProfile
          ? privateheaderroutes.map((item, i) => (
              <Link
                key={i}
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
