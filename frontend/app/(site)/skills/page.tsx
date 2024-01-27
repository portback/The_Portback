import PageHead from "@/components/PageHead";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SkillsPage = () => {
  return (
    <div className="w-full flex flex-col ">
      <PageHead imgUrl="/you.png" title="Your Skills" />
      <div className="w-[80%] self-center">
        <p className="font-sans "> You Have No Skills</p>

        <Link
          href={"/skills/add_skills"}
          className=" w-fit flex items-center flex-col gap-3 cursor-pointer"
        >
          <div className="w-[100px]  h-[100px] rounded-full bg-white flex items-center justify-center text-5xl font-bold shadow-xl">
            +
          </div>
          <p>Add Skills</p>
        </Link>
      </div>
    </div>
  );
};

export default SkillsPage;
