"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Contacts from "./Contacts";
import MessageBar from "./MessageBar";

const LeftSidebar = () => {
  const patname = usePathname();
  const isMessageBar = patname.includes("messages");

  return (
    <div className="sticky top-[7.2vh] custom-scroll  left-0 bg-sidebar-bg w-[15vw] h-screen bottom-0 overflow-auto ">
      {!isMessageBar ? <Contacts /> : <MessageBar /> }
    </div>
  );
};

export default LeftSidebar;
