import React from "react";

type PageLinkType = {
  content: React.ReactNode | string;
  specificClasses?: string;
};

const PageLink = ({ content, specificClasses }: PageLinkType): JSX.Element => {
  return (
    <a
      href="#"
      className={`font-inter-medium text-sm text-gray-100 ${specificClasses}`}
    >
      {content}
    </a>
  );
};

export default PageLink;
