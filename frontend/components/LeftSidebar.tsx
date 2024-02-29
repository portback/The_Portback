"use client";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import React from "react";
import { rightSidebarcontacts } from "@/constant/sidebar-links";
import Image from "next/image";

const LeftSidebar = () => {
  return (
    <div className="sticky top-[7.2vh] custom-scroll  left-0 bg-sidebar-bg w-[15vw] h-screen bottom-0 overflow-auto px-3 py-2">
      <MdKeyboardDoubleArrowRight
        className="text-white cursor-pointer"
        fontSize={23}
      />
      <div className="flex flex-col gap-4">
        <p className="text-main-light">Contacts</p>
        <div className="flex flex-col gap-4">
          {rightSidebarcontacts.map((contact, key) => (
            <div className="flex items-center gap-3 justify-between">
              <div className="flex items-center gap-2">
                <div className="w-[30px] h-[30px] relative">
                  <Image src={contact.imgurl} alt="contact-img" fill />
                </div>
                <p className="text-main-light capitalize">{contact.name}</p>
              </div>

              <div
                className={`w-[8px] h-[8px] rounded-full ${
                  contact.active ? "bg-green-500" : "bg-sidebar-border"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
