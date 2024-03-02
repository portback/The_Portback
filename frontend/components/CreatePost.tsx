"use client ";
import React from "react";
import { Input } from "./ui/input";
import Image from "next/image";

const CreatePost = () => {
  return (
    <div className="bg-sidebar-bg py-3 px-[24px] text-main-light flex items-center  gap-3 rounded-md">
      <div className="w-[30px] h-[30px] relative">
        <Image src={"/default_img.png"} alt="avatar" fill />
      </div>

      <Input
        className="border-none bg-transparent outline-none"
        placeholder="Write something for the community"
      />
    </div>
  );
};

export default CreatePost;
