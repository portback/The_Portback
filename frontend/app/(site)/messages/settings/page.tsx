"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const MessageSetting = () => {
  return (
    <div className="flex-1 border-l-[4px] border-main-bg relative flex flex-col px-3 py-3">
      <div className="flex flex-col gap-5 ">
        <div className="flex items-center justify-between ">
          <h1 className="text-white font-medium text-2xl">Direct Messages</h1>
          <Link className="cursor-pointer" href={"/messages"}>
            <FaArrowLeft className="text-white cursor-pointer" />
          </Link>
        </div>

        <div className="flex flex-col ">
          <div className="text-white font-medium capitalize italic tracking-wider font-serif ">
            Allow messages from
            <p className="text-main-light">
              People you follow will always be able to message you.{" "}
            </p>
          </div>

          <div className="mt-5">
            <RadioGroup
              className="flex flex-col gap-5"
              defaultValue="none"
            >
              <div className="flex items-center justify-between text-white font-medium capitalize">
                <Label htmlFor="r1">No one</Label>
                <RadioGroupItem value="none" id="r1" />
              </div>
              <div className="flex items-center justify-between text-white font-medium capitalize">
                <Label htmlFor="r2">Following</Label>
                <RadioGroupItem value="following" id="r2" />
              </div>
              <div className="flex items-center justify-between text-white font-medium capitalize">
                <Label htmlFor="r3">Everyone</Label>
                <RadioGroupItem value="everyone" id="r3" />
              </div>
            </RadioGroup>
          </div>

          <Separator className="bg-main-light mt-3" />
        </div>
      </div>
    </div>
  );
};

export default MessageSetting;
