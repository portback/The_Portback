"use client";
import { rightSidebarcontacts } from "@/constant/sidebar-links";
import Image from "next/image";
import React from "react";

const Contacts = () => {
  return (
    <div className="px-3 py-2">
      <div className="flex flex-col gap-4">
        <p className="text-main-light">Contacts</p>
        <div className="flex flex-col gap-4">
          {rightSidebarcontacts.map((contact, key) => (
            <div key={key} className="flex items-center gap-3 justify-between">
              <div className="flex items-center gap-2">
                <div className="w-[30px] h-[30px] relative">
                  <Image src={contact.imgurl} alt="contact-img" fill />
                </div>
                <p className="text-main-light capitalize">{contact.name}</p>
              </div>

              <div
                className={`w-[8px] h-[8px] rounded-full ${
                  contact.active ? "bg-green-500" : "bg-sidebar-border"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
