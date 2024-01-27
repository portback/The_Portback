import Image from "next/image";
import React from "react";

const Documentation = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex">
        <div className="relative w-[150px] h-[150px]">
          <Image src={"/xlogo.png"} alt="logo" fill />
        </div>
        <p className="text-xl self-end">Documentation</p>
      </div>

      <div>
        <h3 className="text-2xl tracking-wider">Overview</h3>
        <p>
          PortBack is an innovative application designed to empower developers
          in effortlessly constructing and maintaining their portfolios without
          the burden of managing the backend. It seamlessly handles all backend
          requirements and is entirely language-agnostic, allowing you to
          continuously enhance your portfolio details without the need to
          manipulate your initial codebase. With PortBack, updating your
          portfolio is as simple as visiting the application and making the
          desired changes with just a click of a button.
        </p>
      </div>

      <div>
        <h3 className="text-2xl">Installation</h3>

      </div>
    </div>
  );
};

export default Documentation;
