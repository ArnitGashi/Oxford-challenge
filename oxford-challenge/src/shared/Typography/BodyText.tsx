import React from "react";

type BodyTextType = {
  content: React.ReactNode | string;
  fontSizeClass: string;
  fontFamilyClass: string;
  colorClass?: string;
  marginClass?: string;
  specialClasses?: string;
};

const BodyText = ({
  content,
  fontSizeClass,
  fontFamilyClass,
  colorClass = "",
  marginClass = "",
  specialClasses = "",
}: BodyTextType): JSX.Element => {
  return (
    <p
      className={`${fontSizeClass} ${fontFamilyClass} ${colorClass} ${marginClass} ${specialClasses}`}
    >
      {content}
    </p>
  );
};

export default BodyText;
