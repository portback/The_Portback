import React from "react";
import type { Metadata } from "next";
import "../globals.css";
import { Irish_Grover } from "next/font/google";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

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
          <div className="bg-[#141922] min-h-screen w-screen px-5 py-3">
            {" "}
            <div className="relative w-[251px] h-[100px] ">
              <Image
                className="object-cover"
                fill
                src={"/authlogo.png"}
                alt="logo"
              />
            </div>
            <div> {children}</div>
            <ToastContainer />
          </div>
        </main>
      </body>
    </html>
  );
}
