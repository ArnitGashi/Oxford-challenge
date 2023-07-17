import React from "react";

type CirclePointType = {
  highlitedColorClass: string;
};
const CirclePoint = ({ highlitedColorClass }: CirclePointType): JSX.Element => {
  return (
    <span className="w-[39px] h-[39px] bg-purple-300 rounded-full flex justify-center items-center">
      <div
        className={`w-[43%] h-[43%]  bg-purple-300  rounded-full border-2 border-white ${highlitedColorClass}`}
      />
    </span>
  );
};

export default CirclePoint;
