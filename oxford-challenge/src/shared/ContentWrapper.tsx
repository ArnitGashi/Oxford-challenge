import React from "react";

type ContentWrapperType = {
  widthClass?: string;
  marginClass?: string;
  children: React.ReactNode;
};

const ContentWrapper = ({
  widthClass = "",
  marginClass = "",
  children,
}: ContentWrapperType) => {
  return (
    <div className={`rounded-[10px] bg-white p-[16px] ${widthClass} ${marginClass}`}>
      {children}
    </div>
  );
};

export default ContentWrapper;
