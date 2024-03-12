"use client";
import React, { useEffect, useState } from "react";

const MessageBar = () => {
  return (
    <div className="">
      <div className="bg-main-accent_blue w-full h-[100px] relative">
        <div className='w-[70px] h-[70px] bg-white rounded-full absolute top-1/2'>

        </div>
      </div>

      <div className="mt-[3rem] px-2 ">
        <div className="w-full bg-main-bg flex flex-col py-2 px-2 rounded-md min-h-[250px] gap-4">
          <div className="text-base text-main-light">
            <p className="text-lg font-bold text-white">Name</p>
            <p>__user_name__</p>
          </div>

          <div className="text-base text-main-light">
            <p className=" font-bold ">About</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem,
              magnam.
            </p>
          </div>

          <div className="text-base text-main-light">
            <p className="font-bold text-main-light">Portback user since </p>
            <p>12th , Feburary , 2024</p>
          </div>
        </div>
      </div>
      <div className="px-2 mt-[1rem] ">
        <div className="flex flex-col gap-2">
          <div className="bg-main-bg w-full px-2 py-2 text-white">
            4 mutual Skills
          </div>
          <div className="bg-main-bg w-full px-2 py-2 text-white">
            4 mutual friends
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBar;
