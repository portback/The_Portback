import type { Metadata } from "next";
import { Irish_Grover } from "next/font/google";
import "../globals.css";
import Topbar from "@/components/Topbar";
import Sidebar from "@/components/Sidebar";
import themeStore from "@/stores/themeStore";
import DarkProvider from "@/common/DarkProvider";

const irish = Irish_Grover({
  weight: "400",
  subsets: ["latin"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "PORTBACK",
  description: "A portfolio backend as a service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={`relative ${irish.className}}`}>
        {" "}
        <Topbar />
        <Sidebar />
        <DarkProvider color="bg-[#232323]">
          <div className="relative min-h-[60vh] w-full md:w-[80vw] left-[0px] md:left-[17vw] top-[10vh]">
            {children}
          </div>
        </DarkProvider>
      </body>
    </html>
  );
}
