"use client";
import CreatePost from "@/components/CreatePost";
import ProfileIntroCard from "@/components/ProfileIntroCard";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { getUser } from "@/lib/actions/authRequest";
import { getDate } from "@/lib/utils";
import authStore from "@/stores/authStore";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const UserProfilePage = ({ params }: { params: { id: string } }) => {
  const [userData, setUserData] = useState<any>();
  const user = authStore((state) => state.user);
  const { toast } = useToast();

  useEffect(() => {
    const getData = async () => {
      try {
        const user = authStore.getState().user;
        const response = await getUser(params.id, user?.token);

        if (response) {
          setUserData(response?.data);
          console.log(response);
        }
      } catch (error) {
        console.log(error);
        toast({
          variant: "default",
          title: "Uh oh something went wrong",
          description: "Error fetching user data",
          action: (
            <ToastAction
              onClick={async () => await getData()}
              altText="try again"
            >
              Try Again
            </ToastAction>
          ),
        });
      }
    };
    getData();
  }, []);

  return (
    <div className="flex w-full mt-[1rem] min-h-screen  gap-4">
      <div className="flex flex-col basis-1/3 px-3 py-3 gap-8">
        {/* sidebar */}
        <ProfileIntroCard userdata={userData} />
        <div className="min-h-[210px] w-full rounded-md bg-sidebar-bg text-main-light ">
          <div className="relative w-full h-[70%]">
            <Image
              className="object-cover rounded-t-md object-center"
              src={"/stars.jpeg"}
              alt="stars"
              fill
            />
          </div>
          <div className="px-2 py-2 flex flex-col ">
            <p className="text-white capitalize font-bold text-base">
              Portback User
            </p>
            <p className="font-medium capitalize">
              since{" "}
              <span className="text-main-blue">
                {getDate(userData?.createdAt)}
              </span>
            </p>
          </div>
        </div>
        <div className="min-h-[200px] w-full rounded-md bg-sidebar-bg text-main-light px-2 py-2">
          <p className="text-lg">Work Experience</p>
        </div>
      </div>

      <div className="flex-1 py-3 text-white">
        {/* main */}
        {params.id === user?._id && <CreatePost />}
      <div className="text-white font-bold">No Activity</div>
      </div>

    </div>
  );
};

export default UserProfilePage;
