"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { FaHashtag, FaImage, FaUser, FaVideo } from "react-icons/fa";

type postType = "Status" | "Photos" | "Videos";

const CreatePost = () => {
  const [postType, setPostType] = useState<postType>("Status");
  const postT: postType[] = ["Status", "Photos", "Videos"];

  return (
    <div className="bg-sidebar-bg py-3 px-[24px] text-main-light flex  gap-4 rounded-md flex-col">
      <div className="flex gap-3 items-center">
        {postT.map((item, i) => (
          <div
            key={i}
            className={`${
              postType === item ? "bg-[#5F617577]" : "bg-transparent"
            } px-4 py-1 rounded-full cursor-pointer text-white capitalize font-medium`}
            onClick={() => setPostType(item)}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="flex">
        <div className="w-[30px] h-[30px] relative">
          <Image src={"/default_img.png"} alt="avatar" fill />
        </div>
        <Input
          className="border-none bg-transparent outline-none"
          placeholder={
            postType != "Status"
              ? "Add Caption To Post"
              : "Write something for the community"
          }
        />
      </div>
      <div className="py-2 flex flex-col">
        <Separator className="bg-main-light my-1" />
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <div className="flex items-center gap-2 text-white capitalize">
              <FaUser /> people
            </div>{" "}
            <div className="flex items-center gap-2 text-white capitalize">
              <FaHashtag /> tags
            </div>
            {postType === "Photos" && (
              <div className="flex items-center gap-2 text-white capitalize">
                <FaImage /> photo
              </div>
            )}
            {postType === "Videos" && (
              <div className="flex items-center gap-2 text-white capitalize">
                <FaVideo /> video
              </div>
            )}
          </div>
          <div>
            <Button className="bg-main-blue">Share</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
