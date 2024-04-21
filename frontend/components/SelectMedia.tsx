import React from "react";
import { Separator } from "./ui/separator";
import { IoMdImages } from "react-icons/io";
import { Button } from "./ui/button";
import { MotionDiv } from "@/common/MotionDiv";

const SelectMedia = ({ type }: { type: "Image" | "Video" }) => {
  return (
    <MotionDiv.div
      whileInView={{
        y: [100, 0],
      }}
      transition={{
        type: "spring",
        damping: 4,
      }}
      className="flex flex-col px-[1rem] py-[1rem] w-[35%] rounded-lg h-[70%] bg-sidebar-bg relative backdrop-blur-2xl opacity-[100]"
    >
      <div>
        <h3 className="font-bold text-white text-xl">Upload Media</h3>
        <Separator className="bg-main-light mt-3" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center ">
        <label className="flex flex-col gap-3 items-center" htmlFor="file">
          <IoMdImages fontSize={45} className="text-main-light text-[4rem]" />
          <p className="text-main-light">Upload from your computer</p>
          <input
            id="file"
            accept={type === "Image" ? "image/*" : "video/*"}
            type="file"
            className="w-0 h-0"
          />
        </label>
      </div>
    </MotionDiv.div>
  );
};

export default SelectMedia;
