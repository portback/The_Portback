import { about } from "@/constant/about";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center md:px-[1.2rem] px-0 gap-6">
      <div className="flex flex-col items-center gap-3">
        <div className="relative w-[235px] h-[207px]">
          <Image src={"/xlogo.png"} alt="logo" fill />
        </div>
        <p className="text-[1.4rem] text-center flex items-center flex-col">
          portback creating a portfolio backend has never <br />
          been this easy
        </p>
        <button className="bg-[#27B9C2] px-5 py-2 rounded-lg text-white min-w-[200px]">
          Get Started
        </button>
      </div>
      <div className="self-start px-[1rem] ">
        <p className="text-xl font-sans font-bold  mb-[1rem]">About PortBack</p>

        <div className="flex flex-wrap gap-[1.5rem] py-3 justify-around">
          {about.map((item, i) => (
            <div className="min-w-[250px] max-w-[286px] rounded-lg shadow-lg bg-white px-4 py-2 flex items-center flex-col  gap-3">
              <item.Icon color='#27B9C2' fontSize={24} />
              <p className="text-[#27B9C2] font-sans font-bold text-lg">{item.title}</p>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
