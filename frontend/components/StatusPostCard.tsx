"use client";
import authStore from "@/stores/authStore";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";

interface StatusPostCardI {
  author: any;
  content: string;
  comments?: number;
  likes?: number;
}

const StatusPostCard: React.FC<StatusPostCardI> = ({
  author,
  content,
  comments,
  likes,
}) => {
  const user = authStore((state) => state.user);

  return (
    <div className="rounded-md bg-sidebar-bg w-full min-h-[120px] px-3 py-3 flex flex-col gap-1">
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
      <div className="content text-white text-wrap">{content}</div>
      {/* <div className="flex items-center gap-3">
        <div>
          <FaHeart />
          {likes && likes}
        </div>
      </div> */}
    </div>
  );
};

export default StatusPostCard;
