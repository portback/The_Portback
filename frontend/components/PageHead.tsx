import Image from "next/image";
import { ImageResponse } from "next/server";
import React, { FC } from "react";

interface Props {
  imgUrl: string;
  title: string;
  width?: string;
  height?: string;
}

const PageHead: FC<Props> = ({ imgUrl, title, width, height }) => {
  return (
    <div className="flex ">
      <div
        className={`${width ? width : "w-[79px]"}  ${
          height ? height : "h-[162px]"
        } relative `}
      >
        <Image src={imgUrl} alt="you" fill />
      </div>
      <p className="text-xl">{title}</p>
    </div>
  );
};

export default PageHead;
