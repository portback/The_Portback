"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const imgArr = [
  "/carousel1.png",
  "/carousel4.jpeg",
  "/carousel5.gif",
  "/carousel6.jpeg",
  "/carousel3.png",
  "/carousels1.jpeg",
  "/carousel7.jpeg",
  "/carousels2.jpeg",
  "/carousels3.jpeg",
];

const AuthCarousel = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev + 1) % imgArr.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-[90vh] bg-[#1C2541] relative z-10">
      <Image
        className="object-cover z-0"
        src={imgArr[count]}
        alt="carousel image"
        fill
      />
    </div>
  );
};

export default AuthCarousel;
