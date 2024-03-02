import HomeHeader from "@/components/HomeHeader";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "portback user profile",
  description: "user profile for portback user",
};

export default function UserProfileLayout({
  children,

}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return (
    <div className=" flex flex-col  px-3 py-2  h-full gap-6">
      <HomeHeader />
      {children}
    </div>
  );
}
