import React from "react";

import ContentWrapper from "../../shared/ContentWrapper";
import BodyText from "../../shared/Typography/BodyText";
import Avatar from "../../shared/Avatar";

import {
  AVATAR_IMG_MOCK,
  BG_IMAGE_MOCK,
  COMMON_USE_CASE_MOCK,
} from "../../data/data";

const CommonUseCase = () => {
  return (
    <div className={"w-[45%] h-[729px] flex items-center pl-[67px] relative"}>
      <img
        className={"absolute left-0 bottom-0 z-1 w-[100%]"}
        src={BG_IMAGE_MOCK}
        alt="Apartament..."
      />
      <div className="flex z-2">
        <div>
          <Avatar
            heightClass="h-[64px]"
            widthClass="w-[64px]"
            bgImage={AVATAR_IMG_MOCK}
            opacityClass="opacity-60"
          />
        </div>
        <div className="ml-[14px] z-2">
          <ContentWrapper widthClass="w-[386px]">
            <BodyText
              content={
                "Hi, I am Interested for an Apartment in Upper East Side"
              }
              fontFamilyClass="font-inter-medium"
              fontSizeClass="text-xs"
              specialClasses="italic"
            />
          </ContentWrapper>
          <ContentWrapper widthClass="w-[386px]" marginClass="mt-[5px]">
            <BodyText
              content={"to have:"}
              fontFamilyClass="font-inter-medium"
              fontSizeClass="text-xs"
            />
            <ul className="mt-[12px]">
              {COMMON_USE_CASE_MOCK.map(({ id, amount, item, icon }) => (
                <li key={id} className="pb-[12px] flex">
                  {icon}
                  <BodyText
                    content={
                      <>
                        <strong>{amount}</strong> {item}
                      </>
                    }
                    fontFamilyClass="font-inter-regular"
                    fontSizeClass="text-sm"
                    marginClass="ml-[6px]"
                  />
                </li>
              ))}
            </ul>
          </ContentWrapper>
        </div>
      </div>
    </div>
  );
};

export default CommonUseCase;
