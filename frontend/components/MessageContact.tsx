import Link from "next/link";
import React from "react";

const MessageContact = ({ contact }: any) => {
  return (
    <Link href={`/messages/${contact.name}`} className="flex items-center gap-2">
      <div className="w-[40px] h-[40px] rounded-full bg-white"></div>
      <div className="flex flex-col ">
        <p>{contact.name}</p>
        <p className="text-main-light font-medium text-base">
          Last Message Sent
        </p>
      </div>
    </Link>
  );
};

export default MessageContact;
