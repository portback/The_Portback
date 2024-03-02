import React from "react";

const UserProfilePage = () => {
  return (
    <div className="flex w-full mt-[1rem] min-h-screen  gap-4">
      <div className="flex flex-col basis-1/3 px-3 py-3 gap-8">
        {/* sidebar */}
        <div className="min-h-[200px] w-full rounded-md bg-sidebar-bg text-main-light px-2 py-2">
          <p className="text-lg tracking-widest capitalize font-sans">
            Introduction
          </p>
        </div>
        <div className="min-h-[200px] w-full rounded-md bg-sidebar-bg text-main-light px-2 py-2">
          <p className="text-lg"></p>
        </div>
        <div className="min-h-[200px] w-full rounded-md bg-sidebar-bg text-main-light px-2 py-2">
          <p className="text-lg"></p>
        </div>
      </div>

      <div className="flex-1 ">{/* main */}</div>
    </div>
  );
};

export default UserProfilePage;
