import React from "react";

import BodyText from "../../shared/Typography/BodyText";
import Heading from "../../shared/Typography/Heading";
import WrappedIcon from "../../shared/WrappedIcon";

import { WrappedIconType } from "../../sharedTypes/componentTypes";
import { HEADER_TYPE } from "../../constants/constants";

type PlatformServiceDetailType = WrappedIconType & {
  title: string;
  desc: string;
};

const PlatformServiceDetail = ({
  title,
  desc,
  icon,
  bgColorClass,
  iconColorClass,
}: PlatformServiceDetailType): JSX.Element => {
  return (
    <div className="w-[280px]">
      <WrappedIcon
        bgColorClass={bgColorClass}
        iconColorClass={iconColorClass}
        icon={icon}
      />
      <Heading
        content={title}
        type={HEADER_TYPE.SMALL}
        marginClass="mt-[24px]"
      />
      <BodyText
        content={desc}
        fontFamilyClass="font-inter-medium"
        fontSizeClass="text-sm"
        marginClass="mt-[8px]"
        colorClass="text-gray-100"
      />
    </div>
  );
};

export default PlatformServiceDetail;
