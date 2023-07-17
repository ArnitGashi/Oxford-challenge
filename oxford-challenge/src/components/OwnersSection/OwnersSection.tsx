import React from "react";

import OwnerDetails from "../OwnerDetails/OwnerDetails";

import { OWNERS_SECTION } from "../../data/data";

const OwnersSection = () => {
  return (
    <section className="flex justify-around items-center w-[100%] h-[369px] mt-[96px] bg-primary">
      {OWNERS_SECTION.map(({ id, image, title, subTitle, desc }) => (
        <OwnerDetails
          key={id}
          profile={{
            avatarImageClass: image,
            title,
            subTitle,
            desc,
          }}
        />
      ))}
    </section>
  );
};

export default OwnersSection;
