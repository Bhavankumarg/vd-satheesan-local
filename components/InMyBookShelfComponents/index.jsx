import React from "react";
import InMyBookShelfPage from "./InMyBookShelfPage";
import Header from "../shared/HeaderComponents/HeaderPage";
import Footer from "../shared/FooterComponents/FooterPage";
import InMyBookShelfBanner from "./InMyBookShelfBanner";
const index = () => {
  return (
    <>
      <Header />
      <InMyBookShelfBanner />
      <InMyBookShelfPage />
      <Footer />
    </>
  );
};

export default index;
