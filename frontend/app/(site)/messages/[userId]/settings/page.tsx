"use client";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const MessageSetting = () => {
  const router = useRouter();

  return (
    <div className="flex-1 border-l-[4px] border-main-bg relative flex flex-col px-3 py-3">
      <div className="flex flex-col gap-5 ">
        <div className="flex items-center justify-between ">
          <h1 className="text-white font-medium text-2xl">Notifications</h1>
          <FaArrowLeft
            onClick={() => router.back()}
            className="text-white cursor-pointer"
          />
        </div>

        {/* mute notification settings */}

        <div className="flex items-center justify-between">
          <div className="text-white font-medium capitalize italic tracking-wider font-serif ">
            Mute Notification from <span className="text-main-blue">Name</span>
          </div>
          <Switch className="bg-main-blue" />
        </div>

        {/* Pin conversation settings */}
        <div className="flex items-center justify-between">
          <div className="text-white font-medium capitalize italic tracking-wider font-serif ">
            Pin Conversation with <span className="text-main-blue">Name</span>
          </div>
          <Switch className="bg-main-blue" />
        </div>
        <Separator className="text-main-light" />
      </div>

      <div className="flex flex-col gap-3 items-center mt-3">
        <div className="text-white tracking-wider">
          Block <span className="text-red-500">Name</span>
        </div>
        <div className="text-white tracking-wider">
          Report <span className="text-red-500">Name</span>
        </div>
      </div>
    </div>
  );
};

export default MessageSetting;
