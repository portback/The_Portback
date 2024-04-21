import React from "react";
import SelectMedia from "./SelectMedia";
import { FaX } from "react-icons/fa6";
import { MotionDiv } from "@/common/MotionDiv";

const Popover = ({
  visible,
  type,
  toggle,
}: {
  visible: boolean;
  type: "Image" | "Video";
  toggle: () => void;
}) => {
  return (
    <MotionDiv.div
      whileInView={{
        opacity: [0, 1],
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
      className={`fixed ${
        visible ? "flex" : "hidden"
      } top-0 bottom-0 left-0 right-0 bg-[#000000cc] flex-col items-center justify-center w-screen z-50 cursor-pointer h-screen`}
    >
      <div className="fixed top-0 my-auto text-main-light align-start bg-main-bg  w-[40px] h-[40px] rounded-full   flex items-center justify-center mt-3">
        <FaX
          onClick={() => {
            toggle();
          }}
          className="text-main-light text-center"
        />
      </div>

      <SelectMedia type={type} />
    </MotionDiv.div>
  );
};

export default Popover;
