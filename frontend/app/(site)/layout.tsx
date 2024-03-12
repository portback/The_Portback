import type { Metadata } from "next";
import { Irish_Grover } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/Sidebar";
import Initializer from "@/components/Initializer";
import Topbar from "@/components/Topbar";
import LeftSidebar from "@/components/LeftSidebar";

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
      <body className={` ${irish.className}}`}>
        {" "}
        <Initializer />
        <main className="flex  w-full bg-main-bg ">
          <div>
            <Sidebar />
          </div>
          <div className="flex flex-col flex-1 ">
            <Topbar />
            <div className="flex h-full ">
              <div className="flex-1 min-h-[150vh]">{children}</div>
              <LeftSidebar />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
