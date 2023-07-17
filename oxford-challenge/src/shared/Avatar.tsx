import React from "react";

type AvatarType = {
  widthClass: string;
  heightClass: string;
  bgImage: string;
  opacityClass?: string;
};

const Avatar = ({ widthClass, heightClass, bgImage, opacityClass = "" }: AvatarType) => {
  return (
    <div
      className={`${widthClass} ${heightClass} relative flex justify-center items-center`}
    >
      <img
        src={bgImage}
        alt="avatar"
        className={`w-[90%] h-[90%] rounded-full relative z-2  bg-cover bg-center`}
      />
      <div
        className={`absolute bg-white z-1 rounded-full inset-0 ${opacityClass}`}
      />
    </div>
  );
};

export default Avatar;
