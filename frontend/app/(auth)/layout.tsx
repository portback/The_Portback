import React from "react";
import type { Metadata } from "next";
import "../globals.css";
import { Irish_Grover } from "next/font/google";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import AuthCarousel from "@/components/AuthCarousel";
import AuthToggle from "@/components/AuthToggle";

export const metadata: Metadata = {
  title: "login to portback",
  description: "",
};

const irish = Irish_Grover({
  weight: "400",
  subsets: ["latin"],
  style: ["normal"],
});

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${irish.className}`}>
        <main>
          <div className="bg-[#111] min-h-screen w-screen px-5 py-3 flex items-center justify-center">
            <div className="w-[70%] flex items-center bg-[#333333] min-h-[80vh]">
              <div
                className="flex-1 flex flex-col 
              px-[2rem] py-[.5rem]
              "
              >
                <div className="w-full my-[1rem] h-fit">
                  <Image
                    className="object-cover"
                    width={40}
                    height={40}
                    src={"/Logo.png"}
                    alt="logo"
                  />
                </div>
                <div className="w-full justify-center flex ">
                  <AuthToggle />
                </div>
                <div className="mt-[2rem] w-full flex justify-center ">
                  {children}
                </div>
              </div>
              <div className="w-[50%] min-h-[90vh] ">
                <AuthCarousel />
              </div>
            </div>
            <ToastContainer />
          </div>
        </main>
      </body>
    </html>
  );
}
