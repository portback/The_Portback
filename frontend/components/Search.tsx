import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="bg-sidebar-bg w-ful px-3 rounded-md py-3  text-main-light flex items-center gap-3">
      <FaSearch />
      <p>Search for something you ike </p>
    </div>
  );
};

export default Search;
