import React from "react";
import { Input } from "./ui/input";
import { CiSettings } from "react-icons/ci";
import Link from "next/link";
import { contacts } from "@/constant/contacts";
import MessageContact from "./MessageContact";
import { ScrollArea } from "./ui/scroll-area";

const MessageContactList = () => {
  return (
    <ScrollArea className="basis-1/3 flex flex-col px-3 py-3 text-white gap-2 ">
      <div className="flex items-center justify-between">
        <h3 className="text-white font-bold text-xl capitalize font-sans">
          Messages
        </h3>
        <Link href={"/messages/settings"} className="text-main-light">
          <CiSettings fontSize={23} className="cursor-pointer" />
        </Link>
      </div>
      <Input
        placeholder="🔍 Search Messages "
        className="w-full rounded-2xl border-main-light border-[1px] mt-[1rem] outline-none py-2"
      />
      <div className="flex flex-col  mt-3">
        <h1 className="text-xl font-bold ">Pinned Conversations</h1>
        <div className="flex flex-col gap-2">
          {contacts.map((contact, key) => (
            <div key={key}>
              {contact.pinned && <MessageContact  contact={contact} />}
            </div>
          ))}
        </div>
      </div>
      <div className="-mt-2">
        <h1 className="text-xl font-bold ">All Converstations</h1>
        <div className="flex flex-col gap-2">
          {contacts.map((contact, key) => (
            <MessageContact key={key} contact={contact} />
          ))}
        </div>
      </div>
    </ScrollArea>
  );
};

export default MessageContactList;
