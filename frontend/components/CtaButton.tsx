"use client";
import React, { FC } from "react";

interface CTAI {
  name: String;
  action: () => void;
}

const CtaButton: FC<CTAI> = ({ name, action }) => {
  return (
    <button
      onClick={action}
      className="w-full bg-[#539D9C] text-white py-2 px-3 rounded-lg mt-3 font-bold "
    >
      {name}
    </button>
  );
};

export default CtaButton;
