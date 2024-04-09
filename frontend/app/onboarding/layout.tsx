import "../globals.css";

export const metadata = {
  title: "Portback Onboarding ",
  description:
    "Welcome onboard to portback a devs favorite , let connect and explore ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-main-bg w-screen overflow-x-hidden px-[1rem] py-[1rem]">
        <div>
          <h1 className="text-white font-bold text-3xl text-center">Welcome To Portback</h1>
        </div>
        <div className="w-full h-full">{children}</div>
      </body>
    </html>
  );
}
