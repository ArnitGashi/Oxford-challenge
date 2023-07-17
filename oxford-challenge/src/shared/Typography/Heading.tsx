import React from "react";
import { HEADER_TYPE } from "../../constants/constants";

type HeadingType = {
  content: React.ReactNode;
  type: "large" | "medium" | "small";
  marginClass?: string;
};

const Heading = ({
  content,
  type,
  marginClass = "",
}: HeadingType): JSX.Element => {
  let ChosenHeading: JSX.Element = <></>;

  switch (type) {
    case HEADER_TYPE.LARGE:
      ChosenHeading = (
        <h1 className={`font-inter-extra-bold text-3xl ${marginClass}`}>
          {content}
        </h1>
      );
      break;
    case HEADER_TYPE.MEDIUM:
      ChosenHeading = (
        <h1 className={`font-inter-extra-bold text-lg ${marginClass}`}>
          {content}
        </h1>
      );
      break;
    case HEADER_TYPE.SMALL:
      ChosenHeading = (
        <h1 className={`font-inter-bold text-base ${marginClass}`}>
          {content}
        </h1>
      );
      break;
    default:
      console.error(
        `${new Date()} Error in Heading.tsx file. Wrong type provided!`
      );
      break;
  }

  return ChosenHeading;
};

export default Heading;
