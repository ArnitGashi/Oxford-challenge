import React from "react";

import BodyText from "../../shared/Typography/BodyText";
import Profile from "../../shared/Profile";

import { ProfileType } from "../../sharedTypes/componentTypes";

type OwnerDetailsType = {
  widthClass?: string;
  profile: ProfileType & {
    desc: string;
  };
};

const OwnerDetails = ({
  profile: { avatarImageClass, title, subTitle, desc },
}: OwnerDetailsType): JSX.Element => {
  return (
    <article className={`flex flex-col items-start w-[544px]`}>
      <BodyText
        content={desc}
        fontFamilyClass="font-inter-medium"
        fontSizeClass="font-base"
        colorClass="text-white"
        marginClass="mb-[60px]"
      />
      <Profile
        avatarImageClass={avatarImageClass}
        title={title}
        subTitle={subTitle}
      />
    </article>
  );
};

export default OwnerDetails;
