import React from "react";
import { WrappedIconType } from "../sharedTypes/componentTypes";

const WrappedIcon = ({
  bgColorClass,
  iconColorClass,
  icon,
}: WrappedIconType): JSX.Element => {
  const Icon = icon;
  return (
    <div
      className={`w-[48px] h-[48px] flex justify-center items-center rounded-md ${bgColorClass}`}
    >
      <Icon className={`w-[55%] h-[55%] ${iconColorClass}`} />
    </div>
  );
};

export default WrappedIcon;
