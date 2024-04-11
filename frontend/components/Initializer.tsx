"use client";

import authStore from "@/stores/authStore";
import React, { useEffect } from "react";

import { redirect } from "next/navigation";

const Initializer = () => {
  const execWindow = authStore((state) => state.initializeWindow);

  useEffect(() => {
    execWindow();

    const isLogged = authStore.getState().isLoggedin;
    const user = authStore.getState().user;

    if (!isLogged) {
      redirect("/login");
    }

    if (!user.onBoarded) {
      redirect("/onboarding");
    }
  }, []);

  return null;
};

export default Initializer;
