import React from "react";

import PageLink from "../../shared/Typography/PageLink";
import BodyText from "../../shared/Typography/BodyText";
import Heading from "../../shared/Typography/Heading";
import Button from "../../shared/Button";
import Input from "../../shared/Input";

import { HEADER_TYPE } from "../../constants/constants";

const CustomerReach = () => {
  return (
    <div className="flex flex-col justify-center w-[55%] h-[729px] pl-[100px] pr-[91px]">
      <Heading
        content={
          <span className="text-primary">
            Faster.Better. Easier. <br /> All in{" "}
            <span className="text-secondary">ONE</span>LINE
          </span>
        }
        type={HEADER_TYPE.LARGE}
      />
      <BodyText
        content="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
        marginClass="mt-[20px]"
        fontSizeClass="text-2xl"
        fontFamilyClass="font-inter-regular"
        colorClass="text-blue-300"
      />
      <div className="flex mt-[40px]">
        <Input type="text" placeholder="Enter your email" />
        <Button
          colorClass="bg-secondary"
          marginClass="ml-[12px]"
          text="Start Free Trial"
        />
      </div>
      <BodyText
        content={
          <>
            Start your free trial, no credit card necessary. By providing your
            email, you agree to our{" "}
            <PageLink
              content={"terms of service"}
              specificClasses="underline"
            />
            .
          </>
        }
        fontFamilyClass="font-inter-regular"
        fontSizeClass="text-xs"
        marginClass="mt-[16px]"
        colorClass="text-blue-300"
      />
    </div>
  );
};

export default CustomerReach;
