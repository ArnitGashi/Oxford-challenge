import React from "react";
import Avatar from "./Avatar";
import BodyText from "./Typography/BodyText";
import { ProfileType } from "../sharedTypes/componentTypes";



const Profile = ({
  avatarImageClass,
  title,
  subTitle,
}: ProfileType): JSX.Element => {
  return (
    <div className="flex">
      <Avatar
        heightClass="h-[52px]"
        widthClass="w-[52px]"
        bgImage={avatarImageClass}
      />
      <div className="ml-[16px]">
        <BodyText
          content={title}
          fontSizeClass="text-sm"
          fontFamilyClass="font-inter-medium"
          colorClass="text-white"
        />
        <BodyText
          content={subTitle}
          fontSizeClass="text-sm"
          fontFamilyClass="font-inter-medium"
          colorClass="text-blue-400"
          marginClass="mt-[5px]"
        />
      </div>
    </div>
  );
};

export default Profile;
