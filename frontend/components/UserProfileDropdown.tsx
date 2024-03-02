"use client";
import authStore from "@/stores/authStore";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const UserProfileDropdown = () => {
  const userdetails = authStore((state) => state.user);
  return (
    <div className="flex-1 ml-4">
      <Link
        href={`/userprofile/${userdetails?._id}`}
        className="flex items-center gap-4"
      >
        <p className="text-main-light capitalize ">{userdetails?.name}</p>
        <div className="w-[30px] h-[30px] relative">
          <Image
            className="object-cover"
            src={"/avatar.png"}
            fill
            alt="avatar"
          />
        </div>
        <div>
          <IoMdArrowDropdown
            className="text-main-light  cursor-pointer"
            fontSize={23}
          />
        </div>
      </Link>
    </div>
  );
};

export default UserProfileDropdown;
