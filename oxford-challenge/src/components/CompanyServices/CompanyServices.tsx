import React from "react";
import { useSelector } from "react-redux";

import BodyText from "../../shared/Typography/BodyText";
import CirclePoint from "../../shared/CirclePoint";

import { SHOWCASE_IMAGE_DIMENSIONS } from "../../constants/constants";
import { COMPANY_SERVICES_MOCK } from "../../data/data";
import { RootState } from "../../store";

import useCompanyServices from "./useCompanyServices";

const CompanyServices = () => {
  const { handleImageDisplay } = useCompanyServices();
  const { imageData } = useSelector((store: RootState) => store);

  let ServiceImage = (
    <div
      className={`mt-[70px] border border-black`}
      style={{
        ...SHOWCASE_IMAGE_DIMENSIONS,
      }}
    >
      Loading {imageData.title} image!!
    </div>
  );

  if (imageData.hasImage) {
    ServiceImage = (
      <img
        src={imageData.image}
        alt={imageData.title}
        className={`mt-[70px]`}
        style={{
          ...SHOWCASE_IMAGE_DIMENSIONS,
        }}
      />
    );
  }

  return (
    <section className="flex flex-col items-center justify-center mt-[40px]">
      <div className="flex items-center justify-center">
        {COMPANY_SERVICES_MOCK.map(({ id, title }) => (
          <div
            key={id}
            className="flex items-center cursor-pointer mr-[20px]"
            onClick={() => {
              handleImageDisplay(title);
            }}
          >
            <CirclePoint
              highlitedColorClass={
                title === imageData.title ? "bg-purple-50" : ""
              }
            />
            <BodyText
              content={title}
              marginClass="ml-[11px]"
              fontSizeClass="text-xs"
              fontFamilyClass="font-inter-semi-bold"
            />
          </div>
        ))}
      </div>

      {ServiceImage}
    </section>
  );
};

export default CompanyServices;
