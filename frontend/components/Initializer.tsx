"use client";

import authStore from "@/stores/authStore";
import React, { useEffect } from "react";

const Initializer = () => {
  const execWindow = authStore((state) => state.initializeWindow);

  useEffect(() => {
    execWindow();
  }, []);

  return null;
};

export default Initializer;
