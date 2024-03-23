"use client";
import MessageContactList from "@/components/MessageContactList";
import MessageInput from "@/components/MessageInput";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { convo } from "@/constant/message";
import Image from "next/image";
import React from "react";

const MessagePage = () => {
  return (
    <div className="flex-1 border-l-[4px] border-main-bg relative flex items-center justify-center">
      <div className="flex flex-col items-center">
     
        <h3 className="text-white text-xl font-bold text-center">
          Select a Message{" "}
        </h3>
        <p className="text-main-light w-3/4 text-left">
          Choose from your existing conversations and start chatting with your
          friends
        </p>
      </div>
    </div>
  );
};

export default MessagePage;
