import Image from "next/image";
import Link from "next/link";
import React from "react";

const MessageContact = ({ contact }: any) => {
  return (
    <Link
      href={`/messages/${contact.name}`}
      className="flex items-center gap-2"
    >
      <div className="w-[40px] h-[40px] rounded-full bg-main-light relative">
        <Image src={"/default_img.png"} alt="avatar" fill className="rounded-full " />
      </div>
      <div className="flex flex-col ">
        <p className="text-light capitalize tracking-wide" >{contact.name}</p>
        <p className="text-main-light font-medium text-base">
          Last Message Sent
        </p>
      </div>
    </Link>
  );
};

export default MessageContact;
