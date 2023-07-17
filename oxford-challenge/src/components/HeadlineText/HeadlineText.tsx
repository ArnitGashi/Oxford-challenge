import React from "react";

import BodyText from "../../shared/Typography/BodyText";
import Heading from "../../shared/Typography/Heading";

import { HEADER_TYPE } from "../../constants/constants";

type HeadlineTextType = {
  title: string;
  desc: string;
  marginClass?: string;
};
const HeadlineText = ({ title, desc, marginClass }: HeadlineTextType) => {
  return (
    <div className={`flex flex-col items-center ${marginClass}`}>
      <Heading content={title} type={HEADER_TYPE.MEDIUM} />
      <BodyText
        content={desc}
        fontFamilyClass="font-inter-regular"
        fontSizeClass="text-lg"
        colorClass="text-gray-100"
        specialClasses="w-[50%] text-center"
        marginClass="mt-[16px]"
      />
    </div>
  );
};

export default HeadlineText;
