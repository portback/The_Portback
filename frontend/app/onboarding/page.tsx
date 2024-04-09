"use client";
import { MotionDiv } from "@/common/MotionDiv";
import { Button } from "@/components/ui/button";
import { handleImageInputChange } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const OnboardingPage = () => {
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

        <div className="flex flex-col gap-8 items-center justify-between">
          <h1 className="text-white text-center font-light text-2xl">
            {" "}
            Join The Gang{" "}
          </h1>
          <p className="w-[70%] text-main-light leading-8 tracking-wider  text-center">
            🎉 Welcome to Portback! 🚀 Hey Devs and IT enthusiasts! Get ready
            for the ultimate Dev Hub experience with Portback! It's your go-to
            spot for easy portfolio management and connecting with like-minded
            individuals in the tech world. Here's the deal: 📊 Simplified
            Portfolio Management: Manage your portfolios effortlessly in one
            place. 👥 Connect with Fellow Devs: Have fun and network with other
            developers and IT folks. Excited? We sure are! Let's get started and
            make your experience even better by gathering a bit of info to
            personalize your journey. Ready to dive in? Let's do this! 🔥
          </p>
          <Link href={"/onboarding/onboard"}>
            <Button className="w-fit  px-7 py-3">Get Started</Button>
          </Link>
        </div>
      </MotionDiv.div>
    </div>
  );
};

export default OnboardingPage;
