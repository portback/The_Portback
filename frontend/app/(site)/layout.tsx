import type { Metadata } from "next";
import { Irish_Grover } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/Sidebar";


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
        <main className="flex  w-full ">
          <Sidebar />
          <div className="bg-rded-400 flex-1">
            {children}   
          </div>
        </main>
      </body>
    </html>
  );
}
