"use client";
import { sidebarlist } from "@/constant/sidebar-links";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";
import authStore from "@/stores/authStore";

const Sidebar = ({ params }: any) => {
  const pathname = usePathname();
  const isLogged = authStore((state) => state.isLoggedin);
  const user = authStore((state ) => state.user)

  return (
    <div
      className={` custom-scroll overflow-auto sticky w-[17vw] top-0 left-0 h-screen  bg-[#343A40] z-10  shadow-lg  py-[1rem]  md:flex flex-col  hidden `}
    >
      <div className="flex items-center gap-3 px-3">
        <div className="relative w-[40px] h-[40px]">
          <Image src="/Logo.png" alt="logo" fill />
        </div>
        <p className="font-bold text-lg text-white">PortBack</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-[.8rem] mt-[2rem] ">
          {sidebarlist.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={`${
                pathname === item.href ? "bg-[#6FFFE9]" : ""
              } flex gap-2 items-center px-3 py-2`}
            >
              <item.Icon
                color={pathname === item.href ? "#1C2541" : "#fff"}
                fontSize={24}
              />
              <p
                className={` self-end  ${
                  pathname === item.href ? "text-[#1c2541]" : "text-white"
                }`}
              >
                {item.title}
              </p>
            </Link>
          ))}
        </div>
        <div className="px-3 mt-[2rem]">
          <div className="relative w-full h-[80px] px-3">
            <Image className="object-fit" src={"/sidebar.png"} alt="" fill />
          </div>
        </div>

        <div className="mt-[1rem]">
          <Separator className="bg-muted-foreground" />
        </div>

        <div>
          {isLogged ? (
            <div className="px-3 py-2">
              <div className="w-full flex items-center gap-3 ">
                <div className="relative w-[50px] h-[50px]">
                  <Image className="object-fit cover" src={'/avatar.png'} alt="" fill />
                </div>
                <div>
                  <h1 className="text-white font-bold">{user.name} </h1>
                  <p className="text-white">{user.email}</p>

                </div>
              </div>
            </div>
          ) : (
            <div className="px-3 flex flex-col gap-4 ">
              <Link
                href={"/login"}
                className=" text-center w-full bg-[#5BC0BE] border-[1px] border-[#1C2541]   text-[#fff] font-bold py-2 px-3 rounded-md "
              >
                Login{" "}
              </Link>
              <Link
                href={"/register"}
                className="w-full text-center bg-[#5BC0BE] border-[1px] border-[#1C2541]   text-[#fff] font-bold py-2 px-3 rounded-md "
              >
                Create Account{" "}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
