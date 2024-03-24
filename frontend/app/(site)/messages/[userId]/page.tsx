"use client";
import MessageInput from "@/components/MessageInput";
import { ScrollArea } from "@/components/ui/scroll-area";
import { convo } from "@/constant/message";
import Link from "next/link";
import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { useParams } from "next/navigation";

const MessagePage = () => {
  const params = useParams();

  return (
    <div className="flex-1 border-l-[4px] border-main-bg relative ">
      <div className="px-3 py-2 w-full sticky top-0 border-b-[1px] border-main-bg bg-sidebar-bg flex items-center justify-between">
        <h3 className="text-white font-bold text-lg font-sans">Names</h3>
        <Link
          href={{
            pathname: `/messages/${params.userId}/settings`,
            query: {
              userId: params.userId,
            },
          }}
        >
          <FaInfoCircle className="text-main-light text-lg" />
        </Link>
      </div>
      {/* message would implement infinite scrolling for previous and current chat */}
      <ScrollArea className="h-[83%] px-2 ">
        <div className="messasges flex flex-col gap-4 mt-[1rem] px-2  h-[100%]">
          {convo.map((item, i) => (
            <div
              key={i}
              className={`${
                item.type == "sender"
                  ? "self-start rounded-bl-none bg-main-message"
                  : "self-end rounded-br-none bg-main-blue "
              } text-white max-w-[60%] text-wrap rounded-2xl px-5  py-2`}
            >
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* input tag */}
      <div className="px-2 ">
        <MessageInput />
      </div>
    </div>
  );
};

export default MessagePage;
