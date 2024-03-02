"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import CreatePost from "@/components/CreatePost";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="px-3 py-3 flex flex-col gap-4">
      <div className="flex items-center rounded-md justify-between gap-2 py-1 bg-sidebar-bg  px-1 min-w-[190px] max-w-[200px] ">
        <Link
          href={"/"}
          className={`text-center px-2 py-2 rounded-md ${
            pathname == "/" ? "bg-[#1E2231] text-white" : "text-main-light"
          }`}
        >
          For You
        </Link>
        <Link
          href={"/following"}
          className={`text-center px-2  flex-1 py-2 rounded-md  ${
            pathname == "/following"
              ? "bg-[#1E2231] text-white"
              : "text-main-light"
          }`}
        >
          Following
        </Link>
      </div>
      <CreatePost />
      {children}
    </div>
  );
}
