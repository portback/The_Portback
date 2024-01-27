import Image from "next/image";
import React from "react";
import DarkModeToggle from "./darkModeToggle";
import Link from "next/link";

const user = null;

const Topbar = () => {
  return (
    <div
      className={`shadow-lg px-[1rem] py-1 flex items-center justify-between fixed w-full z-20`}
    >
      <div className="flex gap-2 items-center">
        <div className="w-[40px] h-[40px] relative">
          <Image src={"/logo.png"} alt="logo" fill />
        </div>
        <p>PortBack</p>
      </div>

      <div className="flex gap-4 items-center">
        {!user && (
          <Link
            href="/register"
            className="bg-[#27B9C2] px-3 py-1 rounded-lg text-white font-medium font-sans"
          >
            Register
          </Link>
        )}
        {!user && (
          <Link href="/login" className="text-[#27B9C2] ">
            Sign-in
          </Link>
        )}
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Topbar;
