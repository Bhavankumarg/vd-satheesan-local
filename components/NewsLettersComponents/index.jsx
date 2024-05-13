import React from "react";
import Header from "../shared/HeaderComponents/HeaderPage";
import Footer from "../shared/FooterComponents/FooterPage";
import NewsLettersPage from "./NewsLettersPage";
import NewsLettersBanner from "./NewsLettersBanner";

const index = () => {
  return (
    <>
      <Header />
      <NewsLettersBanner />
      <NewsLettersPage />
      <Footer />
    </>
  );
};

export default index;
