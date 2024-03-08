"use client";
import authStore from "@/stores/authStore";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";

interface StatusPostCardI {
  author: any;
  media: string;
  comments?: number;
  likes?: number;
  caption?: string;
}

const PhotoCard: React.FC<StatusPostCardI> = ({
  author,
  media,
  comments,
  likes,
  caption,
}) => {
  const user = authStore((state) => state.user);

  return (
    <div className="rounded-md bg-sidebar-bg w-full  px-3 py-3 flex flex-col gap-3">
      {/* user desc */}
      <Link
        href={`/userprofile/${author._id}`}
        className="flex gap-2 items-center"
      >
        <div className="w-[40px] h-[40px] rounded-full relative">
          <Image
            src={"/avatar.jpeg"}
            alt="user profile"
            className="rounded-full object-cover object-top"
            fill
          />
        </div>
        <div className="flex gap-1 items-center">
          <p className="text-white">
            {user?._id === author._id ? "You" : author?.name}
          </p>
          <span className="text-white">Created a new </span>
          <span className="text-main-blue">Post</span>
        </div>
      </Link>
      <div className="flex flex-col gap-3">
        <div className="media text-white text-wrap relative w-full h-[550px] ">
          <img
            src={media}
            alt={caption}
            className="w-full h-full  rounded-md"
          />
        </div>
        <p>{caption}</p>
      </div>

      {/* <div className="flex items-center gap-3">
        <div>
          <FaHeart />
          {likes && likes}
        </div>
      </div> */}
    </div>
  );
};

export default PhotoCard;
