import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Ribbon from "../components/Ribbon/Ribbon";
import Filter from "../components/Filter/Filter";
import Advertising from "../components/Advertising/Advertising";

type Props = {};

const Main = (props: Props) => {
  return (
    <>
      <Header />
      <Banner />
      <div className="container">
        <div className="main__ribbon-wrapper">
          <Ribbon />
          <Filter />
          <Advertising />
        </div>
      </div>
    </>
  );
};

export default Main;
