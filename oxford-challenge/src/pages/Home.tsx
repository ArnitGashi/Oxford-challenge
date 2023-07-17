import React from "react";

import PlatformServiceDetailSection from "../components/PlatformServiceDetailSection/PlatformServiceDetailSection";
import CompanyServices from "../components/CompanyServices/CompanyServices";
import CustomerReach from "../components/CustomerReach/CustomerReach";
import CommonUseCase from "../components/CommonUseCase/CommonUseCase";
import OwnersSection from "../components/OwnersSection/OwnersSection";
import HeadlineText from "../components/HeadlineText/HeadlineText";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Home = (): JSX.Element => {
  return (
    <div className="bg.gray.50">
      <Header />
      <section className="flex">
        <CustomerReach />
        <CommonUseCase />
      </section>
      <HeadlineText
        marginClass={"mt-[77px]"}
        title="A better way to close deals"
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in, accusamus quisquam."
        }
      />
      <CompanyServices />
      <OwnersSection />
      <HeadlineText
        marginClass={"mt-[62px]"}
        title="All-in-One Platform"
        desc={
          "Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec."
        }
      />
      <PlatformServiceDetailSection />
      <Footer />
    </div>
  );
};

export default Home;
