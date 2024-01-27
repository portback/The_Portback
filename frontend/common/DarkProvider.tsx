"use client";
import themeStore from "@/stores/themeStore";
import React, { FC } from "react";

interface DarkProviderI {
  children: React.ReactNode;
  color?: string;
}

const DarkProvider: FC<DarkProviderI> = ({ children, color }) => {
  const dark = themeStore((state) => state.darkMode);

  return (
    <div
      className={`w-full h-full ${
        dark ? (color ? color : "bg-[#121212]") : "bg-white"
      }`}
    >
      {children}
    </div>
  );
};

export default DarkProvider;
