"use client";
import themeStore from "@/stores/themeStore";
import React from "react";
import { FaCloudSun, FaCloudMoon } from "react-icons/fa6";

const DarkModeToggle = () => {
  const darkmode = themeStore((state) => state.darkMode);
  const setdark = themeStore((state) => state.setDarkMode);
  return (
    <>
      {darkmode ? (
        <FaCloudSun fontSize={26} onClick={() => setdark(false)} />
      ) : (
        <FaCloudMoon fontSize={26} onClick={() => setdark(true)} />
      )}
    </>
  );
};

export default DarkModeToggle;
