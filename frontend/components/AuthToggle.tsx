"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { CiLogin } from "react-icons/ci";
import { FiUser } from "react-icons/fi";

const AuthToggle = () => {
  const pahtname = usePathname();

  return (
    <div className="flex items-center w-[90%] gap-4">
      <Link
        className={`${
          pahtname === "/login"
            ? "bg-[#212529] shadow-md shadow-[#9feeed40]"
            : "bg-[#343A40]"
        } min-w-[140px] py-2 px-2 flex items-center gap-2 text-[#ADB5BD] justify-center`}
        href={"/login"}
      >
        <p>Login</p>
        <CiLogin />
      </Link>
      <Link
        className={`${
            pahtname === "/register"
              ? "bg-[#212529] shadow-md shadow-[#9feeed40]"
              : "bg-[#343A40]"
          } min-w-[140px] py-2 px-2 flex items-center gap-2 text-[#ADB5BD] justify-center`}
        href={"/register"}
      >
        <p>Create Acoount</p>
        <FiUser />
      </Link>
    </div>
  );
};

export default AuthToggle;
