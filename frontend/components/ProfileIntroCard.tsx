import React from "react";
import { FaBriefcase, FaBasketballBall } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { LiaPrayingHandsSolid } from "react-icons/lia";

const ProfileIntroCard = () => {
  return (
    <div className="min-h-[200px] w-full rounded-md bg-sidebar-bg text-main-light px-2 py-2 flex flex-col gap-4">
      <p className="text-lg tracking-widest capitalize font-serif font-bold ">
        Introduction
      </p>
      <div className="flex flex-col gap-3 ">
        <div className="text-white flex items-center gap-3">
          <FaBriefcase fill="white" />
          <p>Product Designer at </p>
          <span className="text-[#1AA0FF]">Apple</span>
        </div>
        <div className="text-white flex items-center gap-3">
          <MdHome /> Live in <span className="text-[#1AA0FF]">Tokyo</span>
        </div>{" "}
        <div className="text-white flex items-center gap-3">
          <FaBasketballBall /> Player name{" "}
          <span className="text-[#1AA0FF]">Apple</span>
        </div>{" "}
        <div className="text-white flex items-center gap-3">
          <LiaPrayingHandsSolid />{" "}
          <span className="text-main-green">Availiable</span> <p>For work</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileIntroCard;
