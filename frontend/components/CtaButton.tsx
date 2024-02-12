"use client";
import React, { FC, HTMLAttributes } from "react";

interface CTAI {
  name: String;
  action?: () => void;
}

const CtaButton: FC<CTAI > = ({ name, action , ...props }) => {
  return (
    <button
      onClick={action}
      className="w-full bg-[#5BC0BE] border-[1px] border-[#1C2541] font-light  text-[#1C2541] py-2 px-3 rounded-md "
    >
      {name}
    </button>
  );
};

export default CtaButton;
