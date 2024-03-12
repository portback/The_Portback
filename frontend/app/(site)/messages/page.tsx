import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { convo } from "@/constant/message";
import React from "react";

const MessagePage = () => {
  return (
    <div className=" w-full  px-3 py-3 flex flex-co gap=3 h-screen">
      <div className="bg-sidebar-bg w-full h-full  flex ">
        <div className="basis-1/3 flex flex-col px-3 py-3 text-white">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-bold text-xl capitalize font-sans">
              Messages
            </h3>
            <p className="text-main-light">@</p>
          </div>
          <Input
            placeholder="🔍 Search Messages "
            className="w-full rounded-2xl border-main-light border-[1px] mt-[1rem] outline-none"
          />
        </div>
        <div className="flex-1 border-l-[4px] border-main-bg relative overflow-auto message-scroll">
          <div className="px-3 py-2 w-full sticky top-0 border-b-[1px] border-main-bg bg-sidebar-bg">
            <h3 className="text-white font-bold text-lg font-sans">Names</h3>
          </div>

          <div className="messasges flex flex-col gap-4 mt-[1rem] px-2">
            {convo.map((item, i) => (
              <div
                key={i}
                className={`${
                  item.type == "sender"
                    ? "self-start rounded-bl-none bg-main-message"
                    : "self-end rounded-br-none bg-main-blue "
                } text-white max-w-[60%] text-wrap rounded-2xl px-5 py-2`}
              >
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
