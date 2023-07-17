import React from "react";

import PlatformServiceDetail from "../PlatformServiceDetail/PlatformServiceDetail";

import { PLATFORM_SERVICE_MOCK_DATA } from "../../data/data";

const PlatformServiceDetailSection = (): JSX.Element => {
  return (
    <section className="grid grid-cols-4 gap-y-[64px] px-[112px] pt-[38px] pb-[145px]">
      {PLATFORM_SERVICE_MOCK_DATA.map(
        ({ id, title, desc, icon, bgColorClass, iconColorClass }) => (
          <PlatformServiceDetail
            key={id}
            title={title}
            desc={desc}
            icon={icon}
            bgColorClass={bgColorClass}
            iconColorClass={iconColorClass}
          />
        )
      )}
    </section>
  );
};

export default PlatformServiceDetailSection;
