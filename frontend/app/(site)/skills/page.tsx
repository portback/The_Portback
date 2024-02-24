import CldUpload from "@/common/CldUpload";
import PageHead from "@/components/PageHead";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SkillsPage = () => {
  return (
    <div className="w-full flex flex-col items-center mt-[4rem]">
      <div className="flex w-[70%] px-4 items-center justify-between ">
        <div>add skills</div>
NPM         <div className="px-3 py-2 rounded-md bg-[#6FFFE9] min-w-[300px]">
          {" "}
          forgot something{" "}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
