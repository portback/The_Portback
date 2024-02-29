import React from "react";
import { CiSearch } from "react-icons/ci";

const TopbarSearch = () => {
  return (
    <div className="flex items-center gap-2 w-[40%]">
      <CiSearch className="text-main-light " fontSize={22} />
      <input
        type="text"
        placeholder="Search"
        className="text-main-light bg-transparent outline-none border-none"
      />
    </div>
  );
};

export default TopbarSearch;
