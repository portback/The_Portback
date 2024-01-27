import DarkProvider from "@/common/DarkProvider";
import { sidebarlist } from "@/constant/sidebar-links";
import Link from "next/link";
import React from "react";
import { FaUsers } from "react-icons/fa";

const Sidebar = () => {
  return (
    <DarkProvider color="bg-blue-300">
      <div
        className={`bottom-0 fixed h-[93%] z-10 w-[15vw] shadow-lg  py-[1rem] px-2  md:flex flex-col justify-between hidden `}
      >
        <div className="flex flex-col gap-[1.2rem] mt-[1rem] ">
          {sidebarlist.map((item, i) => (
            <Link href={item.href} className="flex   gap-2 items-center mt-[1">
              <item.Icon color="#27B9C2" fontSize={24} />
              <p className="self-end ">{item.title}</p>
            </Link>
          ))}
        </div>
        <div className="flex   gap-2 items-center mt-[1">
          <FaUsers color="#27B9C2" fontSize={24} />
          <p className="self-end ">{"Help and Support"}</p>
        </div>
      </div>
    </DarkProvider>
  );
};

export default Sidebar;
