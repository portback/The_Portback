"use client";
import { sidebarlist } from "@/constant/sidebar-links";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";

const Sidebar = ({ params }: any) => {
  const pathname = usePathname();

  return (
    <div
      className={` custom-scroll overflow-auto sticky w-[15vw] top-0 left-0 h-screen  bg-sidebar-bg border-r-[1px] border-sidebar-border z-10  shadow-lg  py-[1rem]  md:flex flex-col  hidden `}
    >
      <div className="relative w-[60%] h-[40px] self-center">
        <Image
          src={"/sidetext.png"}
          alt="text"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col justify-between h-full">
        {/* nav routes for left side bar */}
        <div className="mt-6 px-3 flex flex-col gap-1">
          {sidebarlist.map((item, i) => (
            <Link
              href={item.href}
              key={i}
              className={`${pathname == item.href ? 'bg-[#1E2231] text-white' : 'text-main-light bg-transparent'} flex items-center gap-4 px-2 py-2 rounded-md `}
            >
              <item.Icon  fontSize={22} />
              <p className="text-base">{item.title}</p>
            </Link>
          ))}
        </div>

        <div>
          <Separator className="bg-main-light" />
          <div className="flex justify-between items-center px-2 py-2">
            <div className=" text-main-light">&#169; portback 2024</div>
            <p className="text-main-light">Help ?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
