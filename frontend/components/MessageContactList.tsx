import React from "react";
import { Input } from "./ui/input";
import { CiSettings } from "react-icons/ci";
import Link from "next/link";
import { contacts } from "@/constant/contacts";
import MessageContact from "./MessageContact";

const MessageContactList = () => {
  return (
    <div className="basis-1/3 flex flex-col px-3 py-3 text-white gap-3 overflow-auto custom-scroll">
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
        className="w-full rounded-2xl border-main-light border-[1px] mt-[1rem] outline-none"
      />
      <div className="flex flex-col  mt-3">
        <h1 className="text-xl font-bold ">Pinned Message</h1>
        {contacts.map((contact, key) => (
          <div>
            {contact.pinned && <MessageContact key={key} contact={contact} />}
          </div>
        ))}
      </div>
      <div>
        <h1>Messages</h1>
        {contacts.map((contact, key) => (
          <MessageContact key={key} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default MessageContactList;
