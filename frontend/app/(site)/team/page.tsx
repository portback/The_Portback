import { TeamData } from "@/constant/Teams";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDribbble, FaGithub, FaInstagram } from "react-icons/fa";

const TeamCard = ({ name, github, dribble, instagram, role, image }: any) => {
  return (
    <div className="w-[270px] min-h-[280px] bg-main-light m-5 rounded-lg flex flex-col">
      <div className="flex-1 w-full h-[90%] relative ">
        <Image
          src={image}
          className="rounded-tr-lg rounded-tl-lg  object-cover"
          alt="team_memeber_avatar"
          fill
        />
      </div>

      <div className="bg-sidebar-bg w-full px-2 py-2 min-h-[10%] flex flex-col rounded-bl-lg rounded-br-lg">
        <h2 className="font-sans text-white font-bold leading-8 tracking-wide">
          {name}
        </h2>
        <p className="text-main-light ">{role}</p>

        <div className="flex items-center gap-3 mt-2 ">
          {github && (
            <Link
              className="w-[40px] h-[40px]  bg-main-bg text-white text-xl flex items-center justify-center rounded-full"
              href={github}
              target="_blank"
            >
              <FaGithub />
            </Link>
          )}
          {instagram && (
            <Link
              className="w-[40px] h-[40px]  bg-main-bg text-white text-xl flex items-center justify-center rounded-full"
              href={instagram}
              target="_blank"
            >
              <FaInstagram />
            </Link>
          )}
          {dribble && (
            <Link
              className="w-[40px] h-[40px]  bg-main-bg text-white text-xl flex items-center justify-center rounded-full"
              href={dribble}
              target="_blank"
            >
              <FaDribbble />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const TeamPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center w-[70%]">
        <div className="relative w-[120px] h-[60px]">
          <Image src={"/Logo.png"} fill alt="logo.png" />
        </div>
        <h1 className="text-white font-bolder text-[3rem] font-sans">
          Our Team{" "}
        </h1>{" "}
        <p className="text-main-light text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          architecto alias ut tempora dolores, delectus voluptatem ab
          exercitationem doloremque, blanditiis neque mollitia voluptatum et.
          Atque dolore saepe sunt distinctio eligendi nobis, culpa recusandae
          error illo.
        </p>
      </div>

      <div className="grid grid-cols-2  mt-4">
        {TeamData.map((item, i) => (
          <TeamCard {...item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
