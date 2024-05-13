import React from "react";
import PressReleasesPage from "./PressReleasesPage";
import Footer from "../shared/FooterComponents/FooterPage";
import Header from "../shared/HeaderComponents/HeaderPage";
import PressReleasesBanner from "./PressReleasesBanner";

const index = () => {
  return (
    <>
      <Header />
      <PressReleasesBanner />
      <PressReleasesPage />
      <Footer />
    </>
  );
};

export default index;
