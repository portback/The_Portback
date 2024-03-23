import React from "react";
import type { Metadata } from "next";
import MessageContactList from "@/components/MessageContactList";

export const metadata: Metadata = {
  title: "Portback Message Service",
  description: "connect with fellow devs , techies and potential employers",
};

export default function MessageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-3 py-3">
         <div className="bg-sidebar-bg w-full h-screen  flex ">
      <MessageContactList />
      {children}
    </div>
    </div>
 
  );
}
