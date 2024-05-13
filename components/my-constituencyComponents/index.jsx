import React from "react";
import Header from "../shared/HeaderComponents";
import Footer from "../shared/FooterComponents";
import MyConsistencyPage from "./MyConsistencyPage";
import MyConstituencyBanner from "./MyConstituencyBanner";

const index = () => {
  return (
    <>
      <Header />
      <MyConstituencyBanner />
      <MyConsistencyPage />
      <Footer />
    </>
  );
};

export default index;
