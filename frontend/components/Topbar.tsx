import React from "react";
import TopbarSearch from "./TopbarSearch";
import Link from "next/link";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiBell } from "react-icons/fi";
import UserProfileDropdown from "./UserProfileDropdown";

const Topbar = () => {
  return (
    <div className="z-10 flex items-center justify-between w-full sticky top-0 px-3 py-3 bg-sidebar-bg  border-b-[1px] border-sidebar-border h-[7.27vh]">
      <TopbarSearch />
      <div className="flex items-center gap-6">
        {/* icon */}
        <Link href={'/messages'}>
        <MdOutlineMailOutline fontSize={23}  className='text-main-light' />
        </Link>
        {/* icon */}
        <Link href={'/notifications'}>
        <FiBell fontSize={23}  className='text-main-light' />
        </Link>
        {/* user profile */}
        <UserProfileDropdown />
      </div>
    </div>
  );
};

export default Topbar;
