import React from "react";

import PageLink from "../../shared/Typography/PageLink";
import BodyText from "../../shared/Typography/BodyText";
import Button from "../../shared/Button";

const NAV_LINKS: { [key: string]: string } = {
  SOLUTIONS: "Solutions",
  PRICING: "Pricing",
  CONTACT: "Contact Us",
};

const Header = (): JSX.Element => {
  return (
    <>
      <header className="flex justify-between items-center fixed w-[100%] h-[90px] px-[104px]  bg-white z-100000 shadow">
        <span className="flex">
          <BodyText
            content={
              <>
                <span className="text-secondary">ONE</span>
                <span className="text-primary">LINE</span>
              </>
            }
            fontFamilyClass="font-inter-semi-bold"
            fontSizeClass="text-lg"
          />
          <ul className="flex pl-[43px]">
            {Object.keys(NAV_LINKS).map((key) => (
              <li className="pr-[40px]" key={key}>
                <PageLink content={NAV_LINKS[key]} />
              </li>
            ))}
          </ul>
        </span>
        <span>
          <PageLink content={"Sign In"} />
          <Button
            colorClass="bg-secondary"
            marginClass="ml-[32px]"
            text="Register for Free"
          />
        </span>
      </header>

      <div className="w-[100%] h-[90px] " />
    </>
  );
};

export default Header;
