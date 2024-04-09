"use client";
import { MotionDiv } from "@/common/MotionDiv";
import AuthFields from "@/components/authFields";
import Image from "next/image";
import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";

const Onboard = () => {
  return (
    <div className="w-full h-full flex flex-col items-center mt-[2rem] ">
      <MotionDiv.div
        whileInView={{
          x: [100, 0],
          opacity: [0, 1],
        }}
        transition={{
          ease: "easeIn",
          type: "spring",
        }}
        className="w-[70%] h-[80%] drop-shadow-sm shadow-white shadow-sm rounded-lg mt-5 relative px-[1rem] py-[1rem]"
      >
        <Image
          src={"/onboard.png"}
          alt="onboarding"
          width={100}
          height={100}
          className="absolute -top-10 right-0"
        />

        <div className="flex flex-col gap-8 ">
          <div className="flex items-center gap-3">
            <div className="rounded-full w-[100px] h-[100px] bg-main-light text-black flex items-center justify-center ">
              <FaCamera fontSize={27} />
            </div>
            <p className="text-main-light">Update Avatar</p>
          </div>

          <div className="grid grid-cols-2">
            <div className="mx-4 my-2">
              <p className="text-white ">Role</p>
              <AuthFields
                onChange={() => console.log("hello")}
                value=""
                errors=""
                name="Location"
                placeholder=""
              />
              <p className="text-sm text-main-light mt-1">
                tell us what you do in tech e.g Devleoper 😄 or QA 😠
              </p>
            </div>{" "}
            <div className="mx-4 my-2">
              <p className="text-white ">Player name</p>
              <AuthFields
                onChange={() => console.log("hello")}
                value=""
                errors=""
                name="PlayerName"
                placeholder=""
              />
              <p className="text-sm text-main-light mt-1">
                Every developer games to reduce stress 😄. whats your gaming
                name 😄
              </p>
            </div>{" "}
            <div className="mx-4">
              <p className="text-white ">Location</p>
              <AuthFields
                onChange={() => console.log("hello")}
                value=""
                errors=""
                name="Location"
                placeholder=""
              />
              <p className="text-sm text-main-light mt-1">
                where do you stay 🏠
              </p>
            </div>
            <div className="mx-4">
              <p className="text-white ">Location</p>
              <AuthFields
                onChange={() => console.log("hello")}
                value=""
                errors=""
                name="Location"
                placeholder=""
              />
              <p className="text-sm text-main-light mt-1">
                where do you stay 🏠
              </p>
            </div>
          </div>
        </div>
      </MotionDiv.div>
    </div>
  );
};

export default Onboard;
