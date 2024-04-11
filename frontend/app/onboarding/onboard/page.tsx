"use client";
import { MotionDiv } from "@/common/MotionDiv";
import AuthFields from "@/components/authFields";
import { Button } from "@/components/ui/button";
import { onBoardUser } from "@/lib/actions/authRequest";
import authStore from "@/stores/authStore";
import { onboardSchema } from "@/validations/authValidations";
import { useFormik } from "formik";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";
import { toast } from "react-toastify";

const Onboard = () => {
  const [user, setuser] = useState<any>("");
  const router = useRouter();

  useEffect(() => {
    const exec = authStore.getState().initializeWindow;

    exec();
    const data = authStore.getState().user;

    if (data.onBoarded) {
      redirect("/");
    }
    setuser(data);
  }, []);

  const onSubmit = async (value: any) => {
    toast("Onboarding user please wait", { theme: "colored" });

    try {
      const onboard = await onBoardUser(value, user?.token);
      if (onboard) {
        console.log(onboard);
        localStorage.setItem(
          "portback_user",
          JSON.stringify({ ...user, onBoarded: true })
        );
        router.push("/");
        toast.success("onboarded user successfully", { theme: "dark" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      role: "",
      playerName: "",
      location: "",
      bio: "",
    },
    onSubmit,
    validationSchema: onboardSchema,
  });

  return (
    <div className="w-full h-full flex flex-col items-center mt-[2rem] ">
      <MotionDiv.div
        whileInView={{
          x: [100, 0],
          opacity: [0, 1],
        }}
        transition={{
          ease: "easeIn",
          type: "spring",
        }}
        className="w-[70%] h-[80%] drop-shadow-sm shadow-white shadow-sm rounded-lg mt-5 relative px-[1rem] py-[1rem]"
      >
        <Image
          src={"/onboard.png"}
          alt="onboarding"
          width={100}
          height={100}
          className="absolute -top-10 right-0"
        />

        <div className="flex flex-col gap-8 ">
          <div className="flex items-center gap-3">
            <div className="rounded-full w-[100px] h-[100px] bg-main-light text-black flex items-center justify-center ">
              <FaCamera fontSize={27} />
            </div>
            <p className="text-main-light">Update Avatar ( optional ) </p>
          </div>

          <div className="grid grid-cols-2">
            <div className="mx-4 my-2">
              <p className="text-white ">Role</p>
              <AuthFields
                onChange={handleChange}
                value={values.role}
                errors={errors.role}
                name="role"
                placeholder="eg. Software Engineer"
              />
              <p className="text-sm text-main-light mt-1">
                tell us what you do in tech e.g Devleoper 😄 or QA 😠
              </p>
            </div>{" "}
            <div className="mx-4 my-2">
              <p className="text-white ">Player name</p>
              <AuthFields
                onChange={handleChange}
                value={values.playerName}
                errors={errors.playerName}
                name="playerName"
                placeholder="abin18"
              />
              <p className="text-sm text-main-light mt-1">
                Every developer games to reduce stress 😄. whats your gaming
                name 😄
              </p>
            </div>{" "}
            <div className="mx-4">
              <p className="text-white ">Location</p>
              <AuthFields
                onChange={handleChange}
                value={values.location}
                errors={errors.location}
                name="location"
                placeholder="location"
              />
              <p className="text-sm text-main-light mt-1">
                where do you stay 🏠
              </p>
            </div>
            <div className="mx-4">
              <p className="text-white ">Bio</p>
              <AuthFields
                onChange={handleChange}
                value={values.bio}
                errors={errors.bio}
                name="bio"
                placeholder=""
              />
              <p className="text-sm text-main-light mt-1">
                tell us about yourself🏠
              </p>
            </div>
          </div>

          <div>
            <Button onClick={(e) => handleSubmit()} className="">
              Come on Onboard
            </Button>
          </div>
        </div>
      </MotionDiv.div>
    </div>
  );
};

export default Onboard;
